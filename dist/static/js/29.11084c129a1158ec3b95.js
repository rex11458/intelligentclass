webpackJsonp([29],{B3kZ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("bBUo"),i=n("FwVa"),o={name:"",components:{headTop:a.a},props:{},data:function(){return{title:this.$route.query.title||"",content:this.$route.query.content||"",contentType:this.$route.query.type||"",contentTypeDefault:i.b.Text,img:this.$route.query.img||""}},created:function(){},computed:{},watch:{},methods:{getImageFile:function(t){return this.$mainHttp.resourse.picture(t,i.g.StudentNote)}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"note-detail"}},[n("head-top",{attrs:{title:"笔记详情"}}),t._v(" "),n("div",{staticClass:"main"},[n("div",{staticClass:"tt"},[t._v(t._s(t.title||"缺少标题"))]),t._v(" "),t.contentType===t.contentTypeDefault?n("pre",{staticClass:"content"},[t._v(t._s(t.content||"缺少笔记信息"))]):n("img",{attrs:{src:t.getImageFile(t.content),alt:""}})])],1)},staticRenderFns:[]};var s=n("VU/8")(o,r,!1,function(t){n("hLYU")},"data-v-091cb8ea",null);e.default=s.exports},hLYU:function(t,e){}});
//# sourceMappingURL=29.11084c129a1158ec3b95.js.map