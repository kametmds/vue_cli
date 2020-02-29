<!--単一ファイルコンポーネント -->
<template>
  <div class="appdiv">
    <!-- htmlのコードを子コンポーネントに渡すとき、propsでは限界がある -->
    <LikeHeader header-text="Hello">
      <!--(名前付きのスロット)tempaleteタグを書いて、v-slotを使用すれば、複数のslotを使用して複雑なデータを渡すことができる -->
      <!-- v-soltはtemplateだけに使用できる。スロットプロパティについては↓pタグ-->
      <!-- <p>スロットはまずは名前付きスロットを表してから、それ以外を表す。
        (詳しく言うと、それ以外全てを合体して新しい(template)defaultと言う名前付きスロットを作っている)。
        なのでそれ以外にデータをあげたい場合はdefaultと言う名前でスロットプロパティを記載すればいい。</p> -->
      <!--↓スロットプロパティを使って、子コンポーネントのデータを受け取ったりできる -->
      <template v-slot:title="slotProps">
        <h1>こんにちは{{ slotProps.user.firstName }} {{ slotProps.user.lastName }}</h1>
      </template>
      <!-- []で動的なスロット名(scriptのdataから持ってきて)で登録できる。v-slotは#に省略できるv-slot:like -->
      <template #[like]>
        <p>いいね合計（{{ number }}）</p>
      </template>
      <!-- <p>テンプレートの名前付きのスロットで囲わない部分はデフォルト(単純)なスロットに表示される</p> -->
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
    <!-- <LikeNumber></LikeNumber> -->
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <!-- <Home v-if="currentComponent === 'Home'"></Home> -->
    <!-- <About v-if="currentComponent === 'About'"></About> -->
    <!-- 動的に複数のコンポーネントを切り替えるために、componentタグと、is属性を使用すると簡単 -->
    <!-- だが、動的コンポーネントは切り替えるごとにdestroyedされる挙動となることを理解する事。入力したinputの内容が消える等コンポーネントが作り直されている。 -->
    <keep-alive>
      <!-- その場合keep-aliveを使うと、動的コンポーネントの状態を保持(キャッシュ)する -->
      <component :is="currentComponent"><template #hold><p>キャッシュあり</p></template></component>
    </keep-alive>
    <component v-bind:is="currentComponent"></component>
    <div>
      <h2>イベントフォーム(v-modelの修飾子↓)</h2>
      <!-- コンポーネントでv-modelを使う方法 -->
      <EventTitle v-model="eventData.title"></EventTitle>
      <label for="titleTwo">/lazy修飾子タイトル</label>
      <!-- .lazy修飾子でchangeイベント後にデータと入力を同期する、アドレスのバリデーションの時とかに使う -->
      <input id="titleTwo" type="text" v-model.lazy="eventData.titleTwo">
      <p>{{ eventData.title }}/{{ eventData.titleTwo }}</p>
      <hr>
      <label for="maxNumber">人数</label>
      <input id="maxNumber" type="number" v-model="eventData.maxNumber">
      <label for="maxNumberTwo">/number修飾子人数</label>
       <!-- .number修飾子でユーザの入力を数値として自動的に型変換する -->
      <input id="maxNumberTwo" type="number" v-model.number="eventData.maxNumberTwo">
      <p>{{ typeof eventData.maxNumber }}/{{ typeof eventData.maxNumberTwo }}</p>
      <hr>
      <label for="host">ホスト</label>
      <input id="host" type="text" v-model="eventData.host">
      <label for="hostTwo">/trim修飾子ホスト</label>
       <!-- .trim修飾子を使用して、ユーザの入力から空白を自動的に取り除く -->
      <input id="hostTwo" type="text" v-model.trim="eventData.hostTwo">
      <pre>{{ eventData.host }}/{{ eventData.hostTwo }}</pre><!--preタグは空白も正しく表示する-->
      <hr>
      <label for="detail">イベントの内容</label>
      <textarea id="detail" cols="50" rows="5" v-model="eventData.detail"></textarea>
      <p style="white-space: pre;">{{ eventData.detail }}</p><!--preタグは改行も正しく表示する。またstyle="white-space: pre;"でもなる。-->
      <hr>
      <p>単体のチェックボックスに双方向データバインディングを作成</p>
      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
      <label for="isPrivate">非公開</label><!--forとidを同じにする事で、ラベルをクリックしてもチェックが入る-->
      <p>{{ eventData.isPrivate }}</p><!--単体の時はチェックボックスはbooleanになる-->
      <hr>
      <p>複数のチェックボックスに双方向データバインディングを作成</p>
      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target">
      <label for="10">10代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target">
      <label for="20">20代</label>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target">
      <label for="30">30代</label>
      <p>{{ eventData.target }}</p>
      <hr>
      <p>ラジオボタンに双方向データバインディングを作成</p>
      <p>参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price">
      <label for="free">無料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.price">
      <label for="paid">有料</label>
      <hr>
      <p>セレクトボックスに双方向データバインディングを作成</p>
      <p>開催場所</p>
      <select v-model="eventData.location">
        <option v-for="location in locations" :key="location">{{location}}</option>
      </select>
      <p>{{ eventData.location }}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";
import EventTitle from "./components/EventTitle.vue";


export default {
  // この中にコンポーネントオプション（methodsやdataを書く）
  // ES6は「data: function(){}」を以下みたいに書ける
  data() {
    return {
      number: 10,
      like: "like",
      currentComponent: "Home",
      locations: ["東京","大阪","神奈川"],
      eventData: {
        title: "タイトルをv-modelでバインドしてます",
        titleTwo: ".lazy修飾子がある方です",
        maxNumber: 0,
        maxNumberTwo: 0,
        host: "normalhost",
        hostTwo: "trimhost",
        detail: "テキストエリアの改行を表す",
        isPrivate: false, //boolean
        target: [],//複数のチェックボックスの時は配列になる
        price: "無料",
        location: "東京"
      }
    }
  },
  // 単一ファイルコンポーネントのローカル登録
  components: {
    // LikeHeader: LikeHeader
    // ES6からはKeyとValueが同じの場合、下の様に短縮して書くことができる
    LikeHeader,
    About,
    Home,
    EventTitle
  },
  methods: {
    // 下の引数(value)で$emitで書いた第二引数を受け取れる
    incrementNumber: function(value) {
      this.number = value
    }
  }
}
</script>

<style scoped>
  /* .header {
    background-color: tan
  } */
  .appdiv {
    border: 1px solid #000;
  }
  p {
    margin: 8px 0;
  }
</style>