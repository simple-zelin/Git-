// 验证token
checkToken()
// 回显用户名
renderUname()
// 退出登录
logout()

// 获取数据、渲染
// 获取数据
// 函数封装 =》获取数据
const getData = async () => {
    // const data = localStorage.getItem('userMsg') ? JSON.parse(localStorage.getItem('userMsg')) : {}
    // const {token} = data
    try {
        const res = await axios({
            url:'/dashboard',
            method:'GET',
            // 请求头参数
            // headers: {
            //     Authorization: token
            // }
        })

            // 调用渲染函数
             renderOverview(res.data.overview)

    } catch(err) {
        // console.dir(err)
        // if(err.response.status === 401){
        //     showToast('您的登录信息过期，请重新登录')
        //     // 清除缓存de数据
        //     localStorage.removeItem('userMsg')
        //     // 跳转登录页
        //    setTimeout(() => {
        //      location.href = '/login.html'
        //    }, 1600)
        // }
    }
}
getData()

// 获取数据 渲染数据
const renderOverview = (overview) => {
    console.log(overview)
    // 获取键
    Object.keys(overview).forEach(item=>{
        console.log(item)
        document.querySelector(`.${item}`).innerHTML = overview[item]
    })
}