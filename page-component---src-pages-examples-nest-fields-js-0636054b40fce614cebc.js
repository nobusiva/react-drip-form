webpackJsonp([32],{'./node_modules/babel-loader/lib/index.js?{"presets":["/Users/tsuyoshiwada/develop/react-drip-form/www/node_modules/babel-preset-es2015/lib/index.js","/Users/tsuyoshiwada/develop/react-drip-form/www/node_modules/babel-preset-stage-1/lib/index.js","/Users/tsuyoshiwada/develop/react-drip-form/www/node_modules/babel-preset-react/lib/index.js","/Users/tsuyoshiwada/develop/react-drip-form/www/node_modules/babel-preset-es2015/lib/index.js","/Users/tsuyoshiwada/develop/react-drip-form/www/node_modules/babel-preset-stage-0/lib/index.js","/Users/tsuyoshiwada/develop/react-drip-form/www/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/tsuyoshiwada/develop/react-drip-form/www/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/tsuyoshiwada/develop/react-drip-form/www/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/tsuyoshiwada/develop/react-drip-form/www/node_modules/styled-jsx/babel.js","/Users/tsuyoshiwada/develop/react-drip-form/www/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/tsuyoshiwada/develop/react-drip-form/www/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/tsuyoshiwada/develop/react-drip-form/www/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./src/pages/examples/nest-fields.js':function(e,g,I){"use strict";function C(e){return e&&e.__esModule?e:{default:e}}function A(e,g){if(!(e instanceof g))throw new TypeError("Cannot call a class as a function")}function t(e,g){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!g||"object"!=typeof g&&"function"!=typeof g?e:g}function l(e,g){if("function"!=typeof g&&null!==g)throw new TypeError("Super expression must either be null or a function, not "+typeof g);e.prototype=Object.create(g&&g.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(e,g):e.__proto__=g)}Object.defineProperty(g,"__esModule",{value:!0});var a=function(){function e(e,g){for(var I=0;I<g.length;I++){var C=g[I];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(e,C.key,C)}}return function(g,I,C){return I&&e(g.prototype,I),C&&e(g,C),g}}(),b=I("./node_modules/styled-jsx/style.js"),i=(C(b),I("./node_modules/styled-jsx/style.js")),c=C(i),n=I("./node_modules/react/react.js"),d=C(n),s=I("../src/index.js"),u=I("./src/components/index.js"),m=I("./src/fields/index.js"),o=(0,s.dripForm)({validations:{"teams.*.name":{required:!0,max:30},"teams.*.members.*":{max:30}}})(function(e){var g=e.handlers,I=e.fields,C=e.meta,A=C.invalid,t=C.pristine;return d.default.createElement("form",{onSubmit:g.onSubmit},I.map("teams.*",function(e,g){return d.default.createElement("div",{key:e},d.default.createElement("label",{htmlFor:e},"Team name #",g+1),d.default.createElement(m.Input,{type:"text",name:e+".name",label:"Team name"}),d.default.createElement("div",null,d.default.createElement(m.FieldGroup,{name:e+".scope"},d.default.createElement(m.Radio,{value:"private"},"Private"),d.default.createElement(m.Radio,{value:"public"},"Public")),d.default.createElement("div",{className:"members"},I.map(e+".members.*",function(e){return d.default.createElement("div",{key:e},d.default.createElement("label",null,"Member name"),d.default.createElement("div",{className:"input-group"},d.default.createElement(m.Input,{type:"text",name:e,label:"Member name"}),d.default.createElement(u.Button,{small:!0,type:"button",onClick:function(){return I.remove(e)}},"Delete")))})),d.default.createElement(u.Button,{small:!0,type:"button",onClick:function(){return I.push(e+".members","")}},"Add member")," ",d.default.createElement(u.Button,{small:!0,type:"button",onClick:function(){return I.remove(e)}},"Delete")))}),d.default.createElement("div",null,d.default.createElement(u.Button,{type:"button",onClick:function(){return I.push("teams",{name:"",scope:"private",members:[]})}},"Add team")),d.default.createElement("div",null,d.default.createElement(u.Button,{primary:!0,onClick:g.onSubmit,disabled:A||t},"Send message")))}),r=function(e){function g(){var e,I,C,l;A(this,g);for(var a=arguments.length,b=Array(a),i=0;i<a;i++)b[i]=arguments[i];return I=C=t(this,(e=g.__proto__||Object.getPrototypeOf(g)).call.apply(e,[this].concat(b))),C.state={values:{teams:[{name:"Initial Team",scope:"private",members:[]}]}},l=I,t(C,l)}return l(g,e),a(g,[{key:"render",value:function(){var e=this,g=this.props.location,I=this.state.values;return d.default.createElement(u.Layout,{title:"Nest Fields",location:g},d.default.createElement(c.default,{styleId:4109901230,css:"form .rdf-group{margin-top:1em;margin-bottom:1em}form>div>div:not(.rdf-input){padding-left:2em}form .members>div{margin-top:1em;margin-bottom:1em}form .input-group{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between}form .input-group>div{width:100%}form .input-group input{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}form .input-group>button{height:40px;border-left:0 !important;border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9leGFtcGxlcy9uZXN0LWZpZWxkcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErSG9CLEFBRzRCLEFBRUUsQUFFRixBQUVGLEFBRUYsQUFFMEIsQUFFekIsWUFKVSxDQUk0QixHQVpKLEFBSUEsRUFGbEIsaUJBRjZCLEFBSUEsR0FNaUMsQ0FFUyxxQ0FBb0QsRUFOL0YsQ0FJNkMscUNBRTZELDZGQU4vRiIsImZpbGUiOiJzcmMvcGFnZXMvZXhhbXBsZXMvbmVzdC1maWVsZHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RzdXlvc2hpd2FkYS9kZXZlbG9wL3JlYWN0LWRyaXAtZm9ybS93d3ciLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvaHJlZi1uby1oYXNoICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtZm9yICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZHJpcEZvcm0gfSBmcm9tICcuLi8uLi8uLi8uLi9zcmMvJztcbmltcG9ydCB7IExheW91dCwgQnV0dG9uLCBDb2RlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy8nO1xuaW1wb3J0IHsgSW5wdXQsIEZpZWxkR3JvdXAsIFJhZGlvIH0gZnJvbSAnLi4vLi4vZmllbGRzLyc7XG5cblxuY29uc3QgTmVzdEZpZWxkc0Zvcm0gPSBkcmlwRm9ybSh7XG4gIHZhbGlkYXRpb25zOiB7XG4gICAgJ3RlYW1zLioubmFtZSc6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgbWF4OiAzMCxcbiAgICB9LFxuICAgICd0ZWFtcy4qLm1lbWJlcnMuKic6IHtcbiAgICAgIG1heDogMzAsXG4gICAgfSxcbiAgfSxcbn0pKCh7XG4gIGhhbmRsZXJzLFxuICBmaWVsZHMsXG4gIG1ldGE6IHsgaW52YWxpZCwgcHJpc3RpbmUgfSxcbn0pID0+IChcbiAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZXJzLm9uU3VibWl0fT5cbiAgICB7ZmllbGRzLm1hcCgndGVhbXMuKicsICh0ZWFtTmFtZSwgdGVhbUluZGV4KSA9PiAoXG4gICAgICA8ZGl2IGtleT17dGVhbU5hbWV9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17dGVhbU5hbWV9PlRlYW0gbmFtZSAje3RlYW1JbmRleCArIDF9PC9sYWJlbD5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9e2Ake3RlYW1OYW1lfS5uYW1lYH1cbiAgICAgICAgICBsYWJlbD1cIlRlYW0gbmFtZVwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8RmllbGRHcm91cCBuYW1lPXtgJHt0ZWFtTmFtZX0uc2NvcGVgfT5cbiAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cInByaXZhdGVcIj5Qcml2YXRlPC9SYWRpbz5cbiAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cInB1YmxpY1wiPlB1YmxpYzwvUmFkaW8+XG4gICAgICAgICAgPC9GaWVsZEdyb3VwPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW1iZXJzXCI+XG4gICAgICAgICAgICB7ZmllbGRzLm1hcChgJHt0ZWFtTmFtZX0ubWVtYmVycy4qYCwgbWVtYmVyTmFtZSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXttZW1iZXJOYW1lfT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+TWVtYmVyIG5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e21lbWJlck5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWVtYmVyIG5hbWVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZpZWxkcy5yZW1vdmUobWVtYmVyTmFtZSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmaWVsZHMucHVzaChgJHt0ZWFtTmFtZX0ubWVtYmVyc2AsICcnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBZGQgbWVtYmVyXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmaWVsZHMucmVtb3ZlKHRlYW1OYW1lKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApKX1cblxuICAgIDxkaXY+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBmaWVsZHMucHVzaCgndGVhbXMnLCB7XG4gICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgc2NvcGU6ICdwcml2YXRlJyxcbiAgICAgICAgICBtZW1iZXJzOiBbXSxcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIEFkZCB0ZWFtXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXY+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHByaW1hcnlcbiAgICAgICAgb25DbGljaz17aGFuZGxlcnMub25TdWJtaXR9XG4gICAgICAgIGRpc2FibGVkPXtpbnZhbGlkIHx8IHByaXN0aW5lfVxuICAgICAgPlxuICAgICAgICBTZW5kIG1lc3NhZ2VcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Zvcm0+XG4pKTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXN0RmllbGRzRm9ybUV4YW1wbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB2YWx1ZXM6IHtcbiAgICAgIHRlYW1zOiBbXG4gICAgICAgIHsgbmFtZTogJ0luaXRpYWwgVGVhbScsIHNjb3BlOiAncHJpdmF0ZScsIG1lbWJlcnM6IFtdIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9jYXRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB2YWx1ZXMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dFxuICAgICAgICB0aXRsZT1cIk5lc3QgRmllbGRzXCJcbiAgICAgICAgbG9jYXRpb249e2xvY2F0aW9ufVxuICAgICAgPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgOmdsb2JhbChmb3JtIC5yZGYtZ3JvdXApIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA6Z2xvYmFsKGZvcm0gPiBkaXYgPiBkaXY6bm90KC5yZGYtaW5wdXQpKSB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA6Z2xvYmFsKGZvcm0gLm1lbWJlcnMgPiBkaXYpIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA6Z2xvYmFsKGZvcm0gLmlucHV0LWdyb3VwKSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDpnbG9iYWwoZm9ybSAuaW5wdXQtZ3JvdXAgPiBkaXYpIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDpnbG9iYWwoZm9ybSAuaW5wdXQtZ3JvdXAgaW5wdXQpIHtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDpnbG9iYWwoZm9ybSAuaW5wdXQtZ3JvdXAgPiBidXR0b24pIHtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPHA+XG4gICAgICAgICAgdG9kby4uLlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGhyIC8+XG5cbiAgICAgICAgPGgzPkV4YW1wbGU6PC9oMz5cbiAgICAgICAgPE5lc3RGaWVsZHNGb3JtXG4gICAgICAgICAgdmFsdWVzPXt2YWx1ZXN9XG4gICAgICAgICAgb25DaGFuZ2U9e3YgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbHVlczogdiB9KX1cbiAgICAgICAgICBvblZhbGlkU3VibWl0PXsodikgPT4ge1xuICAgICAgICAgICAgYWxlcnQoJ1NlZSBjb25zb2xlJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2KTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8aHIgLz5cblxuICAgICAgICA8aDM+VmFsdWVzOjwvaDM+XG4gICAgICAgIDxDb2RlIGxhbmd1YWdlPVwiamF2YXNjcmlwdFwiPntKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpfTwvQ29kZT5cbiAgICAgICAgPGhyIC8+XG5cbiAgICAgICAgPGgzPlNhbXBsZSBDb2RlOjwvaDM+XG4gICAgICAgIDxDb2RlIGxhbmd1YWdlPVwiamF2YXNjcmlwdFwiPntgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGRyaXBGb3JtIH0gZnJvbSAncmVhY3QtZHJpcC1mb3JtJztcbmB9PC9Db2RlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=src/pages/examples/nest-fields.js */"}),d.default.createElement("p",{"data-jsx":4109901230},"todo..."),d.default.createElement("hr",{"data-jsx":4109901230}),d.default.createElement("h3",{"data-jsx":4109901230},"Example:"),d.default.createElement(o,{values:I,onChange:function(g){return e.setState({values:g})},onValidSubmit:function(e){alert("See console"),console.log(e)}}),d.default.createElement("hr",{"data-jsx":4109901230}),d.default.createElement("h3",{"data-jsx":4109901230},"Values:"),d.default.createElement(u.Code,{language:"javascript"},JSON.stringify(I,null,2)),d.default.createElement("hr",{"data-jsx":4109901230}),d.default.createElement("h3",{"data-jsx":4109901230},"Sample Code:"),d.default.createElement(u.Code,{language:"javascript"},"import React from 'react';\nimport { dripForm } from 'react-drip-form';\n"))}}]),g}(n.Component);g.default=r,e.exports=g.default}});
//# sourceMappingURL=page-component---src-pages-examples-nest-fields-js-0636054b40fce614cebc.js.map