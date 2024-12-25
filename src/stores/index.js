import { defineStore } from "pinia";

const useStore = defineStore('store', {
    state: () => ({
        auth: {
            user: null,
        },
        playlist: localStorage.getItem('playlist') || { currentTrack: null, tracks: [] }
    }),

})