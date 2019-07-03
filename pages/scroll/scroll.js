// pages/scroll/scroll.js
Page({
  onScrollTop() {
    console.log('滚动到顶部')
  },
  onScrollBottom() {
    console.log('滚动到底部')
  },
  onScroll(e) {
    console.log('正在滚动:', e)
  }
})