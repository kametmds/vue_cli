import Vue from 'vue'
// App.vueをコンポーネントとしてインポートする。
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
// 単一ファイルコンポーネントのグローバル登録
Vue.component('LikeNumber', LikeNumber);
// フィルターを使用して、一般的なテキストフォーマットを作成する
Vue.filter("upperCase", function(value) {
  // filterもmethodと同じで同じ使用しているコンポーネントが再描画される度に実行される
  // ので再描画が頻繁にされる様な場所にはcomputedを書く。
  // console.log("フィルタ");
  return value.toUpperCase();
});
// グローバルミックスインを作成。だが全体に影響を与えアプリを荒らしてしまうのでなるべくローカルで書く
Vue.mixin({
  // created() {
  //   console.log("global mixin")
  // }
})
// カスタムディレクティブには５つのフック関数を定義できる
Vue.directive("border", function(el, binding) {
  // elを使ってDOMを直接操作し、シンプルなカスタムディレクティブを作成
  // el.style.border = "solid 1px black";
  // カスタムディレクティブに、binding.valueを使ってデータを渡す
  el.style.borderWidth = binding.value.width;
  el.style.borderColor = binding.value.color;
  // argで引数の値をとる
  el.style.borderStyle = binding.arg;
  // 修飾子をカスタムディレクティブに対して使えるようにする
  if (binding.modifiers.round) {
    el.style.borderRadius = "0.5rem";
  }
  if (binding.modifiers.shadow) {
    el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.7)";
  }
});
// 上のfunctionは下のbindとupdateにフックする。sec.134参照
//{
//   bind(el, binding, vnode){
//     // ディレクティブが初めて対象に紐づいた時
//   },
//   inserted(el, binding, vnode){
//     // 親nodeに挿入された時
//   },
//   update(el, binding, vnode, oldVnode){
//     // コンポーネントが更新される度、子コンポーネントが更新される前。
//   },
//   componentUpdated(el, binding, vnode, oldVnode){
//     // コンポーネントが更新される度、子コンポーネントが更新される後。
//   },
//   unbind(el, binding, vnode){
//     // ディレクティブが紐づいている要素から取り除かれた時。
//   }
//}
new Vue({
  // 下の括弧内はオブジェクトを取れる。Appは上でインポートしたApp。つまり上でインポートしたコンポーネントはオブジェクト
  render: h => h(App),
}).$mount('#app')
