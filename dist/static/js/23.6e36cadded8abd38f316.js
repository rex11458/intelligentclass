webpackJsonp([23],{COIA:function(t,e){},GdsQ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("mvHQ"),s=i.n(a),n=i("bBUo"),o=i("1wEQ"),r=i("FwVa"),d={name:"",components:{headTop:n.a,RImage:o.a},props:{},data:function(){return{isLoading:!1,dataList:[]}},created:function(){},mounted:function(){var t=this;this.$nextTick(function(){t.getDataList()})},methods:{getDataList:function(){var t=this;this.isLoading=!0,this.dataList=[],this.$gatewayHttp.boardNote.getList({courseID:this.$store.getters.courseID}).then(function(e){e.Result&&e.Datas&&e.Datas.length>0&&(e.Datas.forEach(function(e){var i={img:t.$gatewayHttp.resourse.picture(e.BNContent,r.g.BoardNote),state:e.State,title:e.BNTitle,time:e.CreateTime,id:e.BNID,content:e.BNContent};-1===t.dataList.findIndex(function(t){return s()(i)===s()(t)})&&t.dataList.push()}),t.autoShow()),t.isLoading=!1}).catch(function(e){t.isLoading=!1})},autoShow:function(){var t=this;this.$store.getters.boardNote&&this.$store.getters.boardNote.id&&(this.dataList.find(function(e){return e.id===t.$store.getters.boardNote.id})&&(console.log(this.$refs["refImg"+(this.dataList.length-1)]),this.$refs["refImg"+(this.dataList.length-1)].preview(),this.$store.commit("SET_BOARDNOTE",{})))}},watch:{"$store.getters.boardNote":function(t,e){t&&t.id&&this.getDataList()}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"blackboardWriting"}},[i("head-top",{attrs:{title:"板书"}}),t._v(" "),i("van-pull-refresh",{staticClass:"pull_fresh",on:{refresh:t.getDataList},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[t.dataList.length>0?i("div",{staticClass:"main"},t._l(t.dataList,function(e,a){return i("div",{key:a,staticClass:"item"},[i("div",{staticClass:"bg fL"},[i("r-image",{ref:"refImg"+a,refInFor:!0,attrs:{width:"80px",height:"58px",src:e.img}})],1),t._v(" "),i("div",{staticClass:"time fR"},[i("div",{staticClass:"info"},[t._v(t._s(t._f("formatDate")(e.time,e.time)))])])])}),0):i("r-lack-data")],1)],1)},staticRenderFns:[]};var u=i("VU/8")(d,c,!1,function(t){i("COIA")},"data-v-3ee38b84",null);e.default=u.exports}});
//# sourceMappingURL=23.6e36cadded8abd38f316.js.map