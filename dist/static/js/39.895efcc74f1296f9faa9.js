webpackJsonp([39],{MKKP:function(t,e){},ONDh:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("Dd8w"),i=s.n(n),a=s("FwVa"),o={name:"",components:{},props:{},data:function(){return{questionList:[],isLoading:!1}},mounted:function(){var t=this;this.$nextTick(function(){t.getQuestionData()})},methods:{getQuestionData:function(){var t=this;this.questionList=[],this.isLoading=!0,this.$mainHttp.screenQuestion.getList({ciID:this.$store.getters.courseID,ssType:this.$route.params.type}).then(function(e){e.Result&&e.Datas&&e.Datas.length>0&&e.Datas.forEach(function(e){t.questionList.push(i()({},e,{img:t.$mainHttp.common.picture(e.SSContent,1)}))}),t.isLoading=!1}).catch(function(e){t.isLoading=!1})},getQuestionTypeName:function(t){return Object(a.p)(t)},getPatternName:function(t){return Object(a.o)(t)},selectQuestion:function(t){this.$router.push("/history/screenQuestionInfo/"+t.SSID)}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"quiz"}},[s("head-top",{attrs:{title:"截屏提问"}}),t._v(" "),s("van-pull-refresh",{staticClass:"pull_fresh",on:{refresh:t.getQuestionData},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[s("div",{staticClass:"question-content"},t._l(t.questionList,function(e,n){return s("div",{key:n,staticClass:"item",on:{click:function(s){return t.selectQuestion(e)}}},[s("div",{staticClass:"bg fL"},[s("img",{attrs:{src:e.img,alt:""}})]),t._v(" "),s("div",{staticClass:"details fR"},[s("div",{staticClass:"info"},[t._v("\n            "+t._s(e.SSSerial+".["+t.getQuestionTypeName(e.SSType)+"] "+e.SSScore+"分")+"\n          ")]),t._v(" "),s("div",{staticClass:"time"},[t._v("\n            "+t._s(t._f("formatDate")(e.CreateTime,e.CreateTime))+"\n          ")])]),t._v(" "),s("span",{staticClass:"prompt",class:3===e.SSPattern?"red":"green"},[t._v("\n          "+t._s(t.getPatternName(e.SSPattern))+"\n        ")])])}),0)])],1)},staticRenderFns:[]};var c=s("VU/8")(o,r,!1,function(t){s("MKKP")},"data-v-5155135a",null);e.default=c.exports}});
//# sourceMappingURL=39.895efcc74f1296f9faa9.js.map