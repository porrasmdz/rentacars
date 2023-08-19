<template>
  <tr>
    <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap">
      <div class="flex items-center">
        <!-- <div class="w-9 h-9 rounded-full shrink-0  my-2 mr-3"
        :class="'bg-green-500'">
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
        </div> -->
        <div class="font-medium text-slate-800">{{ payment.Id_Cliente }}</div>
      </div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap flex w-20 gap-2 justify-between">
      <span>$</span>
      <span >{{ payment.Monto.toFixed(2) }}</span>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="">{{ new Date(payment.Fecha).toLocaleDateString() }}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="">{{ new Date(payment.Plazo).toLocaleDateString() }}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class=" font-medium text-sky-500">
        {{ payment.Forma_pago }}
      </div>
    </td>

    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
      <!-- Menu button -->
      <DropdownEditMenu :align="'right'" class="relative inline-flex">
        <li>
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

      <DangerModal :danger-modal-open="deleteModal" :message="'¿Eliminar Pago?'" @close-modal="deleteModal = false" :action="deleteItem" />
    </td>
  </tr>
</template>
  
<script setup>
const props = defineProps(["payment"]);

const emits = defineEmits(['loading-change'])
const deleteModal = ref(false);

const deleteItem = async () => {
    const result = await $fetch(`/api/pago/${props?.payment?.id_Pago}`, {method: 'DELETE'})
    .then((res)=> {
      emits('loading-change');
      
    })
}

</script>