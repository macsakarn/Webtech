<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <img src="../assets/nav/logo_2.png" class="logo" />
        <div class="modal-container">
          <button class="modal-default-button" @click="$emit('close')">
            <img src="../assets/nav/close.png" class="close" />
          </button>

          <div class="modal-body">
            <form action="#">
              <input
                type="text"
                placeholder="Username/Email"
                class="login_input mt-5"
              />
              <input
                type="text"
                placeholder="Password"
                class="login_input mt-5"
              />
              <button class="btn_login mt-5">Log in</button>
            </form>
          </div>
          <div class="modal-footer">
            <a href="">Having Problems?</a>
            <a href="" class="register">Register Now</a>
          </div>
          <div class="n-footer">
            <div class="or mt-3">
              Or log in using social media
            </div>
            <div class="icon flex ">
              <div class="flex-1"></div>
              <div class="flex-1 flex">
                <div class="one"></div>
                <div class="two"></div>
              </div>
              <div class="flex-1"></div>
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
.n-footer {
  text-align: center;
  font-size: 14px;
  color: #c0c5c8;
  line-height: 1.5;
  .icon {
    font-size: 0;
    margin-top: 15px;
    .one {
      margin-right: 30px;
      width: 42px;
      height: 42px;
      background-image: url("../assets/nav/facebook.png");
      background-size: 100% 100%;
    }
    .two {
      width: 42px;
      height: 42px;
      background-image: url("../assets/nav/tw.png");
      background-size: 100% 100%;
    }
  }
}
.modal-footer {
  text-decoration: none;
  cursor: pointer;
  color: #7f858a;
  .register {
    float: right;
  }
}
.btn_login {
  line-height: 48px;
  font-size: 18px;
  cursor: pointer;
  border-color: #3b4354;
  background-color: #3b4354;
  display: block;
  width: 100%;
  color: #fff;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
  outline: none;
}
.login_input {
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px 12px;
}

.close {
  width: 16px;
  height: 16px;
}

.logo {
  width: 107px;
  height: 38px;
  margin: auto;
  margin-bottom: 25px;
}

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
  width: 450px;
  margin: 0px auto;
  padding: 30px 40px 50px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

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
