// pages/shangfangka/shangfangka.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show1: true,
    show2: false
  },


  box1: function () {
    console.log("enter box1");
  },
  box2: function () {
    console.log("enter box2");
  },
  box3: function () {
    console.log("enter box3");
  },
  box4: function () {
    console.log("enter box4");
  },

  startTest: function () {

    this.setData({
      show1: false,
      show2: true
    })
  },

  endTest: function () {
    this.setData({
      show1: true,
      show2: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.startTest();
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

  }
})