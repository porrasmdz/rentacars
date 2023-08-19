<template>
  <tr>
    <td class="px-2 first:pl-5 last:pr-5 py-3 text-justify whitespace-nowrap overflow-hidden w-1/3">
      <div class="flex items-center">
        
        <img :src="business?.imageURLLogo" alt="">
          
        
      </div>
    </td>
    
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="">{{ business?.RUC }}</div>
    </td>
    
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="">{{ business?.Nombre }}</div>
    </td>
    
    
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
      <!-- Menu button -->
      <button class="text-slate-400 hover:text-slate-500 rounded-full">
        <span class="sr-only">Menu</span>
        <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="2" />
          <circle cx="10" cy="16" r="2" />
          <circle cx="22" cy="16" r="2" />
        </svg>
      </button>
    </td>
  </tr>
</template>
  
  <script setup>
import { computed } from "vue";

const props = defineProps(["business"]);


</script>