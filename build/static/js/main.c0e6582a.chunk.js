(this.webpackJsonpprimalvinyl=this.webpackJsonpprimalvinyl||[]).push([[0],{108:function(e,t,a){e.exports={root:"_MasterTemplate_root__2cczO"}},112:function(e,t,a){e.exports={root:"SearchForm_root__2m7Ot"}},143:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),c=a.n(n),o=a(35),s=a.n(o),i=a(33),l=a(91),u=a(26),d=a(114),j=a(6),p={name:"",realname:"",image_url:"",error:!1,error_message:"",request_status:"idle"},b={pagination:{page:0,pages:1,per_page:15,items:0},results:[],error:!1,error_message:"",request_status:"idle"},h={query:"",page:0,per_page:15},v=[{path:"/",value:"Home"},{path:"/about-us",value:"About Us"},{path:"/ding",value:"Nav Item 1"},{path:"/dong",value:"Nav Item 2"},{path:"/dingle",value:"Nav Item 3"},{path:"/ring",value:"Nav Item 4"},{path:"/sing",value:"Nav Item 5"}],m="GET_ARTIST",O="GET_ARTISTS",x="PUT_QUERY",f="PUT_ARTIST",g="PUT_ARTISTS",_="CLEAR_ARTIST",w="CLEAR_ARTISTS",y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:x,payload:e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return{type:f,payload:e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;return{type:g,payload:e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return{type:O,payload:Object(j.a)(Object(j.a)({},h),e)}},C=Object(u.combineReducers)({query:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.payload;default:return e}},artist:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(j.a)(Object(j.a)({},e),t.payload);case _:return{};default:return e}},artists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(j.a)(Object(j.a)({},e),t.payload);case _:return{};default:return e}}}),T=a(24),k=a.n(T),E=a(14),q=a(103),B=a.n(q),F=function(e){return B.a.get(e,{baseURL:"https://primalvinyl.herokuapp.com"}).then((function(e){return e.data})).catch((function(e){return e}))},R=k.a.mark(D),I=k.a.mark(V),U=k.a.mark(G),H=k.a.mark(L),A=k.a.mark(M);function D(){var e,t,a,r=arguments;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:h,t=e.query,n.prev=2,n.next=5,Object(E.d)(y(t));case 5:return n.next=7,Object(E.d)(N(Object(j.a)(Object(j.a)({},p),{},{request_status:"pending"})));case 7:return n.next=9,Object(E.b)(F,"/artists/".concat(t));case 9:return a=n.sent,n.next=12,Object(E.d)(N(Object(j.a)(Object(j.a)({},a),{},{request_status:"resolved"})));case 12:n.next=18;break;case 14:return n.prev=14,n.t0=n.catch(2),n.next=18,Object(E.d)(N(Object(j.a)(Object(j.a)({},p),{},{request_status:"resolved",error:!0})));case 18:case"end":return n.stop()}}),R,null,[[2,14]])}function V(){var e,t,a,r,n,c=arguments;return k.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:h,t=e.query,a=e.page,r=e.per_page,o.prev=2,o.next=5,Object(E.d)(y(t));case 5:return o.next=7,Object(E.d)(P(Object(j.a)(Object(j.a)({},b),{},{request_status:"pending"})));case 7:return o.next=9,Object(E.b)(F,"/artists/search/".concat(t,"?page=").concat(a,"&per_page=").concat(r));case 9:return n=o.sent,o.next=12,Object(E.d)(P(Object(j.a)(Object(j.a)({},n),{},{request_status:"resolved"})));case 12:o.next=18;break;case 14:return o.prev=14,o.t0=o.catch(2),o.next=18,Object(E.d)(P(Object(j.a)(Object(j.a)({},b),{},{request_status:"resolved",error:!0})));case 18:case"end":return o.stop()}}),I,null,[[2,14]])}function G(){var e,t;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,Object(E.e)(m);case 3:return e=a.sent,t=e.payload,a.next=7,Object(E.b)(D,t);case 7:a.next=0;break;case 9:case"end":return a.stop()}}),U)}function L(){var e,t;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,Object(E.e)(O);case 3:return e=a.sent,t=e.payload,a.next=7,Object(E.b)(V,t);case 7:a.next=0;break;case 9:case"end":return a.stop()}}),H)}function M(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.a)([Object(E.c)(G),Object(E.c)(L)]);case 2:case"end":return e.stop()}}),A)}var z,W=Object(d.a)(),J=Object(u.createStore)(C,(z=[W],u.applyMiddleware.apply(void 0,Object(l.a)(z))));W.run(M);var Q=J,Y=(a(143),a(27)),X=a(74),K=c.a.createContext({xs:!1,smUp:!1,mdUp:!1,lgUp:!1,xlUp:!1,smDown:!1,mdDown:!1,lgDown:!1,xlDown:!1}),$=function(e){var t=e.children,a=c.a.useState({}),n=Object(X.a)(a,2),o=n[0],s=n[1],i=c.a.useCallback((function(){var e={xs:"(max-width: 599px)",smUp:"(min-width: 600px)",mdUp:"(min-width: 900px)",lgUp:"(min-width: 1200px)",xlUp:"(min-width: 1800px)",smDown:"(max-width: 600px)",mdDown:"(max-width: 900px)",lgDown:"(max-width: 1200px)",xlDown:"(max-width: 1800px)"},t={},a=Object.keys(e),r=!1,n=function(){var e=a.reduce((function(e,a){return e[a]=!(!t[a]||!t[a].matches),e}),{});s(e)};if(window&&window.matchMedia){var c={};a.forEach((function(a){"string"===typeof e[a]?(t[a]=window.matchMedia(e[a]),c[a]=t[a].matches):c[a]=!1})),s(c),r=!0,a.forEach((function(a){"string"===typeof e[a]&&t[a].addListener(n)}))}return function(){r&&a.forEach((function(a){"string"===typeof e[a]&&t[a].removeListener(n)}))}}),[]);return c.a.useEffect((function(){return i()}),[i]),Object(r.jsx)(K.Provider,{value:o,children:t})};var Z=a(10),ee=a(104),te=a(105),ae=a(115),re=a(113),ne=a(81),ce=a.n(ne),oe=function(){return Object(r.jsx)("div",{className:ce.a.root,children:Object(r.jsx)("div",{className:ce.a.wrapper,children:Object(r.jsx)("h1",{children:"404"})})})},se=function(e){Object(ae.a)(a,e);var t=Object(re.a)(a);function a(e){var r;return Object(ee.a)(this,a),(r=t.call(this,e)).state={hasError:!1},r}return Object(te.a)(a,[{key:"render",value:function(){return this.state.hasError?Object(r.jsx)(oe,{}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),a}(c.a.Component),ie=a(150),le=a(106),ue=a(107),de=a(43),je=a.n(de),pe=function(){var e=c.a.useRef(null),t=c.a.useContext(K),a=c.a.useState(!1),n=Object(X.a)(a,2),o=n[0],s=n[1],i=v.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)(Y.c,{exact:!0,to:e.path,children:e.value},e.path)},e.path)}));c.a.useEffect((function(){return document.addEventListener("mousedown",l),function(){return document.removeEventListener("mousedown",l)}}),[]);var l=function(t){e.current&&e.current.contains(t.target)||s(!1)};return Object(r.jsx)("header",{ref:e,className:je.a.root,children:Object(r.jsxs)("div",{className:je.a.wrapper,children:[t.lgDown&&Object(r.jsx)("button",{className:je.a.navToggle,onClick:function(e){e.stopPropagation(),s(!o)},children:Object(r.jsx)(le.a,{icon:ue.a})}),Object(r.jsx)(Y.b,{to:"/",className:je.a.logotype,children:Object(r.jsxs)("hgroup",{children:[Object(r.jsx)("h1",{children:"Primal Vinyl"}),Object(r.jsx)("h2",{children:"Primal Vinyl"})]})}),Object(r.jsx)(ie.a,{in:o,timeout:300,classNames:{enter:je.a.enter,enterDone:je.a.enterDone},children:Object(r.jsx)("nav",{className:je.a.navigation,children:(o||t.lgUp)&&Object(r.jsx)("ul",{children:i})})})]})})},be=a(59),he=a.n(be),ve=function(){var e=v.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)(Y.c,{exact:!0,to:e.path,children:e.value},e.path)},e.path)}));return Object(r.jsx)("footer",{className:he.a.root,children:Object(r.jsxs)("div",{className:he.a.wrapper,children:[Object(r.jsxs)("div",{className:he.a.logotype,children:[Object(r.jsx)(Y.b,{to:"/",children:Object(r.jsx)("h2",{children:"Primal Vinyl"})}),Object(r.jsxs)("div",{className:he.a.copyright,children:["\xa9 ",(new Date).getFullYear()," ","Primal Vinyl"]})]}),Object(r.jsx)("div",{className:he.a.navigation,children:Object(r.jsx)("nav",{children:Object(r.jsx)("ul",{children:e})})})]})})},me=a(108),Oe=a.n(me),xe=function(e){var t=e.children;return Object(r.jsxs)("div",{className:Oe.a.root,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(pe,{}),Object(r.jsx)("main",{children:Object(r.jsx)(se,{children:t})})]}),Object(r.jsx)(ve,{})]})},fe=a(90),ge=a(89),_e=a(79),we=a.n(_e),ye=c.a.forwardRef((function(e,t){var a=e.id,n=e.value,c=e.defaultValue,o=e.className,s=e.name,i=e.label,l=e.placeholder,u=e.type,d=e.required,j=e.disabled,p=e.errors,b=e.touched,h=e.onChange,v=e.onBlur,m=e.handleChange,O=e.handleBlur;return Object(r.jsxs)("div",{className:we.a.root,children:[i&&Object(r.jsx)("label",{htmlFor:a,children:i}),Object(r.jsxs)("div",{className:we.a.formControlWrapper,children:[Object(r.jsx)("input",{type:u,className:o,id:a,name:s,value:n,defaultValue:c,ref:t,placeholder:l,required:d,disabled:j,onChange:function(e){m&&m(e),h&&h(e)},onBlur:function(e){O&&O(e),v&&v(e)}}),p&&b&&p[a]&&b[a]&&Object(r.jsx)("div",{className:we.a.formFieldError,children:p[a]})]})]})}));ye.defaultProps={value:void 0,defaultValue:void 0,className:void 0,name:void 0,label:void 0,placeholder:void 0,type:"text",required:!1,disabled:!1,errors:{},touched:{},onChange:function(){},onBlur:function(){},handleChange:function(){},handleBlur:function(){}};var Ne=ye,Pe=a(85),Se=a.n(Pe),Ce=c.a.forwardRef((function(e,t){var a=e.id,n=e.className,c=e.name,o=e.value,s=e.type,i=e.disabled,l=e.isSubmitting,u=e.color,d=e.url,j=e.onClick;return Object(r.jsx)("div",{className:Se.a.root,children:Object(r.jsx)("button",{className:n,id:a,name:c,type:s,disabled:l||i,ref:t,style:{background:u||Se.a.gray800},onClick:function(e){d&&window.open(d,"article","noopener,noreferrer"),j&&j(e)},children:o})})}));Ce.defaultProps={className:void 0,name:void 0,value:"",type:"submit",disabled:!1,isSubmitting:!1,color:"",url:void 0,onClick:function(){}};var Te=Ce,ke=a(112),Ee=a.n(ke),qe=function(){var e=Object(i.c)();return Object(r.jsx)("section",{className:Ee.a.root,children:Object(r.jsx)(fe.b,{initialValues:{searchField:""},onSubmit:function(t,a){e({type:w}),e(S({query:t.searchField})),a.setSubmitting(!1)},validateOnBlur:!1,validationSchema:ge.a().shape({searchField:ge.b().required("This field is required.")}),children:function(e){var t=e.values,a=e.errors,n=e.touched,c=e.isSubmitting,o=e.handleChange,s=e.handleBlur;return Object(r.jsxs)(fe.a,{children:[Object(r.jsx)(Ne,{type:"search",id:"searchField",value:t.searchField,errors:a,touched:n,disabled:c,handleChange:o,handleBlur:s}),Object(r.jsx)(Te,{id:"searchButton",disabled:c,value:"Search"})]})}})})},Be=a(86),Fe=a(62),Re=a.n(Fe),Ie=c.a.forwardRef((function(e,t){var a=e.label,n=e.id,c=e.name,o=e.className,s=e.value,i=e.defaultValue,l=e.options,u=e.errors,d=e.touched,j=e.required,p=e.disabled,b=e.onChange,h=e.onBlur,v=e.handleChange,m=e.handleBlur;return Object(r.jsxs)("div",{className:Re.a.root,children:[a&&Object(r.jsx)("label",{htmlFor:n,className:Re.a.formLabel,children:a}),Object(r.jsxs)("div",{className:Re.a.formControlWrapper,children:[Object(r.jsx)("select",{className:o,name:c,id:n,value:s,defaultValue:i,ref:t,onChange:function(e){v&&v(e),b&&b(e)},onBlur:function(e){m&&m(e),h&&h(e)},required:j,disabled:p,children:l.map((function(e){return Object(r.jsx)("option",{value:e.value,children:e.display},e.value)}))}),u&&d&&u[n]&&d[n]&&Object(r.jsx)("div",{className:Re.a.formFieldError,children:u[n]})]})]})}));Ie.defaultProps={value:void 0,defaultValue:void 0,className:void 0,name:void 0,label:void 0,required:!1,disabled:!1,errors:{},touched:{},onChange:function(){},onBlur:function(){},handleChange:function(){},handleBlur:function(){}};var Ue=Ie,He=a(29),Ae=a.n(He),De=function(){var e=c.a.useMemo((function(){return[{Header:"",Cell:function(e){return Object(r.jsx)("img",{src:e.value,alt:""})},accessor:"image_url"},{Header:"Name",Cell:function(e){return Object(r.jsx)(Y.b,{to:"/artists/".concat(e.row.original.id),children:e.value})},accessor:"name"}]}),[]),t=Object(i.c)(),a=Object(i.d)((function(e){return e.artists}),i.b),n=a.pagination,o=a.results,s=Object(i.d)((function(e){return e.query})),l=Object(Be.useTable)({columns:e,data:o,manualPagination:!0,pageSize:n.per_page,pageIndex:n.page,pageCount:n.pages},Be.usePagination),u=l.getTableProps,d=l.getTableBodyProps,p=l.headerGroups,b=l.page,h=l.prepareRow,v=l.canPreviousPage,m=l.canNextPage,O=l.pageCount,x=l.pageIndex,f=l.pageSize,g=l.gotoPage,_=l.nextPage,w=l.previousPage,y=l.setPageSize,N=function(){return t(S({query:s,page:x,per_page:f}))};return Object(r.jsxs)("div",{className:Ae.a.root,children:[Object(r.jsxs)("table",Object(j.a)(Object(j.a)({},u()),{},{children:[Object(r.jsx)("thead",{children:p.map((function(e){return Object(r.jsx)("tr",Object(j.a)(Object(j.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(r.jsx)("th",Object(j.a)(Object(j.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(r.jsx)("tbody",Object(j.a)(Object(j.a)({},d()),{},{children:b.map((function(e){return h(e),Object(r.jsx)("tr",Object(j.a)(Object(j.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(r.jsx)("td",Object(j.a)(Object(j.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]})),Object(r.jsxs)("div",{className:Ae.a.pagination,children:[Object(r.jsxs)("div",{className:Ae.a.buttonGroup,children:[Object(r.jsx)(Te,{className:Ae.a.button,disabled:!v,value:"Start",onClick:function(){g(0),N()}}),Object(r.jsx)(Te,{className:Ae.a.button,disabled:!v,value:"Previous",onClick:function(){w(),N()}}),Object(r.jsx)(Te,{className:Ae.a.button,disabled:!m,value:"Next",onClick:function(){_(),console.log(x),N()}}),Object(r.jsx)(Te,{className:Ae.a.button,disabled:!m,value:"End",onClick:function(){g(O-1),N()}})]}),Object(r.jsxs)("div",{className:Ae.a.gotoPage,children:[Object(r.jsx)(Ne,{type:"number",defaultValue:1,onChange:function(e){var t=e.target.value,a=t?Number(t)-1:0;g(a),N()}}),"go to"]}),Object(r.jsxs)("div",{className:Ae.a.perPage,children:[Object(r.jsx)(Ue,{value:f,options:[{value:15,display:15},{value:25,display:25},{value:50,display:50}],onChange:function(e){y(Number(e.target.value)),console.log(e.target.value),console.log(f),N()}}),"per page"]}),Object(r.jsxs)("div",{className:Ae.a.currentPage,children:["Page ",Object(r.jsxs)("strong",{children:[x+1," of ",O]})]})]})]})},Ve=a(87),Ge=a.n(Ve),Le=function(){return Object(r.jsx)(xe,{children:Object(r.jsx)("article",{className:Ge.a.root,children:Object(r.jsxs)("div",{className:Ge.a.wrapper,children:[Object(r.jsx)(qe,{}),Object(r.jsx)(De,{})]})})})},Me=a(88),ze=a.n(Me),We=function(){return Object(r.jsx)(xe,{children:Object(r.jsx)("div",{className:ze.a.root,children:Object(r.jsx)("div",{className:ze.a.wrapper,children:Object(r.jsx)("h2",{children:"About Us"})})})})},Je=function(){return Object(r.jsx)(se,{children:Object(r.jsxs)(Z.c,{children:[Object(r.jsx)(Z.a,{exact:!0,path:"/",component:Le}),Object(r.jsx)(Z.a,{path:"/about-us",component:We}),Object(r.jsx)(Z.a,{component:oe})]})})},Qe=function(){return Object(r.jsx)(Y.a,{children:Object(r.jsx)($,{children:Object(r.jsx)("div",{className:"app",children:Object(r.jsx)(Je,{})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(i.a,{store:Q,children:Object(r.jsx)(Qe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,a){e.exports={root:"SearchResults_root__2Sd0F",pagination:"SearchResults_pagination__1v60v",buttonGroup:"SearchResults_buttonGroup__2rItO",currentPage:"SearchResults_currentPage__20BTb",gotoPage:"SearchResults_gotoPage__uBfWF",perPage:"SearchResults_perPage__2ETuI"}},43:function(e,t,a){e.exports={root:"Header_root__3BXGr",wrapper:"Header_wrapper__2o_MJ",logotype:"Header_logotype__1h5q0",navigation:"Header_navigation__oTLSt",active:"Header_active__3cQn4",navToggle:"Header_navToggle__2z3hq",enter:"Header_enter__2FAGX",enterDone:"Header_enterDone__2ABSx"}},59:function(e,t,a){e.exports={root:"Footer_root__23WIi",wrapper:"Footer_wrapper__BquJv",logotype:"Footer_logotype__8MVbK",navigation:"Footer_navigation__3nvQN"}},62:function(e,t,a){e.exports={root:"Select_root__yGV_f",formFieldError:"Select_formFieldError__aU_lL"}},79:function(e,t,a){e.exports={root:"Input_root__1kzmi",formFieldError:"Input_formFieldError__kB9HY"}},81:function(e,t,a){e.exports={root:"ErrorPage_root__2UOfA",wrapper:"ErrorPage_wrapper__20TJt"}},85:function(e,t,a){e.exports={root:"Button_root__ghhfG"}},87:function(e,t,a){e.exports={root:"HomePage_root__36IT6",wrapper:"HomePage_wrapper__v1F8-"}},88:function(e,t,a){e.exports={root:"AboutUs_root__3pjAC",wrapper:"AboutUs_wrapper__12SNI"}}},[[148,1,2]]]);
//# sourceMappingURL=main.c0e6582a.chunk.js.map