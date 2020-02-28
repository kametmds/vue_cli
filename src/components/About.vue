<template>
  <div>
    <span>About：<input></span>
    <slot name="hold"></slot>
  </div>
</template>

<script>
export default {
//   destroyed() {
//     console.log("destroyed");
//   },
//   // 動的コンポーネントにkeep-aliveを追加する事で、新しく２つのライフサイクルフックが追加される
//   deactivated() {
//     console.log("deactivated");
//   },
//   activated() {
//     console.log("activated");
//   }
}
</script>

<style scoped>
  div {
    background-color: aqua;
    border: 1px solid rgb(214, 214, 214);
  }
</style>