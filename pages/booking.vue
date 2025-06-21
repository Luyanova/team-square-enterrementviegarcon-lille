<template>
    <div class="py-16 px-4 lg:px-16">
        <h2 class="font-bold">Réserver</h2>
        <p class=" text-grey-500">Préparez votre prochaine aventure avec Team Square !</p>
        <div class="py-16">
            <BookingWidget />
        </div>
    </div>
</template>

<script setup>
const { data: seoData } = await useAsyncData('seo-booking', () => {
  return queryContent('seo').first()
})

const siteConfig = useSiteConfig()

useSeoMeta({
  title: () => seoData.value?.bookingPageTitle || 'Réservation - Team Square',
  description: () => seoData.value?.bookingPageDescription || 'Réservez votre activité chez Team Square.',
  ogTitle: () => seoData.value?.bookingPageTitle || 'Réservation - Team Square',
  ogDescription: () => seoData.value?.bookingPageDescription || 'Réservez votre activité chez Team Square.',
  ogImage: () => `${siteConfig.url}${seoData.value?.bookingPageImage}`,
  twitterCard: 'summary_large_image'
})
</script>