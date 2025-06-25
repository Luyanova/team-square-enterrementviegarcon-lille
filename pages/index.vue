<template>
  <div class="px-4 lg:px-48">
    <HeroSection />
    <InformationSection :data="data" />
    <FaqSection />
    <BlogSection />
    <CtaSection />
  </div>
</template>

<script setup>
const { data } = await useAsyncData('home', () => {
  return queryCollection('content').path('/').first()
})

const siteConfig = useSiteConfig()

useSeoMeta({
  title: () => data.value?.titleSeo || data.value?.title,
  description: () => data.value?.descriptionSeo || data.value?.description,
  ogTitle: () => data.value?.titleSeo || data.value?.title,
  ogDescription: () => data.value?.descriptionSeo || data.value?.description,
  ogImage: () => `${siteConfig.url}${data.value?.image}`,
  twitterCard: 'summary_large_image'
})
</script>
