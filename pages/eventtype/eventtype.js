// pages/eventtype/eventtype.js
Page({
  data: {

  },
  onTouchStart(event) {
    console.log('开始触摸', event)
  },
  onTouchMove() {
    console.log('触摸移动')
  },
  onTouchEnd(event) {
    console.log('结束触摸', event)
  },
  onTouchCancle() {
    console.log('被取消触摸')
  },
  onTap(event) {
    console.log('点击事件', event)
  },
  onLongPress() {
    console.log('长按事件')
  },



  onInnerTap(event) {
    console.log('内部发生了点击', event)
  },
  onOuterTap(event) {
    console.log('外部发生了点击', event)
  }
})