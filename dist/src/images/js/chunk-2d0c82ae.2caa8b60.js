(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c82ae"],{5470:function(a,e,t){"use strict";t.r(e);var s=t("7a23"),n={class:"frame-page"},l={class:"h-panel"},i=Object(s["i"])("div",{class:"h-panel-bar"},[Object(s["i"])("span",{class:"h-panel-title"},"图表1")],-1),o={class:"h-panel-body"},r=Object(s["i"])("div",{style:{height:"30px"}},null,-1),p={class:"h-panel"},d=Object(s["i"])("div",{class:"h-panel-bar"},[Object(s["i"])("span",{class:"h-panel-title"},"图表2")],-1),c={class:"h-panel-body"},m=Object(s["i"])("div",{style:{height:"30px"}},null,-1),b={class:"h-panel"},y=Object(s["i"])("div",{class:"h-panel-bar"},[Object(s["i"])("span",{class:"h-panel-title"},"图表3")],-1),h={class:"h-panel-body"},u=Object(s["i"])("div",{style:{height:"30px"}},null,-1),v={class:"h-panel"},g=Object(s["i"])("div",{class:"h-panel-bar"},[Object(s["i"])("span",{class:"h-panel-title"},"图表4")],-1),x={class:"h-panel-body"};function O(a,e,t,O,k,j){var w=Object(s["G"])("Chart",!0);return Object(s["A"])(),Object(s["h"])("div",n,[Object(s["i"])("div",l,[i,Object(s["i"])("div",o,[Object(s["k"])(w,{options:k.data1},null,8,["options"])])]),r,Object(s["i"])("div",p,[d,Object(s["i"])("div",c,[Object(s["k"])(w,{options:k.data2},null,8,["options"])])]),m,Object(s["i"])("div",b,[y,Object(s["i"])("div",h,[Object(s["k"])(w,{options:k.data3},null,8,["options"])])]),u,Object(s["i"])("div",v,[g,Object(s["i"])("div",x,[Object(s["k"])(w,{options:k.data4},null,8,["options"])])])])}var k={tooltip:{trigger:"axis"},legend:{data:["最高价","最低价"]},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value",axisLabel:{formatter:"{value} K"}}],series:[{name:"最高价",type:"line",data:[11,11,15,13,12,13,10],markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},smooth:!0,markLine:{data:[{type:"average",name:"平均值"}]}},{name:"最低价",type:"line",data:[1,-2,2,5,3,2,0],smooth:!0,markPoint:{data:[{name:"周最低",value:-2,xAxis:1,yAxis:-1.5}]},markLine:{data:[{type:"average",name:"平均值"}]}}]},j={title:{text:"南丁格尔玫瑰图",subtext:"纯属虚构",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{x:"center",y:"bottom",data:["rose1","rose2","rose3","rose4","rose5","rose6","rose7","rose8"]},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["pie","funnel"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,series:[{name:"半径模式",type:"pie",radius:[20,110],center:["25%","50%"],roseType:"radius",label:{normal:{show:!1},emphasis:{show:!0}},lableLine:{normal:{show:!1},emphasis:{show:!0}},data:[{value:10,name:"rose1"},{value:5,name:"rose2"},{value:15,name:"rose3"},{value:25,name:"rose4"},{value:20,name:"rose5"},{value:35,name:"rose6"},{value:30,name:"rose7"},{value:40,name:"rose8"}]},{name:"面积模式",type:"pie",radius:[30,110],center:["75%","50%"],roseType:"area",data:[{value:10,name:"rose1"},{value:5,name:"rose2"},{value:15,name:"rose3"},{value:25,name:"rose4"},{value:20,name:"rose5"},{value:35,name:"rose6"},{value:30,name:"rose7"},{value:40,name:"rose8"}]}]},w={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎","百度","谷歌","必应","其他"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value"}],series:[{name:"直接访问",type:"bar",data:[320,332,301,334,390,330,320]},{name:"邮件营销",type:"bar",stack:"广告",data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"bar",stack:"广告",data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"bar",stack:"广告",data:[150,232,201,154,190,330,410]},{name:"搜索引擎",type:"bar",data:[862,1018,964,1026,1679,1600,1570],markLine:{lineStyle:{normal:{type:"dashed"}},data:[[{type:"min"},{type:"max"}]]}},{name:"百度",type:"bar",barWidth:5,stack:"搜索引擎",data:[620,732,701,734,1090,1130,1120]},{name:"谷歌",type:"bar",stack:"搜索引擎",data:[120,132,101,134,290,230,220]},{name:"必应",type:"bar",stack:"搜索引擎",data:[60,72,71,74,190,130,110]},{name:"其他",type:"bar",stack:"搜索引擎",data:[62,82,91,84,109,110,120]}]},f={title:{text:"堆叠区域图"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["邮件营销","联盟广告","视频广告","直接访问","搜索引擎"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value"}],series:[{name:"邮件营销",type:"line",stack:"总量",areaStyle:{},data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",stack:"总量",areaStyle:{},data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"line",stack:"总量",areaStyle:{},data:[150,232,201,154,190,330,410]},{name:"直接访问",type:"line",stack:"总量",areaStyle:{normal:{}},data:[320,332,301,334,390,330,320]},{name:"搜索引擎",type:"line",stack:"总量",label:{normal:{show:!0,position:"top"}},areaStyle:{normal:{}},data:[820,932,901,934,1290,1330,1320]}]},A={data:function(){return{data1:k,data2:j,data3:w,data4:f}},mounted:function(){this.init()},methods:{init:function(){}},computed:{}},L=t("d959"),S=t.n(L);const P=S()(A,[["render",O]]);e["default"]=P}}]);
//# sourceMappingURL=chunk-2d0c82ae.2caa8b60.js.map