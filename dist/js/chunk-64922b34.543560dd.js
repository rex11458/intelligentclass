(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64922b34"],{"7db0":function(t,e,n){"use strict";var s=n("23e7"),a=n("b727").find,r=n("44d2"),i=n("ae40"),o="find",l=!0,u=i(o);o in[]&&Array(1)[o]((function(){l=!1})),s({target:"Array",proto:!0,forced:l||!u},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),r(o)},a434:function(t,e,n){"use strict";var s=n("23e7"),a=n("23cb"),r=n("a691"),i=n("50c4"),o=n("7b0b"),l=n("65f0"),u=n("8418"),d=n("1dde"),c=n("ae40"),v=d("splice"),p=c("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,f=Math.min,h=9007199254740991,w="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!v||!p},{splice:function(t,e){var n,s,d,c,v,p,_=o(this),g=i(_.length),y=a(t,g),b=arguments.length;if(0===b?n=s=0:1===b?(n=0,s=g-y):(n=b-2,s=f(m(r(e),0),g-y)),g+n-s>h)throw TypeError(w);for(d=l(_,s),c=0;c<s;c++)v=y+c,v in _&&u(d,c,_[v]);if(d.length=s,n<s){for(c=y;c<g-s;c++)v=c+s,p=c+n,v in _?_[p]=_[v]:delete _[p];for(c=g;c>g-s+n;c--)delete _[c-1]}else if(n>s)for(c=g-s;c>y;c--)v=c+s-1,p=c+n-1,v in _?_[p]=_[v]:delete _[p];for(c=0;c<n;c++)_[c+y]=arguments[c+2];return _.length=g-s+n,d}})},a5b7:function(t,e,n){t.exports=n.p+"img/boy_img.8267a8ec.png"},a609:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"course-screen-question"},[n("head-top",{attrs:{title:"截屏提问"}},[n("span",{attrs:{slot:"right"},on:{click:t.toClose},slot:"right"},[n("van-icon",{staticClass:"head-right",attrs:{"class-prefix":"iconfont icon-jieshu",size:"2.3rem",color:"#fff"}})],1)]),n("van-field",{attrs:{name:"uploader",label:"上传图片"},scopedSlots:t._u([{key:"input",fn:function(){return[n("van-uploader",{attrs:{"max-count":1,"before-read":t.beforeRead,"after-read":t.afterRead},model:{value:t.uploader,callback:function(e){t.uploader=e},expression:"uploader"}})]},proxy:!0}])}),n("van-field",{attrs:{name:"radio",label:"题目类型"},scopedSlots:t._u([{key:"input",fn:function(){return[n("van-radio-group",{attrs:{direction:"horizontal"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[n("van-radio",{attrs:{name:"1"}},[t._v("单选")]),n("van-radio",{attrs:{name:"2"}},[t._v("多选")]),n("van-radio",{attrs:{name:"3"}},[t._v("判断")]),n("van-radio",{attrs:{name:"4"}},[t._v("问答")])],1)]},proxy:!0}])}),n("van-field",{attrs:{name:"stepper",label:"题目选项"},scopedSlots:t._u([{key:"input",fn:function(){return[n("van-stepper",{attrs:{integer:"",min:"2",max:"10"},model:{value:t.optionsNum,callback:function(e){t.optionsNum=e},expression:"optionsNum"}}),n("span",[t._v("（选项A到"+t._s(t.options[t.optionsNum-1])+"）")])]},proxy:!0}])}),n("van-field",{attrs:{name:"stepper",label:"答题时间"},scopedSlots:t._u([{key:"input",fn:function(){return[n("van-stepper",{attrs:{integer:"",min:"0"},model:{value:t.answerTimes,callback:function(e){t.answerTimes=e},expression:"answerTimes"}}),n("span",[t._v("分钟（0不限时）")])]},proxy:!0}])}),n("van-field",{attrs:{name:"stepper",label:"题目分数"},scopedSlots:t._u([{key:"input",fn:function(){return[n("van-stepper",{attrs:{integer:"",min:"0"},model:{value:t.answerScore,callback:function(e){t.answerScore=e},expression:"answerScore"}})]},proxy:!0}])}),n("van-field",{attrs:{name:"button",label:"下发方式"},scopedSlots:t._u([{key:"input",fn:function(){return[n("div",{staticClass:"flex-between",staticStyle:{width:"100%"}},[n("van-button",{directives:[{name:"show",rawName:"v-show",value:!t.startAnswer||1===t.downWay,expression:"!startAnswer || downWay===1"}],attrs:{type:"primary",size:"small",disabled:t.startAnswer},on:{click:t.toAll}},[t._v(" 全员作答 ")]),n("van-button",{directives:[{name:"show",rawName:"v-show",value:!t.startAnswer||2===t.downWay,expression:"!startAnswer || downWay===2"}],attrs:{type:"primary",size:"small",disabled:t.startAnswer},on:{click:t.toRandom}},[t._v(" 随机挑人 ")]),n("van-button",{directives:[{name:"show",rawName:"v-show",value:!t.startAnswer||3===t.downWay,expression:"!startAnswer || downWay===3"}],attrs:{type:"primary",size:"small",disabled:t.startAnswer},on:{click:t.toResponder}},[t._v(" 抢答 ")]),n("van-button",{directives:[{name:"show",rawName:"v-show",value:t.startAnswer,expression:"startAnswer"}],attrs:{type:"danger",size:"small"},on:{click:t.toStop}},[t._v("结束答题")])],1)]},proxy:!0}])}),n("div",{staticClass:"sub_nav"},[n("span",[t._v("选中成员")]),n("van-button",{attrs:{type:"primary",size:"small"},on:{click:t.startRandom}},[t._v(" "+t._s(t.randomStudents.length>0?"重新挑人":"开始挑人")+" ")])],1),n("div",{staticClass:"sub_module"},[0===t.randomStudents.length?n("span",[t._v("暂无人员")]):n("div",{staticClass:"flex-wrap-between"},[t._l(t.randomStudents,(function(e,s){return n("div",{key:s,staticClass:"student_card van-hairline--surround"},[n("img",{staticClass:"col_4",attrs:{src:e.imgSrc,alt:""}}),n("div",[t._v(t._s(e.studentName))]),e.isResponse?n("van-tag",{attrs:{type:"primary"}},[t._v("已提交")]):n("van-tag",{attrs:{type:"warning"}},[t._v("未作答")])],1)})),t._l(Math.abs(t.randomStudents.length%4-4),(function(t){return n("div",{key:-t,staticClass:"student_card",staticStyle:{width:"19vw"}})}))],2)]),n("div",{staticClass:"sub_nav"},[n("span",[t._v("抢答")]),n("van-button",{attrs:{type:"primary",size:"small"},on:{click:t.startResponse}},[t._v("开始抢答")])],1),n("div",{staticClass:"sub_module"},[n("div",{staticClass:"flex-between van-hairline--bottom"},[n("span",[t._v("抢答状态")]),t.responderPerson?n("van-tag",{attrs:{type:"danger"}},[t._v("已结束")]):n("van-tag",{attrs:{type:"warning"}},[t._v("抢答中")])],1),n("div",{staticClass:"flex-between van-hairline--bottom"},[n("span",[t._v("抢答时间")]),n("span",[t._v(t._s(t.responderTime))])]),t.responderPerson?n("div",{staticClass:"flex-between"},[n("span",[t._v("抢中人员")]),n("div",{staticClass:"student_card van-hairline--surround"},[n("img",{staticClass:"col_4",attrs:{src:t.responderPerson.imgSrc,alt:""}}),n("div",[t._v(t._s(t.responderPerson.studentName))]),t.responderPerson.isResponse?n("van-tag",{attrs:{type:"primary"}},[t._v("已提交")]):n("van-tag",{attrs:{type:"warning"}},[t._v("未作答")])],1)]):t._e()]),t._m(0),n("div",{staticClass:"sub_module flex-wrap-between"},[t._l(t.allResponseStudents,(function(e,s){return n("div",{key:s,staticClass:"student_card van-hairline--surround"},[n("img",{staticClass:"col_4",attrs:{src:e.imgSrc,alt:""}}),n("div",[t._v(t._s(e.studentName))]),e.isResponse?n("van-tag",{attrs:{type:"primary"}},[t._v("已提交")]):n("van-tag",{attrs:{type:"warning"}},[t._v("未作答")])],1)})),t._l(Math.abs(t.randomStudents.length%4-4),(function(t){return n("div",{key:-t,staticClass:"student_card",staticStyle:{width:"19vw"}})}))],2),n("div",{directives:[{name:"show",rawName:"v-show",value:t.realAnswer,expression:"realAnswer"}],staticClass:"sub_nav"},[n("span",[t._v("正确答案")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.realAnswer,expression:"realAnswer"}],staticClass:"sub_module"},[n("pre",[t._v(t._s(t.realAnswer))])]),n("div",{staticClass:"sub_nav"},[n("span",[t._v("调研情况")]),n("van-button",{attrs:{type:"info",size:"small"},on:{click:t.toSurvey}},[t._v("开始调研")])],1),n("div",{staticClass:"sub_module flex-wrap-between"},[t._l(t.surveyStudents,(function(e,s){return n("div",{key:s,staticClass:"student_card van-hairline--surround"},[n("img",{staticClass:"col_4",attrs:{src:e.imgSrc,alt:""}}),n("div",[t._v(t._s(e.studentName))]),e.master?n("van-tag",{attrs:{type:"success"}},[t._v("已掌握")]):n("van-tag",{attrs:{type:"danger"}},[t._v("未掌握")])],1)})),t._l(Math.abs(t.randomStudents.length%4-4),(function(t){return n("div",{key:-t,staticClass:"student_card",staticStyle:{width:"19vw"}})}))],2),n("van-popup",{attrs:{position:"bottom"},model:{value:t.selectAnswerShow,callback:function(e){t.selectAnswerShow=e},expression:"selectAnswerShow"}},[n("van-cell",[n("span",{staticStyle:{color:"#1989fa"},attrs:{slot:"icon"},on:{click:function(e){t.selectAnswerShow=!1}},slot:"icon"},[t._v("取消")]),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s("4"===t.radio?"请填写答案":"请选择正确答案")+" ")]),n("span",{staticStyle:{color:"#1989fa"},attrs:{slot:"right-icon"},on:{click:t.onConfirm},slot:"right-icon"},[t._v("确定")])]),"1"===t.radio?n("van-radio-group",{staticStyle:{"text-align":"left"},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}},[n("van-cell-group",t._l(t.answers,(function(e){return n("van-cell",{key:e,attrs:{title:e,clickable:""},on:{click:function(n){t.answer=e}}},[n("van-radio",{attrs:{slot:"right-icon",name:e},slot:"right-icon"})],1)})),1)],1):"2"===t.radio?n("van-checkbox-group",{staticStyle:{"text-align":"left"},model:{value:t.multiAnswer,callback:function(e){t.multiAnswer=e},expression:"multiAnswer"}},[n("van-cell-group",t._l(t.answers,(function(e){return n("van-cell",{key:e,attrs:{title:e,clickable:""},on:{click:function(n){t.answer=e}}},[n("van-checkbox",{attrs:{slot:"right-icon",sharp:"square",name:e},slot:"right-icon"})],1)})),1)],1):t._e(),"3"===t.radio?n("van-radio-group",{staticStyle:{"text-align":"left"},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}},[n("van-cell-group",t._l(t.judgeValues,(function(e){return n("van-cell",{key:e,attrs:{title:e,clickable:""},on:{click:function(n){t.answer=e}}},[n("van-radio",{attrs:{slot:"right-icon",name:e},slot:"right-icon"})],1)})),1)],1):n("van-field",{attrs:{name:"答案",label:"",placeholder:"请填写答案",type:"textarea",maxlength:"100",autofocus:"",autosize:"","show-word-limit":"",rules:[{required:!0,message:"请填写答案"}]},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}})],1)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sub_nav"},[n("span",[t._v("提交人员")])])}],r=(n("4de4"),n("7db0"),n("c975"),n("a15b"),n("fb6a"),n("a434"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("a5b7")),i=n.n(r),o=n("2241"),l=n("ed08"),u=["许","张","吴","王","林","郭","史","黄","陈","黄","郑","关","刘","曹","毛","方","杨","施","李","杜","诸葛","马"],d=["歩","弥","鑫","霞","晓","菲","坚","浩","智","志","梅","雪","林","皇","芳","丽","冬","良","宇","荷","妮","梦"],c=["1619112002","1619112003","1619112004","1619112005","1619112006","1619112007","1619112008","1619112009","1619112010","1619112011","1619112012","1619112013","1619112014","1619112015","1619112016","1619112017","1619112018","1619112019","1619112020","1619112021","1619112022"],v={name:"screenQuestion",data:function(){return{studentList:[],options:["A","B","C","D","E","F","G","H","I","J"],judgeValues:["对","错"],uploader:[],radio:"3",optionsNum:4,answerTimes:0,answerScore:0,downWay:-1,startAnswer:!1,allResponseStudents:[],randomStudents:[],responderTime:"00:00",responderPerson:null,answer:"",multiAnswer:[],realAnswer:"",selectAnswerShow:!1,surveyStudents:[]}},computed:{answers:function(){return["1","2"].indexOf(this.radio)>-1?this.options.slice(0,this.optionsNum):"3"===this.radio?["对","错"]:[]}},mounted:function(){this.init()},methods:{init:function(){for(var t=0;t<15;t++)this.studentList.push({imgSrc:i.a,studentID:Object(l["f"])(),studentName:u[this.randomIndex(20)]+d[this.randomIndex(20)]+(this.randomIndex(20)%2===0?d[this.randomIndex(20)]:""),studentSno:c[this.randomIndex(20)]+"0"+this.randomIndex(20),studentSex:(this.randomIndex(20)%2+1).toString(),isResponse:0})},randomIndex:function(t){return Math.round(t*Math.random())},toClose:function(){var t=this;o["a"].confirm({title:"提示",message:"是否结束当前题目？"}).then((function(){t.$router.replace("/course/screen-question")})).catch((function(){}))},beforeRead:function(t){return"image/jpeg"===t.type||(this.$toast("请上传 jpg 格式图片"),!1)},afterRead:function(t){t.status="uploading",t.message="上传中...",setTimeout((function(){t.status="success",t.message=""}),1e3)},toAll:function(){var t=this;this.downWay=1,this.startAnswer=!0;for(var e=0;e<this.studentList.length;e++)setTimeout((function(){var e=t.studentList.filter((function(e){return!t.allResponseStudents.find((function(t){return e.studentID===t.studentID}))}));if(0===e.length);else{var n=t.randomIndex(e.length-1);t.allResponseStudents.splice(0,0,e[n]);var s=t.allResponseStudents[0];s.isResponse=1}}),1e3*this.randomIndex(20))},toRandom:function(){this.downWay=2,this.startAnswer=!0},toResponder:function(){this.downWay=3,this.startAnswer=!0},toStop:function(){this.selectAnswerShow=!0,this.downWay=-1,this.answer="",this.multiAnswer=[],this.startAnswer=!1},startRandom:function(){var t=this,e=this.studentList.filter((function(e){return!t.randomStudents.find((function(t){return e.studentID===t.studentID}))}));if(0!==e.length){var n=this.randomIndex(e.length-1);this.randomStudents.splice(0,0,e[n]);var s=this.randomStudents[0];setTimeout((function(){s.isResponse=1}),1e3*this.randomIndex(20))}else this.$toast("学生已选完！")},startResponse:function(){var t=this;this.startTime(0),setTimeout((function(){var e=t.randomIndex(t.studentList.length-1);t.responderPerson=t.studentList[e],setTimeout((function(){t.responderPerson.isResponse=1}),1e3*t.randomIndex(20))}),1e3*this.randomIndex(20))},startTime:function(t){var e=this;if(!this.responderPerson){var n=Math.floor(t/60),s=t%60;this.responderTime=(n>9?n:"0"+n)+":"+(s>9?s:"0"+s),setTimeout((function(){t++,e.startTime(t)}),1e3)}},onConfirm:function(){console.log(this.answer),console.log(this.multiAnswer),this.answer||0!==this.multiAnswer.length?(this.realAnswer=this.answer||this.multiAnswer.sort().join(""),this.selectAnswerShow=!1):this.$toast("4"===this.radio?"请先输入答案":"请先选择答案")},toSurvey:function(){for(var t=this,e=0;e<this.studentList.length;e++)setTimeout((function(){var e=t.studentList.filter((function(e){return!t.allResponseStudents.find((function(t){return e.studentID===t.studentID}))}));if(0===e.length);else{var n=t.randomIndex(e.length-1);t.surveyStudents.splice(0,0,e[n]);var s=t.surveyStudents[0];s.master=t.randomIndex(1)}}),1e3*this.randomIndex(20))}},beforeDestroy:function(){clearTimeout()}},p=v,m=(n("c00a"),n("2877")),f=Object(m["a"])(p,s,a,!1,null,"66e2b998",null);e["default"]=f.exports},aa3e:function(t,e,n){},c00a:function(t,e,n){"use strict";var s=n("aa3e"),a=n.n(s);a.a}}]);
//# sourceMappingURL=chunk-64922b34.543560dd.js.map