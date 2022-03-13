<template>
  <Nav>
    <template v-slot:center>
      <p>
        我的收藏
      </p>
    </template>
  </Nav>
  <Collectlist v-for="(item,index) in collect_product" :key="index" :collect_product="item"></Collectlist>
</template>

<script>
import Nav from "../../components/navbar/NavBar.vue";
import Collectlist from"./collectchild/collectlist.vue"
import { useStore } from "vuex";
export default {
  components: {
    Nav,
    Collectlist
  },
  setup(){
    const store=useStore()
    let collect_product=store.state.collect_product
    return{
      collect_product
    }
  }
};
</script>

<style>
</style>