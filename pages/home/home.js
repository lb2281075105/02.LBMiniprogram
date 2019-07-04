// pages/home/home.js
Page({
  onLoad() {
    // // 1.没有参数的网络请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })

    // // 2.有参数的网络请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/home/data',
    //   data: {
    //     type: 'sell',
    //     page: 1
    //   },
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })

    // // 3.POST请求
    // wx.request({
    //   url: 'https://httpbin.org/post',
    //   data: {
    //     name: 'why',
    //     age: 18,
    //     height: 1.88
    //   },
    //   method: 'post',
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
  }
})