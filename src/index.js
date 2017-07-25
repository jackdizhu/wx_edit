var script = document.getElementById('start');

// var isIE8 = script && script.getAttribute('data-browser') === 'ie8';
// var jqueryLink = isIE8 ? '//code.jquery.com/jquery-1.11.3' : '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery';

var $ = require('./js/jquery');
require('./js/summernote.js');

require('./js/bs3/settings.js');
require('./js/base/summernote-zh-CN.js');

// var requireByPromise = function (paths) {
//   return $.Deferred(function (deferred) {
//     require(paths, function () {
//       deferred.resolve.apply(this, arguments);
//     });
//   });
// };

// var promise = $.Deferred();
// // editor type setting
// switch ($('script[data-editor-type]').data('editor-type')) {
//   case 'lite':
//     promise = requireByPromise(['summernote/lite/settings']);
//     break;
//   case 'bs3':
//     promise = requireByPromise(['bootstrap', 'summernote/bs3/settings']).then(function () {
//       return requireByPromise(['lang']);
//     });
//     break;
// }

// promise.then(function () {
  // initialize summernote
  $('.summernote').summernote({
    height: 'auto',
    lang: 'zh-CN',
    placeholder: 'type here...'
  });
// });
