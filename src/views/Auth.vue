<template>
    <main class="main" ref="main">

        <form v-if="showLogin" method="post" @submit.prevent="loginUser">
            <h2>Login to your account</h2>
            <div>
                <label for="username">Username</label>
                <input type="text" placeholder="email">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" name="password" placeholder="Password">
            </div>
            <button class="btn">Login</button>
            <p><span>Don't have an account?</span><a href="#" @click="showLogin = false">Register</a></p>
        </form>
        <form method="post" v-else>
            <h2>Register</h2>
            <p><span>Already have an account? </span><a href="#" @click="showLogin = true">Login</a></p>
        </form>

        <div class="right-content">
            <h1>Get great music, right now</h1>
            <h2>Listen to loads of songs for free</h2>
            <ul>
                <li>Discover music you'll fall in love with</li>
                <li>Create your own playlists</li>
                <li>Follow artists to keep up to date</li>
            </ul>
        </div>
    </main>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import client from '../services/apiClient'

const main = ref(null)
const backgrounds = ['bg_img.jpeg', 'bg_lake.webp', 'people_chill.avif']

const showLogin = ref(true)
let current = 0
let intervalId

onMounted(() => {
    setInterval(() => {
        main.value.style.backgroundImage = `url('/images/${backgrounds[current % backgrounds.length]}')`
        current++
    }, 5000)
})

onBeforeUnmount(() => clearInterval(intervalId))

const loginUser = (e) => {
    const formData = new FormData(e.target)
    console.log(formData)
}

</script>
<style lang="scss" scoped>
.main {
    background-image: url('/images/bg_img.jpeg');
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    -webkit-transition: background-image 0.2s ease-in-out;
    transition: background-image 0.2s ease-in-out;
}

form {
    color: #fff;
    flex-basis: 40%;
    margin-left: 5rem;
    margin-right: 2rem;

    &>div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    label {
        color: #fff;
        font-size: 1.4rem;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        
        &:link, &:visited {
            color: #fff;
        }

        &:hover, &:active {
            color: #2563eb;
        }

    }

    input {
        font-family: inherit;
        font-size: inherit;
        background: transparent;
        border: none;
        border-bottom: 1px solid #fff;
        background-color: #ffffff91;
        padding: 1rem 1.5rem;
        border-radius: .25rem;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: #fff;
        }
    }
}

.btn {
    padding: 1rem 2rem;
    border: 2px solid #fff;
    border-radius: 10rem;
    background-color: transparent;
    width: 100%;
    color: #fff;
    font-size: 1.3em;
    margin-bottom: 2rem;

    cursor: pointer;

    &:hover {
        background-color: #fbbf24;
    }
}

.right-content {
    flex: 1;
    border-left: 1px solid gray;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    h1 {
        color: #3ad93d;
    }
}
</style>