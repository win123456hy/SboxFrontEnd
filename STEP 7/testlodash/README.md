# HỌC LODASH

## Lodash là gì?

> __Lodash__ là một thư viện JavaScript mạnh mẽ dùng để xử lý _Array, Object, Function, Collection_ ..v.v. Các hàm tiện ích được chia làm các nhóm chính sau :

-   Array
-   Collection
-   Function
-   Lang
-   Math
-   Number
-   Object
-   Seq
-   String
-   Util
-   Properties

## Cài đặt
- Cài thường:

> __npm install lodash__

- Cài đặt Lodash vào Vue Cli 3:

> __npm install --save vue-lodash__

> Sau đó thêm đoạn dưới đây vào file main.js:


```javascript
            import VueLodash from 'vue-lodash'
            const options = { name: 'lodash' } 
            Vue.use(VueLodash, options) 
```

## Các hàm xử lý 

### _.each(hoặc _.foreach)
> Hàm để chạy vòng lặp của __collection__ và gọi hàm iteratee cho việc thao tác với mỗi phần tử. Iteratee có 3 đối số: (value, index|key, collection). Để thoát khỏi vòng lặp thì ta chỉ cần trả về giá trị false.

> Cú pháp:
```javascript
            _.each(collection, [iteratee=_.identity])
```
> Trong đó: 
- collection: là mảng chúng ta cần lặp.
- [iteratee=_.identity]: là hàm được gọi trong mỗi lần lặp. 

> VD: 
```javascript
            _.forEach([1, 2], function(value) {
            console.log(value);
            });
            // => 12.
            
            _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
            console.log(key);
            });
            // => ab
```

### _.map
> Tương tự như _.each nhưng _.map thường được dùng để biến đổi các phần tử trong mảng, trả về các giá trị sau xử lý (số lượng đúng bằng số lượng phần tử ban đầu của mảng).

> VD:
```javascript
            function square(n) {
            return n * n;
            }
            console.log(_.map([4, 8], square));
            // => [16, 64]
```
### _.find
> Tương tự như _.each nhưng _.find thường được dùng để tìm kiếm một phần tử đầu tiên mà đáp ứng điều kiện trong một mảng. 

> _.find có thêm tham số thứ 3 là giá trị index để tìm kiếm từ đó.
> VD:
```javascript
            var users = [
            { 'user': 'barney',  'age': 36, 'active': true },
            { 'user': 'fred',    'age': 40, 'active': false },
            { 'user': 'pebbles', 'age': 1,  'active': true }
            ];
            
            _.find(users, function(o) { return o.age < 40; });
            // => barney
``` 
### _.reduces
> Hàm để chạy vòng lặp bằng iteratee. Trong đó mỗi lời gọi kế tiếp là giá trị trả về của lần lặp trước đó. Kết quả trả về cuối cùng là kết quả tích luỹ từ tất cả các lần lặp trước.

> Bằng cách sử dụng các giá trị trong mảng để tạo ra vài thứ khác hoàn toàn mới, vì vậy ta sẽ chọn reduces thay cho các phương thức khác.

> Khác với each, hàm có thêm tham số thứ 3 là giá trị khởi tạo cho kết quả tích luỹ.

> VD:
```javascript
            _.reduce([1, 2, 3, 4, 5], function(sum, n) {
            return sum + n;
            }, 0);
            // => 15
```

### _.without
> Hàm trả về mảng mà không có các phần tử được nhắc đến.

> Cú pháp: 
```javascript
            _.without(array, [values])
```
> VD:
```javascript
            var array = ['1','2','3','4','5']
            var newArray = _.without(array,'1','2');
            console.log(newArray);
            // => ['3','4','5']
```

### _.groupBy
> Hàm dùng để gom nhóm các phần tử của mảng bằng iteratee.

> VD:

```javascript
            _.groupBy([6.1, 4.2, 6.3], Math.floor);
            // => { '4': [4.2], '6': [6.1, 6.3] }
```
### _.includes
> Hàm dùng để kiểm tra xem giá trị nào đó có tồn tại trong mảng đó không. Nếu mảng là mảng các chuỗi, giá trị có thể tồn tại là con của mảng các chuỗi đó. Hàm trả về giá trị true hoặc false.

> VD:
```javascript
            _.includes([1, 2, 3], 1);
            // => true
            
            _.includes([1, 2, 3], 1, 2);
            // => false
            
            _.includes({ 'a': 1, 'b': 2 }, 1);
            // => true
            
            _.includes('abcd', 'bc');
            // => true
```

### _.debounce
> Hàm dùng để trì hoãn việc gọi một hàm nào đó cho đến khi thời gian chờ kết thúc. 

> Hàm ___.debounce__ trả về một hàm.

> Cú pháp cơ bản:

```javascript
            _.debounce(func,[wait=0],[options={}]);
            // options có thể có hoặc không có.
```
> Trong đó:
- func: là hàm mà chúng ta muốn gọi.
- [wait=0]: là thời gian chờ, mặc định là 0.
- [options={}]:
    - [options.leading=false] (boolean): xác định việc gọi hàm có chạy ngay hay không. Mặc định là false.
    - [options.trailing=true] (boolean): xác định việc gọi hàm có chạy khi thời gian chờ kết thúc hay không. Mặc định là true.
    - [options.maxWait] (number): thời gian chờ tối đa khi gọi hàm. 

