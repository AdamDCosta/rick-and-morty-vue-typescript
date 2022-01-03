<template>
  <main class="main">
    <NavBar
      v-model="searchTerm"
      @update:modelValue="handleSearch"
      :checked="handleDeadFilter"
      :aliveCheck="handleAliveFilter"
    />
    <h1 class="main__header">Ricks API</h1>
    <h2>API by rickandmortyapi.com</h2>
    <RickCards :searchedRicks="searchedRicks" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { fetchRickData } from "./services/charactersDB";
import { Result, Results } from "./types/rickTypes.interface";
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
      ricks: {} as Results,
      searchTerm: "",
      searchedRicks: {} as Results,
      deadFilter: false,
      aliveFilter: false,
    };
  },
  async created() {
    await this.fetchRicks();
  },
  methods: {
    async fetchRicks(): Promise<void> {
      const rickData = await fetchRickData();
      this.ricks = rickData;
      this.searchedRicks = { ...this.ricks };
      console.log(rickData);
    },
    handleSearch(): void {
      const searchText = this.searchTerm.toLowerCase();
      const rickResults = this.ricks.results;
      let filteredRicks: Result[] = [];
      if (rickResults && searchText.length > 0) {
        filteredRicks = rickResults.filter((rick) => {
          return rick.name.toLowerCase().includes(searchText);
        });
        this.searchedRicks.results = filteredRicks;
      }
    },
    handleDeadFilter(): void {
      this.deadFilter = !this.deadFilter;
      const rickResults = this.ricks.results;
      let filteredRicks: Result[] = [];
      if (rickResults && this.deadFilter) {
        filteredRicks = rickResults.filter((rick) => {
          return rick.status === "Dead";
        });
        this.searchedRicks.results = filteredRicks;
      } else {
        this.searchedRicks.results = rickResults;
      }
    },
    handleAliveFilter(): void {
      this.aliveFilter = !this.aliveFilter;
      const rickResults = this.ricks.results;
      let aliveRicks: Result[] = [];
      if (rickResults && this.aliveFilter) {
        aliveRicks = rickResults.filter((rick) => {
          return rick.status === "Alive";
        });
        this.searchedRicks.results = aliveRicks;
      } else {
        this.searchedRicks.results = rickResults;
      }
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
  justify-content: flex-start;
  align-items: center;
  background-color: #090d18;
  padding: 0.5rem;
}

.main__header {
  color: #f8f8f8;
}
</style>
