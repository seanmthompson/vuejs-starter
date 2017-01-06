var Vue = require('vue');
var AppComponent = require('./components/app/app-component');
require('./sass/main.scss')

new Vue({
  el: '#app',
  components: {
    'app-component': AppComponent
  },
  render: function(h) {
    return h(AppComponent);
  }
})