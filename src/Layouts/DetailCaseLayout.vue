<script setup lang="ts">
import { useRouter } from "vue-router";
import { CircleAlert, User } from "lucide-vue-next";
const router = useRouter();
const handleReturn = () => {
   router.push({ name: "dashboard" });
};
</script>
<template>
   <div>
      <button
         class="p-1 border text-slate-500 w-max rounded-md cursor-pointer font-semibold"
         @click="handleReturn"
      >
         <- Regresar
      </button>
   </div>
   <div class="flex flex-col gap-5">
      <div class="flex justify-between items-center">
         <div>
            <p class="text-2xl font-bold">
               Demanta Laboral - Despido injustificado
            </p>
            <p class="text-slate-600">Expediente : CS-2024-001 • Laboral</p>
         </div>

         <p
            class="text-green-700 px-2 font-semibold py-1 bg-green-100 rounded-full border border-green-200 shadow-2xs"
         >
            Activo
         </p>
      </div>
      <div class="flex gap-5 flex-row-reverse max-md:flex-col">
         <!-- card del abogado asignado  -->
         <div class="flex flex-col gap-4 h-max max-md:w-full">
            <div
               class="bg-white p-5 rounded-sm shadow-sm w-max flex flex-col gap-4 h-max max-md:w-full"
            >
               <div class="flex flex-col gap-5">
                  <p class="text-slate-500 uppercase font-semibold">
                     Informacion clave
                  </p>
                  <div>
                     <p class="text-slate-500">Codigo del expediente</p>
                     <p>EXP-2025-CP2P05</p>
                  </div>
               </div>
               <div class="bg-slate-200 w-full h-[2px]"></div>
               <div>
                  <p class="text-slate-500 mb-3 font-semibold">
                     Abogado Asignado
                  </p>
                  <div class="flex gap-5 items-center">
                     <span
                        class="bg-slate-200 text-slate-700 rounded-full p-1 w-12 h-12"
                     >
                        <User class="w-full h-full"
                     /></span>
                     <div>
                        <p class="font-bold text-lg">Dr Roberto carlos</p>
                        <p
                           class="hover:underline text-sm cursor-pointer text-blue-500"
                        >
                           link de contacto
                        </p>
                     </div>
                  </div>
               </div>

               <div class="bg-slate-200 w-full h-[2px]"></div>
               <!-- fecha de inicio y proxima reunion  -->
               <div class="flex justify-between text-[0.80rem]">
                  <div>
                     <p class="text-slate-500">Fecha de inicio</p>
                     <p class="font-semibold">2023-12-24</p>
                  </div>
                  <div>
                     <p class="text-slate-500 font-medium">Proxima audiencia</p>
                     <p class="text-blue-600 font-medium">2025-12-31</p>
                  </div>
               </div>
            </div>
            <div
               class="bg-white p-5 rounded-sm shadow-sm w-full flex flex-col gap-4 h-max max-md:w-full"
            >
               documentacion
            </div>
         </div>
         <div class="flex flex-col gap-5 flex-1">
            <!-- resumen generado por ia  -->
            <div class="bg-white p-5 rounded-sm shadow-sm flex flex-col gap-3">
               <div class="font-bold flex items-center justify-cente gap-2">
                  <span class="text-blue-700">
                     <CircleAlert />
                  </span>
                  <p>Resumen del caso</p>
               </div>

               <div class="bg-slate-200 w-full h-[2px]"></div>

               <p class="text-[0.80rem]">
                  El demandante, el señor Juan Pérez, alega haber sido despedido
                  de manera injustificada tras cinco años de trabajo continuo en
                  la empresa demandada, sosteniendo que cumplía adecuadamente
                  con sus funciones y que no existía causa legal para la
                  terminación de su contrato. Por su parte, la empresa afirma
                  que el despido se debió a reiterados incumplimientos
                  laborales, situación que el demandante niega, solicitando como
                  resultado de la demanda el pago de indemnización, beneficios
                  sociales y demás derechos que considera vulnerados.
               </p>
            </div>
            <!-- card de informacion de caso  -->
            <div class="bg-white p-5 rounded-sm shadow-sm flex flex-col gap-3">
               <div class="flex justify-between items-center">
                  <p
                     class="text-slate-500 text-[0.80rem] uppercase font-semibold"
                  >
                     Detalles legales
                  </p>
                  <div class="text-[0.80rem] flex gap-2">
                     <button
                        class="px-1 cursor-pointer border border-blue-400 rounded-sm font-medium bg-blue-50 text-blue-600"
                     >
                        Informacion
                     </button>
                     <button
                        class="p-1 cursor-pointer border border-slate-400 rounded-sm font-medium"
                     >
                        Pruebas
                     </button>
                     <button
                        class="p-1 cursor-pointer border border-slate-400 rounded-sm font-medium"
                     >
                        Testimonios
                     </button>
                  </div>
               </div>
               <div class="text-[0.80rem]">
                  <p class="text-slate-500">Antecedentes</p>
                  <p>
                     El demandante, señor Juan Pérez, ingresó a trabajar para la
                     empresa demandada en fecha determinada, desempeñando sus
                     funciones de manera continua durante aproximadamente cinco
                     años, bajo una relación laboral estable y con cumplimiento
                     regular de su jornada y obligaciones. Durante dicho periodo
                     no se le habrían comunicado sanciones formales ni llamados
                     de atención que evidencien faltas graves. Sin embargo, en
                     fecha posterior, la empresa procedió a dar por terminada la
                     relación laboral de forma unilateral, notificándole su
                     despido sin una causa clara ni procedimiento previo.
                  </p>
                  <p class="text-slate-500 mt-4">Fundamentos</p>
                  <p>
                     El señor Juan Pérez sostiene que el despido fue
                     injustificado, ya que no existió causa legal ni
                     incumplimiento comprobado que respalde la decisión del
                     empleador, vulnerando así sus derechos laborales
                     adquiridos. Asimismo, alega que no se le otorgó derecho a
                     la defensa ni se siguió el debido proceso establecido por
                     la normativa laboral vigente, motivo por el cual solicita
                     el reconocimiento del despido injustificado y el pago de la
                     indemnización, beneficios sociales y demás derechos que
                     correspondan conforme a ley.
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
