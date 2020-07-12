(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{1074:function(e,t,a){"use strict";a.r(t),t.default="Projects assigned to a profile will always be analyzed with it for that language, regardless of which profile is the default. Quality Profile administrators may assign projects to a profile. Project administrators may also choose a non-default profile for each language.\n"},1763:function(e,t,a){"use strict";a.r(t),t.default="For each language there is a default profile. All projects not explicitly assigned to some other profile will be analyzed with the default.\n"},1893:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return G}));var r=a(2),n=a(326),l=a.n(n),s=a(314),i=a(5),o=a(320),c=a(683);class u extends r.PureComponent{constructor(){super(...arguments),this.getDeprecatedRulesInheritanceChain=(e,t)=>{let a=[],r=e.activeDeprecatedRuleCount;if(0===r)return a;if(e.parentKey){const n=t.find(t=>t.key===e.parentKey);if(n){const e=this.getDeprecatedRulesInheritanceChain(n,t);e.length&&(r-=e.reduce((e,t)=>e+t.count,0),a=a.concat(e))}}return r>0&&a.push({count:r,from:e}),a},this.renderInheritedInfo=(e,t)=>{const a=this.getDeprecatedRulesInheritanceChain(e,t);return a.length?r.createElement(r.Fragment,null,a.map(t=>t.from.key===e.key?null:r.createElement("div",{className:"muted",key:t.from.key}," ",Object(i.translateWithParameters)("coding_rules.filters.inheritance.x_inherited_from_y",t.count,t.from.name)))):null}}render(){const e=this.props.profiles.filter(e=>e.activeDeprecatedRuleCount>0);if(0===e.length)return null;const t=l()(e,e=>-e.activeDeprecatedRuleCount);return r.createElement("div",{className:"boxed-group boxed-group-inner quality-profiles-evolution-deprecated"},r.createElement("div",{className:"spacer-bottom"},r.createElement("strong",null,Object(i.translate)("quality_profiles.deprecated_rules"))),r.createElement("div",{className:"spacer-bottom"},Object(i.translateWithParameters)("quality_profiles.deprecated_rules_are_still_activated",e.length)),r.createElement("ul",null,t.map(t=>r.createElement("li",{className:"spacer-top",key:t.key},r.createElement("div",{className:"text-ellipsis"},r.createElement(c.a,{className:"link-no-underline",language:t.language,name:t.name,organization:this.props.organization},t.name)),r.createElement("div",{className:"note"},t.languageName,", ",r.createElement(s.Link,{className:"text-muted",to:Object(o.k)({qprofile:t.key},this.props.organization)},Object(i.translateWithParameters)("quality_profile.x_rules",t.activeDeprecatedRuleCount)),this.renderInheritedInfo(t,e))))))}}var m=a(28),p=a(318),d=a(397);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function f(e,t){return e.map(e=>{const a=t&&t[e.key];return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){g(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{activations:a?a.length:0})})}class b extends r.PureComponent{constructor(e){super(e),this.mounted=!1,this.state={};const t=new Date;t.setFullYear(t.getFullYear()-1),this.periodStartDate=Object(m.toShortNotSoISOString)(t)}componentDidMount(){this.mounted=!0,this.loadLatestRules()}componentWillUnmount(){this.mounted=!1}loadLatestRules(){const e={asc:!1,available_since:this.periodStartDate,f:"name,langName,actives",organization:this.props.organization||void 0,ps:10,s:"createdAt"};Object(d.f)(e).then(({actives:e,rules:t,total:a})=>{this.mounted&&this.setState({latestRules:l()(f(t,e),"langName"),latestRulesTotal:a})},()=>{})}render(){if(!this.state.latestRulesTotal||!this.state.latestRules)return null;const e=Object(o.z)({available_since:this.periodStartDate},this.props.organization);return r.createElement("div",{className:"boxed-group boxed-group-inner quality-profiles-evolution-rules"},r.createElement("div",{className:"clearfix"},r.createElement("strong",{className:"pull-left"},Object(i.translate)("quality_profiles.latest_new_rules"))),r.createElement("ul",null,this.state.latestRules.map(e=>r.createElement("li",{className:"spacer-top",key:e.key},r.createElement("div",{className:"text-ellipsis"},r.createElement(s.Link,{className:"link-no-underline",to:Object(o.z)({rule_key:e.key},this.props.organization)}," ",e.name),r.createElement("div",{className:"note"},e.activations?Object(i.translateWithParameters)("quality_profiles.latest_new_rules.activated",e.langName,e.activations):Object(i.translateWithParameters)("quality_profiles.latest_new_rules.not_activated",e.langName)))))),this.state.latestRulesTotal>10&&r.createElement("div",{className:"spacer-top"},r.createElement(s.Link,{className:"small",to:e},Object(i.translate)("see_all")," ",Object(p.formatMeasure)(this.state.latestRulesTotal,"SHORT_INT",null))))}}var E=a(351),y=a.n(E),O=a(469);function v(e){const t=e.profiles.filter(e=>!e.isBuiltIn&&Object(O.f)(e));return 0===t.length?null:r.createElement("div",{className:"boxed-group boxed-group-inner quality-profiles-evolution-stagnant"},r.createElement("div",{className:"spacer-bottom"},r.createElement("strong",null,Object(i.translate)("quality_profiles.stagnant_profiles"))),r.createElement("div",{className:"spacer-bottom"},Object(i.translate)("quality_profiles.not_updated_more_than_year")),r.createElement("ul",null,t.map(t=>r.createElement("li",{className:"spacer-top",key:t.key},r.createElement("div",{className:"text-ellipsis"},r.createElement(c.a,{className:"link-no-underline",language:t.language,name:t.name,organization:e.organization},t.name)),t.rulesUpdatedAt&&r.createElement(y.a,{date:t.rulesUpdatedAt,long:!0},e=>r.createElement("div",{className:"note"},Object(i.translateWithParameters)("quality_profiles.x_updated_on_y",t.languageName,e)))))))}function j({organization:e,profiles:t}){return r.createElement("div",{className:"quality-profiles-evolution"},r.createElement(u,{organization:e,profiles:t}),r.createElement(v,{organization:e,profiles:t}),r.createElement(b,{organization:e}))}var N=a(310),_=a(325),k=a(362),C=a(327),q=a.n(C),w=a(340),x=a.n(w),P=a(359);class z extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={importers:[],loading:!1,name:"",preloading:!0},this.handleNameChange=e=>{this.setState({name:e.currentTarget.value})},this.handleLanguageChange=e=>{this.setState({language:e.value})},this.handleParentChange=e=>{this.setState({parent:e?e.value:void 0})},this.handleFormSubmit=async e=>{e.preventDefault(),this.setState({loading:!0});const t=new FormData(e.currentTarget);this.props.organization&&t.append("organization",this.props.organization);try{const{profile:e}=await Object(P.j)(t),a=this.props.profiles.find(e=>e.key===this.state.parent);a&&await Object(P.g)(e,a),this.props.onCreate(e)}finally{this.mounted&&this.setState({loading:!1})}}}componentDidMount(){this.mounted=!0,this.fetchImporters()}componentWillUnmount(){this.mounted=!1}fetchImporters(){Object(P.o)().then(e=>{this.mounted&&this.setState({importers:e,preloading:!1})},()=>{this.mounted&&this.setState({preloading:!1})})}render(){const e=Object(i.translate)("quality_profiles.new_profile"),t=l()(this.props.languages,"name");let a=[];const n=this.state.language||t[0].key,s=this.state.importers.filter(e=>e.languages.includes(n));if(n){const e=this.props.profiles.filter(e=>e.language===n);a=[{label:Object(i.translate)("none"),value:""},...l()(e,"name").map(e=>({label:e.isBuiltIn?"".concat(e.name," (").concat(Object(i.translate)("quality_profiles.built_in"),")"):e.name,value:e.key}))]}return r.createElement(q.a,{contentLabel:e,onRequestClose:this.props.onClose,size:"small"},r.createElement("form",{id:"create-profile-form",onSubmit:this.handleFormSubmit},r.createElement("div",{className:"modal-head"},r.createElement("h2",null,e)),this.state.preloading?r.createElement("div",{className:"modal-body"},r.createElement("i",{className:"spinner"})):r.createElement("div",{className:"modal-body"},r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"create-profile-name"},Object(i.translate)("name"),r.createElement("em",{className:"mandatory"},"*")),r.createElement("input",{autoFocus:!0,id:"create-profile-name",maxLength:100,name:"name",onChange:this.handleNameChange,required:!0,size:50,type:"text",value:this.state.name})),r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"create-profile-language"},Object(i.translate)("language"),r.createElement("em",{className:"mandatory"},"*")),r.createElement(x.a,{clearable:!1,id:"create-profile-language",name:"language",onChange:this.handleLanguageChange,options:t.map(e=>({label:e.name,value:e.key})),value:n})),n&&a.length&&r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"create-profile-parent"},Object(i.translate)("quality_profiles.parent")),r.createElement(x.a,{clearable:!0,id:"create-profile-parent",name:"parentKey",onChange:this.handleParentChange,options:a,value:this.state.parent||""})),s.map(e=>r.createElement("div",{className:"modal-field spacer-bottom js-importer","data-key":e.key,key:e.key},r.createElement("label",{htmlFor:"create-profile-form-backup-"+e.key},e.name),r.createElement("input",{id:"create-profile-form-backup-"+e.key,name:"backup_"+e.key,type:"file"}),r.createElement("p",{className:"note"},Object(i.translate)("quality_profiles.optional_configuration_file")))),r.createElement("input",{name:"hello-ie11",type:"hidden",value:""})),r.createElement("div",{className:"modal-foot"},this.state.loading&&r.createElement("i",{className:"spinner spacer-right"}),!this.state.preloading&&r.createElement(N.SubmitButton,{disabled:this.state.loading,id:"create-profile-submit"},Object(i.translate)("create")),r.createElement(N.ResetButtonLink,{id:"create-profile-cancel",onClick:this.props.onClose},Object(i.translate)("cancel")))))}}class S extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1},this.handleFormSubmit=e=>{e.preventDefault(),this.setState({loading:!0});const t=new FormData(e.currentTarget);this.props.organization&&t.append("organization",this.props.organization),Object(P.y)(t).then(e=>{this.mounted&&this.setState({loading:!1,profile:e.profile,ruleFailures:e.ruleFailures,ruleSuccesses:e.ruleSuccesses}),this.props.onRestore()},()=>{this.mounted&&this.setState({loading:!1})})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}renderAlert(e,t=0,a){return t?r.createElement(_.Alert,{variant:"warning"},Object(i.translateWithParameters)("quality_profiles.restore_profile.warning",e.name,a,t)):r.createElement(_.Alert,{variant:"success"},Object(i.translateWithParameters)("quality_profiles.restore_profile.success",e.name,a))}render(){const e=Object(i.translate)("quality_profiles.restore_profile"),{loading:t,profile:a,ruleFailures:n,ruleSuccesses:l}=this.state;return r.createElement(q.a,{contentLabel:e,onRequestClose:this.props.onClose,size:"small"},r.createElement("form",{id:"restore-profile-form",onSubmit:this.handleFormSubmit},r.createElement("div",{className:"modal-head"},r.createElement("h2",null,e)),r.createElement("div",{className:"modal-body"},null!=a&&null!=l?this.renderAlert(a,n,l):r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"restore-profile-backup"},Object(i.translate)("backup"),r.createElement("em",{className:"mandatory"},"*")),r.createElement("input",{id:"restore-profile-backup",name:"backup",required:!0,type:"file"}))),null==l?r.createElement("div",{className:"modal-foot"},t&&r.createElement("i",{className:"spinner spacer-right"}),r.createElement(N.SubmitButton,{disabled:t,id:"restore-profile-submit"},Object(i.translate)("restore")),r.createElement(N.ResetButtonLink,{id:"restore-profile-cancel",onClick:this.props.onClose},Object(i.translate)("cancel"))):r.createElement("div",{className:"modal-foot"},r.createElement(N.ResetButtonLink,{id:"restore-profile-cancel",onClick:this.props.onClose},Object(i.translate)("close")))))}}class F extends r.PureComponent{constructor(){super(...arguments),this.state={createFormOpen:!1,restoreFormOpen:!1},this.handleCreateClick=()=>{this.setState({createFormOpen:!0})},this.handleCreate=e=>{this.props.updateProfiles().then(()=>{this.props.router.push(Object(O.c)(e.name,e.language,this.props.organization))},()=>{})},this.closeCreateForm=()=>{this.setState({createFormOpen:!1})},this.handleRestoreClick=()=>{this.setState({restoreFormOpen:!0})},this.closeRestoreForm=()=>{this.setState({restoreFormOpen:!1})}}render(){const{actions:e,languages:t,organization:a,profiles:n}=this.props;return r.createElement("header",{className:"page-header"},r.createElement("h1",{className:"page-title"},Object(i.translate)("quality_profiles.page")),e.create&&r.createElement("div",{className:"page-actions"},r.createElement(N.Button,{disabled:0===t.length,id:"quality-profiles-create",onClick:this.handleCreateClick},Object(i.translate)("create")),r.createElement(N.Button,{className:"little-spacer-left",id:"quality-profiles-restore",onClick:this.handleRestoreClick},Object(i.translate)("restore")),0===t.length&&r.createElement(_.Alert,{className:"spacer-top",variant:"warning"},Object(i.translate)("quality_profiles.no_languages_available"))),r.createElement("div",{className:"page-description markdown"},Object(i.translate)("quality_profiles.intro1"),r.createElement("br",null),Object(i.translate)("quality_profiles.intro2"),r.createElement(s.Link,{className:"spacer-left",target:"_blank",to:{pathname:"/documentation/instance-administration/quality-profiles/"}},Object(i.translate)("learn_more"))),this.state.restoreFormOpen&&r.createElement(S,{onClose:this.closeRestoreForm,onRestore:this.props.updateProfiles,organization:a}),this.state.createFormOpen&&r.createElement(z,{languages:t,onClose:this.closeCreateForm,onCreate:this.handleCreate,organization:a,profiles:n}))}}var R=Object(k.a)(F),D=a(1114),L=a.n(D),I=a(383),A=a.n(I),W=a(347);class B extends r.PureComponent{constructor(){super(...arguments),this.handleChange=e=>{const{organization:t,router:a}=this.props;a.replace(e?Object(O.d)(e.value,t):Object(O.e)(t))}}render(){const{currentFilter:e,languages:t}=this.props;if(t.length<2)return null;const a=t.map(e=>({label:e.name,value:e.key})),n=e&&a.find(t=>t.value===e);return r.createElement("header",{className:"quality-profiles-list-header clearfix"},r.createElement("span",{className:"spacer-right"},Object(i.translate)("quality_profiles.filter_by"),":"),r.createElement(x.a,{className:"input-medium",clearable:!0,onChange:this.handleChange,options:a,value:n}))}}var T=Object(k.a)(B),J=a(315),U=a.n(J),M=a(670),H=a(1260),K=a(1247);var Y=r.memo((function(e){const{organization:t,profile:n}=e,l=25*(n.depth-1),u=Object(o.z)({qprofile:n.key,activation:"true"},t),m=Object(o.z)({qprofile:n.key,activation:"true",statuses:"DEPRECATED"},t);return r.createElement("tr",{className:"quality-profiles-table-row text-middle","data-key":n.key,"data-name":n.name},r.createElement("td",{className:"quality-profiles-table-name text-middle"},r.createElement("div",{className:"display-flex-center",style:{paddingLeft:l}},r.createElement("div",null,r.createElement(c.a,{language:n.language,name:n.name,organization:t},n.name)),n.isBuiltIn&&r.createElement(M.a,{className:"spacer-left"}))),r.createElement("td",{className:"quality-profiles-table-projects thin nowrap text-middle text-right"},n.isDefault?r.createElement(W.a,{doc:Promise.resolve().then(a.bind(null,1763))},r.createElement("span",{className:"badge"},Object(i.translate)("default"))):r.createElement("span",null,n.projectCount)),r.createElement("td",{className:"quality-profiles-table-rules thin nowrap text-middle text-right"},r.createElement("div",null,n.activeDeprecatedRuleCount>0&&r.createElement("span",{className:"spacer-right"},r.createElement(U.a,{overlay:Object(i.translate)("quality_profiles.deprecated_rules")},r.createElement(s.Link,{className:"badge badge-error",to:m},n.activeDeprecatedRuleCount))),r.createElement(s.Link,{to:u},n.activeRuleCount))),r.createElement("td",{className:"quality-profiles-table-date thin nowrap text-middle text-right"},r.createElement(K.a,{date:n.rulesUpdatedAt})),r.createElement("td",{className:"quality-profiles-table-date thin nowrap text-middle text-right"},r.createElement(K.a,{date:n.lastUsed})),r.createElement("td",{className:"quality-profiles-table-actions thin nowrap text-middle text-right"},r.createElement(H.a,{fromList:!0,organization:t,profile:n,updateProfiles:e.updateProfiles})))}));class Q extends r.PureComponent{constructor(){super(...arguments),this.renderLanguage=(e,t)=>r.createElement("div",{className:"boxed-group boxed-group-inner quality-profiles-table",key:e},r.createElement("table",{className:"data zebra zebra-hover","data-language":e},void 0!==t&&this.renderHeader(e,t.length),r.createElement("tbody",null,void 0!==t&&this.renderProfiles(t))))}renderProfiles(e){return e.map(e=>r.createElement(Y,{key:e.key,organization:this.props.organization,profile:e,updateProfiles:this.props.updateProfiles}))}renderHeader(e,t){const n=this.props.languages.find(t=>t.key===e);return n?r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,n.name,", ",Object(i.translateWithParameters)("quality_profiles.x_profiles",t)),r.createElement("th",{className:"text-right nowrap"},Object(i.translate)("quality_profiles.list.projects"),r.createElement(W.a,{className:"table-cell-doc",doc:Promise.resolve().then(a.bind(null,1074))})),r.createElement("th",{className:"text-right nowrap"},Object(i.translate)("quality_profiles.list.rules")),r.createElement("th",{className:"text-right nowrap"},Object(i.translate)("quality_profiles.list.updated")),r.createElement("th",{className:"text-right nowrap"},Object(i.translate)("quality_profiles.list.used")),r.createElement("th",null," "))):null}render(){const{profiles:e,languages:t}=this.props,{language:a}=this.props.location.query,n=A()(e,e=>e.language),s=a?L()(n,a):n,o=l()(Object.keys(s));return r.createElement("div",null,r.createElement(T,{currentFilter:a,languages:t,organization:this.props.organization}),0===Object.keys(s).length&&r.createElement(_.Alert,{className:"spacer-top",variant:"warning"},Object(i.translate)("no_results")),o.map(e=>this.renderLanguage(e,s[e])))}}function G(e){return r.createElement("div",null,r.createElement(R,Object.assign({},e)),r.createElement("div",{className:"page-with-sidebar"},r.createElement("div",{className:"page-main"},r.createElement(Q,Object.assign({},e))),r.createElement("div",{className:"page-sidebar"},r.createElement(j,Object.assign({},e)))))}},351:function(e,t,a){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),l=a(304),s=a(28);t.formatterOption={year:"numeric",month:"short",day:"2-digit"},t.longFormatterOption={year:"numeric",month:"long",day:"numeric"},t.default=function(e){var a=e.children,i=e.date,o=e.long;return n.createElement(l.FormattedDate,r({value:s.parseDate(i)},o?t.longFormatterOption:t.formatterOption),a)}},383:function(e,t,a){var r=a(443),n=a(393),l=Object.prototype.hasOwnProperty,s=n((function(e,t,a){l.call(e,a)?e[a].push(t):r(e,a,[t])}));e.exports=s},397:function(e,t,a){"use strict";a.d(t,"e",(function(){return l})),a.d(t,"f",(function(){return s})),a.d(t,"g",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return c})),a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m})),a.d(t,"h",(function(){return p}));var r=a(8),n=a(321);function l(e){return Object(r.getJSON)("/api/rules/app",e).catch(n.a)}function s(e){return Object(r.getJSON)("/api/rules/search",e).catch(n.a)}function i(e,t){const a=e.facets.find(e=>e.property===t);return a?a.values:[]}function o(e){return Object(r.getJSON)("/api/rules/show",e).catch(n.a)}function c(e){return Object(r.getJSON)("/api/rules/tags",e).then(e=>e.tags,n.a)}function u(e){return Object(r.postJSON)("/api/rules/create",e).then(e=>e.rule,e=>e&&409===e.status?Promise.reject(e):Object(n.a)(e))}function m(e){return Object(r.post)("/api/rules/delete",e).catch(n.a)}function p(e){return Object(r.postJSON)("/api/rules/update",e).then(e=>e.rule,n.a)}}}]);
//# sourceMappingURL=347.m.d594f447.chunk.js.map