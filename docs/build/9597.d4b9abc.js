"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[9597],{98125:(e,t,o)=>{o.r(t),o.d(t,{main:()=>T});var r=o(62408),n=o(63802),s=o(3152),a=(o(11555),o(29486),o(65573),o(94101),o(94395),o(48808),o(18934),o(24017),o(73100),o(91532),o(20603),o(17363),o(9755),o(58169),o(76838),o(53109),o(69226),o(3727),o(22090),o(58530),o(26053),o(84221),o(87967),o(79589),o(45637),o(16388),o(37609),o(49733),o(74958),o(1892)),i=o.n(a),l=o(95760),p=o.n(l),c=o(38311),A=o.n(c),u=o(58192),h=o.n(u),f=o(38060),y=o.n(f),d=o(54865),b=o.n(d),m=o(12563),x={};x.styleTagTransform=b(),x.setAttributes=h(),x.insert=A().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=y(),i()(m.Z,x),m.Z&&m.Z.locals&&m.Z.locals,o(94453);var j=o(59988),g={};g.styleTagTransform=b(),g.setAttributes=h(),g.insert=A().bind(null,"head"),g.domAPI=p(),g.insertStyleElement=y(),i()(j.Z,g),j.Z&&j.Z.locals&&j.Z.locals;var w=o(1555),E={};E.styleTagTransform=b(),E.setAttributes=h(),E.insert=A().bind(null,"head"),E.domAPI=p(),E.insertStyleElement=y(),i()(w.Z,E),w.Z&&w.Z.locals&&w.Z.locals;var v=o(94298),k={};k.styleTagTransform=b(),k.setAttributes=h(),k.insert=A().bind(null,"head"),k.domAPI=p(),k.insertStyleElement=y(),i()(v.Z,k),v.Z&&v.Z.locals&&v.Z.locals;const C=[o.e(8764).then(o.t.bind(o,48764,23))],D=["@jupyterlab/application-extension:dirty","@jupyterlab/application-extension:info","@jupyterlab/application-extension:layout","@jupyterlab/application-extension:logo","@jupyterlab/application-extension:main","@jupyterlab/application-extension:mode-switch","@jupyterlab/application-extension:notfound","@jupyterlab/application-extension:paths","@jupyterlab/application-extension:property-inspector","@jupyterlab/application-extension:shell","@jupyterlab/application-extension:status","@jupyterlab/application-extension:tree-resolver","@jupyterlab/apputils-extension:announcements","@jupyterlab/apputils-extension:kernel-status","@jupyterlab/apputils-extension:palette-restorer","@jupyterlab/apputils-extension:print","@jupyterlab/apputils-extension:resolver","@jupyterlab/apputils-extension:running-sessions-status","@jupyterlab/apputils-extension:splash","@jupyterlab/apputils-extension:workspaces","@jupyterlab/console-extension:kernel-status","@jupyterlab/docmanager-extension:download","@jupyterlab/docmanager-extension:opener","@jupyterlab/docmanager-extension:path-status","@jupyterlab/docmanager-extension:saving-status","@jupyterlab/documentsearch-extension:labShellWidgetListener","@jupyterlab/filebrowser-extension:browser","@jupyterlab/filebrowser-extension:download","@jupyterlab/filebrowser-extension:file-upload-status","@jupyterlab/filebrowser-extension:open-with","@jupyterlab/filebrowser-extension:share-file","@jupyterlab/filebrowser-extension:widget","@jupyterlab/fileeditor-extension:editor-syntax-status","@jupyterlab/fileeditor-extension:language-server","@jupyterlab/fileeditor-extension:search","@jupyterlab/help-extension:about","@jupyterlab/help-extension:open","@jupyterlab/notebook-extension:execution-indicator","@jupyterlab/notebook-extension:kernel-status","@jupyter-notebook/application-extension:logo","@jupyter-notebook/application-extension:opener","@jupyter-notebook/application-extension:path-opener","@jupyter-notebook/help-extension:about"];async function S(e,t){try{return(await window._JUPYTERLAB[e].get(t))()}catch(o){throw console.warn(`Failed to create module: package: ${e}; module: ${t}`),o}}async function T(){const e=[],t=[],a=[],i=[],l=[],p=[],c=JSON.parse(s.PageConfig.getOption("federated_extensions")),A=new Set;function*u(e){let t;t=e.hasOwnProperty("__esModule")?e.default:e;let o=Array.isArray(t)?t:[t];for(let e of o)s.PageConfig.Extension.isDisabled(e.id)||D.includes(e.id)||D.includes(e.id.split(":")[0])||(yield e)}c.forEach((e=>{e.liteExtension?p.push(S(e.name,e.extension)):(e.extension&&(A.add(e.name),t.push(S(e.name,e.extension))),e.mimeExtension&&(A.add(e.name),a.push(S(e.name,e.mimeExtension))),e.style&&i.push(S(e.name,e.style)))}));const h=[];if(!A.has("@jupyterlab/javascript-extension"))try{let e=o(87978);for(let t of u(e))h.push(t)}catch(e){console.error(e)}if(!A.has("@jupyterlab/json-extension"))try{let e=o(75911);for(let t of u(e))h.push(t)}catch(e){console.error(e)}if(!A.has("@jupyterlab/mermaid-extension"))try{let e=o(21068);for(let t of u(e))h.push(t)}catch(e){console.error(e)}if(!A.has("@jupyterlab/vega5-extension"))try{let e=o(45076);for(let t of u(e))h.push(t)}catch(e){console.error(e)}if(!A.has("@jupyterlite/iframe-extension"))try{let e=o(91970);for(let t of u(e))h.push(t)}catch(e){console.error(e)}if((await Promise.allSettled(a)).forEach((e=>{if("fulfilled"===e.status)for(let t of u(e.value))h.push(t);else console.error(e.reason)})),!A.has("@jupyterlab/application-extension"))try{let t=o(16284);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/apputils-extension"))try{let t=o(12211);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/cell-toolbar-extension"))try{let t=o(31806);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/codemirror-extension"))try{let t=o(53378);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/completer-extension"))try{let t=o(51494);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/console-extension"))try{let t=o(54615);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/docmanager-extension"))try{let t=o(15326);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/documentsearch-extension"))try{let t=o(25519);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/filebrowser-extension"))try{let t=o(62099);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/fileeditor-extension"))try{let t=o(75345);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/help-extension"))try{let t=o(16808);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/lsp-extension"))try{let t=o(99270);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/mainmenu-extension"))try{let t=o(33397);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/mathjax-extension"))try{let t=o(18368);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/mermaid-extension"))try{let t=o(82384);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/metadataform-extension"))try{let t=o(44721);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/notebook-extension"))try{let t=o(43259);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/rendermime-extension"))try{let t=o(75199);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/shortcuts-extension"))try{let t=o(28914);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/theme-dark-extension"))try{let t=o(71838);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/theme-dark-high-contrast-extension"))try{let t=o(76127);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/theme-light-extension"))try{let t=o(72436);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/toc-extension"))try{let t=o(18046);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/tooltip-extension"))try{let t=o(2236);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/translation-extension"))try{let t=o(34458);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlab/ui-components-extension"))try{let t=o(97936);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyter-notebook/application-extension"))try{let t=o(99537);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyter-notebook/docmanager-extension"))try{let t=o(75444);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyter-notebook/help-extension"))try{let t=o(96026);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlite/application-extension"))try{let t=o(37800);for(let o of u(t))e.push(o)}catch(e){console.error(e)}if(!A.has("@jupyterlite/notebook-application-extension"))try{let t=o(95591);for(let o of u(t))e.push(o)}catch(e){console.error(e)}(await Promise.allSettled(t)).forEach((t=>{if("fulfilled"===t.status)for(let o of u(t.value))e.push(o);else console.error(t.reason)})),(await Promise.all(C)).forEach((e=>{for(let t of u(e))l.push(t)})),(await Promise.allSettled(p)).forEach((e=>{if("fulfilled"===e.status)for(let t of u(e.value))l.push(t);else console.error(e.reason)})),(await Promise.allSettled(i)).filter((({status:e})=>"rejected"===e)).forEach((({reason:e})=>{console.error(e)}));const f=new n.JupyterLiteServer({});f.registerPluginModules(l),await f.start();const{serviceManager:y}=f,d=new r.NotebookApp({mimeExtensions:h,serviceManager:y});d.name=s.PageConfig.getOption("appName")||"JupyterLite",d.registerPluginModules(e),"true"===(s.PageConfig.getOption("exposeAppInBrowser")||"").toLowerCase()&&(window.jupyterapp=d),await d.start(),await d.restored}},12563:(e,t,o)=>{o.d(t,{Z:()=>i});var r=o(20559),n=o.n(r),s=o(93476),a=o.n(s)()(n());a.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../packages/application-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const i=a},59988:(e,t,o)=>{o.d(t,{Z:()=>i});var r=o(20559),n=o.n(r),s=o(93476),a=o.n(s)()(n());a.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-IFrameContainer iframe,\n.jp-IFrameContainer body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  border: none;\n}\n","",{version:3,sources:["webpack://./../packages/iframe-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E;;AAE9E;;EAEE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,YAAY;AACd",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-IFrameContainer iframe,\n.jp-IFrameContainer body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  border: none;\n}\n"],sourceRoot:""}]);const i=a},1555:(e,t,o)=>{o.d(t,{Z:()=>i});var r=o(20559),n=o.n(r),s=o(93476),a=o.n(s)()(n());a.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../packages/notebook-application-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const i=a},94298:(e,t,o)=>{o.d(t,{Z:()=>i});var r=o(20559),n=o.n(r),s=o(93476),a=o.n(s)()(n());a.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../packages/server-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const i=a},7413:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVQIHQGlAFr/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7+r3zKmT0/+pk9P/7+r3zAAAAAAAAAAABAAAAAAAAAAA6OPzM+/q9wAAAAAA6OPzMwAAAAAAAAAAAgAAAAAAAAAAGR8NiRQaCgAZIA0AGR8NiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQyoYJ/SY80UAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=9597.d4b9abc.js.map