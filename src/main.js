import Vue from 'vue';
import App from './App.vue';
import LikeNumber from './components/LikeNumber.vue';

Vue.config.productionTip = false;
Vue.component('LikeNumber', LikeNumber);
Vue.filter("upperCase", function(value) {
  console.log('filter');


  return value.toUpperCase();
});
Vue.mixin({
  created() {
    console.log("Global mixin")
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app');
