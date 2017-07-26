
require.config({
  baseUrl: './src/js/',
  paths: {
    jquery: '../dist/jquery-2.1.4/jquery.min',
    bootstrap: '../dist/bootstrap-3.3.7/js/bootstrap.min',
    lang: '../lang/summernote-zh-CN',
    summernote: 'js/summernote'
  },
  shim: {
    bootstrap: ['jquery'],
    lang: ['jquery']
  },
  packages: [{
    name: 'summernote',
    main: 'summernote',
    location: './js/'
  }]
});

require(['jquery', './js/summernote'], function ($) {

  $('.summernote').summernote({
    height: 'auto',
    lang: 'zh-CN',
    placeholder: 'type here...'
  });

});
