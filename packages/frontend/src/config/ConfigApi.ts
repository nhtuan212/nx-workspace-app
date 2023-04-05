export default {
    // menuApi: `${process.env.NEXT_PUBLIC_DOMAIN_API}/61dd3beff60e8f0017668670.mockapi.io/menus`,
    menu: {
        menuApi: 'http://localhost:2000/menu',
    },

    product: {
        productApi: `${process.env.NEXT_PUBLIC_DOMAIN_API}/products`,
        productSearch: `${process.env.NEXT_PUBLIC_DOMAIN_API}/products/search`,
    },

    seo: {
        seoApi: 'http://localhost:2000/seo',
    },
};
