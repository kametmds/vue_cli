<template>
  <div>
    <label for="title">タイトル</label>
    <input id="title" type="text"
      :value="value"
      @input="$emit('input', $event.target.value)">
      <!-- propで親からvalueをもらって -->
      <!-- $emitで親コンポーネントのinputを発火させてる。 -->
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>