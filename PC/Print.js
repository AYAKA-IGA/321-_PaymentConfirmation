(function() {
   "use strict";
   kintone.events.on("app.record.print.show", function(event) {
        var record = event.record;
        console.log(record);
        kintone.app.record.setFieldShown('根拠資料', false);
        kintone.app.record.setFieldShown('注意事項', false);
        kintone.app.record.setFieldShown('店舗名', false);
        kintone.app.record.setFieldShown('契約者進捗レコード番号',false);
        kintone.app.record.setFieldShown('顧客キー',false);
        kintone.app.record.setFieldShown('お客様氏名_旧',false);
       
        /*非表示にする*/
        if(!record.追加項目金額1.value){
            kintone.app.record.setFieldShown("追加項目金額1", false);
            kintone.app.record.setFieldShown("追加項目支払先1", false);
            kintone.app.record.setFieldShown("追加項目1", false);
            var element1 = kintone.app.record.getSpaceElement("add1");
            element1.parentNode.style.display = "none";
        }
        if(!record.追加項目金額2.value){
            kintone.app.record.setFieldShown("追加項目金額2", false);
            kintone.app.record.setFieldShown("追加項目支払先2", false);
            kintone.app.record.setFieldShown("追加項目2", false);
            var element2 = kintone.app.record.getSpaceElement("add2");
            element2.parentNode.style.display = "none";
        }
        if(!record.追加項目金額3.value){
            kintone.app.record.setFieldShown("追加項目金額3", false);
            kintone.app.record.setFieldShown("追加項目支払先3", false);
            kintone.app.record.setFieldShown("追加項目3", false);
            var element3 = kintone.app.record.getSpaceElement("add3");
            element3.parentNode.style.display = "none";
        }
                
        if(!record.リフォーム金額.value){
            kintone.app.record.setFieldShown("リフォーム金額", false);
            kintone.app.record.setFieldShown("リフォーム支払先", false);
            kintone.app.record.setFieldShown("他社リフォーム費用", false);
            var element4 = kintone.app.record.getSpaceElement("add4");
            element4.parentNode.style.display = "none";
        }
        if(!record.売主_追加金額.value){
            var element5 = ["売主_追加項目","売主_追加金額"];
            element5.forEach(function(field){
            var element = kintone.app.record.getFieldElement(field);
            element.style.borderWidth = '0px';
            element.style.fontSize = '0px';
            element.style.backgroundColor = '#f5f5f5';
            });
        }
        if(!record.弊社_追加金額.value){
            var element6 = ["弊社_追加項目","弊社_追加金額"];
            element6.forEach(function(field){
            var element = kintone.app.record.getFieldElement(field);
            element.style.borderWidth = '0px';
            element.style.fontSize = '0px';
            element.style.backgroundColor = '#f5f5f5';
            });
        }
        if(!record.管理費等清算金.value){
            var element7 = ["売主_管理費等清算金","管理費等清算金"];
            element7.forEach(function(field){
            var element = kintone.app.record.getFieldElement(field);
            element.style.borderWidth = '0px';
            element.style.fontSize = '0px';
            element.style.backgroundColor = '#f5f5f5';
            });
        }
        if(!record.追加項目金額4.value){
            kintone.app.record.setFieldShown("追加項目金額4", false);
            kintone.app.record.setFieldShown("追加項目支払先4", false);
            kintone.app.record.setFieldShown("追加項目4", false);
            var element8 = kintone.app.record.getSpaceElement("add5");
            element8.parentNode.style.display = "none";
        }
        if(!record.追加項目金額5.value){
            kintone.app.record.setFieldShown("追加項目金額5", false);
            kintone.app.record.setFieldShown("追加項目支払先5", false);
            kintone.app.record.setFieldShown("追加項目5", false);
            var element9 = kintone.app.record.getSpaceElement("add6");
            element9.parentNode.style.display = "none";
        }
         if(!record.自社口座情報.value){
            kintone.app.record.setFieldShown("自社口座情報", false);
        }
       
       /*枠線削除、背景色統一*/
        const fields = ["売主振込先","管理費等清算金","固定資産税等清算金","売主振込額","計算式","売買残代金","決済場所","決済日時",
                        "通帳残額","融資実行額","合計金額","リフォーム支払先","火災保険","リフォーム金額","収入印紙代","銀行融資事務手数料","お客様氏名",
                        "火災保険料","自社振込先","自社振込金額","リフォーム費用","クラシトワン","融資事務手数料","仲介手数料","店舗情報","登記費用","他社リフォーム費用",
                        "追加項目1","追加項目金額1","追加項目支払先1","追加項目2","追加項目金額2","追加項目支払先2","追加項目3","追加項目金額3","追加項目支払先3",
                        "追加項目4","追加項目金額4","追加項目支払先4", "追加項目5","追加項目金額5","追加項目支払先5","弊社_追加項目","弊社_追加金額",
                        "売主_追加金額","売主_追加項目","管理費等清算金","売主_管理費等清算金"];
        fields.forEach(function(field){
            var element = kintone.app.record.getFieldElement(field);
            element.style.borderWidth = '0px';
            element.style.backgroundColor = '#f5f5f5';
            if(field === "お客様氏名") {
                element.style.fontSize = '20px';
            }
            if(field === "売主振込額"){
                element.style.fontWeight = "bold";
            }
            if(field === "自社振込金額"){
                element.style.fontWeight = "bold";
            }
            });
        
            
       return event;
   });
})();