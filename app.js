App({
  globalData: {
    name: 'kobe',
    age: 30
  },

  // 绑定生命周期函数
  // 只有冷启动时, 才会执行onLaunch, 热启动是不会执行
  onLaunch() {
    console.log('小程序启动: onLaunch')
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
        const nickName = res.userInfo.nickName;
        const avatarUrl = res.userInfo.avatarUrl;
        console.log('姓名:', nickName);
        console.log('头像:', avatarUrl);
      }
    })
  },
  onShow() {
    console.log('小程序显示: onShow')
  },
  onHide() {
    console.log('小程序隐藏: onHide')
  }
})
