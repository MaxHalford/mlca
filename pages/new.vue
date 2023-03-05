<template>
  <div>
    <button @click="createElement">create</button>
  </div>
</template>

<script>
export default {
    methods: {
      createElement() {
        let elec = new Element("⚡️");
        let elements = useElements()
        elements.value.push(elec);
        localStorage.setItem("elements", JSON.stringify(elements.value))
      }
    },
    // mounted() {
    //   this.elements = useElements()
    // }
}
</script>
