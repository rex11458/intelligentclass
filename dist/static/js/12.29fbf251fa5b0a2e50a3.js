webpackJsonp([12],{eHQk:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o,s=e("bOdI"),n=e.n(s),r=(e("mMXg"),e("qYlo")),u=(e("XmAh"),e("il3B")),i=(e("3Lne"),e("SSsa")),p={name:"",components:(o={headTop:e("bBUo").a},n()(o,i.a.name,i.a),n()(o,u.a.Component.name,u.a.Component),n()(o,r.a.name,r.a),o),props:{},beforeRouteLeave:function(t,a,e){this.$store.getters.groupID&&"/joinGroup"===t.path?(e(!1),this.$router.push("/course")):e()},data:function(){return{dataList:[],groupList:[],showEdit:!1,groupName:"暂无组名",oldGroupName:"",dataInfo:{}}},created:function(){this.getDataInfo(),this.getGroupDataInfo()},methods:{getDataInfo:function(){var t=this;this.dataList=[],this.$gatewayHttp.group.getRankList({groupid:this.$store.getters.groupID||this.$route.params.groupId}).then(function(a){a.Result&&a.Datas&&a.Datas.length>0&&(t.dataList=[],a.Datas.forEach(function(a){-1===t.dataList.indexOf(a)&&t.dataList.push(a)}))}).catch(function(t){})},getGroupDataInfo:function(){var t=this;this.$store.dispatch("GetGroupByUser").then(function(a){a.Result||a.IsGrouping?a.Result&&(a.Datas&&a.Datas.length>0?(t.groupList=[],a.Datas.forEach(function(a){var e={gatewayID:a.Key.GatewayID,groupID:a.Key.GroupID,groupName:a.Key.GroupName,groupMax:a.Key.GroupNumber,groupingID:a.Key.GroupingID,studentID:a.Key.StudentID,currentNum:a.Total,gatewayIP:a.GatewayIP};t.groupList.push(e)}),t.dataInfo=t.groupList.find(function(a){return a.groupID===t.$route.params.groupId}),t.groupName=t.dataInfo.groupName||"暂无组名"):a.Data&&(t.dataInfo={gatewayID:a.Data.GatewayID,groupID:a.Data.GroupID,groupName:a.Data.GroupName,groupMax:a.Data.GroupNumber,groupingID:a.Data.GroupingID,studentID:a.Data.StudentID,currentNum:0,gatewayIP:a.GatewayIP||""},t.groupName=t.dataInfo.groupName||"暂无组名")):t.$toast("当前尚无分组")}).catch(function(a){t.groupList=[]})},quitGroup:function(){var t=this;u.a.confirm({title:"退出小组",message:"是否退出当前小组？"}).then(function(){t.$store.dispatch("QuitGroup").then(function(a){a.Result?(t.$toast("退出小组成功"),t.$router.push("/joinGroup")):t.$toast(a.Info||"退出小组失败")}).catch(function(a){t.$toast("退出小组失败")})}).catch(function(){})},joinGroup:function(){var t=this,a=this.dataInfo;u.a.confirm({title:"加入小组",message:"是否加入组："+a.groupName}).then(function(){t.$store.dispatch("JoinGroup",{groupID:a.groupID,group:a}).then(function(a){a.Result?(t.$toast("加入成功"),t.getGroupDataInfo(),t.getDataInfo()):a.Info&&t.$toast(a.Info)}).catch(function(t){})}).catch(function(){})},openUpdateGroupName:function(){this.oldGroupName=this.groupName,this.showEdit=!0},updateGroupName:function(){var t=this;this.groupName.length<1||"暂无组名"===this.groupName?this.$toast("请输入小组名称"):this.$gatewayHttp.group.postDataSave({groupID:this.$store.getters.groupID,groupName:this.groupName,studentID:this.$store.getters.studentID}).then(function(a){a.Result?(t.$toast("组名修改成功"),t.oldGroupName=t.groupName,t.showEdit=!1):(t.$toast(a.Info||"组名修改失败"),t.groupName=t.dataInfo.groupName||"暂无组名")}).catch(function(a){t.$toast("组名修改失败"),t.groupName=t.dataInfo.groupName||"暂无组名"})},closeUpdateGroupName:function(){this.oldGroupName!==this.groupName&&(this.groupName=this.oldGroupName)}},computed:{memberNames:function(){return this.dataList.map(function(t){return t.StudentName}).join("、")}},watch:{"$store.getters.group":function(t,a){t!==a&&(this.getDataInfo(),this.dataInfo=t,this.groupName=this.dataInfo.groupName||"暂无组名")}}},c={render:function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"group_info"},[o("head-top",{attrs:{title:"小组详情"}},[t.$store.getters.groupID?o("router-link",{attrs:{to:"/teamRank"}},[o("i",{staticClass:"iconfont iconchengyuan"})]):t._e()],1),t._v(" "),o("div",{staticClass:"cell"},[t._v("基本信息")]),t._v(" "),o("div",{staticClass:"info"},[o("div",{staticClass:"info_head"},[o("span",[t._v(t._s(t.groupName))]),t._v(" "),t.$store.getters.groupID?t._e():o("div",[o("van-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.joinGroup()}}},[t._v("加入")])],1),t._v(" "),t.$store.getters.studentID===t.dataInfo.studentID?o("div",{staticClass:"info_oprate"},[o("van-button",{attrs:{type:"primary",size:"mini"},on:{click:t.openUpdateGroupName}},[t._v("修改组名")])],1):t._e()]),t._v(" "),o("div",{staticClass:"info_content"},[o("span",[t._v("小组人数："+t._s(t.dataInfo.groupMax)+"人")]),t._v(" "),o("span",[t._v("已加入人数："+t._s(t.dataList.length)+"人")]),t._v(" "),o("div")]),t._v(" "),o("div",{staticClass:"info_foot"},[o("span",{staticClass:"msg"},[t._v("成员:")]),t._v(" "),o("span",[t._v(t._s(t.memberNames))])])]),t._v(" "),o("div",{staticClass:"cell"},[t._v("小组成员")]),t._v(" "),t.dataList.length>0?o("div",{staticClass:"list"},t._l(t.dataList,function(a,s){return o("div",{key:s,staticClass:"list_item"},[o("img",{attrs:{src:e("XhFK"),alt:""}}),t._v(" "),o("span",{class:t.dataInfo.studentID===a.StudentID?"member leader":"member normal"},[t._v(t._s(t.dataInfo.studentID===a.StudentID?"组长":"成员"))]),t._v(" "),o("div",{staticClass:"list_info"},[t._v(t._s(a.StudentName))])])}),0):o("div",{staticClass:"list_item",staticStyle:{"text-align":"center"}},[t._v("暂无成员~")]),t._v(" "),o("div",{staticClass:"footer"},[2===t.$store.getters.groupType&&t.$store.getters.groupID?o("van-button",{attrs:{type:"primary"},on:{click:function(a){return t.quitGroup()}}},[t._v("退出小组")]):t._e()],1),t._v(" "),o("van-popup",{staticClass:"pop_dialog",on:{close:t.closeUpdateGroupName},model:{value:t.showEdit,callback:function(a){t.showEdit=a},expression:"showEdit"}},[o("div",{staticClass:"pop_head"},[t._v("修改小组名称")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.groupName,expression:"groupName"}],attrs:{type:"text",placeholder:"请输入小组名称"},domProps:{value:t.groupName},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.updateGroupName(a)},input:function(a){a.target.composing||(t.groupName=a.target.value)}}}),t._v(" "),o("van-button",{attrs:{type:"primary"},on:{click:t.updateGroupName}},[t._v("提交")])],1)],1)},staticRenderFns:[]};var g=e("VU/8")(p,c,!1,function(t){e("gbux")},"data-v-c34e2618",null);a.default=g.exports},gbux:function(t,a){}});
//# sourceMappingURL=12.29fbf251fa5b0a2e50a3.js.map