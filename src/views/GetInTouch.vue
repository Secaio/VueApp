<template>
  <section id="get-in-touch" class="hide-overflow">
    <v-layout info white--text>
      <v-flex hidden-sm-and-down md6>
        <v-img :src="require('@/assets/imgs/touch.jpg')" height="100%" />
      </v-flex>
      <v-flex xs12 md6 pa-5 >
        <base-bubble-1 />
        <base-heading class="mb-5">
          Get In Touch
        </base-heading>
        <v-sheet max-width="600" color="transparent" >
          <v-text-field v-model="name"    color="info" label="Name"    solo flat    />
          <v-text-field v-model="email"   color="info" label="Email"   solo flat    />
          <v-text-field v-model="subject" color="info" label="Subject" solo flat  />
          <v-textarea   v-model="message" color="info" label="Message" solo flat  />
          <v-btn color="secondary" rounded @click="sendMail">Send Message</v-btn>
        </v-sheet>
      </v-flex>
      <v-dialog v-model="diag" width="500">
         <v-card>
            <v-card-title>{{ titulo }}</v-card-title>
            <v-card-text> {{ retrn1 }} </v-card-text>
            <v-card-text> {{ retrn2 }}</v-card-text>           
            <v-divider></v-divider>            
            <v-card-actions>
              <v-btn color="indigo" dark  @click="diag = false">Close</v-btn>
            </v-card-actions>
         </v-card>
      </v-dialog>       
    </v-layout>
  </section>
</template>



<script>
import * as emailjs from 'emailjs-com'

export default {
  
  data() {
    return {
      diag: false,
      titulo:  '',
      retrn1:  '',
      retrn2:  '',      
      name:    '',
      email:   '',
      subject: '',
      message: ''
    }
  },

  methods: {

     clearAll() {
        this.name    = '',
        this.email   = '',
        this.subject = '',
        this.message = ''       
     }, 

     msg( op, msg ) {
        switch ( op ) {
          case 0:
            this.titulo = 'Sucess'
            this.retrn1 = 'Your email has been sent successfully!'
            this.retrn2 = 'I will answer you as soon as possible...'                     
            this.diag   = true
          break;
          case 1:
            this.titulo = 'Failure'
            this.retrn1 = 'Something got wrong, please try again later...'                     
            this.retrn2 =  'Error: '+ msg
            this.diag   = true
          break;
          case 2:
            this.titulo = 'Ops!'
            this.retrn1 = 'Sorry, but you have to fill all fields before...'                     
            this.retrn2 = 'Then you can click and send the e-mail to me.'
            this.diag   = true
          break;
        }
     },       

     validate() {
       return this.name && this.email && this.subject && this.message
     },
     
     sendMail() {
       const test = this.validate()
       if (!test) {
         this.msg( 2 , '' )
       } else {
          let templateParams = {
          to_name:      "Romeu",
          reply_to:     this.email,
          from_name:    this.name,       
          message_html: this.message        
          }
          emailjs.init("user_lUp1TZyYqyxe3TS1aZdTF")
          emailjs.send('gmail', 'template_pFm7baaj', templateParams)
                 .then( response => { this.msg( 0 , response.text) },
                           error => { this.msg( 1 , error)}
                      )
                 .then( this.clearAll() ) 
        }              
     }
  }
}
</script>
