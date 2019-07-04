// components/w-cpn/w-cpn.js
Component({
  properties: {
    // title: String,
    title: {
      type: String,
      value: '标题'
    },
    content: {
      type: String,
      value: '我是默认内容'
    }
  },
  methods: {
    onBtnClick() {
      this.triggerEvent('cpnclick', {name: 'why', age: 18}, {})
    }
  }
})

