(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21b3b5c6"],{"094f":function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"subject_view"},[e("head-top",{attrs:{title:t.title}},[e("span",{staticClass:"head-right",attrs:{slot:"right"},on:{click:t.dataDrop},slot:"right"},[e("van-icon",{attrs:{name:"delete"}})],1)]),e("class-hour-list",{on:{finish:t.classHourChange,toBegin:t.classHourBegin}}),e("class-list",{on:{finish:t.classChange,toBegin:t.classBegin}}),e("van-popup",{attrs:{position:"bottom"},model:{value:t.showPicker,callback:function(s){t.showPicker=s},expression:"showPicker"}},[e("van-picker",{attrs:{title:t.pickerTitle,"show-toolbar":"",columns:t.columns},on:{cancel:function(s){t.showPicker=!1},confirm:t.onConfirm}})],1)],1)},i=[],a=(e("4160"),e("fb6a"),e("b0c0"),e("ac1f"),e("5319"),e("159b"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"class_list"},[e("div",{staticClass:"sub_nav"},[e("span",[t._v("班级")]),e("van-icon",{attrs:{name:"plus"},on:{click:function(s){return t.$router.push("/class/edit")}}})],1),e("van-pull-refresh",{staticClass:"pull_fresh",on:{refresh:t.onSearch},model:{value:t.isLoading,callback:function(s){t.isLoading=s},expression:"isLoading"}},[t.classList&&t.classList.length>0?e("van-cell-group",t._l(t.classList,(function(s,o){return e("van-cell",{key:o,staticClass:"cell_main",attrs:{"is-link":"",title:s.name,label:"学生："+s.person},on:{click:function(e){return t.classClick(s)}}})})),1):e("r-lack-data")],1),e("van-popup",{attrs:{position:"bottom"},model:{value:t.classOperate,callback:function(s){t.classOperate=s},expression:"classOperate"}},[e("van-cell",{attrs:{value:"选择课时开始授课"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.toBegin(s)}}},[e("van-icon",{attrs:{slot:"right-icon",name:"other-pay"},slot:"right-icon"})],1),e("van-cell",{attrs:{value:"学生列表"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.toStudent(s)}}},[e("van-icon",{attrs:{slot:"right-icon",name:"manager-o"},slot:"right-icon"})],1),e("van-cell",{attrs:{value:"编辑"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.toEdit(s)}}},[e("van-icon",{attrs:{slot:"right-icon",name:"edit"},slot:"right-icon"})],1),e("van-cell",{attrs:{value:"删除"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.toDrop(s)}}},[e("van-icon",{attrs:{slot:"right-icon",name:"delete"},slot:"right-icon"})],1)],1)],1)}),c=[],n=(e("99af"),e("1e55")),r=e("6828"),l={name:"classList",data:function(){return{subjectID:this.$store.getters.subjectID,classList:[],classOperate:!1,classSelected:null,isLoading:!1}},mounted:function(){this.getClassList()},methods:{onSearch:function(){this.getClassList()},getClassList:function(){var t=this;this.classList=[],this.isLoading=!0,this.$mainHttp.class.dataList({courseID:this.subjectID}).then((function(s){s.Result?(s.Datas.sort((function(t,s){return t["CreateTime"]>s["CreateTime"]?-1:1})),s.Datas.forEach((function(s){t.classList.push({name:s.Key["ClassName"],createTime:Object(r["a"])(s.Key["CreateTime"],"yyyy-MM-dd"),code:s.Key["InviteCode"],person:s.Total,allowJoin:s.Key["AllowJoin"],id:s.Key["ClassID"]})}))):s.Info&&t.$toast(s.Info),t.$emit("finish",t.classList),t.isLoading=!1})).catch((function(){t.isLoading=!1}))},classClick:function(t){this.classSelected=t,this.classOperate=!0},editClass:function(t){this.$router.push("/class/edit/"+t.id+"/"+t.name)},toBegin:function(){this.classOperate=!1,this.$emit("toBegin",this.classSelected)},toStudent:function(){this.$store.commit("SET_CLASS",this.classSelected),this.$store.commit("SET_CLASS_ID",this.classSelected.id),this.$router.push("/class/student/list")},toEdit:function(){this.$router.push("/class/edit/".concat(this.classSelected.id,"/").concat(this.classSelected.name,"/").concat(this.classSelected.allowJoin))},toDrop:function(){var t=this;n["Dialog"].confirm({message:"确认删除此班级？"}).then((function(){t.toDelete()})).catch((function(){}))},toDelete:function(){var t=this;this.$mainHttp.class.dataDelete({classID:this.classSelected.id,token:this.$store.getters.token}).then((function(s){s.Result?(t.classOperate=!1,t.getClassList(),t.$toast("删除成功")):s.Info?t.$toast(s.Info):t.$toast("删除失败")})).catch((function(){t.$toast("操作失败")}))}}},u=l,h=e("2877"),f=Object(h["a"])(u,a,c,!1,null,null,null),d=f.exports,m=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"class_hour_list"},[e("div",{staticClass:"sub_nav"},[e("span",[t._v("课时")]),e("van-icon",{attrs:{name:"plus"},on:{click:t.toAdd}})],1),e("van-pull-refresh",{staticClass:"pull_fresh",on:{refresh:t.onSearch},model:{value:t.isLoading,callback:function(s){t.isLoading=s},expression:"isLoading"}},[t.classHourList&&t.classHourList.length>0?e("van-cell-group",t._l(t.classHourList,(function(s,o){return e("van-cell",{key:o,staticClass:"cell_main",attrs:{title:s.name,label:s.createTime,"is-link":""},on:{click:function(e){return t.classHourClick(s)}}})})),1):e("r-lack-data")],1),e("van-popup",{attrs:{position:"bottom"},model:{value:t.classHourOperate,callback:function(s){t.classHourOperate=s},expression:"classHourOperate"}},[e("van-cell",{attrs:{value:"选择班级开始授课"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.toBegin(s)}}},[e("van-icon",{attrs:{slot:"right-icon",name:"other-pay"},slot:"right-icon"})],1),e("van-cell",{attrs:{value:"备课"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.toPrepare(s)}}},[e("van-icon",{attrs:{slot:"right-icon",name:"todo-list-o"},slot:"right-icon"})],1),e("van-cell",{attrs:{value:"课堂记录"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.toRecord(s)}}},[e("van-icon",{attrs:{slot:"right-icon",name:"todo-list-o"},slot:"right-icon"})],1),e("van-cell",{attrs:{value:"编辑"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.toEdit(s)}}},[e("van-icon",{attrs:{slot:"right-icon",name:"edit"},slot:"right-icon"})],1),e("van-cell",{attrs:{value:"删除"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.toDrop(s)}}},[e("van-icon",{attrs:{slot:"right-icon",name:"delete"},slot:"right-icon"})],1)],1)],1)},p=[],g={name:"classHourList",data:function(){return{subjectID:this.$store.getters.subjectID,classHourList:[],classHourSelected:null,classHourOperate:!1,isLoading:!1}},mounted:function(){this.getClassHourList()},methods:{onSearch:function(){this.getClassHourList()},getClassHourList:function(){var t=this;this.classHourList=[],this.isLoading=!0,this.$mainHttp.classHour.dataList({courseID:this.subjectID}).then((function(s){s.Result?(s.Datas.sort((function(t,s){return t["CreateTime"]>s["CreateTime"]?-1:1})),s.Datas.forEach((function(s){t.classHourList.push({name:s["CHName"],createTime:Object(r["a"])(s["CreateTime"],"yyyy-MM-dd"),code:s["SignCode"],id:s["CHID"]})}))):s.Info&&t.$toast(s.Info),t.$emit("finish",t.classHourList),t.isLoading=!1})).catch((function(){t.isLoading=!1}))},classHourClick:function(t){this.classHourSelected=t,this.classHourOperate=!0},toBegin:function(){this.classHourOperate=!1,this.$emit("toBegin",this.classHourSelected)},toPrepare:function(){this.$store.commit("SET_CLASS_HOUR",this.classHourSelected),this.$store.commit("SET_CLASS_HOUR_ID",this.classHourSelected.id),this.$router.push("/class-hour/prepare")},toRecord:function(){this.$store.commit("SET_CLASS_HOUR",this.classHourSelected),this.$store.commit("SET_CLASS_HOUR_ID",this.classHourSelected.id),this.$router.push("/history-record/list")},toAdd:function(){this.$store.commit("SET_CLASS_HOUR",null),this.$store.commit("SET_CLASS_HOUR_ID",""),this.$router.push("/class-hour/edit")},toEdit:function(){this.$store.commit("SET_CLASS_HOUR",this.classHourSelected),this.$store.commit("SET_CLASS_HOUR_ID",this.classHourSelected.id),this.$router.push("/class-hour/edit")},toDrop:function(){var t=this;n["Dialog"].confirm({message:"确认删除当前课时？"}).then((function(){t.toDelete()})).catch((function(){}))},toDelete:function(){var t=this;this.$mainHttp.classHour.dataDelete({chID:this.classHourSelected.id,token:this.$store.getters.token}).then((function(s){s.Result?(t.classHourOperate=!1,t.getClassHourList(),t.$toast("删除成功")):s.Info?t.$toast(s.Info):t.$toast("删除失败")})).catch((function(){t.$toast("操作失败")}))}}},S=g,$=Object(h["a"])(S,m,p,!1,null,null,null),D=$.exports,v=e("ed08"),I={name:"subjectView",components:{ClassList:d,ClassHourList:D},data:function(){return{title:this.$store.getters.subject.name,subjectID:this.$store.getters.subjectID,classHourList:[],classList:[],showPicker:!1,pickerTitle:"",columns:[],classHourSelected:null,classSelected:null,pickerType:1}},mounted:function(){},methods:{dataDrop:function(){var t=this;n["Dialog"].confirm({message:"确认删除当前课程？"}).then((function(){t.dataDelete()})).catch((function(){}))},dataDelete:function(){var t=this;this.$mainHttp.course.dataDelete({courseID:this.subjectID,token:this.$store.getters.token}).then((function(s){s.Result?(t.$toast("删除成功"),t.$router.replace("/subject/list")):s.Info?t.$toast(s.Info):t.$toast("删除失败")})).catch((function(){t.$toast("操作失败")}))},classHourChange:function(t){this.classHourList.length=0,t&&t.length>0&&(this.classHourList=t.slice(0,t.length))},classHourBegin:function(t){var s=this;this.pickerTitle="请选择授课班级",this.classHourSelected=t,this.classSelected=null,this.columns=[],this.pickerType=1,this.classList.forEach((function(t){s.columns.push({text:t.name,value:t})})),this.showPicker=!0},classChange:function(t){this.classList.length=0,t&&t.length>0&&(this.classList=t.slice(0,t.length))},classBegin:function(t){var s=this;this.pickerTitle="请选择授课课时",this.classHourSelected=null,this.classSelected=t,this.columns=[],this.pickerType=2,this.classHourList.forEach((function(t){s.columns.push({text:t.name,value:t})})),this.showPicker=!0},onConfirm:function(t){var s=this;1===this.pickerType?this.classSelected=t.value:this.classHourSelected=t.value,this.showPicker=!1,this.$store.commit("SET_CLASS",this.classSelected),this.$store.commit("SET_CLASS_ID",this.classSelected.id),this.$store.commit("SET_CLASS_HOUR",this.classHourSelected),this.$store.commit("SET_CLASS_HOUR_ID",this.classHourSelected.id),this.$store.dispatch("CourseInfoGet").then((function(t){t.Result&&t.Data?(s.$router.push("/course"),s.platformTypeSet()):t.Info?s.$toast(t.Info):s.courseAdd()})).catch((function(){s.$toast("操作失败")}))},platformTypeSet:function(){this.$mainHttp.classInfo.setPlatformType({ciID:this.$store.getters.courseID}).then((function(t){t.Result})).catch((function(){}))},courseAdd:function(){var t=this;this.$mainHttp.classInfo.dataAdd({chID:this.classHourSelected.id,classID:this.classSelected.id,teacherID:this.$store.getters.teacherID,classroomID:"",classDate:Object(v["e"])(),createTime:Object(v["f"])(),state:"1"}).then((function(s){s.Result?(t.$store.commit("SET_COURSE_ID",s["CIID"]),t.courseInfo()):s.Info?t.$toast(s.Info):t.$toast("开始上课失败")})).catch((function(){t.$toast("操作失败")}))},courseInfo:function(){var t=this;this.$mainHttp.classInfo.dataInfo({ciID:this.$store.getters.courseID}).then((function(s){if(s.Result&&s.Datas&&s.Datas.length>0){var e=s.Datas[0],o={id:e.Key["CIID"],classHourID:e.Key["CHID"],classID:e.Key["ClassID"],classRoomID:e.Key["ClassroomID"],classRoomName:e["ClsRoomName"],teacherID:e.Key["TeacherID"],classDate:e.Key["ClassDate"],state:e.Key["State"],createTime:e.Key["CreateTime"]};t.$store.commit("SET_COURSE",o),t.courseSet()}else s.Info?t.$toast(s.Info):t.$toast("获取课程失败")})).catch((function(){t.$toast("操作失败")}))},courseSet:function(){var t=this,s={CIID:this.$store.getters.course.id||"",CHID:this.$store.getters.course.classHourID||"",CHName:this.classHourSelected.name||"",ClassID:this.$store.getters.course.classID||"",ClassName:this.classSelected.name||"",TeacherID:this.$store.getters.course.teacherID||"",TeacherName:this.$store.getters.teacher["TeacherName"]||"",ClassroomID:this.$store.getters.course.classRoomID||"",ClassroomName:this.$store.getters.course.classRoomName||"",CourseName:this.$store.getters.subject.name||"",InviteCode:this.$store.getters.class.code||"",ClassDate:this.$store.getters.course.classDate||"",CreateTime:this.$store.getters.course.createTime||"",State:this.$store.getters.course.state||""};this.$mainHttp.classInfo.courseSet({data:JSON.stringify(s)}).then((function(s){s.Result?(t.$router.push("/course"),t.addNewSign(),t.platformTypeSet()):s.Info?t.$toast(s.Info):t.$toast("开始上课失败")})).catch((function(){t.$toast("操作失败")}))},addNewSign:function(){var t=this;this.$mainHttp.sign.newSign({ciID:this.$store.getters.courseID}).then((function(s){s.Result||(s.Info?t.$toast(s.Info):t.$toast("签到初始化失败"))})).catch((function(){t.$toast("签到无法初始化")}))}}},C=I,H=(e("ea6a"),Object(h["a"])(C,o,i,!1,null,"56f504b8",null));s["default"]=H.exports},dfd8:function(t,s,e){},ea6a:function(t,s,e){"use strict";var o=e("dfd8"),i=e.n(o);i.a}}]);