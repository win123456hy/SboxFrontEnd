<template>
  <div>
    <p>Mảng 1:</p><span>{{array}}</span>
    <p>Mảng 1 sau khi dùng _.chunk:</p><span>{{arrayChunk}}</span>
    <p>Mảng 2:</p><span>[NaN, "", undefined, null, false,0,"1"]</span>
    <p>Mảng 2 sau khi dùng _.compact:</p><span>{{arrayCompact}}</span>
    <p>Sau khi dùng _.concat cộng 2 mảng 1 và 2:</p><span>{{arrayConcat}}</span>
    <br>
    <br>
    <button @click="learnEach">Click để hiện _.each của mảng 1</button>
    <br>
    <br>
    <button @click="learnMap">Click để hiện _.map([4,8],square)</button>
    <p>Mảng 3:</p><span>{{array2}}</span>
    <br>
    <button @click="learnFind">Click để hiện _.find của mảng 3</button>
    <br>
    <p>Mảng 1 sau khi dùng _.without:</p><span>{{arrayWithout}}</span>
    <br>
    <button @click="learnGroupBy">Click và bật console để xem _.groupBy của mảng [6.1, 4.2, 6.3]</button>
    <br>
    <p>Kiểm tra 1 có nằm trong chuỗi không _.includes([1, 2, 3], 1):</p><span>Kết quả:{{check}}</span>
    <br>
    <button @click="learnReduce">Click để xem tổng của mảng [1,2,3,4,5] với _.reduces</button>
    <br>
    <br>
    <button @click="learnDebouce">Click để hiện hàm hello sau 3s với _.debouce</button>
    <br>
    <p>Object đích khi _.assign({ a: 0 }, { a: 1 }, { c: 3 },{ a: 2 }) </p><span>{{objectAssign}}</span>
  </div>
</template>

<script>
/* eslint-disable */

function square(n) {
  return n * n;
}
function hello() {
  alert("Hello. My name is Đạt");
}
export default {
  name: "HelloWorld",
  data() {
    return {
      array: ["1", "2", "3", "4", "5"],
      array1: [NaN, "", undefined, null, false, 0, "1"],
      array2: [
        { user: "barney", age: 36, active: true },
        { user: "fred", age: 39, active: false },
        { user: "pebbles", age: 1, active: true }
      ],
      check: _.includes([1, 2, 3], 1)
    };
  },
  computed: {
    arrayChunk() {
      return _.chunk(this.array, 2);
    },
    arrayCompact() {
      return _.compact(this.array1);
    },
    arrayConcat() {
      return _.concat(this.array, this.array1);
    },
    arrayWithout() {
      return _.without(this.array, "1", "2");
    },
    objectAssign() {
      return _.assign({ a: 0 }, { a: 1 }, { c: 3 }, { a: 2 });
    }
  },

  methods: {
    learnEach() {
      _.each(this.array, function(value) {
        if (value != "3") document.write(value);
        else return false;
      });
    },
    learnMap() {
      alert(_.map([4, 8], square));
    },
    learnFind() {
      alert(
        _.find(this.array2, function(o) {
          return o.age < 40;
        }).user
      );
    },
    learnGroupBy() {
      console.log(_.groupBy([6.1, 4.2, 6.3], Math.floor));
    },
    learnReduce() {
      alert(
        _.reduce(
          [1, 2, 3, 4, 5],
          function(sum, n) {
            return sum + n;
          },
          0
        )
      );
    },
    learnDebouce() {
      var helloWorld = _.debounce(hello, 3000, {
        leading: true,
        trailing: false
      });
      helloWorld();
      //  _.debounce(, , , ${options.leading}, ${options.maxWait}, ${options.trailing})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-size: 30px;
  color: yellowgreen;
}
span {
  font-size: 26px;
  color: red;
}
</style>
