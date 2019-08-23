<template>
  <v-app>
    <Header/>
    <Nav/>
    <v-content class="content">
      <router-view />
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Nav    from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Nav, 
    Header,
    Footer
  },
}
</script>

<style scoped>
.content {
  background-color: #fff;
}
</style>
