<template>
  <nav class="nav">
    <label for="search">Search Ricks...</label>
    <input type="text" name="search" v-model="searchTerm" />
    <label for="status">Dead Ricks</label>
    <input type="checkbox" name="status" @change="checked" />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  props: {
    modelValue: String,
    checked: Function,
  },
  computed: {
    searchTerm: {
      get() {
        return this.modelValue;
      },
      set(value: string) {
        this.$emit("update:modelValue", value);
      },
    },
  },
});
</script>

<style scoped>
.nav {
  height: 5vh;
  width: 100%;
  max-width: 1024px;
  display: flex;
  align-items: center;
  background-color: transparent;
}

input {
  margin-left: 0.4rem;
  border-radius: 5px;
  border: none;
  color: #090d18;
  background-color: #f8f8f8;
  padding: 0.2rem;
}

label {
  margin-left: 0.4rem;
}
</style>
