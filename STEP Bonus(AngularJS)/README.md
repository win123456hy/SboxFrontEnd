
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
## 2. Tạo project để code
### 2.1 Tạo với JSFiddle
> Đầu tiên, vào trang chủ https://jsfiddle.net và tạo tài khoản.

> Sau khi tạo tài khoản và đăng nhập xong. Trên màn hình sẽ hiện 

![alt](https://github.com/win123456hy/SboxFrontEnd/blob/master/STEP%20Bonus(AngularJS)/source/assets/img/Capture.PNG)

> Nhìn vào hình ta thấy màn hình được chia ra làm 4 phần:
- Góc trên bên trái: Dùng để viết  __HTML__. 
- Góc trên bên phải: Dùng để viết  __CSS__.
- Góc dưới bên trái: Dùng để viết __Javascipt__.
- Góc dưới bên phải: Phân vùng __Preview__ sản phẩm, project.

> Để code AngularJS trên JSFiddle ta có 2 cách:
- Cách 1: Bấm vào Resource(phần mũi tên chỉ). Nhập link sau phần src ở phần II. Hướng dẫn -> 1. Cài đặt(VD:"https://ajax.googleapis.com/ajax/libs/angularjs/1.7.2/angular.min.js) hoặc gõ vào phần Javascrip/CSS Url là AngularJS và chọn nó.

![alt](https://github.com/win123456hy/SboxFrontEnd/blob/master/STEP%20Bonus(AngularJS)/source/assets/img/Capture1.PNG)

![alt](https://github.com/win123456hy/SboxFrontEnd/blob/master/STEP%20Bonus(AngularJS)/source/assets/img/Capture3.PNG)

- Cách 2: Bấm vào JavaScipt.... giống hình bên dưới.

![alt](https://github.com/win123456hy/SboxFrontEnd/blob/master/STEP%20Bonus(AngularJS)/source/assets/img/Capture4.PNG)

        Sau đó chọn như trong hình.

 ![alt](https://github.com/win123456hy/SboxFrontEnd/blob/master/STEP%20Bonus(AngularJS)/source/assets/img/Capture5.PNG)

 > Vậy là ta đã hoàn thành việc tạo một môi trường code online học Angular. Việc còn lại là các bạn chỉ cần viết code thôi.

> Link code demo: https://jsfiddle.net/win123456hy/4ucpzL6m
 ### 2.2 Tạo với Yeoman AngularJS

 > Với __Yeoman AngularJS__ thì việc tạo project sẽ được tự động hoá và được viết theo mô hình MVC. 

 > Trước tiên, để cài được Yeoman thì máy chúng ta phải cài __NodeJS__. Để cài NodeJS ta vào trang
 https://nodejs.org/en/ , tài về máy và cài đặt.
> Khi cài đặt xong, ta cài yo và các trình quản lý khác bằng CMD.

> __npm install -g grunt-cli bower yo generator-karma generator-angular__




> Sau đó cài AngularJS với Bower bằng CMD như sau:

> __Chú ý__: Phải cài __Git__ trước khi tiến hành cài AngularJS.

> Link:https://git-scm.com/

> __bower install angular__

> __Chú ý__: Nếu chương trình báo lỗi thiếu Bower thì ta phải cài Bower bằng CMD như sau:

> __npm install bower__


> Tiếp đến tạo một thư mục để chưa project bằng cách bình thường hoặc CMD. Sau khi tạo xong, mở thư mục đó lên và bấm vào thanh URL và gõ cmd và bấm Enter như hình để vào cmd:

 ![alt](https://github.com/win123456hy/SboxFrontEnd/blob/master/STEP%20Bonus(AngularJS)/source/assets/img/Capture6.PNG)

  ![alt](https://github.com/win123456hy/SboxFrontEnd/blob/master/STEP%20Bonus(AngularJS)/source/assets/img/Capture7.PNG)

> Sau khi vào CMD,ta tiến hành cài đặt Yeoman bằng lệnh:

> __yo angular__

> Màn hình sau đó sẽ như bên dưới, bấm n sau đó Enter.

 ![alt](https://github.com/win123456hy/SboxFrontEnd/blob/master/STEP%20Bonus(AngularJS)/source/assets/img/Capture8.PNG)

 > Tiếp theo, nếu bạn dùng Sass trong project thì bấm y. Nếu không bấm n rồi Enter.

 > Chú ý: Cần phải cài Ruby và Compass. Để cài Ruby vào link sau:https://rubyinstaller.org/downloads/

> Sau khi xong Ruby, cài compass bằng lệnh CMD:

> __gem install compass__

  ![alt](https://github.com/win123456hy/SboxFrontEnd/blob/master/STEP%20Bonus(AngularJS)/source/assets/img/Capture9.PNG)

> Tương tự, nếu dùng Boostrap thì y, không thì n rồi Enter tiếp.

> Sau đó, một danh sách nữa hiện ra như hình dưới. Ấn Enter nếu muốn dùng mặc định. Hoặc chọn các mục cần chọn bằng phím lên xuống, hoặc có thể chọn tất cả bằng phím a rồi Enter. 

 ![alt](https://github.com/win123456hy/SboxFrontEnd/blob/master/STEP%20Bonus(AngularJS)/source/assets/img/Capture10.PNG)

 > Đợi một chút cho chương trình cài đặt xong và hưởng thành quả.
 
 > Nếu muốn chạy thử trên trình duyệt web thì ta dùng lênh như sau:

> __grunt serve__

> Giờ ta đã có một project MVC để học AngularJS với Yeoman. Hình minh hoạ:

 ![alt](https://github.com/win123456hy/SboxFrontEnd/blob/master/STEP%20Bonus(AngularJS)/source/assets/img/Capture11.PNG)
 
## 3. Directives trong AngularJS

> __Directive__ là cú pháp mà AngularJS tạo ra và được đặt vào trong các thẻ 
> HTML dùng để định nghĩa thêm giúp cho việc quản lý code của AngularJS thuận 
> tiện hơn. Các directive thường bắt đầu bằng  __ng-__ và có thể viết như một 
> thẻ,class,thuộc tính hay comment. Ngoài ra chúng ta có thể tự tạo directive.

### Các directive cơ bản:

*  __ng-app__:  đóng vai trò là main-module. Nếu thẻ nào khai báo nó thì tất cả các thẻ bên trong sẽ sử dụng được AngularJS. Có 2 cách khai báo là:

>       Cách 1: ng-app=”” hay còn gọi là ng-app rỗng.

                       
```html
                <body ng-app="">
                    <input ng-model="message" />
                    {{message}}
                </body>
```

>       Cách 2: ng-app=”tên” hay còn gọi là ng-app có giá trị.

```html
                <body ng-app="myapp">
                    <input ng-model="message" />
                    {{message}}
                </body>
```

>       Chú ý: Nếu là ng-app có giá trị thì ta phải khai báo nó trong js nếu không AngularJS sẽ không hoạt 
>       động được. Với ví dụ trên thì ta thêm vào javascipt như sau:



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

>       Còn khi ng-app rỗng thì khai báo controller như một function:

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

>       Với ví dụ trên thì khi ta nhập và một ký tự thì ngay lập tức data sẽ được binding ra và ta sẽ nhìn 
>       thấy nó ngay khi ta nhập( giống như AJAX). 

* __ng-init__: dùng để khởi tạo giá trị vào _scope_.



```html
                <div ng-app="" ng-init="myText='Hello World!'">

                    <h1>{{myText}}</h1>
                </div>
```

>       Với ví dụ trên ta khởi tạo một biến myText vào scope và t chỉ cần gọi ra khi cần.

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

>       Với ví dụ trên thì ta khởi tạo myVar là true. myVar là biểu thức của ng-if. Do vậy nó sẽ thêm thẻ ở 
>       dưới vào DOM và sẽ hiện lên màn hình. Nếu checkbox unchecked, myVar sẽ trả về false và các thẻ bên 
>       dưới ng-if sẽ bị xoá đi trong DOM.

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
