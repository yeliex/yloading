# loading

基于jQuery以及Semantic-UI的加载器

---
## Readme
维护页面中loading加载的显示隐藏

* Author: yeliex
* License: MIT
* Version: 0.9
* Date: 2015-12-10

---
## 基于(依赖)
 *  jQuery: jquery.com
 *  Semantic-UI: semantic-ui.com
 
---
## 准备添加功能
* 允许关闭/点击(如果需要) 以及对应的回调函数
* 加载状态及对应的回调函数

---
## 注意
 * 由于loader关键字已在semantic-ui中使用,所以需要使用loading来代替
 * 为了避免重复操作,因此只有第一次创建组件的时候修改参数有效,其他时候都会忽略.如果需要修改加载器内容请使用"remove"删除后重新创建
 
---
## 使用
<pre>
$(selector).loading({params}).loading(action);
</pre>

---
## 例子
<pre>
$("body").loading({
	text: true,
    content: "Loading...",
    inverted: true
}).loading("show");
</pre>

--
## 参数
* @param param: string/object,
	*  obj: 新建时的参数
 		* text: bool,加载器是否显示文字
 		* content: string,加载器中显示的内容,只在text = true时有效
 		* inverted: bool,加载器的背景颜色,true为黑色,false为白色,只在transparent = true时有效
 		* // transparent: bool,加载器是否透明(暂不支持)
 	*  string: 控制操作
 		* "action"/"show": 显示loading
 		* "hide": 隐藏loading
 		* "toggle": 切换状态
 		* "remove": 删除
