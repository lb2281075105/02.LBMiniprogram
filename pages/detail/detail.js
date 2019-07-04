// pages/detail/detail.js
Page({
  data: {
    name: '',
    age: 0
  },
  onLoad: function (options) {
    console.log(options.name);
    this.setData({
      name: options.name,
      age: options.age
    })
  },
  // 用户的返回: 很多中方式
  // 什么时候执行? 
  onUnload() {
    // 携带参数, 返回给首页
    // 如何携带参数? 返回时是不能携带参数, 只能直接拿到上一页(首页)页面对象, 对内部的数据进行修改
    // 1.拿到上一页的页面对象
    const pages = getCurrentPages() // 获取当前所有的页面
    const prePage = pages[pages.length-2] // 拿到上一页的页面对象

    // 2.修改上一页页面对象中的data即可
    prePage.setData({
      message: '你好啊,李银河'
    })
  },
  onBack() {
    wx.navigateBack({
      delta: 1
    })
  }
})
