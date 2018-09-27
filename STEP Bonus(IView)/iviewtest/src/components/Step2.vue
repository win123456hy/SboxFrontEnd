<template>
  <div>
    <h1>Step 2</h1>
    <button @click="next">Next</button>
  </div>
</template>

<script>
export default {
  name: 'Step2',
  methods:{
    next(){
      this.$emit("next",2);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  text-align: center;
}
p{
  font-size: 64px;
  line-height: 500px;
}
</style>
