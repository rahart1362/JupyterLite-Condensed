"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[7450],{67450:(e,t,n)=>{n.r(t),n.d(t,{blockComment:()=>h,blockUncomment:()=>m,copyLineDown:()=>Kt,copyLineUp:()=>qt,cursorCharBackward:()=>ne,cursorCharBackwardLogical:()=>le,cursorCharForward:()=>te,cursorCharForwardLogical:()=>ie,cursorCharLeft:()=>Z,cursorCharRight:()=>ee,cursorDocEnd:()=>kt,cursorDocStart:()=>yt,cursorGroupBackward:()=>de,cursorGroupForward:()=>ue,cursorGroupForwardWin:()=>he,cursorGroupLeft:()=>se,cursorGroupRight:()=>ce,cursorLineBoundaryBackward:()=>Oe,cursorLineBoundaryForward:()=>be,cursorLineBoundaryLeft:()=>Ie,cursorLineBoundaryRight:()=>Re,cursorLineDown:()=>Ee,cursorLineEnd:()=>Ve,cursorLineStart:()=>Ue,cursorLineUp:()=>Be,cursorMatchingBracket:()=>Ne,cursorPageDown:()=>Me,cursorPageUp:()=>Le,cursorSubwordBackward:()=>ke,cursorSubwordForward:()=>ye,cursorSyntaxLeft:()=>ve,cursorSyntaxRight:()=>Ae,defaultKeymap:()=>un,deleteCharBackward:()=>Lt,deleteCharBackwardStrict:()=>Mt,deleteCharForward:()=>Tt,deleteGroupBackward:()=>Ot,deleteGroupForward:()=>It,deleteLine:()=>$t,deleteLineBoundaryBackward:()=>Vt,deleteLineBoundaryForward:()=>Ft,deleteToLineEnd:()=>Rt,deleteToLineStart:()=>Ut,deleteTrailingWhitespace:()=>Nt,emacsStyleKeymap:()=>sn,history:()=>E,historyField:()=>D,historyKeymap:()=>q,indentLess:()=>rn,indentMore:()=>nn,indentSelection:()=>tn,indentWithTab:()=>dn,insertBlankLine:()=>Xt,insertNewline:()=>jt,insertNewlineAndIndent:()=>Qt,insertNewlineKeepIndent:()=>Yt,insertTab:()=>an,invertedEffects:()=>A,isolateHistory:()=>v,lineComment:()=>u,lineUncomment:()=>d,moveLineDown:()=>zt,moveLineUp:()=>Wt,redo:()=>M,redoDepth:()=>R,redoSelection:()=>b,selectAll:()=>vt,selectCharBackward:()=>_e,selectCharBackwardLogical:()=>Ke,selectCharForward:()=>ze,selectCharForwardLogical:()=>qe,selectCharLeft:()=>He,selectCharRight:()=>We,selectDocEnd:()=>St,selectDocStart:()=>wt,selectGroupBackward:()=>Xe,selectGroupForward:()=>Qe,selectGroupForwardWin:()=>Ze,selectGroupLeft:()=>je,selectGroupRight:()=>Ye,selectLine:()=>At,selectLineBoundaryBackward:()=>ft,selectLineBoundaryForward:()=>dt,selectLineBoundaryLeft:()=>ht,selectLineBoundaryRight:()=>mt,selectLineDown:()=>at,selectLineEnd:()=>gt,selectLineStart:()=>pt,selectLineUp:()=>lt,selectMatchingBracket:()=>Ge,selectPageDown:()=>ut,selectPageUp:()=>ct,selectParentSyntax:()=>Ct,selectSubwordBackward:()=>nt,selectSubwordForward:()=>tt,selectSyntaxLeft:()=>rt,selectSyntaxRight:()=>ot,simplifySelection:()=>Bt,splitLine:()=>Gt,standardKeymap:()=>cn,temporarilySetTabFocusMode:()=>ln,toggleBlockComment:()=>f,toggleBlockCommentByLine:()=>p,toggleComment:()=>a,toggleLineComment:()=>c,toggleTabFocusMode:()=>on,transposeChars:()=>Jt,undo:()=>L,undoDepth:()=>I,undoSelection:()=>T});var r=n(5315),o=n(64357),i=n(2808),l=n(12926);const a=e=>{let{state:t}=e,n=t.doc.lineAt(t.selection.main.from),r=g(e.state,n.from);return r.line?c(e):!!r.block&&p(e)};function s(e,t){return({state:n,dispatch:r})=>{if(n.readOnly)return!1;let o=e(t,n);return!!o&&(r(n.update(o)),!0)}}const c=s(w,0),u=s(w,1),d=s(w,2),f=s(k,0),h=s(k,1),m=s(k,2),p=s(((e,t)=>k(e,t,function(e){let t=[];for(let n of e.selection.ranges){let r=e.doc.lineAt(n.from),o=n.to<=r.to?r:e.doc.lineAt(n.to);o.from>r.from&&o.from==n.to&&(o=n.to==r.to+1?r:e.doc.lineAt(n.to-1));let i=t.length-1;i>=0&&t[i].to>r.from?t[i].to=o.to:t.push({from:r.from+/^\s*/.exec(r.text)[0].length,to:o.to})}return t}(t))),0);function g(e,t){let n=e.languageDataAt("commentTokens",t);return n.length?n[0]:{}}const y=50;function k(e,t,n=t.selection.ranges){let r=n.map((e=>g(t,e.from).block));if(!r.every((e=>e)))return null;let o=n.map(((e,n)=>function(e,{open:t,close:n},r,o){let i,l,a=e.sliceDoc(r-y,r),s=e.sliceDoc(o,o+y),c=/\s*$/.exec(a)[0].length,u=/^\s*/.exec(s)[0].length,d=a.length-c;if(a.slice(d-t.length,d)==t&&s.slice(u,u+n.length)==n)return{open:{pos:r-c,margin:c&&1},close:{pos:o+u,margin:u&&1}};o-r<=2*y?i=l=e.sliceDoc(r,o):(i=e.sliceDoc(r,r+y),l=e.sliceDoc(o-y,o));let f=/^\s*/.exec(i)[0].length,h=/\s*$/.exec(l)[0].length,m=l.length-h-n.length;return i.slice(f,f+t.length)==t&&l.slice(m,m+n.length)==n?{open:{pos:r+f+t.length,margin:/\s/.test(i.charAt(f+t.length))?1:0},close:{pos:o-h-n.length,margin:/\s/.test(l.charAt(m-1))?1:0}}:null}(t,r[n],e.from,e.to)));if(2!=e&&!o.every((e=>e)))return{changes:t.changes(n.map(((e,t)=>o[t]?[]:[{from:e.from,insert:r[t].open+" "},{from:e.to,insert:" "+r[t].close}])))};if(1!=e&&o.some((e=>e))){let e=[];for(let t,n=0;n<o.length;n++)if(t=o[n]){let o=r[n],{open:i,close:l}=t;e.push({from:i.pos-o.open.length,to:i.pos+i.margin},{from:l.pos-l.margin,to:l.pos+o.close.length})}return{changes:e}}return null}function w(e,t,n=t.selection.ranges){let r=[],o=-1;for(let{from:e,to:i}of n){let n=r.length,l=1e9,a=g(t,e).line;if(a){for(let n=e;n<=i;){let s=t.doc.lineAt(n);if(s.from>o&&(e==i||i>s.from)){o=s.from;let e=/^\s*/.exec(s.text)[0].length,t=e==s.length,n=s.text.slice(e,e+a.length)==a?e:-1;e<s.text.length&&e<l&&(l=e),r.push({line:s,comment:n,token:a,indent:e,empty:t,single:!1})}n=s.to+1}if(l<1e9)for(let e=n;e<r.length;e++)r[e].indent<r[e].line.text.length&&(r[e].indent=l);r.length==n+1&&(r[n].single=!0)}}if(2!=e&&r.some((e=>e.comment<0&&(!e.empty||e.single)))){let e=[];for(let{line:t,token:n,indent:o,empty:i,single:l}of r)!l&&i||e.push({from:t.from+o,insert:n+" "});let n=t.changes(e);return{changes:n,selection:t.selection.map(n,1)}}if(1!=e&&r.some((e=>e.comment>=0))){let e=[];for(let{line:t,comment:n,token:o}of r)if(n>=0){let r=t.from+n,i=r+o.length;" "==t.text[i-t.from]&&i++,e.push({from:r,to:i})}return{changes:e}}return null}const S=r.Annotation.define(),v=r.Annotation.define(),A=r.Facet.define(),C=r.Facet.define({combine:e=>(0,r.combineConfig)(e,{minDepth:100,newGroupDelay:500,joinToEvent:(e,t)=>t},{minDepth:Math.max,newGroupDelay:Math.min,joinToEvent:(e,t)=>(n,r)=>e(n,r)||t(n,r)})}),B=r.StateField.define({create:()=>_.empty,update(e,t){let n=t.state.facet(C),o=t.annotation(S);if(o){let r=U.fromTransaction(t,o.selection),i=o.side,l=0==i?e.undone:e.done;return l=r?V(l,l.length,n.minDepth,r):J(l,t.startState.selection),new _(0==i?o.rest:l,0==i?l:o.rest)}let i=t.annotation(v);if("full"!=i&&"before"!=i||(e=e.isolate()),!1===t.annotation(r.Transaction.addToHistory))return t.changes.empty?e:e.addMapping(t.changes.desc);let l=U.fromTransaction(t),a=t.annotation(r.Transaction.time),s=t.annotation(r.Transaction.userEvent);return l?e=e.addChanges(l,a,s,n,t):t.selection&&(e=e.addSelection(t.startState.selection,a,s,n.newGroupDelay)),"full"!=i&&"after"!=i||(e=e.isolate()),e},toJSON:e=>({done:e.done.map((e=>e.toJSON())),undone:e.undone.map((e=>e.toJSON()))}),fromJSON:e=>new _(e.done.map(U.fromJSON),e.undone.map(U.fromJSON))});function E(e={}){return[B,C.of(e),o.EditorView.domEventHandlers({beforeinput(e,t){let n="historyUndo"==e.inputType?L:"historyRedo"==e.inputType?M:null;return!!n&&(e.preventDefault(),n(t))}})]}const D=B;function x(e,t){return function({state:n,dispatch:r}){if(!t&&n.readOnly)return!1;let o=n.field(B,!1);if(!o)return!1;let i=o.pop(e,n,t);return!!i&&(r(i),!0)}}const L=x(0,!1),M=x(1,!1),T=x(0,!0),b=x(1,!0);function O(e){return function(t){let n=t.field(B,!1);if(!n)return 0;let r=0==e?n.done:n.undone;return r.length-(r.length&&!r[0].changes?1:0)}}const I=O(0),R=O(1);class U{constructor(e,t,n,r,o){this.changes=e,this.effects=t,this.mapped=n,this.startSelection=r,this.selectionsAfter=o}setSelAfter(e){return new U(this.changes,this.effects,this.mapped,this.startSelection,e)}toJSON(){var e,t,n;return{changes:null===(e=this.changes)||void 0===e?void 0:e.toJSON(),mapped:null===(t=this.mapped)||void 0===t?void 0:t.toJSON(),startSelection:null===(n=this.startSelection)||void 0===n?void 0:n.toJSON(),selectionsAfter:this.selectionsAfter.map((e=>e.toJSON()))}}static fromJSON(e){return new U(e.changes&&r.ChangeSet.fromJSON(e.changes),[],e.mapped&&r.ChangeDesc.fromJSON(e.mapped),e.startSelection&&r.EditorSelection.fromJSON(e.startSelection),e.selectionsAfter.map(r.EditorSelection.fromJSON))}static fromTransaction(e,t){let n=N;for(let t of e.startState.facet(A)){let r=t(e);r.length&&(n=n.concat(r))}return!n.length&&e.changes.empty?null:new U(e.changes.invert(e.startState.doc),n,void 0,t||e.startState.selection,N)}static selection(e){return new U(void 0,N,void 0,void 0,e)}}function V(e,t,n,r){let o=t+1>n+20?t-n-1:0,i=e.slice(o,t);return i.push(r),i}function F(e,t){return e.length?t.length?e.concat(t):e:t}const N=[],G=200;function J(e,t){if(e.length){let n=e[e.length-1],r=n.selectionsAfter.slice(Math.max(0,n.selectionsAfter.length-G));return r.length&&r[r.length-1].eq(t)?e:(r.push(t),V(e,e.length-1,1e9,n.setSelAfter(r)))}return[U.selection([t])]}function P(e){let t=e[e.length-1],n=e.slice();return n[e.length-1]=t.setSelAfter(t.selectionsAfter.slice(0,t.selectionsAfter.length-1)),n}function H(e,t){if(!e.length)return e;let n=e.length,r=N;for(;n;){let o=W(e[n-1],t,r);if(o.changes&&!o.changes.empty||o.effects.length){let t=e.slice(0,n);return t[n-1]=o,t}t=o.mapped,n--,r=o.selectionsAfter}return r.length?[U.selection(r)]:N}function W(e,t,n){let o=F(e.selectionsAfter.length?e.selectionsAfter.map((e=>e.map(t))):N,n);if(!e.changes)return U.selection(o);let i=e.changes.map(t),l=t.mapDesc(e.changes,!0),a=e.mapped?e.mapped.composeDesc(l):l;return new U(i,r.StateEffect.mapEffects(e.effects,t),a,e.startSelection.map(l),o)}const z=/^(input\.type|delete)($|\.)/;class _{constructor(e,t,n=0,r=void 0){this.done=e,this.undone=t,this.prevTime=n,this.prevUserEvent=r}isolate(){return this.prevTime?new _(this.done,this.undone):this}addChanges(e,t,n,o,i){let l=this.done,a=l[l.length-1];return l=a&&a.changes&&!a.changes.empty&&e.changes&&(!n||z.test(n))&&(!a.selectionsAfter.length&&t-this.prevTime<o.newGroupDelay&&o.joinToEvent(i,function(e,t){let n=[],r=!1;return e.iterChangedRanges(((e,t)=>n.push(e,t))),t.iterChangedRanges(((e,t,o,i)=>{for(let e=0;e<n.length;){let t=n[e++],l=n[e++];i>=t&&o<=l&&(r=!0)}})),r}(a.changes,e.changes))||"input.type.compose"==n)?V(l,l.length-1,o.minDepth,new U(e.changes.compose(a.changes),F(r.StateEffect.mapEffects(e.effects,a.changes),a.effects),a.mapped,a.startSelection,N)):V(l,l.length,o.minDepth,e),new _(l,N,t,n)}addSelection(e,t,n,r){let o=this.done.length?this.done[this.done.length-1].selectionsAfter:N;return o.length>0&&t-this.prevTime<r&&n==this.prevUserEvent&&n&&/^select($|\.)/.test(n)&&(i=o[o.length-1],l=e,i.ranges.length==l.ranges.length&&0===i.ranges.filter(((e,t)=>e.empty!=l.ranges[t].empty)).length)?this:new _(J(this.done,e),this.undone,t,n);var i,l}addMapping(e){return new _(H(this.done,e),H(this.undone,e),this.prevTime,this.prevUserEvent)}pop(e,t,n){let r=0==e?this.done:this.undone;if(0==r.length)return null;let o=r[r.length-1],i=o.selectionsAfter[0]||t.selection;if(n&&o.selectionsAfter.length)return t.update({selection:o.selectionsAfter[o.selectionsAfter.length-1],annotations:S.of({side:e,rest:P(r),selection:i}),userEvent:0==e?"select.undo":"select.redo",scrollIntoView:!0});if(o.changes){let n=1==r.length?N:r.slice(0,r.length-1);return o.mapped&&(n=H(n,o.mapped)),t.update({changes:o.changes,selection:o.startSelection,effects:o.effects,annotations:S.of({side:e,rest:n,selection:i}),filter:!1,userEvent:0==e?"undo":"redo",scrollIntoView:!0})}return null}}_.empty=new _(N,N);const q=[{key:"Mod-z",run:L,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:M,preventDefault:!0},{linux:"Ctrl-Shift-z",run:M,preventDefault:!0},{key:"Mod-u",run:T,preventDefault:!0},{key:"Alt-u",mac:"Mod-Shift-u",run:b,preventDefault:!0}];function K(e,t){return r.EditorSelection.create(e.ranges.map(t),e.mainIndex)}function $(e,t){return e.update({selection:t,scrollIntoView:!0,userEvent:"select"})}function j({state:e,dispatch:t},n){let r=K(e.selection,n);return!r.eq(e.selection,!0)&&(t($(e,r)),!0)}function Y(e,t){return r.EditorSelection.cursor(t?e.to:e.from)}function Q(e,t){return j(e,(n=>n.empty?e.moveByChar(n,t):Y(n,t)))}function X(e){return e.textDirectionAt(e.state.selection.main.head)==o.Direction.LTR}const Z=e=>Q(e,!X(e)),ee=e=>Q(e,X(e)),te=e=>Q(e,!0),ne=e=>Q(e,!1);function re(e,t,n){let o=t.head,i=e.doc.lineAt(o);return o=o==(n?i.to:i.from)?n?Math.min(e.doc.length,i.to+1):Math.max(0,i.from-1):i.from+(0,r.findClusterBreak)(i.text,o-i.from,n),r.EditorSelection.cursor(o,n?-1:1)}function oe(e,t){return j(e,(n=>n.empty?re(e.state,n,t):Y(n,t)))}const ie=e=>oe(e,!0),le=e=>oe(e,!1);function ae(e,t){return j(e,(n=>n.empty?e.moveByGroup(n,t):Y(n,t)))}const se=e=>ae(e,!X(e)),ce=e=>ae(e,X(e)),ue=e=>ae(e,!0),de=e=>ae(e,!1);function fe(e,t,n){let o=e.state.charCategorizer(t),i=o(n),l=i!=r.CharCategory.Space;return e=>{let t=o(e);return t!=r.CharCategory.Space?l&&t==i:(l=!1,!0)}}const he=e=>j(e,(t=>t.empty?e.moveByChar(t,!0,(n=>fe(e,t.head,n))):Y(t,!0))),me="undefined"!=typeof Intl&&Intl.Segmenter?new Intl.Segmenter(void 0,{granularity:"word"}):null;function pe(e,t,n){let o=e.state.charCategorizer(t.from),i=r.CharCategory.Space,l=t.from,a=0,s=!1,c=!1,u=!1,d=t=>{if(s)return!1;l+=n?t.length:-t.length;let d,f=o(t);if(f==r.CharCategory.Word&&t.charCodeAt(0)<128&&/[\W_]/.test(t)&&(f=-1),i==r.CharCategory.Space&&(i=f),i!=f)return!1;if(i==r.CharCategory.Word)if(t.toLowerCase()==t){if(!n&&c)return!1;u=!0}else if(u){if(n)return!1;s=!0}else{if(c&&n&&o(d=e.state.sliceDoc(l,l+1))==r.CharCategory.Word&&d.toLowerCase()==d)return!1;c=!0}return a++,!0},f=e.moveByChar(t,n,(e=>(d(e),d)));if(me&&i==r.CharCategory.Word&&f.from==t.from+a*(n?1:-1)){let o=Math.min(t.head,f.head),i=Math.max(t.head,f.head),l=e.state.sliceDoc(o,i);if(l.length>1&&/[\u4E00-\uffff]/.test(l)){let e=Array.from(me.segment(l));if(e.length>1)return n?r.EditorSelection.cursor(t.head+e[1].index,-1):r.EditorSelection.cursor(f.head+e[e.length-1].index,1)}}return f}function ge(e,t){return j(e,(n=>n.empty?pe(e,n,t):Y(n,t)))}const ye=e=>ge(e,!0),ke=e=>ge(e,!1);function we(e,t,n){if(t.type.prop(n))return!0;let r=t.to-t.from;return r&&(r>2||/[^\s,.;:]/.test(e.sliceDoc(t.from,t.to)))||t.firstChild}function Se(e,t,n){let o,a,s=(0,i.syntaxTree)(e).resolveInner(t.head),c=n?l.NodeProp.closedBy:l.NodeProp.openedBy;for(let r=t.head;;){let t=n?s.childAfter(r):s.childBefore(r);if(!t)break;we(e,t,c)?s=t:r=n?t.to:t.from}return a=s.type.prop(c)&&(o=n?(0,i.matchBrackets)(e,s.from,1):(0,i.matchBrackets)(e,s.to,-1))&&o.matched?n?o.end.to:o.end.from:n?s.to:s.from,r.EditorSelection.cursor(a,n?-1:1)}const ve=e=>j(e,(t=>Se(e.state,t,!X(e)))),Ae=e=>j(e,(t=>Se(e.state,t,X(e))));function Ce(e,t){return j(e,(n=>{if(!n.empty)return Y(n,t);let r=e.moveVertically(n,t);return r.head!=n.head?r:e.moveToLineBoundary(n,t)}))}const Be=e=>Ce(e,!1),Ee=e=>Ce(e,!0);function De(e){let t,n=e.scrollDOM.clientHeight<e.scrollDOM.scrollHeight-2,r=0,i=0;if(n){for(let t of e.state.facet(o.EditorView.scrollMargins)){let n=t(e);(null==n?void 0:n.top)&&(r=Math.max(null==n?void 0:n.top,r)),(null==n?void 0:n.bottom)&&(i=Math.max(null==n?void 0:n.bottom,i))}t=e.scrollDOM.clientHeight-r-i}else t=(e.dom.ownerDocument.defaultView||window).innerHeight;return{marginTop:r,marginBottom:i,selfScroll:n,height:Math.max(e.defaultLineHeight,t-5)}}function xe(e,t){let n,r=De(e),{state:i}=e,l=K(i.selection,(n=>n.empty?e.moveVertically(n,t,r.height):Y(n,t)));if(l.eq(i.selection))return!1;if(r.selfScroll){let t=e.coordsAtPos(i.selection.main.head),a=e.scrollDOM.getBoundingClientRect(),s=a.top+r.marginTop,c=a.bottom-r.marginBottom;t&&t.top>s&&t.bottom<c&&(n=o.EditorView.scrollIntoView(l.main.head,{y:"start",yMargin:t.top-s}))}return e.dispatch($(i,l),{effects:n}),!0}const Le=e=>xe(e,!1),Me=e=>xe(e,!0);function Te(e,t,n){let o=e.lineBlockAt(t.head),i=e.moveToLineBoundary(t,n);if(i.head==t.head&&i.head!=(n?o.to:o.from)&&(i=e.moveToLineBoundary(t,n,!1)),!n&&i.head==o.from&&o.length){let n=/^\s*/.exec(e.state.sliceDoc(o.from,Math.min(o.from+100,o.to)))[0].length;n&&t.head!=o.from+n&&(i=r.EditorSelection.cursor(o.from+n))}return i}const be=e=>j(e,(t=>Te(e,t,!0))),Oe=e=>j(e,(t=>Te(e,t,!1))),Ie=e=>j(e,(t=>Te(e,t,!X(e)))),Re=e=>j(e,(t=>Te(e,t,X(e)))),Ue=e=>j(e,(t=>r.EditorSelection.cursor(e.lineBlockAt(t.head).from,1))),Ve=e=>j(e,(t=>r.EditorSelection.cursor(e.lineBlockAt(t.head).to,-1)));function Fe(e,t,n){let o=!1,l=K(e.selection,(t=>{let l=(0,i.matchBrackets)(e,t.head,-1)||(0,i.matchBrackets)(e,t.head,1)||t.head>0&&(0,i.matchBrackets)(e,t.head-1,1)||t.head<e.doc.length&&(0,i.matchBrackets)(e,t.head+1,-1);if(!l||!l.end)return t;o=!0;let a=l.start.from==t.head?l.end.to:l.end.from;return n?r.EditorSelection.range(t.anchor,a):r.EditorSelection.cursor(a)}));return!!o&&(t($(e,l)),!0)}const Ne=({state:e,dispatch:t})=>Fe(e,t,!1),Ge=({state:e,dispatch:t})=>Fe(e,t,!0);function Je(e,t){let n=K(e.state.selection,(e=>{let n=t(e);return r.EditorSelection.range(e.anchor,n.head,n.goalColumn,n.bidiLevel||void 0)}));return!n.eq(e.state.selection)&&(e.dispatch($(e.state,n)),!0)}function Pe(e,t){return Je(e,(n=>e.moveByChar(n,t)))}const He=e=>Pe(e,!X(e)),We=e=>Pe(e,X(e)),ze=e=>Pe(e,!0),_e=e=>Pe(e,!1),qe=e=>Je(e,(t=>re(e.state,t,!0))),Ke=e=>Je(e,(t=>re(e.state,t,!1)));function $e(e,t){return Je(e,(n=>e.moveByGroup(n,t)))}const je=e=>$e(e,!X(e)),Ye=e=>$e(e,X(e)),Qe=e=>$e(e,!0),Xe=e=>$e(e,!1),Ze=e=>Je(e,(t=>e.moveByChar(t,!0,(n=>fe(e,t.head,n)))));function et(e,t){return Je(e,(n=>pe(e,n,t)))}const tt=e=>et(e,!0),nt=e=>et(e,!1),rt=e=>Je(e,(t=>Se(e.state,t,!X(e)))),ot=e=>Je(e,(t=>Se(e.state,t,X(e))));function it(e,t){return Je(e,(n=>e.moveVertically(n,t)))}const lt=e=>it(e,!1),at=e=>it(e,!0);function st(e,t){return Je(e,(n=>e.moveVertically(n,t,De(e).height)))}const ct=e=>st(e,!1),ut=e=>st(e,!0),dt=e=>Je(e,(t=>Te(e,t,!0))),ft=e=>Je(e,(t=>Te(e,t,!1))),ht=e=>Je(e,(t=>Te(e,t,!X(e)))),mt=e=>Je(e,(t=>Te(e,t,X(e)))),pt=e=>Je(e,(t=>r.EditorSelection.cursor(e.lineBlockAt(t.head).from))),gt=e=>Je(e,(t=>r.EditorSelection.cursor(e.lineBlockAt(t.head).to))),yt=({state:e,dispatch:t})=>(t($(e,{anchor:0})),!0),kt=({state:e,dispatch:t})=>(t($(e,{anchor:e.doc.length})),!0),wt=({state:e,dispatch:t})=>(t($(e,{anchor:e.selection.main.anchor,head:0})),!0),St=({state:e,dispatch:t})=>(t($(e,{anchor:e.selection.main.anchor,head:e.doc.length})),!0),vt=({state:e,dispatch:t})=>(t(e.update({selection:{anchor:0,head:e.doc.length},userEvent:"select"})),!0),At=({state:e,dispatch:t})=>{let n=Pt(e).map((({from:t,to:n})=>r.EditorSelection.range(t,Math.min(n+1,e.doc.length))));return t(e.update({selection:r.EditorSelection.create(n),userEvent:"select"})),!0},Ct=({state:e,dispatch:t})=>{let n=K(e.selection,(t=>{let n=(0,i.syntaxTree)(e),o=n.resolveStack(t.from,1);if(t.empty){let e=n.resolveStack(t.from,-1);e.node.from>=o.node.from&&e.node.to<=o.node.to&&(o=e)}for(let e=o;e;e=e.next){let{node:n}=e;if((n.from<t.from&&n.to>=t.to||n.to>t.to&&n.from<=t.from)&&e.next)return r.EditorSelection.range(n.to,n.from)}return t}));return!n.eq(e.selection)&&(t($(e,n)),!0)},Bt=({state:e,dispatch:t})=>{let n=e.selection,o=null;return n.ranges.length>1?o=r.EditorSelection.create([n.main]):n.main.empty||(o=r.EditorSelection.create([r.EditorSelection.cursor(n.main.head)])),!!o&&(t($(e,o)),!0)};function Et(e,t){if(e.state.readOnly)return!1;let n="delete.selection",{state:i}=e,l=i.changeByRange((o=>{let{from:i,to:l}=o;if(i==l){let r=t(o);r<i?(n="delete.backward",r=Dt(e,r,!1)):r>i&&(n="delete.forward",r=Dt(e,r,!0)),i=Math.min(i,r),l=Math.max(l,r)}else i=Dt(e,i,!1),l=Dt(e,l,!0);return i==l?{range:o}:{changes:{from:i,to:l},range:r.EditorSelection.cursor(i,i<o.head?-1:1)}}));return!l.changes.empty&&(e.dispatch(i.update(l,{scrollIntoView:!0,userEvent:n,effects:"delete.selection"==n?o.EditorView.announce.of(i.phrase("Selection deleted")):void 0})),!0)}function Dt(e,t,n){if(e instanceof o.EditorView)for(let r of e.state.facet(o.EditorView.atomicRanges).map((t=>t(e))))r.between(t,t,((e,r)=>{e<t&&r>t&&(t=n?r:e)}));return t}const xt=(e,t,n)=>Et(e,(o=>{let l,a,s=o.from,{state:c}=e,u=c.doc.lineAt(s);if(n&&!t&&s>u.from&&s<u.from+200&&!/[^ \t]/.test(l=u.text.slice(0,s-u.from))){if("\t"==l[l.length-1])return s-1;let e=(0,r.countColumn)(l,c.tabSize)%(0,i.getIndentUnit)(c)||(0,i.getIndentUnit)(c);for(let t=0;t<e&&" "==l[l.length-1-t];t++)s--;a=s}else a=(0,r.findClusterBreak)(u.text,s-u.from,t,t)+u.from,a==s&&u.number!=(t?c.doc.lines:1)?a+=t?1:-1:!t&&/[\ufe00-\ufe0f]/.test(u.text.slice(a-u.from,s-u.from))&&(a=(0,r.findClusterBreak)(u.text,a-u.from,!1,!1)+u.from);return a})),Lt=e=>xt(e,!1,!0),Mt=e=>xt(e,!1,!1),Tt=e=>xt(e,!0,!1),bt=(e,t)=>Et(e,(n=>{let o=n.head,{state:i}=e,l=i.doc.lineAt(o),a=i.charCategorizer(o);for(let e=null;;){if(o==(t?l.to:l.from)){o==n.head&&l.number!=(t?i.doc.lines:1)&&(o+=t?1:-1);break}let s=(0,r.findClusterBreak)(l.text,o-l.from,t)+l.from,c=l.text.slice(Math.min(o,s)-l.from,Math.max(o,s)-l.from),u=a(c);if(null!=e&&u!=e)break;" "==c&&o==n.head||(e=u),o=s}return o})),Ot=e=>bt(e,!1),It=e=>bt(e,!0),Rt=e=>Et(e,(t=>{let n=e.lineBlockAt(t.head).to;return t.head<n?n:Math.min(e.state.doc.length,t.head+1)})),Ut=e=>Et(e,(t=>{let n=e.lineBlockAt(t.head).from;return t.head>n?n:Math.max(0,t.head-1)})),Vt=e=>Et(e,(t=>{let n=e.moveToLineBoundary(t,!1).head;return t.head>n?n:Math.max(0,t.head-1)})),Ft=e=>Et(e,(t=>{let n=e.moveToLineBoundary(t,!0).head;return t.head<n?n:Math.min(e.state.doc.length,t.head+1)})),Nt=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=[];for(let t=0,r="",o=e.doc.iter();;){if(o.next(),o.lineBreak||o.done){let e=r.search(/\s+$/);if(e>-1&&n.push({from:t-(r.length-e),to:t}),o.done)break;r=""}else r=o.value;t+=o.value.length}return!!n.length&&(t(e.update({changes:n,userEvent:"delete"})),!0)},Gt=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=e.changeByRange((e=>({changes:{from:e.from,to:e.to,insert:r.Text.of(["",""])},range:r.EditorSelection.cursor(e.from)})));return t(e.update(n,{scrollIntoView:!0,userEvent:"input"})),!0},Jt=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=e.changeByRange((t=>{if(!t.empty||0==t.from||t.from==e.doc.length)return{range:t};let n=t.from,o=e.doc.lineAt(n),i=n==o.from?n-1:(0,r.findClusterBreak)(o.text,n-o.from,!1)+o.from,l=n==o.to?n+1:(0,r.findClusterBreak)(o.text,n-o.from,!0)+o.from;return{changes:{from:i,to:l,insert:e.doc.slice(n,l).append(e.doc.slice(i,n))},range:r.EditorSelection.cursor(l)}}));return!n.changes.empty&&(t(e.update(n,{scrollIntoView:!0,userEvent:"move.character"})),!0)};function Pt(e){let t=[],n=-1;for(let r of e.selection.ranges){let o=e.doc.lineAt(r.from),i=e.doc.lineAt(r.to);if(r.empty||r.to!=i.from||(i=e.doc.lineAt(r.to-1)),n>=o.number){let e=t[t.length-1];e.to=i.to,e.ranges.push(r)}else t.push({from:o.from,to:i.to,ranges:[r]});n=i.number+1}return t}function Ht(e,t,n){if(e.readOnly)return!1;let o=[],i=[];for(let t of Pt(e)){if(n?t.to==e.doc.length:0==t.from)continue;let l=e.doc.lineAt(n?t.to+1:t.from-1),a=l.length+1;if(n){o.push({from:t.to,to:l.to},{from:t.from,insert:l.text+e.lineBreak});for(let n of t.ranges)i.push(r.EditorSelection.range(Math.min(e.doc.length,n.anchor+a),Math.min(e.doc.length,n.head+a)))}else{o.push({from:l.from,to:t.from},{from:t.to,insert:e.lineBreak+l.text});for(let e of t.ranges)i.push(r.EditorSelection.range(e.anchor-a,e.head-a))}}return!!o.length&&(t(e.update({changes:o,scrollIntoView:!0,selection:r.EditorSelection.create(i,e.selection.mainIndex),userEvent:"move.line"})),!0)}const Wt=({state:e,dispatch:t})=>Ht(e,t,!1),zt=({state:e,dispatch:t})=>Ht(e,t,!0);function _t(e,t,n){if(e.readOnly)return!1;let r=[];for(let t of Pt(e))n?r.push({from:t.from,insert:e.doc.slice(t.from,t.to)+e.lineBreak}):r.push({from:t.to,insert:e.lineBreak+e.doc.slice(t.from,t.to)});return t(e.update({changes:r,scrollIntoView:!0,userEvent:"input.copyline"})),!0}const qt=({state:e,dispatch:t})=>_t(e,t,!1),Kt=({state:e,dispatch:t})=>_t(e,t,!0),$t=e=>{if(e.state.readOnly)return!1;let{state:t}=e,n=t.changes(Pt(t).map((({from:e,to:n})=>(e>0?e--:n<t.doc.length&&n++,{from:e,to:n})))),r=K(t.selection,(t=>{let n;if(e.lineWrapping){let r=e.lineBlockAt(t.head),o=e.coordsAtPos(t.head,t.assoc||1);o&&(n=r.bottom+e.documentTop-o.bottom+e.defaultLineHeight/2)}return e.moveVertically(t,!0,n)})).map(n);return e.dispatch({changes:n,selection:r,scrollIntoView:!0,userEvent:"delete.line"}),!0},jt=({state:e,dispatch:t})=>(t(e.update(e.replaceSelection(e.lineBreak),{scrollIntoView:!0,userEvent:"input"})),!0),Yt=({state:e,dispatch:t})=>(t(e.update(e.changeByRange((t=>{let n=/^\s*/.exec(e.doc.lineAt(t.from).text)[0];return{changes:{from:t.from,to:t.to,insert:e.lineBreak+n},range:r.EditorSelection.cursor(t.from+n.length+1)}})),{scrollIntoView:!0,userEvent:"input"})),!0),Qt=Zt(!1),Xt=Zt(!0);function Zt(e){return({state:t,dispatch:n})=>{if(t.readOnly)return!1;let o=t.changeByRange((n=>{let{from:o,to:a}=n,s=t.doc.lineAt(o),c=!e&&o==a&&function(e,t){if(/\(\)|\[\]|\{\}/.test(e.sliceDoc(t-1,t+1)))return{from:t,to:t};let n,r=(0,i.syntaxTree)(e).resolveInner(t),o=r.childBefore(t),a=r.childAfter(t);return o&&a&&o.to<=t&&a.from>=t&&(n=o.type.prop(l.NodeProp.closedBy))&&n.indexOf(a.name)>-1&&e.doc.lineAt(o.to).from==e.doc.lineAt(a.from).from&&!/\S/.test(e.sliceDoc(o.to,a.from))?{from:o.to,to:a.from}:null}(t,o);e&&(o=a=(a<=s.to?s:t.doc.lineAt(a)).to);let u=new i.IndentContext(t,{simulateBreak:o,simulateDoubleBreak:!!c}),d=(0,i.getIndentation)(u,o);for(null==d&&(d=(0,r.countColumn)(/^\s*/.exec(t.doc.lineAt(o).text)[0],t.tabSize));a<s.to&&/\s/.test(s.text[a-s.from]);)a++;c?({from:o,to:a}=c):o>s.from&&o<s.from+100&&!/\S/.test(s.text.slice(0,o))&&(o=s.from);let f=["",(0,i.indentString)(t,d)];return c&&f.push((0,i.indentString)(t,u.lineIndent(s.from,-1))),{changes:{from:o,to:a,insert:r.Text.of(f)},range:r.EditorSelection.cursor(o+1+f[1].length)}}));return n(t.update(o,{scrollIntoView:!0,userEvent:"input"})),!0}}function en(e,t){let n=-1;return e.changeByRange((o=>{let i=[];for(let r=o.from;r<=o.to;){let l=e.doc.lineAt(r);l.number>n&&(o.empty||o.to>l.from)&&(t(l,i,o),n=l.number),r=l.to+1}let l=e.changes(i);return{changes:i,range:r.EditorSelection.range(l.mapPos(o.anchor,1),l.mapPos(o.head,1))}}))}const tn=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=Object.create(null),r=new i.IndentContext(e,{overrideIndentation:e=>{let t=n[e];return null==t?-1:t}}),o=en(e,((t,o,l)=>{let a=(0,i.getIndentation)(r,t.from);if(null==a)return;/\S/.test(t.text)||(a=0);let s=/^\s*/.exec(t.text)[0],c=(0,i.indentString)(e,a);(s!=c||l.from<t.from+s.length)&&(n[t.from]=a,o.push({from:t.from,to:t.from+s.length,insert:c}))}));return o.changes.empty||t(e.update(o,{userEvent:"indent"})),!0},nn=({state:e,dispatch:t})=>!e.readOnly&&(t(e.update(en(e,((t,n)=>{n.push({from:t.from,insert:e.facet(i.indentUnit)})})),{userEvent:"input.indent"})),!0),rn=({state:e,dispatch:t})=>!e.readOnly&&(t(e.update(en(e,((t,n)=>{let o=/^\s*/.exec(t.text)[0];if(!o)return;let l=(0,r.countColumn)(o,e.tabSize),a=0,s=(0,i.indentString)(e,Math.max(0,l-(0,i.getIndentUnit)(e)));for(;a<o.length&&a<s.length&&o.charCodeAt(a)==s.charCodeAt(a);)a++;n.push({from:t.from+a,to:t.from+o.length,insert:s.slice(a)})})),{userEvent:"delete.dedent"})),!0),on=e=>(e.setTabFocusMode(),!0),ln=e=>(e.setTabFocusMode(2e3),!0),an=({state:e,dispatch:t})=>e.selection.ranges.some((e=>!e.empty))?nn({state:e,dispatch:t}):(t(e.update(e.replaceSelection("\t"),{scrollIntoView:!0,userEvent:"input"})),!0),sn=[{key:"Ctrl-b",run:Z,shift:He,preventDefault:!0},{key:"Ctrl-f",run:ee,shift:We},{key:"Ctrl-p",run:Be,shift:lt},{key:"Ctrl-n",run:Ee,shift:at},{key:"Ctrl-a",run:Ue,shift:pt},{key:"Ctrl-e",run:Ve,shift:gt},{key:"Ctrl-d",run:Tt},{key:"Ctrl-h",run:Lt},{key:"Ctrl-k",run:Rt},{key:"Ctrl-Alt-h",run:Ot},{key:"Ctrl-o",run:Gt},{key:"Ctrl-t",run:Jt},{key:"Ctrl-v",run:Me}],cn=[{key:"ArrowLeft",run:Z,shift:He,preventDefault:!0},{key:"Mod-ArrowLeft",mac:"Alt-ArrowLeft",run:se,shift:je,preventDefault:!0},{mac:"Cmd-ArrowLeft",run:Ie,shift:ht,preventDefault:!0},{key:"ArrowRight",run:ee,shift:We,preventDefault:!0},{key:"Mod-ArrowRight",mac:"Alt-ArrowRight",run:ce,shift:Ye,preventDefault:!0},{mac:"Cmd-ArrowRight",run:Re,shift:mt,preventDefault:!0},{key:"ArrowUp",run:Be,shift:lt,preventDefault:!0},{mac:"Cmd-ArrowUp",run:yt,shift:wt},{mac:"Ctrl-ArrowUp",run:Le,shift:ct},{key:"ArrowDown",run:Ee,shift:at,preventDefault:!0},{mac:"Cmd-ArrowDown",run:kt,shift:St},{mac:"Ctrl-ArrowDown",run:Me,shift:ut},{key:"PageUp",run:Le,shift:ct},{key:"PageDown",run:Me,shift:ut},{key:"Home",run:Oe,shift:ft,preventDefault:!0},{key:"Mod-Home",run:yt,shift:wt},{key:"End",run:be,shift:dt,preventDefault:!0},{key:"Mod-End",run:kt,shift:St},{key:"Enter",run:Qt,shift:Qt},{key:"Mod-a",run:vt},{key:"Backspace",run:Lt,shift:Lt},{key:"Delete",run:Tt},{key:"Mod-Backspace",mac:"Alt-Backspace",run:Ot},{key:"Mod-Delete",mac:"Alt-Delete",run:It},{mac:"Mod-Backspace",run:Vt},{mac:"Mod-Delete",run:Ft}].concat(sn.map((e=>({mac:e.key,run:e.run,shift:e.shift})))),un=[{key:"Alt-ArrowLeft",mac:"Ctrl-ArrowLeft",run:ve,shift:rt},{key:"Alt-ArrowRight",mac:"Ctrl-ArrowRight",run:Ae,shift:ot},{key:"Alt-ArrowUp",run:Wt},{key:"Shift-Alt-ArrowUp",run:qt},{key:"Alt-ArrowDown",run:zt},{key:"Shift-Alt-ArrowDown",run:Kt},{key:"Escape",run:Bt},{key:"Mod-Enter",run:Xt},{key:"Alt-l",mac:"Ctrl-l",run:At},{key:"Mod-i",run:Ct,preventDefault:!0},{key:"Mod-[",run:rn},{key:"Mod-]",run:nn},{key:"Mod-Alt-\\",run:tn},{key:"Shift-Mod-k",run:$t},{key:"Shift-Mod-\\",run:Ne},{key:"Mod-/",run:a},{key:"Alt-A",run:f},{key:"Ctrl-m",mac:"Shift-Alt-m",run:on}].concat(cn),dn={key:"Tab",run:nn,shift:rn}}}]);
//# sourceMappingURL=7450.1be62db.js.map