export default {
    menu: {
        // menuApi: `${process.env.NEXT_PUBLIC_DOMAIN_API}/61dd3beff60e8f0017668670.mockapi.io/menus`,
        menuApi: 'http://localhost:2000/menu',
    },

    category: {
        getProductCategory: 'http://localhost:2000/category',
    },

    product: {
        getProduct: 'http://localhost:2000/product',
        productApi: `${process.env.NEXT_PUBLIC_DOMAIN_API}/products`,
        productSearch: `${process.env.NEXT_PUBLIC_DOMAIN_API}/products/search`,
    },

    seo: {
        seoApi: 'http://localhost:2000/seo',
    },
};
