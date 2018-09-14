<template>
  <div>
    <li @click="viewSoure" :tabindex="item.tabIndex">
      <img src="../assets/document.svg"/>
      <p>{{item.name}}</p>
    </li>
  </div>
</template>

<script>
export default {
  name: 'ItemChild',
  props: {
    item:Object,
/*     name: String,
    route: String */
  },
  methods:{
    viewSoure(){
      this.$router.push({ path: this.item.link});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
  margin: 0px 10px 2px 10px;
  display: flex;
  align-items: center;
  font-size: .9em;
  font-weight: 400;
  letter-spacing: .5px;
  line-height: 5px;
  width: auto;
  outline: none;
}
li:hover{
  background:#DBDFE1;
  border-radius: 5px;
  cursor: default;
}
li>img{
  margin-left: 10px;
  width:13px;
}
p{
  margin-left: 10px;
}
li:focus{
  background: #3B8070;
  border-radius: 5px;
  color: white;
  cursor: text;
}
li:focus img{
  content: url("../assets/document-white.svg");
}
</style>
