<template>
<div class="slider">
    <div class="bar"><span class="progress"></span></div>
</div>
</template>
<script setup>
</script>

<style lang="scss">
.slider {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    .bar {
        background-color: #9ca3af;
        height: 3px;
        width: 100%;
        cursor: pointer;
        border-radius: 5px;
        overflow: hidden;
        position: relative;

        .progress {
            display: inline-block;
            position: absolute;
            left: 0;
            width: 10%;
            background-color: #fff;
            height: 100%;
        }
    }
}
</style>