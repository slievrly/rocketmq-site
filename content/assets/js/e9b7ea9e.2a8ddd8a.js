"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[3167],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=d(a),m=r,u=s["".concat(p,".").concat(m)]||s[m]||k[m]||l;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},77811:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={},o="RocketMQ Dashboard",i={unversionedId:"\u90e8\u7f72\u4e0e\u8fd0\u7ef4/17Dashboard",id:"\u90e8\u7f72\u4e0e\u8fd0\u7ef4/17Dashboard",title:"RocketMQ Dashboard",description:"RocketMQ Dashboard \u662f RocketMQ \u7684\u7ba1\u63a7\u5229\u5668\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u5ba2\u6237\u7aef\u548c\u5e94\u7528\u7a0b\u5e8f\u7684\u5404\u79cd\u4e8b\u4ef6\u3001\u6027\u80fd\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u652f\u6301\u4ee5\u53ef\u89c6\u5316\u5de5\u5177\u4ee3\u66ff Topic \u914d\u7f6e\u3001Broker \u7ba1\u7406\u7b49\u547d\u4ee4\u884c\u64cd\u4f5c\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/04-\u90e8\u7f72\u4e0e\u8fd0\u7ef4/17Dashboard.md",sourceDirName:"04-\u90e8\u7f72\u4e0e\u8fd0\u7ef4",slug:"/\u90e8\u7f72\u4e0e\u8fd0\u7ef4/17Dashboard",permalink:"/docs/4.x/\u90e8\u7f72\u4e0e\u8fd0\u7ef4/17Dashboard",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/04-\u90e8\u7f72\u4e0e\u8fd0\u7ef4/17Dashboard.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"Admin Tool",permalink:"/docs/4.x/\u90e8\u7f72\u4e0e\u8fd0\u7ef4/16admintool"},next:{title:"RocketMQ Promethus Exporter",permalink:"/docs/4.x/\u90e8\u7f72\u4e0e\u8fd0\u7ef4/18Exporter"}},p={},d=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u529f\u80fd\u6982\u89c8",id:"\u529f\u80fd\u6982\u89c8",level:3},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"1. docker \u955c\u50cf\u5b89\u88c5",id:"1-docker-\u955c\u50cf\u5b89\u88c5",level:3},{value:"2. \u6e90\u7801\u5b89\u88c5",id:"2-\u6e90\u7801\u5b89\u88c5",level:3},{value:"\u4f7f\u7528\u6559\u7a0b",id:"\u4f7f\u7528\u6559\u7a0b",level:2},{value:"1. \u521b\u5efa\u4e3b\u9898 Topic",id:"1-\u521b\u5efa\u4e3b\u9898-topic",level:3},{value:"2. \u521b\u5efa\u6d88\u8d39\u8005\u7ec4 consumer",id:"2-\u521b\u5efa\u6d88\u8d39\u8005\u7ec4-consumer",level:3},{value:"3. \u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9",id:"3-\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9",level:3},{value:"4. \u6269\u5bb9 Topic \u961f\u5217",id:"4-\u6269\u5bb9-topic-\u961f\u5217",level:3},{value:"5. \u6269\u5bb9 Broker",id:"5-\u6269\u5bb9-broker",level:3},{value:"6. \u53d1\u9001\u6d88\u606f",id:"6-\u53d1\u9001\u6d88\u606f",level:3}],c={toc:d};function k(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rocketmq-dashboard"},"RocketMQ Dashboard"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RocketMQ Dashboard")," \u662f RocketMQ \u7684\u7ba1\u63a7\u5229\u5668\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u5ba2\u6237\u7aef\u548c\u5e94\u7528\u7a0b\u5e8f\u7684\u5404\u79cd\u4e8b\u4ef6\u3001\u6027\u80fd\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u652f\u6301\u4ee5\u53ef\u89c6\u5316\u5de5\u5177\u4ee3\u66ff Topic \u914d\u7f6e\u3001Broker \u7ba1\u7406\u7b49\u547d\u4ee4\u884c\u64cd\u4f5c\u3002"),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("h3",{id:"\u529f\u80fd\u6982\u89c8"},"\u529f\u80fd\u6982\u89c8"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9762\u677f"),(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd0\u7ef4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539nameserver \u5730\u5740;  \u9009\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"VIPChannel"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u9a7e\u9a76\u8231"),(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b broker, topic \u6d88\u606f\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u96c6\u7fa4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\u5206\u5e03\uff0cbroker \u914d\u7f6e\u3001\u8fd0\u884c\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4e3b\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"\u641c\u7d22\u3001\u7b5b\u9009\u3001\u5220\u9664\u3001\u66f4\u65b0/\u65b0\u589e\u4e3b\u9898\uff0c\u6d88\u606f\u8def\u7531\uff0c\u53d1\u9001\u6d88\u606f\uff0c\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u8005"),(0,r.kt)("td",{parentName:"tr",align:null},"\u641c\u7d22\u3001\u5220\u9664\u3001\u65b0\u589e/\u66f4\u65b0\u6d88\u8d39\u8005\u7ec4\uff0c\u7ec8\u7aef\uff0c\u6d88\u8d39\u8be6\u60c5\uff0c\u914d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u8bb0\u5f55\uff0c\u79c1\u4fe1\u6d88\u606f\uff0c\u6d88\u606f\u8f68\u8ff9\u7b49\u6d88\u606f\u8be6\u60c5")))),(0,r.kt)("p",null,"\u64cd\u4f5c\u9762\u677f\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1657630174311",src:a(85624).Z,width:"1241",height:"831"})),(0,r.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,r.kt)("p",null,"\u7cfb\u7edf\u8981\u6c42\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Linux/Unix/Mac"),(0,r.kt)("li",{parentName:"ol"},"64bit JDK 1.8+"),(0,r.kt)("li",{parentName:"ol"},"Maven 3.2.x"),(0,r.kt)("li",{parentName:"ol"},"\u542f\u52a8 ",(0,r.kt)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/quick-start/"},"RocketMQ")," ")),(0,r.kt)("p",null,"\u7f51\u7edc\u914d\u7f6e\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e91\u670d\u52a1\u5668\u53ef\u8fdc\u7a0b\u8bbf\u95ee\u6216\u672c\u5730\u865a\u62df\u673a\u53ef PING \u901a\u5916\u7f51"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"rocketmq")," \u914d\u7f6e\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"li"},"broker.conf / broker-x.properties")," \u8bbe\u7f6e nameserver \u5730\u5740\u548c\u7aef\u53e3\u53f7"),(0,r.kt)("li",{parentName:"ol"},"\u7528\u914d\u7f6e\u6587\u4ef6\u542f\u52a8 broker")),(0,r.kt)("h3",{id:"1-docker-\u955c\u50cf\u5b89\u88c5"},"1. docker \u955c\u50cf\u5b89\u88c5"),(0,r.kt)("p",null,"\u2460 \u5b89\u88c5docker\uff0c\u62c9\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq-dashboard")," \u955c\u50cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull apacherocketmq/rocketmq-dashboard:latest\n")),(0,r.kt)("p",null,"\u2461 docker \u5bb9\u5668\u4e2d\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq-dashboard")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'docker run -d --name rocketmq-dashboard -e "JAVA_OPTS=-Drocketmq.namesrv.addr=127.0.0.1:9876" -p 8080:8080 -t apacherocketmq/rocketmq-dashboard:latest\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"namesrv.addr:port")," \u66ff\u6362\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq"),"  \u4e2d\u914d\u7f6e\u7684 nameserver \u5730\u5740\uff1a\u7aef\u53e3\u53f7"),(0,r.kt)("p",{parentName:"div"},"\u5f00\u653e\u7aef\u53e3\u53f7\uff1a8080\uff0c9876\uff0c10911\uff0c11011 \u7aef\u53e3"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u4e91\u670d\u52a1\u5668\uff1a\u8bbe\u7f6e\u5b89\u5168\u7ec4\u8bbf\u95ee\u89c4\u5219"),(0,r.kt)("li",{parentName:"ul"},"\u672c\u5730\u865a\u62df\u673a\uff1a\u5173\u95ed\u9632\u706b\u5899\uff0c\u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"-add-port"))))),(0,r.kt)("h3",{id:"2-\u6e90\u7801\u5b89\u88c5"},"2. \u6e90\u7801\u5b89\u88c5"),(0,r.kt)("p",null,"\u6e90\u7801\u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-dashboard"},"apache/rocketmq-dashboard")," "),(0,r.kt)("p",null,"\u4e0b\u8f7d\u5e76\u89e3\u538b\uff0c\u5207\u6362\u81f3\u6e90\u7801\u76ee\u5f55 ",(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq-dashboard-master/")),(0,r.kt)("p",null,"\u2460 \u7f16\u8bd1 ",(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq-dashboard")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mvn clean package -Dmaven.test.skip=true\n")),(0,r.kt)("p",null,"\u2461 \u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq-dashboard")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"java -jar target/rocketmq-dashboard-1.0.1-SNAPSHOT.jar\n")),(0,r.kt)("p",null,"\u63d0\u793a\uff1a",(0,r.kt)("strong",{parentName:"p"},"Started App in x.xxx seconds (JVM running for x.xxx)")," \u542f\u52a8\u6210\u529f"),(0,r.kt)("p",null,"\u6d4f\u89c8\u5668\u9875\u9762\u8bbf\u95ee\uff1anamesrv.addr:8080"),(0,r.kt)("p",null,"\u5173\u95ed ",(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq-dashboard")," : ctrl + c"),(0,r.kt)("p",null,"\u518d\u6b21\u542f\u52a8\uff1a\u6267\u884c \u2461"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"tips"),"\uff1a\u4e0b\u8f7d\u540e\u7684\u6e90\u7801\u9700\u8981\u4e0a\u4f20\u5230 Linux \u7cfb\u7edf\u4e0a\u7f16\u8bd1\uff0c\u672c\u5730\u7f16\u8bd1\u53ef\u80fd\u4f1a\u62a5\u9519\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u6559\u7a0b"},"\u4f7f\u7528\u6559\u7a0b"),(0,r.kt)("h3",{id:"1-\u521b\u5efa\u4e3b\u9898-topic"},"1. \u521b\u5efa\u4e3b\u9898 Topic"),(0,r.kt)("p",null,"\u4e3b\u9898 ",(0,r.kt)("inlineCode",{parentName:"p"},">")," \u65b0\u589e/\u66f4\u65b0"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1657547091545",src:a(77044).Z,width:"897",height:"729"})),(0,r.kt)("h3",{id:"2-\u521b\u5efa\u6d88\u8d39\u8005\u7ec4-consumer"},"2. \u521b\u5efa\u6d88\u8d39\u8005\u7ec4 consumer"),(0,r.kt)("p",null,"\u6d88\u8d39\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},">")," \u65b0\u589e/\u66f4\u65b0"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1657547745254",src:a(73816).Z,width:"897",height:"413"})),(0,r.kt)("h3",{id:"3-\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9"},"3. \u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9"),(0,r.kt)("p",null,"\u4e3b\u9898 ",(0,r.kt)("inlineCode",{parentName:"p"},">")," \u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1657547891994",src:a(79358).Z,width:"914",height:"482"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"tips"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u6d88\u8d39\u652f\u6301\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9, \u5e7f\u64ad\u6a21\u5f0f\u4e0d\u652f\u6301."),(0,r.kt)("li",{parentName:"ul"},"\u6d88\u8d39\u8005\u4e0d\u5728\u7ebf\u4e0d\u80fd\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9")),(0,r.kt)("h3",{id:"4-\u6269\u5bb9-topic-\u961f\u5217"},"4. \u6269\u5bb9 Topic \u961f\u5217"),(0,r.kt)("p",null,"\u4e3b\u9898 ",(0,r.kt)("inlineCode",{parentName:"p"},">")," TOPIC\u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1657548375401",src:a(10008).Z,width:"898",height:"492"})),(0,r.kt)("h3",{id:"5-\u6269\u5bb9-broker"},"5. \u6269\u5bb9 Broker"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u90e8\u7f72\u4e00\u4e2a\u65b0\u7684 broker, nameserver \u5730\u5740\u548c\u5f53\u524d\u96c6\u7fa4\u4e00\u6837")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1657549432610",src:a(38190).Z,width:"1043",height:"372"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u66f4\u65b0 Topic \u7684BROKER_NAME"),(0,r.kt)("p",{parentName:"li"},"\u4e3b\u9898 ",(0,r.kt)("inlineCode",{parentName:"p"},">")," \u65b0\u589e/\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"p"},">")," BROKER_NAME"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1657549599728",src:a(293).Z,width:"1028",height:"415"})),(0,r.kt)("h3",{id:"6-\u53d1\u9001\u6d88\u606f"},"6. \u53d1\u9001\u6d88\u606f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5411\u6307\u5b9a Topic \u53d1\u9001\u6d88\u606f"),(0,r.kt)("p",{parentName:"li"},"\u4e3b\u9898 ",(0,r.kt)("inlineCode",{parentName:"p"},">")," \u53d1\u9001\u6d88\u606f"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1657550506673",src:a(45839).Z,width:"899",height:"550"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d1\u9001\u7ed3\u679c")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1657550592049",src:a(90765).Z,width:"959",height:"643"})),(0,r.kt)("p",null,"\u66f4\u591a\u64cd\u4f5c\u8be6\u60c5\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://start.aliyun.com/?accounttraceid=8fda44777a19460a925d871eb408e704qoln"},"\u963f\u91cc\u4e91\u77e5\u884c\u52a8\u624b\u5b9e\u9a8c\u5ba4-\u5728\u6d4f\u89c8\u5668\u6c89\u6d78\u5f0f\u5b66\u4e60\u6700\u65b0\u4e91\u539f\u751f\u6280\u672f (aliyun.com)")))}k.isMDXComponent=!0},85624:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1_dashboard-ab01f6bdd465d1202b5a7ff715cd6076.png"},77044:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2_createTopic-e384f0c6d87ddb0d73a9be06cbcb4d87.png"},73816:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/3_createConsumer-f88ab5dd052b4838381dc1eb1b0afca1.png"},79358:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/4_resetOffset-1eee0933f962ba710d8c7a05119acdf1.png"},10008:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/5_enlargeTopic-2490dbf79885d9e2b434926c09ff4706.png"},38190:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/6_cluster-328c0c9a35f26d6c2890aba4ab488093.png"},293:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/7_enlargeBroker-5bdd47824115dba426d8596f6c9c67ee.png"},45839:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/8_sendMessage-ea4cdf06c5195eabfc93ef8b6ff482f5.png"},90765:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/9_sendResult-9f60e816de687e657f556555f5c611ff.png"}}]);