# JSON SERVER

## Cách cài đặt

> Tạo thư mục rỗng và sau đó dùng cmd gõ lệnh npm trong thư mục đó:

        npm install  -g json-server

> Tiếp theo tạo 1 file json với một vài dữ liệu:

VD: tạo db.json với các dữ liệu sau đây

```json
            {
            "posts": [
                { "id": 1, "title": "json-server", "author": "typicode" }
            ],
            "comments": [
                { "id": 1, "body": "some comment", "postId": 1 }
            ],
            "profile": { "name": "typicode" }
            }
```

> Chạy thử JSON Server bằng lệnh cmd:

            json-server --watch db.json

> Mặc định cổng của JSON Server ở localhost là 3000. Ta vào trình duyệt và gõ URL: http://localhost:3000/posts/1 sẽ thấy dữ liệu được __GET__ về bài post có id=1. Chúng ta có thể chuyển cổng khác bằng --post [giá trị cổng], VD:

            json-server --watch db.json --port 3004


> Các chú ý:

- Nếu ta tạo các request __POST__, __PUT__, __PATCH__ hoặc __DELETE__, những sự thay đổi này sẽ tự động và được lưu an toàn đến file db.json bằng việc sử dụng __lowdb__.

- Thân của request phải là _đối tượng bao đóng_ giống như đầu ra của GET. VD:  {"name": "Foobar"} 

- Id là giá trị bất biến. Bất kì giá trị id nào trong request PUT hoặc PATCH của ta sẽ bị loại bỏ. Chỉ có một giá trị trong request POST được dùng, nhưng chỉ khi nó chưa thực hiện.

- Các request POST, PUT, PATCH phải gồm header có __Content-Type: application/json__ để sử dụng JSON trong phần thân request. Nếu không có thì kết quả vẫn là __OK 200__ nhưng không có thay đổi nào trong dữ liệu.

## Routes 

### Các Route số nhiều

    Là các Route mà có object chứa nhiều phần tử.

> GET    /posts

> GET    /posts/1

> POST   /posts

> PUT    /posts/1

> PATCH  /posts/1

> DELETE /posts/1

### Các Route số ít
 
    Là các Route mà có object chứa ít phần tử.

> GET    /profile

> POST   /profile

> PUT    /profile

> PATCH  /profile


### Bộ lọc

    Dùng để lọc dữ liệu.

> GET /posts?title=json-server&author=typicode

    Để truy cập vào các thuộc tính ở sau hơn ta dùng dấu '.'.

> GET /comments?author.name=typicode

## Phân trang

    Sử dụng _page để chuyển đến trang ta muốn và _limit để giới hạn phần tử cho một trang.

    VD: db.json của chúng ta có 20 bài post, giới hạn cho một trang là 2 bài. Nếu chúng ta muốn gọi đến trang thứ 2 thì ta có lệnh sau:

> GET /posts?_page=2&_limit=2

## Sắp xếp

    Sử dụng _sort để sắp xếp theo thuộc tính nào, _order để sắp xếp danh sách theo thứ tự tăng dần hoặc giảm dần(asc hoặc desc).

    VD: Sắp xếp các bài post theo số lượng view và theo thứ tự tăng dần:

> GET /posts?_sort=views&_order=asc

## Cắt

    Sử dụng _start để xác định vị trí chúng ta muốn bắt đầu để cắt, _end để xác định vị trí kết thúc hoặc _limit để giới hạn số lượng phần tử cắt từ vị trí bắt đầu trở đi.

    VD: 
    Ta muốn lấy ra danh sách các phần tử từ vị trí thư 2 đến 10 trong danh sách 20 bài post:

> GET /posts?_start=2&_end=10

    Vẫn lấy như vậy nhưng với _limit:

> GET /posts?_start=2&_limit=8

## Tìm kiếm 

    Sử dụng q=value để tìm kiếm các phần tử có chứa value trong đó.

> GET /posts?q=inter

## Tuỳ chỉnh Routes

- Bước 1: Tạo một file routes.json. Thêm các tuỳ chỉnh của ta bằng json như sau:

```json
            {
            "/api/*": "/$1", 
            "/:resource/:id/show": "/:resource/:id",
            "/posts/:category": "/posts?category=:category",
            "/articles\\?id=:id": "/posts/:id"
            }
```

- Bước 2: Chạy JSON Server với file routes.json dùng --route.

> json-server db.json --routes routes.json

- Bước 3: Chạy thử trên browser.
```javascript
/api/posts // Giống với /posts
/api/posts/1  // Giống với /posts/1
/posts/1/show  // Giống với posts/1
/posts/javascript // Giống vớ /posts?category=javascript
/articles?id=1/   // Giống vớ /posts/1
```

