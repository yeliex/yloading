/**
 * 维护页面中loading加载的显示隐藏
 *
 * Author: yeliex
 * License: MIT
 * Version: 0.9
 * Date: 2015-12-10
 *
 *
 * Base: jQuery,Semantic-UI
 *  jQuery: jquery.com
 *  Semantic-UI: semantic-ui.com
 *
 * Features In Plan:
 *  1. 允许关闭/点击(如果需要) 以及对应的回调函数
 *  2. 加载状态及对应的回调函数
 *
 * Warning:
 *  1. 由于loader关键字已在semantic-ui中使用,所以需要使用loading来代替
 *
 * Usage:
 *  $(selector).loading({params}).loading(action);
 *
 * Example:
 *  $("body").loading({
 *      text: true,
 *      content: "Loading...",
 *      inverted: true
 *  }).loading("show");
 *
 ****************************************************************************************
 *
 * @param param: string/object,
 *  obj: 新建时的参数
 *  {
 *      text: bool,加载器是否显示文字
 *      content: string,加载器中显示的内容,只在text = true时有效
 *      inverted: bool,加载器的背景颜色,true为黑色,false为白色,只在transparent = true时有效
 *      // transparent: bool,加载器是否透明(暂不支持)
 *  }
 *  string: 控制操作
 *
 */

jQuery.fn.loading = function (param) {
    var $allModules = $(this); // 定义返回

    // 先判断是否已经存在loading组件
    if (this.children(".ui.dimmer.loading").length == 0) {
        // 获取参数对象
        var obj = param;
        var text = "loadig";
        var inverted = false;
        if (typeof obj == "object") {
            // 从对象中获取text
            text = (obj.text) ? ((obj.content != "") ? obj.content : text) : false;
            inverted = ((obj.inverted != "") ? obj.inverted : inverted) ? "" : "inverted"; // true的时候为黑色,不需要"inverted类
        }
        var str = "<div class='ui " + inverted + " dimmer loading'>";
        str += (text) ? ("<div class='ui text loader'>" + text + "</div>") : "<div class='ui loader'></div>";
        str += "</div>";
        this.append(str);
    }
    var target = this.children(".ui.dimmer.loading");

    // 控制操作
    switch (param) {
        case "active":
        case "show":
        {
            // 显示loading
            target.addClass("active");
            break;
        }
        case "hide":
        {
            // 隐藏loading
            target.removeClass("active");
            break;
        }
        case "toggle":
        {
            // 切换状态
            target.toggleClass("active");
            break;
        }
        case "remove":
        {
            // 删除
            target.remove();
            break;
        }
        default:
        {
            // 默认操作: 隐藏 (默认不显示可以避免在创建后需要马上隐藏隐藏时页面闪一下的问题)
            this.loading("hide");
            break;
        }
    }
    return $allModules; // 如果$allModules发生了更改,则需要在这里判断是否为undefined,并在undefined的情况下返回this
};