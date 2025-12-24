<script setup lang="ts">
import CardCase from "../components/CardCase.vue";
import dataStartCaseRaw from "../data/dataStartCases.json";
import type { LegalCase } from "../types";
const dataStartCase: LegalCase[] = dataStartCaseRaw as LegalCase[];
</script>
<template>
  <!-- titulo y descripcion de la seccion -->
  <div>
    <p class="text-2xl font-bold">Bienvenido, Carlos Mendoza</p>
    <p class="text-[0.90rem] text-slate-600">
      Resumen de tus procesos legales vigentes
    </p>
  </div>
  <!-- los eventos actuales del cliente  -->
  <div class="bg-white p-5 rounded-md shadow-sm flex flex-col gap-2">
    <!-- titulo y boton para ver los demas casos -->
    <div class="flex justify-between">
      <!-- titulo de la sub-seccion   -->
      <div class="flex items-center gap-2">
        <span class="w-6 h-6 text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            fill="currentColor"
          >
            <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              d="M128 160C128 142.3 142.3 128 160 128L320 128C337.7 128 352 142.3 352 160L352 448L448 448L448 320C448 302.3 462.3 288 480 288L544 288C561.7 288 576 302.3 576 320C576 337.7 561.7 352 544 352L512 352L512 480C512 497.7 497.7 512 480 512L320 512C302.3 512 288 497.7 288 480L288 192L192 192L192 320C192 337.7 177.7 352 160 352L96 352C78.3 352 64 337.7 64 320C64 302.3 78.3 288 96 288L128 288L128 160z"
            />
          </svg>
        </span>
        <p class="font-semibold">Actividad Reciente</p>
      </div>
      <p class="cursor-pointer text-blue-600 text-[0.85rem] hover:underline">
        Ver todos los eventos
      </p>
    </div>
    <!-- informacion de cada caso  -->
    <div class="" :key="i" v-for="(data, i) in dataStartCase">
      <CardCase
        :caseDescription="data.caseDescription"
        :code="data.code"
        :currentStage="data.currentStage"
        :stages="data.stages"
        :tag="data.tags"
        :title="data.title"
      />
    </div>
  </div>
</template>
