<template>
    <div class="album-art">
        <div class="photo"><img src="" alt=""></div>
        <div class="info">
            <p class="track-title">Not be quiet</p>
            <p class="artist">Disney Singers</p>
        </div>
    </div>
</template>
<script setup>
</script>
<style lang="scss">
.album-art {
    display: flex;
    align-items: center;
    gap: 1rem;
    .photo {
        flex-basis: 4rem;
        img {
            width: 55px;
            height: 55px;
            border-radius: 50%;
            object-fit: cover;
        }
    }

    .info {
        color: #fff;
        font-size: .8em;
        flex: 1;
        .track-title {
            font-weight: bold;
            margin-bottom: .75rem;
            font-size: 1.1em;
        }
        .artist {
            font-weight: 300;
        }
    }
}
</style>