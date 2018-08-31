
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
 
 > __Project__:
 > https://github.com/win123456hy/SboxFrontEnd/tree/master/STEP%20Bonus(AngularJS)/ToDoListWithYeoMan
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

## 4. Service trong AngularJS

### 4.1 Khái niệm Service

> __Service__ là các hàm có sẵn(Built-in Services) hoặc tự viết(Custom Services) để thực hiện một công việc nào đó. Việc sử dụng Service giúp cho việc viết code nhanh hơn, dễ bảo trì(Maintainable) và kiểm thử(Testable).

### 4.2 Cách dùng

#### 4.2.1 Built-in Services

> AngularJS cung cấp hơn 30 Built-in Services. Sau đây là một số service cơ bản:

- __$http__: Service dùng để tạo __Ajax Request__ lên server.

```javascript
            var app = angular.module("myApp", []);
            app.controller("myCtrl", function ($scope, $http) {
                $http.get("https://jsonplaceholder.typicode.com/users")
                    .then(function (response) {
                        $scope.myData = response;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            });
```
> __Demo__:https://jsfiddle.net/win123456hy/qc9hge5s/

- __$location__: Service dùng để lấy URL trên thanh địa chỉ hoặc tạo URL mới.

```javascript
            var app = angular.module('myApp', []);
            app.controller('myCtrl', function($scope, $location) {
                $scope.absUrl = $location.absUrl(); 
            });
```
> __Demo__:https://jsfiddle.net/win123456hy/jwogubvf/

#### 4.2.2 Custom Services

> Có 3 cách để tạo Custom Service thường dùng là: 

- __Factory method__: là cách viết tập hợp các hàm bên trong. Tên Factory được hiểu như một class. Việc gọi các hàm ra trong Controller giống như việc gọi phương thức trong một class. Factory trả về là một đối tượng(Object)

> VD: Dưới đây là cách tạo một Service ghi ra log tuỳ chỉnh. 
```javascript
            app.factory('LogName', function() {
		        var myName="Tên tôi là Đạt";
            return{
                log: function(){
                        console.log(myName);
                }
            }
            });
```

> Cách chạy hàm này như sau:

```javascript
            app.controller('myCtrl', function($scope, LogName) {
            LogName.log("Dat");
            });
```

> __Demo__:https://jsfiddle.net/win123456hy/gx8yLwcz/
- __Service method__: là cách viết dùng để định nghĩa lại một service và biến thành một Service bản sao. Chúng ta có thể đổi tên, thêm các phương thức cho service đó. Khác với Factory, Service không trả về bất kỳ thứ gì.

> VD: Định nghĩa lại Services LogName là:

```javascript
            app.factory('LogName', function() {
                return{
                log: function(myName){
                console.log(myName);
                }
            }
            });
```

> Ta sẽ định nghĩa bằng Service Method như sau:

```javascript
            app.service('LogNameFix', function(LogName) {
                    this.log=function(a){
                return LogName.log("My name is"+a);
                }
            });
```

> Chạy service:

```javascript
            app.controller('myCtrl', function($scope, LogName,LogNameFix) {
            LogName.log("Đạt");
            LogNameFix.log("Đạt");
```

> __Demo__:https://jsfiddle.net/win123456hy/8ando3cy/

- __Provider Method__: là cách viết khó. Provider trả về giá trị bằng việc sử dụng hàm $get(). 
> VD:
```javascript
            app.provider('logService', function() {
            return {
                $get: function() {
                return {
                    messageCount: 0,
                    log: function(name) {
                    console.log("My name is:"+name);
                    }
                };
                }
            }
            });
```
> Chạy:
```javascript
            app.controller("myCtrl",function ($scope,logService) {
            logService.log("Dat");
            });
```

> __Demo__:https://jsfiddle.net/win123456hy/5sbfu0he/

## 5. Decorator trong AngularJS
### 5.1 Decorator là gì?

> __Decorator__ được hiểu là một mẫu thiết kế được sử dụng để sửa đổi hoặc trang trí của một lớp mà không sửa đổi mã nguồn gốc. Trong AngularJS, Decorator là các hàm cho phép Service, Directive hoặc Filter được sửa đổi trước khi ta sử dụng nó.

### 5.2 Cách sử dụng
> Có 2 cách tạo Decorator:
- Cách 1: __$provide.decorator__

- Cách 2: __module.decorator__

#### 5.2.1 Tạo Decorator với $provide.decorator


> Decorator dùng $provide và $delegate để thay đổi service.

```javascript
            angular.module('myApp', [])

            .config([ '$provide', function($provide) {

            $provide.decorator('$log', [
                '$delegate',
                function $logDecorator($delegate) {

                var originalWarn = $delegate.warn;
                $delegate.warn = function decoratedWarn(msg) {
                    msg = 'Decorated Warn: ' + msg;
                    originalWarn.apply($delegate, arguments);
                };

                return $delegate;
                }
            ]);
            }]);
```

> __Demo__: https://jsfiddle.net/win123456hy/jg4d37yv/

#### 5.2.2 Tạo Decorator với module.decorator

> Hàm này giống với $provide.decorator ngoại trừ việc nó được hiển thị thông qua module API. Nó cho phép ta tách các mẫu Decorator từ khối module cấu hình.

> Vì vậy ta có thể áp dụng nhiều Decorator. Chú ý rằng ứng dụng Decorator luôn chạy theo thứ tự khai báo.

