(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-320af4cb"],{"693c":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"course-practise-view"},[e("head-top",{attrs:{title:"随堂练习评卷"}}),e("div",{staticClass:"sub_nav"},[t._v(" "+t._s(t.libraryInfo.name||"查看作答")+" ")]),e("div",{staticClass:"sub_module flex-between"},[e("span",[t._v("题数:"+t._s(t.libraryInfo.number))]),e("span",[t._v("总分:"+t._s(t.libraryInfo.score))])]),e("div",{staticClass:"sub_nav"},[e("span",[t._v("题目")]),e("span",[t.selectedIndex>1?e("van-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary",size:"small"},on:{click:function(s){return t.next(-1)}}},[t._v(" 上一题 ")]):t._e(),t.selectedIndex<t.libraryInfo.number?e("van-button",{attrs:{type:"primary",size:"small"},on:{click:function(s){return t.next(1)}}},[t._v(" 下一题 ")]):t._e()],1)]),t.practiseInfo?[e("div",{staticClass:"sub_module practise-item"},[e("p",{staticClass:"practise-title"},[e("span",[t._v(t._s(t.selectedIndex))]),e("span",[t._v(t._s("、【"+t.practiseTypeOptions[t.practiseInfo.type-1].label+"】"+t.practiseInfo.title)+" ")]),e("span",[t._v("（"+t._s(t.practiseInfo.score)+"分）")])]),[1,2].indexOf(t.practiseInfo.type)>-1?e("div",[e("h4",[t._v("选项：")]),t._l(t.practiseInfo.options,(function(s,n){return e("p",{key:n,staticClass:"practise-options"},[t._v(t._s(s.name+"、"+s.value))])}))],2):t._e(),e("h4",[t._v("答案：")]),e("div",{staticClass:"practise-content"},[t._v(t._s(t.practiseInfo.answer||"无"))]),e("h4",[t._v("解析：")]),e("div",{staticClass:"practise-content"},[t._v(t._s(t.practiseInfo.analysis||"无"))])]),4!==t.practiseInfo.type?[e("div",{staticClass:"sub_nav"},[e("span",[t._v("答题统计")]),e("span",[e("span",[t._v("正确率："+t._s(t.practiseInfo.trueRate))]),e("span",{staticStyle:{"padding-left":"10px"}},[t._v("错误率："+t._s(t.practiseInfo.falseRate))])])]),e("div",{staticClass:"sub_module"},[t.practiseInfo.answers&&t.practiseInfo.answers.length>0?e("div",{staticClass:"flex-wrap-between"},[t._l(t.practiseInfo.answers,(function(s,n){return e("div",{key:n,staticClass:"van-hairline--surround list-col"},[e("span",[t._v(t._s(s.name)+"："+t._s(s.total||0))])])})),t._l((4-t.practiseInfo.answers.length%4)%4,(function(t){return e("div",{key:-t,staticClass:" list-col"})}))],2):e("r-lack-data")],1)]:t._e(),e("div",{staticClass:"sub_nav"},[e("span",[t._v("提交成员")]),e("span",[t._v(t._s(t.submitInfo.subNum)+" / "+t._s(t.submitInfo.total))])]),e("div",{staticClass:"sub_module"},[0===t.submitInfo.persons.length?e("span",[t._v("暂无数据")]):e("div",{staticClass:"flex-wrap-between"},[t._l(t.submitInfo.persons,(function(s,n){return e("div",{key:n,staticClass:"student_card van-hairline--surround",on:{click:function(e){return t.toAnswer(s)}}},[e("img",{staticClass:"col_4",attrs:{src:s.imgSrc,alt:""}}),e("div",[t._v(t._s(s.studentName))])])})),t._l(Math.abs(4-t.submitInfo.persons.length%4)%4,(function(t){return e("div",{key:-t,staticClass:"student_card",staticStyle:{width:"19vw"}})}))],2)]),e("div",{staticClass:"sub_nav"},[e("span",[t._v("问卷调研")]),t.practiseInfo.isSurvey?e("span",[t._v("已下发")]):e("van-button",{attrs:{type:"info",size:"small"},on:{click:t.toSurvey}},[t._v(" 下发调研 ")])],1),t.practiseInfo.isSurvey?e("div",{staticClass:"sub_module"},[t.practiseInfo.isSurvey?e("div",{staticClass:"flex-between"},[e("div",{staticClass:"van-hairline--surround list-col"},[e("span",[t._v("已掌握："+t._s(t.surveyInfo.yes))])]),e("div",{staticClass:"van-hairline--surround list-col"},[e("span",[t._v("未掌握："+t._s(t.surveyInfo.no))])])]):e("r-lack-data")],1):t._e()]:t._e(),e("van-popup",{attrs:{position:"bottom",closeable:""},model:{value:t.answerPersonsShow,callback:function(s){t.answerPersonsShow=s},expression:"answerPersonsShow"}},[e("div",{staticClass:"sub_nav"},[t.practiseInfo&&4!==t.practiseInfo.type?e("span",[t._v("作答明细")]):e("span",[t._v("答题评分")])]),t.answerPersonsSelected&&t.practiseInfo?e("div",[e("van-field",{attrs:{label:"提交学生：",disabled:""},model:{value:t.answerPersonsSelected.studentName,callback:function(s){t.$set(t.answerPersonsSelected,"studentName",s)},expression:"answerPersonsSelected.studentName"}}),e("van-field",{attrs:{label:"正确答案：",disabled:""},model:{value:t.practiseInfo.answer,callback:function(s){t.$set(t.practiseInfo,"answer",s)},expression:"practiseInfo.answer"}}),e("van-field",{attrs:{label:"提交答案：",disabled:""},scopedSlots:t._u([{key:"input",fn:function(){return[t.practiseInfo&&4!==t.practiseInfo.type?e("span",{style:{color:"#969799"}},[t._v(t._s(t.answerPersonsSelected.answer))]):e("div",{staticClass:"answer-content",style:{color:"#969799"},domProps:{innerHTML:t._s(t.transform(t.answerPersonsSelected.answer))}})]},proxy:!0}],null,!1,910020293)}),e("van-field",{attrs:{label:"本题分数：",disabled:""},model:{value:t.practiseInfo.score,callback:function(s){t.$set(t.practiseInfo,"score",s)},expression:"practiseInfo.score"}}),e("van-field",{attrs:{name:"stepper",label:"作答得分："},scopedSlots:t._u([{key:"input",fn:function(){return[t.practiseInfo&&4!==t.practiseInfo.type?e("span",{style:{color:"#969799"}},[t._v(t._s(t.answerPersonsSelected.score||0))]):e("van-stepper",{attrs:{integer:"",min:"0",max:t.practiseInfo.score},model:{value:t.answerPersonsSelected.score,callback:function(s){t.$set(t.answerPersonsSelected,"score",s)},expression:"answerPersonsSelected.score"}}),e("span",{staticStyle:{"padding-left":"10px"}},[t._v("分")])]},proxy:!0}],null,!1,1396998584)}),t.practiseInfo&&4===t.practiseInfo.type?e("van-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:t.toScore}},[t._v(" 提交 ")]):t._e()],1):e("r-lack-data")],1)],2)},a=[],i=(e("4160"),e("d81d"),e("159b"),e("2241")),r=e("ed08"),o=e("a5b7"),c=e.n(o),l={name:"practiseView",data:function(){return{libraryInfo:this.$store.getters.practiseLibrary,selectedIndex:1,practiseTypeOptions:[{label:"单选题",value:1},{label:"多选题",value:2},{label:"判断题",value:3},{label:"问答题",value:4}],practiseInfo:null,submitInfo:{total:0,subNum:0,persons:[]},answerPersons:[],answerPersonsShow:!1,answerPersonsSelected:null,surveyInfo:{yes:0,no:0}}},created:function(){this.getPractiseInfo(),this.getSubmitPerson()},methods:{transform:function(t){return Object(r["g"])("show",t,this.$gatewayHttp.resourse.picture)},next:function(t){this.selectedIndex+=t,this.getPractiseInfo()},getPractiseInfo:function(){var t=this;this.practiseInfo=null,this.$gatewayHttp.classPractise.getDataInfo({cipID:this.libraryInfo.taskID,plID:this.libraryInfo.id,psSerial:this.selectedIndex}).then((function(s){s.Result?(t.practiseInfo={id:s.Data["PSID"],index:s.Data["PSSerial"],title:s.Data["PSContent"],answer:s.Data["PSAnswer"],analysis:s.Data["PSanalysis"],type:s.Data["PSType"],optionsNum:s.Data["PSOption"],score:s.Data["PSScore"],state:s.Data["State"],options:s.SODatas?s.SODatas.map((function(t){return{id:t["SOID"],name:t["SOSerial"],value:t["SOContent"]}})):[],answers:s.Options?s.Options.map((function(t){return{id:t["ID"],name:t["OptionName"],total:t["Total"]}})):[],isSurvey:s["IsSurvey"],falseRate:s["ErrorRate"],trueRate:s["CorrectRate"]},t.getSurveyPerson()):s.Info&&t.$toast(s.Info)})).catch((function(){}))},getSubmitPerson:function(){var t=this;this.submitInfo={total:0,subNum:0,persons:[]},this.$gatewayHttp.classPractise.getSubmitPerson({cipID:this.libraryInfo.taskID}).then((function(s){s.Result?(t.submitInfo.subNum=s["SubNum"]||0,t.submitInfo.total=s["Total"]||0,s.Datas&&s.Datas.length>0&&s.Datas.forEach((function(s){t.submitInfo.persons.push({studentID:s["StudentID"],studentName:s["StudentName"],imgSrc:c.a})}))):s.Info&&t.$toast(s.Info)})).catch((function(){}))},toAnswer:function(t){this.answerPersonsShow=!0,this.getAnswerInfo(t)},getAnswerInfo:function(t){var s=this;this.answerPersonsSelected=null,this.$gatewayHttp.classPractise.getAnswerInfo({cipID:this.libraryInfo.taskID,psID:this.practiseInfo.id,studentID:t.studentID||""}).then((function(e){e.Result?s.answerPersonsSelected={studentID:e.Data["StudentID"]+"",studentName:t.studentName,id:e.Data["PAID"]+"",answer:e.Data["PAContent"]+"",comment:e.Data["PAComment"]+"",score:e.Data["PAScore"]||0,master:e.Data["PAMaster"]}:e.Info&&s.$toast(e.Info)})).catch((function(){}))},toScore:function(){var t=this;this.$gatewayHttp.classPractise.setComment({psID:this.practiseInfo.id,paID:this.answerPersonsSelected.id,score:this.answerPersonsSelected.score,saComment:this.answerPersonsSelected.comment}).then((function(s){s.Result?(t.answerPersonsShow=!1,t.$toast("答题评分成功")):s.Info?t.$toast(s.Info):t.$toast("答题评分失败")})).catch((function(){t.$toast("操作失败")}))},getSurveyPerson:function(){var t=this;this.$gatewayHttp.classPractise.getSurveyPerson({cipID:this.libraryInfo.taskID,psID:this.practiseInfo.id}).then((function(s){s.Result?t.surveyInfo={yes:s["YesMaster"],no:s["NoMaster"]}:s.Info&&t.$toast(s.Info)})).catch((function(){}))},toSurvey:function(){var t=this;i["a"].confirm({title:"提示",message:"是否下发调研？"}).then((function(){t.$gatewayHttp.classPractise.setSurvey({cipID:t.libraryInfo.taskID,psID:t.practiseInfo.id}).then((function(s){s.Result?(t.getPractiseInfo(),t.$toast("下发调研成功")):s.Info?t.$toast(s.Info):t.$toast("下发调研失败")})).catch((function(){t.$toast("操作失败")}))})).catch((function(){}))}}},u=l,p=(e("dc63"),e("2877")),f=Object(p["a"])(u,n,a,!1,null,"305dfe26",null);s["default"]=f.exports},a5b7:function(t,s,e){t.exports=e.p+"img/boy_img.8267a8ec.png"},ccf1:function(t,s,e){},dc63:function(t,s,e){"use strict";var n=e("ccf1"),a=e.n(n);a.a}}]);
//# sourceMappingURL=chunk-320af4cb.5c83d902.js.map