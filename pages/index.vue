

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
        <NonClaimedCars :data="unclaimedReserves" :headers="
          ['Id Reserva', 'No.Matricula', 'Nombre Cliente',
          'Apellido', 'Fecha de Retiro', 'Ubicacion Recogida', 
          'Días Sin Retirar']" 
          :title="'Reservas No Reclamadas'"/>
        <NonReturnedCars :data="nonReturnedCars" :headers="
        ['Id Devolucion', 'No.Matricula', 'Marca Auto',
        'Fecha Máx. Devolución', 'Fecha de Devolución', 'Días de Atraso', 
        'Cliente Nombre','Correo','Celular']" :title="'Vehículos No Devueltos'"/>
        
        <MostValuableBrand :data="incomeByBrand" :headers="['Vehiculo', 'Marca.', 'Ingresos Tot.', 'Recargos Tot.']" :title="'Ganancias Por Marca'"></MostValuableBrand>
        <AvgTimePerClient :data="avgTimeByClient" :headers="['Id_Cliente', 'Nombre', 'Apellido', 'Días Promedio']" :title="'Tiempo Promedio Alquiler'"/>
      </div>
  </div>
</template>

<script setup lang="ts">

import type { InspectorModel } from "~~/server/model/inspector";

import type { ClienteModel } from "~~/server/model/cliente";
import type { ReporteModel } from "~~/server/model/reporte";
useHead({
  title: "Home Page",
});
const loading = ref<Boolean>(false);
const dataInspectors = ref<InspectorModel[]>([]);
const dataCliente = ref<ClienteModel[]>([]);
const incomeByBrand = ref<any>([]);
const avgTimeByClient = ref<any>([]);
const unclaimedReserves = ref<any>([]);
const nonReturnedCars = ref<any>([]);
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
    const result = await $fetch("/api/reporte/GananciasPorMarca")
    incomeByBrand.value = result.data;
    console.log(incomeByBrand.value)
    
    loading.value = false;
  } catch (error) {
    loading.value = false;
    useState('errors').value.push(error);
  }
  try {
    loading.value = true;
    const result = await $fetch("/api/reporte/TiempoPromedio")
    avgTimeByClient.value = result.data;
    
    
    loading.value = false;
  } catch (error) {
    loading.value = false;
    useState('errors').value.push(error);
  } 
  try {
    loading.value = true;
    const result = await $fetch("/api/reporte/ReservasNoReclamadas")
    unclaimedReserves.value = result.data;
    
    
    loading.value = false;
  } catch (error) {
    loading.value = false;
    useState('errors').value.push(error);
  }
  try {
    loading.value = true;
    const result = await $fetch("/api/reporte/NoDevueltos")
    nonReturnedCars.value = result.data;
    
    
    loading.value = false;
  } catch (error) {
    loading.value = false;
    useState('errors').value.push(error);
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