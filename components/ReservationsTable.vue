<template>
  <div class="bg-white shadow-lg rounded-sm border border-slate-200 relative">
    <header class="px-5 py-4">
      <h2 class="font-semibold text-slate-800">
        Total Reservas <span class="text-slate-400 font-medium">{{ total }}</span>
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
                <div class="font-semibold">Cliente</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold">Inspector</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold">Fecha Recogida</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold">Hora Recogida</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold">Ubicación</div>
              </th>
              
             
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <span class="sr-only">Menu</span>
              </th>
            </tr>
          </thead>
          <!-- Table body -->
          <tbody class="text-sm divide-y divide-slate-200">
            <ReservationItem
              v-for="reservation in data"
              :key="reservation.id_Reserva"
              :reservation="reservation"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref, watch } from "vue";
import ReservationItem from "./ReservationItem.vue";
const props = defineProps(['data',  'total']);
const emit = defineEmits(["change-selection"]);

</script>