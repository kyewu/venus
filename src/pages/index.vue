<template>
  <div class="color-rose" ref="target">home</div>
  {{ x }} - {{ y }} - {{ isOutside }}
  <hello-world
    msg="hello world!"
    foo="'123'"
    @change="changeClick"
    v-model="modelValue"
    @update:model-value="changeModelValue"
  ></hello-world>
</template>

<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'
const count = ref(0)
console.log(count.value)

const target = useTemplateRef<HTMLDivElement>('target')
const { x, y, isOutside } = useMouseInElement(target)

const changeClick = (value: number) => {
  console.log(value)
}

const modelValue = ref('hello model value')

const changeModelValue = (value: string) => {
  console.log('change model value:', value)
}

onMounted(() => {
  useRegisterSW({
    immediate: true,
    onRegisteredSW(swScriptUrl, registration) {
      console.log('swScriptUrl:', swScriptUrl)
      console.log('registration:', registration)
      setInterval(() => {
        if (registration) {
          registration.update()
        }
      }, 5000)
    },
  })
})
</script>
