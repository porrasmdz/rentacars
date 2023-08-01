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
      <div>
        <header
          class="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2"
        >
          Recientes
        </header>
        <ul class="my-1">
          <!-- Item -->
          <li class="flex px-2" v-for="(item, index) in data?.slice(0, 5)" :key="`item-${index}`">
            
            <div class="w-9 h-9 rounded-full shrink-0  my-2 mr-3"
            :class="item.Apellido == null ? 'bg-green-500':'bg-indigo-500'">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="w-6 h-6 m-1.5 text-sky-50"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <div
              class="grow flex items-center border-b border-slate-100 text-sm py-2"
            >
              <div class="grow flex justify-between">
                <div class="self-center">
                  <span class="font-medium text-slate-800 hover:text-slate-900"
                    >{{item.Apellido == null ? 'Inspector':'' }} {{item.Nombre}} {{item.Apellido ?? ''}}</span
                  >
                  ha sido registrado
                </div>
                <div class="shrink-0 self-end ml-2">
                  <NuxtLink
                    class="font-medium text-indigo-500 hover:text-indigo-600"
                    :to="{path: targetRoute}"
                    >Ver Todos<span class="hidden sm:inline text-xl">
                      &rarr;</span
                    ></NuxtLink
                  >
                </div>
              </div>
            </div>
          </li>
        
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
  targetRoute:{
    type: String,
    default: '/comercial/clientes'
  },
  data :{ 
    type: Array<any>
  }
});
</script>
