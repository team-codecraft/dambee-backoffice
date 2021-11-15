<template>
    <div>
    <v-app-bar class="default-bar" height="200px" app>
        <v-row class="default-header" align="center" justify="space-between">
            <v-col>
                <span class="admin-name">ADMINISTRATOR</span>
            </v-col>
            <v-col>
                <div class="header-info">
                    <img class="account-img" src="@/assets/img/account.png"/>
                    <span>마스터 관리자님 환영합니다</span>
                    <v-btn
                    class="signout-btn"
                    color="#484746"
                    >
                    로그아웃
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-app-bar>
    <v-navigation-drawer
    app
    color="#73706d"
    width="270px"
    permanent
    dark
    >
    <v-list-item>
        <v-list-item-content>
            <div class="logo-container">
                <img class="clear-img" src="@/assets/img/clear.png" />
                <img class="logo-img" src="@/assets/img/logo.png" />
            </div>
        </v-list-item-content>
      </v-list-item>

          <router-link to="/users">
      <v-list-item class="category-users">
        <div class="category-left-side">
        </div>
          <v-list-item-icon>
            <v-icon class="category-left-margin">mdi-account-box-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>회원관리</v-list-item-title>
          </v-list-item-content>
      </v-list-item>
          </router-link>

      <v-list-item class="category">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>운영관리</v-list-item-title>
          </v-list-item-content>
      </v-list-item>

      <v-list
        class="categoty-menu-container"
        dense
        nav
      >
        <v-list-item
          class="categoty-menu"
          v-for="item in operations"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list-item class="category">
          <v-list-item-icon>
            <v-icon>mdi-archive-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>상품관리</v-list-item-title>
          </v-list-item-content>
      </v-list-item>

      <v-list
        class="categoty-menu-container"
        dense
        nav
      >
        <v-list-item
          class="categoty-menu"
          v-for="item in products"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list-item class="category">
          <v-list-item-icon>
            <v-icon>mdi-view-list-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>대출 신청 관리</v-list-item-title>
          </v-list-item-content>
      </v-list-item>

      <v-list
        class="categoty-menu-container"
        dense
        nav
      >
        <v-list-item
          class="categoty-menu"
          v-for="item in loan"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list-item class="category">
          <v-list-item-icon>
            <v-icon>mdi-clipboard-text-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>게시판 관리</v-list-item-title>
          </v-list-item-content>
      </v-list-item>

      <v-list
        class="categoty-menu-container"
        dense
        nav
      >
        <v-list-item
          class="categoty-menu"
          v-for="item in board"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list-item class="category">
          <v-list-item-icon>
            <v-icon>mdi-percent-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>시세 / 금리 관리</v-list-item-title>
          </v-list-item-content>
      </v-list-item>

      <v-list
        class="categoty-menu-container"
        dense
        nav
      >
        <v-list-item
          class="categoty-menu"
          v-for="item in rates"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list-item class="category">
          <v-list-item-icon>
            <v-icon>mdi-cash-multiple</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>정산 관리</v-list-item-title>
          </v-list-item-content>
      </v-list-item>

      <v-list
        class="categoty-menu-container"
        dense
        nav
      >
        <v-list-item
          class="categoty-menu"
          v-for="item in adjustment"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list-item class="category">
          <v-list-item-icon>
            <v-icon>mdi-monitor</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>시스템 관리</v-list-item-title>
          </v-list-item-content>
      </v-list-item>

      <v-list
        class="categoty-menu-container"
        dense
        nav
      >
        <v-list-item
          class="categoty-menu"
          v-for="item in system"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list-item class="category">
          <v-list-item-icon>
            <v-icon>mdi-chart-box-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>리포트 관리</v-list-item-title>
          </v-list-item-content>
      </v-list-item>

      <v-list
        class="categoty-menu-container"
        dense
        nav
      >
        <v-list-item
          class="categoty-menu"
          v-for="item in report"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
    <v-main class="main-background">
        <!-- <v-container fluid> -->
            <router-view />
        <!-- </v-container> -->
    </v-main>
    </div>
</template>

