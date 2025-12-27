<script setup lang="ts">
import { useRouter } from "vue-router";
import _returnColorCardCase from "../helper/returnColorCardCase";
import _returnIconCardCase from "../helper/returnIconCardCase";
import type { CaseStage } from "../types";
defineProps<{
   identify: string;
   title: string;
   stages: CaseStage[];
   currentStage: string; // Name of the current stage
   caseDescription: string; // General case description
   tag: string[];
   code: string;
}>();
const returnColorCardCase = _returnColorCardCase;
const returnIconCardCase = _returnIconCardCase;

const router = useRouter();
const handleDetails = (id: string) => {
   router.push({ name: "details", params: { id } });
};
</script>
<template>
   <div class="border-2 border-slate-400 rounded-md p-5 flex flex-col gap-2">
      <!-- codigo y estado del caso-->
      <div class="flex justify-between text-[0.90rem] text-slate-600">
         <!-- codigo del caso -->
         <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-green-500"></span>
            <p class="font-semibold">Expediente: {{ code }} - {{ tag[0] }}</p>
         </div>
         <p
            class="text-green-700 px-2 font-semibold py-1 bg-green-100 rounded-full border border-green-200 shadow-2xs"
         >
            Activo
         </p>
      </div>
      <!-- titulo y descripcion -->
      <p class="font-semibold text-lg">{{ title }}</p>
      <p class="text-slate-600 text-[0.90rem]">
         {{ caseDescription }}
      </p>
      <!-- vemos la etapa en la que se encuentra le caso  -->
      <div class="bg-blue-50 p-3 flex flex-col gap-2 rounded-md">
         <!-- mapeo de los casos  -->

         <div
            class="flex gap-5 justify-between flex-wrap max-sm:justify-center"
         >
            <div
               :key="i"
               v-for="(stage, i) in stages"
               :class="`flex flex-col items-center ${returnColorCardCase(stage.status, 'text')} `"
            >
               <div
                  :class="`w-15 h-15 rounded-full p-1  ${returnColorCardCase(stage.status, 'bg')} `"
                  v-html="returnIconCardCase(stage.status)"
               ></div>
               <p class="font-semibold">
                  {{ stage.title }}
               </p>
               <p>{{ stage.date }}</p>
            </div>
         </div>
      </div>
      <button
         @click="handleDetails(identify)"
         class="p-2 bg-blue-700 text-white w-max rounded-md cursor-pointer font-semibold"
      >
         Ver detalles
      </button>
   </div>
</template>
