<template>
  <div>
      <textarea disabled="true">
        
export default {
  plugins: [
    // ssr: false to only include it on client-side
    { src: '~/plugins/vue-notifications.js', ssr: false }
  ]
}
      </textarea>
  </div>
</template>

<script>
export default {
  name: "ViewNuxtConfig"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea{
  padding: 0px;
  padding-left: 20px;
  width:100%;
  height:100%;
  background: white;
  border: none; 
  resize: none;
  white-space: pre;   
}
div{
  height: 100%;
}
</style>
