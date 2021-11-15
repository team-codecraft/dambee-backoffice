<template>
    <v-container class="background" fluid fill-height>
            <v-row class="content-header mb-13" justify="space-between">
                <v-col class="pa-0" align-self="center">
                    <h2 class="content-title">
                        상품관리
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

            <v-row class="search-container mb-13">
                <h5 class="search-title">
                    검색조건
                </h5>
                <v-col cols="12 pa-0">
                    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
    class="search-drop-down1"
            placeholder="상품분류                                                  ▾"
            outlined
            v-bind="attrs"
            v-on="on"
            readonly
            height="48px"
            ></v-text-field>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
                <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
    class="search-drop-down2"
            placeholder="사용여부                          ▾"
            outlined
            v-bind="attrs"
            v-on="on"
            readonly
            ></v-text-field>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-text-field
    class="search-text-field"
            placeholder="금융사명, 상품명 검색"
            outlined
            ></v-text-field>

            <v-btn
            class="search-btn"
                    color="#ff6934"
                    dark
                    height="56px"
                    width="97px"
                    >
                    조회
                    </v-btn>

                    <v-btn
                    class="clear-btn"
                    color="#484746"
                    dark
                    height="56px"
                    width="116px"
                    >
                    초기화
                    </v-btn>

                </v-col>
            </v-row>

            <v-row class="list-container">
                <h5 class="list-title">
                    상품관리 리스트
                </h5>
                <div class="list-table-container">
    <v-data-table
      :headers="headers"
      :items="lists"
      :items-per-page="6"
      item-key="number"
      sort-by="number"
      sort-desc
      hide-default-footer
      class="list-table-margin elevation-1"
    >
        <template v-slot:item.view="{ item }">
      <v-chip
      color="#000000"
      light
      outlined
      >
        {{ item.view }}
      </v-chip>
    </template>
    </v-data-table>
    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="8"
        color="#ff6934"
      ></v-pagination>
    </div>
  </div>

            </v-row>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      page: 1,
        headers: [
          {
            text: 'No.',
            align: 'center',
            sortable: true,
            value: 'number',
            class: "#f8f8f8"
          },
          { text: '금융상품 명', value: 'name', align: 'center' },
          { text: '금융사 명', value: 'finance', align: 'center' },
          { text: '상품 분류', value: 'product', align: 'center' },
          { text: '사용 여부', value: 'isUsing', align: 'center' },
          { text: '보기', value: 'view', align: 'center' },
        ],
        lists: [
          {
            number: 1,
            name: '집사자론',
            finance: 'SC제일은행',
            product: '부동산 담보 대출',
            isUsing: '사용 중지',
            view: '조회',
          },
          {
            number: 2,
            name: '국민주택론',
            finance: '경남은행',
            product: '전세 자금 대출',
            isUsing: '사용중',
            view: '조회',
          },
          {
            number: 3,
            name: '하하하론',
            finance: '국민은행',
            product: '신용 대출',
            isUsing: '사용중',
            view: '조회',
          },
          {
            number: 4,
            name: '모기지론',
            finance: '우리은행',
            product: '부동산 담보 대출',
            isUsing: '사용 중지',
            view: '조회',
          },
          {
            number: 5,
            name: '채움론',
            finance: 'SC제일은행',
            product: '전세 자금 대출',
            isUsing: '사용중',
            view: '조회',
          },
          {
            number: 6,
            name: '돌려드림론',
            finance: '카카오뱅크',
            product: '신용 대출',
            isUsing: '사용중',
            view: '조회',
          },
        ],
    }),
    }
</script>

<style scoped>
* {
    font-family: 'Spoqa Han Sans Neo';
    word-break: keep-all;
    box-sizing: border-box;
    text-decoration: none;
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
    font-size: 20px;
    float: right;
}

.background > .search-container {
    background-color: #ffffff;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.18);
    padding: 50px;
}

.background > .search-container > .search-title {
    font-size: 26px;
    line-height: 42px;
    font-weight: 500;
    margin-bottom: 30px;
}

.background > .search-container .search-text-field {
    display: inline-block;
    width: 435px;
    margin: 0px 20px 0px 0px;
}

.search-drop-down1 {
    display: inline-block;
    width: 310px;
    margin: 0px 20px 0px 0px;
    height: 56px !important;
}

.search-drop-down2 {
    display: inline-block;
    width: 204px;
    margin: 0px 20px 0px 0px;
    height: 56px !important;
}

.background > .search-container .search-btn {
    margin: 0px 10px 0px;
    font-size: 20px;
    line-height: 34px;
}

.background > .search-container .clear-btn {
    font-size: 20px;
    line-height: 34px;
}

.background > .list-container {
    background-color: #ffffff;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.18);
    padding: 50px;
}

.background > .list-container > .list-title {
    font-size: 26px;
    line-height: 42px;
    font-weight: 500;
    margin-bottom: 30px;
}

.background > .list-container > .list-table-container {
    width: 100%;
}

.list-table-margin {
    margin-bottom: 50px;
    background-color: #ffffff !important;
}

</style>

<style>
.list-table-container > .list-table-margin .v-data-table-header {
    background-color: #f8f8f8;
}

.list-table-container > .list-table-margin .v-data-table-header th{
    border: 1px solid #e3e3e3;
}

.list-table-container > .list-table-margin .v-data-table-header i {
    display: none;
}

.list-table-container > .list-table-margin td {
    border: 1px solid #e3e3e3;
}

</style>
