(function(t){function e(e){for(var i,r,o=e[0],l=e[1],c=e[2],p=0,h=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={app:0},a=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0269":function(t,e,n){"use strict";var i=n("925b"),s=n.n(i);s.a},"0707":function(t,e,n){"use strict";var i=n("5292"),s=n.n(i);s.a},"1f32":function(t,e,n){},"2f33":function(t,e,n){"use strict";var i=n("3a5e"),s=n.n(i);s.a},"3a5e":function(t,e,n){},"3eb3":function(t,e,n){},5292:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Calculator",{on:{height_changed:t.onresize}}),n("p"),n("p"),n("p")],1)},a=[],r=function(){var t=this,e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"container"},[i("known-dimensions-block",{staticClass:"main-box",on:{dimensions_changed:function(e){return t.box_dimensions=e}}},[e.box_dimensions?i("div",{staticClass:"background"},[i("p",{staticClass:"caption",staticStyle:{left:"-5em",top:"0"}},[e._v("Тест +")]),i("p",{staticClass:"caption",staticStyle:{left:"-5em",bottom:"-100%"}},[e._v("Тест -")]),i("p",{staticClass:"caption",staticStyle:{left:"0",top:"110%"}},[e._v("Covid (prior)")]),i("p",{staticClass:"caption",staticStyle:{right:"0",top:"110%"}},[e._v("Не Covid (prior)")]),i("div",{staticClass:"left",style:{width:e.left+"px"}},[i("draggable-horizontal-line",{attrs:{top:e.top1},on:{change:function(t){return e.top1=t}}})],1),i("div",{staticClass:"right"},[i("draggable-horizontal-line",{attrs:{top:e.top2},on:{change:function(t){return e.top2=t}}})],1)]):e._e(),i("draggable-vertical-line",{attrs:{left:e.left},on:{change:function(t){return e.left=t}}})],1),e._v(" "+e._s(e.box_dimensions)+" "+e._s(e.left)+" ")],1)},o=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"line",staticClass:"line",style:{left:this.left+"px"}},[n("div",{staticClass:"handle"}),n("p",[t._v(t._s(t.p(t.left/400)))])])},c=[],u=n("abe9"),p=n("fd32"),h=n("ad68"),d={props:["left"],mounted:function(){var t=this.$refs.line;console.log(t),this.drag=u["a"](),this.drag.on("drag",this.dragged),p["a"](t).call(this.drag)},methods:{dragged:function(t){this.$emit("change",t.x)},dragstart:function(t){},p:h["a"](".0%")}},f=d,_=(n("86cf"),n("2877")),v=Object(_["a"])(f,l,c,!1,null,"6e9e436e",null),g=v.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"line",staticClass:"line",style:{top:this.top+"px"}},[n("div",{staticClass:"handle"}),n("p",[t._v(t._s(t.p(t.top/400)))])])},b=[],y={mounted:function(){var t=this.$refs.line;this.drag=u["a"](),this.drag.on("drag",this.dragged),p["a"](t).call(this.drag)},props:["top"],methods:{dragged:function(t){this.$emit("change",t.y)},dragstart:function(t){},p:h["a"](".0%")}},w=y,x=(n("0269"),Object(_["a"])(w,m,b,!1,null,"279ba755",null)),C=x.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"known-dimensions-block"},[t._t("default")],2)},j=[],k={name:"known-dimensions-block",data:function(){return{d:{height:0,width:0,left:0}}},mounted:function(){this.$nextTick((function(){this.onresize(),window.addEventListener("resize",this.onresize)}))},destroyed:function(){window.removeEventListener("resize",this.onresize)},methods:{onresize:function(t){this.d.height=this.$el.offsetHeight,this.d.width=this.$el.offsetWidth,this.d.left=this.$el.offsetLeft}},watch:{d:{handler:function(t){this.$emit("dimensions_changed",this.d)},deep:!0}}},O=k,z=Object(_["a"])(O,$,j,!1,null,null,null),E=z.exports,M={mounted:function(){},data:function(){return{sensitivity:.65,specificity:.95,prior:.4,box_dimensions:null,width:400,height:400,p:h["a"](".0%")}},computed:{top1:{get:function(){return this.sensitivity*this.height},set:function(t){console.log(t),this.sensitivity=t/this.height}},top2:{get:function(){return this.specificity*this.height},set:function(t){this.specificity=t/this.height}},left:{get:function(){return this.prior*this.width},set:function(t){this.prior=t/this.width}}},components:{DraggableVerticalLine:g,DraggableHorizontalLine:C,KnownDimensionsBlock:E}},P=M,S=(n("0707"),Object(_["a"])(P,r,o,!1,null,"82ba1546",null)),L=(S.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"main-box"},[n("p",{staticClass:"row"},[t._v("100 людей. Відсоток захворюваності "),t.pre_test_readonly?n("span",[t._v(" "+t._s(t.pre_test_p)+"%")]):n("adjustable-number",{attrs:{value:t.pre_test_p},on:{"update:value":function(e){t.pre_test_p=e}}})],1),n("div",{staticClass:"legend row"},[t.all_p?n("p",[n("human",{staticClass:"human ill"}),t._v(" "),n("span",[t._v(" "+t._s(t.pre_test_p)+" людей хворі на ковід")])],1):t._e(),t.all_n?n("p",[n("human",{staticClass:"human healthy"}),t._v(" "),n("span",[t._v(" "+t._s(100-t.pre_test_p)+" здорових людей ")])],1):t._e()]),n("div",{class:"people "+(this.tested?"tested":"")},t._l(t.people,(function(t){return n("human",{key:t.i,class:"human "+(t.covid?"ill":"healthy")+" "+(t.test?"test_positive":"test_negative")})})),1),t.tested?n("div",{staticClass:"legend row-after tested"},[t.tp?n("p",[n("human",{staticClass:"human ill test_positive"}),t._v(" "),n("span",[t._v(" "+t._s(t.true_positive_p)+' хворих на ковід, яких тест визначив правильно як "позитивних" (істинно позитивний результат) ')])],1):t._e(),t.fn?n("p",[n("human",{staticClass:"human ill test_negative"}),t._v(" "),n("span",[t._v(" "+t._s(t.false_negative_p)+" хворих на ковід із негативним тестом (хибно негативний результат) ")])],1):t._e(),t.tn?n("p",[n("human",{staticClass:"human healthy test_negative"}),t._v(" "),n("span",[t._v(" "+t._s(t.true_negative_p)+" не хворих на ковід з негативним тестом (істинно негативних) ")])],1):t._e(),t.fp?n("p",[n("human",{staticClass:"human healthy test_positive"}),t._v(" "),n("span",[t._v(" "+t._s(t.false_positive_p)+' не хворих, яких тест помилково визначив як "позитивних" (хибно позитивний результат) ')])],1):t._e()]):t._e(),n("div",{staticClass:"row-after"},[n("button",{on:{click:function(){return t.tested=!t.tested}}},[t._v(t._s(this.tested?"Скинути":"Тестувати за допомогою ПЦР!"))])])])])}),N=[],T=(n("d3b7"),n("ac1f"),n("3ca3"),n("841c"),n("ddb0"),n("2b3d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{height:"44px",width:"20px",fill:"#000000",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"20 14 10 22","enable-background":"new 0 0 50 50","xml:space":"preserve"}},[n("polygon",{attrs:{points:"20,28 22,28 22,35 28,35 28,28 30,28 30,21 20,21 "}}),n("rect",{attrs:{x:"23",y:"15",width:"4",height:"4"}})])}),H=[],D={},B=Object(_["a"])(D,T,H,!1,null,null,null),J=B.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"adjustable-number"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.value,expression:"value",modifiers:{number:!0}}],attrs:{type:"number",max:t.max,min:t.min,step:t.step,hidden:"true"},domProps:{value:t.value},on:{change:function(e){return t.$emit("update:value",t.value)},input:function(e){e.target.composing||(t.value=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),n("span",{ref:"draggable",staticClass:"adjustable-number-span"},[t._v(t._s(t.value)+" %")]),n("span",{class:"hint "+(t.tooltip_fixed?"fixed":"")},[t._v(" тягни! ")])])},A=[],K=(n("a9e3"),{props:{value:Number,min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1}},data:function(){return{domain:450,dragging:!1,tooltip_fixed:!0}},mounted:function(){var t=this.$refs.draggable;this.drag=u["a"](),this.drag.on("drag",this.dragged).on("start",this.dragstart).on("end",this.dragend),p["a"](t).call(this.drag)},methods:{dragged:function(t){var e=this.max-this.min,n=e/this.domain,i=this.start_v+Math.round((t.x-this.start_x)*n);i=Math.max(Math.min(i,this.max),this.min),this.$emit("update:value",i)},dragstart:function(t){this.tooltip_fixed=!1,this.dragging=!0,this.$refs.draggable.setPointerCapture(t.identifier),this.start_x=t.x,this.start_v=this.value},dragend:function(t){this.dragging=!1,this.$refs.draggable.releasePointerCapture(t.identifier)}}}),R=K,V=(n("2f33"),Object(_["a"])(R,U,A,!1,null,"52b47ca7",null)),W=V.exports,q={created:function(){var t=window.location.search;this.params=new URLSearchParams(t)},mounted:function(){for(var t=this,e=0,n=["pre_test_p","pre_test_readonly","tp","tn","fp","fn","all_p","all_n","sensitivity","specificity","tested"];e<n.length;e++){var i=n[e];s(i)}function s(e){var n=t.params.get(e);n&&(t[e]=+n)}},data:function(){return{pre_test_p:80,sensitivity:.7,specificity:.97,tested:!1,pre_test_readonly:!1,all_p:!0,all_n:!0,tp:!0,tn:!0,fp:!0,fn:!0,pf:h["a"](".0%")}},computed:{people:function(){for(var t=[],e=0,n=0;n<this.pre_test_p;n++)t.push({key:e,covid:!0,test:n<this.true_positive_p}),e++;for(var i=0;i<100-this.pre_test_p;i++)t.push({key:e,covid:!1,test:!(i<Math.round((1-this.pre_test)*this.specificity*100))}),e++;return t},pre_test:function(){return this.pre_test_p/100},true_positive_p:function(){return Math.round(this.pre_test*this.sensitivity*100)},false_negative_p:function(){return this.pre_test_p-this.true_positive_p},true_negative_p:function(){return Math.round((100-this.pre_test_p)*this.specificity)},false_positive_p:function(){return 100-this.pre_test_p-this.true_negative_p}},watch:{tested:function(t){this.$emit("height_changed")}},components:{Human:J,AdjustableNumber:W}},F=q,G=(n("75ab"),n("fc6c"),Object(_["a"])(F,L,N,!1,null,"585c4e3e",null)),I=G.exports,Q={name:"app",data:function(){return{height:200}},components:{Calculator:I},mounted:function(){this.$nextTick((function(){this.onresize(),window.addEventListener("resize",this.onresize)}))},destroyed:function(){window.removeEventListener("resize",this.onresize)},methods:{onresize:function(t){this.$nextTick((function(){this.height=document.documentElement.offsetHeight}))}},watch:{height:{handler:function(t){console.log(this.height),window.parent.postMessage(this.height,"*")}}}},X=Q,Y=(n("5c0b"),Object(_["a"])(X,s,a,!1,null,null,null)),Z=Y.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(Z)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("9c0c"),s=n.n(i);s.a},"75ab":function(t,e,n){"use strict";var i=n("1f32"),s=n.n(i);s.a},"86cf":function(t,e,n){"use strict";var i=n("9017"),s=n.n(i);s.a},9017:function(t,e,n){},"925b":function(t,e,n){},"9c0c":function(t,e,n){},fc6c:function(t,e,n){"use strict";var i=n("3eb3"),s=n.n(i);s.a}});
//# sourceMappingURL=app.93765550.js.map