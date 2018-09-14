<template>
  <div>
    <div class="directory">
    <img src="../assets/directory.svg"/>
    <span>{{nameMenu}}</span>
    </div>
    <ul>
      <ItemChild v-for="(item,index) in items" :key="index" :item="item"/>
    </ul>
  </div>
</template>

<script>
import ItemChild from './itemChild.vue'

export default {
  name: 'ItemParent',
  props: {
    nameMenu: String,
    items: Array
  },
  components:{
    ItemChild
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
    list-style:none;
    padding-left: 10px;
    margin: 0px;
    margin-top: 10px;
}
span{
  margin-left: 10px;
  font-size: .9em;
}
img{
  width: 17px;
}
.directory{
  padding:8px 0px 0px 20px; 
  display: flex;
  align-items: center;
}
</style>
