<script setup lang="ts">
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
    class="bg-red-950 h-full transition-all ease-in-out duration-100 max-sm:fixed overflow-hidden"
    :class="isOpen ? 'w-[270px] max-sm:w-screen ' : ' w-0 '"
  >
    <div
      class="flex flex-col gap-5 py-5 px-7 text-white text-[0.90rem] font-semibold"
    >
      <button
        @click="handleClick"
        class="cursor-pointer flex gap-2 items-center text-white"
      >
        <span class="w-5 h-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              d="M320 64C324.6 64 329.2 65 333.4 66.9L521.8 146.8C543.8 156.1 560.2 177.8 560.1 204C559.6 303.2 518.8 484.7 346.5 567.2C329.8 575.2 310.4 575.2 293.7 567.2C121.3 484.7 80.6 303.2 80.1 204C80 177.8 96.4 156.1 118.4 146.8L306.7 66.9C310.9 65 315.4 64 320 64z"
            /></svg
        ></span>
        <p class="font-semibold text-lg text-nowrap">Legal Suite</p>
      </button>
      <div>Dashboard</div>
      <div class="text-lg text-slate-500 font-bold text-nowrap">
        Mis procesos
      </div>
      <div>Casos vigentes</div>
      <div>Historial</div>

      <div class="text-lg text-slate-500 font-bold">Agenda</div>
      <div>Calendario</div>
    </div>
  </div>
</template>
