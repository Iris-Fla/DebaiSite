
<template>
  <div>
    <h1>Quiz</h1>
    <div class="question">
      <p>{{ questions[currentQuestion].question }}</p>
    </div>
    <div class="answer">
      <input type="radio" name="answer" value="1" v-model="answer"> {{ questions[currentQuestion].answers[0] }}
      <br />
      <input type="radio" name="answer" value="2" v-model="answer"> {{ questions[currentQuestion].answers[1] }}
      <br />
      <input type="radio" name="answer" value="3" v-model="answer"> {{ questions[currentQuestion].answers[2] }}
    </div>
    <div class="button">
      <button @click="checkAnswer">Check Answer</button>
      <button @click="nextQuestion">Next Question</button>
    </div>
  </div>
</template>
<script setup>
const questions= ref( [
        {
          question: "What is the capital of France?",
          answers: ["Paris", "London", "New York"],
          correctAnswer: "Paris",
        },
        {
          question: "What is the population of the Earth?",
          answers: ["8 billion", "7 billion", "6 billion"],
          correctAnswer: "8 billion",
        },
        {
          question: "What is the chemical symbol for water?",
          answers: ["H2O", "H2O2", "H2"],
          correctAnswer: "H2O",
        },
      ])
const currentQuestion = ref(0)
const score = ref(0)
const index = ref(0)
const checkAnswer = () => {
      let answer = questions.value[index.value].answers[0];
      if (answer === questions.value[index.value].correctAnswer) {
        score + 1;
      }
    }

const nextQuestion= () => {
      let index = currentQuestion + 1;
      if (index < questions.length) {
        currentQuestion = index;
      } else {
        showResults();
      }
    }
const showResults = () => {
      var message = "Your score is " + score;
    }
</script>
<style></style>
