webpackJsonp([38],{Fbcw:function(t,e){},"n/SG":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=a("fZjL"),n=a.n(c),i=a("UB37"),r=a("FwVa"),s={name:"",components:{MyAnswer:i.a},props:{},data:function(){return{taskId:this.$route.params.taskId,practiceId:this.$route.params.practiceId,libraryId:this.$route.params.libraryId,classHourId:this.$route.params.classHourId,practiceInfo:{},practiceOptions:[],practiceReply:{},total:parseInt(this.$route.params.total||"1"),practiceAnswer:"",modulePicture:r.g.PractiseAnswer,surveyMaster:null,currentIndex:1}},created:function(){this.getPracticeInfo()},methods:{getPracticeInfo:function(){var t=this;this.$mainHttp.classPractise.getPracticeMental({plID:this.libraryId+""}).then(function(e){e.Result&&(t.total=e.Total,t.getDataInfo())}).catch(function(t){})},getDataInfo:function(){var t=this;n()(this.practiceInfo).forEach(function(e){t.$delete(t.practiceInfo,e)}),n()(this.practiceReply).forEach(function(e){t.$delete(t.practiceReply,e)}),this.practiceOptions=[],this.$mainHttp.classPractise.getData({cipID:this.taskId,plid:this.libraryId,psSerial:this.currentIndex,studentID:this.$store.getters.studentID}).then(function(e){e.Result&&(t.practiceInfo=e.PSData,t.practiceReply=e.PAData?e.PAData:{},t.practiceAnswer=t.practiceReply.PAContent,t.practiceReply&&(t.surveyMaster=t.practiceReply.PAMaster||null),t.practiceOptions=[],e.SOData&&e.SOData.length>0&&e.SOData.forEach(function(e){-1===t.practiceOptions.indexOf(e)&&t.practiceOptions.push(e)}))}).catch(function(t){})},getPracticeTypeName:function(t){return Object(r.l)(t)},nextTo:function(){this.currentIndex+=1,this.getDataInfo()},backTo:function(){this.currentIndex-=1,this.getDataInfo()},exit:function(){this.$router.push("/space/homework")}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"practice_view"},[a("head-top",{attrs:{title:"随堂练习"}}),t._v(" "),a("div",{staticClass:"main"},[a("div",{staticClass:"content"},[a("div",{staticClass:"tt"},[t._v("\n        "+t._s(t.currentIndex+".【"+t.getPracticeTypeName(t.practiceInfo.PSType)+"】"+(t.practiceInfo.PSScore||0)+"分")+"\n      ")]),t._v(" "),a("div",{staticClass:"ct"},[t._v(t._s(t.practiceInfo.PSContent))]),t._v(" "),1===t.practiceInfo.PSType||2===t.practiceInfo.PSType?a("div",{staticClass:"ans"},t._l(t.practiceOptions,function(e,c){return a("div",{key:c,staticClass:"an"},[a("span",[t._v(t._s(e.SOSerial)+"：")]),t._v(" "),a("span",[t._v(t._s(e.SOContent))])])}),0):t._e()]),t._v(" "),a("my-answer",{attrs:{"question-type":t.practiceInfo.PSType,"my-answer":t.practiceAnswer,"module-picture":t.modulePicture,"true-answer":t.practiceInfo.PSAnswer,analysis:t.practiceInfo.PSanalysis,"get-score":t.practiceReply?t.practiceReply.PAScore:0}}),t._v(" "),a("div",{staticClass:"footer"},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex>1,expression:"currentIndex> 1"}],staticClass:"backTo",on:{click:t.backTo}},[t._v("上一题")]),t._v(" "),t.currentIndex<t.total?a("button",{staticClass:"nextTo",on:{click:t.nextTo}},[t._v("下一题")]):t._e()])],1)],1)},staticRenderFns:[]};var p=a("VU/8")(s,o,!1,function(t){a("Fbcw")},"data-v-33de26f0",null);e.default=p.exports}});
//# sourceMappingURL=38.b57c28f2066e186aee47.js.map