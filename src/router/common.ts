export const commonRouter = [
    {
        path: '/product',
        name: 'Product',
        Component: () => import('@/views/Home.vue')
    }
]

export default commonRouter
