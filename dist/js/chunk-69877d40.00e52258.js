(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69877d40"],{"2e29":function(t,e,s){"use strict";var i=s("d893"),a=s.n(i);a.a},"4b5c":function(t,e,s){"use strict";var i=s("e3b0"),a=s.n(i);a.a},7076:function(t,e,s){},a434:function(t,e,s){"use strict";var i=s("23e7"),a=s("23cb"),n=s("a691"),c=s("50c4"),r=s("7b0b"),l=s("65f0"),o=s("8418"),u=s("1dde"),h=s("ae40"),d=u("splice"),f=h("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,m=Math.min,v=9007199254740991,I="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!d||!f},{splice:function(t,e){var s,i,u,h,d,f,g=r(this),S=c(g.length),D=a(t,S),b=arguments.length;if(0===b?s=i=0:1===b?(s=0,i=S-D):(s=b-2,i=m(p(n(e),0),S-D)),S+s-i>v)throw TypeError(I);for(u=l(g,i),h=0;h<i;h++)d=D+h,d in g&&o(u,h,g[d]);if(u.length=i,s<i){for(h=D;h<S-i;h++)d=h+i,f=h+s,d in g?g[f]=g[d]:delete g[f];for(h=S;h>S-i+s;h--)delete g[h-1]}else if(s>i)for(h=S-i;h>D;h--)d=h+i-1,f=h+s-1,d in g?g[f]=g[d]:delete g[f];for(h=0;h<s;h++)g[h+D]=arguments[h+2];return g.length=S-i+s,u}})},a9bc:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"prepare"},[s("head-top",{attrs:{title:"备课"}},[s("van-icon",{staticClass:"head-right",attrs:{name:"plus"},on:{click:t.toEdit}})],1),s("div",{staticClass:"prepare-main"},[0===t.activeIndex?s("course-ware",{ref:"courseWare",attrs:{"class-options":t.classOptions}}):1===t.activeIndex?s("class-practise",{ref:"classPractise",attrs:{"class-options":t.classOptions}}):s("group-discussion",{ref:"groupDiscussion"})],1),s("div",{staticClass:"footer"},[s("van-tabbar",{model:{value:t.activeIndex,callback:function(e){t.activeIndex=e},expression:"activeIndex"}},t._l(t.menus,(function(e,i){return s("van-tabbar-item",{key:i},[s("i",{staticClass:" iconfont",class:e.icon,attrs:{slot:"icon"},slot:"icon"}),s("span",[t._v(t._s(e.name))])])})),1)],1)],1)},a=[],n=(s("4160"),s("159b"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"prepare_course_ware"},[s("van-tabs",{on:{click:t.onClick}},t._l(t.list,(function(e,i){return s("van-tab",{key:i,attrs:{title:e.title}},[s("van-pull-refresh",{staticClass:"pull_fresh",on:{refresh:t.getCourseWareList},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[e.courseWareList&&e.courseWareList.length>0?s("van-cell-group",t._l(e.courseWareList,(function(e,i){return s("van-cell",{key:i,staticClass:"cell_main",scopedSlots:t._u([{key:"icon",fn:function(){return[s("van-icon",{staticClass:"cell_icon",attrs:{name:"description"}})]},proxy:!0},{key:"title",fn:function(){return[s("div",{staticClass:"line_title"},[t._v(t._s(e.name+"."+e.ext))])]},proxy:!0},{key:"label",fn:function(){return[s("div",{staticClass:"line_title"},[s("span",{staticClass:"space"},[t._v(t._s(e.createTime)+" ")]),1!==t.listSelectedIndex?s("van-tag",{directives:[{name:"show",rawName:"v-show",value:e.className,expression:"sub.className"}],staticClass:"space",attrs:{plain:"",type:"success"}},[t._v(" "+t._s(e.className)+" ")]):t._e(),e.size>1048576?s("span",[t._v(t._s(Math.round(e.size/1024/10.24)/100)+"MB")]):s("span",[t._v(t._s(Math.round(e.size/10.24)/100)+"KB")])],1)]},proxy:!0},{key:"right-icon",fn:function(){return[s("van-icon",{staticClass:"drop_icon",attrs:{name:"delete"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.toDrop(e)}}})]},proxy:!0}],null,!0)})})),1):s("r-lack-data")],1)],1)})),1),s("van-popup",{staticStyle:{height:"100%"},attrs:{position:"bottom",closeable:""},model:{value:t.editShow,callback:function(e){t.editShow=e},expression:"editShow"}},[s("div",{attrs:{id:"headTop"}},[s("span",{staticClass:"header_title"},[t._v("课件备课编辑")]),s("span",{staticClass:"head-back",on:{click:function(e){t.editShow=!1}}},[s("i",{staticClass:"iconfont icon-fanhui"})]),s("van-icon",{staticClass:"head-right",attrs:{name:"success"},on:{click:t.toSubmit}})],1),s("div",{staticClass:"popup-main"},[1!==t.listSelectedIndex?s("div",[s("div",{staticClass:"sub_nav"},[t._v(" 备课班级 ")]),s("van-field",{attrs:{readonly:"",clickable:"",name:"picker",value:t.classSelectedName,placeholder:"点击选择班级"},on:{click:function(e){t.showPicker=!0}}})],1):t._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:1===t.listSelectedIndex||t.classSelectedValue,expression:"listSelectedIndex===1 || classSelectedValue"}]},[s("div",{staticClass:"sub_nav"},[t._v(" 备课课件 ")]),s("van-checkbox-group",{staticStyle:{"text-align":"left"},model:{value:t.materialSelected,callback:function(e){t.materialSelected=e},expression:"materialSelected"}},[s("van-cell-group",t._l(t.materialList,(function(e,i){return s("van-cell",{key:i,attrs:{title:e.name+"."+e.ext,clickable:""},on:{click:function(s){return t.materialCheck(e)}}},[s("van-checkbox",{attrs:{slot:"right-icon",sharp:"square",name:e.materialID,disabled:t.unSelectList.indexOf(e.materialID)>-1},slot:"right-icon"})],1)})),1)],1)],1)])]),s("van-popup",{attrs:{position:"bottom"},model:{value:t.showPicker,callback:function(e){t.showPicker=e},expression:"showPicker"}},[s("van-picker",{attrs:{"show-toolbar":"",columns:t.classOptions},on:{confirm:t.changeClass,cancel:function(e){t.showPicker=!1}}})],1)],1)}),c=[],r=(s("4de4"),s("c740"),s("c975"),s("a15b"),s("d81d"),s("fb6a"),s("a434"),s("1e55")),l=s("6828"),o=s("bc3a"),u=s.n(o),h={name:"course-ware",props:{classOptions:{type:Array,default:function(){return[]}}},data:function(){return{subjectID:this.$store.getters.subjectID,classHourID:this.$store.getters.classHourID||"",classHour:this.$store.getters.classHour,list:[{title:"课前",attribute:1,courseWareList:[]},{title:"课中",attribute:2,courseWareList:[]},{title:"课后",attribute:3,courseWareList:[]}],listSelectedIndex:0,editShow:!1,classSelectedName:"",classSelectedValue:"",materialList:[],showPicker:!1,materialSelected:[],oldMaterialSelected:[],isLoading:!1}},computed:{unSelectList:function(){return[]}},mounted:function(){this.getMaterialList(),this.getCourseWareList()},methods:{onClick:function(t){this.listSelectedIndex=t,this.getCourseWareList()},getCourseWareList:function(){var t=this,e=this.list[this.listSelectedIndex];e.courseWareList=[],this.isLoading=!0,this.$mainHttp.courseWare.dataList({chID:this.classHourID,attribute:this.list[this.listSelectedIndex].attribute}).then((function(s){s.Result?(s.Datas.sort((function(t,e){return t["CreateTime"]>e["CreateTime"]?-1:1})),s.Datas.forEach((function(t){e.courseWareList.push({name:t["MaterialName"],createTime:Object(l["a"])(t.Key["CreateTime"],"yyyy-MM-dd"),ext:t["MaterialFileExt"],size:t["MaterialFileSize"],id:t.Key["CID"],materialID:t.Key["MaterialID"],classID:t["ClassID"],className:t["ClassName"]})}))):s.Info&&t.$toast(s.Info),t.isLoading=!1})).catch((function(){t.isLoading=!1}))},getMaterialList:function(){var t=this;this.materialList=[],this.$mainHttp.courseWare.materialList({token:this.$store.getters.token}).then((function(e){e.Result&&e.Datas&&e.Datas.length>0?e.Datas.forEach((function(e){t.materialList.push({name:e["MaterialName"],materialID:e["MaterialID"],size:e["MaterialFileSize"],ext:e["MaterialFileExt"]})})):e.Info&&t.$toast(e.Info)})).catch((function(){}))},toDrop:function(t){var e=this;r["Dialog"].confirm({message:"确认移除当前课件？"}).then((function(){e.toDelete(t)})).catch((function(){}))},toDelete:function(t){var e=this;this.$mainHttp.courseWare.dataDelete({ids:t.id,classID:1!==this.listSelectedIndex?t.classID:this.classOptions.map((function(t){return t.value})).join(",")}).then((function(t){t.Result?(e.$toast("移除成功"),e.getCourseWareList()):t.Info?e.$toast(t.Info):e.$toast("移除失败")})).catch((function(){e.$toast("操作异常")}))},toEdit:function(){this.editShow=!0,this.classSelectedName="",this.classSelectedValue="",this.materialSelected=[],this.oldMaterialSelected=[],1===this.listSelectedIndex&&(this.materialSelected=this.list[1].courseWareList.map((function(t){return t.materialID})),this.oldMaterialSelected=this.materialSelected.slice(0,this.materialSelected.length))},getBeforeOrAfter:function(){var t=this;if(1!==this.listSelectedIndex){var e=Math.abs(this.listSelectedIndex-2);if(0===this.list[e].courseWareList.length){var s=this.list[e];s.courseWareList=[],this.$mainHttp.courseWare.dataList({chID:this.classHourID,attribute:s.attribute}).then((function(e){e.Result?(e.Datas.sort((function(t,e){return t["CreateTime"]>e["CreateTime"]?-1:1})),e.Datas.forEach((function(t){s.courseWareList.push({name:t["MaterialName"],createTime:Object(l["a"])(t.Key["CreateTime"],"yyyy-MM-dd"),ext:t["MaterialFileExt"],size:t["MaterialFileSize"],id:t.Key["CID"],materialID:t.Key["MaterialID"],classID:t["ClassID"],className:t["ClassName"]})}))):e.Info&&t.$toast(e.Info)})).catch((function(){}))}}},changeClass:function(t){var e=this;this.classSelectedName=t.text,this.classSelectedValue=t.value,this.materialSelected=[],this.oldMaterialSelected=[],this.materialSelected=this.list[this.listSelectedIndex].courseWareList.filter((function(t){return t.classID===e.classSelectedValue})).map((function(t){return t.materialID})),this.oldMaterialSelected=this.materialSelected.slice(0,this.materialSelected.length),this.showPicker=!1},materialCheck:function(t){if(!(this.unSelectList.indexOf(t.materialID)>-1)){var e=this.materialSelected.findIndex((function(e){return e===t.materialID}));e>-1?this.materialSelected.splice(e,1):this.materialSelected.push(t.materialID)}},toSubmit:function(){var t=this;if(1!==this.listSelectedIndex&&!this.classSelectedValue)return this.$toast.fail("请先选择班级"),!1;var e=this.materialSelected.filter((function(e){return-1===t.oldMaterialSelected.indexOf(e)})),s=this.oldMaterialSelected.filter((function(e){return-1===t.materialSelected.indexOf(e)})),i=[];if(e.length>0&&i.push(this.$mainHttp.courseWare.dataAdd({chID:this.classHourID,materialIDs:e.join(","),attribute:this.list[this.listSelectedIndex].attribute,classID:1!==this.listSelectedIndex?this.classSelectedValue:this.classOptions.map((function(t){return t.value})).join(",")})),s.length>0){var a=[];a=1===this.listSelectedIndex?this.list[1].courseWareList.map((function(t){if(s.indexOf(t.materialID)>-1)return t.id})):this.list[this.listSelectedIndex].courseWareList.filter((function(e){return e.classID===t.classSelectedValue})).map((function(t){if(s.indexOf(t.materialID)>-1)return t.id})),i.push(this.$mainHttp.courseWare.dataDelete({ids:a.join(","),classID:1!==this.listSelectedIndex?this.classSelectedValue:this.classOptions.map((function(t){return t.value})).join(",")}))}i.length>0?u.a.all(i).then(u.a.spread((function(){for(var e=[],s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];i.forEach((function(t,s){t.Result||e.push(s)})),0===e.length?(t.$toast("操作成功"),t.getCourseWareList(),t.editShow=!1):1===e.length&&e.length<i.length?(t.$toast("部分操作未保存成功，请重试"),t.getCourseWareList(),t.editShow=!1):t.$toast("操作失败！")}))):this.editShow=!1}}},d=h,f=(s("c3f7"),s("2877")),p=Object(f["a"])(d,n,c,!1,null,"623d1858",null),m=p.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"prepare_class_practise"},[s("van-tabs",{on:{click:t.onClick}},t._l(t.list,(function(e,i){return s("van-tab",{key:i,attrs:{title:e.title}},[s("van-pull-refresh",{staticClass:"pull_fresh",on:{refresh:t.getPractiseList},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[e.practiseList&&e.practiseList.length>0?s("van-cell-group",t._l(e.practiseList,(function(e,a){return s("van-cell",{key:a,staticClass:"cell_main",scopedSlots:t._u([{key:"icon",fn:function(){return[s("van-icon",{staticClass:"cell_icon",attrs:{name:"description"}})]},proxy:!0},{key:"title",fn:function(){return[s("div",{staticClass:"line_title"},[t._v(t._s(e.name))])]},proxy:!0},{key:"label",fn:function(){return[s("div",{staticClass:"line_title"},[s("span",{staticClass:"space"},[t._v(t._s(e.createTime)+" ")]),s("van-tag",{directives:[{name:"show",rawName:"v-show",value:1!==i,expression:"index !== 1"}],staticClass:"space",attrs:{plain:"",type:"success"}},[t._v(t._s(e.className))])],1)]},proxy:!0},{key:"right-icon",fn:function(){return[s("van-icon",{staticClass:"drop_icon",attrs:{name:"delete"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.toDrop(e)}}})]},proxy:!0}],null,!0)})})),1):s("r-lack-data")],1)],1)})),1),s("van-popup",{staticStyle:{height:"100%"},attrs:{position:"bottom",closeable:""},model:{value:t.editShow,callback:function(e){t.editShow=e},expression:"editShow"}},[s("div",{attrs:{id:"headTop"}},[s("span",{staticClass:"header_title"},[t._v("随堂练习备课编辑")]),s("span",{staticClass:"head-back",on:{click:function(e){t.editShow=!1}}},[s("i",{staticClass:"iconfont icon-fanhui"})]),s("van-icon",{staticClass:"head-right",attrs:{name:"success"},on:{click:t.toSubmit}})],1),s("div",{staticClass:"popup-main"},[s("div",[s("div",{staticClass:"sub_nav"},[t._v(" 题库选择 ")]),s("van-field",{attrs:{readonly:"",clickable:"",name:"picker",value:t.practiseSelectedName,placeholder:"点击选择题库"},on:{click:function(e){t.showPicker=!0}}})],1),1!==t.listSelectedIndex?s("div",[s("div",{staticClass:"sub_nav"},[t._v(" 班级选择 ")]),s("van-checkbox-group",{staticStyle:{"text-align":"left"},model:{value:t.classSelected,callback:function(e){t.classSelected=e},expression:"classSelected"}},[s("van-cell-group",t._l(t.classOptions,(function(e,i){return s("van-cell",{key:i,attrs:{title:e.text,clickable:""},on:{click:function(s){return t.classCheck(e)}}},[s("van-checkbox",{attrs:{slot:"right-icon",sharp:"square",name:e.value},slot:"right-icon"})],1)})),1)],1)],1):t._e()])]),s("van-popup",{attrs:{position:"bottom"},model:{value:t.showPicker,callback:function(e){t.showPicker=e},expression:"showPicker"}},[s("van-picker",{attrs:{"show-toolbar":"",columns:t.practiseList},on:{confirm:t.changePractise,cancel:function(e){t.showPicker=!1}}})],1)],1)},I=[],g=(s("ac1f"),s("1276"),{name:"class_practise",props:{classOptions:{type:Array,default:function(){return[]}}},data:function(){return{subjectID:this.$store.getters.subjectID,classHourID:this.$store.getters.classHourID||"",classHour:this.$store.getters.classHour,list:[{title:"课前",attribute:1,practiseList:[]},{title:"课中",attribute:2,practiseList:[]},{title:"课后",attribute:3,practiseList:[]}],listSelectedIndex:0,editShow:!1,selectedTaskID:"",classSelected:[],practiseOptions:[],practiseSelectedName:"",practiseSelectedValue:"",practiseLibraryList:[],showPicker:!1,isLoading:!1}},computed:{practiseList:function(){return this.practiseOptions.filter((function(t){return!t.disabled}))}},mounted:function(){this.getPractiseLibraryList(),this.getPractiseList()},methods:{onClick:function(t){this.listSelectedIndex=t,this.getPractiseList()},getPractiseList:function(){var t=this,e=this.list[this.listSelectedIndex];e.practiseList=[],this.isLoading=!0,this.$mainHttp.classPractise.dataList({chID:this.classHourID,attribute:this.list[this.listSelectedIndex].attribute}).then((function(s){s.Result?(s.Datas.sort((function(t,e){return t["CreateTime"]>e["CreateTime"]?-1:1})),s.Datas.forEach((function(t){e.practiseList.push({name:t["Title"],createTime:Object(l["a"])(t.Datas["CreateTime"],"yyyy-MM-dd"),id:t.Datas["CPID"],taskId:t["CIPID"],libraryID:t.Datas["PLID"],classID:t["ClassID"].split(","),className:t["ClassName"]})}))):s.Info&&t.$toast(s.Info),t.isLoading=!1})).catch((function(){t.isLoading=!1}))},getPractiseLibraryList:function(){var t=this;this.practiseLibraryList=[],this.$mainHttp.classPractise.LibraryList({token:this.$store.getters.token}).then((function(e){e.Result&&e.Datas&&e.Datas.length>0?e.Datas.forEach((function(e){t.practiseLibraryList.push({text:e["PLTitle"],value:e["PLID"],createTime:Object(l["a"])(e["CreateTime"],"yyyy-MM-dd")})})):e.Info&&t.$toast(e.Info)})).catch((function(){}))},toDrop:function(t){var e=this;r["Dialog"].confirm({message:"确认移除该练习？"}).then((function(){e.toDelete(t)})).catch((function(){}))},toDelete:function(t){var e=this;this.$mainHttp.classPractise.dataDelete({ids:t.id}).then((function(t){t.Result?(e.$toast("移除成功"),e.getPractiseList()):t.Info?e.$toast(t.Info):e.$toast("移除失败")})).catch((function(){e.$toast("操作异常")}))},toEdit:function(){this.practiseSelectedName="",this.practiseSelectedValue="",this.editShow=!0,this.classSelected=[],this.practiseOptions=[],this.practiseOptions=this.practiseLibraryList.slice(0,this.practiseLibraryList.length);var t=[];this.list.forEach((function(e){e.practiseList.forEach((function(e){t.push(e.libraryID)}))})),this.practiseOptions.forEach((function(e){e.disabled=t.indexOf(e.value)>-1}))},changePractise:function(t){this.practiseSelectedName=t.text,this.practiseSelectedValue=t.value,this.showPicker=!1},classCheck:function(t){var e=this.classSelected.findIndex((function(e){return e===t.value}));e>-1?this.classSelected.splice(e,1):this.classSelected.push(t.value)},toSubmit:function(){var t=this;if(!this.practiseSelectedValue)return this.$toast.fail("请选择题库"),!1;if(1!==this.listSelectedIndex&&0===this.classSelected.length)return this.$toast.fail("请选择布置班级"),!1;var e={cpID:this.selectedTaskID,chID:this.classHourID,plID:this.practiseSelectedValue,attribute:this.list[this.listSelectedIndex].attribute};1!==this.listSelectedIndex&&(e.classID=this.classSelected.join(",")),this.$mainHttp.classPractise.dataAdd(e).then((function(e){e.Result?(t.$toast("保存成功"),t.getPractiseList(),t.editShow=!1):e.Info?t.$toast(e.Info):t.$toast("保存失败")})).catch((function(){t.$toast("操作失败")}))}}}),S=g,D=(s("2e29"),Object(f["a"])(S,v,I,!1,null,"72a19c33",null)),b=D.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"prepare_group_discussion"},[s("van-pull-refresh",{staticClass:"pull_fresh",on:{refresh:t.getGroupDiscussionList},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[t.groupDiscussionList&&t.groupDiscussionList.length>0?s("van-cell-group",t._l(t.groupDiscussionList,(function(e,i){return s("van-cell",{key:i,staticClass:"cell_main",attrs:{title:e.title,label:e.createTime},scopedSlots:t._u([{key:"right-icon",fn:function(){return[s("van-icon",{staticClass:"drop_icon",attrs:{name:"delete"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.toDrop(e)}}})]},proxy:!0}],null,!0)})})),1):s("r-lack-data")],1),s("van-popup",{attrs:{position:"bottom",closeable:""},model:{value:t.editShow,callback:function(e){t.editShow=e},expression:"editShow"}},[s("div",{staticClass:"sub_nav"},[s("span",[t._v("小组讨论编辑")])]),s("van-field",{attrs:{rows:"2",label:"",type:"textarea",maxlength:"500",placeholder:"请输入课题",autofocus:"",autosize:"","show-word-limit":"",rules:[{required:!0,message:"请填写讨论课题"}]},model:{value:t.discussContent,callback:function(e){t.discussContent=e},expression:"discussContent"}}),s("van-button",{staticStyle:{width:"100%"},attrs:{type:"info"},on:{click:t.toSubmit}},[t._v("确定")])],1)],1)},C=[],k={name:"group_discussion",data:function(){return{subjectID:this.$store.getters.subjectID,classHourID:this.$store.getters.classHourID||"",classHour:this.$store.getters.classHour,groupDiscussionList:[],discussContent:"",editShow:!1,isLoading:!1}},mounted:function(){this.getGroupDiscussionList()},methods:{getGroupDiscussionList:function(){var t=this;this.groupDiscussionList=[],this.isLoading=!0,this.$mainHttp.prepareGroupSubject.dataList({CHID:this.classHourID}).then((function(e){e.Result?(e.Datas.sort((function(t,e){return t["CreateTime"]>e["CreateTime"]?-1:1})),e.Datas.forEach((function(e){t.groupDiscussionList.push({title:e["PGSContent"],createTime:Object(l["a"])(e["CreateTime"],"yyyy-MM-dd"),other:e["PGSTime"],id:e["PGSID"]})}))):e.Info&&t.$toast(e.Info),t.isLoading=!1})).catch((function(){t.isLoading=!1}))},toEdit:function(){this.discussContent="",this.editShow=!0},toDrop:function(t){var e=this;r["Dialog"].confirm({message:"确认删除当前讨论课题？"}).then((function(){e.toDelete(t)})).catch((function(){}))},toDelete:function(t){var e=this;this.$mainHttp.prepareGroupSubject.dataDelete({ids:t.id}).then((function(t){t.Result?(e.getGroupDiscussionList(),e.$toast("删除成功")):t.Info?e.$toast(t.Info):e.$toast("删除失败")})).catch((function(){e.$toast("操作失败")}))},toSubmit:function(){var t=this;if(!this.discussContent)return this.$toast.fail("请填写讨论课题 "),!1;this.$mainHttp.prepareGroupSubject.dataAdd({pgsID:"",CHID:this.classHourID,pgsContent:this.discussContent,pgsTime:0}).then((function(e){e.Result?(t.$toast("保存成功"),t.getGroupDiscussionList(),t.editShow=!1):e.Info?t.$toast(e.Info):t.$toast("保存失败")})).catch((function(){t.$toast("操作失败")}))}}},x=k,y=Object(f["a"])(x,L,C,!1,null,null,null),_=y.exports,$={name:"prepare",components:{CourseWare:m,ClassPractise:b,GroupDiscussion:_},data:function(){return{subjectID:this.$store.getters.subjectID,classOptions:[],activeIndex:0,menus:[{name:"课件",icon:"icon-kejian"},{name:"随堂练习",icon:"icon-edu-biji"},{name:"小组讨论",icon:"icon-taolun"}]}},created:function(){this.searchClassData()},methods:{toEdit:function(){switch(this.activeIndex){case 0:this.$refs["courseWare"].toEdit();break;case 1:this.$refs["classPractise"].toEdit();break;case 2:this.$refs["groupDiscussion"].toEdit();break}},searchClassData:function(){var t=this;this.classOptions=[],this.$mainHttp.class.dataList({courseID:this.subjectID}).then((function(e){e.Result&&e.Datas&&e.Datas.length>0?(e.Datas.sort((function(t){return t["CreateTime"]})).reverse(),e.Datas.forEach((function(e){t.classOptions.push({text:e.Key["ClassName"],value:e.Key["ClassID"]})}))):e.Info&&t.$toast(e.Info)})).catch((function(){}))}}},w=$,P=(s("4b5c"),Object(f["a"])(w,i,a,!1,null,"93ab47ee",null));e["default"]=P.exports},c3f7:function(t,e,s){"use strict";var i=s("7076"),a=s.n(i);a.a},d81d:function(t,e,s){"use strict";var i=s("23e7"),a=s("b727").map,n=s("1dde"),c=s("ae40"),r=n("map"),l=c("map");i({target:"Array",proto:!0,forced:!r||!l},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},d893:function(t,e,s){},e3b0:function(t,e,s){}}]);