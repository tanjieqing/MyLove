var api = require('../../api/api.js');
var imageUtil = require('../../utils/util.js');
var app = getApp();
Page({
  data: {
    controls: [{
      id: 1,
      iconPath: '',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
    wx.openLocation({
      latitude: api.getLatitude(),
      longitude: api.getLongitude(),
      scale: 15,
      name: '',
      address: ''
    })
  },
  controltap(e) {
    console.log(e.controlId)
  },
  onLoad: function() {
    var that = this
    that.setData({
        //图片地址
        image8: api.image8,
        bridegroomname: api.bridegroom_name,
        bridename: api.bride_name,
        date_yang: api.date_yang,
        date_nong: api.date_nong,
        marry_addr: api.marry_addr
      }),
      that.saveUser()
  },
  imageLoad: function(e) {
    var imageSize = imageUtil.imageUtil(e)
    this.setData({
      imagewidth: imageSize.imageWidth,
      imageheight: imageSize.imageHeight
    })
  },
  //保存用户信息
  saveUser: function() {
    wx.request({
      url: api.mobileIn +'SAVE_USER',
      method: 'GET',
      data: {
        openId: app.globalData.openId,
        userInfo: app.globalData.userInfo,
        mark:api.mark
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    var that = this;
    return {
      title: '诚意邀请你参加我们的婚礼',
      imageUrl: api.image9,
      path: "pages/splash/splash",
      success: function(res) {
        wx.showToast({
          title: '分享成功',
        })
      },
      fail: function(res) {
        // 转发失败
        wx.showToast({
          title: '分享取消',
        })
      }
    }
  }
})