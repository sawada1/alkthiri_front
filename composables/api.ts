import { useRuntimeConfig } from "#app";
import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from "axios";

// Global API client instance
let apiClient: AxiosInstance | null = null;

// Response cache
const cache = new Map<string, { data: any; timestamp: number }>();

export function useApi() {
  const { $i18n } = useNuxtApp();
  const config = useRuntimeConfig();

  // Initialize Axios only once
  if (!apiClient) {
    apiClient = axios.create({
      baseURL:"https://admin.alkathirimotors.com.sa/api/",
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000, // Set a timeout
    });

    // Request Interceptor
    apiClient.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const locale = $i18n.locale.value;
        config.headers["Content-Language"] = locale === "en" ? "en" : "ar";

        // Add Authorization Token if exists
        // const token = localStorage.getItem("token");
        // if (token) {
        //   config.headers["Authorization"] = `Bearer ${token}`;
        // }

        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response Interceptor
    apiClient.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error) => {
        if (error.response) {
          console.error(`API Error: ${error.response.status} - ${error.response.data.message}`);

          // Handle unauthorized requests (e.g., token expired)
          // if (error.response.status === 401) {
          //   localStorage.removeItem("token"); // Clear token
          //   navigateTo("/login"); // Redirect to login page
          // }
        } else {
          console.error(`API Error: ${error.message}`);
        }
        return Promise.reject(error);
      }
    );
  }

  // Function to check cache
  const checkCache = (url: string, maxAge: number = 10000) => {
    const cached = cache.get(url);
    if (cached && Date.now() - cached.timestamp < maxAge) {
      return cached.data;
    }
    return null;
  };

  return {
    get: async <T>(url: string, config?: AxiosRequestConfig, cacheTime = 10000): Promise<AxiosResponse<T>> => {
      const cachedData = checkCache(url, cacheTime);
      if (cachedData) return cachedData;
    
      const response = await apiClient!.get<T>(url, config);
      cache.set(url, { data: response, timestamp: Date.now() });
      return response; // Return full response instead of response.data
    },

    post: async <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
      const response = await apiClient!.post<T>(url, data, config);
      return response;
    },

    put: async <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
      const response = await apiClient!.put<T>(url, data, config);
      return response;
    },

    delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
      const response = await apiClient!.delete<T>(url, config);
      return response;
    },
  };
}