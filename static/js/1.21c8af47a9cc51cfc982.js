webpackJsonp([1],{"8Z7i":function(t,a,e){"use strict";(function(t){a.a=function(){var a=void 0,e=void 0,r=void 0,i=void 0;return function(){var n=document.createElement("_"),s=n.style,o=void 0;""===s[o="webkitTransition"]&&(r="webkitTransitionEnd",e=o),""===s[o="transition"]&&(r="transitionend",e=o),""===s[o="webkitTransform"]&&(a=o),""===s[o="msTransform"]&&(a=o),""===s[o="transform"]&&(a=o),document.body.insertBefore(n,null),s[a]="translate3d(0, 0, 0)",i=!!t.getComputedStyle(n).getPropertyValue(a),document.body.removeChild(n)}(),{transform:a,transition:e,transitionEnd:r,hasTranslate3d:i}}}).call(a,e("DuR2"))},EarI:function(t,a){var e=1e3,r=60*e,i=60*r,n=24*i,s=365.25*n;t.exports=function(t,a){a=a||{};var c=typeof t;if("string"===c&&t.length>0)return function(t){if((t=String(t)).length>100)return;var a=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(!a)return;var o=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return o*s;case"days":case"day":case"d":return o*n;case"hours":case"hour":case"hrs":case"hr":case"h":return o*i;case"minutes":case"minute":case"mins":case"min":case"m":return o*r;case"seconds":case"second":case"secs":case"sec":case"s":return o*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return o;default:return}}(t);if("number"===c&&!1===isNaN(t))return a.long?o(h=t,n,"day")||o(h,i,"hour")||o(h,r,"minute")||o(h,e,"second")||h+" ms":function(t){if(t>=n)return Math.round(t/n)+"d";if(t>=i)return Math.round(t/i)+"h";if(t>=r)return Math.round(t/r)+"m";if(t>=e)return Math.round(t/e)+"s";return t+"ms"}(t);var h;throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};function o(t,a,e){if(!(t<a))return t<1.5*a?Math.floor(t/a)+" "+e:Math.ceil(t/a)+" "+e+"s"}},"Fy0/":function(t,a,e){(function(r){(a=t.exports=e("vmzn")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},a.formatArgs=function(t){var e=this.useColors;if(t[0]=(e?"%c":"")+this.namespace+(e?" %c":" ")+t[0]+(e?"%c ":" ")+"+"+a.humanize(this.diff),!e)return;var r="color: "+this.color;t.splice(1,0,r,"color: inherit");var i=0,n=0;t[0].replace(/%[a-zA-Z%]/g,function(t){"%%"!==t&&"%c"===t&&(n=++i)}),t.splice(n,0,r)},a.save=function(t){try{null==t?a.storage.removeItem("debug"):a.storage.debug=t}catch(t){}},a.load=i,a.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},a.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(t){}}(),a.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];a.formatters.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}};function i(){var t;try{t=a.storage.debug}catch(t){}return!t&&void 0!==r&&"env"in r&&(t=Object({NODE_ENV:"production"}).DEBUG),t}a.enable(i())}).call(a,e("W2nU"))},YSM2:function(t,a){},hU7x:function(t,a,e){var r=e("Fy0/")("jsonp");t.exports=function(t,a,e){"function"==typeof a&&(e=a,a={});a||(a={});var s,o,c=a.prefix||"__jp",h=a.name||c+i++,p=a.param||"callback",u=null!=a.timeout?a.timeout:6e4,m=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;u&&(o=setTimeout(function(){d(),e&&e(new Error("Timeout"))},u));function d(){s.parentNode&&s.parentNode.removeChild(s),window[h]=n,o&&clearTimeout(o)}return window[h]=function(t){r("jsonp got",t),d(),e&&e(null,t)},t=(t+=(~t.indexOf("?")?"&":"?")+p+"="+m(h)).replace("?&","?"),r('jsonp req "%s"',t),(s=document.createElement("script")).src=t,f.parentNode.insertBefore(s,f),function(){window[h]&&d()}};var i=0;function n(){}},kdsv:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("mtWM"),i=e.n(r),n=e("mvHQ"),s=e.n(n),o=e("pFYg"),c=e.n(o),h=e("//Fk"),p=e.n(h),u=e("hU7x"),m=e.n(u);function f(t,a,e){return t+=(t.indexOf("?")<0?"?":"&")+function(t){var a="";for(var e in t){var r=void 0!==t[e]?t[e]:"";"object"===(void 0===r?"undefined":c()(r))?a+="&"+e+"="+encodeURIComponent(s()(r)):a+="&"+e+"="+encodeURIComponent(r)}return a?a.substring(1):""}(a),new p.a(function(a,r){m()(t,e,function(t,e){t?r(t):a(e)})})}var d=e("0xDb");var l=e("8Z7i"),y={props:{stackinit:{type:Object,default:{}},pages:{type:Array,default:[]}},data:function(){return{basicdata:{start:{},end:{}},temporaryData:{prefixes:Object(l.a)(),offsetY:"",poswidth:0,posheight:0,lastPosWidth:"",lastPosHeight:"",lastZindex:"",rotate:0,lastRotate:0,visible:this.stackinit.visible||3,tracking:!1,animation:!1,currentPage:this.stackinit.currentPage||0,opacity:1,lastOpacity:0,swipe:!1,zIndex:10}}},computed:{offsetRatio:function(){var t=this.$el.offsetWidth,a=this.$el.offsetHeight,e=1-(t-Math.abs(this.temporaryData.poswidth))*(a-Math.abs(this.temporaryData.posheight))/(t*a)||0;return e>1?1:e},offsetWidthRatio:function(){var t=this.$el.offsetWidth;return 1-(t-Math.abs(this.temporaryData.poswidth))/t||0}},mounted:function(){var t=this;this.$on("next",function(){t.next()}),this.$on("prev",function(){t.prev()}),document.addEventListener("touchmove",function(t){t.preventDefault()})},methods:{touchstart:function(t){if(!this.temporaryData.tracking){if("touchstart"===t.type){if(t.touches.length>1)return void(this.temporaryData.tracking=!1);this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.targetTouches[0].clientX,this.basicdata.start.y=t.targetTouches[0].clientY,this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY,this.temporaryData.offsetY=t.targetTouches[0].pageY-this.$el.offsetParent.offsetTop}else this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.clientX,this.basicdata.start.y=t.clientY,this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY,this.temporaryData.offsetY=t.offsetY;this.temporaryData.tracking=!0,this.temporaryData.animation=!1}},touchmove:function(t){if(this.temporaryData.tracking&&!this.temporaryData.animation){"touchmove"===t.type?(t.preventDefault(),this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY):(t.preventDefault(),this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY),this.temporaryData.poswidth=this.basicdata.end.x-this.basicdata.start.x,this.temporaryData.posheight=this.basicdata.end.y-this.basicdata.start.y;var a=this.rotateDirection(),e=this.angleRatio();this.temporaryData.rotate=a*this.offsetWidthRatio*15*e}},touchend:function(t){if(this.temporaryData.tracking=!1,this.temporaryData.animation=!0,this.offsetRatio>=.4){var a=Math.abs(this.temporaryData.posheight/this.temporaryData.poswidth);this.temporaryData.poswidth=this.temporaryData.poswidth>=0?this.temporaryData.poswidth+200:this.temporaryData.poswidth-200,this.temporaryData.posheight=this.temporaryData.posheight>=0?Math.abs(this.temporaryData.poswidth*a):-Math.abs(this.temporaryData.poswidth*a),this.temporaryData.opacity=0,this.temporaryData.swipe=!0,this.nextTick()}else this.temporaryData.poswidth=0,this.temporaryData.posheight=0,this.temporaryData.swipe=!1,this.temporaryData.rotate=0},nextTick:function(){var t=this;this.temporaryData.lastPosWidth=this.temporaryData.poswidth,this.temporaryData.lastPosHeight=this.temporaryData.posheight,this.temporaryData.lastRotate=this.temporaryData.rotate,this.temporaryData.lastZindex=20,this.temporaryData.currentPage=this.temporaryData.currentPage===this.pages.length-1?0:this.temporaryData.currentPage+1,this.$nextTick(function(){t.temporaryData.poswidth=0,t.temporaryData.posheight=0,t.temporaryData.opacity=1,t.temporaryData.rotate=0})},onTransitionEnd:function(t){var a=0===this.temporaryData.currentPage?this.pages.length-1:this.temporaryData.currentPage-1;this.temporaryData.swipe&&t===a&&(this.temporaryData.animation=!0,this.temporaryData.lastPosWidth=0,this.temporaryData.lastPosHeight=0,this.temporaryData.lastOpacity=0,this.temporaryData.lastRotate=0,this.temporaryData.swipe=!1,this.temporaryData.lastZindex=-1)},prev:function(){this.temporaryData.tracking=!1,this.temporaryData.animation=!0;var t=this.$el.offsetWidth;this.temporaryData.poswidth=-t,this.temporaryData.posheight=0,this.temporaryData.opacity=0,this.temporaryData.rotate="-3",this.temporaryData.swipe=!0,this.nextTick()},next:function(){this.temporaryData.tracking=!1,this.temporaryData.animation=!0;var t=this.$el.offsetWidth;this.temporaryData.poswidth=t,this.temporaryData.posheight=0,this.temporaryData.opacity=0,this.temporaryData.rotate="3",this.temporaryData.swipe=!0,this.nextTick()},rotateDirection:function(){return this.temporaryData.poswidth<=0?-1:1},angleRatio:function(){var t=this.$el.offsetHeight;return-1*(2*this.temporaryData.offsetY/t-1)||0},inStack:function(t,a){for(var e=[],r=this.temporaryData.visible,i=this.pages.length,n=0;n<r;n++)a+n<i?e.push(a+n):e.push(a+n-i);return e.indexOf(t)>=0},transform:function(t){var a=this.temporaryData.currentPage,e=this.pages.length,r=0===a?this.pages.length-1:a-1,i={},n=this.temporaryData.visible;if(t!==this.temporaryData.currentPage){if(this.inStack(t,a)){var s=t-a>0?t-a:t-a+e;i.opacity="1",i.transform="translate3D(0,0,"+-60*(s-this.offsetRatio)+"px)",i.zIndex=n-s,this.temporaryData.tracking||(i[this.temporaryData.prefixes.transition+"TimingFunction"]="ease",i[this.temporaryData.prefixes.transition+"Duration"]="300ms")}else t===r?(i.transform="translate3D("+this.temporaryData.lastPosWidth+"px,"+this.temporaryData.lastPosHeight+"px,0px) rotate("+this.temporaryData.lastRotate+"deg)",i.opacity=this.temporaryData.lastOpacity,i.zIndex=this.temporaryData.lastZindex,i[this.temporaryData.prefixes.transition+"TimingFunction"]="ease",i[this.temporaryData.prefixes.transition+"Duration"]="300ms"):(i.zIndex="-1",i.transform="translate3D(0,0,"+-1*n*60+"px)");return i}},transformIndex:function(t){if(t===this.temporaryData.currentPage){var a={};return a.transform="translate3D("+this.temporaryData.poswidth+"px,"+this.temporaryData.posheight+"px,0px) rotate("+this.temporaryData.rotate+"deg)",a.opacity=this.temporaryData.opacity,a.zIndex=10,this.temporaryData.animation&&(a[this.temporaryData.prefixes.transition+"TimingFunction"]="ease",a[this.temporaryData.prefixes.transition+"Duration"]=(this.temporaryData.animation?300:0)+"ms"),a}}}},g={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"stack"},t._l(t.pages,function(a,r){return e("li",{staticClass:"stack-item",style:[t.transformIndex(r),t.transform(r)],on:{"!touchmove":function(a){a.stopPropagation(),a.preventDefault(),t.touchmove(a)},"!touchstart":function(a){a.stopPropagation(),a.preventDefault(),t.touchstart(a)},"!touchend":function(a){a.stopPropagation(),a.preventDefault(),t.touchend(a)},"!touchcancel":function(a){a.stopPropagation(),a.preventDefault(),t.touchend(a)},"!mousedown":function(a){a.stopPropagation(),a.preventDefault(),t.touchstart(a)},"!mouseup":function(a){a.stopPropagation(),a.preventDefault(),t.touchend(a)},"!mousemove":function(a){a.stopPropagation(),a.preventDefault(),t.touchmove(a)},"!mouseout":function(a){a.stopPropagation(),a.preventDefault(),t.touchend(a)},"webkit-transition-end":function(a){t.onTransitionEnd(r)},transitionend:function(a){t.onTransitionEnd(r)}}},[e("div",{domProps:{innerHTML:t._s(a.html)}})])}))},staticRenderFns:[]};var v={name:"introduction",components:{Stack:e("VU/8")(y,g,!1,function(t){e("oo1v")},"data-v-6cef8b90",null).exports},data:function(){return{isDev:null,imgUrl:[],someList:[],stackinit:{visible:3}}},methods:{prev:function(){this.$refs.stack.$emit("prev")},next:function(){this.$refs.stack.$emit("next")}},created:function(){var t=this;this.isDev=!1,(d.b?i.a.get("/api/getMovieImage"):f("https://api.douban.com/v2/movie/in_theaters",{start:0,count:10,city:"深圳"},{param:"callback"})).then(function(a){t.isDev?a.data.data.movies.forEach(function(a,e,r){t.imgUrl.push({html:"<img src='"+a.posterUrl.large+"'>"})}):a.subjects.forEach(function(a,e,r){t.imgUrl.push({html:"<img src='"+a.images.large+"'>"})})})},mounted:function(){var t=this;this.$nextTick(function(){t.someList=t.imgUrl})}},D={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"introduction"},[this._v("\n\n  "+this._s(this.$t("author.name"))+"：\n  "),a("ul",[a("li",[this._v(this._s(this.$t("introduction.item1")))])]),this._v(" "),a("div",{staticClass:"mid-center"},[a("div",{staticClass:"stack-wrapper"},[a("stack",{ref:"stack",attrs:{pages:this.someList,stackinit:this.stackinit}})],1),this._v(" "),a("div",{staticClass:"controls"},[a("button",{staticClass:"button",on:{click:this.prev}},[a("i",{staticClass:"prev"}),a("span",{staticClass:"text-hidden"},[this._v("prev")])]),this._v(" "),a("button",{staticClass:"button",on:{click:this.next}},[a("i",{staticClass:"next"}),a("span",{staticClass:"text-hidden"},[this._v("next")])])])])])},staticRenderFns:[]};var b=e("VU/8")(v,D,!1,function(t){e("YSM2")},"data-v-23fabbce",null);a.default=b.exports},oo1v:function(t,a){},vmzn:function(t,a,e){(a=t.exports=i.debug=i.default=i).coerce=function(t){return t instanceof Error?t.stack||t.message:t},a.disable=function(){a.enable("")},a.enable=function(t){a.save(t),a.names=[],a.skips=[];for(var e=("string"==typeof t?t:"").split(/[\s,]+/),r=e.length,i=0;i<r;i++)e[i]&&("-"===(t=e[i].replace(/\*/g,".*?"))[0]?a.skips.push(new RegExp("^"+t.substr(1)+"$")):a.names.push(new RegExp("^"+t+"$")))},a.enabled=function(t){var e,r;for(e=0,r=a.skips.length;e<r;e++)if(a.skips[e].test(t))return!1;for(e=0,r=a.names.length;e<r;e++)if(a.names[e].test(t))return!0;return!1},a.humanize=e("EarI"),a.names=[],a.skips=[],a.formatters={};var r;function i(t){function e(){if(e.enabled){var t=e,i=+new Date,n=i-(r||i);t.diff=n,t.prev=r,t.curr=i,r=i;for(var s=new Array(arguments.length),o=0;o<s.length;o++)s[o]=arguments[o];s[0]=a.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var c=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(e,r){if("%%"===e)return e;c++;var i=a.formatters[r];if("function"==typeof i){var n=s[c];e=i.call(t,n),s.splice(c,1),c--}return e}),a.formatArgs.call(t,s);(e.log||a.log||console.log.bind(console)).apply(t,s)}}return e.namespace=t,e.enabled=a.enabled(t),e.useColors=a.useColors(),e.color=function(t){var e,r=0;for(e in t)r=(r<<5)-r+t.charCodeAt(e),r|=0;return a.colors[Math.abs(r)%a.colors.length]}(t),"function"==typeof a.init&&a.init(e),e}}});
//# sourceMappingURL=1.21c8af47a9cc51cfc982.js.map