webpackJsonp([11],{ARkv:function(t,e){},ORMB:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("UDsO"),i={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"course"}},[o("head-top",{attrs:{title:"课程"}}),t._v(" "),o("div",{staticClass:"bg"},[o("div",{staticClass:"bg-title"}),t._v(" "),o("div",{staticClass:"title"},[t._v(t._s(t.courseInfo.CourseName))]),t._v(" "),o("div",{staticClass:"tc-grade"},[o("span",{staticClass:"tc-name"},[t._v("老师："+t._s(t.courseInfo.TeacherName))]),t._v(" "),o("span",{staticClass:"grade"},[t._v("班级："+t._s(t.courseInfo.ClassName))])]),t._v(" "),o("div",{staticClass:"croom-Time"},[o("span",{staticClass:"c-room"},[t._v("教室："+t._s(t.courseInfo.ClassroomName))]),t._v(" "),o("span",{staticClass:"atime"},[t._v("\n        时间：\n        "+t._s(t._f("formatTime")(t.courseInfo.StartTime,t.courseInfo.StartTime))+"\n        -\n        "+t._s(t._f("formatTime")(t.courseInfo.EndTime,t.courseInfo.EndTime))+"\n      ")])])]),t._v(" "),o("div",{staticClass:"content"},t._l(t.courseDetails,function(e){return o("div",{key:e.text,staticClass:"item",on:{click:function(o){return t.goTo(e.path)}}},[o("div",{staticClass:"icon"},[o("i",{staticClass:"iconfont",class:e.icon})]),t._v("\n      "+t._s(e.text)+"\n    ")])}),0),t._v(" "),o("van-popup",{staticClass:"dialog",attrs:{position:"top"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._l(t.groupList,function(e,s){return o("div",{key:s,staticClass:"ct",class:{selected:t.selectIndex==s},on:{click:function(o){return t.selectChange(e,s)}}},[o("div",{staticClass:"name-info"},[o("div",{staticClass:"name"},[t._v(t._s(s+1+"、"+(e.groupName||"第"+(s+1)+"组")))]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:"选择加入小组"===t.dialogTitle,expression:"dialogTitle==='选择加入小组'"}],staticClass:"info"},[e.currentNum===e.groupMax?o("span",[t._v("已满")]):o("span",[t._v(t._s(e.currentNum+" / "+e.groupMax))])])]),t._v(" "),o("div",{staticClass:"xx"},[o("i",{directives:[{name:"show",rawName:"v-show",value:t.selectIndex==s,expression:"selectIndex==i"}],staticClass:"iconfont iconfinish"})])])}),t._v(" "),o("div",{staticClass:"pop_foot"},[t._v("\n      "+t._s(t.selectIndex>-1?"加入："+(t.groupList[t.selectIndex].groupName||"第"+(t.selectIndex+1)+"组"):t.dialogTitle)+"\n      "),o("van-button",{staticClass:"pop_foot_btn",attrs:{type:"primary",plain:"",size:"small"},on:{click:function(e){return t.confirmDialog()}}},[t._v("加入")])],1)],2)],1)},staticRenderFns:[]};var n=function(t){o("ARkv")},a=o("VU/8")(s.a,i,!1,n,"data-v-596367c5",null);e.default=a.exports},UDsO:function(t,e,o){"use strict";(function(t){var s,i=o("bOdI"),n=o.n(i),a=(o("3Lne"),o("SSsa")),r=(o("mMXg"),o("qYlo")),c=(o("XmAh"),o("il3B")),u=o("bBUo"),p=o("FwVa"),l=o("j/ZV");e.a={name:"",components:(s={},n()(s,c.a.Component.name,c.a.Component),n()(s,r.a.name,r.a),n()(s,a.a.name,a.a),n()(s,"headTop",u.a),s),props:{},beforeRouteLeave:function(t,e,o){this.$store.getters.courseID&&"/homeCourse"===t.path&&window.GatewayHub&&1===window.GatewayHub.connection.state?c.a.confirm({title:"警告",message:"是否强制退出当前课程？"}).then(function(){o()}).catch(function(){o(!1)}):o()},data:function(){return{selectIndex:-1,groupList:[],courseInfo:this.$store.getters.course,courseDetails:[{path:"/signIN",icon:"iconqiandao",text:"签到"},{path:"/groupInfo",icon:"iconrenmai",text:"我的小组"},{path:"/groupDiscussion",icon:"icontaolun",text:"小组讨论"},{path:"/teacherscreen",icon:"iconpingmu-",text:"老师屏幕"},{path:"/quiz",icon:"iconweibiaoti-",text:"随堂测验"},{path:"/question",icon:"icontiwen2",text:"提问"},{path:"/touping",icon:"icontouping",text:"投屏"},{path:"/note",icon:"iconedu-biji",text:"笔记"},{path:"/blackboardWriting",icon:"iconbanshubianjiqi-dianji",text:"板书"},{path:"/courseware",icon:"iconkejian",text:"课件"}],show:!1,dialogTitle:"",cifmBtnText:""}},created:function(){this.$gatewaySignalR.startGatewaySginalR()},mounted:function(){for(var e=["#00CBAB","#3AA0E0","#E38653","#F95F5F","#A36EE5","#E38653","#3AA0E0","#00CBAB","#A36EE5","#A36EE5","#00CBAB"],o=[],s=0;s<this.courseDetails.length;s++){var i="."+this.courseDetails[s].icon;o.push(i)}for(var n=0;n<e.length;n++)t(o[n]).css("color",e[n]);this.$nextTick(function(){})},methods:{openGroupDialog:function(){this.$store.getters.groupID||this.$store.getters.groupType!==p.e.Free||this.$router.push("/joinGroup")},getGroupDataList:function(t){var e=this;this.$store.dispatch("GetGroupByUser").then(function(o){if(o.Result||o.IsGrouping){if(o.Result){if(o.Datas&&o.Datas.length>0)e.groupList=[],o.Datas.forEach(function(t){var o={gatewayID:t.Key.GatewayID,groupID:t.Key.GroupID,groupName:t.Key.GroupName,groupMax:t.Key.GroupNumber,groupingID:t.Key.GroupingID,studentID:t.Key.StudentID,currentNum:t.Total};e.groupList.push(o)}),e.$router.push("/joinGroup");else if(o.Data&&e.$store.getters.groupID){var s=t;e.$router.push(s)}e.groupList=[]}}else e.$toast("当前尚无分组~")}).catch(function(t){e.groupList=[]})},getSignWay:function(){var t=this;this.$gatewayHttp.sign.getInfo({courseID:this.$store.getters.course.CourseID,studentID:this.$store.getters.studentID}).then(function(e){e.SignModel?t.$router.push("/signIN/"+e.SignModel+"/"+(e.Result?"1":"0")):t.$toast("获取签到状态失败~")}).catch(function(e){t.$toast("获取签到状态异常~")})},selectChange:function(t,e){t.currentNum!==t.groupMax&&(this.selectIndex=e)},confirmDialog:function(){-1!==this.selectIndex?"选择加入小组"===this.dialogTitle?this.joinGroup():"投屏选择"===this.dialogTitle&&this.$router.push("/quiz"):this.$toast("请选择小组")},joinGroup:function(){var t=this,e=this.groupList[this.selectIndex];this.$store.dispatch("JoinGroup",e.groupID,e).then(function(e){e.Result?(t.$toast("加入成功~"),t.getGroupDataList("/groupInfo")):e.Info&&t.$toast(e.Info)}).catch(function(t){})},onChange:function(t,e,o){this.$toast("当前值："+e+", 当前索引："+o)},goBack:function(){this.$router.go(-1)},goTo:function(t){var e=this;if("/groupDiscussion"===t||"/groupInfo"===t)this.getGroupDataList(t);else if("/signIN"===t)this.getSignWay();else if("/teacherscreen"===t)Object(l.b)(l.a.broadcastStart,"10",1).then(function(t){t||e.$toast("请求老师屏幕失败~")});else if("/touping"===t)Object(l.b)(l.a.throwScreenOpen,"",1,5,5e3).then(function(t){t||e.$toast("请求投屏失败~")});else if("/start"===t){var o=prompt("请输入投屏地址：","192.168.0.28,192.168.0.51");if(!o)return;Object(l.b)(l.a.throwScreenStart,o,1,5,5e3).then(function(t){t||e.$toast("多点投屏开启失败~")})}else if("/close"===t){var s=prompt("请输入关闭的投屏地址","-1");if(!s)return;Object(l.b)(l.a.throwScreenStop,s,1).then(function(t){t||e.$toast("多点投屏关闭失败~")})}else this.$router.push(t)},goTOxiaoz:function(){this.$router.push("/groupDiscussion")},goTOQuiz:function(){this.$router.push("/quiz")}},watch:{"$store.getters.groupID":function(t,e){t!==e&&this.openGroupDialog()},"$store.getters.groupType":function(t,e){t!==e&&this.openGroupDialog()}}}}).call(e,o("7t+N"))}});
//# sourceMappingURL=11.e1b37a82ad44f553a831.js.map