// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'mlca',
            meta: [
                { name: 'description', content: 'Minimalist LCA software' }
            ],
            link: [
                // <link rel="icon" type="image/x-icon" href="/favicon.ico">
                { rel: 'icon', type: 'image/x-icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍱</text></svg>' }
            ]
        }
    }
})
