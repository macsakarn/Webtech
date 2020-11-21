<template>
  <div>
    <ul @click="wow = !wow">
      test
    </ul>
    <ul :style="wow ? { display: 'none' } : { display: 'block' }">
      <li>mac</li>
      <li>mac</li>
      <li>mac</li>
      <li>mac</li>
      <li>mac</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wow: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
