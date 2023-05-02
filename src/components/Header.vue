<template>
  <div class="max-sm:hidden bg-white px-6 sm:py-2 lg:px-8 pb-4 mt-4">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-2xl font-semibold tracking-tight text-main-green sm:text-4xl">OtiScribe</h2>
      <h3 class="font-light italic text-sm">Vos compte-rendus en 1 clic</h3>
    </div>
  </div>
  <Disclosure as="nav" class="bg-white" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 justify-between">
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-second-green">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start ml-3">
          <a href="/" class="flex flex-shrink-0 items-center">
            <img class="block h-8 w-auto lg:hidden" src="../assets/le-scribe-assis-2.png" alt="Your Company" href=""/>
            <img class="hidden h-8 w-auto lg:block" src="../assets/le-scribe-assis-2.png" alt="Your Company" />
          </a>
          <div class="sm:hidden bg-white px-6 py- sm:py-4 lg:px-8">
            <div class="mx-auto max-w-2xl">
              <h2 class="text-3xl font-semibold tracking-tight text-main-green sm:text-2xl">OtiScribe</h2>
              <h3 class="font-light italic text-xs">Vos compte-rendus en 1 clic</h3>
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <!-- Current: "border-second-green text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <RouterLink v-for="item in navigation" :key="item.id" :to="item.href" class="inline-flex items-center px-2 pt-1 text-md hover:font-bold text-gray-500 hover:bg-gray-50 hover:border-b-3 hover:border-gray-400" >{{ item.name }}</RouterLink>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 pb-4 pt-2">
        <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
        <RouterLink v-for="item in navigation" :key="item.id" :to="item.href" class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500">{{ item.name }}</RouterLink>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { RouterLink } from 'vue-router';

let navigation = [
  { id: 0, name: 'Home', href: '/', current: true },
  { id: 1, name: 'Otis En Action', href: '/otis', current: false },
  { id: 2, name: 'Contact', href: '/contact', current: false },
];
</script>
