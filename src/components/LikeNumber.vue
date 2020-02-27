<!--単一ファイルコンポーネント -->
<template>
<!-- CDNは文字列として書かなければいけなかったテンプレートがHTMLみたいにかける様になっている -->
<!-- ※テンプレートのルートの要素は一つでなければいけない。二つ以上あるとエラーが起きる。一つの要素で括る必要がある -->
  <div class="div">
    <p>いいね({{ totalNumber / 2}})</p>
    <p>いいね({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
// npm run serve
export default {
  // 子コンポーネントではpropsオプションで受け取りたい属性名を指定する。
  props: {
    // ["totalNumber"],みたいな配列ではなくオブジェクトでしてすることもできる。
    // その際は、受け入れ型を指定すると、指定した型以外を受け取った時、警告が出るので問題時に探しやすい
    // つまりバリデーション
    totalNumber: {
      // その中にさらにオブジェクトを書ける。何故かというと複数の型の指定ができる。
      type: Number,
      // required: true,
      default: 20
    },
    testProps: {
      type: String
    }
  },
  // propsで渡されたdataはscriptでも使える
  computed: {
    halfNumber: function() {
      return this.totalNumber / 4
    }
  },
  methods: {
    increment() {
      // this.number += 1
      // 親コンポーネントにデータを渡す送り口
      // $emit('発火させるイベント名',渡すデータ)
      // ※親にデータを渡すという考えより、
      // 子の好きなタイミングで親のメソッドを発火する事ができると考えた方が良い
      // $emitはカスタムイベントを作る物
      this.$emit("my-click", this.totalNumber + 1);
    }
  }
};
</script>

<style>
  .div {
    border: 1px solid blue;
  }
</style>
