# Học Vue.js 

## Vue.js là gì?

> __Vue.js__ là một __Progressive framework__ (Framework linh động), hoạt động theo mô hình MVVM(Model-View-View-Model), sử dụng công nghệ Virtual DOM. Do vậy, Vue.js tập trung chủ yếu vào phần View, giao diện người dùng.

> Còn về __Progressive framework__ thì khác với các __Monolithic framework__ (Framework nguyên khối) là framework tập trung tất cả vào một khối duy nhất, _Progressive framework_ là framework giúp phát triển ứng dụng theo cách chia nhỏ ra từng bước giúp khả năng tái sử dụng, bảo trì dễ dàng.

## Cách cài đặt

- Cách 1: Nhúng link CDN vào trang.

```html
            <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
```

- Cách 2: Dùng NPM trong NodeJS

```html
            npm install vue
```

## Các kiến thức cần học

### Tạo một Vue 

> Một ứng dụng Vue luôn được bắt đầu bằng cách khởi tạo một đối tượng Vue sử dụng hàm Vue.

```javascript
            var vm = new Vue({
            // các tùy chọn
            })
```

> Khi khởi tạo Vue, chúng ta thường tạo một object __options__ với các tuỳ chọn(VD: data,el,..)

> Một ứng dụng Vue bao gồm một __Vue gốc__ (root Vue) được tạo với lệnh __new Vue__. Ứng dụng này cũng thường được sắp xếp thành một cây gồm các component lồng nhau và tái sử dụng được.

> VD cây component của ứng dụng todo:

```html
            Root Instance
            └─ TodoList
            ├─ TodoItem
            │  ├─ DeleteTodoButton
            │  └─ EditTodoButton
            └─ TodoListFooter
                ├─ ClearTodosButton
                └─ TodoListStatistics
```

> Khi một Vue được khởi tạo, tất cả các thuộc tính trong object __data__ sẽ được thêm vào __reactivity system__. Hệ thống này thay đổi view khi giá trị của các thuộc tính trong object __data__ thay đổi.

> VD:

```javascript
            // Chúng ta khởi tạo một object "data"
            var data = { a: 1 }

            // Object này được truyền vào một đối tượng Vue
            var vm = new Vue({
            data: data
            })

            // Truy xuất đến thuộc tính của đối tượng 
            // trả về giá trị của object "data" đã khởi tạo 
            vm.a == data.a // => true

            // Thay đổi thuộc tính của vm cũng
            // ảnh hưởng đến dữ liệu ban đầu
            vm.a = 2
            data.a // => 2

            // ... và ngược lại
            data.a = 3
            vm.a // => 3
```
> Nếu một thuộc tính mà không tồn tại trong object __data__. Khi chúng ta khởi tạo nó bên ngoài như:

```javascript
            vm.b = "Alo";
```

thì những thay đổi với b sẽ không kích hoạt trên view.

> Trường hợp khác là khi ta tạo object ở ngoài và ta muốn chặn việc gán chúng vào trong object __data__. Ta dùng Object.freeze().

```javascript
            var obj = {
            foo: 'bar'
            }

            Object.freeze(obj)

            new Vue({
            el: '#app',
            data: obj
            })

```

```html
            <div id="app">
            <p>{{ foo }}</p>
            <!-- foo sẽ không được cập nhật! -->
            <button @click="foo = 'baz'">Cập nhật đi chứ</button>
            </div>

```

> Chú ý: Muốn phân biệt thuộc tính với phương thức ta dùng __$__. VD:

```javascript
            var data = { a: 1 }
            var vm = new Vue({
            el: '#example',
            data: data
            })

            vm.$data === data // => true
            vm.$el === document.getElementById('example') // => true

            // $watch là một phương thức của đối tượng Vue
            vm.$watch('a', function (newValue, oldValue) {
            // Hàm callback này sẽ được gọi khi `vm.a` thay đổi
            })

```
### Render 

> VueJS cho phép ta render dữ liệu đến DOM bằng cú pháp template đơn giản:

```html
            <div id="app">
                {{ message }}
            </div>

```

```javascript
            var app = new Vue({
                el: '#app',
                data: {
                    message: 'Hello world!'
                }
            });
```

> Từ đây, ta có thể thấy dữ liệu và DOM được liên kết với nhau. Chúng ta thử mở console lên và test 

