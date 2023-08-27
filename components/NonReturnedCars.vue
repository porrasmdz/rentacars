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
      <div>
        <header
          class="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2"
        >
          Recientes
        </header>
        <ul class="my-1">
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
                
                  <div class="font-medium text-slate-800">#{{ value.id_Devolucion  }}</div>
                </div>
              </td>
              <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
                <div class="flex items-center">
                
                  <div class="font-medium text-slate-800">{{ value.Vehiculo_No_Matricula }}</div>
                </div>
              </td>
              <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
                <div class="flex items-center">
                
                  <div class="font-medium text-slate-800">{{ value.Vehiculo_Marca }}</div>
                </div>
              </td>
              
              <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
                <div v-if="value.Fecha_Entrega_Esperada" class="flex items-center gap-2 justify-between w-14 font-bold">
                  <span>{{ new Date(value.Fecha_Entrega_Esperada).toLocaleDateString() }}</span>
                </div>
                <div v-else>Error</div>
               
              </td>
              <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
                <div v-if="value.Fecha_Entrega_Efectiva" class="flex items-center gap-2 justify-between w-14 font-bold">
                  <span>{{ new Date(value.Fecha_Entrega_Efectiva).toLocaleDateString() }}</span>
                </div>
                <div v-else class="text-red-700 font-bold">No devuelto</div>
               
              </td>
             
              <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
                <div class="flex items-center gap-2 justify-between w-14 font-bold text-red-700">
                  <span>{{ value.Dias_de_Atraso }}</span>
                </div>
               
              </td>
              <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
                <div class="flex items-center gap-2 justify-between w-14 font-bold ">
                  <span>{{ value.Cliente_Nombre }}</span>
                </div>
               
              </td>
              <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
                <div class="flex items-center gap-2 justify-between w-14 font-bold">
                  <span>{{ value.Cliente_Apellido }}</span>
                </div>
               
              </td>
              <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
                <div class="flex items-center gap-2 justify-between w-14 font-bold">
                  <span>{{ value.Cliente_Email }}</span>
                </div>
               
              </td>
              <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
                <div class="flex items-center gap-2 justify-between w-14 font-bold">
                  <span>{{ value.Cliente_Celular }}</span>
                </div>
               
              </td>
            </tr>
          </tbody>
        </table>
        
        </ul>
      </div>
     
    </div>
  </div>
</template>
<script setup lang="ts">
const title = ref("");
const props = defineProps({
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
