webpackJsonp([20],{AHhE:function(t,e){},Qfz8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("fZjL"),c=a.n(n),s=a("bOdI"),r=a.n(s),i=(a("3Lne"),a("SSsa")),o=a("bBUo"),p=a("Hvz8"),u=a("FwVa"),l={name:"",components:r()({headTop:o.a,MyAnswer:p.a},i.a.name,i.a),props:{},data:function(){return{fromID:this.$route.params.id,bankID:this.$route.params.bankId,practiceInfo:{},practiceOptions:[],practiceReply:{},total:parseInt(this.$route.params.total||"1"),practiceAnswer:"",modulePicture:u.g.PractiseAnswer,surveyMaster:null,currentIndex:1}},created:function(){this.getDataInfo()},methods:{getDataInfo:function(){var t=this;c()(this.practiceInfo).forEach(function(e){t.$delete(t.practiceInfo,e)}),c()(this.practiceReply).forEach(function(e){t.$delete(t.practiceReply,e)}),this.practiceOptions=[],this.$mainHttp.classPractise.getData({cpid:this.fromID,plid:this.bankID,psSerial:this.currentIndex,studentID:this.$store.getters.studentID}).then(function(e){e.Result&&(t.practiceInfo=e.PSData,t.practiceReply=e.PAData?e.PAData:{},t.practiceAnswer=t.practiceReply.PAContent,t.practiceReply&&(t.surveyMaster=t.practiceReply.PAMaster||null),t.practiceOptions=[],e.OSData&&e.OSData.length>0&&e.OSData.forEach(function(e){-1===t.practiceOptions.indexOf(e)&&t.practiceOptions.push(e)}))}).catch(function(t){})},getPracticeTypeName:function(t){return Object(u.l)(t)},nextTo:function(){this.currentIndex+=1,this.getDataInfo()},backTo:function(){this.currentIndex-=1,this.getDataInfo()},exit:function(){this.$router.push("/history")}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"history_practise"},[a("head-top",{attrs:{title:"随堂练习"}}),t._v(" "),a("div",{staticClass:"main"},[a("div",{staticClass:"content"},[a("div",{staticClass:"tt"},[t._v(t._s(t.currentIndex+".【"+t.getPracticeTypeName(t.practiceInfo.PSType)+"】"+(t.practiceInfo.PSScore||0)+"分"))]),t._v(" "),a("div",{staticClass:"ct"},[t._v(t._s(t.practiceInfo.PSContent))]),t._v(" "),1===t.practiceInfo.PSType||2===t.practiceInfo.PSType?a("div",{staticClass:"ans"},t._l(t.practiceOptions,function(e,n){return a("div",{key:n,staticClass:"an"},[a("span",[t._v(t._s(e.SOSerial)+"：")]),t._v(" "),a("span",[t._v(t._s(e.SOContent))])])}),0):t._e()]),t._v(" "),a("my-answer",{attrs:{"question-type":t.practiceInfo.PSType,"my-answer":t.practiceAnswer,"module-picture":t.modulePicture,"true-answer":t.practiceInfo.PSAnswer,analysis:t.practiceInfo.PSanalysis,"get-score":t.practiceReply?t.practiceReply.PAScore:0}}),t._v(" "),a("div",{staticClass:"survey_info"},[1===t.surveyMaster?a("van-button",{attrs:{icon:"success",type:"primary",disabled:""}},[t._v("已掌握")]):0===t.surveyMaster?a("van-button",{attrs:{icon:"cross",type:"danger",disabled:""}},[t._v("未掌握")]):a("van-button",{attrs:{type:"warning",disabled:""}},[t._v("未参与调研")])],1),t._v(" "),a("div",{staticClass:"footer"},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex>1,expression:"currentIndex> 1"}],staticClass:"backTo",on:{click:t.backTo}},[t._v("上一题")]),t._v(" "),t.currentIndex<t.total?a("button",{staticClass:"nextTo",on:{click:t.nextTo}},[t._v("下一题")]):t._e()])],1)],1)},staticRenderFns:[]};var f=a("VU/8")(l,d,!1,function(t){a("AHhE")},"data-v-4f3e2344",null);e.default=f.exports}});
//# sourceMappingURL=20.cb60c231925513e3c489.js.map