(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[94],{509:function(e,t,n){"use strict";n.r(t);var a=n(1),r=(n(0),n(640)),c=n(103);t.default=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(r.c,{label:"ARN",valuePath:"arn"}),Object(a.jsx)(r.c,{label:"Region",valuePath:"region"}),Object(a.jsx)(r.c,{label:"Engine",valuePath:"Engine"}),Object(a.jsx)(r.c,{label:"Creation Time",valuePath:"InstanceCreateTime",renderValue:c.h}),Object(a.jsx)(r.c,{label:"Status",valuePath:"DBInstanceStatus",renderValue:c.i}),Object(a.jsx)(r.c,{label:"Is Read Replica",valuePath:"is_read_replica"}),Object(a.jsx)(r.c,{label:"Auto Minor Version Upgrade",valuePath:"AutoMinorVersionUpgrade",renderValue:c.c}),Object(a.jsx)(r.c,{label:"Multi Availability Zones",valuePath:"MultiAZ",renderValue:c.c}),Object(a.jsx)(r.c,{label:"Instance Class",valuePath:"DBInstanceClass"}),Object(a.jsx)(r.c,{label:"Backup Retention Period",valuePath:"BackupRetentionPeriod",renderValue:function(e){return"".concat(e," days")}}),Object(a.jsx)(r.c,{label:"Enhanced Monitoring",valuePath:"EnhancedMonitoringResourceArn",renderValue:c.c}),Object(a.jsx)(r.c,{label:"Encrypted Storage",valuePath:"StorageEncrypted",renderValue:c.c}),Object(a.jsx)(r.c,{label:"CA Certificate",valuePath:"CACertificateIdentifier"})]})}},637:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return o}));var a=n(0),r=n.n(a),c={path_to_issue:[],item:{}},i=r.a.createContext(c),l=r.a.createContext(""),o=r.a.createContext((function(){}))},638:function(e,t,n){"use strict";var a=n(19),r=n(1),c=n(0),i=n(633),l=n(7),o=n.n(l),u=n(15),s=n.n(u),b=n(10),d=n.n(b),j=n(637),p=n(103),v=n(83),h=(n(641),n(624)),f=n(191),x=n.n(f),O=n(192),P=n(130),g=function(e){var t=e.service,n=e.finding,a=e.path,l=Object(c.useContext)(P.a),o=l.exceptions,u=l.addException,b=Object(O.b)().enqueueSnackbar,d=s()(o,[t,n],[]).includes(a);return Object(r.jsx)(i.a,{title:"Add to exception list",placement:"top",arrow:!0,children:Object(r.jsx)(h.a,{disabled:d,size:"small",startIcon:Object(r.jsx)(x.a,{}),className:"exception-btn",onClick:function(){u(t,n,a),b("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:"Add"})})},C=n(29),m=function(e){var t,n=e.label,l=e.separator,u=e.valuePath,b=e.errorPath,h=e.className,f=e.inline,x=e.tooltip,O=e.tooltipProps,P=e.renderValue,m=e.basePathOverwrite,A=Object(C.g)(),V=Object(c.useContext)(j.a),E=Object(c.useContext)(j.b),I=Object(c.useContext)(j.c),R=Object(p.a)(m||E,u),k=P(e.value||s()(V.item,R,e.value));("boolean"===typeof k&&(k=String(k)),b)?t=(d()(b)?b:[b]).map((function(e){return Object(p.a)(m||E,e)})):t=[R];var y=t.some((function(e){return V.path_to_issues.includes(e)})),M=V.level;if(Object(c.useEffect)((function(){y&&I(M)}),[M]),void 0===k||null===k)return null;var S=Object(r.jsx)(g,{service:A.service,finding:A.finding,path:"".concat(V.path,".").concat(t[0])}),_=Object(r.jsxs)("span",{className:o()(y&&o()("issue",M)),children:[k,y&&S]});return Object(r.jsx)(v.a,{className:o()(h,"partial-value",{inline:f}),label:n,separator:l,value:x?Object(r.jsx)(i.a,Object(a.a)(Object(a.a)({title:k},O),{},{children:_})):_})};m.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=m},639:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n(637),i=n(103);t.a=function(e){var t=e.path,n=e.children,l=Object(r.useContext)(c.b);return Object(a.jsx)(c.b.Provider,{value:Object(i.a)(l,t),children:n})}},640:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return l.a}));var a=n(1),r=(n(0),n(637)),c=(n(103),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(r.a.Provider,{value:t,children:n})}),i=n(639),l=n(638)},641:function(e,t,n){}}]);
//# sourceMappingURL=94.23abd552.chunk.js.map