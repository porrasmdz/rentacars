<template>
  <div
    class="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200"
  >
    <header class="px-5 py-4 border-b border-slate-100">
      <h2 class="font-semibold text-slate-800">{{ props.title }}</h2>
    </header>
    <div class="p-3">
      <!-- Card content -->
      <!-- "Today" group -->
      <div v-if="loading"
      class="flex flex-col mx-auto w-max items-center justify-center"
      >
        <LoaderComponent></LoaderComponent>
      </div>
      <div v-else-if="data && data.length>0">
        <header
          class="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2"
        >
          Recientes
        </header>
        <ul class="my-1 overflow-x-auto">
          <table class="table-auto w-full">
          <!-- Table header -->
          <thead
            class="text-xs text-justify font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200"
          >
            <tr>
              <th v-for="(header,key) in headers" :key="`ihdrs-${key}`" class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold">{{ header }}</div>
              </th>
            
            </tr>
          </thead>
          <!-- Table body -->
          <tbody class="text-sm divide-y divide-slate-200">
            <tr v-for="(value, key) in data" :key="key+'-incByBrand'" >
              <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
                <div class="flex items-center">
                
                  <div class="font-medium text-slate-800">{{ value.id_Cliente  }}</div>
                </div>
              </td>
              <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
                <div class="flex items-center">
                
                  <div class="font-medium text-slate-800">{{ value.Cliente_Nombre }}</div>
                </div>
              </td>
              <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
                <div class="flex items-center  gap-2 justify-between">
                  <span >{{ value.Cliente_Apellido}}</span>
                </div>
              </td>
              <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
                <div v-if="value.Dias_Promedio_Alquiler >=0" class="flex items-center gap-2 justify-between w-14 font-bold text-green-600"
                >
                  <span>{{  Number.parseFloat(value?.Dias_Promedio_Alquiler)?.toFixed(0)}}</span>
                </div>
                <div v-else class="flex items-center gap-2 justify-between w-14 font-bold">
                  Tiene Devoluciones Pend.
                </div>
              </td>
             
            </tr>
          </tbody>
        </table>
        
        </ul>
      </div>
      <div v-else-if="!loading">
        <div
          class="bg-white shadow-lg rounded-sm border border-slate-200 relative"
        >
          <header class="px-5 py-4">
            <h2 class="font-semibold text-slate-800">
              Aun no se han hecho reservas.
            </h2>
          </header>
        </div>
      </div>
     
    </div>
  </div>
</template>
<script setup lang="ts">
const title = ref("");
const props = defineProps({
  loading: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: "Últimos Registros",
  },
  headers:{
    type: Array<string>,
    
  },
  data :{ 
    type: Array<any>
  }
});
</script>
