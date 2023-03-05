<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
AppSetup()
const locale = useState<string>('locale.setting')
const app = useAppConfig() as AppConfigInput

useHead({
  title: app.name,
  titleTemplate: '%s - Website',
})
</script>

<template>
  <Html :lang="locale" class="dark">
    <Body
      class="bg-white text-gray-800 antialiased transition-colors duration-300 dark:bg-[#333950] dark:text-gray-200">
      <NuxtLayout>
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
