(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{IsqK:function(e,n,t){"use strict";var a=t("wx14"),r=t("Ff2n"),i=t("q1tI"),o=t.n(i),c=(t("17x9"),t("iuhU")),s=t("H2TA"),l=t("ofer"),d=t("MquD"),u=o.a.forwardRef((function(e,n){var t=e.children,i=e.classes,s=e.className,u=e.disableTypography,p=void 0!==u&&u,g=e.inset,f=void 0!==g&&g,m=e.primary,x=e.primaryTypographyProps,y=e.secondary,v=e.secondaryTypographyProps,b=Object(r.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),w=o.a.useContext(d.a).dense,h=null!=m?m:t;null==h||h.type===l.a||p||(h=o.a.createElement(l.a,Object(a.a)({variant:w?"body2":"body1",className:i.primary,component:"span"},x),h));var j=y;return null==j||j.type===l.a||p||(j=o.a.createElement(l.a,Object(a.a)({variant:"body2",className:i.secondary,color:"textSecondary"},v),j)),o.a.createElement("div",Object(a.a)({className:Object(c.a)(i.root,s,w&&i.dense,f&&i.inset,h&&j&&i.multiline),ref:n},b),h,j)}));n.a=Object(s.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(u)},Sa6g:function(e,n,t){"use strict";var a=t("ZBNC"),r=t("H2TA"),i=t("Ff2n"),o=t("wx14"),c=t("q1tI"),s=t.n(c),l=(t("17x9"),t("iuhU")),d=[0,1,2,3,4,5,6,7,8,9,10],u=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function p(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=parseFloat(e);return"".concat(t/n).concat(String(e).replace(String(t),"")||"px")}var g=s.a.forwardRef((function(e,n){var t=e.alignContent,a=void 0===t?"stretch":t,r=e.alignItems,c=void 0===r?"stretch":r,d=e.classes,u=e.className,p=e.component,g=void 0===p?"div":p,f=e.container,m=void 0!==f&&f,x=e.direction,y=void 0===x?"row":x,v=e.item,b=void 0!==v&&v,w=e.justify,h=void 0===w?"flex-start":w,j=e.lg,C=void 0!==j&&j,S=e.md,I=void 0!==S&&S,O=e.sm,T=void 0!==O&&O,E=e.spacing,N=void 0===E?0:E,W=e.wrap,_=void 0===W?"wrap":W,P=e.xl,B=void 0!==P&&P,D=e.xs,M=void 0!==D&&D,k=e.zeroMinWidth,q=void 0!==k&&k,z=Object(i.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),F=Object(l.a)(d.root,u,m&&[d.container,0!==N&&d["spacing-xs-".concat(String(N))]],b&&d.item,q&&d.zeroMinWidth,"row"!==y&&d["direction-xs-".concat(String(y))],"wrap"!==_&&d["wrap-xs-".concat(String(_))],"stretch"!==c&&d["align-items-xs-".concat(String(c))],"stretch"!==a&&d["align-content-xs-".concat(String(a))],"flex-start"!==h&&d["justify-xs-".concat(String(h))],!1!==M&&d["grid-xs-".concat(String(M))],!1!==T&&d["grid-sm-".concat(String(T))],!1!==I&&d["grid-md-".concat(String(I))],!1!==C&&d["grid-lg-".concat(String(C))],!1!==B&&d["grid-xl-".concat(String(B))]);return s.a.createElement(g,Object(o.a)({className:F,ref:n},z))})),f=Object(r.a)((function(e){return Object(o.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,n){var t={};return d.forEach((function(a){var r=e.spacing(a);0!==r&&(t["spacing-".concat(n,"-").concat(a)]={margin:"-".concat(p(r,2)),width:"calc(100% + ".concat(p(r),")"),"& > $item":{padding:p(r,2)}})})),t}(e,"xs"),{},e.breakpoints.keys.reduce((function(n,t){return function(e,n,t){var a={};u.forEach((function(e){var n="grid-".concat(t,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[n]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[n]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[n]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===t?Object(o.a)(e,a):e[n.breakpoints.up(t)]=a}(n,e,t),n}),{}))}),{name:"MuiGrid"})(g),m=t("eD//"),x=t("tVbE"),y=t("IsqK"),v=t("ofer"),b=t("rORB"),w=s.a.createElement,h=function(e,n){return e.url<n.url?-1:1},j=Object(r.a)((function(e){return Object(a.a)({pagesList:{maxHeight:"calc(100vh - ".concat(e.spacing(24),"px)"),overflow:"auto"},pageContent:{paddingLeft:e.spacing(4),paddingTop:e.spacing(2)}})}))((function(e){var n=e.classes,t=e.children,a=e.currentPageId,r=e.config,i=r.tasks,o=r.pages,c=r.site,l=r._id,d=i.filter((function(e){return e.completedDate})).sort((function(e,n){return n.completedDate-e.completedDate}))[0]._id;return w(f,{container:!0},w(f,{item:!0,lg:3,className:n.pagesList},w(m.a,null,o.sort(h).map((function(e){return w(x.a,{key:e._id,component:"a",button:!0,href:"/".concat(c._id,"/").concat(l,"/").concat(e._id,"/").concat(d),selected:e._id==a},w(y.a,{primary:w(s.a.Fragment,null,w(v.a,{variant:"body1",color:e.title?"textPrimary":"error"},e.title||w("em",null,"Untitled Page"))),secondary:w(s.a.Fragment,null,w(v.a,{variant:"body2",gutterBottom:!0,component:"div"},e.url),w(b.a,{variant:"body2",errorCount:e.errorCount,warningCount:e.warningCount,noticeCount:e.noticeCount})),disableTypography:!0}))})))),w(f,{item:!0,lg:9,className:n.pageContent},t))}));n.a=j},d4U5:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[siteId]/[configId]",function(){return t("dVrE")}])},dVrE:function(e,n,t){"use strict";t.r(n);var a=t("ln6h"),r=t.n(a),i=t("q1tI"),o=t.n(i),c=t("Sa6g"),s=t("2OCX"),l=t("ofer"),d=o.a.createElement,u=function(e){var n=e.config;return d(c.a,{config:n},d(l.a,{variant:"h5",component:"h2"},"Select a page"))};u.getInitialProps=function(e){var n,t;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.query.configId,a.next=3,r.a.awrap(Object(s.b)(n));case 3:return t=a.sent,a.abrupt("return",{config:t,header:t.site.name,title:t.name});case 5:case"end":return a.stop()}}))},n.default=u}},[["d4U5",0,2,1,3,4,5,6]]]);