import request from './service/network.js';

App({
  onLaunch() {
    request({
      url: 'http://123.207.32.32:8000/recommend'
    }).then(res => {
      console.log(res)
    }).catch(err => {

    })
  }
})
