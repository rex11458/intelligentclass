webpackJsonp([16],{Oj3z:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});e("WJbf");var i=e("OhwO"),n=e("bBUo"),a=e("Utpw"),o=e("eQnu"),c=e.n(o),r=e("FwVa"),u={name:"",components:{headTop:n.a,tVideo:a.a},props:{},data:function(){return{courseID:this.$store.getters.courseID,studentID:this.$store.getters.studentID,courseInfo:this.$store.getters.course,imagePreview:null,signInfo:{},courseScore:{},screenQustionList:[],classPractiseList:[],groupDiscussionList:[],courseWareList:[],boardNoteList:[],miniCourseList:[],noteList:[]}},created:function(){},mounted:function(){var t=this;this.$nextTick(function(){t.getSign(),t.getCourseScore(),t.getScreenQuestion(),t.getClassPractise(),t.getGroupDiscussion(),t.getCourseWare(),t.getBoardNote(),t.getMiniCourse(),t.getNote()})},methods:{getSign:function(){var t=this,s={courseID:this.courseID,studentID:this.studentID};this.signInfo={},this.$mainHttp.sign.getInfo(s).then(function(s){s.Result&&(t.signInfo=s.Data)}).catch(function(t){})},getCourseScore:function(){var t=this;this.courseScore={};var s={courseID:this.courseID,studentID:this.studentID};this.$mainHttp.course.getStudentScore(s).then(function(s){s.Result&&s.Data&&(t.courseScore=s.Data)}).catch(function(t){})},getScreenQuestion:function(){var t=this;this.screenQustionList=[];var s={courseID:this.courseID};this.$mainHttp.screenQustion.getListByType(s).then(function(s){s.Result&&s.Datas&&s.Datas.length>0&&s.Datas.forEach(function(s){t.screenQustionList.push({type:s.Type,name:Object(r.n)(s.Type),total:s.Total})})}).catch(function(t){})},getClassPractise:function(){var t=this;this.classPractiseList=[];var s={courseID:this.courseID};this.$mainHttp.classPractise.getStatistic(s).then(function(s){s.Result&&s.Datas&&s.Datas.length>0&&s.Datas.forEach(function(s){t.classPractiseList.push(s)})}).catch(function(t){})},getGroupDiscussion:function(){var t=this;this.groupDiscussionList=[];var s={courseID:this.courseID,studentID:this.studentID};this.$mainHttp.groupDiscussion.getList(s).then(function(s){s.Result&&s.Datas&&s.Datas.length>0&&s.Datas.forEach(function(s){t.groupDiscussionList.push(s)})}).catch(function(t){})},getCourseWare:function(){var t=this;this.courseWareList=[];var s={courseID:this.courseID};this.$mainHttp.courseware.getList(s).then(function(s){s.Result&&s.Datas&&s.Datas.length>0&&s.Datas.forEach(function(s){t.courseWareList.push(s)})}).catch(function(t){})},getBoardNote:function(){var t=this;this.boardNoteList=[];var s={courseID:this.courseID};this.$mainHttp.boardNote.getList(s).then(function(s){s.Result&&s.Datas&&s.Datas.length>0&&s.Datas.forEach(function(s){t.boardNoteList.push({img:t.$mainHttp.resourse.picture(s.BNContent,4),state:s.State,title:s.BNTitle,time:s.CreateTime,id:s.BNID,content:s.BNContent})})}).catch(function(t){})},getMiniCourse:function(){var t=this;this.miniCourseList=[];var s={courseID:this.courseID};this.$mainHttp.miniCourse.getList(s).then(function(s){s.Result&&s.Datas&&s.Datas.length>0&&s.Datas.forEach(function(s){t.miniCourseList.push({title:s.MLTitle,time:s.StartTime,typeName:Object(r.k)(s.MLType),src:t.$mainHttp.resourse.video(s.MLID,s.FileFormat),poster:c.a})})}).catch(function(t){})},getNote:function(){var t=this;this.noteList=[];var s={courseID:this.courseID,studentID:this.studentID};this.$mainHttp.note.getList(s).then(function(s){s.Result&&s.Datas&&s.Datas.length>0&&s.Datas.forEach(function(s){t.noteList.push(s)})}).catch(function(t){})},getsignStateName:function(t){return 1===t?"正常":2===t?"迟到":""},selectScreenQuestion:function(t){0!==t.total&&this.$router.push("/history/screenQuestion/"+t.type)},selectClassPractise:function(t){this.$router.push("/history/classPractise/"+t.Key.CPID+"/"+t.Key.PLID+"/"+t.Total)},selectGroupDiscussion:function(t){this.$router.push("/history/groupDiscussion/"+t.Key.GSID+"/"+t.Key.GroupID+"/"+t.GroupName)},selectCourseWare:function(t){var s=this.$mainHttp.resourse.file(t.Value.MaterialID);s?(window.location.href=s,this.$toast("下载开始")):this.$toast("下载失败")},selectNote:function(t){this.$router.push({path:"/history/note/detail",query:{title:t.SNTtile,type:t.SNForm,content:t.SNContent,img:t.SNID}})},preview:function(t){this.imagePreview=Object(i.a)({images:[t],showIndex:!1,onClose:function(){}})}},computed:{},watch:{},destroyed:function(){this.imagePreview&&this.imagePreview.close()}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"history"}},[e("head-top",{attrs:{title:"历史课程"}}),t._v(" "),e("div",{staticClass:"main"},[e("div",{staticClass:"item"},[e("div",{staticClass:"tt"},[t._v("课程信息")]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"name"},[t._v("课程名称："+t._s(t.courseInfo.CourseName))]),t._v(" "),e("div",{staticClass:"info"},[e("span",{staticClass:"tc"},[t._v("老师："+t._s(t.courseInfo.TeacherName))]),t._v(" "),e("span",{staticClass:"gd"},[t._v("班级："+t._s(t.courseInfo.ClassName))])]),t._v(" "),e("div",{staticClass:"info"},[e("span",{staticClass:"cs"},[t._v("教室："+t._s(t.courseInfo.ClassroomName))]),t._v(" "),e("span",{staticClass:"itime"},[t._v("\n            时间：\n            "+t._s(t._f("formatDay")(t.courseInfo.ClassDate,t.courseInfo.ClassDate))+"\n            "+t._s(t._f("formatTime")(t.courseInfo.StartTime,t.courseInfo.StartTime))+"\n            -\n            "+t._s(t._f("formatTime")(t.courseInfo.EndTime,t.courseInfo.EndTime))+"\n          ")])])])]),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"tt"},[t._v("考勤信息")]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"zt"},[t._v("\n          签到状态：\n          "),e("span",[t._v(t._s(t.signInfo?t.getsignStateName(t.signInfo.SignState):"未签到"))])]),t._v(" "),e("div",{staticClass:"sj"},[t._v("\n          签到时间：\n          "),e("span",[t._v(t._s(t._f("formatDate")(t.signInfo.SignTime,t.signInfo.SignTime)))])])])]),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"tt"},[t._v("课程得分")]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"zt"},[t._v("\n          总分：\n          "),e("span",[t._v(t._s(t.courseScore.TotalScore)+" 分")])]),t._v(" "),e("div",{staticClass:"sub"},[e("span",[t._v("\n            截屏提问：\n            "),e("em",[t._v(t._s(t.courseScore.SAScore))])]),t._v(" "),e("span",[t._v("\n            小组讨论：\n            "),e("em",[t._v(t._s(t.courseScore.GDScore))])]),t._v(" "),e("span",[t._v("\n            随堂练习：\n            "),e("em",[t._v(t._s(t.courseScore.PAScore))])])])])]),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"tt"},[t._v("截屏提问")]),t._v(" "),t.screenQustionList.length>0?e("div",{staticClass:"content"},t._l(t.screenQustionList,function(s,i){return e("div",{key:i,staticClass:"sub",on:{click:function(e){return t.selectScreenQuestion(s)}}},[e("span",[t._v(t._s(i+1+"、"+s.name))]),t._v(" "),e("span",[t._v("\n            题数：\n            "),e("em",[t._v(t._s(s.total))]),t._v(" "),e("i",{staticClass:"iconfont iconqianjin"})])])}),0):e("div",{staticClass:"content"},[e("div",{staticClass:"zt"},[t._v("暂无数据")])])]),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"tt"},[t._v("随堂练习")]),t._v(" "),e("div",{staticClass:"content"},t._l(t.classPractiseList,function(s,i){return e("div",{key:i,staticClass:"sub",on:{click:function(e){return t.selectClassPractise(s)}}},[e("span",[t._v(t._s(s.PLTitle))]),t._v(" "),e("span",[t._v("\n            题数：\n            "),e("em",[t._v(t._s(s.Total))]),t._v(" "),e("i",{staticClass:"iconfont iconqianjin"})])])}),0)]),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"tt"},[t._v("小组讨论")]),t._v(" "),e("div",{staticClass:"content"},t._l(t.groupDiscussionList,function(s,i){return e("div",{key:i,staticClass:"sub",on:{click:function(e){return t.selectGroupDiscussion(s)}}},[e("span",[t._v(t._s(s.GroupName))]),t._v(" "),e("span",[t._v("\n            下发时间：\n            "),e("em",[t._v(t._s(t._f("formatTime")(s.Key.CreateTime,s.Key.CreateTime)))]),t._v(" "),e("em",[t._v("第"+t._s(s.GroupingNumber||0)+"次分组")]),t._v(" "),e("i",{staticClass:"iconfont iconqianjin"})])])}),0)]),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"tt"},[t._v("\n        课件\n        "),t.courseWareList.length>2?e("span",{on:{click:function(s){return t.$router.push("/history/courseware")}}},[t._v("更多")]):t._e()]),t._v(" "),e("div",{staticClass:"content"},t._l(t.courseWareList,function(s,i){return e("div",{directives:[{name:"show",rawName:"v-show",value:i<2,expression:"index<2"}],key:i,staticClass:"sub",on:{click:function(e){return t.selectCourseWare(s)}}},[e("span",[t._v(t._s(s.Value.MaterialName+"."+s.Value.MaterialFileExt))]),t._v(" "),s.Value.MaterialFileSize>1048576?e("span",[t._v(t._s(Math.round(s.Value.MaterialFileSize/1024/10.24)/100)+"MB")]):e("span",[t._v(t._s(Math.round(s.Value.MaterialFileSize/10.24)/100)+"KB")])])}),0)]),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"tt"},[t._v("\n        板书\n        "),t.boardNoteList.length>0?e("span",{on:{click:function(s){return t.$router.push("/history/boardnote")}}},[t._v("更多")]):t._e()]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"sub-img"},t._l(t.boardNoteList,function(s,i){return e("div",{directives:[{name:"show",rawName:"v-show",value:i<2,expression:"index<2"}],key:i,staticClass:"img"},[e("img",{attrs:{src:s.img},on:{click:function(e){return t.preview(s.img)}}})])}),0)])]),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"tt"},[t._v("\n        笔记\n        "),t.noteList.length>0?e("span",{on:{click:function(s){return t.$router.push("/history/note")}}},[t._v("更多")]):t._e()]),t._v(" "),e("div",{staticClass:"content"},t._l(t.noteList,function(s,i){return e("div",{directives:[{name:"show",rawName:"v-show",value:i<3,expression:"index<3"}],key:i,staticClass:"sub",on:{click:function(e){return t.selectNote(s)}}},[e("span",[t._v(t._s(i+1+"、"+(s.SNTtile.length>16?s.SNTtile.substring(0,16)+"...":s.SNTtile)))]),t._v(" "),e("span",[e("em",[t._v(t._s(t._f("formatTime")(s.CreateTime,s.CreateTime)))]),t._v(" "),e("i",{staticClass:"iconfont iconqianjin"})])])}),0)]),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"tt"},[t._v("\n        微课\n        "),t.miniCourseList.length>1?e("span",{on:{click:function(s){return t.$router.push("/history/microLesson")}}},[t._v("更多")]):t._e()]),t._v(" "),e("div",{staticClass:"content"},t._l(t.miniCourseList,function(s,i){return e("div",{directives:[{name:"show",rawName:"v-show",value:i<1,expression:"index<1"}],key:i,staticClass:"list_item"},[e("t-video",{attrs:{src:s.src,poster:s.poster}}),t._v(" "),e("div",{staticClass:"line_mark"},[e("span",[t._v(t._s(s.typeName))]),t._v(" "),s.title?e("span",[t._v(t._s(s.title))]):e("span",[t._v(t._s(t._f("formatDate")(s.time,s.time)))])])],1)}),0)])])],1)},staticRenderFns:[]};var l=e("VU/8")(u,v,!1,function(t){e("sX+A")},null,null);s.default=l.exports},"sX+A":function(t,s){}});
//# sourceMappingURL=16.1f696429af8011377a58.js.map