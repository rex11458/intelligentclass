(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-486cb75a"],{4745:function(t,e,s){"use strict";var i=s("7878"),o=s.n(i);o.a},"4d63":function(t,e,s){var i=s("83ab"),o=s("da84"),n=s("94ca"),c=s("7156"),a=s("9bf2").f,r=s("241c").f,l=s("44e7"),u=s("ad6d"),d=s("9f7f"),f=s("6eeb"),h=s("d039"),p=s("69f3").set,v=s("2626"),g=s("b622"),y=g("match"),m=o.RegExp,_=m.prototype,w=/a/g,C=/a/g,k=new m(w)!==w,S=d.UNSUPPORTED_Y,$=i&&n("RegExp",!k||S||h((function(){return C[y]=!1,m(w)!=w||m(C)==C||"/a/i"!=m(w,"i")})));if($){var b=function(t,e){var s,i=this instanceof b,o=l(t),n=void 0===e;if(!i&&o&&t.constructor===b&&n)return t;k?o&&!n&&(t=t.source):t instanceof b&&(n&&(e=u.call(t)),t=t.source),S&&(s=!!e&&e.indexOf("y")>-1,s&&(e=e.replace(/y/g,"")));var a=c(k?new m(t,e):m(t,e),i?this:_,b);return S&&s&&p(a,{sticky:s}),a},T=function(t){t in b||a(b,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},q=r(m),I=0;while(q.length>I)T(q[I++]);_.constructor=b,b.prototype=_,f(o,"RegExp",b)}v("RegExp")},6828:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));s("fb6a"),s("4d63"),s("ac1f"),s("25f0"),s("5319");function i(t,e){if(t){var s=t;if(/(y+)/.test("yyyy-MM-dd hh:mm:ss"))try{e=e.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length))}catch(o){if(s=new Date(parseInt(t.slice(6,19))),!s||"Invalid Date"===s.toUTCString())return""}else if(s=new Date(parseInt(t.slice(6,19))),!s||"Invalid Date"===s.toUTCString())return"";var i={M:s.getMonth()+1,d:s.getDate(),h:s.getHours(),m:s.getMinutes(),s:s.getSeconds(),q:Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};return e=e.replace(/([yMdhmsqS])+/g,(function(t,e){var o=i[e];return void 0!==o?(t.length>1&&(o="0"+o,o=o.substr(o.length-2)),o):"y"===e?(s.getFullYear()+"").substr(4-t.length):t})),e}}},"6cb6":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"course-power"},[s("head-top",[s("span",{staticClass:"header_title",attrs:{slot:""},slot:"default"},[s("span",[t._v("班级二维码")]),s("van-icon",{staticClass:"cell_icon",attrs:{name:"qr-invalid"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toShow(e)}}})],1)]),s("div",{style:{width:"0",height:"0",overflow:"hidden"}},[s("r-qrcode",{ref:"erCode",attrs:{codeValue:t.classCode,title:"邀请码","sub-title":"睿课学首页右上角输入"}},[s("div",{staticClass:"code_operate",attrs:{slot:"footer"},slot:"footer"},[t._v(" 班级： "),s("span",{on:{click:t.editClass}},[t._v(" "+t._s(t.className)+" "),s("van-icon",{attrs:{name:"edit"}})],1)])])],1),s("div",{staticClass:"black_board"},[s("div",{staticClass:"board_title"},[t._v(t._s(t.courseInfo.classHourName))]),s("div",{staticClass:"flex-evenly"},[s("span",[t._v("老师："+t._s(t.courseInfo.teacherName))]),s("span",[t._v("班级："+t._s(t.courseInfo.className))])]),s("div",{staticClass:"flex-evenly bg_foot"},[s("span",[t._v("教室："+t._s(t.courseInfo.classRoomName))]),s("span",[t._v(" 日期："+t._s(t.courseInfo.classDate)+" ")])])]),t._m(0),s("div",{staticClass:"flex-wrap-around func_list"},[t._l(t.activitys,(function(e,i){return s("div",{key:i,staticClass:"func_card",class:{disabled:"screen"===e.operate&&t.screenLock||"question"===e.operate&&t.questionLock},on:{click:function(s){return t.funcClick(e)}}},[s("div",{staticClass:"icon activity"},[s("i",{staticClass:"iconfont",class:e.icon})]),s("div",{staticClass:"card_info"},[t._v(t._s(e.title))])])})),t._l((4-t.activitys.length%4)%4,(function(t){return s("div",{key:-t,staticClass:"func_card"})}))],2),t._m(1),s("div",{staticClass:"flex-wrap-around func_list"},[t._l(t.contents,(function(e,i){return s("div",{key:i,staticClass:"func_card",on:{click:function(s){return t.contentClick(e)}}},[s("div",{staticClass:"icon content"},[s("i",{staticClass:"iconfont",class:e.icon})]),s("div",{staticClass:"card_info"},[t._v(t._s(e.title))])])})),t._l((4-t.contents.length%4)%4,(function(t){return s("div",{key:-t,staticClass:"func_card"})}))],2)],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sub_nav"},[s("span",[t._v("课堂交互")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sub_nav"},[s("span",[t._v("资源")])])}],n=(s("a434"),s("b0c0"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"r-qrcode",on:{click:function(t){t.stopPropagation()}}},[s("van-icon",{staticClass:"cell_icon",attrs:{name:"qr-invalid"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.qrCodeClick(e)}}}),s("van-popup",{style:{maxHeight:"unset"},model:{value:t.codeShow,callback:function(e){t.codeShow=e},expression:"codeShow"}},[s("div",{staticClass:"invite-code"},[s("div",{staticClass:"code-info"},[t._v(" "+t._s(t.title)+"： "),s("span",{staticClass:"code-value"},[t._v(t._s(t.codeValue))])]),s("p",{staticClass:"code-remark"},[t._v(t._s(t.subTitle))]),s("canvas",{attrs:{id:t.divName}}),t.$scopedSlots["footer"]?t._t("footer"):t._e()],2)])],1)}),c=[],a=s("d055"),r=s.n(a),l={name:"r-qrcode",components:{},props:{title:{type:String,default:"邀请码"},codeValue:{type:String,default:"888888"},subTitle:{type:String,default:"睿课学首页右上角输入"}},data:function(){return{divName:"QrSign"+(new Date).getTime(),codeShow:!1}},methods:{qrCodeClick:function(){var t=this,e=this.codeValue;this.codeShow=!0,setTimeout((function(){r.a.toCanvas(document.getElementById(t.divName),JSON.stringify(e,null,"\t"),{errorCottectionLevel:"H",margin:1,width:300},(function(t){t&&console.log(t)}))}),0)}}},u=l,d=s("2877"),f=Object(d["a"])(u,n,c,!1,null,null,null),h=f.exports,p=h,v=s("6828"),g=s("08f3"),y={name:"course-power",components:{RQrcode:p},data:function(){return{courseInfo:{classHourName:this.$store.getters.classHour.name||"课时名称",teacherName:this.$store.getters.teacher["TeacherName"]||"教师名称",className:this.$store.getters.class.name||"默认班级",classRoomName:this.$store.getters.course.classRoomName||"默认教室",classDate:Object(v["a"])(this.$store.getters.course.classDate,"yyyy-MM-dd"),updateTime:Object(v["a"])(this.$store.getters.course.updateTime,"yyyy-MM-dd hh:mm")},className:this.$store.getters.class.name||"默认班级",classCode:this.$store.getters.class.code||"",screenLock:1!==this.$store.getters.screenState,questionLock:1!==this.$store.getters.questionState,activitys:[{icon:"icon-qiandao",title:"签到",operate:"",switchType:g["i"].Sign,url:"/course/sign"},{icon:"icon-renmai",title:"分组",operate:"",switchType:g["i"].Group,url:"/course/group"},{icon:"icon-taolun",title:"分组讨论",operate:"",switchType:g["i"].GroupDiscussion,url:"/course/group-discussion"},{icon:"icon-notebook",title:"小组笔记",operate:"",switchType:g["i"].Record,url:"/course/group-note"},{icon:"icon-suijiyonghu",title:"随机挑人",operate:"",switchType:g["i"].RandomPick,url:"/course/random"},{icon:"icon-jieping",title:"截屏提问",operate:"",switchType:g["i"].Record,url:"/course/screen-question"},{icon:"icon-edu-biji",title:"随堂练习",operate:"",switchType:g["i"].ClassPractise,url:"/course/class-practise"},{icon:"icon-kejian",title:"课堂课件",operate:"",switchType:g["i"].CloudDisk,url:"/course/course-ware"},{icon:"icon-lock",title:"禁止投屏",operate:"screen",url:""},{icon:"icon-touping",title:"投屏演示",operate:"",url:"/course/throw-screen"},{icon:"icon-jinzhifayan",title:"禁止提问",operate:"question",url:""},{icon:"icon-tiwen2",title:"课堂提问",operate:"",switchType:g["i"].Question,url:"/course/question"},{icon:"icon-weike1",title:"屏幕广播",operate:"",url:"/course/broadcast"},{icon:"icon-fenxiang",title:"板书分享",operate:"",switchType:g["i"].Record,url:"/course/board-note"}],contents:[{icon:"icon-cloud-folder",title:"云盘",switchType:g["i"].CloudDisk,url:"/cloud-disk"},{icon:"icon-yulan",title:"题库",url:"/practise-library"}],activeIndex:-1}},created:function(){this.activitys.splice(8,1,{icon:this.screenLock?"icon-lock":"icon-unlock",title:this.screenLock?"禁止投屏":"允许投屏",operate:"screen",url:""}),this.getQuestionState(),this.getScreenState()},methods:{toShow:function(){console.log(this.$refs["erCode"]),this.$refs["erCode"].qrCodeClick()},editClass:function(){this.$router.push("/class/edit/"+this.$store.getters.classID+"/"+this.$store.getters.class.name)},funcClick:function(t){(t.switchType||"0"===t.switchType)&&this.$gatewayHttp.broadcast.switchPage({function:t.switchType}),"screen"===t.operate?"允许投屏"===t.title?this.setScreenState(t,!0):"禁止投屏"===t.title?this.setScreenState(t,!1):this.screenLock?this.$toast("当前禁止投屏，请先开启投屏！"):t.url&&this.$router.push(t.url):"question"===t.operate?"允许提问"===t.title?this.setQuestionState(t,!0):"禁止提问"===t.title?this.setQuestionState(t,!1):this.questionLock?this.$toast("当前禁止提问，请先允许提问！"):t.url&&this.$router.push(t.url):t.url&&this.$router.push(t.url)},contentClick:function(t){t.url&&((t.switchType||"0"===t.switchType)&&this.$gatewayHttp.broadcast.switchPage({function:t.switchType}),this.$router.push(t.url))},getQuestionState:function(){var t=this;this.$gatewayHttp.question.getState().then((function(e){e.Result?(t.questionLock=e["IsAllow"],t.activitys.splice(10,1,{icon:t.questionLock?"icon-jinzhifayan":"icon-fayan",title:t.questionLock?"禁止提问":"允许提问",operate:"question",url:""})):e.Info&&t.$toast(e.Info)})).catch((function(){}))},setQuestionState:function(t,e){var s=this;this.$gatewayHttp.question.setState({isAllow:e}).then((function(i){i.Result?(t.icon=e?"icon-jinzhifayan":"icon-fayan",t.title=e?"禁止提问":"允许提问",s.questionLock=e,s.$store.commit("SET_QUESTION_STATE",e?0:1),s.$toast("设置成功")):i.Info?s.$toast(i.Info):s.$toast("设置失败")})).catch((function(){s.$toast("操作失败")}))},getScreenState:function(){var t=this;this.$gatewayHttp.broadcast.getState().then((function(e){e.Result?(t.screenLock=e["IsAllow"],t.activitys.splice(8,1,{icon:t.screenLock?"icon-lock":"icon-unlock",title:t.screenLock?"禁止投屏":"允许投屏",operate:"screen",url:""})):e.Info&&t.$toast(e.Info)})).catch((function(){}))},setScreenState:function(t,e){var s=this;this.$gatewayHttp.broadcast.setState({isAllow:e}).then((function(i){i.Result?(t.icon=e?"icon-lock":"icon-unlock",t.title=e?"禁止投屏":"允许投屏",s.screenLock=e,s.$store.commit("SET_SCREEN_STATE",e?0:1),s.$toast("设置成功")):i.Info?s.$toast(i.Info):s.$toast("设置失败")})).catch((function(){s.$toast("操作失败")}))}}},m=y,_=(s("4745"),Object(d["a"])(m,i,o,!1,null,"16109125",null));e["default"]=_.exports},7156:function(t,e,s){var i=s("861d"),o=s("d2bb");t.exports=function(t,e,s){var n,c;return o&&"function"==typeof(n=e.constructor)&&n!==s&&i(c=n.prototype)&&c!==s.prototype&&o(t,c),t}},7878:function(t,e,s){},a434:function(t,e,s){"use strict";var i=s("23e7"),o=s("23cb"),n=s("a691"),c=s("50c4"),a=s("7b0b"),r=s("65f0"),l=s("8418"),u=s("1dde"),d=s("ae40"),f=u("splice"),h=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min,g=9007199254740991,y="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!f||!h},{splice:function(t,e){var s,i,u,d,f,h,m=a(this),_=c(m.length),w=o(t,_),C=arguments.length;if(0===C?s=i=0:1===C?(s=0,i=_-w):(s=C-2,i=v(p(n(e),0),_-w)),_+s-i>g)throw TypeError(y);for(u=r(m,i),d=0;d<i;d++)f=w+d,f in m&&l(u,d,m[f]);if(u.length=i,s<i){for(d=w;d<_-i;d++)f=d+i,h=d+s,f in m?m[h]=m[f]:delete m[h];for(d=_;d>_-i+s;d--)delete m[d-1]}else if(s>i)for(d=_-i;d>w;d--)f=d+i-1,h=d+s-1,f in m?m[h]=m[f]:delete m[h];for(d=0;d<s;d++)m[d+w]=arguments[d+2];return m.length=_-i+s,u}})}}]);
//# sourceMappingURL=chunk-486cb75a.edfb8d74.js.map