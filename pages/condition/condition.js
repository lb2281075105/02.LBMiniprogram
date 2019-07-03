// pages/condition/condition.js
Page({
  data: {
    isShow: true,
    isHidden: false,
    score: 50,
    show: true
  },
  onToggle() {
    console.log('onToggle')
    this.setData({
      isShow: !this.data.isShow
    })
  },
  onIncrement() {
    this.setData({
      score: this.data.score + 5
    })
  },
  onHidden() {
    this.setData({
      isHidden: !this.data.isHidden
    })
  },
  onChange() {
    this.setData({
      show: !this.data.show
    })
  }
})