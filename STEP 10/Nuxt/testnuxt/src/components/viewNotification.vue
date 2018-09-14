<template>
  <div>
      <textarea disabled="true">
        
// This code will be injected before initializing the root App
import Vue from 'vue'
import VueNotifications from 'vue-notifications'
// Include mini-toaster (or any other UI-notification library
import miniToastr from 'mini-toastr'

// Here we setup messages output to `mini-toastr`
const toast = function ({ title, message, type, timeout, cb }) {
  return miniToastr[type](message, title, timeout, cb)
}

// Binding for methods .success(), .error() and etc. You can specify and map your own methods here.
// Required to pipe our outout to UI library (mini-toastr in example here)
// All not-specified events (types) would be piped to output in console.
const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

// Activate plugin
Vue.use(VueNotifications, options)
      </textarea>
  </div>
</template>

<script>
export default {
  name: "ViewNotification"
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
