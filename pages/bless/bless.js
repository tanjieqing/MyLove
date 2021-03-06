// pages/bless/index.js
var api = require('../../api/api.js');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    inputValue: '',
    zanNum: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
    var that = this

    wx.getUserInfo({
        success: function(res) {
          that.setData({
            userInfo: res.userInfo
          })

          //console.log(res.userInfo)
        }
      }),
      that.getPraiseList(),
      that.getCommentList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },
  bindKeyInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    var that = this;
    that.getPraiseList(),
      that.getCommentList()
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },
  // 获取评论列表
  getCommentList: function() {
    var that = this
    wx.request({
      url: api.mobileIn + 'GET_COMMENT',
      method: 'GET',
      data: {
        mark: api.mark
      },
      success: function(res) {
        //console.log(res.data)
        that.setData({
          chatList: res.data
        });
      }
    })
  },
  // 获取赞列表
  getPraiseList: function() {
    var that = this
    wx.request({
      url: api.mobileIn + 'GET_PRAISE',
      method: 'GET',
      data: {
        mark: api.mark
      },
      success: function(res) {
        wx.hideToast()
        if (200 == res.statusCode) {
          //console.log(res.data)
          //更新数据
          that.setData({
            zanLog: res.data
          })
        }
      },
    })
  },
  loadMoreFriends: function(e) {
    wx.navigateTo({
      url: 'blessDetail/blessDetail'
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    var that = this;
    //console.log(that.data);
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
  },
  zan: function(event) {
    var that = this;

    var userInfo = that.data.userInfo;
    //console.log(userInfo)

    wx.request({
      url: api.mobileIn + 'SAVE_PRAISE',
      data: {
        'openId': app.globalData.openId,
        'mark': api.mark
      },
      method: "GET",
      dataType: "json",
      success: res => {
        if (200 == res.statusCode) {
          //console.log(res.data)
          that.getPraiseList()
          wx.showModal({
            title: '提示',
            content: res.data,
            showCancel: false
          })
        }
      }
    })
  },
  foo: function() {
    var that = this;
    if (that.data.inputValue) {
      //留言内容不是空值

      var userInfo = that.data.userInfo;
      var words = that.data.inputValue;
      wx.request({
        url: api.mobileIn + 'SAVE_COMMENT',
        data: {
          'comment': words,
          'openId': app.globalData.openId,
          'mark': api.mark
        },
        method: "GET",
        dataType: "json",
        success: res => {
          if (200 == res.statusCode) {
            //console.log(res.data)
            that.getCommentList()
            wx.showModal({
              title: '提示',
              content: res.data,
              showCancel: false
            })
          }
        }
      })
    } else {
      //Catch Error
      wx.showModal({
        title: '提示',
        content: '您还没有填写内容',
        showCancel: false
      })
    }
    that.setData({
      inputValue: '' //将data的inputValue清空
    });
    return;
  }
})