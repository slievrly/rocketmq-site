"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[7058],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,s(s({ref:t},l),{},{components:n})):r.createElement(h,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},s="Producer",i={unversionedId:"\u9886\u57df\u6a21\u578b/04producer",id:"version-5.0/\u9886\u57df\u6a21\u578b/04producer",title:"Producer",description:"This section describes the concept of producers in Apache RocketMQ. It also describes the role of producers in the messaging model, producer attributes and compatibility, and some usage notes of working with producers.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/03-\u9886\u57df\u6a21\u578b/04producer.md",sourceDirName:"03-\u9886\u57df\u6a21\u578b",slug:"/\u9886\u57df\u6a21\u578b/04producer",permalink:"/docs/\u9886\u57df\u6a21\u578b/04producer",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/03-\u9886\u57df\u6a21\u578b/04producer.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Message",permalink:"/docs/\u9886\u57df\u6a21\u578b/04message"},next:{title:"ConsumerGroup",permalink:"/docs/\u9886\u57df\u6a21\u578b/07consumergroup"}},c={},p=[{value:"Definition",id:"definition",level:2},{value:"Model relationship",id:"model-relationship",level:2},{value:"Internal attributes",id:"internal-attributes",level:2},{value:"Version compatibility",id:"version-compatibility",level:2},{value:"Usage notes",id:"usage-notes",level:2}],l={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"producer"},"Producer"),(0,a.kt)("p",null,"This section describes the concept of producers in Apache RocketMQ. It also describes the role of producers in the messaging model, producer attributes and compatibility, and some usage notes of working with producers."),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"A producer in Apache RocketMQ is a functional messaging entity that creates messages and sends them to the server."),(0,a.kt)("p",null,"A producer is typically integrated on the business system and serves to encapsulate data as messages in Apache RocketMQ and send the messages to the server. For more information about messages, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/%E9%A2%86%E5%9F%9F%E6%A8%A1%E5%9E%8B/04message"},"Messages"),"."),(0,a.kt)("p",null,"The following message delivery elements are defined on the producer side:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Transmission mode: A producer can specify the message transmission mode in an API operation. Apache RocketMQ supports synchronous transmission and asynchronous transmission.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Batch transmission: A producer can specify batch transmission in an API operation. For example, the number or size of messages sent at a time can be specified.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Transactional behavior: Apache RocketMQ supports transaction messages. Producers are involved in transaction checks to ensure eventual consistency of transactions. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/%E5%8A%9F%E8%83%BD%E8%A1%8C%E4%B8%BA/04transactionmessage"},"Transactional messages"),"."))),(0,a.kt)("p",null,"Producers and topics have an n-to-n relationship. A producer can send messages to multiple topics, and a topic can receive messages from multiple producers. This many-to-many relationship facilitates performance scaling and disaster recovery.\n",(0,a.kt)("img",{alt:"Producers and topics",src:n(65849).Z,width:"902",height:"481"})),(0,a.kt)("h2",{id:"model-relationship"},"Model relationship"),(0,a.kt)("p",null,"The following figure shows the role of producers in the messaging model of Apache RocketMQ.",(0,a.kt)("img",{alt:"Producer",src:n(74238).Z,width:"1977",height:"877"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The message is initialized by the producer and sent to the Apache RocketMQ server.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Messages are stored in the specified queue of the topic in the order in which they arrive at the Apache RocketMQ server.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The consumer obtains and consumes messages from the Apache RocketMQ server based on the specified subscription relationship."))),(0,a.kt)("h2",{id:"internal-attributes"},"Internal attributes"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Client ID")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Definition: the identity of a producer client. This attribute is used to distinguish between different producers. A client ID is globally unique within a cluster.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Value: The client ID is automatically generated by Apache RocketMQ SDKs. It is mainly used for O\\&M purposes such as log viewing and problem locating. The client ID cannot be modified."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Communication parameters")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"(Required)")," : the endpoint used to connect to the server. This endpoint is used to identify the cluster."),(0,a.kt)("p",{parentName:"li"},"The access point must be configured in the format. We recommend that you use domain names to avoid using IP addresses to prevent node changes from failing to perform hotspot migration."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"(Optional)")," : the credential used by the client for authentication."),(0,a.kt)("p",{parentName:"li"},"Transmission is required only when identity recognition and authentication are enabled on the server."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Request Timeout ",(0,a.kt)("strong",{parentName:"li"},"(Optional)")," : the timeout period of the network request. For more information about the value range and default value, see ",(0,a.kt)("a",{parentName:"li",href:"/docs/%E5%9F%BA%E7%A1%80%E4%BB%8B%E7%BB%8D/03limits"},"Parameter limits"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prebound topic list")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Definition: the list of topics to which a producer of Apache RocketMQ sends messages. Prebound topics provide the following benefits:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Transaction messages ",(0,a.kt)("strong",{parentName:"p"},"(Required)"),": The prebound topic list attribute must be specified for transaction messages. In transaction messaging scenarios, when a producer recovers from a fault or is restarted, the producer checks whether a transaction message topic contains uncommitted transaction messages. This prevents latency caused by uncommitted transaction messages in the topic after the producer sends new messages to the topic.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Non-transaction messages ",(0,a.kt)("strong",{parentName:"p"},"(Optional)"),": The server checks the access permissions and validity of the destination topics based on the list of prebound topics during producer initialization, instead of performing the check after the application is started. We recommend that you specify the prebound topic list attribute for non-transaction messages."),(0,a.kt)("p",{parentName:"li"},"If the prebound topic list attribute is not specified for non-transaction messages or destination topics are changed, Apache RocketMQ dynamically checks and identifies destination topics.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Limit: For transaction messages, prebound topics must be specified and used together with a transaction checker."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transaction checker")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Apache RocketMQ uses a transaction messaging mechanism that requires a producer to implement a transaction checker to ensure eventual consistency of transactions. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/%E5%8A%9F%E8%83%BD%E8%A1%8C%E4%B8%BA/04transactionmessage"},"Transaction messages"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When a producer sends transaction messages, a transaction checker must be configured and used together with prebound topics."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Send retry policy")),(0,a.kt)("p",null,"Send retry policy specifies how a producer retries the delivery of messages upon a failed message delivery attempt. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/%E5%8A%9F%E8%83%BD%E8%A1%8C%E4%B8%BA/05sendretrypolicy"},"Message sending retry"),"."),(0,a.kt)("h2",{id:"version-compatibility"},"Version compatibility"),(0,a.kt)("p",null,"Starting from Apache RocketMQ version 5.x, producers are anonymous, and producer groups are discontinued. For Apache RocketMQ version 3.x and version 4.x, existing producer groups can be discontinued, without affecting your business."),(0,a.kt)("h2",{id:"usage-notes"},"Usage notes"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"We recommend that you limit the number of producers on individual processes.")),(0,a.kt)("p",null,"In Apache RocketMQ, producers and topics provide a many-to-many form of communication. A single producer can send messages to multiple topics. We recommend that you create and initialize the minimum number of producers that your business scenarios require, and reuse as many producers as you can. For example, in a scenario that requires message delivery to multiple topics, you do not need to create a producer for each topic."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"We recommend that you do not create and destroy producers on a regular basis.")),(0,a.kt)("p",null,"The producers of Apache RocketMQ are underlying resources that can be reused, like the connection pool of a database. You do not need to create producers each time you send messages or destroy the producers after you send messages. If you regularly create and destroy producers, a large number of short connection requests are generated on the broker. This imposes a high level of load on your system."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Example of correct usage"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"  Producer p = ProducerBuilder.build();\n  for (int i =0;i<n;i++)\n  {\n    Message m= MessageBuilder.build();\n    p.send(m);\n  }\n  p.shutdown();\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Example of incorrect usage"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"  for (int i =0;i<n;i++)\n  {\n    Producer p = ProducerBuilder.build();\n    Message m= MessageBuilder.build();\n    p.send(m);\n    p.shutdown();\n  }\n")))))}u.isMDXComponent=!0},74238:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/archiforproducer-ebb8ff832f6e857cbebc2c17c2044a3b.png"},65849:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/producer_topic-f9a6348396228a2976e34a5ad0774314.png"}}]);