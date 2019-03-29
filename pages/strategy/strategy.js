Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentId:0,
    tabList:[
      { id:0,
        name: "全部"
      },
      {
        id: 1,
        name: "装修流程" 
      },
      { 
         id: 2,
         name: "装修测评"
      },
      {
        id: 3,
        name: "案例解读"
      },
      {
        id: 4,
        name: "风格推荐"
      },
      {
        id: 5,
        name: "好物种草"
      },
      {
        id: 6,
        name: "风格推荐"
      },
      {
        id: 7,
        name: "种草好物"
      },
      {
        id: 8,
        name: "种草好物"
      }
    ],
    contentList:[
      {
        id: 0,
        left1: "中式、西式、现代风，你想要的书房的样子，这里应该都有",
        left2: "16款书房的样子，你适合哪款",
        imgUrl: "http://img0.imgtn.bdimg.com/it/u=3220681365,3634029949&fm=26&gp=0.jpg"
      },
      {
        id:1,
        left1:"中式、西式、现代风，你想要的书房的样子，这里应该都有" ,
        left2: "16款书房的样子，你适合哪款",
        imgUrl:"http://img0.imgtn.bdimg.com/it/u=3220681365,3634029949&fm=26&gp=0.jpg"
      },
      {
        id: 2,
        left1: "立邦、多乐士、都芳、大师大PK，环保漆真的无甲醛",
        left2: "对于装修来说，如果说兼顾的墙体，细密的防水是打基础的花",
        imgUrl: "http://img0.imgtn.bdimg.com/it/u=3220681365,3634029949&fm=26&gp=0.jpg"
      },
      {
        id: 3,
        left1: "中式、西式、现代风，你想要的书房的样子，这里应该都有",
        left2: "16款书房的样子，你适合哪款",
        imgUrl: "http://img0.imgtn.bdimg.com/it/u=3220681365,3634029949&fm=26&gp=0.jpg"
      },
      {
        id: 4,
        left1: "立邦、多乐士、都芳、大师大PK，环保漆真的无甲醛",
        left2: "对于装修来说，如果说兼顾的墙体，细密的防水是打基础的花",
        imgUrl: "http://img0.imgtn.bdimg.com/it/u=3220681365,3634029949&fm=26&gp=0.jpg"
      },
      {
        id: 5,
        left1: "立邦、多乐士、都芳、大师大PK，环保漆真的无甲醛",
        left2: "对于装修来说，如果说兼顾的墙体，细密的防水是打基础的花",
        imgUrl: "http://img0.imgtn.bdimg.com/it/u=3220681365,3634029949&fm=26&gp=0.jpg"
      },
      {
        id: 6,
        left1: "立邦、多乐士、都芳、大师大PK，环保漆真的无甲醛",
        left2: "对于装修来说，如果说兼顾的墙体，细密的防水是打基础的花",
        imgUrl: "http://img0.imgtn.bdimg.com/it/u=3220681365,3634029949&fm=26&gp=0.jpg"
      },
      {
        id: 7,
        left1: "立邦、多乐士、都芳、大师大PK，环保漆真的无甲醛",
        left2: "对于装修来说，如果说兼顾的墙体，细密的防水是打基础的花",
        imgUrl: "http://img0.imgtn.bdimg.com/it/u=3220681365,3634029949&fm=26&gp=0.jpg"
      },
      {
        id: 8,
        left1: "立邦、多乐士、都芳、大师大PK，环保漆真的无甲醛",
        left2: "对于装修来说，如果说兼顾的墙体，细密的防水是打基础的花",
        imgUrl: "http://img0.imgtn.bdimg.com/it/u=3220681365,3634029949&fm=26&gp=0.jpg"
      },
      {
        id: 9,
        left1: "立邦、多乐士、都芳、大师大PK，环保漆真的无甲醛",
        left2: "对于装修来说，如果说兼顾的墙体，细密的防水是打基础的花",
        imgUrl: "http://img0.imgtn.bdimg.com/it/u=3220681365,3634029949&fm=26&gp=0.jpg"
      },
    ]
  },
  tabClick:function(e){
    var id=e.currentTarget.dataset.id
    console.log(id)
    // this.data.currentId=id
    this.setData({currentId:id})
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