"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6992],{70661:(e,t,r)=>{function n(e){var t,r,n=e.statementIndent,a=e.jsonld,i=e.json||a,o=e.typescript,u=e.wordCharacters||/[\w$\xa1-\uffff]/,s=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),r=e("keyword b"),n=e("keyword c"),a=e("keyword d"),i=e("operator"),o={type:"atom",style:"atom"};return{if:e("if"),while:t,with:t,else:r,do:r,try:r,finally:r,return:a,break:a,continue:a,new:e("new"),delete:n,void:n,throw:n,debugger:e("debugger"),var:e("var"),const:e("var"),let:e("var"),function:e("function"),catch:e("catch"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:i,typeof:i,instanceof:i,true:o,false:o,null:o,undefined:o,NaN:o,Infinity:o,this:e("this"),class:e("class"),super:e("atom"),yield:n,export:e("export"),import:e("import"),extends:n,await:n}}(),c=/[+\-*&%=<>!?|~^@]/,l=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function f(e,n,a){return t=e,r=a,n}function d(e,t){var r,n=e.next();if('"'==n||"'"==n)return t.tokenize=(r=n,function(e,t){var n,i=!1;if(a&&"@"==e.peek()&&e.match(l))return t.tokenize=d,f("jsonld-keyword","meta");for(;null!=(n=e.next())&&(n!=r||i);)i=!i&&"\\"==n;return i||(t.tokenize=d),f("string","string")}),t.tokenize(e,t);if("."==n&&e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return f("number","number");if("."==n&&e.match(".."))return f("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(n))return f(n);if("="==n&&e.eat(">"))return f("=>","operator");if("0"==n&&e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return f("number","number");if(/\d/.test(n))return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),f("number","number");if("/"==n)return e.eat("*")?(t.tokenize=m,m(e,t)):e.eat("/")?(e.skipToEnd(),f("comment","comment")):function(e,t,r){return t.tokenize==d&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType)||"quasi"==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-1))}(e,t)?(function(e){for(var t,r=!1,n=!1;null!=(t=e.next());){if(!r){if("/"==t&&!n)return;"["==t?n=!0:n&&"]"==t&&(n=!1)}r=!r&&"\\"==t}}(e),e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),f("regexp","string.special")):(e.eat("="),f("operator","operator",e.current()));if("`"==n)return t.tokenize=p,p(e,t);if("#"==n&&"!"==e.peek())return e.skipToEnd(),f("meta","meta");if("#"==n&&e.eatWhile(u))return f("variable","property");if("<"==n&&e.match("!--")||"-"==n&&e.match("->")&&!/\S/.test(e.string.slice(0,e.start)))return e.skipToEnd(),f("comment","comment");if(c.test(n))return">"==n&&t.lexical&&">"==t.lexical.type||(e.eat("=")?"!"!=n&&"="!=n||e.eat("="):/[<>*+\-|&?]/.test(n)&&(e.eat(n),">"==n&&e.eat(n))),"?"==n&&e.eat(".")?f("."):f("operator","operator",e.current());if(u.test(n)){e.eatWhile(u);var i=e.current();if("."!=t.lastType){if(s.propertyIsEnumerable(i)){var o=s[i];return f(o.type,o.style,i)}if("async"==i&&e.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return f("async","keyword",i)}return f("variable","variable",i)}}function m(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=d;break}n="*"==r}return f("comment","comment")}function p(e,t){for(var r,n=!1;null!=(r=e.next());){if(!n&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=d;break}n=!n&&"\\"==r}return f("quasi","string.special",e.current())}var k="([{}])";function v(e,t){t.fatArrowAt&&(t.fatArrowAt=null);var r=e.string.indexOf("=>",e.start);if(!(r<0)){if(o){var n=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,r));n&&(r=n.index)}for(var a=0,i=!1,s=r-1;s>=0;--s){var c=e.string.charAt(s),l=k.indexOf(c);if(l>=0&&l<3){if(!a){++s;break}if(0==--a){"("==c&&(i=!0);break}}else if(l>=3&&l<6)++a;else if(u.test(c))i=!0;else if(/["'\/`]/.test(c))for(;;--s){if(0==s)return;if(e.string.charAt(s-1)==c&&"\\"!=e.string.charAt(s-2)){s--;break}}else if(i&&!a){++s;break}}i&&!a&&(t.fatArrowAt=s)}}var y={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function w(e,t,r,n,a,i){this.indented=e,this.column=t,this.type=r,this.prev=a,this.info=i,null!=n&&(this.align=n)}function b(e,t){for(var r=e.localVars;r;r=r.next)if(r.name==t)return!0;for(var n=e.context;n;n=n.prev)for(r=n.vars;r;r=r.next)if(r.name==t)return!0}var h={state:null,column:null,marked:null,cc:null};function x(){for(var e=arguments.length-1;e>=0;e--)h.cc.push(arguments[e])}function g(){return x.apply(null,arguments),!0}function A(e,t){for(var r=t;r;r=r.next)if(r.name==e)return!0;return!1}function T(t){var r=h.state;if(h.marked="def",r.context)if("var"==r.lexical.info&&r.context&&r.context.block){var n=V(t,r.context);if(null!=n)return void(r.context=n)}else if(!A(t,r.localVars))return void(r.localVars=new _(t,r.localVars));e.globalVars&&!A(t,r.globalVars)&&(r.globalVars=new _(t,r.globalVars))}function V(e,t){if(t){if(t.block){var r=V(e,t.prev);return r?r==t.prev?t:new j(r,t.vars,!0):null}return A(e,t.vars)?t:new j(t.prev,new _(e,t.vars),!1)}return null}function z(e){return"public"==e||"private"==e||"protected"==e||"abstract"==e||"readonly"==e}function j(e,t,r){this.prev=e,this.vars=t,this.block=r}function _(e,t){this.name=e,this.next=t}var O=new _("this",new _("arguments",null));function $(){h.state.context=new j(h.state.context,h.state.localVars,!1),h.state.localVars=O}function E(){h.state.context=new j(h.state.context,h.state.localVars,!0),h.state.localVars=null}function q(){h.state.localVars=h.state.context.vars,h.state.context=h.state.context.prev}function P(e,t){var r=function(){var r=h.state,n=r.indented;if("stat"==r.lexical.type)n=r.lexical.indented;else for(var a=r.lexical;a&&")"==a.type&&a.align;a=a.prev)n=a.indented;r.lexical=new w(n,h.stream.column(),e,null,r.lexical,t)};return r.lex=!0,r}function U(){var e=h.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function C(e){return function t(r){return r==e?g():";"==e||"}"==r||")"==r||"]"==r?x():g(t)}}function I(e,t){return"var"==e?g(P("vardef",t),he,C(";"),U):"keyword a"==e?g(P("form"),N,I,U):"keyword b"==e?g(P("form"),I,U):"keyword d"==e?h.stream.match(/^\s*$/,!1)?g():g(P("stat"),L,C(";"),U):"debugger"==e?g(C(";")):"{"==e?g(P("}"),E,ae,U,q):";"==e?g():"if"==e?("else"==h.state.lexical.info&&h.state.cc[h.state.cc.length-1]==U&&h.state.cc.pop()(),g(P("form"),N,I,U,ze)):"function"==e?g($e):"for"==e?g(P("form"),E,je,I,q,U):"class"==e||o&&"interface"==t?(h.marked="keyword",g(P("form","class"==e?e:t),Ce,U)):"variable"==e?o&&"declare"==t?(h.marked="keyword",g(I)):o&&("module"==t||"enum"==t||"type"==t)&&h.stream.match(/^\s*\w/,!1)?(h.marked="keyword","enum"==t?g(Ge):"type"==t?g(qe,C("operator"),ce,C(";")):g(P("form"),xe,C("{"),P("}"),ae,U,U)):o&&"namespace"==t?(h.marked="keyword",g(P("form"),S,I,U)):o&&"abstract"==t?(h.marked="keyword",g(I)):g(P("stat"),Q):"switch"==e?g(P("form"),N,C("{"),P("}","switch"),E,ae,U,U,q):"case"==e?g(S,C(":")):"default"==e?g(C(":")):"catch"==e?g(P("form"),$,R,I,U,q):"export"==e?g(P("stat"),Be,U):"import"==e?g(P("stat"),Je,U):"async"==e?g(I):"@"==t?g(S,I):x(P("stat"),S,C(";"),U)}function R(e){if("("==e)return g(Pe,C(")"))}function S(e,t){return J(e,t,!1)}function B(e,t){return J(e,t,!0)}function N(e){return"("!=e?x():g(P(")"),L,C(")"),U)}function J(e,t,r){if(h.state.fatArrowAt==h.stream.start){var n=r?H:G;if("("==e)return g($,P(")"),re(Pe,")"),U,C("=>"),n,q);if("variable"==e)return x($,xe,C("=>"),n,q)}var a=r?Y:W;return y.hasOwnProperty(e)?g(a):"function"==e?g($e,a):"class"==e||o&&"interface"==t?(h.marked="keyword",g(P("form"),Ue,U)):"keyword c"==e||"async"==e?g(r?B:S):"("==e?g(P(")"),L,C(")"),U,a):"operator"==e||"spread"==e?g(r?B:S):"["==e?g(P("]"),Fe,U,a):"{"==e?ne(Z,"}",null,a):"quasi"==e?x(D,a):"new"==e?g(function(e){return function(t){return"."==t?g(e?M:K):"variable"==t&&o?g(ye,e?Y:W):x(e?B:S)}}(r)):g()}function L(e){return e.match(/[;\}\)\],]/)?x():x(S)}function W(e,t){return","==e?g(L):Y(e,t,!1)}function Y(e,t,r){var n=0==r?W:Y,a=0==r?S:B;return"=>"==e?g($,r?H:G,q):"operator"==e?/\+\+|--/.test(t)||o&&"!"==t?g(n):o&&"<"==t&&h.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?g(P(">"),re(ce,">"),U,n):"?"==t?g(S,C(":"),a):g(a):"quasi"==e?x(D,n):";"!=e?"("==e?ne(B,")","call",n):"."==e?g(X,n):"["==e?g(P("]"),L,C("]"),U,n):o&&"as"==t?(h.marked="keyword",g(ce,n)):"regexp"==e?(h.state.lastType=h.marked="operator",h.stream.backUp(h.stream.pos-h.stream.start-1),g(a)):void 0:void 0}function D(e,t){return"quasi"!=e?x():"${"!=t.slice(t.length-2)?g(D):g(L,F)}function F(e){if("}"==e)return h.marked="string.special",h.state.tokenize=p,g(D)}function G(e){return v(h.stream,h.state),x("{"==e?I:S)}function H(e){return v(h.stream,h.state),x("{"==e?I:B)}function K(e,t){if("target"==t)return h.marked="keyword",g(W)}function M(e,t){if("target"==t)return h.marked="keyword",g(Y)}function Q(e){return":"==e?g(U,I):x(W,C(";"),U)}function X(e){if("variable"==e)return h.marked="property",g()}function Z(e,t){return"async"==e?(h.marked="property",g(Z)):"variable"==e||"keyword"==h.style?(h.marked="property","get"==t||"set"==t?g(ee):(o&&h.state.fatArrowAt==h.stream.start&&(r=h.stream.match(/^\s*:\s*/,!1))&&(h.state.fatArrowAt=h.stream.pos+r[0].length),g(te))):"number"==e||"string"==e?(h.marked=a?"property":h.style+" property",g(te)):"jsonld-keyword"==e?g(te):o&&z(t)?(h.marked="keyword",g(Z)):"["==e?g(S,ie,C("]"),te):"spread"==e?g(B,te):"*"==t?(h.marked="keyword",g(Z)):":"==e?x(te):void 0;var r}function ee(e){return"variable"!=e?x(te):(h.marked="property",g($e))}function te(e){return":"==e?g(B):"("==e?x($e):void 0}function re(e,t,r){function n(a,i){if(r?r.indexOf(a)>-1:","==a){var o=h.state.lexical;return"call"==o.info&&(o.pos=(o.pos||0)+1),g((function(r,n){return r==t||n==t?x():x(e)}),n)}return a==t||i==t?g():r&&r.indexOf(";")>-1?x(e):g(C(t))}return function(r,a){return r==t||a==t?g():x(e,n)}}function ne(e,t,r){for(var n=3;n<arguments.length;n++)h.cc.push(arguments[n]);return g(P(t,r),re(e,t),U)}function ae(e){return"}"==e?g():x(I,ae)}function ie(e,t){if(o){if(":"==e)return g(ce);if("?"==t)return g(ie)}}function oe(e,t){if(o&&(":"==e||"in"==t))return g(ce)}function ue(e){if(o&&":"==e)return h.stream.match(/^\s*\w+\s+is\b/,!1)?g(S,se,ce):g(ce)}function se(e,t){if("is"==t)return h.marked="keyword",g()}function ce(e,t){return"keyof"==t||"typeof"==t||"infer"==t||"readonly"==t?(h.marked="keyword",g("typeof"==t?B:ce)):"variable"==e||"void"==t?(h.marked="type",g(ve)):"|"==t||"&"==t?g(ce):"string"==e||"number"==e||"atom"==e?g(ve):"["==e?g(P("]"),re(ce,"]",","),U,ve):"{"==e?g(P("}"),fe,U,ve):"("==e?g(re(ke,")"),le,ve):"<"==e?g(re(ce,">"),ce):"quasi"==e?x(me,ve):void 0}function le(e){if("=>"==e)return g(ce)}function fe(e){return e.match(/[\}\)\]]/)?g():","==e||";"==e?g(fe):x(de,fe)}function de(e,t){return"variable"==e||"keyword"==h.style?(h.marked="property",g(de)):"?"==t||"number"==e||"string"==e?g(de):":"==e?g(ce):"["==e?g(C("variable"),oe,C("]"),de):"("==e?x(Ee,de):e.match(/[;\}\)\],]/)?void 0:g()}function me(e,t){return"quasi"!=e?x():"${"!=t.slice(t.length-2)?g(me):g(ce,pe)}function pe(e){if("}"==e)return h.marked="string.special",h.state.tokenize=p,g(me)}function ke(e,t){return"variable"==e&&h.stream.match(/^\s*[?:]/,!1)||"?"==t?g(ke):":"==e?g(ce):"spread"==e?g(ke):x(ce)}function ve(e,t){return"<"==t?g(P(">"),re(ce,">"),U,ve):"|"==t||"."==e||"&"==t?g(ce):"["==e?g(ce,C("]"),ve):"extends"==t||"implements"==t?(h.marked="keyword",g(ce)):"?"==t?g(ce,C(":"),ce):void 0}function ye(e,t){if("<"==t)return g(P(">"),re(ce,">"),U,ve)}function we(){return x(ce,be)}function be(e,t){if("="==t)return g(ce)}function he(e,t){return"enum"==t?(h.marked="keyword",g(Ge)):x(xe,ie,Te,Ve)}function xe(e,t){return o&&z(t)?(h.marked="keyword",g(xe)):"variable"==e?(T(t),g()):"spread"==e?g(xe):"["==e?ne(Ae,"]"):"{"==e?ne(ge,"}"):void 0}function ge(e,t){return"variable"!=e||h.stream.match(/^\s*:/,!1)?("variable"==e&&(h.marked="property"),"spread"==e?g(xe):"}"==e?x():"["==e?g(S,C("]"),C(":"),ge):g(C(":"),xe,Te)):(T(t),g(Te))}function Ae(){return x(xe,Te)}function Te(e,t){if("="==t)return g(B)}function Ve(e){if(","==e)return g(he)}function ze(e,t){if("keyword b"==e&&"else"==t)return g(P("form","else"),I,U)}function je(e,t){return"await"==t?g(je):"("==e?g(P(")"),_e,U):void 0}function _e(e){return"var"==e?g(he,Oe):"variable"==e?g(Oe):x(Oe)}function Oe(e,t){return")"==e?g():";"==e?g(Oe):"in"==t||"of"==t?(h.marked="keyword",g(S,Oe)):x(S,Oe)}function $e(e,t){return"*"==t?(h.marked="keyword",g($e)):"variable"==e?(T(t),g($e)):"("==e?g($,P(")"),re(Pe,")"),U,ue,I,q):o&&"<"==t?g(P(">"),re(we,">"),U,$e):void 0}function Ee(e,t){return"*"==t?(h.marked="keyword",g(Ee)):"variable"==e?(T(t),g(Ee)):"("==e?g($,P(")"),re(Pe,")"),U,ue,q):o&&"<"==t?g(P(">"),re(we,">"),U,Ee):void 0}function qe(e,t){return"keyword"==e||"variable"==e?(h.marked="type",g(qe)):"<"==t?g(P(">"),re(we,">"),U):void 0}function Pe(e,t){return"@"==t&&g(S,Pe),"spread"==e?g(Pe):o&&z(t)?(h.marked="keyword",g(Pe)):o&&"this"==e?g(ie,Te):x(xe,ie,Te)}function Ue(e,t){return"variable"==e?Ce(e,t):Ie(e,t)}function Ce(e,t){if("variable"==e)return T(t),g(Ie)}function Ie(e,t){return"<"==t?g(P(">"),re(we,">"),U,Ie):"extends"==t||"implements"==t||o&&","==e?("implements"==t&&(h.marked="keyword"),g(o?ce:S,Ie)):"{"==e?g(P("}"),Re,U):void 0}function Re(e,t){return"async"==e||"variable"==e&&("static"==t||"get"==t||"set"==t||o&&z(t))&&h.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1)?(h.marked="keyword",g(Re)):"variable"==e||"keyword"==h.style?(h.marked="property",g(Se,Re)):"number"==e||"string"==e?g(Se,Re):"["==e?g(S,ie,C("]"),Se,Re):"*"==t?(h.marked="keyword",g(Re)):o&&"("==e?x(Ee,Re):";"==e||","==e?g(Re):"}"==e?g():"@"==t?g(S,Re):void 0}function Se(e,t){if("!"==t||"?"==t)return g(Se);if(":"==e)return g(ce,Te);if("="==t)return g(B);var r=h.state.lexical.prev;return x(r&&"interface"==r.info?Ee:$e)}function Be(e,t){return"*"==t?(h.marked="keyword",g(De,C(";"))):"default"==t?(h.marked="keyword",g(S,C(";"))):"{"==e?g(re(Ne,"}"),De,C(";")):x(I)}function Ne(e,t){return"as"==t?(h.marked="keyword",g(C("variable"))):"variable"==e?x(B,Ne):void 0}function Je(e){return"string"==e?g():"("==e?x(S):"."==e?x(W):x(Le,We,De)}function Le(e,t){return"{"==e?ne(Le,"}"):("variable"==e&&T(t),"*"==t&&(h.marked="keyword"),g(Ye))}function We(e){if(","==e)return g(Le,We)}function Ye(e,t){if("as"==t)return h.marked="keyword",g(Le)}function De(e,t){if("from"==t)return h.marked="keyword",g(S)}function Fe(e){return"]"==e?g():x(re(B,"]"))}function Ge(){return x(P("form"),xe,C("{"),P("}"),re(He,"}"),U,U)}function He(){return x(xe,Te)}return $.lex=E.lex=!0,q.lex=!0,U.lex=!0,{name:e.name,startState:function(t){var r={tokenize:d,lastType:"sof",cc:[],lexical:new w(-t,0,"block",!1),localVars:e.localVars,context:e.localVars&&new j(null,null,!1),indented:0};return e.globalVars&&"object"==typeof e.globalVars&&(r.globalVars=e.globalVars),r},token:function(e,n){if(e.sol()&&(n.lexical.hasOwnProperty("align")||(n.lexical.align=!1),n.indented=e.indentation(),v(e,n)),n.tokenize!=m&&e.eatSpace())return null;var a=n.tokenize(e,n);return"comment"==t?a:(n.lastType="operator"!=t||"++"!=r&&"--"!=r?t:"incdec",function(e,t,r,n,a){var o=e.cc;for(h.state=e,h.stream=a,h.marked=null,h.cc=o,h.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((o.length?o.pop():i?S:I)(r,n)){for(;o.length&&o[o.length-1].lex;)o.pop()();return h.marked?h.marked:"variable"==r&&b(e,n)?"variableName.local":t}}(n,a,t,r,e))},indent:function(t,r,a){if(t.tokenize==m||t.tokenize==p)return null;if(t.tokenize!=d)return 0;var i,o=r&&r.charAt(0),u=t.lexical;if(!/^\s*else\b/.test(r))for(var s=t.cc.length-1;s>=0;--s){var l=t.cc[s];if(l==U)u=u.prev;else if(l!=ze&&l!=q)break}for(;("stat"==u.type||"form"==u.type)&&("}"==o||(i=t.cc[t.cc.length-1])&&(i==W||i==Y)&&!/^[,\.=+\-*:?[\(]/.test(r));)u=u.prev;n&&")"==u.type&&"stat"==u.prev.type&&(u=u.prev);var f=u.type,k=o==f;return"vardef"==f?u.indented+("operator"==t.lastType||","==t.lastType?u.info.length+1:0):"form"==f&&"{"==o?u.indented:"form"==f?u.indented+a.unit:"stat"==f?u.indented+(function(e,t){return"operator"==e.lastType||","==e.lastType||c.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}(t,r)?n||a.unit:0):"switch"!=u.info||k||0==e.doubleIndentSwitch?u.align?u.column+(k?0:1):u.indented+(k?0:a.unit):u.indented+(/^(?:case|default)\b/.test(r)?a.unit:2*a.unit)},languageData:{indentOnInput:/^\s*(?:case .*?:|default:|\{|\})$/,commentTokens:i?void 0:{line:"//",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"`"]},wordChars:"$"}}}r.r(t),r.d(t,{javascript:()=>a,json:()=>i,jsonld:()=>o,typescript:()=>u});const a=n({name:"javascript"}),i=n({name:"json",json:!0}),o=n({name:"json",jsonld:!0}),u=n({name:"typescript",typescript:!0})}}]);
//# sourceMappingURL=6992.d2ea5ef.js.map