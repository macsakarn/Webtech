<template>
  <div class="text-center">
    <div class="">
      <ul v-if="selected === 1">
        <img src="../../assets/City/liyue/character_5.png" />
      </ul>
      <ul v-else-if="selected === 2">
        <img src="../../assets/City/liyue/character_2.png" />
      </ul>
      <ul v-else-if="selected == 3">
        <img src="../../assets/City/liyue/character_3.png" />
      </ul>
      <ul v-else-if="selected == 4">
        <img src="../../assets/City/liyue/character_4.png" />
      </ul>
    </div>
    <hr />
    <ul class="flex ">
      <li
        class="flex-1 "
        @click="selected = 1"
        :class="{ highlight: selected == 1 }"
      >
        น้องหัวฟ้า
      </li>
      <li
        class="flex-1"
        @click="selected = 2"
        :class="{ highlight: selected == 2 }"
      >
        น้องตาเดียว
      </li>
      <li
        class="flex-1"
        @click="selected = 3"
        :class="{ highlight: selected == 3 }"
      >
        น้องผมยาว
      </li>
      <li
        class="flex-1"
        @click="selected = 4"
        :class="{ highlight: selected == 4 }"
      >
        น้องหมี
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 1
    };
  }
};
</script>

<style lang="scss" scoped>
img {
  display: block;
  margin: auto;
  width: 500px;
}
</style>
