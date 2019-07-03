// pages/argument/argument.js
Page({
  data: {
    name: 'coderwhy',
    titles: ['衣服', '裤子', '鞋子']
  },
  onviewClick(event) {
    console.log(event)
    console.log(event.currentTarget.dataset.nickname)
    console.log(this.data.name)
  },
  onItemClick(event) {
    console.log(event)
    const title = event.currentTarget.dataset.title;
    const index = event.currentTarget.dataset.index;
    console.log(title, index)
  }
})
