<template>
  <footer class="bg-white border-t-2 border-xtralight-green">
    <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-12 lg:px-8">
      <nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
        <div v-for="item in navigation.main" :key="item.name" class="pb-6">
          <a :href="item.href" class="text-sm leading-6 text-gray-500 hover:text-main-green" :target="item.target" :rel="item.rel">{{ item.name }}</a>
        </div>
      </nav>
      <div class="mt-6 flex justify-center space-x-10">
        <a v-for="item in navigation.social" :key="item.name" :href="item.href"
          class="text-second-green hover:text-main-green" target="_blank" rel="noopener noreferrer">
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <p class="mt-6 text-center text-xs leading-5 text-gray-400">&copy; 2023 OtiScribe - All rights reserved.</p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { defineComponent, h } from 'vue';
import { EnvelopeIcon } from '@heroicons/vue/24/solid';

const navigation = {
  main: [
    { name: 'Contact', href: 'mailto:karine.bauch.web@gmail.com', target: '_blank', rel: 'noopener noreferrer' },
    { name: 'Restez informé', href: '#' }, // Renvoie vers inscription newsletetr - landing page
    { name: 'Mentions Légales', href: '#' }, // Page mentions légales
    { name: 'GCV', href: '#' }, // Page GCV
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/karine-bauch/',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 448 512' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
            }),
            h('path', {
              'fill-rule': 'evenodd',
              d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
            }),
          ]),
      }),
    },
    {
      name: 'Email',
      href: 'mailto:karine.bauch.web@gmail.com',
      icon: EnvelopeIcon,
    },
  ],
};
</script>