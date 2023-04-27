<template>
  <form class="p-6 mx-auto">
    <label for="email" class="block text-lg font-medium text-main-green">Vos notes</label>
    <div class="mt-2">
      <textarea v-model="notes" type="text" name="prompt" id="email" class="block p-4 w-full lg:h-44 max-lg:h-52 max-sm:h-72 border border-second-green rounded-md shadow-md shadow-xtralight-green sm:text-sm resize-y placeholder:text-slate-400 focus:outline-none" placeholder="Entrez les données nécessaires au compte-rendu, ainsi que les les éventuels calculs et extrapolations que vous voulez voir développer. &#10;Exemple pour des KPIs d'un post RS : &#10;Post LinkedIn 15/03/2023&#10;Impressions 14569&#10;Réactions 568&#10;Commentaires 152&#10;Calcul du taux de conversion et autres informations pertinentes" autofocus/>
    </div>
    <div class="flex flex-col items-end">
      <button type="button" class="max-sm:mx-auto sm:mr-7 mt-5 rounded-md border border-transparent bg-second-green px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-main-green focus:bg-main-green" @click="request">Envoyer</button>
    </div>
  </form>

  <Loader v-if="isLoading" />
  <ReportResult v-if="isSent" :result="result" :notes="notes"/>
  
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Loader from '@/components/Loader.vue';
import ReportResult from './ReportResult.vue';
import axios from 'axios';

// For deployement
// const URL = '';

// For local
// const URL = 'http://localhost:3000';

let isSent = ref(false);
let isLoading = ref(false);

let notes = ref('');
let result = ref('');

const request = async() => {

  isLoading.value = true;

  // const response = await axios.post(`${URL}`, {
  //   infos: notes.value
  // });

  isLoading.value = false;
  isSent.value = true;

  result.value = ''; // response.data.choices[0].text;

  /*
  const ipAddress = await axios.get('https://api.ipify.org?format=json');

  const dataToSave = {
    inputData: notes.value,
    outputData: result.value,
    ipAddress: ipAddress.data.ip
  };

  // console.log(dataToSave);

  const dataToSend = await axios.post(`${URL}/reports-datas/create`, dataToSave);

  return dataToSend;
  */

};
</script>