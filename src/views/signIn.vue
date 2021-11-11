<template>
    <v-container fluid class="background">
        <div class="sign-in-container">
        <v-row class="title-row" justify="center" align="center">
            <v-col class="title-col" cols="auto">
                <div class="-welcome">
                    Welcome
                </div>
                <span>
                    환영합니다, 관리자님!
                </span>
            </v-col>
        </v-row>
        <v-card class="content">
            <img class="logo-img" src="../assets/img/dambee.png">
            <v-form class="sign-in-form ma-15">
            <v-text-field
            placeholder="아이디를 입력하세요"
            outlined></v-text-field>
            <v-text-field
            placeholder="비밀번호를 입력하세요"
            outlined></v-text-field>
            <v-checkbox
              class="id-checkobx"
              v-model="checkbox"
              label="아이디 저장하기"
              color="orange darken-3"
              value="orange darken-3"
            ></v-checkbox>
            <v-btn
            class="sign-in-btn"
            depressed
            block
            x-large
            >
            로그인
            </v-btn>
            <div class="err-message">
            <img class="err-img" src="../assets/img/err.png" />
            <span> 아이디 또는 비밀번호가 틀렸습니다. 확인 후 다시 시도하세요.</span>
            </div>
            </v-form>
        </v-card>
        <div class="right-container">
            <span>ⓒ Bestfin : Corp All Rights Reserved.</span>
        </div>
        </div>
    </v-container>
</template>

<script>
    export default {
        data () {
      return {
        checkbox: false,
      }
    },
    }
</script>

<style scoped>
* {
    font-family: 'Spoqa Han Sans Neo';
}

.background {
    background-color: #f5f5f5;
    padding: 0px !important;
    height: 100%;
}

.background > .sign-in-container {
    width: 100%;
    height: 300px;
    background-image: url(../assets/img/signIn.png);
    background-size: 1920px 300px;
    background-position: center top;
    background-color: #ffe6a1;
    position: relative;
}

.background > .sign-in-container > .title-row {
    height: 300px;
}

.background > .sign-in-container > .title-row > .title-col {
    text-align: center;
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;
}

.background > .sign-in-container > .title-row > .title-col > .-welcome {
    font-size: 40px;
    line-height: 62px;
}

.background > .sign-in-container > .content {
    width: 546px;
    height: 580px;
    margin: 0 auto;
    margin-top: -50px;
    border-radius: 0px !important;
    text-align: center;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.18);
}

.background > .sign-in-container > .content > .logo-img {
    margin-top: 70px;
}

.background > .sign-in-container > .content > .sign-in-form > .sign-in-btn {
    font-size: 20px;
    line-height: 34px;
    color: #ffffff;
    background-color: #ff6934;
}

.background > .sign-in-container > .content > .sign-in-form > .id-checkobx{
    margin-top: -13px !important;
}

.background > .sign-in-container > .content > .sign-in-form > .err-message {
    margin-top: 11px;
    height: 22px;
    float: left;
    font-size: 12px;
    line-height: 22px;
    color: #f32728;
}

.background > .sign-in-container > .content > .sign-in-form > .err-message > .err-img {
    margin-right: 3px;
    vertical-align: text-bottom;
}

.background > .sign-in-container > .right-container {
    width: 546px;
    margin: 0 auto;
    margin-top: 30px;
    text-align: right;
    font-size: 12px;
    line-height: 22px;
    color: #73706d;
}

</style>
