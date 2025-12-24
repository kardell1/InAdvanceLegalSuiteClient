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
    class="bg-blue-950 h-full transition-all ease-in-out duration-100 max-sm:fixed overflow-hidden"
    :class="isOpen ? 'w-[270px] max-sm:w-screen ' : ' w-0 '"
  >
    <div
      class="flex flex-col gap-5 py-5 px-7 text-white text-[0.90rem] font-semibold"
    >
      <button
        @click="handleClick"
        class="cursor-pointer flex gap-2 items-center text-white max-sm:justify-center"
      >
        <ShieldUser />
        <p class="font-semibold text-lg text-nowrap">Legal Suite</p>
      </button>
      <button
        class="flex items-center gap-2 hover:text-blue-600 max-sm:justify-center"
      >
        <LayoutDashboard />
        <p>Dashboard</p>
      </button>
      <div class="text-lg text-slate-500 font-bold max-sm:text-center">
        Mis procesos
      </div>

      <button
        class="flex items-center gap-2 hover:text-blue-600 max-sm:justify-center"
      >
        <ClipboardClock />
        <p>Casos vigentes</p>
      </button>
      <button
        class="flex items-center gap-2 hover:text-blue-600 max-sm:justify-center"
      >
        <BookText />
        <p>Historial</p>
      </button>
      <div class="text-lg text-slate-500 font-bold max-sm:text-center">
        Agenda
      </div>

      <button
        class="flex items-center gap-2 hover:text-blue-600 max-sm:justify-center"
      >
        <CalendarDays />
        <p>Calendario</p>
      </button>
    </div>
  </div>
</template>
