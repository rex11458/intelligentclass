(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da5ebd14"],{"0787":function(t,e,a){"use strict";var n=a("27f8"),r=a.n(n);r.a},"1af5":function(t,e,a){t.exports=a.p+"img/resources.791b09ea.png"},2760:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"course-vedio"},[a("head-top",{attrs:{title:t.title}}),a("PlayBox",{ref:"PlayBox",attrs:{Videos:t.videoSrc,SelectAble:!1,autoFull:!1,name:t.title},on:{"update:Videos":function(e){t.videoSrc=e},"update:videos":function(e){t.videoSrc=e}}}),a("van-tabs",{attrs:{sticky:"",color:"rgba(0, 203, 171, 1)",ellipsis:!1,"line-height":2,"title-active-color":"#00CBAB"},model:{value:t.tabSelected,callback:function(e){t.tabSelected=e},expression:"tabSelected"}},[a("van-tab",{attrs:{title:"简介"}}),a("van-tab",{attrs:{title:t.tabTitle,disabled:!(t.Rdata&&1===t.Rdata.ECAllowComment)}})],1),0==t.tabSelected?a("div",{staticClass:"Introduction"},[a("div",{staticClass:"first"},[a("p",[t._v(t._s(t.intro.Teachers)+"："+t._s(t.intro.ECTitle))]),a("p",[a("van-icon",{attrs:{name:"eye-o"}}),a("span",[t._v(t._s(t.intro.Visits)+"次播放 | "+t._s(t.intro.Discipline))])],1),a("p",[a("span",{class:{info:t.isactive}},[t._v(t._s(t.intro.Note))]),a("span",{staticStyle:{color:"#00CBAB",float:"right"},on:{click:t.expandA}},[t._v(t._s(t.expandText))])]),a("p",{attrs:{id:"slider-in"}}),a("van-pagination",{attrs:{"page-count":t.pageCount,"show-page-size":t.pageCount},on:{change:t.ChangePlay},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),a("div",{staticClass:"second"}),a("div",{staticClass:"third"},[a("div",{staticClass:"title"},[t._v("相关推荐")]),a("div",{staticClass:"img"},t._l(t.RelevantList,(function(e,n){return a("div",{key:n,on:{click:function(a){return t.ChangePlay(e)}}},[a("van-image",{staticClass:"course-img",attrs:{src:e.imgUrl,alt:"",width:"100%"},on:{click:function(a){return t.ToDetail(e.id)}}},[a("img",{staticStyle:{width:"100%"},attrs:{slot:"error",src:t.defaultBG},slot:"error"})]),a("p",[t._v(t._s(e.title))])],1)})),0)])]):t._e(),1==t.tabSelected?a("div",{staticClass:"comment"},[a("div",{staticClass:"title"},[t._v("全部评论")]),t._l(t.comment,(function(e,n){return a("div",{key:n,staticClass:"content"},[a("div",[a("div",{attrs:{name:"top"}},[a("van-image",{attrs:{round:"",width:"1rem",height:"1rem",src:e.advatar}},[a("img",{attrs:{slot:"error",src:t.defaultUrl,alt:""},slot:"error"})]),a("div",{staticStyle:{marginLeft:"0.2rem",color:"#999"}},[a("p",[t._v(t._s(e.UserName))]),a("p",[t._v(t._s(t._f("formatDateTime")(e.ECCTime)))])])],1),t.index!=n?a("div",{staticClass:"text isshow",domProps:{innerHTML:t._s(e.ECCContent)}}):t._e(),t.index==n?a("div",{staticClass:"text",domProps:{innerHTML:t._s(e.ECCContent)}}):t._e(),t.index!=n&&e.ex?a("div",{staticClass:"expand",on:{click:function(e){return t.expandB(n)}}},[t._v(" 全文 ")]):t._e(),t.index==n&&e.ex?a("div",{staticClass:"expand",on:{click:function(e){return t.expandB(-1)}}},[t._v(" 收起 ")]):t._e(),a("div",{staticStyle:{textAlign:"left",color:"#999",marginTop:"12px"}},[a("van-icon",{attrs:{name:"chat-o"},on:{click:function(a){return t.changeCommenter(e.ECCContent,e.UserName)}}},[t._v("回复")]),e.UserID==t.uid?a("van-icon",{attrs:{name:"delete"},on:{click:function(a){return t.DeleteCommenter(e.ECCID)}}},[t._v("删除")]):t._e()],1)])])}))],2):t._e(),a("div",{staticClass:"bottom-video"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentText,expression:"commentText"}],ref:"commentArea",attrs:{type:"text",disabled:!(t.Rdata&&1===t.Rdata.ECAllowComment)},domProps:{value:t.commentText},on:{input:function(e){e.target.composing||(t.commentText=e.target.value)}}}),t._v(" "),a("button",{attrs:{disabled:!(t.Rdata&&1===t.Rdata.ECAllowComment)},on:{click:t.addComment}},[t._v(" 发送 ")]),t._m(0),t.IsFav?a("div",{on:{click:t.RemoveFav}},[a("p",{staticClass:"iconfont icon-shoucang1",staticStyle:{color:"#FFAD32"}}),a("p",[t._v("已收藏")])]):a("div",{on:{click:t.AddFav}},[a("p",{staticClass:"iconfont icon-shoucang1"}),a("p",[t._v("收藏")])])])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"iconfont icon-fenxiang1"}),a("p",[t._v("分享")])])}],i=(a("99af"),a("4160"),a("baa5"),a("fb6a"),a("d3b7"),a("4d63"),a("ac1f"),a("25f0"),a("466d"),a("5319"),a("159b"),a("96cf"),a("1da1")),o=a("e64e"),c={components:{PlayBox:function(){return a.e("chunk-068158d6").then(a.bind(null,"2b22"))}},data:function(){return{currentPage:1,IsFav:!1,videoSrc:"",mCount:105,isactive:!0,isactive2:!0,expandText:"详情",tabOptions:[{title:"简介",value:0},{title:"评论",value:1}],tabSelected:0,commentText:"",index:-1,intro:{},comment:[],title:"",pageCount:1,RelevantList:[],defaultBG:a("1af5"),defaultUrl:a("90fb"),pageSize:100,page:0,ifSend:!1,Rdata:"",tabIndex:0,tabTitle:"",Pid:"",lastText:"",repley:!1,uid:""}},mounted:function(){this.pid=this.$route.params.id,this.LoadData(this.pid),this.LoadComments(),this.uid=this.$store.getters.userId},methods:{ChangePlay:function(){var t=this.intro.pathArry[this.currentPage-1];this.$refs.PlayBox.Pause(),this.videoSrc="http://".concat(this.$root.SrvConfigInfo.VODHost,":").concat(this.$root.SrvConfigInfo.VODPort,"/vod/").concat(t)},ToDetail:function(t){this.pid=t,this.LoadData(t),this.LoadComments()},expandA:function(){this.isactive=!this.isactive,this.isactive?this.expandText="详情":this.expandText="概略"},expandB:function(t){this.index=t},LoadData:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,r,i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$mainHttp.ElaborateCourses.GetData({ecid:t,updateVisits:!0});case 2:if(n=a.sent,n&&n.Data){if(e.Rdata=n.Data,e.IsFav=n.IsFav,n.Data.ECInfo)for(i in r=JSON.parse(n.Data.ECInfo),r)n.Data[i]=r[i];for(o in delete n.Data.ECInfo,n.Data)e.intro[o]=n.Data[o];e.LoadOther(t,e.intro.Teachers),e.title=e.intro.ECTitle,e.pageCount=n.Materials.length,e.intro.pathArry=[],n.Materials.forEach((function(t,a){e.intro.pathArry.push(t.MaterialStorePath),0===a&&(e.videoSrc="http://".concat(e.$root.SrvConfigInfo.VODHost,":").concat(e.$root.SrvConfigInfo.VODPort,"/vod/").concat(t.MaterialStorePath))}))}case 4:case"end":return a.stop()}}),a)})))()},LoadOther:function(t,e){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a.RelevantList=[],n.next=3,a.$mainHttp.ElaborateCourses.GetRelevantDatas({ecid:t,key:e,type:0});case 3:r=n.sent,r&&r.Datas&&(i=a.$mainHttp.common.downloadURL(),r.Datas.forEach((function(t,e){e<10&&(a.$set(t.Info,"ECInfo",JSON.parse(t.Info.ECInfo)),a.RelevantList.push({id:t.Info.ECID,imgUrl:"".concat(i,"?filename=").concat(t.MaterialID,"&fileType=9"),title:t.Info.ECTitle}))})));case 5:case"end":return n.stop()}}),n)})))()},LoadComments:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.comment=[],e.next=3,t.$mainHttp.ElaborateCourses.GetComments({ecid:t.pid,psize:t.pageSize,page:t.page});case 3:a=e.sent,a.Datas?(n=t.$mainHttp.common.downloadURL(),a.Datas.forEach((function(t){t.advatar="".concat(n,"?filename=").concat(t.UserID,"&fileType=1&platFormType=1&").concat(Math.random()),t.ECCContent=t.ECCContent.replace(RegExp("<br/><br/>","gm"),"<br/>"),t.ECCContent=Object(o["b"])(t.ECCContent);var e=t.ECCContent.match(/<br\/>/g);e&&e.length>5&&(t.ex=!0)})),t.comment=a.Datas,t.tabTitle="评论("+a.Datas.length+")"):t.tabTitle="评论(0)";case 5:case"end":return e.stop()}}),e)})))()},DeleteCommenter:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$mainHttp.ElaborateCourses.DelComment({eccid:t});case 2:n=a.sent,n&&e.LoadComments();case 4:case"end":return a.stop()}}),a)})))()},changeCommenter:function(t,e){this.lastText="回复@".concat(e,"：").concat(t),this.repley=!0,t=t.replace(/<span[^>]+>/g,"[符号表情]").replace(/<\/span>/g,""),t=t.replace(RegExp("<br/>","gm"),"\n"),this.commentText="回复@".concat(e,"：").concat(t," \n----------\n"),this.$refs["commentArea"].focus()},addComment:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commentText,t.repley&&(n=t.commentText.lastIndexOf("----------"),r=t.commentText.slice(n),a=t.lastText+"<br/>"+r),a=Object(o["d"])(a),!t.commentText){e.next=8;break}return e.next=6,t.$mainHttp.ElaborateCourses.AddComment({ecid:t.pid,content:a});case 6:i=e.sent,i&&t.LoadComments();case 8:t.repley=!1,t.commentText="";case 10:case"end":return e.stop()}}),e)})))()},AddFav:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$mainHttp.ElaborateCourses.AddFav({ecid:t.pid});case 2:a=e.sent,a&&(t.IsFav=!t.IsFav);case 4:case"end":return e.stop()}}),e)})))()},RemoveFav:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$mainHttp.ElaborateCourses.DelFav({ecfid:t.pid});case 2:a=e.sent,a&&(t.IsFav=!t.IsFav);case 4:case"end":return e.stop()}}),e)})))()}}},s=c,l=(a("0787"),a("2877")),u=Object(l["a"])(s,n,r,!1,null,null,null);e["default"]=u.exports},"27f8":function(t,e,a){},"90fb":function(t,e,a){t.exports=a.p+"img/default_head.3a6d99e8.png"},baa5:function(t,e,a){var n=a("23e7"),r=a("e58c");n({target:"Array",proto:!0,forced:r!==[].lastIndexOf},{lastIndexOf:r})},e64e:function(t,e,a){"use strict";a.d(e,"d",(function(){return n})),a.d(e,"b",(function(){return r})),a.d(e,"e",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return c}));a("4160"),a("a15b"),a("ac1f"),a("466d"),a("5319"),a("159b");function n(t){var e=/[\ud800-\udbff][\udc00-\udfff]/g;return t=t.replace(e,(function(t){var e,a,n;return 2===t.length?(e=t.charCodeAt(0),a=t.charCodeAt(1),n=1024*(e-55296)+65536+a-56320,"&#"+n+";"):t})),t}function r(t){for(var e,a,n,r=t,i=/&#\d+;/g,o=r.match(i)||[],c=0;c<o.length;c++){n=o[c],n=n.replace("&#","").replace(";",""),e=Math.floor((n-65536)/1024)+55296,a=(n-65536)%1024+56320,n="&#"+n+";";var s=String.fromCharCode(e,a);r.replace(n,s)}return r}function i(){for(var t=[],e="0123456789abcdef",a=0;a<32;a++)t[a]=e.substr(Math.floor(16*Math.random()),1);t[14]="4",t[19]=e.substr(3&t[19]|8,1);var n=t.join("");return n}function o(t,e,a){t.forEach((function(t){delete t.children}));var n={};t.forEach((function(t){n[t[e]]=t}));var r=[];return t.forEach((function(t){var e=n[t[a]];e?(e.children||(e.children=[])).push(t):r.push(t)})),r}function c(t){var e=new Date,a=e.getDay(),n=e.getDate(),r=e.getMonth(),i=a||7,o=new Date(e.getFullYear(),r,n+1-i),c=new Date(e.getFullYear(),r,n+7-i),s=new Date(e.getFullYear(),r,1),l=new Date(e.getFullYear(),r+1,1),u=(l-s)/864e5,d=new Date(e.getFullYear(),r,u),m=s,f=d;return"week"===t?[o,c]:"month"===t?[m,f]:void 0}}}]);