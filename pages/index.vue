

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
        <p>A continuación, los reportes de Rentacars:</p>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-6">
        <NonClaimedCars 
        :loading="loadingR2"
        :data="unclaimedReserves" :headers="
          ['Id Reserva', 'No.Matricula', 'Nombre Cliente',
          'Apellido', 'Fecha de Retiro', 'Ubicacion Recogida', 
          'Días Sin Retirar']" 
          :title="'Reservas No Reclamadas'"/>
        <NonReturnedCars 
        :loading="loadingR3"
        :data="nonReturnedCars" :headers="
        ['Id Devolucion', 'No.Matricula', 'Marca Auto',
        'Fecha Máx. Devolución', 'Fecha de Devolución', 'Días de Atraso', 
        'Cliente Nombre','Correo','Celular']" :title="'Vehículos No Devueltos'"/>
        
        <MostValuableBrand 
        :loading="loadingR4"
        :data="incomeByBrand" 
        :headers="['Vehiculo', 'Marca.', 'Ingresos Tot.', 'Recargos Tot.']" 
        :title="'Ganancias Por Marca'"></MostValuableBrand>
        <AvgTimePerClient 
        :loading="loadingR1"
        :data="avgTimeByClient" 
        :headers="['Id_Cliente', 'Nombre', 'Apellido', 'Días Promedio']" 
        :title="'Tiempo Promedio Alquiler'"/>
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

const incomeByBrand = ref<any>([]);
const avgTimeByClient = ref<any>([]);
const unclaimedReserves = ref<any>([]);
const nonReturnedCars = ref<any>([]);
const errors = ref([]);

const loadingR1 = ref<Boolean>(false);
const loadingR2 = ref<Boolean>(false);
const loadingR3 = ref<Boolean>(false);
const loadingR4 = ref<Boolean>(false);

const fetchData = async () => {


  try {
    loadingR1.value = true;
    const result = await $fetch("/api/reporte/TiempoPromedio")
    avgTimeByClient.value = result.data;
    
    
    loadingR1.value = false;
  } catch (error) {
    loadingR1.value = false;
    useState('errors').value.push(error);
  } 
  try {
    loadingR2.value = true;
    const result = await $fetch("/api/reporte/ReservasNoReclamadas")
    unclaimedReserves.value = result.data;
    
    
    loadingR2.value = false;
  } catch (error) {
    loadingR2.value = false;
    useState('errors').value.push(error);
  }
  try {
    loadingR3.value = true;
    const result = await $fetch("/api/reporte/NoDevueltos")
    nonReturnedCars.value = result.data;
    
    
    loadingR3.value = false;
  } catch (error) {
    loadingR3.value = false;
    useState('errors').value.push(error);
  }
  try {
    loadingR4.value = true;
    const result = await $fetch("/api/reporte/GananciasPorMarca");
    incomeByBrand.value = result.data as ClienteModel[];
    
    loadingR4.value = false;
  } catch (error) {
    loadingR4.value = false;
    errors.value.push(error);
  }
  
  loading.value = false;
};

onMounted(() => fetchData());
</script>