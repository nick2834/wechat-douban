var app = getApp()

Page({
  data: {
    film: {},
    showLoading: true,
    options: null
  },
  onLoad: function (options) {
    console.log(options)
    wx.setNavigationBarTitle({
      title: '',
    })
    var that = this
    wx.request({
      url: 'https://api.douban.com/v2/movie/subject/' + options.id,
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        var data = res.data
        that.setData({
          film: data,
          showLoading: false
        })
      }
    })
  }
})
