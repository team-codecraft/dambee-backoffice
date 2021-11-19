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
    <div class="pt-2">
      <v-pagination
        v-model="page"
        :length="8"
        color="#ff6934"
      ></v-pagination>
    </div>
  </div>
            </v-row>

            <!--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 00_01.상품관리_상품신규등록_상품분류선택 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-->
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

            <!--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 00_01.상품관리_상품 신규 등록_상품 정보 입력 (부담대) @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-->
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
            label="기준금리"
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
            label="가산금리"
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
            label="최고금리"
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
            label="최저금리"
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

            <v-row class="prime-rate-container mb-13">
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
                      <v-row class="prime-add" no-gutters align-content="center">
                        <div class="margin-right">
                                                  <v-select
                        class="prime-select"
                        dense
          :items="items"
          label="우대 금리 선택"
          outlined
        ></v-select>
                        </div>
                        <div class="margin-right">
                          <v-text-field
        dense
        reverse
    class="prime-text-field"
            placeholder="0.1"
            readonly
            outlined
            ></v-text-field>
                        </div>
                        <div class="margin-right">
                          <v-btn
                          class="tip-btn"
                          width="90px"
                height="42px"
                dark
                color="#ff6934"
                >
                  설명
                </v-btn>
                        </div>
                        <div class="margin-right">
                          <v-select
                        class="prime-group-select"
                        dense
          :items="items"
          label="한계 그룹 선택"
          outlined
        ></v-select>
                        </div>
                        <div class="margin-right"><v-select
                        class="prime-group-select"
                        dense
          :items="items"
          label="중복 그룹 선택"
          outlined
        ></v-select>
                        </div>
                        <div>
                          <v-btn
                          class="delete-btn"
                          width="90px"
                height="42px"
                light
                color="#ffffff"
                >
                  삭제
                </v-btn>
                        </div>
                      </v-row>
                      <v-row class="prime-add" no-gutters>
                        <div class="margin-right">
                                                  <v-select
                        class="prime-select"
                        dense
          :items="items"
          label="우대 금리 선택"
          outlined
        ></v-select>
                        </div>
                        <div class="margin-right">
                          <v-text-field
        dense
        reverse
    class="prime-text-field"
            placeholder="0.1"
            readonly
            outlined
            ></v-text-field>
                        </div>
                        <div class="margin-right">
                          <v-btn
                          class="tip-btn"
                          width="90px"
                height="42px"
                dark
                color="#ff6934"
                >
                  설명
                </v-btn>
                        </div>
                        <div class="margin-right">
                          <v-select
                        class="prime-group-select"
                        dense
          :items="items"
          label="한계 그룹 선택"
          outlined
        ></v-select>
                        </div>
                        <div class="margin-right"><v-select
                        class="prime-group-select"
                        dense
          :items="items"
          label="중복 그룹 선택"
          outlined
        ></v-select>
                        </div>
                        <div>
                          <v-btn
                          class="add-btn"
                          width="90px"
                height="42px"
                dark
                color="#484746"
                >
                  추가
                </v-btn>
                        </div>
                      </v-row>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-row>

                        <v-row class="prime-rate-container mb-13">
              <h5 class="-title">
                가산금리 설정
              </h5>

              <div class="prime-rate-table">
                <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      최대 가산금리 설정
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container">
                    <v-text-field
        dense
        reverse
    class="finance-product-text-field"
            placeholder="최대 가산금리 설정"
            outlined
            ></v-text-field>
            </v-row>
                  </v-col>
                  <v-col class="table-item-name">
                    <div>
                      가산금리 한계 그룹 및 중복 그룹 설정
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
                      가산 금리 관리
                    </div>
                  </v-col>
                  <v-col class="rate-table-item">
                    <div class="prime-add-delete-container">
                      <v-row class="prime-add" no-gutters align-content="center">
                        <div class="margin-right">
                                                  <v-select
                        class="prime-select"
                        dense
          :items="items"
          label="가산 금리 선택"
          outlined
        ></v-select>
                        </div>
                        <div class="margin-right">
                          <v-text-field
        dense
        reverse
    class="prime-text-field"
            placeholder="0.1"
            readonly
            outlined
            ></v-text-field>
                        </div>
                        <div class="margin-right">
                          <v-btn
                          class="tip-btn"
                          width="90px"
                height="42px"
                dark
                color="#ff6934"
                >
                  설명
                </v-btn>
                        </div>
                        <div class="margin-right">
                          <v-select
                        class="prime-group-select"
                        dense
          :items="items"
          label="한계 그룹 선택"
          outlined
        ></v-select>
                        </div>
                        <div class="margin-right"><v-select
                        class="prime-group-select"
                        dense
          :items="items"
          label="중복 그룹 선택"
          outlined
        ></v-select>
                        </div>
                        <div>
                          <v-btn
                          class="delete-btn"
                          width="90px"
                height="42px"
                light
                color="#ffffff"
                >
                  삭제
                </v-btn>
                        </div>
                      </v-row>
                      <v-row class="prime-add" no-gutters>
                        <div class="margin-right">
                                                  <v-select
                        class="prime-select"
                        dense
          :items="items"
          label="가산 금리 선택"
          outlined
        ></v-select>
                        </div>
                        <div class="margin-right">
                          <v-text-field
        dense
        reverse
    class="prime-text-field"
            placeholder="0.1"
            readonly
            outlined
            ></v-text-field>
                        </div>
                        <div class="margin-right">
                          <v-btn
                          class="tip-btn"
                          width="90px"
                height="42px"
                dark
                color="#ff6934"
                >
                  설명
                </v-btn>
                        </div>
                        <div class="margin-right">
                          <v-select
                        class="prime-group-select"
                        dense
          :items="items"
          label="한계 그룹 선택"
          outlined
        ></v-select>
                        </div>
                        <div class="margin-right"><v-select
                        class="prime-group-select"
                        dense
          :items="items"
          label="중복 그룹 선택"
          outlined
        ></v-select>
                        </div>
                        <div>
                          <v-btn
                          class="add-btn"
                          width="90px"
                height="42px"
                dark
                color="#484746"
                >
                  추가
                </v-btn>
                        </div>
                      </v-row>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-row>

            <v-row class="finance-info-display-container mb-13">
              <h5 class="-title">
                    금융상품 정보 표시 여부
                </h5>

                <div class="prime-rate-table">
                  <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      변동 금리
                    </div>
                  </v-col>
                  <v-col class="table-item">
                  <v-row class="use-radio-btn-container" align-content="center">
                    <v-radio-group class="use-radio-group" row>
      <v-radio
      class="radio-btn"
        label="사용"
        color="#ff6934"
      ></v-radio>
      <v-radio
      class="radio-btn"
        label="비사용"
        color="#ff6934"
      ></v-radio>
    </v-radio-group>
                  </v-row>
                  </v-col>
                  <v-col class="table-item-name">
                    <div>
                      혼합 금리
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="use-radio-btn-container" align-content="center">
                    <v-radio-group class="use-radio-group" row>
      <v-radio
      class="radio-btn"
        label="사용"
        color="#ff6934"
      ></v-radio>
      <v-radio
      class="radio-btn"
        label="비사용"
        color="#ff6934"
      ></v-radio>
    </v-radio-group>
                  </v-row>
                  </v-col>
                </v-row>
                  <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      고정 금리
                    </div>
                  </v-col>
                  <v-col class="table-item-last">
                    <v-row class="use-radio-btn-container" align-content="center">
                    <v-radio-group class="use-radio-group" row>
      <v-radio
      class="radio-btn"
        label="사용"
        color="#ff6934"
      ></v-radio>
      <v-radio
      class="radio-btn"
        label="비사용"
        color="#ff6934"
      ></v-radio>
    </v-radio-group>
                  </v-row>
                  </v-col>
                  <v-col class="table-item-name-invisible">
                    <div>
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row >
                  </v-row>
                  </v-col>
                </v-row>
                </div>

                <div class="prime-rate-table">
                  <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      원리금 균등 상환
                    </div>
                  </v-col>
                  <v-col class="table-item">
                  <v-row class="use-radio-btn-container" align-content="center">
                    <v-radio-group class="use-radio-group" row>
      <v-radio
      class="radio-btn"
        label="사용"
        color="#ff6934"
      ></v-radio>
      <v-radio
      class="radio-btn"
        label="비사용"
        color="#ff6934"
      ></v-radio>
    </v-radio-group>
                  </v-row>
                  </v-col>
                  <v-col class="table-item-name">
                    <div>
                      원금 균등 상환
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="use-radio-btn-container" align-content="center">
                    <v-radio-group class="use-radio-group" row>
      <v-radio
      class="radio-btn"
        label="사용"
        color="#ff6934"
      ></v-radio>
      <v-radio
      class="radio-btn"
        label="비사용"
        color="#ff6934"
      ></v-radio>
    </v-radio-group>
                  </v-row>
                  </v-col>
                </v-row>
                  <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      만기일시 상환
                    </div>
                  </v-col>
                  <v-col class="table-item-last">
                    <v-row class="use-radio-btn-container" align-content="center">
                    <v-radio-group class="use-radio-group" row>
      <v-radio
      class="radio-btn"
        label="사용"
        color="#ff6934"
      ></v-radio>
      <v-radio
      class="radio-btn"
        label="비사용"
        color="#ff6934"
      ></v-radio>
    </v-radio-group>
                  </v-row>
                  </v-col>
                  <v-col class="table-item-name-invisible">
                    <div>
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row>
                  </v-row>
                  </v-col>
                </v-row>
                </div>
            </v-row>

            <v-row class="finance-info-display-container mb-13">
              <h5 class="-title">
                    상품정보
                </h5>

                                <div class="prime-rate-table">
                  <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      상품 설명서
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container" align-content="center" no-gutters>
                      <v-col>
                    <v-text-field
        dense
    class="file-name-field"
            placeholder="파일명..."
            outlined
            readonly
            ></v-text-field>
                        <v-btn
                          class="upload-btn"
                          width="105px"
                height="42px"
                dark
                color="#ff6934"
                >
                  업로드
                </v-btn>
                <v-btn
                          class="delete-btn"
                          width="119px"
                height="42px"
                light
                color="#ffffff"
                >
                  미리보기
                </v-btn>
                      </v-col>
            </v-row>
                  </v-col>
                  <v-col class="table-item-name">
                    <div>
                      청약철회 및 약관
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container" align-content="center" no-gutters>
                      <v-col>
                    <v-text-field
        dense
    class="file-name-field"
            placeholder="파일명..."
            outlined
            readonly
            ></v-text-field>
                        <v-btn
                          class="upload-btn"
                          width="105px"
                height="42px"
                dark
                color="#ff6934"
                >
                  업로드
                </v-btn>
                <v-btn
                          class="delete-btn"
                          width="119px"
                height="42px"
                light
                color="#ffffff"
                >
                  미리보기
                </v-btn>
                      </v-col>
            </v-row>
                  </v-col>
                </v-row>
                  <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      상품 광고 이미지
                    </div>
                  </v-col>
                  <v-col class="table-item-last">
                    <v-row class="path-container" align-content="center" no-gutters>
                      <v-col>
                    <v-text-field
        dense
    class="file-name-field"
            placeholder="파일명..."
            outlined
            readonly
            ></v-text-field>
                        <v-btn
                          class="upload-btn"
                          width="105px"
                height="42px"
                dark
                color="#ff6934"
                >
                  업로드
                </v-btn>
                <v-btn
                          class="delete-btn"
                          width="119px"
                height="42px"
                light
                color="#ffffff"
                >
                  미리보기
                </v-btn>
                      </v-col>
            </v-row>
                  </v-col>
                  <v-col class="table-item-name-invisible">
                    <div>
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row >
                  </v-row>
                  </v-col>
                </v-row>
                </div>
            </v-row>

              <v-row class="finance-info-display-container mb-13">
                <div class="manager-memo-table">
                  <v-row class="memo-table-row">
                    <v-col class="memo-item-name">
                      <div>
                        관리자 메모
                        <br>
                        (500자 이내)
                      </div>
                    </v-col>
                    <v-col class="memo-item">
                      <v-textarea
                      class="memo-text-area"
                      height="170px"
          solo
          name="input-7-4"
          label="메모 작성 가능"
          no-resize
        ></v-textarea>
                    </v-col>
                  </v-row>
                </div>
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
                  등록
                </v-btn>
                <v-btn
                class="radio-submit-btn"
                width="97px"
                height="48px"
                dark
                color="#484746"
                >
                  닫기
                </v-btn>
              </v-col>
            </v-row>

