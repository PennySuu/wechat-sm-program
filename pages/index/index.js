//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isShowStar: true,
    stars: [],
    history: null,
    birthday: []
  },
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad(options) {
    const host = 'http://localhost:3000'
    wx.request({
      url: `${host}/stars`,
      data: {
        date: '1205'
      },
      success: (res) => {
        this.setData({
          stars: res.data
        })
      }
    })
    wx.request({
      url: `${host}/history`,
      data: {
        date: '1205'
      },
      success: res => {
        this.setData({
          history: res.data[0]
        })
      }
    })
    wx.request({
      url: `${host}/birthday`,
      success: res => {
        this.setData({
          birthday: res.data
        })
      }
    })
  },
  /**
 * 生命周期函数--监听页面初次渲染完成
 */
  onReady: function () {
    console.log(this.data)
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
