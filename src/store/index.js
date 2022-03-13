import { resolve } from 'core-js/fn/promise'
import { createStore } from 'vuex'

export default createStore({
  state: {
    shopcart: [],
    collect_product:[]
  },
  mutations: {
    addcount(state, payload) {
      payload.count++
    },
    addproduct(state, payload) {
      payload.cheked = false

      payload.count = 1
      state.shopcart.push(payload)
    },
    //点击收藏添加内容
    add_collect_product(state,payload){
      
        state.collect_product.push(payload)
      // console.log(isexist);
    
    }
    
  },
  actions: {
    addshop(context, payload) {
      return new Promise((resolve, reject) => {
        //payload就是在其他页面注册传入的参数
        //原来购物车没有数据，当点击加入购物车的时候判断（通过oldProduct这个中间量）这个商品在没在
        //购物车中在的话数量加1不在的话把这个数据添加在购物车中数量显示的是1
        //find：在shopcart中寻找和传过来的数据(payload )id一样的赋值给oldProduct
        let oldProduct = context.state.shopcart.find(item => item.id === payload.id)
        if (oldProduct) {
          oldProduct.count += 1;
          resolve('当前商品数目+1')
        } else {
          // payload.count = 1
          // context.state.shopcart.push(payload)
          // console.log(payload);
          context.commit('addproduct', payload)
          resolve('添加了新的商品')

        }
      })
     
    },
     add_collect_prouduct(context, payload){
         return new Promise((resolve,rej)=>{
          let oldProduct = context.state.collect_product.find(item => item.id === payload.id)
          if(oldProduct){
            resolve('当前商品已经收藏了哦')
          }else{
            context.commit('add_collect_product', payload)
              resolve("收藏成功")
          }
         })
      }
  },
  getters: {
    cartlength(state) {
      return state.shopcart.length
    },
    cartlist(state) {
      return state.shopcart
    }
  },
  modules: {
  }
})
