<template>
  <nav class="nav">
    <label for="search">Search Ricks...</label>
    <input
      type="text"
      name="search"
      v-model="searchTerm"
    />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  props: {
    modelValue: String,
  },
  computed: {
    searchTerm: {
      get() {
        return this.modelValue
      },
      set(value: string) {
        this.$emit('update:modelValue', value)
      }
    }
  }
});
</script>

<style scoped>
.nav {
  height: 5vh;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
}

input {
  margin-left: 0.2rem;
  border-radius: 5px;
  border: none;
  color: #090d18;
  background-color: #f8f8f8;
  padding: 0.2rem;
}
</style>