```javascript
            app.message = "Hello Đạt";
```

> Ta sẽ thấy chuỗi được render sẽ thay đổi thành "Hello Đạt"

> Ngoài việc thay đổi text ở trên ta có thể bind qua thuộc tính của thẻ(attribute). VD:

```html
            <div id="app-2">
            <span v-bind:title="message">
                Loading
            </span>
            </div>

```

```javascript
            var app2 = new Vue({
                el: '#app-2',
                data: {
                    message: 'Bạn đã load trang lúc: ' + new Date()
                }
            });

```

> Ta thấy một khái niệm mới ở đây đó là __v-bind__. Cái này được gọi là directive(giống với directive trong AngularJS) chỉ khác cú pháp của VueJS có tiền tố __v-__ còn Angular có tiền tố là __ng-__. 

> Trong VueJS còn có thêm shortcut là __':'__. Tức là thay vì dùng __v-bind:title__ ta có thể dùng __:title__ thì cũng sẽ cho ra kết quả tương tự.
### Tempate 

> Vue.js sử dụng một cú pháp template dựa trên HTML, cho phép bạn ràng buộc (bind) một cách minh bạch cấu trúc DOM được render với dữ liệu của đối tượng Vue bên dưới. Tất cả các template của Vue đều là code HTML hợp lệ và có thể được parse bởi các trình duyệt và parser chuẩn.

> Bên dưới, Vue biên dịch template thành các hàm render Virtual DOM (DOM ảo). Kết hợp với __reactivity system__, Vue có thể xác định một cách thông minh số lượng tối thiểu các component cần phải render lại, và áp dụng số lượng tối thiểu các hiệu chỉnh về DOM khi trạng thái của ứng dụng thay đổi.

- __Các nội suy(Interpolations)__:
    
    - __Văn bản__: sử dụng cú pháp “mustache” (“ria mép” – hai dấu ngoặc nhọn). Thẻ mustache sẽ được thay thế bằng giá trị của thuộc tính msg trên object data tương ứng, và cũng sẽ được cập nhật bất cứ khi nào thuộc tính này thay đổi:


            <span>Thông điệp: {{ msg }}</span>

            //Chú ý: Nếu muốn dữ liệu không cập nhật thì ta dùng directive v-one


            <span v-once>Thông điệp này sẽ không bao giờ thay đổi: {{ msg }}</span>


    - __HTML__: sử dụng _v-html_ để hiển thị dữ liệu dưới dạng html. VD:

            <p>Sử dụng cú pháp mustache: {{ rawHtml }}</p>
            <p>Sử dụng directive v-html: <span v-html="rawHtml"></span></p>
    
    - __Thuộc tính__: sử dung _v-bind_. VD:

            <div v-bind:id="dynamicId"></div>
    - __Biểu thức__ : Dùng để xử lý các phép toán, các hàm.

            {{ number + 1 }}

            {{ ok ? 'YES' : 'NO' }}

            {{ message.split('').reverse().join('') }}

            <div v-bind:id="'list-' + id"></div>

- __Các directive__ cơ bản
    - __v-if__ và __v-else__: Dùng để thêm,loại bỏ element thông qua cấu trúc rẽ nhánh if-else. VD:


            <div id="app-3">
                <p v-if="seen">Now you see me</p>
                <p v-else>Where are you?</p>
            </div>



            var app3 = new Vue({
                el: '#app-3',
                data: {
                    seen: true
                }
            });

    - __v-show__: Dùng để ẩn hiện element.

            <div id="app-4">
                <h1 v-show="ok">Xin chào!</h1>
            </div>

            var app4 = new Vue({
                el: '#app-4',
                data: {
                    ok: true
                }
            });
    - __v-for__: Chúng ta có thể duyệt mảng bằng __v-for__. Mỗi một lần duyệt thì ta lấy được một phần tử trong mảng. 


            <div id="app-5">
                <ol>
                    <li v-for="todo in todos">
                        {{ todo.text }}
                    </li>
                </ol>
            </div>


            var app5 = new Vue({
            el: '#app-5',
            data: {
                todos: [
                { text: 'Learn JavaScript' },
                { text: 'Learn Vue' },
                { text: 'Build something awesome' }
                ]
            }
            })


    - __v-on__: dùng để bắt các sự kiện vào DOM. VD với sự kiện button click:

            <div id="app-6">
            <p>{{ message }}</p>
            <button v-on:click="reverseMessage">Đảo tin nhắn</button>
            </div>


            var app6 = new Vue({
            el: '#app-6',
            data: {
                message: 'Hello Vue.js!'
            },
            methods: {
                reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
                }
            }
            })


