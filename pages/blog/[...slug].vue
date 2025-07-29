<template>
  <div class="container mx-auto px-4 py-12">
    <article v-if="post" class="prose max-w-4xl mx-auto">
      <NuxtImg v-if="post.coverImage" :src="post.coverImage" :alt="post.title" class="w-full h-96 object-cover rounded-lg mb-8" />
      <h1>{{ post.title }}</h1>
      <p class="lead">{{ post.description }}</p>
      <p class="text-sm text-grey-500 mb-8">{{ formatDate(post.date) }}</p>
      <ContentRenderer :value="post" class="prose max-w-4xl mx-auto [&_p]:mb-10"/>
    </article>
    <div v-else>
      <p>Article non trouvé.</p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: post } = await useAsyncData(`blog-${route.path}`, async () => {
  const article = await queryCollection('blog').path(route.path).first();
  
  if (article && article.date && new Date(article.date) > new Date()) {
    return null;
  }
  
  return article;
});

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const siteConfig = useSiteConfig()

// SEO Metadata
  useSeoMeta({
    title: () => `${post.value.title} - Team Square`,
    description: () => post.value.summarySeo || post.value.description,
    ogTitle: () => `${post.value.title} - Team Square`,
    ogDescription: () => post.value.summarySeo || post.value.description,
    ogImage: () => `${siteConfig.url}${post.value.coverImage}`,
    twitterCard: 'summary_large_image',
  });

</script> 

<style scoped>
p {
  margin-bottom: 1rem;
}
</style>