<!--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(부담대)-오류@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2-->
            <hr class="hrhrhr">

                        <v-row class="real-estate-info-container mb-13">
              <h5 class="-title">
                부동산 담보 대출 기본정보
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
          error-messages="금융권 분류를 선택하세요"
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
          error-messages="금융회사를 선택하세요"
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
            error-messages="금융 상품명을 입력하세요"
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
            label="기준금리"
            outlined
            error
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
            label="가산금리"
            outlined
            error
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
            label="최고금리"
            outlined
            error
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
            label="최저금리"
            outlined
            error
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
                <div class="err-message">
            <img class="err-img" src="../../assets/img/err.png" />
            <span>상품 안내를 입력하세요</span>
            </div>
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
                <div class="err-message">
            <img class="err-img" src="../../assets/img/err.png" />
            <span>금리 정보를 입력하세요</span>
            </div>
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
                <div class="err-message">
            <img class="err-img" src="../../assets/img/err.png" />
            <span>유의사항을 입력하세요</span>
            </div>
                    </v-row>
                  </v-col>
                </v-row>
              </div>
            </v-row>

            <!--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(전세)@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2-->
            <hr class="hrhrhr">

            <v-row class="real-estate-info-container mb-13">
              <h5 class="-title">
                전세 자금 대출 기본정보
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
                      금융 회사
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
                      금융 상품명
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
                      상품 코드
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
                      보증 주체
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container">
                    <v-select
      class="finance-select"
      dense
          :items="items"
          label="보증 주체 선택"
          outlined
        ></v-select>
                  </v-row>
                  </v-col>
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
                      기준 금리
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container">
                    <v-text-field
        dense
        reverse
    class="finance-product-text-field"
            label="기준금리"
            outlined
            ></v-text-field>
            </v-row>
                  </v-col>
                  <v-col class="table-item-name">
                    <div>
                      가산 금리
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container">
                    <v-text-field
        dense
        reverse
    class="finance-product-text-field"
            label="가산금리"
            outlined
            ></v-text-field>
            </v-row>
                  </v-col>
                </v-row>
                <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      최고 금리
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container">
                    <v-text-field
        dense
        reverse
    class="finance-product-text-field"
            label="최고금리"
            outlined
            ></v-text-field>
            </v-row>
                  </v-col>
                  <v-col class="table-item-name">
                    <div>
                      최저 금리
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container">
                    <v-text-field
        dense
        reverse
    class="finance-product-text-field"
            label="최저금리"
            outlined
            ></v-text-field>
            </v-row>
                  </v-col>
                </v-row>
                <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      상품 안내
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
                      금리 정보
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
                      유의 사항
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

          <!--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(신용)@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2-->
            <hr class="hrhrhr">

            <v-row class="real-estate-info-container mb-13">
              <h5 class="-title">
                신용 대출 정보
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
            label="기준금리"
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
            label="가산금리"
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
            label="최고금리"
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
            label="최저금리"
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

            <!--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(00_01.상품관리_상품 신규 등록_상품 정보 입력 (공통)_우대금리 한계 그룹 및 중복 그룹 설정)@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2-->
            <hr class="hrhrhr">

                    <v-row class="content-header mb-13" justify="space-between">
            <v-col class="pa-0" align-self="center">
                <h2 class="content-title">
                    우대금리 한계 그룹 및 중복 그룹 설정
                </h2>
            </v-col>
        </v-row>

        <v-row class="finance-info-display-container mb-13">
              <h5 class="-title">
                우대금리 한계 그룹 설정
              </h5>

                <div class="prime-limit-table">
                  <v-row class="prime-limit-table-head" no-gutters>
                    <v-col class="table-start-end items">
                      <div>
                        No.
                      </div>
                    </v-col>
                    <v-col class="items">
                      <div>
                        우대금리 한계 명
                      </div>
                    </v-col>
                    <v-col class="items">
                      <div>
                        금리
                      </div>
                    </v-col>
                    <v-col class="table-start-end items">
                      <div>
                        관리
                      </div>
                    </v-col>
                  </v-row>
                  <v-row class="prime-limit-table-row">
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
            label="그룹명 입력"
            outlined
            ></v-text-field>
                      </div>
                    </v-col>
                    <v-col class="items">
                      <div>
                        <v-text-field
                        class="text-field-name-center"
        dense
        reverse
            label="한계금리 입력"
            outlined
            ></v-text-field>
                      </div>
                    </v-col>
                    <v-col class="table-start-end items">
                      <div>
                        <v-btn
                        class="delete-btn"
                        color="#ffffff"
                        width="170px"
                        height="42px"
                        light
                        >
                        삭제
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                                    <v-row class="prime-limit-table-row">
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
            label="그룹명 입력"
            outlined
            ></v-text-field>
                      </div>
                    </v-col>
                    <v-col class="items">
                      <div>
                        <v-text-field
                        class="text-field-name-center"
        dense
        reverse
            label="한계금리 입력"
            outlined
            ></v-text-field>
                      </div>
                    </v-col>
                    <v-col class="table-start-end items">
                      <div>
                        <v-btn
                        class="delete-btn"
                        color="#ffffff"
                        width="170px"
                        height="42px"
                        light
                        >
                        삭제
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                                    <v-row class="prime-limit-table-row">
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
            label="그룹명 입력"
            outlined
            ></v-text-field>
                      </div>
                    </v-col>
                    <v-col class="items">
                      <div>
                        <v-text-field
                        class="text-field-name-center"
        dense
        reverse
            label="한계금리 입력"
            outlined
            ></v-text-field>
                      </div>
                    </v-col>
                    <v-col class="table-start-end items">
                      <div>
                        <v-btn
                        class="delete-btn"
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

            <v-row class="finance-info-display-container mb-13">
              <h5 class="-title">
                중복 그룹 설정
              </h5>

                <div class="prime-limit-table">
                  <v-row class="prime-limit-table-head" no-gutters>
                    <v-col class="table-start-end items">
                      <div>
                        No.
                      </div>
                    </v-col>
                    <v-col class="items">
                      <div>
                        우대금리 한계 명
                      </div>
                    </v-col>
                    <v-col class="table-start-end items">
                      <div>
                        관리
                      </div>
                    </v-col>
                  </v-row>
                  <v-row class="prime-limit-table-row">
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
            label="그룹명 입력"
            outlined
            ></v-text-field>
                      </div>
                    </v-col>
                    <v-col class="table-start-end items">
                      <div>
                        <v-btn
                        class="delete-btn"
                        color="#ffffff"
                        width="170px"
                        height="42px"
                        light
                        >
                        삭제
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                                    <v-row class="prime-limit-table-row">
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
            label="그룹명 입력"
            outlined
            ></v-text-field>
                      </div>
                    </v-col>
                    <v-col class="table-start-end items">
                      <div>
                        <v-btn
                        class="delete-btn"
                        color="#ffffff"
                        width="170px"
                        height="42px"
                        light
                        >
                        삭제
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                                    <v-row class="prime-limit-table-row">
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
            label="그룹명 입력"
            outlined
            ></v-text-field>
                      </div>
                    </v-col>
                    <v-col class="table-start-end items">
                      <div>
                        <v-btn
                        class="delete-btn"
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

            <v-row class="radio-submit-btn-container-row" justify="center">
              <v-col class="radio-submit-btn-container-col" cols="4">
                <v-btn
                class="radio-submit-btn"
                width="97px"
                height="48px"
                dark
                color="#ff6934"
                >
                  저장
                </v-btn>
                <v-btn
                class="radio-submit-btn"
                width="97px"
                height="48px"
                dark
                color="#484746"
                >
                  닫기
                </v-btn>
              </v-col>
            </v-row>

            <!-- @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(모달창)@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ -->
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
                  해당 그룹은 상품에서 현재 사용중인 그룹이므로<br>
                  삭제가 불가능합니다.
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

            <v-card class="mb-13" width="660px" height="403px" rounded="lg">
              <div class="modal-title">
                <img src="../../assets/img/exit_btn.png" >
                <h6>
                  설명글 작성(50자 이내)
                </h6>
              </div>
              <div class="modal-content">
                <v-textarea
                class="modal-textarea"
          solo
          label="설명글을 작성하세요"
          no-resize
          counter="50"
        ></v-textarea>
        <div>
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

            <v-card class="mb-13" width="660px" height="902px" rounded="lg">
              <div class="modal-title">
                <img src="../../assets/img/exit_btn.png" >
                <h6>
                  미리보기
                </h6>
              </div>
              <div class="modal-content">
                <img class="modal-img" src="../../assets/img/exam_pic.png">
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

            <!--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(00_01.상품관리_상품 신규 등록_상품 정보 입력 (공통)_가산금리 한계 그룹 및 중복 그룹 설정)@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2-->
            <hr class="hrhrhr">

                    <v-row class="content-header mb-13" justify="space-between">
            <v-col class="pa-0" align-self="center">
                <h2 class="content-title">
                    가산금리 한계 그룹 및 중복 그룹 설정
                </h2>
            </v-col>
        </v-row>

        <v-row class="finance-info-display-container mb-13">
              <h5 class="-title">
                가산금리 한계 그룹 설정
              </h5>

                <div class="prime-limit-table">
                  <v-row class="prime-limit-table-head" no-gutters>
                    <v-col class="table-start-end items">
                      <div>
                        No.
                      </div>
                    </v-col>
                    <v-col class="items">
                      <div>
                        가산금리 한계 명
                      </div>
                    </v-col>
                    <v-col class="items">
                      <div>
                        금리
                      </div>
                    </v-col>
                    <v-col class="table-start-end items">
                      <div>
                        관리
                      </div>
                    </v-col>
                  </v-row>
                  <v-row class="prime-limit-table-row">
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
            label="그룹명 입력"
            outlined
            ></v-text-field>
                      </div>
                    </v-col>
                    <v-col class="items">
                      <div>
                        <v-text-field
                        class="text-field-name-center"
        dense
        reverse
            label="한계금리 입력"
            outlined
            ></v-text-field>
                      </div>
                    </v-col>
                    <v-col class="table-start-end items">
                      <div>
                        <v-btn
                        class="delete-btn"
                        color="#ffffff"
                        width="170px"
                        height="42px"
                        light
                        >
                        삭제
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                                    <v-row class="prime-limit-table-row">
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
            label="그룹명 입력"
            outlined
            ></v-text-field>
                      </div>
                    </v-col>
                    <v-col class="items">
                      <div>
                        <v-text-field
                        class="text-field-name-center"
        dense
        reverse
            label="한계금리 입력"
            outlined
            ></v-text-field>
                      </div>
                    </v-col>
                    <v-col class="table-start-end items">
                      <div>
                        <v-btn
                        class="delete-btn"
                        color="#ffffff"
                        width="170px"
                        height="42px"
                        light
                        >
                        삭제
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                                    <v-row class="prime-limit-table-row">
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
            label="그룹명 입력"
            outlined
            ></v-text-field>
                      </div>
                    </v-col>
                    <v-col class="items">
                      <div>
                        <v-text-field
                        class="text-field-name-center"
        dense
        reverse
            label="한계금리 입력"
            outlined
            ></v-text-field>
                      </div>
                    </v-col>
                    <v-col class="table-start-end items">
                      <div>
                        <v-btn
                        class="delete-btn"
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

            <v-row class="finance-info-display-container mb-13">
              <h5 class="-title">
                중복 그룹 설정
              </h5>

                <div class="prime-limit-table">
                  <v-row class="prime-limit-table-head" no-gutters>
                    <v-col class="table-start-end items">
                      <div>
                        No.
                      </div>
                    </v-col>
                    <v-col class="items">
                      <div>
                        가산금리 한계 명
                      </div>
                    </v-col>
                    <v-col class="table-start-end items">
                      <div>
                        관리
                      </div>
                    </v-col>
                  </v-row>
                  <v-row class="prime-limit-table-row">
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
            label="그룹명 입력"
            outlined
            ></v-text-field>
                      </div>
                    </v-col>
                    <v-col class="table-start-end items">
                      <div>
                        <v-btn
                        class="delete-btn"
                        color="#ffffff"
                        width="170px"
                        height="42px"
                        light
                        >
                        삭제
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                                    <v-row class="prime-limit-table-row">
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
            label="그룹명 입력"
            outlined
            ></v-text-field>
                      </div>
                    </v-col>
                    <v-col class="table-start-end items">
                      <div>
                        <v-btn
                        class="delete-btn"
                        color="#ffffff"
                        width="170px"
                        height="42px"
                        light
                        >
                        삭제
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                                    <v-row class="prime-limit-table-row">
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
            label="그룹명 입력"
            outlined
            ></v-text-field>
                      </div>
                    </v-col>
                    <v-col class="table-start-end items">
                      <div>
                        <v-btn
                        class="delete-btn"
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

            <v-row class="radio-submit-btn-container-row" justify="center">
              <v-col class="radio-submit-btn-container-col" cols="4">
                <v-btn
                class="radio-submit-btn"
                width="97px"
                height="48px"
                dark
                color="#ff6934"
                >
                  저장
                </v-btn>
                <v-btn
                class="radio-submit-btn"
                width="97px"
                height="48px"
                dark
                color="#484746"
                >
                  닫기
                </v-btn>
              </v-col>
            </v-row>

            <!--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@00_01.상품관리_상품 정보 수정_상품 정보 입력 (부담대)@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2-->
            <hr class="hrhrhr">

                    <v-row class="content-header mb-13" justify="space-between">
            <v-col class="pa-0" align-self="center">
                <h2 class="content-title">
                  상품 정보 수정
                </h2>
            </v-col>
        </v-row>

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
                      <v-text-field
      class="path-select text-field-dotted"
      dense
          :items="items"
          placeholder="비대면 웹 연결"
          outlined
          readonly
        ></v-text-field>
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
            label="기준금리"
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
            label="가산금리"
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
            label="최고금리"
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
            label="최저금리"
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

            <v-row class="prime-rate-container mb-13">
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
                      <v-row class="prime-add" no-gutters align-content="center">
                        <div class="margin-right">
                                                  <v-select
                        class="prime-select"
                        dense
          :items="items"
          label="우대 금리 선택"
          outlined
        ></v-select>
                        </div>
                        <div class="margin-right">
                          <v-text-field
        dense
        reverse
    class="prime-text-field"
            placeholder="0.1"
            readonly
            outlined
            ></v-text-field>
                        </div>
                        <div class="margin-right">
                          <v-btn
                          class="tip-btn"
                          width="90px"
                height="42px"
                dark
                color="#ff6934"
                >
                  설명
                </v-btn>
                        </div>
                        <div class="margin-right">
                          <v-select
                        class="prime-group-select"
                        dense
          :items="items"
          label="한계 그룹 선택"
          outlined
        ></v-select>
                        </div>
                        <div class="margin-right"><v-select
                        class="prime-group-select"
                        dense
          :items="items"
          label="중복 그룹 선택"
          outlined
        ></v-select>
                        </div>
                        <div>
                          <v-btn
                          class="delete-btn"
                          width="90px"
                height="42px"
                light
                color="#ffffff"
                >
                  삭제
                </v-btn>
                        </div>
                      </v-row>
                      <v-row class="prime-add" no-gutters>
                        <div class="margin-right">
                                                  <v-select
                        class="prime-select"
                        dense
          :items="items"
          label="우대 금리 선택"
          outlined
        ></v-select>
                        </div>
                        <div class="margin-right">
                          <v-text-field
        dense
        reverse
    class="prime-text-field"
            placeholder="0.1"
            readonly
            outlined
            ></v-text-field>
                        </div>
                        <div class="margin-right">
                          <v-btn
                          class="tip-btn"
                          width="90px"
                height="42px"
                dark
                color="#ff6934"
                >
                  설명
                </v-btn>
                        </div>
                        <div class="margin-right">
                          <v-select
                        class="prime-group-select"
                        dense
          :items="items"
          label="한계 그룹 선택"
          outlined
        ></v-select>
                        </div>
                        <div class="margin-right"><v-select
                        class="prime-group-select"
                        dense
          :items="items"
          label="중복 그룹 선택"
          outlined
        ></v-select>
                        </div>
                        <div>
                          <v-btn
                          class="add-btn"
                          width="90px"
                height="42px"
                dark
                color="#484746"
                >
                  추가
                </v-btn>
                        </div>
                      </v-row>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-row>

                        <v-row class="prime-rate-container mb-13">
              <h5 class="-title">
                가산금리 설정
              </h5>

              <div class="prime-rate-table">
                <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      최대 가산금리 설정
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container">
                    <v-text-field
        dense
        reverse
    class="finance-product-text-field"
            placeholder="최대 가산금리 설정"
            outlined
            ></v-text-field>
            </v-row>
                  </v-col>
                  <v-col class="table-item-name">
                    <div>
                      가산금리 한계 그룹 및 중복 그룹 설정
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
                      가산 금리 관리
                    </div>
                  </v-col>
                  <v-col class="rate-table-item">
                    <div class="prime-add-delete-container">
                      <v-row class="prime-add" no-gutters align-content="center">
                        <div class="margin-right">
                                                  <v-select
                        class="prime-select"
                        dense
          :items="items"
          label="가산 금리 선택"
          outlined
        ></v-select>
                        </div>
                        <div class="margin-right">
                          <v-text-field
        dense
        reverse
    class="prime-text-field"
            placeholder="0.1"
            readonly
            outlined
            ></v-text-field>
                        </div>
                        <div class="margin-right">
                          <v-btn
                          class="tip-btn"
                          width="90px"
                height="42px"
                dark
                color="#ff6934"
                >
                  설명
                </v-btn>
                        </div>
                        <div class="margin-right">
                          <v-select
                        class="prime-group-select"
                        dense
          :items="items"
          label="한계 그룹 선택"
          outlined
        ></v-select>
                        </div>
                        <div class="margin-right"><v-select
                        class="prime-group-select"
                        dense
          :items="items"
          label="중복 그룹 선택"
          outlined
        ></v-select>
                        </div>
                        <div>
                          <v-btn
                          class="delete-btn"
                          width="90px"
                height="42px"
                light
                color="#ffffff"
                >
                  삭제
                </v-btn>
                        </div>
                      </v-row>
                      <v-row class="prime-add" no-gutters>
                        <div class="margin-right">
                                                  <v-select
                        class="prime-select"
                        dense
          :items="items"
          label="가산 금리 선택"
          outlined
        ></v-select>
                        </div>
                        <div class="margin-right">
                          <v-text-field
        dense
        reverse
    class="prime-text-field"
            placeholder="0.1"
            readonly
            outlined
            ></v-text-field>
                        </div>
                        <div class="margin-right">
                          <v-btn
                          class="tip-btn"
                          width="90px"
                height="42px"
                dark
                color="#ff6934"
                >
                  설명
                </v-btn>
                        </div>
                        <div class="margin-right">
                          <v-select
                        class="prime-group-select"
                        dense
          :items="items"
          label="한계 그룹 선택"
          outlined
        ></v-select>
                        </div>
                        <div class="margin-right"><v-select
                        class="prime-group-select"
                        dense
          :items="items"
          label="중복 그룹 선택"
          outlined
        ></v-select>
                        </div>
                        <div>
                          <v-btn
                          class="add-btn"
                          width="90px"
                height="42px"
                dark
                color="#484746"
                >
                  추가
                </v-btn>
                        </div>
                      </v-row>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-row>

            <v-row class="finance-info-display-container mb-13">
              <h5 class="-title">
                    금융상품 정보 표시 여부
                </h5>

                <div class="prime-rate-table">
                  <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      변동 금리
                    </div>
                  </v-col>
                  <v-col class="table-item">
                  <v-row class="use-radio-btn-container" align-content="center">
                    <v-radio-group class="use-radio-group" row>
      <v-radio
      class="radio-btn"
        label="사용"
        color="#ff6934"
      ></v-radio>
      <v-radio
      class="radio-btn"
        label="비사용"
        color="#ff6934"
      ></v-radio>
    </v-radio-group>
                  </v-row>
                  </v-col>
                  <v-col class="table-item-name">
                    <div>
                      혼합 금리
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="use-radio-btn-container" align-content="center">
                    <v-radio-group class="use-radio-group" row>
      <v-radio
      class="radio-btn"
        label="사용"
        color="#ff6934"
      ></v-radio>
      <v-radio
      class="radio-btn"
        label="비사용"
        color="#ff6934"
      ></v-radio>
    </v-radio-group>
                  </v-row>
                  </v-col>
                </v-row>
                  <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      고정 금리
                    </div>
                  </v-col>
                  <v-col class="table-item-last">
                    <v-row class="use-radio-btn-container" align-content="center">
                    <v-radio-group class="use-radio-group" row>
      <v-radio
      class="radio-btn"
        label="사용"
        color="#ff6934"
      ></v-radio>
      <v-radio
      class="radio-btn"
        label="비사용"
        color="#ff6934"
      ></v-radio>
    </v-radio-group>
                  </v-row>
                  </v-col>
                  <v-col class="table-item-name-invisible">
                    <div>
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row >
                  </v-row>
                  </v-col>
                </v-row>
                </div>

                <div class="prime-rate-table">
                  <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      원리금 균등 상환
                    </div>
                  </v-col>
                  <v-col class="table-item">
                  <v-row class="use-radio-btn-container" align-content="center">
                    <v-radio-group class="use-radio-group" row>
      <v-radio
      class="radio-btn"
        label="사용"
        color="#ff6934"
      ></v-radio>
      <v-radio
      class="radio-btn"
        label="비사용"
        color="#ff6934"
      ></v-radio>
    </v-radio-group>
                  </v-row>
                  </v-col>
                  <v-col class="table-item-name">
                    <div>
                      원금 균등 상환
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="use-radio-btn-container" align-content="center">
                    <v-radio-group class="use-radio-group" row>
      <v-radio
      class="radio-btn"
        label="사용"
        color="#ff6934"
      ></v-radio>
      <v-radio
      class="radio-btn"
        label="비사용"
        color="#ff6934"
      ></v-radio>
    </v-radio-group>
                  </v-row>
                  </v-col>
                </v-row>
                  <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      만기일시 상환
                    </div>
                  </v-col>
                  <v-col class="table-item-last">
                    <v-row class="use-radio-btn-container" align-content="center">
                    <v-radio-group class="use-radio-group" row>
      <v-radio
      class="radio-btn"
        label="사용"
        color="#ff6934"
      ></v-radio>
      <v-radio
      class="radio-btn"
        label="비사용"
        color="#ff6934"
      ></v-radio>
    </v-radio-group>
                  </v-row>
                  </v-col>
                  <v-col class="table-item-name-invisible">
                    <div>
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row>
                  </v-row>
                  </v-col>
                </v-row>
                </div>
            </v-row>

            <v-row class="finance-info-display-container mb-13">
              <h5 class="-title">
                    상품정보
                </h5>

                                <div class="prime-rate-table">
                  <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      상품 설명서
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container" align-content="center" no-gutters>
                      <v-col>
                    <v-text-field
        dense
    class="file-name-field"
            placeholder="파일명..."
            outlined
            readonly
            ></v-text-field>
                        <v-btn
                          class="upload-btn"
                          width="105px"
                height="42px"
                dark
                color="#ff6934"
                >
                  업로드
                </v-btn>
                <v-btn
                          class="delete-btn"
                          width="119px"
                height="42px"
                light
                color="#ffffff"
                >
                  미리보기
                </v-btn>
                      </v-col>
            </v-row>
                  </v-col>
                  <v-col class="table-item-name">
                    <div>
                      청약철회 및 약관
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container" align-content="center" no-gutters>
                      <v-col>
                    <v-text-field
        dense
    class="file-name-field"
            placeholder="파일명..."
            outlined
            readonly
            ></v-text-field>
                        <v-btn
                          class="upload-btn"
                          width="105px"
                height="42px"
                dark
                color="#ff6934"
                >
                  업로드
                </v-btn>
                <v-btn
                          class="delete-btn"
                          width="119px"
                height="42px"
                light
                color="#ffffff"
                >
                  미리보기
                </v-btn>
                      </v-col>
            </v-row>
                  </v-col>
                </v-row>
                  <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      상품 광고 이미지
                    </div>
                  </v-col>
                  <v-col class="table-item-last">
                    <v-row class="path-container" align-content="center" no-gutters>
                      <v-col>
                    <v-text-field
        dense
    class="file-name-field"
            placeholder="파일명..."
            outlined
            readonly
            ></v-text-field>
                        <v-btn
                          class="upload-btn"
                          width="105px"
                height="42px"
                dark
                color="#ff6934"
                >
                  업로드
                </v-btn>
                <v-btn
                          class="delete-btn"
                          width="119px"
                height="42px"
                light
                color="#ffffff"
                >
                  미리보기
                </v-btn>
                      </v-col>
            </v-row>
                  </v-col>
                  <v-col class="table-item-name-invisible">
                    <div>
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row >
                  </v-row>
                  </v-col>
                </v-row>
                </div>
            </v-row>

              <v-row class="finance-info-display-container mb-13">
                <div class="manager-memo-table">
                  <v-row class="memo-table-row">
                    <v-col class="memo-item-name">
                      <div>
                        관리자 메모
                        <br>
                        (500자 이내)
                      </div>
                    </v-col>
                    <v-col class="memo-item">
                      <v-textarea
                      class="memo-text-area"
                      height="170px"
          solo
          name="input-7-4"
          label="메모 작성 가능"
          no-resize
        ></v-textarea>
                    </v-col>
                  </v-row>
                </div>
                </v-row>

                <v-row class="finance-info-display-container mb-13">
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
                        상품설명서 교체
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
                        기준 금리 변경
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
                        공시 변경으로 전체 정보 수정
                      </div>
                    </v-col>
                    <v-col class="edit-table-start-end edit-items">
                      <div>
                        abcdefg
                      </div>
                    </v-col>
                  </v-row>
                                  <v-row class="edit-table-row">
                    <v-col class="edit-table-start-end edit-items">
                      <div>
                        2021.09.30 09:00
                      </div>
                    </v-col>
                    <v-col class="edit-items">
                      <div>
                        상품이미지 교체
                      </div>
                    </v-col>
                    <v-col class="edit-table-start-end edit-items">
                      <div>
                        admin
                      </div>
                    </v-col>
                  </v-row>
                </div>
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
                  등록
                </v-btn>
                <v-btn
                class="radio-submit-btn"
                width="97px"
                height="48px"
                dark
                color="#484746"
                >
                  닫기
                </v-btn>
              </v-col>
            </v-row>

                        <!--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@00_01.상품관리_상품 정보 수정_상품 정보 입력 (전세)@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2-->
            <hr class="hrhrhr">

                        <v-row class="real-estate-info-container mb-13">
              <h5 class="-title">
                전세 자금 대출 정보
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
                      <v-text-field
      class="path-select text-field-dotted"
      dense
          :items="items"
          placeholder="비대면 웹 연결"
          outlined
          readonly
        ></v-text-field>
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
                      금융 회사
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
                      금융 상품명
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
                      상품 코드
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
                      보증 주체
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container">
                    <v-select
      class="finance-select"
      dense
          :items="items"
          label="보증 주체 선택"
          outlined
        ></v-select>
                  </v-row>
                  </v-col>
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
                      기준 금리
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container">
                    <v-text-field
        dense
        reverse
    class="finance-product-text-field"
            label="기준금리"
            outlined
            ></v-text-field>
            </v-row>
                  </v-col>
                  <v-col class="table-item-name">
                    <div>
                      가산 금리
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container">
                    <v-text-field
        dense
        reverse
    class="finance-product-text-field"
            label="가산금리"
            outlined
            ></v-text-field>
            </v-row>
                  </v-col>
                </v-row>
                <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      최고 금리
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container">
                    <v-text-field
        dense
        reverse
    class="finance-product-text-field"
            label="최고금리"
            outlined
            ></v-text-field>
            </v-row>
                  </v-col>
                  <v-col class="table-item-name">
                    <div>
                      최저 금리
                    </div>
                  </v-col>
                  <v-col class="table-item">
                    <v-row class="path-container">
                    <v-text-field
        dense
        reverse
    class="finance-product-text-field"
            label="최저금리"
            outlined
            ></v-text-field>
            </v-row>
                  </v-col>
                </v-row>
                <v-row class="table-row" no-gutters>
                  <v-col class="table-item-name">
                    <div>
                      상품 안내
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
                      금리 정보
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
                      유의 사항
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

                                    <!--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@00_01.상품관리_상품 정보 수정_상품 정보 입력 (신용)@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2-->
            <hr class="hrhrhr">

            <v-row class="real-estate-info-container mb-13">
              <h5 class="-title">
                신용 대출 정보
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
                      <v-text-field
      class="path-select text-field-dotted"
      dense
          :items="items"
          placeholder="비대면 웹 연결"
          outlined
          readonly
        ></v-text-field>
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
            label="기준금리"
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
            label="가산금리"
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
            label="최고금리"
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
            label="최저금리"
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

                                                <!--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@00모달창@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2-->
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
        <div>
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

