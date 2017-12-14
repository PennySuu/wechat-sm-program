//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isShowStar: true
  },
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    wx.request({
      url: 'http://localhost:3000/stars',
      data:{
        date:'1205'
      },
      success: function(res){
        console.log(res)
      }
    })
  },
  handleHideStar: function () {
    this.setData({
      isShowStar: false
    })
  },
  onPullDownRefresh: function () {
    wx.showToast({
      title: 'loading...',
      icon: 'loading'
    })
    wx.showNavigationBarLoading()
    console.log('onPullDownRefresh', new Date())
    setTimeout(function () {
      wx.stopPullDownRefresh({
        complete: function (res) {
          wx.hideToast()
          console.log(res, new Date())
        }
      })
      wx.hideNavigationBarLoading()
    }, 3000)
  },
  scroll: function (e) {
    console.log(e)
  }
})
