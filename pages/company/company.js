
var animation;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color:"",
    animationData:{},
    partList:[
      {
        id:"0",
        avatar:"头像",
        name:"佳时特装饰",
        case:"案例：2375",
        site:"工地：9413" ,
        pay1:"免息分期",
        pay2: "装修分期",
        pay3:"先施工后付款",
        imgUrl: "http://img2.imgtn.bdimg.com/it/u=80663030,1255996212&fm=26&gp=0.jpg"
      },
      {
        id: "1",
        avatar: "头像",
        name: "泰峰装饰",
        case: "案例：3124",
        site: "工地：10195",
        pay1: "免息分期",
        pay2: "装修分期",
        pay3: "先施工后付款",
        imgUrl: "http://img0.imgtn.bdimg.com/it/u=3673923954,1132602490&fm=26&gp=0.jpg"
      },
      {
        id: "2",
        avatar: "头像",
        name: "克洛尼装饰",
        case: "案例：2534",
        site: "工地：6266",
        pay1: "免息分期",
        pay2: "装修分期",
        pay3: "先施工后付款",
        imgUrl: "http://img2.imgtn.bdimg.com/it/u=3836014938,48616022&fm=26&gp=0.jpg"
      },
      {
        id: "3",
        avatar: "头像",
        name: "紫玉装饰",
        case: "案例：5050",
        site: "工地：6735",
        pay1: "免息分期",
        pay2: "装修分期",
        pay3: "先施工后付款",
        imgUrl: "http://img1.imgtn.bdimg.com/it/u=316932507,1775255428&fm=26&gp=0.jpg"
      }, {
        id: "4",
        avatar: "头像",
        name: "佳时特装饰",
        case: "案例：2375",
        site: "工地：9413",
        pay1: "免息分期",
        pay2: "装修分期",
        pay3: "先施工后付款",
        imgUrl: "http://img2.imgtn.bdimg.com/it/u=80663030,1255996212&fm=26&gp=0.jpg"
      },
      {
        id: "5",
        avatar: "头像",
        name: "泰峰装饰",
        case: "案例：3124",
        site: "工地：10195",
        pay1: "免息分期",
        pay2: "装修分期",
        pay3: "先施工后付款",
        imgUrl: "http://img0.imgtn.bdimg.com/it/u=3673923954,1132602490&fm=26&gp=0.jpg"
      },
      {
        id: "6",
        avatar: "头像",
        name: "克洛尼装饰",
        case: "案例：2534",
        site: "工地：6266",
        pay1: "免息分期",
        pay2: "装修分期",
        pay3: "先施工后付款",
        imgUrl: "http://img2.imgtn.bdimg.com/it/u=3836014938,48616022&fm=26&gp=0.jpg"
      }
    ]
  },
  cityClick:function(){
    console.log("tanchudizhi")
    wx.navigateTo({
      url: '/pages/city/city'
    })
  },
  tanchu:function(){
    console.log("dianjilezonghe")
    animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.translate(0, -250).step();
    this.setData({
      animationData: animation.export()
    })
  },
  hideModal: function () {
    animation.translate(0, 0).step();
    this.setData({
      animationData: animation.export()
    })
  },
})