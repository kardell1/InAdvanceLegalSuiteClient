<script setup lang="ts">
import {
     Check,
     CalendarClock,
     FileMinus,
     Image,
     ImagePlay,
     Download,
} from "lucide-vue-next";
import { useRouter } from "vue-router";
const historics = [
     {
          title: "Demanda inicial presentada",
          ubication: "Corte Suprema de La Paz",
          status: "Finalizado",
          icon: Check,
     },
     {
          title: "Audiencia preliminar",
          ubication: "Sala 402",
          status: "Finalizado",
          icon: Check,
     },
     {
          title: "Presentación de pruebas",
          ubication: "Juzgado Primero Civil",
          status: "Finalizado",
          icon: Check,
     },
     {
          title: "Audiencia de alegatos",
          ubication: "Sala de Audiencias Nº 3",
          status: "Finalizado",
          icon: Check,
     },
     {
          title: "Emisión de sentencia",
          ubication: "Corte Superior de Justicia",
          status: "En proceso",
          icon: CalendarClock,
     },
];

const headers = ["Archivo", "Fecha", "Acciones"];
const cases = [
     {
          name: "Demanda inicial",
          date: "12-octubre-2026",
          icon: FileMinus,
          bg: "text-blue-500",
     },
     {
          name: "Prueba de violencia ",
          date: "20-octubre-2026",
          icon: Image,
          bg: "text-green-500",
     },
     {
          name: "Video probatorio",
          date: "31-octubre-2026",
          icon: ImagePlay,
          bg: "text-yellow-600",
     },
     {
          name: "Informe de veredicto",
          date: "1-diciembre-2026",
          icon: FileMinus,
          bg: "text-blue-500",
     },
];

