const commonRouter = [
    {
        path: '/users',
        name: 'Users',
        component: () => import('@/views/users/user.vue')
    },
    {
        path: '/operations',
        name: 'Operations',
        component: () => import('@/views/operations/manager.vue')
    },
    {
        path: '/operations/counselor',
        name: 'Operations Counselor',
        component: () => import('@/views/operations/counselor.vue')
    },
    {
        path: '/operations/real-estate',
        name: 'Operations Real Estate',
        component: () => import('@/views/operations/realEstate.vue')
    },
    {
        path: '/products',
        name: 'Products',
        component: () => import('@/views/products/product.vue')
    },
    {
        path: '/products/finance',
        name: 'Products Finance',
        component: () => import('@/views/products/finance.vue')
    },
    {
        path: '/products/prime-rate',
        name: 'Products Prime Rate',
        component: () => import('@/views/products/primeRate.vue')
    },
    {
        path: '/products/spread',
        name: 'Products Spread',
        component: () => import('@/views/products/spread.vue')
    },
    {
        path: '/loan',
        name: 'Loan',
        component: () => import('@/views/loan/financeCounselor.vue')
    },
    {
        path: '/loan/dambee',
        name: 'Loan Dambee',
        component: () => import('@/views/loan/dambeeCounselor.vue')
    },
    {
        path: '/loan/untact',
        name: 'Loan Untact',
        component: () => import('@/views/loan/untact.vue')
    },
    {
        path: '/board',
        name: 'Board',
        component: () => import('@/views/board/userQna.vue')
    },
    {
        path: '/board/user-FAQ',
        name: 'Board User FAQ',
        component: () => import('@/views/board/userFaq.vue')
    },
    {
        path: '/board/counselor-QNA',
        name: 'Board Counselor QNA',
        component: () => import('@/views/board/counselorQna.vue')
    },
    {
        path: '/board/counselor-FAQ',
        name: 'Board Counselor FAQ',
        component: () => import('@/views/board/counselorFaq.vue')
    },
    {
        path: '/board/user-notice',
        name: 'Board User Notice',
        component: () => import('@/views/board/userNotice.vue')
    },
    {
        path: '/board/counselor-notice',
        name: 'Board Counselor Notice',
        component: () => import('@/views/board/counselorNotice.vue')
    },
    {
        path: '/board/news',
        name: 'Board News',
        component: () => import('@/views/board/news.vue')
    },
    {
        path: '/board/info',
        name: 'Board Info',
        component: () => import('@/views/board/info.vue')
    },
    {
        path: '/rates',
        name: 'Rates',
        component: () => import('@/views/rates/kb.vue')
    },
    {
        path: '/rates/loan',
        name: 'Rates Loan',
        component: () => import('@/views/rates/loan.vue')
    },
    {
        path: '/adjustment',
        name: 'Adjustment',
        component: () => import('@/views/adjustment/dambee.vue')
    },
    {
        path: '/adjustment/finance',
        name: 'Adjustment Finance',
        component: () => import('@/views/adjustment/finance.vue')
    },
    {
        path: '/adjustment/untact',
        name: 'Adjustment Untact',
        component: () => import('@/views/adjustment/untact.vue')
    },
    {
        path: '/system',
        name: 'System',
        component: () => import('@/views/system/server.vue')
    },
    {
        path: '/system/backup',
        name: 'System Backup',
        component: () => import('@/views/system/backup.vue')
    },
    {
        path: '/system/info',
        name: 'System Info',
        component: () => import('@/views/system/info.vue')
    },
    {
        path: '/report',
        name: 'Report',
        component: () => import('@/views/report/users.vue')
    },
    {
        path: '/report/counselors',
        name: 'Report Counselors',
        component: () => import('@/views/report/counselors.vue')
    },
    {
        path: '/report/app-downloads',
        name: 'Report App Downloads',
        component: () => import('@/views/report/appDownloads.vue')
    },
    {
        path: '/report/app-connections',
        name: 'Report App Connections',
        component: () => import('@/views/report/appConnections.vue')
    },
    {
        path: '/report/page-connections',
        name: 'Report Page Connections',
        component: () => import('@/views/report/pageConnections.vue')
    },
    {
        path: '/report/finance-consultings',
        name: 'Report Finance Consultings',
        component: () => import('@/views/report/financeConsultings.vue')
    },
    {
        path: '/report/regional-consultings',
        name: 'Report Regional Consultings',
        component: () => import('@/views/report/regionalConsultings.vue')
    },
]

export default commonRouter
