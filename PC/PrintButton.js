(function() {
   "use strict";
   kintone.events.on("app.record.print.show", function(event) {
       var record = event.record;
       var status = record.ステータス.value;
       
       if(status !== "承認済") {
           var buttonelement = document.getElementById("print-button-gaia");
           buttonelement.style.display = "none";
           
       }
       return event;
   });
})();
