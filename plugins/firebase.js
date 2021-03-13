import firebase from 'firebase/app';
// 引用索引專案需要用到的Firebase服務
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// 設定專案的config
const config = {
    // TODO: 更新為你的Firebase Config

}
// 確認專案是否未初始化

// 讓每個Vue元件都可以使用到Firebase相關的函式庫
// https://firebase.google.com/docs/web/setup