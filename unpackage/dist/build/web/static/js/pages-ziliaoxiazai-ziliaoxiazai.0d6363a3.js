(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ziliaoxiazai-ziliaoxiazai"],{"59a6":function(t,i,n){"use strict";n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("v-uni-view",{staticClass:"colonn"},t._l(t.ziliao,(function(i,a){return n("v-uni-view",{staticClass:"roww p-all-20 border_bottom"},[n("v-uni-view",[t._v(t._s(i.remark))]),n("v-uni-view",{staticClass:"allline"}),n("v-uni-view",{staticStyle:{color:"blue","font-weight":"bold"},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.toLoad(i)}}},[t._v("下载")])],1)})),1)],1)},o=[]},6088:function(t,i,n){"use strict";n("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("ac1f"),n("5319");var a={data:function(){return{ziliao:[]}},onLoad:function(){this.xiazai()},methods:{toLoad:function(t){window.location.href=t.url},xiazai:function(){var t=this,i={meetingId:getApp().globalData.activityId};this.$axios.axios("GET",this.$paths.meetingFilelist,i).then((function(i){if(200==i.code){for(var n=i.rows,a=0;a<n.length;a++)n[a].url=t.$tools.Decrypt(n[a].url),n[a].url=n[a].url.replace('"',""),n[a].url=n[a].url.replace('"',"");t.ziliao=n}else t.$tools.showToast(i.msg)})).catch((function(t){}))}}};i.default=a},"76cd":function(t,i,n){"use strict";n.r(i);var a=n("59a6"),o=n("db30");for(var e in o)["default"].indexOf(e)<0&&function(t){n.d(i,t,(function(){return o[t]}))}(e);var u=n("f0c5"),r=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,"f7cd42b0",null,!1,a["a"],void 0);i["default"]=r.exports},db30:function(t,i,n){"use strict";n.r(i);var a=n("6088"),o=n.n(a);for(var e in a)["default"].indexOf(e)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(e);i["default"]=o.a}}]);