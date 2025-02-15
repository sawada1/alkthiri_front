import { useRuntimeConfig , navigateTo } from "#app";
import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse , InternalAxiosRequestConfig  } from 'axios';
export function useApi(){
  const { $i18n } = useNuxtApp();
    const config = useRuntimeConfig();
    // Create Axios instance with default configuration
    const apiClient: AxiosInstance = axios.create({
      baseURL:'https://admin.alkathirimotors.com.sa/api/',
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000, // Set a timeout
    });
    
    // Interceptors for request and response
    apiClient.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const locale = $i18n.locale.value;
        config.headers['Content-Language'] = locale === 'en' ? 'en' : 'ar';
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    
    apiClient.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => {
        // Handle errors globally
    
    
        if (error.response) {
          console.error(`API Error: ${error.response.status} - ${error.response.data.message}`);
        } else {
          console.error(`API Error: ${error.message}`);
        }
        return Promise.reject(error);
      }
    );

    return{
        get: async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
          const response = await apiClient.get<T>(url, config);
          return response;
        },
        post: async <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
          const response = await apiClient.post<T>(url, data, config);
          return response;
        },
        put: async <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
          const response = await apiClient.put<T>(url, data, config);
          return response;
        },
        delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
          const response = await apiClient.delete<T>(url, config);
          return response;
        },

    }

}