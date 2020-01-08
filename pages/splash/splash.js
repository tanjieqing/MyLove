var api = require('../../api/api.js');

//获取应用实例
var app = getApp();

Page({
  data: {
    remind: '加载中',
    help_status: false,
    userid_focus: false,
    passwd_focus: false,
    userid: '',
    passwd: '',
    angle: 0,
    logo: api.image7
  },
  onLoad: function () {
    var that = this
    that.setData({
      //图片地址
      wave: '../../image/wave.png',
      loading: '../../image/loading.gif'
    })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onReady: function () {
    var _this = this;
    setTimeout(function () {
      _this.setData({
        remind: ''
      });
    }, 1000);
    wx.onAccelerometerChange(function (res) {
      var angle = -(res.x * 30).toFixed(1);
      if (angle > 14) { angle = 14; }
      else if (angle < -14) { angle = -14; }
      if (_this.data.angle !== angle) {
        _this.setData({
          angle: angle
        });
      }
    });
  },
  btnEnter: function () {
    this.goHome()
  },
  //进入主页面
  goHome: function () {
    wx.switchTab({
      url: '../map/map'
    });
  },
  getUserInfo(e) {
    if (e.detail.errMsg === 'getUserInfo:ok') {
      console.log('获取用户信息成功')
      wx.showLoading({
        title: '加载中...',
      })
      app.globalData.userInfo = e.detail.rawData
      console.log('app.globalData.userInfo', app.globalData.userInfo)
    } else {
      console.log('fail', '获取用户信息失败')
      wx.showModal({
        title: '提示',
        content: '获取用户信息失败',
        showCancel: false,
        confirmColor: '#e2211c',
        success(res) {
        }
      })
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var that = this;
    return {
      title: '诚意邀请你参加我们的婚礼',
      imageUrl: api.image9,
      path: "pages/splash/splash",
      success: function (res) {
        wx.showToast({
          title: '分享成功',
        })
      },
      fail: function (res) {
        // 转发失败
        wx.showToast({
          title: '分享取消',
        })
      }
    }
  }
})