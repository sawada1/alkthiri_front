<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'

const route = useRoute()
const router = useRouter()
const cacheUtmParams = (params: string[], urlObj: URL) => {
  const expiration = Date.now() + 4 * 24 * 60 * 60 * 1000 // 4 days in ms
  const data: Record<string, string | number> = { expires: expiration }

  params.forEach(param => {
    const value = urlObj.searchParams.get(param)
    if (value) {
      data[param] = value
    }
  })

  localStorage.setItem('utm_cache', JSON.stringify(data))
}
onMounted(async () => {
  const key = route.params.key as string

  if (!key) {
    router.replace('/')
    return
  }

  try {
    // Make the API call to get the final URL
    const response = await useApi().post(`url` , {shorten_code: key}) // Replace with your API
    const finalUrl = response.data?.website_url_new as string

    // Extract and save UTM parameters
    const urlObj = new URL(finalUrl)
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign']

    cacheUtmParams(utmParams, urlObj);

    // Redirect to the final URL
    window.location.href = finalUrl
  } catch (err) {
    console.error('Redirect failed:', err)
    router.replace('/')
  }
});


</script>

<template>
  <div class="min-h-screen flex items-center justify-center">Redirecting...</div>
</template>
