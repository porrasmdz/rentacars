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


              <select v-if="field.toString().toLowerCase().includes('ruc')" :id="field" class="form-input w-full">
                
                
                <option v-for="(option,id) in options['ruc']?.map((item)=>item.RUC)" :key="`${id}-${option}`" :value="'sda'">
                  {{ option }}
                </option>
              </select>
              <select v-else-if="field.toString().toLowerCase().includes('no_matricula') && notvehicle" :id="field" class="form-input w-full">
                
                
                <option v-for="(option,id) in options['vehiculo']?.map((item)=>item.No_Matricula)" :key="`${id}-${option}`" :value="'sda'">
                  {{ option }}
                </option>
              </select>
              <input v-else-if="!field.toString().toLowerCase().includes('id_')" :id="field" class="form-input w-full" type="text" v-model="newItem[field]"/>
              <select v-else-if="field.toString().toLowerCase().includes('cliente')" :id="field" class="form-input w-full">
                
                <option v-for="(option,id) in options['cliente']?.map((item)=>item.id_Cliente)" :key="`${id}-${option}`" :value="'sda'">
                  {{ option }}
                </option>
              </select>

              <select v-else-if="field.toString().toLowerCase().includes('devolucion')" :id="field" class="form-input w-full">
                
                
                <option v-for="(option,id) in options['devolucion']?.map((item)=>item.id_Devolucion)" :key="`${id}-${option}`" :value="'sda'">
                  {{ option }}
                </option>
              </select>
              
              <select v-else-if="field.toString().toLowerCase().includes('inspector')" :id="field" class="form-input w-full">
                
                
                <option v-for="(option,id) in options['inspector']?.map((item)=>item.id_Inspector)" :key="`${id}-${option}`" :value="'sda'">
                  {{ option }}
                </option>
              </select>
              
              <select v-else-if="field.toString().toLowerCase().includes('pago')" :id="field" class="form-input w-full">
                
                
                <option v-for="(option,id) in options['pago']?.map((item)=>item.Id_Pago)" :key="`${id}-${option}`" :value="'sda'">
                  {{ option }}
                </option>
              </select>
              
              

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
const props = defineProps(['createModalOpen','editableFields','postUrl','notvehicle'])
const emits = defineEmits(['close-modal', 'success'])
const newItem = ref({

});

const options = ref({

})

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

const fetchOptions = async (model) => {
  console.log("fetching")
  await $fetch('/api/'+model).then((res)=>{
    options.value[model] = res.data
    console.log("fetched")
  }
  )
  .catch((error)=>{
    
    useState('errors').value.push("Error al cargar Ids: "+ error);
  })
}

const fetchRucOptions = async () => {
  
  await $fetch('/api/empresa').then((res)=>{
    options.value['ruc'] = res.data
  }
  )
  .catch((error)=>{
    
    useState('errors').value.push("Error al cargar Ids: "+ error);
  })
}


const fetchCarOptions = async () => {
  
  await $fetch('/api/vehiculo').then((res)=>{
    options.value['vehiculo'] = res.data.filter((item)=> item.Disponibilidad > 0)
  }
  )
  .catch((error)=>{
    
    useState('errors').value.push("Error al cargar Ids: "+ error);
  })
}

onMounted(()=> {
  fetchOptions('cliente');
  fetchOptions('inspector');
  fetchOptions('devolucion');
  fetchOptions('pago');
  fetchOptions('reserva');
  fetchOptions('recargo');
  fetchCarOptions();
  fetchRucOptions();
})
</script>