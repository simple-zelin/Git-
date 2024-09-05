// 配置axios基地址
axios.defaults.baseURL = 'https://hmajax.itheima.net'

// 公共的提示框函数
const showToast = (msg) =>{
    const mytoast = document.querySelector('.my-toast')
    const toastObj = new bootstrap.Toast(mytoast)
    toastObj.show()

    // 让提示框内容改变
    document.querySelector('.toast-body').innerHTML = msg
}

// showToast('成功')
const data = localStorage.getItem('userMsg') ? JSON.parse(localStorage.getItem('userMsg')) : {}
// 公共的token是否存在验证
const checkToken = () => {
    const {token} = data
    // console.log(token)
    if(!token) {
        showToast('请先登录')
        setTimeout(() => {
            location.href = './login.html'
        }, 1500)
    }
}

// 回显用户名
const renderUname = () => {
    // const data = localStorage.getItem('userMsg') ? localStorage.getItem('userMsg') : {}
    const {username} = data
    // console.log(username)
    if(username) {
        document.querySelector('.username').innerHTML = username
    }
}

// 退出登录
const logout = () =>{
    document.querySelector('#logout').addEventListener('click',e=>{
        // 清空本地存储
        localStorage.removeItem('userMsg')
        // 提示用户
        showToast('退出成功')
        // 跳转首页
        setTimeout(() => {
            location.href = './login.html'
        }, 1500)
    })
}

// 请求拦截器
// 添加请求拦截器
axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    // 只有有了token才添加到请求头
    const {token} = data
    if(token) {
        config.headers['Authorization'] = token
    }
    // const token = JSON.parse(localStorage.getItem("userMsg")).token
    return config
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  });

  // 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // 数据剥离 =》 在响应拦截器的return response.data即可
    return response.data
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    if(err.response.status === 401){
        showToast('您的登录信息过期，请重新登录')
        // 清除缓存de数据
        localStorage.removeItem('userMsg')
        // 跳转登录页
       setTimeout(() => {
         location.href = '/login.html'
       }, 1600)
    }
    // 对响应错误做点什么
    return Promise.reject(error);
  });