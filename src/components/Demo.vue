<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl md:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
        <div class="px-6 md:px-0 lg:pr-4 lg:pt-4">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <!-- <h2 class="text-base font-semibold leading-7 text-second-green">Deploy faster</h2> -->
            <p class="mt-2 text-3xl font-bold tracking-tight text-main-green sm:text-4xl">Mais comment ça marche ?</p>
            <p class="mt-6 text-lg leading-8 text-gray-600">Je transforme vos notes en compte-rendu adapté à votre métier, et explique les termes techniques pour vos clients.</p>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold text-main-green">
                  <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-second-green" aria-hidden="true" />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="my-auto sm:px-6 lg:px-0">
          <div class="rounded-lg py-60 text-white text-center bg-second-green h-auto">Vidéo Démo</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PencilSquareIcon, CheckIcon, DocumentTextIcon, ArrowRightCircleIcon } from '@heroicons/vue/20/solid';

const features = [
  {
    name: 'Mes notes :',
    description:
      'Je saisis mes notes directement dans l\'application, sans faire aucune phrase, juste en entrant des mots-clés et informations nécessaires.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Je valide :',
    description: 'Je vérifie que toutes les informations utiles sont bien présentes et je valide l\'envoi.',
    icon: CheckIcon,
  },
  {
    name: 'Mon compte-rendu :',
    description: 'Au bout de quelques minutes, le compte-rendu avec les explications techniques s\'affiche à l\'écran, prêt à être copié',
    icon: DocumentTextIcon,
  },
  {
    name: 'Quels métiers disponibles :',
    description: 'La première application disponible est à destinaiton des vétérinaires, et c\'est cette version qui est présentée sur cette démo. D\'autres métiers seront disponibles très prochainement.',
    icon: ArrowRightCircleIcon,
  },
];
</script>