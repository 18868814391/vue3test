<template>
  <div>I am in Contact</div>
  <div>{{ appdata }}</div>
  <button @click="changeFather()">changeFatherData</button>
</template>

<script>
import { provide, inject } from 'vue'
export default {
  setup() {
    const appdata = inject('appdata')
    return {
      appdata,
    }
  },
  methods: {
    changeFather() {
      this.appdata = 'children change it'
    },
  },
}
</script>

<style scoped></style>
