<template>
  <section class="rick-list">
    <div class="rick-list__item" :key="rick.id" v-for="rick in ricks">
      <RickCard :rick="rick"/>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RickCard from "./RickCard.vue";

export default defineComponent({
  name: "RickCards",
  props: {
    ricks: Array
  },
  components: {
    RickCard
  },
  methods: {
    },
});

</script>

<style scoped>

.rick-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
}

.rick-list__item {
  width: 75%;
  max-width: 1024px;
  height: 25vh;
  margin: 0.5rem;
}
</style>