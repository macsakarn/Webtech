<template>
  <div>
    <div class="flex space-x-4 ...">
      <div :class="[img_wrap[0]]">
        1
      </div>
      <div :class="[img_wrap[1]]">
        2
      </div>
      <div :class="[img_wrap[2]]">
        3
      </div>
      <div :class="[img_wrap[3]]">
        4
      </div>
      <div :class="[img_wrap[4]]">
        5
      </div>
      <div :class="[img_wrap[5]]">
        6
      </div>
    </div>
    {{ img_wrap }}
    <ul class="flex">
      <li class="mx-5" @click="img_input(0)">1</li>
      <li class="mx-5" @click="img_input(1)">2</li>
      <li class="mx-5" @click="img_input(2)">3</li>
      <li class="mx-5" @click="img_input(3)">4</li>
      <li class="mx-5" @click="img_input(4)">5</li>
      <li class="mx-5" @click="img_input(5)">6</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img_wrap: [
        "pc-ch__slide--active",
        "pc-ch__slide--next1",
        "pc-ch__slide--next2",
        "",
        "pc-ch__slide--prev2",
        "pc-ch__slide--prev1"
      ]
    };
  },
  methods: {
    img_input(data) {
      if (data == 0) {
        this.img_wrap = [
          "pc-ch__slide--active",
          "pc-ch__slide--next1",
          "pc-ch__slide--next2",
          "",
          "pc-ch__slide--prev2",
          "pc-ch__slide--prev1"
        ];
      } else if (data == 1) {
        this.img_wrap = [
          "pc-ch__slide--prev1",
          "pc-ch__slide--active",
          "pc-ch__slide--next1",
          "pc-ch__slide--next2",
          "",
          "pc-ch__slide--prev2"
        ];
      } else if (data == 2) {
        this.img_wrap = [
          "pc-ch__slide--prev2",
          "pc-ch__slide--prev1",
          "pc-ch__slide--active",
          "pc-ch__slide--next1",
          "pc-ch__slide--next2",
          ""
        ];
      } else if (data == 3) {
        this.img_wrap = [
          "",
          "pc-ch__slide--prev2",
          "pc-ch__slide--prev1",
          "pc-ch__slide--active",
          "pc-ch__slide--next1",
          "pc-ch__slide--next2"
        ];
      } else if (data == 4) {
        this.img_wrap = [
          "pc-ch__slide--next2",
          "",
          "pc-ch__slide--prev2",
          "pc-ch__slide--prev1",
          "pc-ch__slide--active",
          "pc-ch__slide--next1"
        ];
      } else if (data == 5) {
        this.img_wrap = [
          "pc-ch__slide--next1",
          "pc-ch__slide--next2",
          "",
          "pc-ch__slide--prev2",
          "pc-ch__slide--prev1",
          "pc-ch__slide--active"
        ];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.hello {
  color: red;
}
</style>
