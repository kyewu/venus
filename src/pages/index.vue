<template>
  <div class="color-rose" ref="target">home</div>
  {{ x }} - {{ y }} - {{ isOutside }}
  <hello-world
    msg="hello world!"
    foo="'123'"
    @change="onChange"
    v-model="modelValue"
    @update:model-value="changeModelValue"
  ></hello-world>
  <router-link to="/">Home</router-link>
  <router-link to="/sdf">404</router-link>
</template>

<script setup lang="ts">
const count = ref(0)
console.log(count.value)

const target = useTemplateRef<HTMLDivElement>('target')
const { x, y, isOutside } = useMouseInElement(target)

const onChange = (value: number) => {
  console.log(value)
}

const modelValue = ref('hello model value')

const changeModelValue = (value: string) => {
  console.log('change model value:', value)
}
</script>
