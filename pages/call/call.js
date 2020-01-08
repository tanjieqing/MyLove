var api = require('../../api/api.js')
Page({
  data: {
    phonehe: api.iphone_bridegroom,
    phoneshe: api.iphone_bride
  },
  callhe: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.phonehe
    })
  },
  callshe: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.phoneshe
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var that = this;
    //console.log(that.data);
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