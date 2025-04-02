<template>
  <div class="color-rose" ref="target">home</div>
  {{ x }} - {{ y }} - {{ isOutside }}
  <router-link to="/">Home</router-link>
  <router-link to="/sdf">404</router-link>
</template>

<script setup lang="ts">
const count = ref(0)
console.log(count.value)

const target = useTemplateRef<HTMLDivElement>('target')
const { x, y, isOutside } = useMouseInElement(target)
</script>
