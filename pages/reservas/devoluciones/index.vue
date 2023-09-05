<template>
  <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
    <!-- Page header -->
    <div class="sm:flex sm:justify-between sm:items-center mb-8">
      <!-- Left: Title -->
      <div class="mb-4 sm:mb-0">
        <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">
          Devoluciones 
        </h1>
      </div>
      
      <button  @click.stop="createModalOpen = true" class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
        <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
          <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
        </svg>
        <span class="hidden xs:block ml-2">Agregar Devolucion</span>
      </button>
    </div>

    <div
      v-if="loading"
      class="flex flex-col min-h-[50vh] mx-auto w-max items-center justify-center"
    >
      <svg
        class="animate-spin -ml-1 mr-3 h-36 w-36 text-indigo-800"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
    <DevolutionsTable
      @loading-change="fetchData()"
     :data="data"
     
     :total="totalResults"
     v-else-if="data.length > 0"></DevolutionsTable>
    <div v-else-if="errors.length < 1">
      <div
        class="bg-white shadow-lg rounded-sm border border-slate-200 relative"
      >
        <header class="px-5 py-4">
          <h2 class="font-semibold text-slate-800">
            No se han creado registros aún
          </h2>
        </header>
      </div>
    </div>
    <div v-else>
      <div
        class="bg-red-200 shadow-lg rounded-sm border border-red-500 relative px-5 py-4"
      >
        <header class="font-bold text-red-800 flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
            stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>

            <h2 class="text-lg">Se produjeron los siguientes errores al llamar a BD:</h2>
        </header>
        <p class="font-semibold text-red-800 text-md" v-for="(error, index) in errors" :key="`error-${index}`">
            - {{ error }}
        </p>
      </div>
    </div>
    <CreateModal
     @success="fetchData()"
     :editable-fields="['No_Matricula', 'Id_Cliente','Estado_devolucion', 'Hora_devolucion', 'Fecha_devolucion', 'Lugar_devolucion']"
     :notvehicle="true"
     :post-url="'/api/devolucion/'"
     :create-modal-open="createModalOpen"
     @close-modal="createModalOpen=false" 
      />
  </div>
</template>

<script setup lang="ts">
import type { DevolucionModel } from "~~/server/model/devolucion";

useHead({
  title: "Devoluciones",
});

const createModalOpen=ref(false);
const loading = ref<Boolean>(false);
const data = ref<DevolucionModel[]>([]);
const totalResults = ref(0);
const errors = ref([]);
const fetchData = async () => {
  try {
    loading.value = true;
    const result = await $fetch("/api/devolucion");
    data.value = result.data as DevolucionModel[];
    totalResults.value = result.total;
    loading.value = false;
  } catch (error) {
    loading.value = false;
    errors.value.push(error);
  }
};

onMounted(() => fetchData());
</script>
