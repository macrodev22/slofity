<template>
    <div class="player">
        <div class="prev">Prev</div>
        <div class="play">Play</div>
        <div class="next">Next</div>
    </div>
</template>
<script setup>

</script>
<style lang="scss">
.player {
    display: flex;
    gap: 1rem;

    &>div {
        border-radius: 50%;
        border: 1px solid #fff;
    }
}
</style>