// var script = document.getElementById('start');

// var isIE8 = script && script.getAttribute('data-browser') === 'ie8';
// var jqueryLink = isIE8 ? '//code.jquery.com/jquery-1.11.3' : '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery';
require.config({
  baseUrl: 'src/js',
  paths: {
    jquery: '../../dist/jquery-2.1.4/jquery.min',
    bootstrap: '../../dist/bootstrap-3.3.7/js/bootstrap.min',
    lang: '../../lang/summernote-zh-CN'
  },
  shim: {
    bootstrap: ['jquery'],
    lang: ['jquery']
  },
  packages: [{
    name: 'summernote',
    main: 'summernote',
    location: './'
  }]
});

require(['jquery', 'summernote'], function ($) {
  var requireByPromise = function (paths) {
    return $.Deferred(function (deferred) {
      require(paths, function () {
        deferred.resolve.apply(this, arguments);
      });
    });
  };

  var promise = $.Deferred();
  // editor type setting
  switch ($('script[data-editor-type]').data('editor-type')) {
    case 'lite':
      promise = requireByPromise(['summernote/lite/settings']);
      break;
    case 'bs3':
      promise = requireByPromise(['bootstrap', 'summernote/bs3/settings']).then(function () {
        return requireByPromise(['lang']);
      });
      break;
  }

  promise.then(function () {
    // initialize summernote
    $('.summernote').summernote({
      height: 'auto',
      lang: 'zh-CN',
      placeholder: 'type here...'
    });
  });
});
