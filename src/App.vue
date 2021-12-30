<template>
  <main class="main">
    <NavBar v-model="searchTerm" @update:modelValue="handleSearch" />
    <h1 class="main__header">Ricks API</h1>
    <h2>API by rickandmortyapi.com</h2>
    <RickCards :ricks="ricks" :searchTerm="searchTerm"/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { fetchRickData } from "./services/charactersDB";
import { RickType } from "./types/charactersTypes.interface";
import RickCards from "./components/RickCards.vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  name: "App",
  components: {
    RickCards,
    NavBar,
  },
  data() {
    return {
      ricks: [] as unknown as RickType,
      searchTerm: "",
    };
  },
  async created() {
    await this.fetchRicks();
  },
  methods: {
    async fetchRicks(): Promise<void> {
      const rickData = await fetchRickData();
      this.ricks = rickData;
      // console.log(rickData);
    },
    handleSearch() {
      const searchText = this.searchTerm;
      console.log(searchText);
      console.log(this.$data.ricks.id)
    },
  },
});
</script>

<style>
.main {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #090d18;
  padding: 0.5rem;
}

.main__header {
  color: #f8f8f8;
}
</style>
