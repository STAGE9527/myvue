// // vue.config.js
// const path = require('path')
// function resolve(dir) {
//     return path.join(__dirname, dir)
// }
// module.exports = {
//     // 选项...
//     publicPath: './',
//     indexPath: 'index.php',
//     outputDir: './public/dist',
//     // 选项...
//     devServer: {
//         proxy: {
//             '^/api': {
//                 // target: 'https://ifans.optaim.com/', // 线上环境
//                 target: 'http://ifans.com', // 本地环境
//                 // target: 'http://ifanstest.optaim.com', // 测试环境
//                 // target: process.env.VUE_APP_PROXY_TARGET, // 测试环境
//                 changeOrigin: true,
//                 autoRewrite: true,
//                 cookieDomainRewrite: true,
//                 pathRewrite: {
//                     '^/api': '/api'
//                 }
//             }
//         }
//     },
//     configureWebpack: config => {
//         config.resolve = {
//             extensions: ['.js', '.vue', '.json', ".css"],
//             alias: {
//                 'vue$': 'vue/dist/vue.esm.js',
//                 '@': resolve('src'),
//             }
//         }
//         if (process.env.NODE_ENV === 'production') {
//             config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
//             config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
//             config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
//             config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log']
//         }
//     },
//     chainWebpack: config => {
//         config.module
//             .rule('images')
//             .use('url-loader')
//             .loader('url-loader')
//             .tap(options => Object.assign(options, { limit: 10240 }))
//     }
// }
