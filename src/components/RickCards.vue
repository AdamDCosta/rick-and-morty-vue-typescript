<template>
  <section>
    <div :key="rick.id" v-for="rick in ricks">
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