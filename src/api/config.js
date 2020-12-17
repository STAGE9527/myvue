
// 引入相关的依赖包
import axios from 'axios';
import Vue from 'vue'
import store from '../store/store'
import router from '../router'
import { Loading } from 'element-ui';


// 默认设置
axios.defaults.timeout = 100000;
axios.defaults.baseURL = process.env.VUE_APP_BASE_API
axios.defaults.method = 'post'
axios.defaults.loading = false
axios.defaults.withCredentials = true
axios.defaults.errorHandler = function (message) {
	Vue.prototype.$message({
		type: 'warning',
		message
	})
}


// 添加请求拦截器
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    if(store.state['admin-api-token']) {
        config.headers['admin-api-token'] = store.state['admin-api-token']
    }
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(response => {
    // 状态码提示框
    return response;
}, error => {
    return Promise.reject(error);
});

function down(url , params) {
    url += '?admin-api-token=' + store.state['admin-api-token'] + urlEncode(params)
    window.location.href = process.env.VUE_APP_BASE_URL + url
}

function urlEncode(param, key, encode) {
    if (!param) return '';
    let paramStr = '';
    let t = typeof (param);
    if (t == 'string' || t == 'number' || t == 'boolean') {
        paramStr += '&' + key + '='  + ((encode==null||encode) ? encodeURIComponent(param) : param);
    } else {
        for (let i in param) {
            let k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
            paramStr += urlEncode(param[i], k, encode)
        }
    }
    return paramStr;

}

/**
 * 请求方法
 * @param  {string}  method 请求方式
 * @param  {string}  url    请求连接
 * @param  {object}  obj 请求参数
 * @return {Promise}        返回 Promise
 */
function reqMethod(method, url, obj, loading, tips = true) {
    if (method == 'get' && obj && obj.down) {
        return down(url, obj)
    }

    let headers = {};
    if (obj instanceof FormData) {
        headers = {'Content-Type': 'multipart/form-data'};
    } else {
        headers = {'Content-Type': 'application/json;charset=UTF-8'};
    }
    let modeKey = ['post', 'put'].includes(method.toLowerCase()) ? 'data' : 'params';

    let loadingInstance = null;
    if(loading) {
        loadingInstance = Loading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
    }
    return new Promise((resolve, reject) => {
        axios({
            method: method.toLowerCase(),
            url: url,
            [modeKey]: obj || {},
            headers: headers || {}
        })
        .then(function(response) {
            loadingInstance && loadingInstance.close()
            if(response.data.code == 0) {
                if (method == 'post' && tips) {
                    Vue.prototype.$message({
                        type: 'success',
                        message: response.data.msg
                    })
                }
                resolve(response.data.data);
            } else if(response.data.code == -1){
                store.commit('logout')
                router.push('/login')
                reject(response.data)
            } else {
                axios.defaults.errorHandler(response.data.msg);
                reject(response.data)
            } 
        })
        .catch(function() {
            loadingInstance && loadingInstance.close()
            axios.defaults.errorHandler('网络错误');
        });
    });
}

export default reqMethod;
