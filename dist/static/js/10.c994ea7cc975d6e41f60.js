webpackJsonp([10],{"162o":function(e,t,n){(function(e){var s=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(i.call(setTimeout,s,arguments),clearTimeout)},t.setInterval=function(){return new o(i.call(setInterval,s,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(s,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n("mypn"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(t,n("DuR2"))},QHYW:function(e,t){},"Y+1g":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("mvHQ"),i=n.n(s),o=n("fZjL"),a=n.n(o),r=n("wH5m"),u=n("J2a0"),c=n("UB37"),p=n("Y/lf"),l=n("FwVa"),d=n("162o"),f={name:"",components:{RImage:r.a,DoAnswer:u.a,MyAnswer:c.a,Survey:p.a},props:{},data:function(){return{questionID:this.$route.params.id,operateStep:l.i.init,questionInfo:{},questionPattern:l.j.all,questionOperate:{},ableResponder:!1,responderResult:!1,responderLoading:!1,img:"",currentIndex:3,modulePicture:l.g.ScreenAnswer,ableReply:!1,isSurvey:!1}},created:function(){this.getInitRouter()},mounted:function(){var e=this;this.$nextTick(function(){e.getQuestionData()})},methods:{getQuestionData:function(){var e=this;a()(this.questionInfo).forEach(function(t){e.$delete(e.questionInfo,t)}),a()(this.questionOperate).forEach(function(t){e.$delete(e.questionOperate,t)}),this.$gatewayHttp.screenQustion.getData({ssid:this.questionID,studentID:this.$store.getters.studentID}).then(function(t){t.Result&&t.Data&&(e.questionInfo=JSON.parse(i()(t.Data[0].Key)),e.isSurvey=e.questionInfo.SSSurvey||!1,e.questionOperate=JSON.parse(i()(t.Data[0].Value)),e.ableReply=!e.questionOperate||!e.questionOperate.SAContent,e.questionPattern=e.questionInfo.SSPattern||l.j.all,e.img=e.$gatewayHttp.resourse.picture(e.questionInfo.SSContent,l.g.ScreenSubject))}).catch(function(e){})},getPatternName:function(e){return Object(l.m)(e)},getQuestionTypeName:function(e){return Object(l.n)(e)},getInitRouter:function(){this.currentIndex=this.$route.params.id},sbumit:function(){var e=this;!this.responderLoading&&this.ableResponder&&(this.responderLoading=!0,this.$gatewayHttp.screenQustion.postDataResponder({ssid:this.questionInfo.SSID,studentID:this.$store.getters.studentID}).then(function(t){t.Result?(e.responderResult=!0,Object(d.setTimeout)(function(){e.getQuestionData(),e.operateStep=l.i.responderReply},1e3)):e.responderResult=!1,e.responderLoading=!1,e.ableResponder=!1}).catch(function(t){e.responderLoading=!1,e.ableResponder=!0}))},answerChange:function(e){this.questionOperate.SAContent=e},submitAnswer:function(){var e=this;this.questionOperate.SAContent?this.$gatewayHttp.screenQustion.postDataAnswer({said:this.questionOperate.SAID,ssid:this.questionInfo.SSID,ssPattern:this.questionPattern,studentID:this.$store.getters.studentID,saContent:this.questionOperate.SAContent}).then(function(t){t.Result?(e.$toast.success("作答成功"),Object(d.setTimeout)(function(){e.ableReply=!1},200)):t.IsAnswer?e.$toast.success("您已作答, 请勿再答"):t.Info&&e.$toast(t.Info)}).catch(function(t){e.$toast("提交失败，请重试")}):this.$toast("请先作答")},selectSurvey:function(e){var t=this;this.$gatewayHttp.screenQustion.postDataSurvey({ssid:this.questionInfo.SSID,studentID:this.$store.getters.studentID,saMaster:e?1:0}).then(function(e){e.Result?(t.$toast.success("提交问卷成功"),Object(d.setTimeout)(function(){t.getQuestionData()},1e3)):e.Info?t.$toast(e.Info):t.$toast("提交失败")}).catch(function(e){t.$toast("提交失败，请重试")})}},computed:{showResponder:function(){return this.questionPattern===l.j.responder&&this.operateStep===l.i.responder&&1===this.questionInfo.State},showDoAnswer:function(){return!!this.ableReply&&(this.questionPattern===l.j.random?this.operateStep===l.i.init&&1===this.questionInfo.State&&this.questionOperate.StudentID===this.$store.getters.studentID:this.questionPattern===l.j.responder?!(this.operateStep!==l.i.responderReply||1!==this.questionInfo.State||!this.responderResult)||this.operateStep===l.i.init&&1===this.questionInfo.State&&this.questionOperate.StudentID===this.$store.getters.studentID:this.operateStep===l.i.init&&1===this.questionInfo.State)},showMyAnswer:function(){return!this.ableReply||(this.operateStep===l.i.acceptAnswer||this.operateStep===l.i.survey||this.operateStep===l.i.init&&[2,3].indexOf(this.questionInfo.State)>-1)},showSurvey:function(){return this.isSurvey&&this.questionOperate&&this.questionOperate.SAContent}},watch:{"$store.getters.screenQuestion":function(e,t){if(e!==t){this.operateStep=e.type||l.i.init,this.ableResponder=this.operateStep===l.i.responder;var n=this.questionID!==e.id;this.questionID=e.id||"",this.operateStep===l.i.init||this.operateStep===l.i.acceptAnswer||this.operateStep===l.i.survey?this.getQuestionData():n&&this.getQuestionData(),this.operateStep!==l.i.survey&&this.operateStep!==l.i.acceptAnswer||(this.isSurvey=this.operateStep===l.i.survey,this.$nextTick(function(){var e=document.body.clientHeight;document.documentElement.scrollTop=e,Object(d.setTimeout)(function(){document.documentElement.scrollTop=e},1e3)}))}}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"capture-quize"}},[n("head-top",{attrs:{title:"截屏提问"}}),e._v(" "),n("div",{staticClass:"main"},[n("div",{staticClass:"top"},[n("div",{staticClass:"tt"},[n("span",{staticClass:"info fL"},[e._v("\n          "+e._s(e.questionInfo.SSSerial)+".["+e._s(e.getQuestionTypeName(e.questionInfo.SSType))+"]\n          "+e._s(e.questionInfo.SSScore)+"分\n        ")]),e._v(" "),n("span",{class:3===e.questionPattern?"red":"green"},[e._v("\n          "+e._s(e.getPatternName(e.questionPattern))+"\n        ")]),e._v(" "),n("span",{staticClass:"time fR"},[e._v("\n          计时 ："+e._s(e.questionInfo.SSTime)+"分钟\n        ")])]),e._v(" "),n("div",{staticClass:"bg"},[n("r-image",{attrs:{width:"92vw",height:"33vh",src:e.img}})],1)]),e._v(" "),e.showResponder?n("div",{staticClass:"responder"},[e.ableResponder?n("div",[n("div",{staticClass:"prompt"},[e._v("请点击下方按钮进行抢答")]),e._v(" "),n("div",{staticClass:"qiangdabg",on:{click:e.sbumit}},[e.responderLoading?n("van-loading",{attrs:{type:"spinner",color:"#1989fa"}},[e._v("\n            抢答中\n          ")]):e._e()],1)]):n("div",{class:e.responderResult?"qd_sucess":"qd_fail"},[e._v("\n        "+e._s(e.responderResult?"":"抢答失败")+"\n      ")])]):n("div",[e.showDoAnswer?n("do-answer",{attrs:{"question-type":e.questionInfo.SSType,"question-option":e.questionInfo.SSOption,ableReply:e.ableReply,"answer-value":e.questionOperate.SAContent,"module-picture":e.modulePicture},on:{change:e.answerChange}},[n("div",{directives:[{name:"show",rawName:"v-show",value:1===e.questionInfo.State&&e.ableReply,expression:"questionInfo['State']===1 && ableReply"}]},[n("button",{staticClass:"sbumit",on:{click:e.submitAnswer}},[e._v("\n            提 交\n          ")])])]):e._e(),e._v(" "),e.showMyAnswer?n("my-answer",{attrs:{"question-type":e.questionInfo.SSType,"my-answer":e.questionOperate.SAContent,"module-picture":e.modulePicture,"true-answer":e.questionInfo.SSAnswer,"get-score":e.questionOperate?e.questionOperate.SAScore:null,comment:e.questionOperate.Comment||""}}):e._e(),e._v(" "),e.showSurvey?n("survey",{ref:"survey",attrs:{disable:3!==e.questionInfo.State,master:e.questionOperate.SAMaster},on:{selectSurvey:e.selectSurvey}}):e._e()],1)])],1)},staticRenderFns:[]};var m=n("VU/8")(f,h,!1,function(e){n("QHYW")},"data-v-4ae81ef7",null);t.default=m.exports},mypn:function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var s,i,o,a,r,u=1,c={},p=!1,l=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?s=function(e){t.nextTick(function(){h(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){h(e.data)},s=function(e){o.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(i=l.documentElement,s=function(e){var t=l.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):s=function(e){setTimeout(h,0,e)}:(a="setImmediate$"+Math.random()+"$",r=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&h(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",r,!1):e.attachEvent("onmessage",r),s=function(t){e.postMessage(a+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return c[u]=i,s(u),u++},d.clearImmediate=f}function f(e){delete c[e]}function h(e){if(p)setTimeout(h,0,e);else{var t=c[e];if(t){p=!0;try{!function(e){var t=e.callback,s=e.args;switch(s.length){case 0:t();break;case 1:t(s[0]);break;case 2:t(s[0],s[1]);break;case 3:t(s[0],s[1],s[2]);break;default:t.apply(n,s)}}(t)}finally{f(e),p=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n("DuR2"),n("W2nU"))},wH5m:function(e,t,n){"use strict";var s=n("SVYa");t.a=s.a}});
//# sourceMappingURL=10.c994ea7cc975d6e41f60.js.map