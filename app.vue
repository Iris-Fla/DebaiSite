<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Kiwi+Maru&family=DotGothic16&display=swap"
    rel="stylesheet"
  />
  <transition name="page" mode="out-in">
    <NuxtPage> </NuxtPage>
  </transition>
</template>

<style>
/*フォント,画面遷移時のフェード設定 */
body {
  font-family: "Kiwi Maru", sans-serif;
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
/* ページ全体のCSS */
.debacolor {
  color: #fcbda3;
}
.hover-effect:hover {
  color: #ffffff;
  background-color: rgb(77, 44, 44);
}
.btn {
  color: var(--bs-white);
}
.a {
  background: #87cf91;
}
.b {
  background: #86cfcc;
}
.c {
  background: #c78282;
}
.d {
  background: #e8e67f;
}
</style>
<script setup lang="ts">
useHead({
  title: "デバ検",
});

</script>
