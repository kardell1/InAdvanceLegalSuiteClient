<script setup lang="ts">
import TextReference from "../ui/TextReference.vue";
import InputCredentials from "../components/InputCredentials.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const handleAuth = () => {
  router.push({ name: "dashboard" });
};
</script>

<template>
  <section
    class="min-h-screen w-screen flex items-center justify-center bg-center bg-cover bg-no-repeat flex-col gap-5"
    :style="`background-image: url(https://i.pinimg.com/1200x/0f/30/bb/0f30bbf71c672be2560c75f4a1028cae.jpg)`"
  >
    <!-- card central  -->
    <div
      class="bg-slate-50 w-[40%] rounded-xl backdrop-blur-sm shadow-2xl max-md:w-[70%] max-sm:w-[90%]"
    >
      <div class="mb-4 text-white">
        <!-- titulo  -->
        <div
          class="bg-slate-800 rounded-t-md flex items-center flex-col p-8 gap-4"
        >
          <span class="w-15 h-15 bg-slate-600 rounded-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                d="M320 64C324.6 64 329.2 65 333.4 66.9L521.8 146.8C543.8 156.1 560.2 177.8 560.1 204C559.6 303.2 518.8 484.7 346.5 567.2C329.8 575.2 310.4 575.2 293.7 567.2C121.3 484.7 80.6 303.2 80.1 204C80 177.8 96.4 156.1 118.4 146.8L306.7 66.9C310.9 65 315.4 64 320 64z"
              />
            </svg>
          </span>
          <div>
            <h1 class="text-2xl font-medium">Legal suite</h1>

            <TextReference class="text-[0.90rem] text-slate-400">
              Portal de clientes
            </TextReference>
          </div>
        </div>
        <!-- inputs + boton de login -->
        <div class="px-8 w-full flex flex-col gap-4 pt-10">
          <InputCredentials
            title="Correo electronico"
            placeholder="cliente@gmail.com"
            type="text"
          />
          <InputCredentials type="password" title="Contrasena" placeholder="" />
          <div class="flex flex-col gap-4">
            <button
              @click="handleAuth"
              class="cursor-pointer w-full font-semibold rounded-md text-white py-3 hover:bg-blue-800 bg-blue-700 transition duration-300"
            >
              Iniciar sesión
            </button>
            <TextReference class="text-[0.90rem] text-center"
              >Olvidaste tu contrasena?</TextReference
            >
          </div>
        </div>
      </div>
    </div>
    <TextReference class="text-[0.90rem] text-slate-400">
      © 2024 Legal Suite Systems. Todos los derechos reservados.
    </TextReference>
  </section>
</template>
