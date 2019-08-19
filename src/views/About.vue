<template>
  <section id="about" class="hide-overflow">
    <v-layout white>
      <v-flex xs12 md6 pa-5>
        <base-bubble-1 style="transform: translate(5%, -5%)"/>
        <base-heading class="info--text">
          About Me
        </base-heading>

        <base-text class="mb-5">
         I am a Senior Experienced software developer and enthusiast about new technologies, innovative projects and engaging teams, with over 15 years of experience
         developing software with high standards and interacting with multiple stakeholders from technical and non-technical backgrounds ensuring clarity, quality, and
         continuous delivery.I have worked with technologies such as Delphi, C, Java, SQL and Databases (Microsoft SQL Server, Firebird, Oracle) now I work with JavaScript
          (Vue, React) and Node with MySql, PostgresSql and MongoDB. 
        </base-text>

        <base-subheading class="info--text">
          Skills 
        </base-subheading>
        <base-text class="mb-5">
          I have a strong programming logic, good knowledge of JavaScript and reactive programming with Node. 
          Strong knowledge about Delphi and Databases and I'm learning about Data Mining, Deep Learning and Data Science.
        </base-text>

        <v-alert outlined color="info">
          <v-layout v-for="(skill, i) in skills" :key="i" style="color: #69A1BB;" wrap>
            <v-flex xs6 text-uppercase v-text="skill.name"/>
            <v-flex xs6 text-xs-right  v-text="`${skill.value}%`"/>
            <v-progress-linear :value="skill.value"  color="info" height="8" />
          </v-layout>
        </v-alert>

        <base-subheading class="info--text">
          Strengths 
        </base-subheading>
        <base-text class="mb-5">
          I'm a trustworthy person, my word is my bond. I've a solid work ethic. When I'm working on a project, I don't just want to meet deadlines, rather, I prefer to 
          complete the project well ahead of schedule. I'm a team player and I'm always ready to learn something new when it is necessary.
        </base-text>

      </v-flex>
      
      <v-flex hidden-sm-and-down md6>
        <v-img :src="require('@/assets/imgs/aboutme.png')" height="100%" />
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  data: () => ({
    skills: [
       {
        name: 'Data Science',
        value: 50
      },       
      {
        name: 'Web Design',
        value: 75
      },
      {
        name: 'Web Development',
        value: 80
      },
      {
        name: 'Web Support',
        value: 90
      },
      {
        name: 'Database Administrator',
        value: 95
      },
      {
        name: 'Desktop ERP Development',
        value: 100
      },      
    ]
  })
}
</script>