<script>
    export default {
        name: 'DefaultLayout',
        data () {
      return {
        operations: [
          { title: '관리자 관리', to: '/operations/manager' },
          { title: '상담사 관리', to: '/operations/counselor' },
          { title: '제휴 부동산 관리', to: '/operations/real-estate' },
        ],
        products: [
          { title: '상품 관리', to: '/products/product' },
          { title: '금융사 관리', to: '/products/finance' },
          { title: '우대 금리 관리', to: '/products/prime-rate' },
          { title: '가산 글미 관리', to: '/products/spread' },
        ],
        loan: [
          { title: '금융사 상담사 연결', to: '/loan/finance' },
          { title: '담비 상담사 연결', to: '/loan/dambee' },
          { title: '비대면 연결', to: '/loan/untact' },
        ],
        board: [
          { title: '사용자 Q&A', to: '/board/user-QNA' },
          { title: '사용자 FAQ', to: '/board/user-FAQ' },
          { title: '상담사 Q&A', to: '/board/counselor-QNA' },
          { title: '상담사 FAQ', to: '/board/counselor-FAQ' },
          { title: '사용자 공지사항', to: '/board/user-notice' },
          { title: '상담사 공지사항', to: '/board/counselor-notice' },
          { title: '금융 뉴스', to: '/board/news' },
          { title: '금리 정보', to: '/board/info' },
        ],
        rates: [
          { title: 'KB 시세 관리', to: '/rates/kb' },
          { title: '대출 금리 관리', to: '/rates/loan' },
        ],
        adjustment: [
          { title: '담비 상담사 연결', to: '/adjustment/dambee' },
          { title: '금융사 연결', to: '/adjustment/finance' },
          { title: '비대면 연결', to: '/adjustment/untact' },
        ],
        system: [
          { title: '서버 모니터링', to: '/system/server' },
          { title: '백업 시스템 모니터링', to: '/system/backup' },
          { title: '정보 시스템 사용 이력', to: '/system/info' },
        ],
        report: [
          { title: '유저 가입수', to: '/report/users' },
          { title: '상담사 가입수', to: '/report/counselors' },
          { title: '앱 다운로드수', to: '/report/app-downloads' },
          { title: '앱 접속수', to: '/report/app-connections' },
          { title: '랜딩 페이지 접속수', to: '/report/page-connections' },
          { title: '금융사 상담 현황', to: '/report/finance-consultings' },
          { title: '지역별 상담 현황', to: '/report/regional-consultings' },
        ],
        right: null,
      }
    },
    }
</script>

<style scoped>
* {
    font-family: 'Spoqa Han Sans Neo';
    word-break: keep-all;
    box-sizing: border-box;
    text-decoration: none;
}

.default-bar {
    background-color: #f8f8f8 !important;
    box-shadow: none !important;
    align-items: center;
    font-size: 24px;
}

.default-header {
    width: 1550px;
    height: 100px;
    margin: 0px 50px 0px;
    background-color: #ffffff;
    box-shadow: 2px 8px 8px rgb(0 0 0 / 5%);
}

.admin-name {
    margin: 0 0 0 18px;
}

.header-info {
    float: right;
}

.header-info > .account-img {
    /* height: 50px;
    width: 50px; */
    top: 25px;
    border-radius: 0px;
    vertical-align: middle;
}

.signout-btn {
    color: #ffffff !important;
    width: 134px;
    height: 48px;
    font-size: 20px !important;
    margin: 0px 18px 0px 50px;
}

.logo-container {
    width: 270px;
    height: 168px;
}

.logo-container > .clear-img {
    height: 24px;
    width: 24px;
    left: 236px;
    top: 10px;
    border-radius: 0px;
    float: right;
    cursor: pointer;
}

.logo-container > .logo-img {
    position: relative;
    margin: 0px 75px 18px 14px;
}

.category-users {
    background-color: #a3583d;
}

.category-left-side {
  position: absolute;
  width: 4.06px;
  height: 100%;
  background: #ff6934;
  left: 0;
}

.category-left-margin {
  margin-right: 32px;
}

.category {
    background-color: #484745;
    border-bottom: 1px solid #9d9b99;
}

.categoty-menu-container {
    padding: 0;
}

.categoty-menu {
    border-bottom: 1px solid #9d9b99;
    margin: 0 !important;
    border-radius: 0 !important;
    padding: 0px 16px 0px !important;
}

.main-background {
  background-color: #f8f8f8;
}

</style>
