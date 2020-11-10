<template>
  <div class="text-center">
    <div class="h-64 my-20">
      <ul v-if="selected === 1" class="news_item_header">
        mac1
      </ul>
      <ul v-else-if="selected === 2" class="news_item_header">
        mac2
      </ul>
      <ul v-else-if="selected == 3" class="news_item_header">
        mac3
      </ul>
      <ul v-else-if="selected == 4" class="news_item_header">
        mac4
      </ul>
    </div>
    <hr />
    <ul class="flex ">
      <li
        class="flex-1 "
        @click="selected = 1"
        :class="{ highlight: selected == 1 }"
      >
        กดที่ตัวที่ 1
      </li>
      <li
        class="flex-1"
        @click="selected = 2"
        :class="{ highlight: selected == 2 }"
      >
        กดที่ตัวที่ 2
      </li>
      <li
        class="flex-1"
        @click="selected = 3"
        :class="{ highlight: selected == 3 }"
      >
        กดที่ตัวที่ 3
      </li>
      <li
        class="flex-1"
        @click="selected = 4"
        :class="{ highlight: selected == 4 }"
      >
        กดที่ตัวที่ 4
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

<style lang="scss" scoped></style>
