<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'

const route = useRoute()
const router = useRouter()

onMounted(async () => {
  const slug = route.params.slug

  // Convert slug to array in case it's a single string
  const pathParts = Array.isArray(slug) ? slug : [slug]

  if (pathParts[0] === 'short' && pathParts[1]) {
    const key = pathParts[1]

    try {
    //   const response = await  useApi().get(`short/${key}`) // Adjust to your API

      const finalUrl = 'http://localhost:3001/?utm_source=tiktok&utm_medium=iti&utm_campaign=test' as string

      const urlObj = new URL(finalUrl)
      const utmParams = ['utm_source', 'utm_medium', 'utm_campaign']
      utmParams.forEach(param => {
        const value = urlObj.searchParams.get(param)
        if (value) {
          localStorage.setItem(param, value)
        }
      })

      window.location.href = finalUrl
    } catch (err) {
      console.error('Redirect failed:', err)
      router.replace('/') 
    }

  } else {
    router.replace('/')
  }
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">Redirecting...</div>
</template>
