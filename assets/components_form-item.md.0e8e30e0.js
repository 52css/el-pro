import{a5 as v,a6 as _,u as g,d as M,M as i,v as D,C as S,O as F,E as m,N as I,L as l,b as x,F as s}from"./chunks/framework.cce1a99f.js";function C(B,n,p,t){return p||(p=()=>null),t||(t=null),v({type:B,payload:n,next:(y,u)=>{let a=p(y,u);return a?(a.parent=y,_(a)||(a=v(a)),a):null},parent:t})}const k=g({__name:"form-item.md.demo.0dcbd072",setup(B){const n=v({test1:"",test2:"test2-1",test3:["test3-1","test3-2"],test4:"test4-1"}),p=C("input",{label:"test1",prop:"test1",rules:[{required:!0,message:"test1不能为空",trigger:"blur"}]},o=>n[o.payload.prop]==="test1"?t:b),t=C("select",{label:"test2",prop:"test2",options:[{label:"test2-1",value:"test2-1"},{label:"test2-2",value:"test2-2"},{label:"test2-3",value:"test2-3"}]},o=>n[o.payload.prop]==="test2-2"?b:n[o.payload.prop]==="test2-3"?A:null),b=C("checkbox",{label:"test3",prop:"test3",options:[{label:"test3-1",value:"test3-1"},{label:"test3-2",value:"test3-2"},{label:"test3-3",value:"test3-3"}]},o=>n[o.payload.prop].includes("test3-1")?A:null),A=C("radio",{label:"test4",prop:"test4",options:[{label:"test4-1",value:"test4-1"},{label:"test4-2",value:"test4-2"},{label:"test4-3",value:"test4-3"}]});let y=p;const u=M(),a=(o,c)=>{const E={};let e=o,r;for(;e;){const{payload:f}=e;E[f.prop]=c[f.prop];const d=[];for(r=e,d.unshift(r);r=r.parent;)d.unshift(r);e=e.next(e,d)}return E},h=async o=>{o&&await o.validate((c,E)=>{if(c){const e=a(y,n);console.log("submit!",e)}else console.log("error submit!",E)})};return(o,c)=>{const E=i("el-pro-form-item"),e=i("el-button"),r=i("el-form-item"),f=i("el-pro-form");return D(),S(f,{ref_key:"formRef",ref:u,model:n,"label-width":"150px"},{default:F(()=>[m(E,{"form-state":I(y),"form-model":n},null,8,["form-state","form-model"]),m(r,null,{default:F(()=>[m(e,{type:"primary",onClick:c[0]||(c[0]=d=>h(u.value))},{default:F(()=>[l(" 获取model ")]),_:1})]),_:1})]),_:1},8,["model"])}}}),w=s("h1",{id:"formitem-表单项",tabindex:"-1"},[l("FormItem 表单项 "),s("a",{class:"header-anchor",href:"#formitem-表单项","aria-label":'Permalink to "FormItem 表单项"'},"​")],-1),R=s("h2",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),P=s("p",null,"动态表单组件，通过配置表单项，生成表单",-1),q=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { ref, reactive } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," {createFormItem} "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'../../src/components/el-pro-form-item/create-form-item.ts'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"type"),s("span",{style:{color:"#E1E4E8"}}," { FormInstance, FormRules } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'element-plus'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"formModel"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"reactive"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  test1: "),s("span",{style:{color:"#9ECBFF"}},"''"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  test2: "),s("span",{style:{color:"#9ECBFF"}},"'test2-1'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  test3: ["),s("span",{style:{color:"#9ECBFF"}},"'test3-1'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'test3-2'"),s("span",{style:{color:"#E1E4E8"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  test4: "),s("span",{style:{color:"#9ECBFF"}},"'test4-1'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"item1"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"createFormItem"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#9ECBFF"}},"'input'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    label: "),s("span",{style:{color:"#9ECBFF"}},"'test1'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    prop: "),s("span",{style:{color:"#9ECBFF"}},"'test1'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    rules: [{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      required: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      message: "),s("span",{style:{color:"#9ECBFF"}},"'test1不能为空'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      trigger: "),s("span",{style:{color:"#9ECBFF"}},"'blur'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  ("),s("span",{style:{color:"#FFAB70"}},"current"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," (formModel[current.payload.prop] "),s("span",{style:{color:"#F97583"}},"==="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'test1'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"?"),s("span",{style:{color:"#E1E4E8"}}," item2 "),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," item3)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"item2"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"createFormItem"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#9ECBFF"}},"'select'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    label: "),s("span",{style:{color:"#9ECBFF"}},"'test2'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    prop: "),s("span",{style:{color:"#9ECBFF"}},"'test2'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    options: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        label: "),s("span",{style:{color:"#9ECBFF"}},"'test2-1'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        value: "),s("span",{style:{color:"#9ECBFF"}},"'test2-1'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        label: "),s("span",{style:{color:"#9ECBFF"}},"'test2-2'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        value: "),s("span",{style:{color:"#9ECBFF"}},"'test2-2'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        label: "),s("span",{style:{color:"#9ECBFF"}},"'test2-3'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        value: "),s("span",{style:{color:"#9ECBFF"}},"'test2-3'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  ("),s("span",{style:{color:"#FFAB70"}},"current"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," (formModel[current.payload.prop] "),s("span",{style:{color:"#F97583"}},"==="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'test2-2'"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," item3")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    } "),s("span",{style:{color:"#F97583"}},"else"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," (formModel[current.payload.prop] "),s("span",{style:{color:"#F97583"}},"==="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'test2-3'"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," item4")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"null")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"item3"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"createFormItem"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#9ECBFF"}},"'checkbox'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    label: "),s("span",{style:{color:"#9ECBFF"}},"'test3'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    prop: "),s("span",{style:{color:"#9ECBFF"}},"'test3'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    options: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        label: "),s("span",{style:{color:"#9ECBFF"}},"'test3-1'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        value: "),s("span",{style:{color:"#9ECBFF"}},"'test3-1'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        label: "),s("span",{style:{color:"#9ECBFF"}},"'test3-2'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        value: "),s("span",{style:{color:"#9ECBFF"}},"'test3-2'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        label: "),s("span",{style:{color:"#9ECBFF"}},"'test3-3'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        value: "),s("span",{style:{color:"#9ECBFF"}},"'test3-3'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  ("),s("span",{style:{color:"#FFAB70"}},"current"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," formModel[current.payload.prop]."),s("span",{style:{color:"#B392F0"}},"includes"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'test3-1'"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"?"),s("span",{style:{color:"#E1E4E8"}}," item4 "),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"null")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"item4"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"createFormItem"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'radio'"),s("span",{style:{color:"#E1E4E8"}},", {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  label: "),s("span",{style:{color:"#9ECBFF"}},"'test4'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  prop: "),s("span",{style:{color:"#9ECBFF"}},"'test4'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  options: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      label: "),s("span",{style:{color:"#9ECBFF"}},"'test4-1'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      value: "),s("span",{style:{color:"#9ECBFF"}},"'test4-1'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      label: "),s("span",{style:{color:"#9ECBFF"}},"'test4-2'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      value: "),s("span",{style:{color:"#9ECBFF"}},"'test4-2'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      label: "),s("span",{style:{color:"#9ECBFF"}},"'test4-3'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      value: "),s("span",{style:{color:"#9ECBFF"}},"'test4-3'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," formState "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," item1;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"formRef"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"getFormModel"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"formState"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"formModel"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"model"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," {};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," current "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," formState;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," prevFormState;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"while"),s("span",{style:{color:"#E1E4E8"}},"(current) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," {"),s("span",{style:{color:"#79B8FF"}},"payload"),s("span",{style:{color:"#E1E4E8"}},"} "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," current")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    model[payload.prop] "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," formModel[payload.prop]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"acients"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," [];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    prevFormState "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," current")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    acients."),s("span",{style:{color:"#B392F0"}},"unshift"),s("span",{style:{color:"#E1E4E8"}},"(prevFormState);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"while"),s("span",{style:{color:"#E1E4E8"}}," ((prevFormState "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," prevFormState.parent)) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      acients."),s("span",{style:{color:"#B392F0"}},"unshift"),s("span",{style:{color:"#E1E4E8"}},"(prevFormState);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    current "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," current."),s("span",{style:{color:"#B392F0"}},"next"),s("span",{style:{color:"#E1E4E8"}},"(current, acients)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," model;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"submitForm"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"async"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"formEl"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"FormInstance"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"|"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"undefined"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#F97583"}},"!"),s("span",{style:{color:"#E1E4E8"}},"formEl) "),s("span",{style:{color:"#F97583"}},"return")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"await"),s("span",{style:{color:"#E1E4E8"}}," formEl."),s("span",{style:{color:"#B392F0"}},"validate"),s("span",{style:{color:"#E1E4E8"}},"(("),s("span",{style:{color:"#FFAB70"}},"valid"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"fields"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," (valid) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"model"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"getFormModel"),s("span",{style:{color:"#E1E4E8"}},"(formState, formModel)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'submit!'"),s("span",{style:{color:"#E1E4E8"}},", model)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    } "),s("span",{style:{color:"#F97583"}},"else"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'error submit!'"),s("span",{style:{color:"#E1E4E8"}},", fields)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"el-pro-form"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"formRef"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"formModel"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"label-width"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"150px"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"el-pro-form-item"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":form-state"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"formState"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":form-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"formModel"'),s("span",{style:{color:"#E1E4E8"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"el-form-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"el-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"primary"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"submitForm(formRef)"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        获取model")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      </"),s("span",{style:{color:"#85E89D"}},"el-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"el-form-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"el-pro-form"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { ref, reactive } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," {createFormItem} "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'../../src/components/el-pro-form-item/create-form-item.ts'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"type"),s("span",{style:{color:"#24292E"}}," { FormInstance, FormRules } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'element-plus'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"formModel"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"reactive"),s("span",{style:{color:"#24292E"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  test1: "),s("span",{style:{color:"#032F62"}},"''"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  test2: "),s("span",{style:{color:"#032F62"}},"'test2-1'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  test3: ["),s("span",{style:{color:"#032F62"}},"'test3-1'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'test3-2'"),s("span",{style:{color:"#24292E"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  test4: "),s("span",{style:{color:"#032F62"}},"'test4-1'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"item1"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"createFormItem"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#032F62"}},"'input'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    label: "),s("span",{style:{color:"#032F62"}},"'test1'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    prop: "),s("span",{style:{color:"#032F62"}},"'test1'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    rules: [{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      required: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      message: "),s("span",{style:{color:"#032F62"}},"'test1不能为空'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      trigger: "),s("span",{style:{color:"#032F62"}},"'blur'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  ("),s("span",{style:{color:"#E36209"}},"current"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," (formModel[current.payload.prop] "),s("span",{style:{color:"#D73A49"}},"==="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'test1'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"?"),s("span",{style:{color:"#24292E"}}," item2 "),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," item3)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"item2"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"createFormItem"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#032F62"}},"'select'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    label: "),s("span",{style:{color:"#032F62"}},"'test2'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    prop: "),s("span",{style:{color:"#032F62"}},"'test2'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    options: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        label: "),s("span",{style:{color:"#032F62"}},"'test2-1'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        value: "),s("span",{style:{color:"#032F62"}},"'test2-1'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        label: "),s("span",{style:{color:"#032F62"}},"'test2-2'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        value: "),s("span",{style:{color:"#032F62"}},"'test2-2'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        label: "),s("span",{style:{color:"#032F62"}},"'test2-3'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        value: "),s("span",{style:{color:"#032F62"}},"'test2-3'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  ("),s("span",{style:{color:"#E36209"}},"current"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," (formModel[current.payload.prop] "),s("span",{style:{color:"#D73A49"}},"==="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'test2-2'"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," item3")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    } "),s("span",{style:{color:"#D73A49"}},"else"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," (formModel[current.payload.prop] "),s("span",{style:{color:"#D73A49"}},"==="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'test2-3'"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," item4")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"null")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"item3"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"createFormItem"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#032F62"}},"'checkbox'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    label: "),s("span",{style:{color:"#032F62"}},"'test3'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    prop: "),s("span",{style:{color:"#032F62"}},"'test3'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    options: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        label: "),s("span",{style:{color:"#032F62"}},"'test3-1'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        value: "),s("span",{style:{color:"#032F62"}},"'test3-1'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        label: "),s("span",{style:{color:"#032F62"}},"'test3-2'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        value: "),s("span",{style:{color:"#032F62"}},"'test3-2'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        label: "),s("span",{style:{color:"#032F62"}},"'test3-3'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        value: "),s("span",{style:{color:"#032F62"}},"'test3-3'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  ("),s("span",{style:{color:"#E36209"}},"current"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," formModel[current.payload.prop]."),s("span",{style:{color:"#6F42C1"}},"includes"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'test3-1'"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"?"),s("span",{style:{color:"#24292E"}}," item4 "),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"null")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"item4"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"createFormItem"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'radio'"),s("span",{style:{color:"#24292E"}},", {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  label: "),s("span",{style:{color:"#032F62"}},"'test4'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  prop: "),s("span",{style:{color:"#032F62"}},"'test4'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  options: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      label: "),s("span",{style:{color:"#032F62"}},"'test4-1'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      value: "),s("span",{style:{color:"#032F62"}},"'test4-1'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      label: "),s("span",{style:{color:"#032F62"}},"'test4-2'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      value: "),s("span",{style:{color:"#032F62"}},"'test4-2'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      label: "),s("span",{style:{color:"#032F62"}},"'test4-3'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      value: "),s("span",{style:{color:"#032F62"}},"'test4-3'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," formState "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," item1;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"formRef"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"getFormModel"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"formState"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"formModel"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"model"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," {};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," current "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," formState;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," prevFormState;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"while"),s("span",{style:{color:"#24292E"}},"(current) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," {"),s("span",{style:{color:"#005CC5"}},"payload"),s("span",{style:{color:"#24292E"}},"} "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," current")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    model[payload.prop] "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," formModel[payload.prop]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"acients"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," [];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    prevFormState "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," current")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    acients."),s("span",{style:{color:"#6F42C1"}},"unshift"),s("span",{style:{color:"#24292E"}},"(prevFormState);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"while"),s("span",{style:{color:"#24292E"}}," ((prevFormState "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," prevFormState.parent)) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      acients."),s("span",{style:{color:"#6F42C1"}},"unshift"),s("span",{style:{color:"#24292E"}},"(prevFormState);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    current "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," current."),s("span",{style:{color:"#6F42C1"}},"next"),s("span",{style:{color:"#24292E"}},"(current, acients)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," model;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"submitForm"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"async"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"formEl"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"FormInstance"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"|"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"undefined"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#D73A49"}},"!"),s("span",{style:{color:"#24292E"}},"formEl) "),s("span",{style:{color:"#D73A49"}},"return")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"await"),s("span",{style:{color:"#24292E"}}," formEl."),s("span",{style:{color:"#6F42C1"}},"validate"),s("span",{style:{color:"#24292E"}},"(("),s("span",{style:{color:"#E36209"}},"valid"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"fields"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," (valid) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"model"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"getFormModel"),s("span",{style:{color:"#24292E"}},"(formState, formModel)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'submit!'"),s("span",{style:{color:"#24292E"}},", model)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    } "),s("span",{style:{color:"#D73A49"}},"else"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'error submit!'"),s("span",{style:{color:"#24292E"}},", fields)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"el-pro-form"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"formRef"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"formModel"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"label-width"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"150px"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"el-pro-form-item"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":form-state"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"formState"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":form-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"formModel"'),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"el-form-item"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"el-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"primary"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"submitForm(formRef)"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        获取model")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      </"),s("span",{style:{color:"#22863A"}},"el-button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"el-form-item"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"el-pro-form"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")])])])],-1),L=JSON.parse('{"title":"FormItem 表单项","description":"","frontmatter":{},"headers":[],"relativePath":"components/form-item.md","filePath":"components/form-item.md","lastUpdated":1696063817000}'),O={name:"components/form-item.md"},$=Object.assign(O,{setup(B){return(n,p)=>{const t=i("demo");return D(),x("div",null,[w,R,P,m(t,{customClass:"demoblock-custom",sourceCode:`<script lang="ts" setup>
import { ref, reactive } from 'vue'
import {createFormItem} from '../../src/components/el-pro-form-item/create-form-item.ts'
import type { FormInstance, FormRules } from 'element-plus'

const formModel = reactive({
  test1: '',
  test2: 'test2-1',
  test3: ['test3-1', 'test3-2'],
  test4: 'test4-1'
})
const item1 = createFormItem(
  'input',
  {
    label: 'test1',
    prop: 'test1',
    rules: [{
      required: true,
      message: 'test1不能为空',
      trigger: 'blur',
    }]
  },
  (current) => (formModel[current.payload.prop] === 'test1' ? item2 : item3)
)
const item2 = createFormItem(
  'select',
  {
    label: 'test2',
    prop: 'test2',
    options: [
      {
        label: 'test2-1',
        value: 'test2-1',
      },
      {
        label: 'test2-2',
        value: 'test2-2',
      },
      {
        label: 'test2-3',
        value: 'test2-3',
      },
    ],
  },
  (current) => {
    if (formModel[current.payload.prop] === 'test2-2') {
      return item3
    } else if (formModel[current.payload.prop] === 'test2-3') {
      return item4
    }
    return null
  }
)
const item3 = createFormItem(
  'checkbox',
  {
    label: 'test3',
    prop: 'test3',
    options: [
      {
        label: 'test3-1',
        value: 'test3-1',
      },
      {
        label: 'test3-2',
        value: 'test3-2',
      },
      {
        label: 'test3-3',
        value: 'test3-3',
      },
    ],
  },
  (current) => {
    return formModel[current.payload.prop].includes('test3-1') ? item4 : null
  }
)
const item4 = createFormItem('radio', {
  label: 'test4',
  prop: 'test4',
  options: [
    {
      label: 'test4-1',
      value: 'test4-1',
    },
    {
      label: 'test4-2',
      value: 'test4-2',
    },
    {
      label: 'test4-3',
      value: 'test4-3',
    },
  ],
})
let formState = item1;
const formRef = ref()
const getFormModel = (formState, formModel) =>  {
  const model = {};
  let current = formState;
  let prevFormState;

  while(current) {
    const {payload} = current
    model[payload.prop] = formModel[payload.prop]

    const acients = [];
    prevFormState = current

    acients.unshift(prevFormState);

    while ((prevFormState = prevFormState.parent)) {
      acients.unshift(prevFormState);
    }

    current = current.next(current, acients)
  }

  return model;
}
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      const model = getFormModel(formState, formModel)
      console.log('submit!', model)
    } else {
      console.log('error submit!', fields)
    }
  })
}
<\/script>
<template>
  <el-pro-form ref="formRef" :model="formModel" label-width="150px">
    <el-pro-form-item :form-state="formState" :form-model="formModel" />
    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">
        获取model
      </el-button>
    </el-form-item>
  </el-pro-form>
</template>
`},{highlight:F(()=>[q]),default:F(()=>[m(k)]),_:1})])}}});export{L as __pageData,$ as default};
