webpackJsonp([14],{"2yut":function(t,e){},"84VO":function(t,e){},kxSj:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Dd8w"),n=i.n(s),r=i("0zVH"),a=i("Rh6y"),o=i.n(a),d={name:"",components:{tVideo:r.a},props:{},data:function(){return{defaultPost:o.a,selectIndex:parseInt(this.$route.params.index||"0"),dataList:[],playerOptions:{autoplay:!1,muted:!0,language:"en",playbackRates:[.7,1,1.5,2],sources:[{type:"video/mp4",src:"http://vjs.zencdn.net/v/oceans.mp4"}],poster:"https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg"}}},computed:{videoList:function(){return"0"===this.$route.params.type?this.$store.getters.liveLession.teachers:this.$store.getters.liveLession.students},videoItem:function(){return this.videoList[this.selectIndex]},restVideoList:function(){var t=this;return this.videoList.map(function(t,e){return n()({},t,{index:e})}).filter(function(e){return e.index!==t.selectIndex})}},methods:{select:function(t){var e=this;this.selectIndex=t.index,this.$refs.video.stopPlay(),this.$refs.video.init(),setTimeout(function(){e.$refs.video.clickPlayBtn(),window.scrollTo(0,0)},200)}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"vedioBackplay"}},[i("head-top",{attrs:{title:"录播回放"}}),t._v(" "),i("t-video",{ref:"video",attrs:{src:t.videoItem.src,poster:t.defaultPost}}),t._v(" "),i("div",{staticClass:"video_info"},[i("div",{staticClass:"info_title"},[t._v(t._s(t.videoItem.title))]),t._v(" "),i("div",{staticClass:"info_mark"},[i("van-tag",{attrs:{mark:"",type:"success"}},[t._v(t._s(t.videoItem.typeName))]),t._v(" "),i("div",[t._v(t._s(t._f("formatDate")(t.videoItem.time,t.videoItem.time)))])],1)]),t._v(" "),t.restVideoList?i("div",{staticClass:"rest_list"},t._l(t.restVideoList,function(e,s){return i("div",{key:s,staticClass:"line_mark",on:{click:function(i){return t.select(e)}}},[i("img",{attrs:{src:t.defaultPost,alt:""}}),t._v(" "),i("div",{staticClass:"line_right"},[i("div",{staticClass:"line_info"},[t._v(t._s(e.title))]),t._v(" "),i("van-tag",{attrs:{mark:"",type:"success"}},[t._v(t._s(e.typeName))]),t._v(" "),i("div",[t._v(t._s(t._f("formatDate")(e.time,e.time)))])],1)])}),0):t._e()],1)},staticRenderFns:[]};var v={name:"",components:{LiveVideo:i("VU/8")(d,c,!1,function(t){i("84VO")},null,null).exports},data:function(){return{}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("live-video")],1)},staticRenderFns:[]};var u=i("VU/8")(v,l,!1,function(t){i("2yut")},null,null);e.default=u.exports}});
//# sourceMappingURL=14.ba6bf74142ef7f6883b7.js.map