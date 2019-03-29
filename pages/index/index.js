Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://f11.baidu.com/it/u=2591277549,3072445292&fm=72',
      'https://f10.baidu.com/it/u=2878091177,773298621&fm=72',
      'http://img3.imgtn.bdimg.com/it/u=1649513418,389963271&fm=26&gp=0.jpg',
      'http://img5.imgtn.bdimg.com/it/u=2188850088,3190543047&fm=26&gp=0.jpg',
      'http://img2.imgtn.bdimg.com/it/u=3302271453,3237892845&fm=11&gp=0.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    Hei:'',
    circular:true,
    order: [
      'https://f11.baidu.com/it/u=2591277549,3072445292&fm=72',
      'http://img2.imgtn.bdimg.com/it/u=3302271453,3237892845&fm=11&gp=0.jpg',
      'https://f11.baidu.com/it/u=2591277549,3072445292&fm=72',
      'https://f10.baidu.com/it/u=2878091177,773298621&fm=72',
      'http://img3.imgtn.bdimg.com/it/u=1649513418,389963271&fm=26&gp=0.jpg',
      'http://img5.imgtn.bdimg.com/it/u=2188850088,3190543047&fm=26&gp=0.jpg'
    ]
    ,
    order1: [
      'http://img5.imgtn.bdimg.com/it/u=2188850088,3190543047&fm=26&gp=0.jpg',
      'http://img2.imgtn.bdimg.com/it/u=3302271453,3237892845&fm=11&gp=0.jpg',
      'https://f11.baidu.com/it/u=2591277549,3072445292&fm=72',
      'https://f10.baidu.com/it/u=2878091177,773298621&fm=72',
      'http://img3.imgtn.bdimg.com/it/u=1649513418,389963271&fm=26&gp=0.jpg',
      'http://img5.imgtn.bdimg.com/it/u=2188850088,3190543047&fm=26&gp=0.jpg'
    ]
  },
  ontouch:function(event){
    console.log(event.currentTarget.id);
    wx.switchTab({
      url: '/pages/picture/picture'
    })
  },
  oncaseClick:function(){
    wx.navigateTo({
      url: '/pages/case/case'
    })
  },
  onstrategyClick:function(){
    wx.navigateTo({
      url: '/pages/strategy/strategy'
    })
  }
})