webpackJsonp([27],{CbVr:function(t,e){},FOnG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mvHQ"),s=a.n(n),c=a("fZjL"),i=a.n(c),r=a("J2a0"),o=a("UB37"),p=a("Y/lf"),u=a("FwVa"),l={name:"",components:{DoAnswer:r.a,MyAnswer:o.a,Survey:p.a},props:{},data:function(){return{taskId:this.$route.params.taskId,practiceId:this.$route.params.practiceId,libraryId:this.$route.params.libraryId,classHourId:this.$route.params.classHourId,operateType:u.h.start,practiceInfo:{},practiceOptions:[],practiceReply:{},total:parseInt(this.$route.params.total||"1"),practiceAnswer:"",modulePicture:u.g.PractiseAnswer,ableReply:!1,currentIndex:1}},created:function(){this.getPracticeInfo()},methods:{getPracticeInfo:function(){var t=this;this.$mainHttp.classPractise.getPracticeMental({plID:this.libraryId+""}).then(function(e){e.Result&&(t.total=e.Total,t.getDataInfo())}).catch(function(t){})},getDataInfo:function(){var t=this;i()(this.practiceInfo).forEach(function(e){t.$delete(t.practiceInfo,e)}),i()(this.practiceReply).forEach(function(e){t.$delete(t.practiceReply,e)}),this.practiceOptions=[],this.$mainHttp.classPractise.getData({studentID:this.$store.getters.studentID,cipID:this.taskId,plid:this.libraryId,psSerial:this.currentIndex}).then(function(e){e.Result&&(t.practiceInfo=e.PSData,t.practiceReply=e.PAData?e.PAData:{},t.practiceAnswer=t.practiceReply.PAContent,t.ableReply=!!t.practiceInfo,t.practiceOptions=[],e.SOData&&e.SOData.length>0&&e.SOData.forEach(function(e){-1===t.practiceOptions.findIndex(function(t){return s()(t)===s()(e)})&&t.practiceOptions.push(e)}))}).catch(function(t){})},getPracticeTypeName:function(t){return Object(u.l)(t)},answerChange:function(t){this.practiceAnswer=t},submitAnswer:function(t){var e=this;if(!this.ableReply)return this.currentIndex>=this.total&&this.$router.push("/space/homework"),this.currentIndex+=t,this.practiceAnswer="",void this.getDataInfo();if(this.practiceAnswer){var a={cipID:this.taskId,paid:this.practiceReply.PAID||"",psID:this.practiceInfo.PSID,studentID:this.$store.getters.studentID,paContent:this.practiceAnswer};this.$mainHttp.classPractise.postDataAnswer(a).then(function(a){a.Result?e.currentIndex===e.total&&t>0?e.submitPractice():(e.currentIndex+=t,e.practiceAnswer="",e.currentIndex>e.total&&e.$router.push("/space/homework"),e.getDataInfo()):a.Info&&e.$toast(a.Info)}).catch(function(t){e.$toast("提交失败，请重试")})}else this.$toast("请先作答")},submitPractice:function(){var t=this,e={cipID:this.taskId,studentID:this.$store.getters.studentID};this.$mainHttp.classPractise.postDataPractise(e).then(function(e){e.Result&&(t.$toast.success("交卷成功"),setTimeout(function(){t.$router.push("/space/homework")},500))}).catch(function(e){t.$toast("提交失败，请重试")})}},computed:{},watch:{}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"cs-pra"}},[a("head-top",{attrs:{title:"随堂练习"}}),t._v(" "),a("div",{staticClass:"main"},[a("div",{staticClass:"content"},[a("div",{staticClass:"tt"},[t._v("\n        "+t._s(t.currentIndex+".【"+t.getPracticeTypeName(t.practiceInfo.PSType)+"】"+(t.practiceInfo.PSScore||0)+"分")+"\n      ")]),t._v(" "),a("div",{staticClass:"ct"},[t._v("\n        "+t._s(t.practiceInfo.PSContent)+"\n      ")]),t._v(" "),[1,2].indexOf(t.practiceInfo.PSType)>-1?a("div",{staticClass:"ans"},t._l(t.practiceOptions,function(e,n){return a("div",{key:n,staticClass:"an"},[a("span",[t._v(t._s(e.SOSerial)+"：")]),t._v(" "),a("span",[t._v(t._s(e.SOContent))])])}),0):t._e()]),t._v(" "),a("do-answer",{attrs:{"question-type":t.practiceInfo.PSType,"question-option":t.practiceInfo.PSOption,ableReply:t.ableReply,"answer-value":t.practiceAnswer,"module-picture":t.modulePicture},on:{change:t.answerChange}}),t._v(" "),a("div",{staticClass:"footer"},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex>1,expression:"currentIndex> 1"}],on:{click:function(e){return t.submitAnswer(-1)}}},[t._v("上一题")]),t._v(" "),t.currentIndex<t.total?a("button",{on:{click:function(e){return t.submitAnswer(1)}}},[t._v("下一题")]):t.ableReply?a("button",{on:{click:function(e){return t.submitAnswer(1)}}},[t._v("提交答案")]):t._e()])],1)],1)},staticRenderFns:[]};var d=a("VU/8")(l,h,!1,function(t){a("CbVr")},"data-v-6a21a53e",null);e.default=d.exports}});
//# sourceMappingURL=27.afe4a611193e9acfa7f2.js.map