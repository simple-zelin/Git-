/*
收集注册并校验
发送请求
显示结果
跳转至登录页
*/

document.querySelector('#btn-register').addEventListener('click', async e=>{
    const data = serialize(document.querySelector('.register-form'),{hash: true, empty: true})
    // console.log(data)
    if (!data.username) {
       return showToast('用户名不能为空')
    }
    if (data.username.length < 8 || data.username.length > 30) {
        return showToast('用户名不符合要求')
    }

    if (!data.password) {
        return  showToast('密码不能为空')
    }
    if (data.password.length < 6 || data.password > 30){
        return  showToast('密码不符合要求')
    }

    // 发送请求
    const res = await axios.post('/register',data)
    console.log(res)
    showToast(res.message)

    // 跳转至登录页
    
    setTimeout(() => {
        location.href = './login.html'
    }, 1000)
})