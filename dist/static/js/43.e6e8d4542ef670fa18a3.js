webpackJsonp([43],{"5y5X":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("bOdI"),n=i.n(a),s=(i("XmAh"),i("il3B")),o=i("aXZl"),r=i("UN56"),c=i("FwVa"),l={name:"",components:n()({NoteList:o.a,RQuillEditor:r.a},s.a.Component.name,s.a.Component),props:{},data:function(){return{isLoading:!1,dataList:[],form:{CIID:this.$store.getters.courseID,studentID:this.$store.getters.studentID},error:!1,finished:!1,pno:0,pageSize:100,total:0,funType:c.g.StudentNote,value:""}},created:function(){},mounted:function(){var t=this;this.$nextTick(function(){t.onSearch()})},methods:{getDataList:function(){var t=this;if(this.isLoading=!0,!(0===this.pno||this.total>this.pno*this.pageSize))return this.isLoading=!1,void(this.finished=!0);this.pno++;var e={CIID:this.form.CIID,studentID:this.$store.getters.studentID,psize:this.pageSize,pno:this.pno};this.$gatewayHttp.note.getList(e).then(function(e){e.Result&&e.Datas&&e.Datas.length>0&&(e.Datas.sort(function(t,e){return t.CreateTime>e.CreateTime?-1:1}),e.Datas.forEach(function(e){t.dataList.push(e)})),e.RowsCount&&(t.total=e.RowsCount),t.total<=t.pno*t.pageSize&&(t.finished=!0),t.isLoading=!1}).catch(function(e){t.error=!0,t.isLoading=!1}),this.$store.commit("SET_NOTEREFRESH",!1)},showDetail:function(t){this.$router.push({path:"/noteDetail",query:{title:t.SNTtile,content:t.SNContent,createTime:t.CreateTime}})},dataDelete:function(t,e){var i=this;t.stopPropagation(),s.a.confirm({message:"确认删除此数据？"}).then(function(){i.$gatewayHttp.note.postDelete({snid:e.SNID}).then(function(t){t.Result?i.onSearch():i.$toast("删除失败")}).catch(function(t){i.$toast("删除失败")})}).catch(function(){})},onSearch:function(){this.error=!1,this.finished=!1,this.pno=0,this.total=0,this.dataList=[],this.getDataList()}},computed:{searchData:function(){var t=this;return this.value?this.dataList.filter(function(e){return e.SNTtile.indexOf(t.value)>-1||e.SNContent.indexOf(t.value)>-1}):this.dataList}},watch:{"$store.getters.noteRefresh":function(t,e){t!==e&&t&&this.onSearch()}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"note"}},[i("head-top",{attrs:{title:"笔记"}},[i("router-link",{attrs:{slot:"right",to:"/editNote"},slot:"right"},[i("i",{staticClass:"iconfont icon-add"})])],1),t._v(" "),i("div",{staticClass:"search-input"},[i("van-search",{attrs:{placeholder:"请输入搜索关键词"},on:{search:t.onSearch},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),i("van-pull-refresh",{staticClass:"pull_fresh",on:{refresh:t.onSearch},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[t.searchData.length>0?i("div",{staticClass:"main"},[t._l(t.searchData,function(e,a){return i("div",{key:a,staticClass:"item",on:{click:function(i){return t.showDetail(e)}}},[i("div",{staticClass:"item_operate",on:{click:function(i){return t.dataDelete(i,e)}}},[i("van-icon",{attrs:{name:"delete",size:"1.8rem",color:"#f56c6c"}})],1),t._v(" "),i("h3",{staticClass:"title"},[t._v(t._s(e.SNTtile||"缺少标题"))]),t._v(" "),i("r-quill-editor",{ref:"REditor",refInFor:!0,attrs:{funType:t.funType,content:e.SNContent,"is-class":!0,"is-edit":!1,"max-height":null}}),t._v(" "),i("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(e.CreateTime,e.CreateTime)))])],1)}),t._v(" "),i("div",{staticClass:"list_end"},[t._v("\n        再也没有了~\n      ")])],2):i("r-lack-data")],1)],1)},staticRenderFns:[]};var u=i("VU/8")(l,h,!1,function(t){i("C2EQ")},"data-v-1adcd0dc",null);e.default=u.exports},C2EQ:function(t,e){}});
//# sourceMappingURL=43.e6e8d4542ef670fa18a3.js.map