### Computed, Watcher và Filter
#### Computed

> __Computed__ object bên trong là các __computed property__(các thuộc tính được tính toán trước). Các computed property là các tính toán có bộ đệm và chỉ thực hiện khi các thuộc tính phụ thuộc(dependency) bên trong nó thay đổi. Lưu ý là các dependency phải nắm trong __reactivity system__, tức thuộc object data.

> VD: 

```html
            <div id="app">
                <p>{{ message }}</p>
                Message sau khi dùng computed : "{{ upperMessage }}"
            </div>
```

```javascript
            var app = new Vue({
                el: '#app',
                data: {
                message:'Hello World!'
                },
                computed: {
                upperMessage: function () {
                    return this.message.toUpperCase();
                }
            }
            });
```

> __Giải thích__: Khi _message_ thay đổi. Computed property _upperMessage_ sẽ thay đổi theo. Nếu _message_ không có thay đổi gì thì _upperMessage_ sẽ không được thay đổi.

#### Watcher

> __Watcher__ bên trong là các __watch property__. Watcher dùng để theo dõi các thay đổi của watch property. Nếu watch property thay đổi thì các xử lý bên trong nó sẽ được thực hiện. Watcher thường dùng để xử lý bất đồng bộ.

> VD:

```html
            <div id="app">
            <input type=text v-model="name"/>
            <p>{{ name }}</p>
            </div>
```

```javascript
            var app = new Vue({
            el: '#app',
            data: {
                name: 'Trần Quốc Đạt'
            },
            watch: {
                name : function () {
                    alert(this.name);
                }
            }
            });
```

> __Giải thích__: Khi property __name__ thay đổi giá trị thì chương trình sẽ thực hiện lệnh alert bên trong. Ngược lại, nếu _name_ không được thay đổi thì hàm alert sẽ không được thực hiện.

#### Filter

> __Filter__ là một bộ lọc giúp định dạng các văn bản thường gặp.

> VD:

```html
            <div id="app">
            <input type="text" v-model="name"/>
            <p>{{ name | afterChange() }}</p>
            </div>
```

```javascript
            var app = new Vue({
            el: '#app',
            data: {
                name: 'Hello, my name is Đạt'
            },
            filters: {
                afterChange: function(value) {
                return value.toUpperCase();
            }
            }
            });
```
### Vòng đời của một Component

