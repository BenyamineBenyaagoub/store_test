(function(t){function a(a){for(var r,i,s=a[0],c=a[1],l=a[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(a);while(f.length)f.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],r=!0,s=1;s<e.length;s++){var c=e[s];0!==o[c]&&(r=!1)}r&&(n.splice(a--,1),t=i(i.s=e[0]))}return t}var r={},o={app:0},n=[];function i(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)i.d(e,r,function(a){return t[a]}.bind(null,r));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/store_test/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=a,s=s.slice();for(var l=0;l<s.length;l++)a(s[l]);var d=c;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("cd49")},"0418":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"Header"}},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Prueba")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[t._m(1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Products")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/suppliers"}},[t._v("Suppliers")])],1)]),e("div",{staticClass:"form-inline my-2 my-lg-0"},[e("router-link",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{to:"/Cart"}},[t._v("Cart")])],1)])]),e("router-view")],1)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item active"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Home "),e("span",{staticClass:"sr-only"},[t._v("(current)")])])])}],n=e("2b0e"),i=n["default"].extend({name:"Header",props:{}}),s=i,c=e("2877"),l=Object(c["a"])(s,r,o,!1,null,null,null);a["default"]=l.exports},"049f":function(t,a,e){"use strict";e("22ca")},"0682":function(t,a,e){"use strict";e.d(a,"a",(function(){return r})),e.d(a,"b",(function(){return o}));var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("form",{staticClass:"my-5"},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"name"}},[t._v("Name")]),e("input",{directives:[{name:"model",rawName:"v-model:nombre",value:t.data.nombre,expression:"data.nombre",arg:"nombre"}],staticClass:"form-control",attrs:{type:"text",id:"nombre",placeholder:"Name"},domProps:{value:t.data.nombre},on:{input:function(a){a.target.composing||t.$set(t.data,"nombre",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-2"},[e("label",{attrs:{for:"Cuantity"}},[t._v("Cuantity")]),e("input",{directives:[{name:"model",rawName:"v-model:cantidad",value:t.data.cantidad,expression:"data.cantidad",arg:"cantidad"}],staticClass:"form-control",attrs:{type:"number",id:"cuantity",placeholder:"cuantity"},domProps:{value:t.data.cantidad},on:{input:function(a){a.target.composing||t.$set(t.data,"cantidad",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-2"},[e("label",{attrs:{for:"Price"}},[t._v("Price")]),e("input",{directives:[{name:"model",rawName:"v-model:precio",value:t.data.precio,expression:"data.precio",arg:"precio"}],staticClass:"form-control",attrs:{type:"number",id:"Price",placeholder:"Price"},domProps:{value:t.data.precio},on:{input:function(a){a.target.composing||t.$set(t.data,"precio",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-2"},[e("label",{attrs:{for:"size"}},[t._v("Size")]),e("input",{directives:[{name:"model",rawName:"v-model:talla",value:t.data.talla,expression:"data.talla",arg:"talla"}],staticClass:"form-control",attrs:{type:"text",maxlength:"2",id:"size",placeholder:"Size"},domProps:{value:t.data.talla},on:{input:function(a){a.target.composing||t.$set(t.data,"talla",a.target.value)}}})])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"description"}},[t._v("Description")]),e("textarea",{directives:[{name:"model",rawName:"v-model:descripcion",value:t.data.descripcion,expression:"data.descripcion",arg:"descripcion"}],staticClass:"form-control",attrs:{id:"description",rows:"3"},domProps:{value:t.data.descripcion},on:{input:function(a){a.target.composing||t.$set(t.data,"descripcion",a.target.value)}}})]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-4"},[e("label",{attrs:{for:"inputState"}},[t._v("Category")]),e("select",{directives:[{name:"model",rawName:"v-model:categoria_id",value:t.data.categoria_id,expression:"data.categoria_id",arg:"categoria_id"}],staticClass:"form-control",attrs:{id:"inputState"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.data,"categoria_id",a.target.multiple?e:e[0])}}},[t._l(t.category,(function(a){return[e("option",{domProps:{value:a.id}},[t._v(t._s(a.nombre))])]}))],2)]),e("div",{staticClass:"form-group col-md-4"},[e("label",{attrs:{for:"inputState"}},[t._v("Descount")]),e("select",{directives:[{name:"model",rawName:"v-model:descuento_id",value:t.data.descuento_id,expression:"data.descuento_id",arg:"descuento_id"}],staticClass:"form-control",attrs:{id:"inputState"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.data,"descuento_id",a.target.multiple?e:e[0])}}},[t._l(t.discount,(function(a){return[e("option",{domProps:{value:a.id}},[t._v(t._s(a.nombre))])]}))],2)]),e("div",{staticClass:"form-group col-md-4"},[e("label",{attrs:{for:"inputState"}},[t._v("Supplier")]),e("select",{directives:[{name:"model",rawName:"v-model:proveedor_id",value:t.data.proveedor_id,expression:"data.proveedor_id",arg:"proveedor_id"}],staticClass:"form-control",attrs:{id:"inputState"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.data,"proveedor_id",a.target.multiple?e:e[0])}}},[t._l(t.supplier,(function(a){return[e("option",{domProps:{value:a.id}},[t._v(t._s(a.nombre))])]}))],2)])]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model:es_borrador",value:t.data.es_borrador,expression:"data.es_borrador",arg:"es_borrador"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_draft"},domProps:{checked:Array.isArray(t.data.es_borrador)?t._i(t.data.es_borrador,null)>-1:t.data.es_borrador},on:{change:function(a){var e=t.data.es_borrador,r=a.target,o=!!r.checked;if(Array.isArray(e)){var n=null,i=t._i(e,n);r.checked?i<0&&t.$set(t.data,"es_borrador",e.concat([n])):i>-1&&t.$set(t.data,"es_borrador",e.slice(0,i).concat(e.slice(i+1)))}else t.$set(t.data,"es_borrador",o)}}}),e("label",{staticClass:"form-check-label",attrs:{for:"is_draft"}},[t._v(" Draft ")])])]),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(a){return a.preventDefault(),t.save()}}},[t._v(" Save ")])])])},o=[]},"0af4":function(t,a,e){"use strict";e.r(a);var r=e("72d8"),o=e.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return r[t]}))}(n);a["default"]=o.a},"0cf9":function(t,a,e){"use strict";e.r(a);var r=e("a91d"),o=e("bbe3");for(var n in o)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(n);var i=e("2877"),s=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,null,null);a["default"]=s.exports},"1fa2":function(t,a,e){"use strict";e.d(a,"a",(function(){return r})),e.d(a,"b",(function(){return o}));var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-6 col-sm-6 col-md-4 col-lg-4 my-4"},[e("div",{staticClass:"card"},[e("div",{staticClass:"d-flex my-2 px-2"},[e("button",{staticClass:"btn btn-outline-danger col-4",on:{click:function(a){return a.preventDefault(),t.deleteProduct(t.obj.id)}}},[t._v(" Delete ")]),e("div",{staticClass:"col-4"}),e("a",{staticClass:"btn btn-outline-warning col-4",attrs:{href:"/store_test/productForm?id="+t.obj.id}},[t._v(" Edit ")])]),e("img",{staticClass:"card-img",attrs:{src:"https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png",alt:"Vans"}}),t._m(0),e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v(t._s(t.obj.nombre))]),e("h6",{staticClass:"card-subtitle mb-2 text-muted"}),e("p",{staticClass:"card-text"},[t._v(" "+t._s(t.obj.descripcion)+" ")]),e("p",{staticClass:"col-12"},[e("span",{staticClass:"col-6"},[t._v("Stock: "+t._s(t.obj.cantidad))]),e("span",{staticClass:"col-6"},[t._v("Size: "+t._s(t.obj.talla))])]),e("div",{staticClass:"buy d-flex justify-content-between align-items-center"},[e("div",{staticClass:"price text-success"},[e("h5",{staticClass:"mt-4"},[t._v(t._s(t.obj.precio)+"€")])]),e("button",{staticClass:"btn btn-primary mt-3",on:{click:function(a){return t.addToCart(t.obj)}}},[e("i",{staticClass:"fas fa-shopping-cart"}),t._v(" Add to Cart ")])])])])])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-img d-flex justify-content-end"},[e("a",{staticClass:"card-link text-danger like",attrs:{href:"#"}},[e("i",{staticClass:"fas fa-heart"})])])}]},"22ca":function(t,a,e){},"2cc0":function(t,a,e){"use strict";e("d81d"),e("d3b7"),e("3ca3"),e("ddb0"),e("9861"),e("ac1f"),e("841c"),Object.defineProperty(a,"__esModule",{value:!0});var r=e("2b0e"),o=e("8477"),n=e("bc3a");a.default=r.default.extend({name:"app",components:{FormComponent:o.default},data:function(){return{supplier:[],category:[],discount:[],productId:"",data:{nombre:"",cantidad:"",talla:"",descripcion:"",categoria_id:"",descuento_id:"",proveedor_id:"",es_borrador:"",imagen:"",precio:""}}},methods:{save:function(){this.data.nombre,this.data.cantidad,this.data.talla,this.data.descripcion,this.data.categoria_id,this.data.descuento_id,this.data.proveedor_id,this.data.es_borrador,this.data.precio;this.productId?this.updateProduct(this.data):this.createProducts(this.data)},createProducts:function(t){var a="http://benyaagoub.dondominio.top/product/create",e=n.default.post(a,JSON.stringify(t));e.then((function(t){t.data;window.location.href="/store_test/"})),e.catch((function(t){t.data}))},updateProduct:function(t){var a="http://benyaagoub.dondominio.top/product/update?id="+this.productId,e=n.default.post(a,JSON.stringify(t));e.then((function(t){t.data;window.location.href="/store_test/"})),e.catch((function(t){t.data}))},getSupliers:function(){var t=this,a="http://benyaagoub.dondominio.top/supplier/get",e=n.default.get(a);e.then((function(a){var e=a.data;t.supplier=e})),e.catch((function(t){t.data}))},getCategory:function(){var t=this,a="http://benyaagoub.dondominio.top/category/get",e=n.default.get(a);e.then((function(a){var e=a.data;t.category=e})),e.catch((function(t){t.data}))},getDiscount:function(){var t=this,a="http://benyaagoub.dondominio.top/discount/get",e=n.default.get(a);e.then((function(a){var e=a.data;t.discount=e})),e.catch((function(t){t.data}))},getProduct:function(t){var a=this,e="http://benyaagoub.dondominio.top/product/get?id="+t,r=n.default.get(e);r.then((function(t){var e=t.data;e.map((function(t){a.data.nombre=t.nombre,a.data.cantidad=t.cantidad,a.data.talla=t.talla,a.data.descripcion=t.descripcion,a.data.categoria_id=t.categoria_id,a.data.descuento_id=t.descuento_id,a.data.proveedor_id=t.proveedor_id,a.data.es_borrador=t.es_borrador,a.data.precio=t.precio}))})),r.catch((function(t){t.data}))}},mounted:function(){var t=new URLSearchParams(window.location.search);this.productId=t.get("id"),this.getProduct(this.productId)},created:function(){this.getCategory(),this.getSupliers(),this.getDiscount(),this.$forceUpdate()}})},"3dfd":function(t,a,e){"use strict";e.r(a);var r=e("f6f3"),o=e("6f68");for(var n in o)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(n);var i=e("2877"),s=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,null,null);a["default"]=s.exports},4238:function(t,a,e){"use strict";e.r(a);var r=e("4652"),o=e.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return r[t]}))}(n);a["default"]=o.a},4652:function(t,a,e){"use strict";var r=this&&this.__spreadArrays||function(){for(var t=0,a=0,e=arguments.length;a<e;a++)t+=arguments[a].length;var r=Array(t),o=0;for(a=0;a<e;a++)for(var n=arguments[a],i=0,s=n.length;i<s;i++,o++)r[o]=n[i];return r};Object.defineProperty(a,"__esModule",{value:!0});var o=e("2b0e"),n=e("bc3a");a.default=o.default.extend({name:"Product",props:{obj:{}},methods:{addToCart:function(t){var a=r(JSON.parse(localStorage.getItem("cart")||"[]"),[t]);localStorage.setItem("cart",JSON.stringify(a))},deleteProduct:function(t){n.default.get("http://http://benyaagoub.dondominio.top/product/delete?id="+t).then((function(t){window.location.href="/"})).catch((function(t){console.error(t)}))}}})},"49a8":function(t,a,e){"use strict";e.r(a);var r=e("0682"),o=e("a915");for(var n in o)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(n);var i=e("2877"),s=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,null,null);a["default"]=s.exports},"6f68":function(t,a,e){"use strict";e.r(a);var r=e("78c7"),o=e.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return r[t]}))}(n);a["default"]=o.a},"72d8":function(t,a,e){"use strict";e("4de4"),e("d81d"),Object.defineProperty(a,"__esModule",{value:!0});var r=e("2b0e");a.default=r.default.extend({name:"Cart",components:{},data:function(){return{cart:[],total:""}},methods:{remove:function(t){var a=this.cart.filter((function(a){return!(a.id==t)}));localStorage.setItem("cart",JSON.stringify(a)),this.$router.go(this.$router.currentRoute)}},mounted:function(){this.cart=JSON.parse(localStorage.getItem("cart")||"[]");var t=this.cart.map((function(t){return t.precio}));this.total=t.reduce((function(t,a){return t+a}),0)}})},"78c7":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("2b0e"),o=e("0418");a.default=r.default.extend({name:"App",components:{Header:o.default}})},"7c31":function(t,a,e){"use strict";e.d(a,"a",(function(){return r})),e.d(a,"b",(function(){return o}));var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"divTable div-hover my-5 p-2"},[t._m(0),t._l(t.cart,(function(a){return e("div",{staticClass:"rowTable"},[e("div",{staticClass:"divTableCol"},[e("div",{staticClass:"media"},[t._m(1,!0),e("div",{staticClass:"media-body"},[e("h4",{staticClass:"media-heading"},[e("a",{attrs:{href:"#"}},[t._v(t._s(a.nombre))])]),t._m(2,!0),e("span",[t._v("Status: ")]),a.cantidad>0?e("span",{staticClass:"text-seccess"},[e("strong",[t._v("In Stock")])]):e("span",{staticClass:"text-warning"},[e("strong",[t._v("Out Of Stock")])])])])]),t._m(3,!0),e("div",{staticClass:"divTableCol"},[e("strong",[t._v(t._s(a.precio)+"€")])]),e("div",{staticClass:"divTableCol"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.remove(a.id)}}},[e("span",{staticClass:"fa fa-remove"}),t._v(" Remove ")])])])})),e("div",{staticClass:"rowTable"},[e("div",{staticClass:"divTableCol"}),e("div",{staticClass:"divTableCol"}),t._m(4),e("div",{staticClass:"divTableCol"},[e("h5",[e("strong",[t._v(t._s(t.total)+"€")])])])]),e("div",{staticClass:"rowTable"},[e("div",{staticClass:"divTableCol"}),e("div",{staticClass:"divTableCol"}),e("div",{staticClass:"divTableCol"},[e("router-link",{staticClass:"btn btn-outline-success",attrs:{to:"/"}},[t._v(" Back")])],1),e("div",{staticClass:"divTableCol"},[e("router-link",{staticClass:"btn btn-primary",attrs:{to:"/"}},[t._v(" Checkout")])],1)])],2)])])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"rowTable bg-primary text-white pb-2"},[e("div",{staticClass:"divTableCol"},[t._v("Product")]),e("div",{staticClass:"divTableCol"},[t._v("Authorized")]),e("div",{staticClass:"divTableCol"},[t._v("Price")]),e("div",{staticClass:"divTableCol"},[t._v("Actions")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"thumbnail pull-left mr-2",attrs:{href:"#"}},[e("img",{staticClass:"media-object",staticStyle:{width:"72px",height:"72px"},attrs:{src:"http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h5",{staticClass:"media-heading"},[t._v("by "),e("a",{attrs:{href:"#"}},[t._v("Brand name")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"divTableCol"},[e("strong",{staticClass:"label label-danger"},[t._v("None")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"divTableCol"},[e("h5",[t._v("total")])])}]},8477:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",[e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"inputEmail4"}},[t._v("Email")]),e("input",{staticClass:"form-control",attrs:{type:"email",id:"inputEmail4",placeholder:"Email"}})]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"inputPassword4"}},[t._v("Password")]),e("input",{staticClass:"form-control",attrs:{type:"password",id:"inputPassword4",placeholder:"Password"}})])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"inputAddress"}},[t._v("Address")]),e("input",{staticClass:"form-control",attrs:{type:"text",id:"inputAddress",placeholder:"1234 Main St"}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"inputAddress2"}},[t._v("Address 2")]),e("input",{staticClass:"form-control",attrs:{type:"text",id:"inputAddress2",placeholder:"Apartment, studio, or floor"}})]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"inputCity"}},[t._v("City")]),e("input",{staticClass:"form-control",attrs:{type:"text",id:"inputCity"}})]),e("div",{staticClass:"form-group col-md-4"},[e("label",{attrs:{for:"inputState"}},[t._v("State")]),e("select",{staticClass:"form-control",attrs:{id:"inputState"}},[e("option",{attrs:{selected:""}},[t._v("Choose...")]),e("option",[t._v("...")])])]),e("div",{staticClass:"form-group col-md-2"},[e("label",{attrs:{for:"inputZip"}},[t._v("Zip")]),e("input",{staticClass:"form-control",attrs:{type:"text",id:"inputZip"}})])]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-check"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"gridCheck"}}),e("label",{staticClass:"form-check-label",attrs:{for:"gridCheck"}},[t._v(" Check me out ")])])]),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Sign in")])])}],n=e("2b0e"),i=n["default"].extend({name:"Form",props:{value:String}}),s=i,c=e("2877"),l=Object(c["a"])(s,r,o,!1,null,null,null);a["default"]=l.exports},"96ac":function(t,a,e){"use strict";e.d(a,"a",(function(){return r})),e.d(a,"b",(function(){return o}));var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Products"},[e("div",{staticClass:"text-right my-4 mx-4"},[e("router-link",{staticClass:"btn btn-outline-success",attrs:{to:"/productForm"}},[t._v(" Create Product ")])],1),e("div",{staticClass:"container"},[e("div",{attrs:{id:"Filter"}},[e("form",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-sm"},[e("label",{staticClass:"control-label",attrs:{for:"name"}},[t._v("Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.name,expression:"data.name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:t.data.name},on:{input:function(a){a.target.composing||t.$set(t.data,"name",a.target.value)}}})]),e("div",{staticClass:"form-group col-sm"},[e("label",{staticClass:"control-label",attrs:{for:"category"}},[t._v("Category")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.data.category,expression:"data.category"}],staticClass:"form-control",attrs:{id:"category"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.data,"category",a.target.multiple?e:e[0])}}},t._l(t.category,(function(a){return e("option",{domProps:{value:a.id}},[t._v(" "+t._s(a.nombre)+" ")])})),0)]),e("div",{staticClass:"form-group col-sm"},[e("label",{staticClass:"control-label",attrs:{for:"size"}},[t._v("Size")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.data.size,expression:"data.size"}],staticClass:"form-control",attrs:{name:"size",id:"size"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.data,"size",a.target.multiple?e:e[0])}}},t._l(t.size,(function(a){return e("option",{domProps:{value:a}},[t._v(" "+t._s(a)+" ")])})),0)]),e("div",{staticClass:"form-group col-sm"},[e("label",{staticClass:"ontrol-label",attrs:{for:"customRange1"}},[t._v("Price")]),t.data.price?e("p",{staticClass:"col-2 py-2",staticStyle:{position:"absolute",right:"12%"}},[t._v(" "+t._s(t.data.price)+"€ ")]):t._e(),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.price,expression:"data.price"}],staticClass:"form-range form-control col-9",attrs:{type:"range",min:"10",max:"500",step:"10",id:"customRange1"},domProps:{value:t.data.price},on:{__r:function(a){return t.$set(t.data,"price",a.target.value)}}})])])]),e("div",{staticClass:"row"},[t._l(t.filteredProducts,(function(t){return[e("Product",{attrs:{obj:t}})]}))],2)])])},o=[]},a584:function(t,a,e){"use strict";e.d(a,"a",(function(){return r})),e.d(a,"b",(function(){return o}));var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Suppliers container my-5"},[e("div",{staticClass:"text-right my-4 mx-4"},[e("router-link",{staticClass:"btn btn-outline-success",attrs:{to:"/supplierForm"}},[t._v(" Create Supplier ")])],1),e("table",{staticClass:"table"},[t._m(0),e("tbody",[t._l(t.suppliers,(function(a){return[e("tr",[e("th",{attrs:{scope:"row"}},[t._v(t._s(a.nombre))]),e("td",[t._v(t._s(a.telefono))]),e("td",[t._v(t._s(a.direccion))]),e("td",[t._v(t._s(a.correo))])])]}))],2)])])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Name")]),e("th",{attrs:{scope:"col"}},[t._v("Phone")]),e("th",{attrs:{scope:"col"}},[t._v("Adress")]),e("th",{attrs:{scope:"col"}},[t._v("Email")])])])}]},a5fe:function(t,a,e){"use strict";e.r(a);var r=e("be4f"),o=e.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return r[t]}))}(n);a["default"]=o.a},a915:function(t,a,e){"use strict";e.r(a);var r=e("2cc0"),o=e.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return r[t]}))}(n);a["default"]=o.a},a91d:function(t,a,e){"use strict";e.d(a,"a",(function(){return r})),e.d(a,"b",(function(){return o}));var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("form",{staticClass:"my-5"},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-2"},[e("label",{attrs:{for:"name"}},[t._v("Name")]),e("input",{directives:[{name:"model",rawName:"v-model:nombre",value:t.data.nombre,expression:"data.nombre",arg:"nombre"}],staticClass:"form-control",attrs:{type:"text",id:"nombre",placeholder:"Name"},domProps:{value:t.data.nombre},on:{input:function(a){a.target.composing||t.$set(t.data,"nombre",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-2"},[e("label",{attrs:{for:"phone"}},[t._v("Phone")]),e("input",{directives:[{name:"model",rawName:"v-model:telefono",value:t.data.telefono,expression:"data.telefono",arg:"telefono"}],staticClass:"form-control",attrs:{type:"number",id:"phone",placeholder:"Phone"},domProps:{value:t.data.telefono},on:{input:function(a){a.target.composing||t.$set(t.data,"telefono",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-2"},[e("label",{attrs:{for:"email"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model:correo",value:t.data.correo,expression:"data.correo",arg:"correo"}],staticClass:"form-control",attrs:{type:"mail",id:"email",placeholder:"Email"},domProps:{value:t.data.correo},on:{input:function(a){a.target.composing||t.$set(t.data,"correo",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"adress"}},[t._v("Adress")]),e("input",{directives:[{name:"model",rawName:"v-model:direccion",value:t.data.direccion,expression:"data.direccion",arg:"direccion"}],staticClass:"form-control",attrs:{type:"text",maxlength:"50",id:"adress",placeholder:"Adress"},domProps:{value:t.data.direccion},on:{input:function(a){a.target.composing||t.$set(t.data,"direccion",a.target.value)}}})])]),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(a){return a.preventDefault(),t.save()}}},[t._v(" Save ")])])])},o=[]},aa0b:function(t,a,e){"use strict";e("4de4"),e("d81d"),e("b0c0"),e("caad"),e("2532"),e("d3b7"),e("3ca3"),e("ddb0"),Object.defineProperty(a,"__esModule",{value:!0});var r=e("2b0e"),o=e("be6f"),n=e("bc3a");a.default=r.default.extend({name:"Products",components:{Product:o.default},data:function(){return{filteredProducts:[],products:[],supplier:[],category:[],size:"",data:{category:"",price:"",size:"",name:""}}},methods:{getSupliers:function(){var t=this,a="http://benyaagoub.dondominio.top/supplier/get",e=n.default.get(a);return e.then((function(a){var e=a.data;t.supplier=e})),e.catch((function(t){t.data})),e},getCategory:function(){var t=this,a="http://benyaagoub.dondominio.top/category/get",e=n.default.get(a);return e.then((function(a){var e=a.data;t.category=e})),e.catch((function(t){t.data})),e},getProducts:function(){var t=this,a="http://benyaagoub.dondominio.top/product/get",e=n.default.get(a);return e.then((function(a){var e=a.data;t.products=e,t.filteredProducts=e})),e.catch((function(t){t.data})),e},setFilterData:function(){this.size=this.products.map((function(t){return t.talla})).filter((function(t,a,e){return e.indexOf(t)===a}))},setFilteredProducts:function(){var t=this;this.filteredProducts=this.products.filter((function(a){return!t.data.size||a.talla==t.data.size})).filter((function(a){return!t.data.price||a.precio<t.data.price})).filter((function(a){return!t.data.name||a.nombre.includes(t.data.name)})).filter((function(a){return!t.data.category||a.categoria_id==t.data.category}))}},watch:{"data.size":function(t){this.setFilteredProducts()},"data.price":function(t){this.setFilteredProducts()},"data.name":function(t){this.setFilteredProducts()},"data.category":function(t){this.setFilteredProducts()}},created:function(){var t=this;Promise.all([this.getProducts(),this.getCategory(),this.getSupliers()]).then((function(){t.setFilterData()}))}})},afbc:function(t,a,e){"use strict";e("d3b7"),Object.defineProperty(a,"__esModule",{value:!0});var r=e("2b0e"),o=e("8c4f"),n=e("e6dc");r.default.use(o.default);var i=[{path:"/",name:"Products",component:n.default},{path:"/Suppliers",name:"Suppliers",component:function(){return Promise.resolve().then((function(){return e("e2b6")}))}},{path:"/cart",name:"Cart",component:function(){return Promise.resolve().then((function(){return e("b789")}))}},{path:"/ProductForm",name:"productForm",component:function(){return Promise.resolve().then((function(){return e("49a8")}))}},{path:"/SupplierForm",name:"supplierForm",component:function(){return Promise.resolve().then((function(){return e("0cf9")}))}}],s=new o.default({mode:"history",base:"/store_test",routes:i});a.default=s},b789:function(t,a,e){"use strict";e.r(a);var r=e("7c31"),o=e("0af4");for(var n in o)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(n);e("049f");var i=e("2877"),s=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,null,null);a["default"]=s.exports},bbe3:function(t,a,e){"use strict";e.r(a);var r=e("df3e"),o=e.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return r[t]}))}(n);a["default"]=o.a},be4f:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("2b0e"),o=e("bc3a");a.default=r.default.extend({name:"Suppliers",components:{},data:function(){return{suppliers:[]}},methods:{getSupliers:function(){var t=this,a="http://http://benyaagoub.dondominio.top/supplier/get",e=o.default.get(a);e.then((function(a){var e=a.data;console.log(e),t.suppliers=e})),e.catch((function(t){t.data}))}},created:function(){this.getSupliers()}})},be6f:function(t,a,e){"use strict";e.r(a);var r=e("1fa2"),o=e("4238");for(var n in o)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(n);var i=e("2877"),s=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,null,null);a["default"]=s.exports},cd49:function(t,a,e){"use strict";e("e260"),e("e6cf"),e("cca6"),e("a79d"),Object.defineProperty(a,"__esModule",{value:!0});var r=e("2b0e"),o=e("3dfd"),n=e("afbc");e("f9e3"),e("2dd8"),r.default.config.productionTip=!1,new r.default({router:n.default,render:function(t){return t(o.default)}}).$mount("#app")},cedd:function(t,a,e){"use strict";e.r(a);var r=e("aa0b"),o=e.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return r[t]}))}(n);a["default"]=o.a},df3e:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("2b0e"),o=e("8477"),n=e("bc3a");a.default=r.default.extend({name:"SupplierForm",components:{FormComponent:o.default},data:function(){return{data:{nombre:"",correo:"",direccion:"",telefono:""}}},methods:{save:function(){this.createSuppliers(this.data)},createSuppliers:function(t){var a="http://benyaagoub.dondominio.top/supplier/create",e=n.default.post(a,JSON.stringify(t));e.then((function(t){t.data;window.location.href="/store_test/suppliers"})),e.catch((function(t){var a=t.data;console.log(a)}))}}})},e2b6:function(t,a,e){"use strict";e.r(a);var r=e("a584"),o=e("a5fe");for(var n in o)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(n);var i=e("2877"),s=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,null,null);a["default"]=s.exports},e6dc:function(t,a,e){"use strict";e.r(a);var r=e("96ac"),o=e("cedd");for(var n in o)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(n);var i=e("2877"),s=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,null,null);a["default"]=s.exports},f6f3:function(t,a,e){"use strict";e.d(a,"a",(function(){return r})),e.d(a,"b",(function(){return o}));var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Header")],1)},o=[]}});
//# sourceMappingURL=app.33c85fda.js.map