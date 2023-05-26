<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Kiwi+Maru&display=swap"
    rel="stylesheet"
  />
  <transition name="page" mode="out-in">
    <NuxtPage> </NuxtPage>
  </transition>
</template>

<style scope>
body {
  font-family: "Kiwi Maru", serif;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
<script setup lang="ts">
useHead({
  title: "デバ検",
});
</script>
