webpackJsonp([103],{"3/cs":function(t,a,e){a=t.exports=e("UTlt")(!1),a.push([t.i,"\n.data-item[data-v-4aad3645] {\n  float: left;\n  min-width: 170px;\n  margin-top: 30px;\n}\n.data-item .data-title[data-v-4aad3645] {\n    font-size: 12px;\n    color: #878d99;\n    margin-bottom: 17px;\n}\n.data-item .data-num[data-v-4aad3645] {\n    color: #353535;\n    font-size: 24px;\n}\n.chart-style[data-v-4aad3645] {\n  width: 100%;\n  height: 380px;\n  border-bottom: 1px dashed #eee;\n  margin-bottom: 15px;\n}\n",""])},HvmL:function(t,a,e){"use strict";function i(t){e("Lz4+")}Object.defineProperty(a,"__esModule",{value:!0});var s=e("2sCs"),n=e.n(s),r={data:function(){return{dateArr:"",params:{flag:"4",begin:"",end:""},dataInfo:{regTotal:0,list:[]},time:"",date:{year:"",month:"",day:""},chartLine:null,chartPie:null,sum:0,year:"",month:"",totoal:"",chartLineOptions:{color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"直接访问",type:"bar",barWidth:"60%",data:[10,52,200,334,390,330,220]}]}}},methods:{rangeTime:function(t){null!=t?(this.params.begin=t[0],this.params.end=t[1],t[0]===t[1]?this.time=t[0]:this.time=t[0]+"-"+t[1],this.params.flag="3"):(this.params.begin="",this.params.end="",this.params.flag="4",this.time=this.date.year+"-"+this.date.month+"-"+this.date.day),this.getDataInfo()},query:function(t){"4"===t&&(this.time=this.date.year+"-"+this.date.month+"-"+this.date.day),"1"===t&&(this.time=this.date.year+"-"+this.date.month),"2"===t&&(this.time=this.date.year),this.getDataInfo()},getDataInfo:function(){var t=this;n.a.post(this.$api.flowVisitorList,this.params).then(function(a){var e=[],i=[];for(var s in a.body.data)i.push(a.body.data[s][0]),e.push(a.body.data[s][1]);t.setChartLineOptions(e,i)})},setChartLineOptions:function(t,a){var e={xAxis:{data:t},series:[{name:"忠诚度",data:a}]};this.chartLine.setOption(e)}},created:function(){var t=new Date,a=t.getFullYear(),e=t.getMonth()+1,i=t.getDate();this.date.year=a,this.date.month=e,this.date.day=i,this.year=a,this.month=e,this.time=a+"-"+e+"-"+i,this.getDataInfo()},mounted:function(){this.chartLine=echarts.init(document.getElementById("chartLine")),this.chartLine.setOption(this.chartLineOptions)}},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"cms-body cms-chart-box"},[e("div",{staticClass:"cms-list-header",staticStyle:{"padding-left":"0"}},[e("h5",{staticClass:"data-header-title"},[t._v("忠诚度("+t._s(t.time)+")")]),t._v(" "),e("div",{staticClass:"flex-date"},[e("label",{staticClass:"cms-label",staticStyle:{"margin-left":"0"}},[t._v("日期：")]),t._v(" "),e("el-radio-group",{staticStyle:{"margin-right":"10px"},attrs:{size:"small"},on:{change:t.query},model:{value:t.params.flag,callback:function(a){t.$set(t.params,"flag",a)},expression:"params.flag"}},[e("el-radio-button",{attrs:{label:"4"}},[t._v("今日")]),t._v(" "),e("el-radio-button",{attrs:{label:"1"}},[t._v("本月")]),t._v(" "),e("el-radio-button",{attrs:{label:"2"}},[t._v("今年")])],1),t._v(" "),e("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",editable:!1,type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:t.rangeTime},model:{value:t.dateArr,callback:function(a){t.dateArr=a},expression:"dateArr"}})],1)]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"chart-style",attrs:{id:"chartLine"}})])},d=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"clearfix"},[e("li",{staticClass:"data-item"})])}],l={render:o,staticRenderFns:d},h=l,c=e("Z0/y"),m=i,p=c(r,h,!1,m,"data-v-4aad3645",null);a.default=p.exports},"Lz4+":function(t,a,e){var i=e("3/cs");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("FIqI")("07bc6b09",i,!0,{})}});