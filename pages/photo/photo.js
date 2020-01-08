var api = require('../../api/api.js');
var imageUtil = require('../../utils/util.js');
Page({
  data: {
    //轮播图配置
    autoplay: true,
    interval: 3000,
    duration: 1200
  },
  onLoad: function() {
    var that = this;
    var data = {
      "datas": [{
          "id": 1,
          "imgurl": api.image1
        },
        {
          "id": 2,
          "imgurl": api.image2
        },
        {
          "id": 3,
          "imgurl": api.image3
        },
        {
          "id": 4,
          "imgurl": api.image4
        },
        {
          "id": 5,
          "imgurl": api.image5
        },
        {
          "id": 6,
          "imgurl": api.image6
        }
      ]
    };
    that.setData({
      lunboData: data.datas
    })
  },
  imageLoad: function(e) {
    var imageSize = imageUtil.imageUtil(e)
    this.setData({
      imagewidth: imageSize.imageWidth,
      imageheight: imageSize.imageHeight
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