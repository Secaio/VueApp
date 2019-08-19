<template>
    <v-navigation-drawer v-model="drawer" app>
      <v-list v-for="(it, i) in menuIt" :key="i"  dense>
     
       <router-link class="link" :to="it.to"> 
         <v-list-item @click="Menu()">
           <v-list-item-action>
             <v-icon>{{it.ico}}</v-icon>
           </v-list-item-action>
           <v-list-item-content>
           <v-list-item-title>{{it.title}}</v-list-item-title>              
           </v-list-item-content>
         </v-list-item>
       </router-link> 
     
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  import barramento from '@/barramento'
 
  export default {
    data: () => ({
      drawer: null,
      menuIt: [
        {
          title: 'Home',
          ico: 'mdi-home',
          to: '/'
        },
         {
          title: 'About',
          ico: 'mdi-account-card-details-outline',
          to: '/about'
        },
        {
          title: 'Services',
          ico: 'mdi-settings',
          to: '/services'
        },
        {
          title: 'Education',
          ico: 'mdi-school',
          to: '/education'
        },
        {
          title: 'Certifications',
          ico: 'mdi-certificate',
          to: '/certifications'
        },
        {
          title: 'Work Experience',
          ico: 'mdi-worker',
          to: '/work'
        },
        {
          title: 'My Recent Projects',
          ico: 'mdi-desktop-mac',
          to: '/projects'
        },
        {
          title: 'Get In Touch With Me',
          ico: 'mdi-contact-phone',
          to: '/touch'
        }                 
      ]
    }),
    methods: {
      Menu() {
          this.drawer = !this.drawer
          }   
      },
      created() {
          barramento.onDrawerClick(() => {
            this.drawer =  !this.drawer
        })     
    }  
  }
</script>

<style scoped>
.v-list-item__action i, a {
  text-decoration: none;
}
</style>