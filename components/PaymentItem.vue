<template>
  <tr>
    <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
      <div class="flex items-center">
      
        <div class="font-medium text-slate-800">{{ payment?.Id_Cliente ?? 'null'}}</div>
      </div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="flex gap-2 items-center justify-between w-16">
        <span >$</span>
        <span >{{ payment?.Monto?.toFixed(2)  ?? '0.00'}}</span>
    
      </div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="">{{ new Date(payment?.Fecha)?.toLocaleDateString() ?? '--/--/--'}}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="">{{ new Date(payment?.Plazo)?.toLocaleDateString()?? '--/--/--' }}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class=" font-medium text-sky-500">
        {{ payment?.Forma_pago ?? 'null' }}
      </div>
    </td>

    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
      <!-- Menu button -->
      <DropdownEditMenu :align="'right'" class="relative inline-flex">
        <li @click.stop="editModal = true">
          <span class="cursor-pointer font-medium text-sm text-slate-600 flex py-1 px-3
           hover:text-slate-800 hover:bg-slate-100 active:bg-slate-50">
           Editar Pago
          </span>
        </li>
        
        <li @click.stop="deleteModal = true">
          <span class="cursor-pointer font-medium text-sm text-red-600 flex py-1 px-3
           hover:text-red-800 hover:bg-red-100 active:bg-red-50">
           Eliminar Pago
          </span>
        </li>
      </DropdownEditMenu>

      <EditModal
      :editable-fields="['Id_Cliente', 'id_Devolucion','Monto', 'Fecha','conf_pago','Plazo','Forma_pago']"
      :put-url="`/api/pago/`"
      :edit-modal-open="editModal"
      :item="payment"
      :id="payment?.Id_Pago"

      @success="$emit('loading-change')"
      @close-modal="editModal=false" 
        />
      <DangerModal :danger-modal-open="deleteModal" :message="'¿Eliminar Pago?'" @close-modal="deleteModal = false" :action="deleteItem" />
    </td>
  </tr>
</template>
  
<script setup>
const props = defineProps(["payment"]);

const emits = defineEmits(['loading-change'])
const editModal = ref(false);
const deleteModal = ref(false);

const deleteItem = async () => {
    const result = await $fetch(`/api/pago/${props?.payment?.Id_Pago}`, {method: 'DELETE'})
    .then((res)=> {
      useState('success').value = "El registro ha sido ELIMINADO exitosamente";
      emits('loading-change');
      
    })
    .catch((error)=>{
      useState('errors').value.push("Codigo " +error.statusCode + " - "+ error);
    })
}

</script>