/**
 * Storageのパッケージ
 */
const STORAGE_KEY = 'mall';

// Storage {"user":{"userName":"jack","age":30,"sex":1}}
export default {
    // 保存する値
    setItem(key, value, module_name) {
      if (module_name) {
         let val = this.getItem(module_name);
         val[key] = value;
         this.setItem(module_name, val);
      } else {
         let val = this.getStorage();
         val[key] = value;
         window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
      }
    },

    // とあるモジュール配下の属性を取得
    // 例user下のuserName
    getItem(key, module_name) {
       if (module_name){
           let val = this.getItem(module_name);
           if(val) return val[key];
       }
       return this.getStorage()[key];
    },
    getStorage(){
       return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    // とある値をクリア
    clear(key, module_name){
      let val = this.getStorage();
      if (module_name){
          delete val[module_name][key];
      } else {
          delete val[key];
      }
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
}