.err-message {
    margin-top: 11px;
    height: 22px;
    float: left;
    font-size: 12px;
    line-height: 22px;
    color: #f32728;
}

.err-message > .err-img {
    margin-right: 3px;
    vertical-align: text-bottom;
}

.background > .content-header .content-title {
    font-size: 40px;
}

.new-btn {
  float: right;
  font-size: 20px;
  font-weight: 400;
}

.search-container {
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

.search-container .search-text-field {
  display: inline-block;
  width: 435px;
  margin: 0px 20px 0px 0px;
}

.search-select1 {
  display: inline-block;
  width: 310px;
  height: 56px !important;
  margin: 0px 20px 0px 0px;
}

.search-select2 {
  display: inline-block;
  width: 204px;
  height: 56px !important;
  margin: 0px 20px 0px 0px;
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
  padding: 50px;
  background-color: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.18);
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
  height: 942px;
  padding: 50px;
  background-color: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.18);
}

.-subtitle {
  margin: 12px 5px 0px;
  font-size: 14px;
  color: #121212;
}

.real-estate-info-table {
  width: 100%;
  height: 360px;
  margin-bottom: 50px;
  border-top: thin solid #e3e3e3;
  border-left: thin solid #e3e3e3;
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
  max-width: 200px;
  max-height: 90px;
  background-color: #f5f5f5;
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
}

