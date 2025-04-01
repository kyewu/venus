<template>
  <div class="color-rose">home</div>
  <router-link to="/">Home</router-link>
  <router-link to="/sdf">404</router-link>
</template>

<script setup lang="ts">
const count = ref(0)
console.log(count.value)
</script>