* Nếu một Service được trang trí bởi cả 2 cách $provide.decorator and module.decorator thì nó sẽ chạy theo thứ tự. VD:

```javascript
            angular
            .module('theApp', [])
            .factory('theFactory', theFactoryFn)
            .config(function($provide) {
            $provide.decorator('theFactory', provideDecoratorFn); // chạy đầu tiên
            })
            .decorator('theFactory', moduleDecoratorFn); // chạy thứ hai
```

* Nếu một Service được khai báo nhiều lần, một Decorator sẽ trang trí Service mà được khai báo cuối cùng. VD:

```javascript
            angular
            .module('theApp', [])
            .factory('theFactory', theFactoryFn)
            .decorator('theFactory', moduleDecoratorFn)
            .factory('theFactory', theOtherFactoryFn);

            // `theOtherFactoryFn` được chọn là 'theFactory' provider và nó được trang trí thông qua `moduleDecoratorFn`.
```
## 6. Route trong AngularJS

### 6.1 Khái niệm

> __Route__ là cách tạo các URL khác cho ứng dụng. Route được định nghĩa sau dấu #. Route được tạo ra để điều hướng sang trang khác mà không reload lại trang, là cách để tạo ra trang SPA(Single Page Application).

> VD: http://localhost:3000/index.html#View1

> Khi chạy, AngularJS sẽ nhìn vào Route để hiển thị phần HTML nào được hiển thị.

### 6.2 Cách sử dụng

> Để sử dụng Route, cần phải include trong trang đó 2 dòng sau:

```javascript
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.7.2/angular.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.7.2/angular-route.min.js"></script>
```
> Route dùng __$routeProvider__ provider. Khi $routeProvider được định nghĩa thì ta có thể dùng được 2 service là: __$route__ và __$routeParams__
> $routeProvider có 2 phương thức để định tuyến là:
- __.when(path,route)__: Định nghĩa một route mới cho $route
- __.otherwise(params)__: Định nghĩa route sẽ được sử dụng khi gọi một URL không tồn tại trong các route được khai báo ở trên.

#### 6.2.1 Phương thức when(path,route)

> __path__: là đường dẫn phía sau kí hiệu #.
> __route__: là route với các thuộc tính như sau:

> 1. _Template_: là một chuỗi bao gồm các thẻ html
> 2. _TemplateUrl_: là đường dẫn hoặc function trả về đường dẫn. Nếu dùng templateUrl, angularjs sẽ load view thông qua XHR(XmlHtmlRequest) và view sẽ được hiển thị trong ng-view directive
> 3. _Controller_: là cách trỏ đến controller để điều khiển view tương ứng khi template được tải lên trình duyệt
> 4. _ControllerAs_: định nghĩa tên ngắn gọn của controller ở trên và nó được sử dụng như một class.
> 5. _redirectTo_: chuyển đến một URL cụ thể. Nó là một chuỗi hoặc một function 

```javascript
            var app = angular.module("myApp", ["ngRoute"]);
            app.config(function($routeProvider) {
                $routeProvider
                .when("/", {
                    templateUrl : "main.htm",
                })
                .when("/london", {
                    templateUrl : "london.htm",
                    controller : "londonCtrl"
                })
                .when("/paris", {
                    templateUrl : "paris.htm",
                    controller : "parisCtrl"
                });
                .otherwise({
                    redirectTo: '/'
                });
            });
```

#### 6.2.2 Phương thức otherwise(params)

> Otherwise dùng để định nghĩa đường dẫn khi mà URL không thuộc các mệnh đề when ở trên.

#### 6.2.3 $routeParams service

> $routeParams cho phép chúng ta lấy các tham số của URL hiện tại.

> VD: http://localhost:8000/index.html#pages/1?title=hello

```javascript
            app.config(function($routeProvider) {
                $routeProvider
                .when('/pages/:pageNumber', {
                    controller: 'TemplateCtrl'
                }
                })
                .otherwise({
                    redirectTo: '/'
                })
            })
            app.controller('TemplateCtrl', function($scope, $routeParams){
                $scope.pageNumber = $routeParams.pageNumber
                $scope.title = $routeParams.title
            });
```

```html
            <div>page : {{ pageNumber }}</div>
            <div>title: {{ title }}</div>
```

> Kết quả sẽ là 

```html
            page: 1
            title: hello
```

> __Tìm hiểu thêm tại__: https://www.w3schools.com/angular/angular_routing.asp

## 7. Tạo một Directive

> Việc tạo một __Directive__, ta dùng .directive function và đặt tên directive bằng camelCase. Khi ta gọi directive thì ta phải chia tên ra bằng '-'.

> VD: Tên directive mới theo camelCase là: myDirective

> Khi ta gọi thì viết thường hết và thêm '-' sau mỗi từ. Ở vd này ta sẽ gọi như này: my-directive

> Hàm __.directive__ trả về một Object có các thuộc tính thường dùng là:

* restrict: là cách gọi directive trên HTML theo các dạng cụ thể như: Element, Attribute, Class, Comment.

> Giá trị của restrict là các từ viết tắt của 4 dạng trên là: E(viết tắt của Element), A(viết tắt của Attribute), C(viết tắt của Class), M(viết tắt của Comment). Mặc định giá trị của restrict là EA.

* template: là một chuỗi hoặc hàm mà trả về HTML.

> __Demo__: https://jsfiddle.net/win123456hy/z4wn3pmj/ 

