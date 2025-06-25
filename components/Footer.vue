<template>
  <div class="bg-grey-900 w-full py-20 px-4 lg:px-48">
    <div class="flex flex-col gap-12 mb-20 lg:w-4/5 lg:justify-between">
      <div class="flex flex-col gap-2 mb-4">
        <h2 class="text-grey-100">{{ data?.footerTitle }}</h2>
        <p class="text-grey-100">{{ data?.footerText }}</p>
      </div>
      <div class="flex justify-end">
        <ButtonPrimary to="https://team-square.fr/">Découvrir Team Square</ButtonPrimary>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-12 lg:flex lg:justify-between">
    <div class="flex flex-col gap-6">
      <NuxtLink to="/"><Logo main-color="#faf9fa" /></NuxtLink>
      <p class="text-grey-100 font-bold">Horaires</p>
      <div class="flex flex-col gap-2">
        <p class="text-small text-grey-400">Lundi au Jeudi</p>
        <p class="text-small text-grey-100">9h00 - 21h00</p>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-small text-grey-400">Vendredi</p>
        <p class="text-small text-grey-100">9h00 - 23h00</p>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-small text-grey-400">Samedi</p>
        <p class="text-small text-grey-100">9h00 - 00h00</p>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-small text-grey-400">Dimanche</p>
        <p class="text-small text-grey-100">9h00 - 19h00</p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-10 sm:gap-20 lg:grid-cols-4">
      <div class="flex flex-col gap-6">
        <NuxtLink to="https://team-square.fr/category/activites/" class="text-grey-100 hover-underline !font-bold">Activités</NuxtLink>
        <NuxtLink to="https://team-square.fr/category/activites/jeux-de-tir/" class="text-grey-100 hover-underline text-small">Jeu de tirs</NuxtLink>
        <NuxtLink to="https://team-square.fr/category/activites/activites-physique/" class="text-grey-100 hover-underline text-small">Activités Physiques</NuxtLink>
        <NuxtLink to="https://team-square.fr/category/activites/aventures/" class="text-grey-100 hover-underline text-small">Aventures</NuxtLink>
        <NuxtLink to="https://team-square.fr/category/activites/simulations/" class="text-grey-100 hover-underline text-small">Simulations</NuxtLink>
        <NuxtLink to="https://team-square.fr/category/activites/divertissement/" class="text-grey-100 hover-underline text-small">Divertissements</NuxtLink>
        <NuxtLink to="https://team-square.fr/category/activites/activites-physique/" class="text-grey-100 hover-underline text-small">Sports</NuxtLink>
      </div>
      
      <div class="flex flex-col gap-6">
        <NuxtLink to="https://team-square.fr/pro/" class="text-grey-100 hover-underline !font-bold">Offres de groupe</NuxtLink>
        <NuxtLink to="https://team-square.fr/category/pro/solutions/" class="text-grey-100 hover-underline text-small">Collectivités</NuxtLink>
        <NuxtLink to="https://team-square.fr/category/pro/" class="text-grey-100 hover-underline text-small">Formations</NuxtLink>
        <NuxtLink to="https://team-square.fr/category/packs/" class="text-grey-100 hover-underline text-small">Formations</NuxtLink>
      </div>

      <div class="flex flex-col gap-6">
        <NuxtLink to="https://team-square.fr/events/" class="text-grey-100 hover-underline !font-bold">Évènementiel</NuxtLink>
        <NuxtLink to="https://team-square.fr/category/events/salles/" class="text-grey-100 hover-underline text-small">Salles</NuxtLink>
        <NuxtLink to="https://team-square.fr/events/#targetAdvantages" class="text-grey-100 hover-underline text-small">Services</NuxtLink>
      </div>

      <div class="flex flex-col gap-6">
        <p class="text-grey-100 !font-bold">En savoir plus</p>
        <NuxtLink to="https://team-square.fr/a-propos/" class="text-grey-100 hover-underline text-small">À propos</NuxtLink>
        <NuxtLink to="/blog" class="text-grey-100 hover-underline text-small">Blog</NuxtLink>
      </div>

  
    </div>

    <div class="flex flex-col gap-4">
        <p class="text-grey-100 !font-bold">Contact</p>
        <NuxtLink to="tel:0374830202" class="text-grey-100 hover-underline text-small">03 74 83 02 02</NuxtLink>
        <NuxtLink to="/contact" class="text-grey-100 hover-underline text-small">Nous contacter</NuxtLink>
        <NuxtLink to="https://g.co/kgs/fk2V2Sb" class="text-grey-100 hover-underline text-small">3 Chemin de Bois Bernard,<br> 62110 Hénin-Beaumont</NuxtLink>
      </div>
</div>

    <div class="flex flex-col gap-12 py-20">   
      <p class="text-grey-100 text-small">© 2025 Team Square. Tous droits réservés.</p>
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-8 items-end">
        <NuxtLink to="/legal/cgv" class="text-grey-100 hover-underline text-small">CGV</NuxtLink>
        <NuxtLink to="/legal/protection-donnees" class="text-grey-100 hover-underline text-small">Protections des données personelles</NuxtLink>
        <NuxtLink to="/legal/mentions-legales" class="text-grey-100 hover-underline text-small">Mentions légales</NuxtLink>
      </div>
    </div>

    <div class="flex gap-4">
      <NuxtLink to="https://www.facebook.com/search/top?q=team%20square%20events" target="_blank" aria-label="Facebook">
        <IconFacebook :size="48" color="#FAF9FA" />
      </NuxtLink>
      <NuxtLink to="https://www.instagram.com/teamsquareeventshenin/" target="_blank" aria-label="Instagram">
        <IconInstagram :size="48" color="#FAF9FA" />
      </NuxtLink>
      <NuxtLink to="https://www.tiktok.com/@teamsquareloisirs?lang=fr" target="_blank" aria-label="Tiktok">
        <IconTiktok :size="40" color="#FAF9FA" />
      </NuxtLink>
      <NuxtLink to="https://www.linkedin.com/company/team-square-events/" target="_blank" aria-label="Linkedin">
        <IconLinkedin :size="48" color="#FAF9FA" />
      </NuxtLink>
      <NuxtLink to="https://www.youtube.com/@teamsquare1585" target="_blank" aria-label="Youtube">
        <IconYoutube :size="48" color="#FAF9FA" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data } = await useAsyncData('home-footer', () => {
  return queryCollection('content').path('/').first()
})
</script>