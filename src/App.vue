<!--単一ファイルコンポーネント -->
<template>
  <div>
    <!-- htmlのコードを子コンポーネントに渡すとき、propsでは限界がある -->
    <LikeHeader header-text="Hello">
      <!--(名前付きのスロット)tempaleteタグを書いて、v-slotを使用すれば、複数のslotを使用して複雑なデータを渡すことができる -->
      <!-- v-soltはtemplateだけに使用できる -->
      <p>スロットはまずは名前付きスロットを表してから、それ以外を表す。
        (詳しく言うと、それ以外全てを合体して新しい(template)defaultと言う名前付きスロットを作っている)</p>
      <!--↓スロットプロパティを使って、子コンポーネントのデータを受け取ったりできる -->
      <template v-slot:title="slotProps">
        <h1>こんにちは{{ slotProps.user.firstName }} {{ slotProps.user.lastName }}</h1>
      </template>
      <template v-slot:like>
        <p>いいね合計（{{ number }}）</p>
      </template>
      <p>テンプレートの名前付きのスロットで囲わない部分はデフォルト(単純)なスロットに表示される</p>
    </LikeHeader>
    <!-- コンポーネントをパスカルケースで書いた場合、↓ケバブケースでも↑パスカルケースでもどちらでも書ける -->
    <!-- <like-Header class="header"></like-Header> -->
    <!-- キャメルケースでもかけるがなるべくコンポーネントはパスカルケースで書いた方がいいという事になっている。 -->
    <!-- データバインディングを使えば親が持っているデータを子に渡せる -->
    <LikeNumber v-bind:totalNumber="number"
                testProps="test"
                @my-click="incrementNumber"></LikeNumber>
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