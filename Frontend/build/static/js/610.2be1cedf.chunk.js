"use strict";(self.webpackChunkinsurance=self.webpackChunkinsurance||[]).push([[610],{13610:function(e,t,a){a.r(t);var i=a(47313),r=a(66212),n=a(47825),o=a(35898),l=a(61113),s=a(57829),d=a(73428),c=a(67662),u=a(85350),m=a(85833),f=a(19333),h=a(46417);t.default=()=>{const e=localStorage.getItem("user_id"),t=localStorage.getItem("userRole"),[a,p]=(0,i.useState)([]);(0,i.useEffect)((()=>{(async()=>{const a=await(0,f.ac)("admin"===t?"payments/totalPayment":`payments/totalPayment/?createdBy=${e}`);var i;a&&200===a.status&&p(null===a||void 0===a||null===(i=a.data)||void 0===i?void 0:i.paymentsData)})()}),[]);const x=[{field:"id",headerName:"S.No.",flex:.5,cellClassName:"name-column--cell name-column--cell--capitalize",valueGetter:e=>e.api.getRowIndexRelativeToVisibleRows(e.row._id)+1},{field:"userId",headerName:"User Name",flex:1,valueGetter:e=>{var t,a,i,r;return`${null===e||void 0===e||null===(t=e.row)||void 0===t||null===(a=t.createdBy)||void 0===a?void 0:a.firstName} ${null===e||void 0===e||null===(i=e.row)||void 0===i||null===(r=i.createdBy)||void 0===r?void 0:r.lastName}`}},{field:"title",headerName:"Package Name",flex:1},{field:"days",headerName:"Days",flex:1,cellClassName:"name-column--cell--capitalize"},{field:"amount",headerName:"Amount",flex:1,cellClassName:"name-column--cell--capitalize"},{field:"startDate",headerName:"Start Date",flex:1,cellClassName:"name-column--cell--capitalize",valueGetter:e=>new Date(e.row.createdOn).toLocaleString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"})},{field:"endDate",headerName:"End Date",flex:1,cellClassName:"name-column--cell--capitalize",valueGetter:e=>{const t=new Date(e.row.createdOn),a=e.row.days;return new Date(t.getTime()+24*parseInt(a)*60*60*1e3).toLocaleString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"})}},{field:"status",headerName:"Status",flex:1,cellClassName:"name-column--cell--capitalize",renderCell:e=>{const t=e.row.active?"Subscribed":"Unsubscribed";return(0,h.jsx)(r.Z,{label:t,variant:"outlined",color:"primary"})}}];return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(n.Z,{children:[(0,h.jsx)(o.Z,{direction:"row",alignItems:"center",mb:5,justifyContent:"space-between",children:(0,h.jsx)(l.Z,{variant:"h4",children:"Payments Lists"})}),(0,h.jsx)(c.Z,{children:(0,h.jsx)(s.Z,{width:"100%",children:(0,h.jsx)(d.Z,{style:{height:"600px",paddingTop:"15px"},children:(0,h.jsx)(u._$,{rows:null!==a&&void 0!==a?a:[],columns:x,getRowId:e=>e._id,slots:{toolbar:m.n},slotProps:{toolbar:{showQuickFilter:!0}}})})})})]})})}},67662:function(e,t,a){var i=a(17592),r=a(35460);const n=(0,i.ZP)("div")({"& .MuiDataGrid-root":{border:"none"},"& .MuiDataGrid-cell":{borderBottom:"none"},"& .name-column--cell":{color:r.Z.primary.main,cursor:"pointer"},"& .name-column--cell--capitalize":{textTransform:"capitalize"},"& .name-column--cell:hover":{textDecoration:"underline"},"& .MuiDataGrid-columnHeaders":{backgroundColor:r.Z.grey[200],borderBottom:"none",outline:"none !important",borderRadius:"0px"},"& .MuiDataGrid-virtualScroller":{scrollbarWidth:"1px"},"& .MuiDataGrid-toolbarContainer .MuiButton-text":{textTransform:"capitalize",fontSize:"15px"},".MuiDataGrid-cell:focus,.MuiDataGrid-columnHeader:focus,MuiDataGrid-columnHeaderCheckbox:focus":{outline:"none !important"},".css-1jiby6q-MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within, .css-1jiby6q-MuiDataGrid-root .MuiDataGrid-cell:focus-within":{outline:"none"}});t.Z=n},35460:function(e,t,a){var i=a(17551);const r={0:"#FFFFFF",100:"#F9FAFB",200:"#F4F6F8",300:"#DFE3E8",400:"#C4CDD5",500:"#919EAB",600:"#637381",700:"#454F5B",800:"#212B36",900:"#161C24"},n={common:{black:"#000",white:"#fff"},primary:{lighter:"#D1E9FC",light:"#76B0F1",main:"#2065D1",dark:"#103996",darker:"#061B64",contrastText:"#fff"},secondary:{lighter:"#D6E4FF",light:"#84A9FF",main:"#3366FF",dark:"#1939B7",darker:"#091A7A",contrastText:"#fff"},info:{lighter:"#D0F2FF",light:"#74CAFF",main:"#1890FF",dark:"#0C53B7",darker:"#04297A",contrastText:"#fff"},success:{lighter:"#E9FCD4",light:"#AAF27F",main:"#54D62C",dark:"#229A16",darker:"#08660D",contrastText:r[800]},warning:{lighter:"#FFF7CD",light:"#FFE16A",main:"#FFC107",dark:"#B78103",darker:"#7A4F01",contrastText:r[800]},error:{lighter:"#FFE7D9",light:"#FFA48D",main:"#FF4842",dark:"#B72136",darker:"#7A0C2E",contrastText:"#fff"},grey:r,divider:(0,i.Fq)(r[500],.24),text:{primary:r[800],secondary:r[600],disabled:r[500]},background:{paper:"#fff",default:r[100],neutral:r[200]},action:{active:r[600],hover:(0,i.Fq)(r[500],.08),selected:(0,i.Fq)(r[500],.16),disabled:(0,i.Fq)(r[500],.8),disabledBackground:(0,i.Fq)(r[500],.24),focus:(0,i.Fq)(r[500],.24),hoverOpacity:.08,disabledOpacity:.48}};t.Z=n},47825:function(e,t,a){a.d(t,{Z:function(){return D}});var i=a(63366),r=a(87462),n=a(47313),o=a(83061),l=a(88831),s=a(32298),d=a(21921),c=a(14614),u=a(96694),m=a(9456),f=a(46417);const h=["className","component","disableGutters","fixed","maxWidth","classes"],p=(0,m.Z)(),x=(0,u.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`maxWidth${(0,l.Z)(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),g=e=>(0,c.Z)({props:e,name:"MuiContainer",defaultTheme:p}),F=(e,t)=>{const{classes:a,fixed:i,disableGutters:r,maxWidth:n}=e,o={root:["root",n&&`maxWidth${(0,l.Z)(String(n))}`,i&&"fixed",r&&"disableGutters"]};return(0,d.Z)(o,(e=>(0,s.Z)(t,e)),a)};var b=a(91615),v=a(17592),k=a(77342);const y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=x,useThemeProps:a=g,componentName:l="MuiContainer"}=e,s=t((e=>{let{theme:t,ownerState:a}=e;return(0,r.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}})}),(e=>{let{theme:t,ownerState:a}=e;return a.fixed&&Object.keys(t.breakpoints.values).reduce(((e,a)=>{const i=a,r=t.breakpoints.values[i];return 0!==r&&(e[t.breakpoints.up(i)]={maxWidth:`${r}${t.breakpoints.unit}`}),e}),{})}),(e=>{let{theme:t,ownerState:a}=e;return(0,r.Z)({},"xs"===a.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},a.maxWidth&&"xs"!==a.maxWidth&&{[t.breakpoints.up(a.maxWidth)]:{maxWidth:`${t.breakpoints.values[a.maxWidth]}${t.breakpoints.unit}`}})})),d=n.forwardRef((function(e,t){const n=a(e),{className:d,component:c="div",disableGutters:u=!1,fixed:m=!1,maxWidth:p="lg"}=n,x=(0,i.Z)(n,h),g=(0,r.Z)({},n,{component:c,disableGutters:u,fixed:m,maxWidth:p}),b=F(g,l);return(0,f.jsx)(s,(0,r.Z)({as:c,ownerState:g,className:(0,o.Z)(b.root,d),ref:t},x))}));return d}({createStyledComponent:(0,v.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`maxWidth${(0,b.Z)(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,k.Z)({props:e,name:"MuiContainer"})});var D=y},96694:function(e,t,a){const i=(0,a(36541).ZP)();t.Z=i}}]);