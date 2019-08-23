<template>
     <v-app-bar app color="indigo" dark >
      <v-app-bar-nav-icon :key="drawer" @click="sendMenuToNav(drawer)"></v-app-bar-nav-icon>
      <v-toolbar-title>
       <v-icon large>mdi-account-card-details-outline</v-icon>
         ROMEU
      </v-toolbar-title>
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