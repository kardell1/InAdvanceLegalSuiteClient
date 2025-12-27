<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
import SideBar from "../components/SideBar.vue";
import { useDashboardLayout } from "../composables/useDashboardLayout";
const { handleSideBar, status } = useDashboardLayout();
</script>
<template>
   <div class="flex h-screen">
      <SideBar :isOpen="status" @toogle="handleSideBar" />
      <!-- content -->
      <div class="h-full flex flex-col flex-1 overflow-x-auto">
         <NavBar @toogle="handleSideBar" />
         <main
            class="flex-1 min-h-0 bg-slate-100 p-5 flex flex-col gap-5 overflow-y-auto"
         >
            <router-view />
         </main>
      </div>
   </div>
</template>
