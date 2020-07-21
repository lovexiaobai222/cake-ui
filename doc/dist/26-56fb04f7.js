(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1055:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var a=n(0),r=n.n(a),o=n(143),c=n(144),l=n(485),u=n(394),i=n(550),s=n(549),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.7c-3.7 11.6-5.7 23.9-5.7 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1zm496 58.4L318.8 611.3l-12.9-5.2H184V417.9h121.9l12.9-5.2L840 203.3v617.4z"}}]},name:"notification",theme:"outlined"},p=n(138),d=function(e,t){return a.createElement(p.a,Object.assign({},e,{ref:t,icon:f}))};d.displayName="NotificationOutlined";var m=a.forwardRef(d),y=n(395),b=[{key:"color",param:"color",explain:"自定义小圆点的颜色",type:"String",defaultValue:""},{key:"count",param:"count",explain:"展示的数字(为0时隐藏)",type:"number|ReactNode",defaultValue:""},{key:"dot",param:"dot",explain:"不展示数字，只有一个小红点",type:"boolean",defaultValue:"false"},{key:"offset",param:"offset",explain:"状态点的位置偏移，格式为 [x, y]",type:"array",defaultValue:"[0,0]"},{key:"overflowCount",param:"overflowCount",explain:"封顶的数字值",type:"number",defaultValue:"99"},{key:"showZero",param:"showZero",explain:"当数值为 0 时，是否展示 Badge",type:"boolean",defaultValue:"false"},{key:"status",param:"status",explain:"设置 Badge 为状态点",type:"string",defaultValue:"success | processing | default | error | warning"},{key:"text",param:"text",explain:"在设置了 status 的前提下有效，设置状态点的文本",type:"string",defaultValue:""},{key:"title",param:"title",explain:"鼠标放在状态点上时显示的文字",type:"string",defaultValue:""}],g=function(e){var t,n;function a(t,n){var a;return(a=e.call(this,t,n)||this).state={},a}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=r.a.createElement(l.a,{onClick:function(e){}},r.a.createElement(l.a.Item,{key:"1"},r.a.createElement(u.a,{count:12,offset:[0,6]},"评论")),r.a.createElement(l.a.Item,{key:"2"},r.a.createElement(u.a,{count:3,offset:[0,6]},"回复")));return r.a.createElement("div",null,r.a.createElement("h2",null,"气泡 示例"),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("div",{style:{width:"48%"}},r.a.createElement("div",{style:{width:"460px",display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement(u.a,{count:12},r.a.createElement(i.a,{color:"blue"},"评论")),r.a.createElement(u.a,{count:3},r.a.createElement(i.a,{color:"blue"},"回复")),r.a.createElement(u.a,{count:100,overflowCount:99},r.a.createElement(i.a,{color:"blue"},"评论")),r.a.createElement(u.a,{count:11,overflowCount:10},r.a.createElement(i.a,{color:"blue"},"回复")),r.a.createElement(u.a,{count:r.a.createElement("span",{style:{background:"#FF4949",color:"#fff",borderRadius:"8px",padding:"2px 6px"}},"New")},r.a.createElement(i.a,{color:"blue"},"评论")),r.a.createElement(u.a,{count:r.a.createElement("span",{style:{background:"#FF4949",color:"#fff",borderRadius:"8px",padding:"2px 6px"}},"Hot")},r.a.createElement(i.a,{color:"blue"},"回复"))),r.a.createElement(o.a,null,'\nimport { Badge, Tag } from "antd"\n\n<Badge count={12}><Tag color="blue">评论</Tag></Badge>\n<Badge count={3}><Tag color="blue">回复</Tag></Badge>\n<Badge count={100} overflowCount={99}><Tag color="blue">评论</Tag></Badge>\n<Badge count={11} overflowCount={10}><Tag color="blue">回复</Tag></Badge>\n<Badge count={<span style={{background:"#FF4949",color:"#fff",borderRadius:"8px",padding:"2px 6px"}}>New</span>}><Tag color="blue">评论</Tag></Badge>\n<Badge count={<span style={{background:"#FF4949",color:"#fff",borderRadius:"8px",padding:"2px 6px"}}>Hot</span>}><Tag color="blue">回复</Tag></Badge>\n                    ')),r.a.createElement("div",{style:{width:"48%"}},r.a.createElement("div",{style:{width:"260px",display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement(u.a,{dot:!0},"数据查询"),r.a.createElement(u.a,{dot:!0},r.a.createElement(m,null)),r.a.createElement(u.a,{dot:!0},r.a.createElement("span",{style:{borderRadius:"4px",background:"#20A0FF",color:"#fff",padding:"6px 10px"}},r.a.createElement(m,null))),r.a.createElement(s.a,{overlay:e},r.a.createElement("a",{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()}},"点我查看 ",r.a.createElement(y.a,null)))),r.a.createElement(o.a,null,'\nimport { Badge,Menu, Dropdown } from "antd"\nimport { NotificationOutlined,CaretDownOutlined } from \'@ant-design/icons\';\n\nconst menu = (\n  <Menu onClick={(e)=>{}}>\n    <Menu.Item key="1"><Badge count={12} offset={[0,6]}>评论</Badge></Menu.Item>\n    <Menu.Item key="2"><Badge count={3} offset={[0,6]}>回复</Badge></Menu.Item>\n  </Menu>\n);\n\n<Badge dot>数据查询</Badge>\n<Badge dot><NotificationOutlined /></Badge>\n<Badge dot><span style={{borderRadius:"4px",background:"#20A0FF",color:"#fff",padding:"6px 10px"}}><NotificationOutlined /></span></Badge>\n\n<Dropdown overlay={menu}>\n  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>\n    点我查看 <CaretDownOutlined />\n  </a>\n</Dropdown>\n                    '))),r.a.createElement("h2",null,"组件属性"),r.a.createElement(c.a,{dataList:b}))},a}(a.Component)},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),r=n.n(a),o=n(1053),c=n(294),l=n(1046),u=n(1050),i=n(1061),s=n(1062),f=n(1063);l.a.Paragraph;var p=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).changeStatus=function(){n.setState((function(e){return{isCodeCollpase:!e.isCodeCollpase}}))},n.copyFn=function(){var e=document.createRange();e.selectNodeContents(document.getElementById(n.id));var t=window.getSelection();t.rangeCount>0&&t.removeAllRanges(),t.addRange(e),document.execCommand("Copy"),u.a.success("复制成功")},n.state={isCodeCollpase:!1},n.id=function(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}(),n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.state.isCodeCollpase;return r.a.createElement("div",{style:{margin:"20px 0"}},r.a.createElement("div",{style:{border:"1px dashed #ddd",borderRadius:"4px",padding:"8px 20px",textAlign:"right"}},r.a.createElement(i.a,{onClick:this.copyFn,style:{marginRight:24}}),e?r.a.createElement(s.a,{onClick:this.changeStatus}):r.a.createElement(f.a,{onClick:this.changeStatus})),r.a.createElement("div",{id:this.id},e?r.a.createElement(o.a,{language:"jsx",style:c.a,showLineNumbers:!0,wrapLines:!0},this.props.children.replace(/^\s+|\s+$/g,"")):null))},a}(r.a.Component)},144:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1045),c=[{width:"15%",title:"参数",dataIndex:"param"},{width:"50%",title:"说明",dataIndex:"explain"},{width:"15%",title:"类型",dataIndex:"type"},{title:"默认值",dataIndex:"defaultValue"}];t.a=function(e){return r.a.createElement(o.a,{size:"small",columns:c,dataSource:e.dataList,pagination:!1})}},374:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(142),r=Object(a.a)("success","processing","error","default","warning"),o=Object(a.a)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")},394:function(e,t,n){"use strict";var a=n(0),r=n(154),o=n(38),c=n(8),l=n.n(c),u=n(9);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function p(e){return e?e.toString().split("").reverse().map((function(e){var t=Number(e);return isNaN(t)?e:t})):[]}var d=function(e){var t=s(a.useState(!0),2),n=t[0],r=t[1],c=s(a.useState(e.count),2),f=c[0],d=c[1],m=s(a.useState(e.count),2),y=m[0],b=m[1],g=s(a.useState(e.count),2),v=g[0],h=g[1];y!==e.count&&(r(!0),b(e.count)),a.useEffect((function(){var t;return h(f),n&&(t=setTimeout((function(){r(!1),d(e.count),e.onAnimated&&e.onAnimated()}))),function(){t&&clearTimeout(t)}}),[n,f,e.count,e.onAnimated]);var w=function(e,t,r){if("number"==typeof t){var o=function(e,t){var a=Math.abs(Number(f)),r=Math.abs(Number(v)),o=Math.abs(p(f)[t]),c=Math.abs(p(r)[t]);return n?10+e:a>r?o>=c?10+e:20+e:o<=c?10+e:e}(t,r),c=n||void 0===p(v)[r];return a.createElement("span",{className:"".concat(e,"-only"),style:{transition:c?"none":void 0,msTransform:"translateY(".concat(100*-o,"%)"),WebkitTransform:"translateY(".concat(100*-o,"%)"),transform:"translateY(".concat(100*-o,"%)")},key:r},function(e,t){for(var n=[],r=0;r<30;r++)n.push(a.createElement("p",{key:r.toString(),className:l()(t,{current:e===r})},r%10));return n}(o,"".concat(e,"-only-unit")))}return a.createElement("span",{key:"symbol",className:"".concat(e,"-symbol")},t)};return a.createElement(u.a,null,(function(t){var n=t.getPrefixCls,r=e.prefixCls,c=e.className,u=e.style,s=e.title,d=e.component,m=void 0===d?"sup":d,y=e.displayComponent,b=Object(o.a)(e,["count","onAnimated","component","prefixCls","displayComponent"]),g=n("scroll-number",r),v=i(i({},b),{className:l()(g,c),title:s});return u&&u.borderColor&&(v.style=i(i({},u),{boxShadow:"0 0 0 1px ".concat(u.borderColor," inset")})),y?a.cloneElement(y,{className:l()("".concat(g,"-custom-component"),y.props&&y.props.className)}):a.createElement(m,v,function(e){return f&&Number(f)%1==0?p(f).map((function(t,n){return w(e,t,n)})).reverse():f}(g))}))};d.defaultProps={count:null,onAnimated:function(){}};var m=d,y=n(374);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e){return-1!==y.a.indexOf(e)}var w=function(e){var t=function(){var t=e.count,n=e.overflowCount;return t>n?"".concat(n,"+"):t},n=function(){var t=e.status,n=e.color;return!!t||!!n},c=function(){var e=t();return"0"===e||0===e},i=function(){return e.dot&&!c()||n()},s=function(){return i()?"":t()},f=function(){var t=e.offset,n=e.style;return t?v({right:-parseInt(t[0],10),marginTop:t[1]},n):n},p=function(t){var a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ltr",o=e.className,c=e.children;return l()(o,t,(g(a={},"".concat(t,"-status"),n()),g(a,"".concat(t,"-not-a-wrapper"),!c),g(a,"".concat(t,"-rtl"),"rtl"===r),a))},d=function(){var t=e.showZero,n=s();return(null==n||""===n||c()&&!t)&&!i()},y=function(t,n){var r,o=e.status,c=e.count,u=e.color,p=s(),y=i(),w=d(),x=l()((g(r={},"".concat(t,"-dot"),y),g(r,"".concat(t,"-count"),!y),g(r,"".concat(t,"-multiple-words"),!y&&c&&c.toString&&c.toString().length>1),g(r,"".concat(t,"-status-").concat(o),!!o),g(r,"".concat(t,"-status-").concat(u),h(u)),r)),E=f();return u&&!h(u)&&((E=E||{}).background=u),w?null:a.createElement(m,{prefixCls:n,"data-show":!w,className:x,count:p,displayComponent:function(){var t=e.count;if(t&&"object"===b(t))return a.cloneElement(t,{style:v(v({},f()),t.props&&t.props.style)})}(),title:function(){var t=e.title,n=e.count;return t||("string"==typeof n||"number"==typeof n?n:void 0)}(),style:E,key:"scrollNumber"})};return a.createElement(u.a,null,(function(t){var c,u=t.getPrefixCls,i=t.direction,s=e.prefixCls,m=e.scrollNumberPrefixCls,b=e.children,w=e.status,x=e.text,E=e.color,C=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color"]),O=["count","showZero","overflowCount","className","style","dot","offset","title"],k=u("badge",s),j=u("scroll-number",m),N=y(k,j),S=function(t){var n=e.text;return d()||!n?null:a.createElement("span",{className:"".concat(t,"-status-text")},n)}(k),B=l()((g(c={},"".concat(k,"-status-dot"),n()),g(c,"".concat(k,"-status-").concat(w),!!w),g(c,"".concat(k,"-status-").concat(E),h(E)),c)),P={};if(E&&!h(E)&&(P.background=E),!b&&n()){var I=f(),A=I&&I.color;return a.createElement("span",v({},Object(o.a)(C,O),{className:p(k,i),style:I}),a.createElement("span",{className:B,style:P}),a.createElement("span",{style:{color:A},className:"".concat(k,"-status-text")},x))}return a.createElement("span",v({},Object(o.a)(C,O),{className:p(k,i)}),b,a.createElement(r.a,{component:"",showProp:"data-show",transitionName:b?"".concat(k,"-zoom"):"",transitionAppear:!0},N),S)}))};w.defaultProps={count:null,showZero:!1,dot:!1,overflowCount:99},t.a=w},395:function(e,t,n){"use strict";var a=n(0),r={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},name:"caret-down",theme:"outlined"},o=n(138),c=function(e,t){return a.createElement(o.a,Object.assign({},e,{ref:t,icon:r}))};c.displayName="CaretDownOutlined",t.a=a.forwardRef(c)},550:function(e,t,n){"use strict";var a=n(0),r=n(8),o=n.n(r),c=n(38),l=n(162),u=n.n(l),i=n(9);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=n(374),d=n(372);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var v=new RegExp("^(".concat(p.a.join("|"),")(-inverse)?$")),h=new RegExp("^(".concat(p.b.join("|"),")$")),w=a.forwardRef((function(e,t){var n=a.useContext(i.b),r=b(a.useState(!0),2),l=r[0],s=r[1];a.useEffect((function(){"visible"in e&&s(e.visible)}),[e.visible]);var f=function(){var t=e.color;return!!t&&(v.test(t)||h.test(t))},p=function(){var t=e.color,n=e.style;return y({backgroundColor:t&&!f()?t:void 0},n)},g=function(t){var n,a=t.getPrefixCls,r=t.direction,c=e.prefixCls,u=e.className,i=e.color,s=f(),p=a("tag",c);return o()(p,(m(n={},"".concat(p,"-").concat(i),s),m(n,"".concat(p,"-has-color"),i&&!s),m(n,"".concat(p,"-hidden"),!l),m(n,"".concat(p,"-rtl"),"rtl"===r),n),u)},w=function(t){t.stopPropagation();var n=e.onClose;n&&n(t),t.defaultPrevented||"visible"in e||s(!1)},x=function(){return e.closable?a.createElement(u.a,{onClick:w}):null},E=e.children,C=e.icon,O=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["children","icon"]),k="onClick"in O||E&&"a"===E.type,j=Object(c.a)(O,["onClose","color","visible","closable","prefixCls"]),N=C||null,S=N?a.createElement(a.Fragment,null,N,a.createElement("span",null,E)):E;return k?a.createElement(d.a,null,a.createElement("span",y({},j,{ref:t,className:g(n),style:p()}),S,x())):a.createElement("span",y({},j,{ref:t,className:g(n),style:p()}),S,x())}));w.displayName="Tag",w.defaultProps={closable:!1},w.CheckableTag=function(e){var t,n=a.useContext(i.b).getPrefixCls,r=e.prefixCls,c=e.className,l=e.checked,u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["prefixCls","className","checked"]),p=n("tag",r),d=o()(p,(f(t={},"".concat(p,"-checkable"),!0),f(t,"".concat(p,"-checkable-checked"),l),t),c);return delete u.onChange,a.createElement("span",s({},u,{className:d,onClick:function(){var t=e.checked,n=e.onChange;n&&n(!t)}}))},t.a=w}}]);