<template>
  <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <h2 class="text-lg font-medium text-main-green font-bold">Votre compte-rendu</h2>
    <div class="relative mt-2 p-3 outline outline-second-green rounded-md">

        <!-- <div ref="textToCopy" class="p-4 bg-gray-200">Texte à copier</div> -->
      <button class="absolute right-5 top-5 rounded-md border border-transparent bg-second-green px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-main-green focus:outline-none copy-btn" @click="copyToClipboard">Copier</button>
      <div ref="textToCopy">
        {{ result }}

        <p class="text-base font-light italic text-gray-500">
          <div>______</div><br>
          <span class="italic text-bold underline">Avertissement :</span> <br>
          Les définitions fournies ont été générées automatiquement et peuvent contenir des erreurs. <br>
          Toute incompréhension ou doute sur leur signification doit faire l’objet d'une vérification ou d’une demande auprès du professionnel concerné.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  // import ClipboardJS from 'clipboard';

  const props = defineProps({
    result: {
      type: String,
      required: true,
    },
  });

  // const textToCopy = ref<HTMLElement | null>(null);

  // const copyToClipboard = () => {
  //   const clipboard = new ClipboardJS('.copy-btn', {
  //     text: () => {
  //       return textToCopy.value?.innerText || '';
  //     },
  //   });
  //   clipboard.on('success', () => {
  //     alert('Le texte a été coppié dans le presse-papier');
  //   });
  //   clipboard.on('error', () => {
  //     alert('Impossible de copier le texte dans le presse-papier. Veuillez le faire manuellement.');
  //   });
  // };
  
</script>