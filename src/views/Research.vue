<template>
  <section id="research" class="hide-overflow">
    <v-layout info white--text>
      <v-flex hidden-sm-and-down md6>
        <v-img :src="require('@/assets/imgs/touch.jpg')" height="100%" />
      </v-flex>
      <v-flex xs12 md6 pa-5>
        <h1 class="mb-5">Semáforo da satisfação - Atendimento</h1>
        <h4>Por favor, avalie nosso atendimento e nos ajude aprimorar a qualidade dos nossos serviços.</h4>
        <v-sheet max-width="600" color="transparent" class="mt-5">
          <v-text-field v-model="name" color="info" label="Informe seu nome (Opcional)" solo flat />

          <div class="d-flex flex-row-reverse mb-1">
            <img src="@/assets/imgs/red.png" class="rounded pr-1" alt="Descontente" />
            <img src="@/assets/imgs/amarelo.png" class="rounded pr-1" alt="meia boca" />
            <img src="@/assets/imgs/verde.png" class="rounded pr-1" alt="Contente" />
          </div>

          <v-list class="mb-10" solo flat>
            <v-list-item-group v-model="model" solo flat>
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-content>
                  <v-list-item-action class="lista">
                    <div class="d-flex justify-content-start">
                      <v-list-item-action-text v-text="item.text" />
                    </div>
                    <div class="d-flex justify-content-between">
                      <v-checkbox class="pl-5"  />
                      <v-checkbox class="pl-5"  />
                      <v-checkbox class="pl-5"  />
                    </div>
                  </v-list-item-action>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>

          <v-select  v-model="comb"
            :items="notas"
            label="Avalie de 0 a 10 o atendimento oferecido a você"
            solo
            flat
          />

          <v-textarea
            v-model="message"
            color="info"
            label="Mensagem de sugestão ou crítica?"
            solo
            flat
          />
          <v-btn color="secondary" rounded @click="sendMail">Enviar pesquisa</v-btn>
        </v-sheet>
      </v-flex>
      <v-dialog v-model="diag" width="500">
        <v-card>
          <v-card-title>{{ titulo }}</v-card-title>
          <v-card-text>{{ retrn1 }}</v-card-text>
          <v-card-text>{{ retrn2 }}</v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="indigo" dark @click="diag = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </section>
</template>



<script>
import * as emailjs from "emailjs-com";

export default {
  data() {
    return {
      checkbox1: true,
      items: [
        {
          icon: "mdi-star",
          text: "Atendimento telefônico"
        },
        {
          icon: "mdi-send",
          text: "Receptividade ao chegar ao CFC"
        },
        {
          icon: "mdi-email-open",
          text: "Eficiência e rapidez no antendimento"
        },
        {
          icon: "mdi-email-open",
          text: "Gentileza das atendentes"
        },
        {
          icon: "mdi-star",
          text: "Clareza nas informações e/ou dúvidas"
        },
        {
          icon: "mdi-send",
          text: "Horário de atendimento"
        },
        {
          icon: "mdi-email-open",
          text: "Tempo de espera"
        },
        {
          icon: "mdi-email-open",
          text: "Obteve o que desejava"
        },
        {
          icon: "mdi-email-open",
          text: "Instalações, limpeza e conforto"
        },
        {
          icon: "mdi-email-open",
          text: "Avaliação geral"
        }
      ],
      notas: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      model: 1,
      diag: false,
      titulo: "",
      retrn1: "",
      retrn2: "",
      name: "",
      message: "",
      comb: ""
    };
  },

  methods: {
    clearAll() {
      (this.name = ""),
      (this.comb = ""),
      (this.message = "");
    },

    msg(op, msg) {
      switch (op) {
        case 0:
          this.titulo = "Muito Obrigado!";
          this.retrn1 = "Ficamos felizes em lhe atender e estamos sempre a disposição para";
          this.retrn2 = "eventuais dúvidas e/ou realizações de serviços de habilitação";
          this.diag = true;
          break;
        case 1:
          this.titulo = "Failure";
          this.retrn1 = "Something got wrong, please try again later...";
          this.retrn2 = "Error: " + msg;
          this.diag = true;
          break;
        case 2:
          this.titulo = "Ops!";
          this.retrn1 = "Sorry, but you have to fill all fields before...";
          this.retrn2 = "Then you can click and send the e-mail to me.";
          this.diag = true;
          break;
      }
    },

    validate() {
      return  true;//this.name && this.email && this.subject && this.message;
    },

    desmarca() {
      var checks = document.querySelectorAll('input[type="checkbox"]');    
      for(let i = 0; i < checks.length; i++) {
        checks[i].checked = false;   
  }
    },

    sendMail() {
      const test = this.validate();
      if (!test) {
        this.msg(2, "");
      } else {
        this.msg(0, "");
        this.clearAll();
        this.desmarca();
      }
    }
  }
};
</script>

<style scoped>
.lista {
  display: grid;
  grid-template-columns: auto auto;
}
</style>
