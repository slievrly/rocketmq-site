"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[4674],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>c});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var m=a.createContext({}),u=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(m.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},o=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),o=u(n),c=l,d=o["".concat(m,".").concat(c)]||o[c]||k[c]||r;return n?a.createElement(d,p(p({ref:e},s),{},{components:n})):a.createElement(d,p({ref:e},s))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,p=new Array(r);p[0]=o;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:l,p[1]=i;for(var u=2;u<r;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},47360:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));const r={},p="\u6d88\u8d39\u91cd\u8bd5",i={unversionedId:"\u529f\u80fd\u884c\u4e3a/10consumerretrypolicy",id:"version-5.0/\u529f\u80fd\u884c\u4e3a/10consumerretrypolicy",title:"\u6d88\u8d39\u91cd\u8bd5",description:"\u6d88\u8d39\u8005\u51fa\u73b0\u5f02\u5e38\uff0c\u6d88\u8d39\u67d0\u6761\u6d88\u606f\u5931\u8d25\u65f6\uff0c Apache RocketMQ \u4f1a\u6839\u636e\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565\u91cd\u65b0\u6295\u9012\u8be5\u6d88\u606f\u8fdb\u884c\u6545\u969c\u6062\u590d\u3002\u672c\u6587\u4ecb\u7ecd\u6d88\u8d39\u91cd\u8bd5\u673a\u5236\u7684\u539f\u7406\u3001\u7248\u672c\u517c\u5bb9\u6027\u548c\u4f7f\u7528\u5efa\u8bae\u3002",source:"@site/versioned_docs/version-5.0/04-\u529f\u80fd\u884c\u4e3a/10consumerretrypolicy.md",sourceDirName:"04-\u529f\u80fd\u884c\u4e3a",slug:"/\u529f\u80fd\u884c\u4e3a/10consumerretrypolicy",permalink:"/zh/docs/\u529f\u80fd\u884c\u4e3a/10consumerretrypolicy",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/04-\u529f\u80fd\u884c\u4e3a/10consumerretrypolicy.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406",permalink:"/zh/docs/\u529f\u80fd\u884c\u4e3a/09consumerprogress"},next:{title:"\u6d88\u606f\u5b58\u50a8\u548c\u6e05\u7406\u673a\u5236",permalink:"/zh/docs/\u529f\u80fd\u884c\u4e3a/11messagestorepolicy"}},m={},u=[{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:2},{value:"\u5e94\u7528\u76ee\u7684",id:"\u5e94\u7528\u76ee\u7684",level:2},{value:"\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565\u6982\u8ff0",id:"\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565\u6982\u8ff0",level:2},{value:"PushConsumer\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565",id:"pushconsumer\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565",level:2},{value:"SimpleConsumer\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565",id:"simpleconsumer\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565",level:2},{value:"\u4f7f\u7528\u5efa\u8bae",id:"\u4f7f\u7528\u5efa\u8bae",level:2}],s={toc:u};function k(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6d88\u8d39\u91cd\u8bd5"},"\u6d88\u8d39\u91cd\u8bd5"),(0,l.kt)("p",null,"\u6d88\u8d39\u8005\u51fa\u73b0\u5f02\u5e38\uff0c\u6d88\u8d39\u67d0\u6761\u6d88\u606f\u5931\u8d25\u65f6\uff0c Apache RocketMQ \u4f1a\u6839\u636e\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565\u91cd\u65b0\u6295\u9012\u8be5\u6d88\u606f\u8fdb\u884c\u6545\u969c\u6062\u590d\u3002\u672c\u6587\u4ecb\u7ecd\u6d88\u8d39\u91cd\u8bd5\u673a\u5236\u7684\u539f\u7406\u3001\u7248\u672c\u517c\u5bb9\u6027\u548c\u4f7f\u7528\u5efa\u8bae\u3002"),(0,l.kt)("h2",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,l.kt)("p",null,"Apache RocketMQ \u7684\u6d88\u8d39\u91cd\u8bd5\u4e3b\u8981\u89e3\u51b3\u7684\u662f\u4e1a\u52a1\u5904\u7406\u903b\u8f91\u5931\u8d25\u5bfc\u81f4\u7684\u6d88\u8d39\u5b8c\u6574\u6027\u95ee\u9898\uff0c\u662f\u4e00\u79cd\u4e3a\u4e1a\u52a1\u515c\u5e95\u7684\u7b56\u7565\uff0c\u4e0d\u5e94\u8be5\u88ab\u7528\u505a\u4e1a\u52a1\u6d41\u7a0b\u63a7\u5236\u3002\u5efa\u8bae\u4ee5\u4e0b\u6d88\u8d39\u5931\u8d25\u573a\u666f\u4f7f\u7528\u91cd\u8bd5\u673a\u5236\uff1a"),(0,l.kt)("p",null,"\u63a8\u8350\u4f7f\u7528\u6d88\u606f\u91cd\u8bd5\u573a\u666f\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e1a\u52a1\u5904\u7406\u5931\u8d25\uff0c\u4e14\u5931\u8d25\u539f\u56e0\u8ddf\u5f53\u524d\u7684\u6d88\u606f\u5185\u5bb9\u76f8\u5173\uff0c\u6bd4\u5982\u8be5\u6d88\u606f\u5bf9\u5e94\u7684\u4e8b\u52a1\u72b6\u6001\u8fd8\u672a\u83b7\u53d6\u5230\uff0c\u9884\u671f\u4e00\u6bb5\u65f6\u95f4\u540e\u53ef\u6267\u884c\u6210\u529f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6d88\u8d39\u5931\u8d25\u7684\u539f\u56e0\u4e0d\u4f1a\u5bfc\u81f4\u8fde\u7eed\u6027\uff0c\u5373\u5f53\u524d\u6d88\u606f\u6d88\u8d39\u5931\u8d25\u662f\u4e00\u4e2a\u5c0f\u6982\u7387\u4e8b\u4ef6\uff0c\u4e0d\u662f\u5e38\u6001\u5316\u7684\u5931\u8d25\uff0c\u540e\u9762\u7684\u6d88\u606f\u5927\u6982\u7387\u4f1a\u6d88\u8d39\u6210\u529f\u3002\u6b64\u65f6\u53ef\u4ee5\u5bf9\u5f53\u524d\u6d88\u606f\u8fdb\u884c\u91cd\u8bd5\uff0c\u907f\u514d\u8fdb\u7a0b\u963b\u585e\u3002"))),(0,l.kt)("p",null,"\u5178\u578b\u9519\u8bef\u4f7f\u7528\u573a\u666f\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6d88\u8d39\u5904\u7406\u903b\u8f91\u4e2d\u4f7f\u7528\u6d88\u8d39\u5931\u8d25\u6765\u505a\u6761\u4ef6\u5224\u65ad\u7684\u7ed3\u679c\u5206\u6d41\uff0c\u662f\u4e0d\u5408\u7406\u7684\uff0c\u56e0\u4e3a\u5904\u7406\u903b\u8f91\u5df2\u7ecf\u9884\u89c1\u4e86\u4e00\u5b9a\u4f1a\u5927\u91cf\u51fa\u73b0\u8be5\u5224\u65ad\u5206\u652f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6d88\u8d39\u5904\u7406\u4e2d\u4f7f\u7528\u6d88\u8d39\u5931\u8d25\u6765\u505a\u5904\u7406\u901f\u7387\u9650\u6d41\uff0c\u662f\u4e0d\u5408\u7406\u7684\u3002\u9650\u6d41\u7684\u76ee\u7684\u662f\u5c06\u8d85\u51fa\u6d41\u91cf\u7684\u6d88\u606f\u6682\u65f6\u5806\u79ef\u5728\u961f\u5217\u4e2d\u8fbe\u5230\u524a\u5cf0\u7684\u4f5c\u7528\uff0c\u800c\u4e0d\u662f\u8ba9\u6d88\u606f\u8fdb\u5165\u91cd\u8bd5\u94fe\u8def\u3002"))),(0,l.kt)("h2",{id:"\u5e94\u7528\u76ee\u7684"},"\u5e94\u7528\u76ee\u7684"),(0,l.kt)("p",null,"\u6d88\u606f\u4e2d\u95f4\u4ef6\u505a\u5f02\u6b65\u89e3\u8026\u65f6\u7684\u4e00\u4e2a\u5178\u578b\u95ee\u9898\u662f\u5982\u679c\u4e0b\u6e38\u670d\u52a1\u5904\u7406\u6d88\u606f\u4e8b\u4ef6\u5931\u8d25\uff0c\u5982\u4f55\u4fdd\u8bc1\u6574\u4e2a\u8c03\u7528\u94fe\u8def\u7684\u5b8c\u6574\u6027\u3002Apache RocketMQ \u4f5c\u4e3a\u91d1\u878d\u7ea7\u7684\u53ef\u9760\u4e1a\u52a1\u6d88\u606f\u4e2d\u95f4\u4ef6\uff0c\u5728\u6d88\u606f\u6295\u9012\u5904\u7406\u673a\u5236\u7684\u8bbe\u8ba1\u4e0a\u5929\u7136\u652f\u6301\u53ef\u9760\u4f20\u8f93\u7b56\u7565\uff0c\u901a\u8fc7\u5b8c\u6574\u7684\u786e\u8ba4\u548c\u91cd\u8bd5\u673a\u5236\u4fdd\u8bc1\u6bcf\u6761\u6d88\u606f\u90fd\u6309\u7167\u4e1a\u52a1\u7684\u9884\u671f\u88ab\u5904\u7406\u3002"),(0,l.kt)("p",null,"\u4e86\u89e3 Apache RocketMQ \u7684\u6d88\u606f\u786e\u8ba4\u673a\u5236\u4ee5\u53ca\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565\u53ef\u4ee5\u5e2e\u52a9\u60a8\u5206\u6790\u5982\u4e0b\u95ee\u9898\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u4f55\u4fdd\u8bc1\u4e1a\u52a1\u5b8c\u6574\u5904\u7406\u6d88\u606f\uff1a\u4e86\u89e3\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565\uff0c\u53ef\u4ee5\u5728\u8bbe\u8ba1\u5b9e\u73b0\u6d88\u8d39\u8005\u903b\u8f91\u65f6\u4fdd\u8bc1\u6bcf\u6761\u6d88\u606f\u5904\u7406\u7684\u5b8c\u6574\u6027\uff0c\u907f\u514d\u90e8\u5206\u6d88\u606f\u51fa\u73b0\u5f02\u5e38\u65f6\u88ab\u5ffd\u7565\uff0c\u5bfc\u81f4\u4e1a\u52a1\u72b6\u6001\u4e0d\u4e00\u81f4\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7cfb\u7edf\u5f02\u5e38\u65f6\u5904\u7406\u4e2d\u7684\u6d88\u606f\u72b6\u6001\u5982\u4f55\u6062\u590d\uff1a\u5e2e\u52a9\u60a8\u4e86\u89e3\u5f53\u7cfb\u7edf\u51fa\u73b0\u5f02\u5e38\uff08\u5b95\u673a\u6545\u969c\uff09\u7b49\u573a\u666f\u65f6\uff0c\u5904\u7406\u4e2d\u7684\u6d88\u606f\u72b6\u6001\u5982\u4f55\u6062\u590d\uff0c\u662f\u5426\u4f1a\u51fa\u73b0\u72b6\u6001\u4e0d\u4e00\u81f4\u3002"))),(0,l.kt)("h2",{id:"\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565\u6982\u8ff0"},"\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565\u6982\u8ff0"),(0,l.kt)("p",null,"\u6d88\u8d39\u91cd\u8bd5\u6307\u7684\u662f\uff0c\u6d88\u8d39\u8005\u5728\u6d88\u8d39\u67d0\u6761\u6d88\u606f\u5931\u8d25\u540e\uff0cApache RocketMQ \u670d\u52a1\u7aef\u4f1a\u6839\u636e\u91cd\u8bd5\u7b56\u7565\u91cd\u65b0\u6d88\u8d39\u8be5\u6d88\u606f\uff0c\u8d85\u8fc7\u4e00\u6b21\u5b9a\u6570\u540e\u82e5\u8fd8\u672a\u6d88\u8d39\u6210\u529f\uff0c\u5219\u8be5\u6d88\u606f\u5c06\u4e0d\u518d\u7ee7\u7eed\u91cd\u8bd5\uff0c\u76f4\u63a5\u88ab\u53d1\u9001\u5230\u6b7b\u4fe1\u961f\u5217\u4e2d\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6d88\u606f\u91cd\u8bd5\u7684\u89e6\u53d1\u6761\u4ef6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6d88\u8d39\u5931\u8d25\uff0c\u5305\u62ec\u6d88\u8d39\u8005\u8fd4\u56de\u6d88\u606f\u5931\u8d25\u72b6\u6001\u6807\u8bc6\u6216\u629b\u51fa\u975e\u9884\u671f\u5f02\u5e38\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6d88\u606f\u5904\u7406\u8d85\u65f6\uff0c\u5305\u62ec\u5728PushConsumer\u4e2d\u6392\u961f\u8d85\u65f6\u3002"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6d88\u606f\u91cd\u8bd5\u7b56\u7565\u4e3b\u8981\u884c\u4e3a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u91cd\u8bd5\u8fc7\u7a0b\u72b6\u6001\u673a\uff1a\u63a7\u5236\u6d88\u606f\u5728\u91cd\u8bd5\u6d41\u7a0b\u4e2d\u7684\u72b6\u6001\u548c\u53d8\u5316\u903b\u8f91\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u91cd\u8bd5\u95f4\u9694\uff1a\u4e0a\u4e00\u6b21\u6d88\u8d39\u5931\u8d25\u6216\u8d85\u65f6\u540e\uff0c\u4e0b\u6b21\u91cd\u65b0\u5c1d\u8bd5\u6d88\u8d39\u7684\u95f4\u9694\u65f6\u95f4\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6700\u5927\u91cd\u8bd5\u6b21\u6570\uff1a\u6d88\u606f\u53ef\u88ab\u91cd\u8bd5\u6d88\u8d39\u7684\u6700\u5927\u6b21\u6570\u3002"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6d88\u606f\u91cd\u8bd5\u7b56\u7565\u5dee\u5f02")),(0,l.kt)("p",null,"\u6839\u636e\u6d88\u8d39\u8005\u7c7b\u578b\u4e0d\u540c\uff0c\u6d88\u606f\u91cd\u8bd5\u7b56\u7565\u7684\u5177\u4f53\u5185\u90e8\u673a\u5236\u548c\u8bbe\u7f6e\u65b9\u6cd5\u6709\u6240\u4e0d\u540c\uff0c\u5177\u4f53\u5dee\u5f02\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6d88\u8d39\u8005\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u91cd\u8bd5\u8fc7\u7a0b\u72b6\u6001\u673a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u91cd\u8bd5\u95f4\u9694"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6700\u5927\u91cd\u8bd5\u6b21\u6570"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PushConsumer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"}," \u5df2\u5c31\u7eea  ")," \u5904\u7406\u4e2d  ",(0,l.kt)("em",{parentName:"td"}," \u5f85\u91cd\u8bd5  ")," \u63d0\u4ea4  * \u6b7b\u4fe1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u8005\u5206\u7ec4\u521b\u5efa\u65f6\u5143\u6570\u636e\u63a7\u5236\u3002 ",(0,l.kt)("em",{parentName:"td"}," \u65e0\u5e8f\u6d88\u606f\uff1a\u9636\u68af\u95f4\u9694  ")," \u987a\u5e8f\u6d88\u606f\uff1a\u56fa\u5b9a\u95f4\u9694\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u8005\u5206\u7ec4\u521b\u5efa\u65f6\u7684\u5143\u6570\u636e\u63a7\u5236\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SimpleConsumer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"}," \u5df2\u5c31\u7eea  ")," \u5904\u7406\u4e2d  ",(0,l.kt)("em",{parentName:"td"}," \u63d0\u4ea4  ")," \u6b7b\u4fe1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7API\u4fee\u6539\u83b7\u53d6\u6d88\u606f\u65f6\u7684\u4e0d\u53ef\u89c1\u65f6\u95f4\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u8005\u5206\u7ec4\u521b\u5efa\u65f6\u7684\u5143\u6570\u636e\u63a7\u5236\u3002")))),(0,l.kt)("p",null,"\u5177\u4f53\u7684\u91cd\u8bd5\u7b56\u7565\uff0c\u8bf7\u53c2\u89c1\u4e0b\u6587",(0,l.kt)("a",{parentName:"p",href:"#section-qqo-bil-rc6"},"PushConsumer\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565"),"\u548c",(0,l.kt)("a",{parentName:"p",href:"#section-my2-2au-7gl"},"SimpleConsumer\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565"),"\u3002"),(0,l.kt)("h2",{id:"pushconsumer\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565"},"PushConsumer\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u91cd\u8bd5\u72b6\u6001\u673a")),(0,l.kt)("p",null,"PushConsumer\u6d88\u8d39\u6d88\u606f\u65f6\uff0c\u6d88\u606f\u7684\u51e0\u4e2a\u4e3b\u8981\u72b6\u6001\u5982\u4e0b\uff1a",(0,l.kt)("img",{alt:"Push\u6d88\u8d39\u72b6\u6001\u673a",src:n(18601).Z,width:"837",height:"543"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Ready\uff1a\u5df2\u5c31\u7eea\u72b6\u6001\u3002\u6d88\u606f\u5728Apache RocketMQ\u670d\u52a1\u7aef\u5df2\u5c31\u7eea\uff0c\u53ef\u4ee5\u88ab\u6d88\u8d39\u8005\u6d88\u8d39\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Inflight\uff1a\u5904\u7406\u4e2d\u72b6\u6001\u3002\u6d88\u606f\u88ab\u6d88\u8d39\u8005\u5ba2\u6237\u7aef\u83b7\u53d6\uff0c\u5904\u4e8e\u6d88\u8d39\u4e2d\u8fd8\u672a\u8fd4\u56de\u6d88\u8d39\u7ed3\u679c\u7684\u72b6\u6001\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"WaitingRetry\uff1a\u5f85\u91cd\u8bd5\u72b6\u6001\uff0cPushConsumer\u72ec\u6709\u7684\u72b6\u6001\u3002\u5f53\u6d88\u8d39\u8005\u6d88\u606f\u5904\u7406\u5931\u8d25\u6216\u6d88\u8d39\u8d85\u65f6\uff0c\u4f1a\u89e6\u53d1\u6d88\u8d39\u91cd\u8bd5\u903b\u8f91\u5224\u65ad\u3002\u5982\u679c\u5f53\u524d\u91cd\u8bd5\u6b21\u6570\u672a\u8fbe\u5230\u6700\u5927\u6b21\u6570\uff0c\u5219\u8be5\u6d88\u606f\u53d8\u4e3a\u5f85\u91cd\u8bd5\u72b6\u6001\uff0c\u7ecf\u8fc7\u91cd\u8bd5\u95f4\u9694\u540e\uff0c\u6d88\u606f\u5c06\u91cd\u65b0\u53d8\u4e3a\u5df2\u5c31\u7eea\u72b6\u6001\u53ef\u88ab\u91cd\u65b0\u6d88\u8d39\u3002\u591a\u6b21\u91cd\u8bd5\u4e4b\u95f4\uff0c\u53ef\u901a\u8fc7\u91cd\u8bd5\u95f4\u9694\u8fdb\u884c\u5ef6\u957f\uff0c\u9632\u6b62\u65e0\u6548\u9ad8\u9891\u7684\u5931\u8d25\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Commit\uff1a\u63d0\u4ea4\u72b6\u6001\u3002\u6d88\u8d39\u6210\u529f\u7684\u72b6\u6001\uff0c\u6d88\u8d39\u8005\u8fd4\u56de\u6210\u529f\u54cd\u5e94\u5373\u53ef\u7ed3\u675f\u6d88\u606f\u7684\u72b6\u6001\u673a\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"DLQ\uff1a\u6b7b\u4fe1\u72b6\u6001\u3002\u6d88\u8d39\u903b\u8f91\u7684\u6700\u7ec8\u515c\u5e95\u673a\u5236\uff0c\u82e5\u6d88\u606f\u4e00\u76f4\u5904\u7406\u5931\u8d25\u5e76\u4e0d\u65ad\u8fdb\u884c\u91cd\u8bd5\uff0c\u76f4\u5230\u8d85\u8fc7\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u8fd8\u672a\u6210\u529f\uff0c\u6b64\u65f6\u6d88\u606f\u4e0d\u4f1a\u518d\u91cd\u8bd5\uff0c\u4f1a\u88ab\u6295\u9012\u81f3\u6b7b\u4fe1\u961f\u5217\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u6d88\u8d39\u6b7b\u4fe1\u961f\u5217\u7684\u6d88\u606f\u8fdb\u884c\u4e1a\u52a1\u6062\u590d\u3002"))),(0,l.kt)("p",null,"\u6d88\u606f\u91cd\u8bd5\u8fc7\u7a0b\u4e2d\uff0c\u6bcf\u6b21\u91cd\u8bd5\u6d88\u606f\u72b6\u6001\u90fd\u4f1a\u7ecf\u8fc7\u5df2\u5c31\u7eea",">","\u5904\u7406\u4e2d",">","\u5f85\u91cd\u8bd5\u7684\u53d8\u5316\uff0c\u4e24\u6b21\u6d88\u8d39\u95f4\u7684\u95f4\u9694\u65f6\u95f4\u5b9e\u9645\u7531\u6d88\u8d39\u8017\u65f6\u53ca\u91cd\u8bd5\u95f4\u9694\u63a7\u5236\uff0c\u6d88\u8d39\u8017\u65f6\u7684\u6700\u5927\u4e0a\u9650\u53d7\u670d\u52a1\u7aef\u7cfb\u7edf\u53c2\u6570\u63a7\u5236\uff0c\u4e00\u822c\u4e0d\u5e94\u8be5\u8d85\u8fc7\u4e0a\u9650\u65f6\u95f4\u3002",(0,l.kt)("img",{alt:"\u6d88\u606f\u95f4\u9694\u65f6\u95f4",src:n(62946).Z,width:"1060",height:"310"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6700\u5927\u91cd\u8bd5\u6b21\u6570")),(0,l.kt)("p",null,"PushConsumer\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u7531\u6d88\u8d39\u8005\u5206\u7ec4\u521b\u5efa\u65f6\u7684\u5143\u6570\u636e\u63a7\u5236\uff0c\u5177\u4f53\u53c2\u6570\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/%E9%A2%86%E5%9F%9F%E6%A8%A1%E5%9E%8B/07consumergroup"},"\u6d88\u8d39\u8005\u5206\u7ec4"),"\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u4e3a3\u6b21\uff0c\u5219\u8be5\u6d88\u606f\u6700\u591a\u53ef\u88ab\u6295\u90124\u6b21\uff0c1\u6b21\u4e3a\u539f\u59cb\u6d88\u606f\uff0c3\u6b21\u4e3a\u91cd\u8bd5\u6295\u9012\u6b21\u6570\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u91cd\u8bd5\u95f4\u9694\u65f6\u95f4")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u65e0\u5e8f\u6d88\u606f\uff08\u975e\u987a\u5e8f\u6d88\u606f\uff09\uff1a\u91cd\u8bd5\u95f4\u9694\u4e3a\u9636\u68af\u65f6\u95f4\uff0c\u5177\u4f53\u65f6\u95f4\u5982\u4e0b\uff1a"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7b2c\u51e0\u6b21\u91cd\u8bd5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4e0e\u4e0a\u6b21\u91cd\u8bd5\u7684\u95f4\u9694\u65f6\u95f4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7b2c\u51e0\u6b21\u91cd\u8bd5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4e0e\u4e0a\u6b21\u91cd\u8bd5\u7684\u95f4\u9694\u65f6\u95f4"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"10\u79d2"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"7\u5206\u949f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"30\u79d2"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"8\u5206\u949f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"1\u5206\u949f"),(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},"9\u5206\u949f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"2\u5206\u949f"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"10\u5206\u949f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"3\u5206\u949f"),(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"20\u5206\u949f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"4\u5206\u949f"),(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"30\u5206\u949f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"5\u5206\u949f"),(0,l.kt)("td",{parentName:"tr",align:null},"15"),(0,l.kt)("td",{parentName:"tr",align:null},"1\u5c0f\u65f6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"6\u5206\u949f"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"2\u5c0f\u65f6")))))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u82e5\u91cd\u8bd5\u6b21\u6570\u8d85\u8fc716\u6b21\uff0c\u540e\u9762\u6bcf\u6b21\u91cd\u8bd5\u95f4\u9694\u90fd\u4e3a2\u5c0f\u65f6\u3002"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u987a\u5e8f\u6d88\u606f\uff1a\u91cd\u8bd5\u95f4\u9694\u4e3a\u56fa\u5b9a\u65f6\u95f4\uff0c\u5177\u4f53\u53d6\u503c\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"li",href:"/zh/docs/%E5%9F%BA%E7%A1%80%E4%BB%8B%E7%BB%8D/03limits"},"\u53c2\u6570\u9650\u5236"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u793a\u4f8b")),(0,l.kt)("p",null,"PushConsumer\u89e6\u53d1\u6d88\u606f\u91cd\u8bd5\u53ea\u9700\u8981\u8fd4\u56de\u6d88\u8d39\u5931\u8d25\u7684\u72b6\u6001\u7801\u5373\u53ef\uff0c\u5f53\u51fa\u73b0\u975e\u9884\u671f\u7684\u5f02\u5e38\u65f6\uff0c\u4e5f\u4f1a\u88abSDK\u6355\u83b7\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"SimpleConsumer simpleConsumer = null;\n        //\u6d88\u8d39\u793a\u4f8b\uff1a\u4f7f\u7528PushConsumer\u6d88\u8d39\u666e\u901a\u6d88\u606f\uff0c\u5982\u679c\u6d88\u8d39\u5931\u8d25\u8fd4\u56de\u9519\u8bef\uff0c\u5373\u53ef\u89e6\u53d1\u91cd\u8bd5\u3002\n        MessageListener messageListener = new MessageListener() {\n            @Override\n            public ConsumeResult consume(MessageView messageView) {\n                System.out.println(messageView);\n                //\u8fd4\u56de\u6d88\u8d39\u5931\u8d25\uff0c\u4f1a\u81ea\u52a8\u91cd\u8bd5\uff0c\u76f4\u81f3\u5230\u8fbe\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u3002\n                return ConsumeResult.FAILURE;\n            }\n        };\n            \n")),(0,l.kt)("h2",{id:"simpleconsumer\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565"},"SimpleConsumer\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u91cd\u8bd5\u72b6\u6001\u673a")),(0,l.kt)("p",null,"SimpleConsumer\u6d88\u8d39\u6d88\u606f\u65f6\uff0c\u6d88\u606f\u7684\u51e0\u4e2a\u4e3b\u8981\u72b6\u6001\u5982\u4e0b\uff1a",(0,l.kt)("img",{alt:"SimpleConsumer\u72b6\u6001\u673a",src:n(11373).Z,width:"835",height:"543"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Ready\uff1a\u5df2\u5c31\u7eea\u72b6\u6001\u3002\u6d88\u606f\u5728Apache RocketMQ\u670d\u52a1\u7aef\u5df2\u5c31\u7eea\uff0c\u53ef\u4ee5\u88ab\u6d88\u8d39\u8005\u6d88\u8d39\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Inflight\uff1a\u5904\u7406\u4e2d\u72b6\u6001\u3002\u6d88\u606f\u88ab\u6d88\u8d39\u8005\u5ba2\u6237\u7aef\u83b7\u53d6\uff0c\u5904\u4e8e\u6d88\u8d39\u4e2d\u8fd8\u672a\u8fd4\u56de\u6d88\u8d39\u7ed3\u679c\u7684\u72b6\u6001\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Commit\uff1a\u63d0\u4ea4\u72b6\u6001\u3002\u6d88\u8d39\u6210\u529f\u7684\u72b6\u6001\uff0c\u6d88\u8d39\u8005\u8fd4\u56de\u6210\u529f\u54cd\u5e94\u5373\u53ef\u7ed3\u675f\u6d88\u606f\u7684\u72b6\u6001\u673a\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"DLQ\uff1a\u6b7b\u4fe1\u72b6\u6001\u3002\u6d88\u8d39\u903b\u8f91\u7684\u6700\u7ec8\u515c\u5e95\u673a\u5236\uff0c\u82e5\u6d88\u606f\u4e00\u76f4\u5904\u7406\u5931\u8d25\u5e76\u4e0d\u65ad\u8fdb\u884c\u91cd\u8bd5\uff0c\u76f4\u5230\u8d85\u8fc7\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u8fd8\u672a\u6210\u529f\uff0c\u6b64\u65f6\u6d88\u606f\u4e0d\u4f1a\u518d\u91cd\u8bd5\uff0c\u4f1a\u88ab\u6295\u9012\u81f3\u6b7b\u4fe1\u961f\u5217\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u6d88\u8d39\u6b7b\u4fe1\u961f\u5217\u7684\u6d88\u606f\u8fdb\u884c\u4e1a\u52a1\u6062\u590d\u3002"))),(0,l.kt)("p",null,"\u548cPushConsumer\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565\u4e0d\u540c\u7684\u662f\uff0cSimpleConsumer\u6d88\u8d39\u8005\u7684\u91cd\u8bd5\u95f4\u9694\u662f\u9884\u5206\u914d\u7684\uff0c\u6bcf\u6b21\u83b7\u53d6\u6d88\u606f\u6d88\u8d39\u8005\u4f1a\u5728\u8c03\u7528API\u65f6\u8bbe\u7f6e\u4e00\u4e2a\u4e0d\u53ef\u89c1\u65f6\u95f4\u53c2\u6570 InvisibleDuration\uff0c\u5373\u6d88\u606f\u7684\u6700\u5927\u5904\u7406\u65f6\u957f\u3002\u82e5\u6d88\u606f\u6d88\u8d39\u5931\u8d25\u89e6\u53d1\u91cd\u8bd5\uff0c\u4e0d\u9700\u8981\u8bbe\u7f6e\u4e0b\u4e00\u6b21\u91cd\u8bd5\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u76f4\u63a5\u590d\u7528\u4e0d\u53ef\u89c1\u65f6\u95f4\u53c2\u6570\u7684\u53d6\u503c\u3002\n",(0,l.kt)("img",{alt:"simpleconsumer\u91cd\u8bd5",src:n(46961).Z,width:"1047",height:"289"})),(0,l.kt)("p",null,"\u7531\u4e8e\u4e0d\u53ef\u89c1\u65f6\u95f4\u4e3a\u9884\u5206\u914d\u7684\uff0c\u53ef\u80fd\u548c\u5b9e\u9645\u4e1a\u52a1\u4e2d\u7684\u6d88\u606f\u5904\u7406\u65f6\u95f4\u5dee\u522b\u8f83\u5927\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7API\u63a5\u53e3\u4fee\u6539\u4e0d\u53ef\u89c1\u65f6\u95f4\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u60a8\u9884\u8bbe\u6d88\u606f\u5904\u7406\u8017\u65f6\u6700\u591a20 ms\uff0c\u4f46\u5b9e\u9645\u4e1a\u52a1\u4e2d20 ms\u5185\u6d88\u606f\u5904\u7406\u4e0d\u5b8c\uff0c\u60a8\u53ef\u4ee5\u4fee\u6539\u6d88\u606f\u4e0d\u53ef\u89c1\u65f6\u95f4\uff0c\u5ef6\u957f\u6d88\u606f\u5904\u7406\u65f6\u95f4\uff0c\u907f\u514d\u6d88\u606f\u89e6\u53d1\u91cd\u8bd5\u673a\u5236\u3002"),(0,l.kt)("p",null,"\u4fee\u6539\u6d88\u606f\u4e0d\u53ef\u89c1\u65f6\u95f4\u9700\u8981\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6d88\u606f\u5904\u7406\u672a\u8d85\u65f6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6d88\u606f\u5904\u7406\u672a\u63d0\u4ea4\u6d88\u8d39\u72b6\u6001"))),(0,l.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u6d88\u606f\u4e0d\u53ef\u89c1\u65f6\u95f4\u4fee\u6539\u540e\u7acb\u5373\u751f\u6548\uff0c\u5373\u4ece\u8c03\u7528API\u65f6\u523b\u5f00\u59cb\uff0c\u91cd\u65b0\u8ba1\u7b97\u6d88\u606f\u4e0d\u53ef\u89c1\u65f6\u95f4\u3002\n",(0,l.kt)("img",{alt:"\u4fee\u6539\u4e0d\u53ef\u89c1\u65f6\u95f4",src:n(60899).Z,width:"689",height:"333"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6700\u5927\u91cd\u8bd5\u6b21\u6570")),(0,l.kt)("p",null,"SimpleConsumer\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u7531\u6d88\u8d39\u8005\u5206\u7ec4\u521b\u5efa\u65f6\u7684\u5143\u6570\u636e\u63a7\u5236\uff0c\u5177\u4f53\u53c2\u6570\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/%E9%A2%86%E5%9F%9F%E6%A8%A1%E5%9E%8B/07consumergroup"},"\u6d88\u8d39\u8005\u5206\u7ec4"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6d88\u606f\u91cd\u8bd5\u95f4\u9694")),(0,l.kt)("p",null,"\u6d88\u606f\u91cd\u8bd5\u95f4\u9694=\u4e0d\u53ef\u89c1\u65f6\u95f4\uff0d\u6d88\u606f\u5b9e\u9645\u5904\u7406\u65f6\u957f"),(0,l.kt)("p",null,"SimpleConsumer \u7684\u6d88\u8d39\u91cd\u8bd5\u95f4\u9694\u901a\u8fc7\u6d88\u606f\u7684\u4e0d\u53ef\u89c1\u65f6\u95f4\u63a7\u5236\u3002\u4f8b\u5982\uff0c\u6d88\u606f\u4e0d\u53ef\u89c1\u65f6\u95f4\u4e3a30 ms\uff0c\u5b9e\u9645\u6d88\u606f\u5904\u7406\u7528\u4e8610 ms\u5c31\u8fd4\u56de\u5931\u8d25\u54cd\u5e94\uff0c\u5219\u8ddd\u4e0b\u6b21\u6d88\u606f\u91cd\u8bd5\u8fd8\u9700\u898120 ms\uff0c\u6b64\u65f6\u7684\u6d88\u606f\u91cd\u8bd5\u95f4\u9694\u5373\u4e3a20 ms\uff1b\u82e5\u76f4\u523030 ms\u6d88\u606f\u8fd8\u672a\u5904\u7406\u5b8c\u6210\u4e14\u672a\u8fd4\u56de\u7ed3\u679c\uff0c\u5219\u6d88\u606f\u8d85\u65f6\uff0c\u7acb\u5373\u91cd\u8bd5\uff0c\u6b64\u65f6\u91cd\u8bd5\u95f4\u9694\u5373\u4e3a0 ms\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u793a\u4f8b")),(0,l.kt)("p",null,"SimpleConsumer \u89e6\u53d1\u6d88\u606f\u91cd\u8bd5\u53ea\u9700\u8981\u7b49\u5f85\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"}," //\u6d88\u8d39\u793a\u4f8b\uff1a\u4f7f\u7528SimpleConsumer\u6d88\u8d39\u666e\u901a\u6d88\u606f\uff0c\u5982\u679c\u5e0c\u671b\u91cd\u8bd5\uff0c\u53ea\u9700\u8981\u9759\u9ed8\u7b49\u5f85\u8d85\u65f6\u5373\u53ef\uff0c\u670d\u52a1\u7aef\u4f1a\u81ea\u52a8\u91cd\u8bd5\u3002\n        List<MessageView> messageViewList = null;\n        try {\n            messageViewList = simpleConsumer.receive(10, Duration.ofSeconds(30));\n            messageViewList.forEach(messageView -> {\n                System.out.println(messageView);\n                //\u5982\u679c\u5904\u7406\u5931\u8d25\uff0c\u5e0c\u671b\u670d\u52a1\u7aef\u91cd\u8bd5\uff0c\u53ea\u9700\u8981\u5ffd\u7565\u5373\u53ef\uff0c\u7b49\u5f85\u6d88\u606f\u518d\u6b21\u53ef\u89c1\u540e\u5373\u53ef\u91cd\u8bd5\u83b7\u53d6\u3002\n            });\n        } catch (ClientException e) {\n            //\u5982\u679c\u9047\u5230\u7cfb\u7edf\u6d41\u63a7\u7b49\u539f\u56e0\u9020\u6210\u62c9\u53d6\u5931\u8d25\uff0c\u9700\u8981\u91cd\u65b0\u53d1\u8d77\u83b7\u53d6\u6d88\u606f\u8bf7\u6c42\u3002\n            e.printStackTrace();\n        }\n")),(0,l.kt)("h2",{id:"\u4f7f\u7528\u5efa\u8bae"},"\u4f7f\u7528\u5efa\u8bae"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5408\u7406\u91cd\u8bd5\uff0c\u907f\u514d\u56e0\u9650\u6d41\u7b49\u8bc9\u6c42\u89e6\u53d1\u6d88\u8d39\u91cd\u8bd5")),(0,l.kt)("p",null,"\u4e0a\u6587",(0,l.kt)("a",{parentName:"p",href:"#section-d2i-0sk-rtf"},"\u5e94\u7528\u573a\u666f"),"\u4e2d\u63d0\u5230\uff0c\u6d88\u606f\u91cd\u8bd5\u9002\u7528\u4e1a\u52a1\u5904\u7406\u5931\u8d25\u4e14\u5f53\u524d\u6d88\u8d39\u4e3a\u5c0f\u6982\u7387\u4e8b\u4ef6\u7684\u573a\u666f\uff0c\u4e0d\u9002\u5408\u5728\u8fde\u7eed\u6027\u5931\u8d25\u7684\u573a\u666f\u4e0b\u4f7f\u7528\uff0c\u4f8b\u5982\u6d88\u8d39\u9650\u6d41\u573a\u666f\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9519\u8bef\u793a\u4f8b\uff1a\u5982\u679c\u5f53\u524d\u6d88\u8d39\u901f\u5ea6\u8fc7\u9ad8\u89e6\u53d1\u9650\u6d41\uff0c\u5219\u8fd4\u56de\u6d88\u8d39\u5931\u8d25\uff0c\u7b49\u5f85\u4e0b\u6b21\u91cd\u65b0\u6d88\u8d39\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6b63\u786e\u793a\u4f8b\uff1a\u5982\u679c\u5f53\u524d\u6d88\u8d39\u901f\u5ea6\u8fc7\u9ad8\u89e6\u53d1\u9650\u6d41\uff0c\u5219\u5ef6\u8fdf\u83b7\u53d6\u6d88\u606f\uff0c\u7a0d\u540e\u518d\u6d88\u8d39\u3002"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5408\u7406\u63a7\u5236\u91cd\u8bd5\u6b21\u6570\uff0c\u907f\u514d\u65e0\u9650\u91cd\u8bd5")),(0,l.kt)("p",null,"\u867d\u7136Apache RocketMQ\u652f\u6301\u81ea\u5b9a\u4e49\u6d88\u8d39\u91cd\u8bd5\u6b21\u6570\uff0c\u4f46\u662f\u5efa\u8bae\u901a\u8fc7\u51cf\u5c11\u91cd\u8bd5\u6b21\u6570+\u5ef6\u957f\u91cd\u8bd5\u95f4\u9694\u6765\u964d\u4f4e\u7cfb\u7edf\u538b\u529b\uff0c\u907f\u514d\u51fa\u73b0\u65e0\u9650\u91cd\u8bd5\u6216\u5927\u91cf\u91cd\u8bd5\u7684\u60c5\u51b5\u3002"))}k.isMDXComponent=!0},60899:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/changeInvisibletime-769fd45237e26f2ff333ee1149e66d47.png"},18601:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/retrymachinestatus-37ddbd0a20b8736e34bb88f565945d16.png"},62946:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/retrytimeline-27247ef53fbcf08c745b9f7d356de6f9.png"},11373:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/simplemachinestatus-1844bd0115b315e32661cf20b1732db0.png"},46961:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/simpletimeline-130218b5dca33422638d2ee6409a8330.png"}}]);