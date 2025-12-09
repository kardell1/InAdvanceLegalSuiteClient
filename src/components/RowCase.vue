<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  description: string;
  color: string;
  date: string;
  type: string;
}>();
const badgeClasses: Record<string, string> = {
  green: "w-max px-2 py-1 rounded-full bg-green-200 text-green-700",
  red: "w-max px-2 py-1 rounded-full bg-red-200 text-red-700",
  blue: "w-max px-2 py-1 rounded-full bg-blue-200 text-blue-700",
  yellow: "w-max px-2 py-1 rounded-full bg-yellow-200 text-yellow-700",
};

// fallback por si viene un color no permitido
const fallbackClass = "w-max px-2 py-1 rounded-full bg-gray-200 text-gray-700";
</script>
<template>
  <div
    class="flex bg-blue-100/40 hover:bg-blue-100/60 rounded-md w-full cursor-pointer"
  >
    <div class="w-[7px] bg-blue-500"></div>
    <div class="flex justify-between items-center w-full py-3 px-2">
      <div>
        <p class="text-lg font-semibold">{{ title }}</p>
        <p class="text-sm text-slate-600">{{ description }}</p>
      </div>
      <div class="flex justify-center flex-col items-end">
        <p class="text-sm text-slate-800 font-semibold">{{ date }}</p>
        <p :class="badgeClasses[color] ?? fallbackClass">
          {{ type }}
        </p>
      </div>
    </div>
  </div>
</template>
