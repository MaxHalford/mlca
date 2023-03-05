<template>
  <div>
    <form style="display: flex; flex-direction: column; width: 50%">
    <input v-model="name" id="name">
    <label for="name">Name</label>


    <input v-model="unit" type="text" list="units" />
    <datalist id="units">
      <option v-for="unit in useUnits()" :value="unit"></option>
    </datalist>
    <label for="units">Unit</label>

    <button @click="createElement">Create</button>
  </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      unit: ""
    }
  },
    methods: {
      createElement() {

        let elec = new Element(this.name, this.unit);
        let elements = useElements()
        elements.value.push(elec);
        localStorage.setItem("elements", JSON.stringify(elements.value))
      }
    }
}
</script>
