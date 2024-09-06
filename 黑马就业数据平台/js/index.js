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
        const {overview,year,salaryData,groupData,provinceData} = res.data
        // 获取到数据后, 调用渲染函数,渲染页面不同区域
    // 1. 渲染 overview 
    renderOverview(overview)
    // 2.渲染 折线图
     renderYer(year)
     // 3.渲染薪资分布 饼图
     renderSalaryData(salaryData)
     // 4.渲染每组薪资 柱状图
     renderGroupData(groupData)
    // 5.渲染男女薪资
    renderGenderData(salaryData)
    // 6.籍贯分布
    renderProvince(provinceData)



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


// 目标5:折线图渲染 => 函数
// 5.1 封装函数
// 5.2 整合图例
// init初始化一个实例
// 准备配置项
// 调用配置项
const renderYer = (year) => {
    // console.log(year)
    // 1.初始化一个实例
    const myChart = echarts.init(document.querySelector('#line'))
    // 2.准备配置项
    const option = {
      // 标题组件
      title: {
        text: '2022全学科薪资走势',
        left: 5,
        top:10
      },
      // 提示框组件
      tooltip: {
        show: true,
        trigger:'axis'
      },
      // 网格组件
      grid: {
        top:'15%'
      },
    xAxis: {
      type: 'category',
      // X轴坐标线
      axisLine: {
        // 轴线样式
        lineStyle: {
          type: 'dashed',      // 轴线类型 虚线
          color:'#ccc'      // 轴线颜色
        }
      },
      data: year.map(item => item.month)
    },
    yAxis: {
      type: 'value',
      // 分割线改虚线
      splitLine: {
        lineStyle: {
          type:'dashed'
        }
      }
    },
  series: [
     {
      data: year.map(e => e.salary),
      type: 'line',
      // smooth: false,//折线
      smooth: true,//曲线
      symbolSize: 10, //图标记点的大小
      lineStyle: {
        width: 10, //线条的粗细
             color: {
        type: 'linear',
        // 起始位置
        x: 0,
          y: 0,
        // 结束位置
        x2: 1,
        y2: 0,
        colorStops: [
         {
          offset: 0,
          color: 'red'// 0% 处的颜色
         },
         {
          offset: 1,
          color: 'green' // 100% 处的颜色
         }
        ],
        global: false // 缺省为 false
       }
      },
      areaStyle: {
       color: {
        type: 'linear',
        // 起始位置
        x: 0,
          y: 0,
        // 结束位置
        x2: 0,
        y2: 1,
        colorStops: [
         {
          offset: 0,
          color: '#b2d7f7'// 0% 处的颜色
         },
         {
          offset: 1,
          color: 'pink' // 100% 处的颜色
         }
        ],
        global: false // 缺省为 false
       }
      }
     }
    ]
    }
    // 3.调用配置项
  myChart.setOption(option)
  }
  
  // 目标6:完成饼图渲染 => 薪资分布
  const renderSalaryData = (salaryData) => {
    // console.log(salaryData)
    // 生成图表
    // 1.生成实例化对象
    const myChart = echarts.init(document.querySelector('#salary'))
    // 2.准备配置项
   const option = {
    tooltip: {
      trigger: 'item'
     },
     title: {
       text: '班级薪资分布',
       top: 0,
       left: 0,
       textStyle: {
         fontSize:16
       }
     },
    legend: {
      bottom: 0,
      left: 'center'
    },
    series: [
      {
        name: '班级薪资分布',
        type: 'pie',
        // 饼图的大小[内圆的半径,外圆的半径]
        radius: ['60%', '80%'],
        // 提示线的堆叠属性,圆环图不需要设计
        avoidLabelOverlap: false,
        // 饼状图连接处设计
        itemStyle: {
          borderRadius: 20,
          borderColor: '#000',
          borderWidth: 2
        },
        // 提示文字
        label: {
          show: false, // 不显示文字
          position: 'center'
        },
        // emphasis: {
        //   label: {
        //     show: true,
        //     fontSize: 40,
        //     fontWeight: 'bold'
        //   }
        // },
        // data: [
          //   { value: 1048, name: 'Search Engine' },
          //   { value: 735, name: 'Direct' },
          //   { value: 580, name: 'Email' },
          //   { value: 484, name: 'Union Ads' },
          //   { value: 300, name: 'Video Ads' }
          // ]
          labelLine: {
            show: false
        },
        data: salaryData.map(item => ({
          value: item.g_count + item.b_count,
          name:item.label
          }))
      }
     ],
    // 颜色
    color:['#fda224','#5097ff','#3abcfa','#34d39a']
  }
    // 3.调用配置项
    myChart.setOption(option)
  }
  
  // 目标7:每组薪资柱状图
  const renderGroupData = (groupData) => {
      // 1.生成实例化对象
    // console.log(groupData)
    //2. 配置项
    const myChart = echarts.init(document.querySelector('#lines'))
    const option = {
      // 提示框组件
      tooltip: {},
      // 网格设置
      grid: {
        left: 70,
        top: 30,
        right: 30,
        bottom:50
      },
      // X轴设置
    xAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          type: 'dashed',
          color:'#ccc'
        }
      },
      data: groupData[1].map(item => item.name),
      axiosLabel: {
        // 默认颜色和axisLine的color一致
        color:'#999'
      }
      },
    // Y轴设置
    yAxis: {
      type: 'value',
          axisLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    series: [
      {
        data: groupData[1].map(item => item.hope_salary),
        type: 'bar',
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset:0,color:'#34d39a' //0% 处的颜色
            }, {
              offset:1,color:'rgba(52,211,154,0.2)' //100% 处的颜色
              }],
            global:false //缺省为false
          }
        }
      },
   {
        data: groupData[1].map(item => item.salary),
        type: 'bar',
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset:0,color:'pink' //0% 处的颜色
            }, {
              offset:1,color:'rgba(73,159,238,0.2)' //100% 处的颜色
              }],
            global:false //缺省为false
          }
        }
      },
    ]
    }
    // 3.使用配置项
    myChart.setOption(option)
  
    // 4.切换数据
    // 4.1给组号绑定点击事件
    document.querySelector('#btns').addEventListener('click', e => {
      // 4.2判断点的是不是button
      if (e.target.tagName === 'BUTTON') {
        // 4.3排他
        document.querySelector('#btns').querySelector('.btn-blue').classList.remove('btn-blue')
        e.target.classList.add('btn-blue')
        // 4.4获取我点击了那一组
        const group = e.target.innerHTML
        // 点击那一组获取那一组数据
        // console.log(groupData[group])
        option.xAxis.data = groupData[group].map(item => item.name)
        option.series[0].data = groupData[group].map(item => item.hope_salary)
        option.series[1].data = groupData[group].map(item => item.salary)
          // 重新渲染函数
        myChart.setOption(option)
      }
    })
  }
  

  // 目标8: 男女薪资分布
