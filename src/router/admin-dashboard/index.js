const router = [
    {
        name: "home",
        path: "home",
        component: () => import("@/views/Dashboard.vue"),
        meta: {
            groupParents: 'Home Dashboard'
        },
    },
    {
        name: "product-detail",
        path: "product/:slug",
        component: () => import("@/views/product-detail.vue"),
        meta: {
            groupParents: 'Home Dashboard'
        },
    },
    {
        name: 'CRM Dashboard',
        path: 'crm',
        component: () => import('@/views/home/crm.vue'),
    },
    {
        name: 'Ecommerce Dashboard',
        path: 'ecommerce',
        component: () => import('@/views/home/ecommerce.vue'),
    },
    {
        name: 'Bangking Dashboard',
        path: 'banking',
        component: () => import('@/views/home/banking.vue'),
    },
    {
        name: 'Project Dashboard',
        path: 'project',
        component: () => import('@/views/home/project.vue'),
        meta: {
            groupParent: 'Home Dashboard'
        },
    },
];

export default router;
