(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7393188c"],{"0482":function(t,n,i){"use strict";var e=i("c681"),r=i.n(e);r.a},a9b5:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"course"},[i("head-top",{attrs:{title:"课堂记录"}}),t._m(0),t._l(t.mentalList,(function(n,e){return i("van-cell-group",{key:e,staticClass:"cell_group"},[i("van-cell",{staticClass:"cell_main",attrs:{"is-link":""},on:{click:function(i){return t.menuClick(n)}},scopedSlots:t._u([{key:"icon",fn:function(){return[n.icon?i("van-icon",{staticClass:"line_icon",attrs:{"class-prefix":"iconfont "+n.icon}}):i("img",{attrs:{src:n.imgSrc,alt:""}})]},proxy:!0},{key:"title",fn:function(){return[i("div",{staticClass:"line_title"},[t._v(t._s(n.title))])]},proxy:!0},{key:"label",fn:function(){return[i("div",{staticClass:"line_title"},[t._v(t._s(n.remark))])]},proxy:!0}],null,!0)})],1)})),t._m(1),t._l(t.exchangeList,(function(n,e){return i("van-cell-group",{key:e,staticClass:"cell_group"},[i("van-cell",{staticClass:"cell_main",attrs:{"is-link":""},on:{click:function(i){return t.menuClick(n)}},scopedSlots:t._u([{key:"icon",fn:function(){return[n.icon?i("van-icon",{staticClass:"line_icon",attrs:{"class-prefix":"iconfont "+n.icon}}):i("img",{attrs:{src:n.imgSrc,alt:""}})]},proxy:!0},{key:"title",fn:function(){return[i("div",{staticClass:"line_title"},[t._v(t._s(n.title))])]},proxy:!0},{key:"label",fn:function(){return[i("div",{staticClass:"line_title"},[t._v(t._s(n.remark))])]},proxy:!0}],null,!0)})],1)})),t._m(2),t._l(t.sourceList,(function(n,e){return i("van-cell-group",{key:e,staticClass:"cell_group"},[i("van-cell",{staticClass:"cell_main",attrs:{"is-link":""},on:{click:function(i){return t.menuClick(n)}},scopedSlots:t._u([{key:"icon",fn:function(){return[n.icon?i("van-icon",{staticClass:"line_icon",attrs:{"class-prefix":"iconfont "+n.icon}}):i("img",{attrs:{src:n.imgSrc,alt:""}})]},proxy:!0},{key:"title",fn:function(){return[i("div",{staticClass:"line_title"},[t._v(t._s(n.title))])]},proxy:!0},{key:"label",fn:function(){return[i("div",{staticClass:"line_title"},[t._v(t._s(n.remark))])]},proxy:!0}],null,!0)})],1)})),t._m(3),t._l(t.liveList,(function(n,e){return i("van-cell-group",{key:e,staticClass:"cell_group"},[i("van-cell",{staticClass:"cell_main",attrs:{"is-link":""},on:{click:function(i){return t.menuClick(n)}},scopedSlots:t._u([{key:"icon",fn:function(){return[n.icon?i("van-icon",{staticClass:"line_icon",attrs:{"class-prefix":"iconfont "+n.icon}}):i("img",{attrs:{src:n.imgSrc,alt:""}})]},proxy:!0},{key:"title",fn:function(){return[i("div",{staticClass:"line_title"},[t._v(t._s(n.title))])]},proxy:!0},{key:"label",fn:function(){return[i("div",{staticClass:"line_title"},[t._v(t._s(n.remark))])]},proxy:!0}],null,!0)})],1)})),t._m(4)],2)},r=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"sub_nav"},[i("span",[t._v("课堂信息")])])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"sub_nav"},[i("span",[t._v("课堂互动")])])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"sub_nav"},[i("span",[t._v("课件资源")])])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"sub_nav",staticStyle:{"margin-top":"0"}},[i("span",[t._v("课堂实况")])])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"sub_nav"},[i("span",{staticClass:"sub_visible"},[t._v("ios下异常，临时处理")])])}],c=(i("ac1f"),i("5319"),i("a5b7")),s=i.n(c),l={name:"course",data:function(){return{defaultImg:s.a,mentalList:[{icon:"icon-qiandao",title:"考勤信息",remark:"学生签到数据",url:"/course/record/sign"},{icon:"icon-renmai",title:"小组排名",remark:"分组讨论战绩",url:"/course/record/group-rank"},{icon:"icon-groupnote",title:"学生得分",remark:"每个学生总得分",url:"/course/record/student-score"}],exchangeList:[{icon:"icon-jieping",title:"截屏提问",remark:"",url:"/course/record/screen-question"},{icon:"icon-edu-biji",title:"随堂练习",remark:"",url:"/course/record/class-practise"},{icon:"icon-suijiyonghu",title:"随机挑人",remark:"",url:"/course/record/random"},{icon:"icon-taolun",title:"分组讨论",remark:"",url:"/course/record/discussion-list"}],sourceList:[{icon:"icon-kejian",title:"课件",remark:"",url:"/course/record/course-ware"},{icon:"icon-fenxiang",title:"板书",remark:"",url:"/course/record/board-note"}],liveList:[{icon:"icon-weike1",title:"课堂实况",remark:"",url:"/course/record/live-lesson"}]}},created:function(){},methods:{showScreenHelp:function(){},menuClick:function(t){if(t.url)this.$router.push(t.url);else{var n=this.$route.fullPath;this.$router.replace({path:"/redirect"+n})}}}},a=l,o=(i("0482"),i("2877")),u=Object(o["a"])(a,e,r,!1,null,"6fb854c0",null);n["default"]=u.exports},c681:function(t,n,i){}}]);