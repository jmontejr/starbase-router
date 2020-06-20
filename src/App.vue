<template>
    <div id="app">
        <h1>{{ title }}</h1>
        <h4 class="mb-5">
            <router-link class="link" to="/data/people">Meet the Characters</router-link> | 
            <router-link class="link" to="/data/planets">Explore the Planets</router-link>
        </h4>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: process.env.VUE_APP_TITLE
        }
    }
}
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
