<template>
  <div id="app">
    <div v-if="center" key="center">
      <p>最初の画面</p>
      <div v-on:click="watchLeft">左の画面にいく</div>
      <div v-on:click="watchRight">右の画面にいく</div>
    </div>

    <div v-if="left" key="left">
      <p>左の画面</p>
      <div v-on:click="watchCenter">最初の画面に戻る</div>
      <div v-on:click="watchRight">右の画面にいく</div>
    </div>

    <div v-if="right" key="right">
      <p>右の画面</p>
      <div v-on:click="watchCenter">最初の画面に戻る</div>
      <div v-on:click="watchLeft">左の画面にいく</div>
    </div>
  </div>
</template>

<script>
import { createApp } from 'vue'

createApp({
    data() {
    return {
      center: true,
      left: false,
      right: false,
    };
  },
  methods: {
    watchCenter: function () {
      this.center = true;
      this.left = false;
      this.right = false;
    },
    watchLeft: function () {
      this.center = false;
      this.left = true;
      this.right = false;
    },
    watchRight: function () {
      this.center = false;
      this.left = false;
      this.right = true;
    },
  },
}).mount('#app');
</script>
