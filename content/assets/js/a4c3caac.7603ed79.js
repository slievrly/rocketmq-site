"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[4838],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var l=t(67294);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,u=function(e,n){if(null==e)return{};var t,l,u={},s=Object.keys(e);for(l=0;l<s.length;l++)t=s[l],n.indexOf(t)>=0||(u[t]=e[t]);return u}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)t=s[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var o=l.createContext({}),a=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=a(e.components);return l.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,u=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=a(t),g=u,d=m["".concat(o,".").concat(g)]||m[g]||c[g]||s;return t?l.createElement(d,r(r({ref:n},p),{},{components:t})):l.createElement(d,r({ref:n},p))}));function g(e,n){var t=arguments,u=n&&n.mdxType;if("string"==typeof e||u){var s=t.length,r=new Array(s);r[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:u,r[1]=i;for(var a=2;a<s;a++)r[a]=t[a];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},35758:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var l=t(87462),u=(t(67294),t(3905));const s={},r="Pull\u6d88\u8d39",i={unversionedId:"\u6d88\u8d39\u8005/13pull",id:"\u6d88\u8d39\u8005/13pull",title:"Pull\u6d88\u8d39",description:"\u5728RocketMQ\u4e2d\u6709\u4e24\u79cdPull\u65b9\u5f0f\uff0c\u4e00\u79cd\u662f\u6bd4\u8f83\u539f\u59cbPull Consumer\uff0c\u5b83\u4e0d\u63d0\u4f9b\u76f8\u5173\u7684\u8ba2\u9605\u65b9\u6cd5\uff0c\u9700\u8981\u8c03\u7528pull\u65b9\u6cd5\u65f6\u6307\u5b9a\u961f\u5217\u8fdb\u884c\u62c9\u53d6\uff0c\u5e76\u9700\u8981\u81ea\u5df1\u66f4\u65b0\u4f4d\u70b9\u3002\u53e6\u4e00\u79cd\u662fLite Pull Consumer\uff0c\u5b83\u63d0\u4f9b\u4e86Subscribe\u548cAssign\u4e24\u79cd\u65b9\u5f0f\uff0c\u4f7f\u7528\u8d77\u6765\u66f4\u52a0\u65b9\u4fbf\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/03-\u6d88\u8d39\u8005/13pull.md",sourceDirName:"03-\u6d88\u8d39\u8005",slug:"/\u6d88\u8d39\u8005/13pull",permalink:"/docs/4.x/\u6d88\u8d39\u8005/13pull",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/03-\u6d88\u8d39\u8005/13pull.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"Push Consume",permalink:"/docs/4.x/\u6d88\u8d39\u8005/12push"},next:{title:"\u90e8\u7f72\u65b9\u5f0f",permalink:"/docs/4.x/\u90e8\u7f72\u4e0e\u8fd0\u7ef4/15deploy"}},o={},a=[{value:"Pull Consumer",id:"pull-consumer",level:2},{value:"Lite Pull Consumer",id:"lite-pull-consumer",level:2}],p={toc:a};function c(e){let{components:n,...t}=e;return(0,u.kt)("wrapper",(0,l.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"pull\u6d88\u8d39"},"Pull\u6d88\u8d39"),(0,u.kt)("p",null,"\u5728RocketMQ\u4e2d\u6709\u4e24\u79cdPull\u65b9\u5f0f\uff0c\u4e00\u79cd\u662f\u6bd4\u8f83\u539f\u59cb",(0,u.kt)("inlineCode",{parentName:"p"},"Pull Consumer"),"\uff0c\u5b83\u4e0d\u63d0\u4f9b\u76f8\u5173\u7684\u8ba2\u9605\u65b9\u6cd5\uff0c\u9700\u8981\u8c03\u7528pull\u65b9\u6cd5\u65f6\u6307\u5b9a\u961f\u5217\u8fdb\u884c\u62c9\u53d6\uff0c\u5e76\u9700\u8981\u81ea\u5df1\u66f4\u65b0\u4f4d\u70b9\u3002\u53e6\u4e00\u79cd\u662f",(0,u.kt)("inlineCode",{parentName:"p"},"Lite Pull Consumer"),"\uff0c\u5b83\u63d0\u4f9b\u4e86Subscribe\u548cAssign\u4e24\u79cd\u65b9\u5f0f\uff0c\u4f7f\u7528\u8d77\u6765\u66f4\u52a0\u65b9\u4fbf\u3002"),(0,u.kt)("h2",{id:"pull-consumer"},"Pull Consumer"),(0,u.kt)("p",null,"Pull Consumer\u793a\u4f8b\u5982\u4e0b"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-javascript"},'public class PullConsumerTest {\n  public static void main(String[] args) throws MQClientException {\n    DefaultMQPullConsumer consumer = new DefaultMQPullConsumer("please_rename_unique_group_name_5");\n    consumer.setNamesrvAddr("127.0.0.1:9876");\n    consumer.start();\n    try {\n      MessageQueue mq = new MessageQueue();\n      mq.setQueueId(0);\n      mq.setTopic("TopicTest");\n      mq.setBrokerName("jinrongtong-MacBook-Pro.local");\n      long offset = 26;\n      PullResult pullResult = consumer.pull(mq, "*", offset, 32);\n      if (pullResult.getPullStatus().equals(PullStatus.FOUND)) {\n        System.out.printf("%s%n", pullResult.getMsgFoundList());\n        consumer.updateConsumeOffset(mq, pullResult.getNextBeginOffset());\n      }\n    } catch (Exception e) {\n      e.printStackTrace();\n    }\n    consumer.shutdown();\n  }\n}\n')),(0,u.kt)("p",null,"\u9996\u5148\u9700\u8981\u521d\u59cb\u5316",(0,u.kt)("inlineCode",{parentName:"p"},"DefaultMQPullConsumer"),"\u5e76\u542f\u52a8\uff0c\u7136\u540e\u6784\u9020\u9700\u8981\u62c9\u53d6\u7684\u961f\u5217",(0,u.kt)("inlineCode",{parentName:"p"},"MessageQueue"),"\uff0c\u9664\u4e86\u6784\u9020\u5916\u4e5f\u53ef\u4ee5\u5982\u4e0b\u6240\u793a\u8c03\u7528",(0,u.kt)("inlineCode",{parentName:"p"},"fetchSubscribeMessageQueues"),"\u65b9\u6cd5\u83b7\u53d6\u67d0\u4e2aTopic\u7684\u6240\u6709\u961f\u5217\uff0c\u7136\u540e\u6311\u9009\u961f\u5217\u8fdb\u884c\u62c9\u53d6\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-java"},'Set<MessageQueue> queueSet =  consumer.fetchSubscribeMessageQueues("TopicTest");\n')),(0,u.kt)("p",null,"\u627e\u5230\u6216\u8005\u6784\u9020\u5b8c\u961f\u5217\u4e4b\u540e\uff0c\u8c03\u7528pull\u65b9\u6cd5\u5c31\u53ef\u4ee5\u8fdb\u884c\u62c9\u53d6\uff0c\u9700\u8981\u4f20\u5165\u62c9\u53d6\u7684\u961f\u5217\uff0c\u8fc7\u6ee4\u8868\u8fbe\u5f0f\uff0c\u62c9\u53d6\u7684\u4f4d\u70b9\uff0c\u6700\u5927\u62c9\u53d6\u6d88\u606f\u6761\u6570\u7b49\u53c2\u6570\u3002\u62c9\u53d6\u5b8c\u6210\u540e\u4f1a\u8fd4\u56de\u62c9\u53d6\u7ed3\u679c",(0,u.kt)("inlineCode",{parentName:"p"},"PullResult"),"\uff0cPullResult\u4e2d\u7684PullStatus\u8868\u793a\u7ed3\u679c\u72b6\u6001\uff0c\u5982\u4e0b\u6240\u793a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-javascript"},"public enum PullStatus {\n    /**\n     * Founded\n     */\n    FOUND,\n    /**\n     * No new message can be pull\n     */\n    NO_NEW_MSG,\n    /**\n     * Filtering results can not match\n     */\n    NO_MATCHED_MSG,\n    /**\n     * Illegal offset,may be too big or too small\n     */\n    OFFSET_ILLEGAL\n}\n")),(0,u.kt)("p",null,"FOUND\u8868\u793a\u62c9\u53d6\u5230\u6d88\u606f\uff0cNO_NEW_MSG\u8868\u793a\u6ca1\u6709\u53d1\u73b0\u65b0\u6d88\u606f\uff0cNO_MATCHED_MSG\u8868\u793a\u6ca1\u6709\u5339\u914d\u7684\u6d88\u606f\uff0cOFFSET_ILLEGAL\u8868\u793a\u4f20\u5165\u7684\u62c9\u53d6\u4f4d\u70b9\u662f\u975e\u6cd5\u7684\uff0c\u6709\u53ef\u80fd\u504f\u5927\u6216\u504f\u5c0f\u3002\u5982\u679c\u62c9\u53d6\u72b6\u6001\u662fFOUND\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7",(0,u.kt)("inlineCode",{parentName:"p"},"pullResult"),"\u7684",(0,u.kt)("inlineCode",{parentName:"p"},"getMsgFoundList"),"\u65b9\u6cd5\u83b7\u53d6\u62c9\u53d6\u5230\u7684\u6d88\u606f\u5217\u8868\u3002\u6700\u540e\uff0c\u5982\u679c\u6d88\u8d39\u5b8c\u6210\uff0c\u901a\u8fc7",(0,u.kt)("inlineCode",{parentName:"p"},"updateConsumeOffset"),"\u65b9\u6cd5\u66f4\u65b0\u6d88\u8d39\u4f4d\u70b9\u3002"),(0,u.kt)("h2",{id:"lite-pull-consumer"},"Lite Pull Consumer"),(0,u.kt)("p",null,"Lite Pull Consumer\u662fRocketMQ 4.6.0\u63a8\u51fa\u7684Pull Consumer\uff0c\u76f8\u6bd4\u4e8e\u539f\u59cb\u7684Pull Consumer\u66f4\u52a0\u7b80\u5355\u6613\u7528\uff0c\u5b83\u63d0\u4f9b\u4e86Subscribe\u548cAssign\u4e24\u79cd\u6a21\u5f0f\uff0cSubscribe\u6a21\u5f0f\u793a\u4f8b\u5982\u4e0b"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-javascript"},'public class LitePullConsumerSubscribe {\n    public static volatile boolean running = true;\n    public static void main(String[] args) throws Exception {\n        DefaultLitePullConsumer litePullConsumer = new DefaultLitePullConsumer("lite_pull_consumer_test");\n        litePullConsumer.subscribe("TopicTest", "*");\n        litePullConsumer.setPullBatchSize(20);\n        litePullConsumer.start();\n        try {\n            while (running) {\n                List<MessageExt> messageExts = litePullConsumer.poll();\n                System.out.printf("%s%n", messageExts);\n            }\n        } finally {\n            litePullConsumer.shutdown();\n        }\n    }\n}\n')),(0,u.kt)("p",null,"\u9996\u5148\u8fd8\u662f\u521d\u59cb\u5316",(0,u.kt)("inlineCode",{parentName:"p"},"DefaultLitePullConsumer"),"\u5e76\u8bbe\u7f6e",(0,u.kt)("inlineCode",{parentName:"p"},"ConsumerGroupName"),"\uff0c\u8c03\u7528subscribe\u65b9\u6cd5\u8ba2\u9605topic\u5e76\u542f\u52a8\u3002\u4e0ePush Consumer\u4e0d\u540c\u7684\u662f\uff0c",(0,u.kt)("inlineCode",{parentName:"p"},"LitePullConsumer"),"\u62c9\u53d6\u6d88\u606f\u8c03\u7528\u7684\u662f\u8f6e\u8be2poll\u63a5\u53e3\uff0c\u5982\u679c\u80fd\u62c9\u53d6\u5230\u6d88\u606f\u5219\u8fd4\u56de\u5bf9\u5e94\u7684\u6d88\u606f\u5217\u8868\uff0c\u5426\u5219\u8fd4\u56denull\u3002\u901a\u8fc7",(0,u.kt)("inlineCode",{parentName:"p"},"setPullBatchSize"),"\u53ef\u4ee5\u8bbe\u7f6e\u6bcf\u4e00\u6b21\u62c9\u53d6\u7684\u6700\u5927\u6d88\u606f\u6570\u91cf\uff0c\u6b64\u5916\u5982\u679c\u4e0d\u989d\u5916\u8bbe\u7f6e\uff0c",(0,u.kt)("inlineCode",{parentName:"p"},"LitePullConsumer"),"\u9ed8\u8ba4\u662f\u81ea\u52a8\u63d0\u4ea4\u4f4d\u70b9\u3002\u5728subscribe\u6a21\u5f0f\u4e0b\uff0c\u540c\u4e00\u4e2a\u6d88\u8d39\u7ec4\u4e0b\u7684\u591a\u4e2a",(0,u.kt)("inlineCode",{parentName:"p"},"LitePullConsumer"),"\u4f1a\u8d1f\u8f7d\u5747\u8861\u6d88\u8d39\uff0c\u4e0ePushConsumer\u4e00\u81f4\u3002"),(0,u.kt)("p",null,"\u5982\u4e0b\u662fAssign\u6a21\u5f0f\u7684\u793a\u4f8b"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-javascript"},'public class LitePullConsumerAssign {\n    public static volatile boolean running = true;\n    public static void main(String[] args) throws Exception {\n        DefaultLitePullConsumer litePullConsumer = new DefaultLitePullConsumer("please_rename_unique_group_name");\n        litePullConsumer.setAutoCommit(false);\n        litePullConsumer.start();\n        Collection<MessageQueue> mqSet = litePullConsumer.fetchMessageQueues("TopicTest");\n        List<MessageQueue> list = new ArrayList<>(mqSet);\n        List<MessageQueue> assignList = new ArrayList<>();\n        for (int i = 0; i < list.size() / 2; i++) {\n            assignList.add(list.get(i));\n        }\n        litePullConsumer.assign(assignList);\n        litePullConsumer.seek(assignList.get(0), 10);\n        try {\n            while (running) {\n                List<MessageExt> messageExts = litePullConsumer.poll();\n                System.out.printf("%s %n", messageExts);\n                litePullConsumer.commitSync();\n            }\n        } finally {\n            litePullConsumer.shutdown();\n        }\n    }\n}\n')),(0,u.kt)("p",null,"Assign\u6a21\u5f0f\u4e00\u5f00\u59cb\u4ecd\u7136\u662f\u521d\u59cb\u5316",(0,u.kt)("inlineCode",{parentName:"p"},"DefaultLitePullConsumer"),"\uff0c\u8fd9\u91cc\u6211\u4eec\u91c7\u7528\u624b\u52a8\u63d0\u4ea4\u4f4d\u70b9\u7684\u65b9\u5f0f\uff0c\u56e0\u6b64\u8bbe\u7f6eAutoCommit\u4e3afalse\uff0c\u7136\u540e\u542f\u52a8consumer\u3002\u4e0eSubscribe\u6a21\u5f0f\u4e0d\u540c\u7684\u662f\uff0cAssign\u6a21\u5f0f\u4e0b\u6ca1\u6709\u81ea\u52a8\u7684\u8d1f\u8f7d\u5747\u8861\u673a\u5236\uff0c\u9700\u8981\u7528\u6237\u81ea\u884c\u6307\u5b9a\u9700\u8981\u62c9\u53d6\u7684\u961f\u5217\uff0c\u56e0\u6b64\u5728\u4f8b\u5b50\u4e2d\uff0c\u5148\u7528fetchMessageQueues\u83b7\u53d6\u4e86Topic\u4e0b\u7684\u961f\u5217\uff0c\u518d\u53d6\u524d\u9762\u7684\u4e00\u534a\u961f\u5217\u8fdb\u884c\u62c9\u53d6\uff0c\u793a\u4f8b\u4e2d\u8fd8\u8c03\u7528\u4e86seek\u65b9\u6cd5\uff0c\u5c06\u7b2c\u4e00\u4e2a\u961f\u5217\u62c9\u53d6\u7684\u4f4d\u70b9\u8bbe\u7f6e\u4ece10\u5f00\u59cb\u3002\u7d27\u63a5\u7740\u8fdb\u5165\u5faa\u73af\u4e0d\u505c\u5730\u8c03\u7528poll\u65b9\u6cd5\u62c9\u53d6\u6d88\u606f\uff0c\u62c9\u53d6\u5230\u6d88\u606f\u540e\u8c03\u7528commitSync\u65b9\u6cd5\u624b\u52a8\u63d0\u4ea4\u4f4d\u70b9\u3002"))}c.isMDXComponent=!0}}]);