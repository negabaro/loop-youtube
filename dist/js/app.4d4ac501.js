(function(t){function e(e){for(var r,a,u=e[0],s=e[1],c=e[2],p=0,l=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(l.length)l.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";n("85ec")},"85ec":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("h1",[t._v("22xxxxxxxxxxxx")]),t.isParams?n("div",[n("youtube",{ref:"youtube",attrs:{"video-id":t.videoId,"player-vars":t.playerVars},on:{ready:t.ready,ended:t.ended,error:t.error}})],1):t._e()])])},i=[],a=(n("a4d3"),n("e01a"),n("e0ec")),u=n.n(a),s=(n("c975"),n("ac1f"),n("841c"),n("1276"),function(t){var e=t.split(":"),n=0,r=1;while(e.length>0){var o=e.pop();n+=r*parseInt(o,10),r*=60}return n}),c=function(t){for(var e=location.search.substr(location.search.indexOf("?")+1),n="",r=e.split("&"),o=0;o<r.length;o++){var i=r[o].split("=");[i[0]]==t&&(n=i[1])}return n},d=n("342d"),p=n.n(d);r["a"].use(u.a),r["a"].use(p.a);var l=r["a"].extend({components:{},data:function(){return{title:"My Title22",description:"sdsdsdsdsd",videoId:"",start:0,end:0,duration:0,currentLoopCount:0}},head:{title:function(){return{inner:this.title}},meta:function(){return[{property:"og:title",content:this.title+" | subtitle"},{property:"og:description",content:this.description},{p:"og:image",c:this.img},{property:"og:image:type",content:"image/gif"},{property:"og:image:width",content:"500"},{property:"og:image:height",content:"376"}]}},created:function(){this.videoId=c("v"),this.start=s(c("s")),this.end=s(c("e"))},computed:{img:function(){return"https://i.ytimg.com/vi/".concat(this.videoId,"/mqdefault.jpg")},playerVars:function(){return{autoplay:1,start:this.start,end:this.end}},isParams:function(){return!!this.videoId&&!!this.start&&!!this.end},player:function(){var t=this.$refs.youtube;return t.player}},methods:{playVideo:function(){this.player.playVideo()},loadVideoById:function(){},ready:function(){this.playVideo()},ended:function(){this.player.seekTo(this.start)},error:function(t){}}}),f=l,h=(n("034f"),n("2877")),y=Object(h["a"])(f,o,i,!1,null,null,null),v=y.exports,g=n("2f62");r["a"].use(g["a"]);var m=new g["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({store:m,render:function(t){return t(v)}}).$mount("#app")}});
//# sourceMappingURL=app.4d4ac501.js.map