"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5013],{82101:(e,t,n)=>{n.r(t),n.d(t,{main:()=>P});var o=n(33572),r=n(63802),s=n(3152),a=(n(94101),n(94395),n(18934),n(24017),n(73100),n(91532),n(15055),n(76838),n(53109),n(48004),n(24295),n(22090),n(72762),n(87967),n(79589),n(16388),n(37609),n(49733),n(74958),n(58169),n(1892)),i=n.n(a),l=n(95760),A=n.n(l),p=n(38311),u=n.n(p),c=n(58192),h=n.n(c),d=n(38060),f=n.n(d),y=n(54865),m=n.n(y),b=n(12563),g={};g.styleTagTransform=m(),g.setAttributes=h(),g.insert=u().bind(null,"head"),g.domAPI=A(),g.insertStyleElement=f(),i()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals,n(94453);var j=n(59988),x={};x.styleTagTransform=m(),x.setAttributes=h(),x.insert=u().bind(null,"head"),x.domAPI=A(),x.insertStyleElement=f(),i()(j.Z,x),j.Z&&j.Z.locals&&j.Z.locals,n(87821);var E=n(21025),C={};C.styleTagTransform=m(),C.setAttributes=h(),C.insert=u().bind(null,"head"),C.domAPI=A(),C.insertStyleElement=f(),i()(E.Z,C),E.Z&&E.Z.locals&&E.Z.locals;var w=n(84035),v={};v.styleTagTransform=m(),v.setAttributes=h(),v.insert=u().bind(null,"head"),v.domAPI=A(),v.insertStyleElement=f(),i()(w.Z,v),w.Z&&w.Z.locals&&w.Z.locals;var B=n(94298),k={};k.styleTagTransform=m(),k.setAttributes=h(),k.insert=u().bind(null,"head"),k.domAPI=A(),k.insertStyleElement=f(),i()(B.Z,k),B.Z&&B.Z.locals&&B.Z.locals;const S=[n.e(8764).then(n.t.bind(n,48764,23))],D=["@jupyterlab/application-extension:dirty","@jupyterlab/application-extension:info","@jupyterlab/application-extension:layout","@jupyterlab/application-extension:logo","@jupyterlab/application-extension:main","@jupyterlab/application-extension:mode-switch","@jupyterlab/application-extension:notfound","@jupyterlab/application-extension:paths","@jupyterlab/application-extension:property-inspector","@jupyterlab/application-extension:router","@jupyterlab/application-extension:shell","@jupyterlab/application-extension:status","@jupyterlab/application-extension:top-bar","@jupyterlab/application-extension:tree-resolver","@jupyterlab/application:mimedocument","@jupyterlab/apputils-extension:announcements","@jupyterlab/apputils-extension:kernel-status","@jupyterlab/apputils-extension:palette-restorer","@jupyterlab/apputils-extension:print","@jupyterlab/apputils-extension:resolver","@jupyterlab/apputils-extension:running-sessions-status","@jupyterlab/apputils-extension:sanitizer","@jupyterlab/apputils-extension:splash","@jupyterlab/apputils-extension:toggle-header","@jupyterlab/apputils-extension:workspaces","@jupyterlab/console-extension:kernel-status","@jupyterlab/docmanager-extension:download","@jupyterlab/docmanager-extension:open-browser-tab","@jupyterlab/docmanager-extension:path-status","@jupyterlab/docmanager-extension:saving-status","@jupyterlab/tooltip-extension:files","@jupyterlab/tooltip-extension:notebooks","@jupyterlite/application-extension:share-file"];async function T(e,t){try{return(await window._JUPYTERLAB[e].get(t))()}catch(n){throw console.warn(`Failed to create module: package: ${e}; module: ${t}`),n}}async function P(){const e=[],t=[],a=[],i=[],l=[],A=[],p=JSON.parse(s.PageConfig.getOption("federated_extensions")),u=new Set;function*c(e){let t;t=e.hasOwnProperty("__esModule")?e.default:e;let n=Array.isArray(t)?t:[t];for(let e of n)s.PageConfig.Extension.isDisabled(e.id)||D.includes(e.id)||D.includes(e.id.split(":")[0])||(yield e)}p.forEach((e=>{e.liteExtension?A.push(T(e.name,e.extension)):(e.extension&&(u.add(e.name),t.push(T(e.name,e.extension))),e.mimeExtension&&(u.add(e.name),a.push(T(e.name,e.mimeExtension))),e.style&&i.push(T(e.name,e.style)))}));const h=[];if(!u.has("@jupyterlab/json-extension"))try{let e=n(75911);for(let t of c(e))h.push(t)}catch(e){console.error(e)}if(!u.has("@jupyterlab/javascript-extension"))try{let e=n(87978);for(let t of c(e))h.push(t)}catch(e){console.error(e)}if(!u.has("@jupyterlab/pdf-extension"))try{let e=n(88485);for(let t of c(e))h.push(t)}catch(e){console.error(e)}if(!u.has("@jupyterlab/vega5-extension"))try{let e=n(45076);for(let t of c(e))h.push(t)}catch(e){console.error(e)}if(!u.has("@jupyterlite/iframe-extension"))try{let e=n(91970);for(let t of c(e))h.push(t)}catch(e){console.error(e)}if((await Promise.allSettled(a)).forEach((e=>{if("fulfilled"===e.status)for(let t of c(e.value))h.push(t);else console.error(e.reason)})),!u.has("@jupyterlab/application-extension"))try{let t=n(16284);for(let n of c(t))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/apputils-extension"))try{let t=n(12211);for(let n of c(t))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/codemirror-extension"))try{let t=n(53378);for(let n of c(t))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/completer-extension"))try{let t=n(51494);for(let n of c(t))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/console-extension"))try{let t=n(54615);for(let n of c(t))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/docmanager-extension"))try{let t=n(15326);for(let n of c(t))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/imageviewer-extension"))try{let t=n(91637);for(let n of c(t))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/markedparser-extension"))try{let t=n(45189);for(let n of c(t))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/markdownviewer-extension"))try{let t=n(76058);for(let n of c(t))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/mathjax-extension"))try{let t=n(18368);for(let n of c(t))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/rendermime-extension"))try{let t=n(75199);for(let n of c(t))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/shortcuts-extension"))try{let t=n(28914);for(let n of c(t))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/theme-dark-extension"))try{let t=n(71838);for(let n of c(t))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/theme-dark-high-contrast-extension"))try{let t=n(76127);for(let n of c(t))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/theme-light-extension"))try{let t=n(72436);for(let n of c(t))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/tooltip-extension"))try{let t=n(2236);for(let n of c(t))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/translation-extension"))try{let t=n(34458);for(let n of c(t))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/ui-components-extension"))try{let t=n(97936);for(let n of c(t))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlite/application-extension"))try{let t=n(37800);for(let n of c(t))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlite/repl-extension"))try{let t=n(77609);for(let n of c(t))e.push(n)}catch(e){console.error(e)}(await Promise.allSettled(t)).forEach((t=>{if("fulfilled"===t.status)for(let n of c(t.value))e.push(n);else console.error(t.reason)})),(await Promise.all(S)).forEach((e=>{for(let t of c(e))l.push(t)})),(await Promise.allSettled(A)).forEach((e=>{if("fulfilled"===e.status)for(let t of c(e.value))l.push(t);else console.error(e.reason)})),(await Promise.allSettled(i)).filter((({status:e})=>"rejected"===e)).forEach((({reason:e})=>{console.error(e)}));const d=new r.JupyterLiteServer({});d.registerPluginModules(l),await d.start();const{serviceManager:f}=d,y=new o.SingleWidgetApp({mimeExtensions:h,serviceManager:f});y.name=s.PageConfig.getOption("appName")||"JupyterLite",y.registerPluginModules(e),"true"===(s.PageConfig.getOption("exposeAppInBrowser")||"").toLowerCase()&&(window.jupyterapp=y),await y.start(),await y.restored}},12563:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(20559),r=n.n(o),s=n(93476),a=n.n(s)()(r());a.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../packages/application-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const i=a},21025:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(20559),r=n.n(o),s=n(93476),a=n.n(s)()(r());a.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--jp-layout-color2);\n}\n\n#main {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#single-widget-panel {\n  height: 100%;\n}\n","",{version:3,sources:["webpack://./../packages/application/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E;;AAE9E;EACE,SAAS;EACT,UAAU;EACV,mCAAmC;AACrC;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,YAAY;AACd",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--jp-layout-color2);\n}\n\n#main {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#single-widget-panel {\n  height: 100%;\n}\n"],sourceRoot:""}]);const i=a},59988:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(20559),r=n.n(o),s=n(93476),a=n.n(s)()(r());a.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-IFrameContainer iframe,\n.jp-IFrameContainer body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  border: none;\n}\n","",{version:3,sources:["webpack://./../packages/iframe-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E;;AAE9E;;EAEE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,YAAY;AACd",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-IFrameContainer iframe,\n.jp-IFrameContainer body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  border: none;\n}\n"],sourceRoot:""}]);const i=a},84035:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(20559),r=n.n(o),s=n(93476),a=n.n(s)()(r());a.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-CodeConsole-promptCell .jp-InputPrompt {\n  margin-right: 10px;\n}\n\n.jp-CodeConsole-input .jp-InputCollapser {\n  display: none;\n}\n\n.jp-InputArea {\n  flex-direction: row;\n}\n\n.jp-InputArea-editor,\n.jp-OutputArea-child .jp-OutputArea-output {\n  margin-left: unset;\n}\n\n.jp-OutputArea-child {\n  flex-direction: row;\n}\n\n.jp-MainAreaWidget {\n  height: 100%;\n}\n","",{version:3,sources:["webpack://./../packages/repl-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E;;AAE9E;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-CodeConsole-promptCell .jp-InputPrompt {\n  margin-right: 10px;\n}\n\n.jp-CodeConsole-input .jp-InputCollapser {\n  display: none;\n}\n\n.jp-InputArea {\n  flex-direction: row;\n}\n\n.jp-InputArea-editor,\n.jp-OutputArea-child .jp-OutputArea-output {\n  margin-left: unset;\n}\n\n.jp-OutputArea-child {\n  flex-direction: row;\n}\n\n.jp-MainAreaWidget {\n  height: 100%;\n}\n"],sourceRoot:""}]);const i=a},94298:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(20559),r=n.n(o),s=n(93476),a=n.n(s)()(r());a.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../packages/server-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const i=a},7413:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVQIHQGlAFr/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7+r3zKmT0/+pk9P/7+r3zAAAAAAAAAAABAAAAAAAAAAA6OPzM+/q9wAAAAAA6OPzMwAAAAAAAAAAAgAAAAAAAAAAGR8NiRQaCgAZIA0AGR8NiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQyoYJ/SY80UAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=5013.7087178.js.map