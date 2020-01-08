//app.js
var api = require('/api/api.js');
var music_title = api.music_title;
var music_url = api.music_url;
var mark = api.mark;

const backgroundAudioManager = wx.getBackgroundAudioManager();
App({
  onLaunch: function() {
    backgroundAudioManager.title = music_title
    backgroundAudioManager.src = music_url
    
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate(function (res) {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
            wx.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              success: function (res) {
                if (res.confirm) {
                  updateManager.applyUpdate()
                }
              }
            })
          })
          updateManager.onUpdateFailed(function () {
            wx.showModal({
              title: '已经有新版本了哟~',
              content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
            })
          })
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }

  },
  onHide: function() {
    backgroundAudioManager.pause()
  },
  onShow: function() {
    backgroundAudioManager.play()
  },
  getUserInfo: function(cb) {
    var that = this
    //调用登录接口，获取code
    wx.login({
      success: function(res) {
        //发起网络请求
        wx.request({
          url: api.mobileIn + 'GET_OPENID',
          data: {
            code: res.code,
            mark: mark
          },
          method: 'GET',
          success: function(res) {
            // 将openId设成全局
            that.globalData.openId = res.data.openid
            console.log('res.data.openid', res.data.openid)
            that.globalData.flag = res.data.flag
            wx.getUserInfo({
              success: function(res) {
                // 将userInfo设成全局
                that.globalData.userInfo = res.userInfo
                // that.goHome()
                typeof cb == "function" && cb(that.globalData.userInfo, that.globalData.openId, that.globalData.user, that.globalData.flag)
              }
            })
          },
          fail: function(res) {},
          complete: function(res) {
            // that.goHome()
          }
        });
      }
    })
  },
  globalData: {
    userInfo: null,
    openId: null,
    user: null,
    flag: null
  }
})