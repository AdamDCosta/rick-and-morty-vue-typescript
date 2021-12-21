<template>
  <article class="flex bg-red-500" >
    <figure>
      <img :src="rick.image" alt="rick.name">
    </figure>
    <div>
      <h2>{{rick.name}}</h2>
      <h3>Status: {{rick.status}} - Species: {{rick.species}}</h3>
      <h3>Last Known Location:</h3>
      <h4>{{rick.location.name}}</h4>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '../assets/global.css'

export default defineComponent({
  name: 'RickCard',
  props: {
    rick: Object, 
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
