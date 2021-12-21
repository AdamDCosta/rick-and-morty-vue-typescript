<template>
  <main>
    <h1>Ricks API</h1>
    <RickCards :ricks="ricks" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { fetchRickData } from "./services/charactersDB";
import { RickType } from "./types/charactersTypes.interface";
import RickCards from "./components/RickCards.vue"

export default defineComponent({
  name: "App",
  components: {
    RickCards,
  },
  data() {
    return {
      ricks: [] as unknown as RickType,
    };
  },
  async created() {
    await this.fetchRicks();
  },
  methods: {
    async fetchRicks(): Promise<void> {
      const rickData = await fetchRickData();
      this.ricks = rickData;
      console.log(this.ricks);
    },
  },
});
</script>

<style>
#app {
  text-align: center;
}
</style>
