webpackJsonp([3],{"/pbc":function(t,e){},JK0B:function(t,e,s){"use strict";var a=s("bOdI"),n=s.n(a),i=(s("3Lne"),s("SSsa")),c={components:n()({},i.a.name,i.a),props:{master:{type:Number,default:null},disable:{type:Boolean,default:!0}},data:function(){return{value:this.master}},created:function(){},methods:{clickSurvey:function(t){this.$emit("selectSurvey",t)},resetVal:function(t){this.value=t}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"survey_info"},[s("van-button",{directives:[{name:"show",rawName:"v-show",value:-1===[0,1].indexOf(t.value)||1===t.value,expression:"[0,1].indexOf(value)===-1 || value===1"}],attrs:{icon:"success",type:"primary",disabled:[0,1].indexOf(t.value)>-1&&t.disable},on:{click:function(e){return t.clickSurvey(!0)}}},[t._v("已掌握")]),t._v(" "),s("van-button",{directives:[{name:"show",rawName:"v-show",value:-1===[0,1].indexOf(t.value)||0===t.value,expression:"[0,1].indexOf(value)===-1  || value===0"}],attrs:{icon:"cross",type:"danger",disabled:[0,1].indexOf(t.value)>-1&&t.disable},on:{click:function(e){return t.clickSurvey(!1)}}},[t._v("未掌握")])],1)},staticRenderFns:[]};var o=s("VU/8")(c,r,!1,function(t){s("cqYb")},"data-v-026993ce",null);e.a=o.exports},cqYb:function(t,e){},kCdw:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("fZjL"),n=s.n(a),i=s("bBUo"),c=s("udYK"),r=s("Hvz8"),o=s("JK0B"),u=s("FwVa"),l={name:"",components:{headTop:i.a,DoAnswer:c.a,MyAnswer:r.a,Survey:o.a},props:{},data:function(){return{fromID:this.$route.params.id,bankID:this.$route.params.bankId,practiceID:"",operateType:u.h.start,practiceInfo:{},practiceOptions:[],practiceReply:{},total:parseInt(this.$route.params.total||"1"),practiceAnswer:"",contentType:u.b.Text,contentTypeDefault:u.b.Text,modulePicture:u.g.PractiseAnswer,ableReply:!1,currentIndex:1,state:parseInt(this.$route.params.state||1),ableSwitch:!0}},created:function(){this.$route.params&&this.$route.params.state||(this.operateType=this.$store.getters.classPractice.type||u.h.start,this.currentIndex=this.$store.getters.classPractice.no||1,this.total=parseInt(this.$store.getters.classPractice.total||this.currentIndex),this.$store.getters.classPractice.type===u.h.start&&(this.state=2)),this.getDataInfo()},methods:{getDataInfo:function(){var t=this;n()(this.practiceInfo).forEach(function(e){t.$delete(t.practiceInfo,e)}),n()(this.practiceReply).forEach(function(e){t.$delete(t.practiceReply,e)}),this.practiceOptions=[],this.contentType=this.contentTypeDefault,this.$gatewayHttp.classPractise.getDataByIndex({studentID:this.$store.getters.studentID,cpid:this.fromID,plid:this.bankID,psSerial:this.currentIndex}).then(function(e){e.Result&&(t.practiceInfo=e.PSData,t.practiceReply=e.PAData?e.PAData:{},t.practiceAnswer=t.practiceReply.PAContent,t.ableReply=t.practiceInfo&&2===t.state,t.contentType=t.practiceReply.PAForm||t.contentTypeDefault,t.practiceOptions=[],e.OSData&&e.OSData.length>0&&e.OSData.forEach(function(e){-1===t.practiceOptions.indexOf(e)&&t.practiceOptions.push(e)}))}).catch(function(t){})},getDataInfoById:function(){var t=this;this.practiceInfo={},this.practiceReply={},this.practiceOptions=[],this.contentType=this.contentTypeDefault,this.$gatewayHttp.classPractise.getData({studentID:this.$store.getters.studentID,psID:this.practiceID,cpID:this.fromID}).then(function(e){e.Result&&(t.practiceInfo=e.PSData,t.practiceReply=e.PAData?e.PAData:{},t.practiceAnswer=t.practiceReply.PAContent,t.ableReply=!t.practiceReply||!t.practiceReply.PAContent,t.contentType=t.practiceReply.PAForm||t.contentTypeDefault,e.OSData&&e.OSData.length>0&&e.OSData.forEach(function(e){t.practiceOptions.push(e)}))}).catch(function(t){})},getPracticeTypeName:function(t){return Object(u.k)(t)},nextTo:function(){this.currentIndex+=1},backTo:function(){this.currentIndex-=1},answerChange:function(t){this.contentType=t.contentType,this.practiceAnswer=t.content},submitAnswer:function(t){var e=this;if(t<0)return this.practiceAnswer="",this.currentIndex+=t,void this.getDataInfo();if(!this.ableReply)return this.currentIndex>=this.total&&this.$router.push("/quiz"),this.currentIndex+=t,this.practiceAnswer="",void this.getDataInfo();if(this.practiceAnswer){var s={cpid:this.fromID,paid:this.practiceReply.PAID||"",courseID:this.$store.getters.courseID,psID:this.practiceInfo.PSID,studentID:this.$store.getters.studentID,paForm:this.contentType,paContent:this.practiceAnswer};this.$gatewayHttp.classPractise.postDataAnswer(s).then(function(s){s.Result&&(e.currentIndex===e.total?4===e.state?e.$router.push("/quiz"):e.submitPractice():(e.currentIndex+=t,e.practiceAnswer="",e.currentIndex>e.total&&e.$router.push("/quiz"),e.getDataInfo()))}).catch(function(t){e.$toast("提交失败，请重试")})}else this.$toast("请先作答！")},submitPractice:function(){var t=this,e={cpID:this.$route.params.id,studentID:this.$store.getters.studentID};this.$gatewayHttp.classPractise.postDataPractise(e).then(function(e){e.Result&&(t.$toast.success("交卷成功！"),setTimeout(function(){t.$router.push("/quiz")},500))}).catch(function(e){t.$toast("提交失败，请重试")})},selectSurvey:function(t){var e=this,s=t?1:0;this.$gatewayHttp.classPractise.postDataSurvey({paid:this.practiceReply.PAID,studentID:this.$store.getters.studentID,saMaster:s}).then(function(t){e.$set(e.practiceReply,"PAMaster",s),e.$refs.survey.resetVal(s),e.$toast.success("提交问卷成功！")}).catch(function(t){e.$toast("提交失败，请重试")})}},computed:{showDoAnswer:function(){return this.operateType===u.h.start&&(this.practiceInfo&&2===this.state)},showMyAnswer:function(){return this.operateType!==u.h.start||this.practiceInfo&&[3,4].indexOf(this.state)>-1},showSurvey:function(){return!!this.practiceAnswer&&(this.operateType===u.h.survey||this.operateType===u.h.start&&(this.practiceInfo&&[3,4].indexOf(this.state)>-1))},surveyMaster:function(){return this.practiceReply&&this.practiceReply.PAMaster||0}},watch:{"$store.getters.classPractice":function(t,e){t!==e&&(this.operateType=t.type||u.h.start,this.operateType===u.h.start?(this.fromID=t.id||"",this.currentIndex=t.no||1,this.state=2,this.total=t.total||this.currentIndex,this.getDataInfo(),this.ableSwitch=!0):this.operateType===u.h.init?(this.fromID=t.id||"",this.currentIndex=t.no||1,this.state=4,this.total=this.total>this.currentIndex?this.total:this.currentIndex,this.getDataInfo(),this.ableSwitch=!1):(this.practiceID=t.id||"",this.getDataInfoById(),this.ableSwitch=!1))}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"cs-pra"}},[s("head-top",{attrs:{title:"随堂练习"}}),t._v(" "),s("div",{staticClass:"main"},[s("div",{staticClass:"content"},[s("div",{staticClass:"tt"},[t._v(t._s(t.currentIndex+".【"+t.getPracticeTypeName(t.practiceInfo.PSType)+"】"+(t.practiceInfo.PSScore||0)+"分"))]),t._v(" "),s("div",{staticClass:"ct"},[t._v(t._s(t.practiceInfo.PSContent))]),t._v(" "),1===t.practiceInfo.PSType||2===t.practiceInfo.PSType?s("div",{staticClass:"ans"},t._l(t.practiceOptions,function(e,a){return s("div",{key:a,staticClass:"an"},[s("span",[t._v(t._s(e.SOSerial)+"：")]),t._v(" "),s("span",[t._v(t._s(e.SOContent))])])}),0):t._e()]),t._v(" "),t.showDoAnswer?s("do-answer",{attrs:{"question-type":t.practiceInfo.PSType,"question-option":t.practiceInfo.PSOption,ableReply:t.ableReply,"answer-type":t.contentType,"answer-value":t.practiceAnswer,"module-picture":t.modulePicture},on:{change:t.answerChange}}):t._e(),t._v(" "),t.showMyAnswer?s("my-answer",{attrs:{"question-type":t.practiceInfo.PSType,"my-answer":t.practiceAnswer,"answer-type":t.contentType,"module-picture":t.modulePicture,"true-answer":t.practiceInfo.PSAnswer,"get-score":t.practiceReply?t.practiceReply.PAScore:0}}):t._e(),t._v(" "),t.showSurvey?s("survey",{ref:"survey",attrs:{disable:4!==t.practiceInfo.State,master:t.surveyMaster},on:{selectSurvey:t.selectSurvey}}):t._e(),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.ableSwitch,expression:"ableSwitch"}],staticClass:"footer"},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex>1,expression:"currentIndex> 1"}],on:{click:function(e){return t.submitAnswer(-1)}}},[t._v("上一题")]),t._v(" "),t.currentIndex<t.total?s("button",{on:{click:function(e){return t.submitAnswer(1)}}},[t._v("下一题")]):t.ableReply&&2===t.state?s("button",{on:{click:function(e){return t.submitAnswer(1)}}},[t._v("提交答案")]):t._e()])],1)],1)},staticRenderFns:[]};var h=s("VU/8")(l,p,!1,function(t){s("/pbc")},"data-v-e0173f7a",null);e.default=h.exports},udYK:function(t,e,s){"use strict";var a,n=s("bOdI"),i=s.n(n),c=(s("k3b4"),s("+2ln")),r=(s("jti4"),s("uk7J")),o=s("FwVa"),u=s("0xDb"),l=s("j/ZV"),p={components:(a={},i()(a,r.a.name,r.a),i()(a,c.a.name,c.a),a),props:{questionType:{type:Number,default:1},questionOption:{type:Number,default:0},btnName:{type:String,default:"提交"},ableReply:{type:Boolean,default:!0},answerType:{type:Number,default:1},modulePicture:{type:Number,default:1},answerValue:{type:String,default:""}},data:function(){return{judgeChoice:["对","错"],multiValue:this.selectValue?this.selectValue.split(""):[],selectValue:this.answerValue,contentType:this.answerType,imgBase:""}},mounted:function(){var t=this;this.$nextTick(function(){window.uploadImage=function(e){t.afterRead(e)}})},methods:{selectImage:function(){Object(l.b)(l.a.albumOpen,"",1,1)},selectAnswer:function(t){if(this.ableReply){if(2===this.questionType){var e=this.multiValue.indexOf(t);e>-1?this.multiValue.splice(e,1):this.multiValue.push(t),this.selectValue=this.multiValue.sort().join("")}else this.selectValue=t;this.backValue()}},answerChange:function(){this.backValue()},backValue:function(){this.$emit("change",{contentType:this.contentType,content:this.selectValue})},deleteImage:function(){this.contentType=this.answerType,this.selectValue="",this.backValue()},afterRead:function(t){var e=this;if(t.length>20971520)return this.$toast("请上传小于20M的图片"),!1;if(t){var s={funType:this.modulePicture,imgBaseString:t};this.$gatewayHttp.resourse.upload(s).then(function(s){s.Result&&(e.contentType=o.b.Picture,e.imgBase=t,e.selectValue=s.Data,e.backValue())}).catch(function(t){})}},getImageFile:function(t){this.$gatewayHttp.resourse.picture(t,this.modulePicture)}},computed:{txtLength:function(){return this.selectValue.length},selectOptions:function(){return 1===this.questionType?Object(u.d)(this.questionOption):2===this.questionType?Object(u.d)(this.questionOption):3===this.questionType?this.judgeChoice:void 0}},watch:{answerType:function(t,e){t!==this.contentType&&(this.contentType=t)},answerValue:function(t,e){t!==this.selectValue&&(this.selectValue=t)}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[1===t.questionType?s("div",{staticClass:"selects"},[s("div",{staticClass:"content"},[s("div",{staticClass:"prompt"},[t._v("请选择正确的答案")]),t._v(" "),s("div",{staticClass:"all-select"},t._l(t.selectOptions,function(e,a){return s("div",{key:a,staticClass:"select-item",class:t.answerValue===e?"singel-selected":"",on:{click:function(s){return t.selectAnswer(e)}}},[t._v(t._s(e))])}),0)])]):2===t.questionType?s("div",{staticClass:"selects"},[s("div",{staticClass:"content"},[s("div",{staticClass:"prompt"},[t._v("请选择正确的答案")]),t._v(" "),s("div",{staticClass:"all-select"},t._l(t.selectOptions,function(e,a){return s("div",{key:a,staticClass:"select-item",class:t.answerValue.indexOf(e)>-1?"singel-selected":"",on:{click:function(s){return t.selectAnswer(e)}}},[t._v(t._s(e))])}),0)])]):3===t.questionType?s("div",{staticClass:"answers"},[s("div",{staticClass:"tt"},[t._v("请选择正确的答案")]),t._v(" "),s("div",{staticClass:"buttons"},t._l(t.selectOptions,function(e,a){return s("div",{key:a,class:t.answerValue===e?"selected":"",on:{click:function(s){return t.selectAnswer(e)}}},[t._v(t._s(e))])}),0)]):s("div",{staticClass:"answers"},[s("div",{staticClass:"tt"},[t._v("\n      请将您的答案写在下方的文本框中\n      "),2===t.contentType&&t.selectValue&&t.ableReply?s("van-icon",{staticClass:"answer_delete",attrs:{name:"delete",size:"1.5rem",color:"#f44"},on:{click:t.deleteImage}}):t._e()],1),t._v(" "),1===t.contentType||2===t.contentType&&!t.selectValue?s("div",{staticClass:"input"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.selectValue,expression:"selectValue"}],attrs:{type:"text",maxlength:"240",placeholder:"请输入作答内容..."},domProps:{value:t.selectValue},on:{input:[function(e){e.target.composing||(t.selectValue=e.target.value)},t.answerChange]}}),t._v(" "),s("i",{staticClass:"iconfont icontupian",on:{click:t.selectImage}}),t._v(" "),s("span",[t._v(t._s(t.txtLength)+"/240")])]):s("div",{staticClass:"answer_img"},[t.imgBase?s("img",{attrs:{src:t.imgBase,alt:""}}):s("img",{attrs:{src:t.getImageFile(t.selectValue),alt:""}})])]),t._v(" "),t._t("default")],2)},staticRenderFns:[]};var d=s("VU/8")(p,h,!1,function(t){s("yCzq")},"data-v-77f575a7",null);e.a=d.exports},yCzq:function(t,e){}});
//# sourceMappingURL=3.c1a655d60c0b2e4f4cb3.js.map