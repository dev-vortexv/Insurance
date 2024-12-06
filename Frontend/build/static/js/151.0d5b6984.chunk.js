"use strict";(self.webpackChunkinsurance=self.webpackChunkinsurance||[]).push([[151],{67662:function(e,r,t){var a=t(17592),o=t(35460);const l=(0,a.ZP)("div")({"& .MuiDataGrid-root":{border:"none"},"& .MuiDataGrid-cell":{borderBottom:"none"},"& .name-column--cell":{color:o.Z.primary.main,cursor:"pointer"},"& .name-column--cell--capitalize":{textTransform:"capitalize"},"& .name-column--cell:hover":{textDecoration:"underline"},"& .MuiDataGrid-columnHeaders":{backgroundColor:o.Z.grey[200],borderBottom:"none",outline:"none !important",borderRadius:"0px"},"& .MuiDataGrid-virtualScroller":{scrollbarWidth:"1px"},"& .MuiDataGrid-toolbarContainer .MuiButton-text":{textTransform:"capitalize",fontSize:"15px"},".MuiDataGrid-cell:focus,.MuiDataGrid-columnHeader:focus,MuiDataGrid-columnHeaderCheckbox:focus":{outline:"none !important"},".css-1jiby6q-MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within, .css-1jiby6q-MuiDataGrid-root .MuiDataGrid-cell:focus-within":{outline:"none"}});r.Z=l},35460:function(e,r,t){var a=t(17551);const o={0:"#FFFFFF",100:"#F9FAFB",200:"#F4F6F8",300:"#DFE3E8",400:"#C4CDD5",500:"#919EAB",600:"#637381",700:"#454F5B",800:"#212B36",900:"#161C24"},l={common:{black:"#000",white:"#fff"},primary:{lighter:"#D1E9FC",light:"#76B0F1",main:"#2065D1",dark:"#103996",darker:"#061B64",contrastText:"#fff"},secondary:{lighter:"#D6E4FF",light:"#84A9FF",main:"#3366FF",dark:"#1939B7",darker:"#091A7A",contrastText:"#fff"},info:{lighter:"#D0F2FF",light:"#74CAFF",main:"#1890FF",dark:"#0C53B7",darker:"#04297A",contrastText:"#fff"},success:{lighter:"#E9FCD4",light:"#AAF27F",main:"#54D62C",dark:"#229A16",darker:"#08660D",contrastText:o[800]},warning:{lighter:"#FFF7CD",light:"#FFE16A",main:"#FFC107",dark:"#B78103",darker:"#7A4F01",contrastText:o[800]},error:{lighter:"#FFE7D9",light:"#FFA48D",main:"#FF4842",dark:"#B72136",darker:"#7A0C2E",contrastText:"#fff"},grey:o,divider:(0,a.Fq)(o[500],.24),text:{primary:o[800],secondary:o[600],disabled:o[500]},background:{paper:"#fff",default:o[100],neutral:o[200]},action:{active:o[600],hover:(0,a.Fq)(o[500],.08),selected:(0,a.Fq)(o[500],.16),disabled:(0,a.Fq)(o[500],.8),disabledBackground:(0,a.Fq)(o[500],.24),focus:(0,a.Fq)(o[500],.24),hoverOpacity:.08,disabledOpacity:.48}};r.Z=l},23547:function(e,r,t){t.d(r,{Z:function(){return c}});var a=t(75192),o=t.n(a),l=t(47313),i=t(2524),s=t(57829),n=t(46417);const d=(0,l.forwardRef)(((e,r)=>{let{icon:t,width:a=20,sx:o,...l}=e;return(0,n.jsx)(s.Z,{ref:r,component:i.JO,icon:t,sx:{width:a,height:a,...o},...l})}));d.propTypes={sx:o().object,width:o().oneOfType([o().number,o().string]),icon:o().oneOfType([o().element,o().string])};var c=d},2270:function(e,r,t){t(47313);var a=t(69099),o=t(66149),l=t(4117),i=t(96467),s=t(97762),n=t(33604),d=t(9019),c=t(5178),u=t(24631),h=t(1550),m=t(55685),x=t(83929),Z=t(74268),j=t(15480),g=t(88797),p=t(51405),f=t(79429),b=t(3463),v=t(61113),C=t(23195),F=t(31387),y=t(46417);r.Z=e=>{let{open:r,handleClose:t,addTask:D}=e;const T=localStorage.getItem("user_id"),k=b.Ry({subject:b.Z_().required("Subject is required"),status:b.Z_().required("Status is required"),startDate:b.Z_().required("Start Date is required"),endDate:b.Z_().required("End date is required"),priority:b.Z_().required("Priority is required"),relatedTo:b.Z_().required("Related To is required")}),w={subject:"",status:"",startDate:"",endDate:"",relatedTo:"",assignTo:"",backgroundColor:"",textColor:"",priority:"",note:"",createdBy:T},B=(0,f.TA)({initialValues:w,validationSchema:k,onSubmit:async e=>{D(e),t(),B.resetForm(),F.Am.success("Task Add successfully")}});return(0,y.jsx)("div",{children:(0,y.jsxs)(o.Z,{open:r,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[(0,y.jsxs)(n.Z,{id:"scroll-dialog-title",style:{display:"flex",justifyContent:"space-between"},children:[(0,y.jsx)(v.Z,{variant:"h6",children:"Create Task "}),(0,y.jsx)(v.Z,{children:(0,y.jsx)(C.Z,{onClick:t,style:{cursor:"pointer"}})})]}),(0,y.jsx)(i.Z,{dividers:!0,children:(0,y.jsx)("form",{children:(0,y.jsx)(s.Z,{id:"scroll-dialog-description",tabIndex:-1,children:(0,y.jsxs)(d.ZP,{container:!0,rowSpacing:3,columnSpacing:{xs:0,sm:5,md:4},children:[(0,y.jsxs)(d.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,y.jsx)(c.Z,{id:"demo-row-radio-buttons-group-label",children:"Subject"}),(0,y.jsx)(u.Z,{id:"subject",name:"subject",label:"",fullWidth:!0,size:"small",value:B.values.subject,onChange:B.handleChange,error:B.touched.subject&&Boolean(B.errors.subject),helperText:B.touched.subject&&B.errors.subject})]}),(0,y.jsx)(d.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,y.jsxs)(h.Z,{children:[(0,y.jsx)(c.Z,{children:"Related To"}),(0,y.jsxs)(m.Z,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"relatedTo",value:B.values.relatedTo,error:B.touched.relatedTo&&Boolean(B.errors.relatedTo),onChange:B.handleChange,children:[(0,y.jsx)(x.Z,{value:"Lead",control:(0,y.jsx)(Z.Z,{}),label:"Lead"}),(0,y.jsx)(x.Z,{value:"Contact",control:(0,y.jsx)(Z.Z,{}),label:"Contact"})]}),(0,y.jsx)(j.Z,{error:B.touched.relatedTo&&Boolean(B.errors.relatedTo),children:B.touched.relatedTo&&B.errors.relatedTo})]})}),(0,y.jsxs)(d.ZP,{item:!0,xs:12,sm:4,children:[(0,y.jsx)(c.Z,{children:"Status"}),(0,y.jsxs)(h.Z,{fullWidth:!0,children:[(0,y.jsxs)(g.Z,{labelId:"demo-simple-select-label",id:"",name:"status",label:"",size:"small",value:B.values.status||null,onChange:B.handleChange,error:B.touched.status&&Boolean(B.errors.status),children:[(0,y.jsx)(p.Z,{value:"Note Started",children:"Note Started"}),(0,y.jsx)(p.Z,{value:"In Progress",children:"In Progress"}),(0,y.jsx)(p.Z,{value:"Completed",children:"Completed"}),(0,y.jsx)(p.Z,{value:"Pending Input",children:"Pending Input"}),(0,y.jsx)(p.Z,{value:"Deferred",children:"Deferred"})]}),(0,y.jsx)(j.Z,{error:B.touched.status&&Boolean(B.errors.status),children:B.touched.status&&B.errors.status})]})]}),(0,y.jsxs)(d.ZP,{item:!0,xs:12,sm:4,children:[(0,y.jsx)(c.Z,{children:"Priority"}),(0,y.jsxs)(h.Z,{fullWidth:!0,children:[(0,y.jsxs)(g.Z,{labelId:"demo-simple-select-label",id:"",name:"priority",label:"",size:"small",value:B.values.priority||null,onChange:B.handleChange,error:B.touched.priority&&Boolean(B.errors.priority),children:[(0,y.jsx)(p.Z,{value:"High",children:"High"}),(0,y.jsx)(p.Z,{value:"Medium",children:"Medium"}),(0,y.jsx)(p.Z,{value:"Low",children:"Low"})]}),(0,y.jsx)(j.Z,{error:B.touched.priority&&Boolean(B.errors.priority),children:B.touched.priority&&B.errors.priority})]})]}),(0,y.jsxs)(d.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,y.jsx)(c.Z,{children:"Start Date"}),(0,y.jsx)(u.Z,{name:"startDate",type:"datetime-local",size:"small",fullWidth:!0,value:B.values.startDate,onChange:B.handleChange,error:B.touched.startDate&&Boolean(B.errors.startDate),helperText:B.touched.startDate&&B.errors.startDate})]}),(0,y.jsxs)(d.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,y.jsx)(c.Z,{children:"End Date"}),(0,y.jsx)(u.Z,{name:"endDate",type:"datetime-local",size:"small",fullWidth:!0,value:B.values.endDate,onChange:B.handleChange,error:B.touched.endDate&&Boolean(B.errors.endDate),helperText:B.touched.endDate&&B.errors.endDate})]}),(0,y.jsxs)(d.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,y.jsx)(c.Z,{id:"demo-row-radio-buttons-group-label",children:"Background Color"}),(0,y.jsx)(u.Z,{id:"",name:"backgroundColor",label:"",type:"color",size:"small",fullWidth:!0,value:B.values.backgroundColor,onChange:B.handleChange,error:B.touched.backgroundColor&&Boolean(B.errors.backgroundColor),helperText:B.touched.backgroundColor&&B.errors.backgroundColor})]}),(0,y.jsxs)(d.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,y.jsx)(c.Z,{id:"demo-row-radio-buttons-group-label",children:"Text Color"}),(0,y.jsx)(u.Z,{id:"",name:"textColor",label:"",type:"color",size:"small",fullWidth:!0,value:B.values.textColor,onChange:B.handleChange,error:B.touched.textColor&&Boolean(B.errors.textColor),helperText:B.touched.textColor&&B.errors.textColor})]}),(0,y.jsxs)(d.ZP,{item:!0,xs:12,sm:12,children:[(0,y.jsx)(c.Z,{id:"demo-row-radio-buttons-group-label",children:"Note"}),(0,y.jsx)(u.Z,{id:"Note",name:"note",label:"",fullWidth:!0,rows:4,multiline:!0,value:B.values.note,onChange:B.handleChange,error:B.touched.note&&Boolean(B.errors.note),helperText:B.touched.note&&B.errors.note})]})]})})})}),(0,y.jsxs)(l.Z,{children:[(0,y.jsx)(a.Z,{type:"submit",variant:"contained",onClick:B.handleSubmit,style:{textTransform:"capitalize"},color:"secondary",children:"Save"}),(0,y.jsx)(a.Z,{type:"reset",variant:"outlined",style:{textTransform:"capitalize"},onClick:()=>{B.resetForm(),t()},color:"error",children:"Cancel"})]})]})})}},82151:function(e,r,t){t.r(r);var a=t(47313),o=t(97890),l=t(57829),i=t(47825),s=t(35898),n=t(61113),d=t(69099),c=t(73428),u=t(67662),h=t(85350),m=t(85833),x=t(23547),Z=t(2270),j=t(19333),g=t(46417);r.default=()=>{const e=localStorage.getItem("user_id"),r=localStorage.getItem("userRole"),t=(0,o.s0)(),[p,f]=(0,a.useState)(!1),[b,v]=(0,a.useState)([]),C=async()=>{const t=await(0,j.ac)("admin"===r?"task/list":`task/list/?createdBy=${e}`);var a;t&&200===t.status&&v(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.taskAllData)};(0,a.useEffect)((()=>{C()}),[]);const F=[{field:"_id",headerName:"S.No.",flex:.5,cellClassName:"name-column--cell name-column--cell--capitalize",valueGetter:e=>e.api.getRowIndexRelativeToVisibleRows(e.row._id)+1},{field:"subject",headerName:"Subject",flex:1,cellClassName:"name-column--cell name-column--cell--capitalize",renderCell:e=>(0,g.jsx)(l.Z,{onClick:()=>{t(`/dashboard/task/view/${e.row._id}`)},children:e.value})},{field:"status",headerName:"Status",flex:1,cellClassName:"name-column--cell--capitalize"},{field:"startDate",headerName:"Start Date",flex:1,valueFormatter:e=>new Date(e.value).toLocaleString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"})},{field:"endDate",headerName:"End Date",flex:1,valueFormatter:e=>new Date(e.value).toLocaleString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"})},{field:"priority",headerName:"Priority",flex:1},{field:"relatedTo",headerName:"Related To",flex:1}];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Z.Z,{open:p,handleClose:()=>f(!1),addTask:async e=>{const r=e,t=await(0,j.Fv)("task/add",r);t&&201===t.status&&C()}}),(0,g.jsxs)(i.Z,{children:[(0,g.jsxs)(s.Z,{direction:"row",alignItems:"center",mb:5,justifyContent:"space-between",children:[(0,g.jsx)(n.Z,{variant:"h4",children:"Task Lists"}),(0,g.jsx)(s.Z,{direction:"row",alignItems:"center",justifyContent:"flex-end",spacing:2,children:(0,g.jsx)(d.Z,{variant:"contained",startIcon:(0,g.jsx)(x.Z,{icon:"eva:plus-fill"}),onClick:()=>f(!0),children:"New Task"})})]}),(0,g.jsx)(u.Z,{children:(0,g.jsx)(l.Z,{width:"100%",children:(0,g.jsx)(c.Z,{style:{height:"600px",paddingTop:"15px"},children:(0,g.jsx)(h._$,{rows:null!==b&&void 0!==b?b:[],columns:F,getRowId:e=>e._id,slots:{toolbar:m.n},slotProps:{toolbar:{showQuickFilter:!0}}})})})})]})]})}},23195:function(e,r,t){var a=t(64836);r.Z=void 0;var o=a(t(45045)),l=t(46417),i=(0,o.default)((0,l.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");r.Z=i},97762:function(e,r,t){t.d(r,{Z:function(){return g}});var a=t(63366),o=t(87462),l=t(47313),i=t(83061),s=t(21921),n=t(17592),d=t(77342),c=t(61113),u=t(77430),h=t(32298);function m(e){return(0,h.Z)("MuiDialogContentText",e)}(0,u.Z)("MuiDialogContentText",["root"]);var x=t(46417);const Z=["children","className"],j=(0,n.ZP)(c.Z,{shouldForwardProp:e=>(0,n.FO)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,r)=>r.root})({});var g=l.forwardRef((function(e,r){const t=(0,d.Z)({props:e,name:"MuiDialogContentText"}),{className:l}=t,n=(0,a.Z)(t,Z),c=(e=>{const{classes:r}=e,t=(0,s.Z)({root:["root"]},m,r);return(0,o.Z)({},r,t)})(n);return(0,x.jsx)(j,(0,o.Z)({component:"p",variant:"body1",color:"text.secondary",ref:r,ownerState:n,className:(0,i.Z)(c.root,l)},t,{classes:c}))}))}}]);