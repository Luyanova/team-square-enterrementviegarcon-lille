<template>
  <section class="py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8">Derniers articles du blog</h2>
      <div v-if="posts && posts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="post in posts" :key="post.id" class="border border-grey-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <NuxtLink :to="post.path">
            <NuxtImg :src="post.coverImage" :alt="post.title" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{{ post.title }}</h3>
              <p class="text-grey-600 text-sm">{{ post.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="text-center mt-12">
        <NuxtLink to="/blog">
            <ButtonPrimary>Voir tous les articles</ButtonPrimary>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: posts } = await useAsyncData('latest-blog-posts', () => {
  return queryCollection('blog').order('date', 'DESC').limit(3).all();
});
</script> 