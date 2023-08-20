<template>
    <div class="flex h-screen overflow-hidden">
        <Sidebar :sidebar-open="sidebarOpen" @close-sidebar="sidebarOpen = false"></Sidebar>
        <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-indigo-50">
            <Header :sidebar-open="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
            <Toast class="fixed z-50 w-1/2" :open="useState('success').value.length > 0" :type="'success'">
                <h2 class="text-xl font-bold">Éxito:</h2>
                <p class="text-lg ">{{ useState('success').value }}</p>
            </Toast>
            <Toast class="fixed z-50 w-1/2" :open="useState('errors').value.length > 0" :type="'error'">
                <h2 class="text-xl font-bold">Error:</h2>
                <p class="text-lg " v-for="error in useState('errors').value" :key="error">{{ error }}</p>
            </Toast>
            
            <main>
               
                <slot />
            </main>
        </div>
        
    </div>
</template>
<script setup lang="ts">
import Header from '~~/components/layout/Header.vue';
import Sidebar from '~~/components/layout/Sidebar.vue';

const sidebarOpen = ref<boolean>(false);
const errorsRef = ref([]);
const successRef = ref("");
const errors = useState('errors',()=> errorsRef);
const success = useState('success', ()=>successRef)


</script>
