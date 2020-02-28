<template>
  <div>
    <!-- slotを使うことで、子コンポーネントにhtmlのコード(テンプレート全て)を渡すことができる -->
    <!-- (名前付きのスロット)v-slotで定義した名前をslotタグの中のname属性で表示させる事ができる -->
    <slot name="title" v-bind:user="username" text="text">
      デフォルトのタイトル<!--親コンポーネントの内容がなかった時デフォルトの内容を表す-->
    </slot>
    <hr>
    <slot name="like">
    </slot>
    <!-- <p>{{ headerText }}</p> -->
    <!-- ↓name="default"が無くてもいい、詳しい解説はv-slot側に記載 -->
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: {
        firstName: "Kame",
        lastName: "Yuki"
      }
    }
  },
  props: ["headerText"]
}
</script>
<!-- ローカル登録した単一ファイルコンポーネントはスコープできる -->
<style scoped>
  h1 {
    margin: 0;
    padding: 12px;
    text-align: center;
  }

  div {
    /* border: 1px solid red; */
    background-color: bisque
  }
</style>