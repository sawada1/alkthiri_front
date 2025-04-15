<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'

const route = useRoute()
const router = useRouter()

onMounted(async () => {
  const key = route.params.key as string

  if (!key) {
    router.replace('/')
    return
  }

  try {
    // Make the API call to get the final URL
    // const response = await $fetch(`/api/short/${key}`) // Replace with your API
    const finalUrl = 'https://alkthiri-front.vercel.app/brands?utm_source=tiktok&utm_medium=iti&utm_campaign=testtt' as string

    // Extract and save UTM parameters
    const urlObj = new URL(finalUrl)
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign']

    utmParams.forEach(param => {
      const value = urlObj.searchParams.get(param)
      if (value) {
        localStorage.setItem(param, value)
      }
    })

    // Redirect to the final URL
    window.location.href = finalUrl
  } catch (err) {
    console.error('Redirect failed:', err)
    router.replace('/')
  }
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">Redirecting...</div>
</template>
