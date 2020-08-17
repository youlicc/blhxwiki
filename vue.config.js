module.exports = {
    devServer: {
        port: 5000
    },
    configureWebpack: {
        resolve: {
            alias: {
                vue$: "vue/dist/vue.esm.js"
            }
        }
    }
}