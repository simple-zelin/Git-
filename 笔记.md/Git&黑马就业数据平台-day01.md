# Git

## 00.准备工作-gitee注册

> 今天Git的设置中需要用到`gitee`的注册信息，先自行完成注册工作，可以 **参考笔记** 或第二天视频（**10.Git远程仓库-概念和gitee使用准备**）

**传送门:**

1. gitee（码云）:https://gitee.com/

**注册+验证邮箱:**

1. 点击右上角的注册（注意: 姓名部分是昵称，**不是真实姓名**）

![image-20230427093727132](assets/image-20230427093727132.png)

2. 注册完毕之后登录，屏幕右上角会出现如下提示，点击**添加绑定**

![image-20230427093833393](assets/image-20230427093833393.png)

3. 在跳转的页面完成邮箱的**新增+验证操作**

![image-20230427093951936](assets/image-20230427093951936.png)

4. 看到如下提示，说明绑定成功

![image-20230427094022472](assets/image-20230427094022472.png)

5. 记住自己`gitee`的**邮箱**和**用户名**





## 01.认识及安装Git

> [版本控制系统](https://git-scm.com/book/zh/v2/起步-关于版本控制)[:](https://git-scm.com/book/zh/v2/起步-关于版本控制) 版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。
>
> [传送门:关于版本控制](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%85%B3%E4%BA%8E%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6)

**作用:**

1. 记录（项目）文件变化

2. 查看记录信息

3. 将文件切换到记录时的状态



**演示:**

1. 在素材中的:  **01.认识及安装Git**，已经使用`git`进行版本控制，可以用来演示**查看**，及**切换**

```bash
git log --oneline #查看
git reset --hard 版本号 #切换
```

![image-20230427094550807](assets/image-20230427094550807.png)



**安装-windows:** 

1. 下载: https://git-scm.com/download/win
2. 根据自己的电脑版本，下载对应的安装包(**32或64位**)

![image-20230427094804642](assets/image-20230427094804642.png)

3. 双击安装:
   1. **不要安装在中文目录！！！！！**
   2. **使用默认设置**即可，一路下一步
4. 安装完毕之后，在任意文件夹下鼠标右键，看到`Git Bash here`说明安装成功

![image-20230427094949547](assets/image-20230427094949547.png)

**安装-mac:**

1. 下载: https://git-scm.com/download/mac

![image-20230427095021017](assets/image-20230427095021017.png)

![image-20230427095035515](assets/image-20230427095035515.png)





2. 全部使用默认设置安装，如果出现无法安装提示:（**设置->隐私与安全性->仍要打开**），然后再次安装

![image-20230427095141425](assets/image-20230427095141425.png)

3. 安装完毕之后，在打开**终端**,输入`git --version`看到如下提示说明安装成功

![image-20230427095300820](assets/image-20230427095300820.png)



## 02.Git配置用户信息

> 安装完 Git 之后，要做的第一件事就是设置你的用户名和邮件地址。 因为每一个 Git 提交都会使用这些信息
>
> [传送门:初次运行的配置](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%88%9D%E6%AC%A1%E8%BF%90%E8%A1%8C-Git-%E5%89%8D%E7%9A%84%E9%85%8D%E7%BD%AE)

**步骤:**

1. window用户: 在任意位置打开**git bash**
2. mac用户: 在任意位置打开**终端**

3. 输入命令:（**#部分是注释**）

```bash
# 配置用户名
git config --global user.name "gitee注册的用户名"
# 配置邮箱
git config --global user.email gitee配置的邮箱
# 查看配置
git config --list
```

4. 如果配置信息太多需要退出可以输入 **q**



**终端使用补充:**

1. 上下,切换历史命令
2. **tab键** 出来一些提示,需要写一些东西,才有提示
3. **clear**:清屏命令



## 03.本地初始化Git仓库

> [文档地址](https://git-scm.com/book/zh/v2/Git-基础-获取-Git-仓库)[:](https://git-scm.com/book/zh/v2/Git-基础-获取-Git-仓库) 通常有两种获取 Git 项目仓库的方式
>
> 1. 将 尚未进行版本控制 的本地目录 转为 Git仓库（初始化仓库）
>
> 2. 从其他服务器 克隆 一个已存在的Git仓库

步骤: 

1. 创建新文件夹并在该文件夹下打开: 

   1. windows:
      1. 进入文件夹
      2. 在文件夹中点击**鼠标右键**，选择`git bash here`打开

   2. mac: 

      1. 在文件夹上点击鼠标右键-选择 **新建位于文件夹位置的终端窗口**

      ![image-20230427100241831](assets/image-20230427100241831.png)

2. 输入命令 **git init**，看到有如下信息（**下图1**）输出说明初始化成功,重复输入会有提示（**下图2**）

![image-20230427100401269](assets/image-20230427100401269.png)



![image-20230427100623402](assets/image-20230427100623402.png)

3. 文件夹下可以看到有一个隐藏的**.git** 文件夹，**不要改动他**
   1. mac用户可以通过快捷键: **Command + Shift + .** 切换隐藏文件的显示

![image-20230427100444315](assets/image-20230427100444315.png)

## 04. 记录每次更新到仓库

> [文档地址](https://git-scm.com/book/zh/v2/Git-基础-记录每次更新到仓库)[:](https://git-scm.com/book/zh/v2/Git-基础-记录每次更新到仓库)每当完成了一个阶段的目标，想要记录下它时，就将它提交到仓库。

![image-20230427100718256](assets/image-20230427100718256.png)

**步骤:** 

1. 工作区开发（**上一节创建的文件夹内**）

2. 将修改后的文件添加到暂存区

3. 将暂存区的文件记录到版本库
4. 执行命令的时候可以看到下图类似的提示

```bash
# 添加到暂存区
git add .
# 记录到版本库
git commit -m"信息"
```

![image-20230427100857607](assets/image-20230427100857607.png)





### 需求: 

![image-20230427101024093](assets/image-20230427101024093.png)

实现页面效果，并用Git记录每一次操作

**参考步骤:** 

1. 创建新文件夹并初始化仓库

2. 创建首页并添加结构（**Git记录**）

3. 创建css并编写样式（**Git记录**）

4. 创建js并编写逻辑（**Git记录**）

**重复:** 工作区开发 **-->** 添加到暂存区 git add . **-->** 记录到版本库 git commit -m"信息"



## 05. 查看及切换历史版本

> 使用git记录到版本库之后，就可以查看并切换到对应的历史版本

命令: 

1. 命令执行的位置，就在上一节打开的**终端**，或**git bash**中
2. 核心命令如下

```bash
# 简略信息
git log --oneline
# 完整信息，如果出现无法退出，可以按 q
git log
# 切换到指定版本
git reset --hard 版本号
```

3. 拓展命令

```bash
# 查看完整历史（版本切换之后git log可能会出现无法查看的情况）
git reflog
```



**测试:** 

1. 使用上一节完成的需求，测试本节的命令





## 06. Git忽略文件和查看文件状态

> [文档地址](https://git-scm.com/book/zh/v2/Git-基础-记录每次更新到仓库)[:](https://git-scm.com/book/zh/v2/Git-基础-记录每次更新到仓库) 我们总会有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。 通常都是些自动生成的文件，比如日志文件，或者编译过程中创建的临时文件等。 在这种情况下，我们可以创建一个名为 .gitignore 的文件，列出要忽略的文件

测试步骤: 

```bash
# 查看文件状态
git status
```

1. 红色: 工作区有文件更改

2. 绿色: 暂存区有文件更改

3. nothing to commit: 没有任何文件更改

![image-20230427101604582](assets/image-20230427101604582.png)

![image-20230427101622748](assets/image-20230427101622748.png)



 `.gitignore` 部分语法:

1. 项目开发中，一般都会默认准备好`.gitignore`文件，了解基础语法即可

```bash
# 这里演示的部分语法
# #之后的内容是注释 会被Git忽略
# 忽略 info.txt 文件
info.txt
# 忽略 .vscode/ 目录下所有的文件
.vscode
# 忽略目录下所有.md结尾的文件
*.md
# 会忽略 doc/目录下扩展名为txt的文件
doc/*.txt
```



### 需求:

修改**VSCode**工作区设置，设置失去焦点时自动保存文件，并通过 .gitignore 让Git忽略工作区设置

 ![image-20230427101843305](assets/image-20230427101843305.png)

![image-20230427101924752](assets/image-20230427101924752.png)

1. 创建新文件夹并初始化仓库，VSCode打开文件夹（**git status**）

2. 调整VSCode工作区设置，开启失去焦点自动保存文件并测试（ **git status** ）

3. 创建 `.gitignore` 并配置忽略生成的工作区设置（ **git status** ）

4. 使用Git记录，记录的过程中查看文件状态

**注意**: 后续如果没有特殊说明，**git bash**，**终端**的打开位置就是当前文件夹，



## 07.Git分支-查看及切换

> [文档地址](https://git-scm.com/book/zh/v2/Git-分支-分支简介)[:](https://git-scm.com/book/zh/v2/Git-分支-分支简介) 使用分支意味着你可以把你的工作从开发主线上分离开来，以免影响开发主线。

![image-20230427102055497](assets/image-20230427102055497.png)

**图形说明:** 

1. 底部蓝色是记录的信息，**从左往右**
2. **main**，默认分支，初始化仓库之后就有
3. **HEAD**，指向当前分支 **main**

![image-20230427102429055](assets/image-20230427102429055.png)

**图形说明:** 

1. 底部是记录的信息，**从左往右**
2. **main**，默认分支，只记录了3次

![image-20230427102524076](assets/image-20230427102524076.png)

3. **dev**,开发分支，包含了**main**的3次记录，及自己的3次记录

![image-20230427102557893](assets/image-20230427102557893.png)

4. **HEAD**，指向当前分支 **dev**



**注意:** Git初始化仓库之后默认使用的分支名是 main（早期是 master），默认分支名不相同，不影响后续操作



**操作命令:**

可以通过素材:  **07.Git分支-查看和切换分支** 测试如下命令

```bash
# 查看分支
git branch
# 切换分支
git checkout 分支名
# 重命名分支 ，如果默认是master，可以通过这个命令改为main
git branch -m 老分支 新分支
```

## 08. Git分支-创建分支

> 创建分支就是创建了一个新的可以移动的指针，默认的指向和原分支一样

**操作命令:** 

```bash
# 创建分支
git branch 新分支名
# 切换分支
git checkout 分支名

# 这些是上一节学习的
# 查看分支
git branch
# 切换分支
git checkout 分支名
# 重命名分支 ，如果默认是master，可以通过这个命令改为main
git branch -m 老分支 新分支
```

**操作说明:** 

1. 比如默认仓库状态如下: 
   * 1个分支: **main**
   * 提交: 3次
   * 当前所在分支:**main**

![image-20230427103155837](assets/image-20230427103155837.png)

2. 执行命令: `git branch dev`

   * 2个分支: **main**，**dev**
   * 提交: 3次
   * 当前所在分支: **main**

   ![image-20230427103342698](assets/image-20230427103342698.png)

3. 执行命令: `git checkout dev`
   * 2个分支: **main**，**dev**
   * 提交: 3次
   * 当前所在分支: **dev**

![image-20230427103250894](assets/image-20230427103250894.png)

4. 在dev分支，继续: **编码-->git记录（git add . git commit -m"信息"）**，并重复3次
   1. 2个分支: **main**，**dev**
   2. 提交: 3次（**main**），6次（**dev**，包含了**main**的
   3. 当前所在分支: **dev**

![image-20230427103517164](assets/image-20230427103517164.png)



**需求:** 

基于提供的Git仓库（素材: **08.Git分支-创建分支**），创建并切换到新的分支（dev），并实现如下效果，**注: 布局，样式，逻辑实现基本效果即可**

![image-20230427103721742](assets/image-20230427103721742.png)

**参考步骤:**

1. 创建并切换分支（dev）

2. 实现注册页布局、样式、逻辑，并记录











## 09.Git分支-合并及删除分支

> 合并分支可以将某个分支上的所有`commit`，并到当前分支的`commit`
>
> 合并完毕之后，可以**删除**多余分支

操作命令: 

```bash
# 将指定分支合并到当前分支
git merge 分支名
# 删除已合并的分支
git branch -d 分支名

# 这些是目前学习的分支相关命令
# 创建分支
git branch 新分支名
# 切换分支
git checkout 分支名
# 查看分支
git branch
# 切换分支
git checkout 分支名
# 重命名分支 ，如果默认是master，可以通过这个命令改为main
git branch -m 老分支 新分支
```

**操作说明:**

1. 上一节的仓库操纵完毕之后状态如下:
   * 2个分支: **main**，**dev**
   * 提交: 3次(**main**)，6次（**dev**）
   * 当前所在分支:**dev**

![image-20230427104343678](assets/image-20230427104343678.png)

2. 执行命令:`git checkout main`
   1. 2个分支: **main**，**dev**
   2. 提交: 3次(**main**)，6次（**dev**）
   3. 当前所在分支:**main**

![image-20230427104437983](assets/image-20230427104437983.png)

3. 执行命令:`git merge dev`
   1. 2个分支: **main**，**dev**
   2. 提交: 6次(**main**)，6次（**dev**）
   3. 当前所在分支:**main**

![image-20230427104519767](assets/image-20230427104519767.png)

4. 执行命令`git branch -d dev`
   1. 1个分支: **main**
   2. 提交: 6次(**main**)
   3. 当前所在分支:**main**

![image-20230427104600077](assets/image-20230427104600077.png)



### 需求: 

将上一节Git仓库中的 dev 分支 合并到 main 分支，并删除 dev 分支

**参考步骤:**

1. 切换到main分支

2. 合并dev分支

3. 删除dev分支

![image-20230427104735124](assets/image-20230427104735124.png)



## 10.Git分支-命令补充

> 除了目前学习的命令以外，在日常开发中还有一些分支操纵较为常见的命令

下图是常见命令，标红部分为本节补充的

| 操作              | 命令                              |
| ----------------- | --------------------------------- |
| 查看分支          | git  branch                       |
| 创建分支          | git  branch 新分支名              |
| 切换分支          | git  checkout 分支名              |
| **创建+切换分支** | git checkout –b 新分支名          |
| 合并分支          | git  merge 分支名                 |
| 删除分支          | git  branch –d 分支名             |
| **强制删除分支**  | git branch –D 分支名              |
| 重命名分支        | git  branch –m 老分支名  新分支名 |

### 需求:

基于提供的Git仓库（main分支+3次commit），测试 补充的命令（素材: ）

![image-20230427105133927](assets/image-20230427105133927.png)

**参考步骤:**

1. 创建并切换到**test**分支

2. 写2个功能，比如注册页布局、样式并记录（**仓库状态如下**）

![image-20230427105116703](assets/image-20230427105116703.png)



3. 切换到main分支，并**强制删除test分支**(**仓库状态如下**)

![image-20230427105133927](assets/image-20230427105133927.png)



## 11.Git分支-冲突

> [文档地址](https://git-scm.com/book/zh/v2/Git-分支-分支的新建与合并)[: ](https://git-scm.com/book/zh/v2/Git-分支-分支的新建与合并)如果你在两个不同的分支中，对同一个文件的同一个部分进行了不同的修改，Git 就没法干净的合并它们。 

**操作说明:**

1. 执行命令`git branch -d dev`
   1. 2个分支: **main**，**dev**
   2. 提交: 
      1. 4次(**main**):前3次和**dev**相同，第4次改了**文件A**,修改方式和**dev分支不同**
      2. 4次(**dev**):前3次和**main**相同，第4次改了**文件A**,修改方式和**main分支不同**
   3. 当前所在分支:**main**

![image-20230427105243431](assets/image-20230427105243431.png)

2. 执行命令`git merge dev`合并**dev**到**main**分支
  1. 2个分支: **main**，**dev**
  2. 提交: 
     1. 5次(**main**):前3次和**dev**相同，第4次改了**文件A**，第5次合并之后处理冲突的记录
     2. 4次(**dev**):前3次和**main**相同，第4次改了**文件A**,修改方式和**main分支不同**
  3. 当前所在分支:**main**

![image-20230427105436456](assets/image-20230427105436456.png)



### 需求:

基于提供的Git仓库（素材: **11.Git分支-冲突**）和参考步骤测试合并时出现的冲突，解决冲突并记录

**参考步骤:**

1. 分别在在**dev**和**main**分支修改**index.js**文件（不同分支，相同文件，相同位置，不同修改）

2. 将**dev**分支合并到**main**分支

3. 根据**VSCode**的提示解决冲突**并记录！！！！！！！！！**
   1. 可以选择顶部那一排选项
   2. **1-3**选了之后可以用`ctrl+z`撤销
   3. **4**,选了之后会弹出新的页面，对比新旧修改，可以关闭

![image-20230427110036980](assets/image-20230427110036980.png)



# 黑马就业数据平台

## 12.项目演示

> 4个页面，包含了管理类项目的核心业务

![image-20230427110427108](assets/image-20230427110427108.png)





## 13.项目初始化

> 完成初始化操作

**需求:**

1. 初始化Git仓库，整合提供的模板代码并记录

2. 创建并切换到 **dev** 分支



**参考步骤:**

1. 新建文件夹: **黑马就业数据平台**
2. 在文件夹下打开:**git bash** 或 **终端**输入命令`git init`
3. 拷贝素材（**黑马就业数据平台-基础模板**）内的所有内容 到项目文件夹下:

![image-20230427110918353](assets/image-20230427110918353.png)

4. git记录:

```bash
git add .
git commit -m"初始化"
```

5. 创建并切换到**dev**分支:

```bash
git checkout -b dev
```







## 14.项目目录

> 一起确认一下项目结构

![image-20230427111034842](assets/image-20230427111034842.png)

1. 公共逻辑写在 common.js

2. 页面逻辑写在 js目录下的同名js文件



## 15. 配置axios基地址

> [文档地址](http://www.axios-js.com/zh-cn/docs/)[:](http://www.axios-js.com/zh-cn/docs/) baseURL 将自动加在 url 前面，除非 url 是一个绝对 URL。它可以通过设置一个 baseURL 便于为 axios 实例的方法传递相对 URL

![image-20230427111132614](assets/image-20230427111132614.png)

**配置方法:**

```javascript
// 设置基地址
axios.defaults.baseURL = 'https://hmajax.itheima.net'

// 调用接口可以省略配置的部分，比如
axios({
    url:'/login' // 最终会解析为 https://hmajax.itheima.net/login
})
```

### 需求:

项目中配置 axios基地址，简化后续URL设置（**Git记录**）

**参考步骤:**

1. `common.js`中添加

```javascript
// 设置基地址
axios.defaults.baseURL = 'https://hmajax.itheima.net'
```

2. `register.js`中测试

```javascript
axios({
  url: '/register',
  method: 'post',
  data: {
    username: 'itheima666',
    password: '123456'
  }
})
```

3. git记录

```bash
git add .
git commit -m"配置axios基地址"
```



## 16.抽取轻提示函数

> 后续多个页面都会用到**轻提示**，抽取为函数

### 需求:

抽取轻提示函数，方便后续调用（Git记录）

```javascript
// 任何页面调用函数 即可显示提示信息
showToast('提示信息')
```





**参考步骤:**

1. `common.js`添加函数，并测试调用

```javascript
// 抽取轻提示函数
function showToast(msg) {
  const toastDom = document.querySelector('.my-toast')
  // 实例化toast组件
  const toast = new bootstrap.Toast(toastDom)
  // 修改内容并显示
  document.querySelector('.toast-body').innerText = msg
  toast.show()
}
```

**注:** 所有页面都准备好了**轻提示**的结构

```html
  <div class=" toast bg-rgba my-toast" data-bs-delay="1500">
    <div class="toast-body">提示消息</div>
  </div>

```

2. git记录:

```bash
git add .
git commit -m"抽取轻提示函数"
```







## 17.用户注册

> 接下来完成用户注册功能

### 核心步骤:

1. 收集并校验数据
2. 提交数据



### axios的别名方法:

1. 除了`axios()`函数以外，`axios`也提供了一些别名方法，通过方法名来替代`method`属性

```javascript
// axios函数+对象写法
axios({
  url: 'url地址',
  method: 'post',
  data:{key:'value'}
})
// 等同于
// axios别名方法（简化方法）
// 参数1 url
// 参数2 对应到data属性
axios.post('url地址', { key: 'value'})

```



**参考步骤:**

1. `register.js`中添加如下逻辑

```javascript
/**
 * 用户注册
 *  1. 收集并校验数据
 *  2. 数据提交
 * */
document.querySelector('#btn-register').addEventListener('click', async () => {
  // 1. 收集并校验数据
  const form = document.querySelector('.register-form')
  const data = serialize(form, { empty: true, hash: true })
  // console.log(data)
  const { username, password } = data
  console.log(username, password)
  // 非空校验
  if (username === '' || password === '') {
    showToast('用户名和密码不能为空')
    return
  }

  // 长度校验
  if (username.length < 8 || username.length > 30 || password.length < 6 || password.length > 30) {
    showToast('用户名的长度为8-30,密码的长度为6-30')
    return
  }

  // 2. 数据提交
  try {
    // .post 请求方法 post，参数1:请求URL，参数2:提交的数据
    const res = await axios.post('/register', { username, password })
    // console.log(res)
    showToast(res.message)
  } catch (error) {
    // console.dir(error)
    showToast(error.response.data.message)
  }


})
```

2. git记录

```bash
git add .
git commit -m"用户注册"
```





## 19.用户登录

> 接下来完成用户登录功能，和注册类似

### 核心步骤:

1. 收集并校验数据
2. 提交数据
3. 缓存响应数据（**后续逻辑要用**）
4. 跳转首页

**参考步骤:**

1. `login.js`

```javascript
/**
 * 用户登录
 *  1. 收集并校验数据
 *  2. 提交数据
 *  3. 缓存响应数据
 *  4. 跳转首页
 * */
document.querySelector('#btn-login').addEventListener('click', async () => {
  // 1. 收集并校验数据
  const form = document.querySelector('.login-form')
  const data = serialize(form, { empty: true, hash: true })
  console.log(data)
  const { username, password } = data
  // 非空判断
  if (username === '' || password === '') {
    showToast('用户名和密码不能为空')
    return
  }

  // 格式判断
  if (username.length < 8 || username.length > 30 || password.length < 6 || password.length > 30) {
    showToast('用户名长度8-30，密码长度6-30')
    return
  }

  // 2. 提交数据
  try {
    const res = await axios.post('/login', { username, password })
    // console.log(res)
    showToast(res.message)
    // 3. 缓存响应数据
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('username', res.data.username)
    // 4. 跳转首页
    // 延迟一会在跳转，让提示框显示
    setTimeout(() => {
      // login.html和index.html的相对关系
      location.href = './index.html'
    }, 1500)

  } catch (error) {
    // console.dir(error)
    showToast(error.response.data.message)
  }

})
```

2. git记录:

```bash
git add .
git commit -m"用户登录
```







# 作业-配置SSH

> 根据 [文档](https://gitee.com/help/articles/4181) 或 视频（第二天:  **15.Git远程仓库-配置SSH**） 配置SSH

1. **SSH**是一种网络协议，用于计算机之间的加密登录

2. **配置完成**之后推送不需要输入用户名和密码







# 参考文档

1. [菜鸟教程-git教程](https://www.runoob.com/git/git-tutorial.html)
2. [Pro-git 官方图书](https://git-scm.com/book/zh/v2)

3. [axios中文文档](https://www.axios-http.cn/)



# 更多扩展

### git全局配置-删除

1. git全局配置删除命令

   > user.name 可以视情况删除哪个自己选

   ```bash
   git config --unset --global user.name
   ```



### vscode中文件右侧标记

> 一般打开一个包含git仓库的文件夹时, 会有这些标记

![image-20220625155941259](assets/image-20220625155941259.png)

```js
右侧没有标记的时候为“未修改” 或 此文件/文件夹, 被git忽略不跟踪变化
M为“已修改”
A为“已添加”
D为“已删除”
R为“已重命名”
C为“已复制”
U为“已更新但为融合”
```

### 额外命令

| 命令                 | 作用                                                         | 危险程度 |
| -------------------- | ------------------------------------------------------------ | -------- |
| git restore 目标文件 | git还原 (会把"工作区"恢复到上次提交的时候), 并删除刚写的所有代码(无法找回) | 非常危险 |



### git版本回退更多

1. 如下命令

   ```bash
   # 除了找到对应版本号之外, 我们还可以用内置的代号
   # 回退到  "最近一次提交"   (但是要注意如果你已经回退了, 是回不到未来的, 回到未来需要指定版本号数字字母)
   git reset --hard head~0
   # 回退到  "上一次提交"
   git reset --hard head~1
   # 回退到  "上上次提交"
   git reset --hard head~2
   
   # 想退多少次, 先用git log --oneline 打印后根据注释信息, 自己数下回退几次 head~后面写几
   ```

2. 以上命令还有个写法

   ```bash
   # 回退到  "上一次提交"
   git reset --hard head^
   # 回退到  "上上次提交"
   git reset --hard head^^
   
   # 如果回退的太远, 一百个往前, 你不能写一百个^吧,  还是写head~个数吧
   ```

### git版本回退-更优解

reset其实会把未来的丢失掉, 如果推到远程仓库可能会有问题 (看下面情况做吧), 但是其实保证大家维护的同一个项目工程都是最新代码即可

[稀土掘金-git reset 和 git revert](https://juejin.cn/post/6844903614767448072)

```js
如果已经有A -> B -> C，想回到B：

方法一：reset到B，丢失C：

A -> B

方法二：再提交一个revert反向修改，变成B：

A -> B -> C -> B

C还在，但是两个B是重复的

看你的需求，也许C就是瞎提交错了（比如把密码提交上去了），必须reset

如果C就是修改，现在又要改回来，将来可能再改成C，那你就revert
```







### git常用忽略配置

**注意:** 项目中一般都会默认配置好。了解即可

```bash
.DS_Store
node_modules/
dist/

npm-debug.log*
yarn-debug.log*
yarn-error.log*
package-lock.json
yarn.lock
mock

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln

```





