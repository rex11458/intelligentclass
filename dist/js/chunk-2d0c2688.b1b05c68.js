(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c2688"],{"49d1":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"downMain",staticClass:"r-dropdown"},[n("div",{ref:"downInfo",staticClass:"down-info",on:{click:function(e){return t.toggleMenu(e)}}},[t._t("default")],2),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],ref:"downMenu",staticClass:"dropdown-menu",style:t.positionStyle},[t._t("menu")],2)])},i=[],s={name:"r-dropdown",data:function(){return{showMenu:!1,positionStyle:{top:"20px",left:"20px"}}},props:{selected:{}},created:function(){},mounted:function(){this.selectedOption=this.selected,document.addEventListener("click",this.hidePanel,!1)},destroyed:function(){document.removeEventListener("click",this.hidePanel,!1)},methods:{updateOption:function(t){this.selectedOption=t,this.$emit("updateOption",this.selectedOption)},toggleMenu:function(t){var e=this;this.showMenu=!this.showMenu;var n=document.body.clientWidth,o=document.body.clientHeight;setTimeout((function(){var t=e.$refs.downInfo.getBoundingClientRect(),i=e.$refs.downMenu.getBoundingClientRect();console.log("info:",t),console.log("menu:",i);var s=0,d=0;s=t.width>=i.width?t.left+(t.width-i.width)/2:n-(t.left+(t.width-i.width)/2)>=i.width?t.left+(t.width-i.width)/2:n-i.width-5,d=i.height>=o-t.bottom+5?t.top-i.height+5:i.height<o-t.bottom-5?t.top+5:t.height+t.top-5,e.positionStyle={top:d+"px",left:s+"px"}}),10)},closeBtnGroup:function(){this.showMenu=!1},hide:function(){var t=this;setTimeout((function(){t.showMenu=!1}),150)},hidePanel:function(t){this.$refs.downMain.contains(t.target)||(this.showMenu=!1)}}},d=s,u=n("2877"),h=Object(u["a"])(d,o,i,!1,null,null,null),c=h.exports;e["default"]=c}}]);