<template>
  <tr>
    <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
      <div class="flex items-center">
        
        <div class="font-medium text-slate-800">{{ reservation.id_Reserva }}</div>
      </div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
      <div class="flex items-center">
        
        <div class="font-medium text-slate-800">{{ reservation.Id_Cliente }}</div>
      </div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      
      <span >{{ reservation.Id_Inspector }}</span>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      
      <span >{{ reservation.No_Matricula }}</span>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="">{{ new Date(reservation.Fecha_Inicio).toLocaleDateString() }}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="">{{ reservation.Hora_reserva }}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class=" font-medium text-sky-500">
        {{ reservation.ubicacion_recogida }}
      </div>
    </td>

    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
      <!-- Menu button -->
      <DropdownEditMenu :align="'right'" class="relative inline-flex">
        <li @click.stop="editModal = true">
          <span class="cursor-pointer font-medium text-sm text-slate-600 flex py-1 px-3
           hover:text-slate-800 hover:bg-slate-100 active:bg-slate-50">
           Editar Reserva
          </span>
        </li>
        
        <li @click.stop="deleteModal = true">
          <span class="cursor-pointer font-medium text-sm text-red-600 flex py-1 px-3
           hover:text-red-800 hover:bg-red-100 active:bg-red-50">
           Eliminar Reserva
          </span>
        </li>
      </DropdownEditMenu>

      
      <EditModal
      :editable-fields="['Id_Cliente', 'Id_Inspector', 'No_Matricula','Fecha_Inicio','Hora_reserva','ubicacion_recogida']"
      :put-url="`/api/reserva/`"
      :edit-modal-open="editModal"
      :item="reservation"
      :id="reservation?.id_Reserva"

      @success="$emit('loading-change')"
      @close-modal="editModal=false" 
        />

      <DangerModal :danger-modal-open="deleteModal" :message="'¿Eliminar Reserva?'" 
      @close-modal="deleteModal = false" :action="deleteItem" />
    </td>
  </tr>
</template>
  
  <script setup>
import { computed } from "vue";

const props = defineProps(["reservation"]);

const emits = defineEmits(['loading-change'])
const editModal = ref(false);
const deleteModal = ref(false);

const deleteItem = async () => {
    const result = await $fetch(`/api/reserva/${props?.reservation?.id_Reserva}`, {method: 'DELETE'})
    .then((res)=> {
      emits('loading-change');
      
    })
}

</script>