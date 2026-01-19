<script setup lang="ts">
import { CalendarDays } from "lucide-vue-next";
import { useRouter } from "vue-router";
type LegalCase = {
     id: string;
     client: string;
     type: string;
     status: string;
     updated_at: string;
     details: string;
};
const headers: { key: keyof LegalCase; label: string }[] = [
     { key: "id", label: "Identificador" },
     { key: "client", label: "Cliente" },
     { key: "type", label: "Tipo de caso" },
     { key: "status", label: "Estado" },
     { key: "updated_at", label: "Última actualización" },
     { key: "details", label: "Detalles" },
];

const cases = [
     {
          id: "CASE-001",
          client: "Juan Pérez",
          type: "Civil",
          status: "En proceso",
          updated_at: "12/01/2026",
     },
     {
          id: "CASE-002",
          client: "María López",
          type: "Familiar",
          status: "En proceso",
          updated_at: "05/01/2026",
     },
     {
          id: "CASE-003",
          client: "Carlos Mendoza",
          type: "Penal",
          status: "En audiencia",
          updated_at: "14/01/2026",
     },
     {
          id: "CASE-004",
          client: "Empresa Andina SRL",
          type: "Comercial",
          status: "En revisión",
          updated_at: "10/01/2026",
     },
     {
          id: "CASE-005",
          client: "Ana Rodríguez",
          type: "Laboral",
          status: "En proceso",
          updated_at: "13/01/2026",
     },
     {
          id: "CASE-006",
          client: "Luis Fernández",
          type: "Administrativo",
          status: "Archivado",
          updated_at: "02/01/2026",
     },
];
const router = useRouter(); // navegación
const handleCurrentItem = (option: string, id: string) => {
     router.push({
          name: option,
          params: { id },
     });
};

const handleEvent = () => {
     router.push({
          name: "case-event",
     });
};
</script>
<template>
     <div>
          <!-- boton y texto -->
          <div class="flex justify-between items-center py-5">
               <div class="basis-[60%]">
                    <p class="text-3xl font-bold py-3">
                         Casos vigentes y acciones
                    </p>

                    <p class="text-slate-500 text-[0.80rem]">
                         Gestion centralizada de litigios activos, carga de
                         trabajo actual y planificacion de eventos legales
                    </p>
               </div>
               <div class="flex gap-2">
                    <button
                         @click="handleEvent"
                         class="font-medium cursor-pointer p-2 rounded-sm text-[0.90rem] bg-white shadow-sm flex items-center gap-2"
                    >
                         <CalendarDays />
                         Planificar evento
                    </button>
                    <button
                         class="font-medium cursor-pointer p-2 rounded-sm text-white text-[0.90rem] bg-green-900 shadow-sm"
                    >
                         Crear nuevo caso
                    </button>
               </div>
          </div>
          <!-- card de informacion  -->
          <div class="flex gap-2 justify-between">
               <div class="px-4 py-3 rounded-lg bg-white shadow-sm">
                    <p class="text-[0.80rem] text-slate-600 uppercase">
                         Carga de trabajo total
                    </p>

                    <div class="flex items-center gap-2">
                         <p class="text-lg font-bold">10</p>
                         <p class="text-[0.80rem] text-slate-500">
                              Casos activos
                         </p>
                    </div>
               </div>

               <div class="px-4 py-3 rounded-lg bg-white shadow-sm">
                    <p class="text-[0.80rem] text-slate-600 uppercase">
                         En progreso
                    </p>
                    <div class="flex text-green-700 items-center gap-2">
                         <p class="text-lg font-bold">250</p>
                         <p class="text-[0.80rem]">Casos activos</p>
                    </div>
               </div>
               <div class="px-4 py-3 rounded-lg bg-white shadow-sm">
                    <p class="text-[0.80rem] text-slate-600 uppercase">
                         Pendientes de revision
                    </p>
                    <div class="flex text-amber-700 items-center gap-2">
                         <p class="text-lg font-bold">250</p>
                         <p class="text-[0.80rem]">Urgente</p>
                    </div>
               </div>

               <div class="px-4 py-3 rounded-lg bg-white shadow-sm">
                    <p class="text-[0.80rem] text-slate-600 uppercase">
                         Proximos eventos
                    </p>

                    <div class="flex items-center gap-2">
                         <p class="text-lg font-bold">50</p>
                         <p class="text-[0.80rem] text-slate-500">
                              Esta semana
                         </p>
                    </div>
               </div>
          </div>
          <!-- tabla -->
          <div class="bg-white my-5 shadow-sm overflow-hidden rounded-xl">
               <table class="table-fixed w-full">
                    <thead class="bg-blue-800">
                         <tr>
                              <th
                                   v-for="header in headers"
                                   :key="header.key"
                                   class="py-1 px-3 text-start text-white text-[0.90rem]"
                              >
                                   {{ header.label }}
                              </th>
                         </tr>
                    </thead>

                    <tbody>
                         <tr
                              v-for="item in cases"
                              :key="item.id"
                              class="hover:bg-slate-50"
                         >
                              <td
                                   class="px-3 text-start text-slate-700 text-[0.90rem] font-semibold py-4"
                              >
                                   {{ item.id }}
                              </td>

                              <td
                                   class="px-3 text-start text-slate-700 text-[0.90rem] py-4"
                              >
                                   {{ item.client }}
                              </td>

                              <td
                                   class="px-3 text-start text-slate-700 text-[0.90rem] py-4"
                              >
                                   <div
                                        class="p-1 bg-slate-100 rounded-sm font-semibold w-max"
                                   >
                                        {{ item.type }}
                                   </div>
                              </td>
                              <td class="px-3 py-4 text-start text-[0.90rem]">
                                   <div class="flex items-center gap-2">
                                        <div
                                             :class="[
                                                  ' w-[15px] h-[15px] rounded-full ',
                                                  item.status === 'En proceso'
                                                       ? 'bg-green-700'
                                                       : 'bg-amber-700',
                                             ]"
                                        ></div>
                                        <div
                                             :class="[
                                                  ' font-medium ',
                                                  item.status === 'En proceso'
                                                       ? 'text-green-700'
                                                       : 'text-amber-700',
                                             ]"
                                        >
                                             {{ item.status }}
                                        </div>
                                   </div>
                              </td>

                              <td
                                   class="px-3 text-start text-slate-700 text-[0.90rem] py-4"
                              >
                                   {{ item.updated_at }}
                              </td>

                              <td
                                   class="px-3 text-start text-slate-700 text-[0.90rem] py-4"
                              >
                                   <button
                                        @click="
                                             handleCurrentItem(
                                                  'case-detail',
                                                  item.id,
                                             )
                                        "
                                        class="bg-green-800 p-2 rounded-sm text-white cursor-pointer"
                                   >
                                        Ver detalles
                                   </button>
                              </td>
                         </tr>
                    </tbody>
               </table>
          </div>
     </div>
</template>
