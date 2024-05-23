"use strict";(self.webpackChunktokyo_free_white_react_admin_dashboard=self.webpackChunktokyo_free_white_react_admin_dashboard||[]).push([[987],{8987:function(e,t,r){r.r(t),r.d(t,{default:function(){return se}});var o=r(2982),n=r(885),a=r(6907),i=r(1889),s=r(3044),c=r(890),l=r(3967),d=r(184);var u=function(e){var t="Catherine Pike",r="/static/images/avatars/1.jpg",o=(0,l.Z)();return(0,d.jsxs)(i.ZP,{container:!0,alignItems:"center",children:[(0,d.jsx)(i.ZP,{item:!0,children:(0,d.jsx)(s.Z,{sx:{mr:2,width:o.spacing(8),height:o.spacing(8)},variant:"rounded",alt:t,src:r})}),(0,d.jsx)(i.ZP,{item:!0,children:(0,d.jsx)(c.Z,{variant:"h3",component:"h3",gutterBottom:!0,children:"Welcome!"})})]})},p=r(6934),f=r(4554),v=r(1614),m=(0,p.ZP)(f.Z)((function(e){var t=e.theme;return"\n        padding: ".concat(t.spacing(4),";\n")})),h=function(e){var t=e.children;return(0,d.jsx)(m,{className:"MuiPageTitle-wrapper",children:(0,d.jsx)(v.Z,{maxWidth:"lg",children:t})})},g=r(4942),Z=r(3366),x=r(7462),b=r(2791),y=(r(7441),r(8182)),C=r(4419),R=r(1402),k=r(4036);function w(e,t){return void 0!==t&&void 0!==e&&(Array.isArray(t)?t.indexOf(e)>=0:e===t)}var j=r(1217),W=r(5878);function S(e){return(0,j.Z)("MuiToggleButtonGroup",e)}var M=(0,W.Z)("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),T=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],z=(0,p.ZP)("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[(0,g.Z)({},"& .".concat(M.grouped),t.grouped),(0,g.Z)({},"& .".concat(M.grouped),t["grouped".concat((0,k.Z)(r.orientation))]),t.root,"vertical"===r.orientation&&t.vertical,r.fullWidth&&t.fullWidth]}})((function(e){var t=e.ownerState,r=e.theme;return(0,x.Z)({display:"inline-flex",borderRadius:(r.vars||r).shape.borderRadius},"vertical"===t.orientation&&{flexDirection:"column"},t.fullWidth&&{width:"100%"},(0,g.Z)({},"& .".concat(M.grouped),(0,x.Z)({},"horizontal"===t.orientation?(0,g.Z)({"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0}},"&.".concat(M.selected," + .").concat(M.grouped,".").concat(M.selected),{borderLeft:0,marginLeft:0}):(0,g.Z)({"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}},"&.".concat(M.selected," + .").concat(M.grouped,".").concat(M.selected),{borderTop:0,marginTop:0}))))})),N=b.forwardRef((function(e,t){var r=(0,R.Z)({props:e,name:"MuiToggleButtonGroup"}),o=r.children,n=r.className,a=r.color,i=void 0===a?"standard":a,s=r.disabled,c=void 0!==s&&s,l=r.exclusive,u=void 0!==l&&l,p=r.fullWidth,f=void 0!==p&&p,v=r.onChange,m=r.orientation,h=void 0===m?"horizontal":m,g=r.size,j=void 0===g?"medium":g,W=r.value,M=(0,Z.Z)(r,T),N=(0,x.Z)({},r,{disabled:c,fullWidth:f,orientation:h,size:j}),B=function(e){var t=e.classes,r=e.orientation,o=e.fullWidth,n=e.disabled,a={root:["root","vertical"===r&&"vertical",o&&"fullWidth"],grouped:["grouped","grouped".concat((0,k.Z)(r)),n&&"disabled"]};return(0,C.Z)(a,S,t)}(N),P=function(e,t){if(v){var r,o=W&&W.indexOf(t);W&&o>=0?(r=W.slice()).splice(o,1):r=W?W.concat(t):[t],v(e,r)}},F=function(e,t){v&&v(e,W===t?null:t)};return(0,d.jsx)(z,(0,x.Z)({role:"group",className:(0,y.Z)(B.root,n),ref:t,ownerState:N},M,{children:b.Children.map(o,(function(e){return b.isValidElement(e)?b.cloneElement(e,{className:(0,y.Z)(B.grouped,e.props.className),onChange:u?F:P,selected:void 0===e.props.selected?w(e.props.value,W):e.props.selected,size:e.props.size||j,fullWidth:f,color:e.props.color||i,disabled:e.props.disabled||c}):null}))}))})),B=r(2065),P=r(3701);function F(e){return(0,j.Z)("MuiToggleButton",e)}var L=(0,W.Z)("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),G=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],O=(0,p.ZP)(P.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["size".concat((0,k.Z)(r.size))]]}})((function(e){var t,r,o=e.theme,n=e.ownerState,a="standard"===n.color?o.palette.text.primary:o.palette[n.color].main;return o.vars&&(a="standard"===n.color?o.vars.palette.text.primary:o.vars.palette[n.color].main,r="standard"===n.color?o.vars.palette.text.primaryChannel:o.vars.palette[n.color].mainChannel),(0,x.Z)({},o.typography.button,{borderRadius:(o.vars||o).shape.borderRadius,padding:11,border:"1px solid ".concat((o.vars||o).palette.divider),color:(o.vars||o).palette.action.active},n.fullWidth&&{width:"100%"},(t={},(0,g.Z)(t,"&.".concat(L.disabled),{color:(o.vars||o).palette.action.disabled,border:"1px solid ".concat((o.vars||o).palette.action.disabledBackground)}),(0,g.Z)(t,"&:hover",{textDecoration:"none",backgroundColor:o.vars?"rgba(".concat(o.vars.palette.text.primaryChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,B.Fq)(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}),(0,g.Z)(t,"&.".concat(L.selected),{color:a,backgroundColor:o.vars?"rgba(".concat(r," / ").concat(o.vars.palette.action.selectedOpacity,")"):(0,B.Fq)(a,o.palette.action.selectedOpacity),"&:hover":{backgroundColor:o.vars?"rgba(".concat(r," / calc(").concat(o.vars.palette.action.selectedOpacity," + ").concat(o.vars.palette.action.hoverOpacity,"))"):(0,B.Fq)(a,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:o.vars?"rgba(".concat(r," / ").concat(o.vars.palette.action.selectedOpacity,")"):(0,B.Fq)(a,o.palette.action.selectedOpacity)}}}),t),"small"===n.size&&{padding:7,fontSize:o.typography.pxToRem(13)},"large"===n.size&&{padding:15,fontSize:o.typography.pxToRem(15)})})),_=b.forwardRef((function(e,t){var r=(0,R.Z)({props:e,name:"MuiToggleButton"}),o=r.children,n=r.className,a=r.color,i=void 0===a?"standard":a,s=r.disabled,c=void 0!==s&&s,l=r.disableFocusRipple,u=void 0!==l&&l,p=r.fullWidth,f=void 0!==p&&p,v=r.onChange,m=r.onClick,h=r.selected,g=r.size,b=void 0===g?"medium":g,w=r.value,j=(0,Z.Z)(r,G),W=(0,x.Z)({},r,{color:i,disabled:c,disableFocusRipple:u,fullWidth:f,size:b}),S=function(e){var t=e.classes,r=e.fullWidth,o=e.selected,n=e.disabled,a=e.size,i=e.color,s={root:["root",o&&"selected",n&&"disabled",r&&"fullWidth","size".concat((0,k.Z)(a)),i]};return(0,C.Z)(s,F,t)}(W);return(0,d.jsx)(O,(0,x.Z)({className:(0,y.Z)(S.root,n),disabled:c,focusRipple:!u,ref:t,onClick:function(e){m&&(m(e,w),e.defaultPrevented)||v&&v(e,w)},onChange:v,value:w,ownerState:W,"aria-pressed":h},j,{children:o}))}));function A(e){return(0,j.Z)("MuiCardContent",e)}(0,W.Z)("MuiCardContent",["root"]);var D=["className","component"],q=(0,p.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),V=b.forwardRef((function(e,t){var r=(0,R.Z)({props:e,name:"MuiCardContent"}),o=r.className,n=r.component,a=void 0===n?"div":n,i=(0,Z.Z)(r,D),s=(0,x.Z)({},r,{component:a}),c=function(e){var t=e.classes;return(0,C.Z)({root:["root"]},A,t)}(s);return(0,d.jsx)(q,(0,x.Z)({as:a,className:(0,y.Z)(c.root,o),ownerState:s,ref:t},i))})),E=r(7621),I=r(8529),H=r(3031),U=r(2071);function $(e){return(0,j.Z)("MuiLink",e)}var J=(0,W.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),K=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Q={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},X=(0,p.ZP)(c.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["underline".concat((0,k.Z)(r.underline))],"button"===r.component&&t.button]}})((function(e){var t=e.theme,r=e.ownerState,o=(0,I.D)(t,"palette.".concat(function(e){return Q[e]||e}(r.color)))||r.color;return(0,x.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==o?(0,B.Fq)(o,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===r.component&&(0,g.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(J.focusVisible),{outline:"auto"}))})),Y=b.forwardRef((function(e,t){var r=(0,R.Z)({props:e,name:"MuiLink"}),a=r.className,i=r.color,s=void 0===i?"primary":i,c=r.component,l=void 0===c?"a":c,u=r.onBlur,p=r.onFocus,f=r.TypographyClasses,v=r.underline,m=void 0===v?"always":v,h=r.variant,g=void 0===h?"inherit":h,w=r.sx,j=(0,Z.Z)(r,K),W=(0,H.Z)(),S=W.isFocusVisibleRef,M=W.onBlur,T=W.onFocus,z=W.ref,N=b.useState(!1),B=(0,n.Z)(N,2),P=B[0],F=B[1],L=(0,U.Z)(t,z),G=(0,x.Z)({},r,{color:s,component:l,focusVisible:P,underline:m,variant:g}),O=function(e){var t=e.classes,r=e.component,o=e.focusVisible,n=e.underline,a={root:["root","underline".concat((0,k.Z)(n)),"button"===r&&"button",o&&"focusVisible"]};return(0,C.Z)(a,$,t)}(G);return(0,d.jsx)(X,(0,x.Z)({color:s,className:(0,y.Z)(O.root,a),classes:f,component:l,onBlur:function(e){M(e),!1===S.current&&F(!1),u&&u(e)},onFocus:function(e){T(e),!0===S.current&&F(!0),p&&p(e)},ref:L,ownerState:G,variant:g,sx:[].concat((0,o.Z)(Object.keys(Q).includes(s)?[]:[{color:s}]),(0,o.Z)(Array.isArray(w)?w:[w]))},j))})),ee=(0,p.ZP)(v.Z)((function(e){var t=e.theme;return"\n        margin-top: ".concat(t.spacing(4),";\n")}));var te=function(){return(0,d.jsx)(ee,{className:"footer-wrapper",children:(0,d.jsxs)(f.Z,{pb:4,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between",children:[(0,d.jsx)(f.Z,{children:(0,d.jsx)(c.Z,{variant:"subtitle1",children:"\xa9 2022 - Tokyo Free White React Typescript Admin Dashboard"})}),(0,d.jsxs)(c.Z,{sx:{pt:{xs:2,md:0}},variant:"subtitle1",children:["Crafted by"," ",(0,d.jsx)(Y,{href:"https://bloomui.com",target:"_blank",rel:"noopener noreferrer",children:"BloomUI.com"})]})]})})},re=r(8214),oe=r(5861),ne=r(8357),ae=(0,ne.$q8)("http://app.kibrito.com:8054").with((0,ne.RFO)()),ie=function(){var e=(0,oe.Z)((0,re.Z)().mark((function e(){var t;return(0,re.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.request((function(){return{path:"/items/restaurants?fields=translations.*",method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var se=function(){var e=(0,p.ZP)(E.Z)((function(e){var t=e.theme;return"\n          text-align: left;\n          padding-left: ".concat(t.spacing(1),";\n          margin:20px;\n  ")})),t=(0,b.useState)("en"),r=(0,n.Z)(t,2),i=r[0],s=r[1],l=(0,b.useState)([]),f=(0,n.Z)(l,2),m=f[0],g=f[1],Z=(0,b.useState)([]),x=(0,n.Z)(Z,2),y=x[0],C=x[1];return(0,b.useEffect)((function(){ie().then((function(e){g(e);var t=(0,o.Z)(e).map((function(e){return e.translations.filter((function(e){return"en"===e.languages_code}))})).flat();C(t)})).finally((function(){console.log(m)}))}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.ql,{children:(0,d.jsx)("title",{children:"Crypto Dashboard"})}),(0,d.jsx)(h,{children:(0,d.jsx)(u,{})}),(0,d.jsx)(v.Z,{maxWidth:"lg",children:(0,d.jsxs)(N,{color:"primary",value:i,exclusive:!0,onChange:function(e,t){s(t),console.log(t);var r=(0,o.Z)(m).map((function(e){return e.translations.filter((function(e){return e.languages_code===t}))})).flat();C(r),console.log(r)},"aria-label":"Platform",children:[(0,d.jsx)(_,{value:"en",children:"en"}),(0,d.jsx)(_,{value:"ru",children:"ru"}),(0,d.jsx)(_,{value:"tr",children:"tr"})]})}),(0,d.jsx)(v.Z,{maxWidth:"lg",children:y.map((function(t){return(0,d.jsx)(e,{sx:{minWidth:275},children:(0,d.jsxs)(V,{children:[(0,d.jsxs)(c.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:[t.id," restaurant"]}),(0,d.jsxs)(c.Z,{variant:"body2",children:[t.title,(0,d.jsx)("br",{}),t.description]})]})},t.id)}))}),(0,d.jsx)(te,{})]})}},7621:function(e,t,r){r.d(t,{Z:function(){return h}});var o=r(7462),n=r(3366),a=r(2791),i=r(8182),s=r(4419),c=r(6934),l=r(1402),d=r(703),u=r(1217);function p(e){return(0,u.Z)("MuiCard",e)}(0,r(5878).Z)("MuiCard",["root"]);var f=r(184),v=["className","raised"],m=(0,c.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),h=a.forwardRef((function(e,t){var r=(0,l.Z)({props:e,name:"MuiCard"}),a=r.className,c=r.raised,d=void 0!==c&&c,u=(0,n.Z)(r,v),h=(0,o.Z)({},r,{raised:d}),g=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},p,t)}(h);return(0,f.jsx)(m,(0,o.Z)({className:(0,i.Z)(g.root,a),elevation:d?8:void 0,ref:t,ownerState:h},u))}))},1614:function(e,t,r){r.d(t,{Z:function(){return k}});var o=r(4942),n=r(3366),a=r(7462),i=r(2791),s=r(8182),c=r(7312),l=r(1217),d=r(4419),u=r(6083),p=(0,r(4046).ZP)(),f=r(5080),v=r(184),m=["className","component","disableGutters","fixed","maxWidth","classes"],h=(0,f.Z)(),g=p("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["maxWidth".concat((0,c.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),Z=function(e){return(0,u.Z)({props:e,name:"MuiContainer",defaultTheme:h})},x=function(e,t){var r=e.classes,o=e.fixed,n=e.disableGutters,a=e.maxWidth,i={root:["root",a&&"maxWidth".concat((0,c.Z)(String(a))),o&&"fixed",n&&"disableGutters"]};return(0,d.Z)(i,(function(e){return(0,l.Z)(t,e)}),r)};var b=r(4036),y=r(6934),C=r(1402),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,r=void 0===t?g:t,c=e.useThemeProps,l=void 0===c?Z:c,d=e.componentName,u=void 0===d?"MuiContainer":d,p=r((function(e){var t=e.theme,r=e.ownerState;return(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!r.disableGutters&&(0,o.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,r){var o=r,n=t.breakpoints.values[o];return 0!==n&&(e[t.breakpoints.up(o)]={maxWidth:"".concat(n).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,r=e.ownerState;return(0,a.Z)({},"xs"===r.maxWidth&&(0,o.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),r.maxWidth&&"xs"!==r.maxWidth&&(0,o.Z)({},t.breakpoints.up(r.maxWidth),{maxWidth:"".concat(t.breakpoints.values[r.maxWidth]).concat(t.breakpoints.unit)}))})),f=i.forwardRef((function(e,t){var r=l(e),o=r.className,i=r.component,c=void 0===i?"div":i,d=r.disableGutters,f=void 0!==d&&d,h=r.fixed,g=void 0!==h&&h,Z=r.maxWidth,b=void 0===Z?"lg":Z,y=(0,n.Z)(r,m),C=(0,a.Z)({},r,{component:c,disableGutters:f,fixed:g,maxWidth:b}),R=x(C,u);return(0,v.jsx)(p,(0,a.Z)({as:c,ownerState:C,className:(0,s.Z)(R.root,o),ref:t},y))}));return f}({createStyledComponent:(0,y.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["maxWidth".concat((0,b.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,C.Z)({props:e,name:"MuiContainer"})}}),k=R}}]);
//# sourceMappingURL=987.34170279.chunk.js.map