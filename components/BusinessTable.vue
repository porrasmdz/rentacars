<template>
  <div class="bg-white shadow-lg rounded-sm border border-slate-200 relative">
    <header class="px-5 py-4">
      <h2 class="font-semibold text-slate-800">
        Total Empresas <span class="text-slate-400 font-medium">{{ total }}</span>
      </h2>
    </header>
    <div>
      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <!-- Table header -->
          <thead
            class="text-xs text-justify font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200"
          >
            <tr>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold">Logo</div>
              </th>
              
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold">RUC</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold">Nombre</div>
              </th>
             
             
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <span class="sr-only">Menu</span>
              </th>
            </tr>
          </thead>
          <!-- Table body -->
          <tbody class="text-sm divide-y divide-slate-200">
            <BusinessItem
              v-for="business in data"
              :key="business.RUC"
              :business="business"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref, watch } from "vue";
import BusinessItem from "./BusinessItem.vue";
const props = defineProps(['data',  'total']);
const emit = defineEmits(["change-selection"]);

</script>