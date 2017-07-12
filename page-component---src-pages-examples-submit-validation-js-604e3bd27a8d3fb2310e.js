webpackJsonp([27],{'./node_modules/babel-loader/lib/index.js?{"presets":["/Users/uds/develop/tmp/react-drip-form/www/node_modules/babel-preset-es2015/lib/index.js","/Users/uds/develop/tmp/react-drip-form/www/node_modules/babel-preset-stage-1/lib/index.js","/Users/uds/develop/tmp/react-drip-form/www/node_modules/babel-preset-react/lib/index.js","/Users/uds/develop/tmp/react-drip-form/www/node_modules/babel-preset-env/lib/index.js","/Users/uds/develop/tmp/react-drip-form/www/node_modules/babel-preset-stage-0/lib/index.js","/Users/uds/develop/tmp/react-drip-form/www/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/uds/develop/tmp/react-drip-form/www/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/uds/develop/tmp/react-drip-form/www/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/uds/develop/tmp/react-drip-form/www/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/uds/develop/tmp/react-drip-form/www/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/uds/develop/tmp/react-drip-form/www/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./src/pages/examples/submit-validation.js':function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n("./node_modules/react/react.js"),u=r(d),m=n("../src/index.js"),p=n("./node_modules/react-drip-form-components/lib/index.js"),c=n("./src/components/index.js"),f=function(e,t){return new Promise(function(n,r){setTimeout(function(){"example@mail.com"===e&&"passwd"===t?n():r()},1e3)})},b=(0,m.dripForm)()(function(e){var t=e.handlers,n=e.meta,r=n.invalid,i=n.pristine,a=e.submitting;return u.default.createElement("form",{onSubmit:t.onSubmit},u.default.createElement("div",null,u.default.createElement("label",{htmlFor:"email"},"Email-Address"),u.default.createElement(p.Input,{type:"email",id:"email",name:"email",label:"Email-Address",placeholder:"enter-your-email@example.com",validations:{required:!0,email:!0}})),u.default.createElement("div",null,u.default.createElement("label",{htmlFor:"email"},"Password"),u.default.createElement(p.Input,{type:"password",id:"password",name:"password",label:"Password",validations:{required:!0}})),u.default.createElement(c.Button,{primary:!0,onClick:t.onSubmit,disabled:r||i||a},a?"Logging in...":"Login"))}),h=function(e){function t(){var e,n,r,l;i(this,t);for(var o=arguments.length,s=Array(o),d=0;d<o;d++)s[d]=arguments[d];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={submitting:!1},r.handleInitialize=function(e){r.form=e},r.handleSubmit=function(e){var t=e.email,n=e.password;r.setState({submitting:!0}),f(t,n).then(function(){r.setState({submitting:!1}),r.form.clear(),alert("Login succeeded!")}).catch(function(){r.form.setErrors({email:"Email-Address or password is incorrect."}),r.setState({submitting:!1})})},l=n,a(r,l)}return l(t,e),s(t,[{key:"render",value:function(){return u.default.createElement(b,o({},this.props,{submitting:this.state.submitting,onInitialize:this.handleInitialize,onValidSubmit:this.handleSubmit}))}}]),t}(d.Component),w=function(e){function t(){var e,n,r,l;i(this,t);for(var o=arguments.length,s=Array(o),d=0;d<o;d++)s[d]=arguments[d];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={values:{}},l=n,a(r,l)}return l(t,e),s(t,[{key:"render",value:function(){var e=this,t=this.props.location,n=this.state.values;return u.default.createElement(c.Layout,{title:"Submit Validation",location:t},u.default.createElement("p",null,"This is an example of executing validation after submitting.",u.default.createElement("br",null),"The basic pattern is to get the form instance with ",u.default.createElement("code",null,"onInitialize")," props and set the error with the ",u.default.createElement("code",null,"setErrors()")," method."),u.default.createElement("p",null,"If you need to display the spinner during sending or if you need to disable the component, you can express it by giving the original props like ",u.default.createElement("code",null,"submitting"),"."),u.default.createElement("hr",null),u.default.createElement("h3",null,"Example:"),u.default.createElement(h,{onChange:function(t){return e.setState({values:t})}}),u.default.createElement("hr",null),u.default.createElement("h3",null,"Values:"),u.default.createElement(c.Code,{language:"javascript"},JSON.stringify(n,null,2)),u.default.createElement("hr",null),u.default.createElement("h3",null,"Sample Code:"),u.default.createElement(c.Code,{language:"javascript"},'import React, { Component } from \'react\';\nimport { dripForm } from \'react-drip-form\';\nimport { Input } from \'react-drip-form-components\';\n\n\n// Simulate API\nconst requestLogin = (email, password) => new Promise((resolve, reject) => {\n  setTimeout(() => {\n    if (email === \'example@mail.com\' && password === \'passwd\') {\n      resolve();\n    } else {\n      reject();\n    }\n  }, 1000);\n});\n\n\nconst SubmitValidationForm = dripForm()(({\n  handlers,\n  meta: { invalid, pristine },\n  submitting,\n}) => (\n  <form onSubmit={handlers.onSubmit}>\n    <div>\n      <label htmlFor="email">Email-Address</label>\n      <Input\n        type="email"\n        id="email"\n        name="email"\n        label="Email-Address"\n        placeholder="enter-your-email@example.com"\n        validations={{\n          required: true,\n          email: true,\n        }}\n      />\n    </div>\n\n    <div>\n      <label htmlFor="email">Password</label>\n      <Input\n        type="password"\n        id="password"\n        name="password"\n        label="Password"\n        validations={{\n          required: true,\n        }}\n      />\n    </div>\n\n    <Button\n      primary\n      onClick={handlers.onSubmit}\n      disabled={invalid || pristine || submitting}\n    >\n      {submitting ? \'Logging in...\' : \'Login\'}\n    </Button>\n  </form>\n));\n\n\nclass MyComponent extends Component {\n  state = {\n    submitting: false,\n  };\n\n  handleInitialize = (form) => {\n    this.form = form;\n  };\n\n  handleSubmit = ({ email, password }) => {\n    this.setState({ submitting: true });\n\n    requestLogin(email, password)\n      .then(() => {\n        this.setState({ submitting: false });\n        this.form.clear();\n        alert(\'Login succeeded!\');\n      })\n      .catch(() => {\n        this.form.setErrors({ email: \'Email-Address or password is incorrect.\' });\n        this.setState({ submitting: false });\n      });\n  };\n\n  render() {\n    return (\n      <SubmitValidationForm\n        {...this.props}\n        submitting={this.state.submitting}\n        onInitialize={this.handleInitialize}\n        onValidSubmit={this.handleSubmit}\n      />\n    );\n  }\n}'))}}]),t}(d.Component);t.default=w,e.exports=t.default}});
//# sourceMappingURL=page-component---src-pages-examples-submit-validation-js-604e3bd27a8d3fb2310e.js.map