const router = useRouter();
const handleReturn = () => {
     router.back();
};
</script>
<template>
     <!-- titulo y descripcion de la seccion -->

     <div class="flex items-center justify-between">
          <div>
               <p class="text-3xl font-bold py-3">Garcia vs YPFB</p>
               <p class="text-slate-500 text-[0.80rem]">
                    Expediente #CS-2024-001 - Registrado el 12 de Enero, 2025
               </p>
          </div>
          <button
               @click="handleReturn"
               class="cursor-pointer bg-blue-600 text-white p-1 rounded-sm font-medium"
          >
               Regresar
          </button>
     </div>
     <div class="flex gap-2 text-[0.90rem]">
          <div class="flex-1">
               <!-- card del cliente  -->
               <div class="p-2 bg-white rounded-sm text-">
                    <!-- seccion superior -->
                    <div>
                         <p class="font-bold text-[0.90rem]">
                              Informacion del cliente
                         </p>
                    </div>
                    <div class="h-[2px] bg-slate-200 w-full my-2"></div>
                    <!-- seccion inferior -->
                    <div class="flex gap-5">
                         <!-- imagen del cliente  -->
                         <div
                              class="w-40 max-w-40 max-h-25 bg-orange-300 overflow-hidden rounded-2xl"
                         >
                              <img
                                   src="https://i.pinimg.com/1200x/06/3f/c6/063fc6f586f932aa13549a702280a82f.jpg"
                                   alt="Imagen"
                                   class="w-40 h-auto object-contain"
                              />
                         </div>
                         <div class="flex w-full flex-col">
                              <!-- datos del cliente -->
                              <div class="flex flex-wrap">
                                   <div class="basis-[50%]">
                                        <div
                                             class="uppercase font-medium text-slate-400 text-[0.90rem]"
                                        >
                                             Cliente principal
                                        </div>
                                        <div class="font-bold">Juan garcia</div>
                                   </div>
                                   <div>
                                        <div
                                             class="uppercase text-slate-400 text-[0.90rem] font-medium"
                                        >
                                             Entidad coorporativa
                                        </div>
                                        <div class="font-bold">Ninguno</div>
                                   </div>
                              </div>
                              <div
                                   class="h-[2px] bg-slate-200 w-full my-4"
                              ></div>

                              <!-- datos de referencia del cliente -->
                              <div class="flex flex-wrap">
                                   <div class="basis-[50%]">
                                        <div
                                             class="uppercase text-slate-400 font-medium text-[0.90rem]"
                                        >
                                             Correo electronico
                                        </div>
                                        <div class="text-slate-600">
                                             JuanGarcia541@gmail.com
                                        </div>
                                   </div>
                                   <div>
                                        <div
                                             class="uppercase text-slate-400 text-[0.90rem] font-medium"
                                        >
                                             Telefono
                                        </div>
                                        <div class="text-slate-600">
                                             +59176467345
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <!-- Linea de tiempo del caso  -->
               <div class="px-5 bg-white rounded-sm my-5">
                    <div>
                         <p class="font-bold py-5">Linea de tiempo del caso</p>
                    </div>
                    <!-- mapeo de los datos historicos -->
                    <div
                         v-for="(historic, i) in historics"
                         class="flex justify-between py-3"
                    >
                         <div class="flex items-center gap-4">
                              <span
                                   class="text-white bg-blue-600 rounded-full p-1.5"
                              >
                                   <component :is="historic.icon" size="32" />
                              </span>
                              <div>
                                   <p class="font-semibold">
                                        {{ historic.title }}
                                   </p>
                                   <p class="text-slate-500">
                                        {{ historic.ubication }}
                                   </p>
                              </div>
                         </div>
                         <p
                              :class="[
                                   'font-semibold h-min',
                                   historic.status === 'En proceso'
                                        ? 'bg-blue-900 p-1 rounded-sm text-white'
                                        : '',
                              ]"
                         >
                              {{ historic.status }}
                         </p>
                    </div>
               </div>
               <!-- Documentos del expediente  -->

               <div class="p-2 rounded-md bg-white my-5">
                    <p class="font-semibold py-1">Documentos del expediente</p>

                    <div
                         class="bg-white my-5 shadow-sm overflow-hidden rounded-xl"
                    >
                         <table class="table-fixed w-full">
                              <thead class="bg-slate-700">
                                   <tr>
                                        <th
                                             v-for="(header, i) in headers"
                                             :key="i"
                                             class="py-1 px-2 text-start text-white text-[0.90rem]"
                                        >
                                             {{ header }}
                                        </th>
                                   </tr>
                              </thead>

                              <tbody>
                                   <tr
                                        v-for="(item, i) in cases"
                                        :key="i"
                                        class="hover:bg-slate-50"
                                   >
                                        <td
                                             class="px-3 text-start text-slate-700 text-[0.90rem] font-semibold py-4"
                                        >
                                             <div
                                                  class="flex items-center gap-2"
                                             >
                                                  <p :class="item.bg">
                                                       <component
                                                            :is="item.icon"
                                                       />
                                                  </p>
                                                  {{ item.name }}
                                             </div>
                                        </td>

                                        <td
                                             class="px-3 text-start text-slate-700 text-[0.90rem] py-4"
                                        >
                                             <div
                                                  class="p-1 rounded-sm font-semibold w-max"
                                             >
                                                  {{ item.date }}
                                             </div>
                                        </td>

                                        <td
                                             class="px-3 text-start text-slate-700 text-[0.90rem] py-4 flex gap-2 cursor-pointer hover:text-blue-600"
                                        >
                                             <Download /> Descargar
                                        </td>
                                   </tr>
                              </tbody>
                         </table>
                    </div>
               </div>
          </div>
          <div class="basis-[35%]">
               <div class="p-2 rounded-md bg-white">
                    <p class="font-semibold py-1">Equipo asignado</p>
                    <div class="flex gap-2">
                         <div
                              class="w-10 max-w-10 max-h-10 bg-orange-300 overflow-hidden rounded-full"
                         >
                              <img
                                   src="https://i.pinimg.com/1200x/06/3f/c6/063fc6f586f932aa13549a702280a82f.jpg"
                                   alt="Imagen"
                                   class="w-40 h-auto object-contain"
                              />
                         </div>
                         <div>
                              <p class="font-semibold">Elena vasquez</p>
                              <p class="text-slate-600">
                                   Abogada senior (Lider)
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>
