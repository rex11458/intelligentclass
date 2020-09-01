(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-799d3067"],{"5a49":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"course_record_view"},[n("head-top",{attrs:{title:"课堂信息"}}),n("div",{staticClass:"record-item"},[n("div",{staticClass:"item-title"},[t._v("基本信息")]),n("div",{staticClass:"item-content"},[n("div",{staticClass:"content-info"},[t._v("课程名称："+t._s(t.courseInfo.classHourName))]),n("div",{staticClass:"content-info"},[t._v("科目："+t._s(t.courseInfo.subjectName))]),n("div",{staticClass:"content-info"},[n("span",{staticClass:"info-left"},[t._v("老师："+t._s(t.courseInfo.teacherName))]),n("span",{staticClass:"info-right"},[t._v("班级："+t._s(t.courseInfo.className))])]),n("div",{staticClass:"content-info"},[n("span",{staticClass:"info-left"},[t._v("教室："+t._s(t.courseInfo.classroomName))]),n("span",{staticClass:"info-right"},[t._v("时间："+t._s(t.courseInfo.createTime))])])])]),n("attendance"),n("student-score")],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"record-item "},[n("div",{staticClass:"item-title flex-between"},[n("span",[t._v("考勤信息")]),t.signTimeOptions&&t.signTimeOptions.length>0?n("van-dropdown-menu",[n("van-dropdown-item",{attrs:{options:t.signTimeOptions},on:{change:t.changeSignTime},model:{value:t.signID,callback:function(e){t.signID=e},expression:"signID"}})],1):t._e()],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.signTimeOptions&&t.signTimeOptions.length>0,expression:"signTimeOptions && signTimeOptions.length > 0"}],staticClass:"sign_List"},[n("van-circle",{attrs:{rate:t.rate,"stroke-width":60,text:t.signStatistics.yes+"人已签","layer-color":"#f3f3f3",clockwise:!1},model:{value:t.currentRate,callback:function(e){t.currentRate=e},expression:"currentRate"}}),n("div",{staticClass:"flex-evenly"},[n("div",[n("van-button",{style:{height:"6px",minWidth:"20px"},attrs:{type:"info",size:"mini"}}),n("span",[t._v("已签："+t._s(t.signStatistics.yes+"人"))])],1),n("div",[n("van-button",{style:{height:"6px",minWidth:"20px",background:"rgb(243, 243, 243)"},attrs:{type:"default",size:"mini"}}),n("span",[t._v("未签："+t._s(t.signStatistics.no+"人"))])],1)])],1),t.personList&&t.personList.length>0?n("van-cell-group",{staticClass:"cell_group"},t._l(t.personList,(function(e,s){return n("van-cell",{key:s,staticClass:"cell_main",scopedSlots:t._u([{key:"icon",fn:function(){return[n("img",{directives:[{name:"real-img",rawName:"v-real-img",value:[e.userID,e.id],expression:"[item.userID, item.id]"}],attrs:{src:t.defaultHead,alt:""}})]},proxy:!0},{key:"title",fn:function(){return[n("span",{staticClass:"line_title"},[t._v(t._s(e.name))])]},proxy:!0},{key:"label",fn:function(){return[n("span",{staticClass:"line_title"},[t._v(t._s(e.sno))])]},proxy:!0},{key:"right-icon",fn:function(){return[e.remark?n("van-tag",{attrs:{plain:"",type:"primary"}},[t._v(t._s(e.remark))]):n("van-tag",{attrs:{plain:""}},[t._v("未签到")])]},proxy:!0}],null,!0)})})),1):n("r-lack-data")],1)},o=[],c=(n("4160"),n("159b"),n("6828")),r={name:"Attendance",data:function(){return{defaultHead:n("a5b7"),courseID:this.$store.getters.courseID,courseInfo:this.$store.getters.course,signID:"",signTimeOptions:[],currentRate:0,rate:0,personList:[],signStatistics:{no:0,yes:0,total:0},isLoading:!1}},created:function(){this.getSignTimes()},methods:{getSignTimes:function(){var t=this;this.signTimeOptions=[],this.$mainHttp.sign.dataList({ciID:this.courseID}).then((function(e){e.Result?e.Datas&&e.Datas.length>0&&(e.Datas.forEach((function(e){t.signTimeOptions.push({text:"第".concat(e["Number"],"次签到"),value:e["SNID"],number:e["Number"],courseID:e["CIID"]})})),t.signID=e.Datas[0]["SNID"],t.changeSignTime(t.signID)):e.Info&&t.$toast(e.Info)})).catch((function(){}))},changeSignTime:function(t){this.personList=[],this.rate=0,this.getSignPerson(t),this.getSignStatistics(t)},getSignPerson:function(t){var e=this;this.isLoading=!0,this.$mainHttp.sign.signPersonList({ciID:this.courseID,classID:this.courseInfo.classID,snID:t}).then((function(t){t.Result?t.Datas&&t.Datas.length>0&&t.Datas.forEach((function(t){e.personList.push({name:t.Key["StudentName"],id:t.Key["StudentID"],sno:t.Key["StudentXH"],userID:t.Key["UserID"],remark:t.Value["SignID"]?Object(c["a"])(t.Value["SignTime"],"hh:mm:ss"):""})})):t.Info&&e.$toast(t.Info),e.isLoading=!1})).catch((function(){e.isLoading=!1}))},getSignStatistics:function(t){var e=this;this.$mainHttp.sign.signStatistics({snID:t,classID:this.courseInfo.classID}).then((function(t){t.Result&&(e.signStatistics={no:t["NoSign"]||0,yes:t["Sign"]||0,total:(t["NoSign"]||0)+(t["Sign"]||0)},e.rate=e.signStatistics.total>0?100*e.signStatistics.yes/e.signStatistics.total:0)})).catch((function(){}))}}},l=r,u=(n("e159"),n("2877")),m=Object(u["a"])(l,a,o,!1,null,"9715cc00",null),d=m.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"record-item"},[n("div",{staticClass:"item-title flex-between"},[n("span",[t._v("学生得分")]),t.editMode?n("span",[n("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.selectedIds.length>0,expression:"selectedIds.length>0"}],staticClass:"icon-operate",attrs:{"class-prefix":"iconfont icon-pingjia"},on:{click:t.multiStudentEvaluate}}),n("van-icon",{staticClass:"icon-operate",attrs:{"class-prefix":"iconfont icon-fanhui1"},on:{click:function(e){t.editMode=!1}}})],1):n("van-icon",{staticClass:"icon-operate",attrs:{"class-prefix":"iconfont icon-duoxuananniu"},on:{click:t.changeMode}})],1),n("van-checkbox-group",{model:{value:t.selectedIds,callback:function(e){t.selectedIds=e},expression:"selectedIds"}},[t.studentList&&t.studentList.length>0?n("van-cell-group",t._l(t.studentList,(function(e,s){return n("van-cell",{key:s,staticClass:"cell_main",on:{click:function(n){return t.personSelect(e)}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("img",{directives:[{name:"real-img",rawName:"v-real-img",value:[e["UserID"],e["StudentID"]],expression:"[item['UserID'], item['StudentID']]"}],attrs:{src:t.defaultHead,alt:""}})]},proxy:!0},{key:"title",fn:function(){return[n("div",{staticClass:"flex-between line_title"},[n("span",[t._v(t._s(e.StudentName))]),n("span",[t._v("排名： "),n("van-tag",{attrs:{type:"primary"}},[t._v(t._s(e.Ranking))])],1)])]},proxy:!0},{key:"label",fn:function(){return[n("div",{staticClass:"flex-between line_title"},[n("span",[t._v(" 总分："+t._s(e.TotalScore))]),n("span",[t._v(" 评分："+t._s(e.score?e.score:"未评"))]),n("span",[t._v(" 评价："+t._s(e.evaluateText?"查看":"未评"))])])]},proxy:!0},t.editMode?{key:"right-icon",fn:function(){return[n("van-checkbox",{style:{paddingLeft:"3vw"},attrs:{sharp:"square",name:e["StudentID"]}})]},proxy:!0}:null],null,!0)})})),1):n("r-lack-data")],1),n("van-popup",{attrs:{position:"bottom",closeable:""},model:{value:t.dialogVisible,callback:function(e){t.dialogVisible=e},expression:"dialogVisible"}},[n("div",{staticClass:"sub_nav"},[n("span",[t._v("学生点评")])]),t.studentSelected?n("div",{staticClass:"flex-between sub_module"},[n("span",[t._v("截屏提问："+t._s(t.studentSelected["SAScore"]))]),n("span",[t._v("随堂练习："+t._s(t.studentSelected["PAScore"]))]),n("span",[t._v("小组讨论："+t._s(t.studentSelected["GDScore"]))]),n("span",[t._v("总分："+t._s(t.studentSelected["TotalScore"]))])]):t._e(),n("van-field",{attrs:{required:"",name:"stepper",label:"课程评分：","error-message":t.formCommentErr.score},scopedSlots:t._u([{key:"input",fn:function(){return[n("van-stepper",{attrs:{integer:"",min:"0",max:"1000"},model:{value:t.formComment.score,callback:function(e){t.$set(t.formComment,"score",e)},expression:"formComment.score"}})]},proxy:!0}])}),n("van-field",{attrs:{required:"","error-message":t.formCommentErr.evaluate,name:"rate",label:"学生评价："},scopedSlots:t._u([{key:"input",fn:function(){return[n("van-rate",{attrs:{color:t.colors[t.formComment.evaluate]},model:{value:t.formComment.evaluate,callback:function(e){t.$set(t.formComment,"evaluate",e)},expression:"formComment.evaluate"}})]},proxy:!0}])}),n("van-field",{attrs:{required:"","error-message":t.formCommentErr.comment,rows:"2",label:"学生评语：",type:"textarea",maxlength:"500",placeholder:"请输入学生评语",autofocus:"",autosize:"","show-word-limit":""},model:{value:t.formComment.comment,callback:function(e){t.$set(t.formComment,"comment",e)},expression:"formComment.comment"}}),n("van-button",{staticStyle:{width:"100%"},attrs:{type:"info"},on:{click:function(e){t.editMode?t.saveFormMulti():t.saveForm()}}},[t._v("确定")])],1)],1)},h=[],v=(n("4de4"),n("c740"),n("c975"),n("a15b"),n("d81d"),n("a434"),n("5530")),g={name:"StudentScore",data:function(){return{defaultHead:n("a5b7"),courseID:this.$store.getters.courseID,courseInfo:this.$store.getters.course,studentRanking:[],studentSelected:null,studentComments:[],dialogVisible:!1,colors:["#99A9BF","#F7BA2A","#FF9900"],texts:["极差","失望","一般","满意","模范"],formComment:{id:"",courseID:"",studentID:"",comment:"",evaluate:0,score:100},formCommentErr:{comment:"",evaluate:"",score:""},btnLoading:!1,selectedIds:[],editMode:!1}},computed:{studentList:function(){var t=this;return this.studentRanking.map((function(e){var n=t.studentComments.findIndex((function(t){return t["StudentID"]===e["StudentID"]})),s=n>-1?t.studentComments[n]["Evaluate"]:null;return Object(v["a"])({},e,{score:n>-1?t.studentComments[n]["Score"]:null,comment:n>-1?t.studentComments[n]["Comment"]:null,evaluate:s,evaluateText:s?t.texts[s-1]:""})}))}},created:function(){this.GetStudentRanking(),this.getAllStudentEvaluate()},methods:{GetStudentRanking:function(){var t=this;this.$mainHttp.classInfo.studentRanking({ciID:this.courseID,classID:this.courseInfo.classID}).then((function(e){e.Result&&e.Datas&&e.Datas.length>0&&e.Datas.forEach((function(e,n){t.studentRanking.push(e)}))}))},getAllStudentEvaluate:function(){var t=this;this.studentComments=[],this.$mainHttp.courseComment.teacherList({ciID:this.courseID}).then((function(e){e.Result&&e.Datas&&e.Datas.length>0&&e.Datas.forEach((function(e){t.studentComments.push(e)}))}))},selectChange:function(t){this.selectedIds=t},multiStudentEvaluate:function(){var t=this;if(this.selectedIds.length<1)this.$toast("请先选择学生");else{var e=this.studentComments.filter((function(e){return t.selectedIds.indexOf(e["StudentID"])>-1})).map((function(t){return t["CEID"]}));e.length>0&&e.length!==this.selectedIds.length?this.$toast("未评价的学生和已评价的学生请分开评价！"):(this.formComment={id:e.length>0?e.join(","):"",studentID:e.length>0?"":this.selectedIds.join(","),ciID:this.courseID,comment:"",evaluate:0,score:100},this.dialogVisible=!0)}},personSelect:function(t){if(this.editMode){var e=this.selectedIds.findIndex((function(e){return e===t["StudentID"]}));e>-1?this.selectedIds.splice(e,1):this.selectedIds.push(t["StudentID"])}else this.studentEvaluate(t)},studentEvaluate:function(t){this.studentSelected=t,this.formComment={id:"",studentID:t["StudentID"],ciID:this.courseID,comment:"",evaluate:0,score:100},this.getStudentEvaluate(),this.dialogVisible=!0},getStudentEvaluate:function(){var t=this,e={ciID:this.formComment.ciID,studentID:this.formComment.studentID};this.$mainHttp.courseComment.TeacherInfo(e).then((function(e){e.Result&&e.Data?(t.formComment.id=e.Data["CEID"],t.formComment.comment=e.Data["Comment"],t.formComment.evaluate=e.Data["Evaluate"],t.formComment.score=e.Data["Score"]):e.Info&&t.$toast(e.Info)}))},changeMode:function(){this.selectedIds=[],this.editMode=!0},saveFormMulti:function(){var t=this;if(this.formComment.comment){this.btnLoading=!0;var e={ceIDs:this.formComment.id,ciID:this.formComment.ciID,studentIDs:this.selectedIds.join(","),score:this.formComment.score,comment:this.formComment.comment,evaluate:this.formComment.evaluate,anonymous:!1,type:1};this.$mainHttp.courseComment.BatchAdd(e).then((function(e){e.Result?(t.dialogVisible=!1,t.getAllStudentEvaluate(),t.editMode=!1,t.selectedIds=[],t.$toast({message:"评价成功！",type:"success"})):e.Info?t.$toast(e.Info):t.$toast("评价失败"),t.btnLoading=!1})).catch((function(){t.$toast("操作失败"),t.btnLoading=!1}))}else this.formCommentErr.comment="请填写评语"},saveForm:function(){var t=this;if(this.formComment.comment){var e={ceID:this.formComment.id,ciID:this.formComment.ciID,studentID:this.formComment.studentID,score:this.formComment.score,comment:this.formComment.comment,evaluate:this.formComment.evaluate,anonymous:!1,type:1};this.$mainHttp.courseComment.dataAdd(e).then((function(e){e.Result?(t.dialogVisible=!1,t.$toast({message:"评价成功！",type:"success"}),t.getAllStudentEvaluate()):e.Info&&t.$toast(e.Info)})).catch((function(){t.$toast("操作失败")}))}else this.formCommentErr.comment="请填写评语"}}},p=g,I=(n("dbcc"),Object(u["a"])(p,f,h,!1,null,"641a7b55",null)),D=I.exports,C={name:"history-record-view",components:{Attendance:d,StudentScore:D},data:function(){return{courseID:this.$store.getters.courseID,courseInfo:this.$store.getters.course}}},S=C,_=(n("8f95"),Object(u["a"])(S,s,i,!1,null,"980be4ba",null));e["default"]=_.exports},"6f9c":function(t,e,n){},"74b6":function(t,e,n){},"8f95":function(t,e,n){"use strict";var s=n("6f9c"),i=n.n(s);i.a},a434:function(t,e,n){"use strict";var s=n("23e7"),i=n("23cb"),a=n("a691"),o=n("50c4"),c=n("7b0b"),r=n("65f0"),l=n("8418"),u=n("1dde"),m=n("ae40"),d=u("splice"),f=m("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,v=Math.min,g=9007199254740991,p="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!d||!f},{splice:function(t,e){var n,s,u,m,d,f,I=c(this),D=o(I.length),C=i(t,D),S=arguments.length;if(0===S?n=s=0:1===S?(n=0,s=D-C):(n=S-2,s=v(h(a(e),0),D-C)),D+n-s>g)throw TypeError(p);for(u=r(I,s),m=0;m<s;m++)d=C+m,d in I&&l(u,m,I[d]);if(u.length=s,n<s){for(m=C;m<D-s;m++)d=m+s,f=m+n,d in I?I[f]=I[d]:delete I[f];for(m=D;m>D-s+n;m--)delete I[m-1]}else if(n>s)for(m=D-s;m>C;m--)d=m+s-1,f=m+n-1,d in I?I[f]=I[d]:delete I[f];for(m=0;m<n;m++)I[m+C]=arguments[m+2];return I.length=D-s+n,u}})},cb2f:function(t,e,n){},d81d:function(t,e,n){"use strict";var s=n("23e7"),i=n("b727").map,a=n("1dde"),o=n("ae40"),c=a("map"),r=o("map");s({target:"Array",proto:!0,forced:!c||!r},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},dbcc:function(t,e,n){"use strict";var s=n("cb2f"),i=n.n(s);i.a},e159:function(t,e,n){"use strict";var s=n("74b6"),i=n.n(s);i.a}}]);