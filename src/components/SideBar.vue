<template>
    <div class="side-bar">
        <h2> <img :src="slotifyIcon" alt="slotify">  Slotify</h2>

        <router-link class="link" :to="{ name: 'dashboard-home' }"> <img :src="homeIcon" alt=""> Home</router-link>
        <router-link class="link" :to="{ name: 'dashboard-categories' }"><img :src="categoriesIcon" alt="categories"> Categories</router-link>
        <router-link class="link" :to="{ name: 'dashboard-artists' }"><img :src="aritistIcon" alt="artists"> Artists</router-link>
    </div>
</template>
<script setup>
import slotifyIcon from '../assets/favicon.svg'
import categoriesIcon from '../assets/category_search_28dp_FFF_FILL0_wght200_GRAD0_opsz24.svg'
import homeIcon from '../assets/home_28dp_FFF_FILL0_wght200_GRAD0_opsz24.svg'
import aritistIcon from '../assets/artist_28dp_FFF_FILL0_wght200_GRAD0_opsz24.svg'
</script>
<style lang="scss">

.side-bar {
    background-color: #1f2937;
    border-radius: .75rem;
    padding: 2rem;

    &>h2 {
        color: #fff;
        font-weight: 300;
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 3rem;
        img {
            width: 30px;
            height: 30px;
        }
    }

    .link {
        display: flex;
        align-items: center;
        padding: 1rem 2rem;
        border-radius: .75rem;
         &:link, &:visited {
            color: #fff;
            text-decoration: none;
            font-weight: 100;
            gap: 1rem;
         }

         &:hover, &:active {
            background-color: #374151;
         }
    }
}
</style>