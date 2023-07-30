import{d as F,a5 as C,J as r,o as E,b as d,l as m,c as A,N as e,w as t,V as h,k as s,a as n}from"./chunks/framework.3b262960.js";const B=Array.from({length:1e4}).map((c,a)=>({选项值:`${a+1}`,选项标识:`${a+1}`})),u=[{字段名称:"Activity name",字段标识:"name",是否必填:!0,数据类型:"文本",格式:"单行文本",最大长度:30,默认值:"Hello"},{字段名称:"Activity count",字段标识:"count",是否必填:!0,数据类型:"枚举",选择设置:"单选",关联选项集:{选项集名称:"地区",选项集标识:"dq",选项集:B}},{字段名称:"Activity time",字段标识:"time",是否必填:!0,数据类型:"日期时间",格式:"日期时间"},{字段名称:"Instant delivery",字段标识:"delivery",数据类型:"布尔值"},{字段名称:"Activity type",字段标识:"type",是否必填:!0,数据类型:"枚举",选择设置:"多选",关联选项集:{选项集名称:"类型",选项集标识:"lx",选项集:[{选项值:"Online activities",选项标识:"Online activities"},{选项值:"Promotion activities",选项标识:"Promotion activities"},{选项值:"Offline activities",选项标识:"Offline activities"},{选项值:"Simple brand exposure",选项标识:"Simple brand exposure"}]}},{字段名称:"Resources",字段标识:"resource",是否必填:!0,数据类型:"枚举",选择设置:"单选",关联选项集:{选项集名称:"资源",选项集标识:"zy",选项集:[{选项值:"Sponsorship",选项标识:"Sponsorship"},{选项值:"Venue",选项标识:"Venue"}]}},{字段名称:"Activity form",字段标识:"desc",是否必填:!0,数据类型:"文本",格式:"多行文本",最大长度:100}],D=F({__name:"curd.md.demo.964fab28",setup(c){const a=o=>{console.log("submit",o)},p=()=>{console.log("reset")},l=C({});return setTimeout(()=>{console.log("接口请求完毕"),l.value={name:"啊啊发的发"}},1e3),(o,y)=>{const i=r("el-pro-curd");return E(),d(i,{"model-list":m(u),model:l,onSubmit:a,onReset:p},null,8,["model-list","model"])}}}),g=F({__name:"curd.md.demo.964fab26",setup(c){const a=l=>{console.log("query",l)},p=()=>{console.log("reset")};return(l,o)=>{const y=r("el-pro-curd");return E(),d(y,{"model-list":m(u),type:"query",onQuery:a,onReset:p},null,8,["model-list"])}}}),v=F({__name:"curd.md.demo.964fab24",setup(c){const a=()=>{console.log("create")},p=o=>{console.log("edit",o)},l=o=>{console.log("delete",o)};return(o,y)=>{const i=r("el-pro-curd");return E(),d(i,{"model-list":m(u),type:"table",onCreate:a,onEdit:p,onDelete:l},null,8,["model-list"])}}}),b=h(`<h1 id="curd" tabindex="-1">CURD <a class="header-anchor" href="#curd" aria-label="Permalink to &quot;CURD&quot;">​</a></h1><p>一次数据定义，适用于表单、查询、详情、列表等场景。</p><h2 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: </span><span style="color:#79B8FF;">10000</span><span style="color:#E1E4E8;"> }).</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">idx</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">  选项值: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">idx</span><span style="color:#9ECBFF;"> </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  选项标识: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">idx</span><span style="color:#9ECBFF;"> </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">}))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">modelList</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    字段名称: </span><span style="color:#9ECBFF;">&#39;Activity name&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    字段标识: </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 字段描述?: string</span></span>
<span class="line"><span style="color:#E1E4E8;">    是否必填: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 是否唯一: false,</span></span>
<span class="line"><span style="color:#E1E4E8;">    数据类型: </span><span style="color:#9ECBFF;">&#39;文本&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    格式: </span><span style="color:#9ECBFF;">&#39;单行文本&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// &#39;最小长度&#39;: 0,</span></span>
<span class="line"><span style="color:#E1E4E8;">    最大长度: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    默认值: </span><span style="color:#9ECBFF;">&#39;Hello&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    字段名称: </span><span style="color:#9ECBFF;">&#39;Activity count&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    字段标识: </span><span style="color:#9ECBFF;">&#39;count&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 字段描述?: string</span></span>
<span class="line"><span style="color:#E1E4E8;">    是否必填: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 是否唯一: false,</span></span>
<span class="line"><span style="color:#E1E4E8;">    数据类型: </span><span style="color:#9ECBFF;">&#39;枚举&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    选择设置: </span><span style="color:#9ECBFF;">&#39;单选&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    关联选项集: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      选项集名称: </span><span style="color:#9ECBFF;">&#39;地区&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      选项集标识: </span><span style="color:#9ECBFF;">&#39;dq&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 描述?: string</span></span>
<span class="line"><span style="color:#E1E4E8;">      选项集: options,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 默认值?: string</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    字段名称: </span><span style="color:#9ECBFF;">&#39;Activity time&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    字段标识: </span><span style="color:#9ECBFF;">&#39;time&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 字段描述?: string</span></span>
<span class="line"><span style="color:#E1E4E8;">    是否必填: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 是否唯一: false,</span></span>
<span class="line"><span style="color:#E1E4E8;">    数据类型: </span><span style="color:#9ECBFF;">&#39;日期时间&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    格式: </span><span style="color:#9ECBFF;">&#39;日期时间&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 最小值?: string</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 最大值?: string</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 默认值?: string</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    字段名称: </span><span style="color:#9ECBFF;">&#39;Instant delivery&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    字段标识: </span><span style="color:#9ECBFF;">&#39;delivery&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 字段描述?: string</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 是否必填: false,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 是否唯一: false,</span></span>
<span class="line"><span style="color:#E1E4E8;">    数据类型: </span><span style="color:#9ECBFF;">&#39;布尔值&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 默认值?: boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    字段名称: </span><span style="color:#9ECBFF;">&#39;Activity type&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    字段标识: </span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 字段描述?: string</span></span>
<span class="line"><span style="color:#E1E4E8;">    是否必填: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 是否唯一: false,</span></span>
<span class="line"><span style="color:#E1E4E8;">    数据类型: </span><span style="color:#9ECBFF;">&#39;枚举&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    选择设置: </span><span style="color:#9ECBFF;">&#39;多选&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    关联选项集: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      选项集名称: </span><span style="color:#9ECBFF;">&#39;类型&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      选项集标识: </span><span style="color:#9ECBFF;">&#39;lx&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 描述?: string</span></span>
<span class="line"><span style="color:#E1E4E8;">      选项集: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { 选项值: </span><span style="color:#9ECBFF;">&#39;Online activities&#39;</span><span style="color:#E1E4E8;">, 选项标识: </span><span style="color:#9ECBFF;">&#39;Online activities&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { 选项值: </span><span style="color:#9ECBFF;">&#39;Promotion activities&#39;</span><span style="color:#E1E4E8;">, 选项标识: </span><span style="color:#9ECBFF;">&#39;Promotion activities&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { 选项值: </span><span style="color:#9ECBFF;">&#39;Offline activities&#39;</span><span style="color:#E1E4E8;">, 选项标识: </span><span style="color:#9ECBFF;">&#39;Offline activities&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { 选项值: </span><span style="color:#9ECBFF;">&#39;Simple brand exposure&#39;</span><span style="color:#E1E4E8;">, 选项标识: </span><span style="color:#9ECBFF;">&#39;Simple brand exposure&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 默认值?: string</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    字段名称: </span><span style="color:#9ECBFF;">&#39;Resources&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    字段标识: </span><span style="color:#9ECBFF;">&#39;resource&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 字段描述?: string</span></span>
<span class="line"><span style="color:#E1E4E8;">    是否必填: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 是否唯一: false,</span></span>
<span class="line"><span style="color:#E1E4E8;">    数据类型: </span><span style="color:#9ECBFF;">&#39;枚举&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    选择设置: </span><span style="color:#9ECBFF;">&#39;单选&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    关联选项集: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      选项集名称: </span><span style="color:#9ECBFF;">&#39;资源&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      选项集标识: </span><span style="color:#9ECBFF;">&#39;zy&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 描述?: string</span></span>
<span class="line"><span style="color:#E1E4E8;">      选项集: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { 选项值: </span><span style="color:#9ECBFF;">&#39;Sponsorship&#39;</span><span style="color:#E1E4E8;">, 选项标识: </span><span style="color:#9ECBFF;">&#39;Sponsorship&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { 选项值: </span><span style="color:#9ECBFF;">&#39;Venue&#39;</span><span style="color:#E1E4E8;">, 选项标识: </span><span style="color:#9ECBFF;">&#39;Venue&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 默认值?: string</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    字段名称: </span><span style="color:#9ECBFF;">&#39;Activity form&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    字段标识: </span><span style="color:#9ECBFF;">&#39;desc&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 字段描述?: string</span></span>
<span class="line"><span style="color:#E1E4E8;">    是否必填: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 是否唯一: false,</span></span>
<span class="line"><span style="color:#E1E4E8;">    数据类型: </span><span style="color:#9ECBFF;">&#39;文本&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    格式: </span><span style="color:#9ECBFF;">&#39;多行文本&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// &#39;最小长度&#39;: 0,</span></span>
<span class="line"><span style="color:#E1E4E8;">    最大长度: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 默认值?: string</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Array.</span><span style="color:#6F42C1;">from</span><span style="color:#24292E;">({ length: </span><span style="color:#005CC5;">10000</span><span style="color:#24292E;"> }).</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">((</span><span style="color:#E36209;">_</span><span style="color:#24292E;">, </span><span style="color:#E36209;">idx</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> ({</span></span>
<span class="line"><span style="color:#24292E;">  选项值: </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">idx</span><span style="color:#032F62;"> </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">1</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  选项标识: </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">idx</span><span style="color:#032F62;"> </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">1</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">modelList</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    字段名称: </span><span style="color:#032F62;">&#39;Activity name&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    字段标识: </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 字段描述?: string</span></span>
<span class="line"><span style="color:#24292E;">    是否必填: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 是否唯一: false,</span></span>
<span class="line"><span style="color:#24292E;">    数据类型: </span><span style="color:#032F62;">&#39;文本&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    格式: </span><span style="color:#032F62;">&#39;单行文本&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// &#39;最小长度&#39;: 0,</span></span>
<span class="line"><span style="color:#24292E;">    最大长度: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    默认值: </span><span style="color:#032F62;">&#39;Hello&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    字段名称: </span><span style="color:#032F62;">&#39;Activity count&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    字段标识: </span><span style="color:#032F62;">&#39;count&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 字段描述?: string</span></span>
<span class="line"><span style="color:#24292E;">    是否必填: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 是否唯一: false,</span></span>
<span class="line"><span style="color:#24292E;">    数据类型: </span><span style="color:#032F62;">&#39;枚举&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    选择设置: </span><span style="color:#032F62;">&#39;单选&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    关联选项集: {</span></span>
<span class="line"><span style="color:#24292E;">      选项集名称: </span><span style="color:#032F62;">&#39;地区&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      选项集标识: </span><span style="color:#032F62;">&#39;dq&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 描述?: string</span></span>
<span class="line"><span style="color:#24292E;">      选项集: options,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 默认值?: string</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    字段名称: </span><span style="color:#032F62;">&#39;Activity time&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    字段标识: </span><span style="color:#032F62;">&#39;time&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 字段描述?: string</span></span>
<span class="line"><span style="color:#24292E;">    是否必填: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 是否唯一: false,</span></span>
<span class="line"><span style="color:#24292E;">    数据类型: </span><span style="color:#032F62;">&#39;日期时间&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    格式: </span><span style="color:#032F62;">&#39;日期时间&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 最小值?: string</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 最大值?: string</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 默认值?: string</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    字段名称: </span><span style="color:#032F62;">&#39;Instant delivery&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    字段标识: </span><span style="color:#032F62;">&#39;delivery&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 字段描述?: string</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 是否必填: false,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 是否唯一: false,</span></span>
<span class="line"><span style="color:#24292E;">    数据类型: </span><span style="color:#032F62;">&#39;布尔值&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 默认值?: boolean</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    字段名称: </span><span style="color:#032F62;">&#39;Activity type&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    字段标识: </span><span style="color:#032F62;">&#39;type&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 字段描述?: string</span></span>
<span class="line"><span style="color:#24292E;">    是否必填: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 是否唯一: false,</span></span>
<span class="line"><span style="color:#24292E;">    数据类型: </span><span style="color:#032F62;">&#39;枚举&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    选择设置: </span><span style="color:#032F62;">&#39;多选&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    关联选项集: {</span></span>
<span class="line"><span style="color:#24292E;">      选项集名称: </span><span style="color:#032F62;">&#39;类型&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      选项集标识: </span><span style="color:#032F62;">&#39;lx&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 描述?: string</span></span>
<span class="line"><span style="color:#24292E;">      选项集: [</span></span>
<span class="line"><span style="color:#24292E;">        { 选项值: </span><span style="color:#032F62;">&#39;Online activities&#39;</span><span style="color:#24292E;">, 选项标识: </span><span style="color:#032F62;">&#39;Online activities&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { 选项值: </span><span style="color:#032F62;">&#39;Promotion activities&#39;</span><span style="color:#24292E;">, 选项标识: </span><span style="color:#032F62;">&#39;Promotion activities&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { 选项值: </span><span style="color:#032F62;">&#39;Offline activities&#39;</span><span style="color:#24292E;">, 选项标识: </span><span style="color:#032F62;">&#39;Offline activities&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { 选项值: </span><span style="color:#032F62;">&#39;Simple brand exposure&#39;</span><span style="color:#24292E;">, 选项标识: </span><span style="color:#032F62;">&#39;Simple brand exposure&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 默认值?: string</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    字段名称: </span><span style="color:#032F62;">&#39;Resources&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    字段标识: </span><span style="color:#032F62;">&#39;resource&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 字段描述?: string</span></span>
<span class="line"><span style="color:#24292E;">    是否必填: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 是否唯一: false,</span></span>
<span class="line"><span style="color:#24292E;">    数据类型: </span><span style="color:#032F62;">&#39;枚举&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    选择设置: </span><span style="color:#032F62;">&#39;单选&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    关联选项集: {</span></span>
<span class="line"><span style="color:#24292E;">      选项集名称: </span><span style="color:#032F62;">&#39;资源&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      选项集标识: </span><span style="color:#032F62;">&#39;zy&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 描述?: string</span></span>
<span class="line"><span style="color:#24292E;">      选项集: [</span></span>
<span class="line"><span style="color:#24292E;">        { 选项值: </span><span style="color:#032F62;">&#39;Sponsorship&#39;</span><span style="color:#24292E;">, 选项标识: </span><span style="color:#032F62;">&#39;Sponsorship&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { 选项值: </span><span style="color:#032F62;">&#39;Venue&#39;</span><span style="color:#24292E;">, 选项标识: </span><span style="color:#032F62;">&#39;Venue&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 默认值?: string</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    字段名称: </span><span style="color:#032F62;">&#39;Activity form&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    字段标识: </span><span style="color:#032F62;">&#39;desc&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 字段描述?: string</span></span>
<span class="line"><span style="color:#24292E;">    是否必填: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 是否唯一: false,</span></span>
<span class="line"><span style="color:#24292E;">    数据类型: </span><span style="color:#032F62;">&#39;文本&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    格式: </span><span style="color:#032F62;">&#39;多行文本&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// &#39;最小长度&#39;: 0,</span></span>
<span class="line"><span style="color:#24292E;">    最大长度: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 默认值?: string</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><h2 id="表单" tabindex="-1">表单 <a class="header-anchor" href="#表单" aria-label="Permalink to &quot;表单&quot;">​</a></h2>`,5),_=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { reactive } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { modelList } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'./model-list.ts'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"handleSubmit"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"val"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'submit'"),s("span",{style:{color:"#E1E4E8"}},", val)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"handleReset"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'reset'"),s("span",{style:{color:"#E1E4E8"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"model"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"reactive"),s("span",{style:{color:"#E1E4E8"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"// wb: '123',")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"})")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"setTimeout"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'接口请求完毕'"),s("span",{style:{color:"#E1E4E8"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  model.value "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    name: "),s("span",{style:{color:"#9ECBFF"}},"'啊啊发的发'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}, "),s("span",{style:{color:"#79B8FF"}},"1000"),s("span",{style:{color:"#E1E4E8"}},")")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"el-pro-curd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},":model-list"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"modelList"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},":model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"model"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"@submit"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"handleSubmit"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"@reset"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"handleReset"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { reactive } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { modelList } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'./model-list.ts'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"handleSubmit"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"val"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'submit'"),s("span",{style:{color:"#24292E"}},", val)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"handleReset"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'reset'"),s("span",{style:{color:"#24292E"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"model"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"reactive"),s("span",{style:{color:"#24292E"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"// wb: '123',")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"})")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"setTimeout"),s("span",{style:{color:"#24292E"}},"(() "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'接口请求完毕'"),s("span",{style:{color:"#24292E"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  model.value "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    name: "),s("span",{style:{color:"#032F62"}},"'啊啊发的发'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}, "),s("span",{style:{color:"#005CC5"}},"1000"),s("span",{style:{color:"#24292E"}},")")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"el-pro-curd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},":model-list"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"modelList"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},":model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"model"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"@submit"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"handleSubmit"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"@reset"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"handleReset"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")])])])],-1),f=s("h2",{id:"查询",tabindex:"-1"},[n("查询 "),s("a",{class:"header-anchor",href:"#查询","aria-label":'Permalink to "查询"'},"​")],-1),x=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { modelList } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'./model-list.ts'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"handleQuery"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"val"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'query'"),s("span",{style:{color:"#E1E4E8"}},", val)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"handleReset"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'reset'"),s("span",{style:{color:"#E1E4E8"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"el-pro-curd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},":model-list"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"modelList"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"query"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"@query"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"handleQuery"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"@reset"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"handleReset"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { modelList } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'./model-list.ts'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"handleQuery"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"val"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'query'"),s("span",{style:{color:"#24292E"}},", val)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"handleReset"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'reset'"),s("span",{style:{color:"#24292E"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"el-pro-curd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},":model-list"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"modelList"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"query"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"@query"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"handleQuery"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"@reset"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"handleReset"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")])])])],-1),k=s("h2",{id:"表格",tabindex:"-1"},[n("表格 "),s("a",{class:"header-anchor",href:"#表格","aria-label":'Permalink to "表格"'},"​")],-1),q=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { modelList } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'./model-list.ts'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"handleCreate"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'create'"),s("span",{style:{color:"#E1E4E8"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"handleEdit"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"row"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'edit'"),s("span",{style:{color:"#E1E4E8"}},", row)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"handleDelete"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"row"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'delete'"),s("span",{style:{color:"#E1E4E8"}},", row)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"el-pro-curd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},":model-list"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"modelList"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"table"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"@create"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"handleCreate"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"@edit"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"handleEdit"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"@delete"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"handleDelete"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { modelList } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'./model-list.ts'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"handleCreate"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'create'"),s("span",{style:{color:"#24292E"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"handleEdit"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"row"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'edit'"),s("span",{style:{color:"#24292E"}},", row)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"handleDelete"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"row"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'delete'"),s("span",{style:{color:"#24292E"}},", row)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"el-pro-curd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},":model-list"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"modelList"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"table"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"@create"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"handleCreate"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"@edit"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"handleEdit"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"@delete"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"handleDelete"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")])])])],-1),S=h(`<h2 id="curd-api" tabindex="-1">CURD API <a class="header-anchor" href="#curd-api" aria-label="Permalink to &quot;CURD API&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ModelItem</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TextModel</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BooleanModel</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DigitModel</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EmailModel</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PhoneModel</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WebModel</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EnumModel</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DateModel</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Type</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;table&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;form&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;query&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ModelItem</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TextModel</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BooleanModel</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DigitModel</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EmailModel</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PhoneModel</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WebModel</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EnumModel</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DateModel</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Type</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;table&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;form&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;query&#39;</span></span></code></pre></div><h3 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model</td><td>数据</td><td><code>Object</code> <code>Array</code></td><td>—</td><td>—</td></tr><tr><td>model-list</td><td>模型</td><td><code>ModelItem[]</code></td><td>—</td><td>—</td></tr><tr><td>type</td><td>展示类型</td><td><code>Type</code></td><td>—</td><td>—</td></tr></tbody></table><h3 id="form-events" tabindex="-1">Form Events <a class="header-anchor" href="#form-events" aria-label="Permalink to &quot;Form Events&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>submit</td><td>保存事件</td><td><code>() =&gt; void</code></td></tr><tr><td>reset</td><td>重置事件</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="query-events" tabindex="-1">Query Events <a class="header-anchor" href="#query-events" aria-label="Permalink to &quot;Query Events&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>query</td><td>查询事件</td><td><code>() =&gt; void</code></td></tr><tr><td>reset</td><td>重置事件</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="table-events" tabindex="-1">Table Events <a class="header-anchor" href="#table-events" aria-label="Permalink to &quot;Table Events&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>create</td><td>新增</td><td><code>() =&gt; void</code></td></tr><tr><td>edit</td><td>编辑</td><td><code>(row) =&gt; void</code></td></tr><tr><td>delete</td><td>删除</td><td><code>(row) =&gt; void</code></td></tr><tr><td>detail</td><td>详情</td><td><code>(row) =&gt; void</code></td></tr></tbody></table>`,10),R=JSON.parse('{"title":"CURD","description":"","frontmatter":{},"headers":[],"relativePath":"components/curd.md","filePath":"components/curd.md","lastUpdated":1690704885000}'),T={name:"components/curd.md"},L=Object.assign(T,{setup(c){return(a,p)=>{const l=r("demo");return E(),A("div",null,[b,e(l,{customClass:"demoblock-custom",sourceCode:`<script lang="ts" setup>
import { reactive } from 'vue'
import { modelList } from './model-list.ts'
const handleSubmit = (val) => {
  console.log('submit', val)
}
const handleReset = () => {
  console.log('reset')
}

