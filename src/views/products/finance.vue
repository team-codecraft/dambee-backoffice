<template>
    <v-container class="background" fluid fill-height>

        <v-row class="content-header mb-13" justify="space-between">
            <v-col class="pa-0" align-self="center">
                <h2 class="content-title">
                    금융사 관리
                </h2>
            </v-col>
            <v-col class="pa-0" align-self="center">
                <v-btn
                class="new-btn"
                color="#ff6934"
                dark
                height="48px"
                width="134px"
                >
                    신규등록
                </v-btn>
            </v-col>
        </v-row>

        <v-row class="-container mb-13">
            <h5 class="-title">
                검색조건
            </h5>
            <v-col cols="12 pa-0">
                <v-text-field
                class="search-text-field"
                label="금융사명 검색"
                outlined
                >
                </v-text-field>

                <v-btn
                class="search-btn"
                width="97px"
                height="56px"
                color="#ff6934"
                dark
                >
                    조회
                </v-btn>

                <v-btn
                class="search-btn"
                width="116px"
                height="56px"
                color="#484746"
                dark
                >
                    초기화
                </v-btn>
            </v-col>
        </v-row>

        <v-row class="-container mb-13">
            <h5 class="-title">
                금융사 관리 리스트
            </h5>

            <v-col class="pa-0" cols="12">
                <div class="table-container">
                    <v-data-table
                    :headers="headers"
                    :items="lists"
                    :items-per-page="6"
                    item-key="number"
                    sort-by="number"
                    sort-desc
                    hide-default-footer
                    class="table-margin elevation-1"
                    >
                        <template v-slot:[`item.view`]="{ item }">
                            <v-chip
                            color="#000000"
                            light
                            outlined
                            >
                                {{ item.view }}
                            </v-chip>
                        </template>
                        <template v-slot:[`item.logo`]>
                            <img src="../../assets/img/kakaobank.png" alt="카카오뱅크">
                        </template>
                    </v-data-table>
                    <div class="pt-2">
                        <v-pagination
                        v-model="page"
                        :length="8"
                        color="#ff6934"
                        ></v-pagination>
                    </div>
                </div>
            </v-col>
        </v-row>

        <!-- @@@@@@@@@@@@@@@@@@@@@@@@@@@@@200_02_01.상품관리_금융사 관리_신규등록@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ -->
        <hr class="hrhrhr">

        <v-row class="content-header mb-13" justify="space-between">
            <v-col class="pa-0" align-self="center">
                <h2 class="content-title">
                    금융사 신규 등록
                </h2>
            </v-col>
        </v-row>

        <v-row class="-container mb-13">
            <h5 class="-title">
                금융사 정보 입력
            </h5>

            <v-col class="-table pa-0" cols="12">
                <v-row class="-table-row pa-0" no-gutters>
                    <v-col class="table-item-name">
                        <div>
                            금융사명
                        </div>
                    </v-col>
                    <v-col class="table-item">
                        <v-text-field
                        class="-table-text-field"
                        dense
                        label="금융사명"
                        outlined
                        >
                        </v-text-field>
                    </v-col>
                    <v-col class="table-item-name">
                        <div>
                            금융회사 코드
                        </div>
                    </v-col>
                    <v-col class="table-item">
                        <v-text-field
                        class="-table-text-field"
                        dense
                        label="금융회사 코드"
                        outlined
                        reverse
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row class="-table-row pa-0" no-gutters>
                    <v-col class="table-item-name">
                        <div>
                            금융사 로고
                        </div>
                    </v-col>
                    <v-col class="table-item-last">
                        <v-row class="item-container pa-0">
                            <v-text-field
                            class="-table-text-field-short"
                            dense
                            placeholder="파일명..."
                            outlined
                            readonly
                            >
                            </v-text-field>
                            <v-btn
                            class="upload-btn"
                            dark
                            width="105px"
                            height="42px"
                            color="#ff6934"
                            >
                                업로드
                            </v-btn>
                        </v-row>
                    </v-col>
                    <!-- 테이블 비율을 맞추기 위한 빈 마크업 -->
                    <v-col class="table-item-name-invisible">
                    </v-col>
                    <v-col class="table-item">
                    </v-col>
                </v-row>
            </v-col>
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
                    이미 사용중인 금융사명 또는 코드입니다.
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

        <!-- @@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 00_02_02. 상품관리_금융사 관리_정보수정 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ -->
        <hr class="hrhrhr">

        <v-row class="content-header mb-13" justify="space-between">
            <v-col class="pa-0" align-self="center">
                <h2 class="content-title">
                    금융사 정보 수정
                </h2>
            </v-col>
        </v-row>

        <v-row class="-container mb-13">
            <h5 class="-title">
                금융사 정보 입력
            </h5>

            <v-col class="-table pa-0" cols="12">
                <v-row class="-table-row pa-0" no-gutters>
                    <v-col class="table-item-name">
                        <div>
                            금융사명
                        </div>
                    </v-col>
                    <v-col class="table-item">
                        <v-text-field
                        class="-table-text-field"
                        dense
                        label="금융사명"
                        outlined
                        value="국민은행"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col class="table-item-name">
                        <div>
                            금융회사 코드
                        </div>
                    </v-col>
                    <v-col class="table-item">
                        <v-text-field
                        class="-table-text-field"
                        dense
                        label="금융회사 코드"
                        outlined
                        reverse
                        value="0013002"
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row class="-table-row pa-0" no-gutters>
                    <v-col class="table-item-name">
                        <div>
                            금융사 로고
                        </div>
                    </v-col>
                    <v-col class="table-item-last">
                        <v-row class="item-container pa-0">
                            <v-text-field
                            class="-table-text-field-short"
                            dense
                            placeholder="파일명..."
                            outlined
                            readonly
                            >
                            </v-text-field>
                            <v-btn
                            class="upload-btn"
                            dark
                            width="105px"
                            height="42px"
                            color="#ff6934"
                            >
                                업로드
                            </v-btn>
                        </v-row>
                    </v-col>
                    <!-- 테이블 비율을 맞추기 위한 빈 마크업 -->
                    <v-col class="table-item-name-invisible">
                    </v-col>
                    <v-col class="table-item">
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row class="-container mb-13">
            <h5 class="-title">
                수정이력
            </h5>

            <div class="edit-table">
                <v-row class="edit-table-head" no-gutters>
                    <v-col class="edit-table-start-end edit-items">
                        <div>
                            일시
                        </div>
                    </v-col>
                    <v-col class="edit-items">
                        <div>
                            수정사항
                        </div>
                    </v-col>
                    <v-col class="edit-table-start-end edit-items">
                        <div>
                            수정자
                        </div>
                    </v-col>
                </v-row>
                <v-row class="edit-table-row">
                    <v-col class="edit-table-start-end edit-items">
                        <div>
                            2021.11.30 12:00
                        </div>
                    </v-col>
                    <v-col class="edit-items">
                        <div>
                            금융회사 코드 수정
                        </div>
                    </v-col>
                    <v-col class="edit-table-start-end edit-items">
                        <div>
                            admin
                        </div>
                    </v-col>
                </v-row>
                <v-row class="edit-table-row">
                    <v-col class="edit-table-start-end edit-items">
                        <div>
                            2021.10.02 11:30
                        </div>
                    </v-col>
                    <v-col class="edit-items">
                        <div>
                            로고 변경
                        </div>
                    </v-col>
                    <v-col class="edit-table-start-end edit-items">
                        <div>
                            admin
                        </div>
                    </v-col>
                </v-row>
                <v-row class="edit-table-row">
                    <v-col class="edit-table-start-end edit-items">
                        <div>
                            2021.10.01 10:20
                        </div>
                    </v-col>
                    <v-col class="edit-items">
                        <div>
                            로고 변경
                        </div>
                    </v-col>
                    <v-col class="edit-table-start-end edit-items">
                        <div>
                            abcdefg
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
                    저장
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

        <v-card class="mb-13" width="660px" height="403px" rounded="lg">
            <div class="modal-title">
                <img src="../../assets/img/exit_btn.png" >
                <h6>
                    변경사항 입력(300자 이내)
                </h6>
            </div>
            <div class="modal-content">
                <v-textarea
                class="modal-textarea"
                solo
                label="변경사항을 입력하세요"
                no-resize
                counter="300"
                ></v-textarea>
                <div class="modal-btn-comtainer">
                    <v-btn
                    class="modal-btn"
                    dark
                    color="#ff6934"
                    width="90px"
                    height="42px"
                    >
                        확인
                    </v-btn>
                    <v-btn
                    class="modal-btn"
                    dark
                    color="#484746"
                    width="90px"
                    height="42px"
                    >
                        취소
                    </v-btn>
                </div>
            </div>
        </v-card>

    </v-container>
