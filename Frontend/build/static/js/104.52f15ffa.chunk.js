(self.webpackChunkinsurance=self.webpackChunkinsurance||[]).push([[104],{90154:function(e,r,t){"use strict";t.d(r,{Z:function(){return g}});t(47313);var a=t(69099),n=t(17592),i=t(66149),s=t(33604),l=t(96467),o=t(4117),d=t(47131),c=t(11198),u=t(61113),h=t(35898),m=t(46417);const f=(0,n.ZP)(i.Z)((e=>{let{theme:r}=e;return{"& .MuiDialogContent-root":{padding:r.spacing(2)},"& .MuiDialogActions-root":{padding:r.spacing(1)}}}));function x(e){const{children:r,onClose:t,...a}=e;return(0,m.jsxs)(s.Z,{sx:{m:0,p:2},...a,children:[r,t?(0,m.jsx)(d.Z,{"aria-label":"close",onClick:t,sx:{position:"absolute",right:8,top:8,color:e=>e.palette.grey[500]},children:(0,m.jsx)(c.Z,{})}):null]})}function g(e){const{openDelete:r,handleCloseDelete:t,deleteData:n,deleteId:i}=e;return(0,m.jsx)("div",{children:(0,m.jsxs)(f,{"aria-labelledby":"customized-dialog-title",open:r,children:[(0,m.jsx)(x,{id:"customized-dialog-title",onClose:t,children:"Delete"}),(0,m.jsx)(l.Z,{dividers:!0,children:(0,m.jsx)(u.Z,{gutterBottom:!0,p:3,children:"Are you sure you want to delete this item?"})}),(0,m.jsx)(o.Z,{children:(0,m.jsxs)(h.Z,{direction:"row",spacing:2,children:[(0,m.jsx)(a.Z,{variant:"contained",color:"error",onClick:()=>{n(i)},children:"Yes"}),(0,m.jsx)(a.Z,{variant:"contained",onClick:t,children:"No"})]})})]})})}},67662:function(e,r,t){"use strict";var a=t(17592),n=t(35460);const i=(0,a.ZP)("div")({"& .MuiDataGrid-root":{border:"none"},"& .MuiDataGrid-cell":{borderBottom:"none"},"& .name-column--cell":{color:n.Z.primary.main,cursor:"pointer"},"& .name-column--cell--capitalize":{textTransform:"capitalize"},"& .name-column--cell:hover":{textDecoration:"underline"},"& .MuiDataGrid-columnHeaders":{backgroundColor:n.Z.grey[200],borderBottom:"none",outline:"none !important",borderRadius:"0px"},"& .MuiDataGrid-virtualScroller":{scrollbarWidth:"1px"},"& .MuiDataGrid-toolbarContainer .MuiButton-text":{textTransform:"capitalize",fontSize:"15px"},".MuiDataGrid-cell:focus,.MuiDataGrid-columnHeader:focus,MuiDataGrid-columnHeaderCheckbox:focus":{outline:"none !important"},".css-1jiby6q-MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within, .css-1jiby6q-MuiDataGrid-root .MuiDataGrid-cell:focus-within":{outline:"none"}});r.Z=i},35460:function(e,r,t){"use strict";var a=t(17551);const n={0:"#FFFFFF",100:"#F9FAFB",200:"#F4F6F8",300:"#DFE3E8",400:"#C4CDD5",500:"#919EAB",600:"#637381",700:"#454F5B",800:"#212B36",900:"#161C24"},i={common:{black:"#000",white:"#fff"},primary:{lighter:"#D1E9FC",light:"#76B0F1",main:"#2065D1",dark:"#103996",darker:"#061B64",contrastText:"#fff"},secondary:{lighter:"#D6E4FF",light:"#84A9FF",main:"#3366FF",dark:"#1939B7",darker:"#091A7A",contrastText:"#fff"},info:{lighter:"#D0F2FF",light:"#74CAFF",main:"#1890FF",dark:"#0C53B7",darker:"#04297A",contrastText:"#fff"},success:{lighter:"#E9FCD4",light:"#AAF27F",main:"#54D62C",dark:"#229A16",darker:"#08660D",contrastText:n[800]},warning:{lighter:"#FFF7CD",light:"#FFE16A",main:"#FFC107",dark:"#B78103",darker:"#7A4F01",contrastText:n[800]},error:{lighter:"#FFE7D9",light:"#FFA48D",main:"#FF4842",dark:"#B72136",darker:"#7A0C2E",contrastText:"#fff"},grey:n,divider:(0,a.Fq)(n[500],.24),text:{primary:n[800],secondary:n[600],disabled:n[500]},background:{paper:"#fff",default:n[100],neutral:n[200]},action:{active:n[600],hover:(0,a.Fq)(n[500],.08),selected:(0,a.Fq)(n[500],.16),disabled:(0,a.Fq)(n[500],.8),disabledBackground:(0,a.Fq)(n[500],.24),focus:(0,a.Fq)(n[500],.24),hoverOpacity:.08,disabledOpacity:.48}};r.Z=i},23547:function(e,r,t){"use strict";t.d(r,{Z:function(){return c}});var a=t(75192),n=t.n(a),i=t(47313),s=t(2524),l=t(57829),o=t(46417);const d=(0,i.forwardRef)(((e,r)=>{let{icon:t,width:a=20,sx:n,...i}=e;return(0,o.jsx)(l.Z,{ref:r,component:s.JO,icon:t,sx:{width:a,height:a,...n},...i})}));d.propTypes={sx:n().object,width:n().oneOfType([n().number,n().string]),icon:n().oneOfType([n().element,n().string])};var c=d},46064:function(e,r,t){"use strict";t(47313);var a=t(69099),n=t(66149),i=t(4117),s=t(96467),l=t(33604),o=t(61113),d=t(9019),c=t(24631),u=t(1550),h=t(23195),m=t(51405),f=t(88797),x=t(79429),g=t(3463),p=t(5178),v=t(55685),Z=t(83929),j=t(74268),C=t(15480),b=t(10658),N=t.n(b),y=t(35460),P=t(46417);r.Z=e=>{const{open:r,handleClose:t,editContact:b,editData:M}=e,w=g.Ry({firstName:g.Z_().required("First Name is required"),lastName:g.Z_().required("Last Name is required"),dateOfBirth:g.hT().required("Date of Birth is required"),gender:g.Z_().required("Gender is required"),phoneNumber:g.Z_().matches(/^[0-9]{10}$/,"Phone number is invalid").required("Phone number is required"),emailAddress:g.Z_().email("Invalid email").required("Email is required"),address:g.Z_().required()}),F={firstName:null!==M&&void 0!==M&&M.firstName?null===M||void 0===M?void 0:M.firstName:"",lastName:null!==M&&void 0!==M&&M.lastName?null===M||void 0===M?void 0:M.lastName:"",dateOfBirth:null!==M&&void 0!==M&&M.dateOfBirth?null===M||void 0===M?void 0:M.dateOfBirth:"",gender:null!==M&&void 0!==M&&M.gender?null===M||void 0===M?void 0:M.gender:"",phoneNumber:null!==M&&void 0!==M&&M.phoneNumber?null===M||void 0===M?void 0:M.phoneNumber:"",emailAddress:null!==M&&void 0!==M&&M.emailAddress?null===M||void 0===M?void 0:M.emailAddress:"",address:null!==M&&void 0!==M&&M.address?null===M||void 0===M?void 0:M.address:"",alternatePhoneNumber:"",additionalEmailAddress:"",instagramProfile:"",twitterProfile:"",preferredContactMethod:"",referralSource:"",referralContactName:"",relationshipToReferrer:"",preferencesForMarketingCommunications:"",preferredLanguage:"",modifiedOn:""},$=(0,x.TA)({initialValues:F,validationSchema:w,enableReinitialize:!0,onSubmit:async e=>{const r={firstName:null!==e&&void 0!==e&&e.firstName?null===e||void 0===e?void 0:e.firstName:"",lastName:e.lastName?e.lastName:"",dateOfBirth:e.dateOfBirth?e.dateOfBirth:"",gender:e.gender?e.gender:"",phoneNumber:e.phoneNumber?e.phoneNumber:"",emailAddress:e.emailAddress?e.emailAddress:"",address:e.address?e.address:"",alternatePhoneNumber:e.alternatePhoneNumber?e.alternatePhoneNumber:"",additionalEmailAddress:e.additionalEmailAddress?e.additionalEmailAddress:"",instagramProfile:e.instagramProfile?e.instagramProfile:"",twitterProfile:e.twitterProfile?e.twitterProfile:"",preferredContactMethod:e.preferredContactMethod?e.preferredContactMethod:"",referralSource:e.referralSource?e.referralSource:"",referralContactName:e.referralContactName?e.referralContactName:"",relationshipToReferrer:e.relationshipToReferrer?e.relationshipToReferrer:"",preferencesForMarketingCommunications:e.preferencesForMarketingCommunications?e.preferencesForMarketingCommunications:"",preferredLanguage:e.preferredLanguage?e.preferredLanguage:"",modifiedOn:new Date};b(r),t()}});return(0,P.jsx)("div",{children:(0,P.jsxs)(n.Z,{open:r,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[(0,P.jsxs)(l.Z,{id:"scroll-dialog-title",style:{display:"flex",justifyContent:"space-between"},children:[(0,P.jsx)(o.Z,{variant:"h6",children:"Edit"}),(0,P.jsx)(o.Z,{children:(0,P.jsx)(h.Z,{onClick:t,style:{cursor:"pointer"}})})]}),(0,P.jsx)(s.Z,{dividers:!0,children:(0,P.jsxs)("form",{children:[(0,P.jsx)(o.Z,{style:{marginBottom:"15px"},variant:"h6",children:"Basic Information"}),(0,P.jsxs)(d.ZP,{container:!0,rowSpacing:3,columnSpacing:{xs:0,sm:5,md:4},children:[(0,P.jsxs)(d.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,P.jsx)(p.Z,{children:"First name"}),(0,P.jsx)(c.Z,{id:"firstName",name:"firstName",size:"small",maxRows:10,fullWidth:!0,value:$.values.firstName,onChange:$.handleChange,error:$.touched.firstName&&Boolean($.errors.firstName),helperText:$.touched.firstName&&$.errors.firstName})]}),(0,P.jsxs)(d.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,P.jsx)(p.Z,{children:"Last name"}),(0,P.jsx)(c.Z,{id:"lastName",name:"lastName",size:"small",fullWidth:!0,value:$.values.lastName,onChange:$.handleChange,error:$.touched.lastName&&Boolean($.errors.lastName),helperText:$.touched.lastName&&$.errors.lastName})]}),(0,P.jsxs)(d.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,P.jsx)(p.Z,{children:"Date Of Birth"}),(0,P.jsx)(c.Z,{name:"dateOfBirth",type:"date",size:"small",fullWidth:!0,value:N()($.values.dateOfBirth).format("YYYY-MM-DD"),onChange:$.handleChange,error:$.touched.dateOfBirth&&Boolean($.errors.dateOfBirth),helperText:$.touched.dateOfBirth&&$.errors.dateOfBirth})]}),(0,P.jsxs)(d.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,P.jsx)(p.Z,{children:"Phone number"}),(0,P.jsx)(c.Z,{id:"phoneNumber",name:"phoneNumber",size:"small",type:"number",fullWidth:!0,value:$.values.phoneNumber,onChange:$.handleChange,error:$.touched.phoneNumber&&Boolean($.errors.phoneNumber),helperText:$.touched.phoneNumber&&$.errors.phoneNumber})]}),(0,P.jsxs)(d.ZP,{item:!0,xs:12,children:[(0,P.jsx)(p.Z,{children:"Email"}),(0,P.jsx)(c.Z,{id:"emailAddress",name:"emailAddress",size:"small",fullWidth:!0,value:$.values.emailAddress,onChange:$.handleChange,error:$.touched.emailAddress&&Boolean($.errors.emailAddress),helperText:$.touched.emailAddress&&$.errors.emailAddress})]}),(0,P.jsx)(d.ZP,{item:!0,xs:12,children:(0,P.jsxs)(u.Z,{fullWidth:!0,children:[(0,P.jsx)(p.Z,{children:"Gender"}),(0,P.jsxs)(v.Z,{row:!0,name:"gender",onChange:$.handleChange,value:$.values.gender,children:[(0,P.jsx)(Z.Z,{value:"Male",control:(0,P.jsx)(j.Z,{}),label:"Male"}),(0,P.jsx)(Z.Z,{value:"Female",control:(0,P.jsx)(j.Z,{}),label:"Female"}),(0,P.jsx)(Z.Z,{value:"Other",control:(0,P.jsx)(j.Z,{}),label:"Other"})]}),(0,P.jsx)(C.Z,{style:{color:y.Z.error.main},children:$.touched.gender&&$.errors.gender})]})}),(0,P.jsxs)(d.ZP,{item:!0,xs:12,sm:12,md:12,children:[(0,P.jsx)(p.Z,{children:"Address"}),(0,P.jsx)(c.Z,{id:"address",name:"address",size:"small",multiline:!0,fullWidth:!0,value:$.values.address,onChange:$.handleChange,error:$.touched.address&&Boolean($.errors.address),helperText:$.touched.address&&$.errors.address})]})]}),(0,P.jsx)(o.Z,{style:{marginBottom:"15px"},variant:"h6",mt:2,children:"Additional Contact Details"}),(0,P.jsxs)(d.ZP,{container:!0,rowSpacing:3,columnSpacing:{xs:0,sm:5,md:4},children:[(0,P.jsxs)(d.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,P.jsx)(p.Z,{children:"Alternate phone number"}),(0,P.jsx)(c.Z,{id:"alternatePhoneNumber",name:"alternatePhoneNumber",type:"number",size:"small",fullWidth:!0,value:$.values.alternatePhoneNumber,onChange:$.handleChange,error:$.touched.alternatePhoneNumber&&Boolean($.errors.alternatePhoneNumber),helperText:$.touched.alternatePhoneNumber&&$.errors.alternatePhoneNumber})]}),(0,P.jsxs)(d.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,P.jsx)(p.Z,{children:"Additional email address"}),(0,P.jsx)(c.Z,{id:"additionalEmailAddress",name:"additionalEmailAddress",type:"email",size:"small",fullWidth:!0,value:$.values.additionalEmailAddress,onChange:$.handleChange,error:$.touched.additionalEmailAddress&&Boolean($.errors.additionalEmailAddress),helperText:$.touched.additionalEmailAddress&&$.errors.additionalEmailAddress})]}),(0,P.jsxs)(d.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,P.jsx)(p.Z,{children:"Instagram profile"}),(0,P.jsx)(c.Z,{id:"instagramProfile",name:"instagramProfile",type:"",size:"small",fullWidth:!0,value:$.values.instagramProfile,onChange:e=>$.setFieldValue("instagramProfile",`${e.target.value}`)}),$.values.instagramProfile&&(0,P.jsx)("a",{href:`https://www.instagram.com/${$.values.instagramProfile}`,target:"_blank",rel:"noreferrer",children:"Link"})]}),(0,P.jsxs)(d.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,P.jsx)(p.Z,{children:"Twitter profile"}),(0,P.jsx)(c.Z,{id:"twitterProfile",name:"twitterProfile",type:"",size:"small",fullWidth:!0,value:$.values.twitterProfile,onChange:e=>$.setFieldValue("twitterProfile",`${e.target.value}`)}),$.values.twitterProfile&&(0,P.jsx)("a",{href:`https://twitter.com/${$.values.twitterProfile}`,target:"_blank",rel:"noreferrer",children:"Link"})]}),(0,P.jsxs)(d.ZP,{item:!0,xs:12,sm:12,children:[(0,P.jsx)(p.Z,{children:"Preferred Contact Method"}),(0,P.jsx)(c.Z,{id:"preferredContactMethod",name:"preferredContactMethod",type:"",size:"small",fullWidth:!0,value:$.values.preferredContactMethod,onChange:$.handleChange})]})]}),(0,P.jsx)(o.Z,{style:{marginBottom:"15px"},variant:"h6",mt:2,children:"Referral Information"}),(0,P.jsxs)(d.ZP,{container:!0,rowSpacing:3,columnSpacing:{xs:0,sm:5,md:4},children:[(0,P.jsx)(d.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,P.jsxs)(u.Z,{fullWidth:!0,children:[(0,P.jsx)(p.Z,{children:"Referral source"}),(0,P.jsxs)(f.Z,{labelId:"demo-simple-select-label",id:"referralSource",name:"referralSource",size:"small",value:$.values.referralSource,onChange:$.handleChange,error:$.touched.referralSource&&Boolean($.errors.referralSource),children:[(0,P.jsx)(m.Z,{value:"Existing Customers",children:"Existing Customers"}),(0,P.jsx)(m.Z,{value:"Professional Networks",children:"Professional Networks"}),(0,P.jsx)(m.Z,{value:"Business Partnerships",children:"Business Partnerships"}),(0,P.jsx)(m.Z,{value:"Employee Referrals",children:"Employee Referrals"}),(0,P.jsx)(m.Z,{value:"Online Reviews and Social Media",children:"Online Reviews and Social Media"})]}),(0,P.jsx)(C.Z,{error:$.touched.referralSource&&Boolean($.errors.referralSource),children:$.touched.referralSource&&$.errors.referralSource})]})}),(0,P.jsxs)(d.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,P.jsx)(p.Z,{children:"Referral Contact Name"}),(0,P.jsx)(c.Z,{id:"referralContactName",name:"referralContactName",size:"small",fullWidth:!0,value:$.values.referralContactName,onChange:$.handleChange})]}),(0,P.jsxs)(d.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,P.jsx)(p.Z,{children:"Relationship To Referrer"}),(0,P.jsx)(c.Z,{id:"relationshipToReferrer",name:"relationshipToReferrer",size:"small",fullWidth:!0,value:$.values.relationshipToReferrer,onChange:$.handleChange})]})]}),(0,P.jsx)(o.Z,{style:{marginBottom:"15px"},variant:"h6",mt:2,children:"Communication Preferences"}),(0,P.jsxs)(d.ZP,{container:!0,rowSpacing:3,columnSpacing:{xs:0,sm:5,md:4},children:[(0,P.jsx)(d.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,P.jsxs)(u.Z,{fullWidth:!0,children:[(0,P.jsx)(p.Z,{children:"Marketing Communications"}),(0,P.jsxs)(f.Z,{labelId:"demo-simple-select-label",id:"preferencesForMarketingCommunications",name:"preferencesForMarketingCommunications",size:"small",value:$.values.preferencesForMarketingCommunications,onChange:$.handleChange,error:$.touched.preferencesForMarketingCommunications&&Boolean($.errors.preferencesForMarketingCommunications),children:[(0,P.jsx)(m.Z,{value:"Opt-in",children:"Opt-in"}),(0,P.jsx)(m.Z,{value:"Opt-out",children:"Opt-out"})]}),(0,P.jsx)(C.Z,{error:$.touched.preferencesForMarketingCommunications&&Boolean($.errors.preferencesForMarketingCommunications),children:$.touched.preferencesForMarketingCommunications&&$.errors.preferencesForMarketingCommunications})]})}),(0,P.jsxs)(d.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,P.jsx)(p.Z,{children:"Preferred language"}),(0,P.jsx)(c.Z,{id:"preferredLanguage",name:"preferredLanguage",type:"",size:"small",fullWidth:!0,value:$.values.preferredLanguage,onChange:$.handleChange})]})]})]})}),(0,P.jsxs)(i.Z,{children:[(0,P.jsx)(a.Z,{type:"submit",variant:"contained",onClick:$.handleSubmit,style:{textTransform:"capitalize"},children:"Save"}),(0,P.jsx)(a.Z,{type:"reset",variant:"outlined",style:{textTransform:"capitalize"},color:"error",onClick:()=>{$.resetForm(),t()},children:"Cancel"})]})]})})}},33707:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return R}});var a=t(47313),n=t(57829),i=t(47825),s=t(35898),l=t(61113),o=t(69099),d=t(73428),c=t(67662),u=t(85350),h=t(85833),m=t(97890),f=t(23547),x=t(66149),g=t(4117),p=t(96467),v=t(33604),Z=t(9019),j=t(24631),C=t(1550),b=t(23195),N=t(51405),y=t(88797),P=t(79429),M=t(3463),w=t(5178),F=t(55685),$=t(83929),S=t(74268),D=t(15480),k=t(31387),A=t(35460),B=t(46417);var O=e=>{const{open:r,handleClose:t,addContact:a}=e,n=localStorage.getItem("user_id"),i=M.Ry({firstName:M.Z_().required("First Name is required"),lastName:M.Z_().required("Last Name is required"),dateOfBirth:M.hT().required("Date of Birth is required"),gender:M.Z_().required("Gender is required"),phoneNumber:M.Z_().matches(/^[0-9]{10}$/,"Phone number is invalid").required("Phone number is required"),emailAddress:M.Z_().email("Invalid email").required("Email is required"),address:M.Z_().required()}),s={firstName:"",lastName:"",dateOfBirth:"",gender:"",phoneNumber:"",emailAddress:"",address:"",alternatePhoneNumber:"",additionalEmailAddress:"",instagramProfile:"",twitterProfile:"",preferredContactMethod:"",referralSource:"",referralContactName:"",relationshipToReferrer:"",preferencesForMarketingCommunications:"",preferredLanguage:"",createdBy:n},d=(0,P.TA)({initialValues:s,validationSchema:i,onSubmit:async e=>{a(e),t(),k.Am.success("Contact Add successfully")}});return(0,B.jsx)("div",{children:(0,B.jsxs)(x.Z,{open:r,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[(0,B.jsxs)(v.Z,{id:"scroll-dialog-title",style:{display:"flex",justifyContent:"space-between"},children:[(0,B.jsx)(l.Z,{variant:"h6",children:"Add New "}),(0,B.jsx)(l.Z,{children:(0,B.jsx)(b.Z,{onClick:t,style:{cursor:"pointer"}})})]}),(0,B.jsx)(p.Z,{dividers:!0,children:(0,B.jsxs)("form",{children:[(0,B.jsx)(l.Z,{style:{marginBottom:"15px"},variant:"h6",children:"Basic Information"}),(0,B.jsxs)(Z.ZP,{container:!0,rowSpacing:3,columnSpacing:{xs:0,sm:5,md:4},children:[(0,B.jsxs)(Z.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,B.jsx)(w.Z,{children:"First name"}),(0,B.jsx)(j.Z,{id:"firstName",name:"firstName",size:"small",maxRows:10,fullWidth:!0,value:d.values.firstName,onChange:d.handleChange,error:d.touched.firstName&&Boolean(d.errors.firstName),helperText:d.touched.firstName&&d.errors.firstName})]}),(0,B.jsxs)(Z.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,B.jsx)(w.Z,{children:"Last name"}),(0,B.jsx)(j.Z,{id:"lastName",name:"lastName",size:"small",fullWidth:!0,value:d.values.lastName,onChange:d.handleChange,error:d.touched.lastName&&Boolean(d.errors.lastName),helperText:d.touched.lastName&&d.errors.lastName})]}),(0,B.jsxs)(Z.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,B.jsx)(w.Z,{children:"Date Of Birth"}),(0,B.jsx)(j.Z,{name:"dateOfBirth",type:"date",size:"small",fullWidth:!0,value:d.values.dateOfBirth,onChange:d.handleChange,error:d.touched.dateOfBirth&&Boolean(d.errors.dateOfBirth),helperText:d.touched.dateOfBirth&&d.errors.dateOfBirth})]}),(0,B.jsxs)(Z.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,B.jsx)(w.Z,{children:"Phone number"}),(0,B.jsx)(j.Z,{id:"phoneNumber",name:"phoneNumber",size:"small",type:"number",fullWidth:!0,value:d.values.phoneNumber,onChange:d.handleChange,error:d.touched.phoneNumber&&Boolean(d.errors.phoneNumber),helperText:d.touched.phoneNumber&&d.errors.phoneNumber})]}),(0,B.jsxs)(Z.ZP,{item:!0,xs:12,children:[(0,B.jsx)(w.Z,{children:"Email"}),(0,B.jsx)(j.Z,{id:"emailAddress",name:"emailAddress",size:"small",fullWidth:!0,value:d.values.emailAddress,onChange:d.handleChange,error:d.touched.emailAddress&&Boolean(d.errors.emailAddress),helperText:d.touched.emailAddress&&d.errors.emailAddress})]}),(0,B.jsx)(Z.ZP,{item:!0,xs:12,children:(0,B.jsxs)(C.Z,{fullWidth:!0,children:[(0,B.jsx)(w.Z,{children:"Gender"}),(0,B.jsxs)(F.Z,{row:!0,name:"gender",onChange:d.handleChange,value:d.values.gender,children:[(0,B.jsx)($.Z,{value:"Male",control:(0,B.jsx)(S.Z,{}),label:"Male"}),(0,B.jsx)($.Z,{value:"Female",control:(0,B.jsx)(S.Z,{}),label:"Female"}),(0,B.jsx)($.Z,{value:"Other",control:(0,B.jsx)(S.Z,{}),label:"Other"})]}),(0,B.jsx)(D.Z,{style:{color:A.Z.error.main},children:d.touched.gender&&d.errors.gender})]})}),(0,B.jsxs)(Z.ZP,{item:!0,xs:12,sm:12,md:12,children:[(0,B.jsx)(w.Z,{children:"Address"}),(0,B.jsx)(j.Z,{id:"address",name:"address",size:"small",multiline:!0,fullWidth:!0,rows:4,value:d.values.address,onChange:d.handleChange,error:d.touched.address&&Boolean(d.errors.address),helperText:d.touched.address&&d.errors.address})]})]}),(0,B.jsx)(l.Z,{style:{marginBottom:"15px"},variant:"h6",mt:2,children:"Additional Contact Details"}),(0,B.jsxs)(Z.ZP,{container:!0,rowSpacing:3,columnSpacing:{xs:0,sm:5,md:4},children:[(0,B.jsxs)(Z.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,B.jsx)(w.Z,{children:"Alternate phone number"}),(0,B.jsx)(j.Z,{id:"alternatePhoneNumber",name:"alternatePhoneNumber",type:"number",size:"small",fullWidth:!0,value:d.values.alternatePhoneNumber,onChange:d.handleChange,error:d.touched.alternatePhoneNumber&&Boolean(d.errors.alternatePhoneNumber),helperText:d.touched.alternatePhoneNumber&&d.errors.alternatePhoneNumber})]}),(0,B.jsxs)(Z.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,B.jsx)(w.Z,{children:"Additional email address"}),(0,B.jsx)(j.Z,{id:"additionalEmailAddress",name:"additionalEmailAddress",type:"email",size:"small",fullWidth:!0,value:d.values.additionalEmailAddress,onChange:d.handleChange,error:d.touched.additionalEmailAddress&&Boolean(d.errors.additionalEmailAddress),helperText:d.touched.additionalEmailAddress&&d.errors.additionalEmailAddress})]}),(0,B.jsxs)(Z.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,B.jsx)(w.Z,{children:"Instagram profile"}),(0,B.jsx)(j.Z,{id:"instagramProfile",name:"instagramProfile",type:"",size:"small",fullWidth:!0,onChange:e=>d.setFieldValue("instagramProfile",`${e.target.value}`)}),d.values.instagramProfile&&(0,B.jsx)("a",{href:`https://www.instagram.com/${d.values.instagramProfile}`,target:"_blank",rel:"noreferrer",children:"Link"})]}),(0,B.jsxs)(Z.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,B.jsx)(w.Z,{children:"Twitter profile"}),(0,B.jsx)(j.Z,{id:"twitterProfile",name:"twitterProfile",type:"",size:"small",fullWidth:!0,onChange:e=>d.setFieldValue("twitterProfile",`${e.target.value}`)}),d.values.twitterProfile&&(0,B.jsx)("a",{href:`https://twitter.com/${d.values.twitterProfile}`,target:"_blank",rel:"noreferrer",children:"Link"})]}),(0,B.jsxs)(Z.ZP,{item:!0,xs:12,sm:12,children:[(0,B.jsx)(w.Z,{children:"Preferred Contact Method"}),(0,B.jsx)(j.Z,{id:"preferredContactMethod",name:"preferredContactMethod",type:"",size:"small",fullWidth:!0,value:d.values.preferredContactMethod,onChange:d.handleChange})]})]}),(0,B.jsx)(l.Z,{style:{marginBottom:"15px"},variant:"h6",mt:2,children:"Referral Information"}),(0,B.jsxs)(Z.ZP,{container:!0,rowSpacing:3,columnSpacing:{xs:0,sm:5,md:4},children:[(0,B.jsx)(Z.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,B.jsxs)(C.Z,{fullWidth:!0,children:[(0,B.jsx)(w.Z,{children:"Referral source"}),(0,B.jsxs)(y.Z,{id:"referralSource",name:"referralSource",size:"small",value:d.values.referralSource,onChange:d.handleChange,error:d.touched.referralSource&&Boolean(d.errors.referralSource),children:[(0,B.jsx)(N.Z,{value:"Existing Customers",children:"Existing Customers"}),(0,B.jsx)(N.Z,{value:"Professional Networks",children:"Professional Networks"}),(0,B.jsx)(N.Z,{value:"Business Partnerships",children:"Business Partnerships"}),(0,B.jsx)(N.Z,{value:"Employee Referrals",children:"Employee Referrals"}),(0,B.jsx)(N.Z,{value:"Online Reviews and Social Media",children:"Online Reviews and Social Media"})]}),(0,B.jsx)(D.Z,{error:d.touched.referralSource&&Boolean(d.errors.referralSource),children:d.touched.referralSource&&d.errors.referralSource})]})}),(0,B.jsxs)(Z.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,B.jsx)(w.Z,{children:"Referral Contact Name"}),(0,B.jsx)(j.Z,{id:"referralContactName",name:"referralContactName",size:"small",fullWidth:!0,value:d.values.referralContactName,onChange:d.handleChange})]}),(0,B.jsxs)(Z.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,B.jsx)(w.Z,{children:"Relationship To Referrer"}),(0,B.jsx)(j.Z,{id:"relationshipToReferrer",name:"relationshipToReferrer",size:"small",fullWidth:!0,value:d.values.relationshipToReferrer,onChange:d.handleChange})]})]}),(0,B.jsx)(l.Z,{style:{marginBottom:"15px"},variant:"h6",mt:2,children:"Communication Preferences"}),(0,B.jsxs)(Z.ZP,{container:!0,rowSpacing:3,columnSpacing:{xs:0,sm:5,md:4},children:[(0,B.jsx)(Z.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,B.jsxs)(C.Z,{fullWidth:!0,children:[(0,B.jsx)(w.Z,{children:"Marketing Communications"}),(0,B.jsxs)(y.Z,{labelId:"demo-simple-select-label",id:"preferencesForMarketingCommunications",name:"preferencesForMarketingCommunications",size:"small",value:d.values.preferencesForMarketingCommunications,onChange:d.handleChange,error:d.touched.preferencesForMarketingCommunications&&Boolean(d.errors.preferencesForMarketingCommunications),children:[(0,B.jsx)(N.Z,{value:"Opt-in",children:"Opt-in"}),(0,B.jsx)(N.Z,{value:"Opt-out",children:"Opt-out"})]}),(0,B.jsx)(D.Z,{error:d.touched.preferencesForMarketingCommunications&&Boolean(d.errors.preferencesForMarketingCommunications),children:d.touched.preferencesForMarketingCommunications&&d.errors.preferencesForMarketingCommunications})]})}),(0,B.jsxs)(Z.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,B.jsx)(w.Z,{children:"Preferred language"}),(0,B.jsx)(j.Z,{id:"preferredLanguage",name:"preferredLanguage",type:"",size:"small",fullWidth:!0,value:d.values.preferredLanguage,onChange:d.handleChange})]})]})]})}),(0,B.jsxs)(g.Z,{children:[(0,B.jsx)(o.Z,{type:"submit",variant:"contained",onClick:d.handleSubmit,style:{textTransform:"capitalize"},children:"Save"}),(0,B.jsx)(o.Z,{type:"reset",variant:"outlined",style:{textTransform:"capitalize"},color:"error",onClick:()=>{d.resetForm(),t()},children:"Cancel"})]})]})})},T=t(65954),z=t(51997),E=t(46064),W=t(19333),_=t(90154);var R=()=>{const e=localStorage.getItem("user_id"),r=localStorage.getItem("userRole"),[t,x]=(0,a.useState)(!1),[g,p]=(0,a.useState)(!1),[v,Z]=(0,a.useState)([]),[j,C]=(0,a.useState)(""),[b,N]=(0,a.useState)(!1),[y,P]=(0,a.useState)(""),M=(0,m.s0)(),w=()=>p(!1),F=()=>N(!1),$=async()=>{const t=await(0,W.ac)("admin"===r?"contact/list":`contact/list/?createdBy=${e}`);var a;t&&200===t.status&&Z(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.allContactData)};(0,a.useEffect)((()=>{$()}),[]);const S=async e=>{const r=await(0,W.ef)(`contact/delete/${e}`,e);r&&200===r.status&&$(),F()},D=async e=>{const r=e,t=await(0,W.eq)(`contact/edit/${j._id}`,r);t&&200===t.status&&$()},k=[{field:"_id",headerName:"S.No",flex:.5,cellClassName:"name-column--cell name-column--cell--capitalize",valueGetter:e=>e.api.getRowIndexRelativeToVisibleRows(e.row._id)+1},{field:"firstName",headerName:"First Name",flex:1,cellClassName:"name-column--cell name-column--cell--capitalize",renderCell:e=>(0,B.jsx)(n.Z,{onClick:()=>{M(`/dashboard/contact/view/${e.row._id}`)},children:e.value})},{field:"lastName",headerName:"Last Name",flex:1,cellClassName:"name-column--cell--capitalize"},{field:"gender",headerName:"Gender",flex:1},{field:"phoneNumber",headerName:"PhoneNumber",flex:1},{field:"emailAddress",headerName:"Email Address",flex:1},{field:"action",headerName:"Action",flex:1,renderCell:e=>{const r=async e=>{C(e),p(!0)},t=async e=>{P(e._id),N(!0)};return(0,B.jsx)(B.Fragment,{children:(0,B.jsxs)(n.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,B.jsx)(E.Z,{open:g,editContact:D,handleClose:w,editData:j}),(0,B.jsx)(n.Z,{onClick:()=>r(null===e||void 0===e?void 0:e.row),children:(0,B.jsx)(T.Z,{sx:{color:"#6F2DA8"}})}),(0,B.jsx)(_.Z,{openDelete:b,deleteId:y,handleCloseDelete:F,deleteData:S}),(0,B.jsx)(n.Z,{onClick:()=>t(null===e||void 0===e?void 0:e.row),children:(0,B.jsx)(z.Z,{sx:{color:"red"}})})]})})}}];return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(O,{open:t,handleClose:()=>x(!1),addContact:async e=>{const r=e,t=await(0,W.Fv)("contact/add",r);t&&201===t.status&&$()}}),(0,B.jsxs)(i.Z,{children:[(0,B.jsxs)(s.Z,{direction:"row",alignItems:"center",mb:5,justifyContent:"space-between",children:[(0,B.jsx)(l.Z,{variant:"h4",children:"Contact Management"}),(0,B.jsx)(s.Z,{direction:"row",alignItems:"center",justifyContent:"flex-end",spacing:2,children:(0,B.jsx)(o.Z,{variant:"contained",startIcon:(0,B.jsx)(f.Z,{icon:"eva:plus-fill"}),onClick:()=>x(!0),children:"New Contact"})})]}),(0,B.jsx)(c.Z,{children:(0,B.jsx)(n.Z,{width:"100%",children:(0,B.jsx)(d.Z,{style:{height:"600px",paddingTop:"15px"},children:(0,B.jsx)(u._$,{rows:null!==v&&void 0!==v?v:[],columns:k,getRowId:e=>e._id,slots:{toolbar:h.n},slotProps:{toolbar:{showQuickFilter:!0}}})})})})]})]})}},23195:function(e,r,t){"use strict";var a=t(64836);r.Z=void 0;var n=a(t(45045)),i=t(46417),s=(0,n.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");r.Z=s},11198:function(e,r,t){"use strict";var a=t(64836);r.Z=void 0;var n=a(t(45045)),i=t(46417),s=(0,n.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");r.Z=s},51997:function(e,r,t){"use strict";var a=t(64836);r.Z=void 0;var n=a(t(45045)),i=t(46417),s=(0,n.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");r.Z=s},65954:function(e,r,t){"use strict";var a=t(64836);r.Z=void 0;var n=a(t(45045)),i=t(46417),s=(0,n.default)((0,i.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");r.Z=s},10658:function(e){e.exports=function(){"use strict";var e=1e3,r=6e4,t=36e5,a="millisecond",n="second",i="minute",s="hour",l="day",o="week",d="month",c="quarter",u="year",h="date",m="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,x=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},p=function(e,r,t){var a=String(e);return!a||a.length>=r?e:""+Array(r+1-a.length).join(t)+e},v={s:p,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),a=Math.floor(t/60),n=t%60;return(r<=0?"+":"-")+p(a,2,"0")+":"+p(n,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var a=12*(t.year()-r.year())+(t.month()-r.month()),n=r.clone().add(a,d),i=t-n<0,s=r.clone().add(a+(i?-1:1),d);return+(-(a+(t-n)/(i?n-s:s-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:o,d:l,D:h,h:s,m:i,s:n,ms:a,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},Z="en",j={};j[Z]=g;var C="$isDayjsObject",b=function(e){return e instanceof M||!(!e||!e[C])},N=function e(r,t,a){var n;if(!r)return Z;if("string"==typeof r){var i=r.toLowerCase();j[i]&&(n=i),t&&(j[i]=t,n=i);var s=r.split("-");if(!n&&s.length>1)return e(s[0])}else{var l=r.name;j[l]=r,n=l}return!a&&n&&(Z=n),n||!a&&Z},y=function(e,r){if(b(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new M(t)},P=v;P.l=N,P.i=b,P.w=function(e,r){return y(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var M=function(){function g(e){this.$L=N(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[C]=!0}var p=g.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(P.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var a=r.match(f);if(a){var n=a[2]-1||0,i=(a[7]||"0").substring(0,3);return t?new Date(Date.UTC(a[1],n,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)):new Date(a[1],n,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return P},p.isValid=function(){return!(this.$d.toString()===m)},p.isSame=function(e,r){var t=y(e);return this.startOf(r)<=t&&t<=this.endOf(r)},p.isAfter=function(e,r){return y(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<y(e)},p.$g=function(e,r,t){return P.u(e)?this[r]:this.set(t,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var t=this,a=!!P.u(r)||r,c=P.p(e),m=function(e,r){var n=P.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return a?n:n.endOf(l)},f=function(e,r){return P.w(t.toDate()[e].apply(t.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},x=this.$W,g=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case u:return a?m(1,0):m(31,11);case d:return a?m(1,g):m(0,g+1);case o:var Z=this.$locale().weekStart||0,j=(x<Z?x+7:x)-Z;return m(a?p-j:p+(6-j),g);case l:case h:return f(v+"Hours",0);case s:return f(v+"Minutes",1);case i:return f(v+"Seconds",2);case n:return f(v+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var t,o=P.p(e),c="set"+(this.$u?"UTC":""),m=(t={},t[l]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[s]=c+"Hours",t[i]=c+"Minutes",t[n]=c+"Seconds",t[a]=c+"Milliseconds",t)[o],f=o===l?this.$D+(r-this.$W):r;if(o===d||o===u){var x=this.clone().set(h,1);x.$d[m](f),x.init(),this.$d=x.set(h,Math.min(this.$D,x.daysInMonth())).$d}else m&&this.$d[m](f);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[P.p(e)]()},p.add=function(a,c){var h,m=this;a=Number(a);var f=P.p(c),x=function(e){var r=y(m);return P.w(r.date(r.date()+Math.round(e*a)),m)};if(f===d)return this.set(d,this.$M+a);if(f===u)return this.set(u,this.$y+a);if(f===l)return x(1);if(f===o)return x(7);var g=(h={},h[i]=r,h[s]=t,h[n]=e,h)[f]||1,p=this.$d.getTime()+a*g;return P.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||m;var a=e||"YYYY-MM-DDTHH:mm:ssZ",n=P.z(this),i=this.$H,s=this.$m,l=this.$M,o=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,n,i){return e&&(e[t]||e(r,a))||n[t].slice(0,i)},h=function(e){return P.s(i%12||12,e,"0")},f=c||function(e,r,t){var a=e<12?"AM":"PM";return t?a.toLowerCase():a};return a.replace(x,(function(e,a){return a||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return P.s(r.$y,4,"0");case"M":return l+1;case"MM":return P.s(l+1,2,"0");case"MMM":return u(t.monthsShort,l,d,3);case"MMMM":return u(d,l);case"D":return r.$D;case"DD":return P.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,o,2);case"ddd":return u(t.weekdaysShort,r.$W,o,3);case"dddd":return o[r.$W];case"H":return String(i);case"HH":return P.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return f(i,s,!0);case"A":return f(i,s,!1);case"m":return String(s);case"mm":return P.s(s,2,"0");case"s":return String(r.$s);case"ss":return P.s(r.$s,2,"0");case"SSS":return P.s(r.$ms,3,"0");case"Z":return n}return null}(e)||n.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(a,h,m){var f,x=this,g=P.p(h),p=y(a),v=(p.utcOffset()-this.utcOffset())*r,Z=this-p,j=function(){return P.m(x,p)};switch(g){case u:f=j()/12;break;case d:f=j();break;case c:f=j()/3;break;case o:f=(Z-v)/6048e5;break;case l:f=(Z-v)/864e5;break;case s:f=Z/t;break;case i:f=Z/r;break;case n:f=Z/e;break;default:f=Z}return m?f:P.a(f)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return j[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),a=N(e,r,!0);return a&&(t.$L=a),t},p.clone=function(){return P.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},g}(),w=M.prototype;return y.prototype=w,[["$ms",a],["$s",n],["$m",i],["$H",s],["$W",l],["$M",d],["$y",u],["$D",h]].forEach((function(e){w[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),y.extend=function(e,r){return e.$i||(e(r,M,y),e.$i=!0),y},y.locale=N,y.isDayjs=b,y.unix=function(e){return y(1e3*e)},y.en=j[Z],y.Ls=j,y.p={},y}()}}]);