<template>
  <div class="cdkey__wrap" :style="{ backgroundImage: 'url(' + image_1 + ')' }">
    <div class="cdkey__user">
      <img src="../../assets/gift/star.png" alt="" class="cdkey__icon-star" />
      <div class="cdkey__user-btn">Log in to redeem</div>
    </div>
    <div class="cdkey__main">
      <form class="cdkey-form">
        <div class="cdkey-form__title">Redeem Code</div>
        <div class="cdkey-form__field">
          <div class="cdkey-form__label-wrap">
            <label class="cdkey-form__label">Server</label>
          </div>
          <div class="cdkey-form__input-wrap">
            <div class="cdkey-select cdkey-select--empty">
              <div class="cdkey-select__btn">
                Select server
              </div>
            </div>
            <div class="cdkey-form__error"></div>
          </div>
        </div>
        <div class="cdkey-form__field">
          <div class="cdkey-form__label-wrap">
            <label class="cdkey-form__label">Character Nickname</label>
          </div>
          <div class="cdkey-form__input-wrap">
            <input
              disabled="disabled"
              type="text"
              class="cdkey-form__input"
              placeholder="Obtain character nickname"
            />
            <div class="cdkey-form__error"></div>
          </div>
        </div>
        <div class="cdkey-form__field">
          <div class="cdkey-form__label-wrap">
            <label class="cdkey-form__label">Redemption Code</label>
          </div>
          <div class="cdkey-form__input-wrap">
            <input
              disabled="disabled"
              type="text"
              class="cdkey-form__input"
              placeholder="Enter redemption code"
            />
            <div class="cdkey-form__error"></div>
          </div>
        </div>
        <button type="submit" class="cdkey-form__submit">Redeem</button>
      </form>
      <div class="cdkey-desc">
        <div class="cdkey-desc__title">About Code Redemption</div>
        <div class="cdkey-desc__content">
          <p style="">
            1. Before redeeming a code, log in to your account and make sure you
            have created a character in the game and have linked your miHoYo
            account in the User Center. Otherwise, you will be unable to redeem
            the code.
          </p>
          <p style="">
            2. After redeeming a code, you will receive the redeemed item via
            in-game mail. Check in-game to see that you have received it.
          </p>
          <p style="">
            3. Pay attention to the redemption conditions and validity period of
            the redemption code. A code cannot be redeemed after it expires.
          </p>
          <p style="">
            4. Each redemption code can only be used once. The same character
            cannot use redemption codes of the same type more than once.
          </p>
          <p style="">
            5. Once a code is redeemed, the redemption cannot be revoked. Make
            sure you log into the correct account before redeeming the code.
          </p>
          <p style="">
            6. If you encounter any problems during the code redemption process,
            please contact Customer Service.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bg_1 from "../../assets/gift/bg.jpg";
export default {
  layout: "App",
  data() {
    return {
      image_1: bg_1
    };
  }
};
</script>

<style lang="scss" scoped>
.cdkey__wrap {
  padding: 225px 0 116px;
  background: center/cover no-repeat;
  background-image: none;
}
.cdkey__wrap * {
  overflow-wrap: break-word;
}
.cdkey__user {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto 12px;
  width: 1080px;
  height: 17px;
  font-size: 16px;
  color: #fff;
}
.cdkey__icon-star {
  margin-right: 7px;
  width: 17px;
  height: 17px;
}
.cdkey__user-btn {
  cursor: pointer;
}
.cdkey__main {
  display: flex;
  align-items: stretch;
  padding: 70px 35px;
  margin: 0 auto;
  width: 1080px;
  height: 490px;
  background: url("../../assets/gift/form.png") center/cover no-repeat;
}
.cdkey-form {
  width: 584px;
}
.cdkey-form__title {
  margin-bottom: 34px;
  text-align: center;
  line-height: 25px;
  font-size: 24px;
  font-weight: bold;
  color: #4e4d4b;
}
.cdkey-form__field {
  display: flex;
  align-items: flex-start;
}
.cdkey-form__label-wrap {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 38px;
}
.cdkey-form__label {
  flex-shrink: 0;
  padding-right: 15px;
  width: 145px;
  text-align: right;
  line-height: 19px;
  font-size: 18px;
  color: #373534;
  &::before {
    content: "*";
    margin-right: 4px;
    color: #ff2800;
    vertical-align: top;
  }
}
.cdkey-select {
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.cdkey-select.cdkey-select--empty .cdkey-select__btn {
  color: #a6a6a6;
}
.cdkey-select .cdkey-select__btn {
  padding: 0 14px;
  width: 360px;
  height: 38px;
  line-height: 38px;
  border: 1px solid #6d6d6d;
  border-radius: 4px;
  font-size: 18px;
  background: #fff;
  position: relative;
  cursor: pointer;
}
.cdkey-select .cdkey-select__btn::after {
  content: "";
  position: absolute;
  top: 15px;
  right: 15px;
  width: 16px;
  height: 8px;
  background: url("../../assets/gift/arror.png") center/cover no-repeat;
}
.cdkey-form__input {
  padding: 0 14px;
  width: 360px;
  height: 38px;
  line-height: 38px;
  border: 1px solid #6d6d6d;
  border-top-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-radius: 4px;
  font-size: 18px;
  background: #fff;
}
.cdkey-form__error {
  padding: 5px 10px 5px 0;
  min-height: 30px;
  font-size: 16px;
  line-height: 20px;
  color: #f00;
}
.cdkey-form__submit {
  display: block;
  margin: 8px 0 0 145px;
  width: 360px;
  height: 58px;
  font-size: 24px;
  color: #f4c780;
  background: #393b40;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  border: none;
  font-family: inherit;
}
.cdkey-desc {
  position: relative;
  padding-left: 60px;
  width: 426px;
  color: #4e4d4b;
  background: url("../../assets/gift/center.png") top left/10px 350px no-repeat;
}
.cdkey-desc__title {
  margin-bottom: 34px;
  text-align: center;
  line-height: 25px;
  font-size: 24px;
  font-weight: bold;
}
.cdkey-desc__content {
  padding-right: 24px;
  height: 300px;
  font-size: 16px;
  line-height: 24px;
  overflow-y: auto;
}
.cdkey-desc__content::before {
  content: "";
  position: absolute;
  right: 24px;
  bottom: -10px;
  left: 60px;
  z-index: 1;
  height: 40px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0,
    rgba(243, 240, 236, 0.5) 20px
  );
}
</style>
