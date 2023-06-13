<template>
    <div class="container">
      <div
        class="card mx-auto my-5 shadow-lg mb-5 bg-body rounded-5"
        style="max-width: 25rem"
      >
        <img
          src="/hamu.jpg"
          class="card-img-to rounded-5 rounded-bottom"
          alt="..."
        />
        <div class="card-body mb-3">
          <p class="card-title text-center cocoa title_text">
            <span>工事中</span>
          </p>
          <p class="card-text text-center fs-5">
            ゴンゴン🔧<br /><span class="zunda">終了時期:未定</span>
          </p>
          <NuxtLink
            href="./"
            class="btn mt-4 mx-3 d-flex align-items-center rounded-pill text-center"
            style="height: 60px"
          >
            戻る
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  <style scoped>
  .cocoa {
    color: #875647;
  }
  .btn {
    color: var(--bs-white);
    background: #fcbda3;
  }
  .title_text {
    font-size: 80px;
  }
  .zunda {
    font-size: 30px;
    color: #8b512a;
  }
  </style>