webpackJsonp([8],{"2yut":function(t,e){},"3ab0":function(t,e,i){"use strict";var s=i("nsZj"),n=(i.n(s),i("8NIx"));i.n(n)},"8NIx":function(t,e){},G1zS:function(t,e){},bHMa:function(t,e,i){"use strict";var s=i("AA6R"),n=i.n(s),a=i("o69Z"),r=i("rhik"),o=i("LmuL"),c=Object(a.a)("tag"),l=c[0],d=c[1],u={danger:o.e,primary:o.a,success:o.d};function v(t,e,i,s){var a,c=e.type,l=e.mark,v=e.plain,p=e.round,f=e.size,m=e.color||c&&u[c]||o.c,_=((a={})[v?"color":"backgroundColor"]=m,a);e.textColor&&(_.color=e.textColor);var h={mark:l,plain:v,round:p};return f&&(h[f]=f),t("span",n()([{style:_,class:[d(h),{"van-hairline--surround":v}]},Object(r.b)(s,!0)]),[i.default&&i.default()])}v.props={size:String,type:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String},e.a=l(v)},kxSj:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,n=i("Dd8w"),a=i.n(n),r=i("bOdI"),o=i.n(r),c=(i("3ab0"),i("bHMa")),l=(i("k3b4"),i("+2ln")),d=i("bBUo"),u=i("Utpw"),v=i("Rh6y"),p=i.n(v),f={name:"",components:(s={headTop:d.a,tVideo:u.a},o()(s,l.a.name,l.a),o()(s,c.a.name,c.a),s),props:{},data:function(){return{defaultPost:p.a,selectIndex:parseInt(this.$route.params.index||"0"),dataList:[],playerOptions:{autoplay:!1,muted:!0,language:"en",playbackRates:[.7,1,1.5,2],sources:[{type:"video/mp4",src:"http://vjs.zencdn.net/v/oceans.mp4"}],poster:"https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg"}}},computed:{videoList:function(){return"0"===this.$route.params.type?this.$store.getters.liveLession.teachers:this.$store.getters.liveLession.students},videoItem:function(){return this.videoList[this.selectIndex]},restVideoList:function(){var t=this;return this.videoList.map(function(t,e){return a()({},t,{index:e})}).filter(function(e){return e.index!==t.selectIndex})}},methods:{select:function(t){var e=this;this.selectIndex=t.index,this.$refs.video.stopPlay(),this.$refs.video.init(),setTimeout(function(){e.$refs.video.clickPlayBtn()},200)}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"vedioBackplay"}},[i("head-top",{attrs:{title:"录播回放"}}),t._v(" "),i("t-video",{ref:"video",attrs:{src:t.videoItem.src,poster:t.defaultPost}}),t._v(" "),i("div",{staticClass:"video_info"},[i("div",{staticClass:"info_title"},[t._v(t._s(t.videoItem.title))]),t._v(" "),i("div",{staticClass:"info_mark"},[i("van-tag",{attrs:{mark:"",type:"success"}},[t._v(t._s(t.videoItem.typeName))]),t._v(" "),i("div",[t._v(t._s(t._f("formatDate")(t.videoItem.time,t.videoItem.time)))])],1)]),t._v(" "),t.restVideoList?i("div",{staticClass:"rest_list"},t._l(t.restVideoList,function(e,s){return i("div",{key:s,staticClass:"line_mark",on:{click:function(i){return t.select(e)}}},[i("img",{attrs:{src:t.defaultPost,alt:""}}),t._v(" "),i("div",{staticClass:"line_right"},[i("div",{staticClass:"line_info"},[t._v(t._s(e.title))]),t._v(" "),i("van-tag",{attrs:{mark:"",type:"success"}},[t._v(t._s(e.typeName))]),t._v(" "),i("div",[t._v(t._s(t._f("formatDate")(e.time,e.time)))])],1)])}),0):t._e()],1)},staticRenderFns:[]};var _={name:"",components:{LiveVideo:i("VU/8")(f,m,!1,function(t){i("G1zS")},null,null).exports},data:function(){return{}}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("live-video")],1)},staticRenderFns:[]};var y=i("VU/8")(_,h,!1,function(t){i("2yut")},null,null);e.default=y.exports}});
//# sourceMappingURL=8.cf98b60bebca674f68ad.js.map