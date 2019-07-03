// pages/input/input.js
Page({
  data: {
    name: "coderwhy"
  },
  onInput(e) {
    console.log('用户输入内容:', e)
  },
  onFocus(e) {
    console.log('获取焦点', e)
  },
  onBlur(e) {
    console.log('失去焦点', e)
  },
  onConfirm() {
    console.log('点击了键盘上的确定按钮')
  }
})