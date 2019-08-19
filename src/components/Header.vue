<template>
     <v-app-bar app color="indigo" dark >
      <v-app-bar-nav-icon :key="drawer" @click="sendMenuToNav(drawer)"></v-app-bar-nav-icon>
      <v-toolbar-title>ROMEU</v-toolbar-title>
    </v-app-bar>   
</template>

<script>
  import barramento from '../barramento.js'
  
  export default {
    props:   { drawer: null },
    methods: {
        sendMenuToNav(drawer) {
           barramento.setDrawer(drawer)
        }
    }
  }
</script>