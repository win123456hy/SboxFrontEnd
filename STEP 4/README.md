# Promise trong Javascript

## Khái niệm
> Ví dụ Promise trong thực tế:

        "Tưởng tượng như bạn là một đứa trẻ. Mẹ bạn hứa với bạn rằng mẹ sẽ mua cho con một chiếc điện thoại mới vào tuần sau."

> Bạn sẽ không biết được bạn sẽ nhận được chiếc điện thoại vào tuần sau hay không. Mẹ của bạn thực sự muốn mua cho bạn chiếc điện thoại đó, nhưng vì một lý do nào đó có thể sẽ không mua được.

> Vì vậy, đó chính là __Promise(Lời hứa)__.

> Một lời hứa có 3 trạng thái:

- __Pending__: Bạn không biết rằng bạn có thể nhận được chiếc điện thoại vào tuần sau không.
- __Resolved__: Mẹ bạn đã thực hiện lời hứa và mua cho bạn chiếc điện thoại.
- __Rejected__: Bạn sẽ không nhận được chiếc điện thoại mới bởi vì mẹ bạn không đủ tiền hoặc còn nhiều lý do khác.

## Tạo một Promise

```javascript
            var isMomHappy = false;

            // Promise
            var willIGetNewPhone = new Promise(
                function (resolve, reject) {
                    if (isMomHappy) {
                        var phone = {
                            brand: 'Samsung',
                            color: 'black'
                        };
                        resolve(phone); // fulfilled
                    } else {
                        var reason = new Error('mom is not happy');
                        reject(reason); // reject
                    }

                }
            );
```

> __Giải thích code__:

> Đầu tiền, chúng ta có một biến boolean __isMomHappy__ để xác định trạng thái hạnh phúc của mẹ bạn.

> Tiếp theo chúng ta có một biến Promise __willIGetNewPhone__, Promise có thể được giải quyết(tức resolved) nếu mẹ bạn mua cho chiếc điện thoại mới hoặc bị thất hứa(tức rejected) nếu mẹ bạn không hạnh phúc.

> Đoạn code trên là cú pháp chuẩn để tạo Promise, bạn có thể đọc thêm ở [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

> Các điều các bạn cần phải nhớ là khi kết quả trả về thành công, Promise sẽ gọi hàm __resolved(gia_tri_tra_ve)__, ngược lại Promise sẽ gọi hàm __rejected(error)__. Trong ví dụ trên, nếu mẹ bạn hạnh phúc, chúng ta sẽ có chiếc điện thoại mới. Vì vậy, chúng ta gọi hàm _resolved_ với _phone_ là giá trị trả về: __resolved(phone)__. Ngược lại, chúng ta gọi hàm _rejected_ với _reason_(một lý do): __rejected(reason)__.

## Dùng một Promise

```javascript
            var askMom = function () {
                willIGetNewPhone
                    .then(function (fulfilled) {
                        // yay, bạn đã nhận được điện thoại mới
                        console.log(fulfilled);
                    // output: { brand: 'Samsung', color: 'black' }
                    })
                    .catch(function (error) {
                        // oops, mẹ bạn không mua nó
                        console.log(error.message);
                    // output: 'mẹ bạn không hạnh phúc'
                    });
            };

            askMom();
```
> __Giải thích code__:

> Đầu tiên, chúng ta tạo một hàm __askMom__. Bên trong hàm chúng ta sẽ sử dụng Promise ở phần tạo lúc trước là  __willIGetNewPhone__ 

> Tiếp theo, khi chúng ta muốn lấy một vài hành động khi mà Promise resolved hoặc rejected, chúng ta sử dụng __.then__ và __.catch__ để xử lý hành động của chúng ta.

> Trong ví dụ trên của chúng ta, ta có hàm __function(fulfilled)__ trong __.then__. Giá trị __fulfilled__ là giá trị của chiếc điện thoại khi mà lời hứa của mẹ bạn được thức hiện __resolve(phone)__.

> Tiếp đến, ta có hàm __function(error)__ trong __.catch__. Như ta đoán, giá trị __error__ chính là giá trị lý do trong __rejected(reason)__ khi mà mẹ bạn thất hứa.

> __Demo__: https://jsbin.com/nifocu/1/edit?js,console 

> Hãy chạy với 2 trạng thái isMomHappy là true và false. Chúng ta sẽ thấy kết quả. 

## Chuỗi Promise

> Promise có thể có phản ứng dây chuyền.

> Áp dụng thực tế, bạn hứa sẽ cho bạn bè bạn xem chiếc điện thoại đó khi mẹ bạn mua cho.

> Chúng ta sẽ có lời hứa thứ 2:

```javascript
            // Promise thứ 2
            var showOff = function (phone) {
                return new Promise(
                    function (resolve, reject) {
                        var message = 'Ê, mẹ tao mua cho tao điện thoại mới nè' +
                            phone.color + ' ' + phone.brand + ' phone';

                        resolve(message);
                    }
                );
            };
```

> Chú ý: Trong ví dụ trên chúng ta nhận ra rằng không cần reject. Chúng ta có thể viết ngắn lại như sau:

```javascript
            var showOff = function (phone) {
                var message = 'Ê, mẹ tao mua cho tao điện thoại mới nè' +
                            phone.color + ' ' + phone.brand + ' phone';

                return Promise.resolve(message);
            };
```

> Giờ, chúng ta hãy xâu chuỗi các Promise lại với nhau. 

            ```javascript
            var askMom = function () {
                willIGetNewPhone
                .then(showOff) // đặt ở đây
                .then(function (fulfilled) {
                        console.log(fulfilled);
                    // output: 'Ê, mẹ tao mua cho tao điện thoại mới nè.'
                    })
                    .catch(function (error) {
                        // oops, mẹ không mua nó
                        console.log(error.message);
                    // output: 'mẹ bạn không hạnh phúc'
                    });
            };
```

## Promise là Asynchronous(Bất đồng bộ)

> Code:

```javascript
            var askMom = function () {
                console.log('Trước khi hỏi'); // log before
                willIGetNewPhone
                    .then(showOff)
                    .then(function (fulfilled) {
                        console.log(fulfilled);
                    })
                    .catch(function (error) {
                        console.log(error.message);
                    });
                console.log('Sau khi hỏi'); // log after
            }
``` 

> Kết quả dự đoán:

```html
Trước khi hỏi
Ê, mẹ tao mua cho tao điện thoại mới nè
Sau khi hỏi
```

> Thực tế khi chạy code:

```html
Trước khi hỏi
Sau khi hỏi
Ê, mẹ tao mua cho tao điện thoại mới nè
```

> __Giải thích__: Bởi vì __cuộc sống__(hay __JS__) sẽ không chờ đợi con người. __Bạn__, hay __đứa trẻ__, sẽ không ngừng chơi trong khi chờ đợi lời hứa của mẹ bạn. Đó là __Asynchronous__. Đoạn code trên sẽ chạy mà không bị chặn hay chờ kết quả. Bất kì điều gì phải chờ đợi thì bạn đặt nó trong __.then__.

## Khi nào thì dùng Promise

> Khi mà kết quả trả về của một chức năng nào đó mà ta không biết trước được nó có thể có hoặc không trả về dữ liệu. Chúng ta thường hay sử dụng Promise cho việc gọi APIs, tải Files, đọc Files do các việc đó thường hay bất đồng bộ. Đó là lúc Promise giúp ra code sạch, thoát khỏi địa ngục CallBack và tránh xảy ra lỗi hơn.



