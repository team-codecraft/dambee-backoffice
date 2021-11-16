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
                <h5 class="-title">
                    검색조건
                </h5>
                <v-col cols="12 pa-0">
      <v-select
      class="search-select1"
          :items="items"
          label="상품분류"
          outlined
        ></v-select>
                <v-select
      class="search-select2"
          :items="items"
          label="사용여부"
          outlined
        ></v-select>
    <v-text-field
    class="search-text-field"
            label="금융사명, 상품명 검색"
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
                <h5 class="-title">
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
        <template v-slot:[`item.view`]="{ item }">
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

            <!-- 00_01.상품관리_상품신규등록_상품분류선택 -->
            <hr class="hrhrhr">

        <v-row class="content-header mb-13" justify="space-between">
            <v-col class="pa-0" align-self="center">
                <h2 class="content-title">
                    상품 신규 등록
                </h2>
            </v-col>
        </v-row>

         <v-row class="search-container mb-13" justify="space-between">
                <h5 class="-title">
                    분류 선택
                </h5>
                <v-col cols="12" align-self="center">
                    <v-radio-group class="radio-center"
      row>
      <v-radio
      class="radio-btn"
        label="부동산 담보 대출"
        color="#ff6934"
      ></v-radio>
      <v-radio
      class="radio-btn"
        label="전세 자금 대출"
        color="#ff6934"
      ></v-radio>
      <v-radio
      class="radio-btn"
        label="신용 대출"
        color="#ff6934"
      ></v-radio>
    </v-radio-group>
                </v-col>
            </v-row>

            <v-row class="radio-submit-btn-container-row" justify="center">
              <v-col class="radio-submit-btn-container-col" cols="4">
                <v-btn
                class="radio-submit-btn"
                width="97px"
                height="48px"
                dark
                color="#ff6934"
                >
                  다음
                </v-btn>
                <v-btn
                class="radio-submit-btn"
                width="97px"
                height="48px"
                dark
                color="#484746"
                >
                  취소
                </v-btn>
              </v-col>
            </v-row>

            <!-- 00_01.상품관리_상품 신규 등록_상품 정보 입력 (부담대) -->
            <hr class="hrhrhr">

            <v-row class="real-estate-info-container mb-13">
              <h5 class="-title">
                부동산 담보 대출 정보
              </h5>
              <span class="-subtitle">
                (*가 표시된 사항은 필수 입력 정보입니다.)
              </span>

              <div class="real-estate-info-table">
                <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      *상담 신청 경로
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container">
                      <v-select
      class="path-select"
      dense
          :items="items"
          label="신청 경로 선택"
          outlined
        ></v-select>
        <v-text-field
        dense
    class="path-text-field"
            label="http://"
            outlined
            ></v-text-field>
                    </v-row>
                  </v-col>
                </v-row>
                <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      *금융권 분류
                    </div>
                  </v-col>
                  <v-col class="table-item">
                  <v-row class="path-container">
                    <v-select
      class="finance-select"
      dense
          :items="items"
          label="은행권/비은행권"
          outlined
        ></v-select>
                  </v-row>
                  </v-col>
                  <v-col class="table-item-name">
                    <div>
                      *금융 회사
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container">
                    <v-select
      class="finance-select"
      dense
          :items="items"
          label="금융사 선택"
          outlined
        ></v-select>
                  </v-row>
                  </v-col>
                </v-row>
                <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      *금융 상품명
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container">
                    <v-text-field
        dense
    class="finance-product-text-field"
            label="금융 상품명"
            outlined
            ></v-text-field>
            </v-row>
                  </v-col>
                  <v-col class="table-item-name">
                    <div>
                      *상품 코드
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container">
                    <v-text-field
        dense
    class="finance-product-text-field"
            label="상품코드"
            outlined
            ></v-text-field>
            </v-row>
                  </v-col>
                </v-row>
                <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      한도 금액
                    <div class="item-name-small">
                      (비입력시 LTV비례)
                    </div>
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container">
                    <v-text-field
        dense
        reverse
    class="finance-product-text-field"
            placeholder="입력하세요"
            outlined
            ></v-text-field>
            </v-row>
                  </v-col>
                </v-row>
              </div>

              <div class="real-estate-info-table">
                <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      *기준 금리
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container">
                    <v-text-field
        dense
        reverse
    class="finance-product-text-field"
            placeholder="기준금리"
            outlined
            ></v-text-field>
            </v-row>
                  </v-col>
                  <v-col class="table-item-name">
                    <div>
                      *가산 금리
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container">
                    <v-text-field
        dense
        reverse
    class="finance-product-text-field"
            placeholder="가산금리"
            outlined
            ></v-text-field>
            </v-row>
                  </v-col>
                </v-row>
                <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      *최고 금리
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container">
                    <v-text-field
        dense
        reverse
    class="finance-product-text-field"
            placeholder="최고금리"
            outlined
            ></v-text-field>
            </v-row>
                  </v-col>
                  <v-col class="table-item-name">
                    <div>
                      *최저 금리
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container">
                    <v-text-field
        dense
        reverse
    class="finance-product-text-field"
            placeholder="최저금리"
            outlined
            ></v-text-field>
            </v-row>
                  </v-col>
                </v-row>
                <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      *상품 안내
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="edit-btn-container">
                    <v-btn
                class="eidt-btn"
                height="48px"
                dark
                color="#484746"
                >
                  편집
                </v-btn>
                    </v-row>
                  </v-col>
                  <v-col class="table-item-name">
                    <div>
                      *금리 정보
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="edit-btn-container">
                    <v-btn
                class="eidt-btn"
                height="48px"
                dark
                color="#484746"
                >
                  편집
                </v-btn>
                    </v-row>
                  </v-col>
                </v-row>
                <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      *유의 사항
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="edit-btn-container">
                    <v-btn
                class="eidt-btn"
                height="48px"
                dark
                color="#484746"
                >
                  편집
                </v-btn>
                    </v-row>
                  </v-col>
                </v-row>
              </div>
            </v-row>

            <v-row class="prime-rate-container">
              <h5 class="-title">
                우대금리 설정
              </h5>

              <div class="prime-rate-table">
                <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      최대 우대금리 설정
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container">
                    <v-text-field
        dense
        reverse
    class="finance-product-text-field"
            placeholder="최대 우대금리 설정"
            outlined
            ></v-text-field>
            </v-row>
                  </v-col>
                  <v-col class="table-item-name">
                    <div>
                      우대금리 한계 그룹 및 중복 그룹 설정
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="edit-btn-container">
                    <v-btn
                class="eidt-btn"
                height="48px"
                dark
                color="#484746"
                >
                  편집
                </v-btn>
                    </v-row>
                  </v-col>
                </v-row>
                <v-row class="table-row-height" no-gutters>
                  <v-col class="rate-table-item-name">
                    <div>
                      우대 금리 관리
                    </div>
                  </v-col>
                  <v-col class="rate-table-item">
                    <div class="prime-add-delete-container">
                      <v-row class="prime-add">
                        <v-select
                        class="prime-select"
                        dense
          :items="items"
          label="우대 금리 선택"
          outlined
        ></v-select>
                      </v-row>
                    </div>
                  </v-col>
                </v-row>
              </div>

            </v-row>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
      items: [
        '상품분류',
        '사용여부',
        'select',
        'items',
        '신청 경로 선택',
        '은행권/비은행권'
      ],
      page: 1,
        headers: [
          {
            text: 'No.',
            align: 'center',
            sortable: true,
            value: 'number',
            class: "#f5f5f5"
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

.search-container {
    background-color: #ffffff;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.18);
    padding: 50px;
}

.-title {
    font-size: 26px;
    line-height: 42px;
    height: 42px;
    font-weight: 500;
    margin-bottom: 30px;
}

.search-container .search-text-field {
    display: inline-block;
    width: 435px;
    margin: 0px 20px 0px 0px;
}

.search-select1 {
    display: inline-block;
    width: 310px;
    margin: 0px 20px 0px 0px;
    height: 56px !important;
}

.search-select2 {
    display: inline-block;
    width: 204px;
    margin: 0px 20px 0px 0px;
    height: 56px !important;
}

.search-container .search-btn {
    margin: 0px 10px 0px;
    font-size: 20px;
    line-height: 34px;
}

.search-container .clear-btn {
    font-size: 20px;
    line-height: 34px;
}

.list-container {
    background-color: #ffffff;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.18);
    padding: 50px;
}

.background > .list-container > .list-table-container {
    width: 100%;
}

.list-table-margin {
    margin-bottom: 50px;
    background-color: #ffffff !important;
}

.hrhrhr {
  width: 100%;
  margin: 100px;
}

.radio-submit-btn-container-row {
  margin: 100px 0px 0px 0px;
}

.radio-submit-btn-container-row > .radio-submit-btn-container-col {
  text-align: center;
}

.radio-submit-btn-container-row > .radio-submit-btn-container-col > .radio-submit-btn {
  margin: 0px 5px 0px;
  font-size: 20px;
  line-height: 34px;
}

.real-estate-info-container {
  background-color: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.18);
  padding: 50px;
  height: 942px;
}

.-subtitle {
  font-size: 14px;
  margin: 12px 5px 0px;
  color: #121212;
}

.real-estate-info-table {
  width: 100%;
  height: 360px;
  border-top: thin solid #e3e3e3;
  border-left: thin solid #e3e3e3;
  margin-bottom: 50px;
}

.table-row {
  width: 100%;
  height: 90px;
}

.table-row > div{
  border-right: thin solid #e3e3e3;
  border-bottom: thin solid #e3e3e3;
}

.table-item-name {
  display: flex;
  background-color: #f5f5f5;
  max-width: 200px;
  max-height: 90px;
  text-align: center;
  align-items: center;
}

.table-item {
  max-height: 90px;
  text-align: center;
  justify-content: center;
}

.table-item-name > div {
  width: 100%;
  height: auto;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
}

.item-name-small {
  font-size: 12px;
}

.path-container {
  margin: 21px;
  padding: 0px;
  height: 48px;
}

.path-container > .path-select {
  max-height: 48px;
  max-width: 270px;
  margin: 0px 10px 0px 0px;
}

.path-container > .path-text-field {
  max-height: 48px;
  max-width: 887px;
}

.finance-select {
  max-width: 441px;
  max-height: 48px;
}

.finance-product-text-field {
  max-width: 441px;
  max-height: 48px;
}

.edit-btn-container {
  margin: 21px;
  padding: 0px;
  height: 48px;
  max-width: 441px;
}

.eidt-btn {
  width: 100%;
  font-weight: normal;
font-size: 16px;
line-height: 28px;
}

.prime-rate-container {
    background-color: #ffffff;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.18);
    padding: 50px;
}

.prime-rate-table {
    width: 100%;
  border-top: thin solid #e3e3e3;
  border-left: thin solid #e3e3e3;
  margin-bottom: 50px;
}

.table-row-height {
  width: 100%;
  height: 150px;
}

.table-row-height > div{
  border-right: thin solid #e3e3e3;
  border-bottom: thin solid #e3e3e3;
}

.rate-table-item-name {
  display: flex;
  background-color: #f5f5f5;
  max-width: 200px;
  max-height: 150px;
  text-align: center;
  align-items: center;
}

.rate-table-item-name > div {
  width: 100%;
  height: auto;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
}

.prime-select {
  max-width: 235px;
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

.radio-center .v-input--radio-group__input {
    justify-content: space-around;
}

.radio-center .radio-btn .v-label {
  font-size: 20px;
  line-height: 34px;
  color: #121212;
}

</style>
