<template>
  <div
    class="col-span-full bg-white shadow-lg rounded-sm border border-slate-200"
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
      <div v-else-if="!loading && data && data.length > 0">
        <header
          class="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2 "
        >
          Recientes
        </header>
        <ul class="my-1 overflow-x-auto">
          <table class="table-auto w-full ">
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
                
                  <div class="font-medium text-slate-800">#{{ value.id_Reserva  }}</div>
                </div>
              </td>
              <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
                <div class="flex items-center">
                
                  <div class="font-medium text-slate-800">{{ value.No_Matricula }}</div>
                </div>
              </td>
              <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
                <div class="flex items-center  gap-2 justify-between">
                  <span >{{ value.Cliente_Nombre}}</span>
                </div>
              </td>
              <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
                <div class="flex items-center  gap-2 justify-between">
                  <span >{{ value.Cliente_Apellido}}</span>
                </div>
              </td>
              <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
                <div v-if="value.Fecha_Reserva" class="flex items-center gap-2 justify-between  font-bold">
                  <span>{{ new Date(value.Fecha_Reserva).toLocaleDateString() }}</span>
                </div>
                <div v-else>Error</div>
               
              </td>
             
              <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
                <div class="flex items-center gap-2 justify-between  font-bold">
                  <span>{{ value.Ubicacion_Recogida }}</span>
                </div>
               
              </td>
              <td class="px-2 first:pl-5 last:pr-5 py-3 text-center whitespace-nowrap">
                <div v-if="value.Dias_Sin_Retirar" class="font-bold text-red-600">
                  <span>{{  Number.parseFloat(value?.Dias_Sin_Retirar)?.toFixed(0)}}</span>
                </div>
                <div v-else class="flex items-center gap-2 justify-between  font-bold">
                  Error
                </div>
              </td>
             
            </tr>
          </tbody>
        </table>
        
        </ul>
      </div>
      <div v-else-if="!loading">
        <div
          class="bg-green-100 shadow-lg rounded-sm border border-slate-200 relative"
        >
          <header class="px-5 py-4 flex gap-4 text-emerald-800">
            <span class="font-semibold">
              Todos las reservas fueron atendidas
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
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
