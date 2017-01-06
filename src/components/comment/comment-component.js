var Vue = require('vue');
var template = require('./comment-template.html');

var CommentComponent = Vue.extend({
  template,
  props: [
  ],
  data() {
    return {
      message: 'Hello!'
    }
  },
  created() {
  },
  beforeDestroy() {
  },
  watch: {
  },
  methods: {
  }
});

module.exports = CommentComponent;