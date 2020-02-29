export const tokyoNumber = {
  data() {
    return {
      tmpData: "hello",
      title: "Welcom to Tokyo",
      subTitle: "Tokyo is a great city",
      number: 0
    }
  },
  filters: {
    // コンポーネントのオプション内でローカルフィルタを定義する
    lowerCase(value) {
      // filterでthisは使えない
      return value.toLowerCase();
    }
  }
}