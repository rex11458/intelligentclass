webpackJsonp([24],{fInE:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("bBUo"),r=n("FwVa"),i={name:"",components:{headTop:a.a},props:{},data:function(){return{title:this.$route.query.title||"",content:this.$route.query.content||"",contentType:this.$route.query.type||"",contentTypeDefault:r.b.Text,img:this.$route.query.img||""}},created:function(){},computed:{},watch:{},methods:{getImageFile:function(t){return this.$gatewayHttp.resourse.picture(t,r.g.StudentNote)}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"note-detail"}},[n("head-top",{attrs:{title:"笔记详情"}}),t._v(" "),n("div",{staticClass:"main"},[n("div",{staticClass:"tt"},[t._v(t._s(t.title||"关于中美贸易战的影响"))]),t._v(" "),t.contentType===t.contentTypeDefault?n("pre",{staticClass:"content"},[t._v(t._s(t.content||"中美贸易战间接影响深远，摩根士丹利估计全球贸易可能受到严重破坏，因三分之二的贸易商品与全球价值链相关联。"))]):n("img",{attrs:{src:t.getImageFile(t.content),alt:""}})])],1)},staticRenderFns:[]};var s=n("VU/8")(i,o,!1,function(t){n("rWYq")},"data-v-46391a7e",null);e.default=s.exports},rWYq:function(t,e){}});
//# sourceMappingURL=24.5e9770df2b4593519a46.js.map