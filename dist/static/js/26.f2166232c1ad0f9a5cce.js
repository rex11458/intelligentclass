webpackJsonp([26],{CYbk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("WJbf");var s=a("OhwO"),i=a("XhFK"),n=a.n(i),o=a("FwVa"),c={name:"",components:{},props:{},data:function(){return{score:0,good:0,dataList:[],contentType:o.b.Text,contentTypeDefault:o.b.Text,content:"",imgBase:"",defaultPhotoImg:n.a,groupName:this.$route.params.name,imagePreview:null}},created:function(){this.getDataStatics(),this.getDataDetail()},methods:{preview:function(t){this.imagePreview=Object(s.a)({images:[t],showIndex:!1,onClose:function(){}})},getDataStatics:function(){var t=this,e={gsID:this.$route.params.id};this.$mainHttp.groupDiscussion.getStatistic(e).then(function(e){e.Result&&(e.TotalGood&&(t.good=e.TotalGood||0),e.TotalScore&&(t.score=e.TotalScore||0),e.Data&&(t.contentType=e.Data.GSForm,t.content=e.Data.GSContent))}).catch(function(t){})},getDataDetail:function(){var t=this;this.dataList=[];var e={gsid:this.$route.params.id};this.$mainHttp.groupDiscussion.getData(e).then(function(e){e.GAData.sort(function(t,e){return t.Key.SubmitTime<e.Key.SubmitTime?-1:1}),e.Result&&e.GAData&&e.GAData.length>0&&e.GAData.forEach(function(e){t.dataList.push(e)})}).catch(function(t){})},getDiscussionImage:function(t){return this.$mainHttp.resourse.picture(t,o.g.GroupSubject)},getImageFile:function(t){return this.$mainHttp.resourse.picture(t,o.g.GroupDiscuss)}},beforeDestroy:function(){this.imagePreview&&this.imagePreview.close()}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"group-discussion"},[a("head-top",{attrs:{title:t.groupName}},[a("router-link",{attrs:{to:"/history/teamRank/"+t.$route.params.id+"/"+t.$route.params.groupId+"/"+t.$route.params.name}},[a("i",{staticClass:"iconfont icon-chengyuan"})])],1),t._v(" "),a("div",{staticClass:"summary"},[a("div",[t._v("\n      得分数:\n      "),a("span",[t._v(t._s(t.score))])]),t._v(" "),a("div",[t._v("\n      点赞数:\n      "),a("span",[t._v(t._s(t.good))])])]),t._v(" "),a("div",{ref:"chat",staticClass:"chat"},[a("div",{staticClass:"chat_title"},[a("span",{staticClass:"chat_title_left"},[t._v("[论题]")]),t._v(" "),t.contentType===t.contentTypeDefault?a("span",[t._v(t._s(t.content))]):a("img",{style:{maxWidth:"70vw",maxHeight:"15rem"},attrs:{src:t.getDiscussionImage(t.content)},on:{click:function(e){t.preview(t.getDiscussionImage(t.content))}}})]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.dataList&&t.dataList.length>0,expression:"dataList && dataList.length>0"}],staticClass:"chat_content"},t._l(t.dataList,function(e,s){return a("div",{key:s,class:e.StudentID!==t.$store.getters.studentID?"chat_item left_item":"chat_item right_item"},[a("div",{staticClass:"chat_icon"},[a("img",{attrs:{src:t.defaultPhotoImg}})]),t._v(" "),a("div",{staticClass:"chat_news"},[a("div",{staticClass:"chat_news_name"},[t._v(t._s(e.StudentName))]),t._v(" "),a("div",{staticClass:"chat_news_cont"},[e.Key.GDForm===t.contentTypeDefault?a("span",[t._v(t._s(e.Key.GDContent))]):a("img",{attrs:{src:t.getImageFile(e.Key.GDContent),alt:""},on:{click:function(a){t.preview(t.getImageFile(e.Key.GDContent))}}})])])])}),0)])],1)},staticRenderFns:[]};var u=a("VU/8")(c,r,!1,function(t){a("MLfG")},"data-v-6b01069d",null);e.default=u.exports},MLfG:function(t,e){}});
//# sourceMappingURL=26.f2166232c1ad0f9a5cce.js.map