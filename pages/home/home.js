Page({
  data: {
    name: 'Kobe',
    movies: ['星际穿越', '盗梦空间', '少年派', '大话西游'],
    counter: 0
  },
  onIncrement() {
    this.setData({
      counter: ++this.data.counter
    })
  },
  onDecrement() {
    this.setData({
      counter: --this.data.counter
    })
  }
})