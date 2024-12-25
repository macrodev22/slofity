<template>
    <div class="dashboard">
        <SideBar></SideBar>
        <div class="main-content">
            <div class="content">
                Cotent goes here
            </div>
            <MusicPlayer />
        </div>
    </div>
</template>
<script setup>
import { useTitle } from '@vueuse/core'
import MusicPlayer from '../components/MusicPlayer.vue';
import SideBar from '../components/SideBar.vue';

const title = useTitle('Slotify', { titleTemplate: '%s | Dashboard' })
</script>

<style lang="scss">
.dashboard {
    display: flex;
    height: 100vh;

    :first-child {
        flex-basis: 20%;
    }

    .main-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
</style>