</template>

<script>
    export default {
        data: () => ({
            page: 1,
            headers: [
                {
                    text: 'No.',
                    align: 'center',
                    sortable: true,
                    value: 'number',
                    class: "#f5f5f5"
                },
                { text: '금융사 명', value: 'name', align: 'center' },
                { text: '금융회사 코드', value: 'code', align: 'center' },
                { text: '로고 이미지', value: 'logo', align: 'center' },
                { text: '보기', value: 'view', align: 'center' },
            ],
            lists: [
                {
                    number: 1,
                    name: 'SC제일은행',
                    code: '0013007',
                    logo: '../../assets/img/scbank.png',
                    view: '조회',
                },
                {
                    number: 2,
                    name: '경남은행',
                    code: '0013006',
                    logo: '../../assets/img/knbank.png',
                    view: '조회',
                },
                {
                    number: 3,
                    name: '국민은행',
                    code: '0013005',
                    logo: '../../assets/img/kbbank.png',
                    view: '조회',
                },
                {
                    number: 4,
                    name: '우리은행',
                    code: '0013004',
                    logo: '../../assets/img/wooribank.png',
                    view: '조회',
                },
                {
                    number: 5,
                    name: 'SC제일은행',
                    code: '0013003',
                    logo: '../../assets/img/scbank.png',
                    view: '조회',
                },
                {
                    number: 6,
                    name: '카카오뱅크',
                    code: '0013002',
                    logo: '../../assets/img/kakaobank.png',
                    view: '조회',
                },
            ],
        })
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

.new-btn {
    float: right;
    font-size: 20px;
    font-weight: 400;
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

.search-text-field {
    display: inline-block;
    width: 435px;
    margin: 0px 25px 0px 0px;
}

.search-btn {
    margin: 0px 5px 0px;
    border-radius: 5px;
    font-size: 20px;
    line-height: 34px;
}

.table-margin {
    margin-bottom: 50px;
}

.-table {
    border-top: thin solid #dadada;
    border-left: thin solid #dadada;
}

.-table-row {
    width: 100%;
    height: 90px;
}

.table-item-name {
    display: table;
    max-width: 200px;
    background-color: #f5f5f5;
    border-right: thin solid #dadada;
    border-bottom: thin solid #dadada;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
}

.table-item-name > div {
    display: table-cell;
    vertical-align: middle;
}

.table-item {
    border-right: thin solid #dadada;
    border-bottom: thin solid #dadada;;
}

.table-item-last {
    border-bottom: thin solid #dadada;
}

.table-item-name-invisible {
    max-width: 200px;
    border-bottom: thin solid #dadada;
}

.-table-text-field {
    max-width: 90%;
    max-height: 48px;
    margin: 20px 40px 20px;
}

.item-container {
    max-width: 90%;
    max-height: 48px;
    margin: 20px 40px 20px;
}

.-table-text-field-short {
    max-width: 325px;
    max-height: 48px;
    margin: 0px 10px 0px 0px;
}

.upload-btn {
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

.edit-table {
    width: 100%;
    border-top: thin solid #e3e3e3;
    border-left: thin solid #e3e3e3;
}

.edit-table > .edit-table-head {
    height: 60px;
    margin: 0px;
    padding: 0px;
    background-color: #f5f5f5;
}

.edit-items {
    display: flex;
    border-right: thin solid #e3e3e3;
    border-bottom: thin solid #e3e3e3;
    align-items: center;
}

.edit-table-start-end {
    max-width: 200px;
}

.edit-items > div {
    width: 100%;
    height: auto;
    margin: 0 auto;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
}

.edit-table > .edit-table-row {
    height: 60px;
    margin: 0px;
    padding: 0px;
}

.modal-textarea {
    margin: 24px;
}

</style>

<style>
.table-container > .table-margin .v-data-table-header {
    background-color: #f8f8f8;
}

.table-container > .table-margin .v-data-table-header th{
    border:thin solid #e3e3e3;
    font-size: 18px;
    line-height: 30px;
}

.table-container > .table-margin .v-data-table-header i {
    display: none;
}

.table-container > .table-margin td {
    border:thin solid #e3e3e3;
}

.table-container > .v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
    height: 90px;
}

</style>
