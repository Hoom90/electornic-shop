<template>
  <div>
    <headerComp v-if="(route.path != '/auth/login') && (route.path != '/auth/register')"/>
    <div class="max-w-[1440px] mx-auto">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>

<style>

</style>