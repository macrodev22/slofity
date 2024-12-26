import { defineStore } from "pinia";

const useStore = defineStore('store', {
    state: () => ({
        auth: {
            user: null,
        },
        playlist: JSON.parse(localStorage.getItem('playlist')) || { currentTrack: null, tracks: [] },
        shuffle: true,
        repeat: {
            on: true,
            mode: 1
        }
    }),

})