webpackJsonp([29],{"/EMt":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i=s("mvHQ"),o=s.n(i),a=(s("WJbf"),s("OhwO")),c=s("bOdI"),u=s.n(c),r=(s("mMXg"),s("qYlo")),l=(s("3Lne"),s("SSsa")),d=s("bBUo"),h=s("1wEQ"),g=s("XhFK"),p=s.n(g),f=s("FwVa"),v=s("j/ZV"),m={name:"",components:(n={headTop:d.a,RImage:h.a},u()(n,l.a.name,l.a),u()(n,r.a.name,r.a),n),props:{},data:function(){return{score:0,total:0,good:0,contentType:f.b.Text,contentTypeDefault:f.b.Text,content:"",imgBase:"",defaultPhotoImg:p.a,groupName:this.$store.getters.group&&this.$store.getters.group.groupName||"暂无组名",showEdit:!1,imagePreview:null,discussionSubject:null,discussionContents:[]}},created:function(){this.getDataStatics(),this.getDataDetail()},mounted:function(){var t=this;this.$nextTick(function(){window.uploadImage=function(e){t.afterRead(e)}})},methods:{preview:function(t){this.imagePreview=Object(a.a)({images:[t],showIndex:!1,onClose:function(){}})},getDataStatics:function(){var t=this;this.$gatewayHttp.groupDiscussion.getStatistic({groupID:this.$store.getters.groupID}).then(function(e){e.Result&&(t.score=e.Score||0,t.total=e.Total||0,t.good=e.Good||0)}).catch(function(t){})},getDataDetail:function(){var t=this;this.$gatewayHttp.groupDiscussion.getList({groupID:this.$store.getters.groupID}).then(function(e){e.Result&&e.Datas&&e.Datas.length>0&&(t.discussionSubject=e.Datas[0].Key,e.Datas[0].Value.sort(function(t){return t.SubmitTime}).reverse(),e.Datas[0].Value.forEach(function(e){-1===t.discussionContents.findIndex(function(t){return o()(t)===o()(e)})&&t.discussionContents.push(e),t.$nextTick(function(){t.$refs.chat.scrollTop=t.$refs.chat.scrollHeight,setTimeout(function(){t.$refs.chat.scrollTop=t.$refs.chat.scrollHeight},1e3)})}))}).catch(function(t){})},dataAdd:function(){var t=this;this.content&&this.$gatewayHttp.groupDiscussion.postDataSave({gsid:this.discussionSubject.GSID,studentID:this.$store.getters.studentID,groupID:this.$store.getters.groupID,gdForm:this.contentType,gdContent:this.content}).then(function(e){e.Result?(t.content="",t.contentType=t.contentTypeDefault):e.Info&&t.$toast(e.Info)}).catch(function(t){})},getDiscussionImage:function(t){return this.$gatewayHttp.resourse.picture(t,f.g.GroupSubject)},getImageFile:function(t){return this.$gatewayHttp.resourse.picture(t,f.g.GroupDiscuss)},selectPhoto:function(t){this.discussionSubject&&(2===t?Object(v.b)(v.a.cameraOpen,""):Object(v.b)(v.a.albumOpen,""))},afterRead:function(t){var e=this;if(console.log("接收到的base64：",t),t.length>20971520)return this.$toast("请上传小于20M的图片"),!1;if(t){var s={funType:f.g.GroupDiscuss,imgBaseString:t};this.$gatewayHttp.resourse.upload(s).then(function(s){s.Result&&(e.contentType=f.b.Picture,e.imgBase=t,e.content=s.Data,e.dataAdd())}).catch(function(t){})}}},computed:{},watch:{"$store.getters.groupDiscussion":function(t,e){t!==e&&(t.type===f.c.init?(this.getDataStatics(),this.getDataDetail(),this.discussionSubject=null,this.discussionContents=[]):t.type===f.c.newMsg?this.getDataDetail():t.type===f.c.good?this.good+=t.value.IsGood?1:-1:t.type===f.c.score&&(this.score+=t.value.IsAdd?1:-1))},discussionContents:function(t,e){var s=this;this.$nextTick(function(){s.$refs.chat.scrollTop=s.$refs.chat.scrollHeight,setTimeout(function(){s.$refs.chat.scrollTop=s.$refs.chat.scrollHeight},1e3)})}},beforeDestroy:function(){this.imagePreview&&this.imagePreview.close()}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"group-discussion"}},[s("head-top",{attrs:{title:t.groupName}},[s("router-link",{attrs:{to:"/teamRank"}},[s("i",{staticClass:"iconfont iconchengyuan"})])],1),t._v(" "),s("div",{staticClass:"summary"},[s("div",[t._v("\n      论题:\n      "),s("span",[t._v(t._s(t.total))])]),t._v(" "),s("div",[t._v("\n      得分数:\n      "),s("span",[t._v(t._s(t.score))])]),t._v(" "),s("div",[t._v("\n      点赞数:\n      "),s("span",[t._v(t._s(t.good))])])]),t._v(" "),s("div",{ref:"chat",staticClass:"chat"},[t.discussionSubject?s("div",{staticClass:"chat_title"},[s("span",{staticClass:"chat_title_left"},[t._v("[论题]")]),t._v(" "),t.discussionSubject.GSForm===t.contentTypeDefault?s("span",[t._v(t._s(t.discussionSubject.GSContent))]):s("img",{style:{maxWidth:"70vw",maxHeight:"15rem"},attrs:{src:t.getDiscussionImage(t.discussionSubject.GSContent)},on:{click:function(e){t.preview(t.getDiscussionImage(t.discussionSubject.GSContent))}}})]):t._e(),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.discussionContents&&t.discussionContents.length>0,expression:"discussionContents && discussionContents.length>0"}],staticClass:"chat_content"},t._l(t.discussionContents,function(e,n){return s("div",{key:n,class:e.StudentID!==t.$store.getters.studentID?"chat_item left_item":"chat_item right_item"},[s("div",{staticClass:"chat_icon"},[s("img",{attrs:{src:t.defaultPhotoImg}})]),t._v(" "),s("div",{staticClass:"chat_news"},[s("div",{staticClass:"chat_news_name"},[t._v(t._s(e.StudentName))]),t._v(" "),s("div",{staticClass:"chat_news_cont"},[e.GDForm===t.contentTypeDefault?s("span",[t._v(t._s(e.GDContent))]):s("img",{attrs:{src:t.getImageFile(e.GDContent),alt:""},on:{click:function(s){t.preview(t.getImageFile(e.GDContent))}}})])])])}),0)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.discussionSubject,expression:"discussionSubject"}],staticClass:"footer"},[s("div",{staticClass:"footer_text"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{type:"text",disabled:!t.discussionSubject,placeholder:"请输入讨论内容"},domProps:{value:t.content},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.dataAdd(e)},input:function(e){e.target.composing||(t.content=e.target.value)}}})]),t._v(" "),0===t.content.length?s("div",{staticClass:"icons"},[s("i",{staticClass:"iconfont icontupian",attrs:{disabled:!t.discussionSubject},on:{click:function(e){return t.selectPhoto(1)}}}),t._v(" "),s("i",{staticClass:"iconfont iconphotograph",attrs:{disabled:!t.discussionSubject},on:{click:function(e){return t.selectPhoto(2)}}})]):s("div",{staticClass:"icons"},[s("van-button",{attrs:{size:"small",type:"primary"},on:{click:t.dataAdd}},[t._v("发送")])],1)])],1)},staticRenderFns:[]};var D=s("VU/8")(m,_,!1,function(t){s("Ih2C")},"data-v-2c753046",null);e.default=D.exports},Ih2C:function(t,e){}});
//# sourceMappingURL=29.48c9f0a3a528cbc1ccc4.js.map