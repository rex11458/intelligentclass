webpackJsonp([55],{"4FFP":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("vIYX"),n=e("FwVa"),s={name:"",components:{RImageText:i.a},props:{},data:function(){return{dataList:[],isLoading:!1}},created:function(){},mounted:function(){var t=this;this.$nextTick(function(){t.getDataList()})},methods:{getDataList:function(){var t=this;this.isLoading=!0,this.dataList=[];var a={ciID:this.$store.getters.courseID};this.$mainHttp.boardNote.getList(a).then(function(a){a.Result&&a.Datas&&a.Datas.length>0&&a.Datas.forEach(function(a){t.dataList.push({img:t.$mainHttp.common.picture(a.BNContent,n.h.BoardNote),state:a.State,title:a.BNTitle,time:a.CreateTime,id:a.BNID,content:a.BNContent})}),t.isLoading=!1}).catch(function(){t.isLoading=!1})}}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"blackboardWriting"},[e("head-top",{attrs:{title:"板书"}}),t._v(" "),e("van-pull-refresh",{staticClass:"pull_fresh",on:{refresh:t.getDataList},model:{value:t.isLoading,callback:function(a){t.isLoading=a},expression:"isLoading"}},[t.dataList.length>0?e("r-image-text",{ref:"imageText",attrs:{"data-list":t.dataList}}):e("r-lack-data")],1)],1)},staticRenderFns:[]},r=e("VU/8")(s,o,!1,null,null,null);a.default=r.exports}});
//# sourceMappingURL=55.dd6933ccfd9adefed5e2.js.map