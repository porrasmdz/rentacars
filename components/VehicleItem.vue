<template>
  <tr>
    <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap overflow-hidden w-auto">
      <div class="flex items-center">
        
        <img class="h-36" :src="vehicle?.imageURLVe" alt="">
          
        
      </div>
    </td>
    
    <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap hidden sm:table-cell">
      <div class="flex items-center">
       
        <div class="font-medium text-slate-800">{{ vehicle?.No_Matricula }}</div>
      </div>
    </td>
    
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap hidden sm:table-cell">
      <div class="">{{ vehicle?.RUC }}</div>
    </td>
    
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ">
      <div class="">{{ vehicle?.Marca }}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap hidden sm:table-cell">
      <div class="">{{ vehicle?.Disponibilidad }}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap hidden sm:table-cell">
      
      <span >{{ vehicle?.Precio_alquiler }}</span>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap hidden sm:table-cell">
      
      <span >{{ vehicle?.Capacidad }}</span>
    </td>

    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
      <DropdownEditMenu :align="'right'" class="relative inline-flex">
        <li @click.stop="editModal = true">
          <span class="cursor-pointer font-medium text-sm text-slate-600 flex py-1 px-3
           hover:text-slate-800 hover:bg-slate-100 active:bg-slate-50">
           Editar Vehiculo
          </span>
        </li>
        
        <li @click.stop="deleteModal = true">
          <span class="cursor-pointer font-medium text-sm text-red-600 flex py-1 px-3
           hover:text-red-800 hover:bg-red-100 active:bg-red-50">
           Eliminar Vehiculo
          </span>
        </li>
      </DropdownEditMenu>

      <EditModal
      :editable-fields="['RUC', 'Marca', 'Disponibilidad','Precio_alquiler','Capacidad','imageURLVe']"
      :put-url="`/api/vehiculo/`"
      :edit-modal-open="editModal"
      :item="vehicle"
      :id="vehicle?.No_Matricula"

      @success="$emit('loading-change')"
      @close-modal="editModal=false" 
        />

      <DangerModal :danger-modal-open="deleteModal" :message="'¿Eliminar Vehiculo?'" 
      @close-modal="deleteModal = false" :action="deleteItem" />
    </td>
  </tr>
</template>
  
  <script setup>
import { computed } from "vue";

const props = defineProps(["vehicle"]);
const emits = defineEmits(['loading-change'])

const editModal = ref(false);
const deleteModal = ref(false);

const deleteItem = async () => {
    const result = await $fetch(`/api/vehiculo/${props?.vehicle?.No_Matricula}`, {method: 'DELETE'})
    .then((res)=> {
      useState('success').value = "El registro ha sido ELIMINADO exitosamente";
      emits('loading-change');
      
    })
    .catch((error)=>{
      useState('errors').value.push(error);
    })
}


</script>