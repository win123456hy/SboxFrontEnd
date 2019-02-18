<template>
  <div>
    <img :style="[isVisibilityFirstButton?visible:invisible]" @click="gotoFirstPage" src="../assets/sharp-first_page-24px.svg" tabindex="0"/>
    <img  @click="gotoPreviousPage" src="../assets/sharp-keyboard_arrow_left-24px.svg" tabindex="1"/>
    <span>{{currentPage}}/{{totalPage}}</span>
    <img @click="gotoNextPage" src="../assets/sharp-keyboard_arrow_right-24px.svg" tabindex="2"/>
    <img :style="[isVisibilityLastButton?visible:invisible]" @click="gotoLastPage" src="../assets/baseline-last_page-24px.svg" tabindex="3"/>
    <span id="totalItem">Tổng số: {{totalItem}}</span>
  </div>
</template>

<script>
export default {
  name: "Panigation",
  props: {
    totalItem: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      default: 1
    },
    sizePerPage: {
      type: Number,
      default: 10
    }
  },
  data(){
    return{
      visible:{'opacity':'1','transition':'2s opacity'},
      invisible:{'opacity':'0','transition':'2s opacity','pointer-events': 'none'}
    }
  },
  computed: {
    totalPage() {
      return this.totalItem % this.sizePerPage == 0
        ? this.totalItem / this.sizePerPage
        : parseInt(this.totalItem / this.sizePerPage) + 1;
    },
    isVisibilityFirstButton() {
      if (this.currentPage > 1) {
        return true;
      } else return false;
    },
    isVisibilityLastButton() {
      if (this.currentPage <this.totalPage) {
        return true;
      } else return false;
    }
  },
  methods: {
    gotoFirstPage() {
      this.currentPage = 1;
      this.$emit("on-change", {
        totalItem: this.totalItem,
        sizePerPage: this.sizePerPage,
        currentPage: this.currentPage
      });
    },
    gotoLastPage() {
      this.currentPage = this.totalPage;
      this.$emit("on-change", {
        totalItem: this.totalItem,
        sizePerPage: this.sizePerPage,
        currentPage: this.currentPage
      });
    },
    gotoPreviousPage() {
      this.currentPage == 1 ? (this.currentPage = 1) : this.currentPage--;
      this.$emit("on-change", {
        totalItem: this.totalItem,
        sizePerPage: this.sizePerPage,
        currentPage: this.currentPage
      });
    },
    gotoNextPage() {
      this.currentPage == this.totalPage
        ? (this.currentPage = this.totalPage)
        : this.currentPage++;
      this.$emit("on-change", {
        totalItem: this.totalItem,
        sizePerPage: this.sizePerPage,
        currentPage: this.currentPage
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  display: flex;
  align-items: center;
}
img {
  width: 93px;
  height: 78px;
  border: solid 3px #959595;
  border-radius: 8px;
  margin: 4px;
}
img:focus {
  width: 99px;
  height: 84px;
  background: #00b880;
  outline: none;
  border: none;
}
img[tabindex="0"]:focus {
  content: url("../assets/sharp-first_page-24px-focus.svg");
}
img[tabindex="1"]:focus {
  content: url("../assets/sharp-keyboard_arrow_left-24px-focus.svg");
}
img[tabindex="2"]:focus {
  content: url("../assets/sharp-keyboard_arrow_right-24px-focus.svg");
}
img[tabindex="3"]:focus {
  content: url("../assets/baseline-last_page-24px-focus.svg");
}
img[tabindex="3"] {
  margin-left: 15px;
}
span {
  font-size: 42px;
  font-weight: bold;
  margin: auto 60px;
  color: #484848;
}
#totalItem {
  margin-left: 32px;
  font-weight: normal;
}
</style>
