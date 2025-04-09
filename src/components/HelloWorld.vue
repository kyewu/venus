<template>
  <div class="color-yellow">
    <!-- -->
    {{ msg }}
    <p>modelValue: {{ modelValue }}</p>
    <div class="i-ph-anchor-simple-thin hover:color-rose cursor-pointer" />
    <div class="i-mdi-account-circle-outline color-red" @click="change"></div>
  </div>
</template>

<script setup lang="ts">
const { foo, msg } = defineProps<{ foo: string; msg: string }>()
console.log(foo)
const emit = defineEmits<{ changeClick: [id: number] }>()
const change = () => {
  modelValue.value = 'hello model value+'
  emit('changeClick', 1)
}

const modelValue = defineModel<string>({ required: true })
</script>

<style lang="scss" scoped></style>
