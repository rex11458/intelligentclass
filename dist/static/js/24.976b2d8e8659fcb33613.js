webpackJsonp([24],{"93hP":function(t,e){},rUec:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("bOdI"),a=n.n(s),i=(n("3Lne"),n("SSsa")),o=n("bBUo"),r=n("Hvz8"),u=n("FwVa"),c={name:"",components:a()({headTop:o.a,MyAnswer:r.a},i.a.name,i.a),props:{},data:function(){return{questionID:this.$route.params.id,questionInfo:{},questionPattern:u.j.all,questionOperate:{},img:"",currentIndex:3,modulePicture:u.g.ScreenAnswer}},mounted:function(){var t=this;this.$nextTick(function(){t.getQuestionData()})},methods:{getQuestionData:function(){var t=this;this.questionInfo={},this.questionOperate={},this.$mainHttp.screenQustion.getData({ssid:this.questionID,studentID:this.$store.getters.studentID}).then(function(e){e.Result&&e.Keys&&e.Keys.length>0&&(t.questionInfo=e.Keys[0],t.questionOperate=e.Values[0]||{},t.questionPattern=t.questionInfo.SSPattern||u.j.all,t.img=t.$mainHttp.resourse.picture(t.questionInfo.SSContent,u.g.ScreenSubject))}).catch(function(t){})},getPatternName:function(t){return Object(u.m)(t)},getQuestionTypeName:function(t){return Object(u.n)(t)}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"capture-quize"}},[n("head-top",{attrs:{title:"截屏提问"}}),t._v(" "),n("div",{staticClass:"main"},[n("div",{staticClass:"top"},[n("div",{staticClass:"tt"},[n("span",{staticClass:"info fL"},[t._v(t._s(t.questionInfo.SSSerial)+".["+t._s(t.getQuestionTypeName(t.questionInfo.SSType))+"] "+t._s(t.questionInfo.SSScore)+"分")]),t._v(" "),n("span",{class:3===t.questionPattern?"red":"green"},[t._v(t._s(t.getPatternName(t.questionPattern)))]),t._v(" "),n("span",{staticClass:"time fR"},[t._v("计时 ："+t._s(t.questionInfo.SSTime)+"分钟")])]),t._v(" "),n("div",{staticClass:"bg"},[n("img",{attrs:{src:t.img}})])]),t._v(" "),n("my-answer",{attrs:{"question-type":t.questionInfo.SSType,"my-answer":t.questionOperate.SAContent,"module-picture":t.modulePicture,"true-answer":t.questionInfo.SSAnswer,"get-score":t.questionOperate.SAScore}}),t._v(" "),n("div",{staticClass:"survey_info"},[1===t.questionOperate.SAMaster?n("van-button",{attrs:{icon:"success",type:"primary",disabled:""}},[t._v("已掌握")]):0===t.questionOperate.SAMaster?n("van-button",{attrs:{icon:"cross",type:"danger",disabled:""}},[t._v("未掌握")]):n("van-button",{attrs:{type:"warning",disabled:""}},[t._v("未参与调研")])],1)],1)],1)},staticRenderFns:[]};var p=n("VU/8")(c,d,!1,function(t){n("93hP")},"data-v-36b1ec41",null);e.default=p.exports}});
//# sourceMappingURL=24.976b2d8e8659fcb33613.js.map