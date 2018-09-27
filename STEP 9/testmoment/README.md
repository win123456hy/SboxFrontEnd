# Học MOMENT

## Cài đặt

```html
            npm install moment --save
```

> Trong main.js của Vue-Cli thêm các dòng lệnh sau:

```javascript
            import moment from "moment";

            Vue.prototype.$moment = moment;
```
> Để sử dụng moment thì moment bình thường chuyển thành $moment
## Khởi tạo

> Cú pháp:
```javascript
            moment();
```
> Ý nghĩa: Trả về thời gian hiện tại.

> VD: 
```javascript
            var timeNow = moment();
            console.log(timeNow);
```

## Format

> Ý nghĩa: Dùng để format một chuỗi sang thời gian.

### String
```javascript
            var day = moment("1995-12-25");
            console.log(day);
            //=> "1995-12-24T17:00:00.000Z"
```

> Tìm hiểu thêm các kiểu khác trên https://momentjs.com/docs/#/parsing/string/

### String + Format

```javascript
            var day = moment("12-25-1995", "MM-DD-YYYY");
            console.log(day);
            //=> "1995-12-24T17:00:00.000Z"
```
> Tìm hiểu thêm các kiểu khác trên https://momentjs.com/docs/#/parsing/string-formats/  

## Format để hiển thị

```javascript
            var day = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
            console.log(day);
            //=> Tuesday, September 25th 2018, 11:43:49 am
```
> Tìm hiểu thêm các kiểu khác trên https://momentjs.com/docs/#/displaying/ 

## Unix

> __Unix__ hay còn gọi là Epoch hay POSIX là thời gian khoảng thời gian tính bằng giây hoặc mili-giây từ thời điểm 01/01/1970 (UTC) 00:00:00 đến một thời điểm nào đó.

> Cú pháp của Moment để hiển thị Unix:

```javascript
            moment().valueOf();
            // Hoặc
            +moment();
```

> VD: 
```javascript
var day = +moment();
console.log(day);
//=> 1537850763804
```