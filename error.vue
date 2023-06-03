<template>
    <div class="container">
      <div
        class="card mx-auto my-5 shadow-lg mb-5 bg-body rounded-5"
        style="max-width: 25rem"
      >
        <img id="GataDeba" src="@/assets/deba_illust.png" alt="..." />
        <div class="card-body mb-3">
          <p class="card-title text-center">{{ error }}</p>
          <p class="card-text text-center title title_text">
            <span>デバー</span>
          </p>
          <p class="card-text text-center fs-5">デバ...😭</p>
          <NuxtLink
            href="/"
            class="btn hover-effect mt-4 mx-3 d-flex align-items-center text-center rounded-pill text-center"
            style="height: 60px"
            >ホームに戻るデバ</NuxtLink
          >
        </div>
      </div>
    </div>
</template>
<style scoped>
.title {
  color: #fcbda3;
}
.btn {
  color: var(--bs-white);
  background: #fcbda3;
}
.title_text {
  font-size: 100px;
}
.zunda {
  font-size: 30px;
  color: #fcbda3;
}
.hover-effect:hover {
  background-color: rgb(73, 32, 32);
}

@keyframes GDAnimation {
  0% {
    transform: translate(0px) scale(1) rotate(0deg);
  }
  25% {
    transform: translate(-200px, 100px) scale(2) rotate(360deg) scaleX(2);
  }
  50% {
    transform: translate(0px) scale(1) rotate(180deg);
  }
  75% {
    transform: translate(200px, 100px) scale(2) rotate(90deg) skew(30deg, 20deg);
  }
  100% {
    transform: translate(0px) scale(1) rotate(360deg);
  }
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

#GataDeba {
  animation: rotation 5s infinite;
}
</style>
<script setup lang="ts">
useHead({
  title: "デバ検 | エラーでば！",
});
const error = useError();
</script>
