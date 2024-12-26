<template>
    <div class="main-content">
            <div class="top-bar">
                <div class="search-container">
                    <input type="text" placeholder="Search a song">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                </div>
                <div class="user-info">
                    <div class="profile">
                        <img src="" alt="">
                        <div class="details">
                            <p class="name">Nice user</p>
                        </div>
                    </div>
                </div>
            </div>
            <RouterView />
        </div>
</template>

<script setup>
import { RouterView } from 'vue-router';



</script>

<style lang="scss">
    .main-content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background-color: #1f2937;
        border-radius: .75rem;
        padding: 2rem;
        color: #fff;

        .top-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 3rem;

            .user-info {
                display: flex;
                align-items: center;
                img {
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                }
                .profile {
                    display: flex;
                    gap: 1rem;
                    color: #fff;
                    align-items: center;
                    font-size: .8em;
                }
            }
        }
    }

    .search-container {
        font-size: 1.5rem;
        position: relative;
        flex-basis: 50%;
        input {
            font-size: inherit;
            padding: 1rem 1.5rem;
            border-radius: 5rem;
            width: 100%;
            background-color: #374151;
            border: none;
            padding-right: 4.5rem;
            color: #fff;
            font-weight: 100;
            &:focus {
                outline: none;
            }
        }
        svg {
            position: absolute;
            right: 1rem;
            z-index: 10;
            top: 50%;
            transform: translateY(-50%);
        }
    }
</style>