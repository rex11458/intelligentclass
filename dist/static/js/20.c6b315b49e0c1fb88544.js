webpackJsonp([20],{"/EMt":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("wH5m"),i=e("FwVa"),o=e("j/ZV"),a={name:"",components:{RImage:n.a},props:{},data:function(){return{defaultHead:e("iBUa"),total:0,contentType:i.b.Text,contentTypeDefault:i.b.Text,content:"",imgBase:"",showEdit:!1,discussionSubject:null,discussionContents:[]}},computed:{groupName:function(){return this.$store.getters.group&&this.$store.getters.group.groupName||"暂无组名"},score:function(){var t=0;return this.discussionContents.forEach(function(s){t+=s.GDScore}),t},good:function(){var t=0;return this.discussionContents.forEach(function(s){t+=s.GDGood?1:0}),t}},created:function(){this.getDataStatics(),this.getDataDetail()},mounted:function(){var t=this;this.$nextTick(function(){window.uploadImage=function(s){t.afterRead(s)}})},methods:{preview:function(t){this.$store.commit("SET_IMAGE_PREVIEW",t)},getDataStatics:function(){var t=this;this.$mainHttp.groupDiscussion.getStatisticByGroup({groupID:this.$store.getters.groupID}).then(function(s){s.Result&&(t.total=s.Total||0)}).catch(function(){})},getDataDetail:function(){var t=this;this.$mainHttp.groupDiscussion.getDataInfoByGroup({groupID:this.$store.getters.groupID}).then(function(s){s.Result&&s.Datas&&s.Datas.length>0&&(t.discussionSubject=s.Datas[0].Key,s.Datas[0].Value.sort(function(t,s){return t.SubmitTime<s.SubmitTime?-1:1}),s.Datas[0].Value.forEach(function(s){var e=t.discussionContents.findIndex(function(t){return t.GDID===s.GDID});-1===e?(t.discussionContents.push(s),t.$nextTick(function(){t.$refs.chat&&(t.$refs.chat.scrollTop=t.$refs.chat.scrollHeight,setTimeout(function(){t.$refs.chat.scrollTop=t.$refs.chat.scrollHeight},1e3))})):t.discussionContents.splice(e,1,s)}))}).catch(function(){})},dataAdd:function(){var t=this;this.content&&this.$mainHttp.groupDiscussion.postDataSave({ciID:this.$store.getters.courseID,gsID:this.discussionSubject.GSID,studentID:this.$store.getters.studentID,groupID:this.$store.getters.groupID,gdForm:this.contentType,gdContent:this.content}).then(function(s){s.Result?(t.content="",t.contentType=t.contentTypeDefault):s.Info&&t.$toast(s.Info)}).catch(function(){})},getDiscussionImage:function(t){return this.$mainHttp.common.picture(t,i.h.GroupSubject)},getImageFile:function(t){return this.$mainHttp.common.picture(t,i.h.GroupDiscuss)},selectPhoto:function(t){this.discussionSubject&&(2===t?Object(o.b)(o.a.cameraOpen,""):Object(o.b)(o.a.albumOpen,""))},afterRead:function(t){var s=this;if(console.log("接收到的base64：",t),t.length>20971520)return this.$toast("请上传小于20M的图片"),!1;if(t){var e={funType:i.h.GroupDiscuss,imgBaseString:t};this.$mainHttp.common.pictureUpload(e).then(function(e){e.Result&&(s.contentType=i.b.Picture,s.imgBase=t,s.content=e.Data,s.dataAdd())}).catch(function(){})}}},watch:{"$store.getters.groupDiscussion":function(t,s){t!==s&&(t.type===i.c.init?(this.getDataStatics(),this.getDataDetail(),this.discussionSubject=null,this.discussionContents=[]):t.type===i.c.newMsg?this.getDataDetail():t.type===i.c.good?this.getDataDetail():t.type===i.c.score&&this.getDataDetail())},discussionContents:function(t,s){var e=this;t.length!==s.length&&this.$nextTick(function(){e.$refs.chat.scrollTop=e.$refs.chat.scrollHeight,setTimeout(function(){e.$refs.chat.scrollTop=e.$refs.chat.scrollHeight},1e3)})}}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"group-discussion"}},[e("head-top",{attrs:{title:t.groupName}},[e("router-link",{staticClass:"head-right",attrs:{to:"/teamRank/"+(t.discussionSubject?t.discussionSubject.GSID:"")}},[e("i",{staticClass:"iconfont icon-chengyuan"})])],1),t._v(" "),e("div",{staticClass:"summary"},[e("div",[t._v("\n      论题:\n      "),e("span",[t._v(t._s(t.total))])]),t._v(" "),e("div",[t._v("\n      得分数:\n      "),e("span",[t._v(t._s(t.score))])]),t._v(" "),e("div",[t._v("\n      点赞数:\n      "),e("span",[t._v(t._s(t.good))])])]),t._v(" "),e("div",{ref:"chat",staticClass:"chat"},[t.discussionSubject?e("div",{staticClass:"chat_title"},[e("span",{staticClass:"chat_title_left"},[t._v("[论题]")]),t._v(" "),t.discussionSubject.GSForm===t.contentTypeDefault?e("span",[t._v(t._s(t.discussionSubject.GSContent))]):e("img",{style:{maxWidth:"70vw",maxHeight:"15rem"},attrs:{alt:"",src:t.getDiscussionImage(t.discussionSubject.GSContent)},on:{click:function(s){t.preview(t.getDiscussionImage(t.discussionSubject.GSContent))}}})]):t._e(),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.discussionContents&&t.discussionContents.length>0,expression:"discussionContents && discussionContents.length > 0"}],staticClass:"chat_content"},t._l(t.discussionContents,function(s,n){return e("div",{key:n,class:s.StudentID!==t.$store.getters.studentID?"chat_item left_item":"chat_item right_item"},[e("div",{staticClass:"chat_icon"},[e("img",{directives:[{name:"real-img",rawName:"v-real-img",value:[s.UserID,s.StudentID],expression:"[ sub['UserID'], sub['StudentID'] ]"}],attrs:{src:t.defaultHead,alt:""}})]),t._v(" "),e("div",{staticClass:"chat_news"},[e("div",{staticClass:"chat_news_name"},[t._v(t._s(s.StudentName))]),t._v(" "),e("div",{staticClass:"chat_news_cont"},[s.GDForm===t.contentTypeDefault?e("span",[t._v(t._s(s.GDContent))]):e("img",{attrs:{src:t.getImageFile(s.GDContent),alt:""},on:{click:function(e){t.preview(t.getImageFile(s.GDContent))}}}),t._v(" "),e("div",{staticClass:"chat_news_arrow"})])])])}),0)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.discussionSubject,expression:"discussionSubject"}],staticClass:"footer"},[e("div",{staticClass:"footer_text"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{type:"text",disabled:!t.discussionSubject,placeholder:"请输入讨论内容"},domProps:{value:t.content},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.dataAdd(s)},input:function(s){s.target.composing||(t.content=s.target.value)}}})]),t._v(" "),0===t.content.length?e("div",{staticClass:"icons"},[e("i",{staticClass:"iconfont icon-tupian",attrs:{disabled:!t.discussionSubject},on:{click:function(s){return t.selectPhoto(1)}}}),t._v(" "),e("i",{staticClass:"iconfont icon-photograph",attrs:{disabled:!t.discussionSubject},on:{click:function(s){return t.selectPhoto(2)}}})]):e("div",{staticClass:"icons"},[e("van-button",{attrs:{size:"small",type:"primary"},on:{click:t.dataAdd}},[t._v("发送")])],1)])],1)},staticRenderFns:[]};var u=e("VU/8")(a,c,!1,function(t){e("NnKI")},"data-v-31df97e0",null);s.default=u.exports},NnKI:function(t,s){},wH5m:function(t,s,e){"use strict";var n=e("SVYa");s.a=n.a}});
//# sourceMappingURL=20.c6b315b49e0c1fb88544.js.map