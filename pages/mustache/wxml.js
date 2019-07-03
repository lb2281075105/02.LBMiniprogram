// pages/wxml/wxml.js
Page({
  data: {
    message: "你好啊,李银河",
    name: "李银河",
    age: 16,
    isActive: false
  },
  onChange() {
    console.log('按钮发生了点击')
    this.setData({
      isActive: !this.data.isActive
    })
  }
})