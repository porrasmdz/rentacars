<template>
  <tr>
    <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
      <div class="flex items-center">
       
        <div class="font-medium text-slate-800">{{ devolution?.No_Matricula }}</div>
      </div>
    </td>
    
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="">{{ devolution?.Estado_devolucion }}</div>
    </td>
    
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="">{{ devolution?.Hora_devolucion }}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="">{{ devolution?.Hora_devolucion_real }}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      
      <span >{{ new Date(devolution?.Fecha_devolucion)?.toLocaleDateString() }}</span>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      
      <span >{{ new Date(devolution?.Fecha_devolucion_real)?.toLocaleDateString() }}</span>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="">{{ devolution.Lugar_devolucion }}</div>
    </td>
    
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
      
      <DropdownEditMenu :align="'right'" class="relative inline-flex">
        <li @click.stop="editModal = true">
          <span class="cursor-pointer font-medium text-sm text-slate-600 flex py-1 px-3
           hover:text-slate-800 hover:bg-slate-100 active:bg-slate-50">
           Editar Devolucion
          </span>
        </li>
        
        <li @click.stop="deleteModal = true">
          <span class="cursor-pointer font-medium text-sm text-red-600 flex py-1 px-3
           hover:text-red-800 hover:bg-red-100 active:bg-red-50">
           Eliminar Devolucion
          </span>
        </li>
      </DropdownEditMenu>

      <EditModal
      :editable-fields="['No_Matricula', 'Estado_devolucion', 'Hora_devolucion',
      'Hora_devolucion_real','Fecha_devolucion','Fecha_devolucion_real','Lugar_devolucion']"
      :put-url="`/api/devolucion/`"
      :edit-modal-open="editModal"
      :item="devolution"
      :id="devolution?.id_Devolucion"

      @success="$emit('loading-change')"
      @close-modal="editModal=false" 
        />

      <DangerModal :danger-modal-open="deleteModal" :message="'¿Eliminar Devolucion?'" 
      @close-modal="deleteModal = false" :action="deleteItem" />
    </td>
  </tr>
</template>
  
  <script setup>
import { computed } from "vue";

const props = defineProps(["devolution"]);

const emits = defineEmits(['loading-change'])
const editModal = ref(false);
const deleteModal = ref(false);

const deleteItem = async () => {
    const result = await $fetch(`/api/devolucion/${props?.devolution?.id_Devolucion}`, {method: 'DELETE'})
    .then((res)=> {
      useState('success').value = "El registro ha sido ELIMINADO exitosamente";
      emits('loading-change');
      
    })
    .catch((error)=>{
      useState('errors').value.push(error);
    })
}

</script>