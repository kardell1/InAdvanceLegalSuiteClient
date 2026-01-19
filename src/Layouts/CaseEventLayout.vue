<script lang="ts" setup></script>
<template>
     <div class="flex gap-2 flex-col">
          <p class="font-medium text-lg">Detalles de cliente</p>
          <div
               class="bg-white rounded-sm shadow-sm gap-5 p-5 text-[0.90rem] flex justify-between"
          >
               <div class="flex flex-col gap-4 w-full">
                    <!-- Nombre completo -->
                    <div class="flex flex-col gap-1">
                         <label class="text-sm font-medium text-slate-700">
                              Nombre completo
                         </label>
                         <input
                              type="text"
                              class="bg-slate-100 rounded-sm px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                              placeholder="Juan Pérez"
                         />
                    </div>

                    <!-- Correo electrónico -->
                    <div class="flex flex-col gap-1">
                         <label class="text-sm font-medium text-slate-700">
                              Correo electrónico
                         </label>
                         <input
                              type="email"
                              class="bg-slate-100 rounded-sm px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                              placeholder="correo@ejemplo.com"
                         />
                    </div>

                    <!-- Teléfono celular -->
                    <div class="flex flex-col gap-1">
                         <label class="text-sm font-medium text-slate-700">
                              Teléfono celular
                         </label>
                         <input
                              type="tel"
                              class="bg-slate-100 rounded-sm px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                              placeholder="+591 70000000"
                         />
                    </div>

                    <!-- Dirección -->
                    <div class="flex flex-col gap-1">
                         <label class="text-sm font-medium text-slate-700">
                              Dirección
                         </label>
                         <input
                              type="text"
                              class="bg-slate-100 rounded-sm px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                              placeholder="Av. Principal #123"
                         />
                    </div>
               </div>

               <div>
                    <p class="font-medium py-5">Seleccion fecha de inicio</p>
                    <v-date-picker v-model="date" />
               </div>
          </div>
          <div>Detalles del caso</div>
          <div>Pruebas iniciales</div>
     </div>
</template>
