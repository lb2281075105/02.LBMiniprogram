// pages/home/home.js
Page({
  data: {
    isShow: true
  },
  cpnClick(event) {
    console.log('----------', event)
  },
  titleClick(event) {
    console.log(event.detail.index)
  },
  onRemove() {
    this.setData({
      isShow: false
    })
  }
})
