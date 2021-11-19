<template>
    <v-container class="background" fluid fill-height>

        <v-row class="content-header mb-13" justify="space-between">
            <v-col class="pa-0" align-self="center">
                <h2 class="content-title">
                    가산금리 관리
                </h2>
            </v-col>
        </v-row>

        <v-row class="-container mb-13">
            <h5 class="-title">
                가산금리 관리
            </h5>

            <div class="-table">
                <v-row class="-table-head" no-gutters>
                    <v-col class="table-start-end items">
                        <div>
                            No.
                        </div>
                    </v-col>
                    <v-col class="items">
                        <div>
                            가산금리 명
                        </div>
                    </v-col>
                    <v-col class="table-start-end items">
                        <div>
                            관리
                        </div>
                    </v-col>
                </v-row>
                <v-row class="-table-row">
                    <v-col class="table-start-end items">
                        <div>
                            1
                        </div>
                    </v-col>
                    <v-col class="items">
                        <div>
                            <v-text-field
                            class="text-field-name-center"
                            dense
                            label="금리명 입력"
                            outlined
                            value="다주택자"
                            >
                            </v-text-field>
                        </div>
                    </v-col>
                    <v-col class="table-start-end items">
                        <div>
                            <v-btn
                            class="table-btn"
                            color="#ffffff"
                            width="170px"
                            height="42px"
                            light
                            >
                                변경
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
                <v-row class="-table-row">
                    <v-col class="table-start-end items">
                        <div>
                            2
                        </div>
                    </v-col>
                    <v-col class="items">
                        <div>
                            <v-text-field
                            class="text-field-name-center"
                            dense
                            label="금리명 입력"
                            outlined
                            value="그냥 금리 더 받고 싶은 고객님"
                            >
                            </v-text-field>
                        </div>
                    </v-col>
                    <v-col class="table-start-end items">
                        <div>
                            <v-btn
                            class="table-btn"
                            color="#ffffff"
                            width="170px"
                            height="42px"
                            light
                            >
                                변경
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
                <v-row class="-table-row">
                    <v-col class="table-start-end items">
                        <div>
                            3
                        </div>
                    </v-col>
                    <v-col class="items">
                        <div>
                            <v-text-field
                            class="text-field-name-center"
                            dense
                            label="금리명 입력"
                            outlined
                            ></v-text-field>
                        </div>
                    </v-col>
                    <v-col class="table-start-end items">
                        <div>
                            <v-btn
                            class="table-btn"
                            color="#484746"
                            width="170px"
                            height="42px"
                            dark
                            >
                                추가
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-row>

        <v-row class="btn-container-row">
            <v-col class="btn-container-col">
                <v-btn
                class="submit-btn"
                width="97px"
                height="48px"
                dark
                color="#ff6934"
                >
                    등록
                </v-btn>
                <v-btn
                class="submit-btn"
                width="97px"
                height="48px"
                dark
                color="#484746"
                >
                    닫기
                </v-btn>
            </v-col>
        </v-row>

        <!-- @@@@@@@@@@@@@@@@@@@@@@@@@@@@@(모달창)@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ -->
        <hr class="hrhrhr">

        <v-card class="mb-13" width="450px" height="258px" rounded="lg">
            <div class="modal-title">
                <img src="../../assets/img/exit_btn.png" >
                <h6>
                    안내
                </h6>
            </div>
            <div class="modal-content">
                <div class="modal-content-box">
                    이미 사용중인 가산금리 명입니다.
                </div>
                <v-btn
                class="modal-btn"
                dark
                color="#ff6934"
                width="90px"
                height="42px"
                >
                    확인
                </v-btn>
            </div>
        </v-card>

    </v-container>
</template>

<script>
    export default {

    }
</script>

<style scoped>

* {
    font-family: 'Spoqa Han Sans Neo';
    word-break: keep-all;
    box-sizing: border-box;
    text-decoration: none;
}

.hrhrhr {
    width: 100%;
    margin: 100px;
}

.background {
    background-color: #f8f8f8;
}

.background > div {
    margin: 0px 50px 0px;
}

.background > .content-header .content-title {
    font-size: 40px;
}

.-container {
    padding: 50px;
    background-color: #ffffff;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.18);
}

.-title {
    height: 42px;
    margin-bottom: 30px;
    font-size: 26px;
    font-weight: bold;
    line-height: 42px;
}

.-table {
    width: 100%;
    border-top: thin solid #e3e3e3;
    border-left: thin solid #e3e3e3;
}

.-table-head {
    height: 70px;
    margin: 0px;
    padding: 0px;
    background-color: #f5f5f5;
}

.-table-head > .items {
    display: flex;
    background-color: #f8f8f8;
    border-right: thin solid #e3e3e3;
    border-bottom: thin solid #e3e3e3;
    align-items: center;
}

.items {
    display: flex;
    background-color: #ffffff;
    border-right: thin solid #e3e3e3;
    border-bottom: thin solid #e3e3e3;
    align-items: center;
}

.table-start-end {
    max-width: 200px;
}

.items > div {
    width: 100%;
    height: auto;
    margin: 0 auto;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
}

.-table > .-table-row {
    height: 90px;
    margin: 0px;
    padding: 0px;
}

.text-field-name-center {
    max-height: 40px;
}

.table-btn {
    border: thin solid #121212 !important;
    box-shadow: none;
    font-size: 16px;
    line-height: 28px;
}

.btn-container-row {
    margin: 50px 0px 0px 0px;
}

.btn-container-row > .btn-container-col {
    text-align: center;
}

.btn-container-row > .btn-container-col > .submit-btn {
    margin: 0px 5px 0px;
    font-size: 20px;
    line-height: 34px;
}

.modal-title {
    width: 100%;
    height: 88px;
    border-bottom: thin solid #e4ebf0;
}

.modal-title > h6 {
    width: 100%;
    margin-left: 44px;
    font-size: 24px;
    font-weight: bold;
    line-height: 88px;
    text-align: center;
}

.modal-title > img {
    float: right;
    margin: 24px 24px 0px 0px;
    cursor: pointer;
}

.modal-content {
    text-align: center;
}

.modal-content-box {
    margin: 24px;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
}

.modal-btn {
    margin: 0px 8px 0px;
    font-size: 16px;
    line-height: 28px;
}

</style>