.path-container > .path-select {
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
  max-width: 441px;
  height: 48px;
  margin: 21px;
  padding: 0px;
}

.eidt-btn {
  width: 100%;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
}

.prime-rate-container {
  padding: 50px;
  background-color: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.18);
}

.prime-rate-table {
  width: 100%;
  margin-bottom: 50px;
  border-top: thin solid #e3e3e3;
  border-left: thin solid #e3e3e3;
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
  max-width: 200px;
  max-height: 150px;
  background-color: #f5f5f5;
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

.rate-table-item > .prime-add-delete-container {
  margin: 30px 44px 18px 44px;
}

.prime-select {
  width: 235px;
}

.prime-text-field {
  width: 130px;
}

.tip-btn {
  font-size: 16px;
  line-height: 28px;
  box-shadow: none;
  font-weight: 400;
}

.delete-btn {
  border: thin solid #121212 !important;
  box-shadow: none;
  font-size: 16px;
  line-height: 28px;
}

.prime-group-select {
  width: 260px;
}

.prime-add > div {
  height: 50px;
}

.prime-add > .margin-right {
  margin: 0px 10px 0px 0px;
}

.add-btn {
  box-shadow: none;
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
}

.finance-info-display-container {
  padding: 50px;
  background-color: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.18);
}

