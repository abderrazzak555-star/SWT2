(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{1164:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1079),o=n(13),a=n(37),s=n(664),i=n(711),l=n(698);t.default=function(e){var t=e.children,n=void 0===t?function(e){return e}:t,c=e.date;return c?r.differenceInHours(Date.now(),c)<1?n(a.translate("less_than_1_hour_ago")):o.createElement(s.default,{overlay:o.createElement(l.default,{date:c})},o.createElement("span",null,o.createElement(i.default,{date:c},n))):n(a.translate("never"))}},1451:function(e,t,n){"use strict";var r,o=n(13),a=n(659),s=n(665),i=n.n(s),l=n(37),c=n(967),u=n(653),p=n(721),m=n.n(p),d=n(664),f=n.n(d),h=n(700),b=n.n(h),y=n(1164),_=n.n(y),v=n(739),g=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!1,showConfirmation:!1},t.handleClick=function(){t.state.showConfirmation?t.handleRevoke().then((function(){t.mounted&&t.setState({showConfirmation:!1})})):t.setState({showConfirmation:!0})},t.handleRevoke=function(){return t.setState({loading:!0}),Object(c.c)({login:t.props.login,name:t.props.token.name}).then((function(){return t.props.onRevokeToken(t.props.token)}),(function(){t.mounted&&t.setState({loading:!1})}))},t}return g(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.deleteConfirmation,n=e.token,r=this.state,s=r.loading,c=r.showConfirmation;return o.createElement("tr",null,o.createElement("td",null,o.createElement(f.a,{overlay:n.name},o.createElement("span",null,Object(v.limitComponentName)(n.name)))),o.createElement("td",{className:"nowrap"},o.createElement(_.a,{date:n.lastConnectionDate})),o.createElement("td",{className:"thin nowrap text-right"},o.createElement(b.a,{date:n.createdAt,long:!0})),o.createElement("td",{className:"thin nowrap text-right"},o.createElement(i.a,{loading:s},o.createElement("i",{className:"deferred-spinner-placeholder"})),"modal"===t?o.createElement(m.a,{confirmButtonText:Object(l.translate)("users.tokens.revoke_token"),isDestructive:!0,modalBody:o.createElement(u.FormattedMessage,{defaultMessage:Object(l.translate)("users.tokens.sure_X"),id:"users.tokens.sure_X",values:{token:o.createElement("strong",null,n.name)}}),modalHeader:Object(l.translate)("users.tokens.revoke_token"),onConfirm:this.handleRevoke},(function(e){var t=e.onClick;return o.createElement(a.Button,{className:"spacer-left button-red input-small",disabled:s,onClick:t,title:Object(l.translate)("users.tokens.revoke_token")},Object(l.translate)("users.tokens.revoke"))})):o.createElement(a.Button,{className:"button-red input-small spacer-left",disabled:s,onClick:this.handleClick},c?Object(l.translate)("users.tokens.sure"):Object(l.translate)("users.tokens.revoke"))))},t}(o.PureComponent),O=n(726),w=n(674);function E(e){var t=e.token;return o.createElement("div",{className:"panel panel-white big-spacer-top"},o.createElement(w.Alert,{variant:"warning"},Object(l.translateWithParameters)("users.tokens.new_token_created",t.name)),o.createElement(O.ClipboardButton,{copyValue:t.token}),o.createElement("code",{className:"big-spacer-left text-success"},t.token))}var j=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),C=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],s=0,i=a.length;s<i;s++,o++)r[o]=a[s];return r},S=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={generating:!1,loading:!0,newTokenName:"",tokens:[]},t.fetchTokens=function(){t.setState({loading:!0}),Object(c.b)(t.props.login).then((function(e){t.mounted&&t.setState({loading:!1,tokens:e})}),(function(){t.mounted&&t.setState({loading:!1})}))},t.updateTokensCount=function(){t.props.updateTokensCount&&t.props.updateTokensCount(t.props.login,t.state.tokens.length)},t.handleGenerateToken=function(e){e.preventDefault(),t.state.newTokenName.length>0&&(t.setState({generating:!0}),Object(c.a)({name:t.state.newTokenName,login:t.props.login}).then((function(e){t.mounted&&t.setState((function(t){var n=C(t.tokens,[{name:e.name,createdAt:e.createdAt}]);return{generating:!1,newToken:e,newTokenName:"",tokens:n}}),t.updateTokensCount)}),(function(){t.mounted&&t.setState({generating:!1})})))},t.handleRevokeToken=function(e){t.setState((function(t){return{tokens:t.tokens.filter((function(t){return t.name!==e.name}))}}),t.updateTokensCount)},t.handleNewTokenChange=function(e){return t.setState({newTokenName:e.currentTarget.value})},t}return j(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchTokens()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.renderItems=function(){var e=this,t=this.state.tokens;return t.length<=0?o.createElement("tr",null,o.createElement("td",{className:"note",colSpan:3},Object(l.translate)("users.no_tokens"))):t.map((function(t){return o.createElement(k,{deleteConfirmation:e.props.deleteConfirmation,key:t.name,login:e.props.login,onRevokeToken:e.handleRevokeToken,token:t})}))},t.prototype.render=function(){var e=this.state,t=e.generating,n=e.loading,r=e.newToken,s=e.newTokenName,c=e.tokens,u=o.createElement("tr",null,o.createElement("td",null,o.createElement("i",{className:"spinner"})));return o.createElement(o.Fragment,null,o.createElement("h3",{className:"spacer-bottom"},Object(l.translate)("users.generate_tokens")),o.createElement("form",{autoComplete:"off",className:"display-flex-center",id:"generate-token-form",onSubmit:this.handleGenerateToken},o.createElement("input",{className:"input-large spacer-right",maxLength:100,onChange:this.handleNewTokenChange,placeholder:Object(l.translate)("users.enter_token_name"),required:!0,type:"text",value:s}),o.createElement(a.SubmitButton,{className:"js-generate-token",disabled:t||s.length<=0},Object(l.translate)("users.generate"))),r&&o.createElement(E,{token:r}),o.createElement("table",{className:"data zebra big-spacer-top"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,Object(l.translate)("name")),o.createElement("th",null,Object(l.translate)("my_account.tokens_last_usage")),o.createElement("th",{className:"text-right"},Object(l.translate)("created")),o.createElement("th",null))),o.createElement("tbody",null,o.createElement(i.a,{customSpinner:u,loading:n&&c.length<=0},this.renderItems()))))},t}(o.PureComponent);t.a=S},2274:function(e,t,n){"use strict";n.r(t),n.d(t,"Security",(function(){return y}));var r,o=n(13),a=n(677),s=n(666),i=n(37),l=n(668),c=n(659),u=n(674),p=n(781),m=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={success:!1},t.handleSuccessfulChange=function(){t.oldPassword.value="",t.password.value="",t.passwordConfirmation.value="",t.setState({success:!0,errors:void 0})},t.setErrors=function(e){t.setState({success:!1,errors:e})},t.handleChangePassword=function(e){e.preventDefault();var n=t.props.user,r=t.oldPassword.value,o=t.password.value;o!==t.passwordConfirmation.value?(t.password.focus(),t.setErrors([Object(i.translate)("user.password_doesnt_match_confirmation")])):Object(p.a)({login:n.login,password:o,previousPassword:r}).then(t.handleSuccessfulChange,(function(){}))},t}return m(t,e),t.prototype.render=function(){var e=this,t=this.state,n=t.success,r=t.errors;return o.createElement("section",{className:"boxed-group"},o.createElement("h2",{className:"spacer-bottom"},Object(i.translate)("my_profile.password.title")),o.createElement("form",{className:"boxed-group-inner",onSubmit:this.handleChangePassword},n&&o.createElement(u.Alert,{variant:"success"},Object(i.translate)("my_profile.password.changed")),r&&r.map((function(e,t){return o.createElement(u.Alert,{key:t,variant:"error"},e)})),o.createElement("div",{className:"form-field"},o.createElement("label",{htmlFor:"old_password"},Object(i.translate)("my_profile.password.old"),o.createElement("em",{className:"mandatory"},"*")),o.createElement("input",{autoComplete:"off",id:"old_password",name:"old_password",ref:function(t){return e.oldPassword=t},required:!0,type:"password"})),o.createElement("div",{className:"form-field"},o.createElement("label",{htmlFor:"password"},Object(i.translate)("my_profile.password.new"),o.createElement("em",{className:"mandatory"},"*")),o.createElement("input",{autoComplete:"off",id:"password",name:"password",ref:function(t){return e.password=t},required:!0,type:"password"})),o.createElement("div",{className:"form-field"},o.createElement("label",{htmlFor:"password_confirmation"},Object(i.translate)("my_profile.password.confirm"),o.createElement("em",{className:"mandatory"},"*")),o.createElement("input",{autoComplete:"off",id:"password_confirmation",name:"password_confirmation",ref:function(t){return e.passwordConfirmation=t},required:!0,type:"password"})),o.createElement("div",{className:"form-field"},o.createElement(c.SubmitButton,{id:"change-password"},Object(i.translate)("my_profile.password.submit")))))},t}(o.Component),f=n(771),h=n(1451);function b(e){var t=e.login;return o.createElement("div",{className:"boxed-group"},o.createElement("h2",null,Object(i.translate)("users.tokens")),o.createElement("div",{className:"boxed-group-inner"},o.createElement("div",{className:"big-spacer-bottom big-spacer-right markdown"},o.createElement(f.a,{message:Object(i.translate)("my_account.tokens_description")})),o.createElement(h.a,{deleteConfirmation:"modal",login:t})))}function y(e){var t=e.user;return o.createElement("div",{className:"account-body account-container"},o.createElement(a.a,{defer:!1,title:Object(i.translate)("my_account.security")}),o.createElement(b,{login:t.login}),t.local&&o.createElement(d,{user:t}))}t.default=Object(s.connect)((function(e){return{user:Object(l.getCurrentUser)(e)}}))(y)},683:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),l=n(676),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={submitting:!1},t.stopSubmitting=function(){t.mounted&&t.setState({submitting:!1})},t.handleCloseClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.props.onClose()},t.handleFormSubmit=function(e){e.preventDefault(),t.submit()},t.handleSubmitClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.submit()},t.submit=function(){var e=t.props.onSubmit();e&&(t.setState({submitting:!0}),e.then(t.stopSubmitting,t.stopSubmitting))},t}return o(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.children,n=e.header,r=e.onClose,o=(e.onSubmit,s(e,["children","header","onClose","onSubmit"]));return i.createElement(l.default,a({contentLabel:n,onRequestClose:r},o),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))},t}(i.Component);t.default=c},698:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=n(13),a=n(653),s=n(173);t.formatterOption={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"},t.default=function(e){var n=e.children,i=e.date;return o.createElement(a.FormattedDate,r({value:s.parseDate(i)},t.formatterOption),n)}},711:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(13),o=n(653),a=n(173);t.default=function(e){var t=e.children,n=e.date;return r.createElement(o.FormattedRelative,{value:a.parseDate(n)},t)}},721:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),l=n(693),c=n(722),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderConfirmModal=function(e){var n=e.onClose,r=t.props,o=(r.children,r.modalBody),c=r.modalHeader,u=r.modalHeaderDescription,p=s(r,["children","modalBody","modalHeader","modalHeaderDescription"]);return i.createElement(l.default,a({header:c,headerDescription:u,onClose:n},p),o)},t}return o(t,e),t.prototype.render=function(){return i.createElement(c.default,{modal:this.renderConfirmModal},this.props.children)},t}(i.PureComponent);t.default=u},722:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(13),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={modal:!1},t.handleButtonClick=function(){t.setState({modal:!0})},t.handleFormSubmit=function(e){e&&e.preventDefault(),t.setState({modal:!0})},t.handleCloseModal=function(){t.mounted&&t.setState({modal:!1})},t}return o(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return a.createElement(a.Fragment,null,this.props.children({onClick:this.handleButtonClick,onFormSubmit:this.handleFormSubmit}),this.state.modal&&this.props.modal({onClose:this.handleCloseModal}))},t}(a.PureComponent);t.default=s},967:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i}));var r=n(51),o=n(670);function a(e){return Object(r.getJSON)("/api/user_tokens/search",{login:e}).then((function(e){return e.userTokens}),o.a)}function s(e){return Object(r.postJSON)("/api/user_tokens/generate",e).catch(o.a)}function i(e){return Object(r.post)("/api/user_tokens/revoke",e).catch(o.a)}}}]);
//# sourceMappingURL=347.1588858339197.chunk.js.map