const model = reactive({
  // wb: '123',
})

setTimeout(() => {
  console.log('接口请求完毕')
  model.value = {
    name: '啊啊发的发'
  }
}, 1000)

<\/script>
<template>
  <el-pro-curd
    :model-list="modelList"
    :model="model"
    @submit="handleSubmit"
    @reset="handleReset"
  />
</template>
`},{highlight:t(()=>[_]),default:t(()=>[e(D)]),_:1}),f,e(l,{customClass:"demoblock-custom",sourceCode:`<script lang="ts" setup>
import { modelList } from './model-list.ts'
const handleQuery = (val) => {
  console.log('query', val)
}
const handleReset = () => {
  console.log('reset')
}
<\/script>
<template>
  <el-pro-curd
    :model-list="modelList"
    type="query"
    @query="handleQuery"
    @reset="handleReset"
  />
</template>
`},{highlight:t(()=>[x]),default:t(()=>[e(g)]),_:1}),k,e(l,{customClass:"demoblock-custom",sourceCode:`<script lang="ts" setup>
import { modelList } from './model-list.ts'
const handleCreate = () => {
  console.log('create')
}
const handleEdit = (row) => {
  console.log('edit', row)
}
const handleDelete = (row) => {
  console.log('delete', row)
}
<\/script>
<template>
  <el-pro-curd
    :model-list="modelList"
    type="table"
    @create="handleCreate"
    @edit="handleEdit"
    @delete="handleDelete"
  />
</template>
`},{highlight:t(()=>[q]),default:t(()=>[e(v)]),_:1}),S])}}});export{R as __pageData,L as default};