const renderGenderData = (salaryData) => {
    // console.log(salaryData)
    const myChart = echarts.init(document.querySelector('#gender'))
    const option = {
        // 颜色
    color:['#fda224','#5097ff','#3abcfa','#34d39a'],
      title: [
        { 
          text:'男女薪资分布',
          left: 10,
          top: 10,
          textStyle: {
            fontSize:16
          }
        },
        { 
          text:'男生',
          left: '50%',
          top: '45%',
          textStyle: {
            fontSize:12
          }
        },
        { 
          text:'女生',
          left: '50%',
          top: '85%',
          textStyle: {
            fontSize:12
          }
        }
      ],
    series: [
      {
        name: '男生',
        type: 'pie',
        radius: ['20%', '30%'],//圆的半径 第一个值是内圆 第二个值是外圆
        center: ['50%', '30%'],//圆的位置
        // roseType: 'area', 
        // itemStyle: {
        //   borderRadius: 8
        // },
        // data: [
        //   { value: 40, name: 'rose 1' },
        //   { value: 38, name: 'rose 2' },
        //   { value: 32, name: 'rose 3' },
        //   { value: 30, name: 'rose 4' },
        // ]
        data: salaryData.map(item => ({
          value: item.b_count,
          name:item.label
        }))
      },
      {
        name: '女生',
        type: 'pie',
        radius: ['20%', '30%'],
        center: ['50%', '70%'],
        // roseType: 'area',
        // itemStyle: {
        //   borderRadius: 8
        // },
        // data: [
        //   { value: 40, name: 'rose 1' },
        //   { value: 38, name: 'rose 2' },
        //   { value: 32, name: 'rose 3' },
        //   { value: 30, name: 'rose 4' },
        // ]
              data: salaryData.map(item => ({
          value: item.g_count,
          name:item.label
        }))
      }
    ]
    }
    myChart.setOption(option)
  }
  
  // 目标9:籍贯分布
   function renderProvince(provinceData){
    const dom = document.querySelector('#map')
    const myEchart = echarts.init(dom)
    const dataList = [
      { name: '南海诸岛', value: 0 },
      { name: '北京', value: 0 },
      { name: '天津', value: 0 },
      { name: '上海', value: 0 },
      { name: '重庆', value: 0 },
      { name: '河北', value: 0 },
      { name: '河南', value: 0 },
      { name: '云南', value: 0 },
      { name: '辽宁', value: 0 },
      { name: '黑龙江', value: 0 },
      { name: '湖南', value: 0 },
      { name: '安徽', value: 0 },
      { name: '山东', value: 0 },
      { name: '新疆', value: 0 },
      { name: '江苏', value: 0 },
      { name: '浙江', value: 0 },
      { name: '江西', value: 0 },
      { name: '湖北', value: 0 },
      { name: '广西', value: 0 },
      { name: '甘肃', value: 0 },
      { name: '山西', value: 0 },
      { name: '内蒙古', value: 0 },
      { name: '陕西', value: 0 },
      { name: '吉林', value: 0 },
      { name: '福建', value: 0 },
      { name: '贵州', value: 0 },
      { name: '广东', value: 0 },
      { name: '青海', value: 0 },
      { name: '西藏', value: 0 },
      { name: '四川', value: 0 },
      { name: '宁夏', value: 0 },
      { name: '海南', value: 0 },
      { name: '台湾', value: 0 },
      { name: '香港', value: 0 },
      { name: '澳门', value: 0 },
     ]
    //  循环遍历 dataList 拿到 dataList 每一项和 provinceData 做比较
     dataList.forEach(item => { 
      //  拿到 dataList 每一项的ame 和 provinceData 每一项的name做比较
      //  console.log(item.name)
       const res = provinceData.find(ele => {
         return ele.name.includes(item.name)
       })
       console.log(res) // 服务器返回的数据并且和 dataList对应的
      //  如果有数据,我需要让 dataList 的每一项的value 和provinceData的value一致
       if (res !== undefined) {
         item.value = res.value
       }
     })
     const max = Math.max(...dataList.map(item => item.value))
    const option = {
      title: {
        text: '籍贯分布',
        top: 10,
        left: 10,
        textStyle: {
          fontSize: 16,
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} 位学员',
        borderColor: 'transparent',
        backgroundColor: 'rgba(0,0,0,0.5)',
        textStyle: {
          color: '#fff',
        },
      },
      visualMap: {
        min: 0,
        max,
        left: 'left',
        bottom: '20',
        text: [max, '0'],
        inRange: {
          color: ['#ffffff', '#0075F0'],
        },
        show: true,
        left: 40,
      },
      geo: {
        map: 'china',
        roam: false,
        zoom: 1.0,
        label: {
          normal: {
            show: true,
            fontSize: '10',
            color: 'rgba(0,0,0,0.7)',
          },
        },
        itemStyle: {
          normal: {
            borderColor: 'rgba(0, 0, 0, 0.2)',
            color: '#e0ffff',
          },
          emphasis: {
            areaColor: '#34D39A',
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 20,
            borderWidth: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
      series: [
        {
          name: '籍贯分布',
          type: 'map',
          geoIndex: 0,
          data: dataList,
        },
      ],
    }
    myEchart.setOption(option)
  }
  
  