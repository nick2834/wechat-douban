//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    movies: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this;
    //调用应用实例的方法获取全局数据
    var url = "https://api.douban.com/v2/movie/in_theaters";
    wx.request({
      url:url,
      method:"GET",
      header:{
        "Content-Type": "json"
      },
      success:function(res){
        console.log(res.data.subjects)
        that.setData({
          movies: res.data.subjects
        })
      }
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  viewDetail: function (e) {
    //储存全局的id值
    var film = e.currentTarget;
    console.log(film)
    wx.navigateTo({
      url: '../detail/detail?id=' + film.id
    })
  }
})
