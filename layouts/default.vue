<template>
    <div class="flex h-screen overflow-hidden">
        <Sidebar :sidebar-open="sidebarOpen" @close-sidebar="sidebarOpen = false"></Sidebar>
        <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-indigo-50">
            <Header :sidebar-open="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
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

</script>
