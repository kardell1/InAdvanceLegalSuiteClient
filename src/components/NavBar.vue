<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const handleQuit = () => {
   router.push({ name: "login" });
};

const emit = defineEmits<{
   (e: "toogle"): void;
}>();

const handleClick = () => {
   emit("toogle");
};
</script>
<template>
   <header
      class="flex justify-between py-2 px-5 border-b-[2px] border-slate-300"
   >
      <button
         @click="handleClick"
         class="flex gap-2 items-center cursor-pointer"
      >
         <span class="w-5 h-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
               <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
               <path
                  d="M320 64C324.6 64 329.2 65 333.4 66.9L521.8 146.8C543.8 156.1 560.2 177.8 560.1 204C559.6 303.2 518.8 484.7 346.5 567.2C329.8 575.2 310.4 575.2 293.7 567.2C121.3 484.7 80.6 303.2 80.1 204C80 177.8 96.4 156.1 118.4 146.8L306.7 66.9C310.9 65 315.4 64 320 64z"
               /></svg
         ></span>
         <p class="font-semibold text-lg">Legal Suite</p>
      </button>
      <button
         @click="handleQuit"
         class="text-slate-700 flex items-center gap-2 cursor-pointer hover:bg-slate-200 p-2 rounded-md"
      >
         <span class="w-5 h-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
               <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
               <path
                  d="M224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L160 96C107 96 64 139 64 192L64 448C64 501 107 544 160 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480C142.3 480 128 465.7 128 448L128 192C128 174.3 142.3 160 160 160L224 160zM566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L438.6 169.3C426.1 156.8 405.8 156.8 393.3 169.3C380.8 181.8 380.8 202.1 393.3 214.6L466.7 288L256 288C238.3 288 224 302.3 224 320C224 337.7 238.3 352 256 352L466.7 352L393.3 425.4C380.8 437.9 380.8 458.2 393.3 470.7C405.8 483.2 426.1 483.2 438.6 470.7L566.6 342.7z"
               />
            </svg>
         </span>
         Cerrar sesion
      </button>
   </header>
</template>
