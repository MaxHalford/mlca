<template>
  <div>
    <button @click="clear">Clear</button>
    <p>Current color: {{ useElements() }}</p>
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

