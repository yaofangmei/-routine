Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgWidth: 0,
    imgHeight: 0,
    note: [
      {
        text:"电视机背景墙。上部以黑白相间的预计作为装饰",
        avatar:"头像",
        title: '装修公司',
        url: 'http://zq.jhcms.cn/attachs/photo/201711/20171130_176CFE51B6710715B1BBBEF2F86ACB0C.jpg',
      },
      {
        avatar: "头像",
        title: '你所不知道的',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg',
      },
      {
        avatar: "头像",
        title: '红酒知识',
        url: 'http://f10.baidu.com/it/u=121654667,1482133440&fm=72',
      },
      {
        title: '案例名称',
        url: 'http://zq.jhcms.cn/attachs/photo/201711/20171130_9E39DA252E3946BE36218D85876C4AB4.jpg',
      },
      {
        title: '案例名称',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg'
      },

      {
        title: '案例名称',
        url: 'http://f10.baidu.com/it/u=121654667,1482133440&fm=72'
      },
      {
        title: '案例名称',
        url: 'http://img4.imgtn.bdimg.com/it/u=2748975304,2710656664&fm=26&gp=0.jpg'
      },
      {
        title: '案例名称',
        url: 'http://img2.imgtn.bdimg.com/it/u=1561660534,130168102&fm=26&gp=0.jpg'
      },
      {
        title: '案例名称',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg'
      }
    ],
    openPicker: false,
    needAnimation: false,
    // contentHeight: 1000,
    itemId: 0,      // 默认选中第一个   
    orgList: [
      { Name: '全部' },
      { Name: '窗帘' },
      { Name: '隔断' },
      { Name: '吊顶' },
      { Name: '橱柜' },
      { Name: '楼梯' },
      { Name: '窗户' },
    ],
  },
  // 带有遮罩层的下拉菜单  
  onPickHeaderClick: function () {
    this.setData({
      openPicker: !this.data.openPicker,
      needAnimation: true
    });
  },
  /**   
  * 点击选中下拉列表项   
  * */
  clickPick(e) {
    var self = this;
    var ids = e.currentTarget.dataset.id;  //获取自定义的id       
    this.setData({
      itemId: ids,  //把获取的自定义id赋给当前列的id(即获取当前列下标) 
      openPicker: !this.data.openPicker,
    })
  },
 
})