// 注册事件、收集表单数据并验证、发送请求、判断请求，提示用户、如果成功则本地存储用户名、跳转页面

const loginForm = document.querySelector('.login-form')
document.querySelector('#btn-login').addEventListener('click',async e=>{
    // 收集表单并验证
    const data = serialize(loginForm,{hash:true,empty:true})
    if(!data.username || !data.password){
        return showToast('请输入用户名和密码')
    }
    if(data.username.length < 8 || data.username.length > 30){
        return showToast('用户名不符合要求')
    }
    if(data.password.length < 6 || data.password.length > 20){
        return showToast('密码不符合要求')
    }

    // 发送请求，判断响应结果，提示用户
    try {
    const res = await axios.post('/login',data)
    console.log(res)
    const obj = {}
    obj.username = res.data.username
    obj.token = res.data.token
    // 如果成功则本地存储用户名
    localStorage.setItem('userMsg',JSON.stringify(obj))
    showToast(res.message)
    // 页面跳转
    setTimeout(() => {
        location.href = './index.html'
    }, 1500)
    } catch(err) {
        // console.dir(err.response.data.message)
        return showToast(err.response.data.message)
    }
})