<template>
  <div class="logo">
    <button @click="fetchData">
      Fetch Data
    </button>
    {{ myFetchData }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Logo',

  data() {
    return {
      // myFetchData: {
      //   'posts': [
      //     {
      //       'id': 1,
      //       'title': 'json-server',
      //       'author': 'typicode'
      //     }
      //   ],
      //   'comments': [
      //     {
      //       'id': 1,
      //       'body': 'some comment',
      //       'postId': 1
      //     }
      //   ],
      //   'profile': {
      //     'name': 'typicode'
      //   }
      // },
      myFetchData: {},
      a: 123
    }
  },

  // created() {
  //   this.fetchData()
  // },

  methods: {
    fetchData() {
      const response = axios.get('https://api.myjson.com/bins/1fxjd6')
      response.then((results) => {
        this.myFetchData = results.data
      })
      return response
      // axios.get('https://api.myjson.com/bins/1fxjd6').then((response) => {
      //   this.myFetchData = response.data
      // })
    }
  }
}
</script>

<style>
.VueToNuxtLogo {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  position: relative;
  overflow: hidden;
  height: 180px;
  width: 245px;
}

.Triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}

.Triangle--one {
  border-left: 105px solid transparent;
  border-right: 105px solid transparent;
  border-bottom: 180px solid #41b883;
}

.Triangle--two {
  top: 30px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 87.5px solid transparent;
  border-right: 87.5px solid transparent;
  border-bottom: 150px solid #3b8070;
}

.Triangle--three {
  top: 60px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
  border-bottom: 120px solid #35495e;
}

.Triangle--four {
  top: 120px;
  left: 70px;
  animation: godown 0.5s linear forwards 3s;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 60px solid #fff;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}
</style>
