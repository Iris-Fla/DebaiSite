<template>
    <div class="container">
      <div
        class="card mx-auto my-5 shadow-lg mb-5 bg-body rounded-5"
        style="max-width: 25rem"
      >
      <img src="@/assets/deba.jpg" class="card-img-to rounded-5 rounded-bottom" alt="...">
        <div class="card-body mb-3">
            <p
              class="card-title text-center cocoa title_text"
            >
              <span>デババ！</span>
            </p>
            <p class="card-text text-center fs-5">
                ～可愛い生き物～<br><span class="zunda">ハダカデバネズミ</span>

            </p>
          <NuxtLink
            href="./"
            class="btn mt-4 mx-3 d-flex align-items-center rounded-pill text-center"
            style="height: 60px"
            >戻る</NuxtLink
          >
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
.title_text{
    font-size:80px;
}
.zunda{
    font-size: 30px;
    color: #8b512a;
}
</style>
