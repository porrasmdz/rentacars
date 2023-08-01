

<template>
  <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
    <!-- Home Welcome Banner -->
    <div
      class="relative bg-gradient-to-r from-indigo-200/60 to-indigo-50 p-4 sm:p-6 rounded-sm overflow-hidden mb-8"
    >
    

      <!-- Content -->
      <div class="relative">
        <h1 class="text-2xl md:text-3xl text-slate-800 font-bold mb-1">
          Bienvenid@ de vuelta👋
        </h1>
        <p>A continuación, el resumen de Rentacars:</p>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-6">
        <RecentUsersTable :data="dataCliente" :title="'Últimos Clientes'"></RecentUsersTable>
        <RecentUsersTable :data="dataInspectors" :title="'Últimos Inspectores'" :target-route="'/agencia/inspectores'" ></RecentUsersTable>
    </div>
  </div>
</template>

<script setup lang="ts">

import type { InspectorModel } from "~~/server/model/inspector";

import type { ClienteModel } from "~~/server/model/cliente";
useHead({
  title: "Home Page",
});
const loading = ref<Boolean>(false);
const dataInspectors = ref<InspectorModel[]>([]);
const dataCliente = ref<ClienteModel[]>([]);
const errors = ref([]);

const fetchData = async () => {
  try {
    loading.value = true;
    const result = await $fetch("/api/inspector");
    dataInspectors.value = result.data as InspectorModel[];
    
  } catch (error) {
    loading.value = false;
    errors.value.push(error);
  }
  try {
    loading.value = true;
    const result = await $fetch("/api/cliente");
    dataCliente.value = result.data as ClienteModel[];
    
    loading.value = false;
  } catch (error) {
    loading.value = false;
    errors.value.push(error);
  }
  
  loading.value = false;
};

onMounted(() => fetchData());
</script>