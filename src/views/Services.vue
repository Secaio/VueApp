<template>
  <section id="services" class="hide-overflow" >
    <v-layout white>
      <v-flex hidden-sm-and-down md6 >
        <v-img :src="require('@/assets/imgs/services.jpg')" height="100%" />
      </v-flex>
      <v-flex xs12 md6 text-xs-center pa-5>
        <v-layout align-center justify-center fill-height wrap >
          <v-flex xs12>
            <base-bubble-2 style="transform: translateX(55%)" />
            <base-heading class="black--text">
              Services
            </base-heading>

            <base-text class="mb-5">
              If you need a software solution for your business, you came to the right place.<br>
              Let's grow your business together! Here you can see how we gonna do this.
            </base-text>
          </v-flex>
          <v-flex v-for="(service, i) in services" :key="i" md6 text-xs-center mb-3 >
            <v-avatar class="elevation-6 mb-2" color="#69A1BB" size="64" tile>
              <v-icon dark size="52" v-text="service.icon" />
            </v-avatar>
            <base-text>
              <div class="mb-2" v-text="service.name"  />
              <div v-html="service.blurb" />
            </base-text>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  data: () => ({
    services: [
      {
        name: 'Research',
        icon: 'mdi-clipboard-text-outline',
        blurb: `For a good job, it's very important a well<br>
                knowing about the problem to be solved.`
      },
      {
        name: 'Design',
        icon: 'mdi-pencil-outline',
        blurb: 'Database and layout design are developed <br> depending on the research results.'
      },
      {
        name: 'Development',
        icon: 'mdi-settings-outline',
        blurb: 'After defining technology and layout, the <br> development starts always ensuring clarity,<br> quality, and continuous delivery.'
      },
      {
        name: 'Support',
        icon: 'mdi-account',
        blurb: "More important than making new customers is keeping the current ones. That's why I believe in 24/7 support. If you need any help, I'll be there."
      }
    ]
  })
}
</script>

