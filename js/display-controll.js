//*** メニュー表示制御 *** //

// 非チェックイン時
if(!isCheckin) {
    $("#header-menu-chat").css('display','none');
    $("#header-menu-edit_profile").css('display','none');
    $("#header-menu-game").css('display','none');
    $("#header-menu-checkout").css('display','none');
}

// TOPページボタンの制御
if((myFileName == "index.html" || myFileName == "") && isCheckin) {
    $("#top-menu-checkin").css('display','none');
} else {
    $("#top-menu-checkout").css('display','none');
}
