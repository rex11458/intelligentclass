(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d7bf1dc"],{"885b":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"myZone"}},[e("head-top",{attrs:{title:"个人中心","show-back":!1}}),e("div",{staticClass:"myzoneFaceWwall"},[e("div",{staticClass:"myFace"},[e("div",{staticClass:"myFaceImg"},[e("van-uploader",{attrs:{capture:"camera","preview-image":"","before-read":t.beforeRead,"after-read":t.afterRead}},[e("img",{attrs:{src:t.userPhoto,alt:""}})])],1),e("div",{staticClass:"MyFaceName"},[t._v(t._s(t.userName))]),e("div",{staticClass:"maFaceFt"})])]),e("div",{staticClass:"myZoneContent"},t._l(t.Details,(function(a){return e("div",{key:a.info,staticClass:"myZoneContentItem",on:{click:function(e){return t.toPath(a.path)}}},[e("span",{staticClass:"info"},[t._v(t._s(a.info))]),e("i",{staticClass:"iconfont fL",class:a.icon}),e("i",{staticClass:"iconfont icon-qianjin fR"})])})),0),e("div",{staticClass:"myZoneFooter"},[e("van-button",{attrs:{type:"primary",loading:t.loading,"loading-text":"退出登录中..."},on:{click:t.toLogout}},[t._v(" 退出登录 ")])],1)],1)},n=[],o=(e("ac1f"),e("5319"),e("a5b7")),s=e.n(o),c={name:"",props:{},data:function(){return{userName:this.$store.getters.teacher&&this.$store.getters.teacher.TeacherName||"",userPhoto:s.a,loading:!1,Details:[{path:"/personal-data",info:"个人资料",icon:"icon-gerenziliao"},{path:"/help-use",info:"使用说明",icon:"icon-word"},{path:"/about-us",info:"关于我们",icon:"icon-guanyuwomen"}]}},methods:{beforeRead:function(t){return"image/jpeg"!==t.type&&"image/png"!==t.type&&"image/jpg"!==t.type?(this.$toast("请上传 jpg 格式图片"),!1):!(t.size>20971520)||(this.$toast("请上传小于20M的图片"),!1)},afterRead:function(t){},toLogout:function(){var t=this;this.loading=!0,this.$store.dispatch("Logout").then((function(a){t.loading=!1})).catch((function(){t.loading=!1})),this.$router.replace("/login")},toPath:function(t){this.$router.push(t)}}},r=c,u=(e("c084"),e("2877")),l=Object(u["a"])(r,i,n,!1,null,null,null);a["default"]=l.exports},"990a":function(t,a,e){},a5b7:function(t,a,e){t.exports=e.p+"img/boy_img.8267a8ec.png"},c084:function(t,a,e){"use strict";var i=e("990a"),n=e.n(i);n.a}}]);
//# sourceMappingURL=chunk-7d7bf1dc.71f7595e.js.map