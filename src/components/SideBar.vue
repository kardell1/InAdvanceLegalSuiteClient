<script setup lang="ts">
import {
   LayoutDashboard,
   ClipboardClock,
   BookText,
   CalendarDays,
   ShieldUser,
} from "lucide-vue-next";
defineProps<{
   isOpen: boolean;
}>();

const emit = defineEmits<{
   (e: "toogle"): void;
}>();

const handleClick = () => {
   emit("toogle");
};
</script>
<template>
   <div
      class="bg-slate-50 border-r-2 border-slate-300 h-full transition-all ease-in-out duration-100 max-sm:fixed overflow-hidden"
      :class="isOpen ? 'w-[250px] max-sm:w-screen ' : ' w-0 '"
   >
      <div
         class="flex flex-col gap-2 text-sm py-4 text-slate-700 pl-4 text-[0.90rem] font-semibold"
      >
         <button
            @click="handleClick"
            class="cursor-pointer flex gap-2 px-2 items-center text-slate-700 max-sm:justify-center"
         >
            <span class="p-1 rounded-xl bg-blue-700 h-10 w-10">
               <ShieldUser class="w-full h-full text-white" />
            </span>
            <div>
               <p class="font-semibold text-lg text-nowrap">Legal Suite</p>
               <p class="text-[0.80rem] text-slate-500">Gestion juridica</p>
            </div>
         </button>
         <button
            class="flex items-center gap-2 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-sm max-sm:justify-center"
         >
            <LayoutDashboard />
            <p>Dashboard</p>
         </button>
         <div class="px-2 text-slate-500 font-bold max-sm:text-center">
            Mis procesos
         </div>

         <button
            class="flex items-center gap-2 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-sm max-sm:justify-center"
         >
            <ClipboardClock />
            <p>Casos vigentes</p>
         </button>
         <button
            class="flex items-center gap-2 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-sm max-sm:justify-center"
         >
            <BookText />
            <p>Historial</p>
         </button>
         <div class="px-2 text-slate-500 font-bold max-sm:text-center">
            Agenda
         </div>

         <button
            class="flex items-center gap-2 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-sm max-sm:justify-center"
         >
            <CalendarDays />
            <p>Calendario</p>
         </button>
      </div>
   </div>
</template>
