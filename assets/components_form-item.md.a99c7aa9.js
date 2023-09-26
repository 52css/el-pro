import{a5 as b,a6 as D,u as _,d as g,M as c,v as C,C as h,O as r,E as p,N as I,L as l,b as M,F as s}from"./chunks/framework.cce1a99f.js";function m(u,o,t,e){return t||(t=()=>null),e||(e=null),b({type:u,payload:o,next:(E,y)=>{let n=t(E,y);return n?(n.parent=E,D(n)||(n=b(n)),n):null},parent:e})}const k=_({__name:"form-item.md.demo.0dcbd072",setup(u){const o=b({test1:"",test2:"test2-1",test3:["test3-1","test3-2"],test4:"test4-1"}),t=m("input",{label:"test1",prop:"test1",rules:[{required:!0,message:"domain can not be null",trigger:"blur"}]},a=>o.test1==="test1"?e:f),e=m("select",{label:"test2",prop:"test2",options:[{label:"test2-1",value:"test2-1"},{label:"test2-2",value:"test2-2"},{label:"test2-3",value:"test2-3"}]},a=>o.test2==="test2-2"?f:o.test2==="test2-3"?d:null),f=m("checkbox",{label:"test3",prop:"test3",options:[{label:"test3-1",value:"test3-1"},{label:"test3-2",value:"test3-2"},{label:"test3-3",value:"test3-3"}]},a=>o.test3.includes("test3-1")?d:null),d=m("radio",{label:"test4",prop:"test4",options:[{label:"test4-1",value:"test4-1"},{label:"test4-2",value:"test4-2"},{label:"test4-3",value:"test4-3"}]});let E=t;const y=g(),n=async a=>{a&&await a.validate((i,F)=>{console.log(i?"submit!":"error submit!",F)})};return(a,i)=>{const F=c("el-pro-form-item"),B=c("el-button"),v=c("el-form-item"),A=c("el-pro-form");return C(),h(A,{ref_key:"formRef",ref:y,model:o},{default:r(()=>[p(F,{"form-state":I(E),"form-model":o},null,8,["form-state","form-model"]),p(v,null,{default:r(()=>[p(B,{type:"primary",onClick:i[0]||(i[0]=w=>n(y.value))},{default:r(()=>[l(" 获取model ")]),_:1})]),_:1})]),_:1},8,["model"])}}}),R=s("h1",{id:"formitem-表单项",tabindex:"-1"},[l("FormItem 表单项 "),s("a",{class:"header-anchor",href:"#formitem-表单项","aria-label":'Permalink to "FormItem 表单项"'},"​")],-1),x=s("h2",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),S=s("p",null,"动态表单组件，通过配置表单项，生成表单",-1),P=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      message: "),s("span",{style:{color:"#9ECBFF"}},"'domain can not be null'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      trigger: "),s("span",{style:{color:"#9ECBFF"}},"'blur'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  ("),s("span",{style:{color:"#FFAB70"}},"current"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," (formModel.test1 "),s("span",{style:{color:"#F97583"}},"==="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'test1'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"?"),s("span",{style:{color:"#E1E4E8"}}," item2 "),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," item3)")]),l(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," (formModel.test2 "),s("span",{style:{color:"#F97583"}},"==="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'test2-2'"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," item3")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    } "),s("span",{style:{color:"#F97583"}},"else"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," (formModel.test2 "),s("span",{style:{color:"#F97583"}},"==="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'test2-3'"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," formModel.test3."),s("span",{style:{color:"#B392F0"}},"includes"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'test3-1'"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"?"),s("span",{style:{color:"#E1E4E8"}}," item4 "),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"null")]),l(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"submitForm"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"async"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"formEl"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"FormInstance"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"|"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"undefined"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#F97583"}},"!"),s("span",{style:{color:"#E1E4E8"}},"formEl) "),s("span",{style:{color:"#F97583"}},"return")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"await"),s("span",{style:{color:"#E1E4E8"}}," formEl."),s("span",{style:{color:"#B392F0"}},"validate"),s("span",{style:{color:"#E1E4E8"}},"(("),s("span",{style:{color:"#FFAB70"}},"valid"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"fields"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," (valid) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'submit!'"),s("span",{style:{color:"#E1E4E8"}},", fields)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    } "),s("span",{style:{color:"#F97583"}},"else"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'error submit!'"),s("span",{style:{color:"#E1E4E8"}},", fields)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"el-pro-form"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"formRef"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"formModel"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      message: "),s("span",{style:{color:"#032F62"}},"'domain can not be null'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      trigger: "),s("span",{style:{color:"#032F62"}},"'blur'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  ("),s("span",{style:{color:"#E36209"}},"current"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," (formModel.test1 "),s("span",{style:{color:"#D73A49"}},"==="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'test1'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"?"),s("span",{style:{color:"#24292E"}}," item2 "),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," item3)")]),l(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," (formModel.test2 "),s("span",{style:{color:"#D73A49"}},"==="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'test2-2'"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," item3")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    } "),s("span",{style:{color:"#D73A49"}},"else"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," (formModel.test2 "),s("span",{style:{color:"#D73A49"}},"==="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'test2-3'"),s("span",{style:{color:"#24292E"}},") {")]),l(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," formModel.test3."),s("span",{style:{color:"#6F42C1"}},"includes"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'test3-1'"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"?"),s("span",{style:{color:"#24292E"}}," item4 "),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"null")]),l(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"submitForm"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"async"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"formEl"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"FormInstance"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"|"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"undefined"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#D73A49"}},"!"),s("span",{style:{color:"#24292E"}},"formEl) "),s("span",{style:{color:"#D73A49"}},"return")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"await"),s("span",{style:{color:"#24292E"}}," formEl."),s("span",{style:{color:"#6F42C1"}},"validate"),s("span",{style:{color:"#24292E"}},"(("),s("span",{style:{color:"#E36209"}},"valid"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"fields"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," (valid) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'submit!'"),s("span",{style:{color:"#24292E"}},", fields)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    } "),s("span",{style:{color:"#D73A49"}},"else"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'error submit!'"),s("span",{style:{color:"#24292E"}},", fields)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"el-pro-form"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"formRef"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"formModel"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"el-pro-form-item"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":form-state"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"formState"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":form-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"formModel"'),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"el-form-item"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"el-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"primary"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"submitForm(formRef)"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        获取model")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      </"),s("span",{style:{color:"#22863A"}},"el-button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"el-form-item"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"el-pro-form"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")])])])],-1),N=JSON.parse('{"title":"FormItem 表单项","description":"","frontmatter":{},"headers":[],"relativePath":"components/form-item.md","filePath":"components/form-item.md","lastUpdated":1695734556000}'),q={name:"components/form-item.md"},L=Object.assign(q,{setup(u){return(o,t)=>{const e=c("demo");return C(),M("div",null,[R,x,S,p(e,{customClass:"demoblock-custom",sourceCode:`<script lang="ts" setup>
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
      message: 'domain can not be null',
      trigger: 'blur',
    }]
  },
  (current) => (formModel.test1 === 'test1' ? item2 : item3)
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
    if (formModel.test2 === 'test2-2') {
      return item3
    } else if (formModel.test2 === 'test2-3') {
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
    return formModel.test3.includes('test3-1') ? item4 : null
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
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', fields)
    } else {
      console.log('error submit!', fields)
    }
  })
}
<\/script>
<template>
  <el-pro-form ref="formRef" :model="formModel">
    <el-pro-form-item :form-state="formState" :form-model="formModel" />
    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">
        获取model
      </el-button>
    </el-form-item>
  </el-pro-form>
</template>
`},{highlight:r(()=>[P]),default:r(()=>[p(k)]),_:1})])}}});export{N as __pageData,L as default};
