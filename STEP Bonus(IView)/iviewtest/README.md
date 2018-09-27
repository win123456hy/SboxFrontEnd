# Học IView 3

## Cài đặt

> Dùng CDN hoặc npm như sau:

```html
            npm install iview --save
```

> Sau khi cài đặt xong. Mở project lên và import IView vào file main.js

```javascript
            import iView from 'iview';
            import 'iview/dist/styles/iview.css';

            Vue.use(iView);
```

## Sử dụng

> Ở một component nào đó mà ta muốn sử dụng IView thì chỉ cần import.

> VD: Dùng Button và Table trong component App

```javascript
            import { Button, Table } from 'iview';
```

> Trong template ta có thể sử dụng IView bằng kebab-case với prefix là i- hoặc bằng chính tên của Component IView

VD: Với Component Button Iview thì ta có 2 cahcs như sau:

```html
            <Button>Hello</Button>

            <!-- Hoặc-->

            <i-button>Hello</i-button>
```

> Xem các Component và cách sử dụng ở trang https://www.iviewui.com