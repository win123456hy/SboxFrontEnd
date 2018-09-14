<template>
  <div>
    <textarea disabled="true">
      
<template>
  <div class="container">
    <img :src="thumbnailUrl">
    <p><nuxt-link to="/">Home</nuxt-link> - About</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData() {
    const nb = Math.max(1, Math.round(Math.random() * 10))
    return axios.get(`https://jsonplaceholder.typicode.com/photos/${nb}`).then(res => res.data)
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
  name: 'ViewAbout'
}
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
