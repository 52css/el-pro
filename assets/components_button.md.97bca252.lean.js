import{_ as d,J as c,o as r,c as E,N as o,w as e,a as s,K as u,d as F,k as l,V as b}from"./chunks/framework.b2d61322.js";const h={};function _(y,p){const t=c("el-pro-button");return r(),E(u,null,[o(t,null,{default:e(()=>[s("默认按钮")]),_:1}),o(t,{type:"primary"},{default:e(()=>[s("主要按钮")]),_:1}),o(t,{type:"success"},{default:e(()=>[s("成功按钮")]),_:1}),o(t,{type:"info"},{default:e(()=>[s("信息按钮")]),_:1}),o(t,{type:"warning"},{default:e(()=>[s("警告按钮")]),_:1}),o(t,{type:"danger"},{default:e(()=>[s("危险按钮")]),_:1})],64)}const C=d(h,[["render",_]]),m=F({__name:"button.md.demo.1a4777bb",setup(y){const p=a=>new Promise(i=>setTimeout(i,a)),t=async()=>{await p(1e3)};return(a,i)=>{const n=c("el-pro-button");return r(),E(u,null,[o(n,{onClick:t},{default:e(()=>[s("默认按钮")]),_:1}),o(n,{type:"primary",onClick:t},{default:e(()=>[s("主要按钮")]),_:1}),o(n,{type:"success",onClick:t},{default:e(()=>[s("成功按钮")]),_:1}),o(n,{type:"info",onClick:t},{default:e(()=>[s("信息按钮")]),_:1}),o(n,{type:"warning",onClick:t},{default:e(()=>[s("警告按钮")]),_:1}),o(n,{type:"danger",onClick:t},{default:e(()=>[s("危险按钮")]),_:1})],64)}}}),k=l("h1",{id:"button-按钮",tabindex:"-1"},[s("Button 按钮 "),l("a",{class:"header-anchor",href:"#button-按钮","aria-label":'Permalink to "Button 按钮"'},"​")],-1),B=l("p",null,"常用的操作按钮。",-1),A=l("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),l("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),D=l("p",null,"基础的按钮用法。",-1),g=l("div",{class:"language-vue vp-adaptive-theme"},[l("span",{class:"lang"},"vue"),l("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}},">默认按钮</"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"primary"'),l("span",{style:{color:"#E1E4E8"}},">主要按钮</"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"success"'),l("span",{style:{color:"#E1E4E8"}},">成功按钮</"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"info"'),l("span",{style:{color:"#E1E4E8"}},">信息按钮</"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"warning"'),l("span",{style:{color:"#E1E4E8"}},">警告按钮</"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"danger"'),l("span",{style:{color:"#E1E4E8"}},">危险按钮</"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")])])]),l("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}},">默认按钮</"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"type"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"primary"'),l("span",{style:{color:"#24292E"}},">主要按钮</"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"type"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"success"'),l("span",{style:{color:"#24292E"}},">成功按钮</"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"type"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"info"'),l("span",{style:{color:"#24292E"}},">信息按钮</"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"type"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"warning"'),l("span",{style:{color:"#24292E"}},">警告按钮</"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"type"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"danger"'),l("span",{style:{color:"#24292E"}},">危险按钮</"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")])])])],-1),f=l("h2",{id:"防重事件",tabindex:"-1"},[s("防重事件 "),l("a",{class:"header-anchor",href:"#防重事件","aria-label":'Permalink to "防重事件"'},"​")],-1),v=l("p",null,"点击函数是promise等待解决再把lock解锁",-1),w=l("div",{class:"language-vue vp-adaptive-theme"},[l("span",{class:"lang"},"vue"),l("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"lang"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"ts"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"setup"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"sleep"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," ("),l("span",{style:{color:"#FFAB70"}},"timer"),l("span",{style:{color:"#F97583"}},":"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"number"),l("span",{style:{color:"#E1E4E8"}},") "),l("span",{style:{color:"#F97583"}},"=>")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  "),l("span",{style:{color:"#F97583"}},"new"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#79B8FF"}},"Promise"),l("span",{style:{color:"#E1E4E8"}},"(("),l("span",{style:{color:"#FFAB70"}},"resolve"),l("span",{style:{color:"#E1E4E8"}},") "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"setTimeout"),l("span",{style:{color:"#E1E4E8"}},"(resolve, timer));")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"const"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"handleClick1"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"async"),l("span",{style:{color:"#E1E4E8"}}," () "),l("span",{style:{color:"#F97583"}},"=>"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  "),l("span",{style:{color:"#F97583"}},"await"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"sleep"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#79B8FF"}},"1000"),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"handleClick1"'),l("span",{style:{color:"#E1E4E8"}},">默认按钮</"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"primary"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"handleClick1"'),l("span",{style:{color:"#E1E4E8"}},">主要按钮</"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"success"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"handleClick1"'),l("span",{style:{color:"#E1E4E8"}},">成功按钮</"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"info"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"handleClick1"'),l("span",{style:{color:"#E1E4E8"}},">信息按钮</"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"warning"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"handleClick1"'),l("span",{style:{color:"#E1E4E8"}},">警告按钮</"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"danger"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"handleClick1"'),l("span",{style:{color:"#E1E4E8"}},">危险按钮</"),l("span",{style:{color:"#85E89D"}},"el-pro-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")])])]),l("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"lang"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"ts"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"setup"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"sleep"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," ("),l("span",{style:{color:"#E36209"}},"timer"),l("span",{style:{color:"#D73A49"}},":"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"number"),l("span",{style:{color:"#24292E"}},") "),l("span",{style:{color:"#D73A49"}},"=>")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#D73A49"}},"new"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"Promise"),l("span",{style:{color:"#24292E"}},"(("),l("span",{style:{color:"#E36209"}},"resolve"),l("span",{style:{color:"#24292E"}},") "),l("span",{style:{color:"#D73A49"}},"=>"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"setTimeout"),l("span",{style:{color:"#24292E"}},"(resolve, timer));")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"const"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"handleClick1"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"async"),l("span",{style:{color:"#24292E"}}," () "),l("span",{style:{color:"#D73A49"}},"=>"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#D73A49"}},"await"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"sleep"),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#005CC5"}},"1000"),l("span",{style:{color:"#24292E"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"handleClick1"'),l("span",{style:{color:"#24292E"}},">默认按钮</"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"type"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"primary"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"handleClick1"'),l("span",{style:{color:"#24292E"}},">主要按钮</"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"type"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"success"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"handleClick1"'),l("span",{style:{color:"#24292E"}},">成功按钮</"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"type"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"info"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"handleClick1"'),l("span",{style:{color:"#24292E"}},">信息按钮</"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"type"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"warning"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"handleClick1"'),l("span",{style:{color:"#24292E"}},">警告按钮</"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"type"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"danger"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"handleClick1"'),l("span",{style:{color:"#24292E"}},">危险按钮</"),l("span",{style:{color:"#22863A"}},"el-pro-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")])])])],-1),P=b("",2),N=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button.md","filePath":"components/button.md","lastUpdated":1690170281000}'),x={name:"components/button.md"},V=Object.assign(x,{setup(y){return(p,t)=>{const a=c("demo");return r(),E("div",null,[k,B,A,D,o(a,{customClass:"demoblock-custom",sourceCode:`<template>
  <el-pro-button>默认按钮</el-pro-button>
  <el-pro-button type="primary">主要按钮</el-pro-button>
  <el-pro-button type="success">成功按钮</el-pro-button>
  <el-pro-button type="info">信息按钮</el-pro-button>
  <el-pro-button type="warning">警告按钮</el-pro-button>
  <el-pro-button type="danger">危险按钮</el-pro-button>
</template>
`},{highlight:e(()=>[g]),default:e(()=>[o(C)]),_:1}),f,v,o(a,{customClass:"demoblock-custom",sourceCode:`<script lang="ts" setup>
const sleep = (timer: number) =>
  new Promise((resolve) => setTimeout(resolve, timer));
const handleClick1 = async () => {
  await sleep(1000);
};
<\/script>
<template>
  <el-pro-button @click="handleClick1">默认按钮</el-pro-button>
  <el-pro-button type="primary" @click="handleClick1">主要按钮</el-pro-button>
  <el-pro-button type="success" @click="handleClick1">成功按钮</el-pro-button>
  <el-pro-button type="info" @click="handleClick1">信息按钮</el-pro-button>
  <el-pro-button type="warning" @click="handleClick1">警告按钮</el-pro-button>
  <el-pro-button type="danger" @click="handleClick1">危险按钮</el-pro-button>
</template>
`},{highlight:e(()=>[w]),default:e(()=>[o(m)]),_:1}),P])}}});export{N as __pageData,V as default};
