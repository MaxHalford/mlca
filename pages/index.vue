<template>
  <div>
    <button @click="clear">Clear</button>

      <div v-for="element in useElements().value">
        <p>{{ element.name }}</p>
        <p>{{ element.unit }}</p>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
      clear() {
        localStorage.clear("elements");
        useElements().value = [];
      }
    },
    mounted() {
      let existingElements = localStorage.getItem("elements");
      let elements = useElements()
      if (existingElements) {
        elements.value = JSON.parse(existingElements);
      }
    }
}
</script>

