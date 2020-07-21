(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1032:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return y}));var n=t(0),r=t.n(n),s=t(143),l=t(144),o=t(1009),i=t(422),c=t(550),u=t(132),d=t.n(u),m=o.a.RangePicker,p=[{key:"picker",param:"picker",explain:"选择器类型",type:"string",defaultValue:"date（默认） | week | month | quarter | year"},{key:"disabledDate",param:"disabledDate",explain:"不可选择的日期",type:"function",defaultValue:"(currentDate)=>{}"},{key:"disabled",param:"disabled",explain:"是否禁用",type:"boolean",defaultValue:"false"},{key:"placeholder",param:"placeholder",explain:"输入框提示文字",type:"string",defaultValue:""},{key:"size",param:"size",explain:"输入框大小",type:"string",defaultValue:"small（高24）、middle（默认，高32）、large（高40）"},{key:"bordered",param:"bordered",explain:"是否有边框",type:"boolean",defaultValue:"true"},{key:"allowClear",param:"allowClear",explain:"是否显示清除按钮",type:"boolean",defaultValue:"true"},{key:"suffixIcon",param:"suffixIcon",explain:"自定义后缀图标",type:"ReactNode",defaultValue:""},{key:"style",param:"style",explain:"输入框样式",type:"CSSProperties",defaultValue:""},{key:"className",param:"className",explain:"选择器类名",type:"string",defaultValue:""}],j=[{key:"defaultValue",param:"defaultValue",explain:"默认日期",type:"moment",defaultValue:""},{key:"value",param:"value",explain:"日期（受控）",type:"moment",defaultValue:""},{key:"format",param:"format",explain:"日期格式",type:"string",defaultValue:"'YYYY-MM-DD'"},{key:"showToday",param:"showToday",explain:"是否展示“今天”按钮",type:"boolean",defaultValue:"true"},{key:"showTime",param:"showTime",explain:"是否展示时间选择功能",type:"boolean|object",defaultValue:"false|{defaultValue:moment()}"},{key:"disabledTime",param:"disabledTime",explain:"不可选择的时间",type:"function",defaultValue:"(date)=>{}"},{key:"renderExtraFooter",param:"renderExtraFooter",explain:"在面板中添加额外的页脚",type:"function",defaultValue:"(mode)=>{return React.ReactNode}"},{key:"onOk",param:"onOk",explain:"点击确定按钮的回调",type:"function",defaultValue:"()=>{}"},{key:"onChange",param:"onChange",explain:"时间发生变化的回调",type:"function",defaultValue:"(date,dateString)=>{}"},{key:"onPanelChange",param:"onPanelChange",explain:"日期面板变化时的回调",type:"function",defaultValue:"(value,mode)=>{}"}],f=[{key:"allowEmpty",param:"allowEmpty",explain:"允许起始项部分为空",type:"[boolean, boolean]",defaultValue:"[false, false]"},{key:"separator",param:"separator",explain:"分隔符",type:"string",defaultValue:"'~'"},{key:"ranges",param:"ranges",explain:"预设时间范围快捷选择",type:"object",defaultValue:"{'今天':moment()}"},{key:"showTime",param:"showTime",explain:"是否展示时间选择功能",type:"boolean|object",defaultValue:"false|{defaultValue:[moment(),moment()]}"},{key:"renderExtraFooter",param:"renderExtraFooter",explain:"在面板中添加额外的页脚",type:"function",defaultValue:"()=>{return React.ReactNode}"},{key:"defaultValue",param:"defaultValue",explain:"默认日期",type:"moment",defaultValue:""},{key:"value",param:"value",explain:"日期（受控）",type:"moment",defaultValue:""},{key:"format",param:"format",explain:"日期格式",type:"string",defaultValue:"'YYYY-MM-DD HH:mm:ss'"},{key:"onChange",param:"onChange",explain:"时间发生变化的回调",type:"function",defaultValue:"(dates,dateStrings)=>{}"},{key:"onCalendarChange",param:"onCalendarChange",explain:"待选日期发生变化的回调",type:"function",defaultValue:"(dates,dateStrings)=>{}"}],y=function(e){var a,t;function n(a,t){var n;return(n=e.call(this,a,t)||this).state={date:""},n}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"日历 示例"),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("div",{style:{width:"48%"}},r.a.createElement(i.a,{size:20,style:{marginBottom:20}},r.a.createElement(o.a,{onChange:function(e,a){}}),r.a.createElement(o.a,{value:this.state.date,onChange:function(a,t){e.setState({date:a})},showToday:!1,renderExtraFooter:function(){return r.a.createElement(i.a,{size:10},r.a.createElement(c.a,{color:"blue",style:{cursor:"pointer"},onClick:function(){e.setState({date:d()()})}},"今天"),r.a.createElement(c.a,{color:"blue",style:{cursor:"pointer"},onClick:function(){e.setState({date:d()().subtract(1,"days")})}},"昨天"),r.a.createElement(c.a,{color:"blue",style:{cursor:"pointer"},onClick:function(){e.setState({date:d()().subtract(7,"days")})}},"一周前"))}}),r.a.createElement(o.a,{onChange:function(e,a){},disabled:!0})),r.a.createElement(i.a,{size:20},r.a.createElement(o.a,{onChange:function(e,a){},picker:"week"}),r.a.createElement(o.a,{onChange:function(e,a){},picker:"month"}),r.a.createElement(o.a,{onChange:function(e,a){},picker:"year"})),r.a.createElement(s.a,null,'\nimport { DatePicker,Space,Tag} from "antd";\nimport moment from "moment"\n\nthis.state = {\n  date:""\n}\n\n<DatePicker onChange={(date,dateString)=>{}} />\n<DatePicker \n  value={this.state.date}\n  onChange={(date,dateString)=>{this.setState({date})}} \n  showToday={false} \n  renderExtraFooter={()=>(\n    <Space size={10}>\n        <Tag color="blue" style={{cursor:"pointer"}} onClick={()=>{this.setState({date:moment()})}}>今天</Tag>\n        <Tag color="blue" style={{cursor:"pointer"}} onClick={()=>{this.setState({date:moment().subtract(1,"days")})}}>昨天</Tag>\n        <Tag color="blue" style={{cursor:"pointer"}} onClick={()=>{this.setState({date:moment().subtract(7,"days")})}}>一周前</Tag>\n    </Space>\n  )}\n/>\n<DatePicker onChange={(date,dateString)=>{}} disabled/>\n\n<DatePicker onChange={(date,dateString)=>{}} picker="week" />\n<DatePicker onChange={(date,dateString)=>{}} picker="month" />\n<DatePicker onChange={(date,dateString)=>{}} picker="year" />\n                    ')),r.a.createElement("div",{style:{width:"48%"}},r.a.createElement(i.a,{direction:"vertical",size:20},r.a.createElement(m,null),r.a.createElement(m,{ranges:{"今天":[d()(),d()()],"昨天":[d()().subtract(1,"days"),d()()],"本月":[d()().startOf("month"),d()().endOf("month")]},onChange:function(e,a){}})),r.a.createElement(s.a,null,"\nimport { DatePicker} from \"antd\";\nimport moment from \"moment\"\nconst { RangePicker } = DatePicker;\n\n<RangePicker />\n<RangePicker\n  ranges={{\n    '今天': [moment(), moment()],\n    '昨天': [moment().subtract(1,'days'), moment()],\n    '本月': [moment().startOf('month'), moment().endOf('month')],\n  }}\n  onChange={(date,dateString)=>{}}\n/>\n                    "))),r.a.createElement("h2",null,"组件属性"),r.a.createElement(l.a,{dataList:p}),r.a.createElement("h2",null,"DatePicker属性"),r.a.createElement(l.a,{dataList:j}),r.a.createElement("h2",null,"RangePicker属性"),r.a.createElement(l.a,{dataList:f}))},n}(n.Component)},143:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(0),r=t.n(n),s=t(1053),l=t(294),o=t(1046),i=t(1050),c=t(1061),u=t(1062),d=t(1063);o.a.Paragraph;var m=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).changeStatus=function(){t.setState((function(e){return{isCodeCollpase:!e.isCodeCollpase}}))},t.copyFn=function(){var e=document.createRange();e.selectNodeContents(document.getElementById(t.id));var a=window.getSelection();a.rangeCount>0&&a.removeAllRanges(),a.addRange(e),document.execCommand("Copy"),i.a.success("复制成功")},t.state={isCodeCollpase:!1},t.id=function(){for(var e=[],a=0;a<36;a++)e[a]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}(),t}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){var e=this.state.isCodeCollpase;return r.a.createElement("div",{style:{margin:"20px 0"}},r.a.createElement("div",{style:{border:"1px dashed #ddd",borderRadius:"4px",padding:"8px 20px",textAlign:"right"}},r.a.createElement(c.a,{onClick:this.copyFn,style:{marginRight:24}}),e?r.a.createElement(u.a,{onClick:this.changeStatus}):r.a.createElement(d.a,{onClick:this.changeStatus})),r.a.createElement("div",{id:this.id},e?r.a.createElement(s.a,{language:"jsx",style:l.a,showLineNumbers:!0,wrapLines:!0},this.props.children.replace(/^\s+|\s+$/g,"")):null))},n}(r.a.Component)},144:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(1045),l=[{width:"15%",title:"参数",dataIndex:"param"},{width:"50%",title:"说明",dataIndex:"explain"},{width:"15%",title:"类型",dataIndex:"type"},{title:"默认值",dataIndex:"defaultValue"}];a.a=function(e){return r.a.createElement(s.a,{size:"small",columns:l,dataSource:e.dataList,pagination:!1})}},377:function(e,a,t){var n={"./af":163,"./af.js":163,"./ar":164,"./ar-dz":165,"./ar-dz.js":165,"./ar-kw":166,"./ar-kw.js":166,"./ar-ly":167,"./ar-ly.js":167,"./ar-ma":168,"./ar-ma.js":168,"./ar-sa":169,"./ar-sa.js":169,"./ar-tn":170,"./ar-tn.js":170,"./ar.js":164,"./az":171,"./az.js":171,"./be":172,"./be.js":172,"./bg":173,"./bg.js":173,"./bm":174,"./bm.js":174,"./bn":175,"./bn.js":175,"./bo":176,"./bo.js":176,"./br":177,"./br.js":177,"./bs":178,"./bs.js":178,"./ca":179,"./ca.js":179,"./cs":180,"./cs.js":180,"./cv":181,"./cv.js":181,"./cy":182,"./cy.js":182,"./da":183,"./da.js":183,"./de":184,"./de-at":185,"./de-at.js":185,"./de-ch":186,"./de-ch.js":186,"./de.js":184,"./dv":187,"./dv.js":187,"./el":188,"./el.js":188,"./en-au":189,"./en-au.js":189,"./en-ca":190,"./en-ca.js":190,"./en-gb":191,"./en-gb.js":191,"./en-ie":192,"./en-ie.js":192,"./en-il":193,"./en-il.js":193,"./en-in":194,"./en-in.js":194,"./en-nz":195,"./en-nz.js":195,"./en-sg":196,"./en-sg.js":196,"./eo":197,"./eo.js":197,"./es":198,"./es-do":199,"./es-do.js":199,"./es-us":200,"./es-us.js":200,"./es.js":198,"./et":201,"./et.js":201,"./eu":202,"./eu.js":202,"./fa":203,"./fa.js":203,"./fi":204,"./fi.js":204,"./fil":205,"./fil.js":205,"./fo":206,"./fo.js":206,"./fr":207,"./fr-ca":208,"./fr-ca.js":208,"./fr-ch":209,"./fr-ch.js":209,"./fr.js":207,"./fy":210,"./fy.js":210,"./ga":211,"./ga.js":211,"./gd":212,"./gd.js":212,"./gl":213,"./gl.js":213,"./gom-deva":214,"./gom-deva.js":214,"./gom-latn":215,"./gom-latn.js":215,"./gu":216,"./gu.js":216,"./he":217,"./he.js":217,"./hi":218,"./hi.js":218,"./hr":219,"./hr.js":219,"./hu":220,"./hu.js":220,"./hy-am":221,"./hy-am.js":221,"./id":222,"./id.js":222,"./is":223,"./is.js":223,"./it":224,"./it-ch":225,"./it-ch.js":225,"./it.js":224,"./ja":226,"./ja.js":226,"./jv":227,"./jv.js":227,"./ka":228,"./ka.js":228,"./kk":229,"./kk.js":229,"./km":230,"./km.js":230,"./kn":231,"./kn.js":231,"./ko":232,"./ko.js":232,"./ku":233,"./ku.js":233,"./ky":234,"./ky.js":234,"./lb":235,"./lb.js":235,"./lo":236,"./lo.js":236,"./lt":237,"./lt.js":237,"./lv":238,"./lv.js":238,"./me":239,"./me.js":239,"./mi":240,"./mi.js":240,"./mk":241,"./mk.js":241,"./ml":242,"./ml.js":242,"./mn":243,"./mn.js":243,"./mr":244,"./mr.js":244,"./ms":245,"./ms-my":246,"./ms-my.js":246,"./ms.js":245,"./mt":247,"./mt.js":247,"./my":248,"./my.js":248,"./nb":249,"./nb.js":249,"./ne":250,"./ne.js":250,"./nl":251,"./nl-be":252,"./nl-be.js":252,"./nl.js":251,"./nn":253,"./nn.js":253,"./oc-lnc":254,"./oc-lnc.js":254,"./pa-in":255,"./pa-in.js":255,"./pl":256,"./pl.js":256,"./pt":257,"./pt-br":258,"./pt-br.js":258,"./pt.js":257,"./ro":259,"./ro.js":259,"./ru":260,"./ru.js":260,"./sd":261,"./sd.js":261,"./se":262,"./se.js":262,"./si":263,"./si.js":263,"./sk":264,"./sk.js":264,"./sl":265,"./sl.js":265,"./sq":266,"./sq.js":266,"./sr":267,"./sr-cyrl":268,"./sr-cyrl.js":268,"./sr.js":267,"./ss":269,"./ss.js":269,"./sv":270,"./sv.js":270,"./sw":271,"./sw.js":271,"./ta":272,"./ta.js":272,"./te":273,"./te.js":273,"./tet":274,"./tet.js":274,"./tg":275,"./tg.js":275,"./th":276,"./th.js":276,"./tl-ph":277,"./tl-ph.js":277,"./tlh":278,"./tlh.js":278,"./tr":279,"./tr.js":279,"./tzl":280,"./tzl.js":280,"./tzm":281,"./tzm-latn":282,"./tzm-latn.js":282,"./tzm.js":281,"./ug-cn":283,"./ug-cn.js":283,"./uk":284,"./uk.js":284,"./ur":285,"./ur.js":285,"./uz":286,"./uz-latn":287,"./uz-latn.js":287,"./uz.js":286,"./vi":288,"./vi.js":288,"./x-pseudo":289,"./x-pseudo.js":289,"./yo":290,"./yo.js":290,"./zh-cn":152,"./zh-cn.js":152,"./zh-hk":291,"./zh-hk.js":291,"./zh-mo":292,"./zh-mo.js":292,"./zh-tw":293,"./zh-tw.js":293};function r(e){var a=s(e);return t(a)}function s(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=377},422:function(e,a,t){"use strict";var n=t(0),r=t(8),s=t.n(r),l=t(44),o=t(9);function i(){return(i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var u={small:8,middle:16,large:24};a.a=function(e){var a,t=n.useContext(o.b),r=t.getPrefixCls,d=t.space,m=t.direction,p=e.size,j=void 0===p?(null==d?void 0:d.size)||"small":p,f=e.align,y=e.className,h=e.children,g=e.direction,k=void 0===g?"horizontal":g,b=e.prefixCls,v=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t}(e,["size","align","className","children","direction","prefixCls"]),x=Object(l.a)(h),C=x.length;if(0===C)return null;var E=void 0===f&&"horizontal"===k?"center":f,w=r("space",b),z=s()(w,"".concat(w,"-").concat(k),(c(a={},"".concat(w,"-rtl"),"rtl"===m),c(a,"".concat(w,"-align-").concat(E),E),a),y),V="".concat(w,"-item"),S="rtl"===m?"marginLeft":"marginRight";return n.createElement("div",i({className:z},v),x.map((function(e,a){return n.createElement("div",{className:V,key:"".concat(V,"-").concat(a),style:a===C-1?{}:c({},"vertical"===k?"marginBottom":S,"string"==typeof j?u[j]:j)},e)})))}}}]);