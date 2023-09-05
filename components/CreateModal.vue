<template>
     <ModalBasic
      :modalOpen="createModalOpen"
      @close-modal="createModalOpen = false; $emit('close-modal')"
      title="Crear Nuevo Registro"
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
            
            <div class="first:mt-2" v-for="(field, idx) in editableFields" :key="idx">
                
              <label class="block text-sm font-medium mb-1 mt-2" :for="field">
                {{field}}
              </label>
             
              <input :id="field" class="form-input w-full" type="text" v-model="newItem[field]"/>
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
            @click.stop="createModalOpen = false; $emit('close-modal')"
          >
            Cancelar
          </button>
          <button  @click.stop="createNewItem(); createModalOpen = false; $emit('close-modal')" class="btn-sm disabled:bg-indigo-300 bg-indigo-500 hover:bg-indigo-600 text-white">
            <span >Crear</span>
            
          </button>
        </div>
      </div>
    </ModalBasic>
</template>
<script setup>
const props = defineProps(['createModalOpen','editableFields','postUrl'])
const emits = defineEmits(['close-modal', 'success'])
const newItem = ref({

});

const createNewItem = async() => {
    await $fetch(props.postUrl,{
        method: 'POST',
        body: newItem.value
    }).then((res)=>{  
        useState('success').value = "El registro ha sido creado exitosamente";
        emits('success')})
    .catch((error)=> {
        useState('errors').value.push("Codigo " +error.statusCode + " - "+ error);
    })
}

</script>