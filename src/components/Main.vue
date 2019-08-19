<template>
  <div class="container">
    <div class="content">
        <img  class="foto" src='../assets/imgs/me.jpg' alt="Yes, this is" />       
    </div>
    <div class="content1">
      <div class="texto">
        <base-bubble-1  />
        <h6>HELLO EVERYBODY, I AM</h6>
        <div class="meunnome">Romeu Cornelius Junior</div>
        <h4>Senior Sofware Developer</h4>
        <p class="parAbout">
           Passionate about research, and learning software development, data visualization, and applying science and technology in the majority world by
           taking what's in a scientific publication and turning it into a real project that solves a business need. I'm a self-starter with a proven ability 
           to leverage multiple technologies to build interactive and innovative applications. 
        </p>        
        <ul class="list personal_social">
          <li><a href="https://www.linkedin.com/in/romeucjunior/" target="_blank" rel="noopener noreferrer"><img src='../assets/icos/linkd.png' /></a></li>
          <li><a href="https://github.com/Secaio" target="_blank" rel="noopener noreferrer"><img src='../assets/icos/ghit.png' /></a></li>         
          <li><a href="https://www.facebook.com/romeu.corneliusjunior" target="_blank" rel="noopener noreferrer"><img src='../assets/icos/face.png' /></a></li>
          <li><a href="https://www.instagram.com/romeucorneliusjunior/?hl=en" target="_blank" rel="noopener noreferrer"><img src='../assets/icos/insta.png' /></a></li>          
          <li><a @click="skype()"><img src='../assets/icos/skype.png' title="romeucjunior@hotmail.com" /></a></li>
          <li><a @click="whatts()"><img src='../assets/icos/whatts.png' title="+5551982158117" /></a></li>
        </ul>
        <base-bubble-2
          style="transform: rotate(180deg) translate(-150px, -15%)"
        />
        <v-dialog v-model="diag" width="500">
          <v-card>
            <v-card-title>{{ titulo }}</v-card-title>
            <v-card-text>{{ user }}</v-card-text>
            <v-card-text>{{ adr }}</v-card-text>
            <v-divider></v-divider>            
              <v-card-actions>
                  <v-btn color="indigo" dark  @click="diag = false">Close</v-btn>
              </v-card-actions>
          </v-card>
        </v-dialog>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indice',
  props: {
    msg: String

  },
  data() {
    return {
      diag: false,
      titulo: '',
      user: '',
      adr: ''
    }
  },
  methods: {
    skype() {
          this.diag   = true
          this.titulo = 'My Skype:'
          this.user   = 'User name: Romeu Junior'                     
          this.adr    = 'Email address: romeucjunior@hotmail.com'
        },
    whatts() {
          this.diag   = true
          this.titulo = 'My WhattsApp number is:'
          this.user   = '+55 51 98215 8117'                     
          this.adr    = ''
        }, 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  display: grid;
  grid-template-columns: 2fr 2fr;
  background-color:#FFF; 
  width: 100%;
  height: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 0;
  margin: 0;
  padding-right: 5px;
}
.content1 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 0;
  padding: 10px;
}
.foto {
  max-width: 1080px;
  width: 100%;
  height: auto;
  padding: 1px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 5%;
}

.texto {
    padding-left: 20px;
    margin-left: 10px;
}

.texto h6 {
    font-size: 14px;
    font-family: Verdana, Tahoma, sans-serif;
    text-transform: uppercase;
    letter-spacing: 2.1px;
    font-weight: 400;
    margin-bottom: 12px;
    color: #222;
}

.texto h4 {
    font-size: 16px;
    font-family: Verdana, Tahoma, sans-serif;
    text-transform: uppercase;
    margin-bottom: 40px;
    color: #222;
}

.meunnome {
    font-size: 48px;
    text-transform: uppercase;
    margin-bottom: 20px;
    color: #222;
}

.parAbout {
    font-size: 1em;
    font-family: Verdana, Tahoma, sans-serif;
    margin: 0;
    font-weight: 300;
    
}

.personal_social li  {
    margin-top: 30px;
    box-sizing: border-box;
    display: inline-block;
    margin-right: 7px;
    text-align: -webkit-match-parent;
}

.personal_social li a {
    line-height: 40px;
    width: 40px;
    height: 40px;
    background: #e8e8e8;
    border-radius: 20px;
    display: inline-block;
    text-align: center;
    color: #fff;
    font-size: 16px;
}

.personal_social li a:hover {
    background: linear-gradient(90deg, rgb(36, 29, 160) 0%, rgb(71, 76, 226) 17%, rgba(0,212,255,1) 100%);
    text-decoration: underline;
}

.personal_social li img {
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
    .container {
        grid-template-columns: auto;
    }
    .content {
        padding: 5px;
        margin: 0;
    }
    .content1 {
        margin-top: 0;
    }

    .foto {
      max-width: 1080px;   /* Máximo da largura da imagem */
      width: 100%;
      max-height: 500px;  /* Máximo da altura da imagem */
      min-height: auto;      /* Mínimo da altura, por padrão “auto” */
      background-size:100%;
      background-repeat: no-repeat;
      margin-top: 1px;
    }
    .texto {
        padding: 10px;
        margin-top: 10px;
        margin-left: 20px;
    }
    .meunnome {
        font-size: 30px;
        text-transform: capitalize;
        margin-bottom: 10px;
    }
  .personal_social li  {
        margin-top: 10px;
    }    
}

</style>
