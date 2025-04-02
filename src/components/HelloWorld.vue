<template>
  <div class="color-yellow">
    <!-- -->
    {{ msg }}
    <div class="i-ph-anchor-simple-thin hover:color-rose cursor-pointer" />
    <div class="i-mdi-account-circle-outline color-red"></div>
  </div>
</template>

<script setup lang="ts">
defineProps({ msg: String })
</script>

<style lang="scss" scoped></style>
