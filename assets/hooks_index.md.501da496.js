import{u as m,v as r,b as p,F as s,X as c,N as t,x as u,y as D,d as A,r as C,q as B,E as F,O as h,R as I,M as v,L as l}from"./chunks/framework.cce1a99f.js";const g=s("h3",null,"基本信息",-1),L=s("h3",null,"学校列表",-1),_=n=>new Promise(o=>setTimeout(o,n)),b=n=>new Promise(o=>setTimeout(o,n));function U(){const n=A(),o=()=>{n.value=null,_(1e3).then(a=>{n.value={id:1,name:"张三",age:Math.floor(Math.random()*99)+1}})};return o(),[n,o]}function S(n){return C(()=>{var o;return(((o=n.value)==null?void 0:o.age)||0)*2})}function k(n){const o=A(),a=()=>{b(1e3).then(e=>{o.value=[{id:1,date:"2023-01-12",school:"清华大学"},{id:2,date:"2000-10-12",school:"中国人民大学"}]})};return B(()=>{var e;return(e=n.value)==null?void 0:e.id},e=>{if(!e){o.value=[];return}a()}),o}const x=m({__name:"index.md.demo.3c00d722",setup(n){const[o,a]=U(),e=S(o),f=k(o),d=()=>{a()};return(M,R)=>{var y,i;return r(),p(u,null,[s("a",{href:"javascript:void(0)",onClick:d},"再次请求"),g,s("ul",null,[s("li",null,"用户名称："+c((y=t(o))==null?void 0:y.name),1),s("li",null,"用户年龄："+c((i=t(o))==null?void 0:i.age),1),s("li",null,"双倍年龄："+c(t(e)),1)]),L,s("ul",null,[(r(!0),p(u,null,D(t(f),E=>(r(),p("li",{key:E.id},c(E.date)+" - "+c(E.school),1))),128))])],64)}}}),P=I('<h1 id="优雅写hooks" tabindex="-1">优雅写hooks <a class="header-anchor" href="#优雅写hooks" aria-label="Permalink to &quot;优雅写hooks&quot;">​</a></h1><h2 id="_1-script标签" tabindex="-1">1. script标签 <a class="header-anchor" href="#_1-script标签" aria-label="Permalink to &quot;1. script标签&quot;">​</a></h2><ul><li>引用、页面hooks放这里</li></ul><h2 id="_2-script下的setup标签" tabindex="-1">2. script下的setup标签 <a class="header-anchor" href="#_2-script下的setup标签" aria-label="Permalink to &quot;2. script下的setup标签&quot;">​</a></h2><ul><li>页面变量、方法放这里</li></ul><h2 id="查看示例" tabindex="-1">查看示例 <a class="header-anchor" href="#查看示例" aria-label="Permalink to &quot;查看示例&quot;">​</a></h2>',6),w=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 1. 导入放最前面")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { ref, computed, watch } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 正常是import进来的请求，这里为了演示，写成promise")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"userInfoApi"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"timer"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"number"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"Promise"),s("span",{style:{color:"#E1E4E8"}},"(("),s("span",{style:{color:"#FFAB70"}},"resolve"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setTimeout"),s("span",{style:{color:"#E1E4E8"}},"(resolve, timer));")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"userSchoolListApi"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"timer"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"number"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"Promise"),s("span",{style:{color:"#E1E4E8"}},"(("),s("span",{style:{color:"#FFAB70"}},"resolve"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setTimeout"),s("span",{style:{color:"#E1E4E8"}},"(resolve, timer));")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 2. 公用函数都定义到下面")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"useUserInfo"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"userInfo"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setUserInfo"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    userInfo.value "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"null"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"userInfoApi"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"1000"),s("span",{style:{color:"#E1E4E8"}},")."),s("span",{style:{color:"#B392F0"}},"then"),s("span",{style:{color:"#E1E4E8"}},"(("),s("span",{style:{color:"#FFAB70"}},"res"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      userInfo.value "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        id: "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        name: "),s("span",{style:{color:"#9ECBFF"}},'"张三"'),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        age: Math."),s("span",{style:{color:"#B392F0"}},"floor"),s("span",{style:{color:"#E1E4E8"}},"(Math."),s("span",{style:{color:"#B392F0"}},"random"),s("span",{style:{color:"#E1E4E8"}},"() "),s("span",{style:{color:"#F97583"}},"*"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"99"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},"setUserInfo"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," [userInfo, setUserInfo];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"useDoubleAge"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"userInfo"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"computed"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," (userInfo.value?.age "),s("span",{style:{color:"#F97583"}},"||"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"*"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"2"),s("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"useUserSchoolList"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"userInfo"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"schoolList"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setSchoolList"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"userSchoolListApi"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"1000"),s("span",{style:{color:"#E1E4E8"}},")."),s("span",{style:{color:"#B392F0"}},"then"),s("span",{style:{color:"#E1E4E8"}},"(("),s("span",{style:{color:"#FFAB70"}},"res"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      schoolList.value "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," [{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        id: "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        date: "),s("span",{style:{color:"#9ECBFF"}},'"2023-01-12"'),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        school: "),s("span",{style:{color:"#9ECBFF"}},'"清华大学"'),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      }, {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        id: "),s("span",{style:{color:"#79B8FF"}},"2"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        date: "),s("span",{style:{color:"#9ECBFF"}},'"2000-10-12"'),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        school: "),s("span",{style:{color:"#9ECBFF"}},'"中国人民大学"'),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      }];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},"watch"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," userInfo.value?.id, ("),s("span",{style:{color:"#FFAB70"}},"id"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#F97583"}},"!"),s("span",{style:{color:"#E1E4E8"}},"id) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      schoolList.value "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," [];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"setSchoolList"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  })")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," schoolList;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 3. 页面方法都放到这里")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," ["),s("span",{style:{color:"#79B8FF"}},"userInfo"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"setUserInfo"),s("span",{style:{color:"#E1E4E8"}},"] "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"useUserInfo"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"doubleAge"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"useDoubleAge"),s("span",{style:{color:"#E1E4E8"}},"(userInfo);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"userSchoolList"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"useUserSchoolList"),s("span",{style:{color:"#E1E4E8"}},"(userInfo);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"onReload"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},"setUserInfo"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"a"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"href"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"javascript:void(0)"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"onReload"'),s("span",{style:{color:"#E1E4E8"}},">再次请求</"),s("span",{style:{color:"#85E89D"}},"a"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"h3"),s("span",{style:{color:"#E1E4E8"}},">基本信息</"),s("span",{style:{color:"#85E89D"}},"h3"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"ul"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"li"),s("span",{style:{color:"#E1E4E8"}},">用户名称：{{userInfo?.name}} </"),s("span",{style:{color:"#85E89D"}},"li"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"li"),s("span",{style:{color:"#E1E4E8"}},">用户年龄：{{userInfo?.age}} </"),s("span",{style:{color:"#85E89D"}},"li"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"li"),s("span",{style:{color:"#E1E4E8"}},">双倍年龄：{{doubleAge}} </"),s("span",{style:{color:"#85E89D"}},"li"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"ul"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"h3"),s("span",{style:{color:"#E1E4E8"}},">学校列表</"),s("span",{style:{color:"#85E89D"}},"h3"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"ul"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"li"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-for"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item in userSchoolList"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":key"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item.id"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {{item.date}} - {{item.school}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"li"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"ul"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 1. 导入放最前面")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { ref, computed, watch } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 正常是import进来的请求，这里为了演示，写成promise")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"userInfoApi"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"timer"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"number"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"Promise"),s("span",{style:{color:"#24292E"}},"(("),s("span",{style:{color:"#E36209"}},"resolve"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setTimeout"),s("span",{style:{color:"#24292E"}},"(resolve, timer));")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"userSchoolListApi"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"timer"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"number"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"Promise"),s("span",{style:{color:"#24292E"}},"(("),s("span",{style:{color:"#E36209"}},"resolve"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setTimeout"),s("span",{style:{color:"#24292E"}},"(resolve, timer));")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 2. 公用函数都定义到下面")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"useUserInfo"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"userInfo"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setUserInfo"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    userInfo.value "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"null"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"userInfoApi"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"1000"),s("span",{style:{color:"#24292E"}},")."),s("span",{style:{color:"#6F42C1"}},"then"),s("span",{style:{color:"#24292E"}},"(("),s("span",{style:{color:"#E36209"}},"res"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      userInfo.value "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        id: "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        name: "),s("span",{style:{color:"#032F62"}},'"张三"'),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        age: Math."),s("span",{style:{color:"#6F42C1"}},"floor"),s("span",{style:{color:"#24292E"}},"(Math."),s("span",{style:{color:"#6F42C1"}},"random"),s("span",{style:{color:"#24292E"}},"() "),s("span",{style:{color:"#D73A49"}},"*"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"99"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"setUserInfo"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," [userInfo, setUserInfo];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"useDoubleAge"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"userInfo"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"computed"),s("span",{style:{color:"#24292E"}},"(() "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," (userInfo.value?.age "),s("span",{style:{color:"#D73A49"}},"||"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"*"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"2"),s("span",{style:{color:"#24292E"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"useUserSchoolList"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"userInfo"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"schoolList"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setSchoolList"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"userSchoolListApi"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"1000"),s("span",{style:{color:"#24292E"}},")."),s("span",{style:{color:"#6F42C1"}},"then"),s("span",{style:{color:"#24292E"}},"(("),s("span",{style:{color:"#E36209"}},"res"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      schoolList.value "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," [{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        id: "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        date: "),s("span",{style:{color:"#032F62"}},'"2023-01-12"'),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        school: "),s("span",{style:{color:"#032F62"}},'"清华大学"'),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      }, {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        id: "),s("span",{style:{color:"#005CC5"}},"2"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        date: "),s("span",{style:{color:"#032F62"}},'"2000-10-12"'),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        school: "),s("span",{style:{color:"#032F62"}},'"中国人民大学"'),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      }];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"watch"),s("span",{style:{color:"#24292E"}},"(() "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," userInfo.value?.id, ("),s("span",{style:{color:"#E36209"}},"id"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#D73A49"}},"!"),s("span",{style:{color:"#24292E"}},"id) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      schoolList.value "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," [];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"setSchoolList"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  })")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," schoolList;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 3. 页面方法都放到这里")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," ["),s("span",{style:{color:"#005CC5"}},"userInfo"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"setUserInfo"),s("span",{style:{color:"#24292E"}},"] "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"useUserInfo"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"doubleAge"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"useDoubleAge"),s("span",{style:{color:"#24292E"}},"(userInfo);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"userSchoolList"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"useUserSchoolList"),s("span",{style:{color:"#24292E"}},"(userInfo);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"onReload"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"setUserInfo"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"a"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"href"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"javascript:void(0)"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"onReload"'),s("span",{style:{color:"#24292E"}},">再次请求</"),s("span",{style:{color:"#22863A"}},"a"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"h3"),s("span",{style:{color:"#24292E"}},">基本信息</"),s("span",{style:{color:"#22863A"}},"h3"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"ul"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"li"),s("span",{style:{color:"#24292E"}},">用户名称：{{userInfo?.name}} </"),s("span",{style:{color:"#22863A"}},"li"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"li"),s("span",{style:{color:"#24292E"}},">用户年龄：{{userInfo?.age}} </"),s("span",{style:{color:"#22863A"}},"li"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"li"),s("span",{style:{color:"#24292E"}},">双倍年龄：{{doubleAge}} </"),s("span",{style:{color:"#22863A"}},"li"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"ul"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"h3"),s("span",{style:{color:"#24292E"}},">学校列表</"),s("span",{style:{color:"#22863A"}},"h3"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"ul"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"li"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-for"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"item in userSchoolList"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":key"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"item.id"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {{item.date}} - {{item.school}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"li"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"ul"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")])])])],-1),j=JSON.parse('{"title":"优雅写hooks","description":"","frontmatter":{},"headers":[],"relativePath":"hooks/index.md","filePath":"hooks/index.md","lastUpdated":1695129063000}'),q={name:"hooks/index.md"},O=Object.assign(q,{setup(n){return(o,a)=>{const e=v("demo");return r(),p("div",null,[P,F(e,{customClass:"demoblock-custom",sourceCode:`<script lang="ts">
// 1. 导入放最前面
import { ref, computed, watch } from 'vue'
// 正常是import进来的请求，这里为了演示，写成promise
const userInfoApi = (timer: number) =>
  new Promise((resolve) => setTimeout(resolve, timer));
const userSchoolListApi = (timer: number) =>
  new Promise((resolve) => setTimeout(resolve, timer));

// 2. 公用函数都定义到下面
export function useUserInfo() {
  const userInfo = ref();
  const setUserInfo = () => {
    userInfo.value = null;
    userInfoApi(1000).then((res) => {
      userInfo.value = {
        id: 1,
        name: "张三",
        age: Math.floor(Math.random() * 99) + 1,
      };
    });
  }

  setUserInfo();

  return [userInfo, setUserInfo];
}
export function useDoubleAge(userInfo) {
  return computed(() => (userInfo.value?.age || 0) * 2)
}

export function useUserSchoolList(userInfo) {
  const schoolList = ref();
  const setSchoolList = () => {
    userSchoolListApi(1000).then((res) => {
      schoolList.value = [{
        id: 1,
        date: "2023-01-12",
        school: "清华大学",
      }, {
        id: 2,
        date: "2000-10-12",
        school: "中国人民大学",
      }];
    });
  }
  watch(() => userInfo.value?.id, (id) => {
    if (!id) {
      schoolList.value = [];
      return;
    }

    setSchoolList();
  })

  return schoolList;
}
<\/script>
<script lang="ts" setup>
// 3. 页面方法都放到这里
const [userInfo, setUserInfo] = useUserInfo();
const doubleAge = useDoubleAge(userInfo);
const userSchoolList = useUserSchoolList(userInfo);
const onReload = () => {
  setUserInfo();
}
<\/script>
<template>
  <a href="javascript:void(0)" @click="onReload">再次请求</a>
  <h3>基本信息</h3>
  <ul>
    <li>用户名称：{{userInfo?.name}} </li>
    <li>用户年龄：{{userInfo?.age}} </li>
    <li>双倍年龄：{{doubleAge}} </li>
  </ul>
  <h3>学校列表</h3>
  <ul>
    <li v-for="item in userSchoolList" :key="item.id">
      {{item.date}} - {{item.school}}
    </li>
  </ul>
</template>
`},{highlight:h(()=>[w]),default:h(()=>[F(x)]),_:1})])}}});export{j as __pageData,O as default};
