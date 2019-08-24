<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 mb-10 mt-5> 
        <div v-if="big">
          <base-headingCenter>
            Certifications
          </base-headingCenter>
        </div>
        <div v-else>
          <base-headingCentex>
            Certifications
          </base-headingCentex>
        </div>        
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
  },
  data() {
    return {
      big : true
      }
  },  
  methods: {
    media() {
      this.$screen.width > 769 ? this.big = true : this.big = false            
        }
    },
    watch: {
      '$screen.width'() {
          this.media()
        }
    }    
}
</script>