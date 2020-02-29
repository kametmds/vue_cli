<template>
  <div>
    <!-- 複数の値を必要とするカスタムディレクティブにはオブジェクトを渡す -->
    <!-- 修飾子をカスタムディレクティブに対して使えるようにする -->
    <span v-border:solid.round.shadow="{width: '5px', color: 'brown'}">Home：<input></span>
    <slot name="hold"></slot>
    <!-- フィルターを使用して、一般的なテキストフォーマットを作成する -->
    <h2>{{ title | upperCase }}</h2>
    <!-- 複数のフィルタ関数を連結させる事もできる （先頭から順に実行される）-->
    <p>{{ subTitle | lowerCase | upperCase}}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
    <!-- <CountNumber></CountNumber> -->
  </div>
</template>

<script>
// import CountNumber from "./CountNumber.vue"
import { tokyoNumber } from "@/tokyoNumber"
export default {
  // ミックスインを作って、オプションをコンポーネント間で共有する
  mixins: [tokyoNumber],
  data() {
    return {
      tmpData: "hello"
    }
  },
  // components: {
  //   CountNumber
  // },
  // directivesオプションを使って、ローカルにカスタムディレクティブを登録する
  directives: {
    border(el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.7)";
      }
    }
  }
}
</script>
<style scoped>
  div {
    background-color: chartreuse;
    border: 1px solid rgb(214, 214, 214);
  }
</style>