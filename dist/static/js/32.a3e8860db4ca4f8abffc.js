webpackJsonp([32],{vjzr:function(t,e){},zDRk:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"",components:{NoteList:i("aXZl").a},props:{},data:function(){return{noteDataList:[],isLoading:!1,value:"",error:!1,finished:!1,pno:0,pageSize:5,total:0}},computed:{searchData:function(){var t=this;return this.value?this.noteDataList.filter(function(e){return e.title.indexOf(t.value)>-1||e.content.indexOf(t.value)>-1}):this.noteDataList}},mounted:function(){this.$nextTick(function(){})},methods:{onSearch:function(){this.error=!1,this.finished=!1,this.pno=0,this.total=0,this.noteDataList=[],this.getDataList()},getDataList:function(){var t=this;if(this.isLoading=!0,!(0===this.pno||this.total>this.pno*this.pageSize))return this.isLoading=!1,void(this.finished=!0);this.pno++;var e={ciID:this.$store.getters.courseID,studentID:this.$store.getters.studentID,psize:this.pageSize,pno:this.pno};this.$mainHttp.note.getList(e).then(function(e){e.Result&&e.Datas&&e.Datas.length>0&&(e.Datas.sort(function(t,e){return t.CreateTime>e.CreateTime?-1:1}),e.Datas.forEach(function(e){t.noteDataList.push({id:e.SNID,title:e.SNTtile,content:e.SNContent,state:e.State,createTime:e.CreateTime,CHID:t.$store.getters.course.CHID,CIID:t.$store.getters.course.CIID,CHName:t.$store.getters.course.CHName,CourseName:t.$store.getters.course.CourseName})})),e.RowsCount&&(t.total=e.RowsCount),t.total<=t.pno*t.pageSize&&(t.finished=!0),t.isLoading=!1}).catch(function(e){t.error=!0,t.isLoading=!1})},handleSelectNote:function(t){this.$router.push({path:"/history/note/detail",query:{snID:t.id,title:t.title,content:t.content,createTime:t.createTime}})}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"note"}},[i("head-top",{attrs:{title:"笔记"}}),t._v(" "),i("div",{staticClass:"search-input"},[i("van-search",{attrs:{placeholder:"请输入搜索关键词"},on:{search:t.onSearch},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),i("van-pull-refresh",{staticClass:"pull_fresh",on:{refresh:t.onSearch},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了",error:t.error,"error-text":"请求失败，点击重新加载"},on:{"update:error":function(e){t.error=e},load:t.getDataList},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[t.searchData&&t.searchData.length>0?i("note-list",{attrs:{"data-list":t.searchData},on:{select:t.handleSelectNote}}):t._e()],1)],1)],1)},staticRenderFns:[]};var n=i("VU/8")(a,s,!1,function(t){i("vjzr")},"data-v-6b3b3bc9",null);e.default=n.exports}});
//# sourceMappingURL=32.a3e8860db4ca4f8abffc.js.map