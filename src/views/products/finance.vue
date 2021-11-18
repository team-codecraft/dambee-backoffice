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
                        <template v-slot:[`item.logo`]="{ item }">
                            <img :src="item.logo" :alt="item.name">
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
                    <v-col class="table-item-name-invisible">

                    </v-col>
                    <v-col class="table-item">
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

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
    font-weight: 500;
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

</style>
