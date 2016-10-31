const createTasks = require('abota-build');

createTasks({
  css: {
    'sharpei.less': 'sharpei.css',
    'docs.less': 'docs.css'
  },
  dist: [
    'docs/css/sharpei.css'
  ]
});
