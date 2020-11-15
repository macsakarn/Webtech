<template>
  <div class="pv-btn-wrapper">
    <button class="pv-btn" @click="modalOpen = true"></button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pv-btn-wrapper {
  position: absolute;
  top: 856px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 388px;
  height: 110px;
  background: url("../assets/new_home/btn_play.png") center/contain no-repeat;
  z-index: 1;
  .pv-btn {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 0;
    margin: auto;
    background: #fff;
    font-size: 0;
    outline: none;
    cursor: pointer;
    transition: background 0.2s linear;
    &::before {
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 28px;
      height: 28px;
      z-index: 1;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      background: url("../assets/new_home/btn_play_click.png") no-repeat;
      background-position-x: 0%;
      background-position-y: 0%;
      background-position: center top;
    }
  }
  &:hover .pv-btn {
    background: transparent;
  }
  &:hover .pv-btn::before {
    background: url("../assets/new_home/btn_play_click.png") no-repeat;
    background-position-x: 0%;
    background-position-y: 0%;
    background-position: center bottom;
  }
}
</style>
