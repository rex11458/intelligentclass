(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b99f64c"],{"1ef0":function(t,e,n){},"3cfa":function(t,e,n){},6235:function(t,e,n){},"67a6":function(t,e,n){"use strict";var a=n("1ef0"),s=n.n(a);s.a},a5b7:function(t,e,n){t.exports=n.p+"img/boy_img.8267a8ec.png"},c675:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"course_record_view"},[n("head-top",{attrs:{title:"课堂互动"}}),n("div",{staticClass:"record-item"},[n("div",{staticClass:"item-title"},[t._v("截屏提问 ")]),n("screen-question")],1),t._m(0),t._e(),t._m(1),t._e()],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"record-item"},[n("div",{staticClass:"item-title"},[t._v("随堂练习 ")]),n("div",{staticClass:"item-content"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"record-item"},[n("div",{staticClass:"item-title"},[t._v("分组讨论 ")]),n("div",{staticClass:"item-content"})])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.dataList&&t.dataList.length>0?n("van-cell-group",t._l(t.dataList,(function(e,a){return n("van-cell",{key:a,staticClass:"cell_main",style:{paddingLeft:"0",paddingRight:"0"},attrs:{"is-link":""},on:{click:function(n){return t.typeSelect(e)}},scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" "+t._s(a+1)+"、 ")]},proxy:!0},{key:"title",fn:function(){return[n("div",{staticClass:"flex-between line_title"},[n("span",[t._v(t._s(e.name))]),n("span",[t._v(" 题数： "),n("span",{staticStyle:{color:"#00cbab"}},[t._v(t._s(e.total))])])])]},proxy:!0}],null,!0)})})),1):n("r-lack-data")],1)},o=[],r=(n("4160"),n("159b"),n("08f3")),c={name:"ScreenQuestion",data:function(){return{courseID:this.$store.getters.courseID,courseInfo:this.$store.getters.course,dataList:[],dataLoading:!1}},created:function(){this.GetScreenQuestionStats()},methods:{GetScreenQuestionStats:function(){var t=this;this.dataLoading=!0,this.dataList=[],this.$mainHttp.screenQuestion.dataStatistics({ciID:this.courseID}).then((function(e){e.Result&&e.Datas&&e.Datas.length>0&&e.Datas.forEach((function(e){t.dataList.push({type:e["Type"],name:Object(r["h"])(e["Type"]),total:e["Total"]||0})})),t.dataLoading=!1})).catch((function(){t.dataLoading=!1}))},typeSelect:function(t){this.$router.push("/course-record/screen-question/list/"+t.type)}}},u=c,l=n("2877"),p=Object(l["a"])(u,i,o,!1,null,"76b2b72e",null),d=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"record-item "},[n("div",{staticClass:"item-title flex-between"},[n("span",[t._v("随机挑人")]),t.randomTimeOptions&&t.randomTimeOptions.length>0?n("van-dropdown-menu",[n("van-dropdown-item",{attrs:{options:t.randomTimeOptions},model:{value:t.randomValue,callback:function(e){t.randomValue=e},expression:"randomValue"}})],1):t._e()],1),t.personList&&t.personList.length>0?n("div",{staticClass:"flex-wrap-between"},[t._l(t.personList,(function(e,a){return n("div",{key:a,staticClass:"student_card van-hairline--surround"},[n("img",{staticClass:"col_4",attrs:{src:t.defaultHead,alt:""}}),n("div",[t._v(t._s(e.name||"姓名"))])])})),t._l(Math.abs(4-t.personList.length%4)%4,(function(t){return n("div",{key:-t,staticClass:"student_card",staticStyle:{width:"19vw"}})}))],2):n("r-lack-data")],1)},f=[],g=(n("c740"),n("a5b7")),h=n.n(g),v={name:"RandomPerson",data:function(){return{courseID:this.$store.getters.courseID,courseInfo:this.$store.getters.course,defaultHead:h.a,randomValue:"",randomTimeOptions:[],groupList:[],isLoading:!1}},computed:{personList:function(){var t=this,e=this.randomTimeOptions.findIndex((function(e){return e.value===t.randomValue}));return e>-1?this.randomTimeOptions[e].personList:[]}},created:function(){this.getRandomList()},methods:{getRandomList:function(){var t=this;this.randomTimeOptions=[],this.$mainHttp.randomPick.dataList({ciID:this.courseID}).then((function(e){e.Result?e.Datas&&e.Datas.length>0&&(e.Datas.forEach((function(e){var n=[];e.Value&&e.Value.length>0&&e.Value.forEach((function(t){n.push({id:t["StudentID"],name:t["StudentName"]})})),t.randomTimeOptions.push({text:"第".concat(e.Key["RPSerial"],"次挑人"),value:e.Key["RPID"],number:e.Key["RPSerial"],courseID:e.Key["CIID"],personList:n})})),t.randomValue=t.randomTimeOptions[0].value):e.Info&&t.$toast(e.Info)})).catch((function(){}))}}},_=v,b=(n("67a6"),Object(l["a"])(_,m,f,!1,null,"a98e3fa6",null)),k=b.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"record-item "},[n("div",{staticClass:"item-title flex-between"},[n("span",[t._v("小组排名")]),t.groupTimeOptions&&t.groupTimeOptions.length>0?n("van-dropdown-menu",[n("van-dropdown-item",{attrs:{options:t.groupTimeOptions},on:{change:t.changeGroupTime},model:{value:t.groupTime,callback:function(e){t.groupTime=e},expression:"groupTime"}})],1):t._e()],1),t.groupList&&t.groupList.length>0?n("van-cell-group",t._l(t.groupList,(function(e,a){return n("van-cell",{key:a,staticClass:"cell_main",style:{paddingLeft:"0",paddingRight:"0"},on:{click:function(n){return t.groupSelect(e)}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("van-icon",{staticClass:"line_icon",attrs:{"class-prefix":"iconfont icon-wangguan"}})]},proxy:!0},{key:"title",fn:function(){return[n("div",{staticClass:"flex-between line_title"},[n("span",[t._v(t._s(e.name))]),n("span",[t._v("排名： "),n("van-tag",{attrs:{type:"primary"}},[t._v(t._s(e.rank))])],1)])]},proxy:!0},{key:"label",fn:function(){return[n("div",{staticClass:"flex-between line_title"},[n("span",[t._v(" 总分："+t._s(e.scoreTotal||0))]),n("span",[t._v(" 总赞："+t._s(e.goodTotal||0))]),n("span"),n("span",[t._v("成员：查看")])])]},proxy:!0}],null,!0)})})),1):n("r-lack-data"),n("van-popup",{attrs:{position:"bottom",closeable:""},model:{value:t.dialogVisible,callback:function(e){t.dialogVisible=e},expression:"dialogVisible"}},[n("div",{staticClass:"sub_nav"},[n("span",[t._v("小组成员("+t._s(t.groupSelected?t.groupSelected.name:"")+")")])]),t.groupMember&&t.groupMember.length>0?n("van-cell-group",t._l(t.groupMember,(function(e,a){return n("van-cell",{key:a,staticClass:"cell_main",scopedSlots:t._u([{key:"icon",fn:function(){return[n("img",{attrs:{src:t.defaultHead,alt:""}})]},proxy:!0},{key:"title",fn:function(){return[n("div",{staticClass:"flex-between line_title"},[n("span",[t._v(t._s(e.name))]),n("span",[t._v("排名： "),n("van-tag",{attrs:{type:"primary"}},[t._v(t._s(e.rank))])],1)])]},proxy:!0},{key:"label",fn:function(){return[n("div",{staticClass:"flex-between line_title"},[n("van-tag",{attrs:{plain:"",type:e.isLeader?"warning":"success"}},[t._v(" "+t._s(e.isLeader?"组长":"成员")+" ")]),n("span"),n("span",[t._v(" 总分："+t._s(e.scoreTotal||0))]),n("span",[t._v(" 总赞："+t._s(e.goodTotal||0))])],1)]},proxy:!0}],null,!0)})})),1):n("r-lack-data")],1)],1)},L=[],y={name:"GroupRank",data:function(){return{courseID:this.$store.getters.courseID,courseInfo:this.$store.getters.course,defaultHead:h.a,groupTime:"",groupTimeOptions:[],groupList:[],isLoading:!1,groupSelected:null,groupMember:[],dialogVisible:!1}},created:function(){this.getGroupTimes()},methods:{getGroupTimes:function(){var t=this;this.groupTimeOptions=[],this.$mainHttp.group.dataList({ciID:this.courseID}).then((function(e){e.Result?e.Datas&&e.Datas.length>0&&(e.Datas.forEach((function(e){t.groupTimeOptions.push({text:"第".concat(e["GroupingNumber"],"次分组"),value:e["GroupingNumber"],number:e["GroupingNumber"],courseID:e["CIID"]})})),t.groupTime=e.Datas[0]["GroupingNumber"],t.changeGroupTime(t.groupTime)):e.Info&&t.$toast(e.Info)})).catch((function(){}))},changeGroupTime:function(t){this.groupList=[],this.getGroupRank(t)},getGroupRank:function(t){var e=this;this.isLoading=!0,this.$mainHttp.group.dataRanking({ciID:this.courseID,number:t}).then((function(t){t.Result?t.Datas&&t.Datas.length>0&&(t.Datas.sort((function(t,e){return t["Ranking"]>e["Ranking"]?1:-1})),t.Datas.forEach((function(t){e.groupList.push({id:t["GroupID"],name:t["GroupName"],rank:t["Ranking"],goodTotal:t["TotalGood"],scoreTotal:t["TotalScore"]})}))):t.Info&&e.$toast(t.Info),e.isLoading=!1})).catch((function(){e.isLoading=!1}))},groupSelect:function(t){this.groupSelected=t,this.groupMember=[],this.getGroupMember(),this.dialogVisible=!0},getGroupMember:function(){var t=this;this.isLoading=!0,this.$mainHttp.group.memberRanking({groupID:this.groupSelected.id}).then((function(e){e.Result?e.Datas&&e.Datas.length>0&&(e.Datas.sort((function(t,e){return t["Ranking"]>e["Ranking"]?1:-1})),e.Datas.forEach((function(e){t.groupMember.push({name:e["StudentName"],isLeader:e["IsGroupLeader"],rank:e["Ranking"],goodTotal:e["TotalGood"],scoreTotal:e["TotalScore"]})}))):e.Info&&t.$toast(e.Info),t.isLoading=!1})).catch((function(){t.isLoading=!1}))}}},T=y,I=(n("eb49"),Object(l["a"])(T,D,L,!1,null,"215a7858",null)),C=I.exports,x={name:"course-record-view",components:{ScreenQuestion:d,RandomPerson:k,GroupRank:C},data:function(){return{courseID:this.$store.getters.courseID,courseInfo:this.$store.getters.course}}},S=x,R=(n("dbc0"),Object(l["a"])(S,a,s,!1,null,"4ac2d7c3",null));e["default"]=R.exports},dbc0:function(t,e,n){"use strict";var a=n("6235"),s=n.n(a);s.a},eb49:function(t,e,n){"use strict";var a=n("3cfa"),s=n.n(a);s.a}}]);
//# sourceMappingURL=chunk-9b99f64c.4a4d96fb.js.map