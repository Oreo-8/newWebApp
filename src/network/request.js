import axios from 'axios'
import store from "../store/index"
import router from '../router/index'
import { Message, MessageBox } from 'element-ui'

const instance = axios.create({
    timeout: 5000,
    header: 'Content-Type:application/x-www-form-urlencoded'
})

// request拦截器
instance.interceptors.request.use(config => {
    // if (store.state.token != '') {
    //     config.headers['Authorization'] = store.state.token // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

// response拦截器
instance.interceptors.response.use(response => {
    const res = response.data
    if ((typeof (res.code) != "undefined" && res.code != 200)) {

        if (typeof (res.code) != "undefined" && res.code != 403) {
            //生产环境
            // Message({
            //     message: res.msg,
            //     type: 'error',
            //     duration: 5 * 1000
            // })
        }

        // 403:Token过期 或 权限不足(恶意访问/被封禁) ;
        if (res.code === 403) {
            // store.commit('logout');
            // MessageBox.confirm('你已被登出，点击确定返回首页', '状态异常', {
            //     confirmButtonText: '确 定',
            //     cancelButtonText: '确 定',
            //     type: 'warning'
            // }).then(() => {
            //     // window.location.href = '#/'
            //     router.push({ //路由跳转
            //         path: '/'
            //     })
            //     location.reload()
            // }).catch(() => {

            //     router.push({ //路由跳转
            //         path: '/'
            //     })
            //     location.reload()
            // })
        }
        return Promise.reject('error')
    } else {
        return response.data
    }
}, error => {
    console.log('错误:' + error.message)// for debug
    var message;
    if (error.response.status == 504) {
        message = '连接超时'
    } else {
        message = error.message
    }
    // Message({
    //     message: message,
    //     type: 'error',
    //     duration: 5 * 1000
    // })
    return Promise.reject(error)
})

export default instance