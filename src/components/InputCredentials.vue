<script setup lang="ts">
defineProps<{
  title: string;
  placeholder: string;
  type: string;
}>();
</script>
<template>
  <div class="flex flex-col gap-1">
    <label class="text-slate-800">
      {{ title }}
    </label>
    <input
      class="bg-slate-700 text-white py-2 px-4 rounded-md"
      :type="type"
      :placeholder="placeholder"
    />
  </div>
</template>
