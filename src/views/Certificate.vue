<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 mb-10 mt-5>        
        <base-headingCenter>
          My Certifications
        </base-headingCenter>

      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex md6>
         <Carrousel/>
       </v-flex>          
    </v-layout>  
         
 </v-container> 
</template>

<script>
import Carrousel from '@/components/Carrousel.vue'

export default {
  components: {
    Carrousel
  }
}
</script>