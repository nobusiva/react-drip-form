webpackJsonp([34],{'./node_modules/babel-loader/lib/index.js?{"presets":["/Users/uds/develop/tmp/react-drip-form/www/node_modules/babel-preset-es2015/lib/index.js","/Users/uds/develop/tmp/react-drip-form/www/node_modules/babel-preset-stage-1/lib/index.js","/Users/uds/develop/tmp/react-drip-form/www/node_modules/babel-preset-react/lib/index.js","/Users/uds/develop/tmp/react-drip-form/www/node_modules/babel-preset-es2015/lib/index.js","/Users/uds/develop/tmp/react-drip-form/www/node_modules/babel-preset-stage-0/lib/index.js","/Users/uds/develop/tmp/react-drip-form/www/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/uds/develop/tmp/react-drip-form/www/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/uds/develop/tmp/react-drip-form/www/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/uds/develop/tmp/react-drip-form/www/node_modules/styled-jsx/babel.js","/Users/uds/develop/tmp/react-drip-form/www/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/uds/develop/tmp/react-drip-form/www/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/uds/develop/tmp/react-drip-form/www/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./src/pages/examples/basic-form.js':function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),d=t("./node_modules/react/react.js"),m=a(d),u=t("../src/index.js"),s=t("./src/components/index.js"),c=t("./src/fields/index.js"),p=(0,u.dripForm)({validations:{name:{required:!0,max:32},username:{required:!0,max:255,alphaNumeric:!0},email:{required:!0,email:!0},emailConfirm:{same:"email"},gender:{required:!0},job:{max:3},subject:{required:!0},confirm:{required:!0},message:{max:500}}})(function(e){var n=e.handlers,t=e.meta,a=t.invalid,l=t.pristine;return m.default.createElement("form",{onSubmit:n.onSubmit},m.default.createElement("div",null,m.default.createElement("label",{htmlFor:"name"},"Name"),m.default.createElement(c.Input,{type:"text",id:"name",name:"name",label:"Name"})),m.default.createElement("div",null,m.default.createElement("label",{htmlFor:"username"},"Username"),m.default.createElement(c.Input,{type:"text",id:"username",name:"username",label:"Username",placeholder:"enter-your-username"})),m.default.createElement("div",null,m.default.createElement("label",{htmlFor:"email"},"Email-Address"),m.default.createElement(c.Input,{type:"email",id:"email",name:"email",label:"Email-Address",placeholder:"example@mail.com"})),m.default.createElement("div",null,m.default.createElement("label",{htmlFor:"emailConfirm"},"Email-Address (Confirm)"),m.default.createElement(c.Input,{type:"email",id:"emailConfirm",name:"emailConfirm",label:"Email-Address (Confirm)"})),m.default.createElement("div",null,m.default.createElement("label",null,"Gender"),m.default.createElement(c.FieldGroup,{name:"gender"},m.default.createElement(c.Radio,{value:"female"},"Female"),m.default.createElement(c.Radio,{value:"male"},"Male"),m.default.createElement(c.Radio,{value:"other"},"Other"),m.default.createElement(c.Radio,{value:"none"},"Rather not say"))),m.default.createElement("div",null,m.default.createElement("label",null,"Job (Optional)"),m.default.createElement(c.FieldGroup,{name:"job",multiple:!0},m.default.createElement(c.Checkbox,{value:"frontend-engineer"},"Front-end Engineer"),m.default.createElement(c.Checkbox,{value:"backend-engineer"},"Back-end Engineer"),m.default.createElement(c.Checkbox,{value:"software-engineer"},"Software Engineer"),m.default.createElement(c.Checkbox,{value:"ui-designer"},"UI Designer"),m.default.createElement(c.Checkbox,{value:"ux-designer"},"UX Designer"),m.default.createElement(c.Checkbox,{value:"graphic-designer"},"Graphic Designer"))),m.default.createElement("div",null,m.default.createElement("label",{htmlFor:"subject"},"Subject"),m.default.createElement(c.Select,{id:"subject",name:"subject",label:"Subject"},m.default.createElement("option",{value:""},"Please select a subject"),m.default.createElement("option",{value:"option1"},"Option 1"),m.default.createElement("option",{value:"option2"},"Option 2"),m.default.createElement("option",{value:"option3"},"Option 3"))),m.default.createElement("div",null,m.default.createElement("label",{htmlFor:"message"},"Message (Optional)"),m.default.createElement(c.Textarea,{id:"message",name:"message",label:"Message"})),m.default.createElement("div",null,m.default.createElement(c.Checkbox,{name:"confirm",value:"yes"},"I agree to the ",m.default.createElement("a",{href:"#"},"Terms of Use"))),m.default.createElement(s.Button,{primary:!0,onClick:n.onSubmit,disabled:a||l},"Send message"))}),f=function(e){function n(){var e,t,a,o;l(this,n);for(var i=arguments.length,d=Array(i),m=0;m<i;m++)d[m]=arguments[m];return t=a=r(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(d))),a.state={values:{}},o=t,r(a,o)}return o(n,e),i(n,[{key:"render",value:function(){var e=this,n=this.props.location,t=this.state.values;return m.default.createElement(s.Layout,{title:"Basic Form",location:n},m.default.createElement("p",null,"It is an example of the most basic form with validation.",m.default.createElement("br",null),"Even if we implement real-time validation with a large number of Fields, it is a good looking code!",m.default.createElement("br",null),"And the point to admire is that the form component is Stateless."),m.default.createElement("p",null,"Each Field Component uses the ",m.default.createElement("a",{href:"#todo"},"react-drip-form-components")," package.",m.default.createElement("br",null),"Of course it is a simple design and easy to use, but it will be a reference for the implementation of custom Field Component."),m.default.createElement("hr",null),m.default.createElement("h3",null,"Example:"),m.default.createElement(p,{values:t,onChange:function(n){return e.setState({values:n})},onValidSubmit:function(e){alert("See console"),console.log(e)}}),m.default.createElement("hr",null),m.default.createElement("h3",null,"Values:"),m.default.createElement(s.Code,{language:"javascript"},JSON.stringify(t,null,2)),m.default.createElement("hr",null),m.default.createElement("h3",null,"Sample Code:"),m.default.createElement(s.Code,{language:"javascript"},'import React from \'react\';\nimport { dripForm } from \'react-drip-form\';\n\nconst BasicForm = dripForm({\n  validations: {\n    name: {\n      required: true,\n      max: 32,\n    },\n    username: {\n      required: true,\n      max: 255,\n      alphaNumeric: true,\n    },\n    email: {\n      required: true,\n      email: true,\n    },\n    emailConfirm: {\n      same: \'email\',\n    },\n    gender: {\n      required: true,\n    },\n    job: {\n      max: 3,\n    },\n    subject: {\n      required: true,\n    },\n    confirm: {\n      required: true,\n    },\n    message: {\n      max: 500,\n    },\n  },\n})(({\n  handlers,\n  meta: { invalid, pristine },\n}) => (\n  <form onSubmit={handlers.onSubmit}>\n    <div>\n      <label htmlFor="name">Name</label>\n      <Input\n        type="text"\n        id="name"\n        name="name"\n        label="Name"\n      />\n    </div>\n\n    <div>\n      <label htmlFor="username">Username</label>\n      <Input\n        type="text"\n        id="username"\n        name="username"\n        label="Username"\n        placeholder="enter-your-username"\n      />\n    </div>\n\n    <div>\n      <label htmlFor="email">Email-Address</label>\n      <Input\n        type="email"\n        id="email"\n        name="email"\n        label="Email-Address"\n        placeholder="example@mail.com"\n      />\n    </div>\n\n    <div>\n      <label htmlFor="emailConfirm">Email-Address (Confirm)</label>\n      <Input\n        type="email"\n        id="emailConfirm"\n        name="emailConfirm"\n        label="Email-Address (Confirm)"\n      />\n    </div>\n\n    <div>\n      <label>Gender</label>\n      <FieldGroup name="gender">\n        <Radio value="female">Female</Radio>\n        <Radio value="male">Male</Radio>\n        <Radio value="other">Other</Radio>\n        <Radio value="none">Rather not say</Radio>\n      </FieldGroup>\n    </div>\n\n    <div>\n      <label>Job (Optional)</label>\n      <FieldGroup name="job" multiple>\n        <Checkbox value="frontend-engineer">Front-end Engineer</Checkbox>\n        <Checkbox value="backend-engineer">Back-end Engineer</Checkbox>\n        <Checkbox value="software-engineer">Software Engineer</Checkbox>\n        <Checkbox value="ui-designer">UI Designer</Checkbox>\n        <Checkbox value="ux-designer">UX Designer</Checkbox>\n        <Checkbox value="graphic-designer">Graphic Designer</Checkbox>\n      </FieldGroup>\n    </div>\n\n    <div>\n      <label htmlFor="subject">Subject</label>\n      <Select\n        id="subject"\n        name="subject"\n        label="Subject"\n      >\n        <option value="">Please select a subject</option>\n        <option value="option1">Option 1</option>\n        <option value="option2">Option 2</option>\n        <option value="option3">Option 3</option>\n      </Select>\n    </div>\n\n    <div>\n      <label htmlFor="message">Message (Optional)</label>\n      <Textarea\n        id="message"\n        name="message"\n        label="Message"\n      />\n    </div>\n\n    <div>\n      <Checkbox\n        name="confirm"\n        value="yes"\n      >\n        I agree to the <a href="#">Terms of Use</a>\n      </Checkbox>\n    </div>\n\n    <Button\n      onClick={handlers.onSubmit}\n      disabled={invalid || pristine}\n    >\n      Send message\n    </Button>\n  </form>\n));'))}}]),n}(d.Component);n.default=f,e.exports=n.default}});
//# sourceMappingURL=page-component---src-pages-examples-basic-form-js-9475faa930765e1c9442.js.map