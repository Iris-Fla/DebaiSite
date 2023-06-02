<template>
  <div class="container">
    <div
      class="animated_img card mx-auto my-5 shadow-lg mb-5 bg-body rounded-5"
      style="max-width: 25rem"
    >
      <img
        :src="questions[NowQuestion].fileName"
        class="card-img-to rounded-5 rounded-bottom"
        alt="..."
      />
      <div class="card-body mb-3">
        <p class="card-title text-center debacolor title_text">
          <span>{{ questions[NowQuestion].title_text }}</span>
        </p>
        <p class="card-title text-center red title_text">
          <span>{{ questions[NowQuestion].red_title_text }}</span>
        </p>
        <p class="card-text text-center fs-5">
          {{ currentQuestion }}
        </p>
        <div
          @click="checkAnswer(0)"
          class="btn hover-effect a mt-4 mx-3 d-flex align-items-center rounded-pill text-center"
          style="height: 60px"
        >
          {{ questions[NowQuestion].ans[0] }}
        </div>
        <div
          @click="checkAnswer(1)"
          class="btn hover-effect b mt-4 mx-3 d-flex align-items-center rounded-pill text-center"
          style="height: 60px"
        >
          {{ questions[NowQuestion].ans[1] }}
        </div>
        <div
          @click="checkAnswer(2)"
          class="btn hover-effect c mt-4 mx-3 d-flex align-items-center rounded-pill text-center"
          style="height: 60px"
        >
          {{ questions[NowQuestion].ans[2] }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

const questions = ref([
  {
    title_text: "デバい！",
    questionText: "この愛くるしい生き物の名前は？",
    ans: ["ハダカデバネズミ", "ハダバカデバネズミ", "デバハダカネズミ"],
    correctAnswer: 0,
    fileName: "/hadadeba.jpg",
    alert: "デバいね👍😁",
  },
  {
    title_text: "不思議！",
    questionText: "ハダカデバネズミに体毛がない理由は？",
    ans: ["天敵から身を守るため", "体温調整をしなくてもいいため", "なぞい"],
    correctAnswer: 1,
    fileName: "/hamu.jpg",
    alert: "ハダカデバネズミは基本地中で生活するから、体温調整をしなくてもよい！😁😁",
  },
  {
    title_text: "不思議！",
    questionText: "ハダカデバネズミに体毛がない理由は？",
    ans: ["天敵から身を守るため", "体温調整をしなくてもいいため", "なぞい"],
    correctAnswer: 1,
    fileName: "/hamu.jpg",
    alert: "ハダカデバネズミは基本地中で生活するから、体温調整をしなくてもよい！😁😁",
  },
  {
    title_text: "簡単！",
    questionText: "Pアズールレーンで上記画像の信頼度は？",
    ans: ["70%", "77.7%", "大当り濃厚?!"],
    correctAnswer: 0,
    fileName: "/saikyou.jpg",
    alert: "この演出で信頼度が70%です。金文字出すなら80↑は欲しい！",
  },
  {
    title_text: "",
    questionText: "この絵のタイトルは？",
    ans: ["", "", ""],
    correctAnswer: 444,
    fileName: "/y1.jpg",
    alert:""
  },
  {
    red_title_text: "",
    questionText: "X回見たら〇ぬ絵。Xに入る数字",
    ans: ["1", "2", "3"],
    correctAnswer: 2,
    fileName: "/y2.jpg",
    alert:"WOW"
  },
  {
    red_title_text: "あっ...",
    questionText: "",
    ans: ["頭", "腕", "身"],
    correctAnswer: 444,
    fileName: "/y3.jpg",
  },
]);
// スコア
const score = ref(0);
// 問題数
const count_question = ref(questions.value.length);
// 現在の問題
const NowQuestion = ref(0);

// 次の問題へ(最終問題の場合はScoreを表示する。)
const NextQuestion = () => {
  if (NowQuestion.value === count_question.value - 1) {
    alert("終了！あなたの正解数は" + score.value + "/" + count_question.value);
    NowQuestion.value = 0;
    score.value = 0;
    return;
  }
  NowQuestion.value++;
};

// 問題文の表示
const currentQuestion = computed(() => {
  return questions.value[NowQuestion.value].questionText;
});

// 答え合わせ
const checkAnswer = (index) => {
  if (index === questions.value[NowQuestion.value].correctAnswer) {
    alert("正解\n"+questions.value[NowQuestion.value].alert);
    score.value++;
    animated_image();
    NextQuestion();
    
  } else {
    alert("不正解\n"+questions.value[NowQuestion.value].alert);
    animated_image();
    NextQuestion();
  }
};

// 画像のアニメーション(未実装)
const animated_image = () => {
  const img = document.querySelector(".animated_img");
    img.classList.add("animated");
    setTimeout(() => {
      img.classList.remove("animated");
    }, 1000);
  };

</script>
<style>
.animated {
  animation: fadeInOut 1s infinite;
}
.debacolor {
  color: #fcbda3;
}
.red {
  color: #d41515;
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
.title_text {
  font-size: 80px;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>