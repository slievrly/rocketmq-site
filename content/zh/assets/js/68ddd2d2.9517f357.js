"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[8078],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>d});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),u=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=u(e.components);return t.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return n?t.createElement(k,i(i({ref:r},l),{},{components:n})):t.createElement(k,i({ref:r},l))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61110:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var t=n(87462),o=(n(67294),n(3905));const a={},i="\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4",s={unversionedId:"\u6700\u4f73\u5b9e\u8df5/21subscribe",id:"version-5.0/\u6700\u4f73\u5b9e\u8df5/21subscribe",title:"\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4",description:"\u524d\u8a00",source:"@site/versioned_docs/version-5.0/06-\u6700\u4f73\u5b9e\u8df5/21subscribe.md",sourceDirName:"06-\u6700\u4f73\u5b9e\u8df5",slug:"/\u6700\u4f73\u5b9e\u8df5/21subscribe",permalink:"/zh/docs/\u6700\u4f73\u5b9e\u8df5/21subscribe",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/06-\u6700\u4f73\u5b9e\u8df5/21subscribe.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"JVM/OS\u914d\u7f6e",permalink:"/zh/docs/\u6700\u4f73\u5b9e\u8df5/19JVMOS"},next:{title:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",permalink:"/zh/docs/\u6700\u4f73\u5b9e\u8df5/22FAQ"}},p={},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"1  \u6b63\u786e\u8ba2\u9605\u5173\u7cfb\u793a\u4f8b",id:"1--\u6b63\u786e\u8ba2\u9605\u5173\u7cfb\u793a\u4f8b",level:2},{value:"1.1 \u8ba2\u9605\u7684Topic\u4e00\u6837\uff0c\u4e14\u8fc7\u6ee4\u8868\u8fbe\u5f0f\u4e00\u81f4",id:"11-\u8ba2\u9605\u7684topic\u4e00\u6837\u4e14\u8fc7\u6ee4\u8868\u8fbe\u5f0f\u4e00\u81f4",level:3},{value:"2 \u8ba2\u9605\u5173\u7cfb\u4e0d\u4e00\u81f4\u7684\u6392\u67e5",id:"2-\u8ba2\u9605\u5173\u7cfb\u4e0d\u4e00\u81f4\u7684\u6392\u67e5",level:2},{value:"3 \u5e38\u89c1\u8ba2\u9605\u5173\u7cfb\u4e0d\u4e00\u81f4\u95ee\u9898",id:"3-\u5e38\u89c1\u8ba2\u9605\u5173\u7cfb\u4e0d\u4e00\u81f4\u95ee\u9898",level:2},{value:"3.1 \u540c\u4e00ConsumerGroup\u4e0b\u7684Consumer\u5b9e\u4f8b\u8ba2\u9605\u7684Topic\u4e0d\u540c\uff083.x\u30014.x SDK\u9002\u7528\uff09",id:"31-\u540c\u4e00consumergroup\u4e0b\u7684consumer\u5b9e\u4f8b\u8ba2\u9605\u7684topic\u4e0d\u540c3x4x-sdk\u9002\u7528",level:3},{value:"3.2 \u540c\u4e00 ConsumerGroup \u4e0b\u7684 Consumer \u5b9e\u4f8b\u8ba2\u9605\u7684Topic\u76f8\u540c\uff0c\u4f46\u8ba2\u9605\u7684Tag\u4e0d\u4e00\u81f4",id:"32-\u540c\u4e00-consumergroup-\u4e0b\u7684-consumer-\u5b9e\u4f8b\u8ba2\u9605\u7684topic\u76f8\u540c\u4f46\u8ba2\u9605\u7684tag\u4e0d\u4e00\u81f4",level:3}],l={toc:u};function c(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4"},"\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4"),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u8ba2\u9605\u5173\u7cfb\u662f RocketMQ \u9886\u57df\u6a21\u578b\u4e2d\u975e\u5e38\u91cd\u8981\u7684\u73af\u8282\uff0c\u7528\u4e8e\u8868\u8fbe\u6d88\u8d39\u8005\u6d88\u8d39\u6d88\u606f\u7684\u63a7\u5236\u5143\u6570\u636e\uff0c\u5b8c\u6574\u7684\u6982\u5ff5\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/%E9%A2%86%E5%9F%9F%E6%A8%A1%E5%9E%8B/09subscription"},"\u8ba2\u9605\u5173\u7cfb\u6a21\u578b"),"\u3002"),(0,o.kt)("p",null,"\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4\u662f\u6307\uff0c\u540c\u4e00\u4e2a\u6d88\u8d39\u8005\u7ec4\u4e0b\u6240\u6709\u6d88\u8d39\u8005\u5b9e\u4f8b\u6240\u8ba2\u9605\u7684Topic\u3001Tag\u5fc5\u987b\u5b8c\u5168\u4e00\u81f4\u3002\u5982\u679c\u8ba2\u9605\u5173\u7cfb\uff08\u6d88\u8d39\u8005\u5206\u7ec4\u540d-Topic-Tag\uff09\u4e0d\u4e00\u81f4\uff0c\u4f1a\u5bfc\u81f4\u6d88\u8d39\u6d88\u606f\u7d0a\u4e71\uff0c\u751a\u81f3\u6d88\u606f\u4e22\u5931\u3002"),(0,o.kt)("h2",{id:"1--\u6b63\u786e\u8ba2\u9605\u5173\u7cfb\u793a\u4f8b"},"1  \u6b63\u786e\u8ba2\u9605\u5173\u7cfb\u793a\u4f8b"),(0,o.kt)("h3",{id:"11-\u8ba2\u9605\u7684topic\u4e00\u6837\u4e14\u8fc7\u6ee4\u8868\u8fbe\u5f0f\u4e00\u81f4"},"1.1 \u8ba2\u9605\u7684Topic\u4e00\u6837\uff0c\u4e14\u8fc7\u6ee4\u8868\u8fbe\u5f0f\u4e00\u81f4"),(0,o.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u540c\u4e00 ConsumerGroup \u4e0b\u7684\u4e09\u4e2aConsumer\u5b9e\u4f8bC1\u3001C2\u548cC3\u5206\u522b\u90fd\u8ba2\u9605\u4e86TopicA\uff0c\u4e14\u8ba2\u9605TopicA\u7684Tag\u4e5f\u90fd\u662fTag1\uff0c\u7b26\u5408\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4\u539f\u5219\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h4lfsw9aaaj20ie0deq3i.jpg",alt:"1658453577894-0e64b114-cb4a-4220-a09a-62bc1f2943c6"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6b63\u786e\u793a\u4f8b\u4ee3\u7801\u4e00")),(0,o.kt)("p",null,"C1\u3001C2\u3001C3\u7684\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4\uff0c\u5373C1\u3001C2\u3001C3\u8ba2\u9605\u6d88\u606f\u7684\u4ee3\u7801\u5fc5\u987b\u5b8c\u5168\u4e00\u81f4\uff0c\u4ee3\u7801\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'        PushConsumer consumer1 = provider.newPushConsumerBuilder().setConsumerGroup("GroupA").build();\n        consumer1.subscribe("TopicA", new FilterExpression("TagA", FilterExpressionType.TAG));\n        \n        PushConsumer consumer2 = provider.newPushConsumerBuilder().setConsumerGroup("GroupA").build();\n        consumer2.subscribe("TopicA", new FilterExpression("TagA", FilterExpressionType.TAG));\n        \n        PushConsumer consumer3 = provider.newPushConsumerBuilder().setConsumerGroup("GroupA").build();\n        consumer3.subscribe("TopicA", new FilterExpression("TagA", FilterExpressionType.TAG));\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"RocketMQ \u5f3a\u8c03\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4\uff0c\u6838\u5fc3\u662f\u6307\u76f8\u540c ConsumerGroup \u7684\u6bcf\u4e2a Consumer \u4e4b\u95f4\u4e00\u81f4\uff0c\u56e0\u4e3a\u5728\u670d\u52a1\u7aef\u89c6\u89d2\u770b\u6765\u4e00\u4e2a Group \u4e0b\u7684\u6240\u6709 Consumer \u90fd\u5e94\u8be5\u662f\u76f8\u540c\u7684\u526f\u672c\u903b\u8f91\u3002"),(0,o.kt)("p",{parentName:"div"},"\u5f3a\u8c03\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4\uff0c\u5e76\u4e0d\u662f\u6307\u4e00\u4e2a Consumer \u4e0d\u80fd\u8ba2\u9605\u591a\u4e2aTopic\uff0c\u6bcf\u4e2a Consumer \u4ecd\u7136\u53ef\u4ee5\u6309\u7167\u9700\u8981\u8ba2\u9605\u591a\u4e2a Topic\uff0c\u4f46\u524d\u63d0\u662f\u76f8\u540c\u6d88\u8d39\u8005\u5206\u7ec4\u4e0b\u7684 Consumer \u8981\u4e00\u81f4\u3002"))),(0,o.kt)("h2",{id:"2-\u8ba2\u9605\u5173\u7cfb\u4e0d\u4e00\u81f4\u7684\u6392\u67e5"},"2 \u8ba2\u9605\u5173\u7cfb\u4e0d\u4e00\u81f4\u7684\u6392\u67e5"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u95ee\u9898\u63cf\u8ff0")),(0,o.kt)("p",null,"\u5728\u4f7f\u7528 Apache RocketMQ \u65f6\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u8ba2\u9605\u5173\u7cfb\u4e0d\u4e00\u81f4\u7684\u60c5\u51b5\uff0c\u5177\u4f53\u7684\u95ee\u9898\u73b0\u8c61\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Apache RocketMQ \u63a7\u5236\u53f0\u4e2d\u8ba2\u9605\u5173\u7cfb\u662f\u5426\u4e00\u81f4\u663e\u793a\u4e3a\u5426\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6d88\u8d39\u8005\uff08Consumer\uff09\u5b9e\u4f8b\u672a\u6536\u5230\u8ba2\u9605\u7684\u6d88\u606f\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8bf7\u53c2\u8003\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u68c0\u67e5")),(0,o.kt)("p",null,"\u60a8\u53ef\u5728\u6d88\u606fApache RocketMQ\u7684\u63a7\u5236\u53f0\u6216\u8005CLi\u5de5\u5177\u67e5\u770b\u6307\u5b9aGroup\u7684\u8ba2\u9605\u5173\u7cfb\u662f\u5426\u4e00\u81f4\u3002\u82e5\u67e5\u8be2\u7ed3\u679c\u4e0d\u4e00\u81f4\uff0c\u8bf7\u53c2\u89c1\u672c\u6587(3 \u5e38\u89c1\u8ba2\u9605\u5173\u7cfb\u4e0d\u4e00\u81f4\u95ee\u9898)\u6392\u67e5Consumer\u5b9e\u4f8b\u7684\u6d88\u8d39\u4ee3\u7801\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u60a8Consumer\u5b9e\u4f8b\u4e2d\u4e0e\u8ba2\u9605\u76f8\u5173\u7684\u914d\u7f6e\u4ee3\u7801\uff0c\u786e\u4fdd\u914d\u7f6e\u540c\u4e00\u4e2a ConsumerGroup \u7684\u6240\u6709Consumer\u5b9e\u4f8b\u5747\u8ba2\u9605\u76f8\u540c\u7684Topic\u53caTag\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u63a7\u5236\u53f0\u6216\u8005Cli\u547d\u4ee4ConsumerConnection \u67e5\u770b\u751f\u6548\u7684\u8ba2\u9605\u5173\u7cfb\u662f\u5426\u4e00\u81f4\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6d4b\u8bd5\u5e76\u786e\u8ba4\u6d88\u606f\u80fd\u591f\u88ab\u9884\u671f\u7684Consumer\u5b9e\u4f8b\u6240\u6d88\u8d39\u3002")),(0,o.kt)("h2",{id:"3-\u5e38\u89c1\u8ba2\u9605\u5173\u7cfb\u4e0d\u4e00\u81f4\u95ee\u9898"},"3 \u5e38\u89c1\u8ba2\u9605\u5173\u7cfb\u4e0d\u4e00\u81f4\u95ee\u9898"),(0,o.kt)("h3",{id:"31-\u540c\u4e00consumergroup\u4e0b\u7684consumer\u5b9e\u4f8b\u8ba2\u9605\u7684topic\u4e0d\u540c3x4x-sdk\u9002\u7528"},"3.1 \u540c\u4e00ConsumerGroup\u4e0b\u7684Consumer\u5b9e\u4f8b\u8ba2\u9605\u7684Topic\u4e0d\u540c\uff083.x\u30014.x SDK\u9002\u7528\uff09"),(0,o.kt)("p",null,"\u5728\u65e9\u671f3.x/4.x \u7248\u672c\u7684SDK\u4e2d\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u540c\u4e00 ConsumerGroup \u4e0b\u7684\u4e09\u4e2aConsumer\u5b9e\u4f8bC1\u3001C2\u548cC3\u5206\u522b\u8ba2\u9605\u4e86TopicA\u3001TopicB\u548cTopicC\uff0c\u8ba2\u9605\u7684Topic\u4e0d\u4e00\u81f4\uff0c\u4e0d\u7b26\u5408\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4\u6027\u539f\u5219\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"5.x\u7248\u672cSDK \u5df2\u7ecf\u652f\u6301\u540c\u4e00\u4e2a ConsumerGroup \u4e0b\u7684Consumer\u5b9e\u4f8b\u8ba2\u9605\u4e0d\u540c\u7684Topic\u3002"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h4lfvy56ufj20oh0h9wfg.jpg",alt:"image-20220722102131073"})),(0,o.kt)("h3",{id:"32-\u540c\u4e00-consumergroup-\u4e0b\u7684-consumer-\u5b9e\u4f8b\u8ba2\u9605\u7684topic\u76f8\u540c\u4f46\u8ba2\u9605\u7684tag\u4e0d\u4e00\u81f4"},"3.2 \u540c\u4e00 ConsumerGroup \u4e0b\u7684 Consumer \u5b9e\u4f8b\u8ba2\u9605\u7684Topic\u76f8\u540c\uff0c\u4f46\u8ba2\u9605\u7684Tag\u4e0d\u4e00\u81f4"),(0,o.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u540c\u4e00 ConsumerGroup \u4e0b\u7684\u4e09\u4e2aConsumer\u5b9e\u4f8bC1\u3001C2\u548cC3\u5206\u522b\u90fd\u8ba2\u9605\u4e86TopicA\uff0c\u4f46\u662fC1\u8ba2\u9605TopicA\u7684Tag\u4e3a",(0,o.kt)("strong",{parentName:"p"},"Tag1"),"\uff0cC2\u548cC3\u8ba2\u9605\u7684TopicA\u7684Tag\u4e3a",(0,o.kt)("strong",{parentName:"p"},"Tag2"),"\uff0c\u8ba2\u9605\u540c\u4e00Topic\u7684Tag\u4e0d\u4e00\u81f4\uff0c\u4e0d\u7b26\u5408\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4\u6027\u539f\u5219\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h4lfw59vm9j20o30gwwfh.jpg",alt:"image-20220722102926055"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u9519\u8bef\u793a\u4f8b\u4ee3\u7801\u4e8c")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Consumer\u5b9e\u4f8b2-1\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'      PushConsumer consumer1 = provider.newPushConsumerBuilder().setConsumerGroup("GroupA").build();\n      consumer1.subscribe("TopicA", new FilterExpression("Tag1", FilterExpressionType.TAG));\n')))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Consumer\u5b9e\u4f8b2-2\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'      PushConsumer consumer2 = provider.newPushConsumerBuilder().setConsumerGroup("GroupA").build();\n      consumer2.subscribe("TopicA", new FilterExpression("Tag2", FilterExpressionType.TAG));\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Consumer\u5b9e\u4f8b2-3\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'      PushConsumer consumer3 = provider.newPushConsumerBuilder().setConsumerGroup("GroupA").build();\n      consumer3.subscribe("TopicA", new FilterExpression("Tag2", FilterExpressionType.TAG));\n')))))}c.isMDXComponent=!0}}]);