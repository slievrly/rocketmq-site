"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[4885],{3905:(e,r,a)=>{a.d(r,{Zo:()=>m,kt:()=>v});var n=a(67294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i=n.createContext({}),p=function(e){var r=n.useContext(i),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},m=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},k=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),k=p(a),v=t,d=k["".concat(i,".").concat(v)]||k[v]||c[v]||o;return a?n.createElement(d,l(l({ref:r},m),{},{components:a})):n.createElement(d,l({ref:r},m))}));function v(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=a.length,l=new Array(o);l[0]=k;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:t,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},34947:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),t=(a(67294),a(3905));const o={},l="\u90e8\u7f72\u65b9\u5f0f",s={unversionedId:"\u90e8\u7f72\u8fd0\u7ef4/15deploy",id:"version-5.0/\u90e8\u7f72\u8fd0\u7ef4/15deploy",title:"\u90e8\u7f72\u65b9\u5f0f",description:"Apache RocketMQ 5.0 \u7248\u672c\u5b8c\u6210\u57fa\u672c\u6d88\u606f\u6536\u53d1\uff0c\u5305\u62ec NameServer\u3001Broker\u3001Proxy \u7ec4\u4ef6\u3002 \u5728 5.0 \u7248\u672c\u4e2d Proxy \u548c Broker \u6839\u636e\u5b9e\u9645\u8bc9\u6c42\u53ef\u4ee5\u5206\u4e3a Local \u6a21\u5f0f\u548c Cluster \u6a21\u5f0f\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u5982\u679c\u6ca1\u6709\u7279\u6b8a\u9700\u6c42\uff0c\u6216\u8005\u9075\u5faa\u4ece\u65e9\u671f\u7248\u672c\u5e73\u6ed1\u5347\u7ea7\u7684\u601d\u8def\uff0c\u53ef\u4ee5\u9009\u7528Local\u6a21\u5f0f\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/05-\u90e8\u7f72\u8fd0\u7ef4/15deploy.md",sourceDirName:"05-\u90e8\u7f72\u8fd0\u7ef4",slug:"/\u90e8\u7f72\u8fd0\u7ef4/15deploy",permalink:"/docs/\u90e8\u7f72\u8fd0\u7ef4/15deploy",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/05-\u90e8\u7f72\u8fd0\u7ef4/15deploy.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Message storage and cleanup",permalink:"/docs/\u529f\u80fd\u884c\u4e3a/11messagestorepolicy"},next:{title:"Admin Tool",permalink:"/docs/\u90e8\u7f72\u8fd0\u7ef4/16admintool"}},i={},p=[{value:"\u90e8\u7f72\u65b9\u6848\u548c\u4f7f\u7528\u7ea6\u675f",id:"\u90e8\u7f72\u65b9\u6848\u548c\u4f7f\u7528\u7ea6\u675f",level:2},{value:"Local\u6a21\u5f0f\u90e8\u7f72",id:"local\u6a21\u5f0f\u90e8\u7f72",level:2},{value:"\u5355\u7ec4\u8282\u70b9\u5355\u526f\u672c\u6a21\u5f0f",id:"\u5355\u7ec4\u8282\u70b9\u5355\u526f\u672c\u6a21\u5f0f",level:3},{value:"\u542f\u52a8 NameServer",id:"\u542f\u52a8-nameserver",level:4},{value:"\u542f\u52a8 Broker+Proxy",id:"\u542f\u52a8-brokerproxy",level:4},{value:"\u591a\u7ec4\u8282\u70b9\uff08\u96c6\u7fa4\uff09\u5355\u526f\u672c\u6a21\u5f0f",id:"\u591a\u7ec4\u8282\u70b9\u96c6\u7fa4\u5355\u526f\u672c\u6a21\u5f0f",level:3},{value:"\u542f\u52a8NameServer",id:"\u542f\u52a8nameserver",level:3},{value:"\u542f\u52a8Broker+Proxy\u96c6\u7fa4",id:"\u542f\u52a8brokerproxy\u96c6\u7fa4",level:4},{value:"\u591a\u8282\u70b9\uff08\u96c6\u7fa4\uff09\u591a\u526f\u672c\u6a21\u5f0f-\u5f02\u6b65\u590d\u5236",id:"\u591a\u8282\u70b9\u96c6\u7fa4\u591a\u526f\u672c\u6a21\u5f0f-\u5f02\u6b65\u590d\u5236",level:2},{value:"\u542f\u52a8NameServer",id:"\u542f\u52a8nameserver-1",level:4},{value:"\u542f\u52a8Broker+Proxy\u96c6\u7fa4",id:"\u542f\u52a8brokerproxy\u96c6\u7fa4-1",level:4},{value:"\u591a\u8282\u70b9\uff08\u96c6\u7fa4\uff09\u591a\u526f\u672c\u6a21\u5f0f-\u540c\u6b65\u53cc\u5199",id:"\u591a\u8282\u70b9\u96c6\u7fa4\u591a\u526f\u672c\u6a21\u5f0f-\u540c\u6b65\u53cc\u5199",level:3},{value:"\u542f\u52a8NameServer",id:"\u542f\u52a8nameserver-2",level:4},{value:"\u542f\u52a8 Broker+Proxy \u96c6\u7fa4",id:"\u542f\u52a8-brokerproxy-\u96c6\u7fa4",level:4},{value:"Cluster\u6a21\u5f0f\u90e8\u7f72",id:"cluster\u6a21\u5f0f\u90e8\u7f72",level:2},{value:"\u542f\u52a8 NameServer",id:"\u542f\u52a8-nameserver-1",level:3},{value:"\u542f\u52a8 Broker",id:"\u542f\u52a8-broker",level:3},{value:"\u5355\u7ec4\u8282\u70b9\u5355\u526f\u672c\u6a21\u5f0f",id:"\u5355\u7ec4\u8282\u70b9\u5355\u526f\u672c\u6a21\u5f0f-1",level:4},{value:"\u591a\u7ec4\u8282\u70b9\uff08\u96c6\u7fa4\uff09\u5355\u526f\u672c\u6a21\u5f0f",id:"\u591a\u7ec4\u8282\u70b9\u96c6\u7fa4\u5355\u526f\u672c\u6a21\u5f0f-1",level:4},{value:"\u591a\u8282\u70b9\uff08\u96c6\u7fa4\uff09\u591a\u526f\u672c\u6a21\u5f0f-\u5f02\u6b65\u590d\u5236",id:"\u591a\u8282\u70b9\u96c6\u7fa4\u591a\u526f\u672c\u6a21\u5f0f-\u5f02\u6b65\u590d\u5236-1",level:4},{value:"\u591a\u8282\u70b9\uff08\u96c6\u7fa4\uff09\u591a\u526f\u672c\u6a21\u5f0f-\u540c\u6b65\u53cc\u5199",id:"\u591a\u8282\u70b9\u96c6\u7fa4\u591a\u526f\u672c\u6a21\u5f0f-\u540c\u6b65\u53cc\u5199-1",level:4},{value:"\u542f\u52a8 Proxy",id:"\u542f\u52a8-proxy",level:3}],m={toc:p};function c(e){let{components:r,...a}=e;return(0,t.kt)("wrapper",(0,n.Z)({},m,a,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"\u90e8\u7f72\u65b9\u5f0f"},"\u90e8\u7f72\u65b9\u5f0f"),(0,t.kt)("p",null,"Apache RocketMQ 5.0 \u7248\u672c\u5b8c\u6210\u57fa\u672c\u6d88\u606f\u6536\u53d1\uff0c\u5305\u62ec NameServer\u3001Broker\u3001Proxy \u7ec4\u4ef6\u3002 \u5728 5.0 \u7248\u672c\u4e2d Proxy \u548c Broker \u6839\u636e\u5b9e\u9645\u8bc9\u6c42\u53ef\u4ee5\u5206\u4e3a Local \u6a21\u5f0f\u548c Cluster \u6a21\u5f0f\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u5982\u679c\u6ca1\u6709\u7279\u6b8a\u9700\u6c42\uff0c\u6216\u8005\u9075\u5faa\u4ece\u65e9\u671f\u7248\u672c\u5e73\u6ed1\u5347\u7ea7\u7684\u601d\u8def\uff0c\u53ef\u4ee5\u9009\u7528Local\u6a21\u5f0f\u3002"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u5728 Local \u6a21\u5f0f\u4e0b\uff0cBroker \u548c Proxy \u662f\u540c\u8fdb\u7a0b\u90e8\u7f72\uff0c\u53ea\u662f\u5728\u539f\u6709 Broker \u7684\u914d\u7f6e\u57fa\u7840\u4e0a\u65b0\u589e Proxy \u7684\u7b80\u6613\u914d\u7f6e\u5c31\u53ef\u4ee5\u8fd0\u884c\u3002"),(0,t.kt)("li",{parentName:"ul"},"\u5728 Cluster \u6a21\u5f0f\u4e0b\uff0cBroker \u548c Proxy \u5206\u522b\u90e8\u7f72\uff0c\u5373\u5728\u539f\u6709\u7684\u96c6\u7fa4\u57fa\u7840\u4e0a\uff0c\u989d\u5916\u518d\u90e8\u7f72 Proxy \u5373\u53ef\u3002")),(0,t.kt)("h2",{id:"\u90e8\u7f72\u65b9\u6848\u548c\u4f7f\u7528\u7ea6\u675f"},"\u90e8\u7f72\u65b9\u6848\u548c\u4f7f\u7528\u7ea6\u675f"),(0,t.kt)("h2",{id:"local\u6a21\u5f0f\u90e8\u7f72"},"Local\u6a21\u5f0f\u90e8\u7f72"),(0,t.kt)("p",null,"\u7531\u4e8e Local \u6a21\u5f0f\u4e0b Proxy \u548c Broker \u662f\u540c\u8fdb\u7a0b\u90e8\u7f72\uff0cProxy\u672c\u8eab\u65e0\u72b6\u6001\uff0c\u56e0\u6b64\u4e3b\u8981\u7684\u96c6\u7fa4\u914d\u7f6e\u4ecd\u7136\u4ee5 Broker \u4e3a\u57fa\u7840\u8fdb\u884c\u5373\u53ef\u3002"),(0,t.kt)("h3",{id:"\u5355\u7ec4\u8282\u70b9\u5355\u526f\u672c\u6a21\u5f0f"},"\u5355\u7ec4\u8282\u70b9\u5355\u526f\u672c\u6a21\u5f0f"),(0,t.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"\u8fd9\u79cd\u65b9\u5f0f\u98ce\u9669\u8f83\u5927\uff0c\u56e0\u4e3a Broker \u53ea\u6709\u4e00\u4e2a\u8282\u70b9\uff0c\u4e00\u65e6Broker\u91cd\u542f\u6216\u8005\u5b95\u673a\u65f6\uff0c\u4f1a\u5bfc\u81f4\u6574\u4e2a\u670d\u52a1\u4e0d\u53ef\u7528\u3002\u4e0d\u5efa\u8bae\u7ebf\u4e0a\u73af\u5883\u4f7f\u7528, \u53ef\u4ee5\u7528\u4e8e\u672c\u5730\u6d4b\u8bd5\u3002"))),(0,t.kt)("h4",{id:"\u542f\u52a8-nameserver"},"\u542f\u52a8 NameServer"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"### \u9996\u5148\u542f\u52a8Name Server\n$ nohup sh mqnamesrv &\n \n### \u9a8c\u8bc1Name Server \u662f\u5426\u542f\u52a8\u6210\u529f\n$ tail -f ~/logs/rocketmqlogs/namesrv.log\nThe Name Server boot success...\n")),(0,t.kt)("h4",{id:"\u542f\u52a8-brokerproxy"},"\u542f\u52a8 Broker+Proxy"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ nohup sh bin/mqbroker -n localhost:9876 --enable-proxy &\n\n### \u9a8c\u8bc1Name Server \u662f\u5426\u542f\u52a8\u6210\u529f\uff0c\u4f8b\u5982Broker\u7684IP\u4e3a\uff1a192.168.1.2\uff0c\u4e14\u540d\u79f0\u4e3abroker-a\n$ tail -f ~/logs/rocketmqlogs/broker_default.log \nThe broker[xxx, 192.169.1.2:10911] boot success...\n")),(0,t.kt)("h3",{id:"\u591a\u7ec4\u8282\u70b9\u96c6\u7fa4\u5355\u526f\u672c\u6a21\u5f0f"},"\u591a\u7ec4\u8282\u70b9\uff08\u96c6\u7fa4\uff09\u5355\u526f\u672c\u6a21\u5f0f"),(0,t.kt)("p",null,"\u4e00\u4e2a\u96c6\u7fa4\u5185\u5168\u90e8\u90e8\u7f72 Master \u89d2\u8272\uff0c\u4e0d\u90e8\u7f72Slave \u526f\u672c\uff0c\u4f8b\u59822\u4e2aMaster\u6216\u80053\u4e2aMaster\uff0c\u8fd9\u79cd\u6a21\u5f0f\u7684\u4f18\u7f3a\u70b9\u5982\u4e0b\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"\u4f18\u70b9\uff1a\u914d\u7f6e\u7b80\u5355\uff0c\u5355\u4e2aMaster\u5b95\u673a\u6216\u91cd\u542f\u7ef4\u62a4\u5bf9\u5e94\u7528\u65e0\u5f71\u54cd\uff0c\u5728\u78c1\u76d8\u914d\u7f6e\u4e3aRAID10\u65f6\uff0c\u5373\u4f7f\u673a\u5668\u5b95\u673a\u4e0d\u53ef\u6062\u590d\u60c5\u51b5\u4e0b\uff0c\u7531\u4e8eRAID10\u78c1\u76d8\u975e\u5e38\u53ef\u9760\uff0c\u6d88\u606f\u4e5f\u4e0d\u4f1a\u4e22\uff08\u5f02\u6b65\u5237\u76d8\u4e22\u5931\u5c11\u91cf\u6d88\u606f\uff0c\u540c\u6b65\u5237\u76d8\u4e00\u6761\u4e0d\u4e22\uff09\uff0c\u6027\u80fd\u6700\u9ad8\uff1b")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"\u7f3a\u70b9\uff1a\u5355\u53f0\u673a\u5668\u5b95\u673a\u671f\u95f4\uff0c\u8fd9\u53f0\u673a\u5668\u4e0a\u672a\u88ab\u6d88\u8d39\u7684\u6d88\u606f\u5728\u673a\u5668\u6062\u590d\u4e4b\u524d\u4e0d\u53ef\u8ba2\u9605\uff0c\u6d88\u606f\u5b9e\u65f6\u6027\u4f1a\u53d7\u5230\u5f71\u54cd\u3002"))),(0,t.kt)("h3",{id:"\u542f\u52a8nameserver"},"\u542f\u52a8NameServer"),(0,t.kt)("p",null,"NameServer\u9700\u8981\u5148\u4e8eBroker\u542f\u52a8\uff0c\u4e14\u5982\u679c\u5728\u751f\u4ea7\u73af\u5883\u4f7f\u7528\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u9ad8\u53ef\u7528\uff0c\u5efa\u8bae\u4e00\u822c\u89c4\u6a21\u7684\u96c6\u7fa4\u542f\u52a83\u4e2aNameServer\uff0c\u5404\u8282\u70b9\u7684\u542f\u52a8\u547d\u4ee4\u76f8\u540c\uff0c\u5982\u4e0b\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"### \u9996\u5148\u542f\u52a8NameServer\n$ nohup sh mqnamesrv &\n \n### \u9a8c\u8bc1Name Server \u662f\u5426\u542f\u52a8\u6210\u529f\n$ tail -f ~/logs/rocketmqlogs/namesrv.log\nThe Name Server boot success...\n")),(0,t.kt)("h4",{id:"\u542f\u52a8brokerproxy\u96c6\u7fa4"},"\u542f\u52a8Broker+Proxy\u96c6\u7fa4"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"### \u5728\u673a\u5668A\uff0c\u542f\u52a8\u7b2c\u4e00\u4e2aMaster\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqbroker -n 192.168.1.1:9876 -c $ROCKETMQ_HOME/conf/2m-noslave/broker-a.properties --enable-proxy &\n \n### \u5728\u673a\u5668B\uff0c\u542f\u52a8\u7b2c\u4e8c\u4e2aMaster\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqbroker -n 192.168.1.1:9876 -c $ROCKETMQ_HOME/conf/2m-noslave/broker-b.properties --enable-proxy &\n\n...\n")),(0,t.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"\u5982\u4e0a\u542f\u52a8\u547d\u4ee4\u662f\u5728\u5355\u4e2aNameServer\u60c5\u51b5\u4e0b\u4f7f\u7528\u7684\u3002\u5bf9\u4e8e\u591a\u4e2aNameServer\u7684\u96c6\u7fa4\uff0cBroker\u542f\u52a8\u547d\u4ee4\u4e2d",(0,t.kt)("inlineCode",{parentName:"p"},"-n"),"\u540e\u9762\u7684\u5730\u5740\u5217\u8868\u7528\u5206\u53f7\u9694\u5f00\u5373\u53ef\uff0c\u4f8b\u5982 ",(0,t.kt)("inlineCode",{parentName:"p"},"192.168.1.1:9876;192.161.2:9876"),"\u3002"))),(0,t.kt)("h2",{id:"\u591a\u8282\u70b9\u96c6\u7fa4\u591a\u526f\u672c\u6a21\u5f0f-\u5f02\u6b65\u590d\u5236"},"\u591a\u8282\u70b9\uff08\u96c6\u7fa4\uff09\u591a\u526f\u672c\u6a21\u5f0f-\u5f02\u6b65\u590d\u5236"),(0,t.kt)("p",null,"\u6bcf\u4e2aMaster\u914d\u7f6e\u4e00\u4e2aSlave\uff0c\u6709\u591a\u7ec4 Master-Slave\uff0cHA\u91c7\u7528\u5f02\u6b65\u590d\u5236\u65b9\u5f0f\uff0c\u4e3b\u5907\u6709\u77ed\u6682\u6d88\u606f\u5ef6\u8fdf\uff08\u6beb\u79d2\u7ea7\uff09\uff0c\u8fd9\u79cd\u6a21\u5f0f\u7684\u4f18\u7f3a\u70b9\u5982\u4e0b\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"\u4f18\u70b9\uff1a\u5373\u4f7f\u78c1\u76d8\u635f\u574f\uff0c\u6d88\u606f\u4e22\u5931\u7684\u975e\u5e38\u5c11\uff0c\u4e14\u6d88\u606f\u5b9e\u65f6\u6027\u4e0d\u4f1a\u53d7\u5f71\u54cd\uff0c\u540c\u65f6Master\u5b95\u673a\u540e\uff0c\u6d88\u8d39\u8005\u4ecd\u7136\u53ef\u4ee5\u4eceSlave\u6d88\u8d39\uff0c\u800c\u4e14\u6b64\u8fc7\u7a0b\u5bf9\u5e94\u7528\u900f\u660e\uff0c\u4e0d\u9700\u8981\u4eba\u5de5\u5e72\u9884\uff0c\u6027\u80fd\u540c\u591aMaster\u6a21\u5f0f\u51e0\u4e4e\u4e00\u6837\uff1b")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"\u7f3a\u70b9\uff1aMaster\u5b95\u673a\uff0c\u78c1\u76d8\u635f\u574f\u60c5\u51b5\u4e0b\u4f1a\u4e22\u5931\u5c11\u91cf\u6d88\u606f\u3002"))),(0,t.kt)("h4",{id:"\u542f\u52a8nameserver-1"},"\u542f\u52a8NameServer"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"### \u9996\u5148\u542f\u52a8Name Server\n$ nohup sh mqnamesrv &\n \n### \u9a8c\u8bc1Name Server \u662f\u5426\u542f\u52a8\u6210\u529f\n$ tail -f ~/logs/rocketmqlogs/namesrv.log\nThe Name Server boot success...\n")),(0,t.kt)("h4",{id:"\u542f\u52a8brokerproxy\u96c6\u7fa4-1"},"\u542f\u52a8Broker+Proxy\u96c6\u7fa4"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"### \u5728\u673a\u5668A\uff0c\u542f\u52a8\u7b2c\u4e00\u4e2aMaster\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqbroker -n 192.168.1.1:9876 -c $ROCKETMQ_HOME/conf/2m-2s-async/broker-a.properties --enable-proxy &\n \n### \u5728\u673a\u5668B\uff0c\u542f\u52a8\u7b2c\u4e8c\u4e2aMaster\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqbroker -n 192.168.1.1:9876 -c $ROCKETMQ_HOME/conf/2m-2s-async/broker-b.properties --enable-proxy &\n \n### \u5728\u673a\u5668C\uff0c\u542f\u52a8\u7b2c\u4e00\u4e2aSlave\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqbroker -n 192.168.1.1:9876 -c $ROCKETMQ_HOME/conf/2m-2s-async/broker-a-s.properties --enable-proxy &\n \n### \u5728\u673a\u5668D\uff0c\u542f\u52a8\u7b2c\u4e8c\u4e2aSlave\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqbroker -n 192.168.1.1:9876 -c $ROCKETMQ_HOME/conf/2m-2s-async/broker-b-s.properties --enable-proxy &\n")),(0,t.kt)("h3",{id:"\u591a\u8282\u70b9\u96c6\u7fa4\u591a\u526f\u672c\u6a21\u5f0f-\u540c\u6b65\u53cc\u5199"},"\u591a\u8282\u70b9\uff08\u96c6\u7fa4\uff09\u591a\u526f\u672c\u6a21\u5f0f-\u540c\u6b65\u53cc\u5199"),(0,t.kt)("p",null,"\u6bcf\u4e2aMaster\u914d\u7f6e\u4e00\u4e2aSlave\uff0c\u6709\u591a\u5bf9 Master-Slave\uff0cHA\u91c7\u7528\u540c\u6b65\u53cc\u5199\u65b9\u5f0f\uff0c\u5373\u53ea\u6709\u4e3b\u5907\u90fd\u5199\u6210\u529f\uff0c\u624d\u5411\u5e94\u7528\u8fd4\u56de\u6210\u529f\uff0c\u8fd9\u79cd\u6a21\u5f0f\u7684\u4f18\u7f3a\u70b9\u5982\u4e0b\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"\u4f18\u70b9\uff1a\u6570\u636e\u4e0e\u670d\u52a1\u90fd\u65e0\u5355\u70b9\u6545\u969c\uff0cMaster\u5b95\u673a\u60c5\u51b5\u4e0b\uff0c\u6d88\u606f\u65e0\u5ef6\u8fdf\uff0c\u670d\u52a1\u53ef\u7528\u6027\u4e0e\u6570\u636e\u53ef\u7528\u6027\u90fd\u975e\u5e38\u9ad8\uff1b")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"\u7f3a\u70b9\uff1a\u6027\u80fd\u6bd4\u5f02\u6b65\u590d\u5236\u6a21\u5f0f\u7565\u4f4e\uff08\u5927\u7ea6\u4f4e10%\u5de6\u53f3\uff09\uff0c\u53d1\u9001\u5355\u4e2a\u6d88\u606f\u7684RT\u4f1a\u7565\u9ad8\uff0c\u4e14\u76ee\u524d\u7248\u672c\u5728\u4e3b\u8282\u70b9\u5b95\u673a\u540e\uff0c\u5907\u673a\u4e0d\u80fd\u81ea\u52a8\u5207\u6362\u4e3a\u4e3b\u673a\u3002"))),(0,t.kt)("h4",{id:"\u542f\u52a8nameserver-2"},"\u542f\u52a8NameServer"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"### \u9996\u5148\u542f\u52a8Name Server\n$ nohup sh mqnamesrv &\n \n### \u9a8c\u8bc1Name Server \u662f\u5426\u542f\u52a8\u6210\u529f\n$ tail -f ~/logs/rocketmqlogs/namesrv.log\nThe Name Server boot success...\n")),(0,t.kt)("h4",{id:"\u542f\u52a8-brokerproxy-\u96c6\u7fa4"},"\u542f\u52a8 Broker+Proxy \u96c6\u7fa4"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"### \u5728\u673a\u5668A\uff0c\u542f\u52a8\u7b2c\u4e00\u4e2aMaster\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqbroker -n 192.168.1.1:9876 -c $ROCKETMQ_HOME/conf/2m-2s-sync/broker-a.properties --enable-proxy &\n \n### \u5728\u673a\u5668B\uff0c\u542f\u52a8\u7b2c\u4e8c\u4e2aMaster\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqbroker -n 192.168.1.1:9876 -c $ROCKETMQ_HOME/conf/2m-2s-sync/broker-b.properties --enable-proxy &\n \n### \u5728\u673a\u5668C\uff0c\u542f\u52a8\u7b2c\u4e00\u4e2aSlave\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqbroker -n 192.168.1.1:9876 -c $ROCKETMQ_HOME/conf/2m-2s-sync/broker-a-s.properties --enable-proxy &\n \n### \u5728\u673a\u5668D\uff0c\u542f\u52a8\u7b2c\u4e8c\u4e2aSlave\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqbroker -n 192.168.1.1:9876 -c $ROCKETMQ_HOME/conf/2m-2s-sync/broker-b-s.properties --enable-proxy &\n")),(0,t.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"\u4ee5\u4e0a Broker \u4e0e Slave \u914d\u5bf9\u662f\u901a\u8fc7\u6307\u5b9a\u76f8\u540c\u7684 BrokerName \u53c2\u6570\u6765\u914d\u5bf9\uff0cMaster \u7684 BrokerId \u5fc5\u987b\u662f 0\uff0cSlave \u7684 BrokerId \u5fc5\u987b\u662f\u5927\u4e8e 0 \u7684\u6570\u3002\u53e6\u5916\u4e00\u4e2a Master \u4e0b\u9762\u53ef\u4ee5\u6302\u8f7d\u591a\u4e2a Slave\uff0c\u540c\u4e00 Master \u4e0b\u7684\u591a\u4e2a Slave \u901a\u8fc7\u6307\u5b9a\u4e0d\u540c\u7684 BrokerId \u6765\u533a\u5206\u3002$ROCKETMQ_HOME\u6307\u7684RocketMQ\u5b89\u88c5\u76ee\u5f55\uff0c\u9700\u8981\u7528\u6237\u81ea\u5df1\u8bbe\u7f6e\u6b64\u73af\u5883\u53d8\u91cf\u3002"))),(0,t.kt)("h2",{id:"cluster\u6a21\u5f0f\u90e8\u7f72"},"Cluster\u6a21\u5f0f\u90e8\u7f72"),(0,t.kt)("p",null,"\u5728 Cluster \u6a21\u5f0f\u4e0b\uff0cBroker \u4e0e Proxy\u5206\u522b\u90e8\u7f72\uff0c\u6211\u53ef\u4ee5\u5728 NameServer\u548c Broker\u90fd\u542f\u52a8\u5b8c\u6210\u4e4b\u540e\u518d\u90e8\u7f72 Proxy\u3002"),(0,t.kt)("p",null,"\u5728 Cluster\u6a21\u5f0f\u4e0b\uff0c\u4e00\u4e2a Proxy\u96c6\u7fa4\u548c Broker\u96c6\u7fa4\u4e3a\u4e00\u4e00\u5bf9\u5e94\u7684\u5173\u7cfb\uff0c\u53ef\u4ee5\u5728 Proxy\u7684\u914d\u7f6e\u6587\u4ef6 ",(0,t.kt)("inlineCode",{parentName:"p"},"rmq-proxy.json")," \u4e2d\u4f7f\u7528 ",(0,t.kt)("inlineCode",{parentName:"p"},"rocketMQClusterName")," \u8fdb\u884c\u914d\u7f6e"),(0,t.kt)("h3",{id:"\u542f\u52a8-nameserver-1"},"\u542f\u52a8 NameServer"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"### \u9996\u5148\u542f\u52a8Name Server\n$ nohup sh mqnamesrv &\n \n### \u9a8c\u8bc1Name Server \u662f\u5426\u542f\u52a8\u6210\u529f\n$ tail -f ~/logs/rocketmqlogs/namesrv.log\nThe Name Server boot success...\n")),(0,t.kt)("h3",{id:"\u542f\u52a8-broker"},"\u542f\u52a8 Broker"),(0,t.kt)("h4",{id:"\u5355\u7ec4\u8282\u70b9\u5355\u526f\u672c\u6a21\u5f0f-1"},"\u5355\u7ec4\u8282\u70b9\u5355\u526f\u672c\u6a21\u5f0f"),(0,t.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"\u8fd9\u79cd\u65b9\u5f0f\u98ce\u9669\u8f83\u5927\uff0c\u56e0\u4e3a Broker \u53ea\u6709\u4e00\u4e2a\u8282\u70b9\uff0c\u4e00\u65e6Broker\u91cd\u542f\u6216\u8005\u5b95\u673a\u65f6\uff0c\u4f1a\u5bfc\u81f4\u6574\u4e2a\u670d\u52a1\u4e0d\u53ef\u7528\u3002\u4e0d\u5efa\u8bae\u7ebf\u4e0a\u73af\u5883\u4f7f\u7528, \u53ef\u4ee5\u7528\u4e8e\u672c\u5730\u6d4b\u8bd5\u3002"))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"### \u5728\u673a\u5668A\uff0c\u542f\u52a8\u7b2c\u4e00\u4e2aMaster\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqbroker -n 192.168.1.1:9876 &\n")),(0,t.kt)("h4",{id:"\u591a\u7ec4\u8282\u70b9\u96c6\u7fa4\u5355\u526f\u672c\u6a21\u5f0f-1"},"\u591a\u7ec4\u8282\u70b9\uff08\u96c6\u7fa4\uff09\u5355\u526f\u672c\u6a21\u5f0f"),(0,t.kt)("p",null,"\u4e00\u4e2a\u96c6\u7fa4\u5185\u5168\u90e8\u90e8\u7f72 Master \u89d2\u8272\uff0c\u4e0d\u90e8\u7f72Slave \u526f\u672c\uff0c\u4f8b\u59822\u4e2aMaster\u6216\u80053\u4e2aMaster\uff0c\u8fd9\u79cd\u6a21\u5f0f\u7684\u4f18\u7f3a\u70b9\u5982\u4e0b\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"\u4f18\u70b9\uff1a\u914d\u7f6e\u7b80\u5355\uff0c\u5355\u4e2aMaster\u5b95\u673a\u6216\u91cd\u542f\u7ef4\u62a4\u5bf9\u5e94\u7528\u65e0\u5f71\u54cd\uff0c\u5728\u78c1\u76d8\u914d\u7f6e\u4e3aRAID10\u65f6\uff0c\u5373\u4f7f\u673a\u5668\u5b95\u673a\u4e0d\u53ef\u6062\u590d\u60c5\u51b5\u4e0b\uff0c\u7531\u4e8eRAID10\u78c1\u76d8\u975e\u5e38\u53ef\u9760\uff0c\u6d88\u606f\u4e5f\u4e0d\u4f1a\u4e22\uff08\u5f02\u6b65\u5237\u76d8\u4e22\u5931\u5c11\u91cf\u6d88\u606f\uff0c\u540c\u6b65\u5237\u76d8\u4e00\u6761\u4e0d\u4e22\uff09\uff0c\u6027\u80fd\u6700\u9ad8\uff1b")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"\u7f3a\u70b9\uff1a\u5355\u53f0\u673a\u5668\u5b95\u673a\u671f\u95f4\uff0c\u8fd9\u53f0\u673a\u5668\u4e0a\u672a\u88ab\u6d88\u8d39\u7684\u6d88\u606f\u5728\u673a\u5668\u6062\u590d\u4e4b\u524d\u4e0d\u53ef\u8ba2\u9605\uff0c\u6d88\u606f\u5b9e\u65f6\u6027\u4f1a\u53d7\u5230\u5f71\u54cd\u3002"))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"### \u5728\u673a\u5668A\uff0c\u542f\u52a8\u7b2c\u4e00\u4e2aMaster\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqbroker -n 192.168.1.1:9876 -c $ROCKETMQ_HOME/conf/2m-noslave/broker-a.properties &\n \n### \u5728\u673a\u5668B\uff0c\u542f\u52a8\u7b2c\u4e8c\u4e2aMaster\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqbroker -n 192.168.1.1:9876 -c $ROCKETMQ_HOME/conf/2m-noslave/broker-b.properties &\n\n...\n")),(0,t.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"\u5982\u4e0a\u542f\u52a8\u547d\u4ee4\u662f\u5728\u5355\u4e2aNameServer\u60c5\u51b5\u4e0b\u4f7f\u7528\u7684\u3002\u5bf9\u4e8e\u591a\u4e2aNameServer\u7684\u96c6\u7fa4\uff0cBroker\u542f\u52a8\u547d\u4ee4\u4e2d",(0,t.kt)("inlineCode",{parentName:"p"},"-n"),"\u540e\u9762\u7684\u5730\u5740\u5217\u8868\u7528\u5206\u53f7\u9694\u5f00\u5373\u53ef\uff0c\u4f8b\u5982 ",(0,t.kt)("inlineCode",{parentName:"p"},"192.168.1.1:9876;192.161.2:9876"),"\u3002"))),(0,t.kt)("h4",{id:"\u591a\u8282\u70b9\u96c6\u7fa4\u591a\u526f\u672c\u6a21\u5f0f-\u5f02\u6b65\u590d\u5236-1"},"\u591a\u8282\u70b9\uff08\u96c6\u7fa4\uff09\u591a\u526f\u672c\u6a21\u5f0f-\u5f02\u6b65\u590d\u5236"),(0,t.kt)("p",null,"\u6bcf\u4e2aMaster\u914d\u7f6e\u4e00\u4e2aSlave\uff0c\u6709\u591a\u7ec4 Master-Slave\uff0cHA\u91c7\u7528\u5f02\u6b65\u590d\u5236\u65b9\u5f0f\uff0c\u4e3b\u5907\u6709\u77ed\u6682\u6d88\u606f\u5ef6\u8fdf\uff08\u6beb\u79d2\u7ea7\uff09\uff0c\u8fd9\u79cd\u6a21\u5f0f\u7684\u4f18\u7f3a\u70b9\u5982\u4e0b\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"\u4f18\u70b9\uff1a\u5373\u4f7f\u78c1\u76d8\u635f\u574f\uff0c\u6d88\u606f\u4e22\u5931\u7684\u975e\u5e38\u5c11\uff0c\u4e14\u6d88\u606f\u5b9e\u65f6\u6027\u4e0d\u4f1a\u53d7\u5f71\u54cd\uff0c\u540c\u65f6Master\u5b95\u673a\u540e\uff0c\u6d88\u8d39\u8005\u4ecd\u7136\u53ef\u4ee5\u4eceSlave\u6d88\u8d39\uff0c\u800c\u4e14\u6b64\u8fc7\u7a0b\u5bf9\u5e94\u7528\u900f\u660e\uff0c\u4e0d\u9700\u8981\u4eba\u5de5\u5e72\u9884\uff0c\u6027\u80fd\u540c\u591aMaster\u6a21\u5f0f\u51e0\u4e4e\u4e00\u6837\uff1b")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"\u7f3a\u70b9\uff1aMaster\u5b95\u673a\uff0c\u78c1\u76d8\u635f\u574f\u60c5\u51b5\u4e0b\u4f1a\u4e22\u5931\u5c11\u91cf\u6d88\u606f\u3002"))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"### \u5728\u673a\u5668A\uff0c\u542f\u52a8\u7b2c\u4e00\u4e2aMaster\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqbroker -n 192.168.1.1:9876 -c $ROCKETMQ_HOME/conf/2m-2s-async/broker-a.properties &\n \n### \u5728\u673a\u5668B\uff0c\u542f\u52a8\u7b2c\u4e8c\u4e2aMaster\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqbroker -n 192.168.1.1:9876 -c $ROCKETMQ_HOME/conf/2m-2s-async/broker-b.properties &\n \n### \u5728\u673a\u5668C\uff0c\u542f\u52a8\u7b2c\u4e00\u4e2aSlave\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqbroker -n 192.168.1.1:9876 -c $ROCKETMQ_HOME/conf/2m-2s-async/broker-a-s.properties &\n \n### \u5728\u673a\u5668D\uff0c\u542f\u52a8\u7b2c\u4e8c\u4e2aSlave\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqbroker -n 192.168.1.1:9876 -c $ROCKETMQ_HOME/conf/2m-2s-async/broker-b-s.properties &\n")),(0,t.kt)("h4",{id:"\u591a\u8282\u70b9\u96c6\u7fa4\u591a\u526f\u672c\u6a21\u5f0f-\u540c\u6b65\u53cc\u5199-1"},"\u591a\u8282\u70b9\uff08\u96c6\u7fa4\uff09\u591a\u526f\u672c\u6a21\u5f0f-\u540c\u6b65\u53cc\u5199"),(0,t.kt)("p",null,"\u6bcf\u4e2aMaster\u914d\u7f6e\u4e00\u4e2aSlave\uff0c\u6709\u591a\u5bf9 Master-Slave\uff0cHA\u91c7\u7528\u540c\u6b65\u53cc\u5199\u65b9\u5f0f\uff0c\u5373\u53ea\u6709\u4e3b\u5907\u90fd\u5199\u6210\u529f\uff0c\u624d\u5411\u5e94\u7528\u8fd4\u56de\u6210\u529f\uff0c\u8fd9\u79cd\u6a21\u5f0f\u7684\u4f18\u7f3a\u70b9\u5982\u4e0b\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"\u4f18\u70b9\uff1a\u6570\u636e\u4e0e\u670d\u52a1\u90fd\u65e0\u5355\u70b9\u6545\u969c\uff0cMaster\u5b95\u673a\u60c5\u51b5\u4e0b\uff0c\u6d88\u606f\u65e0\u5ef6\u8fdf\uff0c\u670d\u52a1\u53ef\u7528\u6027\u4e0e\u6570\u636e\u53ef\u7528\u6027\u90fd\u975e\u5e38\u9ad8\uff1b")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"\u7f3a\u70b9\uff1a\u6027\u80fd\u6bd4\u5f02\u6b65\u590d\u5236\u6a21\u5f0f\u7565\u4f4e\uff08\u5927\u7ea6\u4f4e10%\u5de6\u53f3\uff09\uff0c\u53d1\u9001\u5355\u4e2a\u6d88\u606f\u7684RT\u4f1a\u7565\u9ad8\uff0c\u4e14\u76ee\u524d\u7248\u672c\u5728\u4e3b\u8282\u70b9\u5b95\u673a\u540e\uff0c\u5907\u673a\u4e0d\u80fd\u81ea\u52a8\u5207\u6362\u4e3a\u4e3b\u673a\u3002"))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"### \u5728\u673a\u5668A\uff0c\u542f\u52a8\u7b2c\u4e00\u4e2aMaster\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqbroker -n 192.168.1.1:9876 -c $ROCKETMQ_HOME/conf/2m-2s-sync/broker-a.properties &\n \n### \u5728\u673a\u5668B\uff0c\u542f\u52a8\u7b2c\u4e8c\u4e2aMaster\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqbroker -n 192.168.1.1:9876 -c $ROCKETMQ_HOME/conf/2m-2s-sync/broker-b.properties &\n \n### \u5728\u673a\u5668C\uff0c\u542f\u52a8\u7b2c\u4e00\u4e2aSlave\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqbroker -n 192.168.1.1:9876 -c $ROCKETMQ_HOME/conf/2m-2s-sync/broker-a-s.properties &\n \n### \u5728\u673a\u5668D\uff0c\u542f\u52a8\u7b2c\u4e8c\u4e2aSlave\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqbroker -n 192.168.1.1:9876 -c $ROCKETMQ_HOME/conf/2m-2s-sync/broker-b-s.properties &\n")),(0,t.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"\u4ee5\u4e0a Broker \u4e0e Slave \u914d\u5bf9\u662f\u901a\u8fc7\u6307\u5b9a\u76f8\u540c\u7684 BrokerName \u53c2\u6570\u6765\u914d\u5bf9\uff0cMaster \u7684 BrokerId \u5fc5\u987b\u662f 0\uff0cSlave \u7684 BrokerId \u5fc5\u987b\u662f\u5927\u4e8e 0 \u7684\u6570\u3002\u53e6\u5916\u4e00\u4e2a Master \u4e0b\u9762\u53ef\u4ee5\u6302\u8f7d\u591a\u4e2a Slave\uff0c\u540c\u4e00 Master \u4e0b\u7684\u591a\u4e2a Slave \u901a\u8fc7\u6307\u5b9a\u4e0d\u540c\u7684 BrokerId \u6765\u533a\u5206\u3002$ROCKETMQ_HOME\u6307\u7684RocketMQ\u5b89\u88c5\u76ee\u5f55\uff0c\u9700\u8981\u7528\u6237\u81ea\u5df1\u8bbe\u7f6e\u6b64\u73af\u5883\u53d8\u91cf\u3002"))),(0,t.kt)("h3",{id:"\u542f\u52a8-proxy"},"\u542f\u52a8 Proxy"),(0,t.kt)("p",null,"\u53ef\u4ee5\u5728\u591a\u53f0\u673a\u5668\u542f\u52a8\u591a\u4e2aProxy"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"### \u5728\u673a\u5668A\uff0c\u542f\u52a8\u7b2c\u4e00\u4e2aProxy\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqproxy -n 192.168.1.1:9876 &\n\n### \u5728\u673a\u5668B\uff0c\u542f\u52a8\u7b2c\u4e8c\u4e2aProxy\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqproxy -n 192.168.1.1:9876 &\n\n### \u5728\u673a\u5668C\uff0c\u542f\u52a8\u7b2c\u4e09\u4e2aProxy\uff0c\u4f8b\u5982NameServer\u7684IP\u4e3a\uff1a192.168.1.1\n$ nohup sh bin/mqproxy -n 192.168.1.1:9876 &\n")),(0,t.kt)("p",null,"\u82e5\u9700\u8981\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,t.kt)("inlineCode",{parentName:"p"},"-pc"),"\u6216\u8005 ",(0,t.kt)("inlineCode",{parentName:"p"},"--proxyConfigPath")," \u8fdb\u884c\u6307\u5b9a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"### \u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\n$ nohup sh bin/mqproxy -n 192.168.1.1:9876 -pc /path/to/proxyConfig.json &\n")))}c.isMDXComponent=!0}}]);