<template>
  <section id="recent-projects" class="hide-overflow">
    <v-layout>
      <v-flex xs12 md6 white text-xs-center pa-5 black--text>
        <base-bubble-1 style="transform: rotate(180deg) translateX(25%)" />
        <base-heading>
          Recent Projects
        </base-heading>

        <base-text class="mb-5">
        On this page, you can see some of the most recent projects I have worked. 
        Click on the images below to see more information and to know a few little more about the projects.
        </base-text>

        <v-card color="secondary">
          <v-container grid-list-md pa-2>
            <v-layout wrap>
              <v-flex v-for="project in projects" :key="project.img" xs12 md6>
                <a href="#">
                  <v-img
                    :src="require(`@/assets/imgs/${project.img}.jpeg`)"
                    :title="project.title"
                    max-height="300"
                    @click="refresh( project.name, project.whatis, project.pic)"
                  />
                </a>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex hidden-sm-and-down md6 mt-10 mr-2 align-self-start="true">
        <Project>    

          <base-headingCenter slot="title" >
            {{ title }}
          </base-headingCenter  >             

          <v-img  slot="picture"
             :src="require(`@/assets/imgs/${pictr}.jpeg`)"
          />

          <base-text slot="text">
            {{ defin }} 
          </base-text>  

        </Project>
        <base-bubble-2
          style="transform: rotate(180deg) translate(-150px, -15%)"
        />      
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import Project from '../components/Project.vue'

export default {
  components: { Project },
  data: () => ({
    title: '',
    defin: '',
    pictr: '',
    projects: [
      {
        pic:  'lkpecas',
        img:  'project1',
        name: 'LK Peças Automotivas',
        title:'Comercial Software',
        whatis:`Since 2007, the Brazilian government made sales digitization mandatory that required all companies 
               to implement electronic invoicing (e-invoices) on their ERP software, so many small businesses have 
               had to adapt quickly to comply it. This was the first software I built for this propose, it was written in Delphi and use Firebird as database
                and consume the government web services with Java, generating and uploading the XML files to the government database.`
      },
      {
        pic:  'base',        
        img:  'project2',
        name: "My knwoledge base",
        title:'My base of Knowlodge',
        whatis:`This is one of my last works, a software made to store and share my articles, my knowledge base. Written in javascript,
                the backend uses Node.js, PostgreSQL, and MongoDB as its databases. The Frontend was developed with the Vue.js Framework.`        
      },
      {
        pic:  'java',        
        img:  'project3',
        name: 'Automotive workshop Management',
        title:'Automotive workshop Management',
        whatis:`This software was the second one I built  for the Brazilian electronic invoicing (e-invoicing) system. 
        It was written in Java and works with PostgreSQL, Mysql, Oracle or SQL Server databases. As well as sales digitization, 
        services digitalization (e-services) also is mandatory in Brazil, so I built this software to attend the automotive workshop market.`          
      },
      {
        pic:  'clinica',        
        img:  'project4',
        name: 'Clínica Novo Começo',
        title:'Medical clinic for drug addiction recovery',
        whatis:`A software for a Medical Specialized Clinic in treatment of chemical addiction, alcoholism and serious and persistent psychiatric disorders.
        The Software manages since service contract generation, patient hospitalization, management of medicines used in treatment, patient evolution, among other features.
        You can see more about their services at http://www.clinicanovocomeco.com.br/`              
      }
    ]
  }),

  methods:{
    refresh( name, whatis, pic ) {
      this.title = name
      this.defin = whatis
      this.pictr = pic
    }
  },

  created(){
    this.title = this.projects[0].name
    this.defin = this.projects[0].whatis
    this.pictr = this.projects[0].pic
  }
}
</script>


