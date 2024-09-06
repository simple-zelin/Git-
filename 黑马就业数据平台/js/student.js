// 目标1.:登录校验
checkToken()
// 目标2:渲染用户名
renderUname()
// 目标3:退出登录
logout()

// 4.1 抽取渲染函数 => 后续也需要使用
// 4.2 发请求 获取数据
// 4.3 渲染页面

// 4.1 抽取渲染函数 => 后续也需要使用
const render = async () => {
// 4.2 发请求 获取数据
  // axios.get(url,{params:{}})
  // axios.post(url,data)
  const { data } = await axios.get('/students')
// 4.3 渲染页面
  document.querySelector('.list').innerHTML = data.map(item => {
    // console.log(item)
    const { age, area, city, gender, group, hope_salary, salary, name, province,id } = item
    return ` 
     <tr>
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender?'女':'男'}</td>
        <td>${group}</td>
        <td>${hope_salary}</td>
        <td>${salary}</td>
        <td>${province}${city}${area}</td>
        <td>
          <a href="javascript:;" class="text-success mr-3" ><i class="bi bi-pen"data-id=${id}></i></a>
          <a href="javascript:;" class="text-danger"><i class="bi bi-trash"data-id=${id}></i></a>
        </td>
      </tr>
    ` 
  }).join('')
  document.querySelector('.total').innerHTML = data.length
}
render()

// 目标5:新增学生
// 5.1点击新增按钮+ 弹出模态框
// 5.2 在模态框中输入内容 省市区联动
// 5.3点击模态框的确认按钮 新增数据
// 弹出模态框
const modalDom = document.querySelector('#modal')
const myModal = new bootstrap.Modal(modalDom)
// 5.1点击新增按钮+ 弹出模态框
document.querySelector('#openModal').addEventListener('click', e => {
  myModal.show() //打开模态框
  // 修改模态框的title
  document.querySelector('.modal-title').innerHTML = '添加学员'
})

// 目标6:抽取省市区联动函数
// 1.默认获取省份 => 生成下拉菜单
// 2.绑定省份更改事件 => 获取城市
// 2.绑定城市更改事件 => 获取地区

// 获取元素
const provinceDom = document.querySelector('[name="province"]')
const cityDom = document.querySelector('[name="city"]')
const areaDom = document.querySelector('[name="area"]')
const selectInit = async () => { 
// 1.默认获取省份 => 生成下拉菜单
  const { list } = await axios.get('/api/province')
  // console.log(list)
  provinceDom.innerHTML += list.map(item => {
    return `<option value="${item}">${item}</option>`
  }).join('')
  // 2.绑定省份更改事件 => 获取城市
  provinceDom.addEventListener('change', async e => { 
    // 只有省份发生了改变 就清空城市列表
    cityDom.innerHTML= `<option value="">--省份--</option>`
    // console.log(e.target.value)
    // 根据省份获取城市
    const {list} = await axios.get('/api/city', {
      params: {
        pname:e.target.value
      }
    })
    cityDom.innerHTML += list.map(item => {
      return `<option value="${item}">${item}</option>`
    }).join('')
  })
  // 3.绑定城市更改事件 => 获取地区
  cityDom.addEventListener('change',async e => {
    areaDom.innerHTML = `<option value="">--地区--</option>`
    // 根据省份和城市获取地区
    const { list } = await axios.get('/api/area', {
      params: {
        pname: provinceDom.value,
        cname:e.target.value
      }
    })
    areaDom.innerHTML += list.map(item => {
      return `<option value="${item}">${item}</option> `
    }).join('')
  })
}
selectInit()



