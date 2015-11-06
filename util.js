/*
* @class util
* 常用工具方法
*/

var Util = (function(){
    
    /*
    * @function isValidMobile
    * @param {String} mobile - 验证电话号码文本
    */
    function isValidMobile(mobile) {
        var mobileRegx = /(^(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7})$/;
        if(!mobileRegx.test(mobile)) {
          alert('电话号码非法');
        }
    }
    
})();
