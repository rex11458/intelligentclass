(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-045dfe1a"],{"44d9":function(t,e,a){},"7db0":function(t,e,a){"use strict";var c=a("23e7"),n=a("b727").find,s=a("44d2"),r=a("ae40"),i="find",o=!0,l=r(i);i in[]&&Array(1)[i]((function(){o=!1})),c({target:"Array",proto:!0,forced:o||!l},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),s(i)},c878:function(t,e,a){"use strict";a.r(e);var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"course-broadcast"},[a("head-top",{attrs:{title:"屏幕广播"}}),a("van-radio-group",{staticStyle:{"text-align":"left","margin-bottom":"20px"},attrs:{disabled:t.broadcastIP.length>0},on:{change:t.changeTeachScreen},model:{value:t.teachScreenSelected,callback:function(e){t.teachScreenSelected=e},expression:"teachScreenSelected"}},[a("van-cell-group",t._l(t.options,(function(e,c){return a("van-cell",{key:c,attrs:{title:e.text,clickable:""},on:{click:function(a){return t.teachScreenSelect(e.value)}}},[a("van-radio",{attrs:{slot:"right-icon",name:e.value},slot:"right-icon"})],1)})),1)],1),a("van-button",{staticStyle:{width:"60vw"},attrs:{round:"",type:t.broadcastIP?"danger":"primary"},on:{click:t.toBroadcast}},[t._v(" "+t._s(t.broadcastIP?"停止广播":"开始广播")+" ")]),t.gatewayList.length>0?[t._m(0),t.gatewayList&&t.gatewayList.length>0?a("van-radio-group",{staticStyle:{"text-align":"left"},attrs:{disabled:t.broadcastIP.length>0},on:{change:t.changeGatewayScreen},model:{value:t.gatewayScreenSelected,callback:function(e){t.gatewayScreenSelected=e},expression:"gatewayScreenSelected"}},[a("van-cell-group",t._l(t.gatewayList,(function(e,c){return a("van-cell",{key:c,attrs:{title:e.text,clickable:""},on:{click:function(a){return t.gatewayScreenSelect(e.value)}}},[a("van-radio",{attrs:{slot:"right-icon",name:e.value},slot:"right-icon"})],1)})),1)],1):a("r-lack-data")]:t._e()],2)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sub_nav"},[a("span",[t._v("小组屏幕")])])}],s=(a("7db0"),a("c740"),a("4160"),a("159b"),{name:"broadcast",data:function(){return{broadcastIP:"",broadcastState:!1,options:[{text:"主屏",value:"123"},{text:"副屏",value:this.$store.getters.viceScreen?this.$store.getters.viceScreen["GatewayID"]:""}],teachScreenSelected:"123",gatewayList:[],gatewayScreenSelected:""}},created:function(){var t=this;if(this.broadcastIP){var e=this.options.findIndex((function(e){return e.value===t.broadcastIP})),a=this.gatewayList.findIndex((function(e){return e.value===t.broadcastIP}));e>-1?this.teachScreenSelected=this.broadcastIP:a>-1&&(this.gatewayScreenSelected=this.broadcastIP)}this.getDataInfo()},methods:{getDataInfo:function(){var t=this;this.$mainHttp.gateway.nowState({ciID:this.$store.getters.courseID}).then((function(e){e.Result?(t.broadcastIP=e["ID"]||"",t.options.find((function(t){return t.value===e["ID"]}))?(t.teachScreenSelected=e["ID"],t.gatewayScreenSelected=""):(t.teachScreenSelected="123",t.gatewayScreenSelected=e["ID"])):e.Info&&t.$toast(e.Info)})).catch((function(){}))},getGatewayList:function(){var t=this;this.gatewayList=[],this.$mainHttp.gateway.getGatewayList().then((function(e){e.Result?e.Datas&&e.Datas.length>0&&e.Datas.forEach((function(e){t.gatewayList.push({text:e["GatewayName"],value:e["GatewayID"],IP:e["GatewayIP"],state:e["State"],online:e["IsOnline"]})})):e.Info&&t.$toast(e.Info)})).catch((function(){}))},teachScreenSelect:function(t){0===this.broadcastIP.length&&(this.teachScreenSelected=t)},changeTeachScreen:function(t){t&&(this.teachScreenSelected=t,this.gatewayScreenSelected="")},gatewayScreenSelect:function(t){0===this.broadcastIP.length&&(this.gatewayScreenSelected=t)},changeGatewayScreen:function(t){t&&(this.gatewayScreenSelected=t,this.teachScreenSelected="123")},toBroadcast:function(){this.broadcastIP?this.stopBroadcast():this.startBroadcast()},startBroadcast:function(){var t=this,e=this.teachScreenSelected||this.gatewayScreenSelected;this.$mainHttp.gateway.setStart({gatewayID:e,ciID:this.$store.getters.courseID}).then((function(a){a.Result?(t.broadcastIP=e,t.$store.commit("SET_BROADCAST_IP",t.broadcastIP),t.$toast("成功发送开始广播")):a.Info?t.$toast(a.Info):t.$toast("发送开始广播失败")})).catch((function(){t.$toast("操作失败")}))},stopBroadcast:function(){var t=this;this.$mainHttp.gateway.setStop({ciID:this.$store.getters.courseID}).then((function(e){e.Result?(t.gatewayScreenSelected="",t.teachScreenSelected="123",t.broadcastIP="",t.$store.commit("SET_BROADCAST_IP",""),t.$toast("成功发送停止广播")):e.Info?t.$toast(e.Info):t.$toast("发送停止广播失败")})).catch((function(){t.$toast("操作失败")}))}}}),r=s,i=(a("dbd2"),a("2877")),o=Object(i["a"])(r,c,n,!1,null,"34078680",null);e["default"]=o.exports},dbd2:function(t,e,a){"use strict";var c=a("44d9"),n=a.n(c);n.a}}]);