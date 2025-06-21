<template>
    <nav class="navbar px-4 py-2 bg-grey-50 border-b border-grey-200 lg:px-16">
        <div class="flex items-center justify-between">
            <NuxtLink to="/">
                <Logo />
            </NuxtLink>
            <!-- Desktop Nav -->
            <div class="hidden lg:flex items-center gap-4">
                <ButtonSecondary to="/contact">
                    Contact
                </ButtonSecondary>
                <ButtonPrimary to="/booking">
                    Réserver
                </ButtonPrimary>
            </div>
            <!-- Burger Icon for Mobile/Tablet -->
            <button
                class="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative z-30"
                @click="isOpen = !isOpen"
                aria-label="Toggle menu"
            >
                <span
                    :class="[
                        'block h-0.5 w-6 bg-grey-900 rounded transition-all duration-300',
                        isOpen ? 'rotate-45 translate-y-1' : ''
                    ]"
                ></span>
                <span
                    :class="[
                        'block h-0.5 w-6 bg-grey-900 rounded my-1 transition-all duration-300',
                        isOpen ? 'opacity-0' : ''
                    ]"
                ></span>
                <span
                    :class="[
                        'block h-0.5 w-6 bg-grey-900 rounded transition-all duration-300',
                        isOpen ? '-rotate-45 -translate-y-2' : ''
                    ]"
                ></span>
            </button>
        </div>
        <!-- Mobile/Tablet Menu -->
        <transition name="fade">
            <div
                v-if="isOpen"
                class="fixed inset-0 bg-grey-50/95 flex flex-col items-center justify-center gap-8 z-20 lg:hidden"
                @click.self="isOpen = false"
            >
                <NuxtLink to="/" class="text-grey-900 text-2xl font-bold" @click="isOpen = false">Accueil</NuxtLink>
                <NuxtLink to="#contact" class="text-grey-900 text-2xl font-bold" @click="isOpen = false">Contact</NuxtLink>
                <NuxtLink to="/booking" class="text-grey-900 text-2xl font-bold" @click="isOpen = false">Réserver</NuxtLink>
            </div>
        </transition>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>
