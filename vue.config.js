// const webpack = require('webpack')
// const url = "http://localhost:8088"
const url = "http://blueberrypie.cn/api"
module.exports = {

    lintOnSave: true,
    productionSourceMap: false,

    devServer: {
        open: false,
        disableHostCheck: true,
        compress: true,
        hotOnly: false,
        proxy: {
            '/user': {
                target: url,
                // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                changeOrigin: true,
                secure: false,
                ws: false,
                pathRewrite: {
                    '^/user': '/user'
                    // 替换target中的请求地址，也就是说以后你在请求http://api.jisuapi.com/XXXXX这个地址的时候直接写成/api即可
                }
            },
            '/blog': {
                target: url,
                changeOrigin: true,
                secure: false,
                ws: false,
                pathRewrite: {
                    '^/blog': '/blog'
                }
            },
            '/menu': {
                target: url,
                changeOrigin: true,
                secure: false,
                ws: false,
                pathRewrite: {
                    '^/menu': '/menu'
                }
            },
        }
    }
}