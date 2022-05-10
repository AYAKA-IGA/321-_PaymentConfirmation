(function() {
　"use strict";
　kintone.events.on("app.record.create.show", function(event) {
　    
　    event.record.お客様氏名.lookup = true;
　    
　　var userId = kintone.getLoginUser().code;
　　var name = kintone.getLoginUser().name;
　　var phonenumber;
　　var text;
　　var kouza;
　　var body = {
　　　"codes": [userId]
　　};
　　// ユーザcodeをkeyにしてユーザの詳細を取得
　　kintone.api(kintone.api.url('/v1/users', true), 'GET', body, function(resp) {
　　    console.log(resp);
　　   phonenumber = resp.users[0].mobilePhone;
　　　var orgId = resp.users[0].primaryOrganization; // 優先組織のIDを取得
　　　var body2 = {
　　　　"ids": [orgId]
　　　};
　　　// 組織idをkeyにして組織の詳細を取得
　　　kintone.api(kintone.api.url('/v1/organizations', true), 'GET', body2, function(resp2) {
　　　    var record = kintone.app.record.get();
　　　　var orgCode = resp2.organizations[0].code; // 優先組織のcodeを取得
　　　　switch(orgCode){
　　　　    case "周南店":
　　　　        text = "ハウスドゥ周南城ケ丘店\n"+name+"\n\n店舗：0834-34-1107\n携帯："+ phonenumber;
　　　　        kouza = "山口銀行　櫛ヶ浜支店(店番:058)\n普通 ５０３６８１６\n株式会社田村ビルズ";
　　　　        break;
　　　　    case "防府店":
　　　　        text = "ハウスドゥ防府寿町店\n"+name+"\n\n店舗：0835-28-1120\n携帯："+ phonenumber;
　　　　        kouza = "山口銀行　防府支店(店番:051)\n普通 ５１９１６７３\n株式会社田村ビルズ";
　　　　        break;
　　　　    case "平川店":
　　　　        text = "ハウスドゥ山口平川店\n"+name+"\n\n店舗：083-921-6515\n携帯："+ phonenumber;
　　　　        kouza = "山口銀行　湯田支店(店番:048)\n普通 ６０２６２５７ \n株式会社田村ビルズ";
　　　　        break;
　　　　    case "宇部店":
　　　　        text = "ハウスドゥ宇部店\n"+name+"\n\n店舗：0836-39-7377\n携帯："+ phonenumber;
　　　　        kouza = "山口銀行　藤山支店(店番:031)\n普通 ５０２４３２４\n株式会社田村ビルズ";
　　　　        break;
　　　　    case "新下関店":
　　　　        text = "ハウスドゥ新下関店\n"+name+"\n\n店舗：083-242-2440\n携帯："+ phonenumber;
　　　　        kouza = "山口銀行　長府支店(店番:008)\n普通 ５０５２０４８\n株式会社田村ビルズ";
　　　　        break;
　　　　    case "熊本インター店":
　　　　        text = "ハウスドゥ熊本インター店\n"+name+"\n\n店舗：096-292-7500\n携帯："+ phonenumber;
　　　　        kouza = "北九州銀行　熊本支店(店番:139)\n普通 ５０２５８８９\n株式会社田村ビルズ";
　　　　        break;
　　　　    case "久留米合川店":
　　　　        text = "ハウスドゥ久留米合川店\n"+name+"\n\n店舗：0942-41-8055\n携帯："+ phonenumber;
　　　　        kouza = "北九州銀行　久留米支店(店番:137)\n普通 ５０４１４５２\n株式会社田村ビルズ";
　　　　        break;
　　　　    case "ふたば不動産":
　　　　        text = "ふたば不動産\n"+name+"\n\n店舗：0838-25-0810\n携帯："+ phonenumber;
　　　　        kouza = "萩山口信用金庫　萩支店(店番:111)\n普通 ３０８８９１\n株式会社ふたば不動産";
　　　　        break;
　　　　    default:text = "";
　　　　}
　　　　record.record.店舗情報.value = text;
　　　　record.record.自社口座情報.value = kouza;
　　    kintone.app.record.set(record);
　　　});
　　});
　});
})();