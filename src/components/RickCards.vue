<template>
  <section class="rick-list">
    <div class="rick-list__item" :key="rick.id" v-for="rick in searchedRicks.results">
      <RickCard :rick="rick"/>
    </div>
  </section>
</template>

<script lang="ts">
import { Results } from "@/types/rickTypes.interface";
import { defineComponent, PropType } from "vue";
import RickCard from "./RickCard.vue";

export default defineComponent({
  name: "RickCards",
  props: {
    searchedRicks: Object as PropType<Results>,
    
  },
  components: {
    RickCard
  },
  methods: {
    },
});

// split into pages
// 20 results at a time
// splice searchedRicks
// variables: numberOfResultsToDisplay

</script>

<style scoped>

.rick-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 90%;
  max-width: 1024px;
}

.rick-list__item {
  width: 75%;
  max-width: 600px;
  height: 25vh;
  margin: 0.5rem;
}

@media only screen and (min-width: 768px) {
  .rick-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .rick-list__item {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

}


</style>