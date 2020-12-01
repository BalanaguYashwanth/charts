(function(e){function t(t){for(var a,i,o=t[0],s=t[1],p=t[2],l=0,m=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);c&&c(t);while(m.length)m.shift()();return u.push.apply(u,p||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],a=!0,o=1;o<r.length;o++){var s=r[o];0!==n[s]&&(a=!1)}a&&(u.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},u=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="charts/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var p=0;p<o.length;p++)t(o[p]);var c=s;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("b0c0"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},u=[],i={name:"App",components:{}},o=i,s=(r("034f"),r("2877")),p=Object(s["a"])(o,n,u,!1,null,null,null),c=p.exports,l=r("8c4f"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v(" latest values are :- temperature:"+e._s(e.temperature1)+", humidity:"+e._s(e.humidity1)+", pressure:"+e._s(e.pressure1)+", ")]),r("GChart",{attrs:{settings:{packages:["corechart","gauge"]},type:"Gauge",data:e.chartData4,options:e.chartOptions1}}),r("GChart",{attrs:{type:"AreaChart",data:e.chartData3,options:e.chartOptions}})],1)},d=[],h=r("bc3a"),f=r.n(h),v={data:function(){return{alldatas:"",temperature1:"",humidity1:"",pressure1:"",chartData3:[["Year","temperature","humidity","pressure"]],chartOptions:{chart:{title:"Company Performance",subtitle:"temperature, humidity, and pressure"}},chartData4:[["Label","Value"]],chartOptions1:{chart:{title:"Company Performance",subtitle:"temperature, humidity, and pressure"}}}},methods:{},created:function(){var e=this;f.a.get("https://chart-django.herokuapp.com/api/addv/").then((function(t){console.log(t.data);var r=t.data;for(var a in r)console.log(r[a].timestamp,r[a].temperature,r[a].humidity,r[a].pressure),e.chartData3.push([r[a].timestamp,r[a].temperature,r[a].humidity,r[a].pressure]),e.temperature1=r[a].temperature,e.humidity1=r[a].humidity,e.pressure1=r[a].pressure;e.chartData4.push(["temperature",e.temperature1]),e.chartData4.push(["humidity",e.humidity1]),e.chartData4.push(["presssure",e.pressure1]),e.alldatas=t.data})).catch((function(e){return console.log(e)}))}},y=v,b=Object(s["a"])(y,m,d,!1,null,null,null),g=b.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(" Sensor Values ")]),e._v(" Temperature "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.temp,expression:"temp"}],attrs:{type:"text",required:""},domProps:{value:e.temp},on:{input:function(t){t.target.composing||(e.temp=t.target.value)}}}),r("br"),e._v(" humidity "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.humidity,expression:"humidity"}],attrs:{type:"text",required:""},domProps:{value:e.humidity},on:{input:function(t){t.target.composing||(e.humidity=t.target.value)}}}),r("br"),e._v(" pressure "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.pressure,expression:"pressure"}],attrs:{type:"text",required:""},domProps:{value:e.pressure},on:{input:function(t){t.target.composing||(e.pressure=t.target.value)}}}),r("br"),e._v(" Time "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.time,expression:"time"}],attrs:{type:"text",required:""},domProps:{value:e.time},on:{input:function(t){t.target.composing||(e.time=t.target.value)}}}),r("br"),r("button",{on:{click:e.submit}},[e._v(" submit")]),r("br"),r("br"),e._v(" Note:Please fill up all the inputs ")])},w=[],O={data:function(){return{temp:"",humidity:"",pressure:"",time:""}},methods:{submit:function(){var e=this;f.a.post("https://chart-django.herokuapp.com/api/addv/",{temperature:this.temp,humidity:this.humidity,pressure:this.pressure,timestamp:this.time}).then((function(t){console.log(t),e.$router.push("chart")})).catch((function(e){return console.log(e)}))}}},x=O,j=Object(s["a"])(x,_,w,!1,null,null,null),P=j.exports;a["a"].use(l["a"]);var D=new l["a"]({mode:"history",routes:[{path:"/chart",name:"chart",component:g},{path:"/user",name:"user",component:P}]}),k=D,S=r("2f62"),C=r("2819"),N=r.n(C),T=r("c3da"),$=r.n(T);a["a"].use(S["a"]);var q=new S["a"].Store({strict:!0,state:{datas:[]},getters:{},mutations:{data:function(e,t){e.datas=t}},actions:{}}),M=r("cb43");a["a"].use(M["default"]),a["a"].component($.a.name,$.a),a["a"].use(N.a),a["a"].use(l["a"]),a["a"].use(S["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(c)},router:k,store:q}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.51d39d03.js.map