// pages/userInfo/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        title: '我的订单',
        iconName: 'orders-o',
        type: 'order'
      },
      {
        title: '账户',
        iconName: 'balance-o',
        type: 'account'
      },
      {
        title: '卡券',
        iconName: 'credit-pay',
        type: 'credit'
      },
      {
        title: '地址管理',
        iconName: 'location-o',
        type: 'address'
      },
      {
        title: '消息通知',
        iconName: 'comment-o',
        type: 'message'
      },
      {
        title: '客服中心',
        iconName: 'service-o',
        type: 'service'
      }
    ],
    redirectUrl: {
      order: '../../pages/order/list/index',
      address: '../address/index',
      account: './account/index',
      credit: './credit/index',
      address: '../address/index'
    },
    dialog: {
      title: '标题',
      message: '确定退出登录?',
      show: false
    },
    userInfo: {
      userName:'Errorccccc',
      userImg: 'https://img.yzcdn.cn/vant/cat.jpeg'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  gotoPage (e) {
    console.log(e.target.dataset.type)
    const { type } = e.target.dataset
    wx.navigateTo({
      url: this.data.redirectUrl[type],
    })
  },
  // 退出登陆弹框
  loginOutDialog() {
    this.setData({
      dialog: {
        ...this.data.dialog,
        show: true
      }
    })
  },
  // 退出登录
  loginOut() {
    this.setData({
      userInfo:{
        userName: '登录/注册',
        userImg: ''
      }
    })
  },
  // 去登录
  login() {
    wx.navigateTo({
      url:'../../pages/loginType/index'
    })
  }
})