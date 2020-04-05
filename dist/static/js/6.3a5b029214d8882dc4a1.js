webpackJsonp([6],{"+EtT":function(t,e){},"3o3C":function(t,e){},CNj9:function(t,e){},NC6I:function(module,exports,__webpack_require__){(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
!function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,AMD=__webpack_require__("nErl"),ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}!root.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t){return function(e){return new Md5(!0).update(e)[t]()}},createMethod=function(){var t=createOutputMethod("hex");NODE_JS&&(t=nodeWrap(t)),t.create=function(){return new Md5},t.update=function(e){return t.create().update(e)};for(var e=0;e<OUTPUT_TYPES.length;++e){var s=OUTPUT_TYPES[e];t[s]=createOutputMethod(s)}return t},nodeWrap=function(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(t){if("string"==typeof t)return crypto.createHash("md5").update(t,"utf8").digest("hex");if(null===t||void 0===t)throw ERROR;return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash("md5").update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod};function Md5(t){if(t)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(t){if(!this.finalized){var e,s=typeof t;if("string"!==s){if("object"!==s)throw ERROR;if(null===t)throw ERROR;if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||ARRAY_BUFFER&&ArrayBuffer.isView(t)))throw ERROR;e=!0}for(var o,r,i=0,n=t.length,a=this.blocks,c=this.buffer8;i<n;){if(this.hashed&&(this.hashed=!1,a[0]=a[16],a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),e)if(ARRAY_BUFFER)for(r=this.start;i<n&&r<64;++i)c[r++]=t[i];else for(r=this.start;i<n&&r<64;++i)a[r>>2]|=t[i]<<SHIFT[3&r++];else if(ARRAY_BUFFER)for(r=this.start;i<n&&r<64;++i)(o=t.charCodeAt(i))<128?c[r++]=o:o<2048?(c[r++]=192|o>>6,c[r++]=128|63&o):o<55296||o>=57344?(c[r++]=224|o>>12,c[r++]=128|o>>6&63,c[r++]=128|63&o):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++i)),c[r++]=240|o>>18,c[r++]=128|o>>12&63,c[r++]=128|o>>6&63,c[r++]=128|63&o);else for(r=this.start;i<n&&r<64;++i)(o=t.charCodeAt(i))<128?a[r>>2]|=o<<SHIFT[3&r++]:o<2048?(a[r>>2]|=(192|o>>6)<<SHIFT[3&r++],a[r>>2]|=(128|63&o)<<SHIFT[3&r++]):o<55296||o>=57344?(a[r>>2]|=(224|o>>12)<<SHIFT[3&r++],a[r>>2]|=(128|o>>6&63)<<SHIFT[3&r++],a[r>>2]|=(128|63&o)<<SHIFT[3&r++]):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++i)),a[r>>2]|=(240|o>>18)<<SHIFT[3&r++],a[r>>2]|=(128|o>>12&63)<<SHIFT[3&r++],a[r>>2]|=(128|o>>6&63)<<SHIFT[3&r++],a[r>>2]|=(128|63&o)<<SHIFT[3&r++]);this.lastByteIndex=r,this.bytes+=r-this.start,r>=64?(this.start=r-64,this.hash(),this.hashed=!0):this.start=r}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=EXTRA[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var t,e,s,o,r,i,n=this.blocks;this.first?e=((e=((t=((t=n[0]-680876937)<<7|t>>>25)-271733879<<0)^(s=((s=(-271733879^(o=((o=(-1732584194^2004318071&t)+n[1]-117830708)<<12|o>>>20)+t<<0)&(-271733879^t))+n[2]-1126478375)<<17|s>>>15)+o<<0)&(o^t))+n[3]-1316259209)<<22|e>>>10)+s<<0:(t=this.h0,e=this.h1,s=this.h2,e=((e+=((t=((t+=((o=this.h3)^e&(s^o))+n[0]-680876936)<<7|t>>>25)+e<<0)^(s=((s+=(e^(o=((o+=(s^t&(e^s))+n[1]-389564586)<<12|o>>>20)+t<<0)&(t^e))+n[2]+606105819)<<17|s>>>15)+o<<0)&(o^t))+n[3]-1044525330)<<22|e>>>10)+s<<0),e=((e+=((t=((t+=(o^e&(s^o))+n[4]-176418897)<<7|t>>>25)+e<<0)^(s=((s+=(e^(o=((o+=(s^t&(e^s))+n[5]+1200080426)<<12|o>>>20)+t<<0)&(t^e))+n[6]-1473231341)<<17|s>>>15)+o<<0)&(o^t))+n[7]-45705983)<<22|e>>>10)+s<<0,e=((e+=((t=((t+=(o^e&(s^o))+n[8]+1770035416)<<7|t>>>25)+e<<0)^(s=((s+=(e^(o=((o+=(s^t&(e^s))+n[9]-1958414417)<<12|o>>>20)+t<<0)&(t^e))+n[10]-42063)<<17|s>>>15)+o<<0)&(o^t))+n[11]-1990404162)<<22|e>>>10)+s<<0,e=((e+=((t=((t+=(o^e&(s^o))+n[12]+1804603682)<<7|t>>>25)+e<<0)^(s=((s+=(e^(o=((o+=(s^t&(e^s))+n[13]-40341101)<<12|o>>>20)+t<<0)&(t^e))+n[14]-1502002290)<<17|s>>>15)+o<<0)&(o^t))+n[15]+1236535329)<<22|e>>>10)+s<<0,e=((e+=((o=((o+=(e^s&((t=((t+=(s^o&(e^s))+n[1]-165796510)<<5|t>>>27)+e<<0)^e))+n[6]-1069501632)<<9|o>>>23)+t<<0)^t&((s=((s+=(t^e&(o^t))+n[11]+643717713)<<14|s>>>18)+o<<0)^o))+n[0]-373897302)<<20|e>>>12)+s<<0,e=((e+=((o=((o+=(e^s&((t=((t+=(s^o&(e^s))+n[5]-701558691)<<5|t>>>27)+e<<0)^e))+n[10]+38016083)<<9|o>>>23)+t<<0)^t&((s=((s+=(t^e&(o^t))+n[15]-660478335)<<14|s>>>18)+o<<0)^o))+n[4]-405537848)<<20|e>>>12)+s<<0,e=((e+=((o=((o+=(e^s&((t=((t+=(s^o&(e^s))+n[9]+568446438)<<5|t>>>27)+e<<0)^e))+n[14]-1019803690)<<9|o>>>23)+t<<0)^t&((s=((s+=(t^e&(o^t))+n[3]-187363961)<<14|s>>>18)+o<<0)^o))+n[8]+1163531501)<<20|e>>>12)+s<<0,e=((e+=((o=((o+=(e^s&((t=((t+=(s^o&(e^s))+n[13]-1444681467)<<5|t>>>27)+e<<0)^e))+n[2]-51403784)<<9|o>>>23)+t<<0)^t&((s=((s+=(t^e&(o^t))+n[7]+1735328473)<<14|s>>>18)+o<<0)^o))+n[12]-1926607734)<<20|e>>>12)+s<<0,e=((e+=((i=(o=((o+=((r=e^s)^(t=((t+=(r^o)+n[5]-378558)<<4|t>>>28)+e<<0))+n[8]-2022574463)<<11|o>>>21)+t<<0)^t)^(s=((s+=(i^e)+n[11]+1839030562)<<16|s>>>16)+o<<0))+n[14]-35309556)<<23|e>>>9)+s<<0,e=((e+=((i=(o=((o+=((r=e^s)^(t=((t+=(r^o)+n[1]-1530992060)<<4|t>>>28)+e<<0))+n[4]+1272893353)<<11|o>>>21)+t<<0)^t)^(s=((s+=(i^e)+n[7]-155497632)<<16|s>>>16)+o<<0))+n[10]-1094730640)<<23|e>>>9)+s<<0,e=((e+=((i=(o=((o+=((r=e^s)^(t=((t+=(r^o)+n[13]+681279174)<<4|t>>>28)+e<<0))+n[0]-358537222)<<11|o>>>21)+t<<0)^t)^(s=((s+=(i^e)+n[3]-722521979)<<16|s>>>16)+o<<0))+n[6]+76029189)<<23|e>>>9)+s<<0,e=((e+=((i=(o=((o+=((r=e^s)^(t=((t+=(r^o)+n[9]-640364487)<<4|t>>>28)+e<<0))+n[12]-421815835)<<11|o>>>21)+t<<0)^t)^(s=((s+=(i^e)+n[15]+530742520)<<16|s>>>16)+o<<0))+n[2]-995338651)<<23|e>>>9)+s<<0,e=((e+=((o=((o+=(e^((t=((t+=(s^(e|~o))+n[0]-198630844)<<6|t>>>26)+e<<0)|~s))+n[7]+1126891415)<<10|o>>>22)+t<<0)^((s=((s+=(t^(o|~e))+n[14]-1416354905)<<15|s>>>17)+o<<0)|~t))+n[5]-57434055)<<21|e>>>11)+s<<0,e=((e+=((o=((o+=(e^((t=((t+=(s^(e|~o))+n[12]+1700485571)<<6|t>>>26)+e<<0)|~s))+n[3]-1894986606)<<10|o>>>22)+t<<0)^((s=((s+=(t^(o|~e))+n[10]-1051523)<<15|s>>>17)+o<<0)|~t))+n[1]-2054922799)<<21|e>>>11)+s<<0,e=((e+=((o=((o+=(e^((t=((t+=(s^(e|~o))+n[8]+1873313359)<<6|t>>>26)+e<<0)|~s))+n[15]-30611744)<<10|o>>>22)+t<<0)^((s=((s+=(t^(o|~e))+n[6]-1560198380)<<15|s>>>17)+o<<0)|~t))+n[13]+1309151649)<<21|e>>>11)+s<<0,e=((e+=((o=((o+=(e^((t=((t+=(s^(e|~o))+n[4]-145523070)<<6|t>>>26)+e<<0)|~s))+n[11]-1120210379)<<10|o>>>22)+t<<0)^((s=((s+=(t^(o|~e))+n[2]+718787259)<<15|s>>>17)+o<<0)|~t))+n[9]-343485551)<<21|e>>>11)+s<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=s-1732584194<<0,this.h3=o+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+s<<0,this.h3=this.h3+o<<0)},Md5.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,s=this.h2,o=this.h3;return HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[15&o]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,s=this.h2,o=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&s,s>>8&255,s>>16&255,s>>24&255,255&o,o>>8&255,o>>16&255,o>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var t,e,s,o="",r=this.array(),i=0;i<15;)t=r[i++],e=r[i++],s=r[i++],o+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[63&(t<<4|e>>>4)]+BASE64_ENCODE_CHAR[63&(e<<2|s>>>6)]+BASE64_ENCODE_CHAR[63&s];return t=r[i],o+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[t<<4&63]+"=="};var exports=createMethod();COMMON_JS?module.exports=exports:(root.md5=exports,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()}).call(exports,__webpack_require__("W2nU"),__webpack_require__("DuR2"))},W5wq:function(t,e){},rqbd:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("bOdI"),r=s.n(o),i=(s("XmAh"),s("il3B")),n=s("NC6I"),a=s.n(n),c=s("j/ZV"),d=s("0xDb"),l={name:"r-login",created:function(){},data:function(){return{accountNo:this.$store.getters.userName||"",accountNoErr:"",password:Object(d.c)(this.$store.getters.userPassword||"")||"",passwordErr:"",code:"",codeErr:"",codeID:"",disabled:!1,codeImg:"",loading:!1,loadCode:!1}},mounted:function(){this.$store.getters.serverIP?this.getCode():this.showTypeChange(0)},methods:{getCode:function(){var t=this;this.codeImg="",this.loadCode=!0,this.$mainHttp.account.getLoginCode().then(function(e){e.Result&&e.Datas&&(t.codeID=e.Datas.slice(0,32),t.codeImg="data:image/png;base64,"+e.Datas.slice(32)),t.loadCode=!1}).catch(function(e){t.codeImg="",t.loadCode=!1})},showTypeChange:function(t){this.$emit("change",t)},loginSubmit:function(){if(this.accountNoErr="",this.passwordErr="",!this.$store.getters.serverIP)return this.$toast("请先设置服务地址"),void this.showTypeChange(0);""!==this.accountNo?""!==this.password?""!==this.code?this.codeValidate():this.codeErr="请输入验证码,不区分大小写":this.passwordErr="请输入登录密码":this.accountNoErr="请输入登录账号"},codeValidate:function(){var t=this;this.$mainHttp.account.postCodeValidate({code:this.code},this.codeID).then(function(e){e.Result?t.LoginRequest():e.Info?t.codeErr=e.Info:t.codeErr="验证码错误"}).catch(function(e){t.codeErr="验证码错误"})},LoginRequest:function(){var t=this;this.loading||(this.loading=!0,this.disabled=!0,this.$store.dispatch("LoginByUser",{userInfo:{name:this.accountNo,pwd:a()(this.password),code:this.code,from:"22"},other:this.codeID}).then(function(e){e.Result?(t.$store.commit("SET_USERPASSWORD",Object(d.e)(t.password)),t.$router.push("/index"),Object(c.b)(c.a.hadLogin,"")):(e.Info,t.$toast("账号或密码错误"),t.getCode()),t.disabled=!1,t.loading=!1}).catch(function(e){t.disabled=!1,t.loading=!1}))}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-wrap"},[s("div",{staticClass:"login_setting"},[s("van-icon",{attrs:{name:"setting-o"},on:{click:function(e){return t.showTypeChange(0)}}})],1),t._v(" "),s("div",{staticClass:"logo"}),t._v(" "),s("div",{staticClass:"loginForm"},[s("div",{staticClass:"formItem"},[s("van-field",{attrs:{placeholder:"账号","error-message":t.accountNoErr,required:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.loginSubmit(e)}},model:{value:t.accountNo,callback:function(e){t.accountNo=e},expression:"accountNo"}},[s("van-icon",{attrs:{slot:"left-icon","class-prefix":"iconfont icon-wode-weixuanzhong"},slot:"left-icon"})],1)],1),t._v(" "),s("div",{staticClass:"formItem"},[s("van-field",{attrs:{type:"password",placeholder:"密码","error-message":t.passwordErr,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[s("van-icon",{attrs:{slot:"left-icon","class-prefix":"iconfont icon-mima"},slot:"left-icon"})],1)],1),t._v(" "),s("div",{staticClass:"formItem"},[s("van-field",{attrs:{placeholder:"验证码","error-message":t.codeErr,required:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.loginSubmit(e)}},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}},[s("van-icon",{attrs:{slot:"left-icon","class-prefix":"iconfont icon-yanzhengma"},slot:"left-icon"}),t._v(" "),s("div",{attrs:{slot:"button"},slot:"button"},[s("van-image",{attrs:{width:"9.7rem",fit:"contain",src:t.codeImg},on:{click:t.getCode},scopedSlots:t._u([{key:"error",fn:function(){return[t.loadCode?s("van-loading",{attrs:{type:"spinner",size:"20"}}):s("span",[t._v("加载失败")])]},proxy:!0}])})],1)],1)],1)]),t._v(" "),s("div",{staticClass:"footer"},[s("van-button",{attrs:{type:"primary",loading:t.loading,disabled:t.disabled,"loading-text":"登录中..."},on:{click:t.loginSubmit}},[t._v("登录")]),t._v(" "),s("div",{staticClass:"footer_operate"},[s("span",{on:{click:function(e){return t.showTypeChange(2)}}},[t._v("用户注册")])])],1)])},staticRenderFns:[]};var u=s("VU/8")(l,h,!1,function(t){s("3o3C")},null,null).exports,f=s("E4LH"),p={name:"r-register",components:{},created:function(){},data:function(){return{accountNo:"",accountNoErr:"",username:"",usernameErr:"",password:"",passwordErr:"",rePassword:"",rePasswordErr:"",studentID:"",btnName:"注册",disabled:!1,loading:!1,passwordStrongArr:["极弱","弱","中","强","很强"],passwordStrongColor:["#ee0a24","#FF9900","#1989fa","#33CC00","#07c160"]}},computed:{strongIndex:function(){return 0===this.password.length?-1:Object(f.a)(this.password)}},methods:{showTypeChange:function(t){this.$emit("change",t)},registerSubmit:function(){if(this.accountNoErr="",this.usernameErr="",this.passwordErr="",this.rePasswordErr="",""!==this.accountNo)if(""!==this.username)if(""!==this.password)if(this.strongIndex<2)this.passwordErr="密码强度过低，可使用字母、特殊字符增加强度";else if(""!==this.rePassword)if(this.rePassword===this.password){if(!this.$store.getters.serverIP)return this.$toast("请先设置服务地址"),void this.showTypeChange(0);this.loading=!0,this.disabled=!0,this.verifyUserName()}else this.rePasswordErr="两次输入的密码不一致";else this.rePasswordErr="请输入确认密码";else this.passwordErr="请输入登录密码";else this.usernameErr="请输入姓名";else this.accountNoErr="请输入学号"},verifyUserName:function(){var t=this;this.$mainHttp.student.getStudentValidate({name:this.username,xh:this.accountNo}).then(function(e){e.Result?t.verifyUser():e.Info?(t.$toast(e.Info),t.disabled=!1,t.loading=!1):(t.accountNoErr="学号或姓名不正确",t.$toast("学号或姓名不正确"),t.disabled=!1,t.loading=!1)}).catch(function(e){t.disabled=!1,t.loading=!1})},verifyUser:function(){var t=this;this.$mainHttp.student.getVerifyData({xh:this.accountNo}).then(function(e){e.Result?(t.studentID=e.Data.StudentID,t.postRegister()):e.Info?(t.$toast(e.Info),t.disabled=!1,t.loading=!1):(t.accountNoErr="学号不正确",t.$toast("请确认学号"),t.disabled=!1,t.loading=!1)}).catch(function(e){t.disabled=!1,t.loading=!1})},postRegister:function(){var t=this,e={name:this.accountNo,id:this.studentID,type:2,pwd:this.password};this.$mainHttp.account.postRegister(e).then(function(e){e.Result?(t.$toast("注册成功"),t.btnName="重新注册",t.$store.commit("SET_USER",t.accountNo),t.$store.commit("SET_USERPASSWORD",""),t.disabled=!1,t.loading=!1,setTimeout(function(){t.showTypeChange(1)},500)):e.Info?(t.$toast(e.Info),t.disabled=!1,t.loading=!1):(t.$toast("注册失败"),t.disabled=!1,t.loading=!1)}).catch(function(e){t.disabled=!1,t.loading=!1})}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-wrap"},[s("div",{staticClass:"login_setting"},[s("van-icon",{attrs:{name:"setting-o"},on:{click:function(e){return t.showTypeChange(0)}}})],1),t._v(" "),s("div",{staticClass:"logo"}),t._v(" "),s("div",{staticClass:"loginForm"},[s("div",{staticClass:"formItem"},[s("van-field",{attrs:{placeholder:"学号","error-message":t.accountNoErr,required:""},model:{value:t.accountNo,callback:function(e){t.accountNo=e},expression:"accountNo"}},[s("van-icon",{attrs:{slot:"left-icon","class-prefix":"iconfont icon-gerenziliao"},slot:"left-icon"})],1)],1),t._v(" "),s("div",{staticClass:"formItem"},[s("van-field",{attrs:{placeholder:"姓名","error-message":t.usernameErr,required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}},[s("van-icon",{attrs:{slot:"left-icon","class-prefix":"iconfont icon-wode-weixuanzhong"},slot:"left-icon"})],1)],1),t._v(" "),s("div",{staticClass:"formItem"},[s("van-field",{attrs:{type:"password",placeholder:"密码","error-message":t.passwordErr,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[s("van-icon",{attrs:{slot:"left-icon","class-prefix":"iconfont icon-mima"},slot:"left-icon"}),t._v(" "),t.strongIndex>-1?s("span",{style:{color:t.passwordStrongColor[t.strongIndex]},attrs:{slot:"right-icon"},slot:"right-icon"},[t._v("\n          "+t._s(t.passwordStrongArr[t.strongIndex])+"\n        ")]):t._e()],1)],1),t._v(" "),s("div",{staticClass:"formItem"},[s("van-field",{attrs:{type:"password",placeholder:"确认密码","error-message":t.rePasswordErr,required:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.registerSubmit(e)}},model:{value:t.rePassword,callback:function(e){t.rePassword=e},expression:"rePassword"}},[s("van-icon",{attrs:{slot:"left-icon","class-prefix":"iconfont icon-mima"},slot:"left-icon"})],1)],1)]),t._v(" "),s("div",{staticClass:"footer"},[s("van-button",{attrs:{type:"primary",loading:t.loading,disabled:t.disabled,"loading-text":"注册中..."},on:{click:t.registerSubmit}},[t._v(t._s(t.btnName))]),t._v(" "),s("div",{staticClass:"footer_operate"},[s("span",{on:{click:function(e){return t.showTypeChange(1)}}},[t._v("返回登录")])])],1)])},staticRenderFns:[]};var v=s("VU/8")(p,_,!1,function(t){s("W5wq")},"data-v-798fec52",null).exports,g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-wrap"},[s("div",{staticClass:"loginForm setForm"},[s("div",{staticClass:"formItem"},[s("van-field",{attrs:{placeholder:"服务地址","error-message":t.serverIPErr,required:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.setSubmit(e)}},model:{value:t.serverIP,callback:function(e){t.serverIP=e},expression:"serverIP"}},[s("van-icon",{attrs:{slot:"left-icon","class-prefix":"iconfont icon-IP1"},slot:"left-icon"})],1)],1)]),t._v(" "),s("div",{staticClass:"footer"},[s("van-button",{attrs:{type:"primary",loading:t.loading,disabled:t.disabled,"loading-text":"保存中..."},on:{click:t.setSubmit}},[t._v(t._s(t.btnName))]),t._v(" "),s("div",{staticClass:"footer_operate"},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.$store.getters.serverIP,expression:"$store.getters.serverIP"}],on:{click:function(e){return t.showTypeChange(1)}}},[t._v("返回")])])],1)])},staticRenderFns:[]};var E=s("VU/8")({name:"r-setting",components:{},created:function(){},data:function(){return{serverIP:this.$store.getters.serverIP||"",serverIPErr:"",btnName:"保存",disabled:!1,loading:!1}},methods:{showTypeChange:function(t){this.$emit("change",t)},setSubmit:function(){try{if(this.serverIPErr="",""===this.serverIP)return void(this.serverIPErr="请输入服务地址");if(this.loading)return;this.loading=!0,this.disabled=!0,this.$store.commit("SET_SERVERIP",this.serverIP),this.$toast("保存成功"),this.disabled=!1,this.loading=!1,this.btnName="重新保存",this.showTypeChange(1)}catch(t){this.disabled=!1,this.loading=!1}}}},g,!1,function(t){s("CNj9")},null,null).exports,m={name:"login",components:r()({RLogin:u,RRegister:v,RSetting:E},i.a.Component.name,i.a.Component),beforeCreate:function(){this.$store.dispatch("logout")},created:function(){},data:function(){return{showType:1,dialogShow:!1,agreementVisible:!1,policyVisible:!1}},mounted:function(){this.$store.getters.agreeUse||(this.dialogShow=!0)},methods:{changeShow:function(t){this.showType=t},agree:function(){this.$store.commit("SET_AGREEUSE",1)},cancel:function(){Object(c.b)(c.a.exitAPP,"")},showAgreement:function(){this.$router.push("/agreement")},showPolicy:function(){this.$router.push("/policy")}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-wrap"},[0===t.showType?s("r-setting",{on:{change:t.changeShow}}):1===t.showType?s("r-login",{on:{change:t.changeShow}}):2===t.showType?s("r-register",{on:{change:t.changeShow}}):t._e(),t._v(" "),s("van-dialog",{attrs:{title:"服务协议和隐私政策","show-confirm-button":"","confirm-button-text":"同意","show-cancel-button":"","cancel-button-text":"暂不使用"},on:{confirm:t.agree,cancel:t.cancel},model:{value:t.dialogShow,callback:function(e){t.dialogShow=e},expression:"dialogShow"}},[s("div",{staticClass:"dialog_message"},[s("div",[t._v("\n        请你务必审慎阅读、充分理解“服务协议”和“隐私政策”各条款，包括但不限于：为了向你提供即时通讯、内容分享等服务，我们需要收集你的设备信息、操作日志等个人信息。你可以在“设置”中查看、变更、删除个人信息并管理你的授权。\n      ")]),t._v(" "),s("div",[t._v("\n        你可阅读\n        "),s("span",{staticClass:"dialog_operate",on:{click:t.showAgreement}},[t._v("《服务协议》")]),t._v("\n        和\n        "),s("span",{staticClass:"dialog_operate",on:{click:t.showPolicy}},[t._v("《隐私政策》")]),t._v("\n        了解详细信息。如你同意，请点击“同意”开始接受我们的服务。\n      ")])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.showType,expression:"showType!==0"}],staticClass:"foot_remark"},[s("div",{staticClass:"foot_remark_content"},[s("span",{staticClass:"dialog_operate",on:{click:t.showAgreement}},[t._v("《服务协议》")]),t._v("\n      |\n      "),s("span",{staticClass:"dialog_operate",on:{click:t.showPolicy}},[t._v("《隐私政策》")])])])],1)},staticRenderFns:[]};var y=s("VU/8")(m,b,!1,function(t){s("+EtT")},null,null);e.default=y.exports}});
//# sourceMappingURL=6.3a5b029214d8882dc4a1.js.map