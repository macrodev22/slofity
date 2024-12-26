<template>
    <div class="dashboard">
        <SideBar />
        <MainContent />
        <MusicPlayer class="fill-grid" />
    </div>
</template>
<script setup>
import { useTitle } from '@vueuse/core'
import MusicPlayer from '../components/MusicPlayer.vue';
import SideBar from '../components/SideBar.vue';
import MainContent from '../components/MainContent.vue';

const title = useTitle('Slotify', { titleTemplate: '%s | Dashboard' })
</script>

<style lang="scss">
.dashboard {
    display: grid;
    grid-template-columns: 2fr 5fr;
    grid-template-rows: 1fr 8rem;
    grid-template-areas: 'sidebar' 'maincontent'
                        'player' 'player';
    gap: 1rem;
    height: 100vh;
    background-color: #111827;
    padding: 1rem;


}

.fill-grid {
    grid-column: 1/-1;
}
</style>