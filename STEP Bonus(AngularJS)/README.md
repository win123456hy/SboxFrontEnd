
# HỌC ANGULARJS
## I .AngularJS là gì?

>__AngularJS__ là một framework dành cho các web _dynamic_. Dùng để tạo các 
>ứng dụng _Client-Side_ theo mô hình _MVC_. Nó hoạt động dạng _Single Page_. 
>Hỗ trợ _binding_ và _depending  injection_. Nó cho phép mở rộng cú pháp HTML
> để diễn đạt các thành phần ứng dụng một các rõ ràng.
> 
## II. Hướng dẫn
## 1. Cài đặt
>Lên trang chủ [https://angularjs.org/] và tải về. Sau đó trong file dẫn 
>external link script vào trang đó là có thể dùng được.

>Hoặc đơn giản hơn là vào trang chủ và tìm đến đoạn. 

```html
            <script src="https://ajax.googleapis.com/ajax/libs/angularjs/.....<số phiên bản>/angular.min.js">
            </script>
```

>và chèn tương tự như trên vào trang.

## 2. Directives trong AngularJS

> __Directive__ là cú pháp mà AngularJS tạo ra và được đặt vào trong các thẻ 
> HTML dùng để định nghĩa thêm giúp cho việc quản lý code của AngularJS thuận 
> tiện hơn. Các directive thường bắt đầu bằng  __ng-__ và có thể viết như một 
> thẻ,class,thuộc tính hay comment. Ngoài ra chúng ta có thể tự tạo directive.

### Các directive cơ bản:

*  __ng-app__:  đóng vai trò là main-module. Nếu thẻ nào khai báo nó thì tất cả các thẻ bên trong sẽ sử dụng được AngularJS. Có 2 cách khai báo là:

> Cách 1: _ng-app_=”” hay còn gọi là ng-app rỗng.

                       
```html
                <body ng-app="">
                    <input ng-model="message" />
                    {{message}}
                </body>
```

> Cách 2: _ng-app_=”tên” hay còn gọi là ng-app có giá trị.

```html
                <body ng-app="myapp">
                    <input ng-model="message" />
                    {{message}}
                </body>
```

__Chú ý__:
Nếu là __ng-app__ có giá trị_ thì ta phải khai báo nó trong js nếu không AngularJS sẽ _không hoạt động được_. Với ví dụ trên thì ta thêm vào javascipt như sau:



```javascript
                var myApp = angular.module("myapp", []);
```

* __ng-controller__: thiết lập giá trị, trạng thái ban đầu cho đối tượng hoặc 
  thêm các hàm, hành vi vào đối tượng __$scope__. Tất cả các controller phải 
  khai báo trong js. Mỗi controller chỉ được sử dụng trong phạm vi của một ng-app.



```html
                <body ng-app="myapp">
                    <div ng-controller="hellocontroller">
                        <p>Xin chào {{hello.title}}</p>
                    </div>
                </body>
```

```javascript
                var myApp = angular.module("myapp", []);
                myApp.controller("hellocontroller", function() {
                    // do anything
                });
```

> Còn khi ng-app rỗng thì khai báo controller như một function:

```javascript 
                function hellocontroller($scope) {
                    $scope.hello = {
                        title: 'các bạn',
                    };
                }
```
* __ng-model__: dùng để bind giá trị của _HTML controls_( như input, select, 
  textarea) vào dữ liệu của ứng dụng. Nó dùng _Two-ways binding_ để bind , có 
  nghĩa là dữ liệu sẽ thay đổi đồng thời khi mà các HTML control thực 
  hiện thao tác. 



```html
                <div ng-app="myApp" ng-controller="myCtrl">
                    Name: <input ng-model="name">
                </div>
```


```javascript
                var app = angular.module('myApp', []);
                app.controller('myCtrl', function($scope) {
                    $scope.name = "John Doe";
                });
```

> Với ví dụ trên thì khi ta nhập và một ký tự thì ngay lập tức data sẽ được binding ra và ta sẽ nhìn thấy nó ngay khi ta nhập( giống như __AJAX__). 

* __ng-init__: dùng để khởi tạo giá trị vào _scope_.



```html
                <div ng-app="" ng-init="myText='Hello World!'">

                    <h1>{{myText}}</h1>
                </div>
```

> Với ví dụ trên ta khởi tạo một biến myText vào scope và t chỉ cần gọi ra khi cần.

* __ng-if__: dùng để xoá thẻ HTML nếu biểu thức trong nó trả về _false_
  Nếu trả về _true_ thì nó sẽ thêm thẻ vào DOM.


```html
                <input type="checkbox" ng-model="myVar" ng-init="myVar = true">
                <div ng-if="myVar">
                    <h1>Welcome</h1>
                    <p>Welcome to my home.</p>
                    <hr>
                </div>
```

> Với ví dụ trên thì ta khởi tạo myVar là true. myVar là biểu thức của ng-if. Do vậy nó sẽ thêm thẻ ở dưới vào DOM và sẽ hiện lên màn hình. Nếu checkbox _unchecked_, myVar sẽ trả về false và các thẻ bên dưới ng-if sẽ bị xoá đi trong DOM.

* __ng-repeat__: Đây là chỉ thị lặp, có tác dụng lặp qua một danh sách các
   phần tử, khi chúng ta có một danh sách các phần tử, muốn hiển thị chúng
    lên trang web thì chúng ta lặp qua danh sách đó và hiển thị các phần tử 
    theo một khuôn mẫu giống nhau. 


```html
                <body ng-app="myApp" ng-controller="myCtrl">

                    <h1 ng-repeat="x in records">{{x}}</h1>
                </body>
                ```
                ```javascript
                var app = angular.module("myApp", []);
                app.controller("myCtrl", function($scope) {
                    $scope.records = [
                        "Alfreds Futterkiste",
                        "Berglunds snabbköp",
                        "Centro comercial Moctezuma",
                        "Ernst Handel",
                    ]
                });
```


* __ng-show__: dùng để show các thẻ HTML khi biểu thức là _true_. Nếu là 
  _false_ thì các thẻ sẽ bị ẩn đi chứ không xoá  như ng-if.



```html
                Show HTML: <input type="checkbox" ng-model="myVar">
                <div ng-show="myVar">
                    <h1>Welcome</h1>
                    <p>Welcome to my home.</p>
                </div>
```

* __ng-submit__: dùng để chạy một hàm khi form được submit.


```html
                <body ng-app="myApp" ng-controller="myCtrl">

                    <form ng-submit="myFunc()">
                        <input type="text">
                        <input type="submit">
                    </form>

                    <p>{{myTxt}}</p>
                </body>
```
```javascript
                var app = angular.module("myApp", []);
                app.controller("myCtrl", function($scope) {
                    $scope.myTxt = "You have not yet clicked submit";
                    $scope.myFunc = function () {
                        $scope.myTxt = "You clicked submit!";
                    }
                });
```

## Link bài làm: 
[https://jsfiddle.net/win123456hy/4ucpzL6m/519/]
