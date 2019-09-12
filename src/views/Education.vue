<template>
    <section id="education" class="hide-overflow">
    <v-layout white>
      <v-flex xs12 md6 pa-5>
        <base-bubble-1 style="transform: translate(5%, -5%)"/>
        <base-headingCenter class="black--text">
          Education
        </base-headingCenter>  
        <v-list dense>
         <v-list-item>
           <v-list-item-action>
              <v-img :src="require('@/assets/imgs/0.png')"></v-img>
           </v-list-item-action>
           <v-list-item-content>
           <base-subheading class="black--text">University of Santa Cruz do Sul</base-subheading>   
            <base-text class="mb-5">
             Bachelor's degree on Computer Science 2009 – 2015 
            </base-text>         
           </v-list-item-content>   
         </v-list-item>
         <v-list-item>
           <v-list-item-action>
              <v-img :src="require('@/assets/imgs/1.png')"></v-img>
           </v-list-item-action>
           <v-list-item-content>
           <base-subheading class="black--text">University of Vale do Taquari - Univates</base-subheading>   
            <base-text class="mb-5">
             University Extension of Gastronomy 2007 – 2008 
            </base-text>         
           </v-list-item-content>   
         </v-list-item>       
      </v-list>             
      </v-flex>     
      <v-flex hidden-sm-and-down md6>
        <v-img :src="require('@/assets/imgs/edu.png')" height="100%" />
      </v-flex>
    </v-layout>
  </section>
</template>