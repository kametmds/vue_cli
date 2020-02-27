<!--単一ファイルコンポーネント -->
<template>
  <div>
    <LikeHeader class="header"></LikeHeader>
    <!-- コンポーネントをパスカルケースで書いた場合、↑ケバブケースでも↓パスカルケースでもどちらでも書ける -->
    <!-- キャメルケースでもかけるがなるべくコンポーネントはパスカルケースで書いた方がいいという事になっている。 -->
    <!-- <like-Header class="header"></like-Header> -->
    <p>{{ number }}</p>
    <!-- データバインディングを使えば親が持っているデータを子に渡せる -->
    <LikeNumber v-bind:totalNumber="number"
                testProps="test"
                v-on:my-click="incrementNumber">
                </LikeNumber>
    <!-- v-bindは下みたいに省略できる -->
    <!-- propsではHTMLは属性をケバブケースで書く慣習があるからケバブケースで書いた方が良い -->
    <LikeNumber :total-number="number"
                 test-props="test"></LikeNumber>
    <!-- propsによるバリデーション用↓ -->
    <LikeNumber></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  // この中にコンポーネントオプション（methodsやdataを書く）
  // ES6は「data: function(){}」を以下みたいに書ける
  data() {
    return {
      number: 10
    }
  },
  // 単一ファイルコンポーネントのローカル登録
  components: {
    // LikeHeader: LikeHeader
    // ES6からはKeyとValueが同じの場合、下の様に短縮して書くことができる
    LikeHeader
  },
  methods: {
    // 下の引数(value)で$emitで書いた第二引数を受け取れる
    incrementNumber: function(value) {
      this.number = value
    }
  }
  
}
</script>

<style>
  /* .header {
    background-color: tan
  } */

</style>