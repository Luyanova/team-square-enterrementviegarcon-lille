<template>
  <section>
    <div class="flex flex-col gap-12 py-36 items-center">
      <h2 class="text-grey-900">FAQs</h2>
      <div class="flex flex-col w-full max-w-3xl">
        <div v-for="(faq, index) in faqs" :key="index" class="border-t border-grey-200 w-full">
          <div class="flex items-center justify-between py-6 cursor-pointer" @click="toggleFaq(index)">
            <h4>{{ faq.question }}</h4>
            <ChevronIcon class="transition-transform duration-300" :class="{ 'rotate-180': faq.isOpen }" />
          </div>
          <div class="grid transition-all duration-500 ease-in-out" :style="{ 'grid-template-rows': faq.isOpen ? '1fr' : '0fr' }">
            <div class="overflow-hidden">
              <p class="text-grey-600 pb-6 pr-6">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
        <div class="border-t border-grey-200 w-full"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Fetch FAQs from Nuxt Content
const { data: fetchedFaqs } = await useAsyncData('faqs', () => {
  return queryCollection('faqs').order('position', 'ASC').all()
});

// Add isOpen state for accordion functionality
const faqs = ref([]);
if (fetchedFaqs.value) {
  faqs.value = fetchedFaqs.value.map(faq => ({ ...faq, isOpen: false }));
}

const toggleFaq = (clickedIndex) => {
  faqs.value.forEach((faq, index) => {
    if (index === clickedIndex) {
      faq.isOpen = !faq.isOpen;
    } else {
      faq.isOpen = false;
    }
  });
};
</script> 