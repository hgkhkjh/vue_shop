<template>
  <Nav>
    <template v-slot:center>
      <p>我 &nbsp 的</p>
    </template>
  </Nav>
  <div
    v-show="!login"
    class="head"
  >
    <img
      src="../../assets/img/mine/login.png"
      alt=""
      class="avatar"
    >
    <div
      class="loginclick"
      @click="getusermessage()"
    >
      点击登录
    </div>
  </div>
  <div
    class="head"
    v-show="login"
  >
    <img
      class="avatar"
      :src="user.avatar"
      alt=""
    >
    {{user.name}}
  </div>
  <div class="order">
    <div class="orderchild">
      <img
        src="../../assets/img/mine/fh.png"
        alt=""
        class="orderchild-img"
      >
      待发货({{shipment}})
    </div>
    <div class="orderchild">
      <img
        src="../../assets/img/mine/sh.png"
        alt=""
        class="orderchild-img"
      >
      待收货({{received}})
    </div>
    <div class="orderchild">
      <img
        src="../../assets/img/mine/pj.png"
        alt=""
        class="orderchild-img"
      >
      待评价({{appraisals}})
    </div>
    <div class="orderchild">
      <img
        src="../../assets/img/mine/tk.png"
        alt=""
        class="orderchild-img"
      >
      退款/售后({{refunds}})
    </div>
  </div>
  <div>
    <ul class="minelist">
      <li>

        全部订单 &nbsp;<span style="color:rgb(240, 179, 12)">></span> </li>
      <hr style='background-color:rgb(247, 247, 247);height:1.3px;border: none;'>
      <li>
        <router-link to="/collect">我的收藏 &nbsp;<span style="color:rgb(240, 179, 12)">></span></router-link>
      </li>
      <hr style='background-color:rgb(247, 247, 247);height:1.3px;border: none;'>
      <li>我浏览过的商品&nbsp;<span style="color:rgb(240, 179, 12)">></span></li>
      <hr style='background-color:rgb(247, 247, 247);height:1.3px;border: none;'>
      <li>我的评价&nbsp;<span style="color:rgb(240, 179, 12)">></span></li>
    </ul>
  </div>
</template>
<script>
import { reactive, ref } from "vue";
import Nav from "../../components/navbar/NavBar.vue";
export default {
  components: {
    Nav,
  },
  setup() {
    let login = ref(false);
    let user = reactive({});
    let shipment = ref(0);
    let received = ref(0);
    let appraisals = ref(0);
    let refunds = ref(0);
    function getusermessage() {
      //模拟后端接收的数据
      let getdata = {
        avatar: "https://p0.ssl.img.360kuai.com/t01124240b6e3980e67.jpg",
        name: "天气很好",
        age: "22",
        shipment: 2,
        received: 3,
        appraisals: 3,
        refunds: 1,
      };
      //改变页面的数据
      login.value = true;
      (user.avatar = getdata.avatar), (user.name = getdata.name);
      shipment.value = getdata.shipment;
      received.value = getdata.received;
      appraisals.value = getdata.appraisals;
      refunds.value = getdata.refunds;
    }
    return {
      user,
      login,
      shipment,
      received,
      appraisals,
      refunds,
      getusermessage,
    };
  },
};
</script>

<style>
.head {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar {
  width: 20%;
  height: 20%;
  margin: 5%;
}
.loginclick {
  text-align: center;
  width: 20%;
  height: 20%;
  font-size: 15rpx;
  background-color: rgb(247, 247, 247);
  padding: 15px;
  border-radius: 10px;
}
.order {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 15px;
}
.orderchild {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.orderchild-img {
  width: 60%;
  height: 65%;
}
.minelist {
  list-style: none;
  background-color: rgb(245, 237, 215);
  border-radius: 20px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
}
.minelist > li {
  margin: 20px 10px;
}
a{
  text-decoration: none;
  color: black;
}
</style>