"use strict";(self.webpackChunkinsurance=self.webpackChunkinsurance||[]).push([[697],{51405:function(e,t,a){a.d(t,{Z:function(){return x}});var i=a(63366),n=a(87462),r=a(47313),o=a(83061),s=a(21921),d=a(17551),l=a(17592),c=a(77342),u=a(51195),p=a(35272),h=a(24993),m=a(86983),v=a(99273),g=a(37363),b=a(11081),f=a(77430),y=a(32298);function Z(e){return(0,y.Z)("MuiMenuItem",e)}var C=(0,f.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),w=a(46417);const $=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],k=(0,l.ZP)(p.Z,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((e=>{let{theme:t,ownerState:a}=e;return(0,n.Z)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${C.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,d.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${C.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:(0,d.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${C.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:(0,d.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,d.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${C.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${C.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${v.Z.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${v.Z.inset}`]:{marginLeft:52},[`& .${b.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${b.Z.inset}`]:{paddingLeft:36},[`& .${g.Z.root}`]:{minWidth:36}},!a.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},a.dense&&(0,n.Z)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{[`& .${g.Z.root} svg`]:{fontSize:"1.25rem"}}))}));var x=r.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:d=!1,component:l="li",dense:p=!1,divider:v=!1,disableGutters:g=!1,focusVisibleClassName:b,role:f="menuitem",tabIndex:y,className:C}=a,x=(0,i.Z)(a,$),S=r.useContext(u.Z),O=r.useMemo((()=>({dense:p||S.dense||!1,disableGutters:g})),[S.dense,p,g]),M=r.useRef(null);(0,h.Z)((()=>{d&&M.current&&M.current.focus()}),[d]);const R=(0,n.Z)({},a,{dense:O.dense,divider:v,disableGutters:g}),F=(e=>{const{disabled:t,dense:a,divider:i,disableGutters:r,selected:o,classes:d}=e,l={root:["root",a&&"dense",t&&"disabled",!r&&"gutters",i&&"divider",o&&"selected"]},c=(0,s.Z)(l,Z,d);return(0,n.Z)({},d,c)})(a),N=(0,m.Z)(M,t);let I;return a.disabled||(I=void 0!==y?y:-1),(0,w.jsx)(u.Z.Provider,{value:O,children:(0,w.jsx)(k,(0,n.Z)({ref:N,role:f,tabIndex:I,component:l,focusVisibleClassName:(0,o.Z)(F.focusVisible,b),className:(0,o.Z)(F.root,C)},x,{ownerState:R,classes:F}))})}))},84488:function(e,t,a){a.d(t,{Z:function(){return O}});var i=a(63366),n=a(87462),r=a(47313),o=a(83061),s=a(30686),d=a(21921);function l(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function c(e){return parseFloat(e)}var u=a(17551),p=a(17592),h=a(77342),m=a(77430),v=a(32298);function g(e){return(0,v.Z)("MuiSkeleton",e)}(0,m.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var b=a(46417);const f=["animation","className","component","height","style","variant","width"];let y,Z,C,w,$=e=>e;const k=(0,s.F4)(y||(y=$`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),x=(0,s.F4)(Z||(Z=$`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),S=(0,p.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],!1!==a.animation&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})((e=>{let{theme:t,ownerState:a}=e;const i=l(t.shape.borderRadius)||"px",r=c(t.shape.borderRadius);return(0,n.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,u.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===a.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${i}/${Math.round(r/.6*10)/10}${i}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===a.variant&&{borderRadius:"50%"},"rounded"===a.variant&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})}),(e=>{let{ownerState:t}=e;return"pulse"===t.animation&&(0,s.iv)(C||(C=$`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),k)}),(e=>{let{ownerState:t,theme:a}=e;return"wave"===t.animation&&(0,s.iv)(w||(w=$`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),x,(a.vars||a).palette.action.hover)}));var O=r.forwardRef((function(e,t){const a=(0,h.Z)({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:s,component:l="span",height:c,style:u,variant:p="text",width:m}=a,v=(0,i.Z)(a,f),y=(0,n.Z)({},a,{animation:r,component:l,variant:p,hasChildren:Boolean(v.children)}),Z=(e=>{const{classes:t,variant:a,animation:i,hasChildren:n,width:r,height:o}=e,s={root:["root",a,i,n&&"withChildren",n&&!r&&"fitContent",n&&!o&&"heightAuto"]};return(0,d.Z)(s,g,t)})(y);return(0,b.jsx)(S,(0,n.Z)({as:l,ref:t,className:(0,o.Z)(Z.root,s),ownerState:y},v,{style:(0,n.Z)({width:m,height:c},u)}))}))}}]);