"use strict";(self.webpackChunkinsurance=self.webpackChunkinsurance||[]).push([[689],{54166:function(e,r,t){var o=t(7894),i=t(85582),l=t(17551),a=t(35898),n=t(69099),d=t(47313),s=t(51405),c=t(69883),h=t(44129),u=t(51997),x=t(65954),p=t(29428),m=t(46417);const j=(0,o.Z)((e=>(0,m.jsx)(i.Z,{elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},...e})))((e=>{let{theme:r}=e;return{"& .MuiPaper-root":{borderRadius:6,marginTop:r.spacing(1),minWidth:100,boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:r.palette.text.secondary,marginRight:r.spacing(1.5)},"&:active":{backgroundColor:(0,l.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity)}}}}}));r.Z=e=>{const[r,t]=(0,d.useState)(null),o=Boolean(r);return(0,m.jsx)("div",{children:(0,m.jsxs)(a.Z,{direction:"row",spacing:2,justifyContent:"flex-end",children:[(0,m.jsx)(n.Z,{id:"action","aria-controls":o?"action":void 0,"aria-haspopup":"true","aria-expanded":o?"true":void 0,variant:"contained",color:"primary",disableElevation:!0,onClick:e=>{t(e.currentTarget)},endIcon:(0,m.jsx)(p.Z,{}),children:"Actions"}),(0,m.jsxs)(j,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"action"},anchorEl:r,open:o,onClose:()=>{t(null)},children:[e.handleOpenEdit&&(0,m.jsxs)(s.Z,{onClick:e.handleOpenEdit,disableRipple:!0,children:[(0,m.jsx)(x.Z,{}),"Edit"]}),e.handleOpenDelete&&(0,m.jsxs)(s.Z,{onClick:e.handleOpenDelete,disableRipple:!0,children:[(0,m.jsx)(u.Z,{}),"Delete"]}),e.handleExport&&(0,m.jsxs)(s.Z,{disableRipple:!0,onClick:e.handleExport,children:[(0,m.jsx)(h.Z,{}),"Export CSV"]})]}),(0,m.jsx)(n.Z,{variant:"contained",color:"primary",onClick:e.back,startIcon:(0,m.jsx)(c.Z,{}),children:"Back"})]})})}},51568:function(e,r,t){t.d(r,{O:function(){return a},P:function(){return n}});var o=t(57829),i=t(61113),l=t(46417);function a(e){const{children:r,value:t,index:a,...n}=e;return(0,l.jsx)("div",{role:"tabpanel",hidden:t!==a,id:`simple-tabpanel-${a}`,"aria-labelledby":`simple-tab-${a}`,...n,children:t===a&&(0,l.jsx)(o.Z,{children:(0,l.jsx)(i.Z,{children:r})})})}function n(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}},90154:function(e,r,t){t.d(r,{Z:function(){return j}});t(47313);var o=t(69099),i=t(17592),l=t(66149),a=t(33604),n=t(96467),d=t(4117),s=t(47131),c=t(11198),h=t(61113),u=t(35898),x=t(46417);const p=(0,i.ZP)(l.Z)((e=>{let{theme:r}=e;return{"& .MuiDialogContent-root":{padding:r.spacing(2)},"& .MuiDialogActions-root":{padding:r.spacing(1)}}}));function m(e){const{children:r,onClose:t,...o}=e;return(0,x.jsxs)(a.Z,{sx:{m:0,p:2},...o,children:[r,t?(0,x.jsx)(s.Z,{"aria-label":"close",onClick:t,sx:{position:"absolute",right:8,top:8,color:e=>e.palette.grey[500]},children:(0,x.jsx)(c.Z,{})}):null]})}function j(e){const{openDelete:r,handleCloseDelete:t,deleteData:i,deleteId:l}=e;return(0,x.jsx)("div",{children:(0,x.jsxs)(p,{"aria-labelledby":"customized-dialog-title",open:r,children:[(0,x.jsx)(m,{id:"customized-dialog-title",onClose:t,children:"Delete"}),(0,x.jsx)(n.Z,{dividers:!0,children:(0,x.jsx)(h.Z,{gutterBottom:!0,p:3,children:"Are you sure you want to delete this item?"})}),(0,x.jsx)(d.Z,{children:(0,x.jsxs)(u.Z,{direction:"row",spacing:2,children:[(0,x.jsx)(o.Z,{variant:"contained",color:"error",onClick:()=>{i(l)},children:"Yes"}),(0,x.jsx)(o.Z,{variant:"contained",onClick:t,children:"No"})]})})]})})}},98761:function(e,r,t){t(47313);var o=t(57829),i=t(61113),l=t(46417);r.Z=e=>{let{title:r,subtitle:t}=e;return(0,l.jsxs)(o.Z,{children:[(0,l.jsx)(i.Z,{variant:"h4",fontWeight:"bold",sx:{mb:"5px"},style:{textTransform:"capitalize"},children:r}),(0,l.jsx)(i.Z,{variant:"body1",children:t})]})}},35460:function(e,r,t){var o=t(17551);const i={0:"#FFFFFF",100:"#F9FAFB",200:"#F4F6F8",300:"#DFE3E8",400:"#C4CDD5",500:"#919EAB",600:"#637381",700:"#454F5B",800:"#212B36",900:"#161C24"},l={common:{black:"#000",white:"#fff"},primary:{lighter:"#D1E9FC",light:"#76B0F1",main:"#2065D1",dark:"#103996",darker:"#061B64",contrastText:"#fff"},secondary:{lighter:"#D6E4FF",light:"#84A9FF",main:"#3366FF",dark:"#1939B7",darker:"#091A7A",contrastText:"#fff"},info:{lighter:"#D0F2FF",light:"#74CAFF",main:"#1890FF",dark:"#0C53B7",darker:"#04297A",contrastText:"#fff"},success:{lighter:"#E9FCD4",light:"#AAF27F",main:"#54D62C",dark:"#229A16",darker:"#08660D",contrastText:i[800]},warning:{lighter:"#FFF7CD",light:"#FFE16A",main:"#FFC107",dark:"#B78103",darker:"#7A4F01",contrastText:i[800]},error:{lighter:"#FFE7D9",light:"#FFA48D",main:"#FF4842",dark:"#B72136",darker:"#7A0C2E",contrastText:"#fff"},grey:i,divider:(0,o.Fq)(i[500],.24),text:{primary:i[800],secondary:i[600],disabled:i[500]},background:{paper:"#fff",default:i[100],neutral:i[200]},action:{active:i[600],hover:(0,o.Fq)(i[500],.08),selected:(0,o.Fq)(i[500],.16),disabled:(0,o.Fq)(i[500],.8),disabledBackground:(0,o.Fq)(i[500],.24),focus:(0,o.Fq)(i[500],.24),hoverOpacity:.08,disabledOpacity:.48}};r.Z=l},72689:function(e,r,t){t.r(r),t.d(r,{default:function(){return V}});var o=t(47825),i=t(9019),l=t(35898),a=t(57829),n=t(82294),d=t(65280),s=t(47313),c=t(97890),h=t(54166),u=t(90154),x=t(73428),p=t(61113),m=t(70816),j=t.n(m),Z=t(35460),b=t(46417);var v=e=>{var r,t,o,l,n,d,s;let{data:c}=e;return(0,b.jsx)("div",{children:(0,b.jsx)(x.Z,{style:{borderTopLeftRadius:"0px",borderTopRightRadius:"0px"},children:(0,b.jsx)(a.Z,{p:3,children:(0,b.jsxs)(i.ZP,{container:!0,display:"flex",spacing:4,children:[(0,b.jsxs)(i.ZP,{item:!0,xs:12,sm:6,children:[(0,b.jsxs)(i.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:Z.Z.grey[400]},pb:2,children:[(0,b.jsx)(p.Z,{variant:"body1",children:"Subject :"}),(0,b.jsx)(p.Z,{variant:"body2",color:Z.Z.grey[600],textTransform:"capitalize",children:null!==c&&void 0!==c&&c.subject?null===c||void 0===c?void 0:c.subject:"--"})]}),(0,b.jsxs)(i.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:Z.Z.grey[400]},py:2,children:[(0,b.jsx)(p.Z,{variant:"body1",children:"Start Date :"}),(0,b.jsx)(p.Z,{variant:"body2",color:Z.Z.grey[600],children:null!==c&&void 0!==c&&c.startDate?j()(null===c||void 0===c?void 0:c.startDate).format("lll"):"--"})]}),(0,b.jsxs)(i.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:Z.Z.grey[400]},py:2,children:[(0,b.jsx)(p.Z,{variant:"body1",children:"Note :"}),(0,b.jsx)(p.Z,{variant:"body2",color:Z.Z.grey[600],children:null!==c&&void 0!==c&&c.note?null===c||void 0===c?void 0:c.note:"--"})]}),(0,b.jsxs)(i.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:Z.Z.grey[400]},py:2,children:[(0,b.jsx)(p.Z,{variant:"body1",children:" Assign To:"}),(0,b.jsx)(p.Z,{variant:"body2",color:Z.Z.primary.main,children:(0,b.jsx)(p.Z,{variant:"body2",color:Z.Z.primary.main,textTransform:"capitalize",children:`${null===c||void 0===c||null===(r=c.createdBy)||void 0===r?void 0:r.firstName} ${null===c||void 0===c||null===(t=c.createdBy)||void 0===t?void 0:t.lastName}`})})]})]}),(0,b.jsxs)(i.ZP,{item:!0,xs:12,sm:6,children:[(0,b.jsxs)(i.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:Z.Z.grey[400]},pb:2,children:[(0,b.jsx)(p.Z,{variant:"body1",children:"Status :"}),(0,b.jsx)(p.Z,{variant:"body2",color:Z.Z.grey[600],children:null!==c&&void 0!==c&&c.status?null===c||void 0===c?void 0:c.status:"--"})]}),(0,b.jsxs)(i.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:Z.Z.grey[400]},py:2,children:[(0,b.jsx)(p.Z,{variant:"body1",children:"End Date :"}),(0,b.jsx)(p.Z,{variant:"body2",color:Z.Z.grey[600],children:null!==c&&void 0!==c&&c.endDate?j()(null===c||void 0===c?void 0:c.endDate).format("lll"):"--"})]}),(0,b.jsxs)(i.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:Z.Z.grey[400]},py:2,children:[(0,b.jsx)(p.Z,{variant:"body1",children:"Priority :"}),(0,b.jsx)(p.Z,{variant:"body2",color:Z.Z.grey[600],children:null!==c&&void 0!==c&&c.priority?null===c||void 0===c?void 0:c.priority:"--"})]}),(0,b.jsxs)(i.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:Z.Z.grey[400]},py:2,children:[(0,b.jsxs)(p.Z,{variant:"body1",children:["Related To ",null!==c&&void 0!==c&&null!==(o=c.lead_id)&&void 0!==o&&o._id?"Lead":"Contact"," :"]}),"Lead"===(null===c||void 0===c?void 0:c.relatedTo)?(0,b.jsx)(p.Z,{variant:"body2",color:Z.Z.primary.main,textTransform:"capitalize",children:`${null===c||void 0===c||null===(l=c.createdBy)||void 0===l?void 0:l.firstName} ${null===c||void 0===c||null===(n=c.createdBy)||void 0===n?void 0:n.lastName}`}):(0,b.jsx)(p.Z,{variant:"body2",color:Z.Z.primary.main,textTransform:"capitalize",children:`${null===c||void 0===c||null===(d=c.contact_id)||void 0===d?void 0:d.firstName} ${null===c||void 0===c||null===(s=c.contact_id)||void 0===s?void 0:s.lastName}`})]})]})]})})})})},y=t(29466);var g=e=>{var r,t,o;let{data:l}=e;return(0,b.jsx)("div",{children:(0,b.jsx)(x.Z,{style:{borderTopLeftRadius:"0px",borderTopRightRadius:"0px"},children:(0,b.jsx)(a.Z,{p:3,children:(0,b.jsxs)(i.ZP,{container:!0,display:"flex",spacing:4,children:[(0,b.jsxs)(i.ZP,{item:!0,xs:12,sm:6,children:[(0,b.jsxs)(i.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:Z.Z.grey[400]},pb:2,children:[(0,b.jsx)(p.Z,{variant:"body1",children:"Create Date&Time :"}),(0,b.jsx)(p.Z,{variant:"body2",color:Z.Z.grey[600],children:j()(null===l||void 0===l?void 0:l.createdOn).format("lll")})]}),(0,b.jsxs)(i.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:Z.Z.grey[400]},py:2,children:[(0,b.jsx)(p.Z,{variant:"body1",children:"Created by :"}),(0,b.jsx)(y.rU,{to:`/dashboard/user/view/${null===l||void 0===l||null===(r=l.createdBy)||void 0===r?void 0:r._id}`,style:{textDecoration:"none"},children:(0,b.jsx)(p.Z,{variant:"body2",color:Z.Z.primary.main,textTransform:"capitalize",children:`${null===l||void 0===l||null===(t=l.createdBy)||void 0===t?void 0:t.firstName} ${null===l||void 0===l||null===(o=l.createdBy)||void 0===o?void 0:o.lastName}`})})]})]}),(0,b.jsxs)(i.ZP,{item:!0,xs:12,sm:6,children:[(0,b.jsxs)(i.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:Z.Z.grey[400]},pb:2,children:[(0,b.jsx)(p.Z,{variant:"body1",children:"Modified Date&Time :"}),(0,b.jsx)(p.Z,{variant:"body2",color:Z.Z.grey[600],children:j()(null===l||void 0===l?void 0:l.modifiedOn).format("lll")})]}),(0,b.jsxs)(i.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:Z.Z.grey[400]},py:2,children:[(0,b.jsx)(p.Z,{variant:"body1",children:"Modify by :"}),(0,b.jsx)(p.Z,{variant:"body2",color:Z.Z.grey[600],children:"user"})]})]})]})})})})},C=t(69099),f=t(66149),D=t(4117),k=t(96467),B=t(97762),F=t(33604),T=t(5178),P=t(24631),w=t(1550),E=t(55685),S=t(83929),z=t(74268),O=t(88797),A=t(51405),q=t(15480),I=t(79429),M=t(3463),R=t(23195),$=t(10658),N=t.n($);var W=e=>{let{open:r,handleClose:t,editTaskData:o,taskData:l}=e;const a=M.Ry({subject:M.Z_().required("Subject is required"),status:M.Z_().required("Status is required"),startDate:M.Z_().required("Start Date is required"),endDate:M.Z_().required("End date is required"),priority:M.Z_().required("Priority is required")}),n={subject:l.subject,status:l.status,startDate:l.startDate,endDate:l.endDate,relatedTo:l.relatedTo,assignTo:l.assignTo,backgroundColor:l.backgroundColor,textColor:l.textColor,priority:l.priority,note:l.note,modifiedOn:""},d=(0,I.TA)({initialValues:n,validationSchema:a,enableReinitialize:!0,onSubmit:async e=>{const r={subject:e.subject,status:e.status,description:e.description,startDate:e.startDate,endDate:e.endDate,backgroundColor:e.backgroundColor,textColor:e.textColor,priority:e.priority,note:e.note,modifiedOn:new Date};o(r),t()}});return(0,b.jsx)("div",{children:(0,b.jsxs)(f.Z,{open:r,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[(0,b.jsxs)(F.Z,{id:"scroll-dialog-title",style:{display:"flex",justifyContent:"space-between"},children:[(0,b.jsx)(p.Z,{variant:"h6",children:"Edit Task "}),(0,b.jsx)(p.Z,{children:(0,b.jsx)(R.Z,{onClick:t,style:{cursor:"pointer"}})})]}),(0,b.jsx)(k.Z,{dividers:!0,children:(0,b.jsx)("form",{children:(0,b.jsx)(B.Z,{id:"scroll-dialog-description",tabIndex:-1,children:(0,b.jsxs)(i.ZP,{container:!0,rowSpacing:3,columnSpacing:{xs:0,sm:5,md:4},children:[(0,b.jsxs)(i.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,b.jsx)(T.Z,{id:"demo-row-radio-buttons-group-label",children:"Subject"}),(0,b.jsx)(P.Z,{id:"subject",name:"subject",label:"",fullWidth:!0,size:"small",value:d.values.subject,onChange:d.handleChange,error:d.touched.subject&&Boolean(d.errors.subject),helperText:d.touched.subject&&d.errors.subject})]}),(0,b.jsx)(i.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,b.jsxs)(w.Z,{children:[(0,b.jsx)(T.Z,{children:"Related To"}),(0,b.jsxs)(E.Z,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"relatedTo",value:d.values.relatedTo,onChange:d.handleChange,children:[(0,b.jsx)(S.Z,{value:"Lead",control:(0,b.jsx)(z.Z,{}),label:"Lead"}),(0,b.jsx)(S.Z,{value:"Contact",control:(0,b.jsx)(z.Z,{}),label:"Contact"})]})]})}),(0,b.jsxs)(i.ZP,{item:!0,xs:12,sm:4,children:[(0,b.jsx)(T.Z,{children:"Status"}),(0,b.jsxs)(w.Z,{fullWidth:!0,children:[(0,b.jsxs)(O.Z,{labelId:"demo-simple-select-label",id:"",name:"status",label:"",size:"small",value:d.values.status||null,onChange:d.handleChange,error:d.touched.status&&Boolean(d.errors.status),children:[(0,b.jsx)(A.Z,{value:"Note Started",children:"Note Started"}),(0,b.jsx)(A.Z,{value:"In Progress",children:"In Progress"}),(0,b.jsx)(A.Z,{value:"Completed",children:"Completed"}),(0,b.jsx)(A.Z,{value:"Pending Input",children:"Pending Input"}),(0,b.jsx)(A.Z,{value:"Deferred",children:"Deferred"})]}),(0,b.jsx)(q.Z,{error:d.touched.status&&Boolean(d.errors.status),children:d.touched.status&&d.errors.status})]})]}),(0,b.jsxs)(i.ZP,{item:!0,xs:12,sm:4,children:[(0,b.jsx)(T.Z,{children:"Priority"}),(0,b.jsxs)(w.Z,{fullWidth:!0,children:[(0,b.jsxs)(O.Z,{labelId:"demo-simple-select-label",id:"",name:"priority",label:"",size:"small",value:d.values.priority||null,onChange:d.handleChange,error:d.touched.priority&&Boolean(d.errors.priority),children:[(0,b.jsx)(A.Z,{value:"High",children:"High"}),(0,b.jsx)(A.Z,{value:"Medium",children:"Medium"}),(0,b.jsx)(A.Z,{value:"Low",children:"Low"})]}),(0,b.jsx)(q.Z,{error:d.touched.priority&&Boolean(d.errors.priority),children:d.touched.priority&&d.errors.priority})]})]}),(0,b.jsxs)(i.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,b.jsx)(T.Z,{children:"Start Date"}),(0,b.jsx)(P.Z,{name:"startDate",type:"datetime-local",size:"small",fullWidth:!0,value:N()(d.values.startDate).format("YYYY-MM-DD hh:mm:ss"),onChange:d.handleChange,error:d.touched.startDate&&Boolean(d.errors.startDate),helperText:d.touched.startDate&&d.errors.startDate})]}),(0,b.jsxs)(i.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,b.jsx)(T.Z,{children:"End Date"}),(0,b.jsx)(P.Z,{name:"endDate",type:"datetime-local",size:"small",fullWidth:!0,value:N()(d.values.endDate).format("YYYY-MM-DD hh:mm:ss"),onChange:d.handleChange,error:d.touched.endDate&&Boolean(d.errors.endDate),helperText:d.touched.endDate&&d.errors.endDate})]}),(0,b.jsxs)(i.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,b.jsx)(T.Z,{id:"demo-row-radio-buttons-group-label",children:"Background Color"}),(0,b.jsx)(P.Z,{id:"",name:"backgroundColor",label:"",type:"color",size:"small",fullWidth:!0,value:d.values.backgroundColor,onChange:d.handleChange,error:d.touched.backgroundColor&&Boolean(d.errors.backgroundColor),helperText:d.touched.backgroundColor&&d.errors.backgroundColor})]}),(0,b.jsxs)(i.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,b.jsx)(T.Z,{id:"demo-row-radio-buttons-group-label",children:"Text Color"}),(0,b.jsx)(P.Z,{id:"",name:"textColor",label:"",type:"color",size:"small",fullWidth:!0,value:d.values.textColor,onChange:d.handleChange,error:d.touched.textColor&&Boolean(d.errors.textColor),helperText:d.touched.textColor&&d.errors.textColor})]}),(0,b.jsxs)(i.ZP,{item:!0,xs:12,sm:12,children:[(0,b.jsx)(T.Z,{id:"demo-row-radio-buttons-group-label",children:"Note"}),(0,b.jsx)(P.Z,{id:"Note",name:"note",label:"",fullWidth:!0,rows:4,multiline:!0,value:d.values.note,onChange:d.handleChange,error:d.touched.note&&Boolean(d.errors.note),helperText:d.touched.note&&d.errors.note})]})]})})})}),(0,b.jsxs)(D.Z,{children:[(0,b.jsx)(C.Z,{type:"submit",variant:"contained",onClick:d.handleSubmit,style:{textTransform:"capitalize"},color:"secondary",children:"Update"}),(0,b.jsx)(C.Z,{type:"reset",variant:"outlined",style:{textTransform:"capitalize"},onClick:()=>{d.resetForm(),t()},color:"error",children:"Cancel"})]})]})})},_=t(19333),L=t(98761),Y=t(51568);var V=()=>{const[e,r]=(0,s.useState)({}),[t,x]=(0,s.useState)(!1),[p,m]=(0,s.useState)(!1),[j,Z]=(0,s.useState)(0),y=(0,c.UO)(),C=(0,c.s0)(),f=async()=>{const e=await(0,_.ac)(`task/view/${y.id}`);var t;e&&200===e.status&&r(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.tasks)};return(0,s.useEffect)((()=>{f()}),[]),(0,b.jsxs)("div",{children:[(0,b.jsx)(W,{open:t,handleClose:()=>x(!1),editTaskData:async e=>{const r=e,t=await(0,_.eq)(`task/edit/${y.id}`,r);t&&200===t.status&&(f(),C("/dashboard/task"))},taskData:e}),(0,b.jsx)(u.Z,{openDelete:p,handleCloseDelete:()=>m(!1),deleteData:async()=>{await(0,_.ef)(`task/delete/${y.id}`),C("/dashboard/task")},deleteId:y.id}),(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(i.ZP,{container:!0,display:"flex",alignItems:"center",children:(0,b.jsxs)(l.Z,{direction:"row",alignItems:"center",mb:3,justifyContent:"space-between",width:"100%",children:[(0,b.jsx)(L.Z,{title:"Task Details"}),(0,b.jsx)(l.Z,{direction:"row",alignItems:"center",justifyContent:"flex-end",spacing:2,children:(0,b.jsx)(h.Z,{handleOpenEdit:()=>x(!0),handleOpenDelete:()=>m(!0),back:()=>{C("/dashboard/task")}})})]})}),(0,b.jsxs)(a.Z,{sx:{width:"100%"},children:[(0,b.jsx)(a.Z,{sx:{borderBottom:1,borderColor:"divider",marginBottom:"0px"},children:(0,b.jsxs)(n.Z,{value:j,onChange:(e,r)=>Z(r),"aria-label":"basic tabs example",children:[(0,b.jsx)(d.Z,{label:"OVERVIEW",...(0,Y.P)(0)}),(0,b.jsx)(d.Z,{label:"OTHER",...(0,Y.P)(1)})]})}),(0,b.jsx)(Y.O,{value:j,index:0,children:(0,b.jsx)(v,{data:e})}),(0,b.jsx)(Y.O,{value:j,index:1,children:(0,b.jsx)(g,{data:e})})]})]})]})}}}]);