Page({

  /**
   * 页面的初始数据
   */
  data: {
    openTypeTab:false,
    openStyleTab:false,
    openAreaTab: false,
    openBudgetTab: false,
    needAnimation:false,
    selected: false,
    selected1: false,
    selected2: false,
    itemId:0,
    houseTypeList:[
      { name: '全部' },
      { name: '一居' },
      { name: '二居' },
      { name: '三居' },
      { name: '四居' },
      { name: '小户型' },
      { name: '复式' }
    ],
    houseStyleList: [
      { name: '全部' },
      { name: '欧式' },
      { name: '中式' },
      { name: '东南亚' },
      { name: '美式' },
      { name: '田园' },
      { name: '地中海' },
      { name: '现代' },
      { name: '日式' },
      { name: '宜家' },
      { name: '北欧' },
      { name: '混搭' },
      { name: '法式' }
    ],
    houseAreaList: [
      { name: '不限' },
      { name: '60m^2' },
      { name: '60-80m^2' },
      { name: '80-100m^2' },
      { name: '100-120m^2' },
      { name: '120-150m^2' },
      { name: '150m^2以上' }
    ],
    houseBudgetList: [
      { name: '不限' },
      { name: '3万以下' },
      { name: '3-5万' },
      { name: '5-8万' },
      { name: '8-12万' },
      { name: '12-18万' },
      { name: '18-30万' },
      { name: '30-100万' },
      { name: '100万以上' }
    ],
    caseContent:[
      {
        id: "0",
        avatar: "头像",
        name: "佳时特装饰",
        imgUrl: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg",
        style:"复古风",
        detail:"275平米/别墅豪宅/中式"
      },
      {
        id: "1",
        avatar: "头像",
        name: "巨意集成墙",
        imgUrl: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3117970199,3274104085&fm=26&gp=0.jpg",
        style: "民治寺小姐",
        detail: "118平米/三居/中式"
      },
      {
        id: "2",
        avatar: "头像",
        name: "乐峰精装",
        imgUrl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2208783767,449492249&fm=26&gp=0.jpg",
        style: "观壹城-新中式",
        detail: "98平米/三居/中式"
      },
      {
        id: "3",
        avatar: "头像",
        name: "深圳名家设计",
        imgUrl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=389124266,894117068&fm=26&gp=0.jpg",
        style: "张先生雅居",
        detail: "120平米/二居/北欧"
      }
    ]
  },
  onhouseTypeClick:function(){
    console.log("点击了户型")
    this.setData({openTypeTab: !this.data.openTypeTab})
    this.setData({
      selected1: true,
      selected2: false,
      selected3: false,
      selected4: false
    })
  },
  onhouseStyleClick: function () {
    console.log("点击了风格")
    this.setData({ openStyleTab: !this.data.openStyleTab })
    this.setData({
      selected1: false,
      selected2: true,
      selected3: false,
      selected4: false
    })
  },
  onhouseAreaClick: function () {
    console.log("点击了面积")
    this.setData({ openAreaTab: !this.data.openAreaTab })
    this.setData({
      selected1: false,
      selected2: false,
      selected3: true,
      selected4: false
    })
  },
  onhouseBudgetClick: function () {
    console.log("点击了预算")
    this.setData({ openBudgetTab: !this.data.openBudgetTab })
    this.setData({
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: true
    })
  },
  alltextClick:function(){
    var that=this;
    var ids = e.currentTarget.dataset.id;
    that.setData({ itemId: ids, openTab: !this.data.openTab});
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
    
  }
})