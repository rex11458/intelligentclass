(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0decf293"],{"35c7":function(t,e,i){"use strict";var n=i("f685"),s=i.n(n);s.a},"85d4":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"course-course-ware"},[i("head-top",{attrs:{title:"课件"}}),i("van-pull-refresh",{staticClass:"pull_fresh",attrs:{"head-height":80},on:{refresh:t.getCourseWareList},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[t.shareList&&t.shareList.length>0?i("van-cell-group",{staticClass:"cell_group"},t._l(t.shareList,(function(e,n){return i("van-cell",{key:n,staticClass:"cell_main",on:{click:function(i){return t.fileClick(e)}},scopedSlots:t._u([{key:"icon",fn:function(){return[i("van-icon",{staticClass:"cell_icon",attrs:{name:"orders-o"}})]},proxy:!0},{key:"title",fn:function(){return[i("div",{staticClass:"line_title"},[t._v(t._s(e.fileName+"."+e.fileExt))])]},proxy:!0},{key:"label",fn:function(){return[i("div",{staticClass:"line_title"},[e.fileSize>1048576?i("span",[t._v(" "+t._s(Math.round(e.fileSize/1024/10.24)/100)+" MB ")]):i("span",[t._v(" "+t._s(Math.round(e.fileSize/10.24)/100)+" KB ")])])]},proxy:!0},t.isRecord?null:{key:"right-icon",fn:function(){return[e.isShare+""==="1"?i("van-icon",{style:{color:"#07c160",fontWeight:"bolder"},attrs:{"class-prefix":"iconfont icon-zaixianzhihang"}}):i("van-icon",{attrs:{"class-prefix":"iconfont icon-xinxitongbu"}})]},proxy:!0}],null,!0)})})),1):i("r-lack-data")],1),i("van-popup",{attrs:{position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t.isRecord?t._e():i("van-cell",{attrs:{value:t.fileItem&&t.fileItem.isShare+""!=="1"?"分享文件":"撤销分享"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toShare(e)}}},[t.fileItem&&t.fileItem.isShare+""==="1"?i("van-icon",{style:{color:"#07c160",fontWeight:"bolder"},attrs:{slot:"right-icon","class-prefix":"iconfont icon-zaixianzhihang"},slot:"right-icon"}):i("van-icon",{attrs:{slot:"right-icon","class-prefix":"iconfont icon-xinxitongbu"},slot:"right-icon"})],1),i("van-cell",{directives:[{name:"show",rawName:"v-show",value:t.fileItem&&(t.canOpenFileExt.indexOf(t.fileItem.fileExt)>-1||t.fileItem.fileTransformed+""==="2"),expression:"fileItem && (canOpenFileExt.indexOf(fileItem.fileExt) > -1 || fileItem.fileTransformed +'' === '2')"}],attrs:{value:"预览"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toPreView(e)}}},[i("van-icon",{attrs:{slot:"right-icon","class-prefix":"iconfont icon-chakan_yulan"},slot:"right-icon"})],1),i("van-cell",{attrs:{value:"下载"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.download(e)}}},[i("van-icon",{attrs:{slot:"right-icon","class-prefix":"iconfont icon-xiazai"},slot:"right-icon"})],1)],1)],1)},s=[],o=(i("4de4"),i("4160"),i("c975"),i("159b"),i("1e55")),a=i("6828"),r=i("d11a"),c={name:"courseWare",data:function(){return{fileList:[],isLoading:!1,fileItem:null,canOpenFileExt:["txt","bmp","gif","jpg","png","ico"],show:!1}},computed:{isRecord:function(){return this.$route.path.indexOf("record")>-1},shareList:function(){return this.isRecord?this.fileList.filter((function(t){return t.isShare+""==="1"})):this.fileList}},created:function(){this.getCourseWareList()},methods:{getCourseWareList:function(){var t=this;this.fileList=[],this.isLoading=!0,this.$mainHttp.courseWare.inCourseList({chID:this.$store.getters.classHourID,classID:this.$store.getters.classID}).then((function(e){e.Result?e.Datas&&e.Datas.length>0&&(e.Datas.sort((function(t,e){return t["IsSee"]>e["IsSee"]?-1:1})),e.Datas.forEach((function(e){t.fileList.push({remarkID:e.Key["CID"],id:e.Key["MaterialID"],fileName:e["MaterialName"],fileExt:e["MaterialFileExt"],fileSize:e["MaterialFileSize"]||0,fileTransformed:e["MaterialLowStreamEstate"]||"0",shareId:e["CClassID"],isShare:e["IsSync"],createTime:Object(a["a"])(e["MaterialCreateDate"],"yyyy-MM-dd")})}))):e.Info&&t.$toast(e.Info),t.isLoading=!1})).catch((function(){t.isLoading=!1}))},fileClick:function(t){this.fileItem=t,this.show=!0},dealShare:function(){var t=this;o["Dialog"].confirm({message:this.fileItem.isShare+""==="1"?"确认撤销分享文件？":"确认分享文件?"}).then((function(){t.toShare()})).catch((function(){}))},toShare:function(){var t=this,e=this.fileItem.isShare+""==="1"?"撤销分享文件":"分享文件",i=this.fileItem.isShare+""==="1"?"0":"1";this.$mainHttp.courseWare.setShare({ciID:this.$store.getters.courseID,ccID:this.fileItem.shareId,isSync:i}).then((function(i){i.Result?(t.getCourseWareList(),t.$toast(e+"成功"),t.show=!1):i.Info?t.$toast(i.Info):t.$toast(e+"失败")})).catch((function(){t.$toast("操作失败")}))},download:function(){var t=this.$mainHttp.common.file(this.fileItem.id);window.webkit?(this.show=!1,Object(r["b"])(r["a"].downloadFile,t).then((function(t){})).catch((function(){}))):(window.location.href=t,this.show=!1,this.$toast("下载开始"))},toPreView:function(){this.$store.commit("SET_CLOUD_FILE",this.fileItem),this.$store.getters.course&&this.$mainHttp.classInfo.openSource({ciID:this.$store.getters.courseID,materialID:this.fileItem.id,materialName:this.fileItem.fileName,materialFileExt:this.fileItem.fileExt}),this.$router.push("/course/course-ware/preview")}}},l=c,f=(i("35c7"),i("2877")),h=Object(f["a"])(l,n,s,!1,null,"f07c1846",null);e["default"]=h.exports},f685:function(t,e,i){}}]);