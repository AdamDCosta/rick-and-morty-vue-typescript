<template>
  <article class="rick-card">
    <figure class="rick-card__figure">
      <img :src="rick.image" alt="rick.name" />
    </figure>
    <div class="rick-card__text">
      <h2>{{ rick.name.toUpperCase() }}</h2>
      <h3>
        Status: <span :class="statusClass">{{ rick.status }}</span>
      </h3>
      <h3>Species: {{ rick.species }}</h3>
      <h3>Last Known Location:</h3>
      <h4>{{ rick.location.name }}</h4>
    </div>
  </article>
</template>

<script lang="ts">
import { Result } from "@/types/rickTypes.interface";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "RickCard",
  props: {
    rick: Object as PropType<Result>,
  },
  computed: {
    statusClass(): string {
      if (this.rick?.status === "Alive") {
        return "rick-card__alive";
      }
      if (this.rick?.status === "Dead") {
        return "rick-card__dead";
      }
      return "rick-card__unknown";
    },
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
  justify-content: space-between;
}

.rick-card__text h3, .rick-card__text h4 {
  font-weight: 200;
}

.rick-card__alive {
  color: rgb(51, 214, 51);
}

.rick-card__dead {
  color: rgb(252, 46, 46);
}

.rick-card__unknown {
  color: rgb(230, 168, 36);
}
</style>
