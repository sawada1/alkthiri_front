// middleware/short.global.ts
import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'

export default defineNuxtRouteMiddleware(async (to) => {
  const slug = to.params.slug
  const pathParts = Array.isArray(slug) ? slug : [slug]

  if (pathParts[0] === 'short' && pathParts[1]) {
    const key = pathParts[1]

    try {
      // TODO: Replace with your actual API call
      // const response = await $fetch(`/api/short/${key}`) 
      const finalUrl = 'https://alkthiri-front.vercel.app/?utm_source=tiktok&utm_medium=iti&utm_campaign=test'

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
      return navigateTo('/')
    }
  }
})
