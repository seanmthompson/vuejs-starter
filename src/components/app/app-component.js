var Vue = require('vue');
var template = require('./app-template.html');
var CommentComponent = require('../comment/comment-component');

var AppComponent = Vue.extend({
  template: template,
  components: {
    'comment-component': CommentComponent
  },
  data() {
    return {
      message: 'Hey there!',
      othermessage: 'My other message!'
    }
  },
  created() {
  },
  methods: {
    myFunction() {

    }
  }
});

module.exports = AppComponent;