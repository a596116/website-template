<template>
    <div class="flex min-h-screen flex-col">
      <slot name="header">
      </slot>
      <div class="flex w-full flex-1 flex-col">
        <div class="max-w-8xl relative mx-auto flex h-full w-full flex-1 flex-col">
          <slot />
        </div>
      </div>
      <slot name="footer">
      </slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>