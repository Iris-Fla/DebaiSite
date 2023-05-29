<template>
  <div class="container">
    <div
      class="card mx-auto my-5 shadow-lg mb-5 bg-body rounded-5"
      style="max-width: 25rem"
    >
      <img
        :src="questions[NowQuestion].fileName"
        class="card-img-to rounded-5 rounded-bottom"
        alt="..."
      />
      <div class="card-body mb-3">
        <p class="card-title text-center cocoa title_text">
          <span>デババ！</span>
        </p>
        <p class="card-text text-center fs-5">
          {{ currentQuestion }}
        </p>
        <div
          @click="NextQuestion"
          class="btn hover-effect a mt-4 mx-3 d-flex align-items-center rounded-pill text-center"
          style="height: 60px"
          >{{ text }}</div
        >
        <div
          class="btn hover-effect b mt-4 mx-3 d-flex align-items-center rounded-pill text-center"
          style="height: 60px"
          >戻る</div
        >
        <div
          class="btn hover-effect c mt-4 mx-3 d-flex align-items-center rounded-pill text-center"
          style="height: 60px"
          >戻る</div
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const questions = ref( [
    {
        questionText:"上記の画像の信頼度は？",
        ans:["70%","77.7%","大当り濃厚"],
        correctAnswer:"70%",
        fileName : "/saikyou.jpg"
    },
    {
        questionText:"進んだよ",
        ans:["70%","77.7%","大当り濃厚"],
        correctAnswer:"70%",
        questionImg : "@/public/saikyou.jpg"
    }
])
const text = "BOBBY"
var NowQuestion = ref(0)
const NextQuestion = () => {
    NowQuestion.value ++;
}
const currentQuestion = computed(() => {
  return questions.value[NowQuestion.value].questionText
})
</script>
<style>
.cocoa {
  color: #fcbda3;
}
.btn {
  color: var(--bs-white);
}
.hover-effect:hover {
  background-color: #fcbda3;
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
.title_text{
    font-size:80px;
}
</style>