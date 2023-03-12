<template>
    <nav>
        <router-link to="/">Data Ref</router-link> |
        <router-link to="/data-reactive">Data Reactive</router-link> |
        <router-link to="/method">Method</router-link> |
        <router-link to="/input">Input V-Model</router-link> |
        <router-link to="/computed">Computed</router-link> |
        <router-link to="/watch">Watch</router-link> |
        <router-link to="/provide-inject">Provide Inject</router-link> |
        <router-link to="/reference">Template Ref</router-link> |
        <router-link to="/sending-event">Sending Event</router-link> |
        <router-link to="/composable">Composable</router-link> |
    </nav>
    <router-view />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
