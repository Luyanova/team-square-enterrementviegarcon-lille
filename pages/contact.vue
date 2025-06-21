<template>
    <div class="px-4 lg:px-48">

        <div class="py-16">
            <h2>Contact</h2>
            <p>Nous sommes à votre écoute pour répondre à vos questions et vous aider dans votre projet. Ou au <a href="tel:0374830202" class="text-primary-500 underline">03 74 83 02 02</a></p>
            <ContactForm />
        </div>
    </div>
</template>

<script setup>
const { data: seoData } = await useAsyncData('seo-contact', () => {
  return queryContent('seo').first()
})

const siteConfig = useSiteConfig()

useSeoMeta({
  title: () => seoData.value?.contactPageTitle || 'Contact - Team Square',
  description: () => seoData.value?.contactPageDescription || 'Contactez-nous pour toute question ou demande de devis.',
  ogTitle: () => seoData.value?.contactPageTitle || 'Contact - Team Square',
  ogDescription: () => seoData.value?.contactPageDescription || 'Contactez-nous pour toute question ou demande de devis.',
  ogImage: () => `${siteConfig.url}${seoData.value?.contactPageImage}`,
  twitterCard: 'summary_large_image'
})
</script>