.use-radio-btn-container {
  height: 48px;
  margin: 21px;
  padding: 0px;
  justify-content: center;
}

.use-radio-btn-container > .use-radio-group {
  width: 100%;
}

.table-item-last {
  max-height: 90px;
  text-align: center;
  justify-content: center;
  border-right: none !important;
}

.table-item-name-invisible {
  display: flex;
  max-width: 200px;
  max-height: 90px;
  border-right: none !important;
  border-left: none !important;
  background-color: #ffffff;
  text-align: center;
  align-items: center;
}

.file-name-field {
  display: inline-block;
  max-width: 180px;
}
.upload-btn {
  margin: 0px 10px 0px;
  font-size: 16px;
  line-height: 28px;
  box-shadow: none;
  font-weight: 400;
}

.manager-memo-table {
  width: 100%;
  height: 220px;
  margin: 50px 0px 50px;
  border-top: thin solid #e3e3e3;
  border-left: thin solid #e3e3e3;
}

.memo-table-row {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 220px;
}

.memo-table-row > div {
  border-right: thin solid #e3e3e3;
  border-bottom: thin solid #e3e3e3;
}

.memo-item-name {
  display: inline-block;
  max-width: 200px;
  max-height: 220px !important;
  background-color: #f5f5f5;
  text-align: center;
  align-items: center;
}

