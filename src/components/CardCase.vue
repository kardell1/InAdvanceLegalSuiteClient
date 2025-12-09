<script setup lang="ts">
// recibe codigo de caso
// titulo
// descripcion
// estado
// etapa en la que se encuentra
// id para ver los detalles del caso
// etapas del caso : -> cuantas etapas tiene este caso
// etapa actual del caso : -> en donde se encuentra actualmente
// ultima fecha de actualizacion del caso
</script>
<template>
  <div class="border-2 border-slate-400 rounded-md p-5 flex flex-col gap-2">
    <!-- codigo y estado del caso -->
    <div class="flex justify-between text-[0.90rem] text-slate-600">
      <!-- codigo del caso -->
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-green-500"></span>
        <p class="font-semibold">CS-2024-001</p>
      </div>
      <!-- estado dle caso -->
      <p
        class="py-1 rounded-full bg-green-200 text-green-700 px-2 font-semibold"
      >
        Activo
      </p>
    </div>
    <!-- titulo y descripcion -->
    <p class="font-semibold text-lg">Demanda Laboral - Despido Injustificado</p>
    <p class="text-slate-600 text-[0.90rem]">
      Proceso en curso referente a la liquidación pendiente por parte de
      TechCorp S.A.
    </p>
    <!-- vemos la etapa en la que se encuentra le caso  -->
    <div class="bg-blue-50 p-3 flex flex-col gap-2 rounded-md">
      <div class="flex items-center gap-2 text-slate-500">
        <span class="w-4 h-4">
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"
            />
          </svg>
        </span>
        <p class="font-semibold">Etapa actual 5/5</p>
      </div>
      <div class="flex justify-between text-[0.90rem]">
        <p class="text-blue-600 font-semibold">Audiencia preliminar</p>
        <p class="text-slate-600">Actualizacion : 2025-06-16</p>
      </div>
      <!-- barra de estado  -->
      <span class="h-[5px] w-full bg-green-600 rounded-full"></span>
    </div>
    <button
      class="p-2 bg-blue-700 text-white w-max rounded-md cursor-pointer font-semibold"
    >
      Ver detalles
    </button>
  </div>
</template>
