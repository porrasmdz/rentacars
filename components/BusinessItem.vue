<template>
  <tr>
    <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap overflow-hidden w-1/5">
      <div class="flex items-center">
        
        <img class="h-36" :src="business?.imageURLLogo" alt="">
          
        
      </div>
    </td>
    
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="">{{ business?.RUC }}</div>
    </td>
    
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="">{{ business?.Nombre }}</div>
    </td>
    
    
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
      <DropdownEditMenu :align="'right'" class="relative inline-flex">
        <li @click.stop="editModal = true">
          <span class="cursor-pointer font-medium text-sm text-slate-600 flex py-1 px-3
           hover:text-slate-800 hover:bg-slate-100 active:bg-slate-50">
           Editar Empresa
          </span>
        </li>
        
        <li @click.stop="deleteModal = true">
          <span class="cursor-pointer font-medium text-sm text-red-600 flex py-1 px-3
           hover:text-red-800 hover:bg-red-100 active:bg-red-50">
           Eliminar Empresa
          </span>
        </li>
      </DropdownEditMenu>

      
      <EditModal
      :editable-fields="[ 'Nombre', 'imageURLLogo']"
      :put-url="`/api/empresa/`"
      :edit-modal-open="editModal"
      :item="business"
      :id="business?.RUC"

      @success="$emit('loading-change')"
      @close-modal="editModal=false" 
        />
      <DangerModal :danger-modal-open="deleteModal" :message="'¿Eliminar Empresa?'" 
      @close-modal="deleteModal = false" :action="deleteItem" />
    
    </td>
  </tr>
</template>
  
  <script setup>

const props = defineProps(["business"]);

const emits = defineEmits(['loading-change'])
const editModal = ref(false);
const deleteModal = ref(false);

const deleteItem = async () => {
    const result = await $fetch(`/api/empresa/${props?.business?.RUC}`, {method: 'DELETE'})
    .then((res)=> {
      useState('success').value = "El registro ha sido ELIMINADO exitosamente";
      emits('loading-change');
      
    })
    .catch((error)=>{
      useState('errors').value.push(error);
    })
}

</script>