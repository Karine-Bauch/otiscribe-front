<script setup lang="ts">
import { RouterView } from 'vue-router';

import HeaderItem from './components/Header.vue';
import FooterItem from './components/Footer.vue';
</script>

<template>
  <header>
    <HeaderItem />
  </header>

  <RouterView />

  <footer>
    <FooterItem />
  </footer>
</template>