// 目标7:点击模态框的确认按钮,新增数据
const formDom = document.querySelector('#form')
document.querySelector('#submit').addEventListener('click', e => {
  // 编辑功能
  const txt = document.querySelector('.modal-title').innerHTML
  if (txt.includes('添加')) {
    // 新增数据调用
  addStudent()
}
  if (txt.includes('编辑')) {
    // 新增数据调用
  editSubmit()
}
})
// 新增数据函数封装
const addStudent = async () => {
  // 收集数据(serialize) + 提交数据 + 提示
  const data = serialize(formDom, { hash: true, empty: true })
  data.age = +data.age
  data.gender = +data.gender
  data.group = +data.group
  data.hope_salary = +data.hope_salary
  data.salary = +data.salary
  // console.log(data)
  // 数据提交
  try {
    const { message } = await axios.post('/students', data)
    // console.log(res)
    // 提示信息
    showToast(message)
    // 关闭弹框
    myModal.hide()
    // 清空数据
    formDom.reset()
    // 渲染页面
    render()
  } catch(arr) {
        // 应为模态框的层级比提示框层级高,所以要先关闭弹框
    myModal.hide()
    showToast('傻呗,输错了,好好检查一下')
        // 清空数据
    formDom.reset()
  }
}

// 目标8:删除数据
document.querySelector('.list').addEventListener('click', e => {
  const { target: { classList, dataset } } = e
  // 删除逻辑封装函数
  if (classList.contains('bi-trash')) {
    const id = dataset.id
    delStudent(id)
  }

  // 如果是编辑
  if (classList.contains('bi-pen')) {
     const id = dataset.id
    // 弹出模态框
    myModal.show()
    // 修改模态框的title   
    document.querySelector('.modal-title').innerHTML = '编辑学员'
    // 调用编辑函数 => 1.获取详情 2.回显数据
    editStudent(id)
    document.querySelector('.modal-title').dataset.id = id
  }
})


// 删除数据的函数
const delStudent =async id => {
  console.log(id)
  // 发送请求
  const flag = confirm('确定删除吗')
  if (flag === true) {
        try {
      await axios.delete(`/students/${id}`)
      showToast('删除成功')
      render()
    } catch(err) {
      showToast('删除失败,请检查网络')
    }
  } else {
    alert('傻呗,不删点它干嘛')
  }
}

// 编辑数据的函数
const editStudent = async id => {
  // console.log(id)
  // 请求数据
  const {data} = await axios.get(`/students/${id}`)
  // console.log(res)
  // 定义一个数组,这个数组保存的是,我们可以直接渲染的数据的键
  const arrKeys = ['name', 'age', 'group', 'hope_salary', 'salary']
  arrKeys.forEach(item => {
    document.querySelector(`[name=${item}]`).value = data[item]
  })
  // 2.性别
  const genders = document.querySelectorAll('[name="gender"]')
  // 后端返回数据是一个数字,这个数字刚好可以作为数组的索引
  genders[data.gender].checked = true

  // 3.回显省市区
  const { province, city, area } = data
  // 3.1回显省份
  provinceDom.value = province  
  const { list: alist } = await axios.get('/api/city', {
    params: {
      pname:province
    }
  })
  cityDom.innerHTML += alist.map(item => {
    return `<option value="${item}">${item}</option>`
  }).join('')
  cityDom.value = city
  // 3.3根据省份和城市获取地区列表 并回显地区
  const { list: aList } = await axios.get('/api/area', {
    params: {
      pname: province,
      cname:city
    }
  })
  // console.log(aList)
  areaDom.innerHTML += aList.map(item => `<option value="${item}">${item}</option>`).join('')
  areaDom.value = area
}

// 编辑学生的提交函数
const editSubmit = async () => {
  const id = document.querySelector('.modal-title').dataset.id
  // 获取编辑数据
  const data = serialize(formDom, { hash: true, empty: true })
    data.age = +data.age
  data.gender = +data.gender
  data.group = +data.group
  data.hope_salary = +data.hope_salary
  data.salary = +data.salary
  console.log(data)
  try {
    const res = await axios.put(`/students/${id}`, data)
    myModal.hide()
    showToast(res.message)
    formDom.reset()
    render()
    // 已经编辑成功了,就清除标题中的id
document.querySelector('.modal-title').dataset.id = ''
  } catch (err) {
    myModal.hide()
    showToast('操作失败,请检查数据')
  }
}