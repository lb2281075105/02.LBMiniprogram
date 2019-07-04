// pages/home/home.js
Page({
  data: {
    message: '哈哈哈'
  },
  onBtnClick() {
    wx.navigateTo({
      url: '../detail/detail?name=kobe&age=30',
    })
  }
})