"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[4857],{37579:(t,e,a)=>{function r(t,e){t.accDescr&&e.setAccDescription?.(t.accDescr),t.accTitle&&e.setAccTitle?.(t.accTitle),t.title&&e.setDiagramTitle?.(t.title)}a.d(e,{A:()=>r}),(0,a(11493).eW)(r,"populateCommonDb")},44857:(t,e,a)=>{a.d(e,{diagram:()=>C});var r=a(37579),n=a(41868),l=a(74762),o=a(11493),c=a(13197),i={packet:[]},s=structuredClone(i),d=o.vZ.packet,k=(0,o.eW)((()=>{const t=(0,n.Rb)({...d,...(0,o.iE)().packet});return t.showBits&&(t.paddingY+=10),t}),"getConfig"),p=(0,o.eW)((()=>s.packet),"getPacket"),b={pushWord:(0,o.eW)((t=>{t.length>0&&s.packet.push(t)}),"pushWord"),getPacket:p,getConfig:k,clear:(0,o.eW)((()=>{(0,o.ZH)(),s=structuredClone(i)}),"clear"),setAccTitle:o.GN,getAccTitle:o.eu,setDiagramTitle:o.g2,getDiagramTitle:o.Kr,getAccDescription:o.Mx,setAccDescription:o.U$},g=(0,o.eW)((t=>{(0,r.A)(t,b);let e=-1,a=[],n=1;const{bitsPerRow:l}=b.getConfig();for(let{start:r,end:c,label:i}of t.blocks){if(c&&c<r)throw new Error(`Packet block ${r} - ${c} is invalid. End must be greater than start.`);if(r!==e+1)throw new Error(`Packet block ${r} - ${c??r} is not contiguous. It should start from ${e+1}.`);for(e=c??r,o.cM.debug(`Packet block ${r} - ${e} with label ${i}`);a.length<=l+1&&b.getPacket().length<1e4;){const[t,e]=h({start:r,end:c,label:i},n,l);if(a.push(t),t.end+1===n*l&&(b.pushWord(a),a=[],n++),!e)break;({start:r,end:c,label:i}=e)}}b.pushWord(a)}),"populate"),h=(0,o.eW)(((t,e,a)=>{if(void 0===t.end&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*a?[t,void 0]:[{start:t.start,end:e*a-1,label:t.label},{start:e*a,end:t.end,label:t.label}]}),"getNextFittingBlock"),f={parse:(0,o.eW)((async t=>{const e=await(0,c.Qc)("packet",t);o.cM.debug(e),g(e)}),"parse")},u=(0,o.eW)(((t,e,a,r)=>{const n=r.db,c=n.getConfig(),{rowHeight:i,paddingY:s,bitWidth:d,bitsPerRow:k}=c,p=n.getPacket(),b=n.getDiagramTitle(),g=i+s,h=g*(p.length+1)-(b?0:i),f=d*k+2,u=(0,l.P)(e);u.attr("viewbox",`0 0 ${f} ${h}`),(0,o.v2)(u,h,f,c.useMaxWidth);for(const[t,e]of p.entries())x(u,e,t,c);u.append("text").text(b).attr("x",f/2).attr("y",h-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")}),"draw"),x=(0,o.eW)(((t,e,a,{rowHeight:r,paddingX:n,paddingY:l,bitWidth:o,bitsPerRow:c,showBits:i})=>{const s=t.append("g"),d=a*(r+l)+l;for(const t of e){const e=t.start%c*o+1,a=(t.end-t.start+1)*o-n;if(s.append("rect").attr("x",e).attr("y",d).attr("width",a).attr("height",r).attr("class","packetBlock"),s.append("text").attr("x",e+a/2).attr("y",d+r/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(t.label),!i)continue;const l=t.end===t.start,k=d-2;s.append("text").attr("x",e+(l?a/2:0)).attr("y",k).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",l?"middle":"start").text(t.start),l||s.append("text").attr("x",e+a).attr("y",k).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(t.end)}}),"drawWord"),w={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},C={parser:f,db:b,renderer:{draw:u},styles:(0,o.eW)((({packet:t}={})=>{const e=(0,n.Rb)(w,t);return`\n\t.packetByte {\n\t\tfont-size: ${e.byteFontSize};\n\t}\n\t.packetByte.start {\n\t\tfill: ${e.startByteColor};\n\t}\n\t.packetByte.end {\n\t\tfill: ${e.endByteColor};\n\t}\n\t.packetLabel {\n\t\tfill: ${e.labelColor};\n\t\tfont-size: ${e.labelFontSize};\n\t}\n\t.packetTitle {\n\t\tfill: ${e.titleColor};\n\t\tfont-size: ${e.titleFontSize};\n\t}\n\t.packetBlock {\n\t\tstroke: ${e.blockStrokeColor};\n\t\tstroke-width: ${e.blockStrokeWidth};\n\t\tfill: ${e.blockFillColor};\n\t}\n\t`}),"styles")}}}]);
//# sourceMappingURL=4857.c75230e.js.map