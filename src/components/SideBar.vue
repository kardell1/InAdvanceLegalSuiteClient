<script setup lang="ts">
import {
     LayoutDashboard,
     ClipboardClock,
     BookText,
     CalendarDays,
     ShieldUser,
} from "lucide-vue-next";
import { ref } from "vue";
import { useRouter } from "vue-router";
defineProps<{
     isOpen: boolean;
}>();

const emit = defineEmits<{
     (e: "toogle"): void;
}>();

const handleClick = () => {
     emit("toogle");
};

const currentItem = ref("");
const router = useRouter(); // navegación
const handleCurrentItem = (option: string) => {
     currentItem.value = option;
     router.push({ name: option });
};
</script>
<template>
     <div
          class="bg-slate-50 border-r-2 border-slate-300 h-full transition-all ease-in-out duration-100 max-sm:fixed overflow-hidden"
          :class="isOpen ? 'w-[250px] max-sm:w-screen ' : ' w-0 '"
     >
          <div
               class="flex flex-col gap-2 text-sm py-4 text-slate-700 text-[0.90rem] font-semibold"
          >
               <!-- boton del side  -->
               <button
                    @click="handleClick"
                    class="cursor-pointer flex gap-2 ml-4 items-center text-slate-700 max-sm:justify-center"
               >
                    <span class="p-1 rounded-xl bg-blue-700 h-10 w-10">
                         <ShieldUser class="w-full h-full text-white" />
                    </span>
                    <div>
                         <p class="font-semibold text-lg text-nowrap">
                              Legal Suite
                         </p>
                         <p class="text-[0.80rem] text-slate-500">
                              Gestion juridica
                         </p>
                    </div>
               </button>
               <button
                    @click="handleCurrentItem('dashboard')"
                    :class="[
                         'flex items-center gap-2 p-2 mx-4 rounded-sm max-sm:justify-center',
                         currentItem === 'dashboard'
                              ? 'bg-blue-500 text-white'
                              : 'hover:text-blue-600 hover:bg-blue-50',
                    ]"
               >
                    <LayoutDashboard />
                    <p>Dashboard</p>
               </button>
               <div class="px-2 text-slate-500 font-bold max-sm:text-center">
                    Mis procesos
               </div>

               <button
                    @click="handleCurrentItem('cases')"
                    :class="[
                         'flex items-center gap-2 p-2 mx-4 rounded-sm max-sm:justify-center',
                         currentItem === 'cases'
                              ? 'bg-blue-500 text-white'
                              : 'hover:text-blue-600 hover:bg-blue-50',
                    ]"
               >
                    <ClipboardClock />
                    <p>Detalles casos</p>
               </button>
               <button
                    @click="handleCurrentItem('history')"
                    :class="[
                         'flex items-center gap-2 p-2 mx-4 rounded-sm max-sm:justify-center',
                         currentItem === 'history'
                              ? 'bg-blue-500 text-white'
                              : 'hover:text-blue-600 hover:bg-blue-50',
                    ]"
               >
                    <BookText />
                    <p>Configuracion</p>
               </button>
               <div class="px-2 text-slate-500 font-bold max-sm:text-center">
                    Agenda
               </div>

               <button
                    @click="handleCurrentItem('calendar')"
                    :class="[
                         'flex items-center gap-2 p-2 mx-4 rounded-sm max-sm:justify-center',
                         currentItem === 'calendar'
                              ? 'bg-blue-500 text-white'
                              : 'hover:text-blue-600 hover:bg-blue-50',
                    ]"
               >
                    <CalendarDays />
                    <p>Calendario</p>
               </button>
          </div>
     </div>
</template>
