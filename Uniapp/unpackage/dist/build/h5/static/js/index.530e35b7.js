(function(e){function n(n){for(var o,i,u=n[0],c=n[1],l=n[2],s=0,f=[];s<u.length;s++)i=u[s],r[i]&&f.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(n);while(f.length)f.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,i=1;i<t.length;i++){var c=t[i];0!==r[c]&&(o=!1)}o&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var o={},r={index:0},a=[];function i(e){return u.p+"static/js/"+({"pages-index-index":"pages-index-index"}[e]||e)+"."+{"pages-index-index":"c1b26c92"}[e]+".js"}function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise(function(n,o){t=r[e]=[n,o]});n.push(t[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e),a=function(n){c.onerror=c.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,t[1](i)}r[e]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(n)},u.m=e,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)u.d(t,o,function(n){return e[n]}.bind(null,o));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/h5/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var d=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("c209")},"01f7":function(e,n,t){"use strict";(function(e){var n=t("288e"),o=n(t("5176")),r=n(t("e143"));e["____F3514E5____"]=!0,delete e["____F3514E5____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},e.__uniConfig.router={mode:"hash",base:"/h5/"},e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:3e3},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e3,connectSocket:6e3,uploadFile:6e3,downloadFile:6e3},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},r.default.component("pages-index-index",function(e){var n={component:t.e("pages-index-index").then(function(){return e(t("f4fe"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:(0,o.default)({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"uni-app"})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,t("c8ba"))},"1d92":function(e,n,t){"use strict";var o=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.WxToken=void 0,t("a481"),t("386d"),t("28a5");var r=o(t("d225")),a=o(t("b0b4")),i=t("255b"),u=i.Api_url+"/auth/gzh_token",c=i.Api_url+"/auth/wxcode_url",l=function(){function e(){(0,r.default)(this,e)}return(0,a.default)(e,[{key:"verify",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n="";"userinfo"==e&&(n="userinfo");var t=this.GetUrlParame("code"),o=window.location.href.split("#")[0];t?uni.request({url:u,method:"GET",data:{code:t},success:function(e){console.log(e.data),e.data.token&&(uni.setStorageSync("gzh_token",e.data.token),window.location.href=o,console.log("初始end:",e.data.token))}}):uni.request({url:c,method:"GET",data:{url:o,type:n},success:function(e){var n=e.data.indexOf("object");e.data&&n<0&&(window.location.href=e.data)}})}},{key:"spliceCode",value:function(){var e=this.GetUrlParame("code"),n=window.location.href.split("?code")[0];e&&uni.request({url:u,method:"GET",data:{code:e},success:function(e){console.log(e.data),e.data.token&&(uni.setStorageSync("gzh_token",e.data.token),console.log("页面end:",e.data.token),window.location.href=n)}})}},{key:"GetUrlParame",value:function(e){console.log("getcode");var n=window.location.search;if(n.indexOf(e)>-1){var t="";return t=n.substring(n.indexOf(e),n.length),t.indexOf("&")>-1?(t=t.substring(0,t.indexOf("&")),t=t.replace(e+"=",""),t):""}}}]),e}();n.WxToken=l},"255b":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Api_url=void 0;var o="http://wxapi.phps.shop/";n.Api_url=o},"45d1":function(e,n,t){n=e.exports=t("2350")(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""])},"4df4":function(e,n,t){"use strict";var o=t("a564"),r=t.n(o);r.a},5766:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={pages:{"pages/index/index":{navigationBarTitleText:"uni-app"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};n.default=o},"6ef9":function(e,n,t){"use strict";t.r(n);var o=t("dda7"),r=t("9feb");for(var a in r)"default"!==a&&function(e){t.d(n,e,function(){return r[e]})}(a);t("4df4");var i=t("2877"),u=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,null,null);n["default"]=u.exports},"9feb":function(e,n,t){"use strict";t.r(n);var o=t("d252"),r=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);n["default"]=r.a},a564:function(e,n,t){var o=t("45d1");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=t("4f06").default;r("79b569b4",o,!0,{sourceMap:!1,shadowMode:!1})},c209:function(e,n,t){"use strict";var o=t("288e"),r=o(t("cebc"));t("cadf"),t("551c"),t("097d"),t("01f7"),t("1c31"),t("921b");var a=o(t("e143")),i=o(t("6ef9")),u=o(t("ca79"));a.default.config.productionTip=!1,a.default.prototype.$api={http:u.default},i.default.mpType="app";var c=new a.default((0,r.default)({},i.default));c.$mount()},ca79:function(e,n,t){"use strict";var o=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("6b54"),t("87b3");var r=o(t("768b")),a=o(t("795b"));t("96cf");var i=o(t("3b8d")),u=t("255b"),c=t("1d92"),l=new c.WxToken,s={post:function(){var e=(0,i.default)(regeneratorRuntime.mark(function e(n,t){var o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.uni_request(n,t,"post");case 2:return o=e.sent,console.log("结果：",o),e.abrupt("return",o);case 5:case"end":return e.stop()}},e,this)}));function n(n,t){return e.apply(this,arguments)}return n}(),get:function(){var e=(0,i.default)(regeneratorRuntime.mark(function e(n,t){var o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.uni_request(n,t,"get");case 2:return o=e.sent,console.log("结果：",o),e.abrupt("return",o);case 5:case"end":return e.stop()}},e,this)}));function n(n,t){return e.apply(this,arguments)}return n}(),uni_request:function(e,n,t){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=this;return new a.default(function(a,c){uni.request({url:u.Api_url+e,data:n,method:t,header:{token:uni.getStorageSync("token")}}).then(function(u){var c=(0,r.default)(u,2),s=(c[0],c[1]),d=s.statusCode.toString();2==d.charAt(0)?200==d?(console.log("200",e),a(s.data)):(console.log("201",e),uni.showToast({title:s.data.msg,icon:"none"})):401==d?(console.log("401",e),o?l.getTokenFromServer(function(){var o=i.uni_request(e,n,t,!1);a(o)}):console.log("再次登陆仍然失败",e)):(console.log("400/500",e),uni.showToast({title:"请求异常",icon:"none"}))}).catch(function(e){console.log("catch:",e)})})}};n.default=s},d252:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=o},d966:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={appid:"__UNI__F3514E5"};n.default=o},dda7:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},r=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return r})}});