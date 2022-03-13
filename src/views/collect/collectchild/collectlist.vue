<template>
    <div id="shop-item">
        <div class="item-img">
            <img :src="collect_product.image" alt="商品图片">
        </div>
        <div class="item-info">
            <div class="item-title">{{collect_product.title}}</div>
            <div class="item-desc">{{collect_product.desc}}</div>
            <div class="info-bottom">
                <div class="item-price shleft">{{collect_product.price}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    collect_product: Array,
  },
  setup(props, context) {
    let collect_product = props.collect_product;
    return {
      collect_product,
    };
  },
};
</script>
<style>
#shop-item{
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
    height: 100px;
}
.shcheckbox{
    width: 20px;
    height: 20px;
}


.item-selector {
    /* width: 20px; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.item-title  {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
}
 .item-desc {
       overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 8px;
    margin-top: 7px;
    color: darkgrey;
 }
.item-img {
    padding: 5px;
}
.item-img img {
    width: 70px;
    height: 90px;
    display: block;
    border-radius: 5px;
}
.item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
}
/* .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
} */
.info-bottom {
    margin-top: 10px ;
    position: absolute;
    bottom: 0px;
    left: 10px;
    right: 10px;
}
.info-bottom .item-price {
    color: orange;
}
.shright{
    float: right;
}
</style>