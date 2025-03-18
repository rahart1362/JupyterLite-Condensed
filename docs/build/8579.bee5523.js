"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8579,3694],{88579:(e,t,o)=>{o.r(t),o.d(t,{default:()=>_});var a=o(98793),n=o(31962),r=o(3152),i=o(14098),c=o(91953),l=o(50239),s=o(3635),d=o(11148),p=o(83373),m=o(9193),u=o(14931),g=o(63367),h=o(52850),f=o.n(h);const y=new RegExp("/(lab|tree|notebooks|edit|consoles)\\/?");var b;!function(e){e.about="application:about",e.docmanagerDownload="docmanager:download",e.filebrowserDownload="filebrowser:download",e.copyShareableLink="filebrowser:share-main"}(b||(b={}));const w="jupyterlite",_=[{id:"@jupyterlite/application-extension:about",autoStart:!0,requires:[d.ITranslator],optional:[n.ICommandPalette,l.IMainMenu],activate:(e,t,o,a)=>{const{commands:r}=e,i=t.load(w),c=i.__("Help");r.addCommand(b.about,{label:i.__("About %1",e.name),execute:()=>{const t=i.__("Version %1",e.version),o=f().createElement("span",{className:"jp-About-version-info"},f().createElement("span",{className:"jp-About-version"},t)),a=f().createElement("span",{className:"jp-About-header"},f().createElement("div",{className:"jp-About-header-info"},f().createElement(m.liteWordmark.react,{height:"auto",width:"196px"}),o)),r=f().createElement("span",{className:"jp-About-externalLinks"},f().createElement("a",{href:"https://github.com/jupyterlite/jupyterlite/graphs/contributors",target:"_blank",rel:"noopener noreferrer",className:"jp-Button-flat"},i.__("CONTRIBUTOR LIST")),f().createElement("a",{href:"https://github.com/jupyterlite/jupyterlite",target:"_blank",rel:"noopener noreferrer",className:"jp-Button-flat"},i.__("JUPYTERLITE ON GITHUB"))),c=f().createElement("span",{className:"jp-About-copyright"},i.__("© 2021-2022 JupyterLite Contributors")),l=f().createElement("div",{className:"jp-About-body"},r,c);return(0,n.showDialog)({title:a,body:l,buttons:[n.Dialog.createButton({label:i.__("Dismiss"),className:"jp-About-button jp-mod-reject jp-mod-styled"})]})}}),o&&o.addItem({command:b.about,category:c}),a&&a.helpMenu.addGroup([{command:b.about}],0)}},{id:"@jupyterlite/application-extension:download",autoStart:!0,requires:[d.ITranslator,i.IDocumentManager],optional:[n.ICommandPalette,c.IFileBrowserFactory],activate:(e,t,o,a,r)=>{const i=t.load(w),{commands:c,serviceManager:l,shell:s}=e,{contents:d}=l,m=()=>{const{currentWidget:e}=s;return!(!e||!o.contextForWidget(e))},u=async(e,t)=>{var o,a,n;const r=await d.get(e,{content:!0}),i=document.createElement("a");if("notebook"===r.type||"json"===r.format||"text/json"===r.mimetype){const e=null!==(o=r.mimetype)&&void 0!==o?o:"text/json",t=JSON.stringify(r.content,null,2);i.href=`data:${e};charset=utf-8,${encodeURIComponent(t)}`}else if("text"===r.format||"text/plain"===r.mimetype){const e=null!==(a=r.mimetype)&&void 0!==a?a:"text/plain";i.href=`data:${e};charset=utf-8,${encodeURIComponent(r.content)}`}else{if("base64"!==r.format&&"application/octet-stream"!==r.mimetype)throw new Error(`Content whose mimetype is "${r.mimetype}" cannot be downloaded`);{const e=null!==(n=r.mimetype)&&void 0!==n?n:"application/octet-stream";i.href=`data:${e};base64,${r.content}`}}i.download=t,document.body.appendChild(i),i.click(),document.body.removeChild(i)};c.addCommand(b.docmanagerDownload,{label:i.__("Download"),caption:i.__("Download the file to your computer"),isEnabled:m,execute:async()=>{const e=s.currentWidget;if(!m()||!e)return;const t=o.contextForWidget(e);if(!t)return(0,n.showDialog)({title:i.__("Cannot Download"),body:i.__("No context found for current widget!"),buttons:[n.Dialog.okButton({label:i.__("OK")})]});await t.save();try{await u(t.path,t.path)}catch(e){return(0,n.showDialog)({title:i.__("Cannot Download"),body:JSON.stringify(e),buttons:[n.Dialog.okButton({label:i.__("OK")})]})}}});const g=i.__("File Operations");if(a&&a.addItem({command:b.docmanagerDownload,category:g}),r){const{tracker:e}=r;c.addCommand(b.filebrowserDownload,{execute:async()=>{const t=e.currentWidget;t&&Array.from(t.selectedItems()).forEach((async e=>{if("directory"!==e.type)try{await u(e.path,e.name)}catch(e){return(0,n.showDialog)({title:i.__("Cannot Download"),body:JSON.stringify(e),buttons:[n.Dialog.okButton({label:i.__("OK")})]})}}))},icon:p.downloadIcon.bindprops({stylesheet:"menuItem"}),label:i.__("Download")})}}},{id:"@jupyterlite/application-extension:logo",optional:[a.ILabShell],autoStart:!0,activate:(e,t)=>{if(!t)return;const o=new g.Widget;m.liteIcon.element({container:o.node,elementPosition:"center",margin:"2px 2px 2px 8px",height:"auto",width:"16px"}),o.id="jp-MainLogo",t.add(o,"top",{rank:0})}},{id:"@jupyterlite/application-extension:notify-commands",autoStart:!0,optional:[a.ILabShell],activate:(e,t)=>{t&&t.layoutModified.connect((()=>{e.commands.notifyCommandChanged()}))}},{id:"@jupyterlite/application-extension:opener",autoStart:!0,requires:[a.IRouter,i.IDocumentManager],optional:[a.ILabShell,s.ISettingRegistry],activate:(e,t,o,a,n)=>{const{commands:i,docRegistry:c}=e,l="router:tree";i.addCommand(l,{execute:l=>{var s;const d=l,{request:p,search:m}=d;if(null!==(s=p.match(y))&&void 0!==s&&!s)return;const u=new URLSearchParams(m),g=u.getAll("path");if(0===g.length)return;const h=g.map((e=>decodeURIComponent(e)));e.started.then((async()=>{var e;const l=r.PageConfig.getOption("notebookPage"),[s]=h;if("tree"===l){let e="/edit";"Notebook"===c.defaultWidgetFactory(s).name&&(e="/notebooks");const t=r.PageConfig.getBaseUrl(),o=new URL(r.URLExt.join(t,e,"index.html"));return o.searchParams.append("path",s),void(window.location.href=o.toString())}if("consoles"!==l)if("notebooks"===l||"edit"===l){let t=c.defaultWidgetFactory(s).name;if(n){const e=(await n.load("@jupyterlab/docmanager-extension:plugin")).get("defaultViewers").composite;c.getFileTypesForPath(s).forEach((o=>{void 0!==e[o.name]&&c.getWidgetFactory(e[o.name])&&(t=e[o.name])}))}const a=null!==(e=u.get("factory"))&&void 0!==e?e:t;o.open(s,a,void 0,{ref:"_noref"})}else{h.forEach((e=>o.open(e)));const e=new URL(r.URLExt.join(r.PageConfig.getBaseUrl(),p));e.searchParams.delete("path");const{pathname:n,search:c}=e;if(t.navigate(`${n}${c}`,{skipRouting:!0}),a){const e=()=>{i.execute("docmanager:show-in-file-browser"),a.currentChanged.disconnect(e)};a.currentChanged.connect(e)}}else i.execute("console:create",{path:s})}))}}),t.register({command:l,pattern:y})}},{id:"@jupyterlite/application-extension:session-context-patch",autoStart:!0,requires:[i.IDocumentManager,i.IDocumentWidgetOpener],activate:(e,t,o)=>{const a=e.serviceManager.contents;o.opened.connect(((e,o)=>{var n;const r=t.contextForWidget(o);if(""===a.driveName(null!==(n=null==r?void 0:r.path)&&void 0!==n?n:""))return;const i=o.context.sessionContext;i._name=null==r?void 0:r.path,i._path=null==r?void 0:r.path}))}},{id:"@jupyterlite/application-extension:share-file",requires:[c.IFileBrowserFactory,d.ITranslator],autoStart:!0,activate:(e,t,o)=>{const a=o.load(w),{commands:i,docRegistry:c}=e,{tracker:l}=t;i.addCommand(b.copyShareableLink,{execute:()=>{const e=l.currentWidget;if(!e)return;const t=r.PageConfig.getBaseUrl();let o=r.PageConfig.getOption("appUrl");const a=Array.from((0,u.filter)(e.selectedItems(),(e=>"directory"!==e.type)));if(!a.length)return;if("/tree"===o){const[e]=a;o="Notebook"===c.defaultWidgetFactory(e.path).name?"/notebooks":"/edit"}const i=new URL(r.URLExt.join(t,o,"index.html"));a.forEach((e=>{i.searchParams.append("path",e.path)})),n.Clipboard.copyToSystem(i.href)},isVisible:()=>!!l.currentWidget&&Array.from(l.currentWidget.selectedItems()).length>=1,icon:p.linkIcon.bindprops({stylesheet:"menuItem"}),label:a.__("Copy Shareable Link")})}}]}}]);
//# sourceMappingURL=8579.bee5523.js.map