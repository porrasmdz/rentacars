<template>
  <tr>
    <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
      <div class="flex items-center">
     
        <div class="font-medium text-slate-800">{{ recharge.Id_pago ?? '---' }}</div>
      </div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      
      <span >{{ new Date(recharge.Fecha).toLocaleDateString() }}</span>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="">{{ recharge.Cobertura_Seguro ?? '---' }}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ">
      <div class="flex w-16 gap-2 justify-between items-center">
        <span>$</span>
        <span>{{ recharge.Monto ?? '0.00'}}</span>
    
      </div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class=" font-medium text-sky-500">
        {{ recharge.Razon ?? '---' }}
      </div>
    </td>

    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
      <DropdownEditMenu :align="'right'" class="relative inline-flex">
        <li @click.stop="editModal = true">
          <span class="cursor-pointer font-medium text-sm text-slate-600 flex py-1 px-3
           hover:text-slate-800 hover:bg-slate-100 active:bg-slate-50">
           Editar Recargo
          </span>
        </li>
        
        <li @click.stop="deleteModal = true">
          <span class="cursor-pointer font-medium text-sm text-red-600 flex py-1 px-3
           hover:text-red-800 hover:bg-red-100 active:bg-red-50">
           Eliminar Recargo
          </span>
        </li>
      </DropdownEditMenu>
      
      <EditModal
      :editable-fields="['Id_pago','Fecha','Cobertura_Seguro','Monto','Razon']"
      :put-url="`/api/recargo/`"
      :edit-modal-open="editModal"
      :item="recharge"
      :id="recharge?.id_Recargo"
      @success="$emit('loading-change')"
      @close-modal="editModal=false" 
        />
      <DangerModal :danger-modal-open="deleteModal" :message="'¿Eliminar Recargo?'" 
      @close-modal="deleteModal = false" :action="deleteItem" />
    </td>
  </tr>
</template>
  
  <script setup>
import { computed } from "vue";

const props = defineProps(["recharge"]);


const emits = defineEmits(['loading-change'])
const editModal = ref(false);
const deleteModal = ref(false);

const deleteItem = async () => {
  
    const result = await $fetch(`/api/recargo/${props?.recharge?.id_Recargo}`, {method: 'DELETE'})
    .then((res)=> {
      useState('success').value = "El registro ha sido ELIMINADO exitosamente";
      emits('loading-change');
      
    })
    .catch((error)=>{
      useState('errors').value.push(error);
    })
}
</script>