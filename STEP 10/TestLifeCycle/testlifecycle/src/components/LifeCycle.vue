<template>
  <div>
      <p id="myName">Hi, my name is Đạt</p>
      <p>{{count}}</p>
      <button @click="increaseCount">Increase Count</button>
  </div>
</template>

<script>
export default {
  name: 'life-cycle',
  data(){
    return{
      count:0
    }
  },
  beforeCreate() {
    console.log(this.count);
  },
  created() {
    console.log(document.getElementById('myName'));
  },
  beforeMount() {
    console.log(document.getElementById('myName'));
  },
  mounted() {
    console.log(this.count);
    console.log(document.getElementById('myName'));
  },
  beforeUpdate() {
    console.log("Count is:"+this.count+"in beforeUpdate");
  },
  updated() {
    console.log("Count is:"+this.count+"in updated");
  },
  beforeDestroy() {
        console.log("Count is:"+this.count+"in beforeDestroy");
  },
  destroyed() {
        console.log("Count is:"+this.count+"in destroyed");
  },
  methods:{
    increaseCount(){
      this.count++;
    }
  }
}
</script>

