webpackJsonp([69],{"+9x7":function(t,a,e){var s=e("g2XU");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("FIqI")("4c6fbda9",s,!0,{})},g2XU:function(t,a,e){a=t.exports=e("UTlt")(!1),a.push([t.i,"\n.data-item[data-v-784954a1] {\n  float: left;\n  min-width: 170px;\n  margin-top: 30px;\n}\n.data-item .data-title[data-v-784954a1] {\n    font-size: 12px;\n    color: #878d99;\n    margin-bottom: 17px;\n}\n.data-item .data-num[data-v-784954a1] {\n    color: #353535;\n    font-size: 24px;\n}\n.chart-style[data-v-784954a1] {\n  width: 100%;\n  height: 380px;\n  border-bottom: 1px dashed #eee;\n  margin-bottom: 15px;\n}\n",""])},lYJx:function(t,a,e){"use strict";function s(t){e("+9x7")}Object.defineProperty(a,"__esModule",{value:!0});var n=e("2sCs"),i=e.n(n),l=e("5HJ5"),r={mixins:[l.a],data:function(){return{dateArr:"",params:{orderBy:1,pageSize:10,pageNo:1}}},methods:{getTableData:function(t){var a=this;i.a.post(this.$api.flowPagesList,this.params).then(function(t){a.tableData=JSON.parse(t.body.data)})}},created:function(){this.initTableData(this.$api.flowPagesList,this.params)}},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"cms-body cms-chart-box"},[e("div",{staticClass:"cms-list-header",staticStyle:{"padding-left":"0"}},[e("h5",{staticClass:"data-header-title"},[t._v("受访页面")]),t._v(" "),e("div",{staticClass:"flex-date"},[e("label",{staticClass:"cms-label",staticStyle:{"margin-left":"0"}},[t._v("排序方式：")]),t._v(" "),e("el-select",{on:{change:t.query},model:{value:t.params.orderBy,callback:function(a){t.$set(t.params,"orderBy",a)},expression:"params.orderBy"}},[e("el-option",{attrs:{label:"浏览降序",value:1}}),t._v(" "),e("el-option",{attrs:{label:"访客降序",value:2}}),t._v(" "),e("el-option",{attrs:{label:"停留时长降序",value:3}})],1)],1)]),t._v(" "),e("table",{staticClass:"data-table"},[t._m(0),t._v(" "),t._l(t.tableData,function(a,s){return e("tr",{key:s},[e("td",[t._v(t._s(a[0]))]),t._v(" "),e("td",[t._v(t._s(a[1]))]),t._v(" "),e("td",[t._v(t._s(a[2]))]),t._v(" "),e("td",[t._v(t._s(a[3]))])])})],2)])},d=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",[t._v("受访页面")]),t._v(" "),e("th",[t._v("浏览量(pv)")]),t._v(" "),e("th",[t._v("独立访客数(uv)")]),t._v(" "),e("th",[t._v("平均停留时长(秒)")])])}],c={render:o,staticRenderFns:d},v=c,p=e("Z0/y"),_=s,u=p(r,v,!1,_,"data-v-784954a1",null);a.default=u.exports}});