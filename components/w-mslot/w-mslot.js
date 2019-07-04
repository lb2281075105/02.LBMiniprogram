// components/w-mslot/w-mslot.js
Component({
  // ------------------ 1.properties ------------------
  // 作用: 在使用组件时, 可以通过properties中定义的属性, 传入数据
  properties: {
    title: String,
    content: {
      type: String,
      value: 0
    }
  },

  // ------------------ 2.data ------------------
  // 作用: 定义组件内部的数据
  data: {
    currentIndex: 0
  },


  // ------------------ 3.options ------------------
  // 作用: 对自定义组件, 进行一些额外的设置
  options: {
    multipleSlots: true
  },


  // ------------------ 4.methods ------------------
  // 作用: 定义组件内部的方法
  methods: {
    test() {

    },
    onItemClick(event) {

    },
    // 私有函数
    _foo() {

    }
  },


  // ------------------ 5.监听页面的生命周期 ------------------
  pageLifetimes: {
    show() {
      console.log('所在的页面显示出来')
    },
    hide() {
      console.log('所在的页面隐藏起来')
    }
  },


  // ------------------ 6.监听组件自身的生命周期 ------------------
  lifetimes: {
    created() {
      console.log('组件被创建出来会执行')
    },
    attached() {
      console.log('组件被添加到页面中会执行')
    },
    ready() {
      console.log('组件渲染出来会执行')
    },
    detached() {
      console.log('组件被移除掉')
    }
  }
})
