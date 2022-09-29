"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[3498],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>p});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(a),p=n,h=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return a?r.createElement(h,s(s({ref:t},m),{},{components:a})):r.createElement(h,s({ref:t},m))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,s),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(87462),n=a(67294),o=a(86010),s=a(72389),i=a(67392),l=a(7094),c=a(12466);const m="tabList__CuJ",d="tabItem_LNqP";function u(e){var t;const{lazy:a,block:s,defaultValue:u,values:p,groupId:h,className:v}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??k.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),b=(0,i.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===u?u:u??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,l.U)(),[y,M]=(0,n.useState)(f),T=[],{blockElementScrollPositionUntilNextRender:S}=(0,c.o5)();if(null!=h){const e=N[h];null!=e&&e!==y&&g.some((t=>t.value===e))&&M(e)}const x=e=>{const t=e.currentTarget,a=T.indexOf(t),r=g[a].value;r!==y&&(S(t),M(r),null!=h&&w(h,String(r)))},C=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",m)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},v)},g.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>T.push(e),onKeyDown:C,onFocus:x,onClick:x},s,{className:(0,o.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":y===t})}),a??t)}))),a?(0,n.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function p(e){const t=(0,s.Z)();return n.createElement(u,(0,r.Z)({key:String(t)},e))}},80009:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),o=a(65488),s=a(85162);const i={},l="What is RocketMQ",c={unversionedId:"\u4ecb\u7ecd/03whatis",id:"\u4ecb\u7ecd/03whatis",title:"What is RocketMQ",description:"People subscribe to some of their favorites by applications.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/01-\u4ecb\u7ecd/03whatis.md",sourceDirName:"01-\u4ecb\u7ecd",slug:"/\u4ecb\u7ecd/03whatis",permalink:"/docs/4.x/\u4ecb\u7ecd/03whatis",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/01-\u4ecb\u7ecd/03whatis.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"Quickstart",permalink:"/docs/4.x/\u4ecb\u7ecd/02quickstart"},next:{title:"Core Concept",permalink:"/docs/4.x/\u751f\u4ea7\u8005/04concept1"}},m={},d=[{value:"RocketMQ&#39;s message model, a simple Pub/Sub model",id:"rocketmqs-message-model-a-simple-pubsub-model",level:2},{value:"RocketMQ extended message model",id:"rocketmq-extended-message-model",level:2},{value:"RocketMQ Architecture",id:"rocketmq-architecture",level:2},{value:"<strong>Producer</strong>",id:"producer",level:3},{value:"<strong>Consumer</strong>",id:"consumer",level:3},{value:"<strong>NameServer</strong>",id:"nameserver",level:2},{value:"Broker",id:"broker",level:2},{value:"RocketMQ Workflow",id:"rocketmq-workflow",level:2},{value:"1. Start the RocketMQ NameServer",id:"1-start-the-rocketmq-nameserver",level:3},{value:"2. Start the RocketMQ Broker",id:"2-start-the-rocketmq-broker",level:3},{value:"3. Create a topic",id:"3-create-a-topic",level:3},{value:"4. Write messages to the topic",id:"4-write-messages-to-the-topic",level:3},{value:"5. Read messages from the topic",id:"5-read-messages-from-the-topic",level:3}],u={toc:d};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-is-rocketmq"},"What is RocketMQ"),(0,n.kt)("p",null,"People subscribe to some of their favorites by applications.\nWhen an author publishes an article to the relevant section, we can receive relevant news feeds."),(0,n.kt)("p",null,"Pub/Sub is a messaging paradigm where message senders(called publishers, producers) send messages directly to specific recipients (called subscribers, consumers). The basic message model of RocketMQ is a simple Pub/Sub model."),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Concepts")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"Producer",label:"\u751f\u4ea7\u8005",default:!0,mdxType:"TabItem"},"The producer is responsible for producing messages, and the business system is generally responsible for producing messages. A producer sends messages generated in the business application system to the broker server.RocketMQ provides a variety of sending methods, synchronous sending, asynchronous sending, sequential sending, and one-way sending.",(0,n.kt)("p",{parentName:"div"},"learn more  \u27a1\ufe0f ",(0,n.kt)("a",{parentName:"p",href:"/docs/4.x/%E7%94%9F%E4%BA%A7%E8%80%85/04concept1"},"Producer")),"  "),(0,n.kt)(s.Z,{value:"Consumer",label:"\u6d88\u8d39\u8005",mdxType:"TabItem"},"Aims to consume messages, which are generally responsible by the backend system (asynchronous consumption). A message consumer pulls messages from the Broker server and serves them to the application. From the perspective of user applications, two consumption methods are provided: pull consumption and push consumption.",(0,n.kt)("p",{parentName:"div"},"learn more  \u27a1\ufe0f ",(0,n.kt)("a",{parentName:"p",href:"/docs/4.x/%E6%B6%88%E8%B4%B9%E8%80%85/11concept2"},"Consumer")),"  "),(0,n.kt)(s.Z,{value:"Topic",label:"\u4e3b\u9898",mdxType:"TabItem"},"RocketMQ's fundamental unit of event organization is called Topic. Each Topic contains several messages, and each message can only belong to one topic.",(0,n.kt)("p",{parentName:"div"},"learn more  \u27a1\ufe0f ",(0,n.kt)("a",{parentName:"p",href:"/docs/4.x/%E7%94%9F%E4%BA%A7%E8%80%85/04concept1"},"basic concept")),"  ")))),(0,n.kt)("h2",{id:"rocketmqs-message-model-a-simple-pubsub-model"},"RocketMQ's message model, a simple Pub/Sub model"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"RocketMQ model",src:a(64969).Z,width:"1487",height:"277"})),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Basic Messaging System Model")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"}," The figure above is an extended message model, including ",(0,n.kt)("strong",{parentName:"p"},"two Producers"),", ",(0,n.kt)("strong",{parentName:"p"},"two Topics"),", and ",(0,n.kt)("strong",{parentName:"p"},"two sets of Consumers"),"."))),(0,n.kt)("p",null,"In a ",(0,n.kt)("strong",{parentName:"p"},"topic-based")," system, messages are published on topics or channels.Consumers will receive all messages on the topics they subscribe to, and producers are responsible for defining the message categories that subscribers subscribe to.This is a basic conceptual model, and in practical applications, the structure will be more complex.For example, in order to support high concurrency and horizontal scaling, the topics need to be partitioned.The same topic will have multiple producers, the same information will have multiple consumers, and load balancing should be performed between consumers."),(0,n.kt)("h2",{id:"rocketmq-extended-message-model"},"RocketMQ extended message model"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"RocketMQ basic model",src:a(25834).Z,width:"1387",height:"695"})),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Extended message model")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"The above picture is an extended message model, including ",(0,n.kt)("strong",{parentName:"p"},"two producers"),", ",(0,n.kt)("strong",{parentName:"p"},"two topics"),", and ",(0,n.kt)("strong",{parentName:"p"},"two sets of consumers Comsumer"),"."),(0,n.kt)("p",{parentName:"div"},"The ",(0,n.kt)("strong",{parentName:"p"},"Broker")," that stores message topics is the proxy server for the actual deployment process."))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"for",(0,n.kt)("strong",{parentName:"p"},"Horizontal scaling"),", RocketMQ partitions Topic through ",(0,n.kt)("strong",{parentName:"p"},"MessageQueue"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"for",(0,n.kt)("strong",{parentName:"p"},"Concurrent consumption"),", the concept of Consumer Group came into being."))),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},"Consumer mainly has two consumption modes, namely ",(0,n.kt)("strong",{parentName:"li"},"broadcast mode")," and ",(0,n.kt)("strong",{parentName:"li"},"cluster mode")," (the most commonly used cluster mode is shown in the figure)."),(0,n.kt)("li",{parentName:"ul"},"Consumer instances in the same Consumer Group are load balancing consumption.As shown in the figure, ConsumerGroupA subscribes to TopicA and TopicA corresponds to 3 queues.Then Consumer1 in GroupA consumes messages from MessageQueue 0 and MessageQueue 1, and Consumer2 consumes messages from MessageQueue2.")))),(0,n.kt)("h2",{id:"rocketmq-architecture"},"RocketMQ Architecture"),(0,n.kt)("p",null,"How do Producer and Consumer find the addresses of Topic and Broker? How are messages sent and received?"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"RocketMQ Architecture",src:a(36619).Z,width:"1342",height:"541"})),(0,n.kt)("p",null,"The main Apache RocketMQ components are Producers, Consumers, NameServers, and Brokers:"),(0,n.kt)("h3",{id:"producer"},(0,n.kt)("strong",{parentName:"h3"},"Producer")),(0,n.kt)("p",null,"A  producer serves as a data source that optimizes, writes, and publishes messages to one or more  topics.Producers load balance data among brokers through MessageQueue.It supports fail-fast and retries during sending messages."),(0,n.kt)("h3",{id:"consumer"},(0,n.kt)("strong",{parentName:"h3"},"Consumer")),(0,n.kt)("p",null,"Consumers read data by reading messages from the topics to which they subscribe."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Supports message consumption in two modes: push and pull."),(0,n.kt)("li",{parentName:"ul"},"Supports ",(0,n.kt)("strong",{parentName:"li"},"cluster mode")," and broadcast mode consumption"),(0,n.kt)("li",{parentName:"ul"},"Provide real-time message subscription mechanism")),(0,n.kt)("h2",{id:"nameserver"},(0,n.kt)("strong",{parentName:"h2"},"NameServer")),(0,n.kt)("p",null,"NameServer is a simple Topic routing registry that supports dynamic registration and discovery of Topic and Broker."),(0,n.kt)("p",null,"Mainly includes two functions\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Broker management"),":The NameServer accepts the registration information of the Broker cluster and saves it as the basic data of the routing information.And it provides a heartbeat detection mechanism to check whether the Broker is still alive."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Routing Information Management"),":Each NameServer will hold the entire routing information about the Broker cluster and queue information for client queries.The Producer and Consumer can know the routing information of the entire Broker cluster through the NameServer, so as to produce and consume messages.")),(0,n.kt)("p",null,"NameServer usually has multiple instances deployed, and each instance does not communicate with each other.Broker registers its own routing information with each NameServer, so each NameServer instance saves a complete routing information.The client can still obtain routing information from other NameServers, When a NameServer goes offline for some reason."),(0,n.kt)("h2",{id:"broker"},"Broker"),(0,n.kt)("p",null,"Broker is mainly responsible for message storage, delivery and query, as well as service high availability guarantee."),(0,n.kt)("p",null,"NameServer is stateless, so it can be deployed in clusters without any information synchronization between nodes.Compared with nameserver, broker is more complicated."),(0,n.kt)("p",null,"In the Master-Slave architecture, the Broker is divided into Master and Slave.\nA Master can correspond to multiple Slaves, but a Slave can only correspond to one Master.\nThe correspondence between Master and Slave is defined by specifying the same BrokerName and different BrokerId. A BrokerId of 0 means Master, and non-0 means Slave.Master can also deploy multiple."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"RocketMQ Architecture Summary")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},"Each ",(0,n.kt)("strong",{parentName:"li"},"Broker")," establishes long-term connections with all nodes in the ",(0,n.kt)("strong",{parentName:"li"},"NameServer")," cluster, and regularly registers Topic information to all NameServers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Producer")," establishes a persistent connection with one of the nodes in the ",(0,n.kt)("strong",{parentName:"li"},"NameServer")," cluster, regularly obtains topic routing information from NameServer, establishes a persistent connection to the Master that provides Topic services, and regularly sends a heartbeat to the Master.Producers are completely stateless."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Consumer")," establishes a persistent connection to one of the nodes in the ",(0,n.kt)("strong",{parentName:"li"},"NameServer")," cluster\n\uff0cregularly obtains Topic routing information from NameServer,establishes long connections to Master and Slave that provide Topic services, and send heartbeats to Master and Slave regularly.Consumer subscribes to topic from Master or Slave.")))),(0,n.kt)("h2",{id:"rocketmq-workflow"},"RocketMQ Workflow"),(0,n.kt)("h3",{id:"1-start-the-rocketmq-nameserver"},"1. Start the RocketMQ NameServer"),(0,n.kt)("p",null,"The NameServer listens to the port and waits for the connection of the Broker, Producer, and Consumer after startup."),(0,n.kt)("h3",{id:"2-start-the-rocketmq-broker"},"2. Start the RocketMQ Broker"),(0,n.kt)("p",null,"The Broker maintains long connections with all NameServers, gets current Broker information, and stores all Topic information after startup. After successful registration, a mapping relationship will be built between Topic and Broker in the NameServer cluster."),(0,n.kt)("h3",{id:"3-create-a-topic"},"3. Create a topic"),(0,n.kt)("p",null,"The Broker should be specified before creating a Topic, or automatically create one while sending messages."),(0,n.kt)("h3",{id:"4-write-messages-to-the-topic"},"4. Write messages to the topic"),(0,n.kt)("p",null,"The Producer starts by establishing a long-term connection with one device of the NameServer clusters, obtains the Broker information where the current topic exists from the NameServer, polls to select a queue from the queue list, and establishes a long-term connection where the queue is located. This enables the Producer to send messages to the Broker."),(0,n.kt)("h3",{id:"5-read-messages-from-the-topic"},"5. Read messages from the topic"),(0,n.kt)("p",null,"The Consumer establishes a long-term connection with one of the NameServers, obtains which brokers the current subscription topic exists on, and then directly establishes a connection channel with the Broker, and then starts to consume messages."))}p.isMDXComponent=!0},25834:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/RocketMQ\u57fa\u672c\u6a21\u578b-ebcf3458d04b36f47f4c9633c1e36bf7.png"},64969:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/RocketMQ\u6982\u5ff5\u6a21\u578b-db2c246ff6aa79016f880e2ca7a447e7.png"},36619:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/RocketMQ\u90e8\u7f72\u67b6\u6784-ee0435f80da5faecf47bca69b1c831cb.png"}}]);