(function(e){function t(t){for(var o,a,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";n("85ec")},"85ec":function(e,t,n){},"8ba0":function(e,t,n){},b548:function(e,t,n){"use strict";n("8ba0")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("h1",[e._v("ver13")]),n("h1",[e._v(e._s(this.description))]),e.isParams?n("div",[n("iframe",{attrs:{src:"https://player.vimeo.com/video/342787403?playsinline=1",width:"640",height:"360",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}}),n("div",{attrs:{id:"player2"}})]):n("div",[n("GenerateUrl")],1)])])},i=[],a=(n("a4d3"),n("e01a"),n("99af"),n("e0ec")),s=n.n(a),c=(n("4de4"),n("c975"),n("a15b"),n("d81d"),n("ac1f"),n("841c"),n("1276"),function(e){var t=e.split(":"),n=0,o=1;while(t.length>0){var r=t.pop();n+=o*parseInt(r,10),o*=60}return n}),l=function(e){for(var t=location.search.substr(location.search.indexOf("?")+1),n="",o=t.split("&"),r=0;r<o.length;r++){var i=o[r].split("=");[i[0]]==e&&(n=i[1])}return n},u=function(e){var t=parseInt(e,10),n=Math.floor(t/3600)%24,o=Math.floor(t/60)%60,r=t%60;return[n,o,r].map((function(e){return e<10?"0"+e:e})).filter((function(e,t){return"00"!==e||t>0})).join(":")},d=n("342d"),p=n.n(d),f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"generateUrl"},[n("section",{staticClass:"hero"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[e._v(" 아이템을 추가해주세요! ")]),n("h2",{staticClass:"subtitle"},[e._v(" Hero subtitle ")])])])]),n("input",{attrs:{type:"text",placeholder:"https://www.youtube.com/watch?v=IQf1nTfgOCQ"}}),n("input",{attrs:{type:"button",value:"Search"}}),n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")]),n("h3",[e._v("Installed CLI Plugins")]),n("h3",[e._v("Ecosystem")]),n("input",{attrs:{type:"button",value:"Link Share"}}),n("h3",[e._v("Installed CLI Plugins")]),n("h3",[e._v("Ecosystem")])])}],v=o["a"].extend({name:"generateUrl",created:function(){}}),m=v,y=(n("b548"),n("2877")),g=Object(y["a"])(m,f,h,!1,null,"ba8e53c6",null),b=g.exports,T=n("43cf"),w=n.n(T);o["a"].use(s.a),o["a"].use(p.a);var I=o["a"].extend({components:{GenerateUrl:b},data:function(){return{title:"Loop Youtube",timeupdater:Object,videoId:"",word:"",playingTime:0,start:0,end:0,videotime:0}},head:{title:function(){return{inner:this.metaTitle}},meta:function(){return[{property:"og:site_name",content:this.title},{property:"og:title",content:this.metaTitle},{property:"og:description",content:this.description},{p:"og:image",c:this.img},{property:"og:image:type",content:"image/gif"},{property:"og:image:width",content:"500"},{property:"og:image:height",content:"376"}]}},created:function(){console.log("created"),this.videoId=l("v"),this.start=c(l("s")),this.end=c(l("e")),this.word=l("w"),this.player2()},mounted:function(){console.log("mounted")},beforeUpdate:function(){console.log("beforeUpdate")},updated:function(){console.log("updated")},beforeDestroy:function(){console.log("beforeDestroy")},beforeMount:function(){console.log("beforeMount")},computed:{endPlus1:function(){return this.end+1},loopTrigerMilliSecond:function(){return 1e3*(this.end-this.start)},metaTitle:function(){return"".concat(this.title," | ").concat(u(this.start),"~").concat(u(this.end))},decodedWord:function(){return decodeURIComponent(this.word)},description:function(){return"".concat(this.decodedWord," | ").concat(u(this.start),"~").concat(u(this.end))},img:function(){return"https://i.ytimg.com/vi/".concat(this.videoId,"/mqdefault.jpg")},playerVars:function(){return{player3:Object,rel:0,autoplay:1,enablejsapi:1,fs:0,playsinline:1,ivLoadPolicy2:1,start:this.start,end:this.end}},isParams:function(){return!!this.videoId&&!!this.start&&!!this.end},player:function(){var e=this.$refs.youtube;return e.player}},methods:{player2:function(){var e=this;w.a.load((function(t){var n=new t.Player("player2",{videoId:e.videoId,events:{onReady:function(){e.player3=n,e.playingTime=e.start,console.log("player3",e.player3),e.player3.loadVideoById({videoId:e.videoId,startSeconds:e.start||0,endSeconds:e.endPlus1||n.getDuration(),playerVars:{start:e.start,end:e.endPlus1,playsinline:1,loop:1,playlist:e.videoId}})},onStateChange:function(n){if(console.log("e.data",n.data),n.data==t.PlayerState.ENDED)console.log("YT.PlayerState.END timeupdater",e.timeupdater),e.clearTimeInterval();else if(n.data==t.PlayerState.PLAYING){console.log("YT.PlayerState.PLAYING",e.player3);var o=e.updateTime;e.timeupdater=setInterval((function(){o()}),1e3)}else n.data==t.PlayerState.PAUSED&&(console.log("YT.PlayerState.PAUSED timeupdater",e.timeupdater),e.clearTimeInterval())}}})}))},clearTimeInterval:function(){clearInterval(this.timeupdater)},updateTime:function(){var e=this.player3;console.log("updateTime player",e);var t=this.videotime;e&&e.getCurrentTime&&(this.videotime=e.getCurrentTime()),this.videotime!==t&&this.onProgress(this.videotime)},onProgress:function(e){console.log("onProgress","".concat(Math.floor(e)," - ").concat(this.end)),Math.floor(e)==this.end&&(console.log("match onProgress","".concat(Math.floor(e)," - ").concat(this.end)),this.seekTo(),this.clearTimeInterval())},playVideo:function(){this.player.playVideo()},loadVideoById:function(){},ready:function(){},playing:function(){},seekTo:function(){console.warn("seekTo"),this.player3.seekTo(this.start)},seekTo2:function(){console.log("seekTo2",this.playingTime),this.playingTime+=1},ended:function(){this.seekTo()},error:function(e){},onPlayerStateChange:function(e,t){console.log("onPlayerStateChange evt",t)}}}),P=I,_=(n("034f"),Object(y["a"])(P,r,i,!1,null,null,null)),S=_.exports,j=n("2f62"),O={getVideoId:function(e){return e.videoId},getStartTime:function(e){return e.startTime},getEndTime:function(e){return e.endTime},getWord:function(e){return e.word}},C=O,k={setVideoId:function(e,t){e.videoId=t},setStartTime:function(e,t){e.startTime=t},setEndTime:function(e,t){e.endTime=t},setWord:function(e,t){e.word=t}},x=k,E={startTime:0,endTime:0,videoId:"",word:""},M={namespaced:!0,state:E,getters:C,mutations:x};o["a"].use(j["a"]);var U=new j["a"].Store({state:{version:"1.0.0"},modules:{video:M}});o["a"].config.productionTip=!1,new o["a"]({store:U,render:function(e){return e(S)}}).$mount("#app")}});
//# sourceMappingURL=app.93b5e12a.js.map