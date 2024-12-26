<template>
    <div class="player">
        <AlbumArt />
        <div class="controls-container">
            <div class="controls">
                <button class="control-btn">
                    <img :src="prevIcon" alt="previous">
                </button>
                <button class="control-btn play" @click="playTrack">
                    <img :src="playIcon" alt="play" v-if="!isPlaying">
                    <img :src="pauseIcon" alt="pause" v-else>
                </button>
                <button class="control-btn">
                    <img :src="nextIcon" alt="next">
                </button>
            </div>
            <MusicSlider />
        </div>
        <div class="playlist-controls">
            <div class="controls">
                <button class="control-btn">
                    <img :src="favouriteIcon" alt="like">
                </button>
                <button class="control-btn">
                    <img :src="shuffleIcon" alt="shuffle">
                </button>
                <button class="control-btn">
                    <img :src="repeatIcon" alt="repeat">
                </button>
                <button class="control-btn">
                    <img :src="volumeIcon" alt="volume">
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>

import { ref, onBeforeMount } from 'vue'

import playIcon from '../assets/play_arrow_28dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import pauseIcon from '../assets/pause_28dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import nextIcon from '../assets/skip_next_28dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import prevIcon from '../assets/skip_previous_28dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import shuffleIcon from '../assets/shuffle_28dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import shuffleOnIcon from '../assets/shuffle_on_28dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import favouriteIcon from '../assets/favorite_28dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import repeatIcon from '../assets/repeat_28dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import volumeIcon from '../assets/volume_up_28dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'

import MusicSlider from './ui/MusicSlider.vue'
import AlbumArt from './ui/AlbumArt.vue'


const isPlaying = ref(false)
const audioPlayer = new Audio()
const audioSrc = ref('/music/Makoma-Napesi.mp3')

onBeforeMount(() => {
    audioPlayer.src = audioSrc.value
})


const playTrack = () => {
    const paused = audioPlayer.paused
    isPlaying.value = !isPlaying.value

    if(paused) audioPlayer.play()
    else audioPlayer.pause()
}


</script>
<style lang="scss">
.player {
    display: flex;
    gap: 5rem;
    background-color: #1f2937;
    border-radius: .75rem;
    padding: 1rem;
    align-items: center;


    &>:first-child, &>:last-child {
        flex-basis: 20%
    }

    .controls-container {
        flex: 1;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5rem;
        
    }
    .controls {
        display: flex;
        gap: 1rem;
        align-items: center;

    }

    .control-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: none;
        padding: .75rem;
        background-color: transparent;
        cursor: pointer;

        &:hover {
            background-color: #848484;
        }

        img {
            width: 3rem;
            height: 3rem;
        }

        &.play {
            background-color: #ffffff5b;
            img {
                width: 4.5rem;
                height: 4.5rem;
            }
        }
    }

    .playlist-controls {
        .controls {
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>