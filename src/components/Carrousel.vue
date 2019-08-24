<template>
<v-carousel
     height="auto"
     cycle
     hide-delimiter-background
     show-arrows-on-hover >
    <v-carousel-item 
        reverse-transition="fade-transition"
         transition="fade-transition"
         v-for="(item,i) in fotos"
            :key="i"
            :src="item.src">
    </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
	data() {
		return {
			fotos: [
                {src: require('@/assets/cert/Unisc.jpeg')},
				{src: require('@/assets/cert/DataMining.jpeg')},
				{src: require('@/assets/cert/DataScience.jpeg')},
				{src: require('@/assets/cert/Espanhol.jpeg')},
				{src: require('@/assets/cert/Gastronomia.jpeg')},
				{src: require('@/assets/cert/JavaScript.jpg')},
				{src: require('@/assets/cert/Python.jpg')},
			]
		}
    },
}
</script>