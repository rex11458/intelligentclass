webpackJsonp([20],{"7tS/":function(t,e){},fInE:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("bBUo"),i=n("FwVa"),o={name:"",components:{headTop:a.a},props:{},data:function(){return{title:this.$route.query.title||"",content:this.$route.query.content||"",contentType:this.$route.query.type||"",contentTypeDefault:i.b.Text,img:this.$route.query.img||""}},created:function(){},computed:{},watch:{},methods:{getImageFile:function(t){return this.$gatewayHttp.resourse.picture(t,i.g.StudentNote)}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"note-detail"}},[n("head-top",{attrs:{title:"笔记详情"}}),t._v(" "),n("div",{staticClass:"main"},[n("div",{staticClass:"tt"},[t._v(t._s(t.title||"关于中美贸易战的影响"))]),t._v(" "),t.contentType===t.contentTypeDefault?n("pre",{staticClass:"content"},[t._v(t._s(t.content||"中美贸易战间接影响深远，摩根士丹利估计全球贸易可能受到严重破坏，因三分之二的贸易商品与全球价值链相关联。"))]):n("img",{attrs:{src:t.getImageFile(t.content),alt:""}})])],1)},staticRenderFns:[]};var s=n("VU/8")(o,r,!1,function(t){n("7tS/")},"data-v-50377ddc",null);e.default=s.exports}});
//# sourceMappingURL=20.422461f92ad980d1bf67.js.map