> VD:
```javascript
            function hello() {
            alert("Hello. My name is Đạt");
            }
            var helloWorld = _.debounce(hello, 3000, {
            leading: true,
            trailing: false,
            maxWait: 5
            });
            helloWorld();
            // Hàm helloWorld() sẽ chạy ngay trước khi thời gian chờ kết thúc với leading là true. 
```

### _.clone
> Tạo ra một bản sao của giá trị.

> VD:
```javascript
            var objects = [{ 'a': 1 }, { 'b': 2 }];
            
            var shallow = _.clone(objects);
            console.log(shallow[0] === objects[0]);
            // => true
```
### _.assign
> Hàm đùng để gán các property của đối tượng nguồn cho đối tượng đích. Đối tượng nguồn được gán theo thứ tự từ trái sang phải. Các đối tượng nguồn tiếp theo sẽ ghi đè lên các đối tượng nguồn phía trước.

> Cú pháp:

```javascript
            _.assign(destinationObject, ...sourceObjects)
```

> Trong đó:
- destinationObject: là đối tượng đích.
- sourceObjects: là các đối tượng nguồn.

> VD:

```javascript
            var desObject = _.assign({ a: 0 }, { a: 1 }, { c: 3 },{ a: 2 });
            console.log(desObject);
            //=> { "a": 2, "c": 3 }
```
### Kiểm tra giá trị: isDate, isNaN, isUndefined, isEmpty, isEqual, isObject, isInteger, isArray, isBoolean, isString

> Là các hàm kiểm tra xem giá trị có phải là giá trị ta mong muốn không. Các hàm này trả về kết quả true hoặc false.

- isDate: kiểm tra xem giá trị đó có phải là ngày không.
- isNaN: kiểm tra xem giá trị đó có phải là NaN(Not a Number) không.
- isUndefinded: kiểm tra xem giá trị đó có phải là giá trị không được định nghĩa hay không.
- isEmpty: kiểm tra xem giá trị đó có phải là giá trị rỗng không.
- isEqual: kiểm tra 2 giá trị xem chúng có bằng nhau không.
- isObject: kiểm tra xem giá trị đó có phải là một đối tượng hay không.
- isInteger: kiểm tra xem giá trị đó có phải là số nguyên hay không.
- isArray: kiểm tra xem giá trị đó có phải là mảng hay không.
- isBoolean: kiểm tra xem giá trị đó có phải là boolean hay không.
- isString: kiểm tra xem giá trị đó có phải là chuỗi hay không.

> VD:
```javascript
            _.isDate(new Date);
            // => true
            
            _.isDate('Mon April 23 2012');
            // => false
            _.isNaN(NaN);
            // => true
            
            _.isNaN(new Number(NaN));
            // => true
            
            isNaN(undefined);
            // => true
            
            _.isNaN(undefined);
            // => false
            _.isUndefined(void 0);
            // => true
            
            _.isUndefined(null);
            // => false
            _.isEmpty(null);
            // => true
            
            _.isEmpty(true);
            // => true
            
            _.isEmpty(1);
            // => true
            
            _.isEmpty([1, 2, 3]);
            // => false
            
            _.isEmpty({ 'a': 1 });
            // => false            
            var object = { 'a': 1 };
            var other = { 'a': 1 };
            
            _.isEqual(object, other);
            // => true   
            _.isObject({});
            // => true
            
            _.isObject([1, 2, 3]);
            // => true
            
            _.isObject(_.noop);
            // => true
            
            _.isObject(null);
            // => false                
            _.isInteger(3);
            // => true
            
            _.isInteger(Number.MIN_VALUE);
            // => false
            
            _.isInteger(Infinity);
            // => false
            
            _.isInteger('3');
            // => false               
            _.isArray([1, 2, 3]);
            // => true
            
            _.isArray(document.body.children);
            // => false
            
            _.isArray('abc');
            // => false
            
            _.isArray(_.noop);
            // => false            
            _.isBoolean(false);
            // => true
            
            _.isBoolean(null);
            // => false       
            _.isString('abc');
            // => true
            
            _.isString(1);
            // => false                   
```

### _.chunk
> Trả về mảng mới được chia ra các nhóm với số lượng phần tử xác định từ mảng cũ. Nếu mảng không thể chia đều thì nhóm cuối cùng sẽ là phần tử còn lại 
> Cú pháp: 
```javascript
            _.chunk(array,size)
```
> VD: 
```javascript
            var array = ["1", "2", "3", "4", "5"];
            // Mảng sau khi _.chunk
            var newArray = _.chunk(array,2);
            console.log(newArray);
            // Kết quả: [ [ "1", "2" ], [ "3", "4" ], [ "5" ] ]
```

### _.compact
> Trả về mảng đã được loại bỏ đi các phần tử có giá trị false, null, 0, "", undefined và NaN.

> Cú pháp:
```javascript
            _.compact(array)
```
> VD:
```javascript
            var array = [NaN, "", undefined, null, false,0,"1"];
            // Mảng sau khi _.compact
            var newArray = _.compact(array);
            console.log(newArray);
            // Kết quả: [ "1" ]
```

### _.concat
> Trả về mảng mới được hợp bởi 2 mảng.

> Cú pháp:
```javascript
            _.concat(array1,array2)
```
> VD:
```javascript
var array1 = ['1','2'];
var array2 = ['3','4'];
var newArray = _.concat(array1,array2);
console.log(newArray);
// Kết quả: ['1','2','3','4']
```

