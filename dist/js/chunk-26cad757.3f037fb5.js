(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26cad757"],{"28a4":function(e,t,a){"use strict";var s=a("4244"),n=a.n(s);n.a},4244:function(e,t,a){},9176:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"personal-data"}},[a("head-top",{attrs:{title:"个人资料"}}),a("div",{staticClass:"form"},e._l(e.personDatas,(function(t,s){return a("div",{key:s,staticClass:"form-item"},[a("div",{staticClass:"fL"},[e._v(e._s(t.info))]),a("div",{staticClass:"fR"},[e._v(e._s(t.value))])])})),0)],1)},n=[],i={name:"",components:{},props:{},data:function(){return{personDatas:[]}},computed:{},watch:{},created:function(){if(this.$store.getters.teacher){var e=this.$store.getters.teacher;this.personDatas=[{info:"姓名",value:e["TeacherName"]},{info:"性别",value:"1"===e["TeacherGender"]?"男":"女"},{info:"教工号",value:e["TeacherNo"]},{info:"卡编号",value:e["TeacherCardNo"]}]}else this.personDatas=[{info:"姓名",value:""},{info:"性别",value:"男"},{info:"教工号",value:""},{info:"卡编号",value:""}]}},r=i,o=(a("28a4"),a("2877")),c=Object(o["a"])(r,s,n,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-26cad757.3f037fb5.js.map