<template>
  <section id="about" class="hide-overflow">
    <v-layout white>
      <v-flex xs12 md6 pa-5>
        <base-headingCenter class="black--text">
          Work Experience
        </base-headingCenter>       
        <Work />
      </v-flex>
      
      <v-flex hidden-sm-and-down md6>

        <v-img :src="require('@/assets/imgs/experience.png')" height="100%" />
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import Work from '../components/Work.vue'
export default {
  components: {
    Work
  }
} 
</script>