<template>
  <div>
      <textarea disabled="true">
        
{
  "name": "example-plugins-vendor",
  "dependencies": {
    "axios": "^0.16.2",
    "mini-toastr": "^0.6.5",
    "nuxt": "latest",
    "vue-notifications": "^0.8.0"
  },
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "start": "nuxt start"
  }
}
      </textarea>
  </div>
</template>

<script>
export default {
  name: "ViewPackageJson"
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
