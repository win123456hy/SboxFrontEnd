import Vue from 'vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import locale from 'iview/dist/locale/en-US';

var loca=Vue.use(iView, { locale });

var globalProp=Vue.use(iView,{
  transfer: true,
  size: 'large'
});

export default {loca,globalProp};
