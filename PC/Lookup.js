(function() {
   "use strict";
   kintone.events.on("app.record.create.show", function(event) {
       event.record.顧客キー.lookup = true;
       event.record.お客様氏名.lookup = true;
       
       return event;
   });
})();
