<template>
  <div v-if="data" class="flex flex-col gap-12 py-24">
    <div class="flex flex-col gap-4">
      <div>
        <h2 class="text-2xl font-bold">
          {{ data.informationTitle }}
        </h2>
        <div class="flex items-center gap-2">
          <p class="text-grey-400">
            {{ data.numberPlayers }} joueurs minimum
          </p>
          <p class="text-grey-400">
            •
          </p>
          <p class="text-grey-400">
            À partir de {{ data.minimalAge }} ans
          </p>
        </div>
      </div>

      <p class="text-grey-500">
        {{ data.informationDescription }}
      </p>
    </div>
    <div v-if="data.galleryImages && data.galleryImages.length > 0" class="border-t border-grey-400 h-[1px] " />
    <div class="flex flex-col gap-4">
      <h3 class="text-2xl font-bold">
        Tarifs
      </h3>
      <div class="w-full overflow-hidden rounded-lg border border-gray-200">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-primary-500">
              <th class="w-1/3 border-b border-gray-200 px-4 py-3 text-left font-medium bg-white" />
              <th class="w-1/3 border-b border-gray-200 px-4 py-3 text-center font-medium text-white">
                Autres jours
              </th>
              <th class="w-1/3 border-b border-gray-200 px-4 py-3 text-center font-medium text-white">
                Samedi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in data.priceGrid" :key="index">
              <td class="border-b border-r border-gray-200 px-4 py-3">
                {{ row[0] }}
              </td>
              <td class="border-b border-r border-gray-200 px-4 py-3 text-center">
                {{ row[1] }}
              </td>
              <td class="border-b border-gray-200 px-4 py-3 text-center">
                {{ row[2] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="data.outside" class="flex items-center gap-2 domicile">
        <Icon name="uil:check-circle" class="text-green-500 text-4xl" />
        <div class="flex flex-col">
          <p class="text-grey-500">
            {{ data.outsideText }}
          </p>
          <p class="text-primary-500">
            <NuxtLink to="/contact" class="underline">
              Demander un devis
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
    <div v-if="data.galleryImages && data.galleryImages.length > 0" class="border-t border-grey-400 h-[1px] priceDivider" />
    <div v-if="data.galleryImages && data.galleryImages.length > 0" class="flex flex-col gap-4">
      <h3 v-if="data.imageSectionTitle" class="text-2xl font-bold">
        {{ data.imageSectionTitle }}
      </h3>

      <div class="grid lg:w-2/3 grid-cols-2 sm:grid-cols-4 gap-12 imageGrid">
        <div v-for="(image, index) in data.galleryImages" :key="index" class="flex flex-col gap-4">
          <NuxtImg :src="image.path" :alt="image.legend" class="w-full h-full object-cover" />
          <p>
            {{ image.legend }}
          </p>
        </div>
      </div>
    </div>
    <div class="border-t border-grey-400 h-[1px]" />
    <div class="flex flex-col gap-12">
      <div v-if="data.conditionsItems && data.conditionsItems.length > 0" class="flex flex-col gap-4 conditionDiv">
        <h4 class="text-2xl font-bold">
          {{ data.conditionsTitle }}
        </h4>
        <ul class="list-disc space-y-2 pl-5">
          <li v-for="(item, index) in data.conditionsItems" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
      <div v-if="data.optionsItems && data.optionsItems.length > 0" class="flex flex-col gap-4 optionDiv">
        <h4 class="text-2xl font-bold">
          {{ data.optionsTitle }}
        </h4>
        <ul class="list-disc space-y-2 pl-5">
          <li v-for="(item, index) in data.optionsItems" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})
</script>