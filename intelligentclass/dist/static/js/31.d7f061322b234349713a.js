webpackJsonp([31],{KHMi:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("bOdI"),n=i.n(e),s=(i("nOaS"),i("pIDD")),o=i("bBUo"),r={name:"",components:n()({headTop:o.a},s.a.name,s.a),props:{},data:function(){return{dataList:[],loading:!1}},created:function(){},mounted:function(){var t=this;this.$nextTick(function(){t.getDataList()})},methods:{getDataList:function(){var t=this;this.dataList=[],this.loading=!0,this.$mainHttp.courseware.getList({courseID:this.$store.getters.courseID}).then(function(a){a.Result&&a.Datas&&a.Datas.length>0&&a.Datas.forEach(function(a){t.dataList.push(a)}),t.loading=!1}).catch(function(a){t.loading=!1})},download:function(t){window.location.href=this.$mainHttp.resourse.file(t.Value.MaterialID),this.$toast("下载开始~")}},computed:{},watch:{}},c={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"courseware"}},[i("head-top",{attrs:{title:"课件"}}),t._v(" "),i("div",{staticClass:"main"},[t._l(t.dataList,function(a,e){return i("div",{key:e,staticClass:"item",on:{click:function(i){return t.download(a)}}},[i("div",{staticClass:"fL"},[i("i",{staticClass:"iconfont iconword"}),t._v(" "),i("span",{staticClass:"title time"},[t._v(t._s(a.Value.MaterialName+"."+a.Value.MaterialFileExt))])]),t._v(" "),i("div",{staticClass:"size time fR"},[a.Value.MaterialFileSize>1048576?i("span",[t._v(t._s(Math.round(a.Value.MaterialFileSize/1024/1024))+" MB")]):i("span",[t._v(t._s(Math.round(a.Value.MaterialFileSize/1024))+" KB")])])])}),t._v(" "),t.loading?i("van-loading",{attrs:{type:"spinner",color:"#1989fa"}},[t._v("加载中...")]):t.dataList&&0!==t.dataList.length?t._e():i("r-lack-data")],2)],1)},staticRenderFns:[]};var l=i("VU/8")(r,c,!1,function(t){i("PAcE")},"data-v-06aa8ff0",null);a.default=l.exports},PAcE:function(t,a){}});
//# sourceMappingURL=31.d7f061322b234349713a.js.map