.memo-item-name > div {
  width: 100%;
  height: auto;
  margin-top: 65px;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
}

.memo-item {
  display: flex;
  height: 220px;
  align-items: center;
}

.memo-text-area {
  max-width: 1144px;
  height: 170px;
  margin: 0 auto;
  box-shadow: none !important;
  border: thin solid #e3e3e3;
}

.prime-limit-table {
  width: 100%;
  border-top: thin solid #e3e3e3;
  border-left: thin solid #e3e3e3;
}

.prime-limit-table > .prime-limit-table-head {
  height: 70px;
  margin: 0px;
  padding: 0px;
  background-color: #f5f5f5;
}

.items {
  display: flex;
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

.prime-limit-table > .prime-limit-table-row {
  height: 90px;
  margin: 0px;
  padding: 0px;
}

.text-field-name-center {
  max-height: 40px;
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

.modal-textarea {
  margin: 24px;
}

.modal-img {
  margin: 24px;
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

</style>

<style>
.real-estate-info-container .v-messages__message {
  margin-left: -13px;
  padding-left: 23px;
  padding-top: 3px;
  background-image: url("../../assets/img/err.png");
  line-height: normal;
}

.path-container > .v-application .error--text {
  color: #f56936 !important;
  caret-color: #f56936 !important;
}

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

.use-radio-btn-container > .use-radio-group .v-input--radio-group__input {
  justify-content: space-around;
}

.memo-text-area textarea {
  height: 170px;
}

.modal-textarea.v-text-field--solo>.v-input__control>.v-input__slot {
  background: #fcfcfc;
}

.text-field-dotted:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot fieldset {
  border: thin dotted;
}

</style>
