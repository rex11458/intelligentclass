(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e6ba8b30"],{"5d53":function(t,e,o){},d65c:function(t,e,o){"use strict";var s=o("5d53"),n=o.n(s);n.a},d81d:function(t,e,o){"use strict";var s=o("23e7"),n=o("b727").map,a=o("1dde"),i=o("ae40"),r=a("map"),u=i("map");s({target:"Array",proto:!0,forced:!r||!u},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},f4ca:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"course-group"},[o("head-top",{attrs:{title:"分组教学"}}),o("div",{staticClass:"sub_nav"},[t.groupTimes>0?o("span",[t._v("第"+t._s(t.groupTimes)+"次分组："+t._s(t.typeName))]):o("span",[t._v("尚无分组")]),o("van-button",{attrs:{type:"primary",size:"mini"},on:{click:t.groupReset}},[t._v(t._s(t.groupTimes>0?"重新分组":"开始分组"))])],1),t.dataList&&t.dataList.length>0?o("van-tabs",{ref:"groups",attrs:{animated:"",swipeable:""},model:{value:t.selectIndex,callback:function(e){t.selectIndex=e},expression:"selectIndex"}},t._l(t.dataList,(function(e,s){return o("van-tab",{key:s,ref:"group_tab"+s,refInFor:!0},[o("div",{attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(e.groupName)+" ")]),o("van-cell-group",[o("div",{staticClass:"sub_nav van-hairline--bottom",staticStyle:{"background-color":"#fff",color:"#888"}},[o("span"),o("div",[t._v("小组成员："+t._s(e.personList.length)+"/"+t._s(e.groupMax))])]),t._l(e.personList,(function(e,s){return o("van-cell",{key:s,staticClass:"cell_main",attrs:{"is-link":""},on:{click:function(o){return t.studentClick(e,s)}}},[o("template",{slot:"icon"},[o("img",{directives:[{name:"real-img",rawName:"v-real-img",value:[e.userID,e.studentID],expression:"[sub.userID, sub.studentID]"}],attrs:{src:t.defaultHead,alt:""}})]),o("template",{slot:"title"},[o("span",{staticClass:"line_title"},[t._v(t._s(e.studentName))]),e.isLeader?o("van-tag",{staticStyle:{"margin-left":"20px"},attrs:{type:"danger"}},[t._v("组长")]):o("van-tag",{staticStyle:{"margin-left":"20px"},attrs:{type:"success"}},[t._v("成员")])],1),o("template",{slot:"label"},[o("span",{staticClass:"line_title"},[t._v(t._s(e.studentSno))])])],2)}))],2)],1)})),1):o("r-lack-data"),o("van-popup",{attrs:{position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[o("van-cell",{staticStyle:{"align-items":"center"},attrs:{value:t.studentSelected.isLeader?"设为成员":"设为组长"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.setLeader(e)}}},[o("van-icon",{attrs:{slot:"right-icon",name:"award-o"},slot:"right-icon"})],1),o("van-cell",{attrs:{value:"移动到"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toMove(e)}}},[o("van-icon",{attrs:{slot:"right-icon",name:"share"},slot:"right-icon"})],1)],1),o("van-popup",{attrs:{position:"bottom"},model:{value:t.moveVisible,callback:function(e){t.moveVisible=e},expression:"moveVisible"}},[o("van-picker",{attrs:{"show-toolbar":"",columns:t.groupArr},on:{cancel:function(e){t.moveVisible=!1},confirm:t.moveConfirm}})],1),o("van-popup",{attrs:{position:"bottom",closeable:""},model:{value:t.groupVisible,callback:function(e){t.groupVisible=e},expression:"groupVisible"}},[o("div",{staticClass:"sub_nav"},[o("span",[t._v("进行第"+t._s(t.groupTimes+1)+"次分组")])]),o("van-cell",[o("span",{attrs:{slot:"icon"},slot:"icon"},[t._v("选择成员")]),o("span",{attrs:{slot:"title"},slot:"title"}),o("van-radio-group",{attrs:{slot:"right-icon",direction:"horizontal"},slot:"right-icon",model:{value:t.studentType,callback:function(e){t.studentType=e},expression:"studentType"}},[o("van-radio",{attrs:{name:1}},[t._v("全部")]),o("van-radio",{attrs:{name:2}},[t._v("签到")])],1)],1),o("van-radio-group",{staticStyle:{"text-align":"left"},model:{value:t.radioSelected,callback:function(e){t.radioSelected=e},expression:"radioSelected"}},[o("van-cell-group",[o("van-cell",{attrs:{title:"随机分组",clickable:""},on:{click:function(e){t.radioSelected="1"}}},[o("van-radio",{attrs:{slot:"icon",name:"1"},slot:"icon"}),o("van-stepper",{attrs:{slot:"default",integer:"",min:"1",max:"50"},slot:"default",model:{value:t.groupRandomNum,callback:function(e){t.groupRandomNum=e},expression:"groupRandomNum"}}),o("span",{staticStyle:{"margin-left":"10px"},attrs:{slot:"right-icon"},slot:"right-icon"},[t._v("组")])],1),o("van-cell",{attrs:{title:"自由分组",clickable:""},on:{click:function(e){t.radioSelected="2"}}},[o("van-radio",{attrs:{slot:"icon",name:"2"},slot:"icon"}),o("van-stepper",{attrs:{slot:"default",integer:"",min:"1",max:"50"},slot:"default",model:{value:t.groupNum,callback:function(e){t.groupNum=e},expression:"groupNum"}}),o("span",{staticStyle:{"margin-left":"10px"},attrs:{slot:"right-icon"},slot:"right-icon"},[t._v("组")])],1),o("van-cell",{directives:[{name:"show",rawName:"v-show",value:"2"===t.radioSelected,expression:"radioSelected === '2'"}],attrs:{title:"每组人数"}},[o("span",{staticStyle:{width:"40px"},attrs:{slot:"icon"},slot:"icon"}),o("van-stepper",{attrs:{slot:"default",integer:"",min:"1",max:"50"},slot:"default",model:{value:t.groupPersonNum,callback:function(e){t.groupPersonNum=e},expression:"groupPersonNum"}}),o("span",{staticStyle:{"margin-left":"10px"},attrs:{slot:"right-icon"},slot:"right-icon"},[t._v("人")])],1),o("van-button",{staticStyle:{width:"100%"},attrs:{type:"info"},on:{click:t.groupSubmit}},[t._v("确定")])],1)],1)],1)],1)},n=[],a=(o("4160"),o("d81d"),o("159b"),{name:"group",components:{},data:function(){return{defaultHead:o("a5b7"),typeName:"随机分组",selectIndex:0,gatewayList:[],studentList:[],groupList:[],studentSelected:{},studentSelectIndex:-1,show:!1,moveVisible:!1,groupVisible:!1,radioSelected:"1",studentType:1,groupTimes:0,groupRandomNum:1,groupPersonNum:1,groupNum:1,groupingID:"",courseID:""}},computed:{dataList:function(){return this.groupList},groupArr:function(){var t=this;return this.groupList.map((function(e,o){return{text:e.groupName,value:e.groupID,index:o,disabled:o===t.selectIndex}}))}},mounted:function(){this.getGroupInfo()},methods:{getGroupInfo:function(){var t=this;this.$mainHttp.group.getGroupLastInfo({ciID:this.$store.getters.courseID}).then((function(e){e.Result&&e.Data?(t.radioSelected=e.Data["GroupingType"]+""||"1",t.typeName="1"===t.radioSelected?"随机分组":"自由分组",t.groupingID=e.Data["GroupingID"],t.courseID=e.Data["CIID"],t.groupPersonNum=e.Data["GroupNumber"]||0,t.groupTimes=e.Data["GroupingNumber"]||0,"1"===t.radioSelected?t.groupRandomNum=e.Data["GroupingNumber"]||1:t.groupNum=e.Data["GroupingNumber"]||1,t.getGroupList()):e.Info&&t.$toast(e.Info)})).catch((function(){}))},getGroupList:function(){var t=this;this.groupList=[],this.$mainHttp.group.getGroupList({groupingID:this.groupingID}).then((function(e){e.Result?e.Datas&&e.Datas.length>0&&(e.Datas.forEach((function(e){t.groupList.push({groupName:e.Key["GroupName"],groupID:e.Key["GroupID"],gatewayID:e.Key["GatewayID"],groupMax:e.Key["GroupNumber"],studentID:e.Key["StudentID"],personList:[]})})),t.groupList.forEach((function(e,o){t.getGroupMemberList(e,o)})),t.$nextTick((function(){var e=t.$refs["group_tab"+t.selectIndex][0]||t.$refs["group_tab"+t.selectIndex];e.inited=!1,e.inited=!0}))):e.Info&&t.$toast(e.Info)})).catch((function(){}))},getGroupMemberList:function(t,e){var o=this;t.personList=[],this.$mainHttp.group.getGroupPersonList({groupID:t.groupID}).then((function(e){e.Result?e.Datas&&e.Datas.length>0&&e.Datas.forEach((function(e){t.personList.push({studentID:e["StudentID"],userID:e["UserID"],studentName:e["StudentName"],studentSno:e["StudentXH"],studentSex:e["StudentGender"],isLeader:t.studentID===e["StudentID"]})})):e.Info&&o.$toast(e.Info)})).catch((function(){}))},studentClick:function(t,e){this.studentSelected=t,this.studentSelectIndex=e,this.show=!0},setLeader:function(){var t=this,e=this.studentSelected.isLeader?"成员":"组长";this.$mainHttp.group.postGroupLeaderSet({groupID:this.groupList[this.selectIndex].groupID,studentID:this.studentSelected.isLeader?"":this.studentSelected.studentID}).then((function(o){o.Result?(t.$toast("设为"+e+"成功"),t.getGroupList(),t.show=!1):o.Info?t.$toast(o.Info):t.$toast("设为"+e+"失败")})).catch((function(){t.$toast("操作失败")}))},toMove:function(){this.show=!1,this.moveVisible=!0},moveConfirm:function(t){var e=this;this.$mainHttp.group.postMemberMove({oldGroupID:this.groupList[this.selectIndex].groupID,newGroupID:t.value,studentID:this.studentSelected.studentID,ciID:this.$store.getters.courseID}).then((function(t){t.Result?(e.$toast("移动成员成功"),e.getGroupList(),e.moveVisible=!1):t.Info?e.$toast(t.Info):e.$toast("移动成员失败")})).catch((function(){e.$toast("操作失败")}))},groupReset:function(){this.radioSelected="1",this.studentType=1,this.groupRandomNum=1,this.groupPersonNum=1,this.groupNum=1,this.groupVisible=!0},groupSubmit:function(){var t=this;this.$mainHttp.group.postGroupSet({ciID:this.$store.getters.courseID,classID:this.$store.getters.classID,studentType:this.studentType,groupingType:this.radioSelected,groupNumber:"1"===this.radioSelected?this.groupRandomNum:this.groupNum,peopleNumber:"1"===this.radioSelected?1:this.groupPersonNum}).then((function(e){e.Result?(t.$toast("分组成功"),t.typeName="1"===t.radioSelected?"随机分组":"自由分组",t.groupVisible=!1,t.getGroupInfo()):e.Info?t.$toast(e.Info):t.$toast("分组失败")})).catch((function(){t.$toast("操作失败")}))}}}),i=a,r=(o("d65c"),o("2877")),u=Object(r["a"])(i,s,n,!1,null,"cb5bcc36",null);e["default"]=u.exports}}]);