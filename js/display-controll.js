// チェックイン状態かのチェック
function isCheckedIn() {
    meData = JSON.parse(window.localStorage.getItem('me'));
    if(meData != null) {
        return meData.store_id != '';
    }
    return false;
}
// チェックアウトさせる
function checkOut() {
    meData = JSON.parse(window.localStorage.getItem('me'));
    window.localStorage.setItem('me',JSON.stringify({"user_id":meData.user_id,"store_id":""}));
    
    for(var i = 0; i < window.localStorage.length; i++){
        // キー名の取得 
        var k = window.localStorage.key(i);
        // userデータ削除
        if (k.indexOf('user_') !== -1) {
            if (window.localStorage.getItem(k) != me.user_id) {
                // 自分以外削除
                localStorage.removeItem(k);
                continue;
            }
        }
        // チャットデータ削除
        if (k.indexOf('chat_') !== -1) {
            localStorage.removeItem(k);
            continue;
        } 
    }
    
    location.href='checkout.html';
    return false;
}

//*** 共通メニュー制御 *** //
// チェックインフラグを取得
$isCheckin = isCheckedIn();
// 非チェックイン状態の場合はメニューを隠す
if(!$isCheckin) {
    $("#header-menu-chat").css('display','none');
    $("#header-menu-edit_profile").css('display','none');
    $("#header-menu-game").css('display','none');
    $("#header-menu-checkout").css('display','none');
}

// *** TOPページボタンの制御 *** //
if($isCheckin) {
    $("#top-menu-checkin").css('display','none');
}else {
    $("#top-menu-checkout").css('display','none');
}
