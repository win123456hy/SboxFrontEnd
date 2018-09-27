# VUE ECHARTS
> Là component dùng để tạo biểu đồ.
# Cài đặt

> Với npm:

```html
            npm install vue-echarts
```
> Thông thường:
- Vào trang https://github.com/ecomfe/vue-echarts và tải vue-echarts.js trong thư mục dist. 
- Nhúng nó vào trang html. VD: 
```javascript
<script src="path/to/vue-echarts/dist/vue-echarts.js"></script>
```

# Sử dụng

## ES Modules với npm và vue-loader

> Thêm các dòng lệnh sau vào file main.js:

```javascript
            import Vue from 'vue'
            import ECharts from 'vue-echarts/components/ECharts'

            // import ECharts modules manually to reduce bundle size
            import 'echarts/lib/chart/bar'
            import 'echarts/lib/component/tooltip'

            // register component to use
            Vue.component('v-chart', ECharts)
```