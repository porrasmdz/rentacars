<template>
  <tr>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="flex items-center">
        <div class="w-9 h-9 rounded-full shrink-0  my-2 mr-3"
        :class="models == 'Clientes'? 'bg-indigo-500': 'bg-green-500'">
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
        <div class="font-medium text-slate-800">{{ `${customer.Nombre} ${customer.Apellido ?? ''}` }}</div>
      </div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="text-left">{{ customer.Email }}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="text-left">{{ customer.Celular }}</div>
    </td>
    <td v-if="models=='Clientes'" class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="text-center">{{ customer.Edad }}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="text-left font-medium text-sky-500">
        #{{ customer.id_Cliente ||customer.id_Inspector }}
      </div>
    </td>

    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
     <!-- Menu button -->
     <DropdownEditMenu :align="'right'" class="relative inline-flex">
        <li @click.stop="editModal = true">
          <span class="cursor-pointer font-medium text-sm text-slate-600 flex py-1 px-3
           hover:text-slate-800 hover:bg-slate-100 active:bg-slate-50">
           Editar {{ models == 'Clientes' ? 'Cliente':'Inspector' }}
          </span>
        </li>
        
        <li @click.stop="deleteModal = true">
          <span class="cursor-pointer font-medium text-sm text-red-600 flex py-1 px-3
           hover:text-red-800 hover:bg-red-100 active:bg-red-50">
           
           Eliminar {{ models == 'Clientes' ? 'Cliente':'Inspector' }}
          </span>
        </li>
      </DropdownEditMenu>

      <EditModal
      :editable-fields=" models=='Clientes'? ['Nombre', 'Apellido', 'Fecha_Nacimiento',
      'Email','Celular','Edad','Licencia','id_Inspector','imageURLFoto']
      :
      ['Nombre','Email','Celular','imageURLFotoin']
      "
      :put-url="models=='Clientes'? `/api/cliente/` : `/api/inspector/`"
      :edit-modal-open="editModal"
      :item="customer"
      :id="customer?.id_Cliente || customer?.id_Inspector"

      @success="$emit('loading-change')"
      @close-modal="editModal=false" 
        />
      <DangerModal :danger-modal-open="deleteModal" :message="'¿Eliminar Persona?'" 
      @close-modal="deleteModal = false" :action="deleteItem" />
    </td>
  </tr>
</template>
  
  <script setup>
import { computed } from "vue";

const props = defineProps(["customer", "value","models"]);


const emits = defineEmits(['loading-change'])
const editModal = ref(false);
const deleteModal = ref(false);

const deleteItem = async () => {
    const result = await $fetch(`/api/${
      props.models=='Clientes' ? 'cliente':'inspector'}/${
      props?.customer?.id_Cliente || props?.customer.id_Inspector }`, {method: 'DELETE'})
    .then((res)=> {
      useState('success').value = "El registro ha sido ELIMINADO exitosamente";
      emits('loading-change');
      
    })
    .catch((error)=>{
      useState('errors').value.push("Codigo " +error.statusCode + " - "+ error.statusMessage);
    })
}
</script>