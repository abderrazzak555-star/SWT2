(window.webpackJsonp=window.webpackJsonp||[]).push([[393],{2270:function(e,t,n){"use strict";n.r(t);var a,r=n(13),o=n(677),l=n(663),i=n(37),c=n(1020),s=n(1601),p=n(1588),u=n(1034),f=n(813),m=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return m(t,e),t.prototype.render=function(){var e=this.props,t=e.organization,n=e.profile;return r.createElement("header",{className:"page-header quality-profile-header"},r.createElement("div",{className:"note spacer-bottom"},r.createElement(l.IndexLink,{className:"text-muted",to:Object(f.e)(t)},Object(i.translate)("quality_profiles.page"))," / ",r.createElement(l.Link,{className:"text-muted",to:Object(f.d)(n.language,t)},n.languageName)),r.createElement("h1",{className:"page-title"},r.createElement(u.a,{className:"link-base-color",language:n.language,name:n.name,organization:t},r.createElement("span",null,n.name)),n.isBuiltIn&&r.createElement(c.a,{className:"spacer-left",tooltip:!1})),r.createElement("div",{className:"pull-right"},r.createElement("ul",{className:"list-inline",style:{lineHeight:"24px"}},r.createElement("li",{className:"small spacer-right"},Object(i.translate)("quality_profiles.updated_")," ",r.createElement(p.a,{date:n.rulesUpdatedAt})),r.createElement("li",{className:"small big-spacer-right"},Object(i.translate)("quality_profiles.used_")," ",r.createElement(p.a,{date:n.lastUsed})),r.createElement("li",null,r.createElement(l.Link,{className:"button",to:Object(f.a)(n.name,n.language,t)},Object(i.translate)("changelog"))),r.createElement("li",null,r.createElement(s.a,{className:"pull-left",organization:t,profile:n,updateProfiles:this.props.updateProfiles})))),n.isBuiltIn&&r.createElement("div",{className:"page-description"},Object(i.translate)("quality_profiles.built_in.description.1"),r.createElement("br",null),Object(i.translate)("quality_profiles.built_in.description.2")))},t}(r.PureComponent);function d(e){return r.createElement("div",{className:"quality-profile-not-found"},r.createElement("div",{className:"note spacer-bottom"},r.createElement(l.IndexLink,{className:"text-muted",to:Object(f.e)(e.organization)},Object(i.translate)("quality_profiles.page"))),r.createElement("div",null,Object(i.translate)("quality_profiles.not_found")))}var g=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),b=function(){return(b=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},O=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.location,n=e.profiles,a=e.router;if(t.query.key){var r=n.find((function(e){return e.key===t.query.key}));r&&a.replace({pathname:t.pathname,query:{language:r.language,name:r.name}})}},t.prototype.render=function(){var e=this.props,t=e.organization,n=e.profiles,a=e.location,l=h(e,["organization","profiles","location"]),i=a.query,c=i.key,s=i.language,p=i.name;if(c)return n.find((function(e){return e.key===a.query.key}))?null:r.createElement(d,{organization:t});var u=n.find((function(e){return e.language===s&&e.name===p}));if(!u)return r.createElement(d,{organization:t});var f=r.cloneElement(this.props.children,b({organization:t,profile:u,profiles:n},l));return r.createElement("div",{id:"quality-profile"},r.createElement(o.a,{defer:!1,title:u.name}),r.createElement(y,{organization:t,profile:u,updateProfiles:this.props.updateProfiles}),f)},t}(r.PureComponent);t.default=O}}]);
//# sourceMappingURL=393.1588858339197.chunk.js.map