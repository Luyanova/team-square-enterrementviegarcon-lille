<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold mb-8">Notre Blog</h1>
    <div v-if="posts && posts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="post in posts" :key="post.id" class="border border-grey-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <NuxtLink :to="post.path">
          <NuxtImg :src="post.coverImage" :alt="post.title" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
            <p class="text-grey-600 mb-4">{{ post.description }}</p>
            <p class="text-sm text-grey-500">{{ formatDate(post.date) }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div v-else>
      <p>Aucun article de blog trouvé.</p>
    </div>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData('blog-posts', () => {
  return queryCollection('blog').order('date', 'DESC').all();
});

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const { data: seoData } = await useAsyncData('seo-blog', () => {
  return queryContent('seo').first()
})

const siteConfig = useSiteConfig()

useSeoMeta({
  title: () => seoData.value?.blogIndexPageTitle || 'Blog - Team Square',
  description: () => seoData.value?.blogIndexPageDescription || 'Découvrez nos derniers articles et actualités.',
  ogTitle: () => seoData.value?.blogIndexPageTitle || 'Blog - Team Square',
  ogDescription: () => seoData.value?.blogIndexPageDescription || 'Découvrez nos derniers articles et actualités.',
  ogImage: () => `${siteConfig.url}${seoData.value?.blogIndexPageImage}`,
  twitterCard: 'summary_large_image'
})
</script> 