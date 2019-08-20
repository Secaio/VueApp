<template>
  <section id="recent-projects" class="hide-overflow">
    <v-layout>
      <v-flex xs12 md6 white text-xs-center pa-5 black--text>
        <base-bubble-1 style="transform: rotate(180deg) translateX(25%)" />
        <base-heading>
          Recent Projects
        </base-heading>

        <base-text class="mb-5">
          On this page you can see some of my most recent projects.
        </base-text>

        <v-card color="secondary">
          <v-container grid-list-md pa-2>
            <v-layout wrap>
              <v-flex v-for="project in projects" :key="project" xs12 md6>
                <a href="#">
                  <v-img
                    :src="require(`@/assets/imgs/${project}.jpeg`)"
                    max-height="300"
                  />
                </a>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex hidden-sm-and-down md6 text-center align-self-center="true">
         <base-heading >
          Selected Project
        </base-heading>       
        
         <base-text mt-150>
          Sorry, this page is under construction...
        </base-text>


      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  data: () => ({
    projects: [
      'project1',
      'project2',
      'project3',
      'project4'
    ]
  })
}
</script>
