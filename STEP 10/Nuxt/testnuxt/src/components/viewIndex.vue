<template>
  <div>
      <textarea disabled="true">
        
<template>
  <div class="container">
    <p><button @click="showLoginError">Notif me!</button></p>
    <p>Home - <nuxt-link to="/about">About</nuxt-link></p>
  </div>
</template>

<script>
let miniToastr
if (process.browser) {
  miniToastr = require('mini-toastr')
}

export default {
  mounted() {
    miniToastr.init()
  },
  notifications: {
    showLoginError: {
      title: 'Welcome!',
      message: 'Hello from nuxt.js',
      type: 'info'
    }
  }
}
</script>

<style>
.container {
  text-align: center;
  padding-top: 100px;
  font-family: sans-serif;
}
</style>
      </textarea>
  </div>
</template>

<script>
export default {
  name: "ViewIndex"
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
