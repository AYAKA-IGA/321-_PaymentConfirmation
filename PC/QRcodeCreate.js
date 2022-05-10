(function($) {
  "use strict";
  kintone.events.on(['app.record.detail.show','app.record.print.show'], function (event) {

    $('#user-js-space').qrcode({text:"https://forms.gle/TkP6VXBFih9kStFq8", width: 100, height: 100});
    return event;
  });
})(jQuery);