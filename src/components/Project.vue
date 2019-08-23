<template>
    <div class="project"> 
        <slot name="title" />
        <v-divider />
        <p />
          <slot name="picture"  />      
        <p />
          <slot name="text"  />
    </div>
</template>


<style scoped>
    .project {
        padding: 5px;
    }
</style>