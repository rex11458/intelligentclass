(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-633a8592"],{"039e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"course-throw-screen"},[n("head-top",{attrs:{title:"投屏演示"}},[n("span",{staticClass:"head-right",attrs:{slot:"right"},on:{click:t.toThrowScreen},slot:"right"},[n("span",{staticClass:"head_span"},[t._v(t._s(t.throwScreenInfo?"停止演示":"更新演示")+" ")])])]),0===t.activeIndex?n("div",[t._m(0),n("div",{staticClass:"sub_module"},[0===t.studentList.length?n("span",[t._v("暂无数据")]):n("van-checkbox-group",{staticClass:"flex-wrap-between",model:{value:t.studentChecked,callback:function(e){t.studentChecked=e},expression:"studentChecked"}},[t._l(t.studentList,(function(e,a){return n("div",{key:a,staticClass:"student_card van-hairline--surround",on:{click:function(n){return t.studentCheck(e)}}},[n("van-checkbox",{staticClass:"student_check",attrs:{sharp:"square",name:e.studentID}}),n("img",{staticClass:"col_4",attrs:{src:e.imgSrc,alt:""}}),n("div",[t._v(t._s(e.studentName))])],1)})),t._l((4-t.studentList.length%4)%4,(function(t){return n("div",{key:-t,staticClass:"student_card",staticStyle:{width:"19vw"}})}))],2)],1),t._m(1),t.gatewayList&&t.gatewayList.length>0?n("div",{staticClass:"prepare-list"},[n("van-checkbox-group",{staticClass:"sub_module",attrs:{direction:"horizontal"},model:{value:t.gatewayChecked,callback:function(e){t.gatewayChecked=e},expression:"gatewayChecked"}},t._l(t.gatewayList,(function(e,a){return n("van-checkbox",{key:a,attrs:{shape:"square",name:e.value}},[t._v(" "+t._s(e.text)+" ")])})),1),n("van-checkbox-group",{staticClass:"cell_group",model:{value:t.gatewayChecked,callback:function(e){t.gatewayChecked=e},expression:"gatewayChecked"}},[n("van-cell-group",t._l(t.gatewayList,(function(e,a){return n("van-cell",{key:a,staticClass:"cell_main",attrs:{clickable:""},on:{click:function(n){return t.gatewayCheck(e)}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("van-icon",{staticClass:"line_icon",style:{color:"#1989fa"},attrs:{"class-prefix":"iconfont icon-wangguan"}})]},proxy:!0},{key:"title",fn:function(){return[n("span",{staticClass:"line_title"},[t._v(t._s(e.text))])]},proxy:!0}],null,!0)},[n("van-checkbox",{attrs:{slot:"right-icon",sharp:"square",name:e.value},slot:"right-icon"})],1)})),1)],1)],1):n("r-lack-data")],1):n("div",[t._m(2),n("van-tree-select",{style:{height:"auto"},attrs:{items:t.studentItems,"main-active-index":t.studentIndex,"active-id":t.treeIndex,max:5},on:{"update:mainActiveIndex":function(e){t.studentIndex=e},"update:main-active-index":function(e){t.studentIndex=e},"click-nav":t.showTreeNode,"click-item":t.checkedTreeNode}}),t._m(3),n("van-tree-select",{style:{height:"auto"},attrs:{items:t.gatewayItems,"main-active-index":t.gatewayIndex,"active-id":t.treeIndex,max:5},on:{"update:mainActiveIndex":function(e){t.gatewayIndex=e},"update:main-active-index":function(e){t.gatewayIndex=e},"click-nav":t.showTreeNode,"click-item":t.checkedTreeNode}})],1),n("div",{staticClass:"footer"},[n("van-tabbar",{model:{value:t.activeIndex,callback:function(e){t.activeIndex=e},expression:"activeIndex"}},t._l(t.menus,(function(e,a){return n("van-tabbar-item",{key:a,on:{click:function(n){return t.handleClick(e)}}},[n("i",{staticClass:"iconfont",class:e.icon,attrs:{slot:"icon"},slot:"icon"}),n("span",[t._v(t._s(e.name))])])})),1)],1)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sub_nav"},[n("span",[t._v("成员列表")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sub_nav"},[n("span",[t._v("小组网关")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sub_nav"},[n("span",[t._v("成员列表")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sub_nav"},[n("span",[t._v("小组网关")])])}],s=(n("c740"),n("4160"),n("a434"),n("159b"),n("2241")),c=n("a5b7"),d=n.n(c),o={name:"throwScreen",data:function(){return{throwScreenInfo:null,activeIndex:0,menus:[{name:"全班演示",index:0,icon:"icon-renmai"},{name:"定向演示",index:1,icon:"icon-zuzhi"}],studentList:[],studentChecked:[],gatewayList:[],gatewayChecked:[],treeIndex:[1,2],studentIndex:0,studentItems:[{text:"学生1",badge:2,children:[{text:"老师屏幕",id:1},{text:"小组1",id:2},{text:"小组2",id:3,disabled:!0},{text:"小组3",id:4}]},{text:"学生2",badge:1,children:[{text:"老师屏幕",id:1},{text:"小组1",id:2},{text:"小组2",id:3,disabled:!0},{text:"小组3",id:4}]},{text:"学生3",badge:null,children:[{text:"老师屏幕",id:1},{text:"小组1",id:2},{text:"小组2",id:3,disabled:!0},{text:"小组3",id:4}]},{text:"学生4",badge:null,children:[]},{text:"学生5",badge:null,children:[]}],gatewayIndex:0,gatewayItems:[{text:"小组1",badge:2,children:[{text:"老师屏幕",id:1},{text:"小组2",id:3,disabled:!0},{text:"小组3",id:4}]},{text:"小组2",badge:null,children:[{text:"老师屏幕",id:1},{text:"小组1",id:2},{text:"小组3",id:4}]},{text:"小组3",badge:null,children:[]}]}},mounted:function(){this.getStudent(),this.getGatewayList()},methods:{getStudent:function(){var t=this;this.studentList=[],this.$gatewayHttp.student.getDataList().then((function(e){e.Result&&e.Datas?e.Datas.forEach((function(e){t.studentList.push({imgSrc:d.a,studentID:e["StudentID"],studentName:e["StudentName"],studentSno:e["StudentXH"]})})):e.Info&&t.$toast(e.Info)})).catch((function(){}))},getGatewayList:function(){var t=this;this.gatewayList=[],this.$gatewayHttp.broadcast.getGatewayList().then((function(e){e.Result?e.Datas&&e.Datas.length>0&&e.Datas.forEach((function(e){t.gatewayList.push({text:e["GatewayName"],value:e["GatewayID"],IP:e["GatewayIP"],state:e["State"],online:e["IsOnline"]})})):e.Info&&t.$toast(e.Info)})).catch((function(){}))},studentCheck:function(t){var e=this.studentChecked.findIndex((function(e){return e===t.studentID}));e>-1?this.studentChecked.splice(e,1):this.studentChecked.push(t.studentID)},gatewayCheck:function(t){var e=this.gatewayChecked.findIndex((function(e){return e===t.value}));e>-1?this.gatewayChecked.splice(e,1):this.gatewayChecked.push(t.value)},toThrowScreen:function(){var t=this;this.throwScreenInfo?s["a"].confirm({message:"确认停止演示？"}).then((function(){t.stopThrowScreen()})).catch((function(){})):s["a"].confirm({message:"确认更新演示？"}).then((function(){t.startThrowScreen()})).catch((function(){}))},startThrowScreen:function(){},stopThrowScreen:function(){},handleClick:function(t){},showTreeNode:function(t){console.log("showTreeNode:",t)},checkedTreeNode:function(t){console.log("checkedTreeNode:",t);var e=this.treeIndex.findIndex((function(e){return e===t.id}));e>-1?this.treeIndex.splice(e,1):this.treeIndex.push(t.id)}}},r=o,u=(n("1d2f"),n("2877")),l=Object(u["a"])(r,a,i,!1,null,"7c33be4e",null);e["default"]=l.exports},"1d2f":function(t,e,n){"use strict";var a=n("41cd"),i=n.n(a);i.a},"41cd":function(t,e,n){},a434:function(t,e,n){"use strict";var a=n("23e7"),i=n("23cb"),s=n("a691"),c=n("50c4"),d=n("7b0b"),o=n("65f0"),r=n("8418"),u=n("1dde"),l=n("ae40"),h=u("splice"),f=l("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,x=Math.min,g=9007199254740991,m="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!h||!f},{splice:function(t,e){var n,a,u,l,h,f,w=d(this),p=c(w.length),k=i(t,p),_=arguments.length;if(0===_?n=a=0:1===_?(n=0,a=p-k):(n=_-2,a=x(v(s(e),0),p-k)),p+n-a>g)throw TypeError(m);for(u=o(w,a),l=0;l<a;l++)h=k+l,h in w&&r(u,l,w[h]);if(u.length=a,n<a){for(l=k;l<p-a;l++)h=l+a,f=l+n,h in w?w[f]=w[h]:delete w[f];for(l=p;l>p-a+n;l--)delete w[l-1]}else if(n>a)for(l=p-a;l>k;l--)h=l+a-1,f=l+n-1,h in w?w[f]=w[h]:delete w[f];for(l=0;l<n;l++)w[l+k]=arguments[l+2];return w.length=p-a+n,u}})},a5b7:function(t,e,n){t.exports=n.p+"img/boy_img.8267a8ec.png"}}]);
//# sourceMappingURL=chunk-633a8592.12ebe5e3.js.map