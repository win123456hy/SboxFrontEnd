<template>
  <div>
    <h1>Step 4</h1>
    <button @click="next">Next</button>
  </div>
</template>

<script>
export default {
  name: 'Step4',
  methods:{
    next(){
      this.$emit("next",4);
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