![alt](https://github.com/win123456hy/SboxFrontEnd/blob/master/STEP%2010/lifecycle.PNG)

> Vòng đời  của một Component gồm có 4 phần chính:

+ Create
+ Mount
+ Update
+ Destroy

> Sau đây chúng ta cùng tìm hiểu về từng phần.

#### Create

> Là quá trình khởi tạo diễn ra đầu tiền trên component. Ở quá trình này chúng ta có thể thực hiện các hành động với dữ liệu trước khi chúng được thêm vào DOM.

> Các __hook__(là các hàm, phương thức đặc biệt) của __Create__:

+ __beforeCreate__: là hàm chạy ngay trước khi một component được khởi tạo. Trong quá trình này các __data__ mà chúng ta khai báo chưa __reactive__ đồng thời các __event__ cũng chưa được khởi tạo nên ta không thể sử dụng được _data_ và eve_nt

> VD:

```html
            <template>
            <div>
                <p>{{count}}</p>
            </div>
            </template>

```

```javascript
            <script>
            export default {
            name: 'life-cycle',
            data(){
                return{
                count:0
                }
            },
            beforeCreate() {
                console.log(this.count);
            }
            }
            </script>

```

> Với ví dụ trên khi bật console sẽ báo undefined vì lúc này(beforeCreate) thì data của chúng ta chưa được khởi tạo.

+ __created__: là hàm có thể sử dụng data và event vì nó được dùng ngay khi component được tạo. Nhưng mà __template__ và __Virtual DOM__ chưa được _mount_ và _render_. Tức là khi chúng ta truy cập vào DOM lúc này sẽ có lỗi xảy ra.

> Xét VD:

```html
            <template>
            <div>
                <p id="myName">Hi, my name is Đạt</p>
                <p>{{count}}</p>
            </div>
            </template>

```

```javascript
<script>
            export default {
            name: 'life-cycle',
            data(){
                return{
                count:0
                }
            },
            created() {
                console.log(document.getElementById('myName'));
            }
            }
</script>
```

> Ta thấy console sẽ báo lỗi null vì component khi ở created lúc này __template__ và __Virtual DOM__ chưa được _mount_ và _render_.

#### Mount

> Là quá trình xảy ra trước và sau khi component được khởi tạo. Thường dùng khi ta muốn truy cập vào DOM. Chúng ta không nên dùng khi fetch data vì __mount__ chỉ chạy trong quá trình _client side render_.

> Các hook:

+ __beforeMount__: là hàm được gọi khi component đã được biên dịch và trước lần render đầu tiên. Ở giai đoạn này chúng ta truy cập vào DOM vẫn xảy ra lỗi.

> VD:

```html
            <template>
            <div>
                <p id="myName">Hi, my name is Đạt</p>
                <p>{{count}}</p>
            </div>
            </template>
```

```javascript
            <script>
            export default {
            name: 'life-cycle',
            data(){
                return{
                count:0
                }
            },
            beforeMount() {
                console.log(document.getElementById('myName'));
            }
            }
            </script>
```

> Ta thấy console báo lỗi null.

+ __mounted__: là hàm mà ta có quyền truy cập vào _data,template, DOM_ 

> VD: 

```html
            <template>
            <div>
                <p id="myName">Hi, my name is Đạt</p>
                <p>{{count}}</p>
            </div>
            </template>
```

```javascript
            <script>
            export default {
            name: 'life-cycle',
            data(){
                return{
                count:0
                }
            },
            mounted() {
                console.log(this.count);
                console.log(document.getElementById('myName'));
            },
            }
            </script>
```

> Ta thấy count và DOM hiện ra.

#### Update

> Là quá trình mà được gọi bất cứ khi nào mà data thay đổi.

> Các hook:

+ __beforeUpdate__: là hàm được gọi ngay sau khi data thay đổi và được thực hiện trước khi DOM re-render.

> VD:

```html
            <template>
            <div>
                <p id="myName">Hi, my name is Đạt</p>
                <p>{{count}}</p>
                <button @click="increaseCount">Increase Count</button>
            </div>
            </template>
```

```javascript
<script>
export default {
  name: 'life-cycle',
  data(){
    return{
      count:0
    }
  },
  beforeUpdate() {
    console.log("Count is:"+this.count);
  },
   methods:{
    increaseCount(){
      this.count++;
    }
  }

}
</script>
```

> Ta thấy console trả về count.

+ __updated__: là hàm sau khi beforeUpdate(), khi DOM đã re-render. Dữ liệu cũng là dữ liệu của beforeUpdate().

> VD:

> VD:

```html
            <template>
            <div>
                <p id="myName">Hi, my name is Đạt</p>
                <p>{{count}}</p>
                <button @click="increaseCount">Increase Count</button>
            </div>
            </template>
```

```javascript
<script>
export default {
  name: 'life-cycle',
  data(){
    return{
      count:0
    }
  },
  beforeUpdate() {
    console.log("Count is:"+this.count);
  },
    updated() {
    console.log("Count is:"+this.count);
  },
    methods:{
    increaseCount(){
      this.count++;
    }
  }
}
</script>
```
> Ta thấy cả beforeUpdate và updated đều trả về kết quả như nhau.

#### Destroy

> Là quá trình xảy ra khi mà component chúng ta bị huỷ(ví dụ như khi chuyển từ component này sang component kia).

> Các hook:

+ __beforeDestroy__: là hàm dùng khi ta muốn xoá đi các sự kiện không cần thiết sau khi component bị huỷ. Hàm được gọi trước khi component bị huỷ.
+ __destroyed__: là hàm được gọi khi component đã bị huỷ. Khi hook này được gọi, tất cả các chỉ thị của instance Vue đã được unbound, tất cả các event listeners đã được gỡ bỏ, và tất cả các instance Vue con cũng đã bị hủy.

### Component

