(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0961":function(t,i,n){"use strict";n.r(i);var a=n("10d0"),s=n("3a69");for(var e in s)["default"].indexOf(e)<0&&function(t){n.d(i,t,(function(){return s[t]}))}(e);n("9355");var o=n("f0c5"),c=Object(o["a"])(s["default"],a["b"],a["c"],!1,null,"ccb2af88",null,!1,a["a"],void 0);i["default"]=c.exports},"10d0":function(t,i,n){"use strict";n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return s})),n.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"colonn"},[n("v-uni-view",{staticClass:"roww p-all-20"},[n("v-uni-image",{staticClass:"w-375 ",attrs:{src:"/static/LOGO.png",mode:"widthFix"}})],1),n("v-uni-image",{staticClass:"w-750",attrs:{src:t.activityInfo.bannerImage,mode:"widthFix"}}),n("v-uni-view",{staticClass:"h-25"}),n("v-uni-view",{staticClass:"huanhang"},[n("v-uni-view",{staticClass:"colonn w-187 center_center m-bottom-20",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.toPage(1)}}},[n("v-uni-image",{staticClass:"w-100 h-100",attrs:{src:"/static/t1.jpg"}}),n("v-uni-view",{staticClass:"h-10"}),n("v-uni-view",{staticClass:"fs-30"},[t._v("大会简介")])],1),n("v-uni-view",{staticClass:"colonn w-187 center_center m-bottom-20",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.toPage(2)}}},[n("v-uni-image",{staticClass:"w-100 h-100",attrs:{src:"/static/t2.jpg"}}),n("v-uni-view",{staticClass:"h-10"}),n("v-uni-view",{staticClass:"fs-30"},[t._v("大会日程")])],1),n("v-uni-view",{staticClass:"colonn w-187 center_center m-bottom-20",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.toPage(3)}}},[n("v-uni-image",{staticClass:"w-100 h-100",attrs:{src:"/static/t3.jpg"}}),n("v-uni-view",{staticClass:"h-10"}),n("v-uni-view",{staticClass:"fs-30"},[t._v("友情提示")])],1),n("v-uni-view",{staticClass:"colonn w-187 center_center m-bottom-20",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.toPage(4)}}},[n("v-uni-image",{staticClass:"w-100 h-100",attrs:{src:"/static/t4.jpg"}}),n("v-uni-view",{staticClass:"h-10"}),n("v-uni-view",{staticClass:"fs-30"},[t._v("宣传片")])],1),n("v-uni-view",{staticClass:"colonn w-187 center_center m-bottom-20",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.toPage(5)}}},[n("v-uni-image",{staticClass:"w-100 h-100",attrs:{src:"/static/t5.jpg"}}),n("v-uni-view",{staticClass:"h-10"}),n("v-uni-view",{staticClass:"fs-30"},[t._v("会场指引")])],1),n("v-uni-view",{staticClass:"colonn w-187 center_center m-bottom-20",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.toPage(6)}}},[n("v-uni-image",{staticClass:"w-100 h-100",attrs:{src:"/static/t6.jpg"}}),n("v-uni-view",{staticClass:"h-10"}),n("v-uni-view",{staticClass:"fs-30"},[t._v("资料下载")])],1),n("v-uni-view",{staticClass:"colonn w-187 center_center m-bottom-20",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.toPage(7)}}},[n("v-uni-image",{staticClass:"w-100 h-100",attrs:{src:"/static/t7.jpg"}}),n("v-uni-view",{staticClass:"h-10"}),n("v-uni-view",{staticClass:"fs-30"},[t._v("联系我们")])],1)],1),n("v-uni-view",{staticClass:"colonn center_center"},[n("v-uni-view",{staticClass:"m-top-30 m-bottom-40",staticStyle:{"font-weight":"bold"}},[t._v("大会资讯")]),n("v-uni-view",{staticClass:"colonn"},t._l(t.zixunList,(function(i,a){return n("v-uni-view",{staticClass:"roww border_bottom m-bottom-20 p-bottom-20",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.toizxun(i)}}},[n("v-uni-image",{staticClass:"w-300 h-200",attrs:{src:i.image,mode:"aspectFill"}}),n("v-uni-view",{staticClass:"w-25"}),n("v-uni-view",{staticClass:"txtShowLength2 fs-30 w-400 h-90",staticStyle:{"line-height":"30rpx","font-weight":"700"}},[t._v(t._s(i.name))])],1)})),1)],1)],1)},s=[]},"26b5":function(t,i,n){var a=n("adf8");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=n("4f06").default;s("27321cfb",a,!0,{sourceMap:!1,shadowMode:!1})},"2c02":function(t,i,n){"use strict";n("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("a4d3"),n("e01a");var a={data:function(){return{activityInfo:{},zixunList:[]}},onLoad:function(){this.getInfo(),this.getZixun()},methods:{toizxun:function(t){uni.setStorageSync("zixunInfo",t),uni.navigateTo({url:"/pages/richview/richview"})},getZixun:function(){var t=this;this.$axios.axios("GET",this.$paths.mediumNewslist,{meetingId:5}).then((function(i){if(200==i.code){for(var n=i.rows,a=0;a<n.length;a++)n[a].content=t.$tools.formatRichText(n[a].content);t.zixunList=n,console.log("asd",t.zixunList)}else t.$tools.showToast(i.msg)})).catch((function(t){}))},toPage:function(t){1==t||2==t?uni.navigateTo({url:"/pages/conferenceIntroduction/conferenceIntroduction?type="+t}):3==t?uni.navigateTo({url:"/pages/tip/tip?type="+t}):4==t?uni.navigateTo({url:"/pages/videos/videos"}):5==t?uni.navigateTo({url:"/pages/tip/tip?type="+t}):6==t?uni.navigateTo({url:"/pages/ziliaoxiazai/ziliaoxiazai?"}):7==t&&uni.navigateTo({url:"/pages/phones/phones"})},getInfo:function(){var t=this;this.$axios.axios("GET",this.$paths.meetingmeeting+getApp().globalData.activityId,{}).then((function(i){if(200==i.code){var n=i.data;n.agenda=t.$tools.formatRichText(n.agenda),n.description=t.$tools.formatRichText(n.description),t.activityInfo=n,uni.setStorageSync("activityInfo",n)}else t.$tools.showToast(i.msg)})).catch((function(t){}))}}};i.default=a},"3a69":function(t,i,n){"use strict";n.r(i);var a=n("2c02"),s=n.n(a);for(var e in a)["default"].indexOf(e)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(e);i["default"]=s.a},9355:function(t,i,n){"use strict";var a=n("26b5"),s=n.n(a);s.a},adf8:function(t,i,n){var a=n("24fb");i=a(!1),i.push([t.i,"",""]),t.exports=i}}]);