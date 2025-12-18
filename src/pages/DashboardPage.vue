<script setup lang="ts">
import { useRouter } from "vue-router";
import CardCase from "../components/CardCase.vue";
import dataStartCaseRaw from "../data/dataStartCases.json";
import type { LegalCase } from "../types";
const dataStartCase: LegalCase[] = dataStartCaseRaw as LegalCase[];
const router = useRouter();

const handleQuit = () => {
  router.push({ name: "login" });
};
</script>
<template>
  <div class="h-screen flex flex-col">
    <header class="flex justify-between py-2 px-5">
      <div class="flex gap-2 items-center">
        <span class="w-5 h-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              d="M320 64C324.6 64 329.2 65 333.4 66.9L521.8 146.8C543.8 156.1 560.2 177.8 560.1 204C559.6 303.2 518.8 484.7 346.5 567.2C329.8 575.2 310.4 575.2 293.7 567.2C121.3 484.7 80.6 303.2 80.1 204C80 177.8 96.4 156.1 118.4 146.8L306.7 66.9C310.9 65 315.4 64 320 64z"
            /></svg
        ></span>
        <p class="font-semibold text-lg">Legal Suite</p>
      </div>
      <button
        @click="handleQuit"
        class="text-slate-700 flex items-center gap-2 cursor-pointer hover:bg-slate-200 p-2 rounded-md"
      >
        <span class="w-5 h-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              d="M224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L160 96C107 96 64 139 64 192L64 448C64 501 107 544 160 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480C142.3 480 128 465.7 128 448L128 192C128 174.3 142.3 160 160 160L224 160zM566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L438.6 169.3C426.1 156.8 405.8 156.8 393.3 169.3C380.8 181.8 380.8 202.1 393.3 214.6L466.7 288L256 288C238.3 288 224 302.3 224 320C224 337.7 238.3 352 256 352L466.7 352L393.3 425.4C380.8 437.9 380.8 458.2 393.3 470.7C405.8 483.2 426.1 483.2 438.6 470.7L566.6 342.7z"
            />
          </svg>
        </span>
        Cerrar sesion
      </button>
    </header>
    <main
      class="flex-1 min-h-0 bg-slate-100 p-5 flex flex-col gap-5 overflow-y-auto"
    >
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
          <p
            class="cursor-pointer text-blue-600 text-[0.85rem] hover:underline"
          >
            Ver todos los eventos
          </p>
        </div>
        <!-- informacion de cada caso  -->
        <div :key="i" v-for="(data, i) in dataStartCase">
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
    </main>
  </div>
</template>
