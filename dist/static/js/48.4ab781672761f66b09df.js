webpackJsonp([48],{"4FFP":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"",components:{RImageText:a("vIYX").a},props:{},data:function(){return{dataList:[],isLoading:!1}},created:function(){},mounted:function(){var t=this;this.$nextTick(function(){t.getDataList()})},methods:{getDataList:function(){var t=this;this.isLoading=!0,this.dataList=[];var e={ciID:this.$store.getters.courseID};this.$mainHttp.boardNote.getList(e).then(function(e){e.Result&&e.Datas&&e.Datas.length>0&&e.Datas.forEach(function(e){t.dataList.push({img:t.$mainHttp.resourse.picture(e.BNContent,4),state:e.State,title:e.BNTitle,time:e.CreateTime,id:e.BNID,content:e.BNContent})}),t.isLoading=!1}).catch(function(e){t.isLoading=!1})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blackboardWriting"},[a("head-top",{attrs:{title:"板书"}}),t._v(" "),a("van-pull-refresh",{staticClass:"pull_fresh",on:{refresh:t.getDataList},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[t.dataList.length>0?a("r-image-text",{ref:"imageText",attrs:{"data-list":t.dataList}}):a("r-lack-data")],1)],1)},staticRenderFns:[]},s=a("VU/8")(i,n,!1,null,null,null);e.default=s.exports}});
//# sourceMappingURL=48.4ab781672761f66b09df.js.map