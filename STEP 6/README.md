# JS Nâng cao:NODEJS,NPM, WebStorm(2 ngày)

## NODEJS

> Là _Javascript_ ở phía _Server_. Dùng để xây dựng các ứng dụng Restful API(JSON), RealTime,... 

> Ưu điểm khi dùng NODEJS:

+ __Asynchronous__ (Bất đồng bộ)
+ __Chạy nhanh__
+ __Đơn luồng__
+ __Không đệm__
+ __Có giấy phép bởi MIT License__

## Cách cài đặt

> Vào trang chủ https://nodejs.org/en/ để tải về và cài đặt. 

> Sau khi cài đặt xong, để kiểm tra xem việc cài đặt vào máy chưa thì ta dùng cmd để kiểm tra:

```html
            node -v
```

> Nếu hiện ra version của Nodejs thì tức là ta đã cài thành công Nodejs trên máy tính. 

## NPM

> Là viết tắt của __Node Package Manager__, dùng để quản lý các thư viện của NodeJS và cài đặt các thư viện mã nguồn mở phục vụ cho việc viết code dễ dàng và thuận tiện hơn. 

> NPM được tích hợp sẵn khi ta cài NodeJS.

> Để kiểm tra phiên bản của NPM  thì ta dùng lệnh cmd:

```html
            npm -v
```

> Cài một thư viện bằng NPM cực kì đơn giản, ta chỉ cần dùng lệnh cmd.

> VD: Ta cần cài thư viện Lodash

```html 
            npm install lodash
```
> Sau khi cài đặt xong thì project sẽ có thêm thư mục __node_modules__. Là nơi chứa các code của thư viện chúng ta vừa cài đặt và một file package-lock.json để chứa những thay đổi trong project chúng ta.

## Tạo project với NODEJS và NPM

> Đầu tiên tạo 1 thư mục để chứa project.

> Sau đó dùng cmd để trỏ đến thư mục đó và gõ:

```html
            npm init
```

> Tiếp theo nhập các thông tin tương đương với các dòng thông báo. Trong đó có:

+ __name__: Tên của Project
+ __version__: Version của Project
+ __description__: Mô tả cho Project
+ __entry point__: File chạy chính (chạy đầu tiên) của Project
+ __scripts__: Danh sách các khai báo cấu hình bổ sung cho npm. Như trong chuỗi trên thì giá trị của test chính là câu thông báo và dừng chương trình khi bị lỗi.
+ __git repository__: Đưa lên git.
+ __keyword__: Từ khoá dùng để SEO.
+ __author__: Tên tác giả của Project
+ __license__: License của Project, giá trị mặc định là ISC.

> Nếu bạn muốn để mặc định hết thì ta chỉ cần Enter để skip qua các bước để hoàn tất quá trình khởi tạo.

> Sau đó, mở file package.json vừa tạo xong để xong các thông tin chùng ta vừa cung cấp.

> __Note__: Khi ta thêm các thư viện mở, file package.json sẽ có thêm phần __dependencies__. Đó là nơi liệt kê ra các thư việc chúng ta cài cắm vào project. Chúng ta có thể thêm hoặc sửa đổi __dependencies__ bằng một số cách ghi sau:

- __"*"__: Cài đặt phiên bản mới nhất cho thư viện đó
- __"~1.5.2"__: Cài đặt các phiên bản nằm trong khoảng xấp xỉ. Ở đây là các phiên bản từ >=1.5.0 đến <1.6.0.
- __"^1.0.5"__: Cài các phiên bản từ từ 1.0.5 đến <1.1.0.
- __">0.10.0"__: Cài các phiên bản lớn hơn 0.10.0.

> VD: Cài lodash phiên bản mới nhất thì ta sửa __dependencies__ trong file package.json như sau:

```json
            "dependencies" : {
                    "lodash": "*",
            }
```

> Sau đó ta chỉ cần vào cmd và gõ lệnh dưới đây là các chỉnh sửa __dependencies__ trong file package.json sẽ được cài đặt. 

```html
            npm install
```

> Tiếp đến, để tạo server thì đầu tiên, tạo một file server.js và viết code javascript ở dưới vào

```javascript
            var http = require('http');

            http.createServer(function (req, res) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('Hello World!');
            }).listen(8080);
```

> Chạy server bằng lệnh:

```html
            node server.js
```

> Sau khi nhập lệnh, server của chúng ta đã được khởi tạo ở localhost cổng 8080. Khi ta tắt cmd đi thì Server của chúng ta sẽ bị sập. Muốn khởi động lại chỉ cần chạy lại lênh trên thôi.

> Để thử chúng ta vào browser, gõ url localhost:8080 và xem kết quả

> Đó là ứng dụng căn bản của NODEJS.