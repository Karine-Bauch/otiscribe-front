<script setup lang="ts">
import Demand from '../components/Demand.vue';
</script>

<template>
  <div class="px-6 mx-auto max-w-7xl ">
    <div class="mt-6 rounded-lg bg-second-green max-w-7xl mx-auto">
      <div class="px-6 py-24 sm:px-6 sm:py-8 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Otis à votre service !</h2>
          <p class="mx-auto mt-6 max-w-3xl text-lg font-light leading-8 text-xtralight-green">Entrez vos notes<br>
            et je rédige votre compte-rendu<br>
            <span class="text-xl text-white font-semibold">en deux temps trois mouvements</span>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-6 rounded-lg max-w-screen-xl mx-auto">
    <Demand />
  </div>
</template>
