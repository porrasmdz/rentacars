<template>
     <ModalBasic
      :modalOpen="editModalOpen"
      @close-modal="editModalOpen = false; $emit('close-modal')"
      :title="`Editar Registro ${id}`"
      v-bind="$attrs"
    >
      <!-- Modal content -->
      <div class="px-5 pt-4 pb-1">
        <div class="text-sm">
          <!-- <div class="font-medium text-slate-800 mb-2">
            Haga click sobre el círculo y elija una foto de perfil.
          </div> -->

          <!-- Form Start -->
          <form autocomplete="on" class="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
           {{ putUrl + id }}
            <div v-for="(field, idx) in editableFields" :key="idx">
                
              <label class="block text-sm font-medium mb-1 mt-2" :for="`${field}-${id}`">
                {{field}}
              </label>
             
              <input :id="`${field}-${id}`" class="form-input w-full" type="text" v-model="newItem[field]" />
              
            </div>
            <!-- Name Input + Label -->
            <div>
            </div>
          
            
          </form>
        </div>
      </div>
      <!-- Modal footer -->
      <div class="px-5 py-4">
        <div class="flex flex-wrap justify-end space-x-2">
          <button
            class="
              btn-sm
              border-slate-200
              hover:border-slate-300
              text-slate-600
            "
            @click.stop="editModalOpen = false; $emit('close-modal')"
          >
            Cancelar
          </button>
          <button  @click.stop="createNewItem(); editModalOpen = false; $emit('close-modal')" class="btn-sm disabled:bg-indigo-300 bg-indigo-500 hover:bg-indigo-600 text-white">
            <span >Crear</span>
            
          </button>
        </div>
      </div>
    </ModalBasic>
</template>
<script setup>
const props = defineProps(['editModalOpen','editableFields','putUrl','item', 'id'])
const emits = defineEmits(['close-modal', 'success'])
const newItem = ref({...props.item});

const createNewItem = async() => {
    console.log(newItem.value)
    await $fetch(props.putUrl+props.id,{
        method: 'PUT',
        body: {...newItem.value}
    }).then((res)=>{  
        useState('success').value = "El registro ha sido ACTUALIZADO exitosamente";
        emits('success')})
    .catch((error)=> {
        useState('errors').value.push(error);
        console.log("ERROR",error)
    })
}

const cleanItem = () => {
  Object.keys(newItem.value).map((key)=>{
    if(key.includes('Fecha') || key.includes('Plazo')){
      const date = new Date(newItem.value[key])
      const result = date.getFullYear() +'-' + (date.getUTCMonth()+1).toString().padStart(2,'0')+
      '-' + (date.getUTCDate()).toString().padStart(2,'0');
      newItem.value[key] =  result
    }
  })
}

onMounted(()=>{
  cleanItem();
})


</script>