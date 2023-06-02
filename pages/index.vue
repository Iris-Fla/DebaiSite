<template>
  <div class="container">
    <div
      class="card mx-auto my-5 shadow-lg mb-5 bg-body rounded-5"
      style="max-width: 25rem"
    >
      <img
        id="bigdeba"
        src="@/assets/deba_icon.png"
        alt="カードの画像"
        class="icon rounded-circle mx-auto mt-4"
        style="max-width: 150px"
      />
      <div class="card-body mb-3">
        <p id="DBTitle" class="card-title text-center">
          <span class="work">デバいサイト</span>
        </p>
        <div
          class="mx-auto mb-3 text-center border-bottom border-secondry rounded-5"
          style="max-width: 320px"
        ></div>
        <p class="card-text mx-4 info">
          デバ検定を受けよう<br />
          受験は下のボタンから～😋
        </p>
        <div
          class="mx-auto mt-3 text-center border-bottom rounded-5"
          style="max-width: 320px"
        ></div>
        <p class="card-text mx-4 mt-4 fs-5">全n問</p>
        <NuxtLink
          href="./sample"
          class="btn hd hover-effect mt-4 mx-3 d-flex align-items-center rounded-pill text-center"
          style="height: 60px"
          >デバ検を受ける！</NuxtLink
        >
        <NuxtLink
          href="./error"
          class="btn gb hover-effect mt-4 mx-3 d-flex align-items-center rounded-pill text-center"
          style="height: 60px"
          >おまけ ※エラーページ</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
span {
  color: #fcbda3;
}
.hd {
  color: var(--bs-white);
  background: #fcbda3;
}
.gb {
  color: var(--bs-white);
  background: #ffd685;
}
.hover-effect:hover {
  background-color: rgb(73, 32, 32);
}

.work {
  font-size: 50px;
}
.info {
  font-size: 20px;
}
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: scaleX(1);
  }
  40% {
    transform: translateY(-30px) scaleX(0.5);
  }
  60% {
    transform: translateY(-0px) scaleX(1.4);
  }
  80% {
    transform: translateY(-0px) scaleX(0.8);
  }
  100% {
    transform: translateY(-0px) scaleX(1);
  }
}

#DBTitle {
  animation: bounce 3s infinite;
}
</style>
<script></script>
