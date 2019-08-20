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

<script type="text/javascript" src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"></script>

<script>

const func = (() => {
    emailjs.init("user_lUp1TZyYqyxe3TS1aZdTF");
 })();

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

     clearAll(){
        this.name    = '',
        this.email   = '',
        this.subject = '',
        this.message = ''       
     }, 

     msg(status, error){
       if (status) {
            this.titulo = 'Sucess'
            this.retrn1 = 'Your email has been sent successfully!'
            this.retrn2 = 'I will answer to you as soon as possible...'                     
            this.diag   = true
       } else {
            this.titulo = 'Failure'
            this.retrn1 = 'Please try again later...'                     
            this.retrn2 =  'Error: '+error
            this.diag   = true
       }
     },       

     sendMail(){
        let templateParams = {
          to_name:      "Romeu",
          reply_to:     this.email,
          from_name:    this.name,       
          message_html: this.message        
        }
        
        emailjs.send('gmail', 'template_pFm7baaj', templateParams)
               .then( response => { this.msg(true,'') },
                         error => { this.msg(false,error)}
                    )
               .then( this.clearAll() )   
    }
  }
}
</script>
