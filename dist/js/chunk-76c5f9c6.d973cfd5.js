(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76c5f9c6"],{"0b2f":function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"r-digit"},[s("p",{staticClass:"digit-title"},[t._v(t._s(t.title))]),s("p",{staticClass:"digit-remark"},[t._v(t._s(t.subTitle))]),s("div",{staticClass:"digit-main"},[s("div",[s("van-field",{ref:"topText",staticClass:"digit-top",attrs:{type:"digit",maxlength:t.codeLength},model:{value:t.codeValue,callback:function(e){t.codeValue=e},expression:"codeValue"}})],1),s("div",{staticClass:"digit-input"},t._l(t.codeArr.length,(function(e,o){return s("van-field",{key:o,class:["digit-text","len_"+t.codeArr.length,o===t.codeValue.length?"digit-focus":""],staticStyle:{width:"10vw"},attrs:{type:"digit",disabled:"",maxlength:"1"},model:{value:t.codeArr[o],callback:function(e){t.$set(t.codeArr,o,e)},expression:"codeArr[index]"}})})),1)]),s("div",{staticClass:"digit-operate"},[s("van-button",{staticClass:"digit-btn",attrs:{type:"primary",loading:t.invitedLoading},on:{click:t.submitCode}},[t._v(" "+t._s(t.btnName)+" ")])],1)])},i=[],r=(s("7db0"),s("a434"),s("a9e3"),s("ac1f"),s("1276"),{name:"r-digit-input",props:{title:{type:String,default:""},subTitle:{type:String,default:""},codeLength:{type:Number,default:1},btnName:{type:String,default:"操作"},codeName:{type:String,default:"邀请码"}},data:function(){return{invitedLoading:!1,codeValue:""}},computed:{codeArr:function(){var t=[];t=this.codeValue.split("");for(var e=t.length;e<this.codeLength;e++)t.push("");return t}},methods:{init:function(){var t=this;this.codeValue="",setTimeout((function(){t.$refs["topText"].focus()}),0)},onTextInput:function(t,e){this.codeArr.splice(t,1,e.data)},onInput:function(t){this.codeArr[t]&&t<this.codeLength-1&&this.$refs["ref"+(t+1)][0].focus()},onDelete:function(t){t>0&&this.$refs["ref"+(t-1)][0].focus()},submitCode:function(){var t=this.codeArr.find((function(t){return!t}));t>-1?this.$toast("请输入"+this.codeName):this.$emit("submit",this.codeArr)}}}),n=r,a=s("2877"),c=Object(a["a"])(n,o,i,!1,null,null,null),l=c.exports;e["a"]=l},1354:function(t,e,s){},"3c35":function(t,e){(function(e){t.exports=e}).call(this,{})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var o=s("1d80"),i=s("5899"),r="["+i+"]",n=RegExp("^"+r+r+"*"),a=RegExp(r+r+"*$"),c=function(t){return function(e){var s=String(o(e));return 1&t&&(s=s.replace(n,"")),2&t&&(s=s.replace(a,"")),s}};t.exports={start:c(1),end:c(2),trim:c(3)}},6810:function(t,e,s){"use strict";var o=s("1354"),i=s.n(o);i.a},7156:function(t,e,s){var o=s("861d"),i=s("d2bb");t.exports=function(t,e,s){var r,n;return i&&"function"==typeof(r=e.constructor)&&r!==s&&o(n=r.prototype)&&n!==s.prototype&&i(t,n),t}},"7db0":function(t,e,s){"use strict";var o=s("23e7"),i=s("b727").find,r=s("44d2"),n=s("ae40"),a="find",c=!0,l=n(a);a in[]&&Array(1)[a]((function(){c=!1})),o({target:"Array",proto:!0,forced:c||!l},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(a)},8237:function(module,exports,__webpack_require__){(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */(function(){"use strict";var ERROR="input is invalid type",WINDOW="object"===typeof window,root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"===typeof self,NODE_JS=!root.JS_MD5_NO_NODE_JS&&"object"===typeof process&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&"object"===typeof module&&module.exports,AMD=__webpack_require__("3c35"),ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!==typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}!root.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"===typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t){return function(e){return new Md5(!0).update(e)[t]()}},createMethod=function(){var t=createOutputMethod("hex");NODE_JS&&(t=nodeWrap(t)),t.create=function(){return new Md5},t.update=function(e){return t.create().update(e)};for(var e=0;e<OUTPUT_TYPES.length;++e){var s=OUTPUT_TYPES[e];t[s]=createOutputMethod(s)}return t},nodeWrap=function(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(t){if("string"===typeof t)return crypto.createHash("md5").update(t,"utf8").digest("hex");if(null===t||void 0===t)throw ERROR;return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash("md5").update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod};function Md5(t){if(t)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(t){if(!this.finalized){var e,s=typeof t;if("string"!==s){if("object"!==s)throw ERROR;if(null===t)throw ERROR;if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw ERROR;e=!0}var o,i,r=0,n=t.length,a=this.blocks,c=this.buffer8;while(r<n){if(this.hashed&&(this.hashed=!1,a[0]=a[16],a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),e)if(ARRAY_BUFFER)for(i=this.start;r<n&&i<64;++r)c[i++]=t[r];else for(i=this.start;r<n&&i<64;++r)a[i>>2]|=t[r]<<SHIFT[3&i++];else if(ARRAY_BUFFER)for(i=this.start;r<n&&i<64;++r)o=t.charCodeAt(r),o<128?c[i++]=o:o<2048?(c[i++]=192|o>>6,c[i++]=128|63&o):o<55296||o>=57344?(c[i++]=224|o>>12,c[i++]=128|o>>6&63,c[i++]=128|63&o):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++r)),c[i++]=240|o>>18,c[i++]=128|o>>12&63,c[i++]=128|o>>6&63,c[i++]=128|63&o);else for(i=this.start;r<n&&i<64;++r)o=t.charCodeAt(r),o<128?a[i>>2]|=o<<SHIFT[3&i++]:o<2048?(a[i>>2]|=(192|o>>6)<<SHIFT[3&i++],a[i>>2]|=(128|63&o)<<SHIFT[3&i++]):o<55296||o>=57344?(a[i>>2]|=(224|o>>12)<<SHIFT[3&i++],a[i>>2]|=(128|o>>6&63)<<SHIFT[3&i++],a[i>>2]|=(128|63&o)<<SHIFT[3&i++]):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++r)),a[i>>2]|=(240|o>>18)<<SHIFT[3&i++],a[i>>2]|=(128|o>>12&63)<<SHIFT[3&i++],a[i>>2]|=(128|o>>6&63)<<SHIFT[3&i++],a[i>>2]|=(128|63&o)<<SHIFT[3&i++]);this.lastByteIndex=i,this.bytes+=i-this.start,i>=64?(this.start=i-64,this.hash(),this.hashed=!0):this.start=i}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=EXTRA[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var t,e,s,o,i,r,n=this.blocks;this.first?(t=n[0]-680876937,t=(t<<7|t>>>25)-271733879<<0,o=(-1732584194^2004318071&t)+n[1]-117830708,o=(o<<12|o>>>20)+t<<0,s=(-271733879^o&(-271733879^t))+n[2]-1126478375,s=(s<<17|s>>>15)+o<<0,e=(t^s&(o^t))+n[3]-1316259209,e=(e<<22|e>>>10)+s<<0):(t=this.h0,e=this.h1,s=this.h2,o=this.h3,t+=(o^e&(s^o))+n[0]-680876936,t=(t<<7|t>>>25)+e<<0,o+=(s^t&(e^s))+n[1]-389564586,o=(o<<12|o>>>20)+t<<0,s+=(e^o&(t^e))+n[2]+606105819,s=(s<<17|s>>>15)+o<<0,e+=(t^s&(o^t))+n[3]-1044525330,e=(e<<22|e>>>10)+s<<0),t+=(o^e&(s^o))+n[4]-176418897,t=(t<<7|t>>>25)+e<<0,o+=(s^t&(e^s))+n[5]+1200080426,o=(o<<12|o>>>20)+t<<0,s+=(e^o&(t^e))+n[6]-1473231341,s=(s<<17|s>>>15)+o<<0,e+=(t^s&(o^t))+n[7]-45705983,e=(e<<22|e>>>10)+s<<0,t+=(o^e&(s^o))+n[8]+1770035416,t=(t<<7|t>>>25)+e<<0,o+=(s^t&(e^s))+n[9]-1958414417,o=(o<<12|o>>>20)+t<<0,s+=(e^o&(t^e))+n[10]-42063,s=(s<<17|s>>>15)+o<<0,e+=(t^s&(o^t))+n[11]-1990404162,e=(e<<22|e>>>10)+s<<0,t+=(o^e&(s^o))+n[12]+1804603682,t=(t<<7|t>>>25)+e<<0,o+=(s^t&(e^s))+n[13]-40341101,o=(o<<12|o>>>20)+t<<0,s+=(e^o&(t^e))+n[14]-1502002290,s=(s<<17|s>>>15)+o<<0,e+=(t^s&(o^t))+n[15]+1236535329,e=(e<<22|e>>>10)+s<<0,t+=(s^o&(e^s))+n[1]-165796510,t=(t<<5|t>>>27)+e<<0,o+=(e^s&(t^e))+n[6]-1069501632,o=(o<<9|o>>>23)+t<<0,s+=(t^e&(o^t))+n[11]+643717713,s=(s<<14|s>>>18)+o<<0,e+=(o^t&(s^o))+n[0]-373897302,e=(e<<20|e>>>12)+s<<0,t+=(s^o&(e^s))+n[5]-701558691,t=(t<<5|t>>>27)+e<<0,o+=(e^s&(t^e))+n[10]+38016083,o=(o<<9|o>>>23)+t<<0,s+=(t^e&(o^t))+n[15]-660478335,s=(s<<14|s>>>18)+o<<0,e+=(o^t&(s^o))+n[4]-405537848,e=(e<<20|e>>>12)+s<<0,t+=(s^o&(e^s))+n[9]+568446438,t=(t<<5|t>>>27)+e<<0,o+=(e^s&(t^e))+n[14]-1019803690,o=(o<<9|o>>>23)+t<<0,s+=(t^e&(o^t))+n[3]-187363961,s=(s<<14|s>>>18)+o<<0,e+=(o^t&(s^o))+n[8]+1163531501,e=(e<<20|e>>>12)+s<<0,t+=(s^o&(e^s))+n[13]-1444681467,t=(t<<5|t>>>27)+e<<0,o+=(e^s&(t^e))+n[2]-51403784,o=(o<<9|o>>>23)+t<<0,s+=(t^e&(o^t))+n[7]+1735328473,s=(s<<14|s>>>18)+o<<0,e+=(o^t&(s^o))+n[12]-1926607734,e=(e<<20|e>>>12)+s<<0,i=e^s,t+=(i^o)+n[5]-378558,t=(t<<4|t>>>28)+e<<0,o+=(i^t)+n[8]-2022574463,o=(o<<11|o>>>21)+t<<0,r=o^t,s+=(r^e)+n[11]+1839030562,s=(s<<16|s>>>16)+o<<0,e+=(r^s)+n[14]-35309556,e=(e<<23|e>>>9)+s<<0,i=e^s,t+=(i^o)+n[1]-1530992060,t=(t<<4|t>>>28)+e<<0,o+=(i^t)+n[4]+1272893353,o=(o<<11|o>>>21)+t<<0,r=o^t,s+=(r^e)+n[7]-155497632,s=(s<<16|s>>>16)+o<<0,e+=(r^s)+n[10]-1094730640,e=(e<<23|e>>>9)+s<<0,i=e^s,t+=(i^o)+n[13]+681279174,t=(t<<4|t>>>28)+e<<0,o+=(i^t)+n[0]-358537222,o=(o<<11|o>>>21)+t<<0,r=o^t,s+=(r^e)+n[3]-722521979,s=(s<<16|s>>>16)+o<<0,e+=(r^s)+n[6]+76029189,e=(e<<23|e>>>9)+s<<0,i=e^s,t+=(i^o)+n[9]-640364487,t=(t<<4|t>>>28)+e<<0,o+=(i^t)+n[12]-421815835,o=(o<<11|o>>>21)+t<<0,r=o^t,s+=(r^e)+n[15]+530742520,s=(s<<16|s>>>16)+o<<0,e+=(r^s)+n[2]-995338651,e=(e<<23|e>>>9)+s<<0,t+=(s^(e|~o))+n[0]-198630844,t=(t<<6|t>>>26)+e<<0,o+=(e^(t|~s))+n[7]+1126891415,o=(o<<10|o>>>22)+t<<0,s+=(t^(o|~e))+n[14]-1416354905,s=(s<<15|s>>>17)+o<<0,e+=(o^(s|~t))+n[5]-57434055,e=(e<<21|e>>>11)+s<<0,t+=(s^(e|~o))+n[12]+1700485571,t=(t<<6|t>>>26)+e<<0,o+=(e^(t|~s))+n[3]-1894986606,o=(o<<10|o>>>22)+t<<0,s+=(t^(o|~e))+n[10]-1051523,s=(s<<15|s>>>17)+o<<0,e+=(o^(s|~t))+n[1]-2054922799,e=(e<<21|e>>>11)+s<<0,t+=(s^(e|~o))+n[8]+1873313359,t=(t<<6|t>>>26)+e<<0,o+=(e^(t|~s))+n[15]-30611744,o=(o<<10|o>>>22)+t<<0,s+=(t^(o|~e))+n[6]-1560198380,s=(s<<15|s>>>17)+o<<0,e+=(o^(s|~t))+n[13]+1309151649,e=(e<<21|e>>>11)+s<<0,t+=(s^(e|~o))+n[4]-145523070,t=(t<<6|t>>>26)+e<<0,o+=(e^(t|~s))+n[11]-1120210379,o=(o<<10|o>>>22)+t<<0,s+=(t^(o|~e))+n[2]+718787259,s=(s<<15|s>>>17)+o<<0,e+=(o^(s|~t))+n[9]-343485551,e=(e<<21|e>>>11)+s<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=s-1732584194<<0,this.h3=o+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+s<<0,this.h3=this.h3+o<<0)},Md5.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,s=this.h2,o=this.h3;return HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[15&o]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,s=this.h2,o=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&s,s>>8&255,s>>16&255,s>>24&255,255&o,o>>8&255,o>>16&255,o>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var t,e,s,o="",i=this.array(),r=0;r<15;)t=i[r++],e=i[r++],s=i[r++],o+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[63&(t<<4|e>>>4)]+BASE64_ENCODE_CHAR[63&(e<<2|s>>>6)]+BASE64_ENCODE_CHAR[63&s];return t=i[r],o+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[t<<4&63]+"==",o};var exports=createMethod();COMMON_JS?module.exports=exports:(root.md5=exports,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()}).call(this,__webpack_require__("4362"),__webpack_require__("c8ba"))},a434:function(t,e,s){"use strict";var o=s("23e7"),i=s("23cb"),r=s("a691"),n=s("50c4"),a=s("7b0b"),c=s("65f0"),l=s("8418"),d=s("1dde"),u=s("ae40"),h=d("splice"),f=u("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,g=Math.min,_=9007199254740991,v="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!h||!f},{splice:function(t,e){var s,o,d,u,h,f,m=a(this),b=n(m.length),E=i(t,b),y=arguments.length;if(0===y?s=o=0:1===y?(s=0,o=b-E):(s=y-2,o=g(p(r(e),0),b-E)),b+s-o>_)throw TypeError(v);for(d=c(m,o),u=0;u<o;u++)h=E+u,h in m&&l(d,u,m[h]);if(d.length=o,s<o){for(u=E;u<b-o;u++)h=u+o,f=u+s,h in m?m[f]=m[h]:delete m[f];for(u=b;u>b-o+s;u--)delete m[u-1]}else if(s>o)for(u=b-o;u>E;u--)h=u+o-1,f=u+s-1,h in m?m[f]=m[h]:delete m[f];for(u=0;u<s;u++)m[u+E]=arguments[u+2];return m.length=b-o+s,d}})},a5b7:function(t,e,s){t.exports=s.p+"img/boy_img.8267a8ec.png"},a9e3:function(t,e,s){"use strict";var o=s("83ab"),i=s("da84"),r=s("94ca"),n=s("6eeb"),a=s("5135"),c=s("c6b6"),l=s("7156"),d=s("c04e"),u=s("d039"),h=s("7c73"),f=s("241c").f,p=s("06cf").f,g=s("9bf2").f,_=s("58a8").trim,v="Number",m=i[v],b=m.prototype,E=c(h(b))==v,y=function(t){var e,s,o,i,r,n,a,c,l=d(t,!1);if("string"==typeof l&&l.length>2)if(l=_(l),e=l.charCodeAt(0),43===e||45===e){if(s=l.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:o=2,i=49;break;case 79:case 111:o=8,i=55;break;default:return+l}for(r=l.slice(2),n=r.length,a=0;a<n;a++)if(c=r.charCodeAt(a),c<48||c>i)return NaN;return parseInt(r,o)}return+l};if(r(v,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var w,C=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof C&&(E?u((function(){b.valueOf.call(s)})):c(s)!=v)?l(new m(y(e)),s,C):y(e)},A=o?f(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;A.length>S;S++)a(m,w=A[S])&&!a(C,w)&&g(C,w,p(m,w));C.prototype=b,b.constructor=C,n(i,v,C)}},c5d1:function(t,e,s){},c9f2:function(t,e,s){"use strict";var o=s("c5d1"),i=s.n(o);i.a},d48a:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-wrap"},[0===t.showType?s("to-setting",{on:{change:t.changeShow}}):1===t.showType?s("to-login",{on:{change:t.changeShow}}):2===t.showType?s("to-register",{on:{change:t.changeShow}}):t._e(),s("van-dialog",{attrs:{title:"服务协议和隐私政策","show-confirm-button":"","confirm-button-text":"同意","show-cancel-button":"","cancel-button-text":"暂不使用"},on:{confirm:t.agree,cancel:t.cancel},model:{value:t.dialogShow,callback:function(e){t.dialogShow=e},expression:"dialogShow"}},[s("div",{staticClass:"dialog_message"},[s("div",[t._v(" 请你务必审慎阅读、充分理解“服务协议”和“隐私政策”各条款，包括但不限于：为了向你提供即时通讯、内容分享等服务，我们需要收集你的设备信息、操作日志等个人信息。你可以在“设置”中查看、变更、删除个人信息并管理你的授权。 ")]),s("div",[t._v(" 你可阅读 "),s("span",{staticClass:"dialog_operate",on:{click:t.showAgreement}},[t._v("《服务协议》")]),t._v(" 和 "),s("span",{staticClass:"dialog_operate",on:{click:t.showPolicy}},[t._v("《隐私政策》")]),t._v(" 了解详细信息。如你同意，请点击“同意”开始接受我们的服务。 ")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.showType,expression:"showType!==0"}],staticClass:"foot_remark"},[s("div",{staticClass:"foot_remark_content"},[s("span",{staticClass:"dialog_operate",on:{click:t.showAgreement}},[t._v("《服务协议》")]),t._v(" | "),s("span",{staticClass:"dialog_operate",on:{click:t.showPolicy}},[t._v("《隐私政策》")])])])],1)},i=[],r=(s("b0c0"),s("ade3")),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-wrap"},[s("div",{staticClass:"login_setting"},[s("van-icon",{attrs:{name:"setting-o"},on:{click:function(e){return t.showTypeChange(0)}}})],1),s("div",{staticClass:"logo"}),s("div",{staticClass:"loginForm"},[s("div",{staticClass:"formItem"},[s("van-field",{attrs:{placeholder:"账号","error-message":t.accountNoErr,required:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.loginSubmit(e)}},model:{value:t.accountNo,callback:function(e){t.accountNo=e},expression:"accountNo"}},[s("van-icon",{attrs:{slot:"left-icon","class-prefix":"iconfont icon-wode-weixuanzhong"},slot:"left-icon"})],1)],1),s("div",{staticClass:"formItem"},[s("van-field",{attrs:{type:"password",placeholder:"密码","error-message":t.passwordErr,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[s("van-icon",{attrs:{slot:"left-icon","class-prefix":"iconfont icon-mima"},slot:"left-icon"})],1)],1),s("div",{staticClass:"formItem"},[s("van-field",{attrs:{placeholder:"验证码","error-message":t.codeErr,required:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.loginSubmit(e)}},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}},[s("van-icon",{attrs:{slot:"left-icon","class-prefix":"iconfont icon-yanzhengma"},slot:"left-icon"}),s("div",{attrs:{slot:"button"},slot:"button"},[s("van-image",{staticClass:"item-code",attrs:{fit:"contain",src:t.codeImg},on:{click:t.getCode},scopedSlots:t._u([{key:"error",fn:function(){return[t.loadCode?s("van-loading",{attrs:{type:"spinner",size:"20"}}):s("span",[t._v("加载失败")])]},proxy:!0}])})],1)],1)],1)]),s("div",{staticClass:"footer"},[s("van-button",{attrs:{type:"primary",loading:t.loading,disabled:t.disabled,"loading-text":"登录中..."},on:{click:t.loginSubmit}},[t._v(" 登录 ")]),s("div",{staticClass:"footer_operate"},[s("span"),s("span",{on:{click:function(e){return t.showTypeChange(2)}}},[t._v("用户注册")])])],1),s("van-popup",{attrs:{position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[s("van-cell",{attrs:{value:"扫一扫"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toScan(e)}}},[s("van-icon",{attrs:{slot:"right-icon",name:"scan"},slot:"right-icon"})],1),s("van-cell",{attrs:{value:"班级码"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toCode(e)}}},[s("van-icon",{attrs:{slot:"right-icon","class-prefix":"iconfont icon-yanzhengma1"},slot:"right-icon"})],1)],1),s("van-popup",{model:{value:t.codeVisible,callback:function(e){t.codeVisible=e},expression:"codeVisible"}},[s("r-digit-input",{ref:"digit",attrs:{title:"请输入班级码","sub-title":"请在下方输入班级码连接教室","code-length":6,"btn-name":"连接教室","code-name":"班级码"},on:{submit:t.submitCode}})],1),s("van-popup",{attrs:{position:"bottom",closeable:""},model:{value:t.guestShow,callback:function(e){t.guestShow=e},expression:"guestShow"}},[s("div",{staticClass:"sub_nav"},[s("span",[t._v("切换来宾账号")])]),s("van-cell-group",t._l(t.guestList,(function(e,o){return s("van-cell",{key:o,staticClass:"cell_main",attrs:{"is-link":""},on:{click:function(s){return t.guestSelect(e)}}},[s("template",{slot:"icon"},[s("img",{attrs:{src:t.defaultHead,alt:""}})]),s("template",{slot:"title"},[s("span",{staticClass:"line_title"},[t._v(t._s(e.name))])])],2)})),1)],1)],1)},a=[],c=(s("4160"),s("fb6a"),s("159b"),s("0b2f")),l=s("8237"),d=s.n(l),u=s("a5b7"),h=s.n(u),f=s("d11a"),p=s("ed08"),g=s("08f3"),_={name:"r-login",components:{RDigitInput:c["a"]},created:function(){},data:function(){return{accountNo:this.$store.getters.userName||"",accountNoErr:"",password:Object(p["a"])(this.$store.getters.userPassword||"")||"",passwordErr:"",code:"",codeErr:"",codeID:"",disabled:!1,codeImg:"",loading:!1,loadCode:!1,show:!1,codeVisible:!1,guestList:[],defaultHead:h.a,guestShow:!1}},mounted:function(){var t=this;this.$store.getters.serverIP?this.getCode():this.showTypeChange(0),window.acceptQRcode=function(e){return console.log("接收扫码：",e),t.submitScan(e),!0}},methods:{getCode:function(){var t=this;this.codeImg="",this.loadCode=!0,this.$mainHttp.account.getLoginCode().then((function(e){e.Result&&e.Datas&&(t.codeID=e.Datas.slice(0,32),t.codeImg="data:image/png;base64,".concat(e.Datas.slice(32))),t.loadCode=!1})).catch((function(){t.codeImg="",t.loadCode=!1}))},showTypeChange:function(t){this.$emit("change",t)},loginSubmit:function(){if(this.accountNoErr="",this.passwordErr="",!this.$store.getters.serverIP)return this.$toast("请先设置服务地址"),void this.showTypeChange(0);""!==this.accountNo?""!==this.password?""!==this.code?this.codeValidate():this.codeErr="请输入验证码,不区分大小写":this.passwordErr="请输入登录密码":this.accountNoErr="请输入登录账号"},codeValidate:function(){var t=this;this.$mainHttp.account.postCodeValidate({code:this.code},this.codeID).then((function(e){e.Result?t.LoginRequest():e.Info?t.codeErr=e.Info:t.codeErr="验证码错误"})).catch((function(){t.codeErr="验证码错误"}))},LoginRequest:function(){var t=this;this.loading||(this.loading=!0,this.disabled=!0,this.$store.dispatch("LoginByUser",{userInfo:{name:this.accountNo,pwd:d()(this.password),code:this.code,from:window.webkit?g["c"].TeacherIos:g["c"].TeacherAndroid},other:this.codeID}).then((function(e){if(e.Result){if(e.hasOwnProperty("IsGuestLock")&&e["IsGuestLock"])return t.$toast("该来宾账号已被占用，请更换"),void t.getGuestList();e.Teacher?(t.$store.commit("SET_USER_PASSWORD",Object(p["b"])(t.password)),t.$router.push("/index"),Object(f["b"])(f["a"].hadLogin,"")):(t.$toast("登录出错，请重试"),t.getCode())}else e.Info?(t.$toast("账号或密码错误"),t.getCode()):(t.$toast("请输入正确账号和密码"),t.getCode());t.disabled=!1,t.loading=!1})).catch((function(){t.disabled=!1,t.loading=!1})))},toScan:function(){Object(f["b"])(f["a"].openQRcode,"")},submitScan:function(t){console.log("code:",t),this.$store.commit("SET_CODEKEY","11112222"),this.$router.push("/course")},toCode:function(){var t=this;this.show=!1,this.codeVisible=!0,setTimeout((function(){t.$refs["digit"].init()}),0)},submitCode:function(t){console.log("arr:",t),this.$store.commit("SET_CODEKEY","11112222"),this.$router.push("/course")},getGuestList:function(){var t=this;this.guestList=[],this.code="",this.getCode(),this.disabled=!1,this.loading=!1,this.$mainHttp.account.getGuestList().then((function(e){e.Result&&e.Datas&&e.Datas.length>0&&e.Datas.forEach((function(e){t.guestList.push({id:e["UserID"],name:e["UserName"]})})),t.guestShow=!0})).catch((function(){t.guestShow=!0}))},guestSelect:function(t){this.accountNo=t.name,this.guestShow=!1}}},v=_,m=s("2877"),b=Object(m["a"])(v,n,a,!1,null,null,null),E=b.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-wrap"},[s("div",{staticClass:"login_setting"},[s("van-icon",{attrs:{name:"setting-o"},on:{click:function(e){return t.showTypeChange(0)}}})],1),s("div",{staticClass:"logo"}),s("div",{staticClass:"loginForm"},[s("div",{staticClass:"formItem"},[s("van-field",{attrs:{placeholder:"教工号","error-message":t.accountNoErr,required:""},model:{value:t.accountNo,callback:function(e){t.accountNo=e},expression:"accountNo"}},[s("van-icon",{attrs:{slot:"left-icon","class-prefix":"iconfont icon-gerenziliao"},slot:"left-icon"})],1)],1),s("div",{staticClass:"formItem"},[s("van-field",{attrs:{placeholder:"姓名","error-message":t.usernameErr,required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}},[s("van-icon",{attrs:{slot:"left-icon","class-prefix":"iconfont icon-wode-weixuanzhong"},slot:"left-icon"})],1)],1),s("div",{staticClass:"formItem"},[s("van-field",{attrs:{type:"password",placeholder:"密码","error-message":t.passwordErr,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[s("van-icon",{attrs:{slot:"left-icon","class-prefix":"iconfont icon-mima"},slot:"left-icon"}),t.strongIndex>-1?s("span",{style:{color:t.passwordStrongColor[t.strongIndex]},attrs:{slot:"right-icon"},slot:"right-icon"},[t._v(" "+t._s(t.passwordStrongArr[t.strongIndex])+" ")]):t._e()],1)],1),s("div",{staticClass:"formItem"},[s("van-field",{attrs:{type:"password",placeholder:"确认密码","error-message":t.rePasswordErr,required:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.registerSubmit(e)}},model:{value:t.rePassword,callback:function(e){t.rePassword=e},expression:"rePassword"}},[s("van-icon",{attrs:{slot:"left-icon","class-prefix":"iconfont icon-mima"},slot:"left-icon"})],1)],1)]),s("div",{staticClass:"footer"},[s("van-button",{attrs:{type:"primary",loading:t.loading,disabled:t.disabled,"loading-text":"注册中..."},on:{click:t.registerSubmit}},[t._v(" "+t._s(t.btnName)+" ")]),s("div",{staticClass:"footer_operate"},[s("span",{on:{click:function(e){return t.showTypeChange(1)}}},[t._v("返回登录")])])],1)])},w=[];s("d3b7"),s("25f0");function C(t){var e=0;if(t.length<6)return e;switch(/\d/.test(t)&&e++,/[a-z]/.test(t)&&e++,/[A-Z]/.test(t)&&e++,/\W/.test(t)&&e++,e){case 1:return 1;case 2:return 2;case 3:return 3;case 4:return 4;default:return 0}}var A={name:"r-register",components:{},created:function(){},data:function(){return{accountNo:"",accountNoErr:"",username:"",usernameErr:"",password:"",passwordErr:"",rePassword:"",rePasswordErr:"",teacherID:"",btnName:"注册",disabled:!1,loading:!1,passwordStrongArr:["极弱","弱","中","强","很强"],passwordStrongColor:["#ee0a24","#FF9900","#1989fa","#33CC00","#07c160"]}},computed:{strongIndex:function(){return 0===this.password.length?-1:C(this.password)}},methods:{showTypeChange:function(t){this.$emit("change",t)},registerSubmit:function(){if(this.accountNoErr="",this.usernameErr="",this.passwordErr="",this.rePasswordErr="",""!==this.accountNo)if(""!==this.username)if(""!==this.password)if(this.strongIndex<2)this.passwordErr="密码强度过低，可使用字母、特殊字符增加强度";else if(""!==this.rePassword)if(this.rePassword===this.password){if(!this.$store.getters.serverIP)return this.$toast("请先设置服务地址"),void this.showTypeChange(0);this.loading=!0,this.disabled=!0,this.verifyUserName()}else this.rePasswordErr="两次输入的密码不一致";else this.rePasswordErr="请输入确认密码";else this.passwordErr="请输入登录密码";else this.usernameErr="请输入姓名";else this.accountNoErr="请输入教工号"},verifyUserName:function(){var t=this;this.$mainHttp.teacher.getTeacherValidate({name:this.username,tno:this.accountNo}).then((function(e){e.Result?t.verifyUser():e.Info?(t.$toast(e.Info),t.disabled=!1,t.loading=!1):(t.accountNoErr="教工号或姓名不正确",t.$toast("教工号或姓名不正确"),t.disabled=!1,t.loading=!1)})).catch((function(){t.disabled=!1,t.loading=!1}))},verifyUser:function(){var t=this;this.$mainHttp.teacher.getVerifyData({tno:this.accountNo}).then((function(e){e.Result?(t.teacherID=e.Data["TeacherID"],t.postRegister()):e.Info?(t.$toast(e.Info),t.disabled=!1,t.loading=!1):(t.accountNoErr="教工号不正确",t.$toast("请确认教工号"),t.disabled=!1,t.loading=!1)})).catch((function(){t.disabled=!1,t.loading=!1}))},postRegister:function(){var t=this,e={name:this.accountNo,id:this.teacherID,type:1,pwd:this.password};this.$mainHttp.account.postRegister(e).then((function(e){e.Result?(t.$toast("注册成功"),t.btnName="重新注册",t.$store.commit("SET_USER",t.accountNo),t.$store.commit("SET_USER_PASSWORD",""),t.disabled=!1,t.loading=!1,setTimeout((function(){t.showTypeChange(1)}),500)):e.Info?(t.$toast(e.Info),t.disabled=!1,t.loading=!1):(t.$toast("注册失败"),t.disabled=!1,t.loading=!1)})).catch((function(){t.disabled=!1,t.loading=!1}))}}},S=A,R=Object(m["a"])(S,y,w,!1,null,null,null),I=R.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-wrap"},[s("div",{staticClass:"loginForm setForm"},[s("div",{staticClass:"formItem"},[s("van-field",{attrs:{placeholder:"服务地址","error-message":t.serverIPErr,required:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.setSubmit(e)}},model:{value:t.serverIP,callback:function(e){t.serverIP=e},expression:"serverIP"}},[s("van-icon",{attrs:{slot:"left-icon","class-prefix":"iconfont icon-IP1"},slot:"left-icon"})],1)],1)]),s("div",{staticClass:"footer"},[s("van-button",{attrs:{type:"primary",loading:t.loading,disabled:t.disabled,"loading-text":"保存中..."},on:{click:t.setSubmit}},[t._v(" "+t._s(t.btnName)+" ")]),s("div",{staticClass:"footer_operate"},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.$store.getters.serverIP,expression:"$store.getters.serverIP"}],on:{click:function(e){return t.showTypeChange(1)}}},[t._v(" 返回 ")])])],1)])},H=[],N=(s("ac1f"),s("5319"),{name:"r-setting",components:{},created:function(){},data:function(){return{serverIP:this.$store.getters.serverIP||"",serverIPErr:"",btnName:"保存",disabled:!1,loading:!1}},methods:{showTypeChange:function(t){this.$emit("change",t)},setSubmit:function(){try{if(this.serverIPErr="",this.serverIP=this.serverIP.replace(/\s+/g,""),""===this.serverIP)this.serverIPErr="请输入服务地址";else{if(this.loading)return;this.loading=!0,this.disabled=!0,this.$store.commit("SET_SERVER_IP",this.serverIP),this.$toast("保存成功"),this.disabled=!1,this.loading=!1,this.btnName="重新保存",this.showTypeChange(1)}}catch(t){this.disabled=!1,this.loading=!1}}}}),x=N,T=(s("c9f2"),Object(m["a"])(x,k,H,!1,null,null,null)),O=T.exports,D=s("2241"),$={name:"login",components:Object(r["a"])({ToLogin:E,ToRegister:I,ToSetting:O},D["a"].Component.name,D["a"].Component),beforeCreate:function(){this.$store.dispatch("Logout")},created:function(){},data:function(){return{showType:1,dialogShow:!1,agreementVisible:!1,policyVisible:!1}},mounted:function(){this.$store.getters.agreeUse||(this.dialogShow=!0)},methods:{changeShow:function(t){this.showType=t},agree:function(){this.$store.commit("SET_AGREE_USE",1)},cancel:function(){Object(f["b"])(f["a"].exitAPP,"")},showAgreement:function(){this.$router.push("/agreement")},showPolicy:function(){this.$router.push("/policy")}}},P=$,F=(s("6810"),Object(m["a"])(P,o,i,!1,null,null,null));e["default"]=F.exports}}]);
//# sourceMappingURL=chunk-76c5f9c6.d973cfd5.js.map