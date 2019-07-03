// pages/home/home.js
const app = getApp()

// 注册页面
Page({
  // ---------------- 初始化数据 -------------------
  data: {
    name: '',
    age: 0
  },
  // ---------------- 生命周期函数 -------------------
  onLoad() {
    console.log('页面加载: onLoad')
    // 1.发送网络请求
    wx.request({
      url: '',
      success: function (res) {

      }
    })

    // 2.将app中的global数据, 绑定到data中
    const name = app.globalData.name;
    const age = app.globalData.age;
    console.log(name);
    console.log(age);
    this.setData({
      name: name,
      age: age
    })
  },
  onShow() {
    console.log('页面展示: onShow')
  },
  onReady() {
    console.log('页面初次被渲染: onReady')
  },
  onHide() {
    console.log('页面隐藏: onHide')
  },
  onUnload() {
    console.log('页面卸载: onUnload')
  },

  // ---------------- 绑定事件函数 -------------------
  onBtnClick() {
    console.log('按钮发生了点击')
  },


  // ---------------- 绑定其他事件 -------------------
  onPullDownRefresh() {
    console.log('下拉刷新')
  }
})