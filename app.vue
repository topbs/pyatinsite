<template>
  <div class="header w-full p-4 flex justify-between sticky top-0 backdrop-blur-sm">
    <div>
      <p class="text-3xl font-bold mont">Марк Твен</p>
    </div>
    <div class="justify-end w-1/3 flex">
      <div class="links flex flex-row justify-evenly">
        <UButton class="mont" color="gray" variant="link" icon="i-heroicons-home-16-solid" @click="navigateTo('/')">Додому</UButton>
        <UButton class="mont" color="gray" variant="link" icon="i-heroicons-document-text-solid" @click="navigateTo('/docs')">Теорія</UButton>
        <UButton class="mont" color="gray" variant="link" icon="i-heroicons-chat-bubble-bottom-center-text-16-solid" @click="navigateTo('/quiz')">Іспит</UButton>
      </div>
    </div>
  </div>
  <div class="body p-4 min-h-screen">
    <NuxtLayout>
      <NuxtPage>

      </NuxtPage>
    </NuxtLayout>
  </div>
  <div class="footer">
    <div class="text-gray-800">
      <p class="text-center text-sm">© 2024 Плейзор Олександр</p>
      <p class="text-center text-sm">все сам робив :)</p>
    </div>
  </div>
</template>
<script setup>
</script>
<style>
.mont {
  font-family: 'Montserrat', sans-serif;
}
</style>