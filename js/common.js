// ---------------- 設定値 ---------------- //
/*** チェックイン時のみ表示できるページ ***/
var checkinedPageList = [
    "chat.html",
    "edit_profile.html",
    "game.html",
    "new_profile.html",
    "show_profile.html"
];
/*** プロフィールデータが必要なページ ***/
var needUserDataPageList = [
    "chat.html",
    "edit_profile.html",
    "game.html",
    "show_profile.html"
];
//---------------- 関数 ---------------- //
var meData = JSON.parse(window.localStorage.getItem('me'));
// チェックイン状態かのチェック
function isCheckedIn() {
    if(meData != null) {
        return meData.store_id != '';
    }
    return false;
}
// チェックアウトさせる
function checkOut() {
    window.localStorage.setItem('me',JSON.stringify({"user_id":meData.user_id,"store_id":""}));
    
    for(var i = 0; i < window.localStorage.length; i++){
        // キー名の取得 
        var k = window.localStorage.key(i);
        // userデータ削除
        if (k.indexOf('user_') !== -1) {
            if (window.localStorage.getItem(k) != meData.user_id) {
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

// チェックインページへリダイレクト
function redirectCheckinPage() {
    location.href='checkin.html';
    return false;
}
// チャットページへリダイレクト
function redirectChatPage() {
 location.href='chat.html';
 return false;
}
// チャットページへリダイレクト
function redirectNewProfilePage() {
 location.href='new_profile.html';
 return false;
}

//---------------- 画面表示前のチェック処理 ---------------- //
// チェックインフラグを取得
var isCheckin = isCheckedIn();

// 表示中画面名を取得
var myPathName = location.pathname;
var myFileName = myPathName.replace(/(.*\/)/,"");

// 非チェックイン時、チェックイン後ページアクセスの場合はトップへリダイレクト
if(!isCheckin && $.inArray(myFileName, checkinedPageList) != -1) {
    redirectCheckinPage();
}
// チェックイン時、チェックインページアクセスの場合はチャッットへリダイレクト
if(isCheckin && myFileName == "checkin.html") {
    redirectChatPage();
}
// チェックイン時、プロフィールデータがなければプロフィール登録画面へ
if (isCheckin && meData == "" && $.inArray(myFileName, needUserDataPageList) != -1) {
    redirectNewProfilePage();
}