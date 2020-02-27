import Vue from 'vue'
// App.vueをコンポーネントとしてインポートする。
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
// 単一ファイルコンポーネントのグローバル登録
Vue.component('LikeNumber', LikeNumber)

new Vue({
  // 下の括弧内はオブジェクトを取れる。Appは上でインポートしたApp。つまり上でインポートしたコンポーネントはオブジェクト
  render: h => h(App),
}).$mount('#app')
