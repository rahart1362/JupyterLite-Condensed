"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5531],{56657:(e,n,t)=>{t.r(n),t.d(n,{main:()=>j});var o=t(98793),r=t(63802),i=t(3152),s=(t(94101),t(94395),t(48808),t(75563),t(18934),t(24017),t(73100),t(36309),t(91532),t(20603),t(17363),t(9755),t(58169),t(35363),t(15055),t(56124),t(76838),t(53109),t(26129),t(98676),t(69226),t(3727),t(48004),t(24295),t(22090),t(58530),t(26053),t(84221),t(72762),t(87967),t(47275),t(73801),t(79589),t(39531),t(37814),t(45637),t(16388),t(37609),t(49733),t(74958),t(1892)),A=t.n(s),a=t(95760),l=t.n(a),c=t(38311),p=t.n(c),u=t(58192),h=t.n(u),d=t(38060),m=t.n(d),f=t(54865),x=t.n(f),C=t(12563),y={};y.styleTagTransform=x(),y.setAttributes=h(),y.insert=p().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=m(),A()(C.Z,y),C.Z&&C.Z.locals&&C.Z.locals,t(94453);var b=t(59988),I={};I.styleTagTransform=x(),I.setAttributes=h(),I.insert=p().bind(null,"head"),I.domAPI=l(),I.insertStyleElement=m(),A()(b.Z,I),b.Z&&b.Z.locals&&b.Z.locals;var E=t(1555),B={};B.styleTagTransform=x(),B.setAttributes=h(),B.insert=p().bind(null,"head"),B.domAPI=l(),B.insertStyleElement=m(),A()(E.Z,B),E.Z&&E.Z.locals&&E.Z.locals;var g=t(94298),v={};v.styleTagTransform=x(),v.setAttributes=h(),v.insert=p().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=m(),A()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;const T=[t.e(8764).then(t.t.bind(t,48764,23))],w=["@jupyterlab/apputils-extension:workspaces","@jupyterlab/application-extension:logo","@jupyterlab/application-extension:main","@jupyterlab/application-extension:tree-resolver","@jupyterlab/apputils-extension:announcements","@jupyterlab/apputils-extension:resolver","@jupyterlab/docmanager-extension:download","@jupyterlab/filebrowser-extension:download","@jupyterlab/filebrowser-extension:share-file","@jupyterlab/help-extension:about","@jupyterlite/notebook-application-extension:logo","@jupyterlite/notebook-application-extension:notify-commands"];async function O(e,n){try{return(await window._JUPYTERLAB[e].get(n))()}catch(t){throw console.warn(`Failed to create module: package: ${e}; module: ${n}`),t}}async function j(){const e=[],n=[],s=[],A=[],a=[],l=[],c=JSON.parse(i.PageConfig.getOption("federated_extensions")),p=new Set;function*u(e){let n;n=e.hasOwnProperty("__esModule")?e.default:e;let t=Array.isArray(n)?n:[n];for(let e of t)i.PageConfig.Extension.isDisabled(e.id)||w.includes(e.id)||w.includes(e.id.split(":")[0])||(yield e)}c.forEach((e=>{e.liteExtension?l.push(O(e.name,e.extension)):(e.extension&&(p.add(e.name),n.push(O(e.name,e.extension))),e.mimeExtension&&(p.add(e.name),s.push(O(e.name,e.mimeExtension))),e.style&&A.push(O(e.name,e.style)))}));const h=[];if(!p.has("@jupyterlab/json-extension"))try{let e=t(75911);for(let n of u(e))h.push(n)}catch(e){console.error(e)}if(!p.has("@jupyterlab/javascript-extension"))try{let e=t(87978);for(let n of u(e))h.push(n)}catch(e){console.error(e)}if(!p.has("@jupyterlab/mermaid-extension"))try{let e=t(21068);for(let n of u(e))h.push(n)}catch(e){console.error(e)}if(!p.has("@jupyterlab/pdf-extension"))try{let e=t(88485);for(let n of u(e))h.push(n)}catch(e){console.error(e)}if(!p.has("@jupyterlab/vega5-extension"))try{let e=t(45076);for(let n of u(e))h.push(n)}catch(e){console.error(e)}if(!p.has("@jupyterlite/iframe-extension"))try{let e=t(91970);for(let n of u(e))h.push(n)}catch(e){console.error(e)}if((await Promise.allSettled(s)).forEach((e=>{if("fulfilled"===e.status)for(let n of u(e.value))h.push(n);else console.error(e.reason)})),!p.has("@jupyterlab/application-extension"))try{let n=t(16284);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/apputils-extension"))try{let n=t(12211);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/cell-toolbar-extension"))try{let n=t(31806);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/celltags-extension"))try{let n=t(37015);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/codemirror-extension"))try{let n=t(53378);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/completer-extension"))try{let n=t(51494);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/console-extension"))try{let n=t(54615);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/csvviewer-extension"))try{let n=t(42820);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/docmanager-extension"))try{let n=t(15326);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/documentsearch-extension"))try{let n=t(25519);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/filebrowser-extension"))try{let n=t(62099);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/fileeditor-extension"))try{let n=t(75345);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/help-extension"))try{let n=t(16808);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/htmlviewer-extension"))try{let n=t(82693);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/imageviewer-extension"))try{let n=t(91637);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/inspector-extension"))try{let n=t(3889);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/launcher-extension"))try{let n=t(32336);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/logconsole-extension"))try{let n=t(40875);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/lsp-extension"))try{let n=t(99270);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/mainmenu-extension"))try{let n=t(33397);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/markdownviewer-extension"))try{let n=t(76058);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/markedparser-extension"))try{let n=t(45189);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/mathjax-extension"))try{let n=t(18368);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/mermaid-extension"))try{let n=t(82384);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/metadataform-extension"))try{let n=t(44721);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/notebook-extension"))try{let n=t(43259);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/rendermime-extension"))try{let n=t(75199);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/running-extension"))try{let n=t(13293);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/settingeditor-extension"))try{let n=t(62065);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/shortcuts-extension"))try{let n=t(28914);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/statusbar-extension"))try{let n=t(919);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/terminal-extension"))try{let n=t(41651);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/theme-dark-extension"))try{let n=t(71838);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/theme-dark-high-contrast-extension"))try{let n=t(76127);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/theme-light-extension"))try{let n=t(72436);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/toc-extension"))try{let n=t(18046);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/tooltip-extension"))try{let n=t(2236);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/translation-extension"))try{let n=t(34458);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlab/ui-components-extension"))try{let n=t(97936);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlite/application-extension"))try{let n=t(37800);for(let t of u(n))e.push(t)}catch(e){console.error(e)}if(!p.has("@jupyterlite/notebook-application-extension"))try{let n=t(95591);for(let t of u(n))e.push(t)}catch(e){console.error(e)}(await Promise.allSettled(n)).forEach((n=>{if("fulfilled"===n.status)for(let t of u(n.value))e.push(t);else console.error(n.reason)})),(await Promise.all(T)).forEach((e=>{for(let n of u(e))a.push(n)})),(await Promise.allSettled(l)).forEach((e=>{if("fulfilled"===e.status)for(let n of u(e.value))a.push(n);else console.error(e.reason)})),(await Promise.allSettled(A)).filter((({status:e})=>"rejected"===e)).forEach((({reason:e})=>{console.error(e)}));const d=new r.JupyterLiteServer({});d.registerPluginModules(a),await d.start();const{serviceManager:m}=d,f=new o.JupyterLab({mimeExtensions:h,serviceManager:m});f.name=i.PageConfig.getOption("appName")||"JupyterLite",f.registerPluginModules(e),"true"===(i.PageConfig.getOption("exposeAppInBrowser")||"").toLowerCase()&&(window.jupyterapp=f),await f.start(),await f.restored}},90929:(e,n,t)=>{t.d(n,{Z:()=>A});var o=t(20559),r=t.n(o),i=t(93476),s=t.n(i)()(r());s.push([e.id,'/**\n * Copyright (c) 2014 The xterm.js authors. All rights reserved.\n * Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)\n * https://github.com/chjj/term.js\n * @license MIT\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the "Software"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n *\n * Originally forked from (with the author\'s permission):\n *   Fabrice Bellard\'s javascript vt100 for jslinux:\n *   http://bellard.org/jslinux/\n *   Copyright (c) 2011 Fabrice Bellard\n *   The original design remains. The terminal itself\n *   has been extended to include xterm CSI codes, among\n *   other features.\n */\n\n/**\n *  Default styles for xterm.js\n */\n\n.xterm {\n    cursor: text;\n    position: relative;\n    user-select: none;\n    -ms-user-select: none;\n    -webkit-user-select: none;\n}\n\n.xterm.focus,\n.xterm:focus {\n    outline: none;\n}\n\n.xterm .xterm-helpers {\n    position: absolute;\n    top: 0;\n    /**\n     * The z-index of the helpers must be higher than the canvases in order for\n     * IMEs to appear on top.\n     */\n    z-index: 5;\n}\n\n.xterm .xterm-helper-textarea {\n    padding: 0;\n    border: 0;\n    margin: 0;\n    /* Move textarea out of the screen to the far left, so that the cursor is not visible */\n    position: absolute;\n    opacity: 0;\n    left: -9999em;\n    top: 0;\n    width: 0;\n    height: 0;\n    z-index: -5;\n    /** Prevent wrapping so the IME appears against the textarea at the correct position */\n    white-space: nowrap;\n    overflow: hidden;\n    resize: none;\n}\n\n.xterm .composition-view {\n    /* TODO: Composition position got messed up somewhere */\n    background: #000;\n    color: #FFF;\n    display: none;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 1;\n}\n\n.xterm .composition-view.active {\n    display: block;\n}\n\n.xterm .xterm-viewport {\n    /* On OS X this is required in order for the scroll bar to appear fully opaque */\n    background-color: #000;\n    overflow-y: scroll;\n    cursor: default;\n    position: absolute;\n    right: 0;\n    left: 0;\n    top: 0;\n    bottom: 0;\n}\n\n.xterm .xterm-screen {\n    position: relative;\n}\n\n.xterm .xterm-screen canvas {\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n\n.xterm .xterm-scroll-area {\n    visibility: hidden;\n}\n\n.xterm-char-measure-element {\n    display: inline-block;\n    visibility: hidden;\n    position: absolute;\n    top: 0;\n    left: -9999em;\n    line-height: normal;\n}\n\n.xterm.enable-mouse-events {\n    /* When mouse events are enabled (eg. tmux), revert to the standard pointer cursor */\n    cursor: default;\n}\n\n.xterm.xterm-cursor-pointer,\n.xterm .xterm-cursor-pointer {\n    cursor: pointer;\n}\n\n.xterm.column-select.focus {\n    /* Column selection mode */\n    cursor: crosshair;\n}\n\n.xterm .xterm-accessibility:not(.debug),\n.xterm .xterm-message {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 10;\n    color: transparent;\n    pointer-events: none;\n}\n\n.xterm .xterm-accessibility-tree:not(.debug) *::selection {\n  color: transparent;\n}\n\n.xterm .xterm-accessibility-tree {\n  user-select: text;\n  white-space: pre;\n}\n\n.xterm .live-region {\n    position: absolute;\n    left: -9999px;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n}\n\n.xterm-dim {\n    /* Dim should not apply to background, so the opacity of the foreground color is applied\n     * explicitly in the generated class and reset to 1 here */\n    opacity: 1 !important;\n}\n\n.xterm-underline-1 { text-decoration: underline; }\n.xterm-underline-2 { text-decoration: double underline; }\n.xterm-underline-3 { text-decoration: wavy underline; }\n.xterm-underline-4 { text-decoration: dotted underline; }\n.xterm-underline-5 { text-decoration: dashed underline; }\n\n.xterm-overline {\n    text-decoration: overline;\n}\n\n.xterm-overline.xterm-underline-1 { text-decoration: overline underline; }\n.xterm-overline.xterm-underline-2 { text-decoration: overline double underline; }\n.xterm-overline.xterm-underline-3 { text-decoration: overline wavy underline; }\n.xterm-overline.xterm-underline-4 { text-decoration: overline dotted underline; }\n.xterm-overline.xterm-underline-5 { text-decoration: overline dashed underline; }\n\n.xterm-strikethrough {\n    text-decoration: line-through;\n}\n\n.xterm-screen .xterm-decoration-container .xterm-decoration {\n\tz-index: 6;\n\tposition: absolute;\n}\n\n.xterm-screen .xterm-decoration-container .xterm-decoration.xterm-decoration-top-layer {\n\tz-index: 7;\n}\n\n.xterm-decoration-overview-ruler {\n    z-index: 8;\n    position: absolute;\n    top: 0;\n    right: 0;\n    pointer-events: none;\n}\n\n.xterm-decoration-top {\n    z-index: 2;\n    position: relative;\n}\n',"",{version:3,sources:["webpack://./../node_modules/@xterm/xterm/css/xterm.css"],names:[],mappings:"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA+BE;;AAEF;;EAEE;;AAEF;IACI,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN;;;MAGE;IACF,UAAU;AACd;;AAEA;IACI,UAAU;IACV,SAAS;IACT,SAAS;IACT,uFAAuF;IACvF,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,MAAM;IACN,QAAQ;IACR,SAAS;IACT,WAAW;IACX,sFAAsF;IACtF,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,uDAAuD;IACvD,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,gFAAgF;IAChF,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,QAAQ;IACR,OAAO;IACP,MAAM;IACN,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,MAAM;AACV;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,kBAAkB;IAClB,MAAM;IACN,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,oFAAoF;IACpF,eAAe;AACnB;;AAEA;;IAEI,eAAe;AACnB;;AAEA;IACI,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;;IAEI,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,SAAS;IACT,QAAQ;IACR,WAAW;IACX,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,UAAU;IACV,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI;8DAC0D;IAC1D,qBAAqB;AACzB;;AAEA,qBAAqB,0BAA0B,EAAE;AACjD,qBAAqB,iCAAiC,EAAE;AACxD,qBAAqB,+BAA+B,EAAE;AACtD,qBAAqB,iCAAiC,EAAE;AACxD,qBAAqB,iCAAiC,EAAE;;AAExD;IACI,yBAAyB;AAC7B;;AAEA,oCAAoC,mCAAmC,EAAE;AACzE,oCAAoC,0CAA0C,EAAE;AAChF,oCAAoC,wCAAwC,EAAE;AAC9E,oCAAoC,0CAA0C,EAAE;AAChF,oCAAoC,0CAA0C,EAAE;;AAEhF;IACI,6BAA6B;AACjC;;AAEA;CACC,UAAU;CACV,kBAAkB;AACnB;;AAEA;CACC,UAAU;AACX;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,oBAAoB;AACxB;;AAEA;IACI,UAAU;IACV,kBAAkB;AACtB",sourcesContent:['/**\n * Copyright (c) 2014 The xterm.js authors. All rights reserved.\n * Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)\n * https://github.com/chjj/term.js\n * @license MIT\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the "Software"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n *\n * Originally forked from (with the author\'s permission):\n *   Fabrice Bellard\'s javascript vt100 for jslinux:\n *   http://bellard.org/jslinux/\n *   Copyright (c) 2011 Fabrice Bellard\n *   The original design remains. The terminal itself\n *   has been extended to include xterm CSI codes, among\n *   other features.\n */\n\n/**\n *  Default styles for xterm.js\n */\n\n.xterm {\n    cursor: text;\n    position: relative;\n    user-select: none;\n    -ms-user-select: none;\n    -webkit-user-select: none;\n}\n\n.xterm.focus,\n.xterm:focus {\n    outline: none;\n}\n\n.xterm .xterm-helpers {\n    position: absolute;\n    top: 0;\n    /**\n     * The z-index of the helpers must be higher than the canvases in order for\n     * IMEs to appear on top.\n     */\n    z-index: 5;\n}\n\n.xterm .xterm-helper-textarea {\n    padding: 0;\n    border: 0;\n    margin: 0;\n    /* Move textarea out of the screen to the far left, so that the cursor is not visible */\n    position: absolute;\n    opacity: 0;\n    left: -9999em;\n    top: 0;\n    width: 0;\n    height: 0;\n    z-index: -5;\n    /** Prevent wrapping so the IME appears against the textarea at the correct position */\n    white-space: nowrap;\n    overflow: hidden;\n    resize: none;\n}\n\n.xterm .composition-view {\n    /* TODO: Composition position got messed up somewhere */\n    background: #000;\n    color: #FFF;\n    display: none;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 1;\n}\n\n.xterm .composition-view.active {\n    display: block;\n}\n\n.xterm .xterm-viewport {\n    /* On OS X this is required in order for the scroll bar to appear fully opaque */\n    background-color: #000;\n    overflow-y: scroll;\n    cursor: default;\n    position: absolute;\n    right: 0;\n    left: 0;\n    top: 0;\n    bottom: 0;\n}\n\n.xterm .xterm-screen {\n    position: relative;\n}\n\n.xterm .xterm-screen canvas {\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n\n.xterm .xterm-scroll-area {\n    visibility: hidden;\n}\n\n.xterm-char-measure-element {\n    display: inline-block;\n    visibility: hidden;\n    position: absolute;\n    top: 0;\n    left: -9999em;\n    line-height: normal;\n}\n\n.xterm.enable-mouse-events {\n    /* When mouse events are enabled (eg. tmux), revert to the standard pointer cursor */\n    cursor: default;\n}\n\n.xterm.xterm-cursor-pointer,\n.xterm .xterm-cursor-pointer {\n    cursor: pointer;\n}\n\n.xterm.column-select.focus {\n    /* Column selection mode */\n    cursor: crosshair;\n}\n\n.xterm .xterm-accessibility:not(.debug),\n.xterm .xterm-message {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 10;\n    color: transparent;\n    pointer-events: none;\n}\n\n.xterm .xterm-accessibility-tree:not(.debug) *::selection {\n  color: transparent;\n}\n\n.xterm .xterm-accessibility-tree {\n  user-select: text;\n  white-space: pre;\n}\n\n.xterm .live-region {\n    position: absolute;\n    left: -9999px;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n}\n\n.xterm-dim {\n    /* Dim should not apply to background, so the opacity of the foreground color is applied\n     * explicitly in the generated class and reset to 1 here */\n    opacity: 1 !important;\n}\n\n.xterm-underline-1 { text-decoration: underline; }\n.xterm-underline-2 { text-decoration: double underline; }\n.xterm-underline-3 { text-decoration: wavy underline; }\n.xterm-underline-4 { text-decoration: dotted underline; }\n.xterm-underline-5 { text-decoration: dashed underline; }\n\n.xterm-overline {\n    text-decoration: overline;\n}\n\n.xterm-overline.xterm-underline-1 { text-decoration: overline underline; }\n.xterm-overline.xterm-underline-2 { text-decoration: overline double underline; }\n.xterm-overline.xterm-underline-3 { text-decoration: overline wavy underline; }\n.xterm-overline.xterm-underline-4 { text-decoration: overline dotted underline; }\n.xterm-overline.xterm-underline-5 { text-decoration: overline dashed underline; }\n\n.xterm-strikethrough {\n    text-decoration: line-through;\n}\n\n.xterm-screen .xterm-decoration-container .xterm-decoration {\n\tz-index: 6;\n\tposition: absolute;\n}\n\n.xterm-screen .xterm-decoration-container .xterm-decoration.xterm-decoration-top-layer {\n\tz-index: 7;\n}\n\n.xterm-decoration-overview-ruler {\n    z-index: 8;\n    position: absolute;\n    top: 0;\n    right: 0;\n    pointer-events: none;\n}\n\n.xterm-decoration-top {\n    z-index: 2;\n    position: relative;\n}\n'],sourceRoot:""}]);const A=s},12563:(e,n,t)=>{t.d(n,{Z:()=>A});var o=t(20559),r=t.n(o),i=t(93476),s=t.n(i)()(r());s.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../packages/application-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const A=s},59988:(e,n,t)=>{t.d(n,{Z:()=>A});var o=t(20559),r=t.n(o),i=t(93476),s=t.n(i)()(r());s.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-IFrameContainer iframe,\n.jp-IFrameContainer body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  border: none;\n}\n","",{version:3,sources:["webpack://./../packages/iframe-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E;;AAE9E;;EAEE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,YAAY;AACd",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-IFrameContainer iframe,\n.jp-IFrameContainer body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  border: none;\n}\n"],sourceRoot:""}]);const A=s},1555:(e,n,t)=>{t.d(n,{Z:()=>A});var o=t(20559),r=t.n(o),i=t(93476),s=t.n(i)()(r());s.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../packages/notebook-application-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const A=s},94298:(e,n,t)=>{t.d(n,{Z:()=>A});var o=t(20559),r=t.n(o),i=t(93476),s=t.n(i)()(r());s.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../packages/server-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const A=s},36566:(e,n,t)=>{var o=t(1892),r=t.n(o),i=t(95760),s=t.n(i),A=t(38311),a=t.n(A),l=t(58192),c=t.n(l),p=t(38060),u=t.n(p),h=t(54865),d=t.n(h),m=t(90929),f={};f.styleTagTransform=d(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=u(),r()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals},7413:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVQIHQGlAFr/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7+r3zKmT0/+pk9P/7+r3zAAAAAAAAAAABAAAAAAAAAAA6OPzM+/q9wAAAAAA6OPzMwAAAAAAAAAAAgAAAAAAAAAAGR8NiRQaCgAZIA0AGR8NiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQyoYJ/SY80UAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=5531.e18f794.js.map