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
import Header from '@/components/Header.vue'
import Nav    from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Nav, 
    Footer
  },
}
</script>

<style scoped>

.content {
  background-color: #fff;
}
</style>
