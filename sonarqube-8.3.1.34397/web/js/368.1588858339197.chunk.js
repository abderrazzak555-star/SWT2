(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{1077:function(e,n,t){"use strict";t.d(n,"c",(function(){return s})),t.d(n,"b",(function(){return p})),t.d(n,"a",(function(){return r})),t.d(n,"d",(function(){return c})),t.d(n,"h",(function(){return l})),t.d(n,"f",(function(){return d})),t.d(n,"e",(function(){return h})),t.d(n,"g",(function(){return f}));var o=function(){return(o=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)},i=function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var o=Array(e),i=0;for(n=0;n<t;n++)for(var s=arguments[n],p=0,r=s.length;p<r;p++,i++)o[i]=s[p];return o},s=11,p=9,r=50;function a(e,n){var t=e[0],o=e[1],i=n[0];return!(t>n[1]+s||o<i-s)}function u(e){return{component:e.component,textRange:e.textRange||{endLine:0,endOffset:0,startLine:0,startOffset:0}}}function c(e){var n=e.component,t=e.issue,o=e.locations,s=t.secondaryLocations.length>0,r=(s&&t.component===n?i([u(t)],o):o).reduce((function(e,n,o){var i,s=Math.max(1,n.textRange.startLine-5),r=function(e){var n=e.issue,t=e.locationEnd,o=n.textRange&&n.textRange.endLine||0;return o&&o!==t?t+5:t+p}({issue:t,locationEnd:n.textRange.endLine});return e=e.filter((function(e){if(a([e.start,e.end],[s,r])){var n=!1;return i||(i=e,n=!0),i.start=Math.min(s,e.start,i.start),i.end=Math.max(r,e.end,i.end),n}return!0})),void 0===i&&e.push({start:s,end:r,index:o}),e}),[]);return s?r.sort((function(e,n){return e.start-n.start})):r}function l(e,n){return e.map((function(e){for(var t=[],o=e.start;o<=e.end;o++)n[o]&&t.push(n[o]);return t})).filter((function(e){return e.length>0}))}function d(e,n,t){var i,s="",p=[],r=function(e){i=o(o({},t[e.component]||{component:{key:e.component,measures:{},path:"",project:"",projectName:"",q:"FIL",uuid:""},sources:[]}),{locations:[]}),p.push(i),s=e.component};return e.secondaryLocations.length>0&&n.every((function(n){return n.component!==e.component}))&&r(u(e)),n.forEach((function(e,n){e.component!==s&&r(e),e.index=n,i.locations.push(e)})),p}function h(e){var n=e.direction,t=e.snippetIndex,o=e.snippets,i=o.find((function(e){return e.index===t}));if(!i)throw new Error("Snippet "+t+" not found");return i.start=Math.max(0,i.start-("up"===n?r:0)),i.end+="down"===n?r:0,o.map((function(e){return e.index===t?i:(a([e.start,e.end],[i.start,i.end])&&(i.start=Math.min(e.start,i.start),i.end=Math.max(e.end,i.end),e.toDelete=!0),e)}))}function f(e,n){return e>=n[0].line&&e<=n[n.length-1].line}},1228:function(e,n,t){"use strict";var o,i=t(658),s=t.n(i),p=t(13),r=t(1067),a=t.n(r),u=t(37),c=t(782),l=t(1194),d=t(963),h=t(1015),f=t(1163),m=(t(1233),t(1077)),g=(o=function(e,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}o(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),y=function(e){function n(n){var t=e.call(this,n)||this;return t.doScroll=function(e){t.props.scroll&&t.props.scroll(e);var n=t.snippetNodeRef.current;if(n){var o=n.getBoundingClientRect().width/2;Object(c.scrollHorizontally)(e,{leftOffset:o,rightOffset:o,parent:n})}},t.scrollToLastExpandedRow=function(){if(t.props.scroll){var e=t.snippetNodeRef.current;if(!e)return;var n=e.querySelectorAll("tr"),o=n[n.length-1];t.props.scroll(o,100)}},t.expandBlock=function(e){return function(){return t.props.expandBlock(t.props.index,e).then((function(){"down"===e&&t.scrollToLastExpandedRow()}))}},t.snippetNodeRef=p.createRef(),t}return g(n,e),n.prototype.renderLine=function(e){var n=this,t=e.displayDuplications,o=e.displaySCM,i=e.index,s=e.issuesForLine,r=e.issueLocations,a=e.line,u=e.snippet,c=e.symbols,d=e.verticalBuffer,m=Object(h.b)(a,this.props.locations),g=this.props,y=g.duplications,b=g.duplicationsByLine,v=y?y.length:0,x=v&&b&&b[a.line]||[],L=s.some((function(e){return e.key===n.props.issue.key}));return p.createElement(l.a,{branchLike:this.props.branchLike,displayAllIssues:!1,displayCoverage:!0,displayDuplications:t,displayIssues:!L||s.length>1,displayLocationMarkers:!0,displaySCM:o,duplications:x,duplicationsCount:v,highlighted:!1,highlightedLocationMessage:Object(f.b)(this.props.highlightedLocationMessage,m),highlightedSymbols:Object(f.a)(c,this.props.highlightedSymbols),issueLocations:r,issuePopup:this.props.issuePopup,issues:s,key:a.line,last:!1,line:a,linePopup:this.props.linePopup,loadDuplications:this.props.loadDuplications,onIssueChange:this.props.onIssueChange,onIssuePopupToggle:this.props.onIssuePopupToggle,onIssueSelect:function(){},onIssueUnselect:function(){},onIssuesClose:this.props.handleCloseIssues,onIssuesOpen:this.props.handleOpenIssues,onLinePopupToggle:this.props.handleLinePopupToggle,onLocationSelect:this.props.onLocationSelect,onSymbolClick:this.props.handleSymbolClick,openIssues:this.props.openIssuesByLine[a.line],previousLine:i>0?u[i-1]:void 0,renderDuplicationPopup:this.props.renderDuplicationPopup,scroll:this.doScroll,secondaryIssueLocations:m,selectedIssue:Object(f.c)(this.props.issue.key,s),verticalBuffer:d})},n.prototype.render=function(){var e=this,n=this.props,t=n.component,o=n.displaySCM,i=n.issue,r=n.issuesByLine,c=void 0===r?{}:r,l=n.lastSnippetOfLastGroup,h=n.locationsByLine,f=n.openIssuesByLine,g=n.snippet,y=t.measures&&t.measures.lines&&parseInt(t.measures.lines,10),b=Object(d.e)(g),v=g[g.length-1].line,x=i.textRange?i.textRange.endLine:i.line,L=Math.max.apply(Math,Object.keys(c).map((function(e){return parseInt(e,10)})).filter((function(e){return Object(m.g)(e,g)&&(e===x||f[e])}))),A=l?Math.max(0,m.b-(v-L)):0,P=g.some((function(e){return!!e.duplicated}));return p.createElement("div",{className:"source-viewer-code snippet",ref:this.snippetNodeRef},p.createElement("div",null,g[0].line>1&&p.createElement("div",{className:"expand-block expand-block-above"},p.createElement("button",{"aria-label":Object(u.translate)("source_viewer.expand_above"),onClick:this.expandBlock("up"),type:"button"},p.createElement(a.a,null))),p.createElement("table",{className:s()("source-table",{"expand-up":g[0].line>1,"expand-down":!y||g[g.length-1].line<y})},p.createElement("tbody",null,g.map((function(n,t){return e.renderLine({displayDuplications:P,displaySCM:o,index:t,issuesForLine:c[n.line]||[],issueLocations:h[n.line]||[],line:n,snippet:g,symbols:b[n.line],verticalBuffer:t===g.length-1?A:0})})))),(!y||g[g.length-1].line<y)&&p.createElement("div",{className:"expand-block expand-block-below"},p.createElement("button",{"aria-label":Object(u.translate)("source_viewer.expand_below"),onClick:this.expandBlock("down"),type:"button"},p.createElement(a.a,null)))))},n}(p.PureComponent);n.a=y},1233:function(e,n,t){var o=t(660),i=t(1234);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var s={insert:"head",singleton:!1},p=(o(i,s),i.locals?i.locals:{});e.exports=p},1234:function(e,n,t){(n=t(661)(!1)).push([e.i,'.snippet{margin:8px;border:1px solid #cdcdcd;overflow-x:auto;overflow-y:hidden;transition:max-height .2s}.snippet>div{display:table;width:100%;position:relative;transition:margin-top .2s}.snippet table{width:100%}.expand-block{position:absolute;z-index:2;width:100%}.expand-block>button{background:transparent;box-sizing:border-box;color:#777;height:20px;width:100%;padding:2px;border:0;text-align:left;cursor:pointer}.expand-block>button:active,.expand-block>button:focus,.expand-block>button:hover{color:#236a97;outline:none}.expand-block-above{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAAXNSR0IArs4c6QAAADdJREFUCB1dzMEKADAIAlBd1v9/bcc2YgRjHh8qq2qTxCQzsX4wM6y30RARF3sy0Es1SIK7Y64OpCES1W69JS4AAAAASUVORK5CYII=");top:0}.expand-block-below{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wQQBjQEQVd5jwAAADhJREFUCNddyTEKADEMA8GVA/7/Z+PGwUp1cGTaYe/tv5lxrLWoKj6SiMzkjZDEG7JtANt0N+ccLrB/KZxXTt7fAAAAAElFTkSuQmCC");bottom:0}.source-table.expand-up{margin-top:20px}.source-table.expand-down{margin-bottom:20px}',""]),e.exports=n},2279:function(e,n,t){"use strict";t.r(n);var o,i=t(13),s=t(674),p=t(665),r=t.n(p),a=t(37),u=t(708),c=t(701),l=t(670),d=t(1597),h=t(1598),f=t(963),m=t(1016),g=t(955),y=t(678),b=t(658),v=t(1208),x=t(1162),L=t(1228),A=t(1077),P=(o=function(e,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}o(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),k=function(){return(k=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)},O=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.mounted=!1,n.rootNodeRef=i.createRef(),n.state={additionalLines:{},highlightedSymbols:[],loading:!1,openIssuesByLine:{},snippets:[]},n.expandBlock=function(e,t){var o=n.props,i=o.branchLike,s=o.snippetGroup.component.key,p=n.state.snippets.find((function(n){return n.index===e}));if(!p)return Promise.reject();var r=A.a+A.c-1,a="up"===t?{from:Math.max(1,p.start-r),to:p.start-1}:{from:p.end+1,to:p.end+r};return Object(u.u)(k(k({key:s},a),Object(y.d)(i))).then((function(e){return e.reduce((function(e,n){return n.coverageStatus=Object(v.a)(n),e[n.line]=n,e}),{})})).then((function(o){return n.animateBlockExpansion(e,t,o)}))},n.expandComponent=function(){var e=n.props,t=e.branchLike,o=e.snippetGroup.component.key;n.setState({loading:!0}),Object(u.u)(k({key:o},Object(y.d)(t))).then((function(e){n.mounted&&n.setState((function(n){var t=n.additionalLines;return{additionalLines:k(k({},t),e),loading:!1,snippets:[{start:0,end:e[e.length-1].line,index:-1}]}}))}),(function(){n.mounted&&n.setState({loading:!1})}))},n.handleLinePopupToggle=function(e){n.props.onLinePopupToggle(k(k({},e),{component:n.props.snippetGroup.component.key}))},n.handleOpenIssues=function(e){n.setState((function(n){var t;return{openIssuesByLine:k(k({},n.openIssuesByLine),(t={},t[e.line]=!0,t))}}))},n.handleCloseIssues=function(e){n.setState((function(n){var t;return{openIssuesByLine:k(k({},n.openIssuesByLine),(t={},t[e.line]=!1,t))}}))},n.handleSymbolClick=function(e){n.setState((function(n){var t=n.highlightedSymbols;return{highlightedSymbols:e.filter((function(e){return!t.includes(e)}))}}))},n.loadDuplications=function(e){n.props.loadDuplications(n.props.snippetGroup.component.key,e)},n.renderDuplicationPopup=function(e,t){return n.props.renderDuplicationPopup(n.props.snippetGroup.component,e,t)},n}return P(n,e),n.prototype.componentDidMount=function(){this.mounted=!0,this.createSnippetsFromProps()},n.prototype.componentWillUnmount=function(){this.mounted=!1},n.prototype.createSnippetsFromProps=function(){var e=this.props,n=e.issue,t=e.snippetGroup,o=Object(A.d)({component:t.component.key,issue:n,locations:t.locations});this.setState({snippets:o})},n.prototype.getNodes=function(e){var n=this.rootNodeRef.current;if(n){var t=n.querySelector("#snippet-wrapper-"+e);if(t){var o=t.querySelector(".snippet");if(o){var i=o.firstChild;if(i)return{wrapper:o,table:i}}}}},n.prototype.cleanDom=function(e){var n=this.getNodes(e);if(n){var t=n.wrapper;n.table.style.marginTop="",t.style.maxHeight=""}},n.prototype.setMaxHeight=function(e,n,t){void 0===t&&(t=!1);var o=this.getNodes(e);if(o){var i=o.wrapper,s=o.table,p=void 0!==n?n:s.getBoundingClientRect().height;if(t){var r=i.getBoundingClientRect().height;s.style.transition="none",s.style.marginTop=r-p+"px",setTimeout((function(){s.style.transition="",s.style.marginTop="0px",i.style.maxHeight=p+20+"px"}),0)}else i.style.maxHeight=p+20+"px"}},n.prototype.animateBlockExpansion=function(e,n,t){var o=this;if(this.mounted){var i=this.state.snippets,s=Object(A.e)({direction:n,snippetIndex:e,snippets:i}),p=s.filter((function(e){return e.toDelete}));return p.forEach((function(e){return o.setMaxHeight(e.index)})),this.setMaxHeight(e),new Promise((function(i){o.setState((function(e){var n=e.additionalLines,o=e.snippets;return{additionalLines:k(k({},n),t),snippets:o}}),(function(){p.forEach((function(e){o.setMaxHeight(e.index,0)})),o.setMaxHeight(e,void 0,"up"===n),setTimeout((function(){o.setState({snippets:s.filter((function(e){return!e.toDelete}))},i),o.cleanDom(e)}),200)}))}))}return Promise.resolve()},n.prototype.renderSnippet=function(e){var n=e.index,t=e.issuesByLine,o=e.lastSnippetOfLastGroup,s=e.locationsByLine,p=e.snippet;return i.createElement(L.a,{branchLike:this.props.branchLike,component:this.props.snippetGroup.component,expandBlock:this.expandBlock,handleCloseIssues:this.handleCloseIssues,handleLinePopupToggle:this.handleLinePopupToggle,handleOpenIssues:this.handleOpenIssues,handleSymbolClick:this.handleSymbolClick,highlightedLocationMessage:this.props.highlightedLocationMessage,highlightedSymbols:this.state.highlightedSymbols,index:n,issue:this.props.issue,issuePopup:this.props.issuePopup,issuesByLine:t,lastSnippetOfLastGroup:o,linePopup:this.props.linePopup,loadDuplications:this.loadDuplications,locations:this.props.locations,locationsByLine:s,onIssueChange:this.props.onIssueChange,onIssuePopupToggle:this.props.onIssuePopupToggle,onLocationSelect:this.props.onLocationSelect,openIssuesByLine:this.state.openIssuesByLine,renderDuplicationPopup:this.renderDuplicationPopup,scroll:this.props.scroll,snippet:p})},n.prototype.render=function(){var e=this,n=this.props,t=n.branchLike,o=n.duplications,s=n.issue,p=n.issuesByLine,r=n.lastSnippetGroup,a=n.snippetGroup,u=this.state,c=u.additionalLines,l=u.loading,d=u.snippets,h=s.component===a.component.key?Object(f.d)([s]):{},m=1===d.length&&a.component.measures&&d[0].end-d[0].start===parseInt(a.component.measures.lines||"",10),g=Object(A.h)(d,k(k({},a.sources),c)),y=0===s.secondaryLocations.length;return i.createElement("div",{className:b("component-source-container",{"source-duplications-expanded":o&&o.length>0}),ref:this.rootNodeRef},i.createElement(x.a,{branchLike:t,expandable:!m,loading:l,onExpand:this.expandComponent,sourceViewerFile:a.component}),g.map((function(n,t){return i.createElement("div",{id:"snippet-wrapper-"+d[t].index,key:d[t].index},e.renderSnippet({snippet:n,index:d[t].index,issuesByLine:p,locationsByLine:(o=t,(y?r&&o===d.length-1:0===o)?h:{}),lastSnippetOfLastGroup:r&&t===d.length-1}));var o})))},n}(i.PureComponent),S=function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(n,t)};return function(n,t){function o(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}(),w=function(){return(w=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)},I=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.mounted=!1,n.state={components:{},duplicationsByLine:{},loading:!0,notAccessible:!1},n.fetchDuplications=function(e,t){Object(u.q)(w({key:e},Object(y.d)(n.props.branchLike))).then((function(o){n.mounted&&n.setState((function(n){return{duplicatedFiles:o.files,duplications:o.duplications,duplicationsByLine:Object(f.a)(o.duplications),linePopup:1===o.duplications.length?{component:e,index:0,line:t.line,name:"duplications"}:n.linePopup}}))}),(function(){}))},n.handleIssuePopupToggle=function(e,t,o){n.setState((function(n){var i=n.issuePopup&&n.issuePopup.name===t&&n.issuePopup.issue===e;return!1===o||i?!0!==o&&i?{issuePopup:void 0}:null:{issuePopup:{issue:e,name:t}}}))},n.handleLinePopupToggle=function(e){var t=e.component,o=e.index,i=e.line,s=e.name,p=e.open;n.setState((function(e){var n=void 0!==e.linePopup&&e.linePopup.line===i&&e.linePopup.name===s&&e.linePopup.component===t&&e.linePopup.index===o;return!1===p||n?!0!==p&&n?{linePopup:void 0}:null:{linePopup:{component:t,index:o,line:i,name:s}}}))},n.handleCloseLinePopup=function(){n.setState({linePopup:void 0})},n.renderDuplicationPopup=function(e,t,o){var s=n.state,p=s.duplicatedFiles,r=s.duplications;if(!e||!p)return null;var a=Object(h.b)(r,t);return i.createElement(g.a.Consumer,null,(function(t){var s=t.openComponent;return i.createElement(d.a,{blocks:Object(h.a)(a,o),branchLike:n.props.branchLike,duplicatedFiles:p,inRemovedComponent:Object(h.c)(a),onClose:n.handleCloseLinePopup,openComponent:s,sourceViewerFile:e})}))},n}return S(n,e),n.prototype.componentDidMount=function(){this.mounted=!0,this.fetchIssueFlowSnippets(this.props.issue.key)},n.prototype.componentWillReceiveProps=function(e){e.issue.key!==this.props.issue.key&&this.fetchIssueFlowSnippets(e.issue.key)},n.prototype.componentWillUnmount=function(){this.mounted=!1},n.prototype.fetchIssueFlowSnippets=function(e){var n=this;this.setState({loading:!0}),Object(c.h)(e).then((function(e){n.mounted&&(n.setState({components:e,issuePopup:void 0,linePopup:void 0,loading:!1}),n.props.onLoaded&&n.props.onLoaded())}),(function(e){403!==e.status&&Object(l.a)(e),n.mounted&&n.setState({loading:!1,notAccessible:403===e.status})}))},n.prototype.render=function(){var e=this,n=this.state,t=n.loading,o=n.notAccessible;if(t)return i.createElement("div",null,i.createElement(r.a,null));if(o)return i.createElement(s.Alert,{className:"spacer-top",variant:"warning"},Object(a.translate)("code_viewer.no_source_code_displayed_due_to_security"));var p=this.props,u=p.issue,c=p.locations,l=this.state,d=l.components,h=l.duplications,g=l.duplicationsByLine,y=l.linePopup,b=Object(f.b)(this.props.issues),v=Object(A.f)(u,c,d);return i.createElement("div",null,v.map((function(n,t){var o={};return y&&n.component.key===y.component&&(o={duplications:h,duplicationsByLine:g,linePopup:{index:y.index,line:y.line,name:y.name}}),i.createElement(m.a.Provider,{key:u.key+"-"+(e.props.selectedFlowIndex||0)+"-"+t,value:{branchLike:e.props.branchLike,file:n.component}},i.createElement(O,w({branchLike:e.props.branchLike,highlightedLocationMessage:e.props.highlightedLocationMessage,issue:u,issuePopup:e.state.issuePopup,issuesByLine:b[n.component.key]||{},lastSnippetGroup:t===v.length-1,loadDuplications:e.fetchDuplications,locations:n.locations||[],onIssueChange:e.props.onIssueChange,onIssuePopupToggle:e.handleIssuePopupToggle,onLinePopupToggle:e.handleLinePopupToggle,onLocationSelect:e.props.onLocationSelect,renderDuplicationPopup:e.renderDuplicationPopup,scroll:e.props.scroll,snippetGroup:n},o)))})))},n}(i.PureComponent);n.default=I}}]);
//# sourceMappingURL=368.1588858339197.chunk.js.map