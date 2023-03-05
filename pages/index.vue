<script lang="ts" setup>
// composable
const { t } = useLang()

// meta
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: t('pages.index.title'),
  meta: [
    {
      name: 'description',
      content: '形象網站',
    },
  ],
}))
</script>

<template>
    <div>
      <IconUil:bars />
    </div>
</template>

