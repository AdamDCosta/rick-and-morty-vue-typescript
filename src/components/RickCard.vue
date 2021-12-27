<template>
  <article class="rick-card">
    <figure class="rick-card__figure">
      <img :src="rick.image" alt="rick.name" />
    </figure>
    <div class="rick-card__text">
      <h2>{{ rick.name.toUpperCase() }}</h2>
      <h3>Status: {{ rick.status }}</h3>
      <h3>Species: {{ rick.species }}</h3>
      <h3>Last Known Location:</h3>
      <h4>{{ rick.location.name }}</h4>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: "RickCard",
  props: {
    rick: Object,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.rick-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin: 10px;
  padding: 0.5rem;
  width: 100%;
  border-radius: 10px;
  background-color: #0f172a;
  color: #f8f8f8;
}

.rick-card__figure {
  height: 100%;
  display: flex;
  margin: auto;
  width: 40%;
}

img {
  max-height: 100%;
  border-radius: 7px;
  overflow: hidden;
}

.rick-card__text {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between
}
</style>
