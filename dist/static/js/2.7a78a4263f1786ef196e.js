webpackJsonp([2],{"162o":function(e,t,s){(function(e){var n=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function a(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new a(i.call(setTimeout,n,arguments),clearTimeout)},t.setInterval=function(){return new a(i.call(setInterval,n,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(n,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},s("mypn"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(t,s("DuR2"))},"8JHg":function(e,t){},"9Gv2":function(e,t){},JK0B:function(e,t,s){"use strict";var n=s("bOdI"),i=s.n(n),a=(s("3Lne"),s("SSsa")),o={components:i()({},a.a.name,a.a),props:{master:{type:Number,default:null},disable:{type:Boolean,default:!0}},data:function(){return{value:this.master}},created:function(){},methods:{clickSurvey:function(e){this.$emit("selectSurvey",e)},resetVal:function(e){this.value=e}},watch:{master:function(e,t){this.value=e}}},u={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"survey_info"},[s("van-button",{directives:[{name:"show",rawName:"v-show",value:-1===[0,1].indexOf(e.value)||1===e.value,expression:"[0,1].indexOf(value)===-1 || value===1"}],attrs:{icon:"success",type:"primary",disabled:[0,1].indexOf(e.value)>-1&&e.disable},on:{click:function(t){return e.clickSurvey(!0)}}},[e._v("已掌握")]),e._v(" "),s("van-button",{directives:[{name:"show",rawName:"v-show",value:-1===[0,1].indexOf(e.value)||0===e.value,expression:"[0,1].indexOf(value)===-1  || value===0"}],attrs:{icon:"cross",type:"danger",disabled:[0,1].indexOf(e.value)>-1&&e.disable},on:{click:function(t){return e.clickSurvey(!1)}}},[e._v("未掌握")])],1)},staticRenderFns:[]};var r=s("VU/8")(o,u,!1,function(e){s("8JHg")},"data-v-5c517285",null);t.a=r.exports},NjWj:function(e,t){},"Y+1g":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("mvHQ"),i=s.n(n),a=s("fZjL"),o=s.n(a),u=s("bOdI"),r=s.n(u),c=(s("nOaS"),s("pIDD")),l=s("bBUo"),d=s("1wEQ"),p=s("udYK"),f=s("Hvz8"),h=s("JK0B"),v=s("FwVa"),m=s("162o"),y={name:"",components:r()({headTop:l.a,RImage:d.a,DoAnswer:p.a,MyAnswer:f.a,Survey:h.a},c.a.name,c.a),props:{},data:function(){return{questionID:this.$route.params.id,operateStep:v.i.init,questionInfo:{},questionPattern:v.j.all,questionOperate:{},ableResponder:!1,responderResult:!1,responderLoading:!1,img:"",currentIndex:3,modulePicture:v.g.ScreenAnswer,ableReply:!1,isSurvey:!1}},created:function(){this.getInitRouter()},mounted:function(){var e=this;this.$nextTick(function(){e.getQuestionData()})},methods:{getQuestionData:function(){var e=this;o()(this.questionInfo).forEach(function(t){e.$delete(e.questionInfo,t)}),o()(this.questionOperate).forEach(function(t){e.$delete(e.questionOperate,t)}),this.$gatewayHttp.screenQustion.getData({ssid:this.questionID,studentID:this.$store.getters.studentID}).then(function(t){t.Result&&t.Data&&(e.questionInfo=JSON.parse(i()(t.Data[0].Key)),e.isSurvey=e.questionInfo.SSSurvey||!1,e.questionOperate=JSON.parse(i()(t.Data[0].Value)),e.ableReply=!e.questionOperate||!e.questionOperate.SAContent,e.questionPattern=e.questionInfo.SSPattern||v.j.all,e.img=e.$gatewayHttp.resourse.picture(e.questionInfo.SSContent,v.g.ScreenSubject))}).catch(function(e){})},getPatternName:function(e){return Object(v.m)(e)},getQuestionTypeName:function(e){return Object(v.n)(e)},getInitRouter:function(){this.currentIndex=this.$route.params.id},sbumit:function(){var e=this;!this.responderLoading&&this.ableResponder&&(this.responderLoading=!0,this.$gatewayHttp.screenQustion.postDataResponder({ssid:this.questionInfo.SSID,studentID:this.$store.getters.studentID}).then(function(t){t.Result?(e.responderResult=!0,Object(m.setTimeout)(function(){e.getQuestionData(),e.operateStep=v.i.responderReply},1e3)):e.responderResult=!1,e.responderLoading=!1,e.ableResponder=!1}).catch(function(t){e.responderLoading=!1,e.ableResponder=!0}))},answerChange:function(e){this.questionOperate.SAContent=e},submitAnswer:function(){var e=this;this.questionOperate.SAContent?this.$gatewayHttp.screenQustion.postDataAnswer({said:this.questionOperate.SAID,ssid:this.questionInfo.SSID,ssPattern:this.questionPattern,studentID:this.$store.getters.studentID,saContent:this.questionOperate.SAContent}).then(function(t){t.Result?(e.$toast.success("作答成功"),Object(m.setTimeout)(function(){e.ableReply=!1},200)):t.IsAnswer?e.$toast.success("您已作答, 请勿再答"):t.Info&&e.$toast(t.Info)}).catch(function(t){e.$toast("提交失败，请重试")}):this.$toast("请先作答")},selectSurvey:function(e){var t=this;this.$gatewayHttp.screenQustion.postDataSurvey({ssid:this.questionInfo.SSID,studentID:this.$store.getters.studentID,saMaster:e?1:0}).then(function(e){t.$toast.success("提交问卷成功"),Object(m.setTimeout)(function(){t.getQuestionData()},1e3)}).catch(function(e){t.$toast("提交失败，请重试")})}},computed:{showResponder:function(){return this.questionPattern===v.j.responder&&this.operateStep===v.i.responder&&1===this.questionInfo.State},showDoAnswer:function(){return!!this.ableReply&&(this.questionPattern===v.j.random?this.operateStep===v.i.init&&1===this.questionInfo.State&&this.questionOperate.StudentID===this.$store.getters.studentID:this.questionPattern===v.j.responder?!(this.operateStep!==v.i.responderReply||1!==this.questionInfo.State||!this.responderResult)||this.operateStep===v.i.init&&1===this.questionInfo.State&&this.questionOperate.StudentID===this.$store.getters.studentID:this.operateStep===v.i.init&&1===this.questionInfo.State)},showMyAnswer:function(){return!this.ableReply||(this.operateStep===v.i.acceptAnswer||this.operateStep===v.i.survey||this.operateStep===v.i.init&&[2,3].indexOf(this.questionInfo.State)>-1)},showSurvey:function(){return this.isSurvey}},watch:{"$store.getters.screenQuestion":function(e,t){if(e!==t){this.operateStep=e.type||v.i.init,this.ableResponder=this.operateStep===v.i.responder;var s=this.questionID!==e.id;this.questionID=e.id||"",this.operateStep===v.i.init||this.operateStep===v.i.acceptAnswer||this.operateStep===v.i.survey?this.getQuestionData():s&&this.getQuestionData(),this.operateStep!==v.i.survey&&this.operateStep!==v.i.acceptAnswer||(this.isSurvey=this.operateStep===v.i.survey,this.$nextTick(function(){var e=document.body.clientHeight;document.documentElement.scrollTop=e,Object(m.setTimeout)(function(){document.documentElement.scrollTop=e},1e3)}))}}}},S={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"capture-quize"}},[s("head-top",{attrs:{title:"截屏提问"}}),e._v(" "),s("div",{staticClass:"main"},[s("div",{staticClass:"top"},[s("div",{staticClass:"tt"},[s("span",{staticClass:"info fL"},[e._v(e._s(e.questionInfo.SSSerial)+".["+e._s(e.getQuestionTypeName(e.questionInfo.SSType))+"] "+e._s(e.questionInfo.SSScore)+"分")]),e._v(" "),s("span",{class:3===e.questionPattern?"red":"green"},[e._v(e._s(e.getPatternName(e.questionPattern)))]),e._v(" "),s("span",{staticClass:"time fR"},[e._v("计时 ："+e._s(e.questionInfo.SSTime)+"分钟")])]),e._v(" "),s("div",{staticClass:"bg"},[s("r-image",{attrs:{width:"92vw",height:"33vh",src:e.img}})],1)]),e._v(" "),e.showResponder?s("div",{staticClass:"responder"},[e.ableResponder?s("div",[s("div",{staticClass:"prompt"},[e._v("请点击下方按钮进行抢答")]),e._v(" "),s("div",{staticClass:"qiangdabg",on:{click:e.sbumit}},[e.responderLoading?s("van-loading",{attrs:{type:"spinner",color:"#1989fa"}},[e._v("抢答中")]):e._e()],1)]):s("div",{class:e.responderResult?"qd_sucess":"qd_fail"},[e._v(e._s(e.responderResult?"":"抢答失败"))])]):s("div",[e.showDoAnswer?s("do-answer",{attrs:{"question-type":e.questionInfo.SSType,"question-option":e.questionInfo.SSOption,ableReply:e.ableReply,"answer-value":e.questionOperate.SAContent,"module-picture":e.modulePicture},on:{change:e.answerChange}},[s("div",{directives:[{name:"show",rawName:"v-show",value:1===e.questionInfo.State&&e.ableReply,expression:"questionInfo['State']===1 && ableReply"}]},[s("button",{staticClass:"sbumit",on:{click:e.submitAnswer}},[e._v("提 交")])])]):e._e(),e._v(" "),e.showMyAnswer?s("my-answer",{attrs:{"question-type":e.questionInfo.SSType,"my-answer":e.questionOperate.SAContent,"module-picture":e.modulePicture,"true-answer":e.questionInfo.SSAnswer,"get-score":e.questionOperate?e.questionOperate.SAScore:null,comment:e.questionOperate.Comment||""}}):e._e(),e._v(" "),e.showSurvey?s("survey",{ref:"survey",attrs:{disable:3!==e.questionInfo.State,master:e.questionOperate.SAMaster},on:{selectSurvey:e.selectSurvey}}):e._e()],1)])],1)},staticRenderFns:[]};var g=s("VU/8")(y,S,!1,function(e){s("9Gv2")},"data-v-b67ce89e",null);t.default=g.exports},mypn:function(e,t,s){(function(e,t){!function(e,s){"use strict";if(!e.setImmediate){var n,i,a,o,u,r=1,c={},l=!1,d=e.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(e);p=p&&p.setTimeout?p:e,"[object process]"==={}.toString.call(e.process)?n=function(e){t.nextTick(function(){h(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,s=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=s,t}}()?e.MessageChannel?((a=new MessageChannel).port1.onmessage=function(e){h(e.data)},n=function(e){a.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(i=d.documentElement,n=function(e){var t=d.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):n=function(e){setTimeout(h,0,e)}:(o="setImmediate$"+Math.random()+"$",u=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(o)&&h(+t.data.slice(o.length))},e.addEventListener?e.addEventListener("message",u,!1):e.attachEvent("onmessage",u),n=function(t){e.postMessage(o+t,"*")}),p.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),s=0;s<t.length;s++)t[s]=arguments[s+1];var i={callback:e,args:t};return c[r]=i,n(r),r++},p.clearImmediate=f}function f(e){delete c[e]}function h(e){if(l)setTimeout(h,0,e);else{var t=c[e];if(t){l=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(s,n)}}(t)}finally{f(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,s("DuR2"),s("W2nU"))},udYK:function(e,t,s){"use strict";var n,i=s("bOdI"),a=s.n(i),o=(s("k3b4"),s("+2ln")),u=(s("jti4"),s("uk7J")),r=s("1B8A"),c=s("0xDb"),l={components:(n={},a()(n,u.a.name,u.a),a()(n,o.a.name,o.a),a()(n,"RQuillEditor",r.a),n),props:{questionType:{type:Number,default:1},questionOption:{type:Number,default:0},btnName:{type:String,default:"提交"},ableReply:{type:Boolean,default:!0},modulePicture:{type:Number,default:1},answerValue:{type:String,default:""}},data:function(){return{judgeChoice:["对","错"],multiValue:this.selectValue?this.selectValue.split(""):[],selectValue:this.answerValue}},mounted:function(){},methods:{selectAnswer:function(e){if(this.ableReply){if(2===this.questionType){var t=this.multiValue.indexOf(e);t>-1?this.multiValue.splice(t,1):this.multiValue.push(e),this.selectValue=this.multiValue.sort().join("")}else this.selectValue=e;this.backValue()}},editorChange:function(e){this.selectValue=e,this.backValue()},backValue:function(){this.$emit("change",this.selectValue)}},computed:{selectOptions:function(){return 1===this.questionType?Object(c.f)(this.questionOption):2===this.questionType?Object(c.f)(this.questionOption):3===this.questionType?this.judgeChoice:void 0}},watch:{answerValue:function(e,t){e!==this.selectValue&&(this.selectValue=e,this.multiValue=this.selectValue?this.selectValue.split(""):[])}}},d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[1===e.questionType?s("div",{staticClass:"selects"},[s("div",{staticClass:"content"},[s("div",{staticClass:"prompt"},[e._v("请选择正确的答案")]),e._v(" "),s("div",{staticClass:"all-select"},e._l(e.selectOptions,function(t,n){return s("div",{key:n,staticClass:"select-item",class:e.answerValue===t?"singel-selected":"",on:{click:function(s){return e.selectAnswer(t)}}},[e._v(e._s(t))])}),0)])]):2===e.questionType?s("div",{staticClass:"selects"},[s("div",{staticClass:"content"},[s("div",{staticClass:"prompt"},[e._v("请选择正确的答案")]),e._v(" "),s("div",{staticClass:"all-select"},e._l(e.selectOptions,function(t,n){return s("div",{key:n,staticClass:"select-item",class:e.answerValue.indexOf(t)>-1?"singel-selected":"",on:{click:function(s){return e.selectAnswer(t)}}},[e._v(e._s(t))])}),0)])]):3===e.questionType?s("div",{staticClass:"answers"},[s("div",{staticClass:"tt"},[e._v("请选择正确的答案")]),e._v(" "),s("div",{staticClass:"buttons"},e._l(e.selectOptions,function(t,n){return s("div",{key:n,class:e.answerValue===t?"selected":"",on:{click:function(s){return e.selectAnswer(t)}}},[e._v(e._s(t))])}),0)]):s("div",{staticClass:"answers"},[s("div",{staticClass:"tt"},[e._v("请将您的答案写在下方的编辑框中")]),e._v(" "),s("r-quill-editor",{attrs:{funType:e.modulePicture,content:e.selectValue,"max-height":"40vh"},on:{change:e.editorChange}})],1),e._v(" "),e._t("default")],2)},staticRenderFns:[]};var p=s("VU/8")(l,d,!1,function(e){s("NjWj")},"data-v-571c27ba",null);t.a=p.exports}});
//# sourceMappingURL=2.7a78a4263f1786ef196e.js.map