"use strict";(self.webpackChunkcar_order_form=self.webpackChunkcar_order_form||[]).push([[570],{570:function(e,t,a){a.r(t),a.d(t,{default:function(){return ae}});var n=a(165),r=a(861),c=a(439),o=a(791),s=a(413),l=a(184),i=function(e){var t=e.onChange,a=e.value,n=e.type,r=e.placeholder,c=e.className,o=e.readOnly,s=void 0!==o&&o;return(0,l.jsx)("input",{className:c,defaultValue:a,type:n,placeholder:r,onChange:t,readOnly:s})},u="searchForm_form__szfOq",d="searchForm_myInput__ORJLy",m=function(e){var t=e.filter,a=e.setFilter;return(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("form",{className:u,action:"",children:(0,l.jsx)(i,{className:d,value:t.query,onChange:function(e){return a((0,s.Z)((0,s.Z)({},t),{},{query:e.target.value}))},placeholder:"Search..."})})})},_=a(433),h=function(e){var t=e.onClickBtn,a=e.btnText,n=e.type,r=e.className;return(0,l.jsx)("button",{className:r,type:n,onClick:t,children:a})},x="myModal_modal__8Y5St",f="myModal_active__L4nqP",v="myModal_modalContent__TA+vV",p=function(e){var t=e.active,a=e.setActive,n=e.children;return(0,l.jsx)("div",{className:"".concat(x," ").concat(t?f:""),onClick:function(){return a(!1)},children:(0,l.jsx)("div",{className:"".concat(v," ").concat(t?f:""),onClick:function(e){return e.stopPropagation()},children:n})})},y=a(942),j="addCarForm_form__OCgSu",C="addCarForm_myInput__cMF0G",g="addCarForm_btnContainer__WzfbA",N="addCarForm_myBtn__EnJTn",b=function(e){var t=e.create,a=e.closeModal,n={car:"",car_model:"",car_vin:"",car_color:"",car_model_year:"",price:"",availability:""},r=(0,o.useState)(n),u=(0,c.Z)(r,2),d=u[0],m=u[1],_=function(e,t){var a=(0,s.Z)((0,s.Z)({},d),{},(0,y.Z)({},t,e.target.value));m(a)};return(0,l.jsxs)("form",{className:j,action:"",children:[(0,l.jsx)(i,{className:C,value:d.car,type:"text",onChange:function(e){return _(e,"car")},placeholder:"Company"}),(0,l.jsx)(i,{className:C,value:d.car_model,type:"text",onChange:function(e){return _(e,"car_model")},placeholder:"Model"}),(0,l.jsx)(i,{className:C,value:d.car_vin,type:"text",onChange:function(e){return _(e,"car_vin")},placeholder:"VIN"}),(0,l.jsx)(i,{className:C,value:d.car_model_year,type:"text",onChange:function(e){return _(e,"car_model_year")},placeholder:"Year"}),(0,l.jsx)(i,{className:C,value:d.car_color,type:"text",onChange:function(e){return _(e,"car_color")},placeholder:"Color"}),(0,l.jsx)(i,{className:C,value:d.price,type:"text",onChange:function(e){return _(e,"price")},placeholder:"Price"}),(0,l.jsx)(i,{className:C,value:d.availability,type:"text",onChange:function(e){return _(e,"availability")},placeholder:"Availability"}),(0,l.jsxs)("div",{className:g,children:[(0,l.jsx)(h,{className:N,btnText:"Add Car",type:"button",onClickBtn:function(e){e.preventDefault();var a=(0,s.Z)((0,s.Z)({},d),{},{id:Date.now()});t(a),m(n)}}),(0,l.jsx)(h,{className:N,btnText:"Close",type:"button",onClickBtn:function(){m(n),a()}})]})]})},Z="addForm_form__wDulP",P="addForm_myBtn__BdvKi",k=function(e){var t=e.cars,a=e.setCars,n=(0,o.useState)(!1),r=(0,c.Z)(n,2),s=r[0],i=r[1];return(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("form",{className:Z,action:"",children:(0,l.jsx)(h,{className:P,btnText:"Add Car",type:"button",onClickBtn:function(){return i(!0)}})}),(0,l.jsx)(p,{active:s,setActive:i,children:(0,l.jsx)(b,{create:function(e){a([].concat((0,_.Z)(t),[e]))},closeModal:function(){return i(!1)}})})]})},S=function(e){var t=e.options,a=e.defaultValue,n=e.value,r=e.onChange;return(0,l.jsxs)("select",{value:n,onChange:function(e){return r(e.target.value)},children:[(0,l.jsx)("option",{disabled:!0,value:"",children:a}),t.map((function(e){return(0,l.jsx)("option",{value:e.value,children:e.name},e.value)}))]})},T="editCarForm_form__KdQl4",F="editCarForm_myInput__6cXvY",A="editCarForm_btnContainer__HfocF",w="editCarForm_myBtn__9hY22",B=function(e){var t=e.car,a=e.closeModal,n=e.updateCar,r=(0,o.useState)(t.car_color),u=(0,c.Z)(r,2),d=u[0],m=u[1],_=(0,o.useState)(t.price),x=(0,c.Z)(_,2),f=x[0],v=x[1],p=(0,o.useState)(t.availability),y=(0,c.Z)(p,2),j=y[0],C=y[1];return(0,l.jsxs)("div",{className:T,action:"",children:[(0,l.jsx)(i,{className:F,value:t.car,type:"text",readOnly:!0,placeholder:"Company"}),(0,l.jsx)(i,{className:F,value:t.car_model,type:"text",readOnly:!0,placeholder:"Model"}),(0,l.jsx)(i,{className:F,value:t.car_vin,type:"text",readOnly:!0,placeholder:"VIN"}),(0,l.jsx)(i,{className:F,value:t.car_model_year,type:"text",readOnly:!0,placeholder:"Year"}),(0,l.jsx)(i,{className:F,value:d,type:"text",onChange:function(e){m(e.target.value)},placeholder:"Color"}),(0,l.jsx)(i,{className:F,value:f,type:"text",onChange:function(e){v(e.target.value)},placeholder:"Price"}),(0,l.jsx)(i,{className:F,value:j,type:"text",onChange:function(e){C(e.target.value)},placeholder:"Availability"}),(0,l.jsxs)("div",{className:A,children:[(0,l.jsx)(h,{className:w,btnText:"Edit Car",type:"submit",onClickBtn:function(e){e.preventDefault();var r=(0,s.Z)((0,s.Z)({},t),{},{color:d,price:f,availability:j});n(r),a()}}),(0,l.jsx)(h,{className:w,btnText:"NO",type:"button",onClickBtn:function(){a()}})]})]})},I={container:"deleteCarForm_container__9gFJV",form:"deleteCarForm_form__+R8R9",myInput:"deleteCarForm_myInput__Rel0w",myBtn:"deleteCarForm_myBtn__Jihuc"},L=function(e){var t=e.car,a=e.onDelete,n=e.closeModal;return(0,l.jsxs)("div",{className:I.form,action:"",children:[(0,l.jsx)("h3",{children:"Are you sure you want to perform this action?"}),(0,l.jsxs)("div",{className:I.btnContainer,children:[(0,l.jsx)(h,{className:I.myBtn,btnText:"YES",type:"button",onClickBtn:function(){a(t.id),n()}}),(0,l.jsx)(h,{className:I.myBtn,btnText:"NO",type:"button",onClickBtn:function(){n()}})]})]})},M="carListItem_cell__mGt5h",D="carListItem_year__e4Sqf",O="carListItem_availability__dPxSK",q=function(e){var t=e.car,a=e.updateCar,n=e.onDelete,r=(0,o.useState)(""),s=(0,c.Z)(r,2),i=s[0],u=s[1],d=(0,o.useState)(!1),m=(0,c.Z)(d,2),_=m[0],h=m[1],x=(0,o.useState)(!1),f=(0,c.Z)(x,2),v=f[0],y=f[1],j=function(){u(""),h(!1),y(!1)};return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:M,children:t.car}),(0,l.jsx)("td",{className:M,children:t.car_model}),(0,l.jsx)("td",{className:M,children:t.car_vin}),(0,l.jsx)("td",{className:M,children:t.car_color}),(0,l.jsx)("td",{className:"".concat(M," ").concat(D),children:t.car_model_year}),(0,l.jsx)("td",{className:M,children:t.price}),(0,l.jsx)("td",{className:"".concat(M," ").concat(O),children:t.availability.toString()}),(0,l.jsxs)("td",{className:M,children:[(0,l.jsx)(S,{defaultValue:"Choose Action",options:[{value:"Edit Car Info",name:"Edit"},{value:"Delete Car Info",name:"Delete"}],value:i,onChange:function(e){u(e),"Edit Car Info"===e?h(!0):"Delete Car Info"===e&&y(!0)}}),(0,l.jsx)(p,{active:_,setActive:h,children:(0,l.jsx)(B,{car:t,updateCar:a,closeModal:j})}),(0,l.jsx)(p,{active:v,setActive:y,children:(0,l.jsx)(L,{car:t,onDelete:function(){n(t.id),j()},closeModal:j})})]})]})},V="myPagination_pagination__s0tQR",E="myPagination_pageButton__kwWIm",Y="myPagination_activePage__dCjxv",J=function(e){var t=e.currentPage,a=e.totalPages,n=e.goToPage,r=e.goToNextPage,c=e.goToPreviousPage,o=(0,_.Z)(Array(a).keys()).map((function(e){return e+1}));return(0,l.jsxs)("div",{className:V,children:[(0,l.jsx)("button",{className:E,onClick:c,disabled:1===t,type:"button",children:"Previous"}),o.map((function(e){return(0,l.jsx)("button",{className:"".concat(E," ").concat(t===e?Y:""),onClick:function(){return n(e)},type:"button",children:e},e)})),(0,l.jsx)("button",{className:E,onClick:r,disabled:t===a,type:"button",children:"Next"})]})},R="carList_title__JuyXi",K="carList_table__fUIoJ",z="carList_tableHead__qb1UN",H="carList_carList__aQM69",Q=function(e){var t=e.cars,a=e.setCars,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=(0,o.useState)(e),a=(0,c.Z)(t,2),n=a[0],r=a[1];return{currentPage:n,goToPage:function(e){r(e)},goToNextPage:function(){r((function(e){return e+1}))},goToPreviousPage:function(){r((function(e){return e-1}))}}}(1),r=n.currentPage,i=n.goToPage,u=n.goToNextPage,d=n.goToPreviousPage,m=function(e){var n=t.map((function(t){return t.id===e.id?(0,s.Z)((0,s.Z)({},t),{},{car_color:e.color,price:e.price,availability:e.availability}):t}));a(n)},_=function(e){var n=t.filter((function(t){return t.id!==e}));a(n)},h=10*r,x=h-10,f=t.slice(x,h),v=Math.ceil(t.length/10);return(0,l.jsxs)("form",{className:"container",children:[(0,l.jsx)("h1",{className:R,children:"Car List"}),(0,l.jsxs)("table",{className:K,children:[(0,l.jsx)("thead",{className:z,children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Company"}),(0,l.jsx)("th",{children:"Model"}),(0,l.jsx)("th",{children:"VIN"}),(0,l.jsx)("th",{children:"Color"}),(0,l.jsx)("th",{children:"Year"}),(0,l.jsx)("th",{children:"Price"}),(0,l.jsx)("th",{children:"Availability"}),(0,l.jsx)("th",{children:"Actions columns"})]})}),f.length?(0,l.jsx)("tbody",{className:H,children:f.map((function(e,t){return(0,l.jsx)(q,{number:x+t+1,car:e,updateCar:m,onDelete:_},e.id)}))}):(0,l.jsx)("tbody",{className:H,children:(0,l.jsx)("tr",{children:(0,l.jsx)("td",{colSpan:"8",style:{textAlign:"center"},children:(0,l.jsx)("h2",{children:"Nothing found for your request"})})})})]}),v>1&&(0,l.jsx)(J,{currentPage:r,totalPages:v,goToPage:i,goToNextPage:u,goToPreviousPage:d})]})},G="loader_loader__kK8Tv",U=function(){return(0,l.jsx)("div",{className:G})},W=a(671),X=a(144),$=a(243),ee=function(){function e(){(0,W.Z)(this,e)}return(0,X.Z)(e,null,[{key:"getAll",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.Z.get("https://myfakeapi.com/api/cars/");case 2:return t=e.sent,e.abrupt("return",t.data.cars);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),te="carListPage_container__eH6zh";var ae=function(){var e=(0,o.useState)([]),t=(0,c.Z)(e,2),a=t[0],s=t[1],i=(0,o.useState)({query:""}),u=(0,c.Z)(i,2),d=u[0],_=u[1],h=function(e,t){return(0,o.useMemo)((function(){if(!t)return e;var a=t.toLowerCase();return e.filter((function(e){return e.car.toLowerCase().includes(a)||e.car_model.toLowerCase().includes(a)||e.car_vin.toLowerCase().includes(a)||e.car_color.toLowerCase().includes(a)||e.car_model_year.toString().includes(a)||e.price.toString().includes(a)||e.availability.toString().includes(a)}))}),[e,t])}(a,d.query),x=function(e){var t=(0,o.useState)(!1),a=(0,c.Z)(t,2),s=a[0],l=a[1],i=(0,o.useState)(""),u=(0,c.Z)(i,2),d=u[0],m=u[1],_=function(){var t=(0,r.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l(!0),t.next=4,e();case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),m(t.t0.message);case 9:return t.prev=9,l(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})));return function(){return t.apply(this,arguments)}}();return[_,s,d]}((0,r.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.getAll();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})))),f=(0,c.Z)(x,3),v=f[0],p=f[1],y=f[2];return(0,o.useEffect)((function(){v()}),[]),(0,l.jsxs)("div",{className:te,children:[(0,l.jsx)(m,{filter:d,setFilter:_}),(0,l.jsx)(k,{cars:a,setCars:s}),y&&(0,l.jsxs)("h2",{children:["An error occurred $",y]}),p?(0,l.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:50},children:(0,l.jsx)(U,{})}):(0,l.jsx)(Q,{cars:h,setCars:s,filter:d})]})}}}]);
//# sourceMappingURL=570.caa04823.chunk.js.map