!function(t){var e={};function o(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(r,i,function(e){return t[e]}.bind(null,i));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=4)}([function(t,e,o){var r=o(1);"string"==typeof r&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};o(3)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,o){(t.exports=o(2)(!1)).push([t.i,"body{font-family:sans-serif;margin:0;padding:0;background-color:#003f5c;color:white;font-size:16px}header{text-align:center}header h1{margin:1rem auto}section{padding:0.5rem;background-color:#dfddc7;color:#444;border-radius:0.25rem;margin:1rem}section .section-header{font-size:1.15rem;font-weight:bold;margin:1rem 0}form{display:flex;flex-direction:column}form input,form select{padding:0.5rem;border-radius:0.5rem;margin:0.25rem 0 0.75rem 0;border:none}form input[type=submit]{background-color:#94aa2a;border:none;color:white;padding:0.5rem}form input[type=submit]:hover{filter:brightness(1.05)}main{max-width:620px;margin:1rem auto}.hide{display:none}#projects-list{margin:1rem 0;padding:0;margin:0 -0.25rem}#projects-list li{display:inline-block;margin:0.25rem;width:auto;list-style:none;cursor:pointer;padding:0.5rem 0.75rem;text-transform:capitalize;background-color:#ff6768;border-radius:0.5rem;color:white;font-weight:bold}#projects-list li:hover{filter:brightness(1.25)}summary{padding:0.5rem 0}.high{background-color:#c70039}.medium{background-color:#ff6c00}.low{background-color:#00818a}#project-container>div h2{text-transform:capitalize}#project-container>div h2:before{content:\"Project:\";margin-right:0.25rem}#project-container .todo-container{margin:0.5rem}#project-container .todo-container summary{padding:0.5rem 0.5rem 0.5rem 1rem;border-radius:4px;color:white}#project-container .todo-container summary:hover{filter:brightness(1.25)}#project-container .todo-container summary>input[type=checkbox]{margin-right:.5rem}#project-container .todo-container summary>h3{font-weight:normal;cursor:pointer;margin:0;display:inline-block}#project-container .todo-container .details{position:relative;background-color:white;padding:0.5rem;display:grid;grid-template-rows:1fr 32px;grid-template-columns:1fr 32px 32px;grid-template-areas:\"description description description\" \"date edit delete\";align-items:end;grid-gap:1rem}#project-container .todo-container .details p{grid-area:description}#project-container .todo-container .details time{grid-area:date;font-size:0.85rem;color:gray}#project-container .todo-container .details time:before{content:'\\1F4C5';margin-right:.25rem}#project-container .todo-container .details .priority{position:absolute;top:0.25rem;right:0.25rem;color:white;text-transform:uppercase;font-size:0.75rem;padding:0.25rem 0.25rem 0.15rem 0.25rem;border-radius:2px}#project-container .todo-container .details button{border-radius:50%;width:32px;height:32px;border:none;font-size:1.15rem;padding:0.15rem;cursor:pointer}#project-container .todo-container .details button.edit-btn{background-color:green;color:white;grid-area:edit}#project-container .todo-container .details button.edit-btn:before{content:'\\270E'}#project-container .todo-container .details button.delete-btn{color:white;background-color:red;grid-area:delete}#project-container .todo-container .details button.delete-btn:before{content:'⌫'}\n",""])},function(t,e,o){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=function(t,e){var o=t[1]||"",r=t[3];if(!r)return o;if(e&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),n=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[o].concat(n).concat([i]).join("\n")}var a,s,c;return[o].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(o,"}"):o})).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var n=this[i][0];null!=n&&(r[n]=!0)}for(var a=0;a<t.length;a++){var s=t[a];null!=s[0]&&r[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="(".concat(s[2],") and (").concat(o,")")),e.push(s))}},e}},function(t,e,o){"use strict";var r,i={},n=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}t[e]=o}return t[e]}}();function s(t,e){for(var o=[],r={},i=0;i<t.length;i++){var n=t[i],a=e.base?n[0]+e.base:n[0],s={css:n[1],media:n[2],sourceMap:n[3]};r[a]?r[a].parts.push(s):o.push(r[a]={id:a,parts:[s]})}return o}function c(t,e){for(var o=0;o<t.length;o++){var r=t[o],n=i[r.id],a=0;if(n){for(n.refs++;a<n.parts.length;a++)n.parts[a](r.parts[a]);for(;a<r.parts.length;a++)n.parts.push(g(r.parts[a],e))}else{for(var s=[];a<r.parts.length;a++)s.push(g(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=o.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(o){e.setAttribute(o,t.attributes[o])})),"function"==typeof t.insert)t.insert(e);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,u=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function p(t,e,o,r){var i=o?"":r.css;if(t.styleSheet)t.styleSheet.cssText=u(e,i);else{var n=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(n,a[e]):t.appendChild(n)}}function m(t,e,o){var r=o.css,i=o.media,n=o.sourceMap;if(i&&t.setAttribute("media",i),n&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,f=0;function g(t,e){var o,r,i;if(e.singleton){var n=f++;o=h||(h=d(e)),r=p.bind(null,o,n,!1),i=p.bind(null,o,n,!0)}else o=d(e),r=m.bind(null,o,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(o)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=n());var o=s(t,e);return c(o,e),function(t){for(var r=[],n=0;n<o.length;n++){var a=o[n],d=i[a.id];d&&(d.refs--,r.push(d))}t&&c(s(t,e),e);for(var l=0;l<r.length;l++){var u=r[l];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete i[u.id]}}}}},function(t,e,o){"use strict";o.r(e);o(0);const r="default",i="main",n=["low","medium","high"],a=document.querySelector.bind(document);function s(t){a(t).classList.add("hide")}function c(t){a(t).classList.remove("hide")}function d(t,e){document.querySelector(t).open=e}function l(t,e,o=[]){const r="string"==typeof t?a(t):t;o.forEach(t=>{t!==e&&r.classList.remove(t)}),r.classList.add(e)}function u(t,e={}){const o=document.createElement(t);return Object.keys(e).forEach(t=>{switch(t){case"classList":o.classList.add(...e[t]);break;default:o[t]=e[t]}}),o}let p=0;class m{constructor(t){this._title="",this._description="",this._dueDate=null,this._priority=0,this._completed=!1,this.update(t),this.id=p,p+=1}update({title:t=this.title,description:e=this.description,dueDate:o=this.dueDate,priority:r=this.priority,completed:i=this.completed}){this.title=t,this.description=e,this.dueDate=o,this.priority=r,this.completed=i}isDue(){return this._dueDate&&new Date(this._dueDate)>new Date}get json(){return JSON.stringify({title:this._title,description:this.description,dueDate:this.dueDate,priority:this.priority,completed:this.completed})}static fromJSON(t){return new m(JSON.parse(t))}set completed(t){this._completed=t}get completed(){return this._completed}set title(t){if("string"!=typeof t||""===t)throw new Error("Please set a title for the TODO.");this._title=t}get title(){return this._title}set description(t){this._description=t}get description(){return this._description}set dueDate(t){this._dueDate=t?new Date(t.replace(/-/g,"/")):null}get dueDate(){return this._dueDate}set priority(t){const e=t.toLowerCase();this._priority=n.includes(e)?n.indexOf(e):0}get priority(){return n[this._priority]}}const h={},f="changed",g="create-project",y="create-todo",b="update-todo",v="switched-project",j="delete-todo",w="edit-todo";function x(t,e,o){h[t]||(h[t]={}),h[t][e]=o}function D(t,e){if(h[t]){const o=h[t];Object.keys(o).forEach(t=>{o[t](t,e)})}}function S(t,e){x(f,t,e)}function T(t){D(f,{subject:t})}function k(t,e){x(g,t,e)}function E(t){D(g,{projectName:t})}function _(t){D(b,t)}function L(t){D(v,{projectName:t})}class N{constructor({name:t}={name:"default"}){this.name=t,this.todos={},this.count=0,S(this.name,(t,{subject:e})=>{e===this&&this.saveToLocalStorage()})}saveToLocalStorage(){localStorage[`osma-tlp-${this.name}`]=this.count?JSON.stringify(Object.values(this.todos).map(t=>t.json)):"[]"}static getFromLocalStorage(t){const e=new N({name:t}),o=JSON.parse(localStorage[`osma-tlp-${t}`]);return o.forEach(t=>{e.createTodo(JSON.parse(t))}),e.count=o.length,e}createTodo(t){return this.addTodo(new m(t))}addTodo(t){return this.todos[t.id]=t,this.count+=1,T(this),t}removeTodo(t){delete this.todos[t],this.count-=1}findById(t){return this.todos[t]}forEach(t){Object.values(this.todos).forEach(t)}get name(){return this._name}set name(t){this._name=t}}const O=new Date,I=new Intl.RelativeTimeFormat({localeMatcher:"best fit",style:"long",numeric:"auto"}),C=new Intl.DateTimeFormat;function B(t){return t.dueDate?`${C.format(t.dueDate)} (${I.format((e=t.dueDate,Math.ceil((e-O)/864e5)),"days")})`:"No date";var e}class M{constructor(){this.displayId=-1,this.element=u("details",{classList:["todo-container"]}),this.summary=u("summary"),this.details=u("div",{classList:["details"]}),this.title=u("h3"),this.description=u("p"),this.dueDate=u("time"),this.priority=u("div",{className:"priority"}),this.completed=u("input",{type:"checkbox"}),this.deleteBtn=u("button",{className:"delete-btn"}),this.editBtn=u("button",{className:"edit-btn"}),this.summary.append(this.completed,this.title),this.details.append(this.description,this.dueDate,this.priority,this.deleteBtn,this.editBtn),this.element.append(this.summary,this.details),this.deleteBtn.addEventListener("click",()=>{!function(t){D(j,{todoId:t})}(this.displayId)}),this.editBtn.addEventListener("click",()=>{!function(t){D(w,{todoId:t})}(this.displayId)}),this.completed.addEventListener("click",t=>{_({todoId:this.displayId,completed:t.target.checked})})}appendTo(t){t.append(this.element)}display(t){this.displayId=t.id,l(this.summary,t.priority,n),this.title.textContent=t.title,this.completed.checked=t.completed,this.description.textContent=t.description,this.dueDate.textContent=B(t),this.priority.textContent=t.priority,l(this.priority,t.priority,n),this.element.classList.remove("hide")}hide(){this.element.classList.add("hide")}}function q(t){t.preventDefault(),E(new FormData(t.target).get("project-name"))}function F(t){t.preventDefault();const e=new FormData(t.target),o=e.get("todo-title"),r=e.get("todo-description"),i=e.get("todo-due-date"),n=e.get("todo-priority"),a="on"===e.get("todo-completed");var s;D(y,{title:o,description:r,dueDate:i,priority:n,completed:a}),s="#create-todo",document.querySelector(s).querySelectorAll("input, select").forEach(t=>{switch(t.tagName){case"SELECT":t.selectedIndex=0;break;default:switch(t.type){case"checkbox":t.checked=!1;break;case"submit":break;default:t.value=""}}}),d("#forms-container details",!1)}function J(t){t.preventDefault();const e=new FormData(t.target);_({todoId:e.get("todo-id"),title:e.get("todo-title"),description:e.get("todo-description"),dueDate:e.get("todo-due-date"),priority:e.get("todo-priority")})}function z(t,e){document.getElementById(t).value=e}function P(){document.querySelector("#create-project").addEventListener("submit",q),document.querySelector("#create-todo").addEventListener("submit",F),document.querySelector("#edit-todo").addEventListener("submit",J)}const R=[];function U(t){if("LI"===t.target.tagName){const{projectName:e}=t.target.dataset;L(e)}}function A(t){const e=document.createElement("li");return e.dataset.projectName=t,e.textContent=t,e}const $=new class{constructor(){this._project=null,this.domTodos=[],this.element=document.createElement("div"),this.header=document.createElement("h2"),this.todosContainer=document.createElement("div"),this.element.append(this.header,this.todosContainer),S("dom-project",(t,e)=>{e.subject===this._project&&this.updateTodos()})}appendTo(t){t.append(this.element)}createTodo(){const t=new M;this.domTodos.push(t),t.appendTo(this.todosContainer)}updateTodos(){if(!this._project)return;let t=0;for(this._project.forEach(e=>{t>=this.domTodos.length&&this.createTodo(),this.domTodos[t].display(e),t+=1});t<this.domTodos.length;)this.domTodos[t].hide(),t+=1;this.header.textContent=this._project.name}set project(t){this._project=t}},H={};let W=r;function G(t,{projectName:e}){if(H[e])return void L(e);const o=new N({name:e});H[e]=o,$.project=o,T(o),W=e}function K(t,{projectName:e}){$.project=H[e],T(H[e]),W=e}function Q(t,e){H[W].createTodo(e)}function V(t,{todoId:e}){H[W].removeTodo(e),T(H[W])}function X(t,{todoId:e}){var o;z("edit-id",(o=H[W].findById(e)).id),z("edit-title",o.title),z("edit-description",o.description),document.querySelector("#edit-completed").checked=o.completed,document.getElementById("edit-due-date").valueAsDate=o.dueDate,z("edit-priority",o.priority),s("#create-todo"),c("#edit-todo"),d("#forms-container details",!0)}function Y(t,e){H[W].findById(e.todoId).update(e),T(H[W]),c("#create-todo"),s("#edit-todo"),d("#forms-container details",!1)}function Z(){k(i,G),x(v,i,K),function(t,e){x(y,t,e)}(i,Q),function(t,e){x(j,t,e)}(i,V),function(t,e){x(w,t,e)}(i,X),function(t,e){x(b,t,e)}(i,Y)}Z(),$.appendTo(document.querySelector("#project-container")),P(),function(t){const e=document.querySelector("#projects-list");k("project-list",(t,{projectName:o})=>{if(R.includes(o))return;R.push(o);const r=A(o);e.append(r)});const o=document.createDocumentFragment();Object.keys(t).forEach(t=>{const e=A(t);o.append(e)}),e.append(o),e.addEventListener("click",U);const[r]=Object.keys(t);L(r)}(H),function(){const t={...localStorage};Object.keys(t).filter(t=>t.startsWith("osma-tlp-")).forEach(t=>{const e=t.replace("osma-tlp-","");H[e]=N.getFromLocalStorage(e),E(e)}),L(W)}(),E(r)}]);