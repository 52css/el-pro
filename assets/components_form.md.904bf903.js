import{d as _,h as B,a5 as A,J as y,o as b,b as I,w as e,N as o,l as S,a as s,k as l,c as V,K as T,V as $}from"./chunks/framework.3b262960.js";const L=l("span",{class:"text-gray-500"},"-",-1),O=_({__name:"form.md.demo.012cade8",setup(v){const a=B("default"),F=B(),E=A({name:"Hello",region:"",count:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),t=A({name:[{required:!0,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}],region:[{required:!0,message:"Please select Activity zone",trigger:"change"}],count:[{required:!0,message:"Please select Activity count",trigger:"change"}],date1:[{type:"date",required:!0,message:"Please pick a date",trigger:"change"}],date2:[{type:"date",required:!0,message:"Please pick a time",trigger:"change"}],type:[{type:"array",required:!0,message:"Please select at least one activity type",trigger:"change"}],resource:[{required:!0,message:"Please select activity resource",trigger:"change"}],desc:[{required:!0,message:"Please input activity form",trigger:"blur"}]}),d=async p=>{p&&await p.validate((r,n)=>{r?console.log("submit!"):console.log("error submit!",n)})},f=p=>{p&&p.resetFields()},c=Array.from({length:1e4}).map((p,r)=>({value:`${r+1}`,label:`${r+1}`}));return(p,r)=>{const n=y("el-input"),m=y("el-form-item"),g=y("el-option"),k=y("el-select"),x=y("el-select-v2"),P=y("el-date-picker"),C=y("el-col"),q=y("el-time-picker"),R=y("el-switch"),u=y("el-checkbox"),w=y("el-checkbox-group"),D=y("el-radio"),U=y("el-radio-group"),h=y("el-button"),z=y("el-pro-form");return b(),I(z,{ref_key:"ruleFormRef",ref:F,model:E,rules:t,"label-width":"120px",class:"demo-ruleForm",size:a.value,"status-icon":""},{default:e(()=>[o(m,{label:"Activity name",prop:"name"},{default:e(()=>[o(n,{modelValue:E.name,"onUpdate:modelValue":r[0]||(r[0]=i=>E.name=i)},null,8,["modelValue"])]),_:1}),o(m,{label:"Activity zone",prop:"region"},{default:e(()=>[o(k,{modelValue:E.region,"onUpdate:modelValue":r[1]||(r[1]=i=>E.region=i),placeholder:"Activity zone"},{default:e(()=>[o(g,{label:"Zone one",value:"shanghai"}),o(g,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),o(m,{label:"Activity count",prop:"count"},{default:e(()=>[o(x,{modelValue:E.count,"onUpdate:modelValue":r[2]||(r[2]=i=>E.count=i),placeholder:"Activity count",options:S(c)},null,8,["modelValue","options"])]),_:1}),o(m,{label:"Activity time",required:""},{default:e(()=>[o(C,{span:11},{default:e(()=>[o(m,{prop:"date1"},{default:e(()=>[o(P,{modelValue:E.date1,"onUpdate:modelValue":r[3]||(r[3]=i=>E.date1=i),type:"date",label:"Pick a date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),o(C,{class:"text-center",span:2},{default:e(()=>[L]),_:1}),o(C,{span:11},{default:e(()=>[o(m,{prop:"date2"},{default:e(()=>[o(q,{modelValue:E.date2,"onUpdate:modelValue":r[4]||(r[4]=i=>E.date2=i),label:"Pick a time",placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),o(m,{label:"Instant delivery",prop:"delivery"},{default:e(()=>[o(R,{modelValue:E.delivery,"onUpdate:modelValue":r[5]||(r[5]=i=>E.delivery=i)},null,8,["modelValue"])]),_:1}),o(m,{label:"Activity type",prop:"type"},{default:e(()=>[o(w,{modelValue:E.type,"onUpdate:modelValue":r[6]||(r[6]=i=>E.type=i)},{default:e(()=>[o(u,{label:"Online activities",name:"type"}),o(u,{label:"Promotion activities",name:"type"}),o(u,{label:"Offline activities",name:"type"}),o(u,{label:"Simple brand exposure",name:"type"})]),_:1},8,["modelValue"])]),_:1}),o(m,{label:"Resources",prop:"resource"},{default:e(()=>[o(U,{modelValue:E.resource,"onUpdate:modelValue":r[7]||(r[7]=i=>E.resource=i)},{default:e(()=>[o(D,{label:"Sponsorship"}),o(D,{label:"Venue"})]),_:1},8,["modelValue"])]),_:1}),o(m,{label:"Activity form",prop:"desc"},{default:e(()=>[o(n,{modelValue:E.desc,"onUpdate:modelValue":r[8]||(r[8]=i=>E.desc=i),type:"textarea"},null,8,["modelValue"])]),_:1}),o(m,null,{default:e(()=>[o(h,{type:"primary",onClick:r[9]||(r[9]=i=>d(F.value))},{default:e(()=>[s(" Create ")]),_:1}),o(h,{onClick:r[10]||(r[10]=i=>f(F.value))},{default:e(()=>[s("Reset")]),_:1})]),_:1})]),_:1},8,["model","rules","size"])}}}),N=l("div",{style:{margin:"20px"}},null,-1),Z=_({__name:"form.md.demo.012cade6",setup(v){const a=A({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),F=B("right");return(E,t)=>{const d=y("el-radio-button"),f=y("el-radio-group"),c=y("el-input"),p=y("el-form-item"),r=y("el-pro-form");return b(),V(T,null,[o(f,{modelValue:F.value,"onUpdate:modelValue":t[0]||(t[0]=n=>F.value=n),label:"label position"},{default:e(()=>[o(d,{label:"left"},{default:e(()=>[s("Left")]),_:1}),o(d,{label:"right"},{default:e(()=>[s("Right")]),_:1}),o(d,{label:"top"},{default:e(()=>[s("Top")]),_:1})]),_:1},8,["modelValue"]),N,o(r,{model:a,"label-position":F.value,"label-width":"120px",col:""},{default:e(()=>[o(p,{label:"Activity name"},{default:e(()=>[o(c,{modelValue:a.name,"onUpdate:modelValue":t[1]||(t[1]=n=>a.name=n)},null,8,["modelValue"])]),_:1}),o(p,{label:"Activity name"},{default:e(()=>[o(c,{modelValue:a.name,"onUpdate:modelValue":t[2]||(t[2]=n=>a.name=n)},null,8,["modelValue"])]),_:1}),o(p,{label:"Activity name"},{default:e(()=>[o(c,{modelValue:a.name,"onUpdate:modelValue":t[3]||(t[3]=n=>a.name=n)},null,8,["modelValue"])]),_:1}),o(p,{label:"Activity name"},{default:e(()=>[o(c,{modelValue:a.name,"onUpdate:modelValue":t[4]||(t[4]=n=>a.name=n)},null,8,["modelValue"])]),_:1}),o(p,{label:"Activity name",col:"3"},{default:e(()=>[o(c,{modelValue:a.name,"onUpdate:modelValue":t[5]||(t[5]=n=>a.name=n)},null,8,["modelValue"])]),_:1}),o(p,{label:"Activity name",col:"3"},{default:e(()=>[o(c,{modelValue:a.name,"onUpdate:modelValue":t[6]||(t[6]=n=>a.name=n)},null,8,["modelValue"])]),_:1}),o(p,{label:"Activity name",col:"3"},{default:e(()=>[o(c,{modelValue:a.name,"onUpdate:modelValue":t[7]||(t[7]=n=>a.name=n)},null,8,["modelValue"])]),_:1}),o(p,{label:"Activity name",col:"3"},{default:e(()=>[o(c,{modelValue:a.name,"onUpdate:modelValue":t[8]||(t[8]=n=>a.name=n)},null,8,["modelValue"])]),_:1}),o(p,{label:"Activity name",col:"3"},{default:e(()=>[o(c,{modelValue:a.name,"onUpdate:modelValue":t[9]||(t[9]=n=>a.name=n)},null,8,["modelValue"])]),_:1}),o(p,{label:"Activity name",col:"3"},{default:e(()=>[o(c,{modelValue:a.name,"onUpdate:modelValue":t[10]||(t[10]=n=>a.name=n)},null,8,["modelValue"])]),_:1}),o(p,{label:"Activity name",col:"3"},{default:e(()=>[o(c,{modelValue:a.name,"onUpdate:modelValue":t[11]||(t[11]=n=>a.name=n)},null,8,["modelValue"])]),_:1}),o(p,{label:"Activity name",col:"3"},{default:e(()=>[o(c,{modelValue:a.name,"onUpdate:modelValue":t[12]||(t[12]=n=>a.name=n)},null,8,["modelValue"])]),_:1}),o(p,{label:"Activity name",col:"4"},{default:e(()=>[o(c,{modelValue:a.name,"onUpdate:modelValue":t[13]||(t[13]=n=>a.name=n)},null,8,["modelValue"])]),_:1}),o(p,{label:"Activity name",col:"4"},{default:e(()=>[o(c,{modelValue:a.name,"onUpdate:modelValue":t[14]||(t[14]=n=>a.name=n)},null,8,["modelValue"])]),_:1}),o(p,{label:"Activity name",col:"4"},{default:e(()=>[o(c,{modelValue:a.name,"onUpdate:modelValue":t[15]||(t[15]=n=>a.name=n)},null,8,["modelValue"])]),_:1}),o(p,{label:"Activity name",col:"4"},{default:e(()=>[o(c,{modelValue:a.name,"onUpdate:modelValue":t[16]||(t[16]=n=>a.name=n)},null,8,["modelValue"])]),_:1}),o(p,{label:"Activity name",col:"4"},{default:e(()=>[o(c,{modelValue:a.name,"onUpdate:modelValue":t[17]||(t[17]=n=>a.name=n)},null,8,["modelValue"])]),_:1}),o(p,{label:"Activity name",col:"4"},{default:e(()=>[o(c,{modelValue:a.name,"onUpdate:modelValue":t[18]||(t[18]=n=>a.name=n)},null,8,["modelValue"])]),_:1}),o(p,{label:"Activity name",col:"6"},{default:e(()=>[o(c,{modelValue:a.name,"onUpdate:modelValue":t[19]||(t[19]=n=>a.name=n)},null,8,["modelValue"])]),_:1}),o(p,{label:"Activity name",col:"6"},{default:e(()=>[o(c,{modelValue:a.name,"onUpdate:modelValue":t[20]||(t[20]=n=>a.name=n)},null,8,["modelValue"])]),_:1}),o(p,{label:"Activity name",col:"6"},{default:e(()=>[o(c,{modelValue:a.name,"onUpdate:modelValue":t[21]||(t[21]=n=>a.name=n)},null,8,["modelValue"])]),_:1}),o(p,{label:"Activity name",col:"6"},{default:e(()=>[o(c,{modelValue:a.name,"onUpdate:modelValue":t[22]||(t[22]=n=>a.name=n)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","label-position"])],64)}}}),H=l("h1",{id:"form-表单",tabindex:"-1"},[s("Form 表单 "),l("a",{class:"header-anchor",href:"#form-表单","aria-label":'Permalink to "Form 表单"'},"​")],-1),j=l("p",null,"编辑表单右边最宽436px、el-form-item支持col控制分栏数",-1),J=l("h2",{id:"普通表单展示",tabindex:"-1"},[s("普通表单展示 "),l("a",{class:"header-anchor",href:"#普通表单展示","aria-label":'Permalink to "普通表单展示"'},"​")],-1),M=l("p",null,"设置右边最宽436px",-1),K=l("div",{class:"language-vue vp-adaptive-theme"},[l("span",{class:"lang"},"vue"),l("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"lang"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"ts"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"setup"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"import"),l("span",{style:{color:"#E1E4E8"}}," { reactive, ref } "),l("span",{style:{color:"#F97583"}},"from"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#9ECBFF"}},"'vue'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"import"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"type"),l("span",{style:{color:"#E1E4E8"}}," { FormInstance, FormRules } "),l("span",{style:{color:"#F97583"}},"from"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#9ECBFF"}},"'element-plus'")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"interface"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"RuleForm"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  "),l("span",{style:{color:"#FFAB70"}},"name"),l("span",{style:{color:"#F97583"}},":"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"string")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  "),l("span",{style:{color:"#FFAB70"}},"region"),l("span",{style:{color:"#F97583"}},":"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"string")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  "),l("span",{style:{color:"#FFAB70"}},"count"),l("span",{style:{color:"#F97583"}},":"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"string")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  "),l("span",{style:{color:"#FFAB70"}},"date1"),l("span",{style:{color:"#F97583"}},":"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"string")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  "),l("span",{style:{color:"#FFAB70"}},"date2"),l("span",{style:{color:"#F97583"}},":"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"string")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  "),l("span",{style:{color:"#FFAB70"}},"delivery"),l("span",{style:{color:"#F97583"}},":"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"boolean")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  "),l("span",{style:{color:"#FFAB70"}},"type"),l("span",{style:{color:"#F97583"}},":"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"string"),l("span",{style:{color:"#E1E4E8"}},"[]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  "),l("span",{style:{color:"#FFAB70"}},"resource"),l("span",{style:{color:"#F97583"}},":"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"string")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  "),l("span",{style:{color:"#FFAB70"}},"desc"),l("span",{style:{color:"#F97583"}},":"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"string")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"formSize"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"ref"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'default'"),l("span",{style:{color:"#E1E4E8"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"ruleFormRef"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"ref"),l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#B392F0"}},"FormInstance"),l("span",{style:{color:"#E1E4E8"}},">()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"ruleForm"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"reactive"),l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#B392F0"}},"RuleForm"),l("span",{style:{color:"#E1E4E8"}},">({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  name: "),l("span",{style:{color:"#9ECBFF"}},"'Hello'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  region: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  count: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  date1: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  date2: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  delivery: "),l("span",{style:{color:"#79B8FF"}},"false"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  type: [],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  resource: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  desc: "),l("span",{style:{color:"#9ECBFF"}},"''"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"})")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"rules"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"reactive"),l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#B392F0"}},"FormRules"),l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#B392F0"}},"RuleForm"),l("span",{style:{color:"#E1E4E8"}},">>({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  name: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    { required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", message: "),l("span",{style:{color:"#9ECBFF"}},"'Please input Activity name'"),l("span",{style:{color:"#E1E4E8"}},", trigger: "),l("span",{style:{color:"#9ECBFF"}},"'blur'"),l("span",{style:{color:"#E1E4E8"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    { min: "),l("span",{style:{color:"#79B8FF"}},"3"),l("span",{style:{color:"#E1E4E8"}},", max: "),l("span",{style:{color:"#79B8FF"}},"5"),l("span",{style:{color:"#E1E4E8"}},", message: "),l("span",{style:{color:"#9ECBFF"}},"'Length should be 3 to 5'"),l("span",{style:{color:"#E1E4E8"}},", trigger: "),l("span",{style:{color:"#9ECBFF"}},"'blur'"),l("span",{style:{color:"#E1E4E8"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  region: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      message: "),l("span",{style:{color:"#9ECBFF"}},"'Please select Activity zone'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      trigger: "),l("span",{style:{color:"#9ECBFF"}},"'change'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  count: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      message: "),l("span",{style:{color:"#9ECBFF"}},"'Please select Activity count'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      trigger: "),l("span",{style:{color:"#9ECBFF"}},"'change'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  date1: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      type: "),l("span",{style:{color:"#9ECBFF"}},"'date'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      message: "),l("span",{style:{color:"#9ECBFF"}},"'Please pick a date'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      trigger: "),l("span",{style:{color:"#9ECBFF"}},"'change'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  date2: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      type: "),l("span",{style:{color:"#9ECBFF"}},"'date'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      message: "),l("span",{style:{color:"#9ECBFF"}},"'Please pick a time'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      trigger: "),l("span",{style:{color:"#9ECBFF"}},"'change'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  type: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      type: "),l("span",{style:{color:"#9ECBFF"}},"'array'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      message: "),l("span",{style:{color:"#9ECBFF"}},"'Please select at least one activity type'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      trigger: "),l("span",{style:{color:"#9ECBFF"}},"'change'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  resource: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      message: "),l("span",{style:{color:"#9ECBFF"}},"'Please select activity resource'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      trigger: "),l("span",{style:{color:"#9ECBFF"}},"'change'"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  desc: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    { required: "),l("span",{style:{color:"#79B8FF"}},"true"),l("span",{style:{color:"#E1E4E8"}},", message: "),l("span",{style:{color:"#9ECBFF"}},"'Please input activity form'"),l("span",{style:{color:"#E1E4E8"}},", trigger: "),l("span",{style:{color:"#9ECBFF"}},"'blur'"),l("span",{style:{color:"#E1E4E8"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"})")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"submitForm"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"async"),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#FFAB70"}},"formEl"),l("span",{style:{color:"#F97583"}},":"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"FormInstance"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"|"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"undefined"),l("span",{style:{color:"#E1E4E8"}},") "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  "),l("span",{style:{color:"#F97583"}},"if"),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#F97583"}},"!"),l("span",{style:{color:"#E1E4E8"}},"formEl) "),l("span",{style:{color:"#F97583"}},"return")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  "),l("span",{style:{color:"#F97583"}},"await"),l("span",{style:{color:"#E1E4E8"}}," formEl."),l("span",{style:{color:"#B392F0"}},"validate"),l("span",{style:{color:"#E1E4E8"}},"(("),l("span",{style:{color:"#FFAB70"}},"valid"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#FFAB70"}},"fields"),l("span",{style:{color:"#E1E4E8"}},") "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#F97583"}},"if"),l("span",{style:{color:"#E1E4E8"}}," (valid) {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      console."),l("span",{style:{color:"#B392F0"}},"log"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'submit!'"),l("span",{style:{color:"#E1E4E8"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    } "),l("span",{style:{color:"#F97583"}},"else"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      console."),l("span",{style:{color:"#B392F0"}},"log"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'error submit!'"),l("span",{style:{color:"#E1E4E8"}},", fields)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  })")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"resetForm"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#FFAB70"}},"formEl"),l("span",{style:{color:"#F97583"}},":"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"FormInstance"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"|"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"undefined"),l("span",{style:{color:"#E1E4E8"}},") "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  "),l("span",{style:{color:"#F97583"}},"if"),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#F97583"}},"!"),l("span",{style:{color:"#E1E4E8"}},"formEl) "),l("span",{style:{color:"#F97583"}},"return")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  formEl."),l("span",{style:{color:"#B392F0"}},"resetFields"),l("span",{style:{color:"#E1E4E8"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"options"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," Array."),l("span",{style:{color:"#B392F0"}},"from"),l("span",{style:{color:"#E1E4E8"}},"({ length: "),l("span",{style:{color:"#79B8FF"}},"10000"),l("span",{style:{color:"#E1E4E8"}}," })."),l("span",{style:{color:"#B392F0"}},"map"),l("span",{style:{color:"#E1E4E8"}},"(("),l("span",{style:{color:"#FFAB70"}},"_"),l("span",{style:{color:"#E1E4E8"}},", "),l("span",{style:{color:"#FFAB70"}},"idx"),l("span",{style:{color:"#E1E4E8"}},") "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," ({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  value: "),l("span",{style:{color:"#9ECBFF"}},"`${"),l("span",{style:{color:"#E1E4E8"}},"idx"),l("span",{style:{color:"#9ECBFF"}}," "),l("span",{style:{color:"#F97583"}},"+"),l("span",{style:{color:"#9ECBFF"}}," "),l("span",{style:{color:"#79B8FF"}},"1"),l("span",{style:{color:"#9ECBFF"}},"}`"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  label: "),l("span",{style:{color:"#9ECBFF"}},"`${"),l("span",{style:{color:"#E1E4E8"}},"idx"),l("span",{style:{color:"#9ECBFF"}}," "),l("span",{style:{color:"#F97583"}},"+"),l("span",{style:{color:"#9ECBFF"}}," "),l("span",{style:{color:"#79B8FF"}},"1"),l("span",{style:{color:"#9ECBFF"}},"}`"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"}))")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"el-pro-form")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#B392F0"}},"ref"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"ruleFormRef"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#B392F0"}},":model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"ruleForm"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#B392F0"}},":rules"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"rules"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#B392F0"}},"label-width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"120px"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#B392F0"}},"class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"demo-ruleForm"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#B392F0"}},":size"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"formSize"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#B392F0"}},"status-icon")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  >")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity name"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"name"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"ruleForm.name"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity zone"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"region"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-select"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"ruleForm.region"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity zone"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"el-option"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Zone one"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"shanghai"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"el-option"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Zone two"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"value"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"beijing"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      </"),l("span",{style:{color:"#85E89D"}},"el-select"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity count"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"count"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-select-v2")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"ruleForm.count"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        "),l("span",{style:{color:"#B392F0"}},"placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity count"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        "),l("span",{style:{color:"#B392F0"}},":options"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"options"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity time"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"required"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-col"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},":span"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"11"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"date1"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"          <"),l("span",{style:{color:"#85E89D"}},"el-date-picker")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"ruleForm.date1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            "),l("span",{style:{color:"#B392F0"}},"type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"date"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Pick a date"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            "),l("span",{style:{color:"#B392F0"}},"placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Pick a date"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            "),l("span",{style:{color:"#B392F0"}},"style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 100%"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"          />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      </"),l("span",{style:{color:"#85E89D"}},"el-col"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-col"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"text-center"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},":span"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"span"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"text-gray-500"'),l("span",{style:{color:"#E1E4E8"}},">-</"),l("span",{style:{color:"#85E89D"}},"span"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      </"),l("span",{style:{color:"#85E89D"}},"el-col"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-col"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},":span"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"11"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"date2"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"          <"),l("span",{style:{color:"#85E89D"}},"el-time-picker")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"ruleForm.date2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Pick a time"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            "),l("span",{style:{color:"#B392F0"}},"placeholder"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Pick a time"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"            "),l("span",{style:{color:"#B392F0"}},"style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"width: 100%"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"          />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      </"),l("span",{style:{color:"#85E89D"}},"el-col"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Instant delivery"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"delivery"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-switch"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"ruleForm.delivery"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity type"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"type"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-checkbox-group"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"ruleForm.type"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"el-checkbox"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Online activities"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"name"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"type"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"el-checkbox"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Promotion activities"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"name"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"type"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"el-checkbox"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Offline activities"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"name"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"type"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"el-checkbox"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Simple brand exposure"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"name"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"type"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      </"),l("span",{style:{color:"#85E89D"}},"el-checkbox-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Resources"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"resource"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-radio-group"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"ruleForm.resource"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"el-radio"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Sponsorship"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"el-radio"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Venue"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      </"),l("span",{style:{color:"#85E89D"}},"el-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity form"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"prop"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"desc"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"ruleForm.desc"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"textarea"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"primary"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"submitForm(ruleFormRef)"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        Create")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      </"),l("span",{style:{color:"#85E89D"}},"el-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"resetForm(ruleFormRef)"'),l("span",{style:{color:"#E1E4E8"}},">Reset</"),l("span",{style:{color:"#85E89D"}},"el-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  </"),l("span",{style:{color:"#85E89D"}},"el-pro-form"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")])])]),l("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"lang"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"ts"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"setup"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"import"),l("span",{style:{color:"#24292E"}}," { reactive, ref } "),l("span",{style:{color:"#D73A49"}},"from"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"'vue'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"import"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"type"),l("span",{style:{color:"#24292E"}}," { FormInstance, FormRules } "),l("span",{style:{color:"#D73A49"}},"from"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"'element-plus'")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"interface"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"RuleForm"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#E36209"}},"name"),l("span",{style:{color:"#D73A49"}},":"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"string")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#E36209"}},"region"),l("span",{style:{color:"#D73A49"}},":"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"string")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#E36209"}},"count"),l("span",{style:{color:"#D73A49"}},":"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"string")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#E36209"}},"date1"),l("span",{style:{color:"#D73A49"}},":"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"string")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#E36209"}},"date2"),l("span",{style:{color:"#D73A49"}},":"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"string")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#E36209"}},"delivery"),l("span",{style:{color:"#D73A49"}},":"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"boolean")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#E36209"}},"type"),l("span",{style:{color:"#D73A49"}},":"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"string"),l("span",{style:{color:"#24292E"}},"[]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#E36209"}},"resource"),l("span",{style:{color:"#D73A49"}},":"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"string")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#E36209"}},"desc"),l("span",{style:{color:"#D73A49"}},":"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"string")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"formSize"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"ref"),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#032F62"}},"'default'"),l("span",{style:{color:"#24292E"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"ruleFormRef"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"ref"),l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#6F42C1"}},"FormInstance"),l("span",{style:{color:"#24292E"}},">()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"ruleForm"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"reactive"),l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#6F42C1"}},"RuleForm"),l("span",{style:{color:"#24292E"}},">({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  name: "),l("span",{style:{color:"#032F62"}},"'Hello'"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  region: "),l("span",{style:{color:"#032F62"}},"''"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  count: "),l("span",{style:{color:"#032F62"}},"''"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  date1: "),l("span",{style:{color:"#032F62"}},"''"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  date2: "),l("span",{style:{color:"#032F62"}},"''"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  delivery: "),l("span",{style:{color:"#005CC5"}},"false"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  type: [],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  resource: "),l("span",{style:{color:"#032F62"}},"''"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  desc: "),l("span",{style:{color:"#032F62"}},"''"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"})")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"rules"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"reactive"),l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#6F42C1"}},"FormRules"),l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#6F42C1"}},"RuleForm"),l("span",{style:{color:"#24292E"}},">>({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  name: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    { required: "),l("span",{style:{color:"#005CC5"}},"true"),l("span",{style:{color:"#24292E"}},", message: "),l("span",{style:{color:"#032F62"}},"'Please input Activity name'"),l("span",{style:{color:"#24292E"}},", trigger: "),l("span",{style:{color:"#032F62"}},"'blur'"),l("span",{style:{color:"#24292E"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    { min: "),l("span",{style:{color:"#005CC5"}},"3"),l("span",{style:{color:"#24292E"}},", max: "),l("span",{style:{color:"#005CC5"}},"5"),l("span",{style:{color:"#24292E"}},", message: "),l("span",{style:{color:"#032F62"}},"'Length should be 3 to 5'"),l("span",{style:{color:"#24292E"}},", trigger: "),l("span",{style:{color:"#032F62"}},"'blur'"),l("span",{style:{color:"#24292E"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  region: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      required: "),l("span",{style:{color:"#005CC5"}},"true"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      message: "),l("span",{style:{color:"#032F62"}},"'Please select Activity zone'"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      trigger: "),l("span",{style:{color:"#032F62"}},"'change'"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  count: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      required: "),l("span",{style:{color:"#005CC5"}},"true"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      message: "),l("span",{style:{color:"#032F62"}},"'Please select Activity count'"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      trigger: "),l("span",{style:{color:"#032F62"}},"'change'"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  date1: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      type: "),l("span",{style:{color:"#032F62"}},"'date'"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      required: "),l("span",{style:{color:"#005CC5"}},"true"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      message: "),l("span",{style:{color:"#032F62"}},"'Please pick a date'"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      trigger: "),l("span",{style:{color:"#032F62"}},"'change'"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  date2: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      type: "),l("span",{style:{color:"#032F62"}},"'date'"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      required: "),l("span",{style:{color:"#005CC5"}},"true"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      message: "),l("span",{style:{color:"#032F62"}},"'Please pick a time'"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      trigger: "),l("span",{style:{color:"#032F62"}},"'change'"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  type: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      type: "),l("span",{style:{color:"#032F62"}},"'array'"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      required: "),l("span",{style:{color:"#005CC5"}},"true"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      message: "),l("span",{style:{color:"#032F62"}},"'Please select at least one activity type'"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      trigger: "),l("span",{style:{color:"#032F62"}},"'change'"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  resource: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      required: "),l("span",{style:{color:"#005CC5"}},"true"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      message: "),l("span",{style:{color:"#032F62"}},"'Please select activity resource'"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      trigger: "),l("span",{style:{color:"#032F62"}},"'change'"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  desc: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    { required: "),l("span",{style:{color:"#005CC5"}},"true"),l("span",{style:{color:"#24292E"}},", message: "),l("span",{style:{color:"#032F62"}},"'Please input activity form'"),l("span",{style:{color:"#24292E"}},", trigger: "),l("span",{style:{color:"#032F62"}},"'blur'"),l("span",{style:{color:"#24292E"}}," },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"})")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"submitForm"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"async"),l("span",{style:{color:"#24292E"}}," ("),l("span",{style:{color:"#E36209"}},"formEl"),l("span",{style:{color:"#D73A49"}},":"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"FormInstance"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"|"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"undefined"),l("span",{style:{color:"#24292E"}},") "),l("span",{style:{color:"#D73A49"}},"=>"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#D73A49"}},"if"),l("span",{style:{color:"#24292E"}}," ("),l("span",{style:{color:"#D73A49"}},"!"),l("span",{style:{color:"#24292E"}},"formEl) "),l("span",{style:{color:"#D73A49"}},"return")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#D73A49"}},"await"),l("span",{style:{color:"#24292E"}}," formEl."),l("span",{style:{color:"#6F42C1"}},"validate"),l("span",{style:{color:"#24292E"}},"(("),l("span",{style:{color:"#E36209"}},"valid"),l("span",{style:{color:"#24292E"}},", "),l("span",{style:{color:"#E36209"}},"fields"),l("span",{style:{color:"#24292E"}},") "),l("span",{style:{color:"#D73A49"}},"=>"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#D73A49"}},"if"),l("span",{style:{color:"#24292E"}}," (valid) {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      console."),l("span",{style:{color:"#6F42C1"}},"log"),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#032F62"}},"'submit!'"),l("span",{style:{color:"#24292E"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    } "),l("span",{style:{color:"#D73A49"}},"else"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      console."),l("span",{style:{color:"#6F42C1"}},"log"),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#032F62"}},"'error submit!'"),l("span",{style:{color:"#24292E"}},", fields)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  })")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"resetForm"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," ("),l("span",{style:{color:"#E36209"}},"formEl"),l("span",{style:{color:"#D73A49"}},":"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"FormInstance"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"|"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"undefined"),l("span",{style:{color:"#24292E"}},") "),l("span",{style:{color:"#D73A49"}},"=>"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#D73A49"}},"if"),l("span",{style:{color:"#24292E"}}," ("),l("span",{style:{color:"#D73A49"}},"!"),l("span",{style:{color:"#24292E"}},"formEl) "),l("span",{style:{color:"#D73A49"}},"return")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  formEl."),l("span",{style:{color:"#6F42C1"}},"resetFields"),l("span",{style:{color:"#24292E"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"options"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," Array."),l("span",{style:{color:"#6F42C1"}},"from"),l("span",{style:{color:"#24292E"}},"({ length: "),l("span",{style:{color:"#005CC5"}},"10000"),l("span",{style:{color:"#24292E"}}," })."),l("span",{style:{color:"#6F42C1"}},"map"),l("span",{style:{color:"#24292E"}},"(("),l("span",{style:{color:"#E36209"}},"_"),l("span",{style:{color:"#24292E"}},", "),l("span",{style:{color:"#E36209"}},"idx"),l("span",{style:{color:"#24292E"}},") "),l("span",{style:{color:"#D73A49"}},"=>"),l("span",{style:{color:"#24292E"}}," ({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  value: "),l("span",{style:{color:"#032F62"}},"`${"),l("span",{style:{color:"#24292E"}},"idx"),l("span",{style:{color:"#032F62"}}," "),l("span",{style:{color:"#D73A49"}},"+"),l("span",{style:{color:"#032F62"}}," "),l("span",{style:{color:"#005CC5"}},"1"),l("span",{style:{color:"#032F62"}},"}`"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  label: "),l("span",{style:{color:"#032F62"}},"`${"),l("span",{style:{color:"#24292E"}},"idx"),l("span",{style:{color:"#032F62"}}," "),l("span",{style:{color:"#D73A49"}},"+"),l("span",{style:{color:"#032F62"}}," "),l("span",{style:{color:"#005CC5"}},"1"),l("span",{style:{color:"#032F62"}},"}`"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"}))")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"el-pro-form")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#6F42C1"}},"ref"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"ruleFormRef"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#6F42C1"}},":model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"ruleForm"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#6F42C1"}},":rules"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"rules"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#6F42C1"}},"label-width"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"120px"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#6F42C1"}},"class"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"demo-ruleForm"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#6F42C1"}},":size"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"formSize"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#6F42C1"}},"status-icon")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  >")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity name"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"prop"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"name"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"ruleForm.name"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity zone"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"prop"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"region"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-select"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"ruleForm.region"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"placeholder"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity zone"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"el-option"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Zone one"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"value"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"shanghai"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"el-option"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Zone two"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"value"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"beijing"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      </"),l("span",{style:{color:"#22863A"}},"el-select"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity count"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"prop"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"count"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-select-v2")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"ruleForm.count"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        "),l("span",{style:{color:"#6F42C1"}},"placeholder"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity count"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        "),l("span",{style:{color:"#6F42C1"}},":options"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"options"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity time"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"required"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-col"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},":span"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"11"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"prop"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"date1"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"          <"),l("span",{style:{color:"#22863A"}},"el-date-picker")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"            "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"ruleForm.date1"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"            "),l("span",{style:{color:"#6F42C1"}},"type"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"date"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"            "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Pick a date"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"            "),l("span",{style:{color:"#6F42C1"}},"placeholder"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Pick a date"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"            "),l("span",{style:{color:"#6F42C1"}},"style"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"width: 100%"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"          />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      </"),l("span",{style:{color:"#22863A"}},"el-col"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-col"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"class"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"text-center"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},":span"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"2"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"span"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"class"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"text-gray-500"'),l("span",{style:{color:"#24292E"}},">-</"),l("span",{style:{color:"#22863A"}},"span"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      </"),l("span",{style:{color:"#22863A"}},"el-col"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-col"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},":span"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"11"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"prop"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"date2"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"          <"),l("span",{style:{color:"#22863A"}},"el-time-picker")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"            "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"ruleForm.date2"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"            "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Pick a time"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"            "),l("span",{style:{color:"#6F42C1"}},"placeholder"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Pick a time"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"            "),l("span",{style:{color:"#6F42C1"}},"style"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"width: 100%"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"          />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      </"),l("span",{style:{color:"#22863A"}},"el-col"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Instant delivery"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"prop"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"delivery"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-switch"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"ruleForm.delivery"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity type"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"prop"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"type"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-checkbox-group"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"ruleForm.type"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"el-checkbox"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Online activities"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"name"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"type"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"el-checkbox"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Promotion activities"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"name"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"type"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"el-checkbox"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Offline activities"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"name"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"type"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"el-checkbox"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Simple brand exposure"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"name"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"type"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      </"),l("span",{style:{color:"#22863A"}},"el-checkbox-group"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Resources"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"prop"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"resource"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-radio-group"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"ruleForm.resource"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"el-radio"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Sponsorship"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"el-radio"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Venue"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      </"),l("span",{style:{color:"#22863A"}},"el-radio-group"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity form"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"prop"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"desc"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"ruleForm.desc"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"type"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"textarea"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"type"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"primary"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"submitForm(ruleFormRef)"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        Create")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      </"),l("span",{style:{color:"#22863A"}},"el-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"resetForm(ruleFormRef)"'),l("span",{style:{color:"#24292E"}},">Reset</"),l("span",{style:{color:"#22863A"}},"el-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  </"),l("span",{style:{color:"#22863A"}},"el-pro-form"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")])])])],-1),G=l("h2",{id:"支持分栏",tabindex:"-1"},[s("支持分栏 "),l("a",{class:"header-anchor",href:"#支持分栏","aria-label":'Permalink to "支持分栏"'},"​")],-1),Q=l("ul",null,[l("li",null,[s("pro-form 设置 "),l("code",null,"col"),s("，el-form-item 自动分栏")]),l("li",null,[s("el-form-item 设置 "),l("code",null,"col"),s(" 优先级高于 "),l("code",null,"pro-form 的 col")])],-1),W=l("div",{class:"language-vue vp-adaptive-theme"},[l("span",{class:"lang"},"vue"),l("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"lang"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"ts"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"setup"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"import"),l("span",{style:{color:"#E1E4E8"}}," { reactive, ref } "),l("span",{style:{color:"#F97583"}},"from"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#9ECBFF"}},'"vue"'),l("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6A737D"}},"// do not use same name with ref")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"form"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"reactive"),l("span",{style:{color:"#E1E4E8"}},"({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  name: "),l("span",{style:{color:"#9ECBFF"}},'""'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  region: "),l("span",{style:{color:"#9ECBFF"}},'""'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  date1: "),l("span",{style:{color:"#9ECBFF"}},'""'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  date2: "),l("span",{style:{color:"#9ECBFF"}},'""'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  delivery: "),l("span",{style:{color:"#79B8FF"}},"false"),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  type: [],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  resource: "),l("span",{style:{color:"#9ECBFF"}},'""'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  desc: "),l("span",{style:{color:"#9ECBFF"}},'""'),l("span",{style:{color:"#E1E4E8"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"});")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"labelPosition"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"ref"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},"'right'"),l("span",{style:{color:"#E1E4E8"}},")")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"onSubmit"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," () "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  console."),l("span",{style:{color:"#B392F0"}},"log"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},'"submit!"'),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"el-radio-group"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"labelPosition"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"label position"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-radio-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"left"'),l("span",{style:{color:"#E1E4E8"}},">Left</"),l("span",{style:{color:"#85E89D"}},"el-radio-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-radio-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"right"'),l("span",{style:{color:"#E1E4E8"}},">Right</"),l("span",{style:{color:"#85E89D"}},"el-radio-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-radio-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"top"'),l("span",{style:{color:"#E1E4E8"}},">Top</"),l("span",{style:{color:"#85E89D"}},"el-radio-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  </"),l("span",{style:{color:"#85E89D"}},"el-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"margin: 20px"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#FDAEB7","font-style":"italic"}},"/"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"el-pro-form"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},":model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"form"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},":label-position"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"labelPosition"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label-width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"120px"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"col"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity name"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"form.name"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity name"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"form.name"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity name"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"form.name"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity name"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"form.name"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity name"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"col"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"form.name"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity name"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"col"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"form.name"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity name"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"col"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"form.name"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity name"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"col"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"form.name"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity name"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"col"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"form.name"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity name"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"col"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"form.name"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity name"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"col"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"form.name"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity name"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"col"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"form.name"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity name"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"col"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"4"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"form.name"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity name"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"col"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"4"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"form.name"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity name"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"col"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"4"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"form.name"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity name"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"col"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"4"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"form.name"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity name"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"col"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"4"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"form.name"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity name"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"col"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"4"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"form.name"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity name"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"col"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"6"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"form.name"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity name"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"col"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"6"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"form.name"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity name"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"col"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"6"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"form.name"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"Activity name"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"col"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"6"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"el-input"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"form.name"'),l("span",{style:{color:"#E1E4E8"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"el-form-item"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  </"),l("span",{style:{color:"#85E89D"}},"el-pro-form"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")])])]),l("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"lang"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"ts"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"setup"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"import"),l("span",{style:{color:"#24292E"}}," { reactive, ref } "),l("span",{style:{color:"#D73A49"}},"from"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},'"vue"'),l("span",{style:{color:"#24292E"}},";")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6A737D"}},"// do not use same name with ref")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"form"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"reactive"),l("span",{style:{color:"#24292E"}},"({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  name: "),l("span",{style:{color:"#032F62"}},'""'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  region: "),l("span",{style:{color:"#032F62"}},'""'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  date1: "),l("span",{style:{color:"#032F62"}},'""'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  date2: "),l("span",{style:{color:"#032F62"}},'""'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  delivery: "),l("span",{style:{color:"#005CC5"}},"false"),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  type: [],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  resource: "),l("span",{style:{color:"#032F62"}},'""'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  desc: "),l("span",{style:{color:"#032F62"}},'""'),l("span",{style:{color:"#24292E"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"});")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"labelPosition"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"ref"),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#032F62"}},"'right'"),l("span",{style:{color:"#24292E"}},")")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"onSubmit"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," () "),l("span",{style:{color:"#D73A49"}},"=>"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  console."),l("span",{style:{color:"#6F42C1"}},"log"),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#032F62"}},'"submit!"'),l("span",{style:{color:"#24292E"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"el-radio-group"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"labelPosition"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"label position"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-radio-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"left"'),l("span",{style:{color:"#24292E"}},">Left</"),l("span",{style:{color:"#22863A"}},"el-radio-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-radio-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"right"'),l("span",{style:{color:"#24292E"}},">Right</"),l("span",{style:{color:"#22863A"}},"el-radio-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-radio-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"top"'),l("span",{style:{color:"#24292E"}},">Top</"),l("span",{style:{color:"#22863A"}},"el-radio-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  </"),l("span",{style:{color:"#22863A"}},"el-radio-group"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"div"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"style"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"margin: 20px"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#B31D28","font-style":"italic"}},"/"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"el-pro-form"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},":model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"form"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},":label-position"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"labelPosition"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label-width"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"120px"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"col"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity name"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"form.name"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity name"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"form.name"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity name"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"form.name"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity name"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"form.name"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity name"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"col"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"3"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"form.name"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity name"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"col"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"3"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"form.name"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity name"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"col"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"3"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"form.name"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity name"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"col"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"3"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"form.name"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity name"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"col"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"3"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"form.name"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity name"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"col"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"3"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"form.name"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity name"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"col"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"3"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"form.name"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity name"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"col"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"3"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"form.name"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity name"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"col"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"4"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"form.name"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity name"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"col"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"4"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"form.name"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity name"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"col"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"4"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"form.name"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity name"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"col"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"4"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"form.name"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity name"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"col"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"4"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"form.name"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity name"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"col"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"4"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"form.name"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity name"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"col"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"6"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"form.name"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity name"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"col"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"6"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"form.name"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity name"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"col"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"6"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"form.name"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"Activity name"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"col"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"6"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"el-input"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"form.name"'),l("span",{style:{color:"#24292E"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"el-form-item"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  </"),l("span",{style:{color:"#22863A"}},"el-pro-form"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")])])])],-1),X=$(`<h2 id="form-api" tabindex="-1">Form API <a class="header-anchor" href="#form-api" aria-label="Permalink to &quot;Form API&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// false 不分栏</span></span>
<span class="line"><span style="color:#6A737D;">// true 子根据父宽度自动分栏</span></span>
<span class="line"><span style="color:#6A737D;">// number 设置指定的栏目, 12格拆分</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Col</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ColFn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">col</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">el</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HTMLElement</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ValidateFn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">callback</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FormValidateCallback</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Promise</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ResetFieldsFn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">props</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Arrayable</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">FormItemProp</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// false 不分栏</span></span>
<span class="line"><span style="color:#6A737D;">// true 子根据父宽度自动分栏</span></span>
<span class="line"><span style="color:#6A737D;">// number 设置指定的栏目, 12格拆分</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Col</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ColFn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">col</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">, </span><span style="color:#E36209;">el</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HTMLElement</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ValidateFn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">callback</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FormValidateCallback</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Promise</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">void</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ResetFieldsFn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">props</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Arrayable</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">FormItemProp</span><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span></span></code></pre></div><h3 id="form-attributes" tabindex="-1">Form Attributes <a class="header-anchor" href="#form-attributes" aria-label="Permalink to &quot;Form Attributes&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>col</td><td>设置分栏目</td><td><code>Col</code></td><td>—</td><td>12</td></tr></tbody></table><h3 id="form-event" tabindex="-1">Form Event <a class="header-anchor" href="#form-event" aria-label="Permalink to &quot;Form Event&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>col</td><td>设置col值</td><td><code>ColFn</code></td></tr></tbody></table><h3 id="form-exposes" tabindex="-1">Form Exposes <a class="header-anchor" href="#form-exposes" aria-label="Permalink to &quot;Form Exposes&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>validate</td><td>对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise。</td><td><code>ValidateFn</code></td></tr><tr><td>resetFields</td><td>重置该表单项，将其值重置为初始值，并移除校验结果</td><td><code>ResetFieldsFn</code></td></tr></tbody></table><h3 id="elformitem-attributes" tabindex="-1">ElFormItem Attributes <a class="header-anchor" href="#elformitem-attributes" aria-label="Permalink to &quot;ElFormItem Attributes&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>col</td><td>设置分栏目</td><td><code>Col</code></td><td>—</td><td>false</td></tr></tbody></table>`,10),sl=JSON.parse('{"title":"Form 表单","description":"","frontmatter":{},"headers":[],"relativePath":"components/form.md","filePath":"components/form.md","lastUpdated":1690372117000}'),Y={name:"components/form.md"},ol=Object.assign(Y,{setup(v){return(a,F)=>{const E=y("demo");return b(),V("div",null,[H,j,J,M,o(E,{customClass:"demoblock-custom",sourceCode:`<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
  name: string
  region: string
  count: string
  date1: string
  date2: string
  delivery: boolean
  type: string[]
  resource: string
  desc: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: 'Hello',
  region: '',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: \`\${idx + 1}\`,
  label: \`\${idx + 1}\`,
}))
<\/script>
<template>
  <el-pro-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
    <el-form-item label="Activity name" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="Activity zone" prop="region">
      <el-select v-model="ruleForm.region" placeholder="Activity zone">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="Activity count" prop="count">
      <el-select-v2
        v-model="ruleForm.count"
        placeholder="Activity count"
        :options="options"
      />
    </el-form-item>
    <el-form-item label="Activity time" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker
            v-model="ruleForm.date1"
            type="date"
            label="Pick a date"
            placeholder="Pick a date"
            style="width: 100%"
          />
        </el-form-item>
      </el-col>
      <el-col class="text-center" :span="2">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker
            v-model="ruleForm.date2"
            label="Pick a time"
            placeholder="Pick a time"
            style="width: 100%"
          />
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="Instant delivery" prop="delivery">
      <el-switch v-model="ruleForm.delivery" />
    </el-form-item>
    <el-form-item label="Activity type" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="Online activities" name="type" />
        <el-checkbox label="Promotion activities" name="type" />
        <el-checkbox label="Offline activities" name="type" />
        <el-checkbox label="Simple brand exposure" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="Resources" prop="resource">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="Sponsorship" />
        <el-radio label="Venue" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Activity form" prop="desc">
      <el-input v-model="ruleForm.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Create
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-pro-form>
</template>
`},{highlight:e(()=>[K]),default:e(()=>[o(O)]),_:1}),G,Q,o(E,{customClass:"demoblock-custom",sourceCode:`<script lang="ts" setup>
import { reactive, ref } from "vue";

// do not use same name with ref
const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});
const labelPosition = ref('right')

const onSubmit = () => {
  console.log("submit!");
};
<\/script>
<template>
  <el-radio-group v-model="labelPosition" label="label position">
    <el-radio-button label="left">Left</el-radio-button>
    <el-radio-button label="right">Right</el-radio-button>
    <el-radio-button label="top">Top</el-radio-button>
  </el-radio-group>
  <div style="margin: 20px" />
  <el-pro-form :model="form" :label-position="labelPosition" label-width="120px" col>
    <el-form-item label="Activity name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="3">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="3">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="3">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="3">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="3">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="3">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="3">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="3">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="4">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="4">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="4">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="4">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="4">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="4">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="6">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="6">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="6">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="6">
      <el-input v-model="form.name" />
    </el-form-item>
  </el-pro-form>
</template>
`},{highlight:e(()=>[W]),default:e(()=>[o(Z)]),_:1}),X])}}});export{sl as __pageData,ol as default};
