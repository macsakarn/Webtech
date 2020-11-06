<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="flex">
            <div class="flex-1"></div>
            <div class="flex-1">
              <iframe
                width="896"
                height="540"
                src="https://www.youtube.com/embed/5DuZblVxG3I"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="flex-1">
              <button
                class="modal-default-button ml-5"
                @click="$emit('close')"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    value: {
      required: true
    }
  },
  methods: {
    close() {
      this.$emit("input", !this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: auto;
  /* padding: 20px 30px; */
  /* background-color: #fff; */
  border-radius: 2px;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33); */
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  width: 32px;
  height: 32px;
  background: transparent url("../assets/home/close.png") no-repeat center
    center;
  opacity: 0.75;
  border: 0;
  outline: none;
  font-size: 0;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
