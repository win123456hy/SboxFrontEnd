# Chỉnh sửa bài tập về SetInterVal và SetTimeout

> Bước 1: Khởi tạo biến 

```javascript
var timeout=null; 
```

> Bước 2: Trong sự kiện khi mà người dùng gõ phím, dùng clearTimeOut() để bỏ time out.

```javascript
function keyPressed(){
    clearTimeOut(timeout);
}
```
> Bước 3: Truyền hàm vào biến đã khỏi tạo.

```javascript
function keyPressed(){
    clearTimeOut(timeout);
    timeout=setTimeOut(()=>{
        // Làm việc gì đó. VD: Gọi Fetch API bên trong hàm này. Khi người dùng gõ phim thì TimeOut sẽ bị xoá bằng hàm clearTimeOut. Nếu 1s sau khi người dùng không nhập gì tiếp thì sẽ thực hiện Fetch API giúp giảm thiểu việc gửi quá nhiều request. 
    },1000);
}
```