if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}

(function(Ea,ea){"object"===typeof exports&&"undefined"!==typeof module?module.exports=ea():"function"===typeof define&&define.amd?define(ea):Ea.CodeMirror=ea()})(this,function(){function Ea(a){return new RegExp("(^|\\s)"+a+"(?:$|\\s)\\s*")}function ea(a){for(var b=a.childNodes.length;0<b;--b)a.removeChild(a.firstChild);return a}function Z(a,b){return ea(a).appendChild(b)}function u(a,b,c,d){a=document.createElement(a);c&&(a.className=c);d&&(a.style.cssText=d);if("string"==typeof b)a.appendChild(document.createTextNode(b));
else if(b)for(c=0;c<b.length;++c)a.appendChild(b[c]);return a}function $a(a,b,c,d){a=u(a,b,c,d);a.setAttribute("role","presentation");return a}function wa(a,b){3==b.nodeType&&(b=b.parentNode);if(a.contains)return a.contains(b);do if(11==b.nodeType&&(b=b.host),b==a)return!0;while(b=b.parentNode)}function sa(){var a;try{a=document.activeElement}catch(b){a=document.body||null}for(;a&&a.shadowRoot&&a.shadowRoot.activeElement;)a=a.shadowRoot.activeElement;return a}function Fa(a,b){var c=a.className;Ea(b).test(c)||
(a.className+=(c?" ":"")+b)}function Mc(a,b){for(var c=a.split(" "),d=0;d<c.length;d++)c[d]&&!Ea(c[d]).test(b)&&(b+=" "+c[d]);return b}function Nc(a){var b=Array.prototype.slice.call(arguments,1);return function(){return a.apply(null,b)}}function Ga(a,b,c){b||(b={});for(var d in a)!a.hasOwnProperty(d)||!1===c&&b.hasOwnProperty(d)||(b[d]=a[d]);return b}function fa(a,b,c,d,e){null==b&&(b=a.search(/[^\s\u00a0]/),-1==b&&(b=a.length));d=d||0;for(e=e||0;;){var f=a.indexOf("\t",d);if(0>f||f>=b)return e+
(b-d);e+=f-d;e+=c-e%c;d=f+1}}function L(a,b){for(var c=0;c<a.length;++c)if(a[c]==b)return c;return-1}function Oc(a,b,c){for(var d=0,e=0;;){var f=a.indexOf("\t",d);-1==f&&(f=a.length);var g=f-d;if(f==a.length||e+g>=b)return d+Math.min(g,b-e);e+=f-d;e+=c-e%c;d=f+1;if(e>=b)return d}}function Pc(a){for(;fc.length<=a;)fc.push(z(fc)+" ");return fc[a]}function z(a){return a[a.length-1]}function gc(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=b(a[d],d);return c}function gg(a,b,c){for(var d=0,e=c(b);d<a.length&&
c(a[d])<=e;)d++;a.splice(d,0,b)}function Vd(){}function Wd(a,b){var c;Object.create?c=Object.create(a):(Vd.prototype=a,c=new Vd);b&&Ga(b,c);return c}function Qc(a){return/\w/.test(a)||""<a&&(a.toUpperCase()!=a.toLowerCase()||hg.test(a))}function hc(a,b){return b?-1<b.source.indexOf("\\w")&&Qc(a)?!0:b.test(a):Qc(a)}function Xd(a){for(var b in a)if(a.hasOwnProperty(b)&&a[b])return!1;return!0}function Rc(a){return 768<=a.charCodeAt(0)&&ig.test(a)}function Yd(a,b,c){for(;(0>c?0<b:b<a.length)&&Rc(a.charAt(b));)b+=
c;return b}function rb(a,b,c){for(var d=b>c?-1:1;;){if(b==c)return b;var e=(b+c)/2,e=0>d?Math.ceil(e):Math.floor(e);if(e==b)return a(e)?b:c;a(e)?c=e:b=e+d}}function jg(a,b,c){this.input=c;this.scrollbarFiller=u("div",null,"CodeMirror-scrollbar-filler");this.scrollbarFiller.setAttribute("cm-not-content","true");this.gutterFiller=u("div",null,"CodeMirror-gutter-filler");this.gutterFiller.setAttribute("cm-not-content","true");this.lineDiv=$a("div",null,"CodeMirror-code");this.selectionDiv=u("div",null,
null,"position: relative; z-index: 1");this.cursorDiv=u("div",null,"CodeMirror-cursors");this.measure=u("div",null,"CodeMirror-measure");this.lineMeasure=u("div",null,"CodeMirror-measure");this.lineSpace=$a("div",[this.measure,this.lineMeasure,this.selectionDiv,this.cursorDiv,this.lineDiv],null,"position: relative; outline: none");var d=$a("div",[this.lineSpace],"CodeMirror-lines");this.mover=u("div",[d],null,"position: relative");this.sizer=u("div",[this.mover],"CodeMirror-sizer");this.sizerWidth=
null;this.heightForcer=u("div",null,null,"position: absolute; height: 30px; width: 1px;");this.gutters=u("div",null,"CodeMirror-gutters");this.lineGutter=null;this.scroller=u("div",[this.sizer,this.heightForcer,this.gutters],"CodeMirror-scroll");this.scroller.setAttribute("tabIndex","-1");this.wrapper=u("div",[this.scrollbarFiller,this.gutterFiller,this.scroller],"CodeMirror");B&&8>D&&(this.gutters.style.zIndex=-1,this.scroller.style.paddingRight=0);P||xa&&sb||(this.scroller.draggable=!0);a&&(a.appendChild?
a.appendChild(this.wrapper):a(this.wrapper));this.reportedViewFrom=this.reportedViewTo=this.viewFrom=this.viewTo=b.first;this.view=[];this.externalMeasured=this.renderedView=null;this.lastWrapHeight=this.lastWrapWidth=this.viewOffset=0;this.updateLineNumbers=null;this.nativeBarWidth=this.barHeight=this.barWidth=0;this.scrollbarsClipped=!1;this.lineNumWidth=this.lineNumInnerWidth=this.lineNumChars=null;this.alignWidgets=!1;this.maxLine=this.cachedCharWidth=this.cachedTextHeight=this.cachedPaddingH=
null;this.maxLineLength=0;this.maxLineChanged=!1;this.wheelDX=this.wheelDY=this.wheelStartX=this.wheelStartY=null;this.shift=!1;this.activeTouch=this.selForContextMenu=null;c.init(this)}function t(a,b){b-=a.first;if(0>b||b>=a.size)throw Error("There is no line "+(b+a.first)+" in the document.");for(var c=a;!c.lines;)for(var d=0;;++d){var e=c.children[d],f=e.chunkSize();if(b<f){c=e;break}b-=f}return c.lines[b]}function Ha(a,b,c){var d=[],e=b.line;a.iter(b.line,c.line+1,function(a){a=a.text;e==c.line&&
(a=a.slice(0,c.ch));e==b.line&&(a=a.slice(b.ch));d.push(a);++e});return d}function Sc(a,b,c){var d=[];a.iter(b,c,function(a){d.push(a.text)});return d}function ma(a,b){var c=b-a.height;if(c)for(var d=a;d;d=d.parent)d.height+=c}function C(a){if(null==a.parent)return null;var b=a.parent;a=L(b.lines,a);for(var c=b.parent;c;b=c,c=c.parent)for(var d=0;c.children[d]!=b;++d)a+=c.children[d].chunkSize();return a+b.first}function Ia(a,b){var c=a.first;a:do{for(var d=0;d<a.children.length;++d){var e=a.children[d],
f=e.height;if(b<f){a=e;continue a}b-=f;c+=e.chunkSize()}return c}while(!a.lines);for(d=0;d<a.lines.length;++d){e=a.lines[d].height;if(b<e)break;b-=e}return c+d}function tb(a,b){return b>=a.first&&b<a.first+a.size}function Tc(a,b){return String(a.lineNumberFormatter(b+a.firstLineNumber))}function p(a,b,c){void 0===c&&(c=null);if(!(this instanceof p))return new p(a,b,c);this.line=a;this.ch=b;this.sticky=c}function y(a,b){return a.line-b.line||a.ch-b.ch}function Uc(a,b){return a.sticky==b.sticky&&0==
y(a,b)}function Vc(a){return p(a.line,a.ch)}function ic(a,b){return 0>y(a,b)?b:a}function jc(a,b){return 0>y(a,b)?a:b}function w(a,b){if(b.line<a.first)return p(a.first,0);var c=a.first+a.size-1;if(b.line>c)return p(c,t(a,c).text.length);var c=t(a,b.line).text.length,d=b.ch,c=null==d||d>c?p(b.line,c):0>d?p(b.line,0):b;return c}function Zd(a,b){for(var c=[],d=0;d<b.length;d++)c[d]=w(a,b[d]);return c}function kc(a,b,c){this.marker=a;this.from=b;this.to=c}function ub(a,b){if(a)for(var c=0;c<a.length;++c){var d=
a[c];if(d.marker==b)return d}}function Wc(a,b){if(b.full)return null;var c=tb(a,b.from.line)&&t(a,b.from.line).markedSpans,d=tb(a,b.to.line)&&t(a,b.to.line).markedSpans;if(!c&&!d)return null;var e=b.from.ch,f=b.to.ch,g=0==y(b.from,b.to),h;if(c)for(var k=0;k<c.length;++k){var l=c[k],m=l.marker;if(null==l.from||(m.inclusiveLeft?l.from<=e:l.from<e)||!(l.from!=e||"bookmark"!=m.type||g&&l.marker.insertLeft)){var q=null==l.to||(m.inclusiveRight?l.to>=e:l.to>e);(h||(h=[])).push(new kc(m,l.from,q?null:l.to))}}var c=
h,n;if(d)for(h=0;h<d.length;++h)if(k=d[h],l=k.marker,null==k.to||(l.inclusiveRight?k.to>=f:k.to>f)||k.from==f&&"bookmark"==l.type&&(!g||k.marker.insertLeft))m=null==k.from||(l.inclusiveLeft?k.from<=f:k.from<f),(n||(n=[])).push(new kc(l,m?null:k.from-f,null==k.to?null:k.to-f));d=n;f=1==b.text.length;g=z(b.text).length+(f?e:0);if(c)for(n=0;n<c.length;++n)if(h=c[n],null==h.to)(k=ub(d,h.marker),k)?f&&(h.to=null==k.to?null:k.to+g):h.to=e;if(d)for(e=0;e<d.length;++e)n=d[e],null!=n.to&&(n.to+=g),null==n.from?
ub(c,n.marker)||(n.from=g,f&&(c||(c=[])).push(n)):(n.from+=g,f&&(c||(c=[])).push(n));c&&(c=$d(c));d&&d!=c&&(d=$d(d));e=[c];if(!f){var f=b.text.length-2,r;if(0<f&&c)for(g=0;g<c.length;++g)null==c[g].to&&(r||(r=[])).push(new kc(c[g].marker,null,null));for(c=0;c<f;++c)e.push(r);e.push(d)}return e}function $d(a){for(var b=0;b<a.length;++b){var c=a[b];null!=c.from&&c.from==c.to&&!1!==c.marker.clearWhenEmpty&&a.splice(b--,1)}return a.length?a:null}function kg(a,b,c){var d=null;a.iter(b.line,c.line+1,function(a){if(a.markedSpans)for(var b=
0;b<a.markedSpans.length;++b){var c=a.markedSpans[b].marker;!c.readOnly||d&&-1!=L(d,c)||(d||(d=[])).push(c)}});if(!d)return null;a=[{from:b,to:c}];for(b=0;b<d.length;++b){c=d[b];for(var e=c.find(0),f=0;f<a.length;++f){var g=a[f];if(!(0>y(g.to,e.from)||0<y(g.from,e.to))){var h=[f,1],k=y(g.from,e.from),l=y(g.to,e.to);(0>k||!c.inclusiveLeft&&!k)&&h.push({from:g.from,to:e.from});(0<l||!c.inclusiveRight&&!l)&&h.push({from:e.to,to:g.to});a.splice.apply(a,h);f+=h.length-3}}}return a}function ae(a){var b=
a.markedSpans;if(b){for(var c=0;c<b.length;++c)b[c].marker.detachLine(a);a.markedSpans=null}}function be(a,b){if(b){for(var c=0;c<b.length;++c)b[c].marker.attachLine(a);a.markedSpans=b}}function ce(a,b){var c=a.lines.length-b.lines.length;if(0!=c)return c;var c=a.find(),d=b.find(),e=y(c.from,d.from)||(a.inclusiveLeft?-1:0)-(b.inclusiveLeft?-1:0);return e?-e:(c=y(c.to,d.to)||(a.inclusiveRight?1:0)-(b.inclusiveRight?1:0))?c:b.id-a.id}function Ja(a,b){var c=ya&&a.markedSpans,d;if(c)for(var e=void 0,
f=0;f<c.length;++f)e=c[f],e.marker.collapsed&&null==(b?e.from:e.to)&&(!d||0>ce(d,e.marker))&&(d=e.marker);return d}function de(a,b,c,d,e){a=t(a,b);if(a=ya&&a.markedSpans)for(b=0;b<a.length;++b){var f=a[b];if(f.marker.collapsed){var g=f.marker.find(0),h=y(g.from,c)||(f.marker.inclusiveLeft?-1:0)-(e.inclusiveLeft?-1:0),k=y(g.to,d)||(f.marker.inclusiveRight?1:0)-(e.inclusiveRight?1:0);if(!(0<=h&&0>=k||0>=h&&0<=k)&&(0>=h&&(f.marker.inclusiveRight&&e.inclusiveLeft?0<=y(g.to,c):0<y(g.to,c))||0<=h&&(f.marker.inclusiveRight&&
e.inclusiveLeft?0>=y(g.from,d):0>y(g.from,d))))return!0}}}function na(a){for(var b;b=Ja(a,!0);)a=b.find(-1,!0).line;return a}function Xc(a,b){var c=t(a,b),d=na(c);return c==d?b:C(d)}function ee(a,b){if(b>a.lastLine())return b;var c=t(a,b),d;if(!Ka(a,c))return b;for(;d=Ja(c,!1);)c=d.find(1,!0).line;return C(c)+1}function Ka(a,b){var c=ya&&b.markedSpans;if(c)for(var d=void 0,e=0;e<c.length;++e)if(d=c[e],d.marker.collapsed&&(null==d.from||!d.marker.widgetNode&&0==d.from&&d.marker.inclusiveLeft&&Yc(a,
b,d)))return!0}function Yc(a,b,c){if(null==c.to)return b=c.marker.find(1,!0),Yc(a,b.line,ub(b.line.markedSpans,c.marker));if(c.marker.inclusiveRight&&c.to==b.text.length)return!0;for(var d=void 0,e=0;e<b.markedSpans.length;++e)if(d=b.markedSpans[e],d.marker.collapsed&&!d.marker.widgetNode&&d.from==c.to&&(null==d.to||d.to!=c.from)&&(d.marker.inclusiveLeft||c.marker.inclusiveRight)&&Yc(a,b,d))return!0}function oa(a){a=na(a);for(var b=0,c=a.parent,d=0;d<c.lines.length;++d){var e=c.lines[d];if(e==a)break;
else b+=e.height}for(a=c.parent;a;c=a,a=c.parent)for(d=0;d<a.children.length&&(e=a.children[d],e!=c);++d)b+=e.height;return b}function lc(a){if(0==a.height)return 0;for(var b=a.text.length,c,d=a;c=Ja(d,!0);)c=c.find(0,!0),d=c.from.line,b+=c.from.ch-c.to.ch;for(d=a;c=Ja(d,!1);)a=c.find(0,!0),b-=d.text.length-a.from.ch,d=a.to.line,b+=d.text.length-a.to.ch;return b}function Zc(a){var b=a.display;a=a.doc;b.maxLine=t(a,a.first);b.maxLineLength=lc(b.maxLine);b.maxLineChanged=!0;a.iter(function(a){var d=
lc(a);d>b.maxLineLength&&(b.maxLineLength=d,b.maxLine=a)})}function lg(a,b,c,d){if(!a)return d(b,c,"ltr",0);for(var e=!1,f=0;f<a.length;++f){var g=a[f];if(g.from<c&&g.to>b||b==c&&g.to==b)d(Math.max(g.from,b),Math.min(g.to,c),1==g.level?"rtl":"ltr",f),e=!0}e||d(b,c,"ltr")}function vb(a,b,c){var d;wb=null;for(var e=0;e<a.length;++e){var f=a[e];if(f.from<b&&f.to>b)return e;f.to==b&&(f.from!=f.to&&"before"==c?d=e:wb=e);f.from==b&&(f.from!=f.to&&"before"!=c?d=e:wb=e)}return null!=d?d:wb}function ta(a,
b){var c=a.order;null==c&&(c=a.order=mg(a.text,b));return c}function aa(a,b,c){if(a.removeEventListener)a.removeEventListener(b,c,!1);else if(a.detachEvent)a.detachEvent("on"+b,c);else{var d=(a=a._handlers)&&a[b];d&&(c=L(d,c),-1<c&&(a[b]=d.slice(0,c).concat(d.slice(c+1))))}}function F(a,b){var c=a._handlers&&a._handlers[b]||mc;if(c.length)for(var d=Array.prototype.slice.call(arguments,2),e=0;e<c.length;++e)c[e].apply(null,d)}function I(a,b,c){"string"==typeof b&&(b={type:b,preventDefault:function(){this.defaultPrevented=
!0}});F(a,c||b.type,a,b);return $c(b)||b.codemirrorIgnore}function fe(a){var b=a._handlers&&a._handlers.cursorActivity;if(b){a=a.curOp.cursorActivityHandlers||(a.curOp.cursorActivityHandlers=[]);for(var c=0;c<b.length;++c)-1==L(a,b[c])&&a.push(b[c])}}function ga(a,b){return 0<(a._handlers&&a._handlers[b]||mc).length}function ab(a){a.prototype.on=function(a,c){v(this,a,c)};a.prototype.off=function(a,c){aa(this,a,c)}}function Q(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function ge(a){a.stopPropagation?
a.stopPropagation():a.cancelBubble=!0}function $c(a){return null!=a.defaultPrevented?a.defaultPrevented:0==a.returnValue}function xb(a){Q(a);ge(a)}function he(a){var b=a.which;null==b&&(a.button&1?b=1:a.button&2?b=3:a.button&4&&(b=2));ha&&a.ctrlKey&&1==b&&(b=3);return b}function ng(a){if(null==ad){var b=u("span","​");Z(a,u("span",[b,document.createTextNode("x")]));0!=a.firstChild.offsetHeight&&(ad=1>=b.offsetWidth&&2<b.offsetHeight&&!(B&&8>D))}a=ad?u("span","​"):u("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");
a.setAttribute("cm-text","");return a}function og(a,b){2<arguments.length&&(b.dependencies=Array.prototype.slice.call(arguments,2));bd[a]=b}function nc(a){if("string"==typeof a&&bb.hasOwnProperty(a))a=bb[a];else if(a&&"string"==typeof a.name&&bb.hasOwnProperty(a.name)){var b=bb[a.name];"string"==typeof b&&(b={name:b});a=Wd(b,a);a.name=b.name}else{if("string"==typeof a&&/^[\w\-]+\/[\w\-]+\+xml$/.test(a))return nc("application/xml");if("string"==typeof a&&/^[\w\-]+\/[\w\-]+\+json$/.test(a))return nc("application/json")}return"string"==
typeof a?{name:a}:a||{name:"null"}}function cd(a,b){b=nc(b);var c=bd[b.name];if(!c)return cd(a,"text/plain");c=c(a,b);if(cb.hasOwnProperty(b.name)){var d=cb[b.name],e;for(e in d)d.hasOwnProperty(e)&&(c.hasOwnProperty(e)&&(c["_"+e]=c[e]),c[e]=d[e])}c.name=b.name;b.helperType&&(c.helperType=b.helperType);if(b.modeProps)for(var f in b.modeProps)c[f]=b.modeProps[f];return c}function pg(a,b){var c=cb.hasOwnProperty(a)?cb[a]:cb[a]={};Ga(b,c)}function La(a,b){if(!0===b)return b;if(a.copyState)return a.copyState(b);
var c={},d;for(d in b){var e=b[d];e instanceof Array&&(e=e.concat([]));c[d]=e}return c}function dd(a,b){for(var c;a.innerMode;){c=a.innerMode(b);if(!c||c.mode==a)break;b=c.state;a=c.mode}return c||{mode:a,state:b}}function ie(a,b,c){return a.startState?a.startState(b,c):!0}function je(a,b,c,d){var e=[a.state.modeGen],f={};ke(a,b.text,a.doc.mode,c,function(a,b){return e.push(a,b)},f,d);var g=c.state;d=function(d){c.baseTokens=e;var h=a.state.overlays[d],m=1,q=0;c.state=!0;ke(a,b.text,h.mode,c,function(a,
b){for(var d=m;q<a;){var c=e[m];c>a&&e.splice(m,1,a,e[m+1],c);m+=2;q=Math.min(a,c)}if(b)if(h.opaque)e.splice(d,m-d,a,"overlay "+b),m=d+2;else for(;d<m;d+=2)c=e[d+1],e[d+1]=(c?c+" ":"")+"overlay "+b},f);c.state=g;c.baseTokens=null;c.baseTokenPos=1};for(var h=0;h<a.state.overlays.length;++h)d(h);return{styles:e,classes:f.bgClass||f.textClass?f:null}}function le(a,b,c){if(!b.styles||b.styles[0]!=a.state.modeGen){var d=yb(a,C(b)),e=b.text.length>a.options.maxHighlightLength&&La(a.doc.mode,d.state),f=
je(a,b,d);e&&(d.state=e);b.stateAfter=d.save(!e);b.styles=f.styles;f.classes?b.styleClasses=f.classes:b.styleClasses&&(b.styleClasses=null);c===a.doc.highlightFrontier&&(a.doc.modeFrontier=Math.max(a.doc.modeFrontier,++a.doc.highlightFrontier))}return b.styles}function yb(a,b,c){var d=a.doc,e=a.display;if(!d.mode.startState)return new pa(d,!0,b);var f=qg(a,b,c),g=f>d.first&&t(d,f-1).stateAfter,h=g?pa.fromSaved(d,g,f):new pa(d,ie(d.mode),f);d.iter(f,b,function(d){ed(a,d.text,h);var c=h.line;d.stateAfter=
c==b-1||0==c%5||c>=e.viewFrom&&c<e.viewTo?h.save():null;h.nextLine()});c&&(d.modeFrontier=h.line);return h}function ed(a,b,c,d){var e=a.doc.mode;a=new G(b,a.options.tabSize,c);a.start=a.pos=d||0;for(""==b&&me(e,c.state);!a.eol();)fd(e,a,c.state),a.start=a.pos}function me(a,b){if(a.blankLine)return a.blankLine(b);if(a.innerMode){var c=dd(a,b);if(c.mode.blankLine)return c.mode.blankLine(c.state)}}function fd(a,b,c,d){for(var e=0;10>e;e++){d&&(d[0]=dd(a,c).mode);var f=a.token(b,c);if(b.pos>b.start)return f}throw Error("Mode "+
a.name+" failed to advance stream.");}function ne(a,b,c,d){var e=a.doc,f=e.mode,g;b=w(e,b);var h=t(e,b.line);c=yb(a,b.line,c);a=new G(h.text,a.options.tabSize,c);var k;for(d&&(k=[]);(d||a.pos<b.ch)&&!a.eol();)a.start=a.pos,g=fd(f,a,c.state),d&&k.push(new oe(a,g,La(e.mode,c.state)));return d?k:new oe(a,g,c.state)}function pe(a,b){if(a)for(;;){var c=a.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!c)break;a=a.slice(0,c.index)+a.slice(c.index+c[0].length);var d=c[1]?"bgClass":"textClass";null==b[d]?
b[d]=c[2]:(new RegExp("(?:^|s)"+c[2]+"(?:$|s)")).test(b[d])||(b[d]+=" "+c[2])}return a}function ke(a,b,c,d,e,f,g){var h=c.flattenSpans;null==h&&(h=a.options.flattenSpans);var k=0,l=null,m=new G(b,a.options.tabSize,d),q,n=a.options.addModeClass&&[null];for(""==b&&pe(me(c,d.state),f);!m.eol();){m.pos>a.options.maxHighlightLength?(h=!1,g&&ed(a,b,d,m.pos),m.pos=b.length,q=null):q=pe(fd(c,m,d.state,n),f);if(n){var r=n[0].name;r&&(q="m-"+(q?r+" "+q:r))}if(!h||l!=q){for(;k<m.start;)k=Math.min(m.start,k+
5E3),e(k,l);l=q}m.start=m.pos}for(;k<m.pos;)a=Math.min(m.pos,k+5E3),e(a,l),k=a}function qg(a,b,c){for(var d,e,f=a.doc,g=c?-1:b-(a.doc.mode.innerMode?1E3:100);b>g;--b){if(b<=f.first)return f.first;var h=t(f,b-1),k=h.stateAfter;if(k&&(!c||b+(k instanceof oc?k.lookAhead:0)<=f.modeFrontier))return b;h=fa(h.text,null,a.options.tabSize);if(null==e||d>h)e=b-1,d=h}return e}function rg(a,b){a.modeFrontier=Math.min(a.modeFrontier,b);if(!(a.highlightFrontier<b-10)){for(var c=a.first,d=b-1;d>c;d--){var e=t(a,
d).stateAfter;if(e&&(!(e instanceof oc)||d+e.lookAhead<b)){c=d+1;break}}a.highlightFrontier=Math.min(a.highlightFrontier,c)}}function qe(a,b){if(!a||/^\s*$/.test(a))return null;var c=b.addModeClass?sg:tg;return c[a]||(c[a]=a.replace(/\S+/g,"cm-$\x26"))}function re(a,b){var c=$a("span",null,null,P?"padding-right: .1px":null),c={pre:$a("pre",[c],"CodeMirror-line"),content:c,col:0,pos:0,cm:a,trailingSpace:!1,splitSpaces:(B||P)&&a.getOption("lineWrapping")};b.measure={};for(var d=0;d<=(b.rest?b.rest.length:
0);d++){var e=d?b.rest[d-1]:b.line,f=void 0;c.pos=0;c.addToken=ug;var g;g=a.display.measure;if(null!=gd)g=gd;else{var h=Z(g,document.createTextNode("AخA")),k=db(h,0,1).getBoundingClientRect(),h=db(h,1,2).getBoundingClientRect();ea(g);g=k&&k.left!=k.right?gd=3>h.right-k.right:!1}g&&(f=ta(e,a.doc.direction))&&(c.addToken=vg(c.addToken,f));c.map=[];g=b!=a.display.externalMeasured&&C(e);a:{f=c;g=le(a,e,g);var l=e.markedSpans,k=e.text,h=0;if(l)for(var m=k.length,q=0,n=1,r="",W=void 0,p=void 0,t=0,u=void 0,
v=void 0,y=void 0,w=void 0,R=void 0;;){if(t==q){for(var u=v=y=w=p="",R=null,t=Infinity,A=[],X=void 0,z=0;z<l.length;++z){var M=l[z],x=M.marker;"bookmark"==x.type&&M.from==q&&x.widgetNode?A.push(x):M.from<=q&&(null==M.to||M.to>q||x.collapsed&&M.to==q&&M.from==q)?(null!=M.to&&M.to!=q&&t>M.to&&(t=M.to,v=""),x.className&&(u+=" "+x.className),x.css&&(p=(p?p+";":"")+x.css),x.startStyle&&M.from==q&&(y+=" "+x.startStyle),x.endStyle&&M.to==t&&(X||(X=[])).push(x.endStyle,M.to),x.title&&!w&&(w=x.title),x.collapsed&&
(!R||0>ce(R.marker,x))&&(R=M)):M.from>q&&t>M.from&&(t=M.from)}if(X)for(z=0;z<X.length;z+=2)X[z+1]==t&&(v+=" "+X[z]);if(!R||R.from==q)for(X=0;X<A.length;++X)se(f,0,A[X]);if(R&&(R.from||0)==q){se(f,(null==R.to?m+1:R.to)-q,R.marker,null==R.from);if(null==R.to)break a;R.to==q&&(R=!1)}}if(q>=m)break;for(A=Math.min(m,t);;){if(r){X=q+r.length;R||(z=X>A?r.slice(0,A-q):r,f.addToken(f,z,W?W+u:u,y,q+z.length==t?v:"",w,p));if(X>=A){r=r.slice(A-q);q=A;break}q=X;y=""}r=k.slice(h,h=g[n++]);W=qe(g[n++],f.cm.options)}}else for(l=
1;l<g.length;l+=2)f.addToken(f,k.slice(h,h=g[l]),qe(g[l+1],f.cm.options))}e.styleClasses&&(e.styleClasses.bgClass&&(c.bgClass=Mc(e.styleClasses.bgClass,c.bgClass||"")),e.styleClasses.textClass&&(c.textClass=Mc(e.styleClasses.textClass,c.textClass||"")));0==c.map.length&&c.map.push(0,0,c.content.appendChild(ng(a.display.measure)));0==d?(b.measure.map=c.map,b.measure.cache={}):((b.measure.maps||(b.measure.maps=[])).push(c.map),(b.measure.caches||(b.measure.caches=[])).push({}))}P&&(d=c.content.lastChild,
/\bcm-tab\b/.test(d.className)||d.querySelector&&d.querySelector(".cm-tab"))&&(c.content.className="cm-tab-wrap-hack");F(a,"renderLine",a,b.line,c.pre);c.pre.className&&(c.textClass=Mc(c.pre.className,c.textClass||""));return c}function wg(a){var b=u("span","•","cm-invalidchar");b.title="\\u"+a.charCodeAt(0).toString(16);b.setAttribute("aria-label",b.title);return b}function ug(a,b,c,d,e,f,g){if(b){var h;if(a.splitSpaces)if(h=a.trailingSpace,1<b.length&&!/  /.test(b))h=b;else{for(var k="",l=0;l<b.length;l++){var m=
b.charAt(l);" "!=m||!h||l!=b.length-1&&32!=b.charCodeAt(l+1)||(m=" ");k+=m;h=" "==m}h=k}else h=b;k=h;l=a.cm.state.specialChars;m=!1;if(l.test(b)){h=document.createDocumentFragment();for(var q=0;;){l.lastIndex=q;var n=l.exec(b),r=n?n.index-q:b.length-q;if(r){var W=document.createTextNode(k.slice(q,q+r));B&&9>D?h.appendChild(u("span",[W])):h.appendChild(W);a.map.push(a.pos,a.pos+r,W);a.col+=r;a.pos+=r}if(!n)break;q+=r+1;r=void 0;"\t"==n[0]?(n=a.cm.options.tabSize,n-=a.col%n,r=h.appendChild(u("span",
Pc(n),"cm-tab")),r.setAttribute("role","presentation"),r.setAttribute("cm-text","\t"),a.col+=n):("\r"==n[0]||"\n"==n[0]?(r=h.appendChild(u("span","\r"==n[0]?"␍":"␤","cm-invalidchar")),r.setAttribute("cm-text",n[0])):(r=a.cm.options.specialCharPlaceholder(n[0]),r.setAttribute("cm-text",n[0]),B&&9>D?h.appendChild(u("span",[r])):h.appendChild(r)),a.col+=1);a.map.push(a.pos,a.pos+1,r);a.pos++}}else a.col+=b.length,h=document.createTextNode(k),a.map.push(a.pos,a.pos+b.length,h),B&&9>D&&(m=!0),a.pos+=b.length;
a.trailingSpace=32==k.charCodeAt(b.length-1);if(c||d||e||m||g)return b=c||"",d&&(b+=d),e&&(b+=e),d=u("span",[h],b,g),f&&(d.title=f),a.content.appendChild(d);a.content.appendChild(h)}}function vg(a,b){return function(c,d,e,f,g,h,k){e=e?e+" cm-force-border":"cm-force-border";for(var l=c.pos,m=l+d.length;;){for(var q=void 0,n=0;n<b.length&&!(q=b[n],q.to>l&&q.from<=l);n++);if(q.to>=m)return a(c,d,e,f,g,h,k);a(c,d.slice(0,q.to-l),e,f,null,h,k);f=null;d=d.slice(q.to-l);l=q.to}}}function se(a,b,c,d){var e=
!d&&c.widgetNode;e&&a.map.push(a.pos,a.pos+b,e);!d&&a.cm.display.input.needsContentAttribute&&(e||(e=a.content.appendChild(document.createElement("span"))),e.setAttribute("cm-marker",c.id));e&&(a.cm.display.input.setUneditable(e),a.content.appendChild(e));a.pos+=b;a.trailingSpace=!1}function te(a,b,c){for(var d=this.line=b,e;d=Ja(d,!1);)d=d.find(1,!0).line,(e||(e=[])).push(d);this.size=(this.rest=e)?C(z(this.rest))-c+1:1;this.node=this.text=null;this.hidden=Ka(a,b)}function pc(a,b,c){var d=[],e;for(e=
b;e<c;)b=new te(a.doc,t(a.doc,e),e),e+=b.size,d.push(b);return d}function xg(a,b){var c=a.ownsGroup;if(c)try{var d=c.delayedCallbacks,e=0;do{for(;e<d.length;e++)d[e].call(null);for(var f=0;f<c.ops.length;f++){var g=c.ops[f];if(g.cursorActivityHandlers)for(;g.cursorActivityCalled<g.cursorActivityHandlers.length;)g.cursorActivityHandlers[g.cursorActivityCalled++].call(null,g.cm)}}while(e<d.length)}finally{eb=null,b(c)}}function N(a,b){var c=a._handlers&&a._handlers[b]||mc;if(c.length){var d=Array.prototype.slice.call(arguments,
2),e;eb?e=eb.delayedCallbacks:zb?e=zb:(e=zb=[],setTimeout(yg,0));for(var f=function(a){e.push(function(){return c[a].apply(null,d)})},g=0;g<c.length;++g)f(g)}}function yg(){var a=zb;zb=null;for(var b=0;b<a.length;++b)a[b]()}function ue(a,b,c,d){for(var e=0;e<b.changes.length;e++){var f=b.changes[e];if("text"==f){var f=a,g=b,h=g.text.className,k=ve(f,g);g.text==g.node&&(g.node=k.pre);g.text.parentNode.replaceChild(k.pre,g.text);g.text=k.pre;k.bgClass!=g.bgClass||k.textClass!=g.textClass?(g.bgClass=
k.bgClass,g.textClass=k.textClass,hd(f,g)):h&&(g.text.className=h)}else if("gutter"==f)we(a,b,c,d);else if("class"==f)hd(a,b);else if("widget"==f){f=a;g=b;h=d;g.alignable&&(g.alignable=null);for(var k=g.node.firstChild,l=void 0;k;k=l)l=k.nextSibling,"CodeMirror-linewidget"==k.className&&g.node.removeChild(k);xe(f,g,h)}}b.changes=null}function Ab(a){a.node==a.text&&(a.node=u("div",null,null,"position: relative"),a.text.parentNode&&a.text.parentNode.replaceChild(a.node,a.text),a.node.appendChild(a.text),
B&&8>D&&(a.node.style.zIndex=2));return a.node}function ve(a,b){var c=a.display.externalMeasured;return c&&c.line==b.line?(a.display.externalMeasured=null,b.measure=c.measure,c.built):re(a,b)}function hd(a,b){var c=b.bgClass?b.bgClass+" "+(b.line.bgClass||""):b.line.bgClass;c&&(c+=" CodeMirror-linebackground");if(b.background)c?b.background.className=c:(b.background.parentNode.removeChild(b.background),b.background=null);else if(c){var d=Ab(b);b.background=d.insertBefore(u("div",null,c),d.firstChild);
a.display.input.setUneditable(b.background)}b.line.wrapClass?Ab(b).className=b.line.wrapClass:b.node!=b.text&&(b.node.className="");b.text.className=(b.textClass?b.textClass+" "+(b.line.textClass||""):b.line.textClass)||""}function we(a,b,c,d){b.gutter&&(b.node.removeChild(b.gutter),b.gutter=null);b.gutterBackground&&(b.node.removeChild(b.gutterBackground),b.gutterBackground=null);if(b.line.gutterClass){var e=Ab(b);b.gutterBackground=u("div",null,"CodeMirror-gutter-background "+b.line.gutterClass,
"left: "+(a.options.fixedGutter?d.fixedPos:-d.gutterTotalWidth)+"px; width: "+d.gutterTotalWidth+"px");a.display.input.setUneditable(b.gutterBackground);e.insertBefore(b.gutterBackground,b.text)}e=b.line.gutterMarkers;if(a.options.lineNumbers||e){var f=Ab(b),g=b.gutter=u("div",null,"CodeMirror-gutter-wrapper","left: "+(a.options.fixedGutter?d.fixedPos:-d.gutterTotalWidth)+"px");a.display.input.setUneditable(g);f.insertBefore(g,b.text);b.line.gutterClass&&(g.className+=" "+b.line.gutterClass);!a.options.lineNumbers||
e&&e["CodeMirror-linenumbers"]||(b.lineNumber=g.appendChild(u("div",Tc(a.options,c),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+d.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+a.display.lineNumInnerWidth+"px")));if(e)for(b=0;b<a.options.gutters.length;++b)c=a.options.gutters[b],(f=e.hasOwnProperty(c)&&e[c])&&g.appendChild(u("div",[f],"CodeMirror-gutter-elt","left: "+d.gutterLeft[c]+"px; width: "+d.gutterWidth[c]+"px"))}}function zg(a,b,c,d){var e=ve(a,b);b.text=b.node=e.pre;e.bgClass&&
(b.bgClass=e.bgClass);e.textClass&&(b.textClass=e.textClass);hd(a,b);we(a,b,c,d);xe(a,b,d);return b.node}function xe(a,b,c){ye(a,b.line,b,c,!0);if(b.rest)for(var d=0;d<b.rest.length;d++)ye(a,b.rest[d],b,c,!1)}function ye(a,b,c,d,e){if(b.widgets){var f=Ab(c),g=0;for(b=b.widgets;g<b.length;++g){var h=b[g],k=u("div",[h.node],"CodeMirror-linewidget");h.handleMouseEvents||k.setAttribute("cm-ignore-events","true");var l=h,m=k,q=d;if(l.noHScroll){(c.alignable||(c.alignable=[])).push(m);var n=q.wrapperWidth;
m.style.left=q.fixedPos+"px";l.coverGutter||(n-=q.gutterTotalWidth,m.style.paddingLeft=q.gutterTotalWidth+"px");m.style.width=n+"px"}l.coverGutter&&(m.style.zIndex=5,m.style.position="relative",l.noHScroll||(m.style.marginLeft=-q.gutterTotalWidth+"px"));a.display.input.setUneditable(k);e&&h.above?f.insertBefore(k,c.gutter||c.text):f.appendChild(k);N(h,"redraw")}}}function Bb(a){if(null!=a.height)return a.height;var b=a.doc.cm;if(!b)return 0;if(!wa(document.body,a.node)){var c="position: relative;";
a.coverGutter&&(c+="margin-left: -"+b.display.gutters.offsetWidth+"px;");a.noHScroll&&(c+="width: "+b.display.wrapper.clientWidth+"px;");Z(b.display.measure,u("div",[a.node],null,c))}return a.height=a.node.parentNode.offsetHeight}function ua(a,b){for(var c=b.target||b.srcElement;c!=a.wrapper;c=c.parentNode)if(!c||1==c.nodeType&&"true"==c.getAttribute("cm-ignore-events")||c.parentNode==a.sizer&&c!=a.mover)return!0}function id(a){return a.mover.offsetHeight-a.lineSpace.offsetHeight}function ze(a){if(a.cachedPaddingH)return a.cachedPaddingH;
var b=Z(a.measure,u("pre","x")),b=window.getComputedStyle?window.getComputedStyle(b):b.currentStyle,b={left:parseInt(b.paddingLeft),right:parseInt(b.paddingRight)};isNaN(b.left)||isNaN(b.right)||(a.cachedPaddingH=b);return b}function qa(a){return 30-a.display.nativeBarWidth}function Ma(a){return a.display.scroller.clientWidth-qa(a)-a.display.barWidth}function jd(a){return a.display.scroller.clientHeight-qa(a)-a.display.barHeight}function Ae(a,b,c){if(a.line==b)return{map:a.measure.map,cache:a.measure.cache};
for(var d=0;d<a.rest.length;d++)if(a.rest[d]==b)return{map:a.measure.maps[d],cache:a.measure.caches[d]};for(b=0;b<a.rest.length;b++)if(C(a.rest[b])>c)return{map:a.measure.maps[b],cache:a.measure.caches[b],before:!0}}function kd(a,b){if(b>=a.display.viewFrom&&b<a.display.viewTo)return a.display.view[Na(a,b)];var c=a.display.externalMeasured;if(c&&b>=c.lineN&&b<c.lineN+c.size)return c}function Oa(a,b){var c=C(b),d=kd(a,c);d&&!d.text?d=null:d&&d.changes&&(ue(a,d,c,ld(a)),a.curOp.forceUpdate=!0);if(!d){var e;
e=na(b);d=C(e);e=a.display.externalMeasured=new te(a.doc,e,d);e.lineN=d;d=e.built=re(a,e);e.text=d.pre;Z(a.display.lineMeasure,d.pre);d=e}c=Ae(d,b,c);return{line:b,view:d,rect:null,map:c.map,cache:c.cache,before:c.before,hasHeights:!1}}function ia(a,b,c,d,e){b.before&&(c=-1);var f=c+(d||"");if(b.cache.hasOwnProperty(f))a=b.cache[f];else{b.rect||(b.rect=b.view.text.getBoundingClientRect());if(!b.hasHeights){var g=b.view,h=b.rect,k=a.options.lineWrapping,l=k&&Ma(a);if(!g.measure.heights||k&&g.measure.width!=
l){var m=g.measure.heights=[];if(k)for(g.measure.width=l,g=g.text.firstChild.getClientRects(),k=0;k<g.length-1;k++){var l=g[k],q=g[k+1];2<Math.abs(l.bottom-q.bottom)&&m.push((l.bottom+q.top)/2-h.top)}m.push(h.bottom-h.top)}b.hasHeights=!0}m=d;g=Be(b.map,c,m);d=g.node;h=g.start;k=g.end;c=g.collapse;var n;if(3==d.nodeType){for(var r=0;4>r;r++){for(;h&&Rc(b.line.text.charAt(g.coverStart+h));)--h;for(;g.coverStart+k<g.coverEnd&&Rc(b.line.text.charAt(g.coverStart+k));)++k;if(B&&9>D&&0==h&&k==g.coverEnd-
g.coverStart)n=d.parentNode.getBoundingClientRect();else{n=db(d,h,k).getClientRects();k=Ce;if("left"==m)for(l=0;l<n.length&&(k=n[l]).left==k.right;l++);else for(l=n.length-1;0<=l&&(k=n[l]).left==k.right;l--);n=k}if(n.left||n.right||0==h)break;k=h;--h;c="right"}B&&11>D&&((r=!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI)||(null!=md?r=md:(m=Z(a.display.measure,u("span","x")),r=m.getBoundingClientRect(),m=db(m,0,1).getBoundingClientRect(),r=md=1<Math.abs(r.left-m.left)),
r=!r),r||(r=screen.logicalXDPI/screen.deviceXDPI,m=screen.logicalYDPI/screen.deviceYDPI,n={left:n.left*r,right:n.right*r,top:n.top*m,bottom:n.bottom*m}))}else 0<h&&(c=m="right"),n=a.options.lineWrapping&&1<(r=d.getClientRects()).length?r["right"==m?r.length-1:0]:d.getBoundingClientRect();!(B&&9>D)||h||n&&(n.left||n.right)||(n=(n=d.parentNode.getClientRects()[0])?{left:n.left,right:n.left+Cb(a.display),top:n.top,bottom:n.bottom}:Ce);d=n.top-b.rect.top;h=n.bottom-b.rect.top;r=(d+h)/2;m=b.view.measure.heights;
for(g=0;g<m.length-1&&!(r<m[g]);g++);c={left:("right"==c?n.right:n.left)-b.rect.left,right:("left"==c?n.left:n.right)-b.rect.left,top:g?m[g-1]:0,bottom:m[g]};n.left||n.right||(c.bogus=!0);a.options.singleCursorHeightPerLine||(c.rtop=d,c.rbottom=h);a=c;a.bogus||(b.cache[f]=a)}return{left:a.left,right:a.right,top:e?a.rtop:a.top,bottom:e?a.rbottom:a.bottom}}function Be(a,b,c){for(var d,e,f,g,h,k,l=0;l<a.length;l+=3){h=a[l];k=a[l+1];if(b<h)e=0,f=1,g="left";else if(b<k)e=b-h,f=e+1;else if(l==a.length-
3||b==k&&a[l+3]>b)f=k-h,e=f-1,b>=k&&(g="right");if(null!=e){d=a[l+2];h==k&&c==(d.insertLeft?"left":"right")&&(g=c);if("left"==c&&0==e)for(;l&&a[l-2]==a[l-3]&&a[l-1].insertLeft;)d=a[(l-=3)+2],g="left";if("right"==c&&e==k-h)for(;l<a.length-3&&a[l+3]==a[l+4]&&!a[l+5].insertLeft;)d=a[(l+=3)+2],g="right";break}}return{node:d,start:e,end:f,collapse:g,coverStart:h,coverEnd:k}}function De(a){if(a.measure&&(a.measure.cache={},a.measure.heights=null,a.rest))for(var b=0;b<a.rest.length;b++)a.measure.caches[b]=
{}}function Ee(a){a.display.externalMeasure=null;ea(a.display.lineMeasure);for(var b=0;b<a.display.view.length;b++)De(a.display.view[b])}function Db(a){Ee(a);a.display.cachedCharWidth=a.display.cachedTextHeight=a.display.cachedPaddingH=null;a.options.lineWrapping||(a.display.maxLineChanged=!0);a.display.lineNumChars=null}function Fe(){return qc&&rc?-(document.body.getBoundingClientRect().left-parseInt(getComputedStyle(document.body).marginLeft)):window.pageXOffset||(document.documentElement||document.body).scrollLeft}
function Ge(){return qc&&rc?-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop)):window.pageYOffset||(document.documentElement||document.body).scrollTop}function nd(a){var b=0;if(a.widgets)for(var c=0;c<a.widgets.length;++c)a.widgets[c].above&&(b+=Bb(a.widgets[c]));return b}function sc(a,b,c,d,e){e||(e=nd(b),c.top+=e,c.bottom+=e);if("line"==d)return c;d||(d="local");b=oa(b);b="local"==d?b+a.display.lineSpace.offsetTop:b-a.display.viewOffset;if("page"==d||
"window"==d)a=a.display.lineSpace.getBoundingClientRect(),b+=a.top+("window"==d?0:Ge()),d=a.left+("window"==d?0:Fe()),c.left+=d,c.right+=d;c.top+=b;c.bottom+=b;return c}function He(a,b,c){if("div"==c)return b;var d=b.left;b=b.top;"page"==c?(d-=Fe(),b-=Ge()):"local"!=c&&c||(c=a.display.sizer.getBoundingClientRect(),d+=c.left,b+=c.top);a=a.display.lineSpace.getBoundingClientRect();return{left:d-a.left,top:b-a.top}}function od(a,b,c,d,e){d||(d=t(a.doc,b.line));var f=d;b=b.ch;d=ia(a,Oa(a,d),b,e);return sc(a,
f,d,c)}function ja(a,b,c,d,e,f){function g(b,g){var h=ia(a,e,b,g?"right":"left",f);g?h.left=h.right:h.right=h.left;return sc(a,d,h,c)}function h(a,b,d){return g(d?a-1:a,1==k[b].level!=d)}d=d||t(a.doc,b.line);e||(e=Oa(a,d));var k=ta(d,a.doc.direction),l=b.ch;b=b.sticky;l>=d.text.length?(l=d.text.length,b="before"):0>=l&&(l=0,b="after");if(!k)return g("before"==b?l-1:l,"before"==b);var m=vb(k,l,b),q=wb,m=h(l,m,"before"==b);null!=q&&(m.other=h(l,q,"before"!=b));return m}function Ie(a,b){var c=0;b=w(a.doc,
b);a.options.lineWrapping||(c=Cb(a.display)*b.ch);var d=t(a.doc,b.line),e=oa(d)+a.display.lineSpace.offsetTop;return{left:c,right:c,top:e,bottom:e+d.height}}function pd(a,b,c,d,e){a=p(a,b,c);a.xRel=e;d&&(a.outside=!0);return a}function qd(a,b,c){var d=a.doc;c+=a.display.viewOffset;if(0>c)return pd(d.first,0,null,!0,-1);var e=Ia(d,c),f=d.first+d.size-1;if(e>f)return pd(d.first+d.size-1,t(d,f).text.length,null,!0,1);0>b&&(b=0);for(d=t(d,e);;)if(e=Ag(a,d,e,b,c),f=(d=Ja(d,!1))&&d.find(0,!0),d&&(e.ch>
f.from.ch||e.ch==f.from.ch&&0<e.xRel))e=C(d=f.to.line);else return e}function Je(a,b,c,d){d-=nd(b);b=b.text.length;var e=rb(function(b){return ia(a,c,b-1).bottom<=d},b,0);b=rb(function(b){return ia(a,c,b).top>d},e,b);return{begin:e,end:b}}function Ke(a,b,c,d){c||(c=Oa(a,b));d=sc(a,b,ia(a,c,d),"line").top;return Je(a,b,c,d)}function rd(a,b,c,d){return a.bottom<=c?!1:a.top>c?!0:(d?a.left:a.right)>b}function Ag(a,b,c,d,e){e-=oa(b);var f=Oa(a,b),g=nd(b),h=0,k=b.text.length,l=!0,m=ta(b,a.doc.direction);
m&&(m=(a.options.lineWrapping?Bg:Cg)(a,b,c,f,m,d,e),h=(l=1!=m.level)?m.from:m.to-1,k=l?m.to:m.from-1);var q=null,n=null,m=rb(function(b){var c=ia(a,f,b);c.top+=g;c.bottom+=g;if(!rd(c,d,e,!1))return!1;c.top<=e&&c.left<=d&&(q=b,n=c);return!0},h,k),r=!1;n?(h=d-n.left<n.right-d,l=h==l,m=q+(l?0:1),l=l?"after":"before",h=h?n.left:n.right):(l||m!=k&&m!=h||m++,l=0==m?"after":m==b.text.length?"before":ia(a,f,m-(l?1:0)).bottom+g<=e==l?"after":"before",r=ja(a,p(c,m,l),"line",b,f),h=r.left,r=e<r.top||e>=r.bottom);
m=Yd(b.text,m,1);return pd(c,m,l,r,d-h)}function Cg(a,b,c,d,e,f,g){var h=rb(function(h){h=e[h];var k=1!=h.level;return rd(ja(a,p(c,k?h.to:h.from,k?"before":"after"),"line",b,d),f,g,!0)},0,e.length-1),k=e[h];if(0<h){var l=1!=k.level,l=ja(a,p(c,l?k.from:k.to,l?"after":"before"),"line",b,d);rd(l,f,g,!0)&&l.top>g&&(k=e[h-1])}return k}function Bg(a,b,c,d,e,f,g){g=Je(a,b,d,g);c=g.begin;g=g.end;/\s/.test(b.text.charAt(g-1))&&g--;for(var h=b=null,k=0;k<e.length;k++){var l=e[k];if(!(l.from>=g||l.to<=c)){var m=
ia(a,d,1!=l.level?Math.min(g,l.to)-1:Math.max(c,l.from)).right,m=m<f?f-m+1E9:m-f;if(!b||h>m)b=l,h=m}}b||(b=e[e.length-1]);b.from<c&&(b={from:c,to:b.to,level:b.level});b.to>g&&(b={from:b.from,to:g,level:b.level});return b}function Pa(a){if(null!=a.cachedTextHeight)return a.cachedTextHeight;if(null==Qa){Qa=u("pre");for(var b=0;49>b;++b)Qa.appendChild(document.createTextNode("x")),Qa.appendChild(u("br"));Qa.appendChild(document.createTextNode("x"))}Z(a.measure,Qa);b=Qa.offsetHeight/50;3<b&&(a.cachedTextHeight=
b);ea(a.measure);return b||1}function Cb(a){if(null!=a.cachedCharWidth)return a.cachedCharWidth;var b=u("span","xxxxxxxxxx"),c=u("pre",[b]);Z(a.measure,c);b=b.getBoundingClientRect();b=(b.right-b.left)/10;2<b&&(a.cachedCharWidth=b);return b||10}function ld(a){for(var b=a.display,c={},d={},e=b.gutters.clientLeft,f=b.gutters.firstChild,g=0;f;f=f.nextSibling,++g)c[a.options.gutters[g]]=f.offsetLeft+f.clientLeft+e,d[a.options.gutters[g]]=f.clientWidth;return{fixedPos:sd(b),gutterTotalWidth:b.gutters.offsetWidth,
gutterLeft:c,gutterWidth:d,wrapperWidth:b.wrapper.clientWidth}}function sd(a){return a.scroller.getBoundingClientRect().left-a.sizer.getBoundingClientRect().left}function Le(a){var b=Pa(a.display),c=a.options.lineWrapping,d=c&&Math.max(5,a.display.scroller.clientWidth/Cb(a.display)-3);return function(e){if(Ka(a.doc,e))return 0;var f=0;if(e.widgets)for(var g=0;g<e.widgets.length;g++)e.widgets[g].height&&(f+=e.widgets[g].height);return c?f+(Math.ceil(e.text.length/d)||1)*b:f+b}}function td(a){var b=
a.doc,c=Le(a);b.iter(function(a){var b=c(a);b!=a.height&&ma(a,b)})}function Ra(a,b,c,d){var e=a.display;if(!c&&"true"==(b.target||b.srcElement).getAttribute("cm-not-content"))return null;var f,g;c=e.lineSpace.getBoundingClientRect();try{f=b.clientX-c.left,g=b.clientY-c.top}catch(k){return null}b=qd(a,f,g);var h;d&&1==b.xRel&&(h=t(a.doc,b.line).text).length==b.ch&&(d=fa(h,h.length,a.options.tabSize)-h.length,b=p(b.line,Math.max(0,Math.round((f-ze(a.display).left)/Cb(a.display))-d)));return b}function Na(a,
b){if(b>=a.display.viewTo)return null;b-=a.display.viewFrom;if(0>b)return null;for(var c=a.display.view,d=0;d<c.length;d++)if(b-=c[d].size,0>b)return d}function Eb(a){a.display.input.showSelection(a.display.input.prepareSelection())}function Me(a,b){void 0===b&&(b=!0);for(var c=a.doc,d={},e=d.cursors=document.createDocumentFragment(),f=d.selection=document.createDocumentFragment(),g=0;g<c.sel.ranges.length;g++)if(b||g!=c.sel.primIndex){var h=c.sel.ranges[g];if(!(h.from().line>=a.display.viewTo||h.to().line<
a.display.viewFrom)){var k=h.empty();(k||a.options.showCursorWhenSelecting)&&Ne(a,h.head,e);k||Dg(a,h,f)}}return d}function Ne(a,b,c){b=ja(a,b,"div",null,null,!a.options.singleCursorHeightPerLine);var d=c.appendChild(u("div"," ","CodeMirror-cursor"));d.style.left=b.left+"px";d.style.top=b.top+"px";d.style.height=Math.max(0,b.bottom-b.top)*a.options.cursorHeight+"px";b.other&&(a=c.appendChild(u("div"," ","CodeMirror-cursor CodeMirror-secondarycursor")),a.style.display="",a.style.left=b.other.left+
"px",a.style.top=b.other.top+"px",a.style.height=.85*(b.other.bottom-b.other.top)+"px")}function tc(a,b){return a.top-b.top||a.left-b.left}function Dg(a,b,c){function d(a,b,c,d){0>b&&(b=0);b=Math.round(b);d=Math.round(d);h.appendChild(u("div",null,"CodeMirror-selected","position: absolute; left: "+a+"px;\n                             top: "+b+"px; width: "+(null==c?m-a:c)+"px;\n                             height: "+(d-b)+"px"))}function e(b,c,e){function f(c,d){return od(a,p(b,c),"div",k,d)}function h(b,
c,d){b=Ke(a,k,null,b);c="ltr"==c==("after"==d)?"left":"right";d="after"==d?b.begin:b.end-(/\s/.test(k.text.charAt(b.end-1))?2:1);return f(d,c)[c]}var k=t(g,b),n=k.text.length,u,v,y=ta(k,g.direction);lg(y,c||0,null==e?n:e,function(a,b,g,k){var r="ltr"==g,p=f(a,r?"left":"right"),t=f(b-1,r?"right":"left"),w=null==c&&0==a,x=null==e&&b==n,z=0==k;k=!y||k==y.length-1;3>=t.top-p.top?(b=(q?w:x)&&z?l:(r?p:t).left,d(b,p.top,((q?x:w)&&k?m:(r?t:p).right)-b,p.bottom)):(r?(r=q&&w&&z?l:p.left,w=q?m:h(a,g,"before"),
a=q?l:h(b,g,"after"),x=q&&x&&k?m:t.right):(r=q?h(a,g,"before"):l,w=!q&&w&&z?m:p.right,a=!q&&x&&k?l:t.left,x=q?h(b,g,"after"):m),d(r,p.top,w-r,p.bottom),p.bottom<t.top&&d(l,p.bottom,null,t.top),d(a,t.top,x-a,t.bottom));if(!u||0>tc(p,u))u=p;0>tc(t,u)&&(u=t);if(!v||0>tc(p,v))v=p;0>tc(t,v)&&(v=t)});return{start:u,end:v}}var f=a.display,g=a.doc,h=document.createDocumentFragment(),k=ze(a.display),l=k.left,m=Math.max(f.sizerWidth,Ma(a)-f.sizer.offsetLeft)-k.right,q="ltr"==g.direction,f=b.from();b=b.to();
if(f.line==b.line)e(f.line,f.ch,b.ch);else{var n=t(g,f.line),k=t(g,b.line),k=na(n)==na(k),f=e(f.line,f.ch,k?n.text.length+1:null).end;b=e(b.line,k?0:null,b.ch).start;k&&(f.top<b.top-2?(d(f.right,f.top,null,f.bottom),d(l,b.top,b.left,b.bottom)):d(f.right,f.top,b.left-f.right,f.bottom));f.bottom<b.top&&d(l,f.bottom,null,b.top)}c.appendChild(h)}function ud(a){if(a.state.focused){var b=a.display;clearInterval(b.blinker);var c=!0;b.cursorDiv.style.visibility="";0<a.options.cursorBlinkRate?b.blinker=setInterval(function(){return b.cursorDiv.style.visibility=
(c=!c)?"":"hidden"},a.options.cursorBlinkRate):0>a.options.cursorBlinkRate&&(b.cursorDiv.style.visibility="hidden")}}function Oe(a){a.state.focused||(a.display.input.focus(),vd(a))}function Pe(a){a.state.delayingBlurEvent=!0;setTimeout(function(){a.state.delayingBlurEvent&&(a.state.delayingBlurEvent=!1,Fb(a))},100)}function vd(a,b){a.state.delayingBlurEvent&&(a.state.delayingBlurEvent=!1);"nocursor"!=a.options.readOnly&&(a.state.focused||(F(a,"focus",a,b),a.state.focused=!0,Fa(a.display.wrapper,"CodeMirror-focused"),
a.curOp||a.display.selForContextMenu==a.doc.sel||(a.display.input.reset(),P&&setTimeout(function(){return a.display.input.reset(!0)},20)),a.display.input.receivedFocus()),ud(a))}function Fb(a,b){a.state.delayingBlurEvent||(a.state.focused&&(F(a,"blur",a,b),a.state.focused=!1,Sa(a.display.wrapper,"CodeMirror-focused")),clearInterval(a.display.blinker),setTimeout(function(){a.state.focused||(a.display.shift=!1)},150))}function uc(a){a=a.display;for(var b=a.lineDiv.offsetTop,c=0;c<a.view.length;c++){var d=
a.view[c],e=void 0;if(!d.hidden){if(B&&8>D)var f=d.node.offsetTop+d.node.offsetHeight,e=f-b,b=f;else e=d.node.getBoundingClientRect(),e=e.bottom-e.top;f=d.line.height-e;2>e&&(e=Pa(a));if(.005<f||-.005>f)if(ma(d.line,e),Qe(d.line),d.rest)for(e=0;e<d.rest.length;e++)Qe(d.rest[e])}}}function Qe(a){if(a.widgets)for(var b=0;b<a.widgets.length;++b)a.widgets[b].height=a.widgets[b].node.parentNode.offsetHeight}function wd(a,b,c){var d=c&&null!=c.top?Math.max(0,c.top):a.scroller.scrollTop,d=Math.floor(d-a.lineSpace.offsetTop),
e=c&&null!=c.bottom?c.bottom:d+a.wrapper.clientHeight,d=Ia(b,d),e=Ia(b,e);if(c&&c.ensure){var f=c.ensure.from.line;c=c.ensure.to.line;f<d?(d=f,e=Ia(b,oa(t(b,f))+a.wrapper.clientHeight)):Math.min(c,b.lastLine())>=e&&(d=Ia(b,oa(t(b,c))-a.wrapper.clientHeight),e=c)}return{from:d,to:Math.max(e,d+1)}}function Re(a){var b=a.display,c=b.view;if(b.alignWidgets||b.gutters.firstChild&&a.options.fixedGutter){for(var d=sd(b)-b.scroller.scrollLeft+a.doc.scrollLeft,e=b.gutters.offsetWidth,f=d+"px",g=0;g<c.length;g++)if(!c[g].hidden){a.options.fixedGutter&&
(c[g].gutter&&(c[g].gutter.style.left=f),c[g].gutterBackground&&(c[g].gutterBackground.style.left=f));var h=c[g].alignable;if(h)for(var k=0;k<h.length;k++)h[k].style.left=f}a.options.fixedGutter&&(b.gutters.style.left=d+e+"px")}}function Se(a){if(!a.options.lineNumbers)return!1;var b=a.doc,b=Tc(a.options,b.first+b.size-1),c=a.display;if(b.length!=c.lineNumChars){var d=c.measure.appendChild(u("div",[u("div",b)],"CodeMirror-linenumber CodeMirror-gutter-elt")),e=d.firstChild.offsetWidth,d=d.offsetWidth-
e;c.lineGutter.style.width="";c.lineNumInnerWidth=Math.max(e,c.lineGutter.offsetWidth-d)+1;c.lineNumWidth=c.lineNumInnerWidth+d;c.lineNumChars=c.lineNumInnerWidth?b.length:-1;c.lineGutter.style.width=c.lineNumWidth+"px";xd(a);return!0}return!1}function yd(a,b){var c=a.display,d=Pa(a.display);0>b.top&&(b.top=0);var e=a.curOp&&null!=a.curOp.scrollTop?a.curOp.scrollTop:c.scroller.scrollTop,f=jd(a),g={};b.bottom-b.top>f&&(b.bottom=b.top+f);var h=a.doc.height+id(c),k=b.top<d,d=b.bottom>h-d;b.top<e?g.scrollTop=
k?0:b.top:b.bottom>e+f&&(f=Math.min(b.top,(d?h:b.bottom)-f),f!=e&&(g.scrollTop=f));e=a.curOp&&null!=a.curOp.scrollLeft?a.curOp.scrollLeft:c.scroller.scrollLeft;c=Ma(a)-(a.options.fixedGutter?c.gutters.offsetWidth:0);if(f=b.right-b.left>c)b.right=b.left+c;10>b.left?g.scrollLeft=0:b.left<e?g.scrollLeft=Math.max(0,b.left-(f?0:10)):b.right>c+e-3&&(g.scrollLeft=b.right+(f?0:10)-c);return g}function vc(a,b){null!=b&&(wc(a),a.curOp.scrollTop=(null==a.curOp.scrollTop?a.doc.scrollTop:a.curOp.scrollTop)+b)}
function fb(a){wc(a);var b=a.getCursor();a.curOp.scrollToPos={from:b,to:b,margin:a.options.cursorScrollMargin}}function Gb(a,b,c){null==b&&null==c||wc(a);null!=b&&(a.curOp.scrollLeft=b);null!=c&&(a.curOp.scrollTop=c)}function wc(a){var b=a.curOp.scrollToPos;if(b){a.curOp.scrollToPos=null;var c=Ie(a,b.from),d=Ie(a,b.to);Te(a,c,d,b.margin)}}function Te(a,b,c,d){b=yd(a,{left:Math.min(b.left,c.left),top:Math.min(b.top,c.top)-d,right:Math.max(b.right,c.right),bottom:Math.max(b.bottom,c.bottom)+d});Gb(a,
b.scrollLeft,b.scrollTop)}function Hb(a,b){2>Math.abs(a.doc.scrollTop-b)||(xa||zd(a,{top:b}),Ue(a,b,!0),xa&&zd(a),Ib(a,100))}function Ue(a,b,c){b=Math.min(a.display.scroller.scrollHeight-a.display.scroller.clientHeight,b);if(a.display.scroller.scrollTop!=b||c)a.doc.scrollTop=b,a.display.scrollbars.setScrollTop(b),a.display.scroller.scrollTop!=b&&(a.display.scroller.scrollTop=b)}function Ta(a,b,c,d){b=Math.min(b,a.display.scroller.scrollWidth-a.display.scroller.clientWidth);(c?b==a.doc.scrollLeft:
2>Math.abs(a.doc.scrollLeft-b))&&!d||(a.doc.scrollLeft=b,Re(a),a.display.scroller.scrollLeft!=b&&(a.display.scroller.scrollLeft=b),a.display.scrollbars.setScrollLeft(b))}function Jb(a){var b=a.display,c=b.gutters.offsetWidth,d=Math.round(a.doc.height+id(a.display));return{clientHeight:b.scroller.clientHeight,viewHeight:b.wrapper.clientHeight,scrollWidth:b.scroller.scrollWidth,clientWidth:b.scroller.clientWidth,viewWidth:b.wrapper.clientWidth,barLeft:a.options.fixedGutter?c:0,docHeight:d,scrollHeight:d+
qa(a)+b.barHeight,nativeBarWidth:b.nativeBarWidth,gutterWidth:c}}function gb(a,b){b||(b=Jb(a));var c=a.display.barWidth,d=a.display.barHeight;Ve(a,b);for(var e=0;4>e&&c!=a.display.barWidth||d!=a.display.barHeight;e++)c!=a.display.barWidth&&a.options.lineWrapping&&uc(a),Ve(a,Jb(a)),c=a.display.barWidth,d=a.display.barHeight}function Ve(a,b){var c=a.display,d=c.scrollbars.update(b);c.sizer.style.paddingRight=(c.barWidth=d.right)+"px";c.sizer.style.paddingBottom=(c.barHeight=d.bottom)+"px";c.heightForcer.style.borderBottom=
d.bottom+"px solid transparent";d.right&&d.bottom?(c.scrollbarFiller.style.display="block",c.scrollbarFiller.style.height=d.bottom+"px",c.scrollbarFiller.style.width=d.right+"px"):c.scrollbarFiller.style.display="";d.bottom&&a.options.coverGutterNextToScrollbar&&a.options.fixedGutter?(c.gutterFiller.style.display="block",c.gutterFiller.style.height=d.bottom+"px",c.gutterFiller.style.width=b.gutterWidth+"px"):c.gutterFiller.style.display=""}function We(a){a.display.scrollbars&&(a.display.scrollbars.clear(),
a.display.scrollbars.addClass&&Sa(a.display.wrapper,a.display.scrollbars.addClass));a.display.scrollbars=new Xe[a.options.scrollbarStyle](function(b){a.display.wrapper.insertBefore(b,a.display.scrollbarFiller);v(b,"mousedown",function(){a.state.focused&&setTimeout(function(){return a.display.input.focus()},0)});b.setAttribute("cm-not-content","true")},function(b,c){"horizontal"==c?Ta(a,b):Hb(a,b)},a);a.display.scrollbars.addClass&&Fa(a.display.wrapper,a.display.scrollbars.addClass)}function Ua(a){a.curOp=
{cm:a,viewChanged:!1,startHeight:a.doc.height,forceUpdate:!1,updateInput:null,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++Eg};a=a.curOp;eb?eb.ops.push(a):a.ownsGroup=eb={ops:[a],delayedCallbacks:[]}}function Va(a){xg(a.curOp,function(a){for(var c=0;c<a.ops.length;c++)a.ops[c].cm.curOp=null;a=a.ops;for(c=0;c<a.length;c++){var d=a[c],e=d.cm,f=e.display,g=e.display;!g.scrollbarsClipped&&
g.scroller.offsetWidth&&(g.nativeBarWidth=g.scroller.offsetWidth-g.scroller.clientWidth,g.heightForcer.style.height=qa(e)+"px",g.sizer.style.marginBottom=-g.nativeBarWidth+"px",g.sizer.style.borderRightWidth=qa(e)+"px",g.scrollbarsClipped=!0);d.updateMaxLine&&Zc(e);d.mustUpdate=d.viewChanged||d.forceUpdate||null!=d.scrollTop||d.scrollToPos&&(d.scrollToPos.from.line<f.viewFrom||d.scrollToPos.to.line>=f.viewTo)||f.maxLineChanged&&e.options.lineWrapping;d.update=d.mustUpdate&&new xc(e,d.mustUpdate&&
{top:d.scrollTop,ensure:d.scrollToPos},d.forceUpdate)}for(c=0;c<a.length;c++)d=a[c],d.updatedDisplay=d.mustUpdate&&Ad(d.cm,d.update);for(c=0;c<a.length;c++)if(d=a[c],e=d.cm,f=e.display,d.updatedDisplay&&uc(e),d.barMeasure=Jb(e),f.maxLineChanged&&!e.options.lineWrapping&&(g=void 0,g=f.maxLine.text.length,g=ia(e,Oa(e,f.maxLine),g,void 0),d.adjustWidthTo=g.left+3,e.display.sizerWidth=d.adjustWidthTo,d.barMeasure.scrollWidth=Math.max(f.scroller.clientWidth,f.sizer.offsetLeft+d.adjustWidthTo+qa(e)+e.display.barWidth),
d.maxScrollLeft=Math.max(0,f.sizer.offsetLeft+d.adjustWidthTo-Ma(e))),d.updatedDisplay||d.selectionChanged)d.preparedSelection=f.input.prepareSelection();for(c=0;c<a.length;c++)d=a[c],e=d.cm,null!=d.adjustWidthTo&&(e.display.sizer.style.minWidth=d.adjustWidthTo+"px",d.maxScrollLeft<e.doc.scrollLeft&&Ta(e,Math.min(e.display.scroller.scrollLeft,d.maxScrollLeft),!0),e.display.maxLineChanged=!1),f=d.focus&&d.focus==sa(),d.preparedSelection&&e.display.input.showSelection(d.preparedSelection,f),(d.updatedDisplay||
d.startHeight!=e.doc.height)&&gb(e,d.barMeasure),d.updatedDisplay&&Bd(e,d.barMeasure),d.selectionChanged&&ud(e),e.state.focused&&d.updateInput&&e.display.input.reset(d.typing),f&&Oe(d.cm);for(c=0;c<a.length;c++){d=a[c];e=d.cm;f=e.display;g=e.doc;d.updatedDisplay&&Ye(e,d.update);null==f.wheelStartX||null==d.scrollTop&&null==d.scrollLeft&&!d.scrollToPos||(f.wheelStartX=f.wheelStartY=null);null!=d.scrollTop&&Ue(e,d.scrollTop,d.forceScroll);null!=d.scrollLeft&&Ta(e,d.scrollLeft,!0,!0);if(d.scrollToPos){var h=
w(g,d.scrollToPos.from),k=w(g,d.scrollToPos.to),l=d.scrollToPos.margin;null==l&&(l=0);var m=void 0;e.options.lineWrapping||h!=k||(h=h.ch?p(h.line,"before"==h.sticky?h.ch-1:h.ch,"after"):h,k="before"==h.sticky?p(h.line,h.ch+1,"before"):h);for(var q=0;5>q;q++){var n=!1,m=ja(e,h),r=k&&k!=h?ja(e,k):m,m={left:Math.min(m.left,r.left),top:Math.min(m.top,r.top)-l,right:Math.max(m.left,r.left),bottom:Math.max(m.bottom,r.bottom)+l},r=yd(e,m),W=e.doc.scrollTop,t=e.doc.scrollLeft;null!=r.scrollTop&&(Hb(e,r.scrollTop),
1<Math.abs(e.doc.scrollTop-W)&&(n=!0));null!=r.scrollLeft&&(Ta(e,r.scrollLeft),1<Math.abs(e.doc.scrollLeft-t)&&(n=!0));if(!n)break}k=m;I(e,"scrollCursorIntoView")||(l=e.display,q=l.sizer.getBoundingClientRect(),h=null,0>k.top+q.top?h=!0:k.bottom+q.top>(window.innerHeight||document.documentElement.clientHeight)&&(h=!1),null==h||Fg||(k=u("div","​",null,"position: absolute;\n                         top: "+(k.top-l.viewOffset-e.display.lineSpace.offsetTop)+"px;\n                         height: "+(k.bottom-
k.top+qa(e)+l.barHeight)+"px;\n                         left: "+k.left+"px; width: "+Math.max(2,k.right-k.left)+"px;"),e.display.lineSpace.appendChild(k),k.scrollIntoView(h),e.display.lineSpace.removeChild(k)))}k=d.maybeHiddenMarkers;h=d.maybeUnhiddenMarkers;if(k)for(l=0;l<k.length;++l)k[l].lines.length||F(k[l],"hide");if(h)for(k=0;k<h.length;++k)h[k].lines.length&&F(h[k],"unhide");f.wrapper.offsetHeight&&(g.scrollTop=e.display.scroller.scrollTop);d.changeObjs&&F(e,"changes",e,d.changeObjs);d.update&&
d.update.finish()}})}function Y(a,b){if(a.curOp)return b();Ua(a);try{return b()}finally{Va(a)}}function J(a,b){return function(){if(a.curOp)return b.apply(a,arguments);Ua(a);try{return b.apply(a,arguments)}finally{Va(a)}}}function S(a){return function(){if(this.curOp)return a.apply(this,arguments);Ua(this);try{return a.apply(this,arguments)}finally{Va(this)}}}function K(a){return function(){var b=this.cm;if(!b||b.curOp)return a.apply(this,arguments);Ua(b);try{return a.apply(this,arguments)}finally{Va(b)}}}
function U(a,b,c,d){null==b&&(b=a.doc.first);null==c&&(c=a.doc.first+a.doc.size);d||(d=0);var e=a.display;d&&c<e.viewTo&&(null==e.updateLineNumbers||e.updateLineNumbers>b)&&(e.updateLineNumbers=b);a.curOp.viewChanged=!0;if(b>=e.viewTo)ya&&Xc(a.doc,b)<e.viewTo&&za(a);else if(c<=e.viewFrom)ya&&ee(a.doc,c+d)>e.viewFrom?za(a):(e.viewFrom+=d,e.viewTo+=d);else if(b<=e.viewFrom&&c>=e.viewTo)za(a);else if(b<=e.viewFrom){var f=yc(a,c,c+d,1);f?(e.view=e.view.slice(f.index),e.viewFrom=f.lineN,e.viewTo+=d):za(a)}else if(c>=
e.viewTo)(f=yc(a,b,b,-1))?(e.view=e.view.slice(0,f.index),e.viewTo=f.lineN):za(a);else{var f=yc(a,b,b,-1),g=yc(a,c,c+d,1);f&&g?(e.view=e.view.slice(0,f.index).concat(pc(a,f.lineN,g.lineN)).concat(e.view.slice(g.index)),e.viewTo+=d):za(a)}if(a=e.externalMeasured)c<a.lineN?a.lineN+=d:b<a.lineN+a.size&&(e.externalMeasured=null)}function Aa(a,b,c){a.curOp.viewChanged=!0;var d=a.display,e=a.display.externalMeasured;e&&b>=e.lineN&&b<e.lineN+e.size&&(d.externalMeasured=null);b<d.viewFrom||b>=d.viewTo||(a=
d.view[Na(a,b)],null!=a.node&&(a=a.changes||(a.changes=[]),-1==L(a,c)&&a.push(c)))}function za(a){a.display.viewFrom=a.display.viewTo=a.doc.first;a.display.view=[];a.display.viewOffset=0}function yc(a,b,c,d){var e=Na(a,b),f=a.display.view;if(!ya||c==a.doc.first+a.doc.size)return{index:e,lineN:c};for(var g=a.display.viewFrom,h=0;h<e;h++)g+=f[h].size;if(g!=b){if(0<d){if(e==f.length-1)return null;b=g+f[e].size-b;e++}else b=g-b;c+=b}for(;Xc(a.doc,c)!=c;){if(e==(0>d?0:f.length-1))return null;c+=d*f[e-
(0>d?1:0)].size;e+=d}return{index:e,lineN:c}}function Ze(a){a=a.display.view;for(var b=0,c=0;c<a.length;c++){var d=a[c];d.hidden||d.node&&!d.changes||++b}return b}function Ib(a,b){a.doc.highlightFrontier<a.display.viewTo&&a.state.highlight.set(b,Nc(Gg,a))}function Gg(a){var b=a.doc;if(!(b.highlightFrontier>=a.display.viewTo)){var c=+new Date+a.options.workTime,d=yb(a,b.highlightFrontier),e=[];b.iter(d.line,Math.min(b.first+b.size,a.display.viewTo+500),function(f){if(d.line>=a.display.viewFrom){var g=
f.styles,h=f.text.length>a.options.maxHighlightLength?La(b.mode,d.state):null,k=je(a,f,d,!0);h&&(d.state=h);f.styles=k.styles;h=f.styleClasses;(k=k.classes)?f.styleClasses=k:h&&(f.styleClasses=null);k=!g||g.length!=f.styles.length||h!=k&&(!h||!k||h.bgClass!=k.bgClass||h.textClass!=k.textClass);for(h=0;!k&&h<g.length;++h)k=g[h]!=f.styles[h];k&&e.push(d.line);f.stateAfter=d.save()}else f.text.length<=a.options.maxHighlightLength&&ed(a,f.text,d),f.stateAfter=0==d.line%5?d.save():null;d.nextLine();if(+new Date>
c)return Ib(a,a.options.workDelay),!0});b.highlightFrontier=d.line;b.modeFrontier=Math.max(b.modeFrontier,d.line);e.length&&Y(a,function(){for(var b=0;b<e.length;b++)Aa(a,e[b],"text")})}}function Ad(a,b){var c=a.display,d=a.doc;if(b.editorIsHidden)return za(a),!1;if(!b.force&&b.visible.from>=c.viewFrom&&b.visible.to<=c.viewTo&&(null==c.updateLineNumbers||c.updateLineNumbers>=c.viewTo)&&c.renderedView==c.view&&0==Ze(a))return!1;Se(a)&&(za(a),b.dims=ld(a));var e=d.first+d.size,f=Math.max(b.visible.from-
a.options.viewportMargin,d.first),g=Math.min(e,b.visible.to+a.options.viewportMargin);c.viewFrom<f&&20>f-c.viewFrom&&(f=Math.max(d.first,c.viewFrom));c.viewTo>g&&20>c.viewTo-g&&(g=Math.min(e,c.viewTo));ya&&(f=Xc(a.doc,f),g=ee(a.doc,g));d=f!=c.viewFrom||g!=c.viewTo||c.lastWrapHeight!=b.wrapperHeight||c.lastWrapWidth!=b.wrapperWidth;e=a.display;0==e.view.length||f>=e.viewTo||g<=e.viewFrom?(e.view=pc(a,f,g),e.viewFrom=f):(e.viewFrom>f?e.view=pc(a,f,e.viewFrom).concat(e.view):e.viewFrom<f&&(e.view=e.view.slice(Na(a,
f))),e.viewFrom=f,e.viewTo<g?e.view=e.view.concat(pc(a,e.viewTo,g)):e.viewTo>g&&(e.view=e.view.slice(0,Na(a,g))));e.viewTo=g;c.viewOffset=oa(t(a.doc,c.viewFrom));a.display.mover.style.top=c.viewOffset+"px";g=Ze(a);if(!d&&0==g&&!b.force&&c.renderedView==c.view&&(null==c.updateLineNumbers||c.updateLineNumbers>=c.viewTo))return!1;a.hasFocus()?f=null:(f=sa())&&wa(a.display.lineDiv,f)?(f={activeElt:f},window.getSelection&&(e=window.getSelection(),e.anchorNode&&e.extend&&wa(a.display.lineDiv,e.anchorNode)&&
(f.anchorNode=e.anchorNode,f.anchorOffset=e.anchorOffset,f.focusNode=e.focusNode,f.focusOffset=e.focusOffset))):f=null;4<g&&(c.lineDiv.style.display="none");Hg(a,c.updateLineNumbers,b.dims);4<g&&(c.lineDiv.style.display="");c.renderedView=c.view;(g=f)&&g.activeElt&&g.activeElt!=sa()&&(g.activeElt.focus(),g.anchorNode&&wa(document.body,g.anchorNode)&&wa(document.body,g.focusNode)&&(f=window.getSelection(),e=document.createRange(),e.setEnd(g.anchorNode,g.anchorOffset),e.collapse(!1),f.removeAllRanges(),
f.addRange(e),f.extend(g.focusNode,g.focusOffset)));ea(c.cursorDiv);ea(c.selectionDiv);c.gutters.style.height=c.sizer.style.minHeight=0;d&&(c.lastWrapHeight=b.wrapperHeight,c.lastWrapWidth=b.wrapperWidth,Ib(a,400));c.updateLineNumbers=null;return!0}function Ye(a,b){for(var c=b.viewport,d=!0;;d=!1){if(!d||!a.options.lineWrapping||b.oldDisplayWidth==Ma(a))if(c&&null!=c.top&&(c={top:Math.min(a.doc.height+id(a.display)-jd(a),c.top)}),b.visible=wd(a.display,a.doc,c),b.visible.from>=a.display.viewFrom&&
b.visible.to<=a.display.viewTo)break;if(!Ad(a,b))break;uc(a);d=Jb(a);Eb(a);gb(a,d);Bd(a,d);b.force=!1}b.signal(a,"update",a);if(a.display.viewFrom!=a.display.reportedViewFrom||a.display.viewTo!=a.display.reportedViewTo)b.signal(a,"viewportChange",a,a.display.viewFrom,a.display.viewTo),a.display.reportedViewFrom=a.display.viewFrom,a.display.reportedViewTo=a.display.viewTo}function zd(a,b){var c=new xc(a,b);if(Ad(a,c)){uc(a);Ye(a,c);var d=Jb(a);Eb(a);gb(a,d);Bd(a,d);c.finish()}}function Hg(a,b,c){function d(b){var c=
b.nextSibling;P&&ha&&a.display.currentWheelTarget==b?b.style.display="none":b.parentNode.removeChild(b);return c}for(var e=a.display,f=a.options.lineNumbers,g=e.lineDiv,h=g.firstChild,k=e.view,e=e.viewFrom,l=0;l<k.length;l++){var m=k[l];if(!m.hidden)if(m.node&&m.node.parentNode==g){for(;h!=m.node;)h=d(h);h=f&&null!=b&&b<=e&&m.lineNumber;m.changes&&(-1<L(m.changes,"gutter")&&(h=!1),ue(a,m,e,c));h&&(ea(m.lineNumber),m.lineNumber.appendChild(document.createTextNode(Tc(a.options,e))));h=m.node.nextSibling}else{var q=
zg(a,m,e,c);g.insertBefore(q,h)}e+=m.size}for(;h;)h=d(h)}function xd(a){a.display.sizer.style.marginLeft=a.display.gutters.offsetWidth+"px"}function Bd(a,b){a.display.sizer.style.minHeight=b.docHeight+"px";a.display.heightForcer.style.top=b.docHeight+"px";a.display.gutters.style.height=b.docHeight+a.display.barHeight+qa(a)+"px"}function $e(a){var b=a.display.gutters,c=a.options.gutters;ea(b);for(var d=0;d<c.length;++d){var e=c[d],f=b.appendChild(u("div",null,"CodeMirror-gutter "+e));"CodeMirror-linenumbers"==
e&&(a.display.lineGutter=f,f.style.width=(a.display.lineNumWidth||1)+"px")}b.style.display=d?"":"none";xd(a)}function Cd(a){var b=L(a.gutters,"CodeMirror-linenumbers");-1==b&&a.lineNumbers?a.gutters=a.gutters.concat(["CodeMirror-linenumbers"]):-1<b&&!a.lineNumbers&&(a.gutters=a.gutters.slice(0),a.gutters.splice(b,1))}function af(a){var b=a.wheelDeltaX,c=a.wheelDeltaY;null==b&&a.detail&&a.axis==a.HORIZONTAL_AXIS&&(b=a.detail);null==c&&a.detail&&a.axis==a.VERTICAL_AXIS?c=a.detail:null==c&&(c=a.wheelDelta);
return{x:b,y:c}}function Ig(a){a=af(a);a.x*=ba;a.y*=ba;return a}function bf(a,b){var c=af(b),d=c.x,c=c.y,e=a.display,f=e.scroller,g=f.scrollWidth>f.clientWidth,h=f.scrollHeight>f.clientHeight;if(d&&g||c&&h){if(c&&ha&&P){var g=b.target,k=e.view;a:for(;g!=f;g=g.parentNode)for(var l=0;l<k.length;l++)if(k[l].node==g){a.display.currentWheelTarget=g;break a}}!d||xa||ka||null==ba?(c&&null!=ba&&(h=c*ba,g=a.doc.scrollTop,k=g+e.wrapper.clientHeight,0>h?g=Math.max(0,g+h-50):k=Math.min(a.doc.height,k+h+50),zd(a,
{top:g,bottom:k})),20>zc&&(null==e.wheelStartX?(e.wheelStartX=f.scrollLeft,e.wheelStartY=f.scrollTop,e.wheelDX=d,e.wheelDY=c,setTimeout(function(){if(null!=e.wheelStartX){var a=f.scrollLeft-e.wheelStartX,b=f.scrollTop-e.wheelStartY,a=b&&e.wheelDY&&b/e.wheelDY||a&&e.wheelDX&&a/e.wheelDX;e.wheelStartX=e.wheelStartY=null;a&&(ba=(ba*zc+a)/(zc+1),++zc)}},200)):(e.wheelDX+=d,e.wheelDY+=c))):(c&&h&&Hb(a,Math.max(0,f.scrollTop+c*ba)),Ta(a,Math.max(0,f.scrollLeft+d*ba)),(!c||c&&h)&&Q(b),e.wheelStartX=null)}}
function la(a,b){var c=a[b];a.sort(function(a,b){return y(a.from(),b.from())});b=L(a,c);for(c=1;c<a.length;c++){var d=a[c],e=a[c-1];if(0<=y(e.to(),d.from())){var f=jc(e.from(),d.from()),g=ic(e.to(),d.to()),d=e.empty()?d.from()==d.head:e.from()==e.head;c<=b&&--b;a.splice(--c,2,new A(d?g:f,d?f:g))}}return new ca(a,b)}function va(a,b){return new ca([new A(a,b||a)],0)}function Ba(a){return a.text?p(a.from.line+a.text.length-1,z(a.text).length+(1==a.text.length?a.from.ch:0)):a.to}function cf(a,b){if(0>
y(a,b.from))return a;if(0>=y(a,b.to))return Ba(b);var c=a.line+b.text.length-(b.to.line-b.from.line)-1,d=a.ch;a.line==b.to.line&&(d+=Ba(b).ch-b.to.ch);return p(c,d)}function Dd(a,b){for(var c=[],d=0;d<a.sel.ranges.length;d++){var e=a.sel.ranges[d];c.push(new A(cf(e.anchor,b),cf(e.head,b)))}return la(c,a.sel.primIndex)}function df(a,b,c){return a.line==b.line?p(c.line,a.ch-b.ch+c.ch):p(c.line+(a.line-b.line),a.ch)}function Ed(a){a.doc.mode=cd(a.options,a.doc.modeOption);Kb(a)}function Kb(a){a.doc.iter(function(a){a.stateAfter&&
(a.stateAfter=null);a.styles&&(a.styles=null)});a.doc.modeFrontier=a.doc.highlightFrontier=a.doc.first;Ib(a,100);a.state.modeGen++;a.curOp&&U(a)}function ef(a,b){return 0==b.from.ch&&0==b.to.ch&&""==z(b.text)&&(!a.cm||a.cm.options.wholeLineUpdateBefore)}function Fd(a,b,c,d){function e(a,c,e){a.text=c;a.stateAfter&&(a.stateAfter=null);a.styles&&(a.styles=null);null!=a.order&&(a.order=null);ae(a);be(a,e);c=d?d(a):1;c!=a.height&&ma(a,c);N(a,"change",a,b)}function f(a,b){for(var e=[],f=a;f<b;++f)e.push(new hb(k[f],
c?c[f]:null,d));return e}var g=b.from,h=b.to,k=b.text,l=t(a,g.line),m=t(a,h.line),q=z(k),n=c?c[k.length-1]:null,r=h.line-g.line;b.full?(a.insert(0,f(0,k.length)),a.remove(k.length,a.size-k.length)):ef(a,b)?(h=f(0,k.length-1),e(m,m.text,n),r&&a.remove(g.line,r),h.length&&a.insert(g.line,h)):l==m?1==k.length?e(l,l.text.slice(0,g.ch)+q+l.text.slice(h.ch),n):(r=f(1,k.length-1),r.push(new hb(q+l.text.slice(h.ch),n,d)),e(l,l.text.slice(0,g.ch)+k[0],c?c[0]:null),a.insert(g.line+1,r)):1==k.length?(e(l,l.text.slice(0,
g.ch)+k[0]+m.text.slice(h.ch),c?c[0]:null),a.remove(g.line+1,r)):(e(l,l.text.slice(0,g.ch)+k[0],c?c[0]:null),e(m,q+m.text.slice(h.ch),n),n=f(1,k.length-1),1<r&&a.remove(g.line+1,r-1),a.insert(g.line+1,n));N(a,"change",a,b)}function Wa(a,b,c){function d(a,f,g){if(a.linked)for(var h=0;h<a.linked.length;++h){var k=a.linked[h];if(k.doc!=f){var l=g&&k.sharedHist;if(!c||l)b(k.doc,l),d(k.doc,a,l)}}}d(a,null,!0)}function ff(a,b){if(b.cm)throw Error("This document is already in use.");a.doc=b;b.cm=a;td(a);
Ed(a);gf(a);a.options.lineWrapping||Zc(a);a.options.mode=b.modeOption;U(a)}function gf(a){("rtl"==a.doc.direction?Fa:Sa)(a.display.lineDiv,"CodeMirror-rtl")}function Jg(a){Y(a,function(){gf(a);U(a)})}function Ac(a){this.done=[];this.undone=[];this.undoDepth=Infinity;this.lastModTime=this.lastSelTime=0;this.lastOrigin=this.lastSelOrigin=this.lastOp=this.lastSelOp=null;this.generation=this.maxGeneration=a||1}function Gd(a,b){var c={from:Vc(b.from),to:Ba(b),text:Ha(a,b.from,b.to)};hf(a,c,b.from.line,
b.to.line+1);Wa(a,function(a){return hf(a,c,b.from.line,b.to.line+1)},!0);return c}function jf(a){for(;a.length;)if(z(a).ranges)a.pop();else break}function kf(a,b,c,d){var e=a.history;e.undone.length=0;var f=+new Date,g,h,k;if(k=e.lastOp==d||e.lastOrigin==b.origin&&b.origin&&("+"==b.origin.charAt(0)&&a.cm&&e.lastModTime>f-a.cm.options.historyEventDelay||"*"==b.origin.charAt(0)))e.lastOp==d?(jf(e.done),g=z(e.done)):e.done.length&&!z(e.done).ranges?g=z(e.done):1<e.done.length&&!e.done[e.done.length-
2].ranges?(e.done.pop(),g=z(e.done)):g=void 0,k=g;if(k)h=z(g.changes),0==y(b.from,b.to)&&0==y(b.from,h.to)?h.to=Ba(b):g.changes.push(Gd(a,b));else for((g=z(e.done))&&g.ranges||Bc(a.sel,e.done),g={changes:[Gd(a,b)],generation:e.generation},e.done.push(g);e.done.length>e.undoDepth;)e.done.shift(),e.done[0].ranges||e.done.shift();e.done.push(c);e.generation=++e.maxGeneration;e.lastModTime=e.lastSelTime=f;e.lastOp=e.lastSelOp=d;e.lastOrigin=e.lastSelOrigin=b.origin;h||F(a,"historyAdded")}function Bc(a,
b){var c=z(b);c&&c.ranges&&c.equals(a)||b.push(a)}function hf(a,b,c,d){var e=b["spans_"+a.id],f=0;a.iter(Math.max(a.first,c),Math.min(a.first+a.size,d),function(c){c.markedSpans&&((e||(e=b["spans_"+a.id]={}))[f]=c.markedSpans);++f})}function Kg(a){if(!a)return null;for(var b,c=0;c<a.length;++c)a[c].marker.explicitlyCleared?b||(b=a.slice(0,c)):b&&b.push(a[c]);return b?b.length?b:null:a}function lf(a,b){var c;if(c=b["spans_"+a.id]){for(var d=[],e=0;e<b.text.length;++e)d.push(Kg(c[e]));c=d}else c=null;
d=Wc(a,b);if(!c)return d;if(!d)return c;for(e=0;e<c.length;++e){var f=c[e],g=d[e];if(f&&g){var h=0;a:for(;h<g.length;++h){for(var k=g[h],l=0;l<f.length;++l)if(f[l].marker==k.marker)continue a;f.push(k)}}else g&&(c[e]=g)}return c}function ib(a,b,c){for(var d=[],e=0;e<a.length;++e){var f=a[e];if(f.ranges)d.push(c?ca.prototype.deepCopy.call(f):f);else{var f=f.changes,g=[];d.push({changes:g});for(var h=0;h<f.length;++h){var k=f[h],l=void 0;g.push({from:k.from,to:k.to,text:k.text});if(b)for(var m in k)(l=
m.match(/^spans_(\d+)$/))&&-1<L(b,Number(l[1]))&&(z(g)[m]=k[m],delete k[m])}}}return d}function Hd(a,b,c,d){return d?(a=a.anchor,c&&(d=0>y(b,a),d!=0>y(c,a)?(a=b,b=c):d!=0>y(b,c)&&(b=c)),new A(a,b)):new A(c||b,b)}function Cc(a,b,c,d,e){null==e&&(e=a.cm&&(a.cm.display.shift||a.extend));O(a,new ca([Hd(a.sel.primary(),b,c,e)],0),d)}function mf(a,b,c){for(var d=[],e=a.cm&&(a.cm.display.shift||a.extend),f=0;f<a.sel.ranges.length;f++)d[f]=Hd(a.sel.ranges[f],b[f],null,e);b=la(d,a.sel.primIndex);O(a,b,c)}
function Id(a,b,c,d){var e=a.sel.ranges.slice(0);e[b]=c;O(a,la(e,a.sel.primIndex),d)}function Lg(a,b,c){c={ranges:b.ranges,update:function(b){this.ranges=[];for(var c=0;c<b.length;c++)this.ranges[c]=new A(w(a,b[c].anchor),w(a,b[c].head))},origin:c&&c.origin};F(a,"beforeSelectionChange",a,c);a.cm&&F(a.cm,"beforeSelectionChange",a.cm,c);return c.ranges!=b.ranges?la(c.ranges,c.ranges.length-1):b}function nf(a,b,c){var d=a.history.done,e=z(d);e&&e.ranges?(d[d.length-1]=b,Dc(a,b,c)):O(a,b,c)}function O(a,
b,c){Dc(a,b,c);b=a.sel;var d=a.cm?a.cm.curOp.id:NaN,e=a.history,f=c&&c.origin,g;if(!(g=d==e.lastSelOp)&&(g=f&&e.lastSelOrigin==f)&&!(g=e.lastModTime==e.lastSelTime&&e.lastOrigin==f)){g=z(e.done);var h=f.charAt(0);g="*"==h||"+"==h&&g.ranges.length==b.ranges.length&&g.somethingSelected()==b.somethingSelected()&&new Date-a.history.lastSelTime<=(a.cm?a.cm.options.historyEventDelay:500)}g?e.done[e.done.length-1]=b:Bc(b,e.done);e.lastSelTime=+new Date;e.lastSelOrigin=f;e.lastSelOp=d;c&&!1!==c.clearRedo&&
jf(e.undone)}function Dc(a,b,c){if(ga(a,"beforeSelectionChange")||a.cm&&ga(a.cm,"beforeSelectionChange"))b=Lg(a,b,c);var d=c&&c.bias||(0>y(b.primary().head,a.sel.primary().head)?-1:1);of(a,pf(a,b,d,!0));c&&!1===c.scroll||!a.cm||fb(a.cm)}function of(a,b){b.equals(a.sel)||(a.sel=b,a.cm&&(a.cm.curOp.updateInput=a.cm.curOp.selectionChanged=!0,fe(a.cm)),N(a,"cursorActivity",a))}function qf(a){of(a,pf(a,a.sel,null,!1))}function pf(a,b,c,d){for(var e,f=0;f<b.ranges.length;f++){var g=b.ranges[f],h=b.ranges.length==
a.sel.ranges.length&&a.sel.ranges[f],k=Jd(a,g.anchor,h&&h.anchor,c,d),h=Jd(a,g.head,h&&h.head,c,d);if(e||k!=g.anchor||h!=g.head)e||(e=b.ranges.slice(0,f)),e[f]=new A(k,h)}return e?la(e,b.primIndex):b}function jb(a,b,c,d,e){var f=t(a,b.line);if(f.markedSpans)for(var g=0;g<f.markedSpans.length;++g){var h=f.markedSpans[g],k=h.marker;if((null==h.from||(k.inclusiveLeft?h.from<=b.ch:h.from<b.ch))&&(null==h.to||(k.inclusiveRight?h.to>=b.ch:h.to>b.ch))){if(e&&(F(k,"beforeCursorEnter"),k.explicitlyCleared))if(f.markedSpans){--g;
continue}else break;if(k.atomic){if(c){g=k.find(0>d?1:-1);h=void 0;if(0>d?k.inclusiveRight:k.inclusiveLeft)g=rf(a,g,-d,g&&g.line==b.line?f:null);if(g&&g.line==b.line&&(h=y(g,c))&&(0>d?0>h:0<h))return jb(a,g,b,d,e)}c=k.find(0>d?-1:1);if(0>d?k.inclusiveLeft:k.inclusiveRight)c=rf(a,c,d,c.line==b.line?f:null);return c?jb(a,c,b,d,e):null}}}return b}function Jd(a,b,c,d,e){d=d||1;b=jb(a,b,c,d,e)||!e&&jb(a,b,c,d,!0)||jb(a,b,c,-d,e)||!e&&jb(a,b,c,-d,!0);return b?b:(a.cantEdit=!0,p(a.first,0))}function rf(a,
b,c,d){return 0>c&&0==b.ch?b.line>a.first?w(a,p(b.line-1)):null:0<c&&b.ch==(d||t(a,b.line)).text.length?b.line<a.first+a.size-1?p(b.line+1,0):null:new p(b.line,b.ch+c)}function sf(a){a.setSelection(p(a.firstLine(),0),p(a.lastLine()),ra)}function tf(a,b,c){var d={canceled:!1,from:b.from,to:b.to,text:b.text,origin:b.origin,cancel:function(){return d.canceled=!0}};c&&(d.update=function(b,c,g,h){b&&(d.from=w(a,b));c&&(d.to=w(a,c));g&&(d.text=g);void 0!==h&&(d.origin=h)});F(a,"beforeChange",a,d);a.cm&&
F(a.cm,"beforeChange",a.cm,d);return d.canceled?null:{from:d.from,to:d.to,text:d.text,origin:d.origin}}function kb(a,b,c){if(a.cm){if(!a.cm.curOp)return J(a.cm,kb)(a,b,c);if(a.cm.state.suppressEdits)return}if(ga(a,"beforeChange")||a.cm&&ga(a.cm,"beforeChange"))if(b=tf(a,b,!0),!b)return;if(c=uf&&!c&&kg(a,b.from,b.to))for(var d=c.length-1;0<=d;--d)vf(a,{from:c[d].from,to:c[d].to,text:d?[""]:b.text,origin:b.origin});else vf(a,b)}function vf(a,b){if(1!=b.text.length||""!=b.text[0]||0!=y(b.from,b.to)){var c=
Dd(a,b);kf(a,b,c,a.cm?a.cm.curOp.id:NaN);Lb(a,b,c,Wc(a,b));var d=[];Wa(a,function(a,c){c||-1!=L(d,a.history)||(wf(a.history,b),d.push(a.history));Lb(a,b,null,Wc(a,b))})}}function Ec(a,b,c){if(!a.cm||!a.cm.state.suppressEdits||c){for(var d=a.history,e,f=a.sel,g="undo"==b?d.done:d.undone,h="undo"==b?d.undone:d.done,k=0;k<g.length&&(e=g[k],c?!e.ranges||e.equals(a.sel):e.ranges);k++);if(k!=g.length){for(d.lastOrigin=d.lastSelOrigin=null;;)if(e=g.pop(),e.ranges){Bc(e,h);if(c&&!e.equals(a.sel)){O(a,e,{clearRedo:!1});
return}f=e}else break;var l=[];Bc(f,h);h.push({changes:l,generation:d.generation});d.generation=e.generation||++d.maxGeneration;var m=ga(a,"beforeChange")||a.cm&&ga(a.cm,"beforeChange");c=function(c){var d=e.changes[c];d.origin=b;if(m&&!tf(a,d,!1))return g.length=0,{};l.push(Gd(a,d));var f=c?Dd(a,d):z(g);Lb(a,d,f,lf(a,d));!c&&a.cm&&a.cm.scrollIntoView({from:d.from,to:Ba(d)});var h=[];Wa(a,function(a,b){b||-1!=L(h,a.history)||(wf(a.history,d),h.push(a.history));Lb(a,d,null,lf(a,d))})};for(d=e.changes.length-
1;0<=d;--d)if(f=c(d))return f.v}}}function xf(a,b){if(0!=b&&(a.first+=b,a.sel=new ca(gc(a.sel.ranges,function(a){return new A(p(a.anchor.line+b,a.anchor.ch),p(a.head.line+b,a.head.ch))}),a.sel.primIndex),a.cm)){U(a.cm,a.first,a.first-b,b);for(var c=a.cm.display,d=c.viewFrom;d<c.viewTo;d++)Aa(a.cm,d,"gutter")}}function Lb(a,b,c,d){if(a.cm&&!a.cm.curOp)return J(a.cm,Lb)(a,b,c,d);if(b.to.line<a.first)xf(a,b.text.length-1-(b.to.line-b.from.line));else if(!(b.from.line>a.lastLine())){if(b.from.line<a.first){var e=
b.text.length-1-(a.first-b.from.line);xf(a,e);b={from:p(a.first,0),to:p(b.to.line+e,b.to.ch),text:[z(b.text)],origin:b.origin}}e=a.lastLine();b.to.line>e&&(b={from:b.from,to:p(e,t(a,e).text.length),text:[b.text[0]],origin:b.origin});b.removed=Ha(a,b.from,b.to);c||(c=Dd(a,b));a.cm?Mg(a.cm,b,d):Fd(a,b,d);Dc(a,c,ra)}}function Mg(a,b,c){var d=a.doc,e=a.display,f=b.from,g=b.to,h=!1,k=f.line;a.options.lineWrapping||(k=C(na(t(d,f.line))),d.iter(k,g.line+1,function(a){if(a==e.maxLine)return h=!0}));-1<d.sel.contains(b.from,
b.to)&&fe(a);Fd(d,b,c,Le(a));a.options.lineWrapping||(d.iter(k,f.line+b.text.length,function(a){var b=lc(a);b>e.maxLineLength&&(e.maxLine=a,e.maxLineLength=b,e.maxLineChanged=!0,h=!1)}),h&&(a.curOp.updateMaxLine=!0));rg(d,f.line);Ib(a,400);c=b.text.length-(g.line-f.line)-1;b.full?U(a):f.line!=g.line||1!=b.text.length||ef(a.doc,b)?U(a,f.line,g.line+1,c):Aa(a,f.line,"text");c=ga(a,"changes");if((d=ga(a,"change"))||c)b={from:f,to:g,text:b.text,removed:b.removed,origin:b.origin},d&&N(a,"change",a,b),
c&&(a.curOp.changeObjs||(a.curOp.changeObjs=[])).push(b);a.display.selForContextMenu=null}function lb(a,b,c,d,e){d||(d=c);if(0>y(d,c)){var f;f=[d,c];c=f[0];d=f[1];f}"string"==typeof b&&(b=a.splitLines(b));kb(a,{from:c,to:d,text:b,origin:e})}function yf(a,b,c,d){c<a.line?a.line+=d:b<a.line&&(a.line=b,a.ch=0)}function zf(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e],g=!0;if(f.ranges)for(f.copied||(f=a[e]=f.deepCopy(),f.copied=!0),g=0;g<f.ranges.length;g++)yf(f.ranges[g].anchor,b,c,d),yf(f.ranges[g].head,
b,c,d);else{for(var h=0;h<f.changes.length;++h){var k=f.changes[h];if(c<k.from.line)k.from=p(k.from.line+d,k.from.ch),k.to=p(k.to.line+d,k.to.ch);else if(b<=k.to.line){g=!1;break}}g||(a.splice(0,e+1),e=0)}}}function wf(a,b){var c=b.from.line,d=b.to.line,e=b.text.length-(d-c)-1;zf(a.done,c,d,e);zf(a.undone,c,d,e)}function Mb(a,b,c,d){var e=b,f=b;"number"==typeof b?f=t(a,Math.max(a.first,Math.min(b,a.first+a.size-1))):e=C(b);if(null==e)return null;d(f,e)&&a.cm&&Aa(a.cm,e,c);return f}function Nb(a){this.lines=
a;this.parent=null;for(var b=0,c=0;c<a.length;++c)a[c].parent=this,b+=a[c].height;this.height=b}function Ob(a){this.children=a;for(var b=0,c=0,d=0;d<a.length;++d){var e=a[d],b=b+e.chunkSize(),c=c+e.height;e.parent=this}this.size=b;this.height=c;this.parent=null}function Ng(a,b,c,d){var e=new Pb(a,c,d),f=a.cm;f&&e.noHScroll&&(f.display.alignWidgets=!0);Mb(a,b,"widget",function(b){var c=b.widgets||(b.widgets=[]);null==e.insertAt?c.push(e):c.splice(Math.min(c.length-1,Math.max(0,e.insertAt)),0,e);e.line=
b;f&&!Ka(a,b)&&(c=oa(b)<a.scrollTop,ma(b,b.height+Bb(e)),c&&vc(f,e.height),f.curOp.forceUpdate=!0);return!0});N(f,"lineWidgetAdded",f,e,"number"==typeof b?b:C(b));return e}function mb(a,b,c,d,e){if(d&&d.shared)return Og(a,b,c,d,e);if(a.cm&&!a.cm.curOp)return J(a.cm,mb)(a,b,c,d,e);var f=new Ca(a,e);e=y(b,c);d&&Ga(d,f,!1);if(0<e||0==e&&!1!==f.clearWhenEmpty)return f;f.replacedWith&&(f.collapsed=!0,f.widgetNode=$a("span",[f.replacedWith],"CodeMirror-widget"),d.handleMouseEvents||f.widgetNode.setAttribute("cm-ignore-events",
"true"),d.insertLeft&&(f.widgetNode.insertLeft=!0));if(f.collapsed){if(de(a,b.line,b,c,f)||b.line!=c.line&&de(a,c.line,b,c,f))throw Error("Inserting collapsed marker partially overlapping an existing one");ya=!0}f.addToHistory&&kf(a,{from:b,to:c,origin:"markText"},a.sel,NaN);var g=b.line,h=a.cm,k;a.iter(g,c.line+1,function(a){h&&f.collapsed&&!h.options.lineWrapping&&na(a)==h.display.maxLine&&(k=!0);f.collapsed&&g!=b.line&&ma(a,0);var d=new kc(f,g==b.line?b.ch:null,g==c.line?c.ch:null);a.markedSpans=
a.markedSpans?a.markedSpans.concat([d]):[d];d.marker.attachLine(a);++g});f.collapsed&&a.iter(b.line,c.line+1,function(b){Ka(a,b)&&ma(b,0)});f.clearOnEnter&&v(f,"beforeCursorEnter",function(){return f.clear()});f.readOnly&&(uf=!0,(a.history.done.length||a.history.undone.length)&&a.clearHistory());f.collapsed&&(f.id=++Af,f.atomic=!0);if(h){k&&(h.curOp.updateMaxLine=!0);if(f.collapsed)U(h,b.line,c.line+1);else if(f.className||f.title||f.startStyle||f.endStyle||f.css)for(d=b.line;d<=c.line;d++)Aa(h,d,
"text");f.atomic&&qf(h.doc);N(h,"markerAdded",h,f)}return f}function Og(a,b,c,d,e){d=Ga(d);d.shared=!1;var f=[mb(a,b,c,d,e)],g=f[0],h=d.widgetNode;Wa(a,function(a){h&&(d.widgetNode=h.cloneNode(!0));f.push(mb(a,w(a,b),w(a,c),d,e));for(var l=0;l<a.linked.length;++l)if(a.linked[l].isParent)return;g=z(f)});return new Qb(f,g)}function Bf(a){return a.findMarks(p(a.first,0),a.clipPos(p(a.lastLine())),function(a){return a.parent})}function Pg(a){for(var b=function(b){b=a[b];var c=[b.primary.doc];Wa(b.primary.doc,
function(a){return c.push(a)});for(var f=0;f<b.markers.length;f++){var g=b.markers[f];-1==L(c,g.doc)&&(g.parent=null,b.markers.splice(f--,1))}},c=0;c<a.length;c++)b(c)}function Qg(a){var b=this;Cf(b);if(!I(b,a)&&!ua(b.display,a)){Q(a);B&&(Df=+new Date);var c=Ra(b,a,!0),d=a.dataTransfer.files;if(c&&!b.isReadOnly())if(d&&d.length&&window.FileReader&&window.File)for(var e=d.length,f=Array(e),g=0,h=function(a,d){if(!b.options.allowDropFileTypes||-1!=L(b.options.allowDropFileTypes,a.type)){var h=new FileReader;
h.onload=J(b,function(){var a=h.result;/[\x00-\x08\x0e-\x1f]{2}/.test(a)&&(a="");f[d]=a;++g==e&&(c=w(b.doc,c),a={from:c,to:c,text:b.doc.splitLines(f.join(b.doc.lineSeparator())),origin:"paste"},kb(b.doc,a),nf(b.doc,va(c,Ba(a))))});h.readAsText(a)}},k=0;k<e;++k)h(d[k],k);else if(b.state.draggingText&&-1<b.doc.sel.contains(c))b.state.draggingText(a),setTimeout(function(){return b.display.input.focus()},20);else try{if(h=a.dataTransfer.getData("Text")){b.state.draggingText&&!b.state.draggingText.copy&&
(k=b.listSelections());Dc(b.doc,va(c,c));if(k)for(d=0;d<k.length;++d)lb(b.doc,"",k[d].anchor,k[d].head,"drag");b.replaceSelection(h,"around","paste");b.display.input.focus()}}catch(l){}}}function Cf(a){a.display.dragCursor&&(a.display.lineSpace.removeChild(a.display.dragCursor),a.display.dragCursor=null)}function Ef(a){if(document.getElementsByClassName)for(var b=document.getElementsByClassName("CodeMirror"),c=0;c<b.length;c++){var d=b[c].CodeMirror;d&&a(d)}}function Rg(){var a;v(window,"resize",
function(){null==a&&(a=setTimeout(function(){a=null;Ef(Sg)},100))});v(window,"blur",function(){return Ef(Fb)})}function Sg(a){var b=a.display;if(b.lastWrapHeight!=b.wrapper.clientHeight||b.lastWrapWidth!=b.wrapper.clientWidth)b.cachedCharWidth=b.cachedTextHeight=b.cachedPaddingH=null,b.scrollbarsClipped=!1,a.setSize()}function Tg(a){var b=a.split(/-(?!$)/);a=b[b.length-1];for(var c,d,e,f,g=0;g<b.length-1;g++){var h=b[g];if(/^(cmd|meta|m)$/i.test(h))f=!0;else if(/^a(lt)?$/i.test(h))c=!0;else if(/^(c|ctrl|control)$/i.test(h))d=
!0;else if(/^s(hift)?$/i.test(h))e=!0;else throw Error("Unrecognized modifier name: "+h);}c&&(a="Alt-"+a);d&&(a="Ctrl-"+a);f&&(a="Cmd-"+a);e&&(a="Shift-"+a);return a}function Ug(a){var b={},c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!/^(name|fallthrough|(de|at)tach)$/.test(c)){if("..."!=d)for(var e=gc(c.split(" "),Tg),f=0;f<e.length;f++){var g=void 0,h=void 0;f==e.length-1?(h=e.join(" "),g=d):(h=e.slice(0,f+1).join(" "),g="...");var k=b[h];if(!k)b[h]=g;else if(k!=g)throw Error("Inconsistent bindings for "+
h);}delete a[c]}}for(var l in b)a[l]=b[l];return a}function nb(a,b,c,d){b=Fc(b);var e=b.call?b.call(a,d):b[a];if(!1===e)return"nothing";if("..."===e)return"multi";if(null!=e&&c(e))return"handled";if(b.fallthrough){if("[object Array]"!=Object.prototype.toString.call(b.fallthrough))return nb(a,b.fallthrough,c,d);for(e=0;e<b.fallthrough.length;e++){var f=nb(a,b.fallthrough[e],c,d);if(f)return f}}}function Ff(a){a="string"==typeof a?a:Da[a.keyCode];return"Ctrl"==a||"Alt"==a||"Shift"==a||"Mod"==a}function Gf(a,
b,c){var d=a;b.altKey&&"Alt"!=d&&(a="Alt-"+a);(Hf?b.metaKey:b.ctrlKey)&&"Ctrl"!=d&&(a="Ctrl-"+a);(Hf?b.ctrlKey:b.metaKey)&&"Cmd"!=d&&(a="Cmd-"+a);!c&&b.shiftKey&&"Shift"!=d&&(a="Shift-"+a);return a}function If(a,b){if(ka&&34==a.keyCode&&a["char"])return!1;var c=Da[a.keyCode];return null==c||a.altGraphKey?!1:Gf(c,a,b)}function Fc(a){return"string"==typeof a?Rb[a]:a}function ob(a,b){for(var c=a.doc.sel.ranges,d=[],e=0;e<c.length;e++){for(var f=b(c[e]);d.length&&0>=y(f.from,z(d).to);){var g=d.pop();
if(0>y(g.from,f.from)){f.from=g.from;break}}d.push(f)}Y(a,function(){for(var b=d.length-1;0<=b;b--)lb(a.doc,"",d[b].from,d[b].to,"+delete");fb(a)})}function Kd(a,b,c){b=Yd(a.text,b+c,c);return 0>b||b>a.text.length?null:b}function Ld(a,b,c){a=Kd(a,b.ch,c);return null==a?null:new p(b.line,a,0>c?"after":"before")}function Md(a,b,c,d,e){if(a&&(a=ta(c,b.doc.direction))){a=0>e?z(a):a[0];var f=0>e==(1==a.level)?"after":"before",g;if(0<a.level||"rtl"==b.doc.direction){var h=Oa(b,c);g=0>e?c.text.length-1:
0;var k=ia(b,h,g).top;g=rb(function(a){return ia(b,h,a).top==k},0>e==(1==a.level)?a.from:a.to-1,g);"before"==f&&(g=Kd(c,g,1))}else g=0>e?a.to:a.from;return new p(d,g,f)}return new p(d,0>e?c.text.length:0,0>e?"before":"after")}function Vg(a,b,c,d){var e=ta(b,a.doc.direction);if(!e)return Ld(b,c,d);c.ch>=b.text.length?(c.ch=b.text.length,c.sticky="before"):0>=c.ch&&(c.ch=0,c.sticky="after");var f=vb(e,c.ch,c.sticky),g=e[f];if("ltr"==a.doc.direction&&0==g.level%2&&(0<d?g.to>c.ch:g.from<c.ch))return Ld(b,
c,d);var h=function(a,c){return Kd(b,a instanceof p?a.ch:a,c)},k,l=function(c){if(!a.options.lineWrapping)return{begin:0,end:b.text.length};k=k||Oa(a,b);return Ke(a,b,k,c)},m=l("before"==c.sticky?h(c,-1):c.ch);if("rtl"==a.doc.direction||1==g.level){var q=1==g.level==0>d,n=h(c,q?1:-1);if(null!=n&&(q?n<=g.to&&n<=m.end:n>=g.from&&n>=m.begin))return new p(c.line,n,q?"before":"after")}g=function(a,b,d){for(var f=function(a,b){return b?new p(c.line,h(a,1),"before"):new p(c.line,a,"after")};0<=a&&a<e.length;a+=
b){var g=e[a],k=0<b==(1!=g.level),l=k?d.begin:h(d.end,-1);if(g.from<=l&&l<g.to)return f(l,k);l=k?g.from:h(g.to,-1);if(d.begin<=l&&l<d.end)return f(l,k)}};if(f=g(f+d,d,m))return f;m=0<d?m.end:h(m.begin,-1);return null==m||0<d&&m==b.text.length||!(f=g(0<d?0:e.length-1,d,l(m)))?null:f}function Jf(a,b){var c=t(a.doc,b),d=na(c);d!=c&&(b=C(d));return Md(!0,a,d,b,1)}function Kf(a,b){var c=Jf(a,b.line),d=t(a.doc,c.line),e=ta(d,a.doc.direction);return e&&0!=e[0].level?c:(d=Math.max(0,d.text.search(/\S/)),
p(c.line,b.line==c.line&&b.ch<=d&&b.ch?0:d,c.sticky))}function Gc(a,b,c){if("string"==typeof b&&(b=Sb[b],!b))return!1;a.display.input.ensurePolled();var d=a.display.shift,e=!1;try{a.isReadOnly()&&(a.state.suppressEdits=!0),c&&(a.display.shift=!1),e=b(a)!=Hc}finally{a.display.shift=d,a.state.suppressEdits=!1}return e}function Wg(a,b,c){for(var d=0;d<a.state.keyMaps.length;d++){var e=nb(b,a.state.keyMaps[d],c,a);if(e)return e}return a.options.extraKeys&&nb(b,a.options.extraKeys,c,a)||nb(b,a.options.keyMap,
c,a)}function Tb(a,b,c,d){var e=a.state.keySeq;if(e){if(Ff(b))return"handled";Xg.set(50,function(){a.state.keySeq==e&&(a.state.keySeq=null,a.display.input.reset())});b=e+" "+b}d=Wg(a,b,d);"multi"==d&&(a.state.keySeq=b);"handled"==d&&N(a,"keyHandled",a,b,c);if("handled"==d||"multi"==d)Q(c),ud(a);return e&&!d&&/\'$/.test(b)?(Q(c),!0):!!d}function Lf(a,b){var c=If(b,!0);return c?b.shiftKey&&!a.state.keySeq?Tb(a,"Shift-"+c,b,function(b){return Gc(a,b,!0)})||Tb(a,c,b,function(b){if("string"==typeof b?
/^go[A-Z]/.test(b):b.motion)return Gc(a,b)}):Tb(a,c,b,function(b){return Gc(a,b)}):!1}function Yg(a,b,c){return Tb(a,"'"+c+"'",b,function(b){return Gc(a,b,!0)})}function Mf(a){this.curOp.focus=sa();if(!I(this,a)){B&&11>D&&27==a.keyCode&&(a.returnValue=!1);var b=a.keyCode;this.display.shift=16==b||a.shiftKey;var c=Lf(this,a);ka&&(Nd=c?b:null,!c&&88==b&&!Zg&&(ha?a.metaKey:a.ctrlKey)&&this.replaceSelection("",null,"cut"));18!=b||/\bCodeMirror-crosshair\b/.test(this.display.lineDiv.className)||$g(this)}}
function $g(a){function b(a){18!=a.keyCode&&a.altKey||(Sa(c,"CodeMirror-crosshair"),aa(document,"keyup",b),aa(document,"mouseover",b))}var c=a.display.lineDiv;Fa(c,"CodeMirror-crosshair");v(document,"keyup",b);v(document,"mouseover",b)}function Nf(a){16==a.keyCode&&(this.doc.sel.shift=!1);I(this,a)}function Of(a){if(!(ua(this.display,a)||I(this,a)||a.ctrlKey&&!a.altKey||ha&&a.metaKey)){var b=a.keyCode,c=a.charCode;if(ka&&b==Nd)Nd=null,Q(a);else if(!ka||a.which&&!(10>a.which)||!Lf(this,a))if(b=String.fromCharCode(null==
c?b:c),"\b"!=b&&!Yg(this,a,b))this.display.input.onKeyPress(a)}}function ah(a,b){var c=+new Date;if(Ub&&Ub.compare(c,a,b))return Vb=Ub=null,"triple";if(Vb&&Vb.compare(c,a,b))return Ub=new Od(c,a,b),Vb=null,"double";Vb=new Od(c,a,b);Ub=null;return"single"}function Pf(a){var b=this.display;if(!(I(this,a)||b.activeTouch&&b.input.supportsTouch()))if(b.input.ensurePolled(),b.shift=a.shiftKey,ua(b,a))P||(b.scroller.draggable=!1,setTimeout(function(){return b.scroller.draggable=!0},100));else if(!Ic(this,
a,"gutterClick",!0)){var c=Ra(this,a),d=he(a),e=c?ah(c,d):"single";window.focus();1==d&&this.state.selectingText&&this.state.selectingText(a);c&&bh(this,d,c,e,a)||(1==d?c?ch(this,c,e,a):(a.target||a.srcElement)==b.scroller&&Q(a):2==d?(c&&Cc(this.doc,c),setTimeout(function(){return b.input.focus()},20)):3==d&&(Pd?Qf(this,a):Pe(this)))}}function bh(a,b,c,d,e){var f="Click";"double"==d?f="Double"+f:"triple"==d&&(f="Triple"+f);return Tb(a,Gf((1==b?"Left":2==b?"Middle":"Right")+f,e),e,function(b){"string"==
typeof b&&(b=Sb[b]);if(!b)return!1;var d=!1;try{a.isReadOnly()&&(a.state.suppressEdits=!0),d=b(a,c)!=Hc}finally{a.state.suppressEdits=!1}return d})}function ch(a,b,c,d){B?setTimeout(Nc(Oe,a),0):a.curOp.focus=sa();var e=a.getOption("configureMouse"),e=e?e(a,c,d):{};null==e.unit&&(e.unit=(dh?d.shiftKey&&d.metaKey:d.altKey)?"rectangle":"single"==c?"char":"double"==c?"word":"line");if(null==e.extend||a.doc.extend)e.extend=a.doc.extend||d.shiftKey;null==e.addNew&&(e.addNew=ha?d.metaKey:d.ctrlKey);null==
e.moveOnDrag&&(e.moveOnDrag=!(ha?d.altKey:d.ctrlKey));var f=a.doc.sel,g;a.options.dragDrop&&eh&&!a.isReadOnly()&&"single"==c&&-1<(g=f.contains(b))&&(0>y((g=f.ranges[g]).from(),b)||0<b.xRel)&&(0<y(g.to(),b)||0>b.xRel)?fh(a,d,b,e):gh(a,d,b,e)}function fh(a,b,c,d){var e=a.display,f=!1,g=J(a,function(b){P&&(e.scroller.draggable=!1);a.state.draggingText=!1;aa(document,"mouseup",g);aa(document,"mousemove",h);aa(e.scroller,"dragstart",k);aa(e.scroller,"drop",g);f||(Q(b),d.addNew||Cc(a.doc,c,null,null,d.extend),
P||B&&9==D?setTimeout(function(){document.body.focus();e.input.focus()},20):e.input.focus())}),h=function(a){f=f||10<=Math.abs(b.clientX-a.clientX)+Math.abs(b.clientY-a.clientY)},k=function(){return f=!0};P&&(e.scroller.draggable=!0);a.state.draggingText=g;g.copy=!d.moveOnDrag;e.scroller.dragDrop&&e.scroller.dragDrop();v(document,"mouseup",g);v(document,"mousemove",h);v(e.scroller,"dragstart",k);v(e.scroller,"drop",g);Pe(a);setTimeout(function(){return e.input.focus()},20)}function Rf(a,b,c){if("char"==
c)return new A(b,b);if("word"==c)return a.findWordAt(b);if("line"==c)return new A(p(b.line,0),w(a.doc,p(b.line+1,0)));a=c(a,b);return new A(a.from,a.to)}function gh(a,b,c,d){function e(b){if(0!=y(r,b))if(r=b,"rectangle"==d.unit){for(var e=[],f=a.options.tabSize,g=fa(t(k,c.line).text,c.ch,f),h=fa(t(k,b.line).text,b.ch,f),n=Math.min(g,h),g=Math.max(g,h),h=Math.min(c.line,b.line),u=Math.min(a.lastLine(),Math.max(c.line,b.line));h<=u;h++){var v=t(k,h).text,W=Oc(v,n,f);n==g?e.push(new A(p(h,W),p(h,W))):
v.length>W&&e.push(new A(p(h,W),p(h,Oc(v,g,f))))}e.length||e.push(new A(c,c));O(k,la(q.ranges.slice(0,m).concat(e),m),{origin:"*mouse",scroll:!1});a.scrollIntoView(b)}else e=l,n=Rf(a,b,d.unit),b=e.anchor,0<y(n.anchor,b)?(f=n.head,b=jc(e.from(),n.anchor)):(f=n.anchor,b=ic(e.to(),n.head)),e=q.ranges.slice(0),e[m]=hh(a,new A(w(k,b),f)),O(k,la(e,m),Qd)}function f(b){var c=++x,g=Ra(a,b,!0,"rectangle"==d.unit);if(g)if(0!=y(g,r)){a.curOp.focus=sa();e(g);var l=wd(h,k);(g.line>=l.to||g.line<l.from)&&setTimeout(J(a,
function(){x==c&&f(b)}),150)}else{var m=b.clientY<u.top?-20:b.clientY>u.bottom?20:0;m&&setTimeout(J(a,function(){x==c&&(h.scroller.scrollTop+=m,f(b))}),50)}}function g(b){a.state.selectingText=!1;x=Infinity;Q(b);h.input.focus();aa(document,"mousemove",z);aa(document,"mouseup",B);k.history.lastSelOrigin=null}var h=a.display,k=a.doc;Q(b);var l,m,q=k.sel,n=q.ranges;d.addNew&&!d.extend?(m=k.sel.contains(c),l=-1<m?n[m]:new A(c,c)):(l=k.sel.primary(),m=k.sel.primIndex);"rectangle"==d.unit?(d.addNew||(l=
new A(c,c)),c=Ra(a,b,!0,!0),m=-1):(b=Rf(a,c,d.unit),l=d.extend?Hd(l,b.anchor,b.head,d.extend):b);d.addNew?-1==m?(m=n.length,O(k,la(n.concat([l]),m),{scroll:!1,origin:"*mouse"})):1<n.length&&n[m].empty()&&"char"==d.unit&&!d.extend?(O(k,la(n.slice(0,m).concat(n.slice(m+1)),0),{scroll:!1,origin:"*mouse"}),q=k.sel):Id(k,m,l,Qd):(m=0,O(k,new ca([l],0),Qd),q=k.sel);var r=c,u=h.wrapper.getBoundingClientRect(),x=0,z=J(a,function(a){he(a)?f(a):g(a)}),B=J(a,g);a.state.selectingText=B;v(document,"mousemove",
z);v(document,"mouseup",B)}function hh(a,b){var c=b.anchor,d=b.head,e=t(a.doc,c.line);if(0==y(c,d)&&c.sticky==d.sticky)return b;e=ta(e);if(!e)return b;var f=vb(e,c.ch,c.sticky),g=e[f];if(g.from!=c.ch&&g.to!=c.ch)return b;var h=f+(g.from==c.ch==(1!=g.level)?0:1);if(0==h||h==e.length)return b;var k;d.line!=c.line?k=0<(d.line-c.line)*("ltr"==a.doc.direction?1:-1):(k=vb(e,d.ch,d.sticky),f=k-f||(d.ch-c.ch)*(1==g.level?-1:1),k=k==h-1||k==h?0>f:0<f);e=e[h+(k?-1:0)];e=(h=k==(1==e.level))?e.from:e.to;h=h?
"after":"before";return c.ch==e&&c.sticky==h?b:new A(new p(c.line,e,h),d)}function Ic(a,b,c,d){var e,f;if(b.touches)e=b.touches[0].clientX,f=b.touches[0].clientY;else try{e=b.clientX,f=b.clientY}catch(k){return!1}if(e>=Math.floor(a.display.gutters.getBoundingClientRect().right))return!1;d&&Q(b);d=a.display;var g=d.lineDiv.getBoundingClientRect();if(f>g.bottom||!ga(a,c))return $c(b);f-=g.top-d.viewOffset;for(g=0;g<a.options.gutters.length;++g){var h=d.gutters.childNodes[g];if(h&&h.getBoundingClientRect().right>=
e)return e=Ia(a.doc,f),F(a,c,a,e,a.options.gutters[g],b),$c(b)}}function Qf(a,b){var c;(c=ua(a.display,b))||(c=ga(a,"gutterContextMenu")?Ic(a,b,"gutterContextMenu",!1):!1);if(!c&&!I(a,b,"contextmenu"))a.display.input.onContextMenu(b)}function Sf(a){a.display.wrapper.className=a.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+a.options.theme.replace(/(^|\s)\s*/g," cm-s-");Db(a)}function Wb(a){$e(a);U(a);Re(a)}function ih(a,b,c){!b!=!(c&&c!=pb)&&(c=a.display.dragFunctions,b=b?v:aa,b(a.display.scroller,
"dragstart",c.start),b(a.display.scroller,"dragenter",c.enter),b(a.display.scroller,"dragover",c.over),b(a.display.scroller,"dragleave",c.leave),b(a.display.scroller,"drop",c.drop))}function jh(a){a.options.lineWrapping?(Fa(a.display.wrapper,"CodeMirror-wrap"),a.display.sizer.style.minWidth="",a.display.sizerWidth=null):(Sa(a.display.wrapper,"CodeMirror-wrap"),Zc(a));td(a);U(a);Db(a);setTimeout(function(){return gb(a)},100)}function E(a,b){var c=this;if(!(this instanceof E))return new E(a,b);this.options=
b=b?Ga(b):{};Ga(Tf,b,!1);Cd(b);var d=b.value;"string"==typeof d&&(d=new V(d,b.mode,null,b.lineSeparator,b.direction));this.doc=d;var e=new E.inputStyles[b.inputStyle](this),e=this.display=new jg(a,d,e);e.wrapper.CodeMirror=this;$e(this);Sf(this);b.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap");We(this);this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:!1,cutIncoming:!1,selectingText:!1,draggingText:!1,highlight:new Xa,
keySeq:null,specialChars:null};b.autofocus&&!sb&&e.input.focus();B&&11>D&&setTimeout(function(){return c.display.input.reset(!0)},20);kh(this);Uf||(Rg(),Uf=!0);Ua(this);this.curOp.forceUpdate=!0;ff(this,d);b.autofocus&&!sb||this.hasFocus()?setTimeout(Nc(vd,this),20):Fb(this);for(var f in Jc)if(Jc.hasOwnProperty(f))Jc[f](c,b[f],pb);Se(this);b.finishInit&&b.finishInit(this);for(d=0;d<Rd.length;++d)Rd[d](c);Va(this);P&&b.lineWrapping&&"optimizelegibility"==getComputedStyle(e.lineDiv).textRendering&&
(e.lineDiv.style.textRendering="auto")}function kh(a){function b(){d.activeTouch&&(e=setTimeout(function(){return d.activeTouch=null},1E3),f=d.activeTouch,f.end=+new Date)}function c(a,b){if(null==b.left)return!0;var c=b.left-a.left,d=b.top-a.top;return 400<c*c+d*d}var d=a.display;v(d.scroller,"mousedown",J(a,Pf));B&&11>D?v(d.scroller,"dblclick",J(a,function(b){if(!I(a,b)){var c=Ra(a,b);!c||Ic(a,b,"gutterClick",!0)||ua(a.display,b)||(Q(b),b=a.findWordAt(c),Cc(a.doc,b.anchor,b.head))}})):v(d.scroller,
"dblclick",function(b){return I(a,b)||Q(b)});Pd||v(d.scroller,"contextmenu",function(b){return Qf(a,b)});var e,f={end:0};v(d.scroller,"touchstart",function(b){var c;if(c=!I(a,b))1!=b.touches.length?c=!1:(c=b.touches[0],c=1>=c.radiusX&&1>=c.radiusY),c=!c;c&&!Ic(a,b,"gutterClick",!0)&&(d.input.ensurePolled(),clearTimeout(e),c=+new Date,d.activeTouch={start:c,moved:!1,prev:300>=c-f.end?f:null},1==b.touches.length&&(d.activeTouch.left=b.touches[0].pageX,d.activeTouch.top=b.touches[0].pageY))});v(d.scroller,
"touchmove",function(){d.activeTouch&&(d.activeTouch.moved=!0)});v(d.scroller,"touchend",function(e){var f=d.activeTouch;if(f&&!ua(d,e)&&null!=f.left&&!f.moved&&300>new Date-f.start){var g=a.coordsChar(d.activeTouch,"page"),f=!f.prev||c(f,f.prev)?new A(g,g):!f.prev.prev||c(f,f.prev.prev)?a.findWordAt(g):new A(p(g.line,0),w(a.doc,p(g.line+1,0)));a.setSelection(f.anchor,f.head);a.focus();Q(e)}b()});v(d.scroller,"touchcancel",b);v(d.scroller,"scroll",function(){d.scroller.clientHeight&&(Hb(a,d.scroller.scrollTop),
Ta(a,d.scroller.scrollLeft,!0),F(a,"scroll",a))});v(d.scroller,"mousewheel",function(b){return bf(a,b)});v(d.scroller,"DOMMouseScroll",function(b){return bf(a,b)});v(d.wrapper,"scroll",function(){return d.wrapper.scrollTop=d.wrapper.scrollLeft=0});d.dragFunctions={enter:function(b){I(a,b)||xb(b)},over:function(b){if(!I(a,b)){var c=Ra(a,b);if(c){var d=document.createDocumentFragment();Ne(a,c,d);a.display.dragCursor||(a.display.dragCursor=u("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),a.display.lineSpace.insertBefore(a.display.dragCursor,
a.display.cursorDiv));Z(a.display.dragCursor,d)}xb(b)}},start:function(b){if(B&&(!a.state.draggingText||100>+new Date-Df))xb(b);else if(!I(a,b)&&!ua(a.display,b)&&(b.dataTransfer.setData("Text",a.getSelection()),b.dataTransfer.effectAllowed="copyMove",b.dataTransfer.setDragImage&&!Vf)){var c=u("img",null,null,"position: fixed; left: 0; top: 0;");c.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw\x3d\x3d";ka&&(c.width=c.height=1,a.display.wrapper.appendChild(c),c._top=
c.offsetTop);b.dataTransfer.setDragImage(c,0,0);ka&&c.parentNode.removeChild(c)}},drop:J(a,Qg),leave:function(b){I(a,b)||Cf(a)}};var g=d.input.getField();v(g,"keyup",function(b){return Nf.call(a,b)});v(g,"keydown",J(a,Mf));v(g,"keypress",J(a,Of));v(g,"focus",function(b){return vd(a,b)});v(g,"blur",function(b){return Fb(a,b)})}function Xb(a,b,c,d){var e=a.doc,f;null==c&&(c="add");"smart"==c&&(e.mode.indent?f=yb(a,b).state:c="prev");var g=a.options.tabSize,h=t(e,b),k=fa(h.text,null,g);h.stateAfter&&
(h.stateAfter=null);var l=h.text.match(/^\s*/)[0],m;if(!d&&!/\S/.test(h.text))m=0,c="not";else if("smart"==c&&(m=e.mode.indent(f,h.text.slice(l.length),h.text),m==Hc||150<m)){if(!d)return;c="prev"}"prev"==c?m=b>e.first?fa(t(e,b-1).text,null,g):0:"add"==c?m=k+a.options.indentUnit:"subtract"==c?m=k-a.options.indentUnit:"number"==typeof c&&(m=k+c);m=Math.max(0,m);c="";d=0;if(a.options.indentWithTabs)for(a=Math.floor(m/g);a;--a)d+=g,c+="\t";d<m&&(c+=Pc(m-d));if(c!=l)return lb(e,c,p(b,0),p(b,l.length),
"+input"),h.stateAfter=null,!0;for(g=0;g<e.sel.ranges.length;g++)if(h=e.sel.ranges[g],h.head.line==b&&h.head.ch<l.length){b=p(b,l.length);Id(e,g,new A(b,b));break}}function Wf(a){da=a}function Sd(a,b,c,d,e){var f=a.doc;a.display.shift=!1;d||(d=f.sel);var g=a.state.pasteIncoming||"paste"==e,h=Td(b),k=null;if(g&&1<d.ranges.length)if(da&&da.text.join("\n")==b){if(0==d.ranges.length%da.text.length)for(var k=[],l=0;l<da.text.length;l++)k.push(f.splitLines(da.text[l]))}else h.length==d.ranges.length&&a.options.pasteLinesPerSelection&&
(k=gc(h,function(a){return[a]}));for(var m,l=d.ranges.length-1;0<=l;l--){m=d.ranges[l];var q=m.from(),n=m.to();m.empty()&&(c&&0<c?q=p(q.line,q.ch-c):a.state.overwrite&&!g?n=p(n.line,Math.min(t(f,n.line).text.length,n.ch+z(h).length)):da&&da.lineWise&&da.text.join("\n")==b&&(q=n=p(q.line,0)));m=a.curOp.updateInput;q={from:q,to:n,text:k?k[l%k.length]:h,origin:e||(g?"paste":a.state.cutIncoming?"cut":"+input")};kb(a.doc,q);N(a,"inputRead",a,q)}b&&!g&&Xf(a,b);fb(a);a.curOp.updateInput=m;a.curOp.typing=
!0;a.state.pasteIncoming=a.state.cutIncoming=!1}function Yf(a,b){var c=a.clipboardData&&a.clipboardData.getData("Text");if(c)return a.preventDefault(),b.isReadOnly()||b.options.disableInput||Y(b,function(){return Sd(b,c,0,null,"paste")}),!0}function Xf(a,b){if(a.options.electricChars&&a.options.smartIndent)for(var c=a.doc.sel,d=c.ranges.length-1;0<=d;d--){var e=c.ranges[d];if(!(100<e.head.ch||d&&c.ranges[d-1].head.line==e.head.line)){var f=a.getModeAt(e.head),g=!1;if(f.electricChars)for(var h=0;h<
f.electricChars.length;h++){if(-1<b.indexOf(f.electricChars.charAt(h))){g=Xb(a,e.head.line,"smart");break}}else f.electricInput&&f.electricInput.test(t(a.doc,e.head.line).text.slice(0,e.head.ch))&&(g=Xb(a,e.head.line,"smart"));g&&N(a,"electricInput",a,e.head.line)}}}function Zf(a){for(var b=[],c=[],d=0;d<a.doc.sel.ranges.length;d++){var e=a.doc.sel.ranges[d].head.line,e={anchor:p(e,0),head:p(e+1,0)};c.push(e);b.push(a.getRange(e.anchor,e.head))}return{text:b,ranges:c}}function $f(a,b){a.setAttribute("autocorrect",
"off");a.setAttribute("autocapitalize","off");a.setAttribute("spellcheck",!!b)}function ag(){var a=u("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),b=u("div",[a],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");P?a.style.width="1000px":a.setAttribute("wrap","off");Yb&&(a.style.border="1px solid black");$f(a);return b}function Ud(a,b,c,d,e){function f(d){var f;f=e?Vg(a.cm,k,b,c):Ld(k,b,c);if(null==f){if(d=!d)d=b.line+
c,d<a.first||d>=a.first+a.size?d=!1:(b=new p(d,b.ch,b.sticky),d=k=t(a,d));if(d)b=Md(e,a.cm,k,b.line,c);else return!1}else b=f;return!0}var g=b,h=c,k=t(a,b.line);if("char"==d)f();else if("column"==d)f(!0);else if("word"==d||"group"==d){var l=null;d="group"==d;for(var m=a.cm&&a.cm.getHelper(b,"wordChars"),q=!0;!(0>c)||f(!q);q=!1){var n=k.text.charAt(b.ch)||"\n",n=hc(n,m)?"w":d&&"\n"==n?"n":!d||/\s/.test(n)?null:"p";!d||q||n||(n="s");if(l&&l!=n){0>c&&(c=1,f(),b.sticky="after");break}n&&(l=n);if(0<c&&
!f(!q))break}}h=Jd(a,b,g,h,!0);Uc(g,h)&&(h.hitSide=!0);return h}function bg(a,b,c,d){var e=a.doc,f=b.left,g;"page"==d?(g=Math.max(Math.min(a.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight)-.5*Pa(a.display),3),g=(0<c?b.bottom:b.top)+c*g):"line"==d&&(g=0<c?b.bottom+3:b.top-3);for(;;){b=qd(a,f,g);if(!b.outside)break;if(0>c?0>=g:g>=e.height){b.hitSide=!0;break}g+=5*c}return b}function cg(a,b){var c=kd(a,b.line);if(!c||c.hidden)return null;var d=t(a.doc,b.line),
c=Ae(c,d,b.line),d=ta(d,a.doc.direction),e="left";d&&(e=vb(d,b.ch)%2?"right":"left");c=Be(c.map,b.ch,e);c.offset="right"==c.collapse?c.end:c.start;return c}function lh(a){for(;a;a=a.parentNode)if(/CodeMirror-gutter-wrapper/.test(a.className))return!0;return!1}function qb(a,b){b&&(a.bad=!0);return a}function mh(a,b,c,d,e){function f(a){return function(b){return b.id==a}}function g(a){a&&(l&&(k+=m,l=!1),k+=a)}function h(b){if(1==b.nodeType){var c=b.getAttribute("cm-text");if(null!=c)g(c||b.textContent.replace(/\u200b/g,
""));else{var c=b.getAttribute("cm-marker"),r;if(c)b=a.findMarks(p(d,0),p(e+1,0),f(+c)),b.length&&(r=b[0].find(0))&&g(Ha(a.doc,r.from,r.to).join(m));else if("false"!=b.getAttribute("contenteditable")){(r=/^(pre|div|p)$/i.test(b.nodeName))&&l&&(k+=m,l=!1);for(c=0;c<b.childNodes.length;c++)h(b.childNodes[c]);r&&(l=!0)}}}else 3==b.nodeType&&g(b.nodeValue)}for(var k="",l=!1,m=a.doc.lineSeparator();;){h(b);if(b==c)break;b=b.nextSibling}return k}function Kc(a,b,c){var d;if(b==a.display.lineDiv){d=a.display.lineDiv.childNodes[c];
if(!d)return qb(a.clipPos(p(a.display.viewTo-1)),!0);b=null;c=0}else for(d=b;;d=d.parentNode){if(!d||d==a.display.lineDiv)return null;if(d.parentNode&&d.parentNode==a.display.lineDiv)break}for(var e=0;e<a.display.view.length;e++){var f=a.display.view[e];if(f.node==d)return nh(f,b,c)}}function nh(a,b,c){function d(b,c,d){for(var e=-1;e<(l?l.length:0);e++)for(var f=0>e?k.map:l[e],g=0;g<f.length;g+=3){var h=f[g+2];if(h==b||h==c){c=C(0>e?a.line:a.rest[e]);e=f[g]+d;if(0>d||h!=b)e=f[g+(d?1:0)];return p(c,
e)}}}var e=a.text.firstChild,f=!1;if(!b||!wa(e,b))return qb(p(C(a.line),0),!0);if(b==e&&(f=!0,b=e.childNodes[c],c=0,!b))return c=a.rest?z(a.rest):a.line,qb(p(C(c),c.text.length),f);var g=3==b.nodeType?b:null,h=b;g||1!=b.childNodes.length||3!=b.firstChild.nodeType||(g=b.firstChild,c&&(c=g.nodeValue.length));for(;h.parentNode!=e;)h=h.parentNode;var k=a.measure,l=k.maps;if(b=d(g,h,c))return qb(b,f);e=h.nextSibling;for(g=g?g.nodeValue.length-c:0;e;e=e.nextSibling){if(b=d(e,e.firstChild,0))return qb(p(b.line,
b.ch-g),f);g+=e.textContent.length}for(h=h.previousSibling;h;h=h.previousSibling){if(b=d(h,h.firstChild,-1))return qb(p(b.line,b.ch+c),f);c+=h.textContent.length}}var T=navigator.userAgent,dg=navigator.platform,xa=/gecko\/\d/i.test(T),eg=/MSIE \d/.test(T),fg=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(T),Zb=/Edge\/(\d+)/.exec(T),B=eg||fg||Zb,D=B&&(eg?document.documentMode||6:+(Zb||fg)[1]),P=!Zb&&/WebKit\//.test(T),oh=P&&/Qt\/\d+\.\d+/.test(T),qc=!Zb&&/Chrome\//.test(T),ka=/Opera\//.test(T),Vf=/Apple Computer/.test(navigator.vendor),
ph=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(T),Fg=/PhantomJS/.test(T),Yb=!Zb&&/AppleWebKit/.test(T)&&/Mobile\/\w+/.test(T),rc=/Android/.test(T),sb=Yb||rc||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(T),ha=Yb||/Mac/.test(dg),dh=/\bCrOS\b/.test(T),qh=/win/i.test(dg),Ya=ka&&T.match(/Version\/(\d*\.\d*)/);Ya&&(Ya=Number(Ya[1]));Ya&&15<=Ya&&(ka=!1,P=!0);var Hf=ha&&(oh||ka&&(null==Ya||12.11>Ya)),Pd=xa||B&&9<=D,Sa=function(a,b){var c=a.className,d=Ea(b).exec(c);if(d){var e=c.slice(d.index+d[0].length);
a.className=c.slice(0,d.index)+(e?d[1]+e:"")}},db;db=document.createRange?function(a,b,c,d){var e=document.createRange();e.setEnd(d||a,c);e.setStart(a,b);return e}:function(a,b,c){var d=document.body.createTextRange();try{d.moveToElementText(a.parentNode)}catch(e){return d}d.collapse(!0);d.moveEnd("character",c);d.moveStart("character",b);return d};var $b=function(a){a.select()};Yb?$b=function(a){a.selectionStart=0;a.selectionEnd=a.value.length}:B&&($b=function(a){try{a.select()}catch(b){}});var Xa=
function(){this.id=null};Xa.prototype.set=function(a,b){clearTimeout(this.id);this.id=setTimeout(b,a)};var Hc={toString:function(){return"CodeMirror.Pass"}},ra={scroll:!1},Qd={origin:"*mouse"},ac={origin:"+move"},fc=[""],hg=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,ig=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,
uf=!1,ya=!1,wb=null,mg=function(){function a(a){return 247>=a?"bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(a):1424<=a&&1524>=a?"R":1536<=a&&1785>=a?"nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(a-
1536):1774<=a&&2220>=a?"r":8192<=a&&8203>=a?"w":8204==a?"b":"L"}function b(a,b,c){this.level=a;this.from=b;this.to=c}var c=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,d=/[stwN]/,e=/[LRr]/,f=/[Lb1n]/,g=/[1n]/;return function(h,k){var l="ltr"==k?"L":"R";if(0==h.length||"ltr"==k&&!c.test(h))return!1;for(var m=h.length,q=[],n=0;n<m;++n)q.push(a(h.charCodeAt(n)));for(var n=0,r=l;n<m;++n){var p=q[n];"m"==p?q[n]=r:r=p}n=0;for(r=l;n<m;++n)p=q[n],"1"==p&&"r"==r?q[n]="n":e.test(p)&&(r=p,"r"==p&&(q[n]="R"));
n=1;for(r=q[0];n<m-1;++n)p=q[n],"+"==p&&"1"==r&&"1"==q[n+1]?q[n]="1":","!=p||r!=q[n+1]||"1"!=r&&"n"!=r||(q[n]=r),r=p;for(n=0;n<m;++n)if(r=q[n],","==r)q[n]="N";else if("%"==r){r=void 0;for(r=n+1;r<m&&"%"==q[r];++r);for(p=n&&"!"==q[n-1]||r<m&&"1"==q[r]?"1":"N";n<r;++n)q[n]=p;n=r-1}n=0;for(r=l;n<m;++n)p=q[n],"L"==r&&"1"==p?q[n]="L":e.test(p)&&(r=p);for(r=0;r<m;++r)if(d.test(q[r])){n=void 0;for(n=r+1;n<m&&d.test(q[n]);++n);p="L"==(r?q[r-1]:l);for(p=p==("L"==(n<m?q[n]:l))?p?"L":"R":l;r<n;++r)q[r]=p;r=
n-1}for(var l=[],t,n=0;n<m;)if(f.test(q[n])){r=n;for(++n;n<m&&f.test(q[n]);++n);l.push(new b(0,r,n))}else{var u=n,r=l.length;for(++n;n<m&&"L"!=q[n];++n);for(p=u;p<n;)if(g.test(q[p])){u<p&&l.splice(r,0,new b(1,u,p));u=p;for(++p;p<n&&g.test(q[p]);++p);l.splice(r,0,new b(2,u,p));u=p}else++p;u<n&&l.splice(r,0,new b(1,u,n))}"ltr"==k&&(1==l[0].level&&(t=h.match(/^\s+/))&&(l[0].from=t[0].length,l.unshift(new b(0,0,t[0].length))),1==z(l).level&&(t=h.match(/\s+$/))&&(z(l).to-=t[0].length,l.push(new b(0,m-
t[0].length,m))));return"rtl"==k?l.reverse():l}}(),mc=[],v=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):(a=a._handlers||(a._handlers={}),a[b]=(a[b]||mc).concat(c))},eh=function(){if(B&&9>D)return!1;var a=u("div");return"draggable"in a||"dragDrop"in a}(),ad,gd,Td=3!="\n\nb".split(/\n/).length?function(a){for(var b=0,c=[],d=a.length;b<=d;){var e=a.indexOf("\n",b);-1==e&&(e=a.length);var f=a.slice(b,"\r"==a.charAt(e-1)?e-1:e),g=f.indexOf("\r");-1!=
g?(c.push(f.slice(0,g)),b+=g+1):(c.push(f),b=e+1)}return c}:function(a){return a.split(/\r\n?|\n/)},rh=window.getSelection?function(a){try{return a.selectionStart!=a.selectionEnd}catch(b){return!1}}:function(a){var b;try{b=a.ownerDocument.selection.createRange()}catch(c){}return b&&b.parentElement()==a?0!=b.compareEndPoints("StartToEnd",b):!1},Zg=function(){var a=u("div");if("oncopy"in a)return!0;a.setAttribute("oncopy","return;");return"function"==typeof a.oncopy}(),md=null,bd={},bb={},cb={},G=function(a,
b,c){this.pos=this.start=0;this.string=a;this.tabSize=b||8;this.lineStart=this.lastColumnPos=this.lastColumnValue=0;this.lineOracle=c};G.prototype.eol=function(){return this.pos>=this.string.length};G.prototype.sol=function(){return this.pos==this.lineStart};G.prototype.peek=function(){return this.string.charAt(this.pos)||void 0};G.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)};G.prototype.eat=function(a){var b=this.string.charAt(this.pos);if("string"==
typeof a?b==a:b&&(a.test?a.test(b):a(b)))return++this.pos,b};G.prototype.eatWhile=function(a){for(var b=this.pos;this.eat(a););return this.pos>b};G.prototype.eatSpace=function(){for(var a=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>a};G.prototype.skipToEnd=function(){this.pos=this.string.length};G.prototype.skipTo=function(a){a=this.string.indexOf(a,this.pos);if(-1<a)return this.pos=a,!0};G.prototype.backUp=function(a){this.pos-=a};G.prototype.column=function(){this.lastColumnPos<
this.start&&(this.lastColumnValue=fa(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start);return this.lastColumnValue-(this.lineStart?fa(this.string,this.lineStart,this.tabSize):0)};G.prototype.indentation=function(){return fa(this.string,null,this.tabSize)-(this.lineStart?fa(this.string,this.lineStart,this.tabSize):0)};G.prototype.match=function(a,b,c){if("string"==typeof a){var d=function(a){return c?a.toLowerCase():a},e=this.string.substr(this.pos,
a.length);if(d(e)==d(a))return!1!==b&&(this.pos+=a.length),!0}else{if((a=this.string.slice(this.pos).match(a))&&0<a.index)return null;a&&!1!==b&&(this.pos+=a[0].length);return a}};G.prototype.current=function(){return this.string.slice(this.start,this.pos)};G.prototype.hideFirstChars=function(a,b){this.lineStart+=a;try{return b()}finally{this.lineStart-=a}};G.prototype.lookAhead=function(a){var b=this.lineOracle;return b&&b.lookAhead(a)};G.prototype.baseToken=function(){var a=this.lineOracle;return a&&
a.baseToken(this.pos)};var oc=function(a,b){this.state=a;this.lookAhead=b},pa=function(a,b,c,d){this.state=b;this.doc=a;this.line=c;this.maxLookAhead=d||0;this.baseTokens=null;this.baseTokenPos=1};pa.prototype.lookAhead=function(a){var b=this.doc.getLine(this.line+a);null!=b&&a>this.maxLookAhead&&(this.maxLookAhead=a);return b};pa.prototype.baseToken=function(a){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=a;)this.baseTokenPos+=2;var b=this.baseTokens[this.baseTokenPos+
1];return{type:b&&b.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-a}};pa.prototype.nextLine=function(){this.line++;0<this.maxLookAhead&&this.maxLookAhead--};pa.fromSaved=function(a,b,c){return b instanceof oc?new pa(a,La(a.mode,b.state),c,b.lookAhead):new pa(a,La(a.mode,b),c)};pa.prototype.save=function(a){a=!1!==a?La(this.doc.mode,this.state):this.state;return 0<this.maxLookAhead?new oc(a,this.maxLookAhead):a};var oe=function(a,b,c){this.start=a.start;this.end=a.pos;this.string=
a.current();this.type=b||null;this.state=c},hb=function(a,b,c){this.text=a;be(this,b);this.height=c?c(this):1};hb.prototype.lineNo=function(){return C(this)};ab(hb);var tg={},sg={},eb=null,zb=null,Ce={left:0,right:0,top:0,bottom:0},Qa,Za=function(a,b,c){this.cm=c;var d=this.vert=u("div",[u("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),e=this.horiz=u("div",[u("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");a(d);a(e);v(d,"scroll",function(){d.clientHeight&&b(d.scrollTop,
"vertical")});v(e,"scroll",function(){e.clientWidth&&b(e.scrollLeft,"horizontal")});this.checkedZeroWidth=!1;B&&8>D&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};Za.prototype.update=function(a){var b=a.scrollWidth>a.clientWidth+1,c=a.scrollHeight>a.clientHeight+1,d=a.nativeBarWidth;c?(this.vert.style.display="block",this.vert.style.bottom=b?d+"px":"0",this.vert.firstChild.style.height=Math.max(0,a.scrollHeight-a.clientHeight+(a.viewHeight-(b?d:0)))+"px"):(this.vert.style.display=
"",this.vert.firstChild.style.height="0");b?(this.horiz.style.display="block",this.horiz.style.right=c?d+"px":"0",this.horiz.style.left=a.barLeft+"px",this.horiz.firstChild.style.width=Math.max(0,a.scrollWidth-a.clientWidth+(a.viewWidth-a.barLeft-(c?d:0)))+"px"):(this.horiz.style.display="",this.horiz.firstChild.style.width="0");!this.checkedZeroWidth&&0<a.clientHeight&&(0==d&&this.zeroWidthHack(),this.checkedZeroWidth=!0);return{right:c?d:0,bottom:b?d:0}};Za.prototype.setScrollLeft=function(a){this.horiz.scrollLeft!=
a&&(this.horiz.scrollLeft=a);this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")};Za.prototype.setScrollTop=function(a){this.vert.scrollTop!=a&&(this.vert.scrollTop=a);this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")};Za.prototype.zeroWidthHack=function(){this.horiz.style.height=this.vert.style.width=ha&&!ph?"12px":"18px";this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none";this.disableHoriz=new Xa;this.disableVert=new Xa};Za.prototype.enableZeroWidthBar=
function(a,b,c){function d(){var e=a.getBoundingClientRect();("vert"==c?document.elementFromPoint(e.right-1,(e.top+e.bottom)/2):document.elementFromPoint((e.right+e.left)/2,e.bottom-1))!=a?a.style.pointerEvents="none":b.set(1E3,d)}a.style.pointerEvents="auto";b.set(1E3,d)};Za.prototype.clear=function(){var a=this.horiz.parentNode;a.removeChild(this.horiz);a.removeChild(this.vert)};var bc=function(){};bc.prototype.update=function(){return{bottom:0,right:0}};bc.prototype.setScrollLeft=function(){};
bc.prototype.setScrollTop=function(){};bc.prototype.clear=function(){};var Xe={"native":Za,"null":bc},Eg=0,xc=function(a,b,c){var d=a.display;this.viewport=b;this.visible=wd(d,a.doc,b);this.editorIsHidden=!d.wrapper.offsetWidth;this.wrapperHeight=d.wrapper.clientHeight;this.wrapperWidth=d.wrapper.clientWidth;this.oldDisplayWidth=Ma(a);this.force=c;this.dims=ld(a);this.events=[]};xc.prototype.signal=function(a,b){ga(a,b)&&this.events.push(arguments)};xc.prototype.finish=function(){for(var a=0;a<this.events.length;a++)F.apply(null,
this.events[a])};var zc=0,ba=null;B?ba=-.53:xa?ba=15:qc?ba=-.7:Vf&&(ba=-1/3);var ca=function(a,b){this.ranges=a;this.primIndex=b};ca.prototype.primary=function(){return this.ranges[this.primIndex]};ca.prototype.equals=function(a){if(a==this)return!0;if(a.primIndex!=this.primIndex||a.ranges.length!=this.ranges.length)return!1;for(var b=0;b<this.ranges.length;b++){var c=this.ranges[b],d=a.ranges[b];if(!Uc(c.anchor,d.anchor)||!Uc(c.head,d.head))return!1}return!0};ca.prototype.deepCopy=function(){for(var a=
[],b=0;b<this.ranges.length;b++)a[b]=new A(Vc(this.ranges[b].anchor),Vc(this.ranges[b].head));return new ca(a,this.primIndex)};ca.prototype.somethingSelected=function(){for(var a=0;a<this.ranges.length;a++)if(!this.ranges[a].empty())return!0;return!1};ca.prototype.contains=function(a,b){b||(b=a);for(var c=0;c<this.ranges.length;c++){var d=this.ranges[c];if(0<=y(b,d.from())&&0>=y(a,d.to()))return c}return-1};var A=function(a,b){this.anchor=a;this.head=b};A.prototype.from=function(){return jc(this.anchor,
this.head)};A.prototype.to=function(){return ic(this.anchor,this.head)};A.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch};Nb.prototype={chunkSize:function(){return this.lines.length},removeInner:function(a,b){for(var c=a,d=a+b;c<d;++c){var e=this.lines[c];this.height-=e.height;var f=e;f.parent=null;ae(f);N(e,"delete")}this.lines.splice(a,b)},collapse:function(a){a.push.apply(a,this.lines)},insertInner:function(a,b,c){this.height+=c;this.lines=this.lines.slice(0,
a).concat(b).concat(this.lines.slice(a));for(a=0;a<b.length;++a)b[a].parent=this},iterN:function(a,b,c){for(b=a+b;a<b;++a)if(c(this.lines[a]))return!0}};Ob.prototype={chunkSize:function(){return this.size},removeInner:function(a,b){this.size-=b;for(var c=0;c<this.children.length;++c){var d=this.children[c],e=d.chunkSize();if(a<e){var f=Math.min(b,e-a),g=d.height;d.removeInner(a,f);this.height-=g-d.height;e==f&&(this.children.splice(c--,1),d.parent=null);if(0==(b-=f))break;a=0}else a-=e}25>this.size-
b&&(1<this.children.length||!(this.children[0]instanceof Nb))&&(c=[],this.collapse(c),this.children=[new Nb(c)],this.children[0].parent=this)},collapse:function(a){for(var b=0;b<this.children.length;++b)this.children[b].collapse(a)},insertInner:function(a,b,c){this.size+=b.length;this.height+=c;for(var d=0;d<this.children.length;++d){var e=this.children[d],f=e.chunkSize();if(a<=f){e.insertInner(a,b,c);if(e.lines&&50<e.lines.length){for(b=a=e.lines.length%25+25;b<e.lines.length;)c=new Nb(e.lines.slice(b,
b+=25)),e.height-=c.height,this.children.splice(++d,0,c),c.parent=this;e.lines=e.lines.slice(0,a);this.maybeSpill()}break}a-=f}},maybeSpill:function(){if(!(10>=this.children.length)){var a=this;do{var b=a.children.splice(a.children.length-5,5),b=new Ob(b);if(a.parent){a.size-=b.size;a.height-=b.height;var c=L(a.parent.children,a);a.parent.children.splice(c+1,0,b)}else c=new Ob(a.children),c.parent=a,a.children=[c,b],a=c;b.parent=a.parent}while(10<a.children.length);a.parent.maybeSpill()}},iterN:function(a,
b,c){for(var d=0;d<this.children.length;++d){var e=this.children[d],f=e.chunkSize();if(a<f){f=Math.min(b,f-a);if(e.iterN(a,f,c))return!0;if(0==(b-=f))break;a=0}else a-=f}}};var Pb=function(a,b,c){if(c)for(var d in c)c.hasOwnProperty(d)&&(this[d]=c[d]);this.doc=a;this.node=b};Pb.prototype.clear=function(){var a=this.doc.cm,b=this.line.widgets,c=this.line,d=C(c);if(null!=d&&b){for(var e=0;e<b.length;++e)b[e]==this&&b.splice(e--,1);b.length||(c.widgets=null);var f=Bb(this);ma(c,Math.max(0,c.height-f));
a&&(Y(a,function(){var b=-f;oa(c)<(a.curOp&&a.curOp.scrollTop||a.doc.scrollTop)&&vc(a,b);Aa(a,d,"widget")}),N(a,"lineWidgetCleared",a,this,d))}};Pb.prototype.changed=function(){var a=this,b=this.height,c=this.doc.cm,d=this.line;this.height=null;var e=Bb(this)-b;e&&(ma(d,d.height+e),c&&Y(c,function(){c.curOp.forceUpdate=!0;oa(d)<(c.curOp&&c.curOp.scrollTop||c.doc.scrollTop)&&vc(c,e);N(c,"lineWidgetChanged",c,a,C(d))}))};ab(Pb);var Af=0,Ca=function(a,b){this.lines=[];this.type=b;this.doc=a;this.id=
++Af};Ca.prototype.clear=function(){if(!this.explicitlyCleared){var a=this.doc.cm,b=a&&!a.curOp;b&&Ua(a);if(ga(this,"clear")){var c=this.find();c&&N(this,"clear",c.from,c.to)}for(var d=c=null,e=0;e<this.lines.length;++e){var f=this.lines[e],g=ub(f.markedSpans,this);a&&!this.collapsed?Aa(a,C(f),"text"):a&&(null!=g.to&&(d=C(f)),null!=g.from&&(c=C(f)));for(var h=f,k=f.markedSpans,l=g,m=void 0,p=0;p<k.length;++p)k[p]!=l&&(m||(m=[])).push(k[p]);h.markedSpans=m;null==g.from&&this.collapsed&&!Ka(this.doc,
f)&&a&&ma(f,Pa(a.display))}if(a&&this.collapsed&&!a.options.lineWrapping)for(e=0;e<this.lines.length;++e)f=na(this.lines[e]),g=lc(f),g>a.display.maxLineLength&&(a.display.maxLine=f,a.display.maxLineLength=g,a.display.maxLineChanged=!0);null!=c&&a&&this.collapsed&&U(a,c,d+1);this.lines.length=0;this.explicitlyCleared=!0;this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,a&&qf(a.doc));a&&N(a,"markerCleared",a,this,c,d);b&&Va(a);this.parent&&this.parent.clear()}};Ca.prototype.find=function(a,b){null==
a&&"bookmark"==this.type&&(a=1);for(var c,d,e=0;e<this.lines.length;++e){var f=this.lines[e],g=ub(f.markedSpans,this);if(null!=g.from&&(c=p(b?f:C(f),g.from),-1==a))return c;if(null!=g.to&&(d=p(b?f:C(f),g.to),1==a))return d}return c&&{from:c,to:d}};Ca.prototype.changed=function(){var a=this,b=this.find(-1,!0),c=this,d=this.doc.cm;b&&d&&Y(d,function(){var e=b.line,f=C(b.line);if(f=kd(d,f))De(f),d.curOp.selectionChanged=d.curOp.forceUpdate=!0;d.curOp.updateMaxLine=!0;Ka(c.doc,e)||null==c.height||(f=
c.height,c.height=null,(f=Bb(c)-f)&&ma(e,e.height+f));N(d,"markerChanged",d,a)})};Ca.prototype.attachLine=function(a){if(!this.lines.length&&this.doc.cm){var b=this.doc.cm.curOp;b.maybeHiddenMarkers&&-1!=L(b.maybeHiddenMarkers,this)||(b.maybeUnhiddenMarkers||(b.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(a)};Ca.prototype.detachLine=function(a){this.lines.splice(L(this.lines,a),1);!this.lines.length&&this.doc.cm&&(a=this.doc.cm.curOp,(a.maybeHiddenMarkers||(a.maybeHiddenMarkers=[])).push(this))};
ab(Ca);var Qb=function(a,b){this.markers=a;this.primary=b;for(var c=0;c<a.length;++c)a[c].parent=this};Qb.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var a=0;a<this.markers.length;++a)this.markers[a].clear();N(this,"clear")}};Qb.prototype.find=function(a,b){return this.primary.find(a,b)};ab(Qb);var sh=0,V=function(a,b,c,d,e){if(!(this instanceof V))return new V(a,b,c,d,e);null==c&&(c=0);Ob.call(this,[new Nb([new hb("",null)])]);this.first=c;this.scrollTop=
this.scrollLeft=0;this.cantEdit=!1;this.cleanGeneration=1;this.modeFrontier=this.highlightFrontier=c;c=p(c,0);this.sel=va(c);this.history=new Ac(null);this.id=++sh;this.modeOption=b;this.lineSep=d;this.direction="rtl"==e?"rtl":"ltr";this.extend=!1;"string"==typeof a&&(a=this.splitLines(a));Fd(this,{from:c,to:c,text:a});O(this,va(c),ra)};V.prototype=Wd(Ob.prototype,{constructor:V,iter:function(a,b,c){c?this.iterN(a-this.first,b-a,c):this.iterN(this.first,this.first+this.size,a)},insert:function(a,
b){for(var c=0,d=0;d<b.length;++d)c+=b[d].height;this.insertInner(a-this.first,b,c)},remove:function(a,b){this.removeInner(a-this.first,b)},getValue:function(a){var b=Sc(this,this.first,this.first+this.size);return!1===a?b:b.join(a||this.lineSeparator())},setValue:K(function(a){var b=p(this.first,0),c=this.first+this.size-1;kb(this,{from:b,to:p(c,t(this,c).text.length),text:this.splitLines(a),origin:"setValue",full:!0},!0);this.cm&&Gb(this.cm,0,0);O(this,va(b),ra)}),replaceRange:function(a,b,c,d){b=
w(this,b);c=c?w(this,c):b;lb(this,a,b,c,d)},getRange:function(a,b,c){a=Ha(this,w(this,a),w(this,b));return!1===c?a:a.join(c||this.lineSeparator())},getLine:function(a){return(a=this.getLineHandle(a))&&a.text},getLineHandle:function(a){if(tb(this,a))return t(this,a)},getLineNumber:function(a){return C(a)},getLineHandleVisualStart:function(a){"number"==typeof a&&(a=t(this,a));return na(a)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+
this.size-1},clipPos:function(a){return w(this,a)},getCursor:function(a){var b=this.sel.primary();return null==a||"head"==a?b.head:"anchor"==a?b.anchor:"end"==a||"to"==a||!1===a?b.to():b.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:K(function(a,b,c){a=w(this,"number"==typeof a?p(a,b||0):a);O(this,va(a,null),c)}),setSelection:K(function(a,b,c){var d=w(this,a);a=w(this,b||a);O(this,va(d,a),c)}),extendSelection:K(function(a,
b,c){Cc(this,w(this,a),b&&w(this,b),c)}),extendSelections:K(function(a,b){mf(this,Zd(this,a),b)}),extendSelectionsBy:K(function(a,b){var c=gc(this.sel.ranges,a);mf(this,Zd(this,c),b)}),setSelections:K(function(a,b,c){if(a.length){for(var d=[],e=0;e<a.length;e++)d[e]=new A(w(this,a[e].anchor),w(this,a[e].head));null==b&&(b=Math.min(a.length-1,this.sel.primIndex));O(this,la(d,b),c)}}),addSelection:K(function(a,b,c){var d=this.sel.ranges.slice(0);d.push(new A(w(this,a),w(this,b||a)));O(this,la(d,d.length-
1),c)}),getSelection:function(a){for(var b=this.sel.ranges,c,d=0;d<b.length;d++){var e=Ha(this,b[d].from(),b[d].to());c=c?c.concat(e):e}return!1===a?c:c.join(a||this.lineSeparator())},getSelections:function(a){for(var b=[],c=this.sel.ranges,d=0;d<c.length;d++){var e=Ha(this,c[d].from(),c[d].to());!1!==a&&(e=e.join(a||this.lineSeparator()));b[d]=e}return b},replaceSelection:function(a,b,c){for(var d=[],e=0;e<this.sel.ranges.length;e++)d[e]=a;this.replaceSelections(d,b,c||"+input")},replaceSelections:K(function(a,
b,c){for(var d=[],e=this.sel,f=0;f<e.ranges.length;f++){var g=e.ranges[f];d[f]={from:g.from(),to:g.to(),text:this.splitLines(a[f]),origin:c}}if(a=b&&"end"!=b){a=[];e=c=p(this.first,0);for(f=0;f<d.length;f++){var h=d[f],g=df(h.from,c,e),k=df(Ba(h),c,e);c=h.to;e=k;"around"==b?(h=this.sel.ranges[f],h=0>y(h.head,h.anchor),a[f]=new A(h?k:g,h?g:k)):a[f]=new A(g,g)}a=new ca(a,this.sel.primIndex)}b=a;for(a=d.length-1;0<=a;a--)kb(this,d[a]);b?nf(this,b):this.cm&&fb(this.cm)}),undo:K(function(){Ec(this,"undo")}),
redo:K(function(){Ec(this,"redo")}),undoSelection:K(function(){Ec(this,"undo",!0)}),redoSelection:K(function(){Ec(this,"redo",!0)}),setExtending:function(a){this.extend=a},getExtending:function(){return this.extend},historySize:function(){for(var a=this.history,b=0,c=0,d=0;d<a.done.length;d++)a.done[d].ranges||++b;for(d=0;d<a.undone.length;d++)a.undone[d].ranges||++c;return{undo:b,redo:c}},clearHistory:function(){this.history=new Ac(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=
this.changeGeneration(!0)},changeGeneration:function(a){a&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null);return this.history.generation},isClean:function(a){return this.history.generation==(a||this.cleanGeneration)},getHistory:function(){return{done:ib(this.history.done),undone:ib(this.history.undone)}},setHistory:function(a){var b=this.history=new Ac(this.history.maxGeneration);b.done=ib(a.done.slice(0),null,!0);b.undone=ib(a.undone.slice(0),null,!0)},setGutterMarker:K(function(a,
b,c){return Mb(this,a,"gutter",function(a){var e=a.gutterMarkers||(a.gutterMarkers={});e[b]=c;!c&&Xd(e)&&(a.gutterMarkers=null);return!0})}),clearGutter:K(function(a){var b=this;this.iter(function(c){c.gutterMarkers&&c.gutterMarkers[a]&&Mb(b,c,"gutter",function(){c.gutterMarkers[a]=null;Xd(c.gutterMarkers)&&(c.gutterMarkers=null);return!0})})}),lineInfo:function(a){var b;if("number"==typeof a){if(!tb(this,a))return null;b=a;a=t(this,a);if(!a)return null}else if(b=C(a),null==b)return null;return{line:b,
handle:a,text:a.text,gutterMarkers:a.gutterMarkers,textClass:a.textClass,bgClass:a.bgClass,wrapClass:a.wrapClass,widgets:a.widgets}},addLineClass:K(function(a,b,c){return Mb(this,a,"gutter"==b?"gutter":"class",function(a){var e="text"==b?"textClass":"background"==b?"bgClass":"gutter"==b?"gutterClass":"wrapClass";if(a[e]){if(Ea(c).test(a[e]))return!1;a[e]+=" "+c}else a[e]=c;return!0})}),removeLineClass:K(function(a,b,c){return Mb(this,a,"gutter"==b?"gutter":"class",function(a){var e="text"==b?"textClass":
"background"==b?"bgClass":"gutter"==b?"gutterClass":"wrapClass",f=a[e];if(f)if(null==c)a[e]=null;else{var g=f.match(Ea(c));if(!g)return!1;var h=g.index+g[0].length;a[e]=f.slice(0,g.index)+(g.index&&h!=f.length?" ":"")+f.slice(h)||null}else return!1;return!0})}),addLineWidget:K(function(a,b,c){return Ng(this,a,b,c)}),removeLineWidget:function(a){a.clear()},markText:function(a,b,c){return mb(this,w(this,a),w(this,b),c,c&&c.type||"range")},setBookmark:function(a,b){var c={replacedWith:b&&(null==b.nodeType?
b.widget:b),insertLeft:b&&b.insertLeft,clearWhenEmpty:!1,shared:b&&b.shared,handleMouseEvents:b&&b.handleMouseEvents};a=w(this,a);return mb(this,a,a,c,"bookmark")},findMarksAt:function(a){a=w(this,a);var b=[],c=t(this,a.line).markedSpans;if(c)for(var d=0;d<c.length;++d){var e=c[d];(null==e.from||e.from<=a.ch)&&(null==e.to||e.to>=a.ch)&&b.push(e.marker.parent||e.marker)}return b},findMarks:function(a,b,c){a=w(this,a);b=w(this,b);var d=[],e=a.line;this.iter(a.line,b.line+1,function(f){if(f=f.markedSpans)for(var g=
0;g<f.length;g++){var h=f[g];null!=h.to&&e==a.line&&a.ch>=h.to||null==h.from&&e!=a.line||null!=h.from&&e==b.line&&h.from>=b.ch||c&&!c(h.marker)||d.push(h.marker.parent||h.marker)}++e});return d},getAllMarks:function(){var a=[];this.iter(function(b){if(b=b.markedSpans)for(var c=0;c<b.length;++c)null!=b[c].from&&a.push(b[c].marker)});return a},posFromIndex:function(a){var b,c=this.first,d=this.lineSeparator().length;this.iter(function(e){e=e.text.length+d;if(e>a)return b=a,!0;a-=e;++c});return w(this,
p(c,b))},indexFromPos:function(a){a=w(this,a);var b=a.ch;if(a.line<this.first||0>a.ch)return 0;var c=this.lineSeparator().length;this.iter(this.first,a.line,function(a){b+=a.text.length+c});return b},copy:function(a){var b=new V(Sc(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);b.scrollTop=this.scrollTop;b.scrollLeft=this.scrollLeft;b.sel=this.sel;b.extend=!1;a&&(b.history.undoDepth=this.history.undoDepth,b.setHistory(this.getHistory()));return b},linkedDoc:function(a){a||
(a={});var b=this.first,c=this.first+this.size;null!=a.from&&a.from>b&&(b=a.from);null!=a.to&&a.to<c&&(c=a.to);b=new V(Sc(this,b,c),a.mode||this.modeOption,b,this.lineSep,this.direction);a.sharedHist&&(b.history=this.history);(this.linked||(this.linked=[])).push({doc:b,sharedHist:a.sharedHist});b.linked=[{doc:this,isParent:!0,sharedHist:a.sharedHist}];a=Bf(this);for(c=0;c<a.length;c++){var d=a[c],e=d.find(),f=b.clipPos(e.from),e=b.clipPos(e.to);y(f,e)&&(f=mb(b,f,e,d.primary,d.primary.type),d.markers.push(f),
f.parent=d)}return b},unlinkDoc:function(a){a instanceof E&&(a=a.doc);if(this.linked)for(var b=0;b<this.linked.length;++b)if(this.linked[b].doc==a){this.linked.splice(b,1);a.unlinkDoc(this);Pg(Bf(this));break}if(a.history==this.history){var c=[a.id];Wa(a,function(a){return c.push(a.id)},!0);a.history=new Ac(null);a.history.done=ib(this.history.done,c);a.history.undone=ib(this.history.undone,c)}},iterLinkedDocs:function(a){Wa(this,a)},getMode:function(){return this.mode},getEditor:function(){return this.cm},
splitLines:function(a){return this.lineSep?a.split(this.lineSep):Td(a)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:K(function(a){"rtl"!=a&&(a="ltr");a!=this.direction&&(this.direction=a,this.iter(function(a){return a.order=null}),this.cm&&Jg(this.cm))})});V.prototype.eachLine=V.prototype.iter;for(var Df=0,Uf=!1,Da={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",
37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"\x3d",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"\x3d",109:"-",110:".",111:"/",127:"Delete",173:"-",186:";",187:"\x3d",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},cc=0;10>cc;cc++)Da[cc+48]=Da[cc+96]=String(cc);for(var Lc=65;90>=Lc;Lc++)Da[Lc]=String.fromCharCode(Lc);
for(var dc=1;12>=dc;dc++)Da[dc+111]=Da[dc+63235]="F"+dc;var Rb={basic:{Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},pcDefault:{"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo",
"Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection",
"Alt-U":"redoSelection",fallthrough:"basic"},emacsy:{"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},macDefault:{"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo",
"Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft",
"Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]}};Rb["default"]=ha?Rb.macDefault:Rb.pcDefault;var Sb={selectAll:sf,singleSelection:function(a){return a.setSelection(a.getCursor("anchor"),a.getCursor("head"),ra)},killLine:function(a){return ob(a,function(b){if(b.empty()){var c=t(a.doc,b.head.line).text.length;return b.head.ch==c&&b.head.line<a.lastLine()?{from:b.head,to:p(b.head.line+
1,0)}:{from:b.head,to:p(b.head.line,c)}}return{from:b.from(),to:b.to()}})},deleteLine:function(a){return ob(a,function(b){return{from:p(b.from().line,0),to:w(a.doc,p(b.to().line+1,0))}})},delLineLeft:function(a){return ob(a,function(a){return{from:p(a.from().line,0),to:a.from()}})},delWrappedLineLeft:function(a){return ob(a,function(b){var c=a.charCoords(b.head,"div").top+5;return{from:a.coordsChar({left:0,top:c},"div"),to:b.from()}})},delWrappedLineRight:function(a){return ob(a,function(b){var c=
a.charCoords(b.head,"div").top+5,c=a.coordsChar({left:a.display.lineDiv.offsetWidth+100,top:c},"div");return{from:b.from(),to:c}})},undo:function(a){return a.undo()},redo:function(a){return a.redo()},undoSelection:function(a){return a.undoSelection()},redoSelection:function(a){return a.redoSelection()},goDocStart:function(a){return a.extendSelection(p(a.firstLine(),0))},goDocEnd:function(a){return a.extendSelection(p(a.lastLine()))},goLineStart:function(a){return a.extendSelectionsBy(function(b){return Jf(a,
b.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(a){return a.extendSelectionsBy(function(b){return Kf(a,b.head)},{origin:"+move",bias:1})},goLineEnd:function(a){return a.extendSelectionsBy(function(b){b=b.head.line;var c=t(a.doc,b),d;d=c;for(var e;e=Ja(d,!1);)d=e.find(1,!0).line;d!=c&&(b=C(d));return Md(!0,a,c,b,-1)},{origin:"+move",bias:-1})},goLineRight:function(a){return a.extendSelectionsBy(function(b){b=a.cursorCoords(b.head,"div").top+5;return a.coordsChar({left:a.display.lineDiv.offsetWidth+
100,top:b},"div")},ac)},goLineLeft:function(a){return a.extendSelectionsBy(function(b){b=a.cursorCoords(b.head,"div").top+5;return a.coordsChar({left:0,top:b},"div")},ac)},goLineLeftSmart:function(a){return a.extendSelectionsBy(function(b){var c=a.cursorCoords(b.head,"div").top+5,c=a.coordsChar({left:0,top:c},"div");return c.ch<a.getLine(c.line).search(/\S/)?Kf(a,b.head):c},ac)},goLineUp:function(a){return a.moveV(-1,"line")},goLineDown:function(a){return a.moveV(1,"line")},goPageUp:function(a){return a.moveV(-1,
"page")},goPageDown:function(a){return a.moveV(1,"page")},goCharLeft:function(a){return a.moveH(-1,"char")},goCharRight:function(a){return a.moveH(1,"char")},goColumnLeft:function(a){return a.moveH(-1,"column")},goColumnRight:function(a){return a.moveH(1,"column")},goWordLeft:function(a){return a.moveH(-1,"word")},goGroupRight:function(a){return a.moveH(1,"group")},goGroupLeft:function(a){return a.moveH(-1,"group")},goWordRight:function(a){return a.moveH(1,"word")},delCharBefore:function(a){return a.deleteH(-1,
"char")},delCharAfter:function(a){return a.deleteH(1,"char")},delWordBefore:function(a){return a.deleteH(-1,"word")},delWordAfter:function(a){return a.deleteH(1,"word")},delGroupBefore:function(a){return a.deleteH(-1,"group")},delGroupAfter:function(a){return a.deleteH(1,"group")},indentAuto:function(a){return a.indentSelection("smart")},indentMore:function(a){return a.indentSelection("add")},indentLess:function(a){return a.indentSelection("subtract")},insertTab:function(a){return a.replaceSelection("\t")},
insertSoftTab:function(a){for(var b=[],c=a.listSelections(),d=a.options.tabSize,e=0;e<c.length;e++){var f=c[e].from(),f=fa(a.getLine(f.line),f.ch,d);b.push(Pc(d-f%d))}a.replaceSelections(b)},defaultTab:function(a){a.somethingSelected()?a.indentSelection("add"):a.execCommand("insertTab")},transposeChars:function(a){return Y(a,function(){for(var b=a.listSelections(),c=[],d=0;d<b.length;d++)if(b[d].empty()){var e=b[d].head,f=t(a.doc,e.line).text;if(f)if(e.ch==f.length&&(e=new p(e.line,e.ch-1)),0<e.ch)e=
new p(e.line,e.ch+1),a.replaceRange(f.charAt(e.ch-1)+f.charAt(e.ch-2),p(e.line,e.ch-2),e,"+transpose");else if(e.line>a.doc.first){var g=t(a.doc,e.line-1).text;g&&(e=new p(e.line,1),a.replaceRange(f.charAt(0)+a.doc.lineSeparator()+g.charAt(g.length-1),p(e.line-1,g.length-1),e,"+transpose"))}c.push(new A(e,e))}a.setSelections(c)})},newlineAndIndent:function(a){return Y(a,function(){for(var b=a.listSelections(),c=b.length-1;0<=c;c--)a.replaceRange(a.doc.lineSeparator(),b[c].anchor,b[c].head,"+input");
b=a.listSelections();for(c=0;c<b.length;c++)a.indentLine(b[c].from().line,null,!0);fb(a)})},openLine:function(a){return a.replaceSelection("\n","start")},toggleOverwrite:function(a){return a.toggleOverwrite()}},Xg=new Xa,Nd=null,Od=function(a,b,c){this.time=a;this.pos=b;this.button=c};Od.prototype.compare=function(a,b,c){return this.time+400>a&&0==y(b,this.pos)&&c==this.button};var Vb,Ub,pb={toString:function(){return"CodeMirror.Init"}},Tf={},Jc={};E.defaults=Tf;E.optionHandlers=Jc;var Rd=[];E.defineInitHook=
function(a){return Rd.push(a)};var da=null,x=function(a){this.cm=a;this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null;this.polling=new Xa;this.composing=null;this.gracePeriod=!1;this.readDOMTimeout=null};x.prototype.init=function(a){function b(a){if(!I(e,a)){if(e.somethingSelected())Wf({lineWise:!1,text:e.getSelections()}),"cut"==a.type&&e.replaceSelection("",null,"cut");else if(e.options.lineWiseCopyCut){var b=Zf(e);Wf({lineWise:!0,text:b.text});"cut"==a.type&&
e.operation(function(){e.setSelections(b.ranges,0,ra);e.replaceSelection("",null,"cut")})}else return;if(a.clipboardData){a.clipboardData.clearData();var c=da.text.join("\n");a.clipboardData.setData("Text",c);if(a.clipboardData.getData("Text")==c){a.preventDefault();return}}var l=ag();a=l.firstChild;e.display.lineSpace.insertBefore(l,e.display.lineSpace.firstChild);a.value=da.text.join("\n");var m=document.activeElement;$b(a);setTimeout(function(){e.display.lineSpace.removeChild(l);m.focus();m==f&&
d.showPrimarySelection()},50)}}var c=this,d=this,e=d.cm,f=d.div=a.lineDiv;$f(f,e.options.spellcheck);v(f,"paste",function(a){I(e,a)||Yf(a,e)||11>=D&&setTimeout(J(e,function(){return c.updateFromDOM()}),20)});v(f,"compositionstart",function(a){c.composing={data:a.data,done:!1}});v(f,"compositionupdate",function(a){c.composing||(c.composing={data:a.data,done:!1})});v(f,"compositionend",function(a){c.composing&&(a.data!=c.composing.data&&c.readFromDOMSoon(),c.composing.done=!0)});v(f,"touchstart",function(){return d.forceCompositionEnd()});
v(f,"input",function(){c.composing||c.readFromDOMSoon()});v(f,"copy",b);v(f,"cut",b)};x.prototype.prepareSelection=function(){var a=Me(this.cm,!1);a.focus=this.cm.state.focused;return a};x.prototype.showSelection=function(a,b){a&&this.cm.display.view.length&&((a.focus||b)&&this.showPrimarySelection(),this.showMultipleSelections(a))};x.prototype.showPrimarySelection=function(){var a=window.getSelection(),b=this.cm,c=b.doc.sel.primary(),d=c.from(),c=c.to();if(b.display.viewTo==b.display.viewFrom||d.line>=
b.display.viewTo||c.line<b.display.viewFrom)a.removeAllRanges();else{var e=Kc(b,a.anchorNode,a.anchorOffset),f=Kc(b,a.focusNode,a.focusOffset);if(!e||e.bad||!f||f.bad||0!=y(jc(e,f),d)||0!=y(ic(e,f),c))if(e=b.display.view,d=d.line>=b.display.viewFrom&&cg(b,d)||{node:e[0].measure.map[2],offset:0},c=c.line<b.display.viewTo&&cg(b,c),c||(c=e[e.length-1].measure,c=c.maps?c.maps[c.maps.length-1]:c.map,c={node:c[c.length-1],offset:c[c.length-2]-c[c.length-3]}),d&&c){var e=a.rangeCount&&a.getRangeAt(0),g;
try{g=db(d.node,d.offset,c.offset,c.node)}catch(h){}g&&(!xa&&b.state.focused?(a.collapse(d.node,d.offset),g.collapsed||(a.removeAllRanges(),a.addRange(g))):(a.removeAllRanges(),a.addRange(g)),e&&null==a.anchorNode?a.addRange(e):xa&&this.startGracePeriod());this.rememberSelection()}else a.removeAllRanges()}};x.prototype.startGracePeriod=function(){var a=this;clearTimeout(this.gracePeriod);this.gracePeriod=setTimeout(function(){a.gracePeriod=!1;a.selectionChanged()&&a.cm.operation(function(){return a.cm.curOp.selectionChanged=
!0})},20)};x.prototype.showMultipleSelections=function(a){Z(this.cm.display.cursorDiv,a.cursors);Z(this.cm.display.selectionDiv,a.selection)};x.prototype.rememberSelection=function(){var a=window.getSelection();this.lastAnchorNode=a.anchorNode;this.lastAnchorOffset=a.anchorOffset;this.lastFocusNode=a.focusNode;this.lastFocusOffset=a.focusOffset};x.prototype.selectionInEditor=function(){var a=window.getSelection();if(!a.rangeCount)return!1;a=a.getRangeAt(0).commonAncestorContainer;return wa(this.div,
a)};x.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()||this.showSelection(this.prepareSelection(),!0),this.div.focus())};x.prototype.blur=function(){this.div.blur()};x.prototype.getField=function(){return this.div};x.prototype.supportsTouch=function(){return!0};x.prototype.receivedFocus=function(){function a(){b.cm.state.focused&&(b.pollSelection(),b.polling.set(b.cm.options.pollInterval,a))}var b=this;this.selectionInEditor()?this.pollSelection():Y(this.cm,
function(){return b.cm.curOp.selectionChanged=!0});this.polling.set(this.cm.options.pollInterval,a)};x.prototype.selectionChanged=function(){var a=window.getSelection();return a.anchorNode!=this.lastAnchorNode||a.anchorOffset!=this.lastAnchorOffset||a.focusNode!=this.lastFocusNode||a.focusOffset!=this.lastFocusOffset};x.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var a=window.getSelection(),b=this.cm;if(rc&&qc&&this.cm.options.gutters.length&&
lh(a.anchorNode))this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),this.focus();else if(!this.composing){this.rememberSelection();var c=Kc(b,a.anchorNode,a.anchorOffset),d=Kc(b,a.focusNode,a.focusOffset);c&&d&&Y(b,function(){O(b.doc,va(c,d),ra);if(c.bad||d.bad)b.curOp.selectionChanged=!0})}}};x.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var a=this.cm,b=a.display,c=a.doc.sel.primary(),
d=c.from(),e=c.to();0==d.ch&&d.line>a.firstLine()&&(d=p(d.line-1,t(a.doc,d.line-1).length));e.ch==t(a.doc,e.line).text.length&&e.line<a.lastLine()&&(e=p(e.line+1,0));if(d.line<b.viewFrom||e.line>b.viewTo-1)return!1;var f;d.line==b.viewFrom||0==(f=Na(a,d.line))?(c=C(b.view[0].line),f=b.view[0].node):(c=C(b.view[f].line),f=b.view[f-1].node.nextSibling);var g=Na(a,e.line);g==b.view.length-1?(e=b.viewTo-1,b=b.lineDiv.lastChild):(e=C(b.view[g+1].line)-1,b=b.view[g+1].node.previousSibling);if(!f)return!1;
b=a.doc.splitLines(mh(a,f,b,c,e));for(f=Ha(a.doc,p(c,0),p(e,t(a.doc,e).text.length));1<b.length&&1<f.length;)if(z(b)==z(f))b.pop(),f.pop(),e--;else if(b[0]==f[0])b.shift(),f.shift(),c++;else break;for(var h=0,g=0,k=b[0],l=f[0],m=Math.min(k.length,l.length);h<m&&k.charCodeAt(h)==l.charCodeAt(h);)++h;k=z(b);l=z(f);for(m=Math.min(k.length-(1==b.length?h:0),l.length-(1==f.length?h:0));g<m&&k.charCodeAt(k.length-g-1)==l.charCodeAt(l.length-g-1);)++g;if(1==b.length&&1==f.length&&c==d.line)for(;h&&h>d.ch&&
k.charCodeAt(k.length-g-1)==l.charCodeAt(l.length-g-1);)h--,g++;b[b.length-1]=k.slice(0,k.length-g).replace(/^\u200b+/,"");b[0]=b[0].slice(h).replace(/\u200b+$/,"");d=p(c,h);c=p(e,f.length?z(f).length-g:0);if(1<b.length||b[0]||y(d,c))return lb(a.doc,b,d,c,"+input"),!0};x.prototype.ensurePolled=function(){this.forceCompositionEnd()};x.prototype.reset=function(){this.forceCompositionEnd()};x.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,
this.updateFromDOM(),this.div.blur(),this.div.focus())};x.prototype.readFromDOMSoon=function(){var a=this;null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout(function(){a.readDOMTimeout=null;if(a.composing)if(a.composing.done)a.composing=null;else return;a.updateFromDOM()},80))};x.prototype.updateFromDOM=function(){var a=this;!this.cm.isReadOnly()&&this.pollContent()||Y(this.cm,function(){return U(a.cm)})};x.prototype.setUneditable=function(a){a.contentEditable="false"};x.prototype.onKeyPress=
function(a){0!=a.charCode&&(a.preventDefault(),this.cm.isReadOnly()||J(this.cm,Sd)(this.cm,String.fromCharCode(null==a.charCode?a.keyCode:a.charCode),0))};x.prototype.readOnlyChanged=function(a){this.div.contentEditable=String("nocursor"!=a)};x.prototype.onContextMenu=function(){};x.prototype.resetPosition=function(){};x.prototype.needsContentAttribute=!0;var H=function(a){this.cm=a;this.prevInput="";this.pollingFast=!1;this.polling=new Xa;this.hasSelection=!1;this.composing=null};H.prototype.init=
function(a){function b(a){if(!I(e,a)){if(e.somethingSelected())da={lineWise:!1,text:e.getSelections()};else if(e.options.lineWiseCopyCut){var b=Zf(e);da={lineWise:!0,text:b.text};"cut"==a.type?e.setSelections(b.ranges,null,ra):(d.prevInput="",g.value=b.text.join("\n"),$b(g))}else return;"cut"==a.type&&(e.state.cutIncoming=!0)}}var c=this,d=this,e=this.cm,f=this.wrapper=ag(),g=this.textarea=f.firstChild;a.wrapper.insertBefore(f,a.wrapper.firstChild);Yb&&(g.style.width="0px");v(g,"input",function(){B&&
9<=D&&c.hasSelection&&(c.hasSelection=null);d.poll()});v(g,"paste",function(a){I(e,a)||Yf(a,e)||(e.state.pasteIncoming=!0,d.fastPoll())});v(g,"cut",b);v(g,"copy",b);v(a.scroller,"paste",function(b){ua(a,b)||I(e,b)||(e.state.pasteIncoming=!0,d.focus())});v(a.lineSpace,"selectstart",function(b){ua(a,b)||Q(b)});v(g,"compositionstart",function(){var a=e.getCursor("from");d.composing&&d.composing.range.clear();d.composing={start:a,range:e.markText(a,e.getCursor("to"),{className:"CodeMirror-composing"})}});
v(g,"compositionend",function(){d.composing&&(d.poll(),d.composing.range.clear(),d.composing=null)})};H.prototype.prepareSelection=function(){var a=this.cm,b=a.display,c=a.doc,d=Me(a);if(a.options.moveInputWithCursor){var a=ja(a,c.sel.primary().head,"div"),c=b.wrapper.getBoundingClientRect(),e=b.lineDiv.getBoundingClientRect();d.teTop=Math.max(0,Math.min(b.wrapper.clientHeight-10,a.top+e.top-c.top));d.teLeft=Math.max(0,Math.min(b.wrapper.clientWidth-10,a.left+e.left-c.left))}return d};H.prototype.showSelection=
function(a){var b=this.cm.display;Z(b.cursorDiv,a.cursors);Z(b.selectionDiv,a.selection);null!=a.teTop&&(this.wrapper.style.top=a.teTop+"px",this.wrapper.style.left=a.teLeft+"px")};H.prototype.reset=function(a){if(!this.contextMenuPending&&!this.composing){var b=this.cm;b.somethingSelected()?(this.prevInput="",a=b.getSelection(),this.textarea.value=a,b.state.focused&&$b(this.textarea),B&&9<=D&&(this.hasSelection=a)):a||(this.prevInput=this.textarea.value="",B&&9<=D&&(this.hasSelection=null))}};H.prototype.getField=
function(){return this.textarea};H.prototype.supportsTouch=function(){return!1};H.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!sb||sa()!=this.textarea))try{this.textarea.focus()}catch(a){}};H.prototype.blur=function(){this.textarea.blur()};H.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0};H.prototype.receivedFocus=function(){this.slowPoll()};H.prototype.slowPoll=function(){var a=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,
function(){a.poll();a.cm.state.focused&&a.slowPoll()})};H.prototype.fastPoll=function(){function a(){c.poll()||b?(c.pollingFast=!1,c.slowPoll()):(b=!0,c.polling.set(60,a))}var b=!1,c=this;c.pollingFast=!0;c.polling.set(20,a)};H.prototype.poll=function(){var a=this,b=this.cm,c=this.textarea,d=this.prevInput;if(this.contextMenuPending||!b.state.focused||rh(c)&&!d&&!this.composing||b.isReadOnly()||b.options.disableInput||b.state.keySeq)return!1;var e=c.value;if(e==d&&!b.somethingSelected())return!1;
if(B&&9<=D&&this.hasSelection===e||ha&&/[\uf700-\uf7ff]/.test(e))return b.display.input.reset(),!1;if(b.doc.sel==b.display.selForContextMenu){var f=e.charCodeAt(0);8203!=f||d||(d="​");if(8666==f)return this.reset(),this.cm.execCommand("undo")}for(var g=0,f=Math.min(d.length,e.length);g<f&&d.charCodeAt(g)==e.charCodeAt(g);)++g;Y(b,function(){Sd(b,e.slice(g),d.length-g,null,a.composing?"*compose":null);1E3<e.length||-1<e.indexOf("\n")?c.value=a.prevInput="":a.prevInput=e;a.composing&&(a.composing.range.clear(),
a.composing.range=b.markText(a.composing.start,b.getCursor("to"),{className:"CodeMirror-composing"}))});return!0};H.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)};H.prototype.onKeyPress=function(){B&&9<=D&&(this.hasSelection=null);this.fastPoll()};H.prototype.onContextMenu=function(a){function b(){if(null!=g.selectionStart){var a=e.somethingSelected(),b="​"+(a?g.value:"");g.value="⇚";g.value=b;d.prevInput=a?"":"​";g.selectionStart=1;g.selectionEnd=b.length;
f.selForContextMenu=e.doc.sel}}function c(){d.contextMenuPending=!1;d.wrapper.style.cssText=m;g.style.cssText=l;B&&9>D&&f.scrollbars.setScrollTop(f.scroller.scrollTop=k);if(null!=g.selectionStart){(!B||B&&9>D)&&b();var a=0,c=function(){f.selForContextMenu==e.doc.sel&&0==g.selectionStart&&0<g.selectionEnd&&"​"==d.prevInput?J(e,sf)(e):10>a++?f.detectingSelectAll=setTimeout(c,500):(f.selForContextMenu=null,f.input.reset())};f.detectingSelectAll=setTimeout(c,200)}}var d=this,e=d.cm,f=e.display,g=d.textarea,
h=Ra(e,a),k=f.scroller.scrollTop;if(h&&!ka){e.options.resetSelectionOnContextMenu&&-1==e.doc.sel.contains(h)&&J(e,O)(e.doc,va(h),ra);var l=g.style.cssText,m=d.wrapper.style.cssText;d.wrapper.style.cssText="position: absolute";h=d.wrapper.getBoundingClientRect();g.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(a.clientY-h.top-5)+"px; left: "+(a.clientX-h.left-5)+"px;\n      z-index: 1000; background: "+(B?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity\x3d5);";
var p;P&&(p=window.scrollY);f.input.focus();P&&window.scrollTo(null,p);f.input.reset();e.somethingSelected()||(g.value=d.prevInput=" ");d.contextMenuPending=!0;f.selForContextMenu=e.doc.sel;clearTimeout(f.detectingSelectAll);B&&9<=D&&b();if(Pd){xb(a);var n=function(){aa(window,"mouseup",n);setTimeout(c,20)};v(window,"mouseup",n)}else setTimeout(c,50)}};H.prototype.readOnlyChanged=function(a){a||this.reset();this.textarea.disabled="nocursor"==a};H.prototype.setUneditable=function(){};H.prototype.needsContentAttribute=
!1;(function(a){function b(b,e,f,g){a.defaults[b]=e;f&&(c[b]=g?function(a,b,c){c!=pb&&f(a,b,c)}:f)}var c=a.optionHandlers;a.defineOption=b;a.Init=pb;b("value","",function(a,b){return a.setValue(b)},!0);b("mode",null,function(a,b){a.doc.modeOption=b;Ed(a)},!0);b("indentUnit",2,Ed,!0);b("indentWithTabs",!1);b("smartIndent",!0);b("tabSize",4,function(a){Kb(a);Db(a);U(a)},!0);b("lineSeparator",null,function(a,b){if(a.doc.lineSep=b){var c=[],g=a.doc.first;a.doc.iter(function(a){for(var d=0;;){var h=a.text.indexOf(b,
d);if(-1==h)break;d=h+b.length;c.push(p(g,h))}g++});for(var h=c.length-1;0<=h;h--)lb(a.doc,b,c[h],p(c[h].line,c[h].ch+b.length))}});b("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,function(a,b,c){a.state.specialChars=new RegExp(b.source+(b.test("\t")?"":"|\t"),"g");c!=pb&&a.refresh()});b("specialCharPlaceholder",wg,function(a){return a.refresh()},!0);b("electricChars",!0);b("inputStyle",sb?"contenteditable":"textarea",function(){throw Error("inputStyle can not (yet) be changed in a running editor");
},!0);b("spellcheck",!1,function(a,b){return a.getInputField().spellcheck=b},!0);b("rtlMoveVisually",!qh);b("wholeLineUpdateBefore",!0);b("theme","default",function(a){Sf(a);Wb(a)},!0);b("keyMap","default",function(a,b,c){b=Fc(b);(c=c!=pb&&Fc(c))&&c.detach&&c.detach(a,b);b.attach&&b.attach(a,c||null)});b("extraKeys",null);b("configureMouse",null);b("lineWrapping",!1,jh,!0);b("gutters",[],function(a){Cd(a.options);Wb(a)},!0);b("fixedGutter",!0,function(a,b){a.display.gutters.style.left=b?sd(a.display)+
"px":"0";a.refresh()},!0);b("coverGutterNextToScrollbar",!1,function(a){return gb(a)},!0);b("scrollbarStyle","native",function(a){We(a);gb(a);a.display.scrollbars.setScrollTop(a.doc.scrollTop);a.display.scrollbars.setScrollLeft(a.doc.scrollLeft)},!0);b("lineNumbers",!1,function(a){Cd(a.options);Wb(a)},!0);b("firstLineNumber",1,Wb,!0);b("lineNumberFormatter",function(a){return a},Wb,!0);b("showCursorWhenSelecting",!1,Eb,!0);b("resetSelectionOnContextMenu",!0);b("lineWiseCopyCut",!0);b("pasteLinesPerSelection",
!0);b("readOnly",!1,function(a,b){"nocursor"==b&&(Fb(a),a.display.input.blur());a.display.input.readOnlyChanged(b)});b("disableInput",!1,function(a,b){b||a.display.input.reset()},!0);b("dragDrop",!0,ih);b("allowDropFileTypes",null);b("cursorBlinkRate",530);b("cursorScrollMargin",0);b("cursorHeight",1,Eb,!0);b("singleCursorHeightPerLine",!0,Eb,!0);b("workTime",100);b("workDelay",100);b("flattenSpans",!0,Kb,!0);b("addModeClass",!1,Kb,!0);b("pollInterval",100);b("undoDepth",200,function(a,b){return a.doc.history.undoDepth=
b});b("historyEventDelay",1250);b("viewportMargin",10,function(a){return a.refresh()},!0);b("maxHighlightLength",1E4,Kb,!0);b("moveInputWithCursor",!0,function(a,b){b||a.display.input.resetPosition()});b("tabindex",null,function(a,b){return a.display.input.getField().tabIndex=b||""});b("autofocus",null);b("direction","ltr",function(a,b){return a.doc.setDirection(b)},!0)})(E);(function(a){var b=a.optionHandlers,c=a.helpers={};a.prototype={constructor:a,focus:function(){window.focus();this.display.input.focus()},
setOption:function(a,c){var f=this.options,g=f[a];if(f[a]!=c||"mode"==a)f[a]=c,b.hasOwnProperty(a)&&J(this,b[a])(this,c,g),F(this,"optionChange",this,a)},getOption:function(a){return this.options[a]},getDoc:function(){return this.doc},addKeyMap:function(a,b){this.state.keyMaps[b?"push":"unshift"](Fc(a))},removeKeyMap:function(a){for(var b=this.state.keyMaps,c=0;c<b.length;++c)if(b[c]==a||b[c].name==a)return b.splice(c,1),!0},addOverlay:S(function(b,c){var f=b.token?b:a.getMode(this.options,b);if(f.startState)throw Error("Overlays may not be stateful.");
gg(this.state.overlays,{mode:f,modeSpec:b,opaque:c&&c.opaque,priority:c&&c.priority||0},function(a){return a.priority});this.state.modeGen++;U(this)}),removeOverlay:S(function(a){for(var b=this.state.overlays,c=0;c<b.length;++c){var g=b[c].modeSpec;if(g==a||"string"==typeof a&&g.name==a){b.splice(c,1);this.state.modeGen++;U(this);break}}}),indentLine:S(function(a,b,c){"string"!=typeof b&&"number"!=typeof b&&(b=null==b?this.options.smartIndent?"smart":"prev":b?"add":"subtract");tb(this.doc,a)&&Xb(this,
a,b,c)}),indentSelection:S(function(a){for(var b=this.doc.sel.ranges,c=-1,g=0;g<b.length;g++){var h=b[g];if(h.empty())h.head.line>c&&(Xb(this,h.head.line,a,!0),c=h.head.line,g==this.doc.sel.primIndex&&fb(this));else{for(var k=h.from(),h=h.to(),l=Math.max(c,k.line),c=Math.min(this.lastLine(),h.line-(h.ch?0:1))+1,h=l;h<c;++h)Xb(this,h,a);h=this.doc.sel.ranges;0==k.ch&&b.length==h.length&&0<h[g].from().ch&&Id(this.doc,g,new A(k,h[g].to()),ra)}}}),getTokenAt:function(a,b){return ne(this,a,b)},getLineTokens:function(a,
b){return ne(this,p(a),b,!0)},getTokenTypeAt:function(a){a=w(this.doc,a);var b=le(this,t(this.doc,a.line)),c=0,g=(b.length-1)/2;a=a.ch;if(0==a)b=b[2];else for(;;){var h=c+g>>1;if((h?b[2*h-1]:0)>=a)g=h;else if(b[2*h+1]<a)c=h+1;else{b=b[2*h+2];break}}c=b?b.indexOf("overlay "):-1;return 0>c?b:0==c?null:b.slice(0,c-1)},getModeAt:function(b){var c=this.doc.mode;return c.innerMode?a.innerMode(c,this.getTokenAt(b).state).mode:c},getHelper:function(a,b){return this.getHelpers(a,b)[0]},getHelpers:function(a,
b){var f=[];if(!c.hasOwnProperty(b))return f;var g=c[b],h=this.getModeAt(a);if("string"==typeof h[b])g[h[b]]&&f.push(g[h[b]]);else if(h[b])for(var k=0;k<h[b].length;k++){var l=g[h[b][k]];l&&f.push(l)}else h.helperType&&g[h.helperType]?f.push(g[h.helperType]):g[h.name]&&f.push(g[h.name]);for(k=0;k<g._global.length;k++)l=g._global[k],l.pred(h,this)&&-1==L(f,l.val)&&f.push(l.val);return f},getStateAfter:function(a,b){var c=this.doc;a=Math.max(c.first,Math.min(null==a?c.first+c.size-1:a,c.first+c.size-
1));return yb(this,a+1,b).state},cursorCoords:function(a,b){var c;c=this.doc.sel.primary();c=null==a?c.head:"object"==typeof a?w(this.doc,a):a?c.from():c.to();return ja(this,c,b||"page")},charCoords:function(a,b){return od(this,w(this.doc,a),b||"page")},coordsChar:function(a,b){a=He(this,a,b||"page");return qd(this,a.left,a.top)},lineAtHeight:function(a,b){a=He(this,{top:a,left:0},b||"page").top;return Ia(this.doc,a+this.display.viewOffset)},heightAtLine:function(a,b,c){var g=!1;if("number"==typeof a){var h=
this.doc.first+this.doc.size-1;a<this.doc.first?a=this.doc.first:a>h&&(a=h,g=!0);a=t(this.doc,a)}return sc(this,a,{top:0,left:0},b||"page",c||g).top+(g?this.doc.height-oa(a):0)},defaultTextHeight:function(){return Pa(this.display)},defaultCharWidth:function(){return Cb(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(a,b,c,g,h){var k=this.display;a=ja(this,w(this.doc,a));var l=a.bottom,m=a.left;b.style.position="absolute";b.setAttribute("cm-ignore-events",
"true");this.display.input.setUneditable(b);k.sizer.appendChild(b);if("over"==g)l=a.top;else if("above"==g||"near"==g){var p=Math.max(k.wrapper.clientHeight,this.doc.height),n=Math.max(k.sizer.clientWidth,k.lineSpace.clientWidth);("above"==g||a.bottom+b.offsetHeight>p)&&a.top>b.offsetHeight?l=a.top-b.offsetHeight:a.bottom+b.offsetHeight<=p&&(l=a.bottom);m+b.offsetWidth>n&&(m=n-b.offsetWidth)}b.style.top=l+"px";b.style.left=b.style.right="";"right"==h?(m=k.sizer.clientWidth-b.offsetWidth,b.style.right=
"0px"):("left"==h?m=0:"middle"==h&&(m=(k.sizer.clientWidth-b.offsetWidth)/2),b.style.left=m+"px");c&&(a=yd(this,{left:m,top:l,right:m+b.offsetWidth,bottom:l+b.offsetHeight}),null!=a.scrollTop&&Hb(this,a.scrollTop),null!=a.scrollLeft&&Ta(this,a.scrollLeft))},triggerOnKeyDown:S(Mf),triggerOnKeyPress:S(Of),triggerOnKeyUp:Nf,triggerOnMouseDown:S(Pf),execCommand:function(a){if(Sb.hasOwnProperty(a))return Sb[a].call(null,this)},triggerElectric:S(function(a){Xf(this,a)}),findPosH:function(a,b,c,g){var h=
1;0>b&&(h=-1,b=-b);a=w(this.doc,a);for(var k=0;k<b&&(a=Ud(this.doc,a,h,c,g),!a.hitSide);++k);return a},moveH:S(function(a,b){var c=this;this.extendSelectionsBy(function(g){return c.display.shift||c.doc.extend||g.empty()?Ud(c.doc,g.head,a,b,c.options.rtlMoveVisually):0>a?g.from():g.to()},ac)}),deleteH:S(function(a,b){var c=this.doc;this.doc.sel.somethingSelected()?c.replaceSelection("",null,"+delete"):ob(this,function(g){var h=Ud(c,g.head,a,b,!1);return 0>a?{from:h,to:g.head}:{from:g.head,to:h}})}),
findPosV:function(a,b,c,g){var h=1;0>b&&(h=-1,b=-b);var k=w(this.doc,a);for(a=0;a<b&&(k=ja(this,k,"div"),null==g?g=k.left:k.left=g,k=bg(this,k,h,c),!k.hitSide);++a);return k},moveV:S(function(a,b){var c=this,g=this.doc,h=[],k=!this.display.shift&&!g.extend&&g.sel.somethingSelected();g.extendSelectionsBy(function(l){if(k)return 0>a?l.from():l.to();var p=ja(c,l.head,"div");null!=l.goalColumn&&(p.left=l.goalColumn);h.push(p.left);var n=bg(c,p,a,b);"page"==b&&l==g.sel.primary()&&vc(c,od(c,n,"div").top-
p.top);return n},ac);if(h.length)for(var l=0;l<g.sel.ranges.length;l++)g.sel.ranges[l].goalColumn=h[l]}),findWordAt:function(a){var b=t(this.doc,a.line).text,c=a.ch,g=a.ch;if(b){var h=this.getHelper(a,"wordChars");"before"!=a.sticky&&g!=b.length||!c?++g:--c;for(var k=b.charAt(c),k=hc(k,h)?function(a){return hc(a,h)}:/\s/.test(k)?function(a){return/\s/.test(a)}:function(a){return!/\s/.test(a)&&!hc(a)};0<c&&k(b.charAt(c-1));)--c;for(;g<b.length&&k(b.charAt(g));)++g}return new A(p(a.line,c),p(a.line,
g))},toggleOverwrite:function(a){if(null==a||a!=this.state.overwrite)(this.state.overwrite=!this.state.overwrite)?Fa(this.display.cursorDiv,"CodeMirror-overwrite"):Sa(this.display.cursorDiv,"CodeMirror-overwrite"),F(this,"overwriteToggle",this,this.state.overwrite)},hasFocus:function(){return this.display.input.getField()==sa()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:S(function(a,b){Gb(this,a,b)}),getScrollInfo:function(){var a=this.display.scroller;return{left:a.scrollLeft,
top:a.scrollTop,height:a.scrollHeight-qa(this)-this.display.barHeight,width:a.scrollWidth-qa(this)-this.display.barWidth,clientHeight:jd(this),clientWidth:Ma(this)}},scrollIntoView:S(function(a,b){null==a?(a={from:this.doc.sel.primary().head,to:null},null==b&&(b=this.options.cursorScrollMargin)):"number"==typeof a?a={from:p(a,0),to:null}:null==a.from&&(a={from:a,to:null});a.to||(a.to=a.from);a.margin=b||0;if(null!=a.from.line){var c=a;wc(this);this.curOp.scrollToPos=c}else Te(this,a.from,a.to,a.margin)}),
setSize:S(function(a,b){var c=this,g=function(a){return"number"==typeof a||/^\d+$/.test(String(a))?a+"px":a};null!=a&&(this.display.wrapper.style.width=g(a));null!=b&&(this.display.wrapper.style.height=g(b));this.options.lineWrapping&&Ee(this);var h=this.display.viewFrom;this.doc.iter(h,this.display.viewTo,function(a){if(a.widgets)for(var b=0;b<a.widgets.length;b++)if(a.widgets[b].noHScroll){Aa(c,h,"widget");break}++h});this.curOp.forceUpdate=!0;F(this,"refresh",this)}),operation:function(a){return Y(this,
a)},startOperation:function(){return Ua(this)},endOperation:function(){return Va(this)},refresh:S(function(){var a=this.display.cachedTextHeight;U(this);this.curOp.forceUpdate=!0;Db(this);Gb(this,this.doc.scrollLeft,this.doc.scrollTop);xd(this);(null==a||.5<Math.abs(a-Pa(this.display)))&&td(this);F(this,"refresh",this)}),swapDoc:S(function(a){var b=this.doc;b.cm=null;ff(this,a);Db(this);this.display.input.reset();Gb(this,a.scrollLeft,a.scrollTop);this.curOp.forceScroll=!0;N(this,"swapDoc",this,b);
return b}),getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}};ab(a);a.registerHelper=function(b,e,f){c.hasOwnProperty(b)||(c[b]=a[b]={_global:[]});c[b][e]=f};a.registerGlobalHelper=function(b,e,f,g){a.registerHelper(b,e,g);c[b]._global.push({pred:f,val:g})}})(E);var th="iter insert remove copy getEditor constructor".split(" "),
ec;for(ec in V.prototype)V.prototype.hasOwnProperty(ec)&&0>L(th,ec)&&(E.prototype[ec]=function(a){return function(){return a.apply(this.doc,arguments)}}(V.prototype[ec]));ab(V);E.inputStyles={textarea:H,contenteditable:x};E.defineMode=function(a){E.defaults.mode||"null"==a||(E.defaults.mode=a);og.apply(this,arguments)};E.defineMIME=function(a,b){bb[a]=b};E.defineMode("null",function(){return{token:function(a){return a.skipToEnd()}}});E.defineMIME("text/plain","null");E.defineExtension=function(a,
b){E.prototype[a]=b};E.defineDocExtension=function(a,b){V.prototype[a]=b};E.fromTextArea=function(a,b){function c(){a.value=h.getValue()}b=b?Ga(b):{};b.value=a.value;!b.tabindex&&a.tabIndex&&(b.tabindex=a.tabIndex);!b.placeholder&&a.placeholder&&(b.placeholder=a.placeholder);if(null==b.autofocus){var d=sa();b.autofocus=d==a||null!=a.getAttribute("autofocus")&&d==document.body}var e;if(a.form&&(v(a.form,"submit",c),!b.leaveSubmitMethodAlone)){var f=a.form;e=f.submit;try{var g=f.submit=function(){c();
f.submit=e;f.submit();f.submit=g}}catch(k){}}b.finishInit=function(b){b.save=c;b.getTextArea=function(){return a};b.toTextArea=function(){b.toTextArea=isNaN;c();a.parentNode.removeChild(b.getWrapperElement());a.style.display="";a.form&&(aa(a.form,"submit",c),"function"==typeof a.form.submit&&(a.form.submit=e))}};a.style.display="none";var h=E(function(b){return a.parentNode.insertBefore(b,a.nextSibling)},b);return h};(function(a){a.off=aa;a.on=v;a.wheelEventPixels=Ig;a.Doc=V;a.splitLines=Td;a.countColumn=
fa;a.findColumn=Oc;a.isWordChar=Qc;a.Pass=Hc;a.signal=F;a.Line=hb;a.changeEnd=Ba;a.scrollbarModel=Xe;a.Pos=p;a.cmpPos=y;a.modes=bd;a.mimeModes=bb;a.resolveMode=nc;a.getMode=cd;a.modeExtensions=cb;a.extendMode=pg;a.copyState=La;a.startState=ie;a.innerMode=dd;a.commands=Sb;a.keyMap=Rb;a.keyName=If;a.isModifierKey=Ff;a.lookupKey=nb;a.normalizeKeyMap=Ug;a.StringStream=G;a.SharedTextMarker=Qb;a.TextMarker=Ca;a.LineWidget=Pb;a.e_preventDefault=Q;a.e_stopPropagation=ge;a.e_stop=xb;a.addClass=Fa;a.contains=
wa;a.rmClass=Sa;a.keyNames=Da})(E);E.version="5.31.0";return E});
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("./runmode"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "./runmode"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  var isBlock = /^(p|li|div|h\\d|pre|blockquote|td)$/;

  function textContent(node, out) {
    if (node.nodeType == 3) return out.push(node.nodeValue);
    for (var ch = node.firstChild; ch; ch = ch.nextSibling) {
      textContent(ch, out);
      if (isBlock.test(node.nodeType)) out.push("\n");
    }
  }

  CodeMirror.colorize = function(collection, defaultMode) {
    if (!collection) collection = document.body.getElementsByTagName("pre");

    for (var i = 0; i < collection.length; ++i) {
      var node = collection[i];
      var mode = node.getAttribute("data-lang") || defaultMode;
      if (!mode) continue;

      var text = [];
      textContent(node, text);
      node.innerHTML = "";
      CodeMirror.runMode(text.join(""), mode, node);

      node.className += " cm-s-default";
    }
  };
});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

/**
 * Author: Hans Engel
 * Branched from CodeMirror's Scheme mode (by Koh Zi Han, based on implementation by Koh Zi Chun)
 */

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("clojure", function (options) {
    var BUILTIN = "builtin", COMMENT = "comment", STRING = "string", CHARACTER = "string-2",
        ATOM = "atom", NUMBER = "number", BRACKET = "bracket", KEYWORD = "keyword", VAR = "variable";
    var INDENT_WORD_SKIP = options.indentUnit || 2;
    var NORMAL_INDENT_UNIT = options.indentUnit || 2;

    function makeKeywords(str) {
        var obj = {}, words = str.split(" ");
        for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
        return obj;
    }

    var atoms = makeKeywords("true false nil");

    var keywords = makeKeywords(
      "defn defn- def def- defonce defmulti defmethod defmacro defstruct deftype defprotocol defrecord defproject deftest " +
      "slice defalias defhinted defmacro- defn-memo defnk defnk defonce- defunbound defunbound- defvar defvar- let letfn " +
      "do case cond condp for loop recur when when-not when-let when-first if if-let if-not . .. -> ->> doto and or dosync " +
      "doseq dotimes dorun doall load import unimport ns in-ns refer try catch finally throw with-open with-local-vars " +
      "binding gen-class gen-and-load-class gen-and-save-class handler-case handle");

    var builtins = makeKeywords(
        "* *' *1 *2 *3 *agent* *allow-unresolved-vars* *assert* *clojure-version* *command-line-args* *compile-files* " +
        "*compile-path* *compiler-options* *data-readers* *e *err* *file* *flush-on-newline* *fn-loader* *in* " +
        "*math-context* *ns* *out* *print-dup* *print-length* *print-level* *print-meta* *print-readably* *read-eval* " +
        "*source-path* *unchecked-math* *use-context-classloader* *verbose-defrecords* *warn-on-reflection* + +' - -' -> " +
        "->> ->ArrayChunk ->Vec ->VecNode ->VecSeq -cache-protocol-fn -reset-methods .. / < <= = == > >= EMPTY-NODE accessor " +
        "aclone add-classpath add-watch agent agent-error agent-errors aget alength alias all-ns alter alter-meta! " +
        "alter-var-root amap ancestors and apply areduce array-map aset aset-boolean aset-byte aset-char aset-double " +
        "aset-float aset-int aset-long aset-short assert assoc assoc! assoc-in associative? atom await await-for await1 " +
        "bases bean bigdec bigint biginteger binding bit-and bit-and-not bit-clear bit-flip bit-not bit-or bit-set " +
        "bit-shift-left bit-shift-right bit-test bit-xor boolean boolean-array booleans bound-fn bound-fn* bound? butlast " +
        "byte byte-array bytes case cat cast char char-array char-escape-string char-name-string char? chars chunk chunk-append " +
        "chunk-buffer chunk-cons chunk-first chunk-next chunk-rest chunked-seq? class class? clear-agent-errors " +
        "clojure-version coll? comment commute comp comparator compare compare-and-set! compile complement completing concat cond condp " +
        "conj conj! cons constantly construct-proxy contains? count counted? create-ns create-struct cycle dec dec' decimal? " +
        "declare dedupe default-data-readers definline definterface defmacro defmethod defmulti defn defn- defonce defprotocol " +
        "defrecord defstruct deftype delay delay? deliver denominator deref derive descendants destructure disj disj! dissoc " +
        "dissoc! distinct distinct? doall dorun doseq dosync dotimes doto double double-array doubles drop drop-last " +
        "drop-while eduction empty empty? ensure enumeration-seq error-handler error-mode eval even? every-pred every? ex-data ex-info " +
        "extend extend-protocol extend-type extenders extends? false? ffirst file-seq filter filterv find find-keyword " +
        "find-ns find-protocol-impl find-protocol-method find-var first flatten float float-array float? floats flush fn fn? " +
        "fnext fnil for force format frequencies future future-call future-cancel future-cancelled? future-done? future? " +
        "gen-class gen-interface gensym get get-in get-method get-proxy-class get-thread-bindings get-validator group-by hash " +
        "hash-combine hash-map hash-set identical? identity if-let if-not ifn? import in-ns inc inc' init-proxy instance? " +
        "int int-array integer? interleave intern interpose into into-array ints io! isa? iterate iterator-seq juxt keep " +
        "keep-indexed key keys keyword keyword? last lazy-cat lazy-seq let letfn line-seq list list* list? load load-file " +
        "load-reader load-string loaded-libs locking long long-array longs loop macroexpand macroexpand-1 make-array " +
        "make-hierarchy map map-indexed map? mapcat mapv max max-key memfn memoize merge merge-with meta method-sig methods " +
        "min min-key mod munge name namespace namespace-munge neg? newline next nfirst nil? nnext not not-any? not-empty " +
        "not-every? not= ns ns-aliases ns-imports ns-interns ns-map ns-name ns-publics ns-refers ns-resolve ns-unalias " +
        "ns-unmap nth nthnext nthrest num number? numerator object-array odd? or parents partial partition partition-all " +
        "partition-by pcalls peek persistent! pmap pop pop! pop-thread-bindings pos? pr pr-str prefer-method prefers " +
        "primitives-classnames print print-ctor print-dup print-method print-simple print-str printf println println-str " +
        "prn prn-str promise proxy proxy-call-with-super proxy-mappings proxy-name proxy-super push-thread-bindings pvalues " +
        "quot rand rand-int rand-nth random-sample range ratio? rational? rationalize re-find re-groups re-matcher re-matches re-pattern " +
        "re-seq read read-line read-string realized? reduce reduce-kv reductions ref ref-history-count ref-max-history " +
        "ref-min-history ref-set refer refer-clojure reify release-pending-sends rem remove remove-all-methods " +
        "remove-method remove-ns remove-watch repeat repeatedly replace replicate require reset! reset-meta! resolve rest " +
        "restart-agent resultset-seq reverse reversible? rseq rsubseq satisfies? second select-keys send send-off seq seq? " +
        "seque sequence sequential? set set-error-handler! set-error-mode! set-validator! set? short short-array shorts " +
        "shuffle shutdown-agents slurp some some-fn sort sort-by sorted-map sorted-map-by sorted-set sorted-set-by sorted? " +
        "special-symbol? spit split-at split-with str string? struct struct-map subs subseq subvec supers swap! symbol " +
        "symbol? sync take take-last take-nth take-while test the-ns thread-bound? time to-array to-array-2d trampoline transduce " +
        "transient tree-seq true? type unchecked-add unchecked-add-int unchecked-byte unchecked-char unchecked-dec " +
        "unchecked-dec-int unchecked-divide-int unchecked-double unchecked-float unchecked-inc unchecked-inc-int " +
        "unchecked-int unchecked-long unchecked-multiply unchecked-multiply-int unchecked-negate unchecked-negate-int "+
        "unchecked-remainder-int unchecked-short unchecked-subtract unchecked-subtract-int underive unquote " +
        "unquote-splicing update update-in update-proxy use val vals var-get var-set var? vary-meta vec vector vector-of " +
        "vector? volatile! volatile? vreset! vswap! when when-first when-let when-not while with-bindings with-bindings* with-in-str with-loading-context " +
        "with-local-vars with-meta with-open with-out-str with-precision with-redefs with-redefs-fn xml-seq zero? zipmap " +
        "*default-data-reader-fn* as-> cond-> cond->> reduced reduced? send-via set-agent-send-executor! " +
        "set-agent-send-off-executor! some-> some->>");

    var indentKeys = makeKeywords(
        // Built-ins
        "ns fn def defn defmethod bound-fn if if-not case condp when while when-not when-first do future comment doto " +
        "locking proxy with-open with-precision reify deftype defrecord defprotocol extend extend-protocol extend-type " +
        "try catch " +

        // Binding forms
        "let letfn binding loop for doseq dotimes when-let if-let " +

        // Data structures
        "defstruct struct-map assoc " +

        // clojure.test
        "testing deftest " +

        // contrib
        "handler-case handle dotrace deftrace");

    var tests = {
        digit: /\d/,
        digit_or_colon: /[\d:]/,
        hex: /[0-9a-f]/i,
        sign: /[+-]/,
        exponent: /e/i,
        keyword_char: /[^\s\(\[\;\)\]]/,
        symbol: /[\w*+!\-\._?:<>\/\xa1-\uffff]/,
        block_indent: /^(?:def|with)[^\/]+$|\/(?:def|with)/
    };

    function stateStack(indent, type, prev) { // represents a state stack object
        this.indent = indent;
        this.type = type;
        this.prev = prev;
    }

    function pushStack(state, indent, type) {
        state.indentStack = new stateStack(indent, type, state.indentStack);
    }

    function popStack(state) {
        state.indentStack = state.indentStack.prev;
    }

    function isNumber(ch, stream){
        // hex
        if ( ch === '0' && stream.eat(/x/i) ) {
            stream.eatWhile(tests.hex);
            return true;
        }

        // leading sign
        if ( ( ch == '+' || ch == '-' ) && ( tests.digit.test(stream.peek()) ) ) {
          stream.eat(tests.sign);
          ch = stream.next();
        }

        if ( tests.digit.test(ch) ) {
            stream.eat(ch);
            stream.eatWhile(tests.digit);

            if ( '.' == stream.peek() ) {
                stream.eat('.');
                stream.eatWhile(tests.digit);
            } else if ('/' == stream.peek() ) {
                stream.eat('/');
                stream.eatWhile(tests.digit);
            }

            if ( stream.eat(tests.exponent) ) {
                stream.eat(tests.sign);
                stream.eatWhile(tests.digit);
            }

            return true;
        }

        return false;
    }

    // Eat character that starts after backslash \
    function eatCharacter(stream) {
        var first = stream.next();
        // Read special literals: backspace, newline, space, return.
        // Just read all lowercase letters.
        if (first && first.match(/[a-z]/) && stream.match(/[a-z]+/, true)) {
            return;
        }
        // Read unicode character: \u1000 \uA0a1
        if (first === "u") {
            stream.match(/[0-9a-z]{4}/i, true);
        }
    }

    return {
        startState: function () {
            return {
                indentStack: null,
                indentation: 0,
                mode: false
            };
        },

        token: function (stream, state) {
            if (state.indentStack == null && stream.sol()) {
                // update indentation, but only if indentStack is empty
                state.indentation = stream.indentation();
            }

            // skip spaces
            if (state.mode != "string" && stream.eatSpace()) {
                return null;
            }
            var returnType = null;

            switch(state.mode){
                case "string": // multi-line string parsing mode
                    var next, escaped = false;
                    while ((next = stream.next()) != null) {
                        if (next == "\"" && !escaped) {

                            state.mode = false;
                            break;
                        }
                        escaped = !escaped && next == "\\";
                    }
                    returnType = STRING; // continue on in string mode
                    break;
                default: // default parsing mode
                    var ch = stream.next();

                    if (ch == "\"") {
                        state.mode = "string";
                        returnType = STRING;
                    } else if (ch == "\\") {
                        eatCharacter(stream);
                        returnType = CHARACTER;
                    } else if (ch == "'" && !( tests.digit_or_colon.test(stream.peek()) )) {
                        returnType = ATOM;
                    } else if (ch == ";") { // comment
                        stream.skipToEnd(); // rest of the line is a comment
                        returnType = COMMENT;
                    } else if (isNumber(ch,stream)){
                        returnType = NUMBER;
                    } else if (ch == "(" || ch == "[" || ch == "{" ) {
                        var keyWord = '', indentTemp = stream.column(), letter;
                        /**
                        Either
                        (indent-word ..
                        (non-indent-word ..
                        (;something else, bracket, etc.
                        */

                        if (ch == "(") while ((letter = stream.eat(tests.keyword_char)) != null) {
                            keyWord += letter;
                        }

                        if (keyWord.length > 0 && (indentKeys.propertyIsEnumerable(keyWord) ||
                                                   tests.block_indent.test(keyWord))) { // indent-word
                            pushStack(state, indentTemp + INDENT_WORD_SKIP, ch);
                        } else { // non-indent word
                            // we continue eating the spaces
                            stream.eatSpace();
                            if (stream.eol() || stream.peek() == ";") {
                                // nothing significant after
                                // we restart indentation the user defined spaces after
                                pushStack(state, indentTemp + NORMAL_INDENT_UNIT, ch);
                            } else {
                                pushStack(state, indentTemp + stream.current().length, ch); // else we match
                            }
                        }
                        stream.backUp(stream.current().length - 1); // undo all the eating

                        returnType = BRACKET;
                    } else if (ch == ")" || ch == "]" || ch == "}") {
                        returnType = BRACKET;
                        if (state.indentStack != null && state.indentStack.type == (ch == ")" ? "(" : (ch == "]" ? "[" :"{"))) {
                            popStack(state);
                        }
                    } else if ( ch == ":" ) {
                        stream.eatWhile(tests.symbol);
                        return ATOM;
                    } else {
                        stream.eatWhile(tests.symbol);

                        if (keywords && keywords.propertyIsEnumerable(stream.current())) {
                            returnType = KEYWORD;
                        } else if (builtins && builtins.propertyIsEnumerable(stream.current())) {
                            returnType = BUILTIN;
                        } else if (atoms && atoms.propertyIsEnumerable(stream.current())) {
                            returnType = ATOM;
                        } else {
                          returnType = VAR;
                        }
                    }
            }

            return returnType;
        },

        indent: function (state) {
            if (state.indentStack == null) return state.indentation;
            return state.indentStack.indent;
        },

        closeBrackets: {pairs: "()[]{}\"\""},
        lineComment: ";;"
    };
});

CodeMirror.defineMIME("text/x-clojure", "clojure");
CodeMirror.defineMIME("text/x-clojurescript", "clojure");
CodeMirror.defineMIME("application/edn", "clojure");

});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

var htmlConfig = {
  autoSelfClosers: {'area': true, 'base': true, 'br': true, 'col': true, 'command': true,
                    'embed': true, 'frame': true, 'hr': true, 'img': true, 'input': true,
                    'keygen': true, 'link': true, 'meta': true, 'param': true, 'source': true,
                    'track': true, 'wbr': true, 'menuitem': true},
  implicitlyClosed: {'dd': true, 'li': true, 'optgroup': true, 'option': true, 'p': true,
                     'rp': true, 'rt': true, 'tbody': true, 'td': true, 'tfoot': true,
                     'th': true, 'tr': true},
  contextGrabbers: {
    'dd': {'dd': true, 'dt': true},
    'dt': {'dd': true, 'dt': true},
    'li': {'li': true},
    'option': {'option': true, 'optgroup': true},
    'optgroup': {'optgroup': true},
    'p': {'address': true, 'article': true, 'aside': true, 'blockquote': true, 'dir': true,
          'div': true, 'dl': true, 'fieldset': true, 'footer': true, 'form': true,
          'h1': true, 'h2': true, 'h3': true, 'h4': true, 'h5': true, 'h6': true,
          'header': true, 'hgroup': true, 'hr': true, 'menu': true, 'nav': true, 'ol': true,
          'p': true, 'pre': true, 'section': true, 'table': true, 'ul': true},
    'rp': {'rp': true, 'rt': true},
    'rt': {'rp': true, 'rt': true},
    'tbody': {'tbody': true, 'tfoot': true},
    'td': {'td': true, 'th': true},
    'tfoot': {'tbody': true},
    'th': {'td': true, 'th': true},
    'thead': {'tbody': true, 'tfoot': true},
    'tr': {'tr': true}
  },
  doNotIndent: {"pre": true},
  allowUnquoted: true,
  allowMissing: true,
  caseFold: true
}

var xmlConfig = {
  autoSelfClosers: {},
  implicitlyClosed: {},
  contextGrabbers: {},
  doNotIndent: {},
  allowUnquoted: false,
  allowMissing: false,
  caseFold: false
}

CodeMirror.defineMode("xml", function(editorConf, config_) {
  var indentUnit = editorConf.indentUnit
  var config = {}
  var defaults = config_.htmlMode ? htmlConfig : xmlConfig
  for (var prop in defaults) config[prop] = defaults[prop]
  for (var prop in config_) config[prop] = config_[prop]

  // Return variables for tokenizers
  var type, setStyle;

  function inText(stream, state) {
    function chain(parser) {
      state.tokenize = parser;
      return parser(stream, state);
    }

    var ch = stream.next();
    if (ch == "<") {
      if (stream.eat("!")) {
        if (stream.eat("[")) {
          if (stream.match("CDATA[")) return chain(inBlock("atom", "]]>"));
          else return null;
        } else if (stream.match("--")) {
          return chain(inBlock("comment", "-->"));
        } else if (stream.match("DOCTYPE", true, true)) {
          stream.eatWhile(/[\w\._\-]/);
          return chain(doctype(1));
        } else {
          return null;
        }
      } else if (stream.eat("?")) {
        stream.eatWhile(/[\w\._\-]/);
        state.tokenize = inBlock("meta", "?>");
        return "meta";
      } else {
        type = stream.eat("/") ? "closeTag" : "openTag";
        state.tokenize = inTag;
        return "tag bracket";
      }
    } else if (ch == "&") {
      var ok;
      if (stream.eat("#")) {
        if (stream.eat("x")) {
          ok = stream.eatWhile(/[a-fA-F\d]/) && stream.eat(";");
        } else {
          ok = stream.eatWhile(/[\d]/) && stream.eat(";");
        }
      } else {
        ok = stream.eatWhile(/[\w\.\-:]/) && stream.eat(";");
      }
      return ok ? "atom" : "error";
    } else {
      stream.eatWhile(/[^&<]/);
      return null;
    }
  }
  inText.isInText = true;

  function inTag(stream, state) {
    var ch = stream.next();
    if (ch == ">" || (ch == "/" && stream.eat(">"))) {
      state.tokenize = inText;
      type = ch == ">" ? "endTag" : "selfcloseTag";
      return "tag bracket";
    } else if (ch == "=") {
      type = "equals";
      return null;
    } else if (ch == "<") {
      state.tokenize = inText;
      state.state = baseState;
      state.tagName = state.tagStart = null;
      var next = state.tokenize(stream, state);
      return next ? next + " tag error" : "tag error";
    } else if (/[\'\"]/.test(ch)) {
      state.tokenize = inAttribute(ch);
      state.stringStartCol = stream.column();
      return state.tokenize(stream, state);
    } else {
      stream.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/);
      return "word";
    }
  }

  function inAttribute(quote) {
    var closure = function(stream, state) {
      while (!stream.eol()) {
        if (stream.next() == quote) {
          state.tokenize = inTag;
          break;
        }
      }
      return "string";
    };
    closure.isInAttribute = true;
    return closure;
  }

  function inBlock(style, terminator) {
    return function(stream, state) {
      while (!stream.eol()) {
        if (stream.match(terminator)) {
          state.tokenize = inText;
          break;
        }
        stream.next();
      }
      return style;
    };
  }
  function doctype(depth) {
    return function(stream, state) {
      var ch;
      while ((ch = stream.next()) != null) {
        if (ch == "<") {
          state.tokenize = doctype(depth + 1);
          return state.tokenize(stream, state);
        } else if (ch == ">") {
          if (depth == 1) {
            state.tokenize = inText;
            break;
          } else {
            state.tokenize = doctype(depth - 1);
            return state.tokenize(stream, state);
          }
        }
      }
      return "meta";
    };
  }

  function Context(state, tagName, startOfLine) {
    this.prev = state.context;
    this.tagName = tagName;
    this.indent = state.indented;
    this.startOfLine = startOfLine;
    if (config.doNotIndent.hasOwnProperty(tagName) || (state.context && state.context.noIndent))
      this.noIndent = true;
  }
  function popContext(state) {
    if (state.context) state.context = state.context.prev;
  }
  function maybePopContext(state, nextTagName) {
    var parentTagName;
    while (true) {
      if (!state.context) {
        return;
      }
      parentTagName = state.context.tagName;
      if (!config.contextGrabbers.hasOwnProperty(parentTagName) ||
          !config.contextGrabbers[parentTagName].hasOwnProperty(nextTagName)) {
        return;
      }
      popContext(state);
    }
  }

  function baseState(type, stream, state) {
    if (type == "openTag") {
      state.tagStart = stream.column();
      return tagNameState;
    } else if (type == "closeTag") {
      return closeTagNameState;
    } else {
      return baseState;
    }
  }
  function tagNameState(type, stream, state) {
    if (type == "word") {
      state.tagName = stream.current();
      setStyle = "tag";
      return attrState;
    } else {
      setStyle = "error";
      return tagNameState;
    }
  }
  function closeTagNameState(type, stream, state) {
    if (type == "word") {
      var tagName = stream.current();
      if (state.context && state.context.tagName != tagName &&
          config.implicitlyClosed.hasOwnProperty(state.context.tagName))
        popContext(state);
      if ((state.context && state.context.tagName == tagName) || config.matchClosing === false) {
        setStyle = "tag";
        return closeState;
      } else {
        setStyle = "tag error";
        return closeStateErr;
      }
    } else {
      setStyle = "error";
      return closeStateErr;
    }
  }

  function closeState(type, _stream, state) {
    if (type != "endTag") {
      setStyle = "error";
      return closeState;
    }
    popContext(state);
    return baseState;
  }
  function closeStateErr(type, stream, state) {
    setStyle = "error";
    return closeState(type, stream, state);
  }

  function attrState(type, _stream, state) {
    if (type == "word") {
      setStyle = "attribute";
      return attrEqState;
    } else if (type == "endTag" || type == "selfcloseTag") {
      var tagName = state.tagName, tagStart = state.tagStart;
      state.tagName = state.tagStart = null;
      if (type == "selfcloseTag" ||
          config.autoSelfClosers.hasOwnProperty(tagName)) {
        maybePopContext(state, tagName);
      } else {
        maybePopContext(state, tagName);
        state.context = new Context(state, tagName, tagStart == state.indented);
      }
      return baseState;
    }
    setStyle = "error";
    return attrState;
  }
  function attrEqState(type, stream, state) {
    if (type == "equals") return attrValueState;
    if (!config.allowMissing) setStyle = "error";
    return attrState(type, stream, state);
  }
  function attrValueState(type, stream, state) {
    if (type == "string") return attrContinuedState;
    if (type == "word" && config.allowUnquoted) {setStyle = "string"; return attrState;}
    setStyle = "error";
    return attrState(type, stream, state);
  }
  function attrContinuedState(type, stream, state) {
    if (type == "string") return attrContinuedState;
    return attrState(type, stream, state);
  }

  return {
    startState: function(baseIndent) {
      var state = {tokenize: inText,
                   state: baseState,
                   indented: baseIndent || 0,
                   tagName: null, tagStart: null,
                   context: null}
      if (baseIndent != null) state.baseIndent = baseIndent
      return state
    },

    token: function(stream, state) {
      if (!state.tagName && stream.sol())
        state.indented = stream.indentation();

      if (stream.eatSpace()) return null;
      type = null;
      var style = state.tokenize(stream, state);
      if ((style || type) && style != "comment") {
        setStyle = null;
        state.state = state.state(type || style, stream, state);
        if (setStyle)
          style = setStyle == "error" ? style + " error" : setStyle;
      }
      return style;
    },

    indent: function(state, textAfter, fullLine) {
      var context = state.context;
      // Indent multi-line strings (e.g. css).
      if (state.tokenize.isInAttribute) {
        if (state.tagStart == state.indented)
          return state.stringStartCol + 1;
        else
          return state.indented + indentUnit;
      }
      if (context && context.noIndent) return CodeMirror.Pass;
      if (state.tokenize != inTag && state.tokenize != inText)
        return fullLine ? fullLine.match(/^(\s*)/)[0].length : 0;
      // Indent the starts of attribute names.
      if (state.tagName) {
        if (config.multilineTagIndentPastTag !== false)
          return state.tagStart + state.tagName.length + 2;
        else
          return state.tagStart + indentUnit * (config.multilineTagIndentFactor || 1);
      }
      if (config.alignCDATA && /<!\[CDATA\[/.test(textAfter)) return 0;
      var tagAfter = textAfter && /^<(\/)?([\w_:\.-]*)/.exec(textAfter);
      if (tagAfter && tagAfter[1]) { // Closing tag spotted
        while (context) {
          if (context.tagName == tagAfter[2]) {
            context = context.prev;
            break;
          } else if (config.implicitlyClosed.hasOwnProperty(context.tagName)) {
            context = context.prev;
          } else {
            break;
          }
        }
      } else if (tagAfter) { // Opening tag spotted
        while (context) {
          var grabbers = config.contextGrabbers[context.tagName];
          if (grabbers && grabbers.hasOwnProperty(tagAfter[2]))
            context = context.prev;
          else
            break;
        }
      }
      while (context && context.prev && !context.startOfLine)
        context = context.prev;
      if (context) return context.indent + indentUnit;
      else return state.baseIndent || 0;
    },

    electricInput: /<\/[\s\w:]+>$/,
    blockCommentStart: "<!--",
    blockCommentEnd: "-->",

    configuration: config.htmlMode ? "html" : "xml",
    helperType: config.htmlMode ? "html" : "xml",

    skipAttribute: function(state) {
      if (state.state == attrValueState)
        state.state = attrState
    }
  };
});

CodeMirror.defineMIME("text/xml", "xml");
CodeMirror.defineMIME("application/xml", "xml");
if (!CodeMirror.mimeModes.hasOwnProperty("text/html"))
  CodeMirror.defineMIME("text/html", {name: "xml", htmlMode: true});

});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  var HINT_ELEMENT_CLASS        = "CodeMirror-hint";
  var ACTIVE_HINT_ELEMENT_CLASS = "CodeMirror-hint-active";

  // This is the old interface, kept around for now to stay
  // backwards-compatible.
  CodeMirror.showHint = function(cm, getHints, options) {
    if (!getHints) return cm.showHint(options);
    if (options && options.async) getHints.async = true;
    var newOpts = {hint: getHints};
    if (options) for (var prop in options) newOpts[prop] = options[prop];
    return cm.showHint(newOpts);
  };

  CodeMirror.defineExtension("showHint", function(options) {
    options = parseOptions(this, this.getCursor("start"), options);
    var selections = this.listSelections()
    if (selections.length > 1) return;
    // By default, don't allow completion when something is selected.
    // A hint function can have a `supportsSelection` property to
    // indicate that it can handle selections.
    if (this.somethingSelected()) {
      if (!options.hint.supportsSelection) return;
      // Don't try with cross-line selections
      for (var i = 0; i < selections.length; i++)
        if (selections[i].head.line != selections[i].anchor.line) return;
    }

    if (this.state.completionActive) this.state.completionActive.close();
    var completion = this.state.completionActive = new Completion(this, options);
    if (!completion.options.hint) return;

    CodeMirror.signal(this, "startCompletion", this);
    completion.update(true);
  });

  function Completion(cm, options) {
    this.cm = cm;
    this.options = options;
    this.widget = null;
    this.debounce = 0;
    this.tick = 0;
    this.startPos = this.cm.getCursor("start");
    this.startLen = this.cm.getLine(this.startPos.line).length - this.cm.getSelection().length;

    var self = this;
    cm.on("cursorActivity", this.activityFunc = function() { self.cursorActivity(); });
  }

  var requestAnimationFrame = window.requestAnimationFrame || function(fn) {
    return setTimeout(fn, 1000/60);
  };
  var cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;

  Completion.prototype = {
    close: function() {
      if (!this.active()) return;
      this.cm.state.completionActive = null;
      this.tick = null;
      this.cm.off("cursorActivity", this.activityFunc);

      if (this.widget && this.data) CodeMirror.signal(this.data, "close");
      if (this.widget) this.widget.close();
      CodeMirror.signal(this.cm, "endCompletion", this.cm);
    },

    active: function() {
      return this.cm.state.completionActive == this;
    },

    pick: function(data, i) {
      var completion = data.list[i];
      if (completion.hint) completion.hint(this.cm, data, completion);
      else this.cm.replaceRange(getText(completion), completion.from || data.from,
                                completion.to || data.to, "complete");
      CodeMirror.signal(data, "pick", completion);
      this.close();
    },

    cursorActivity: function() {
      if (this.debounce) {
        cancelAnimationFrame(this.debounce);
        this.debounce = 0;
      }

      var pos = this.cm.getCursor(), line = this.cm.getLine(pos.line);
      if (pos.line != this.startPos.line || line.length - pos.ch != this.startLen - this.startPos.ch ||
          pos.ch < this.startPos.ch || this.cm.somethingSelected() ||
          (pos.ch && this.options.closeCharacters.test(line.charAt(pos.ch - 1)))) {
        this.close();
      } else {
        var self = this;
        this.debounce = requestAnimationFrame(function() {self.update();});
        if (this.widget) this.widget.disable();
      }
    },

    update: function(first) {
      if (this.tick == null) return
      var self = this, myTick = ++this.tick
      fetchHints(this.options.hint, this.cm, this.options, function(data) {
        if (self.tick == myTick) self.finishUpdate(data, first)
      })
    },

    finishUpdate: function(data, first) {
      if (this.data) CodeMirror.signal(this.data, "update");

      var picked = (this.widget && this.widget.picked) || (first && this.options.completeSingle);
      if (this.widget) this.widget.close();

      if (data && this.data && isNewCompletion(this.data, data)) return;
      this.data = data;

      if (data && data.list.length) {
        if (picked && data.list.length == 1) {
          this.pick(data, 0);
        } else {
          this.widget = new Widget(this, data);
          CodeMirror.signal(data, "shown");
        }
      }
    }
  };

  function isNewCompletion(old, nw) {
    var moved = CodeMirror.cmpPos(nw.from, old.from)
    return moved > 0 && old.to.ch - old.from.ch != nw.to.ch - nw.from.ch
  }

  function parseOptions(cm, pos, options) {
    var editor = cm.options.hintOptions;
    var out = {};
    for (var prop in defaultOptions) out[prop] = defaultOptions[prop];
    if (editor) for (var prop in editor)
      if (editor[prop] !== undefined) out[prop] = editor[prop];
    if (options) for (var prop in options)
      if (options[prop] !== undefined) out[prop] = options[prop];
    if (out.hint.resolve) out.hint = out.hint.resolve(cm, pos)
    return out;
  }

  function getText(completion) {
    if (typeof completion == "string") return completion;
    else return completion.text;
  }

  function buildKeyMap(completion, handle) {
    var baseMap = {
      Up: function() {handle.moveFocus(-1);},
      Down: function() {handle.moveFocus(1);},
      PageUp: function() {handle.moveFocus(-handle.menuSize() + 1, true);},
      PageDown: function() {handle.moveFocus(handle.menuSize() - 1, true);},
      Home: function() {handle.setFocus(0);},
      End: function() {handle.setFocus(handle.length - 1);},
      Enter: handle.pick,
      Tab: handle.pick,
      Esc: handle.close
    };
    var custom = completion.options.customKeys;
    var ourMap = custom ? {} : baseMap;
    function addBinding(key, val) {
      var bound;
      if (typeof val != "string")
        bound = function(cm) { return val(cm, handle); };
      // This mechanism is deprecated
      else if (baseMap.hasOwnProperty(val))
        bound = baseMap[val];
      else
        bound = val;
      ourMap[key] = bound;
    }
    if (custom)
      for (var key in custom) if (custom.hasOwnProperty(key))
        addBinding(key, custom[key]);
    var extra = completion.options.extraKeys;
    if (extra)
      for (var key in extra) if (extra.hasOwnProperty(key))
        addBinding(key, extra[key]);
    return ourMap;
  }

  function getHintElement(hintsElement, el) {
    while (el && el != hintsElement) {
      if (el.nodeName.toUpperCase() === "LI" && el.parentNode == hintsElement) return el;
      el = el.parentNode;
    }
  }

  function Widget(completion, data) {
    this.completion = completion;
    this.data = data;
    this.picked = false;
    var widget = this, cm = completion.cm;

    var hints = this.hints = document.createElement("ul");
    hints.className = "CodeMirror-hints";
    this.selectedHint = data.selectedHint || 0;

    var completions = data.list;
    for (var i = 0; i < completions.length; ++i) {
      var elt = hints.appendChild(document.createElement("li")), cur = completions[i];
      var className = HINT_ELEMENT_CLASS + (i != this.selectedHint ? "" : " " + ACTIVE_HINT_ELEMENT_CLASS);
      if (cur.className != null) className = cur.className + " " + className;
      elt.className = className;
      if (cur.render) cur.render(elt, data, cur);
      else elt.appendChild(document.createTextNode(cur.displayText || getText(cur)));
      elt.hintId = i;
    }

    var pos = cm.cursorCoords(completion.options.alignWithWord ? data.from : null);
    var left = pos.left, top = pos.bottom, below = true;
    hints.style.left = left + "px";
    hints.style.top = top + "px";
    // If we're at the edge of the screen, then we want the menu to appear on the left of the cursor.
    var winW = window.innerWidth || Math.max(document.body.offsetWidth, document.documentElement.offsetWidth);
    var winH = window.innerHeight || Math.max(document.body.offsetHeight, document.documentElement.offsetHeight);
    (completion.options.container || document.body).appendChild(hints);
    var box = hints.getBoundingClientRect(), overlapY = box.bottom - winH;
    var scrolls = hints.scrollHeight > hints.clientHeight + 1
    var startScroll = cm.getScrollInfo();

    if (overlapY > 0) {
      var height = box.bottom - box.top, curTop = pos.top - (pos.bottom - box.top);
      if (curTop - height > 0) { // Fits above cursor
        hints.style.top = (top = pos.top - height) + "px";
        below = false;
      } else if (height > winH) {
        hints.style.height = (winH - 5) + "px";
        hints.style.top = (top = pos.bottom - box.top) + "px";
        var cursor = cm.getCursor();
        if (data.from.ch != cursor.ch) {
          pos = cm.cursorCoords(cursor);
          hints.style.left = (left = pos.left) + "px";
          box = hints.getBoundingClientRect();
        }
      }
    }
    var overlapX = box.right - winW;
    if (overlapX > 0) {
      if (box.right - box.left > winW) {
        hints.style.width = (winW - 5) + "px";
        overlapX -= (box.right - box.left) - winW;
      }
      hints.style.left = (left = pos.left - overlapX) + "px";
    }
    if (scrolls) for (var node = hints.firstChild; node; node = node.nextSibling)
      node.style.paddingRight = cm.display.nativeBarWidth + "px"

    cm.addKeyMap(this.keyMap = buildKeyMap(completion, {
      moveFocus: function(n, avoidWrap) { widget.changeActive(widget.selectedHint + n, avoidWrap); },
      setFocus: function(n) { widget.changeActive(n); },
      menuSize: function() { return widget.screenAmount(); },
      length: completions.length,
      close: function() { completion.close(); },
      pick: function() { widget.pick(); },
      data: data
    }));

    if (completion.options.closeOnUnfocus) {
      var closingOnBlur;
      cm.on("blur", this.onBlur = function() { closingOnBlur = setTimeout(function() { completion.close(); }, 100); });
      cm.on("focus", this.onFocus = function() { clearTimeout(closingOnBlur); });
    }

    cm.on("scroll", this.onScroll = function() {
      var curScroll = cm.getScrollInfo(), editor = cm.getWrapperElement().getBoundingClientRect();
      var newTop = top + startScroll.top - curScroll.top;
      var point = newTop - (window.pageYOffset || (document.documentElement || document.body).scrollTop);
      if (!below) point += hints.offsetHeight;
      if (point <= editor.top || point >= editor.bottom) return completion.close();
      hints.style.top = newTop + "px";
      hints.style.left = (left + startScroll.left - curScroll.left) + "px";
    });

    CodeMirror.on(hints, "dblclick", function(e) {
      var t = getHintElement(hints, e.target || e.srcElement);
      if (t && t.hintId != null) {widget.changeActive(t.hintId); widget.pick();}
    });

    CodeMirror.on(hints, "click", function(e) {
      var t = getHintElement(hints, e.target || e.srcElement);
      if (t && t.hintId != null) {
        widget.changeActive(t.hintId);
        if (completion.options.completeOnSingleClick) widget.pick();
      }
    });

    CodeMirror.on(hints, "mousedown", function() {
      setTimeout(function(){cm.focus();}, 20);
    });

    CodeMirror.signal(data, "select", completions[this.selectedHint], hints.childNodes[this.selectedHint]);
    return true;
  }

  Widget.prototype = {
    close: function() {
      if (this.completion.widget != this) return;
      this.completion.widget = null;
      this.hints.parentNode.removeChild(this.hints);
      this.completion.cm.removeKeyMap(this.keyMap);

      var cm = this.completion.cm;
      if (this.completion.options.closeOnUnfocus) {
        cm.off("blur", this.onBlur);
        cm.off("focus", this.onFocus);
      }
      cm.off("scroll", this.onScroll);
    },

    disable: function() {
      this.completion.cm.removeKeyMap(this.keyMap);
      var widget = this;
      this.keyMap = {Enter: function() { widget.picked = true; }};
      this.completion.cm.addKeyMap(this.keyMap);
    },

    pick: function() {
      this.completion.pick(this.data, this.selectedHint);
    },

    changeActive: function(i, avoidWrap) {
      if (i >= this.data.list.length)
        i = avoidWrap ? this.data.list.length - 1 : 0;
      else if (i < 0)
        i = avoidWrap ? 0  : this.data.list.length - 1;
      if (this.selectedHint == i) return;
      var node = this.hints.childNodes[this.selectedHint];
      node.className = node.className.replace(" " + ACTIVE_HINT_ELEMENT_CLASS, "");
      node = this.hints.childNodes[this.selectedHint = i];
      node.className += " " + ACTIVE_HINT_ELEMENT_CLASS;
      if (node.offsetTop < this.hints.scrollTop)
        this.hints.scrollTop = node.offsetTop - 3;
      else if (node.offsetTop + node.offsetHeight > this.hints.scrollTop + this.hints.clientHeight)
        this.hints.scrollTop = node.offsetTop + node.offsetHeight - this.hints.clientHeight + 3;
      CodeMirror.signal(this.data, "select", this.data.list[this.selectedHint], node);
    },

    screenAmount: function() {
      return Math.floor(this.hints.clientHeight / this.hints.firstChild.offsetHeight) || 1;
    }
  };

  function applicableHelpers(cm, helpers) {
    if (!cm.somethingSelected()) return helpers
    var result = []
    for (var i = 0; i < helpers.length; i++)
      if (helpers[i].supportsSelection) result.push(helpers[i])
    return result
  }

  function fetchHints(hint, cm, options, callback) {
    if (hint.async) {
      hint(cm, callback, options)
    } else {
      var result = hint(cm, options)
      if (result && result.then) result.then(callback)
      else callback(result)
    }
  }

  function resolveAutoHints(cm, pos) {
    var helpers = cm.getHelpers(pos, "hint"), words
    if (helpers.length) {
      var resolved = function(cm, callback, options) {
        var app = applicableHelpers(cm, helpers);
        function run(i) {
          if (i == app.length) return callback(null)
          fetchHints(app[i], cm, options, function(result) {
            if (result && result.list.length > 0) callback(result)
            else run(i + 1)
          })
        }
        run(0)
      }
      resolved.async = true
      resolved.supportsSelection = true
      return resolved
    } else if (words = cm.getHelper(cm.getCursor(), "hintWords")) {
      return function(cm) { return CodeMirror.hint.fromList(cm, {words: words}) }
    } else if (CodeMirror.hint.anyword) {
      return function(cm, options) { return CodeMirror.hint.anyword(cm, options) }
    } else {
      return function() {}
    }
  }

  CodeMirror.registerHelper("hint", "auto", {
    resolve: resolveAutoHints
  });

  CodeMirror.registerHelper("hint", "fromList", function(cm, options) {
    var cur = cm.getCursor(), token = cm.getTokenAt(cur);
    var to = CodeMirror.Pos(cur.line, token.end);
    if (token.string && /\w/.test(token.string[token.string.length - 1])) {
      var term = token.string, from = CodeMirror.Pos(cur.line, token.start);
    } else {
      var term = "", from = to;
    }
    var found = [];
    for (var i = 0; i < options.words.length; i++) {
      var word = options.words[i];
      if (word.slice(0, term.length) == term)
        found.push(word);
    }

    if (found.length) return {list: found, from: from, to: to};
  });

  CodeMirror.commands.autocomplete = CodeMirror.showHint;

  var defaultOptions = {
    hint: CodeMirror.hint.auto,
    completeSingle: true,
    alignWithWord: true,
    closeCharacters: /[\s()\[\]{};:>,]/,
    closeOnUnfocus: true,
    completeOnSingleClick: true,
    container: null,
    customKeys: null,
    extraKeys: null
  };

  CodeMirror.defineOption("hintOptions", null);
});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../xml/xml"), require("../meta"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../xml/xml", "../meta"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("markdown", function(cmCfg, modeCfg) {

  var htmlMode = CodeMirror.getMode(cmCfg, "text/html");
  var htmlModeMissing = htmlMode.name == "null"

  function getMode(name) {
    if (CodeMirror.findModeByName) {
      var found = CodeMirror.findModeByName(name);
      if (found) name = found.mime || found.mimes[0];
    }
    var mode = CodeMirror.getMode(cmCfg, name);
    return mode.name == "null" ? null : mode;
  }

  // Should characters that affect highlighting be highlighted separate?
  // Does not include characters that will be output (such as `1.` and `-` for lists)
  if (modeCfg.highlightFormatting === undefined)
    modeCfg.highlightFormatting = false;

  // Maximum number of nested blockquotes. Set to 0 for infinite nesting.
  // Excess `>` will emit `error` token.
  if (modeCfg.maxBlockquoteDepth === undefined)
    modeCfg.maxBlockquoteDepth = 0;

  // Turn on task lists? ("- [ ] " and "- [x] ")
  if (modeCfg.taskLists === undefined) modeCfg.taskLists = false;

  // Turn on strikethrough syntax
  if (modeCfg.strikethrough === undefined)
    modeCfg.strikethrough = false;

  if (modeCfg.emoji === undefined)
    modeCfg.emoji = false;

  if (modeCfg.fencedCodeBlockHighlighting === undefined)
    modeCfg.fencedCodeBlockHighlighting = true;

  if (modeCfg.xml === undefined)
    modeCfg.xml = true;

  // Allow token types to be overridden by user-provided token types.
  if (modeCfg.tokenTypeOverrides === undefined)
    modeCfg.tokenTypeOverrides = {};

  var tokenTypes = {
    header: "header",
    code: "comment",
    quote: "quote",
    list1: "variable-2",
    list2: "variable-3",
    list3: "keyword",
    hr: "hr",
    image: "image",
    imageAltText: "image-alt-text",
    imageMarker: "image-marker",
    formatting: "formatting",
    linkInline: "link",
    linkEmail: "link",
    linkText: "link",
    linkHref: "string",
    em: "em",
    strong: "strong",
    strikethrough: "strikethrough",
    emoji: "builtin"
  };

  for (var tokenType in tokenTypes) {
    if (tokenTypes.hasOwnProperty(tokenType) && modeCfg.tokenTypeOverrides[tokenType]) {
      tokenTypes[tokenType] = modeCfg.tokenTypeOverrides[tokenType];
    }
  }

  var hrRE = /^([*\-_])(?:\s*\1){2,}\s*$/
  ,   listRE = /^(?:[*\-+]|^[0-9]+([.)]))\s+/
  ,   taskListRE = /^\[(x| )\](?=\s)/i // Must follow listRE
  ,   atxHeaderRE = modeCfg.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/
  ,   setextHeaderRE = /^ *(?:\={1,}|-{1,})\s*$/
  ,   textRE = /^[^#!\[\]*_\\<>` "'(~:]+/
  ,   fencedCodeRE = /^(~~~+|```+)[ \t]*([\w+#-]*)[^\n`]*$/
  ,   linkDefRE = /^\s*\[[^\]]+?\]:\s*\S+(\s*\S*\s*)?$/ // naive link-definition
  ,   punctuation = /[!\"#$%&\'()*+,\-\.\/:;<=>?@\[\\\]^_`{|}~—]/
  ,   expandedTab = "    " // CommonMark specifies tab as 4 spaces

  function switchInline(stream, state, f) {
    state.f = state.inline = f;
    return f(stream, state);
  }

  function switchBlock(stream, state, f) {
    state.f = state.block = f;
    return f(stream, state);
  }

  function lineIsEmpty(line) {
    return !line || !/\S/.test(line.string)
  }

  // Blocks

  function blankLine(state) {
    // Reset linkTitle state
    state.linkTitle = false;
    // Reset EM state
    state.em = false;
    // Reset STRONG state
    state.strong = false;
    // Reset strikethrough state
    state.strikethrough = false;
    // Reset state.quote
    state.quote = 0;
    // Reset state.indentedCode
    state.indentedCode = false;
    if (state.f == htmlBlock) {
      state.f = inlineNormal;
      state.block = blockNormal;
    }
    // Reset state.trailingSpace
    state.trailingSpace = 0;
    state.trailingSpaceNewLine = false;
    // Mark this line as blank
    state.prevLine = state.thisLine
    state.thisLine = {stream: null}
    return null;
  }

  function blockNormal(stream, state) {
    var firstTokenOnLine = stream.column() === state.indentation;
    var prevLineLineIsEmpty = lineIsEmpty(state.prevLine.stream);
    var prevLineIsIndentedCode = state.indentedCode;
    var prevLineIsHr = state.prevLine.hr;
    var prevLineIsList = state.list !== false;
    var maxNonCodeIndentation = (state.listStack[state.listStack.length - 1] || 0) + 3;

    state.indentedCode = false;

    var lineIndentation = state.indentation;
    // compute once per line (on first token)
    if (state.indentationDiff === null) {
      state.indentationDiff = state.indentation;
      if (prevLineIsList) {
        state.list = null;
        // While this list item's marker's indentation is less than the deepest
        //  list item's content's indentation,pop the deepest list item
        //  indentation off the stack, and update block indentation state
        while (lineIndentation < state.listStack[state.listStack.length - 1]) {
          state.listStack.pop();
          if (state.listStack.length) {
            state.indentation = state.listStack[state.listStack.length - 1];
          // less than the first list's indent -> the line is no longer a list
          } else {
            state.list = false;
          }
        }
        if (state.list !== false) {
          state.indentationDiff = lineIndentation - state.listStack[state.listStack.length - 1]
        }
      }
    }

    // not comprehensive (currently only for setext detection purposes)
    var allowsInlineContinuation = (
        !prevLineLineIsEmpty && !prevLineIsHr && !state.prevLine.header &&
        (!prevLineIsList || !prevLineIsIndentedCode) &&
        !state.prevLine.fencedCodeEnd
    );

    var isHr = (state.list === false || prevLineIsHr || prevLineLineIsEmpty) &&
      state.indentation <= maxNonCodeIndentation && stream.match(hrRE);

    var match = null;
    if (state.indentationDiff >= 4 && (prevLineIsIndentedCode || state.prevLine.fencedCodeEnd ||
         state.prevLine.header || prevLineLineIsEmpty)) {
      stream.skipToEnd();
      state.indentedCode = true;
      return tokenTypes.code;
    } else if (stream.eatSpace()) {
      return null;
    } else if (firstTokenOnLine && state.indentation <= maxNonCodeIndentation && (match = stream.match(atxHeaderRE)) && match[1].length <= 6) {
      state.quote = 0;
      state.header = match[1].length;
      state.thisLine.header = true;
      if (modeCfg.highlightFormatting) state.formatting = "header";
      state.f = state.inline;
      return getType(state);
    } else if (state.indentation <= maxNonCodeIndentation && stream.eat('>')) {
      state.quote = firstTokenOnLine ? 1 : state.quote + 1;
      if (modeCfg.highlightFormatting) state.formatting = "quote";
      stream.eatSpace();
      return getType(state);
    } else if (!isHr && !state.setext && firstTokenOnLine && state.indentation <= maxNonCodeIndentation && (match = stream.match(listRE))) {
      var listType = match[1] ? "ol" : "ul";

      state.indentation = lineIndentation + stream.current().length;
      state.list = true;
      state.quote = 0;

      // Add this list item's content's indentation to the stack
      state.listStack.push(state.indentation);

      if (modeCfg.taskLists && stream.match(taskListRE, false)) {
        state.taskList = true;
      }
      state.f = state.inline;
      if (modeCfg.highlightFormatting) state.formatting = ["list", "list-" + listType];
      return getType(state);
    } else if (firstTokenOnLine && state.indentation <= maxNonCodeIndentation && (match = stream.match(fencedCodeRE, true))) {
      state.quote = 0;
      state.fencedEndRE = new RegExp(match[1] + "+ *$");
      // try switching mode
      state.localMode = modeCfg.fencedCodeBlockHighlighting && getMode(match[2]);
      if (state.localMode) state.localState = CodeMirror.startState(state.localMode);
      state.f = state.block = local;
      if (modeCfg.highlightFormatting) state.formatting = "code-block";
      state.code = -1
      return getType(state);
    // SETEXT has lowest block-scope precedence after HR, so check it after
    //  the others (code, blockquote, list...)
    } else if (
      // if setext set, indicates line after ---/===
      state.setext || (
        // line before ---/===
        (!allowsInlineContinuation || !prevLineIsList) && !state.quote && state.list === false &&
        !state.code && !isHr && !linkDefRE.test(stream.string) &&
        (match = stream.lookAhead(1)) && (match = match.match(setextHeaderRE))
      )
    ) {
      if ( !state.setext ) {
        state.header = match[0].charAt(0) == '=' ? 1 : 2;
        state.setext = state.header;
      } else {
        state.header = state.setext;
        // has no effect on type so we can reset it now
        state.setext = 0;
        stream.skipToEnd();
        if (modeCfg.highlightFormatting) state.formatting = "header";
      }
      state.thisLine.header = true;
      state.f = state.inline;
      return getType(state);
    } else if (isHr) {
      stream.skipToEnd();
      state.hr = true;
      state.thisLine.hr = true;
      return tokenTypes.hr;
    } else if (stream.peek() === '[') {
      return switchInline(stream, state, footnoteLink);
    }

    return switchInline(stream, state, state.inline);
  }

  function htmlBlock(stream, state) {
    var style = htmlMode.token(stream, state.htmlState);
    if (!htmlModeMissing) {
      var inner = CodeMirror.innerMode(htmlMode, state.htmlState)
      if ((inner.mode.name == "xml" && inner.state.tagStart === null &&
           (!inner.state.context && inner.state.tokenize.isInText)) ||
          (state.md_inside && stream.current().indexOf(">") > -1)) {
        state.f = inlineNormal;
        state.block = blockNormal;
        state.htmlState = null;
      }
    }
    return style;
  }

  function local(stream, state) {
    var currListInd = state.listStack[state.listStack.length - 1] || 0;
    var hasExitedList = state.indentation < currListInd;
    var maxFencedEndInd = currListInd + 3;
    if (state.fencedEndRE && state.indentation <= maxFencedEndInd && (hasExitedList || stream.match(state.fencedEndRE))) {
      if (modeCfg.highlightFormatting) state.formatting = "code-block";
      var returnType;
      if (!hasExitedList) returnType = getType(state)
      state.localMode = state.localState = null;
      state.block = blockNormal;
      state.f = inlineNormal;
      state.fencedEndRE = null;
      state.code = 0
      state.thisLine.fencedCodeEnd = true;
      if (hasExitedList) return switchBlock(stream, state, state.block);
      return returnType;
    } else if (state.localMode) {
      return state.localMode.token(stream, state.localState);
    } else {
      stream.skipToEnd();
      return tokenTypes.code;
    }
  }

  // Inline
  function getType(state) {
    var styles = [];

    if (state.formatting) {
      styles.push(tokenTypes.formatting);

      if (typeof state.formatting === "string") state.formatting = [state.formatting];

      for (var i = 0; i < state.formatting.length; i++) {
        styles.push(tokenTypes.formatting + "-" + state.formatting[i]);

        if (state.formatting[i] === "header") {
          styles.push(tokenTypes.formatting + "-" + state.formatting[i] + "-" + state.header);
        }

        // Add `formatting-quote` and `formatting-quote-#` for blockquotes
        // Add `error` instead if the maximum blockquote nesting depth is passed
        if (state.formatting[i] === "quote") {
          if (!modeCfg.maxBlockquoteDepth || modeCfg.maxBlockquoteDepth >= state.quote) {
            styles.push(tokenTypes.formatting + "-" + state.formatting[i] + "-" + state.quote);
          } else {
            styles.push("error");
          }
        }
      }
    }

    if (state.taskOpen) {
      styles.push("meta");
      return styles.length ? styles.join(' ') : null;
    }
    if (state.taskClosed) {
      styles.push("property");
      return styles.length ? styles.join(' ') : null;
    }

    if (state.linkHref) {
      styles.push(tokenTypes.linkHref, "url");
    } else { // Only apply inline styles to non-url text
      if (state.strong) { styles.push(tokenTypes.strong); }
      if (state.em) { styles.push(tokenTypes.em); }
      if (state.strikethrough) { styles.push(tokenTypes.strikethrough); }
      if (state.emoji) { styles.push(tokenTypes.emoji); }
      if (state.linkText) { styles.push(tokenTypes.linkText); }
      if (state.code) { styles.push(tokenTypes.code); }
      if (state.image) { styles.push(tokenTypes.image); }
      if (state.imageAltText) { styles.push(tokenTypes.imageAltText, "link"); }
      if (state.imageMarker) { styles.push(tokenTypes.imageMarker); }
    }

    if (state.header) { styles.push(tokenTypes.header, tokenTypes.header + "-" + state.header); }

    if (state.quote) {
      styles.push(tokenTypes.quote);

      // Add `quote-#` where the maximum for `#` is modeCfg.maxBlockquoteDepth
      if (!modeCfg.maxBlockquoteDepth || modeCfg.maxBlockquoteDepth >= state.quote) {
        styles.push(tokenTypes.quote + "-" + state.quote);
      } else {
        styles.push(tokenTypes.quote + "-" + modeCfg.maxBlockquoteDepth);
      }
    }

    if (state.list !== false) {
      var listMod = (state.listStack.length - 1) % 3;
      if (!listMod) {
        styles.push(tokenTypes.list1);
      } else if (listMod === 1) {
        styles.push(tokenTypes.list2);
      } else {
        styles.push(tokenTypes.list3);
      }
    }

    if (state.trailingSpaceNewLine) {
      styles.push("trailing-space-new-line");
    } else if (state.trailingSpace) {
      styles.push("trailing-space-" + (state.trailingSpace % 2 ? "a" : "b"));
    }

    return styles.length ? styles.join(' ') : null;
  }

  function handleText(stream, state) {
    if (stream.match(textRE, true)) {
      return getType(state);
    }
    return undefined;
  }

  function inlineNormal(stream, state) {
    var style = state.text(stream, state);
    if (typeof style !== 'undefined')
      return style;

    if (state.list) { // List marker (*, +, -, 1., etc)
      state.list = null;
      return getType(state);
    }

    if (state.taskList) {
      var taskOpen = stream.match(taskListRE, true)[1] === " ";
      if (taskOpen) state.taskOpen = true;
      else state.taskClosed = true;
      if (modeCfg.highlightFormatting) state.formatting = "task";
      state.taskList = false;
      return getType(state);
    }

    state.taskOpen = false;
    state.taskClosed = false;

    if (state.header && stream.match(/^#+$/, true)) {
      if (modeCfg.highlightFormatting) state.formatting = "header";
      return getType(state);
    }

    var ch = stream.next();

    // Matches link titles present on next line
    if (state.linkTitle) {
      state.linkTitle = false;
      var matchCh = ch;
      if (ch === '(') {
        matchCh = ')';
      }
      matchCh = (matchCh+'').replace(/([.?*+^\[\]\\(){}|-])/g, "\\$1");
      var regex = '^\\s*(?:[^' + matchCh + '\\\\]+|\\\\\\\\|\\\\.)' + matchCh;
      if (stream.match(new RegExp(regex), true)) {
        return tokenTypes.linkHref;
      }
    }

    // If this block is changed, it may need to be updated in GFM mode
    if (ch === '`') {
      var previousFormatting = state.formatting;
      if (modeCfg.highlightFormatting) state.formatting = "code";
      stream.eatWhile('`');
      var count = stream.current().length
      if (state.code == 0 && (!state.quote || count == 1)) {
        state.code = count
        return getType(state)
      } else if (count == state.code) { // Must be exact
        var t = getType(state)
        state.code = 0
        return t
      } else {
        state.formatting = previousFormatting
        return getType(state)
      }
    } else if (state.code) {
      return getType(state);
    }

    if (ch === '\\') {
      stream.next();
      if (modeCfg.highlightFormatting) {
        var type = getType(state);
        var formattingEscape = tokenTypes.formatting + "-escape";
        return type ? type + " " + formattingEscape : formattingEscape;
      }
    }

    if (ch === '!' && stream.match(/\[[^\]]*\] ?(?:\(|\[)/, false)) {
      state.imageMarker = true;
      state.image = true;
      if (modeCfg.highlightFormatting) state.formatting = "image";
      return getType(state);
    }

    if (ch === '[' && state.imageMarker && stream.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, false)) {
      state.imageMarker = false;
      state.imageAltText = true
      if (modeCfg.highlightFormatting) state.formatting = "image";
      return getType(state);
    }

    if (ch === ']' && state.imageAltText) {
      if (modeCfg.highlightFormatting) state.formatting = "image";
      var type = getType(state);
      state.imageAltText = false;
      state.image = false;
      state.inline = state.f = linkHref;
      return type;
    }

    if (ch === '[' && !state.image) {
      state.linkText = true;
      if (modeCfg.highlightFormatting) state.formatting = "link";
      return getType(state);
    }

    if (ch === ']' && state.linkText) {
      if (modeCfg.highlightFormatting) state.formatting = "link";
      var type = getType(state);
      state.linkText = false;
      state.inline = state.f = stream.match(/\(.*?\)| ?\[.*?\]/, false) ? linkHref : inlineNormal
      return type;
    }

    if (ch === '<' && stream.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, false)) {
      state.f = state.inline = linkInline;
      if (modeCfg.highlightFormatting) state.formatting = "link";
      var type = getType(state);
      if (type){
        type += " ";
      } else {
        type = "";
      }
      return type + tokenTypes.linkInline;
    }

    if (ch === '<' && stream.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, false)) {
      state.f = state.inline = linkInline;
      if (modeCfg.highlightFormatting) state.formatting = "link";
      var type = getType(state);
      if (type){
        type += " ";
      } else {
        type = "";
      }
      return type + tokenTypes.linkEmail;
    }

    if (modeCfg.xml && ch === '<' && stream.match(/^(!--|[a-z]+(?:\s+[a-z_:.\-]+(?:\s*=\s*[^ >]+)?)*\s*>)/i, false)) {
      var end = stream.string.indexOf(">", stream.pos);
      if (end != -1) {
        var atts = stream.string.substring(stream.start, end);
        if (/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(atts)) state.md_inside = true;
      }
      stream.backUp(1);
      state.htmlState = CodeMirror.startState(htmlMode);
      return switchBlock(stream, state, htmlBlock);
    }

    if (modeCfg.xml && ch === '<' && stream.match(/^\/\w*?>/)) {
      state.md_inside = false;
      return "tag";
    } else if (ch === "*" || ch === "_") {
      var len = 1, before = stream.pos == 1 ? " " : stream.string.charAt(stream.pos - 2)
      while (len < 3 && stream.eat(ch)) len++
      var after = stream.peek() || " "
      // See http://spec.commonmark.org/0.27/#emphasis-and-strong-emphasis
      var leftFlanking = !/\s/.test(after) && (!punctuation.test(after) || /\s/.test(before) || punctuation.test(before))
      var rightFlanking = !/\s/.test(before) && (!punctuation.test(before) || /\s/.test(after) || punctuation.test(after))
      var setEm = null, setStrong = null
      if (len % 2) { // Em
        if (!state.em && leftFlanking && (ch === "*" || !rightFlanking || punctuation.test(before)))
          setEm = true
        else if (state.em == ch && rightFlanking && (ch === "*" || !leftFlanking || punctuation.test(after)))
          setEm = false
      }
      if (len > 1) { // Strong
        if (!state.strong && leftFlanking && (ch === "*" || !rightFlanking || punctuation.test(before)))
          setStrong = true
        else if (state.strong == ch && rightFlanking && (ch === "*" || !leftFlanking || punctuation.test(after)))
          setStrong = false
      }
      if (setStrong != null || setEm != null) {
        if (modeCfg.highlightFormatting) state.formatting = setEm == null ? "strong" : setStrong == null ? "em" : "strong em"
        if (setEm === true) state.em = ch
        if (setStrong === true) state.strong = ch
        var t = getType(state)
        if (setEm === false) state.em = false
        if (setStrong === false) state.strong = false
        return t
      }
    } else if (ch === ' ') {
      if (stream.eat('*') || stream.eat('_')) { // Probably surrounded by spaces
        if (stream.peek() === ' ') { // Surrounded by spaces, ignore
          return getType(state);
        } else { // Not surrounded by spaces, back up pointer
          stream.backUp(1);
        }
      }
    }

    if (modeCfg.strikethrough) {
      if (ch === '~' && stream.eatWhile(ch)) {
        if (state.strikethrough) {// Remove strikethrough
          if (modeCfg.highlightFormatting) state.formatting = "strikethrough";
          var t = getType(state);
          state.strikethrough = false;
          return t;
        } else if (stream.match(/^[^\s]/, false)) {// Add strikethrough
          state.strikethrough = true;
          if (modeCfg.highlightFormatting) state.formatting = "strikethrough";
          return getType(state);
        }
      } else if (ch === ' ') {
        if (stream.match(/^~~/, true)) { // Probably surrounded by space
          if (stream.peek() === ' ') { // Surrounded by spaces, ignore
            return getType(state);
          } else { // Not surrounded by spaces, back up pointer
            stream.backUp(2);
          }
        }
      }
    }

    if (modeCfg.emoji && ch === ":" && stream.match(/^[a-z_\d+-]+:/)) {
      state.emoji = true;
      if (modeCfg.highlightFormatting) state.formatting = "emoji";
      var retType = getType(state);
      state.emoji = false;
      return retType;
    }

    if (ch === ' ') {
      if (stream.match(/ +$/, false)) {
        state.trailingSpace++;
      } else if (state.trailingSpace) {
        state.trailingSpaceNewLine = true;
      }
    }

    return getType(state);
  }

  function linkInline(stream, state) {
    var ch = stream.next();

    if (ch === ">") {
      state.f = state.inline = inlineNormal;
      if (modeCfg.highlightFormatting) state.formatting = "link";
      var type = getType(state);
      if (type){
        type += " ";
      } else {
        type = "";
      }
      return type + tokenTypes.linkInline;
    }

    stream.match(/^[^>]+/, true);

    return tokenTypes.linkInline;
  }

  function linkHref(stream, state) {
    // Check if space, and return NULL if so (to avoid marking the space)
    if(stream.eatSpace()){
      return null;
    }
    var ch = stream.next();
    if (ch === '(' || ch === '[') {
      state.f = state.inline = getLinkHrefInside(ch === "(" ? ")" : "]");
      if (modeCfg.highlightFormatting) state.formatting = "link-string";
      state.linkHref = true;
      return getType(state);
    }
    return 'error';
  }

  var linkRE = {
    ")": /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
    "]": /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/
  }

  function getLinkHrefInside(endChar) {
    return function(stream, state) {
      var ch = stream.next();

      if (ch === endChar) {
        state.f = state.inline = inlineNormal;
        if (modeCfg.highlightFormatting) state.formatting = "link-string";
        var returnState = getType(state);
        state.linkHref = false;
        return returnState;
      }

      stream.match(linkRE[endChar])
      state.linkHref = true;
      return getType(state);
    };
  }

  function footnoteLink(stream, state) {
    if (stream.match(/^([^\]\\]|\\.)*\]:/, false)) {
      state.f = footnoteLinkInside;
      stream.next(); // Consume [
      if (modeCfg.highlightFormatting) state.formatting = "link";
      state.linkText = true;
      return getType(state);
    }
    return switchInline(stream, state, inlineNormal);
  }

  function footnoteLinkInside(stream, state) {
    if (stream.match(/^\]:/, true)) {
      state.f = state.inline = footnoteUrl;
      if (modeCfg.highlightFormatting) state.formatting = "link";
      var returnType = getType(state);
      state.linkText = false;
      return returnType;
    }

    stream.match(/^([^\]\\]|\\.)+/, true);

    return tokenTypes.linkText;
  }

  function footnoteUrl(stream, state) {
    // Check if space, and return NULL if so (to avoid marking the space)
    if(stream.eatSpace()){
      return null;
    }
    // Match URL
    stream.match(/^[^\s]+/, true);
    // Check for link title
    if (stream.peek() === undefined) { // End of line, set flag to check next line
      state.linkTitle = true;
    } else { // More content on line, check if link title
      stream.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, true);
    }
    state.f = state.inline = inlineNormal;
    return tokenTypes.linkHref + " url";
  }

  var mode = {
    startState: function() {
      return {
        f: blockNormal,

        prevLine: {stream: null},
        thisLine: {stream: null},

        block: blockNormal,
        htmlState: null,
        indentation: 0,

        inline: inlineNormal,
        text: handleText,

        formatting: false,
        linkText: false,
        linkHref: false,
        linkTitle: false,
        code: 0,
        em: false,
        strong: false,
        header: 0,
        setext: 0,
        hr: false,
        taskList: false,
        list: false,
        listStack: [],
        quote: 0,
        trailingSpace: 0,
        trailingSpaceNewLine: false,
        strikethrough: false,
        emoji: false,
        fencedEndRE: null
      };
    },

    copyState: function(s) {
      return {
        f: s.f,

        prevLine: s.prevLine,
        thisLine: s.thisLine,

        block: s.block,
        htmlState: s.htmlState && CodeMirror.copyState(htmlMode, s.htmlState),
        indentation: s.indentation,

        localMode: s.localMode,
        localState: s.localMode ? CodeMirror.copyState(s.localMode, s.localState) : null,

        inline: s.inline,
        text: s.text,
        formatting: false,
        linkText: s.linkText,
        linkTitle: s.linkTitle,
        code: s.code,
        em: s.em,
        strong: s.strong,
        strikethrough: s.strikethrough,
        emoji: s.emoji,
        header: s.header,
        setext: s.setext,
        hr: s.hr,
        taskList: s.taskList,
        list: s.list,
        listStack: s.listStack.slice(0),
        quote: s.quote,
        indentedCode: s.indentedCode,
        trailingSpace: s.trailingSpace,
        trailingSpaceNewLine: s.trailingSpaceNewLine,
        md_inside: s.md_inside,
        fencedEndRE: s.fencedEndRE
      };
    },

    token: function(stream, state) {

      // Reset state.formatting
      state.formatting = false;

      if (stream != state.thisLine.stream) {
        state.header = 0;
        state.hr = false;

        if (stream.match(/^\s*$/, true)) {
          blankLine(state);
          return null;
        }

        state.prevLine = state.thisLine
        state.thisLine = {stream: stream}

        // Reset state.taskList
        state.taskList = false;

        // Reset state.trailingSpace
        state.trailingSpace = 0;
        state.trailingSpaceNewLine = false;

        if (!state.localState) {
          state.f = state.block;
          if (state.f != htmlBlock) {
            var indentation = stream.match(/^\s*/, true)[0].replace(/\t/g, expandedTab).length;
            state.indentation = indentation;
            state.indentationDiff = null;
            if (indentation > 0) return null;
          }
        }
      }
      return state.f(stream, state);
    },

    innerMode: function(state) {
      if (state.block == htmlBlock) return {state: state.htmlState, mode: htmlMode};
      if (state.localState) return {state: state.localState, mode: state.localMode};
      return {state: state, mode: mode};
    },

    indent: function(state, textAfter, line) {
      if (state.block == htmlBlock && htmlMode.indent) return htmlMode.indent(state.htmlState, textAfter, line)
      if (state.localState && state.localMode.indent) return state.localMode.indent(state.localState, textAfter, line)
      return CodeMirror.Pass
    },

    blankLine: blankLine,

    getType: getType,

    closeBrackets: "()[]{}''\"\"``",
    fold: "markdown"
  };
  return mode;
}, "xml");

CodeMirror.defineMIME("text/x-markdown", "markdown");

});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  var Pos = CodeMirror.Pos;
  function posEq(a, b) { return a.line == b.line && a.ch == b.ch; }

  // Kill 'ring'

  var killRing = [];
  function addToRing(str) {
    killRing.push(str);
    if (killRing.length > 50) killRing.shift();
  }
  function growRingTop(str) {
    if (!killRing.length) return addToRing(str);
    killRing[killRing.length - 1] += str;
  }
  function getFromRing(n) { return killRing[killRing.length - (n ? Math.min(n, 1) : 1)] || ""; }
  function popFromRing() { if (killRing.length > 1) killRing.pop(); return getFromRing(); }

  var lastKill = null;

  function kill(cm, from, to, mayGrow, text) {
    if (text == null) text = cm.getRange(from, to);

    if (mayGrow && lastKill && lastKill.cm == cm && posEq(from, lastKill.pos) && cm.isClean(lastKill.gen))
      growRingTop(text);
    else
      addToRing(text);
    cm.replaceRange("", from, to, "+delete");

    if (mayGrow) lastKill = {cm: cm, pos: from, gen: cm.changeGeneration()};
    else lastKill = null;
  }

  // Boundaries of various units

  function byChar(cm, pos, dir) {
    return cm.findPosH(pos, dir, "char", true);
  }

  function byWord(cm, pos, dir) {
    return cm.findPosH(pos, dir, "word", true);
  }

  function byLine(cm, pos, dir) {
    return cm.findPosV(pos, dir, "line", cm.doc.sel.goalColumn);
  }

  function byPage(cm, pos, dir) {
    return cm.findPosV(pos, dir, "page", cm.doc.sel.goalColumn);
  }

  function byParagraph(cm, pos, dir) {
    var no = pos.line, line = cm.getLine(no);
    var sawText = /\S/.test(dir < 0 ? line.slice(0, pos.ch) : line.slice(pos.ch));
    var fst = cm.firstLine(), lst = cm.lastLine();
    for (;;) {
      no += dir;
      if (no < fst || no > lst)
        return cm.clipPos(Pos(no - dir, dir < 0 ? 0 : null));
      line = cm.getLine(no);
      var hasText = /\S/.test(line);
      if (hasText) sawText = true;
      else if (sawText) return Pos(no, 0);
    }
  }

  function bySentence(cm, pos, dir) {
    var line = pos.line, ch = pos.ch;
    var text = cm.getLine(pos.line), sawWord = false;
    for (;;) {
      var next = text.charAt(ch + (dir < 0 ? -1 : 0));
      if (!next) { // End/beginning of line reached
        if (line == (dir < 0 ? cm.firstLine() : cm.lastLine())) return Pos(line, ch);
        text = cm.getLine(line + dir);
        if (!/\S/.test(text)) return Pos(line, ch);
        line += dir;
        ch = dir < 0 ? text.length : 0;
        continue;
      }
      if (sawWord && /[!?.]/.test(next)) return Pos(line, ch + (dir > 0 ? 1 : 0));
      if (!sawWord) sawWord = /\w/.test(next);
      ch += dir;
    }
  }

  function byExpr(cm, pos, dir) {
    var wrap;
    if (cm.findMatchingBracket && (wrap = cm.findMatchingBracket(pos, {strict: true}))
        && wrap.match && (wrap.forward ? 1 : -1) == dir)
      return dir > 0 ? Pos(wrap.to.line, wrap.to.ch + 1) : wrap.to;

    for (var first = true;; first = false) {
      var token = cm.getTokenAt(pos);
      var after = Pos(pos.line, dir < 0 ? token.start : token.end);
      if (first && dir > 0 && token.end == pos.ch || !/\w/.test(token.string)) {
        var newPos = cm.findPosH(after, dir, "char");
        if (posEq(after, newPos)) return pos;
        else pos = newPos;
      } else {
        return after;
      }
    }
  }

  // Prefixes (only crudely supported)

  function getPrefix(cm, precise) {
    var digits = cm.state.emacsPrefix;
    if (!digits) return precise ? null : 1;
    clearPrefix(cm);
    return digits == "-" ? -1 : Number(digits);
  }

  function repeated(cmd) {
    var f = typeof cmd == "string" ? function(cm) { cm.execCommand(cmd); } : cmd;
    return function(cm) {
      var prefix = getPrefix(cm);
      f(cm);
      for (var i = 1; i < prefix; ++i) f(cm);
    };
  }

  function findEnd(cm, pos, by, dir) {
    var prefix = getPrefix(cm);
    if (prefix < 0) { dir = -dir; prefix = -prefix; }
    for (var i = 0; i < prefix; ++i) {
      var newPos = by(cm, pos, dir);
      if (posEq(newPos, pos)) break;
      pos = newPos;
    }
    return pos;
  }

  function move(by, dir) {
    var f = function(cm) {
      cm.extendSelection(findEnd(cm, cm.getCursor(), by, dir));
    };
    f.motion = true;
    return f;
  }

  function killTo(cm, by, dir) {
    var selections = cm.listSelections(), cursor;
    var i = selections.length;
    while (i--) {
      cursor = selections[i].head;
      kill(cm, cursor, findEnd(cm, cursor, by, dir), true);
    }
  }

  function killRegion(cm) {
    if (cm.somethingSelected()) {
      var selections = cm.listSelections(), selection;
      var i = selections.length;
      while (i--) {
        selection = selections[i];
        kill(cm, selection.anchor, selection.head);
      }
      return true;
    }
  }

  function addPrefix(cm, digit) {
    if (cm.state.emacsPrefix) {
      if (digit != "-") cm.state.emacsPrefix += digit;
      return;
    }
    // Not active yet
    cm.state.emacsPrefix = digit;
    cm.on("keyHandled", maybeClearPrefix);
    cm.on("inputRead", maybeDuplicateInput);
  }

  var prefixPreservingKeys = {"Alt-G": true, "Ctrl-X": true, "Ctrl-Q": true, "Ctrl-U": true};

  function maybeClearPrefix(cm, arg) {
    if (!cm.state.emacsPrefixMap && !prefixPreservingKeys.hasOwnProperty(arg))
      clearPrefix(cm);
  }

  function clearPrefix(cm) {
    cm.state.emacsPrefix = null;
    cm.off("keyHandled", maybeClearPrefix);
    cm.off("inputRead", maybeDuplicateInput);
  }

  function maybeDuplicateInput(cm, event) {
    var dup = getPrefix(cm);
    if (dup > 1 && event.origin == "+input") {
      var one = event.text.join("\n"), txt = "";
      for (var i = 1; i < dup; ++i) txt += one;
      cm.replaceSelection(txt);
    }
  }

  function addPrefixMap(cm) {
    cm.state.emacsPrefixMap = true;
    cm.addKeyMap(prefixMap);
    cm.on("keyHandled", maybeRemovePrefixMap);
    cm.on("inputRead", maybeRemovePrefixMap);
  }

  function maybeRemovePrefixMap(cm, arg) {
    if (typeof arg == "string" && (/^\d$/.test(arg) || arg == "Ctrl-U")) return;
    cm.removeKeyMap(prefixMap);
    cm.state.emacsPrefixMap = false;
    cm.off("keyHandled", maybeRemovePrefixMap);
    cm.off("inputRead", maybeRemovePrefixMap);
  }

  // Utilities

  function setMark(cm) {
    cm.setCursor(cm.getCursor());
    cm.setExtending(!cm.getExtending());
    cm.on("change", function() { cm.setExtending(false); });
  }

  function clearMark(cm) {
    cm.setExtending(false);
    cm.setCursor(cm.getCursor());
  }

  function getInput(cm, msg, f) {
    if (cm.openDialog)
      cm.openDialog(msg + ": <input type=\"text\" style=\"width: 10em\"/>", f, {bottom: true});
    else
      f(prompt(msg, ""));
  }

  function operateOnWord(cm, op) {
    var start = cm.getCursor(), end = cm.findPosH(start, 1, "word");
    cm.replaceRange(op(cm.getRange(start, end)), start, end);
    cm.setCursor(end);
  }

  function toEnclosingExpr(cm) {
    var pos = cm.getCursor(), line = pos.line, ch = pos.ch;
    var stack = [];
    while (line >= cm.firstLine()) {
      var text = cm.getLine(line);
      for (var i = ch == null ? text.length : ch; i > 0;) {
        var ch = text.charAt(--i);
        if (ch == ")")
          stack.push("(");
        else if (ch == "]")
          stack.push("[");
        else if (ch == "}")
          stack.push("{");
        else if (/[\(\{\[]/.test(ch) && (!stack.length || stack.pop() != ch))
          return cm.extendSelection(Pos(line, i));
      }
      --line; ch = null;
    }
  }

  function quit(cm) {
    cm.execCommand("clearSearch");
    clearMark(cm);
  }

  CodeMirror.emacs = {kill: kill, killRegion: killRegion, repeated: repeated};

  // Actual keymap

  var keyMap = CodeMirror.keyMap.emacs = CodeMirror.normalizeKeyMap({
    "Ctrl-W": function(cm) {kill(cm, cm.getCursor("start"), cm.getCursor("end"));},
    "Ctrl-K": repeated(function(cm) {
      var start = cm.getCursor(), end = cm.clipPos(Pos(start.line));
      var text = cm.getRange(start, end);
      if (!/\S/.test(text)) {
        text += "\n";
        end = Pos(start.line + 1, 0);
      }
      kill(cm, start, end, true, text);
    }),
    "Alt-W": function(cm) {
      addToRing(cm.getSelection());
      clearMark(cm);
    },
    "Ctrl-Y": function(cm) {
      var start = cm.getCursor();
      cm.replaceRange(getFromRing(getPrefix(cm)), start, start, "paste");
      cm.setSelection(start, cm.getCursor());
    },
    "Alt-Y": function(cm) {cm.replaceSelection(popFromRing(), "around", "paste");},

    "Ctrl-Space": setMark, "Ctrl-Shift-2": setMark,

    "Ctrl-F": move(byChar, 1), "Ctrl-B": move(byChar, -1),
    "Right": move(byChar, 1), "Left": move(byChar, -1),
    "Ctrl-D": function(cm) { killTo(cm, byChar, 1); },
    "Delete": function(cm) { killRegion(cm) || killTo(cm, byChar, 1); },
    "Ctrl-H": function(cm) { killTo(cm, byChar, -1); },
    "Backspace": function(cm) { killRegion(cm) || killTo(cm, byChar, -1); },

    "Alt-F": move(byWord, 1), "Alt-B": move(byWord, -1),
    "Alt-D": function(cm) { killTo(cm, byWord, 1); },
    "Alt-Backspace": function(cm) { killTo(cm, byWord, -1); },

    "Ctrl-N": move(byLine, 1), "Ctrl-P": move(byLine, -1),
    "Down": move(byLine, 1), "Up": move(byLine, -1),
    "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
    "End": "goLineEnd", "Home": "goLineStart",

    "Alt-V": move(byPage, -1), "Ctrl-V": move(byPage, 1),
    "PageUp": move(byPage, -1), "PageDown": move(byPage, 1),

    "Ctrl-Up": move(byParagraph, -1), "Ctrl-Down": move(byParagraph, 1),

    "Alt-A": move(bySentence, -1), "Alt-E": move(bySentence, 1),
    "Alt-K": function(cm) { killTo(cm, bySentence, 1); },

    "Ctrl-Alt-K": function(cm) { killTo(cm, byExpr, 1); },
    "Ctrl-Alt-Backspace": function(cm) { killTo(cm, byExpr, -1); },
    "Ctrl-Alt-F": move(byExpr, 1), "Ctrl-Alt-B": move(byExpr, -1),

    "Shift-Ctrl-Alt-2": function(cm) {
      var cursor = cm.getCursor();
      cm.setSelection(findEnd(cm, cursor, byExpr, 1), cursor);
    },
    "Ctrl-Alt-T": function(cm) {
      var leftStart = byExpr(cm, cm.getCursor(), -1), leftEnd = byExpr(cm, leftStart, 1);
      var rightEnd = byExpr(cm, leftEnd, 1), rightStart = byExpr(cm, rightEnd, -1);
      cm.replaceRange(cm.getRange(rightStart, rightEnd) + cm.getRange(leftEnd, rightStart) +
                      cm.getRange(leftStart, leftEnd), leftStart, rightEnd);
    },
    "Ctrl-Alt-U": repeated(toEnclosingExpr),

    "Alt-Space": function(cm) {
      var pos = cm.getCursor(), from = pos.ch, to = pos.ch, text = cm.getLine(pos.line);
      while (from && /\s/.test(text.charAt(from - 1))) --from;
      while (to < text.length && /\s/.test(text.charAt(to))) ++to;
      cm.replaceRange(" ", Pos(pos.line, from), Pos(pos.line, to));
    },
    "Ctrl-O": repeated(function(cm) { cm.replaceSelection("\n", "start"); }),
    "Ctrl-T": repeated(function(cm) {
      cm.execCommand("transposeChars");
    }),

    "Alt-C": repeated(function(cm) {
      operateOnWord(cm, function(w) {
        var letter = w.search(/\w/);
        if (letter == -1) return w;
        return w.slice(0, letter) + w.charAt(letter).toUpperCase() + w.slice(letter + 1).toLowerCase();
      });
    }),
    "Alt-U": repeated(function(cm) {
      operateOnWord(cm, function(w) { return w.toUpperCase(); });
    }),
    "Alt-L": repeated(function(cm) {
      operateOnWord(cm, function(w) { return w.toLowerCase(); });
    }),

    "Alt-;": "toggleComment",

    "Ctrl-/": repeated("undo"), "Shift-Ctrl--": repeated("undo"),
    "Ctrl-Z": repeated("undo"), "Cmd-Z": repeated("undo"),
    "Shift-Alt-,": "goDocStart", "Shift-Alt-.": "goDocEnd",
    "Ctrl-S": "findPersistentNext", "Ctrl-R": "findPersistentPrev", "Ctrl-G": quit, "Shift-Alt-5": "replace",
    "Alt-/": "autocomplete",
    "Enter": "newlineAndIndent",
    "Ctrl-J": repeated(function(cm) { cm.replaceSelection("\n", "end"); }),
    "Tab": "indentAuto",

    "Alt-G G": function(cm) {
      var prefix = getPrefix(cm, true);
      if (prefix != null && prefix > 0) return cm.setCursor(prefix - 1);

      getInput(cm, "Goto line", function(str) {
        var num;
        if (str && !isNaN(num = Number(str)) && num == (num|0) && num > 0)
          cm.setCursor(num - 1);
      });
    },

    "Ctrl-X Tab": function(cm) {
      cm.indentSelection(getPrefix(cm, true) || cm.getOption("indentUnit"));
    },
    "Ctrl-X Ctrl-X": function(cm) {
      cm.setSelection(cm.getCursor("head"), cm.getCursor("anchor"));
    },
    "Ctrl-X Ctrl-S": "save",
    "Ctrl-X Ctrl-W": "save",
    "Ctrl-X S": "saveAll",
    "Ctrl-X F": "open",
    "Ctrl-X U": repeated("undo"),
    "Ctrl-X K": "close",
    "Ctrl-X Delete": function(cm) { kill(cm, cm.getCursor(), bySentence(cm, cm.getCursor(), 1), true); },
    "Ctrl-X H": "selectAll",

    "Ctrl-Q Tab": repeated("insertTab"),
    "Ctrl-U": addPrefixMap
  });

  var prefixMap = {"Ctrl-G": clearPrefix};
  function regPrefix(d) {
    prefixMap[d] = function(cm) { addPrefix(cm, d); };
    keyMap["Ctrl-" + d] = function(cm) { addPrefix(cm, d); };
    prefixPreservingKeys["Ctrl-" + d] = true;
  }
  for (var i = 0; i < 10; ++i) regPrefix(String(i));
  regPrefix("-");
});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  var ie_lt8 = /MSIE \d/.test(navigator.userAgent) &&
    (document.documentMode == null || document.documentMode < 8);

  var Pos = CodeMirror.Pos;

  var matching = {"(": ")>", ")": "(<", "[": "]>", "]": "[<", "{": "}>", "}": "{<"};

  function findMatchingBracket(cm, where, config) {
    var line = cm.getLineHandle(where.line), pos = where.ch - 1;
    var afterCursor = config && config.afterCursor
    if (afterCursor == null)
      afterCursor = /(^| )cm-fat-cursor($| )/.test(cm.getWrapperElement().className)

    // A cursor is defined as between two characters, but in in vim command mode
    // (i.e. not insert mode), the cursor is visually represented as a
    // highlighted box on top of the 2nd character. Otherwise, we allow matches
    // from before or after the cursor.
    var match = (!afterCursor && pos >= 0 && matching[line.text.charAt(pos)]) ||
        matching[line.text.charAt(++pos)];
    if (!match) return null;
    var dir = match.charAt(1) == ">" ? 1 : -1;
    if (config && config.strict && (dir > 0) != (pos == where.ch)) return null;
    var style = cm.getTokenTypeAt(Pos(where.line, pos + 1));

    var found = scanForBracket(cm, Pos(where.line, pos + (dir > 0 ? 1 : 0)), dir, style || null, config);
    if (found == null) return null;
    return {from: Pos(where.line, pos), to: found && found.pos,
            match: found && found.ch == match.charAt(0), forward: dir > 0};
  }

  // bracketRegex is used to specify which type of bracket to scan
  // should be a regexp, e.g. /[[\]]/
  //
  // Note: If "where" is on an open bracket, then this bracket is ignored.
  //
  // Returns false when no bracket was found, null when it reached
  // maxScanLines and gave up
  function scanForBracket(cm, where, dir, style, config) {
    var maxScanLen = (config && config.maxScanLineLength) || 10000;
    var maxScanLines = (config && config.maxScanLines) || 1000;

    var stack = [];
    var re = config && config.bracketRegex ? config.bracketRegex : /[(){}[\]]/;
    var lineEnd = dir > 0 ? Math.min(where.line + maxScanLines, cm.lastLine() + 1)
                          : Math.max(cm.firstLine() - 1, where.line - maxScanLines);
    for (var lineNo = where.line; lineNo != lineEnd; lineNo += dir) {
      var line = cm.getLine(lineNo);
      if (!line) continue;
      var pos = dir > 0 ? 0 : line.length - 1, end = dir > 0 ? line.length : -1;
      if (line.length > maxScanLen) continue;
      if (lineNo == where.line) pos = where.ch - (dir < 0 ? 1 : 0);
      for (; pos != end; pos += dir) {
        var ch = line.charAt(pos);
        if (re.test(ch) && (style === undefined || cm.getTokenTypeAt(Pos(lineNo, pos + 1)) == style)) {
          var match = matching[ch];
          if ((match.charAt(1) == ">") == (dir > 0)) stack.push(ch);
          else if (!stack.length) return {pos: Pos(lineNo, pos), ch: ch};
          else stack.pop();
        }
      }
    }
    return lineNo - dir == (dir > 0 ? cm.lastLine() : cm.firstLine()) ? false : null;
  }

  function matchBrackets(cm, autoclear, config) {
    // Disable brace matching in long lines, since it'll cause hugely slow updates
    var maxHighlightLen = cm.state.matchBrackets.maxHighlightLineLength || 1000;
    var marks = [], ranges = cm.listSelections();
    for (var i = 0; i < ranges.length; i++) {
      var match = ranges[i].empty() && findMatchingBracket(cm, ranges[i].head, config);
      if (match && cm.getLine(match.from.line).length <= maxHighlightLen) {
        var style = match.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket";
        marks.push(cm.markText(match.from, Pos(match.from.line, match.from.ch + 1), {className: style}));
        if (match.to && cm.getLine(match.to.line).length <= maxHighlightLen)
          marks.push(cm.markText(match.to, Pos(match.to.line, match.to.ch + 1), {className: style}));
      }
    }

    if (marks.length) {
      // Kludge to work around the IE bug from issue #1193, where text
      // input stops going to the textare whever this fires.
      if (ie_lt8 && cm.state.focused) cm.focus();

      var clear = function() {
        cm.operation(function() {
          for (var i = 0; i < marks.length; i++) marks[i].clear();
        });
      };
      if (autoclear) setTimeout(clear, 800);
      else return clear;
    }
  }

  var currentlyHighlighted = null;
  function doMatchBrackets(cm) {
    cm.operation(function() {
      if (currentlyHighlighted) {currentlyHighlighted(); currentlyHighlighted = null;}
      currentlyHighlighted = matchBrackets(cm, false, cm.state.matchBrackets);
    });
  }

  CodeMirror.defineOption("matchBrackets", false, function(cm, val, old) {
    if (old && old != CodeMirror.Init) {
      cm.off("cursorActivity", doMatchBrackets);
      if (currentlyHighlighted) {currentlyHighlighted(); currentlyHighlighted = null;}
    }
    if (val) {
      cm.state.matchBrackets = typeof val == "object" ? val : {};
      cm.on("cursorActivity", doMatchBrackets);
    }
  });

  CodeMirror.defineExtension("matchBrackets", function() {matchBrackets(this, true);});
  CodeMirror.defineExtension("findMatchingBracket", function(pos, config, oldConfig){
    // Backwards-compatibility kludge
    if (oldConfig || typeof config == "boolean") {
      if (!oldConfig) {
        config = config ? {strict: true} : null
      } else {
        oldConfig.strict = config
        config = oldConfig
      }
    }
    return findMatchingBracket(this, pos, config)
  });
  CodeMirror.defineExtension("scanForBracket", function(pos, dir, style, config){
    return scanForBracket(this, pos, dir, style, config);
  });
});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  var defaults = {
    pairs: "()[]{}''\"\"",
    triples: "",
    explode: "[]{}"
  };

  var Pos = CodeMirror.Pos;

  CodeMirror.defineOption("autoCloseBrackets", false, function(cm, val, old) {
    if (old && old != CodeMirror.Init) {
      cm.removeKeyMap(keyMap);
      cm.state.closeBrackets = null;
    }
    if (val) {
      ensureBound(getOption(val, "pairs"))
      cm.state.closeBrackets = val;
      cm.addKeyMap(keyMap);
    }
  });

  function getOption(conf, name) {
    if (name == "pairs" && typeof conf == "string") return conf;
    if (typeof conf == "object" && conf[name] != null) return conf[name];
    return defaults[name];
  }

  var keyMap = {Backspace: handleBackspace, Enter: handleEnter};
  function ensureBound(chars) {
    for (var i = 0; i < chars.length; i++) {
      var ch = chars.charAt(i), key = "'" + ch + "'"
      if (!keyMap[key]) keyMap[key] = handler(ch)
    }
  }
  ensureBound(defaults.pairs + "`")

  function handler(ch) {
    return function(cm) { return handleChar(cm, ch); };
  }

  function getConfig(cm) {
    var deflt = cm.state.closeBrackets;
    if (!deflt || deflt.override) return deflt;
    var mode = cm.getModeAt(cm.getCursor());
    return mode.closeBrackets || deflt;
  }

  function handleBackspace(cm) {
    var conf = getConfig(cm);
    if (!conf || cm.getOption("disableInput")) return CodeMirror.Pass;

    var pairs = getOption(conf, "pairs");
    var ranges = cm.listSelections();
    for (var i = 0; i < ranges.length; i++) {
      if (!ranges[i].empty()) return CodeMirror.Pass;
      var around = charsAround(cm, ranges[i].head);
      if (!around || pairs.indexOf(around) % 2 != 0) return CodeMirror.Pass;
    }
    for (var i = ranges.length - 1; i >= 0; i--) {
      var cur = ranges[i].head;
      cm.replaceRange("", Pos(cur.line, cur.ch - 1), Pos(cur.line, cur.ch + 1), "+delete");
    }
  }

  function handleEnter(cm) {
    var conf = getConfig(cm);
    var explode = conf && getOption(conf, "explode");
    if (!explode || cm.getOption("disableInput")) return CodeMirror.Pass;

    var ranges = cm.listSelections();
    for (var i = 0; i < ranges.length; i++) {
      if (!ranges[i].empty()) return CodeMirror.Pass;
      var around = charsAround(cm, ranges[i].head);
      if (!around || explode.indexOf(around) % 2 != 0) return CodeMirror.Pass;
    }
    cm.operation(function() {
      var linesep = cm.lineSeparator() || "\n";
      cm.replaceSelection(linesep + linesep, null);
      cm.execCommand("goCharLeft");
      ranges = cm.listSelections();
      for (var i = 0; i < ranges.length; i++) {
        var line = ranges[i].head.line;
        cm.indentLine(line, null, true);
        cm.indentLine(line + 1, null, true);
      }
    });
  }

  function contractSelection(sel) {
    var inverted = CodeMirror.cmpPos(sel.anchor, sel.head) > 0;
    return {anchor: new Pos(sel.anchor.line, sel.anchor.ch + (inverted ? -1 : 1)),
            head: new Pos(sel.head.line, sel.head.ch + (inverted ? 1 : -1))};
  }

  function handleChar(cm, ch) {
    var conf = getConfig(cm);
    if (!conf || cm.getOption("disableInput")) return CodeMirror.Pass;

    var pairs = getOption(conf, "pairs");
    var pos = pairs.indexOf(ch);
    if (pos == -1) return CodeMirror.Pass;
    var triples = getOption(conf, "triples");

    var identical = pairs.charAt(pos + 1) == ch;
    var ranges = cm.listSelections();
    var opening = pos % 2 == 0;

    var type;
    for (var i = 0; i < ranges.length; i++) {
      var range = ranges[i], cur = range.head, curType;
      var next = cm.getRange(cur, Pos(cur.line, cur.ch + 1));
      if (opening && !range.empty()) {
        curType = "surround";
      } else if ((identical || !opening) && next == ch) {
        if (identical && stringStartsAfter(cm, cur))
          curType = "both";
        else if (triples.indexOf(ch) >= 0 && cm.getRange(cur, Pos(cur.line, cur.ch + 3)) == ch + ch + ch)
          curType = "skipThree";
        else
          curType = "skip";
      } else if (identical && cur.ch > 1 && triples.indexOf(ch) >= 0 &&
                 cm.getRange(Pos(cur.line, cur.ch - 2), cur) == ch + ch &&
                 (cur.ch <= 2 || cm.getRange(Pos(cur.line, cur.ch - 3), Pos(cur.line, cur.ch - 2)) != ch)) {
        curType = "addFour";
      } else if (identical) {
        if (!CodeMirror.isWordChar(next) && enteringString(cm, cur, ch)) curType = "both";
        else return CodeMirror.Pass;
      } else if (opening && (cm.getLine(cur.line).length == cur.ch ||
                             isClosingBracket(next, pairs) ||
                             /\s/.test(next))) {
        curType = "both";
      } else {
        return CodeMirror.Pass;
      }
      if (!type) type = curType;
      else if (type != curType) return CodeMirror.Pass;
    }

    var left = pos % 2 ? pairs.charAt(pos - 1) : ch;
    var right = pos % 2 ? ch : pairs.charAt(pos + 1);
    cm.operation(function() {
      if (type == "skip") {
        cm.execCommand("goCharRight");
      } else if (type == "skipThree") {
        for (var i = 0; i < 3; i++)
          cm.execCommand("goCharRight");
      } else if (type == "surround") {
        var sels = cm.getSelections();
        for (var i = 0; i < sels.length; i++)
          sels[i] = left + sels[i] + right;
        cm.replaceSelections(sels, "around");
        sels = cm.listSelections().slice();
        for (var i = 0; i < sels.length; i++)
          sels[i] = contractSelection(sels[i]);
        cm.setSelections(sels);
      } else if (type == "both") {
        cm.replaceSelection(left + right, null);
        cm.triggerElectric(left + right);
        cm.execCommand("goCharLeft");
      } else if (type == "addFour") {
        cm.replaceSelection(left + left + left + left, "before");
        cm.execCommand("goCharRight");
      }
    });
  }

  function isClosingBracket(ch, pairs) {
    var pos = pairs.lastIndexOf(ch);
    return pos > -1 && pos % 2 == 1;
  }

  function charsAround(cm, pos) {
    var str = cm.getRange(Pos(pos.line, pos.ch - 1),
                          Pos(pos.line, pos.ch + 1));
    return str.length == 2 ? str : null;
  }

  // Project the token type that will exists after the given char is
  // typed, and use it to determine whether it would cause the start
  // of a string token.
  function enteringString(cm, pos, ch) {
    var line = cm.getLine(pos.line);
    var token = cm.getTokenAt(pos);
    if (/\bstring2?\b/.test(token.type) || stringStartsAfter(cm, pos)) return false;
    var stream = new CodeMirror.StringStream(line.slice(0, pos.ch) + ch + line.slice(pos.ch), 4);
    stream.pos = stream.start = token.start;
    for (;;) {
      var type1 = cm.getMode().token(stream, token.state);
      if (stream.pos >= pos.ch + 1) return /\bstring2?\b/.test(type1);
      stream.start = stream.pos;
    }
  }

  function stringStartsAfter(cm, pos) {
    var token = cm.getTokenAt(Pos(pos.line, pos.ch + 1))
    return /\bstring/.test(token.type) && token.start == pos.ch
  }
});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.runMode = function(string, modespec, callback, options) {
  var mode = CodeMirror.getMode(CodeMirror.defaults, modespec);
  var ie = /MSIE \d/.test(navigator.userAgent);
  var ie_lt9 = ie && (document.documentMode == null || document.documentMode < 9);

  if (callback.appendChild) {
    var tabSize = (options && options.tabSize) || CodeMirror.defaults.tabSize;
    var node = callback, col = 0;
    node.innerHTML = "";
    callback = function(text, style) {
      if (text == "\n") {
        // Emitting LF or CRLF on IE8 or earlier results in an incorrect display.
        // Emitting a carriage return makes everything ok.
        node.appendChild(document.createTextNode(ie_lt9 ? '\r' : text));
        col = 0;
        return;
      }
      var content = "";
      // replace tabs
      for (var pos = 0;;) {
        var idx = text.indexOf("\t", pos);
        if (idx == -1) {
          content += text.slice(pos);
          col += text.length - pos;
          break;
        } else {
          col += idx - pos;
          content += text.slice(pos, idx);
          var size = tabSize - col % tabSize;
          col += size;
          for (var i = 0; i < size; ++i) content += " ";
          pos = idx + 1;
        }
      }

      if (style) {
        var sp = node.appendChild(document.createElement("span"));
        sp.className = "cm-" + style.replace(/ +/g, " cm-");
        sp.appendChild(document.createTextNode(content));
      } else {
        node.appendChild(document.createTextNode(content));
      }
    };
  }

  var lines = CodeMirror.splitLines(string), state = (options && options.state) || CodeMirror.startState(mode);
  for (var i = 0, e = lines.length; i < e; ++i) {
    if (i) callback("\n");
    var stream = new CodeMirror.StringStream(lines[i]);
    if (!stream.string && mode.blankLine) mode.blankLine(state);
    while (!stream.eol()) {
      var style = mode.token(stream, state);
      callback(stream.current(), style, i, stream.start, state);
      stream.start = stream.pos;
    }
  }
};

});

;(function(){
var g,aa=this;
function l(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}var ba="closure_uid_"+(1E9*Math.random()>>>0),ca=0;function q(a,b){a=a.split(".");var c=aa;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c=c[d]&&c[d]!==Object.prototype[d]?c[d]:c[d]={}:c[d]=b};function da(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};function ea(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};function fa(a,b){this.K=[];this.M=b;for(var c=!0,d=a.length-1;0<=d;d--){var e=a[d]|0;c&&e==b||(this.K[d]=e,c=!1)}}var ia={};function ja(a){if(-128<=a&&128>a){var b=ia[a];if(b)return b}b=new fa([a|0],0>a?-1:0);-128<=a&&128>a&&(ia[a]=b);return b}function ka(a){if(isNaN(a)||!isFinite(a))return la;if(0>a)return na(ka(-a));for(var b=[],c=1,d=0;a>=c;d++)b[d]=a/c|0,c*=oa;return new fa(b,0)}var oa=4294967296,la=ja(0),pa=ja(1),qa=ja(16777216);
function ra(a){if(-1==a.M)return-ra(na(a));for(var b=0,c=1,d=0;d<a.K.length;d++){var e=sa(a,d);b+=(0<=e?e:oa+e)*c;c*=oa}return b}g=fa.prototype;g.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(ua(this))return"0";if(-1==this.M)return"-"+na(this).toString(a);for(var b=ka(Math.pow(a,6)),c=this,d="";;){var e=wa(c,b),f=e.multiply(b);c=c.add(na(f));f=((0<c.K.length?c.K[0]:c.M)>>>0).toString(a);c=e;if(ua(c))return f+d;for(;6>f.length;)f="0"+f;d=""+f+d}};
function sa(a,b){return 0>b?0:b<a.K.length?a.K[b]:a.M}function ua(a){if(0!=a.M)return!1;for(var b=0;b<a.K.length;b++)if(0!=a.K[b])return!1;return!0}g.compare=function(a){a=this.add(na(a));return-1==a.M?-1:ua(a)?0:1};function na(a){for(var b=a.K.length,c=[],d=0;d<b;d++)c[d]=~a.K[d];return(new fa(c,~a.M)).add(pa)}
g.add=function(a){for(var b=Math.max(this.K.length,a.K.length),c=[],d=0,e=0;e<=b;e++){var f=d+(sa(this,e)&65535)+(sa(a,e)&65535),h=(f>>>16)+(sa(this,e)>>>16)+(sa(a,e)>>>16);d=h>>>16;f&=65535;h&=65535;c[e]=h<<16|f}return new fa(c,c[c.length-1]&-2147483648?-1:0)};
g.multiply=function(a){if(ua(this)||ua(a))return la;if(-1==this.M)return-1==a.M?na(this).multiply(na(a)):na(na(this).multiply(a));if(-1==a.M)return na(this.multiply(na(a)));if(0>this.compare(qa)&&0>a.compare(qa))return ka(ra(this)*ra(a));for(var b=this.K.length+a.K.length,c=[],d=0;d<2*b;d++)c[d]=0;for(d=0;d<this.K.length;d++)for(var e=0;e<a.K.length;e++){var f=sa(this,d)>>>16,h=sa(this,d)&65535,k=sa(a,e)>>>16,m=sa(a,e)&65535;c[2*d+2*e]+=h*m;xa(c,2*d+2*e);c[2*d+2*e+1]+=f*m;xa(c,2*d+2*e+1);c[2*d+2*
e+1]+=h*k;xa(c,2*d+2*e+1);c[2*d+2*e+2]+=f*k;xa(c,2*d+2*e+2)}for(d=0;d<b;d++)c[d]=c[2*d+1]<<16|c[2*d];for(d=b;d<2*b;d++)c[d]=0;return new fa(c,0)};function xa(a,b){for(;(a[b]&65535)!=a[b];)a[b+1]+=a[b]>>>16,a[b]&=65535,b++}
function wa(a,b){if(ua(b))throw Error("division by zero");if(ua(a))return la;if(-1==a.M)return-1==b.M?wa(na(a),na(b)):na(wa(na(a),b));if(-1==b.M)return na(wa(a,na(b)));if(30<a.K.length){if(-1==a.M||-1==b.M)throw Error("slowDivide_ only works with positive integers.");for(var c=pa;0>=b.compare(a);)c=c.shiftLeft(1),b=b.shiftLeft(1);var d=za(c,1),e=za(b,1);b=za(b,2);for(c=za(c,2);!ua(b);){var f=e.add(b);0>=f.compare(a)&&(d=d.add(c),e=f);b=za(b,1);c=za(c,1)}return d}for(c=la;0<=a.compare(b);){d=Math.max(1,
Math.floor(ra(a)/ra(b)));e=Math.ceil(Math.log(d)/Math.LN2);e=48>=e?1:Math.pow(2,e-48);f=ka(d);for(var h=f.multiply(b);-1==h.M||0<h.compare(a);)d-=e,f=ka(d),h=f.multiply(b);ua(f)&&(f=pa);c=c.add(f);a=a.add(na(h))}return c}g.and=function(a){for(var b=Math.max(this.K.length,a.K.length),c=[],d=0;d<b;d++)c[d]=sa(this,d)&sa(a,d);return new fa(c,this.M&a.M)};g.or=function(a){for(var b=Math.max(this.K.length,a.K.length),c=[],d=0;d<b;d++)c[d]=sa(this,d)|sa(a,d);return new fa(c,this.M|a.M)};
g.xor=function(a){for(var b=Math.max(this.K.length,a.K.length),c=[],d=0;d<b;d++)c[d]=sa(this,d)^sa(a,d);return new fa(c,this.M^a.M)};g.shiftLeft=function(a){var b=a>>5;a%=32;for(var c=this.K.length+b+(0<a?1:0),d=[],e=0;e<c;e++)d[e]=0<a?sa(this,e-b)<<a|sa(this,e-b-1)>>>32-a:sa(this,e-b);return new fa(d,this.M)};function za(a,b){var c=b>>5;b%=32;for(var d=a.K.length-c,e=[],f=0;f<d;f++)e[f]=0<b?sa(a,f+c)>>>b|sa(a,f+c+1)<<32-b:sa(a,f+c);return new fa(e,a.M)};function Aa(a,b){null!=a&&this.append.apply(this,arguments)}g=Aa.prototype;g.Oa="";g.set=function(a){this.Oa=""+a};g.append=function(a,b,c){this.Oa+=String(a);if(null!=b)for(var d=1;d<arguments.length;d++)this.Oa+=arguments[d];return this};g.clear=function(){this.Oa=""};g.toString=function(){return this.Oa};var Ba;if("undefined"===typeof u)var u={};if("undefined"===typeof Ca)var Ca=null;if("undefined"===typeof Da)var Da=null;var Fa=!0,Ga=null;if("undefined"===typeof Ia)var Ia=null;function Ja(){return new Ka(null,5,[La,!0,Ma,!0,Na,!1,Oa,!1,Pa,null],null)}function Sa(){Fa=!1;Ca=function(){return console.log.apply(console,da(arguments))};Da=function(){return console.error.apply(console,da(arguments))}}function w(a){return null!=a&&!1!==a}function Ta(a){return null==a}
function Ua(a){return a instanceof Array}function Va(a){return null==a?!0:!1===a?!0:!1}function x(a,b){return a[l(null==b?null:b)]?!0:a._?!0:!1}function y(a,b){var c=null==b?null:b.constructor;c=w(w(c)?c.tb:c)?c.hb:l(b);return Error(["No protocol method ",a," defined for type ",c,": ",b].join(""))}function Wa(a){var b=a.hb;return w(b)?b:[z.b(a)].join("")}var Ya="undefined"!==typeof Symbol&&"function"===l(Symbol)?Symbol.iterator:"@@iterator";
function Za(a){for(var b=a.length,c=Array(b),d=0;;)if(d<b)c[d]=a[d],d+=1;else break;return c}function $a(){}function bb(){}
var cb=function cb(a){if(null!=a&&null!=a.U)return a.U(a);var c=cb[l(null==a?null:a)];if(null!=c)return c.b?c.b(a):c.call(null,a);c=cb._;if(null!=c)return c.b?c.b(a):c.call(null,a);throw y("ICounted.-count",a);},db=function db(a,b){if(null!=a&&null!=a.T)return a.T(a,b);var d=db[l(null==a?null:a)];if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);d=db._;if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);throw y("ICollection.-conj",a);};function eb(){}
var B=function B(a){switch(arguments.length){case 2:return B.a(arguments[0],arguments[1]);case 3:return B.f(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};B.a=function(a,b){if(null!=a&&null!=a.R)return a.R(a,b);var c=B[l(null==a?null:a)];if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);c=B._;if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);throw y("IIndexed.-nth",a);};
B.f=function(a,b,c){if(null!=a&&null!=a.$)return a.$(a,b,c);var d=B[l(null==a?null:a)];if(null!=d)return d.f?d.f(a,b,c):d.call(null,a,b,c);d=B._;if(null!=d)return d.f?d.f(a,b,c):d.call(null,a,b,c);throw y("IIndexed.-nth",a);};B.u=3;
var D=function D(a){if(null!=a&&null!=a.Y)return a.Y(a);var c=D[l(null==a?null:a)];if(null!=c)return c.b?c.b(a):c.call(null,a);c=D._;if(null!=c)return c.b?c.b(a):c.call(null,a);throw y("ISeq.-first",a);},fb=function fb(a){if(null!=a&&null!=a.da)return a.da(a);var c=fb[l(null==a?null:a)];if(null!=c)return c.b?c.b(a):c.call(null,a);c=fb._;if(null!=c)return c.b?c.b(a):c.call(null,a);throw y("ISeq.-rest",a);};function hb(){}function ib(){}
var jb=function jb(a){switch(arguments.length){case 2:return jb.a(arguments[0],arguments[1]);case 3:return jb.f(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};jb.a=function(a,b){if(null!=a&&null!=a.J)return a.J(a,b);var c=jb[l(null==a?null:a)];if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);c=jb._;if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);throw y("ILookup.-lookup",a);};
jb.f=function(a,b,c){if(null!=a&&null!=a.v)return a.v(a,b,c);var d=jb[l(null==a?null:a)];if(null!=d)return d.f?d.f(a,b,c):d.call(null,a,b,c);d=jb._;if(null!=d)return d.f?d.f(a,b,c):d.call(null,a,b,c);throw y("ILookup.-lookup",a);};jb.u=3;
var kb=function kb(a,b){if(null!=a&&null!=a.Va)return a.Va(a,b);var d=kb[l(null==a?null:a)];if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);d=kb._;if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);throw y("IAssociative.-contains-key?",a);},lb=function lb(a,b,c){if(null!=a&&null!=a.ra)return a.ra(a,b,c);var e=lb[l(null==a?null:a)];if(null!=e)return e.f?e.f(a,b,c):e.call(null,a,b,c);e=lb._;if(null!=e)return e.f?e.f(a,b,c):e.call(null,a,b,c);throw y("IAssociative.-assoc",a);};function mb(){}
var nb=function nb(a){if(null!=a&&null!=a.Bb)return a.key;var c=nb[l(null==a?null:a)];if(null!=c)return c.b?c.b(a):c.call(null,a);c=nb._;if(null!=c)return c.b?c.b(a):c.call(null,a);throw y("IMapEntry.-key",a);},ob=function ob(a){if(null!=a&&null!=a.Cb)return a.s;var c=ob[l(null==a?null:a)];if(null!=c)return c.b?c.b(a):c.call(null,a);c=ob._;if(null!=c)return c.b?c.b(a):c.call(null,a);throw y("IMapEntry.-val",a);};function pb(){}
var qb=function qb(a){if(null!=a&&null!=a.Wa)return a.Wa(a);var c=qb[l(null==a?null:a)];if(null!=c)return c.b?c.b(a):c.call(null,a);c=qb._;if(null!=c)return c.b?c.b(a):c.call(null,a);throw y("IStack.-peek",a);},rb=function rb(a){if(null!=a&&null!=a.Xa)return a.Xa(a);var c=rb[l(null==a?null:a)];if(null!=c)return c.b?c.b(a):c.call(null,a);c=rb._;if(null!=c)return c.b?c.b(a):c.call(null,a);throw y("IStack.-pop",a);};function tb(){}
var ub=function ub(a){if(null!=a&&null!=a.xb)return a.s;var c=ub[l(null==a?null:a)];if(null!=c)return c.b?c.b(a):c.call(null,a);c=ub._;if(null!=c)return c.b?c.b(a):c.call(null,a);throw y("IDeref.-deref",a);};function vb(){}
var wb=function wb(a){if(null!=a&&null!=a.O)return a.O(a);var c=wb[l(null==a?null:a)];if(null!=c)return c.b?c.b(a):c.call(null,a);c=wb._;if(null!=c)return c.b?c.b(a):c.call(null,a);throw y("IMeta.-meta",a);},xb=function xb(a,b){if(null!=a&&null!=a.P)return a.P(a,b);var d=xb[l(null==a?null:a)];if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);d=xb._;if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);throw y("IWithMeta.-with-meta",a);};function yb(){}
var Ab=function Ab(a){switch(arguments.length){case 2:return Ab.a(arguments[0],arguments[1]);case 3:return Ab.f(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};Ab.a=function(a,b){if(null!=a&&null!=a.ba)return a.ba(a,b);var c=Ab[l(null==a?null:a)];if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);c=Ab._;if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);throw y("IReduce.-reduce",a);};
Ab.f=function(a,b,c){if(null!=a&&null!=a.X)return a.X(a,b,c);var d=Ab[l(null==a?null:a)];if(null!=d)return d.f?d.f(a,b,c):d.call(null,a,b,c);d=Ab._;if(null!=d)return d.f?d.f(a,b,c):d.call(null,a,b,c);throw y("IReduce.-reduce",a);};Ab.u=3;function Bb(){}
var Cb=function Cb(a,b,c){if(null!=a&&null!=a.fb)return a.fb(a,b,c);var e=Cb[l(null==a?null:a)];if(null!=e)return e.f?e.f(a,b,c):e.call(null,a,b,c);e=Cb._;if(null!=e)return e.f?e.f(a,b,c):e.call(null,a,b,c);throw y("IKVReduce.-kv-reduce",a);},Db=function Db(a,b){if(null!=a&&null!=a.o)return a.o(a,b);var d=Db[l(null==a?null:a)];if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);d=Db._;if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);throw y("IEquiv.-equiv",a);},Eb=function Eb(a){if(null!=a&&null!=a.N)return a.N(a);
var c=Eb[l(null==a?null:a)];if(null!=c)return c.b?c.b(a):c.call(null,a);c=Eb._;if(null!=c)return c.b?c.b(a):c.call(null,a);throw y("IHash.-hash",a);};function Fb(){}var Gb=function Gb(a){if(null!=a&&null!=a.I)return a.I(a);var c=Gb[l(null==a?null:a)];if(null!=c)return c.b?c.b(a):c.call(null,a);c=Gb._;if(null!=c)return c.b?c.b(a):c.call(null,a);throw y("ISeqable.-seq",a);};function Hb(){}function Ib(){}function Jb(){}
var Kb=function Kb(a,b){if(null!=a&&null!=a.sb)return a.sb(a,b);var d=Kb[l(null==a?null:a)];if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);d=Kb._;if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);throw y("IWriter.-write",a);},Lb=function Lb(a){if(null!=a&&null!=a.Sa)return a.Sa(a);var c=Lb[l(null==a?null:a)];if(null!=c)return c.b?c.b(a):c.call(null,a);c=Lb._;if(null!=c)return c.b?c.b(a):c.call(null,a);throw y("IEditableCollection.-as-transient",a);},Nb=function Nb(a,b){if(null!=a&&null!=a.Pa)return a.Pa(a,
b);var d=Nb[l(null==a?null:a)];if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);d=Nb._;if(null!=d)return d.a?d.a(a,b):d.call(null,a,b);throw y("ITransientCollection.-conj!",a);},Ob=function Ob(a){if(null!=a&&null!=a.Ya)return a.Ya(a);var c=Ob[l(null==a?null:a)];if(null!=c)return c.b?c.b(a):c.call(null,a);c=Ob._;if(null!=c)return c.b?c.b(a):c.call(null,a);throw y("ITransientCollection.-persistent!",a);},Pb=function Pb(a,b,c){if(null!=a&&null!=a.Ja)return a.Ja(a,b,c);var e=Pb[l(null==a?null:a)];if(null!=
e)return e.f?e.f(a,b,c):e.call(null,a,b,c);e=Pb._;if(null!=e)return e.f?e.f(a,b,c):e.call(null,a,b,c);throw y("ITransientAssociative.-assoc!",a);},Qb=function Qb(a){if(null!=a&&null!=a.ob)return a.ob(a);var c=Qb[l(null==a?null:a)];if(null!=c)return c.b?c.b(a):c.call(null,a);c=Qb._;if(null!=c)return c.b?c.b(a):c.call(null,a);throw y("IChunk.-drop-first",a);},Rb=function Rb(a){if(null!=a&&null!=a.kb)return a.kb(a);var c=Rb[l(null==a?null:a)];if(null!=c)return c.b?c.b(a):c.call(null,a);c=Rb._;if(null!=
c)return c.b?c.b(a):c.call(null,a);throw y("IChunkedSeq.-chunked-first",a);},Sb=function Sb(a){if(null!=a&&null!=a.eb)return a.eb(a);var c=Sb[l(null==a?null:a)];if(null!=c)return c.b?c.b(a):c.call(null,a);c=Sb._;if(null!=c)return c.b?c.b(a):c.call(null,a);throw y("IChunkedSeq.-chunked-rest",a);};function Tb(){}
var Ub=function Ub(a){if(null!=a&&null!=a.ja)return a.ja(a);var c=Ub[l(null==a?null:a)];if(null!=c)return c.b?c.b(a):c.call(null,a);c=Ub._;if(null!=c)return c.b?c.b(a):c.call(null,a);throw y("IIterable.-iterator",a);};function Vb(a){this.Ib=a;this.h=1073741824;this.A=0}Vb.prototype.sb=function(a,b){return this.Ib.append(b)};function Wb(a){var b=new Aa;a.S(new Vb(b),Ja());return[z.b(b)].join("")}
var Xb="undefined"!==typeof Math.imul&&0!==Math.imul(4294967295,5)?function(a,b){return Math.imul(a,b)}:function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0};function Yb(a){a=Xb(a|0,-862048943);return Xb(a<<15|a>>>-15,461845907)}function Zb(a,b){a=(a|0)^(b|0);return Xb(a<<13|a>>>-13,5)+-430675100|0}function $b(a,b){a=(a|0)^b;a=Xb(a^a>>>16,-2048144789);a=Xb(a^a>>>13,-1028477387);return a^a>>>16}
function ac(a){a:{var b=1;for(var c=0;;)if(b<a.length){var d=b+2;c=Zb(c,Yb(a.charCodeAt(b-1)|a.charCodeAt(b)<<16));b=d}else{b=c;break a}}b=1===(a.length&1)?b^Yb(a.charCodeAt(a.length-1)):b;return $b(b,Xb(2,a.length))}var bc={},cc=0;function dc(a){255<cc&&(bc={},cc=0);if(null==a)return 0;var b=bc[a];if("number"===typeof b)a=b;else{a:if(null!=a)if(b=a.length,0<b)for(var c=0,d=0;;)if(c<b){var e=c+1;d=Xb(31,d)+a.charCodeAt(c);c=e}else{b=d;break a}else b=0;else b=0;bc[a]=b;cc+=1;a=b}return a}
function fc(a){if(null!=a&&(a.h&4194304||u===a.Nb))return a.N(null)^0;if("number"===typeof a){if(w(isFinite(a)))return Math.floor(a)%2147483647;switch(a){case Infinity:return 2146435072;case -Infinity:return-1048576;default:return 2146959360}}else return!0===a?a=1231:!1===a?a=1237:"string"===typeof a?(a=dc(a),0!==a&&(a=Yb(a),a=Zb(0,a),a=$b(a,4))):a=a instanceof Date?a.valueOf()^0:null==a?0:Eb(a)^0,a}function gc(a,b){return a^b+2654435769+(a<<6)+(a>>2)}
function hc(a,b,c,d,e){this.cb=a;this.name=b;this.Na=c;this.Ra=d;this.ha=e;this.h=2154168321;this.A=4096}g=hc.prototype;g.toString=function(){return this.Na};g.equiv=function(a){return this.o(null,a)};g.o=function(a,b){return b instanceof hc?this.Na===b.Na:!1};
g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return F.a(c,this);case 3:return F.f(c,this,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return F.a(c,this)};a.f=function(a,c,d){return F.f(c,this,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Za(b)))};g.b=function(a){return F.a(a,this)};g.a=function(a,b){return F.f(a,this,b)};g.O=function(){return this.ha};
g.P=function(a,b){return new hc(this.cb,this.name,this.Na,this.Ra,b)};g.N=function(){var a=this.Ra;return null!=a?a:this.Ra=a=gc(ac(this.name),dc(this.cb))};g.S=function(a){return Kb(a,this.Na)};function I(a){if(null==a)return null;if(null!=a&&(a.h&8388608||u===a.Fb))return a.I(null);if(Ua(a)||"string"===typeof a)return 0===a.length?null:new ic(a,0,null);if(x(Fb,a))return Gb(a);throw Error([z.b(a)," is not ISeqable"].join(""));}
function J(a){if(null==a)return null;if(null!=a&&(a.h&64||u===a.w))return a.Y(null);a=I(a);return null==a?null:D(a)}function jc(a){return null!=a?null!=a&&(a.h&64||u===a.w)?a.da(null):(a=I(a))?fb(a):kc:kc}function L(a){return null==a?null:null!=a&&(a.h&128||u===a.gb)?a.aa():I(jc(a))}
var M=function M(a){switch(arguments.length){case 1:return M.b(arguments[0]);case 2:return M.a(arguments[0],arguments[1]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return M.G(arguments[0],arguments[1],new ic(c.slice(2),0,null))}};M.b=function(){return!0};M.a=function(a,b){return null==a?null==b:a===b||Db(a,b)};M.G=function(a,b,c){for(;;)if(M.a(a,b))if(L(c))a=b,b=J(c),c=L(c);else return M.a(b,J(c));else return!1};
M.L=function(a){var b=J(a),c=L(a);a=J(c);c=L(c);return this.G(b,a,c)};M.u=2;function lc(a){this.B=a}lc.prototype.next=function(){if(null!=this.B){var a=J(this.B);this.B=L(this.B);return{value:a,done:!1}}return{value:null,done:!0}};function mc(a){return new lc(I(a))}function nc(a,b){a=Yb(a);a=Zb(0,a);return $b(a,b)}function oc(a){var b=0,c=1;for(a=I(a);;)if(null!=a)b+=1,c=Xb(31,c)+fc(J(a))|0,a=L(a);else return nc(c,b)}var pc=nc(1,0);
function qc(a){var b=0,c=0;for(a=I(a);;)if(null!=a)b+=1,c=c+fc(J(a))|0,a=L(a);else return nc(c,b)}var rc=nc(0,0);bb["null"]=!0;cb["null"]=function(){return 0};Date.prototype.o=function(a,b){return b instanceof Date&&this.valueOf()===b.valueOf()};Db.number=function(a,b){return a===b};$a["function"]=!0;vb["function"]=!0;wb["function"]=function(){return null};Eb._=function(a){return a[ba]||(a[ba]=++ca)};function sc(){this.s=!1;this.h=32768;this.A=0}sc.prototype.xb=function(){return this.s};
function tc(a){return a instanceof sc}function uc(a,b){var c=cb(a);if(0===c)return b.F?b.F():b.call(null);for(var d=B.a(a,0),e=1;;)if(e<c){var f=B.a(a,e);d=b.a?b.a(d,f):b.call(null,d,f);if(tc(d))return ub(d);e+=1}else return d}function vc(a,b,c){var d=a.length,e=c;for(c=0;;)if(c<d){var f=a[c];e=b.a?b.a(e,f):b.call(null,e,f);if(tc(e))return ub(e);c+=1}else return e}
function wc(a,b,c,d){for(var e=a.length;;)if(d<e){var f=a[d];c=b.a?b.a(c,f):b.call(null,c,f);if(tc(c))return ub(c);d+=1}else return c}function xc(a){return null!=a?a.h&2||u===a.wb?!0:a.h?!1:x(bb,a):x(bb,a)}function yc(a){return null!=a?a.h&16||u===a.qb?!0:a.h?!1:x(eb,a):x(eb,a)}function N(a,b,c){var d=O(a);if(c>=d)return-1;!(0<c)&&0>c&&(c+=d,c=0>c?0:c);for(;;)if(c<d){if(M.a(zc(a,c),b))return c;c+=1}else return-1}
function P(a,b,c){var d=O(a);if(0===d)return-1;0<c?(--d,c=d<c?d:c):c=0>c?d+c:c;for(;;)if(0<=c){if(M.a(zc(a,c),b))return c;--c}else return-1}function Ac(a,b){this.c=a;this.j=b}Ac.prototype.Z=function(){return this.j<this.c.length};Ac.prototype.next=function(){var a=this.c[this.j];this.j+=1;return a};function ic(a,b,c){this.c=a;this.j=b;this.m=c;this.h=166592766;this.A=139264}g=ic.prototype;g.toString=function(){return Wb(this)};g.equiv=function(a){return this.o(null,a)};
g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a){return N(this,a,0)};a.a=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return P(this,a,O(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return P(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.b=a;b.a=function(a,b){return P(this,a,b)};return b}();g.R=function(a,b){a=b+this.j;if(0<=a&&a<this.c.length)return this.c[a];throw Error("Index out of bounds");};g.$=function(a,b,c){a=b+this.j;return 0<=a&&a<this.c.length?this.c[a]:c};g.ja=function(){return new Ac(this.c,this.j)};
g.O=function(){return this.m};g.aa=function(){return this.j+1<this.c.length?new ic(this.c,this.j+1,null):null};g.U=function(){var a=this.c.length-this.j;return 0>a?0:a};g.N=function(){return oc(this)};g.o=function(a,b){return Bc(this,b)};g.ba=function(a,b){return wc(this.c,b,this.c[this.j],this.j+1)};g.X=function(a,b,c){return wc(this.c,b,c,this.j)};g.Y=function(){return this.c[this.j]};g.da=function(){return this.j+1<this.c.length?new ic(this.c,this.j+1,null):kc};
g.I=function(){return this.j<this.c.length?this:null};g.P=function(a,b){return new ic(this.c,this.j,b)};g.T=function(a,b){return Q(b,this)};ic.prototype[Ya]=function(){return mc(this)};function R(a){return 0<a.length?new ic(a,0,null):null}function Cc(a){for(;;){var b=L(a);if(null!=b)a=b;else return J(a)}}Db._=function(a,b){return a===b};
var Dc=function Dc(a){switch(arguments.length){case 0:return Dc.F();case 1:return Dc.b(arguments[0]);case 2:return Dc.a(arguments[0],arguments[1]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Dc.G(arguments[0],arguments[1],new ic(c.slice(2),0,null))}};Dc.F=function(){return Ec};Dc.b=function(a){return a};Dc.a=function(a,b){return null!=a?db(a,b):new Fc(null,b,null,1,null)};
Dc.G=function(a,b,c){for(;;)if(w(c))a=Dc.a(a,b),b=J(c),c=L(c);else return Dc.a(a,b)};Dc.L=function(a){var b=J(a),c=L(a);a=J(c);c=L(c);return this.G(b,a,c)};Dc.u=2;function O(a){if(null!=a)if(null!=a&&(a.h&2||u===a.wb))a=a.U(null);else if(Ua(a))a=a.length;else if("string"===typeof a)a=a.length;else if(null!=a&&(a.h&8388608||u===a.Fb))a:{a=I(a);for(var b=0;;){if(xc(a)){a=b+cb(a);break a}a=L(a);b+=1}}else a=cb(a);else a=0;return a}
function Gc(a,b){for(var c=null;;){if(null==a)return c;if(0===b)return I(a)?J(a):c;if(yc(a))return B.f(a,b,c);if(I(a))a=L(a),--b;else return c}}
function zc(a,b){if("number"!==typeof b)throw Error("Index argument to nth must be a number");if(null==a)return a;if(null!=a&&(a.h&16||u===a.qb))return a.R(null,b);if(Ua(a)){if(0<=b&&b<a.length)return a[b];throw Error("Index out of bounds");}if("string"===typeof a){if(0<=b&&b<a.length)return a.charAt(b);throw Error("Index out of bounds");}if(null!=a&&(a.h&64||u===a.w)||null!=a&&(a.h&16777216||u===a.rb)){a:for(;;){if(null==a)throw Error("Index out of bounds");if(0===b){if(I(a)){a=J(a);break a}throw Error("Index out of bounds");
}if(yc(a)){a=B.a(a,b);break a}if(I(a))a=L(a),--b;else throw Error("Index out of bounds");}return a}if(x(eb,a))return B.a(a,b);throw Error(["nth not supported on this type ",z.b(Wa(null==a?null:a.constructor))].join(""));}
function S(a,b){if("number"!==typeof b)throw Error("Index argument to nth must be a number.");if(null==a)return null;if(null!=a&&(a.h&16||u===a.qb))return a.$(null,b,null);if(Ua(a))return 0<=b&&b<a.length?a[b]:null;if("string"===typeof a)return 0<=b&&b<a.length?a.charAt(b):null;if(null!=a&&(a.h&64||u===a.w)||null!=a&&(a.h&16777216||u===a.rb))return Gc(a,b);if(x(eb,a))return B.f(a,b,null);throw Error(["nth not supported on this type ",z.b(Wa(null==a?null:a.constructor))].join(""));}
var F=function F(a){switch(arguments.length){case 2:return F.a(arguments[0],arguments[1]);case 3:return F.f(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};F.a=function(a,b){return null==a?null:null!=a&&(a.h&256||u===a.zb)?a.J(null,b):Ua(a)?null!=b&&b<a.length?a[b|0]:null:"string"===typeof a?null!=b&&b<a.length?a.charAt(b|0):null:x(ib,a)?jb.a(a,b):null};
F.f=function(a,b,c){return null!=a?null!=a&&(a.h&256||u===a.zb)?a.v(null,b,c):Ua(a)?null!=b&&0<=b&&b<a.length?a[b|0]:c:"string"===typeof a?null!=b&&0<=b&&b<a.length?a.charAt(b|0):c:x(ib,a)?jb.f(a,b,c):c:c};F.u=3;var Hc=function Hc(a){switch(arguments.length){case 3:return Hc.f(arguments[0],arguments[1],arguments[2]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Hc.G(arguments[0],arguments[1],arguments[2],new ic(c.slice(3),0,null))}};
Hc.f=function(a,b,c){if(null!=a)a=lb(a,b,c);else{a=[b,c];b=[];for(c=0;;)if(c<a.length){var d=a[c],e=a[c+1],f=Ic(b,d);-1===f?(f=b,f.push(d),f.push(e)):b[f+1]=e;c+=2}else break;a=new Ka(null,b.length/2,b,null)}return a};Hc.G=function(a,b,c,d){for(;;)if(a=Hc.f(a,b,c),w(d))b=J(d),c=J(L(d)),d=L(L(d));else return a};Hc.L=function(a){var b=J(a),c=L(a);a=J(c);var d=L(c);c=J(d);d=L(d);return this.G(b,a,c,d)};Hc.u=3;function Jc(a,b){this.g=a;this.m=b;this.h=393217;this.A=0}g=Jc.prototype;g.O=function(){return this.m};
g.P=function(a,b){return new Jc(this.g,b)};g.vb=u;
g.call=function(){function a(a,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K,U,H,ma){return Kc(this.g,b,c,d,e,R([f,h,k,m,n,p,r,t,v,A,C,E,G,K,U,H,ma]))}function b(a,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K,U,H){a=this;return a.g.Ca?a.g.Ca(b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K,U,H):a.g.call(null,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K,U,H)}function c(a,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K,U){a=this;return a.g.Ba?a.g.Ba(b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K,U):a.g.call(null,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K,U)}function d(a,
b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K){a=this;return a.g.Aa?a.g.Aa(b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K):a.g.call(null,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K)}function e(a,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G){a=this;return a.g.za?a.g.za(b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G):a.g.call(null,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G)}function f(a,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E){a=this;return a.g.ya?a.g.ya(b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E):a.g.call(null,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E)}function h(a,b,c,d,e,f,h,k,m,n,p,r,
t,v,A,C){a=this;return a.g.xa?a.g.xa(b,c,d,e,f,h,k,m,n,p,r,t,v,A,C):a.g.call(null,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C)}function k(a,b,c,d,e,f,h,k,m,n,p,r,t,v,A){a=this;return a.g.wa?a.g.wa(b,c,d,e,f,h,k,m,n,p,r,t,v,A):a.g.call(null,b,c,d,e,f,h,k,m,n,p,r,t,v,A)}function m(a,b,c,d,e,f,h,k,m,n,p,r,t,v){a=this;return a.g.va?a.g.va(b,c,d,e,f,h,k,m,n,p,r,t,v):a.g.call(null,b,c,d,e,f,h,k,m,n,p,r,t,v)}function n(a,b,c,d,e,f,h,k,m,n,p,r,t){a=this;return a.g.ua?a.g.ua(b,c,d,e,f,h,k,m,n,p,r,t):a.g.call(null,b,c,d,
e,f,h,k,m,n,p,r,t)}function p(a,b,c,d,e,f,h,k,m,n,p,r){a=this;return a.g.ta?a.g.ta(b,c,d,e,f,h,k,m,n,p,r):a.g.call(null,b,c,d,e,f,h,k,m,n,p,r)}function r(a,b,c,d,e,f,h,k,m,n,p){a=this;return a.g.sa?a.g.sa(b,c,d,e,f,h,k,m,n,p):a.g.call(null,b,c,d,e,f,h,k,m,n,p)}function t(a,b,c,d,e,f,h,k,m,n){a=this;return a.g.Ga?a.g.Ga(b,c,d,e,f,h,k,m,n):a.g.call(null,b,c,d,e,f,h,k,m,n)}function v(a,b,c,d,e,f,h,k,m){a=this;return a.g.Fa?a.g.Fa(b,c,d,e,f,h,k,m):a.g.call(null,b,c,d,e,f,h,k,m)}function A(a,b,c,d,e,f,
h,k){a=this;return a.g.Ea?a.g.Ea(b,c,d,e,f,h,k):a.g.call(null,b,c,d,e,f,h,k)}function C(a,b,c,d,e,f,h){a=this;return a.g.Da?a.g.Da(b,c,d,e,f,h):a.g.call(null,b,c,d,e,f,h)}function E(a,b,c,d,e,f){a=this;return a.g.ca?a.g.ca(b,c,d,e,f):a.g.call(null,b,c,d,e,f)}function G(a,b,c,d,e){a=this;return a.g.C?a.g.C(b,c,d,e):a.g.call(null,b,c,d,e)}function K(a,b,c,d){a=this;return a.g.f?a.g.f(b,c,d):a.g.call(null,b,c,d)}function U(a,b,c){a=this;return a.g.a?a.g.a(b,c):a.g.call(null,b,c)}function ma(a,b){a=this;
return a.g.b?a.g.b(b):a.g.call(null,b)}function Ra(a){a=this;return a.g.F?a.g.F():a.g.call(null)}var H=null;H=function(H,ha,ta,va,ya,Ea,Ha,Qa,Xa,ab,gb,sb,zb,Mb,ec,Pc,cd,Dd,re,jf,ng,Ch){switch(arguments.length){case 1:return Ra.call(this,H);case 2:return ma.call(this,H,ha);case 3:return U.call(this,H,ha,ta);case 4:return K.call(this,H,ha,ta,va);case 5:return G.call(this,H,ha,ta,va,ya);case 6:return E.call(this,H,ha,ta,va,ya,Ea);case 7:return C.call(this,H,ha,ta,va,ya,Ea,Ha);case 8:return A.call(this,
H,ha,ta,va,ya,Ea,Ha,Qa);case 9:return v.call(this,H,ha,ta,va,ya,Ea,Ha,Qa,Xa);case 10:return t.call(this,H,ha,ta,va,ya,Ea,Ha,Qa,Xa,ab);case 11:return r.call(this,H,ha,ta,va,ya,Ea,Ha,Qa,Xa,ab,gb);case 12:return p.call(this,H,ha,ta,va,ya,Ea,Ha,Qa,Xa,ab,gb,sb);case 13:return n.call(this,H,ha,ta,va,ya,Ea,Ha,Qa,Xa,ab,gb,sb,zb);case 14:return m.call(this,H,ha,ta,va,ya,Ea,Ha,Qa,Xa,ab,gb,sb,zb,Mb);case 15:return k.call(this,H,ha,ta,va,ya,Ea,Ha,Qa,Xa,ab,gb,sb,zb,Mb,ec);case 16:return h.call(this,H,ha,ta,va,
ya,Ea,Ha,Qa,Xa,ab,gb,sb,zb,Mb,ec,Pc);case 17:return f.call(this,H,ha,ta,va,ya,Ea,Ha,Qa,Xa,ab,gb,sb,zb,Mb,ec,Pc,cd);case 18:return e.call(this,H,ha,ta,va,ya,Ea,Ha,Qa,Xa,ab,gb,sb,zb,Mb,ec,Pc,cd,Dd);case 19:return d.call(this,H,ha,ta,va,ya,Ea,Ha,Qa,Xa,ab,gb,sb,zb,Mb,ec,Pc,cd,Dd,re);case 20:return c.call(this,H,ha,ta,va,ya,Ea,Ha,Qa,Xa,ab,gb,sb,zb,Mb,ec,Pc,cd,Dd,re,jf);case 21:return b.call(this,H,ha,ta,va,ya,Ea,Ha,Qa,Xa,ab,gb,sb,zb,Mb,ec,Pc,cd,Dd,re,jf,ng);case 22:return a.call(this,H,ha,ta,va,ya,Ea,
Ha,Qa,Xa,ab,gb,sb,zb,Mb,ec,Pc,cd,Dd,re,jf,ng,Ch)}throw Error("Invalid arity: "+(arguments.length-1));};H.b=Ra;H.a=ma;H.f=U;H.C=K;H.ca=G;H.Da=E;H.Ea=C;H.Fa=A;H.Ga=v;H.sa=t;H.ta=r;H.ua=p;H.va=n;H.wa=m;H.xa=k;H.ya=h;H.za=f;H.Aa=e;H.Ba=d;H.Ca=c;H.yb=b;H.Mb=a;return H}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Za(b)))};g.F=function(){return this.g.F?this.g.F():this.g.call(null)};g.b=function(a){return this.g.b?this.g.b(a):this.g.call(null,a)};
g.a=function(a,b){return this.g.a?this.g.a(a,b):this.g.call(null,a,b)};g.f=function(a,b,c){return this.g.f?this.g.f(a,b,c):this.g.call(null,a,b,c)};g.C=function(a,b,c,d){return this.g.C?this.g.C(a,b,c,d):this.g.call(null,a,b,c,d)};g.ca=function(a,b,c,d,e){return this.g.ca?this.g.ca(a,b,c,d,e):this.g.call(null,a,b,c,d,e)};g.Da=function(a,b,c,d,e,f){return this.g.Da?this.g.Da(a,b,c,d,e,f):this.g.call(null,a,b,c,d,e,f)};
g.Ea=function(a,b,c,d,e,f,h){return this.g.Ea?this.g.Ea(a,b,c,d,e,f,h):this.g.call(null,a,b,c,d,e,f,h)};g.Fa=function(a,b,c,d,e,f,h,k){return this.g.Fa?this.g.Fa(a,b,c,d,e,f,h,k):this.g.call(null,a,b,c,d,e,f,h,k)};g.Ga=function(a,b,c,d,e,f,h,k,m){return this.g.Ga?this.g.Ga(a,b,c,d,e,f,h,k,m):this.g.call(null,a,b,c,d,e,f,h,k,m)};g.sa=function(a,b,c,d,e,f,h,k,m,n){return this.g.sa?this.g.sa(a,b,c,d,e,f,h,k,m,n):this.g.call(null,a,b,c,d,e,f,h,k,m,n)};
g.ta=function(a,b,c,d,e,f,h,k,m,n,p){return this.g.ta?this.g.ta(a,b,c,d,e,f,h,k,m,n,p):this.g.call(null,a,b,c,d,e,f,h,k,m,n,p)};g.ua=function(a,b,c,d,e,f,h,k,m,n,p,r){return this.g.ua?this.g.ua(a,b,c,d,e,f,h,k,m,n,p,r):this.g.call(null,a,b,c,d,e,f,h,k,m,n,p,r)};g.va=function(a,b,c,d,e,f,h,k,m,n,p,r,t){return this.g.va?this.g.va(a,b,c,d,e,f,h,k,m,n,p,r,t):this.g.call(null,a,b,c,d,e,f,h,k,m,n,p,r,t)};
g.wa=function(a,b,c,d,e,f,h,k,m,n,p,r,t,v){return this.g.wa?this.g.wa(a,b,c,d,e,f,h,k,m,n,p,r,t,v):this.g.call(null,a,b,c,d,e,f,h,k,m,n,p,r,t,v)};g.xa=function(a,b,c,d,e,f,h,k,m,n,p,r,t,v,A){return this.g.xa?this.g.xa(a,b,c,d,e,f,h,k,m,n,p,r,t,v,A):this.g.call(null,a,b,c,d,e,f,h,k,m,n,p,r,t,v,A)};g.ya=function(a,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C){return this.g.ya?this.g.ya(a,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C):this.g.call(null,a,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C)};
g.za=function(a,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E){return this.g.za?this.g.za(a,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E):this.g.call(null,a,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E)};g.Aa=function(a,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G){return this.g.Aa?this.g.Aa(a,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G):this.g.call(null,a,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G)};
g.Ba=function(a,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K){return this.g.Ba?this.g.Ba(a,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K):this.g.call(null,a,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K)};g.Ca=function(a,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K,U){return this.g.Ca?this.g.Ca(a,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K,U):this.g.call(null,a,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K,U)};g.yb=function(a,b,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K,U,ma){return Kc(this.g,a,b,c,d,R([e,f,h,k,m,n,p,r,t,v,A,C,E,G,K,U,ma]))};
function Lc(a){var b=null!=a;return(b?null!=a?a.h&131072||u===a.Db||(a.h?0:x(vb,a)):x(vb,a):b)?wb(a):null}function Mc(a){return null==a?!1:null!=a?a.h&4096||u===a.Ub?!0:a.h?!1:x(pb,a):x(pb,a)}function Nc(a){return null!=a?a.h&16777216||u===a.rb?!0:a.h?!1:x(Hb,a):x(Hb,a)}function Oc(a){return null==a?!1:null!=a?a.h&1024||u===a.Rb?!0:a.h?!1:x(mb,a):x(mb,a)}function Qc(a){return null!=a?a.h&67108864||u===a.Sb?!0:a.h?!1:x(Jb,a):x(Jb,a)}
function Rc(a){return null!=a?a.h&16384||u===a.Vb?!0:a.h?!1:x(tb,a):x(tb,a)}function Sc(a){return null!=a?a.A&512||u===a.Kb?!0:!1:!1}function Tc(a,b,c,d,e){for(;0!==e;)c[d]=a[b],d+=1,--e,b+=1}var Uc={};function Vc(a){return!0===a}function Wc(a){return null==a?!1:!1===a?!1:!0}function Xc(a,b){return F.f(a,b,Uc)===Uc?!1:!0}function Yc(a,b){return(b=I(b))?Zc(a,J(b),L(b)):a.F?a.F():a.call(null)}
function $c(a,b,c){for(c=I(c);;)if(c){var d=J(c);b=a.a?a.a(b,d):a.call(null,b,d);if(tc(b))return ub(b);c=L(c)}else return b}function ad(a,b,c){for(a=Ub(a);;)if(a.Z()){var d=a.next();c=b.a?b.a(c,d):b.call(null,c,d);if(tc(c))return ub(c)}else return c}function Zc(a,b,c){return a=null!=c&&(c.h&524288||u===c.Tb)?c.X(null,a,b):Ua(c)?vc(c,a,b):"string"===typeof c?vc(c,a,b):x(yb,c)?Ab.f(c,a,b):(null!=c?c.A&131072||u===c.Ob||(c.A?0:x(Tb,c)):x(Tb,c))?ad(c,a,b):$c(a,b,c)}
function bd(a,b){return null!=b?Cb(b,a,!0):!0}function dd(a){return a}function ed(a){a=(a-a%2)/2;return 0<=a?Math.floor(a):Math.ceil(a)}function fd(a){a-=a>>1&1431655765;a=(a&858993459)+(a>>2&858993459);return 16843009*(a+(a>>4)&252645135)>>24}var z=function z(a){switch(arguments.length){case 0:return z.F();case 1:return z.b(arguments[0]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return z.G(arguments[0],new ic(c.slice(1),0,null))}};z.F=function(){return""};
z.b=function(a){return null==a?"":[a].join("")};z.G=function(a,b){for(a=new Aa([z.b(a)].join(""));;)if(w(b))a=a.append([z.b(J(b))].join("")),b=L(b);else return a.toString()};z.L=function(a){var b=J(a);a=L(a);return this.G(b,a)};z.u=1;function gd(a,b){return a.substring(b)}function Bc(a,b){if(Nc(b))if(xc(a)&&xc(b)&&O(a)!==O(b))a=!1;else a:for(a=I(a),b=I(b);;){if(null==a){a=null==b;break a}if(null!=b&&M.a(J(a),J(b)))a=L(a),b=L(b);else{a=!1;break a}}else a=null;return Wc(a)}
function Fc(a,b,c,d,e){this.m=a;this.first=b;this.Ha=c;this.count=d;this.l=e;this.h=65937646;this.A=8192}g=Fc.prototype;g.toString=function(){return Wb(this)};g.equiv=function(a){return this.o(null,a)};g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a){return N(this,a,0)};a.a=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return P(this,a,this.count)}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return P(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.b=a;b.a=function(a,b){return P(this,a,b)};return b}();g.O=function(){return this.m};g.aa=function(){return 1===this.count?null:this.Ha};g.U=function(){return this.count};g.Wa=function(){return this.first};g.Xa=function(){return this.da(null)};
g.N=function(){var a=this.l;return null!=a?a:this.l=a=oc(this)};g.o=function(a,b){return Bc(this,b)};g.ba=function(a,b){return Yc(b,this)};g.X=function(a,b,c){return $c(b,c,this)};g.Y=function(){return this.first};g.da=function(){return 1===this.count?kc:this.Ha};g.I=function(){return this};g.P=function(a,b){return new Fc(b,this.first,this.Ha,this.count,this.l)};g.T=function(a,b){return new Fc(this.m,b,this,this.count+1,null)};Fc.prototype[Ya]=function(){return mc(this)};
function hd(a){this.m=a;this.h=65937614;this.A=8192}g=hd.prototype;g.toString=function(){return Wb(this)};g.equiv=function(a){return this.o(null,a)};g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a){return N(this,a,0)};a.a=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return P(this,a,O(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return P(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.b=a;b.a=function(a,b){return P(this,a,b)};return b}();g.O=function(){return this.m};g.aa=function(){return null};g.U=function(){return 0};g.Wa=function(){return null};g.Xa=function(){throw Error("Can't pop empty list");};g.N=function(){return pc};
g.o=function(a,b){return(null!=b?b.h&33554432||u===b.Qb||(b.h?0:x(Ib,b)):x(Ib,b))||Nc(b)?null==I(b):!1};g.ba=function(a,b){return Yc(b,this)};g.X=function(a,b,c){return $c(b,c,this)};g.Y=function(){return null};g.da=function(){return kc};g.I=function(){return null};g.P=function(a,b){return new hd(b)};g.T=function(a,b){return new Fc(this.m,b,null,1,null)};var kc=new hd(null);hd.prototype[Ya]=function(){return mc(this)};
function id(a,b,c,d){this.m=a;this.first=b;this.Ha=c;this.l=d;this.h=65929452;this.A=8192}g=id.prototype;g.toString=function(){return Wb(this)};g.equiv=function(a){return this.o(null,a)};g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a){return N(this,a,0)};a.a=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return P(this,a,O(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return P(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.b=a;b.a=function(a,b){return P(this,a,b)};return b}();g.O=function(){return this.m};g.aa=function(){return null==this.Ha?null:I(this.Ha)};g.N=function(){var a=this.l;return null!=a?a:this.l=a=oc(this)};g.o=function(a,b){return Bc(this,b)};g.ba=function(a,b){return Yc(b,this)};
g.X=function(a,b,c){return $c(b,c,this)};g.Y=function(){return this.first};g.da=function(){return null==this.Ha?kc:this.Ha};g.I=function(){return this};g.P=function(a,b){return new id(b,this.first,this.Ha,this.l)};g.T=function(a,b){return new id(null,b,this,null)};id.prototype[Ya]=function(){return mc(this)};function Q(a,b){return null==b||null!=b&&(b.h&64||u===b.w)?new id(null,a,b,null):new id(null,a,I(b),null)}
function T(a,b,c,d){this.cb=a;this.name=b;this.pa=c;this.Ra=d;this.h=2153775105;this.A=4096}g=T.prototype;g.toString=function(){return[":",z.b(this.pa)].join("")};g.equiv=function(a){return this.o(null,a)};g.o=function(a,b){return b instanceof T?this.pa===b.pa:!1};
g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return F.a(c,this);case 3:return F.f(c,this,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return F.a(c,this)};a.f=function(a,c,d){return F.f(c,this,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Za(b)))};g.b=function(a){return F.a(a,this)};g.a=function(a,b){return F.f(a,this,b)};
g.N=function(){var a=this.Ra;return null!=a?a:this.Ra=a=gc(ac(this.name),dc(this.cb))+2654435769|0};g.S=function(a){return Kb(a,[":",z.b(this.pa)].join(""))};var jd=function jd(a){switch(arguments.length){case 1:return jd.b(arguments[0]);case 2:return jd.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};
jd.b=function(a){if(a instanceof T)return a;if(a instanceof hc){if(null!=a&&(a.A&4096||u===a.Eb))var b=a.cb;else throw Error(["Doesn't support namespace: ",z.b(a)].join(""));return new T(b,kd(a),a.Na,null)}return"string"===typeof a?(b=a.split("/"),2===b.length?new T(b[0],b[1],a,null):new T(null,b[0],a,null)):null};
jd.a=function(a,b){a=a instanceof T?kd(a):a instanceof hc?kd(a):a;b=b instanceof T?kd(b):b instanceof hc?kd(b):b;return new T(a,b,[z.b(w(a)?[z.b(a),"/"].join(""):null),z.b(b)].join(""),null)};jd.u=2;function ld(a,b,c){this.m=a;this.Za=b;this.B=null;this.l=c;this.h=32374988;this.A=1}g=ld.prototype;g.toString=function(){return Wb(this)};g.equiv=function(a){return this.o(null,a)};function md(a){null!=a.Za&&(a.B=a.Za.F?a.Za.F():a.Za.call(null),a.Za=null);return a.B}
g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a){return N(this,a,0)};a.a=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return P(this,a,O(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return P(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.b=a;b.a=function(a,b){return P(this,a,b)};return b}();g.O=function(){return this.m};g.aa=function(){this.I(null);return null==this.B?null:L(this.B)};g.N=function(){var a=this.l;return null!=a?a:this.l=a=oc(this)};g.o=function(a,b){return Bc(this,b)};
g.ba=function(a,b){return Yc(b,this)};g.X=function(a,b,c){return $c(b,c,this)};g.Y=function(){this.I(null);return null==this.B?null:J(this.B)};g.da=function(){this.I(null);return null!=this.B?jc(this.B):kc};g.I=function(){md(this);if(null==this.B)return null;for(var a=this.B;;)if(a instanceof ld)a=md(a);else return this.B=a,I(this.B)};g.P=function(a,b){return new ld(b,function(a){return function(){return a.I(null)}}(this),this.l)};g.T=function(a,b){return Q(b,this)};ld.prototype[Ya]=function(){return mc(this)};
function nd(a){this.jb=a;this.end=0;this.h=2;this.A=0}nd.prototype.add=function(a){this.jb[this.end]=a;return this.end+=1};nd.prototype.oa=function(){var a=new od(this.jb,0,this.end);this.jb=null;return a};nd.prototype.U=function(){return this.end};function od(a,b,c){this.c=a;this.off=b;this.end=c;this.h=524306;this.A=0}g=od.prototype;g.U=function(){return this.end-this.off};g.R=function(a,b){return this.c[this.off+b]};g.$=function(a,b,c){return 0<=b&&b<this.end-this.off?this.c[this.off+b]:c};
g.ob=function(){if(this.off===this.end)throw Error("-drop-first of empty chunk");return new od(this.c,this.off+1,this.end)};g.ba=function(a,b){return wc(this.c,b,this.c[this.off],this.off+1)};g.X=function(a,b,c){return wc(this.c,b,c,this.off)};function pd(a,b,c,d){this.oa=a;this.qa=b;this.m=c;this.l=d;this.h=31850732;this.A=1536}g=pd.prototype;g.toString=function(){return Wb(this)};g.equiv=function(a){return this.o(null,a)};
g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a){return N(this,a,0)};a.a=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return P(this,a,O(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return P(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.b=a;b.a=function(a,b){return P(this,a,b)};return b}();g.O=function(){return this.m};g.aa=function(){if(1<cb(this.oa))return new pd(Qb(this.oa),this.qa,this.m,null);var a=Gb(this.qa);return null==a?null:a};g.N=function(){var a=this.l;return null!=a?a:this.l=a=oc(this)};
g.o=function(a,b){return Bc(this,b)};g.Y=function(){return B.a(this.oa,0)};g.da=function(){return 1<cb(this.oa)?new pd(Qb(this.oa),this.qa,this.m,null):null==this.qa?kc:this.qa};g.I=function(){return this};g.kb=function(){return this.oa};g.eb=function(){return null==this.qa?kc:this.qa};g.P=function(a,b){return new pd(this.oa,this.qa,b,this.l)};g.T=function(a,b){return Q(b,this)};g.pb=function(){return null==this.qa?null:this.qa};pd.prototype[Ya]=function(){return mc(this)};
function qd(a,b){return 0===cb(a)?b:new pd(a,b,null,null)}function rd(a,b){a.add(b)}function sd(a,b){if(xc(b))return O(b);var c=0;for(b=I(b);;)if(null!=b&&c<a)c+=1,b=L(b);else return c}
var td=function td(a){if(null==a)return null;var c=L(a);return null==c?I(J(a)):Q(J(a),td.b?td.b(c):td.call(null,c))},ud=function ud(a){switch(arguments.length){case 0:return ud.F();case 1:return ud.b(arguments[0]);case 2:return ud.a(arguments[0],arguments[1]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return ud.G(arguments[0],arguments[1],new ic(c.slice(2),0,null))}};ud.F=function(){return Lb(Ec)};ud.b=function(a){return a};
ud.a=function(a,b){return Nb(a,b)};ud.G=function(a,b,c){for(;;)if(a=Nb(a,b),w(c))b=J(c),c=L(c);else return a};ud.L=function(a){var b=J(a),c=L(a);a=J(c);c=L(c);return this.G(b,a,c)};ud.u=2;
function vd(a,b,c){var d=I(c);if(0===b)return a.F?a.F():a.call(null);c=D(d);var e=fb(d);if(1===b)return a.b?a.b(c):a.call(null,c);d=D(e);var f=fb(e);if(2===b)return a.a?a.a(c,d):a.call(null,c,d);e=D(f);var h=fb(f);if(3===b)return a.f?a.f(c,d,e):a.call(null,c,d,e);f=D(h);var k=fb(h);if(4===b)return a.C?a.C(c,d,e,f):a.call(null,c,d,e,f);h=D(k);var m=fb(k);if(5===b)return a.ca?a.ca(c,d,e,f,h):a.call(null,c,d,e,f,h);k=D(m);var n=fb(m);if(6===b)return a.Da?a.Da(c,d,e,f,h,k):a.call(null,c,d,e,f,h,k);m=
D(n);var p=fb(n);if(7===b)return a.Ea?a.Ea(c,d,e,f,h,k,m):a.call(null,c,d,e,f,h,k,m);n=D(p);var r=fb(p);if(8===b)return a.Fa?a.Fa(c,d,e,f,h,k,m,n):a.call(null,c,d,e,f,h,k,m,n);p=D(r);var t=fb(r);if(9===b)return a.Ga?a.Ga(c,d,e,f,h,k,m,n,p):a.call(null,c,d,e,f,h,k,m,n,p);r=D(t);var v=fb(t);if(10===b)return a.sa?a.sa(c,d,e,f,h,k,m,n,p,r):a.call(null,c,d,e,f,h,k,m,n,p,r);t=D(v);var A=fb(v);if(11===b)return a.ta?a.ta(c,d,e,f,h,k,m,n,p,r,t):a.call(null,c,d,e,f,h,k,m,n,p,r,t);v=D(A);var C=fb(A);if(12===
b)return a.ua?a.ua(c,d,e,f,h,k,m,n,p,r,t,v):a.call(null,c,d,e,f,h,k,m,n,p,r,t,v);A=D(C);var E=fb(C);if(13===b)return a.va?a.va(c,d,e,f,h,k,m,n,p,r,t,v,A):a.call(null,c,d,e,f,h,k,m,n,p,r,t,v,A);C=D(E);var G=fb(E);if(14===b)return a.wa?a.wa(c,d,e,f,h,k,m,n,p,r,t,v,A,C):a.call(null,c,d,e,f,h,k,m,n,p,r,t,v,A,C);E=D(G);var K=fb(G);if(15===b)return a.xa?a.xa(c,d,e,f,h,k,m,n,p,r,t,v,A,C,E):a.call(null,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E);G=D(K);var U=fb(K);if(16===b)return a.ya?a.ya(c,d,e,f,h,k,m,n,p,r,t,v,A,
C,E,G):a.call(null,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G);K=D(U);var ma=fb(U);if(17===b)return a.za?a.za(c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K):a.call(null,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K);U=D(ma);var Ra=fb(ma);if(18===b)return a.Aa?a.Aa(c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K,U):a.call(null,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K,U);ma=D(Ra);Ra=fb(Ra);if(19===b)return a.Ba?a.Ba(c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K,U,ma):a.call(null,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K,U,ma);var H=D(Ra);fb(Ra);if(20===b)return a.Ca?a.Ca(c,
d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K,U,ma,H):a.call(null,c,d,e,f,h,k,m,n,p,r,t,v,A,C,E,G,K,U,ma,H);throw Error("Only up to 20 arguments supported on functions");}function wd(a,b,c){return null==c?a.b?a.b(b):a.call(a,b):xd(a,b,D(c),L(c))}function xd(a,b,c,d){if(null==d)a=a.a?a.a(b,c):a.call(a,b,c);else{var e=D(d);d=L(d);a=null==d?a.f?a.f(b,c,e):a.call(a,b,c,e):yd(a,b,c,e,D(d),L(d))}return a}
function yd(a,b,c,d,e,f){if(null==f)return a.C?a.C(b,c,d,e):a.call(a,b,c,d,e);var h=D(f),k=L(f);if(null==k)return a.ca?a.ca(b,c,d,e,h):a.call(a,b,c,d,e,h);f=D(k);var m=L(k);if(null==m)return a.Da?a.Da(b,c,d,e,h,f):a.call(a,b,c,d,e,h,f);k=D(m);var n=L(m);if(null==n)return a.Ea?a.Ea(b,c,d,e,h,f,k):a.call(a,b,c,d,e,h,f,k);m=D(n);var p=L(n);if(null==p)return a.Fa?a.Fa(b,c,d,e,h,f,k,m):a.call(a,b,c,d,e,h,f,k,m);n=D(p);var r=L(p);if(null==r)return a.Ga?a.Ga(b,c,d,e,h,f,k,m,n):a.call(a,b,c,d,e,h,f,k,m,n);
p=D(r);var t=L(r);if(null==t)return a.sa?a.sa(b,c,d,e,h,f,k,m,n,p):a.call(a,b,c,d,e,h,f,k,m,n,p);r=D(t);var v=L(t);if(null==v)return a.ta?a.ta(b,c,d,e,h,f,k,m,n,p,r):a.call(a,b,c,d,e,h,f,k,m,n,p,r);t=D(v);var A=L(v);if(null==A)return a.ua?a.ua(b,c,d,e,h,f,k,m,n,p,r,t):a.call(a,b,c,d,e,h,f,k,m,n,p,r,t);v=D(A);var C=L(A);if(null==C)return a.va?a.va(b,c,d,e,h,f,k,m,n,p,r,t,v):a.call(a,b,c,d,e,h,f,k,m,n,p,r,t,v);A=D(C);var E=L(C);if(null==E)return a.wa?a.wa(b,c,d,e,h,f,k,m,n,p,r,t,v,A):a.call(a,b,c,d,
e,h,f,k,m,n,p,r,t,v,A);C=D(E);var G=L(E);if(null==G)return a.xa?a.xa(b,c,d,e,h,f,k,m,n,p,r,t,v,A,C):a.call(a,b,c,d,e,h,f,k,m,n,p,r,t,v,A,C);E=D(G);var K=L(G);if(null==K)return a.ya?a.ya(b,c,d,e,h,f,k,m,n,p,r,t,v,A,C,E):a.call(a,b,c,d,e,h,f,k,m,n,p,r,t,v,A,C,E);G=D(K);var U=L(K);if(null==U)return a.za?a.za(b,c,d,e,h,f,k,m,n,p,r,t,v,A,C,E,G):a.call(a,b,c,d,e,h,f,k,m,n,p,r,t,v,A,C,E,G);K=D(U);var ma=L(U);if(null==ma)return a.Aa?a.Aa(b,c,d,e,h,f,k,m,n,p,r,t,v,A,C,E,G,K):a.call(a,b,c,d,e,h,f,k,m,n,p,r,
t,v,A,C,E,G,K);U=D(ma);var Ra=L(ma);if(null==Ra)return a.Ba?a.Ba(b,c,d,e,h,f,k,m,n,p,r,t,v,A,C,E,G,K,U):a.call(a,b,c,d,e,h,f,k,m,n,p,r,t,v,A,C,E,G,K,U);ma=D(Ra);Ra=L(Ra);if(null==Ra)return a.Ca?a.Ca(b,c,d,e,h,f,k,m,n,p,r,t,v,A,C,E,G,K,U,ma):a.call(a,b,c,d,e,h,f,k,m,n,p,r,t,v,A,C,E,G,K,U,ma);b=[b,c,d,e,h,f,k,m,n,p,r,t,v,A,C,E,G,K,U,ma];for(c=Ra;;)if(c)b.push(D(c)),c=L(c);else break;return a.apply(a,b)}
function V(a,b){if(a.L){var c=a.u,d=sd(c+1,b);return d<=c?vd(a,d,b):a.L(b)}b=I(b);return null==b?a.F?a.F():a.call(a):wd(a,D(b),L(b))}function Kc(a,b,c,d,e,f){return a.L?(f=td(f),b=Q(b,Q(c,Q(d,Q(e,f)))),c=a.u,f=4+sd(c-3,f),f<=c?vd(a,f,b):a.L(b)):yd(a,b,c,d,e,td(f))}function zd(a,b){return!M.a(a,b)}
function Ad(){"undefined"===typeof Ba&&(Ba=function(a){this.Hb=a;this.h=393216;this.A=0},Ba.prototype.P=function(a,b){return new Ba(b)},Ba.prototype.O=function(){return this.Hb},Ba.prototype.Z=function(){return!1},Ba.prototype.next=function(){return Error("No such element")},Ba.prototype.remove=function(){return Error("Unsupported operation")},Ba.Xb=function(){return new Bd(null,1,5,Cd,[Ed],null)},Ba.tb=!0,Ba.hb="cljs.core/t_cljs$core3525",Ba.Gb=function(a){return Kb(a,"cljs.core/t_cljs$core3525")});
return new Ba(Fd)}function Gd(a,b){for(;;){if(null==I(b))return!0;var c=J(b);c=a.b?a.b(c):a.call(null,c);if(w(c))b=L(b);else return!1}}function Hd(a,b){for(;;)if(I(b)){var c=J(b);c=a.b?a.b(c):a.call(null,c);if(w(c))return c;b=L(b)}else return null}
function Id(a){return function(){function b(b,c){return Va(a.a?a.a(b,c):a.call(null,b,c))}function c(b){return Va(a.b?a.b(b):a.call(null,b))}function d(){return Va(a.F?a.F():a.call(null))}var e=null,f=function(){function b(a,b,d){var e=null;if(2<arguments.length){e=0;for(var f=Array(arguments.length-2);e<f.length;)f[e]=arguments[e+2],++e;e=new ic(f,0,null)}return c.call(this,a,b,e)}function c(b,c,d){a.L?(b=Q(b,Q(c,d)),c=a.u,d=2+sd(c-1,d),d=d<=c?vd(a,d,b):a.L(b)):d=xd(a,b,c,I(d));return Va(d)}b.u=
2;b.L=function(a){var b=J(a);a=L(a);var d=J(a);a=jc(a);return c(b,d,a)};b.G=c;return b}();e=function(a,e,m){switch(arguments.length){case 0:return d.call(this);case 1:return c.call(this,a);case 2:return b.call(this,a,e);default:var h=null;if(2<arguments.length){h=0;for(var k=Array(arguments.length-2);h<k.length;)k[h]=arguments[h+2],++h;h=new ic(k,0,null)}return f.G(a,e,h)}throw Error("Invalid arity: "+(arguments.length-1));};e.u=2;e.L=f.L;e.F=d;e.b=c;e.a=b;e.G=f.G;return e}()}
function Jd(a){var b=Kd;return function(){function c(c,d,e){return b.C?b.C(a,c,d,e):b.call(null,a,c,d,e)}function d(c,d){return b.f?b.f(a,c,d):b.call(null,a,c,d)}function e(c){return b.a?b.a(a,c):b.call(null,a,c)}function f(){return b.b?b.b(a):b.call(null,a)}var h=null,k=function(){function c(a,b,c,e){var f=null;if(3<arguments.length){f=0;for(var h=Array(arguments.length-3);f<h.length;)h[f]=arguments[f+3],++f;f=new ic(h,0,null)}return d.call(this,a,b,c,f)}function d(c,d,e,f){return Kc(b,a,c,d,e,R([f]))}
c.u=3;c.L=function(a){var b=J(a);a=L(a);var c=J(a);a=L(a);var e=J(a);a=jc(a);return d(b,c,e,a)};c.G=d;return c}();h=function(a,b,h,r){switch(arguments.length){case 0:return f.call(this);case 1:return e.call(this,a);case 2:return d.call(this,a,b);case 3:return c.call(this,a,b,h);default:var m=null;if(3<arguments.length){m=0;for(var n=Array(arguments.length-3);m<n.length;)n[m]=arguments[m+3],++m;m=new ic(n,0,null)}return k.G(a,b,h,m)}throw Error("Invalid arity: "+(arguments.length-1));};h.u=3;h.L=k.L;
h.F=f;h.b=e;h.a=d;h.f=c;h.G=k.G;return h}()}var Ld=function Ld(a){switch(arguments.length){case 1:return Ld.b(arguments[0]);case 2:return Ld.a(arguments[0],arguments[1]);case 3:return Ld.f(arguments[0],arguments[1],arguments[2]);case 4:return Ld.C(arguments[0],arguments[1],arguments[2],arguments[3]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Ld.G(arguments[0],arguments[1],arguments[2],arguments[3],new ic(c.slice(4),0,null))}};
Ld.b=function(a){return function(b){return function(){function c(c,d){d=a.b?a.b(d):a.call(null,d);return b.a?b.a(c,d):b.call(null,c,d)}function d(a){return b.b?b.b(a):b.call(null,a)}function e(){return b.F?b.F():b.call(null)}var f=null,h=function(){function c(a,b,c){var e=null;if(2<arguments.length){e=0;for(var f=Array(arguments.length-2);e<f.length;)f[e]=arguments[e+2],++e;e=new ic(f,0,null)}return d.call(this,a,b,e)}function d(c,d,e){if(a.L){d=Q(d,e);var f=a.u;e=sd(f,e)+1;e=e<=f?vd(a,e,d):a.L(d)}else e=
wd(a,d,I(e));return b.a?b.a(c,e):b.call(null,c,e)}c.u=2;c.L=function(a){var b=J(a);a=L(a);var c=J(a);a=jc(a);return d(b,c,a)};c.G=d;return c}();f=function(a,b,f){switch(arguments.length){case 0:return e.call(this);case 1:return d.call(this,a);case 2:return c.call(this,a,b);default:var k=null;if(2<arguments.length){k=0;for(var m=Array(arguments.length-2);k<m.length;)m[k]=arguments[k+2],++k;k=new ic(m,0,null)}return h.G(a,b,k)}throw Error("Invalid arity: "+(arguments.length-1));};f.u=2;f.L=h.L;f.F=
e;f.b=d;f.a=c;f.G=h.G;return f}()}};Ld.a=function(a,b){return new ld(null,function(){var c=I(b);if(c){if(Sc(c)){for(var d=Rb(c),e=O(d),f=new nd(Array(e)),h=0;;)if(h<e)rd(f,function(){var b=B.a(d,h);return a.b?a.b(b):a.call(null,b)}()),h+=1;else break;return qd(f.oa(),Ld.a(a,Sb(c)))}return Q(function(){var b=J(c);return a.b?a.b(b):a.call(null,b)}(),Ld.a(a,jc(c)))}return null},null)};
Ld.f=function(a,b,c){return new ld(null,function(){var d=I(b),e=I(c);if(d&&e){var f=Q;var h=J(d);var k=J(e);h=a.a?a.a(h,k):a.call(null,h,k);d=f(h,Ld.f(a,jc(d),jc(e)))}else d=null;return d},null)};Ld.C=function(a,b,c,d){return new ld(null,function(){var e=I(b),f=I(c),h=I(d);if(e&&f&&h){var k=Q;var m=J(e);var n=J(f),p=J(h);m=a.f?a.f(m,n,p):a.call(null,m,n,p);e=k(m,Ld.C(a,jc(e),jc(f),jc(h)))}else e=null;return e},null)};
Ld.G=function(a,b,c,d,e){var f=function m(a){return new ld(null,function(){var b=Ld.a(I,a);return Gd(dd,b)?Q(Ld.a(J,b),m(Ld.a(jc,b))):null},null)};return Ld.a(function(){return function(b){return V(a,b)}}(f),f(Dc.G(e,d,R([c,b]))))};Ld.L=function(a){var b=J(a),c=L(a);a=J(c);var d=L(c);c=J(d);var e=L(d);d=J(e);e=L(e);return this.G(b,a,c,d,e)};Ld.u=4;
function Md(a,b){if("number"!==typeof a)throw Error("Assert failed: (number? n)");return new ld(null,function(){if(0<a){var c=I(b);return c?Q(J(c),Md(a-1,jc(c))):null}return null},null)}function Nd(a,b){if("number"!==typeof a)throw Error("Assert failed: (number? n)");return new ld(null,function(c){return function(){return c(a,b)}}(function(a,b){for(;;)if(b=I(b),0<a&&b)--a,b=jc(b);else return b}),null)}function Od(a,b){return Ld.f(function(a){return a},b,Nd(a,b))}
function Pd(a,b,c,d){this.m=a;this.count=b;this.s=c;this.next=d;this.l=null;this.h=32374988;this.A=1}g=Pd.prototype;g.toString=function(){return Wb(this)};g.equiv=function(a){return this.o(null,a)};g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a){return N(this,a,0)};a.a=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return P(this,a,this.count)}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return P(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.b=a;b.a=function(a,b){return P(this,a,b)};return b}();g.O=function(){return this.m};g.aa=function(){return null==this.next?1<this.count?this.next=new Pd(null,this.count-1,this.s,null):-1===this.count?this:null:this.next};
g.N=function(){var a=this.l;return null!=a?a:this.l=a=oc(this)};g.o=function(a,b){return Bc(this,b)};g.ba=function(a,b){if(-1===this.count)for(var c=b.a?b.a(this.s,this.s):b.call(null,this.s,this.s);;){if(tc(c))return ub(c);c=b.a?b.a(c,this.s):b.call(null,c,this.s)}else for(a=1,c=this.s;;)if(a<this.count){c=b.a?b.a(c,this.s):b.call(null,c,this.s);if(tc(c))return ub(c);a+=1}else return c};
g.X=function(a,b,c){if(-1===this.count)for(c=b.a?b.a(c,this.s):b.call(null,c,this.s);;){if(tc(c))return ub(c);c=b.a?b.a(c,this.s):b.call(null,c,this.s)}else for(a=0;;)if(a<this.count){c=b.a?b.a(c,this.s):b.call(null,c,this.s);if(tc(c))return ub(c);a+=1}else return c};g.Y=function(){return this.s};g.da=function(){return null==this.next?1<this.count?this.next=new Pd(null,this.count-1,this.s,null):-1===this.count?this:kc:this.next};g.I=function(){return this};
g.P=function(a,b){return new Pd(b,this.count,this.s,this.next)};g.T=function(a,b){return Q(b,this)};function Qd(a){return new ld(null,function(){return Q(a.F?a.F():a.call(null),Qd(a))},null)}
function Rd(a,b){return new ld(null,function(){var c=I(b);if(c){if(Sc(c)){for(var d=Rb(c),e=O(d),f=new nd(Array(e)),h=0;;)if(h<e){var k=B.a(d,h);k=a.b?a.b(k):a.call(null,k);w(k)&&(k=B.a(d,h),f.add(k));h+=1}else break;return qd(f.oa(),Rd(a,Sb(c)))}d=J(c);c=jc(c);return w(a.b?a.b(d):a.call(null,d))?Q(d,Rd(a,c)):Rd(a,c)}return null},null)}function Sd(a,b){return Rd(Id(a),b)}function Td(a,b){this.H=a;this.c=b}
function Ud(a){return new Td(a,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null])}function Vd(a){return new Td(a.H,Za(a.c))}function Wd(a){a=a.i;return 32>a?0:a-1>>>5<<5}function Xd(a,b,c){for(;;){if(0===b)return c;var d=Ud(a);d.c[0]=c;c=d;b-=5}}
var Yd=function Yd(a,b,c,d){var f=Vd(c),h=a.i-1>>>b&31;5===b?f.c[h]=d:(c=c.c[h],null!=c?(b-=5,a=Yd.C?Yd.C(a,b,c,d):Yd.call(null,a,b,c,d)):a=Xd(null,b-5,d),f.c[h]=a);return f};function Zd(a,b){throw Error(["No item ",z.b(a)," in vector of length ",z.b(b)].join(""));}function $d(a,b){if(b>=Wd(a))return a.fa;var c=a.root;for(a=a.shift;;)if(0<a){var d=a-5;c=c.c[b>>>a&31];a=d}else return c.c}
var ae=function ae(a,b,c,d,e){var h=Vd(c);if(0===b)h.c[d&31]=e;else{var k=d>>>b&31;b-=5;c=c.c[k];a=ae.ca?ae.ca(a,b,c,d,e):ae.call(null,a,b,c,d,e);h.c[k]=a}return h},be=function be(a,b,c){var e=a.i-2>>>b&31;if(5<b){b-=5;var f=c.c[e];a=be.f?be.f(a,b,f):be.call(null,a,b,f);if(null==a&&0===e)return null;c=Vd(c);c.c[e]=a;return c}if(0===e)return null;c=Vd(c);c.c[e]=null;return c};function ce(a,b,c){this.ib=this.j=0;this.c=a;this.Jb=b;this.start=0;this.end=c}ce.prototype.Z=function(){return this.j<this.end};
ce.prototype.next=function(){32===this.j-this.ib&&(this.c=$d(this.Jb,this.j),this.ib+=32);var a=this.c[this.j&31];this.j+=1;return a};function de(a,b,c,d){return c<d?ee(a,b,zc(a,c),c+1,d):b.F?b.F():b.call(null)}function ee(a,b,c,d,e){var f=c;c=d;for(d=$d(a,d);;)if(c<e){var h=c&31;d=0===h?$d(a,c):d;h=d[h];f=b.a?b.a(f,h):b.call(null,f,h);if(tc(f))return ub(f);c+=1}else return f}function Bd(a,b,c,d,e,f){this.m=a;this.i=b;this.shift=c;this.root=d;this.fa=e;this.l=f;this.h=167666463;this.A=139268}g=Bd.prototype;
g.toString=function(){return Wb(this)};g.equiv=function(a){return this.o(null,a)};g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a){return N(this,a,0)};a.a=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return P(this,a,O(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return P(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.b=a;b.a=function(a,b){return P(this,a,b)};return b}();g.J=function(a,b){return this.v(null,b,null)};g.v=function(a,b,c){return"number"===typeof b?this.$(null,b,c):c};
g.fb=function(a,b,c){a=0;for(var d=c;;)if(a<this.i){var e=$d(this,a);c=e.length;a:for(var f=0;;)if(f<c){var h=f+a,k=e[f];d=b.f?b.f(d,h,k):b.call(null,d,h,k);if(tc(d)){e=d;break a}f+=1}else{e=d;break a}if(tc(e))return ub(e);a+=c;d=e}else return d};g.R=function(a,b){return(0<=b&&b<this.i?$d(this,b):Zd(b,this.i))[b&31]};g.$=function(a,b,c){return 0<=b&&b<this.i?$d(this,b)[b&31]:c};
g.lb=function(a,b){if(0<=a&&a<this.i){if(Wd(this)<=a){var c=Za(this.fa);c[a&31]=b;return new Bd(this.m,this.i,this.shift,this.root,c,null)}return new Bd(this.m,this.i,this.shift,ae(this,this.shift,this.root,a,b),this.fa,null)}if(a===this.i)return this.T(null,b);throw Error(["Index ",z.b(a)," out of bounds  [0,",z.b(this.i),"]"].join(""));};g.ja=function(){var a=this.i;return new ce(0<O(this)?$d(this,0):null,this,a)};g.O=function(){return this.m};g.U=function(){return this.i};
g.Wa=function(){return 0<this.i?this.R(null,this.i-1):null};g.Xa=function(){if(0===this.i)throw Error("Can't pop empty vector");if(1===this.i)return xb(Ec,this.m);if(1<this.i-Wd(this))return new Bd(this.m,this.i-1,this.shift,this.root,this.fa.slice(0,-1),null);var a=$d(this,this.i-2),b=be(this,this.shift,this.root);b=null==b?Cd:b;var c=this.i-1;return 5<this.shift&&null==b.c[1]?new Bd(this.m,c,this.shift-5,b.c[0],a,null):new Bd(this.m,c,this.shift,b,a,null)};
g.N=function(){var a=this.l;return null!=a?a:this.l=a=oc(this)};g.o=function(a,b){if(b instanceof Bd)if(this.i===O(b))for(a=this.ja(null),b=Ub(b);;)if(a.Z()){var c=a.next(),d=b.next();if(!M.a(c,d))return!1}else return!0;else return!1;else return Bc(this,b)};
g.Sa=function(){var a=this.i,b=this.shift,c=new Td({},Za(this.root.c)),d=this.fa,e=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];Tc(d,0,e,0,d.length);return new fe(a,b,c,e)};g.ba=function(a,b){return de(this,b,0,this.i)};
g.X=function(a,b,c){a=0;for(var d=c;;)if(a<this.i){var e=$d(this,a);c=e.length;a:for(var f=0;;)if(f<c){var h=e[f];d=b.a?b.a(d,h):b.call(null,d,h);if(tc(d)){e=d;break a}f+=1}else{e=d;break a}if(tc(e))return ub(e);a+=c;d=e}else return d};g.ra=function(a,b,c){if("number"===typeof b)return this.lb(b,c);throw Error("Vector's key for assoc must be a number.");};g.Va=function(a,b){return"number"!==typeof b||isNaN(b)||Infinity===b||parseFloat(b)!==parseInt(b,10)?!1:0<=b&&b<this.i};
g.I=function(){if(0===this.i)var a=null;else if(32>=this.i)a=new ic(this.fa,0,null);else{a:{a=this.root;for(var b=this.shift;;)if(0<b)b-=5,a=a.c[0];else{a=a.c;break a}}a=new ge(this,a,0,0,null)}return a};g.P=function(a,b){return new Bd(b,this.i,this.shift,this.root,this.fa,this.l)};
g.T=function(a,b){if(32>this.i-Wd(this)){a=this.fa.length;for(var c=Array(a+1),d=0;;)if(d<a)c[d]=this.fa[d],d+=1;else break;c[a]=b;return new Bd(this.m,this.i+1,this.shift,this.root,c,null)}a=(c=this.i>>>5>1<<this.shift)?this.shift+5:this.shift;c?(c=Ud(null),c.c[0]=this.root,d=Xd(null,this.shift,new Td(null,this.fa)),c.c[1]=d):c=Yd(this,this.shift,this.root,new Td(null,this.fa));return new Bd(this.m,this.i+1,a,c,[b],null)};
g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.R(null,c);case 3:return this.$(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return this.R(null,c)};a.f=function(a,c,d){return this.$(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Za(b)))};g.b=function(a){return this.R(null,a)};g.a=function(a,b){return this.$(null,a,b)};
var Cd=new Td(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]),Ec=new Bd(null,0,5,Cd,[],pc);Bd.prototype[Ya]=function(){return mc(this)};
function he(a){if(Ua(a))a:{var b=a.length;if(32>b)a=new Bd(null,b,5,Cd,a,null);else for(var c=32,d=(new Bd(null,32,5,Cd,a.slice(0,32),null)).Sa(null);;)if(c<b){var e=c+1;d=ud.a(d,a[c]);c=e}else{a=Ob(d);break a}}else a=Ob(Zc(Nb,Lb(Ec),a));return a}function ge(a,b,c,d,e){this.ia=a;this.node=b;this.j=c;this.off=d;this.m=e;this.l=null;this.h=32375020;this.A=1536}g=ge.prototype;g.toString=function(){return Wb(this)};g.equiv=function(a){return this.o(null,a)};
g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a){return N(this,a,0)};a.a=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return P(this,a,O(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return P(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.b=a;b.a=function(a,b){return P(this,a,b)};return b}();g.O=function(){return this.m};g.aa=function(){if(this.off+1<this.node.length){var a=new ge(this.ia,this.node,this.j,this.off+1,null);return null==a?null:a}return this.pb()};
g.N=function(){var a=this.l;return null!=a?a:this.l=a=oc(this)};g.o=function(a,b){return Bc(this,b)};g.ba=function(a,b){return de(this.ia,b,this.j+this.off,O(this.ia))};g.X=function(a,b,c){return ee(this.ia,b,c,this.j+this.off,O(this.ia))};g.Y=function(){return this.node[this.off]};g.da=function(){if(this.off+1<this.node.length){var a=new ge(this.ia,this.node,this.j,this.off+1,null);return null==a?kc:a}return this.eb(null)};g.I=function(){return this};
g.kb=function(){var a=this.node;return new od(a,this.off,a.length)};g.eb=function(){var a=this.j+this.node.length;return a<cb(this.ia)?new ge(this.ia,$d(this.ia,a),a,0,null):kc};g.P=function(a,b){return new ge(this.ia,this.node,this.j,this.off,b)};g.T=function(a,b){return Q(b,this)};g.pb=function(){var a=this.j+this.node.length;return a<cb(this.ia)?new ge(this.ia,$d(this.ia,a),a,0,null):null};ge.prototype[Ya]=function(){return mc(this)};function ie(a,b){return a===b.H?b:new Td(a,Za(b.c))}
var je=function je(a,b,c,d){c=ie(a.root.H,c);var f=a.i-1>>>b&31;if(5===b)a=d;else{var h=c.c[f];null!=h?(b-=5,a=je.C?je.C(a,b,h,d):je.call(null,a,b,h,d)):a=Xd(a.root.H,b-5,d)}c.c[f]=a;return c};function fe(a,b,c,d){this.i=a;this.shift=b;this.root=c;this.fa=d;this.A=88;this.h=275}g=fe.prototype;
g.Pa=function(a,b){if(this.root.H){if(32>this.i-Wd(this))this.fa[this.i&31]=b;else{a=new Td(this.root.H,this.fa);var c=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];c[0]=b;this.fa=c;this.i>>>5>1<<this.shift?(b=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],c=this.shift+
5,b[0]=this.root,b[1]=Xd(this.root.H,this.shift,a),this.root=new Td(this.root.H,b),this.shift=c):this.root=je(this,this.shift,this.root,a)}this.i+=1;return this}throw Error("conj! after persistent!");};g.Ya=function(){if(this.root.H){this.root.H=null;var a=this.i-Wd(this),b=Array(a);Tc(this.fa,0,b,0,a);return new Bd(null,this.i,this.shift,this.root,b,null)}throw Error("persistent! called twice");};
g.Ja=function(a,b,c){if("number"===typeof b)return ke(this,b,c);throw Error("TransientVector's key for assoc! must be a number.");};
function ke(a,b,c){if(a.root.H){if(0<=b&&b<a.i){if(Wd(a)<=b)a.fa[b&31]=c;else{var d=function(){return function(){return function k(d,h){h=ie(a.root.H,h);if(0===d)h.c[b&31]=c;else{var f=b>>>d&31;d=k(d-5,h.c[f]);h.c[f]=d}return h}}(a)(a.shift,a.root)}();a.root=d}return a}if(b===a.i)return a.Pa(null,c);throw Error(["Index ",z.b(b)," out of bounds for TransientVector of length",z.b(a.i)].join(""));}throw Error("assoc! after persistent!");}
g.U=function(){if(this.root.H)return this.i;throw Error("count after persistent!");};g.R=function(a,b){if(this.root.H)return(0<=b&&b<this.i?$d(this,b):Zd(b,this.i))[b&31];throw Error("nth after persistent!");};g.$=function(a,b,c){return 0<=b&&b<this.i?this.R(null,b):c};g.J=function(a,b){return this.v(null,b,null)};g.v=function(a,b,c){return"number"===typeof b?this.$(null,b,c):c};
g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.J(null,c);case 3:return this.v(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return this.J(null,c)};a.f=function(a,c,d){return this.v(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Za(b)))};g.b=function(a){return this.J(null,a)};g.a=function(a,b){return this.v(null,a,b)};function le(){this.h=2097152;this.A=0}
le.prototype.equiv=function(a){return this.o(null,a)};le.prototype.o=function(){return!1};var me=new le;function ne(a,b){return Wc(Oc(b)&&!Qc(b)?O(a)===O(b)?(null!=a?a.h&1048576||u===a.Pb||(a.h?0:x(Bb,a)):x(Bb,a))?bd(function(a,d,e){return M.a(F.f(b,d,me),e)?!0:new sc},a):Gd(function(a){return M.a(F.f(b,J(a),me),J(L(a)))},a):null:null)}function oe(a){this.B=a}
oe.prototype.next=function(){if(null!=this.B){var a=J(this.B),b=S(a,0);a=S(a,1);this.B=L(this.B);return{value:[b,a],done:!1}}return{value:null,done:!0}};function pe(a){this.B=a}pe.prototype.next=function(){if(null!=this.B){var a=J(this.B);this.B=L(this.B);return{value:[a,a],done:!1}}return{value:null,done:!0}};
function Ic(a,b){if(b instanceof T)a:{var c=a.length;b=b.pa;for(var d=0;;){if(c<=d){a=-1;break a}if(a[d]instanceof T&&b===a[d].pa){a=d;break a}d+=2}}else if("string"==typeof b||"number"===typeof b)a:for(c=a.length,d=0;;){if(c<=d){a=-1;break a}if(b===a[d]){a=d;break a}d+=2}else if(b instanceof hc)a:for(c=a.length,b=b.Na,d=0;;){if(c<=d){a=-1;break a}if(a[d]instanceof hc&&b===a[d].Na){a=d;break a}d+=2}else if(null==b)a:for(b=a.length,c=0;;){if(b<=c){a=-1;break a}if(null==a[c]){a=c;break a}c+=2}else a:for(c=
a.length,d=0;;){if(c<=d){a=-1;break a}if(M.a(b,a[d])){a=d;break a}d+=2}return a}function qe(a,b){this.key=a;this.s=b;this.l=null;this.h=166619935;this.A=0}g=qe.prototype;g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a){return N(this,a,0)};a.a=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return P(this,a,O(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return P(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.b=a;b.a=function(a,b){return P(this,a,b)};return b}();g.J=function(a,b){return this.$(null,b,null)};g.v=function(a,b,c){return this.$(null,b,c)};g.R=function(a,b){if(0===b)return this.key;if(1===b)return this.s;throw Error("Index out of bounds");};
g.$=function(a,b,c){return 0===b?this.key:1===b?this.s:c};g.lb=function(a,b){return(new Bd(null,2,5,Cd,[this.key,this.s],null)).lb(a,b)};g.O=function(){return null};g.U=function(){return 2};g.Bb=function(){return this.key};g.Cb=function(){return this.s};g.Wa=function(){return this.s};g.Xa=function(){return new Bd(null,1,5,Cd,[this.key],null)};g.N=function(){var a=this.l;return null!=a?a:this.l=a=oc(this)};g.o=function(a,b){return Bc(this,b)};g.ba=function(a,b){return uc(this,b)};
g.X=function(a,b,c){a:{a=cb(this);var d=c;for(c=0;;)if(c<a){var e=B.a(this,c);d=b.a?b.a(d,e):b.call(null,d,e);if(tc(d)){b=ub(d);break a}c+=1}else{b=d;break a}}return b};g.ra=function(a,b,c){return Hc.f(new Bd(null,2,5,Cd,[this.key,this.s],null),b,c)};g.Va=function(a,b){return 0===b||1===b};g.I=function(){return new ic([this.key,this.s],0,null)};g.P=function(a,b){a=new Bd(null,2,5,Cd,[this.key,this.s],null);return"function"==l(a)?new Jc(a,b):null==a?null:xb(a,b)};
g.T=function(a,b){return new Bd(null,3,5,Cd,[this.key,this.s,b],null)};g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.R(null,c);case 3:return this.$(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return this.R(null,c)};a.f=function(a,c,d){return this.$(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Za(b)))};g.b=function(a){return this.R(null,a)};
g.a=function(a,b){return this.$(null,a,b)};function se(a,b,c){this.c=a;this.j=b;this.ha=c;this.h=32374990;this.A=0}g=se.prototype;g.toString=function(){return Wb(this)};g.equiv=function(a){return this.o(null,a)};g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a){return N(this,a,0)};a.a=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return P(this,a,O(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return P(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.b=a;b.a=function(a,b){return P(this,a,b)};return b}();g.O=function(){return this.ha};g.aa=function(){return this.j<this.c.length-2?new se(this.c,this.j+2,this.ha):null};g.U=function(){return(this.c.length-this.j)/2};g.N=function(){return oc(this)};
g.o=function(a,b){return Bc(this,b)};g.ba=function(a,b){return Yc(b,this)};g.X=function(a,b,c){return $c(b,c,this)};g.Y=function(){return new qe(this.c[this.j],this.c[this.j+1])};g.da=function(){return this.j<this.c.length-2?new se(this.c,this.j+2,this.ha):kc};g.I=function(){return this};g.P=function(a,b){return new se(this.c,this.j,b)};g.T=function(a,b){return Q(b,this)};se.prototype[Ya]=function(){return mc(this)};function te(a,b){this.c=a;this.j=0;this.i=b}
te.prototype.Z=function(){return this.j<this.i};te.prototype.next=function(){var a=new qe(this.c[this.j],this.c[this.j+1]);this.j+=2;return a};function Ka(a,b,c,d){this.m=a;this.i=b;this.c=c;this.l=d;this.h=16647951;this.A=139268}g=Ka.prototype;g.toString=function(){return Wb(this)};g.equiv=function(a){return this.o(null,a)};g.keys=function(){return mc(ue(this))};g.entries=function(){return new oe(I(I(this)))};g.values=function(){return mc(ve(this))};g.has=function(a){return Xc(this,a)};
g.get=function(a,b){return this.v(null,a,b)};g.forEach=function(a){for(var b=I(this),c=null,d=0,e=0;;)if(e<d){var f=c.R(null,e),h=S(f,0);f=S(f,1);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=I(b))Sc(b)?(c=Rb(b),b=Sb(b),h=c,d=O(c),c=h):(c=J(b),h=S(c,0),f=S(c,1),a.a?a.a(f,h):a.call(null,f,h),b=L(b),c=null,d=0),e=0;else return null};g.J=function(a,b){return this.v(null,b,null)};g.v=function(a,b,c){a=Ic(this.c,b);return-1===a?c:this.c[a+1]};
g.fb=function(a,b,c){a=this.c.length;for(var d=0;;)if(d<a){var e=this.c[d],f=this.c[d+1];c=b.f?b.f(c,e,f):b.call(null,c,e,f);if(tc(c))return ub(c);d+=2}else return c};g.ja=function(){return new te(this.c,2*this.i)};g.O=function(){return this.m};g.U=function(){return this.i};g.N=function(){var a=this.l;return null!=a?a:this.l=a=qc(this)};
g.o=function(a,b){if(Oc(b)&&!Qc(b))if(a=this.c.length,this.i===b.U(null))for(var c=0;;)if(c<a){var d=b.v(null,this.c[c],Uc);if(d!==Uc)if(M.a(this.c[c+1],d))c+=2;else return!1;else return!1}else return!0;else return!1;else return!1};g.Sa=function(){return new we(this.c.length,Za(this.c))};g.ba=function(a,b){a:if(a=Ub(this),w(a.Z()))for(var c=a.next();;)if(a.Z()){var d=a.next();c=b.a?b.a(c,d):b.call(null,c,d);if(tc(c)){b=ub(c);break a}}else{b=c;break a}else b=b.F?b.F():b.call(null);return b};
g.X=function(a,b,c){return ad(this,b,c)};g.ra=function(a,b,c){a=Ic(this.c,b);if(-1===a){if(this.i<xe){a=this.c;for(var d=a.length,e=Array(d+2),f=0;;)if(f<d)e[f]=a[f],f+=1;else break;e[d]=b;e[d+1]=c;return new Ka(this.m,this.i+1,e,null)}a=ye;a=null!=a?null!=a&&(a.A&4||u===a.Lb)?xb(Ob(Zc(Nb,Lb(a),this)),Lc(a)):Zc(db,a,this):Zc(Dc,kc,this);return xb(lb(a,b,c),this.m)}if(c===this.c[a+1])return this;b=Za(this.c);b[a+1]=c;return new Ka(this.m,this.i,b,null)};g.Va=function(a,b){return-1!==Ic(this.c,b)};
g.I=function(){var a=this.c;return 0<=a.length-2?new se(a,0,null):null};g.P=function(a,b){return new Ka(b,this.i,this.c,this.l)};g.T=function(a,b){if(Rc(b))return this.ra(null,B.a(b,0),B.a(b,1));a=this;for(b=I(b);;){if(null==b)return a;var c=J(b);if(Rc(c))a=a.ra(null,B.a(c,0),B.a(c,1)),b=L(b);else throw Error("conj on a map takes map entries or seqables of map entries");}};
g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.J(null,c);case 3:return this.v(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return this.J(null,c)};a.f=function(a,c,d){return this.v(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Za(b)))};g.b=function(a){return this.J(null,a)};g.a=function(a,b){return this.v(null,a,b)};var Fd=new Ka(null,0,[],rc),xe=8;Ka.prototype[Ya]=function(){return mc(this)};
function we(a,b){this.Ta={};this.Ua=a;this.c=b;this.h=259;this.A=56}g=we.prototype;g.U=function(){if(w(this.Ta))return ed(this.Ua);throw Error("count after persistent!");};g.J=function(a,b){return this.v(null,b,null)};g.v=function(a,b,c){if(w(this.Ta))return a=Ic(this.c,b),-1===a?c:this.c[a+1];throw Error("lookup after persistent!");};
g.Pa=function(a,b){if(w(this.Ta)){if(null!=b&&(b.h&2048||u===b.Ab))return this.Ja(null,nb(b),ob(b));if(Rc(b))return this.Ja(null,b.b?b.b(0):b.call(null,0),b.b?b.b(1):b.call(null,1));a=I(b);for(b=this;;){var c=J(a);if(w(c))a=L(a),b=b.Ja(null,nb(c),ob(c));else return b}}else throw Error("conj! after persistent!");};g.Ya=function(){if(w(this.Ta))return this.Ta=!1,new Ka(null,ed(this.Ua),this.c,null);throw Error("persistent! called twice");};
g.Ja=function(a,b,c){if(w(this.Ta)){a=Ic(this.c,b);if(-1===a){if(this.Ua+2<=2*xe)return this.Ua+=2,this.c.push(b),this.c.push(c),this;a:{a=this.Ua;for(var d=this.c,e=Lb(ye),f=0;;)if(f<a)e=Pb(e,d[f],d[f+1]),f+=2;else break a}return Pb(e,b,c)}c!==this.c[a+1]&&(this.c[a+1]=c);return this}throw Error("assoc! after persistent!");};
g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.v(null,c,null);case 3:return this.v(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return this.v(null,c,null)};a.f=function(a,c,d){return this.v(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Za(b)))};g.b=function(a){return this.v(null,a,null)};g.a=function(a,b){return this.v(null,a,b)};function ze(){this.s=!1}
function Ae(a,b){return a===b?!0:a===b||a instanceof T&&b instanceof T&&a.pa===b.pa?!0:M.a(a,b)}function Be(a,b,c){a=Za(a);a[b]=c;return a}function Ce(a,b,c,d){a=a.Qa(b);a.c[c]=d;return a}function De(a,b,c){for(var d=a.length,e=0,f=c;;)if(e<d){c=a[e];if(null!=c){var h=a[e+1];c=b.f?b.f(f,c,h):b.call(null,f,c,h)}else c=a[e+1],c=null!=c?c.ab(b,f):f;if(tc(c))return c;e+=2;f=c}else return f}function Ee(a){this.c=a;this.j=0;this.ma=this.bb=null}
Ee.prototype.advance=function(){for(var a=this.c.length;;)if(this.j<a){var b=this.c[this.j],c=this.c[this.j+1];null!=b?b=this.bb=new qe(b,c):null!=c?(b=Ub(c),b=b.Z()?this.ma=b:!1):b=!1;this.j+=2;if(b)return!0}else return!1};Ee.prototype.Z=function(){var a=null!=this.bb;return a?a:(a=null!=this.ma)?a:this.advance()};
Ee.prototype.next=function(){if(null!=this.bb){var a=this.bb;this.bb=null;return a}if(null!=this.ma)return a=this.ma.next(),this.ma.Z()||(this.ma=null),a;if(this.advance())return this.next();throw Error("No such element");};Ee.prototype.remove=function(){return Error("Unsupported operation")};function Fe(a,b,c){this.H=a;this.V=b;this.c=c;this.A=131072;this.h=0}g=Fe.prototype;
g.Qa=function(a){if(a===this.H)return this;var b=fd(this.V),c=Array(0>b?4:2*(b+1));Tc(this.c,0,c,0,2*b);return new Fe(a,this.V,c)};g.$a=function(){return Ge(this.c,0,null)};g.ab=function(a,b){return De(this.c,a,b)};g.Ma=function(a,b,c,d){var e=1<<(b>>>a&31);if(0===(this.V&e))return d;var f=fd(this.V&e-1);e=this.c[2*f];f=this.c[2*f+1];return null==e?f.Ma(a+5,b,c,d):Ae(c,e)?f:d};
g.la=function(a,b,c,d,e,f){var h=1<<(c>>>b&31),k=fd(this.V&h-1);if(0===(this.V&h)){var m=fd(this.V);if(2*m<this.c.length){a=this.Qa(a);b=a.c;f.s=!0;a:for(c=2*(m-k),f=2*k+(c-1),m=2*(k+1)+(c-1);;){if(0===c)break a;b[m]=b[f];--m;--c;--f}b[2*k]=d;b[2*k+1]=e;a.V|=h;return a}if(16<=m){k=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];k[c>>>b&31]=He.la(a,b+5,c,d,e,f);for(e=d=0;;)if(32>d)0===
(this.V>>>d&1)?d+=1:(k[d]=null!=this.c[e]?He.la(a,b+5,fc(this.c[e]),this.c[e],this.c[e+1],f):this.c[e+1],e+=2,d+=1);else break;return new Ie(a,m+1,k)}b=Array(2*(m+4));Tc(this.c,0,b,0,2*k);b[2*k]=d;b[2*k+1]=e;Tc(this.c,2*k,b,2*(k+1),2*(m-k));f.s=!0;a=this.Qa(a);a.c=b;a.V|=h;return a}m=this.c[2*k];h=this.c[2*k+1];if(null==m)return m=h.la(a,b+5,c,d,e,f),m===h?this:Ce(this,a,2*k+1,m);if(Ae(d,m))return e===h?this:Ce(this,a,2*k+1,e);f.s=!0;f=b+5;b=fc(m);if(b===c)e=new Je(null,b,2,[m,h,d,e]);else{var n=
new ze;e=He.la(a,f,b,m,h,n).la(a,f,c,d,e,n)}d=2*k;k=2*k+1;a=this.Qa(a);a.c[d]=null;a.c[k]=e;return a};
g.ka=function(a,b,c,d,e){var f=1<<(b>>>a&31),h=fd(this.V&f-1);if(0===(this.V&f)){var k=fd(this.V);if(16<=k){h=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];h[b>>>a&31]=He.ka(a+5,b,c,d,e);for(d=c=0;;)if(32>c)0===(this.V>>>c&1)?c+=1:(h[c]=null!=this.c[d]?He.ka(a+5,fc(this.c[d]),this.c[d],this.c[d+1],e):this.c[d+1],d+=2,c+=1);else break;return new Ie(null,k+1,h)}a=Array(2*(k+1));Tc(this.c,
0,a,0,2*h);a[2*h]=c;a[2*h+1]=d;Tc(this.c,2*h,a,2*(h+1),2*(k-h));e.s=!0;return new Fe(null,this.V|f,a)}var m=this.c[2*h];f=this.c[2*h+1];if(null==m)return k=f.ka(a+5,b,c,d,e),k===f?this:new Fe(null,this.V,Be(this.c,2*h+1,k));if(Ae(c,m))return d===f?this:new Fe(null,this.V,Be(this.c,2*h+1,d));e.s=!0;e=this.V;k=this.c;a+=5;var n=fc(m);if(n===b)c=new Je(null,n,2,[m,f,c,d]);else{var p=new ze;c=He.ka(a,n,m,f,p).ka(a,b,c,d,p)}a=2*h;h=2*h+1;d=Za(k);d[a]=null;d[h]=c;return new Fe(null,e,d)};g.ja=function(){return new Ee(this.c)};
var He=new Fe(null,0,[]);function Ke(a){this.c=a;this.j=0;this.ma=null}Ke.prototype.Z=function(){for(var a=this.c.length;;){if(null!=this.ma&&this.ma.Z())return!0;if(this.j<a){var b=this.c[this.j];this.j+=1;null!=b&&(this.ma=Ub(b))}else return!1}};Ke.prototype.next=function(){if(this.Z())return this.ma.next();throw Error("No such element");};Ke.prototype.remove=function(){return Error("Unsupported operation")};function Ie(a,b,c){this.H=a;this.i=b;this.c=c;this.A=131072;this.h=0}g=Ie.prototype;
g.Qa=function(a){return a===this.H?this:new Ie(a,this.i,Za(this.c))};g.$a=function(){return Le(this.c,0,null)};g.ab=function(a,b){for(var c=this.c.length,d=0;;)if(d<c){var e=this.c[d];if(null!=e){b=e.ab(a,b);if(tc(b))return b;d+=1}else d+=1}else return b};g.Ma=function(a,b,c,d){var e=this.c[b>>>a&31];return null!=e?e.Ma(a+5,b,c,d):d};
g.la=function(a,b,c,d,e,f){var h=c>>>b&31,k=this.c[h];if(null==k)return a=Ce(this,a,h,He.la(a,b+5,c,d,e,f)),a.i+=1,a;b=k.la(a,b+5,c,d,e,f);return b===k?this:Ce(this,a,h,b)};g.ka=function(a,b,c,d,e){var f=b>>>a&31,h=this.c[f];if(null==h)return new Ie(null,this.i+1,Be(this.c,f,He.ka(a+5,b,c,d,e)));a=h.ka(a+5,b,c,d,e);return a===h?this:new Ie(null,this.i,Be(this.c,f,a))};g.ja=function(){return new Ke(this.c)};function Me(a,b,c){b*=2;for(var d=0;;)if(d<b){if(Ae(c,a[d]))return d;d+=2}else return-1}
function Je(a,b,c,d){this.H=a;this.Ka=b;this.i=c;this.c=d;this.A=131072;this.h=0}g=Je.prototype;g.Qa=function(a){if(a===this.H)return this;var b=Array(2*(this.i+1));Tc(this.c,0,b,0,2*this.i);return new Je(a,this.Ka,this.i,b)};g.$a=function(){return Ge(this.c,0,null)};g.ab=function(a,b){return De(this.c,a,b)};g.Ma=function(a,b,c,d){a=Me(this.c,this.i,c);return 0>a?d:Ae(c,this.c[a])?this.c[a+1]:d};
g.la=function(a,b,c,d,e,f){if(c===this.Ka){b=Me(this.c,this.i,d);if(-1===b){if(this.c.length>2*this.i)return b=2*this.i,c=2*this.i+1,a=this.Qa(a),a.c[b]=d,a.c[c]=e,f.s=!0,a.i+=1,a;c=this.c.length;b=Array(c+2);Tc(this.c,0,b,0,c);b[c]=d;b[c+1]=e;f.s=!0;d=this.i+1;a===this.H?(this.c=b,this.i=d,a=this):a=new Je(this.H,this.Ka,d,b);return a}return this.c[b+1]===e?this:Ce(this,a,b+1,e)}return(new Fe(a,1<<(this.Ka>>>b&31),[null,this,null,null])).la(a,b,c,d,e,f)};
g.ka=function(a,b,c,d,e){return b===this.Ka?(a=Me(this.c,this.i,c),-1===a?(a=2*this.i,b=Array(a+2),Tc(this.c,0,b,0,a),b[a]=c,b[a+1]=d,e.s=!0,new Je(null,this.Ka,this.i+1,b)):M.a(this.c[a+1],d)?this:new Je(null,this.Ka,this.i,Be(this.c,a+1,d))):(new Fe(null,1<<(this.Ka>>>a&31),[null,this])).ka(a,b,c,d,e)};g.ja=function(){return new Ee(this.c)};function Ne(a,b,c,d,e){this.m=a;this.na=b;this.j=c;this.B=d;this.l=e;this.h=32374988;this.A=0}g=Ne.prototype;g.toString=function(){return Wb(this)};
g.equiv=function(a){return this.o(null,a)};g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a){return N(this,a,0)};a.a=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return P(this,a,O(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return P(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.b=a;b.a=function(a,b){return P(this,a,b)};return b}();g.O=function(){return this.m};g.aa=function(){return null==this.B?Ge(this.na,this.j+2,null):Ge(this.na,this.j,L(this.B))};g.N=function(){var a=this.l;return null!=a?a:this.l=a=oc(this)};g.o=function(a,b){return Bc(this,b)};
g.ba=function(a,b){return Yc(b,this)};g.X=function(a,b,c){return $c(b,c,this)};g.Y=function(){return null==this.B?new qe(this.na[this.j],this.na[this.j+1]):J(this.B)};g.da=function(){var a=null==this.B?Ge(this.na,this.j+2,null):Ge(this.na,this.j,L(this.B));return null!=a?a:kc};g.I=function(){return this};g.P=function(a,b){return new Ne(b,this.na,this.j,this.B,this.l)};g.T=function(a,b){return Q(b,this)};Ne.prototype[Ya]=function(){return mc(this)};
function Ge(a,b,c){if(null==c)for(c=a.length;;)if(b<c){if(null!=a[b])return new Ne(null,a,b,null,null);var d=a[b+1];if(w(d)&&(d=d.$a(),w(d)))return new Ne(null,a,b+2,d,null);b+=2}else return null;else return new Ne(null,a,b,c,null)}function Oe(a,b,c,d,e){this.m=a;this.na=b;this.j=c;this.B=d;this.l=e;this.h=32374988;this.A=0}g=Oe.prototype;g.toString=function(){return Wb(this)};g.equiv=function(a){return this.o(null,a)};
g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a){return N(this,a,0)};a.a=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return P(this,a,O(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return P(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.b=a;b.a=function(a,b){return P(this,a,b)};return b}();g.O=function(){return this.m};g.aa=function(){return Le(this.na,this.j,L(this.B))};g.N=function(){var a=this.l;return null!=a?a:this.l=a=oc(this)};g.o=function(a,b){return Bc(this,b)};g.ba=function(a,b){return Yc(b,this)};
g.X=function(a,b,c){return $c(b,c,this)};g.Y=function(){return J(this.B)};g.da=function(){var a=Le(this.na,this.j,L(this.B));return null!=a?a:kc};g.I=function(){return this};g.P=function(a,b){return new Oe(b,this.na,this.j,this.B,this.l)};g.T=function(a,b){return Q(b,this)};Oe.prototype[Ya]=function(){return mc(this)};
function Le(a,b,c){if(null==c)for(c=a.length;;)if(b<c){var d=a[b];if(w(d)&&(d=d.$a(),w(d)))return new Oe(null,a,b+1,d,null);b+=1}else return null;else return new Oe(null,a,b,c,null)}function Pe(a,b){this.ea=a;this.ub=b;this.mb=!1}Pe.prototype.Z=function(){return!this.mb||this.ub.Z()};Pe.prototype.next=function(){if(this.mb)return this.ub.next();this.mb=!0;return new qe(null,this.ea)};Pe.prototype.remove=function(){return Error("Unsupported operation")};
function Qe(a,b,c,d,e,f){this.m=a;this.i=b;this.root=c;this.ga=d;this.ea=e;this.l=f;this.h=16123663;this.A=139268}g=Qe.prototype;g.toString=function(){return Wb(this)};g.equiv=function(a){return this.o(null,a)};g.keys=function(){return mc(ue(this))};g.entries=function(){return new oe(I(I(this)))};g.values=function(){return mc(ve(this))};g.has=function(a){return Xc(this,a)};g.get=function(a,b){return this.v(null,a,b)};
g.forEach=function(a){for(var b=I(this),c=null,d=0,e=0;;)if(e<d){var f=c.R(null,e),h=S(f,0);f=S(f,1);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=I(b))Sc(b)?(c=Rb(b),b=Sb(b),h=c,d=O(c),c=h):(c=J(b),h=S(c,0),f=S(c,1),a.a?a.a(f,h):a.call(null,f,h),b=L(b),c=null,d=0),e=0;else return null};g.J=function(a,b){return this.v(null,b,null)};g.v=function(a,b,c){return null==b?this.ga?this.ea:c:null==this.root?c:this.root.Ma(0,fc(b),b,c)};
g.fb=function(a,b,c){a=this.ga?b.f?b.f(c,null,this.ea):b.call(null,c,null,this.ea):c;tc(a)?b=ub(a):null!=this.root?(b=this.root.ab(b,a),b=tc(b)?ub(b):b):b=a;return b};g.ja=function(){var a=this.root?Ub(this.root):Ad();return this.ga?new Pe(this.ea,a):a};g.O=function(){return this.m};g.U=function(){return this.i};g.N=function(){var a=this.l;return null!=a?a:this.l=a=qc(this)};g.o=function(a,b){return ne(this,b)};g.Sa=function(){return new Re(this.root,this.i,this.ga,this.ea)};
g.ra=function(a,b,c){if(null==b)return this.ga&&c===this.ea?this:new Qe(this.m,this.ga?this.i:this.i+1,this.root,!0,c,null);a=new ze;b=(null==this.root?He:this.root).ka(0,fc(b),b,c,a);return b===this.root?this:new Qe(this.m,a.s?this.i+1:this.i,b,this.ga,this.ea,null)};g.Va=function(a,b){return null==b?this.ga:null==this.root?!1:this.root.Ma(0,fc(b),b,Uc)!==Uc};g.I=function(){if(0<this.i){var a=null!=this.root?this.root.$a():null;return this.ga?Q(new qe(null,this.ea),a):a}return null};
g.P=function(a,b){return new Qe(b,this.i,this.root,this.ga,this.ea,this.l)};g.T=function(a,b){if(Rc(b))return this.ra(null,B.a(b,0),B.a(b,1));a=this;for(b=I(b);;){if(null==b)return a;var c=J(b);if(Rc(c))a=a.ra(null,B.a(c,0),B.a(c,1)),b=L(b);else throw Error("conj on a map takes map entries or seqables of map entries");}};
g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.J(null,c);case 3:return this.v(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return this.J(null,c)};a.f=function(a,c,d){return this.v(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Za(b)))};g.b=function(a){return this.J(null,a)};g.a=function(a,b){return this.v(null,a,b)};var ye=new Qe(null,0,null,!1,null,rc);Qe.prototype[Ya]=function(){return mc(this)};
function Re(a,b,c,d){this.H={};this.root=a;this.count=b;this.ga=c;this.ea=d;this.h=259;this.A=56}function Se(a,b,c){if(a.H){if(null==b)a.ea!==c&&(a.ea=c),a.ga||(a.count+=1,a.ga=!0);else{var d=new ze;b=(null==a.root?He:a.root).la(a.H,0,fc(b),b,c,d);b!==a.root&&(a.root=b);d.s&&(a.count+=1)}return a}throw Error("assoc! after persistent!");}g=Re.prototype;g.U=function(){if(this.H)return this.count;throw Error("count after persistent!");};
g.J=function(a,b){return null==b?this.ga?this.ea:null:null==this.root?null:this.root.Ma(0,fc(b),b)};g.v=function(a,b,c){return null==b?this.ga?this.ea:c:null==this.root?c:this.root.Ma(0,fc(b),b,c)};g.Pa=function(a,b){a:if(this.H)if(null!=b&&(b.h&2048||u===b.Ab))a=Se(this,nb(b),ob(b));else if(Rc(b))a=Se(this,b.b?b.b(0):b.call(null,0),b.b?b.b(1):b.call(null,1));else for(a=I(b),b=this;;){var c=J(a);if(w(c))a=L(a),b=Se(b,nb(c),ob(c));else{a=b;break a}}else throw Error("conj! after persistent");return a};
g.Ya=function(){if(this.H){this.H=null;var a=new Qe(null,this.count,this.root,this.ga,this.ea,null)}else throw Error("persistent! called twice");return a};g.Ja=function(a,b,c){return Se(this,b,c)};g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.J(null,c);case 3:return this.v(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return this.J(null,c)};a.f=function(a,c,d){return this.v(null,c,d)};return a}();
g.apply=function(a,b){return this.call.apply(this,[this].concat(Za(b)))};g.b=function(a){return this.J(null,a)};g.a=function(a,b){return this.v(null,a,b)};var W=function W(a){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return W.G(0<c.length?new ic(c.slice(0),0,null):null)};W.G=function(a){for(var b=I(a),c=Lb(ye);;)if(b){a=L(L(b));var d=J(b);b=J(L(b));c=Pb(c,d,b);b=a}else return Ob(c)};W.u=0;W.L=function(a){return this.G(I(a))};
function Te(a,b){this.D=a;this.ha=b;this.h=32374988;this.A=0}g=Te.prototype;g.toString=function(){return Wb(this)};g.equiv=function(a){return this.o(null,a)};g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a){return N(this,a,0)};a.a=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return P(this,a,O(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return P(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.b=a;b.a=function(a,b){return P(this,a,b)};return b}();g.O=function(){return this.ha};g.aa=function(){var a=(null!=this.D?this.D.h&128||u===this.D.gb||(this.D.h?0:x(hb,this.D)):x(hb,this.D))?this.D.aa():L(this.D);return null==a?null:new Te(a,this.ha)};g.N=function(){return oc(this)};
g.o=function(a,b){return Bc(this,b)};g.ba=function(a,b){return Yc(b,this)};g.X=function(a,b,c){return $c(b,c,this)};g.Y=function(){return this.D.Y(null).key};g.da=function(){var a=(null!=this.D?this.D.h&128||u===this.D.gb||(this.D.h?0:x(hb,this.D)):x(hb,this.D))?this.D.aa():L(this.D);return null!=a?new Te(a,this.ha):kc};g.I=function(){return this};g.P=function(a,b){return new Te(this.D,b)};g.T=function(a,b){return Q(b,this)};Te.prototype[Ya]=function(){return mc(this)};
function ue(a){return(a=I(a))?new Te(a,null):null}function Ue(a,b){this.D=a;this.ha=b;this.h=32374988;this.A=0}g=Ue.prototype;g.toString=function(){return Wb(this)};g.equiv=function(a){return this.o(null,a)};g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a){return N(this,a,0)};a.a=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return P(this,a,O(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return P(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.b=a;b.a=function(a,b){return P(this,a,b)};return b}();g.O=function(){return this.ha};g.aa=function(){var a=(null!=this.D?this.D.h&128||u===this.D.gb||(this.D.h?0:x(hb,this.D)):x(hb,this.D))?this.D.aa():L(this.D);return null==a?null:new Ue(a,this.ha)};g.N=function(){return oc(this)};
g.o=function(a,b){return Bc(this,b)};g.ba=function(a,b){return Yc(b,this)};g.X=function(a,b,c){return $c(b,c,this)};g.Y=function(){return this.D.Y(null).s};g.da=function(){var a=(null!=this.D?this.D.h&128||u===this.D.gb||(this.D.h?0:x(hb,this.D)):x(hb,this.D))?this.D.aa():L(this.D);return null!=a?new Ue(a,this.ha):kc};g.I=function(){return this};g.P=function(a,b){return new Ue(this.D,b)};g.T=function(a,b){return Q(b,this)};Ue.prototype[Ya]=function(){return mc(this)};
function ve(a){return(a=I(a))?new Ue(a,null):null}function Ve(a){this.iter=a}Ve.prototype.Z=function(){return this.iter.Z()};Ve.prototype.next=function(){if(this.iter.Z())return this.iter.next().key;throw Error("No such element");};Ve.prototype.remove=function(){return Error("Unsupported operation")};function We(a,b,c){this.m=a;this.La=b;this.l=c;this.h=15077647;this.A=139268}g=We.prototype;g.toString=function(){return Wb(this)};g.equiv=function(a){return this.o(null,a)};g.keys=function(){return mc(I(this))};
g.entries=function(){return new pe(I(I(this)))};g.values=function(){return mc(I(this))};g.has=function(a){return Xc(this,a)};g.forEach=function(a){for(var b=I(this),c=null,d=0,e=0;;)if(e<d){var f=c.R(null,e),h=S(f,0);f=S(f,1);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=I(b))Sc(b)?(c=Rb(b),b=Sb(b),h=c,d=O(c),c=h):(c=J(b),h=S(c,0),f=S(c,1),a.a?a.a(f,h):a.call(null,f,h),b=L(b),c=null,d=0),e=0;else return null};g.J=function(a,b){return this.v(null,b,null)};
g.v=function(a,b,c){return kb(this.La,b)?b:c};g.ja=function(){return new Ve(Ub(this.La))};g.O=function(){return this.m};g.U=function(){return cb(this.La)};g.N=function(){var a=this.l;return null!=a?a:this.l=a=qc(this)};g.o=function(a,b){return Mc(b)&&O(this)===O(b)&&bd(function(){return function(a,d){return(a=Xc(b,d))?a:new sc}}(this),this.La)};g.Sa=function(){return new Xe(Lb(this.La))};g.I=function(){return ue(this.La)};g.P=function(a,b){return new We(b,this.La,this.l)};
g.T=function(a,b){return new We(this.m,Hc.f(this.La,b,null),null)};g.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.J(null,c);case 3:return this.v(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a,c){return this.J(null,c)};a.f=function(a,c,d){return this.v(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Za(b)))};g.b=function(a){return this.J(null,a)};
g.a=function(a,b){return this.v(null,a,b)};var Ye=new We(null,Fd,rc);function Ze(a){for(var b=a.length,c=Lb(Ye),d=0;;)if(d<b)Nb(c,a[d]),d+=1;else break;Ob(c)}We.prototype[Ya]=function(){return mc(this)};function Xe(a){this.Ia=a;this.A=136;this.h=259}g=Xe.prototype;g.Pa=function(a,b){this.Ia=Pb(this.Ia,b,null);return this};g.Ya=function(){return new We(null,Ob(this.Ia),null)};g.U=function(){return O(this.Ia)};g.J=function(a,b){return this.v(null,b,null)};
g.v=function(a,b,c){return jb.f(this.Ia,b,Uc)===Uc?c:b};g.call=function(){function a(a,b,c){return jb.f(this.Ia,b,Uc)===Uc?c:b}function b(a,b){return jb.f(this.Ia,b,Uc)===Uc?null:b}var c=null;c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+(arguments.length-1));};c.a=b;c.f=a;return c}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Za(b)))};
g.b=function(a){return jb.f(this.Ia,a,Uc)===Uc?null:a};g.a=function(a,b){return jb.f(this.Ia,a,Uc)===Uc?b:a};function $e(a){a=I(a);if(null!=a)if(a instanceof ic&&0===a.j)Ze(a.c);else for(var b=Lb(Ye);;)if(null!=a){var c=L(a);b=b.Pa(null,a.Y(null));a=c}else{Ob(b);break}}function kd(a){if(null!=a&&(a.A&4096||u===a.Eb))return a.name;if("string"===typeof a)return a;throw Error(["Doesn't support name: ",z.b(a)].join(""));}
function af(a,b){return new ld(null,function(){var c=I(b);if(c){var d=J(c);d=a.b?a.b(d):a.call(null,d);c=w(d)?Q(J(c),af(a,jc(c))):null}else c=null;return c},null)}function bf(a,b,c){this.j=a;this.end=b;this.step=c}bf.prototype.Z=function(){return 0<this.step?this.j<this.end:this.j>this.end};bf.prototype.next=function(){var a=this.j;this.j+=this.step;return a};function cf(a,b,c,d,e){this.m=a;this.start=b;this.end=c;this.step=d;this.l=e;this.h=32375006;this.A=139264}g=cf.prototype;g.toString=function(){return Wb(this)};
g.equiv=function(a){return this.o(null,a)};g.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a){return N(this,a,0)};a.a=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return P(this,a,O(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return P(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.b=a;b.a=function(a,b){return P(this,a,b)};return b}();g.R=function(a,b){if(0<=b&&b<this.U(null))return this.start+b*this.step;if(0<=b&&this.start>this.end&&0===this.step)return this.start;throw Error("Index out of bounds");};
g.$=function(a,b,c){return 0<=b&&b<this.U(null)?this.start+b*this.step:0<=b&&this.start>this.end&&0===this.step?this.start:c};g.ja=function(){return new bf(this.start,this.end,this.step)};g.O=function(){return this.m};g.aa=function(){return 0<this.step?this.start+this.step<this.end?new cf(this.m,this.start+this.step,this.end,this.step,null):null:this.start+this.step>this.end?new cf(this.m,this.start+this.step,this.end,this.step,null):null};
g.U=function(){return Va(this.I(null))?0:Math.ceil((this.end-this.start)/this.step)};g.N=function(){var a=this.l;return null!=a?a:this.l=a=oc(this)};g.o=function(a,b){return Bc(this,b)};g.ba=function(a,b){return uc(this,b)};g.X=function(a,b,c){for(a=this.start;;)if(0<this.step?a<this.end:a>this.end){c=b.a?b.a(c,a):b.call(null,c,a);if(tc(c))return ub(c);a+=this.step}else return c};g.Y=function(){return null==this.I(null)?null:this.start};
g.da=function(){return null!=this.I(null)?new cf(this.m,this.start+this.step,this.end,this.step,null):kc};g.I=function(){return 0<this.step?this.start<this.end?this:null:0>this.step?this.start>this.end?this:null:this.start===this.end?null:this};g.P=function(a,b){return new cf(b,this.start,this.end,this.step,this.l)};g.T=function(a,b){return Q(b,this)};cf.prototype[Ya]=function(){return mc(this)};
function df(a,b){if("string"===typeof b)return a=a.exec(b),M.a(J(a),b)?1===O(a)?J(a):he(a):null;throw new TypeError("re-matches must match against a string.");}function ef(a,b){if("string"===typeof b)return a=a.exec(b),null==a?null:1===O(a)?J(a):he(a);throw new TypeError("re-find must match against a string.");}
function ff(a,b,c,d,e,f,h){var k=Ga;Ga=null==Ga?null:Ga-1;try{if(null!=Ga&&0>Ga)return Kb(a,"#");Kb(a,c);if(0===Pa.b(f))I(h)&&Kb(a,function(){var a=gf.b(f);return w(a)?a:"..."}());else{if(I(h)){var m=J(h);b.f?b.f(m,a,f):b.call(null,m,a,f)}for(var n=L(h),p=Pa.b(f)-1;;)if(!n||null!=p&&0===p){I(n)&&0===p&&(Kb(a,d),Kb(a,function(){var a=gf.b(f);return w(a)?a:"..."}()));break}else{Kb(a,d);var r=J(n);c=a;h=f;b.f?b.f(r,c,h):b.call(null,r,c,h);var t=L(n);c=p-1;n=t;p=c}}return Kb(a,e)}finally{Ga=k}}
function hf(a,b){b=I(b);for(var c=null,d=0,e=0;;)if(e<d){var f=c.R(null,e);Kb(a,f);e+=1}else if(b=I(b))c=b,Sc(c)?(b=Rb(c),d=Sb(c),c=b,f=O(b),b=d,d=f):(f=J(c),Kb(a,f),b=L(c),c=null,d=0),e=0;else return null}function kf(a){if(null==Ca)throw Error("No *print-fn* fn set for evaluation environment");Ca.b?Ca.b(a):Ca.call(null,a)}var lf={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};
function mf(a){return[z.b('"'),z.b(a.replace(/[\\"\b\f\n\r\t]/g,function(a){return lf[a]})),z.b('"')].join("")}function nf(a,b){return(a=Wc(F.a(a,Na)))?(a=null!=b?b.h&131072||u===b.Db?!0:!1:!1)?null!=Lc(b):a:a}
function of(a,b,c){if(null==a)return Kb(b,"nil");nf(c,a)&&(Kb(b,"^"),pf(Lc(a),b,c),Kb(b," "));if(a.tb)return a.Gb(b);if(null!=a&&(a.h&2147483648||u===a.W))return a.S(b,c);if(!0===a||!1===a)return Kb(b,[z.b(a)].join(""));if("number"===typeof a)return Kb(b,isNaN(a)?"##NaN":a===Number.POSITIVE_INFINITY?"##Inf":a===Number.NEGATIVE_INFINITY?"##-Inf":[z.b(a)].join(""));if(null!=a&&a.constructor===Object)return Kb(b,"#js "),qf(Ld.a(function(b){return new qe(null!=df(/[A-Za-z_\*\+\?!\-'][\w\*\+\?!\-']*/,
b)?jd.b(b):b,a[b])},ea(a)),b,c);if(Ua(a))return ff(b,pf,"#js ["," ","]",c,a);if("string"==typeof a)return w(Ma.b(c))?Kb(b,mf(a)):Kb(b,a);if("function"==l(a)){var d=a.name;c=w(function(){var a=null==d;return a?a:/^[\s\xa0]*$/.test(d)}())?"Function":d;return hf(b,R(["#object[",c,"","]"]))}if(a instanceof Date)return c=function(a,b){for(a=[z.b(a)].join("");;)if(O(a)<b)a=["0",z.b(a)].join("");else return a},hf(b,R(['#inst "',[z.b(a.getUTCFullYear())].join(""),"-",c(a.getUTCMonth()+1,2),"-",c(a.getUTCDate(),
2),"T",c(a.getUTCHours(),2),":",c(a.getUTCMinutes(),2),":",c(a.getUTCSeconds(),2),".",c(a.getUTCMilliseconds(),3),"-",'00:00"']));if(a instanceof RegExp)return hf(b,R(['#"',a.source,'"']));if(w(function(){var b=null==a?null:a.constructor;return null==b?null:b.hb}()))return hf(b,R(["#object[",a.constructor.hb.replace(/\//g,"."),"]"]));d=function(){var b=null==a?null:a.constructor;return null==b?null:b.name}();c=w(function(){var a=null==d;return a?a:/^[\s\xa0]*$/.test(d)}())?"Object":d;return null==
a.constructor?hf(b,R(["#object[",c,"]"])):hf(b,R(["#object[",c," ",[z.b(a)].join(""),"]"]))}function pf(a,b,c){var d=rf.b(c);return w(d)?(c=Hc.f(c,sf,of),d.f?d.f(a,b,c):d.call(null,a,b,c)):of(a,b,c)}function tf(a,b){var c=new Aa;a:{var d=new Vb(c);pf(J(a),d,b);a=I(L(a));for(var e=null,f=0,h=0;;)if(h<f){var k=e.R(null,h);Kb(d," ");pf(k,d,b);h+=1}else if(a=I(a))e=a,Sc(e)?(a=Rb(e),f=Sb(e),e=a,k=O(a),a=f,f=k):(k=J(e),Kb(d," "),pf(k,d,b),a=L(e),e=null,f=0),h=0;else break a}return c}
function uf(a){var b=Hc.f(Ja(),Ma,!1);a=null==a||Va(I(a))?"":[z.b(tf(a,b))].join("");kf(a);Fa?(a=Ja(),kf("\n"),a=(F.a(a,La),null)):a=null;return a}function vf(a,b,c,d,e){return ff(d,function(a,b,d){var e=nb(a);c.f?c.f(e,b,d):c.call(null,e,b,d);Kb(b," ");a=ob(a);return c.f?c.f(a,b,d):c.call(null,a,b,d)},[z.b(a),"{"].join(""),", ","}",e,I(b))}function qf(a,b,c){var d=pf,e=(Oc(a),null),f=S(e,0);e=S(e,1);return w(f)?vf(["#:",z.b(f)].join(""),e,d,b,c):vf(null,a,d,b,c)}ic.prototype.W=u;
ic.prototype.S=function(a,b){return ff(a,pf,"("," ",")",b,this)};ld.prototype.W=u;ld.prototype.S=function(a,b){return ff(a,pf,"("," ",")",b,this)};qe.prototype.W=u;qe.prototype.S=function(a,b){return ff(a,pf,"["," ","]",b,this)};Ne.prototype.W=u;Ne.prototype.S=function(a,b){return ff(a,pf,"("," ",")",b,this)};se.prototype.W=u;se.prototype.S=function(a,b){return ff(a,pf,"("," ",")",b,this)};ge.prototype.W=u;ge.prototype.S=function(a,b){return ff(a,pf,"("," ",")",b,this)};id.prototype.W=u;
id.prototype.S=function(a,b){return ff(a,pf,"("," ",")",b,this)};Qe.prototype.W=u;Qe.prototype.S=function(a,b){return qf(this,a,b)};Oe.prototype.W=u;Oe.prototype.S=function(a,b){return ff(a,pf,"("," ",")",b,this)};We.prototype.W=u;We.prototype.S=function(a,b){return ff(a,pf,"#{"," ","}",b,this)};pd.prototype.W=u;pd.prototype.S=function(a,b){return ff(a,pf,"("," ",")",b,this)};Ue.prototype.W=u;Ue.prototype.S=function(a,b){return ff(a,pf,"("," ",")",b,this)};Pd.prototype.W=u;
Pd.prototype.S=function(a,b){return ff(a,pf,"("," ",")",b,this)};Bd.prototype.W=u;Bd.prototype.S=function(a,b){return ff(a,pf,"["," ","]",b,this)};hd.prototype.W=u;hd.prototype.S=function(a){return Kb(a,"()")};Ka.prototype.W=u;Ka.prototype.S=function(a,b){return qf(this,a,b)};cf.prototype.W=u;cf.prototype.S=function(a,b){return ff(a,pf,"("," ",")",b,this)};Te.prototype.W=u;Te.prototype.S=function(a,b){return ff(a,pf,"("," ",")",b,this)};Fc.prototype.W=u;
Fc.prototype.S=function(a,b){return ff(a,pf,"("," ",")",b,this)};function wf(a){for(;;){var b=a=a.F?a.F():a.call(null);if(!("function"==l(b)||(null!=b?u===b.vb||(b.Wb?0:x($a,b)):x($a,b))))return a}}function xf(a,b){return wf(function(){return V(a,b)})}if("undefined"===typeof yf)var yf=null;"undefined"!==typeof console&&Sa();if("undefined"===typeof zf)var zf=function(){throw Error("cljs.core/*eval* not bound");};var Af=new T(null,"yes","yes",182838819),Bf=new T(null,"bof","bof",-1065437469),Na=new T(null,"meta","meta",1499536964),Oa=new T(null,"dup","dup",556298533),Cf=new T(null,"top","top",-1856271961),Df=new T(null,"cur","cur",1153190599),Ef=new T(null,"right-char","right-char",-1500850071),Ff=new T(null,"start-of-this-tok","start-of-this-tok",1383678987),Gf=new T(null,"mode","mode",654403691),Hf=new T(null,"start","start",-355208981),If=new T(null,"left-char","left-char",509989355),Jf=new T(null,"type",
"type",1174270348),sf=new T(null,"fallback-impl","fallback-impl",-1501286995),La=new T(null,"flush-on-newline","flush-on-newline",-151457939),Kf=new T(null,"string","string",-1989541586),Lf=new T(null,"ch","ch",-554717905),Ma=new T(null,"readably","readably",1129599760),gf=new T(null,"more-marker","more-marker",-14717935),Mf=new T(null,"stop","stop",-2140911342),Nf=new T(null,"line","line",212345235),Of=new T(null,"end-of-this-token","end-of-this-token",350019828),Pa=new T(null,"print-length","print-length",
1931866356),Pf=new T(null,"tok","tok",2091731382),Qf=new T(null,"left-cur","left-cur",2010287159),Rf=new T(null,"do-nothing","do-nothing",1030476282),Sf=new T(null,"end","end",-268185958),Tf=new T(null,"eof","eof",-489063237),rf=new T(null,"alt-impl","alt-impl",670969595),Ed=new hc(null,"meta3526","meta3526",1804008893,null),Uf=new T(null,"i","i",-1386841315),Vf=new T(null,"right-cur","right-cur",1689901919);function Wf(a,b,c){var d=RegExp,e=b.source,f=w(b.ignoreCase)?[z.b("g"),"i"].join(""):"g";f=w(b.multiline)?[z.b(f),"m"].join(""):f;b=w(b.Zb)?[z.b(f),"u"].join(""):f;d=new d(e,b);return a.replace(d,c)}
function Xf(a){return function(){function b(a){var b=null;if(0<arguments.length){b=0;for(var d=Array(arguments.length-0);b<d.length;)d[b]=arguments[b+0],++b;b=new ic(d,0,null)}return c.call(this,b)}function c(b){b=Od(2,b);if(M.a(O(b),1))return b=J(b),a.b?a.b(b):a.call(null,b);b=he(b);return a.b?a.b(b):a.call(null,b)}b.u=0;b.L=function(a){a=I(a);return c(a)};b.G=c;return b}()}
function Yf(a,b,c){if("string"===typeof b)return a.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"),"g"),c);if(b instanceof RegExp)return"string"===typeof c?Wf(a,b,c):Wf(a,b,Xf(c));throw["Invalid match arg: ",z.b(b)].join("");}function Zf(a){var b=new Aa;for(a=I(a);;)if(null!=a)b.append([z.b(J(a))].join("")),a=L(a),null!=a&&b.append("\n");else return b.toString()}
function $f(a){var b=/\n|\r\n/;a="/(?:)/"===[z.b(b)].join("")?Dc.a(he(Q("",Ld.a(z,I(a)))),""):he([z.b(a)].join("").split(b));if(1<O(a))a:for(;;)if(""===(null==a?null:qb(a)))a=null==a?null:rb(a);else break a;return a}function ag(a){var b=a.length-1;return 0<=b&&a.indexOf('"',b)==b};Sa();var bg=new We(null,new Ka(null,3,["(",null,"{",null,"[",null],null),null),cg=new We(null,new Ka(null,3,["]",null,")",null,"}",null],null),null),dg=new Ka(null,7,'()[]{}"")(][}{'.split(""),null);function eg(a,b){return M.a(dg.b?dg.b(a):dg.call(null,a),b)}function fg(a){return w(a)?0==a.lastIndexOf("bracket",0):a}function gg(a){return O(a.getValue())}function X(a){return a.getCursor()}function hg(a,b){return a.posFromIndex(b)}function ig(a){return Y(a,X(a))}
function Y(a,b){return w(b)?a.indexFromPos(b):null}function jg(a,b){return M.a(Y(a,b),gg(a))}function kg(a,b){return a.getTokenAt(b,!0).type}function lg(a,b){return w(b)?a.getTokenAt(b,!0).nb:null}function mg(a,b){return Cc(a.getLineTokens(b.line))}function og(a,b){var c=mg(a,b).end-b.ch;return hg(a,c+Y(a,b))}function pg(a){return Z(a,X(a))}
function Z(a,b){if(w(b)){var c=a.getTokenAt(b,!0),d=jg(a,b),e=0===Y(a,b),f=Y(a,b),h=w(e)?null:a.posFromIndex(f-1),k=w(d)?null:a.posFromIndex(f+1);a:{var m=[Bf,Cf,Df,Ef,Gf,Hf,If,Jf,Kf,Lf,Nf,Pf,Qf,Sf,Tf,Uf,Vf];a=[e,null==c.state.Yb,b,w(d)?null:a.getRange(b,k),c.state.mode,c.start,w(e)?null:a.getRange(h,b),c.type,c.nb,b.ch,b.line,c,h,c.end,d,f,k];b=m.length;c=0;for(e=Lb(ye);;)if(c<b)d=c+1,e=e.Ja(null,m[c],a[c]),c=d;else{m=Ob(e);break a}}return m}return null}
function qg(a){return M.a(a,"comment")||M.a(a,"string")}function rg(a,b,c){a=Z(a,b);var d=null!=a&&(a.h&64||u===a.w)?V(W,a):a;a=F.a(d,Lf);b=F.a(d,Hf);var e=F.a(d,Sf);d=F.a(d,Jf);return M.a(b,a-1+c)&&M.a(e,a+1+c)&&M.a(d,"string-2")}function sg(a,b){return tg(a,b,0,X(a))}function tg(a,b,c,d){var e=Z(a,d),f=null!=e&&(e.h&64||u===e.w)?V(W,e):e;e=F.a(f,Nf);f=F.a(f,Lf);a.replaceRange(b,d);a.setCursor(e,f+O(b)+c);return X(a)}
var ug=function ug(a){switch(arguments.length){case 1:return ug.b(arguments[0]);case 2:return ug.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};q("paredit_cm.core.open_round",ug);ug.b=function(a){return ug.a(a,"(")};
ug.a=function(a,b){var c=pg(a),d=null!=c&&(c.h&64||u===c.w)?V(W,c):c;c=F.a(d,Jf);var e=F.a(d,If);d=F.a(d,Ef);if(M.a("\\",e)||w(qg(c)))return sg(a,b);c=zd(" ",e)&&Va(Xc(bg,e));e=zd(" ",d)&&Va(Xc(cg,d));b=[z.b(c?" ":null),z.b(b),z.b(dg.b?dg.b(b):dg.call(null,b)),z.b(e?" ":null)].join("");return tg(a,b,e?-2:-1,X(a))};ug.u=2;q("paredit_cm.core.open_brace",function(a){return ug.a(a,"{")});
function vg(a,b,c){a=Z(a,b);a=null!=a&&(a.h&64||u===a.w)?V(W,a):a;var d=F.a(a,Kf),e=F.a(a,Jf);F.a(a,Cf);var f=F.a(a,Tf);return w(function(){var a=fg(e);return w(a)?Xc(bg,d):a}())?c+1:w(function(){var a=fg(e);return w(a)?(a=Xc(cg,d),w(a)?0===c:a):a}())?Af:w(function(){var a=fg(e);return w(a)&&(a=Xc(cg,d),w(a))?(a=zd(0,c))?f:a:a}())?Tf:w(function(){var a=fg(e);return w(a)?(a=Xc(cg,d),w(a)?zd(0,c):a):a}())?c-1:c}
function wg(a,b){b=Z(a,b);var c=null!=b&&(b.h&64||u===b.w)?V(W,b):b;b=F.a(c,Uf);var d=F.a(c,Hf);c=F.a(c,Lf);return a.posFromIndex(b-(c-d))}function xg(a,b,c){b=Z(a,b);var d=null!=b&&(b.h&64||u===b.w)?V(W,b):b;b=F.a(d,Uf);var e=F.a(d,Sf);d=F.a(d,Lf);return a.posFromIndex(b+c+(e-d))}function yg(a,b){b=a.posFromIndex(b);b=xg(a,b,0);return Y(a,b)}function zg(){return uf(R(["past"]))}
var Ag=function Ag(a,b,c,d,e){if(0<=e){var h=Z(a,b),k=null!=h&&(h.h&64||u===h.w)?V(W,h):h,m=F.a(k,Qf),n=F.a(k,Uf);d=c.f?c.f(a,b,d):c.call(null,a,b,d);var p=d instanceof T?d.pa:null;switch(p){case "eof":return null;case "stop":return null;case "yes":return b;case "left":return m;case "end-of-this-token":return xg(a,b,0);case "start-of-this-tok":return wg(a,b);default:return function(b,d,h,k,m,n,p,K){return function(){var d=e-1;return Ag.ca?Ag.ca(a,b,c,K,d):Ag.call(null,a,b,c,K,d)}}(xg(a,b,1),d,p,h,
k,m,n,d)}}else return zg()},Bg=function Bg(a,b,c,d,e){if(0<=e){var h=Z(a,b),k=null!=h&&(h.h&64||u===h.w)?V(W,h):h,m=F.a(k,Qf),n=F.a(k,Vf),p=F.a(k,Uf),r=F.a(k,Hf),t=F.a(k,Lf);d=c.f?c.f(a,b,d):c.call(null,a,b,d);var v=d instanceof T?d.pa:null;switch(v){case "bof":return null;case "stop":return null;case "yes":return m;case "right":return n;case "end-of-this-token":return xg(a,b,0);case "start-of-this-tok":return wg(a,b);default:return function(b,d,h,k,m,n,p,r,t,v,ha){return function(){var d=e-1;return Bg.ca?
Bg.ca(a,b,c,ha,d):Bg.call(null,a,b,c,ha,d)}}(M.a(t,r)?a.posFromIndex(p-1):a.posFromIndex(p-(t-r)),d,v,h,k,m,n,p,r,t,d)}}else return zg()};function Cg(a,b){return Dg(a,b,X(a))}function Dg(a,b,c){c=Vf.b(Z(a,c));return w(c)?xf(Ag,R([a,c,b,0,gg(a)])):null}var Eg=function Eg(a){switch(arguments.length){case 1:return Eg.b(arguments[0]);case 2:return Eg.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};q("paredit_cm.core.close_round",Eg);
Eg.b=function(a){return Eg.a(a,")")};Eg.a=function(a,b){var c=pg(a),d=null!=c&&(c.h&64||u===c.w)?V(W,c):c;c=F.a(d,Jf);d=F.a(d,If);if(M.a("\\",d))a=sg(a,b);else if(w(qg(c)))a=sg(a,b);else if(b=Cg(a,vg),w(b)?a.setCursor(b):b=null,w(b)){c=Qf.b(pg(a));c=Z(a,c);var e=null!=c&&(c.h&64||u===c.w)?V(W,c):c,f=F.a(e,Hf);d=F.a(e,Sf);c=F.a(e,Nf);var h=F.a(e,Lf),k=F.a(e,Uf);e=F.a(e,Jf);f=a.posFromIndex(k+(f-h));d=a.posFromIndex(k+(d-h));null==e&&(a.replaceRange("",f,d),w(!0)&&a.indentLine(c));a=b}else a=null;return a};
Eg.u=2;q("paredit_cm.core.close_brace",function(a){return Eg.a(a,"}")});var Fg=function Fg(a){switch(arguments.length){case 1:return Fg.b(arguments[0]);case 2:return Fg.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};q("paredit_cm.core.close_round_and_newline",Fg);Fg.b=function(a){return Fg.a(a,")")};Fg.a=function(a,b){return w(qg(kg(a,X(a))))?sg(a,b):w(Eg.a(a,b))?a.execCommand("newlineAndIndent"):null};Fg.u=2;
q("paredit_cm.core.open_square",function(a){return ug.a(a,"[")});q("paredit_cm.core.close_square",function(a){return Eg.a(a,"]")});q("paredit_cm.core.doublequote",function(a){var b=pg(a),c=null!=b&&(b.h&64||u===b.w)?V(W,b):b,d=F.a(c,Jf),e=F.a(c,If);b=F.a(c,Ef);F.a(c,Lf);F.a(c,Df);M.a("\\",e)?a=sg(a,'"'):M.a(d,"string")?a=sg(a,'\\"'):(c=[z.b(zd(" ",e)?" ":null),'""',z.b(zd(" ",b)&&zd("\n",b)?" ":null)].join(""),b=M.a(" ",b)||M.a("\n",b)?-1:-2,a=tg(a,c,b,X(a)));return a});
function Gg(a){return M.a(a,"atom")||M.a(a,"builtin")||M.a(a,"number")||M.a(a,"variable")||M.a(a,"keyword")}function Hg(a,b){a=Z(a,b);var c=null!=a&&(a.h&64||u===a.w)?V(W,a):a;a=F.a(c,Kf);b=F.a(c,Jf);var d=F.a(c,Hf),e=F.a(c,Sf);c=F.a(c,Gf);return M.a(b,"string")&&M.a(1,e-d)&&M.a(a,'"')&&M.a(c,"string")}
function Ig(a,b){a=Z(a,b);var c=null!=a&&(a.h&64||u===a.w)?V(W,a):a;a=F.a(c,Jf);b=F.a(c,Lf);var d=F.a(c,Sf),e=F.a(c,Kf);c=F.a(c,Gf);return M.a(a,"string")&&M.a(b,d)&&M.a('"',Cc(e))&&zd("\\",Cc(Od(1,e)))&&M.a(c,!1)}
function Jg(a,b,c){var d=Z(a,b),e=null!=d&&(d.h&64||u===d.w)?V(W,d):d,f=F.a(e,Kf),h=F.a(e,Jf);d=F.a(e,Tf);var k=F.a(e,Lf),m=F.a(e,Sf),n=0===c,p=M.a(1,c);e=zd('"',Cc(f))||M.a("\\",Cc(Od(1,f)));return w(function(){var c=Ig(a,b);return w(c)?p:c}())?Af:w(function(){var c=rg(a,b,-1);return w(c)?n:c}())?Af:w(function(){var a=Gg(h);return w(a)?n&&M.a(k,m):a}())?Af:w(function(){var a=fg(h);return w(a)?(a=Xc(cg,f),w(a)?p:a):a}())?Af:w(d)?Tf:null==h?c:M.a(h,"comment")?c:w(Hg(a,b))?c+1:w(function(){var c=Ig(a,
b);return w(c)?n:c}())?Mf:M.a(h,"string")&&p&&e?c:M.a(h,"string")&&p?Of:M.a(h,"string")&&e?c:M.a(h,"string")?c-1:w(function(){var c=rg(a,b,0);return w(c)?n:c}())?Of:w(rg(a,b,0))?c:w(rg(a,b,-1))?c:w(function(){var a=Gg(h);return w(a)?n:a}())?Of:w(Gg(h))?c:w(function(){var a=fg(h);return w(a)?Xc(bg,f):a}())?c+1:w(function(){var a=fg(h);return w(a)?(a=Xc(cg,f),w(a)?n:a):a}())?Mf:w(function(){var a=fg(h);return w(a)?Xc(cg,f):a}())?c-1:Mf}function Kg(a,b){return w(b)?(a.setCursor(b),Cg(a,Jg)):null}
function Lg(a,b,c){var d=Z(a,b);d=null!=d&&(d.h&64||u===d.w)?V(W,d):d;var e=F.a(d,Kf),f=F.a(d,Jf),h=F.a(d,Bf),k=F.a(d,Lf),m=F.a(d,Hf),n=0===c,p=M.a(1,c),r=zd('"',J(e));return w(function(){var c=Hg(a,b);return w(c)?p&&r:c}())?c:w(function(){var c=Hg(a,b);return w(c)?p:c}())?Af:w(function(){var c=rg(a,b,1);return w(c)?n:c}())?Af:w(function(){var a=Gg(f);return w(a)?n&&M.a(k,m):a}())?Af:w(function(){var a=fg(f);return w(a)?(a=Xc(bg,e),w(a)?p:a):a}())?Af:w(h)?Bf:null==f?c:M.a(f,"comment")?c:w(Ig(a,b))?
c+1:w(function(){var c=Hg(a,b);return w(c)?n&&r:c}())?c:w(function(){var c=Hg(a,b);return w(c)?n:c}())?Mf:M.a(f,"string")&&p&&r?c:M.a(f,"string")&&p?Ff:M.a(f,"string")&&r?c:M.a(f,"string")?c-1:w(function(){var c=rg(a,b,0);return w(c)?n:c}())?Ff:w(rg(a,b,0))?c:w(rg(a,b,1))?c:w(function(){var a=Gg(f);return w(a)?n:a}())?Ff:w(Gg(f))?c:w(function(){var a=fg(f);return w(a)?Xc(cg,e):a}())?c+1:w(function(){var a=fg(f);return w(a)?(a=Xc(bg,e),w(a)?n:a):a}())?Mf:w(function(){var a=fg(f);return w(a)?Xc(bg,
e):a}())?c-1:Mf}function Mg(a,b){return w(b)?(a.setCursor(b),b=X(a),w(b)?xf(Bg,R([a,b,Lg,0,gg(a)])):null):null}function Ng(a,b,c){a.setSelection(b,c);a.replaceSelection(['"',z.b(Yf(Yf(a.getSelection(),/[\\]/,"\\\\"),/["]/,'\\"')),'"'].join(""));return a.setCursor(hg(a,Y(a,b)+1))}function Og(a,b){a=kg(a,b);return M.a(a,"string")||M.a(a,"string-2")}
q("paredit_cm.core.meta_doublequote",function(a){var b=pg(a);b=null!=b&&(b.h&64||u===b.w)?V(W,b):b;var c=F.a(b,Jf),d=F.a(b,Tf);b=F.a(b,Df);if(w(d))a=Rf;else if(w(rg(a,b,0)))a=Rf;else if(w(Og(a,b))){b=pg(a);var e=null!=b&&(b.h&64||u===b.w)?V(W,b):b;b=F.a(e,Jf);c=F.a(e,Uf);d=F.a(e,Lf);e=F.a(e,Sf);a=M.a(b,"string")?a.setCursor(a.posFromIndex(c+(e-d))):null}else M.a(c,"comment")?a=sg(a,'"'):(d=X(a),c=Y(a,d),d=Gg(kg(a,d)),c=w(d)?zd(c,yg(a,c)):d,a=w(c)?Ng(a,b,xg(a,b,0)):Ng(a,b,Cg(a,Jg)));return a});
function Pg(a,b,c){var d=Y(a,b);a=Y(a,c);return d<a?b:c}function Qg(a){if(w(a.somethingSelected())){var b=J(a.listSelections()),c=J(a.getSelections()),d=b.anchor,e=b.head;b=Pg(a,d,e);var f=hg(a,Y(a,b)+1),h=Y(a,d);a=Y(a,e);d=h<a?e:d;return new Bd(null,6,5,Cd,[b,f,d,c,f.line,d.line],null)}return null}
function Rg(a,b){var c=Qg(a);if(w(c)){S(c,0);var d=S(c,1);c=S(c,2);a:for(var e=Ec;;){var f=Z(a,d),h=null!=f&&(f.h&64||u===f.w)?V(W,f):f;f=F.a(h,Jf);h=F.a(h,Vf);e=Dc.a(e,f);if(M.a(d,c))break a;d=h}return Gd(b,e)}return null}function Sg(a){return null==a||M.a(a,"comment")}function Tg(a,b){a=Zf(Ld.a(function(a){return Yf(a,/^/,";; ")},$f(a)));return[z.b(a),"\n",z.b(b)].join("")}function Ug(a){return Zf(Ld.a(function(a){return Yf(a,/^\s*;+/,"")},$f(a)))}
function Vg(a,b,c){b=I(new cf(null,b,c+1,1,null));c=null;for(var d=0,e=0;;)if(e<d){var f=c.R(null,e);a.indentLine(f);e+=1}else if(b=I(b))c=b,Sc(c)?(b=Rb(c),d=Sb(c),c=b,f=O(b),b=d,d=f):(f=J(c),a.indentLine(f),b=L(c),c=null,d=0),e=0;else return null}function Kd(a,b,c){return a<c.end?[z.b(b),z.b(gd(c.nb,function(){var b=c.start;return a>b?a:b}()-c.start))].join(""):b}function Wg(a){return a.indentLine(X(a).line)}
function Xg(a){var b=X(a),c=b.ch,d=Y(a,b),e=mg(a,b),f=e.start;b=O(af(function(){return function(a){return M.a(";",a)}}(b,c,d,e,f),e.nb));return a.setCursor(a.posFromIndex(d+(f-c)+b))}function Yg(a){var b=X(a).ch;if(40>b){b=40-b;var c=0<b?new Pd(null,b," ",null):kc;a:for(b=new Aa,c=I(c);;)if(null!=c)b=b.append([z.b(J(c))].join("")),c=L(c);else{b=b.toString();break a}sg(a,b)}}
function Zg(a){var b=X(a);a=a.getLineTokens(b.line);var c=b.ch,d=Ld.a(function(a,b,c){return function(a){return a.end<=c||null==a.type}}(b,a,c),a),e=I(a);if(e){var f=Gd(Vc,d);return f?Hd(function(){return function(a){return null!=a.type}}(f,e,b,a,c,d),a):f}return e}function $g(a,b){var c=Cc(Sd(function(a){return null==a.type},a.getLineTokens(b.line))).end,d=b.ch;b=Y(a,b)+(c-d);b=a.posFromIndex(b);a.setCursor(b)}function ah(a){return a.replaceRange("",X(a),og(a,X(a)))}
function bh(a){Wg(a);$g(a,X(a));sg(a," ");Yg(a);sg(a,"; ");return ah(a)}function ch(a){return Gd(function(a){return null==a.type},a.getLineTokens(X(a).line))}function dh(a){sg(a,";; ");ah(a);return Wg(a)}function eh(a){var b=X(a);a=a.getLineTokens(b.line);b=Ld.a(function(a,b,e){return function(a){return null!=a.type&&(a.end<=e||a.start<e&&e<a.end)}}(b,a,b.ch),a);return(a=I(a))?Hd(Vc,b):a}
q("paredit_cm.core.comment_dwim",function(a){if(w(Rg(a,Ta)))a=Rf;else if(w(Rg(a,Sg))){var b=Qg(a);if(w(b)){S(b,0);var c=S(b,1),d=S(b,2);b=S(b,3);a.replaceSelection(Ug(b));a=Vg(a,c.line,d.line)}else a=null}else if(w(a.somethingSelected())){b=Qg(a);S(b,0);S(b,1);var e=S(b,2);c=S(b,3);d=S(b,4);b=S(b,5);var f=a.getLineTokens(e.line);e=Zc(Jd(e.ch),"",f);f=zd(e,"");var h=og(a,X(a));b=f?b+1:b;f&&a.setSelection(Pg,h);a.replaceSelection(Tg(c,e));a=Vg(a,d,b)}else w(M.a("comment",mg(a,X(a)).type))?(Wg(a),b=
X(a),c=b.ch,d=Y(a,b),b=mg(a,b).start,a.setCursor(a.posFromIndex(d+(b-c))),Yg(a),a=Xg(a)):w(Zg(a))?a=bh(a):(c=pg(a),e=null!=c&&(c.h&64||u===c.w)?V(W,c):c,c=F.a(e,Jf),d=F.a(e,Hf),b=F.a(e,Sf),e=F.a(e,Lf),w(d<e&&e<b&&null!=c)?a=bh(a):w(Og(a,X(a)))?a=bh(a):w(ch(a))?a=dh(a):(c=eh(a),c=w(c)?null==kg(a,X(a)):c,w(c)?(Wg(a),sg(a,"\n\n"),a.execCommand("goLineDown"),a.execCommand("goLineDown"),Wg(a),a.execCommand("goLineUp"),a=dh(a)):w(null==kg(a,X(a)))?(sg(a,"\n"),a.execCommand("goLineDown"),Wg(a),a.execCommand("goLineUp"),
a=dh(a)):a=Rf));return a});function fh(a,b){var c=X(a);b=hg(a,Y(a,c)-b);return a.replaceRange("",b,c)}function gh(a,b){var c=Z(a,b);c=null!=c&&(c.h&64||u===c.w)?V(W,c):c;F.a(c,Kf);var d=F.a(c,Jf),e=F.a(c,If);c=F.a(c,Vf);var f=fg(d);f=w(f)?Xc(cg,e):f;return w(f)?f:(d=M.a(d,"string"))?((e=M.a('"',e))?(e=X(a),tg(a," ",0,b),b=null==kg(a,c),fh(a,1),a.setCursor(e),a=b):a=e,a):d}function hh(a,b,c,d){return(b=M.a(b,"string"))?(c=M.a('"',c))?w(d)?M.a("string",kg(a,d)):d:c:b}
function ih(a,b){b=Z(a,b);var c=null!=b&&(b.h&64||u===b.w)?V(W,b):b;F.a(c,Kf);b=F.a(c,Jf);var d=F.a(c,If);c=F.a(c,Vf);var e=fg(b);e=w(e)?Xc(bg,d):e;return w(e)?e:hh(a,b,d,c)}function jh(a,b){var c=Z(a,b),d=null!=c&&(c.h&64||u===c.w)?V(W,c):c;c=F.a(d,If);var e=F.a(d,Ef);d=F.a(d,Vf);b=ih(a,b);return w(b)?w(d)?(a=gh(a,d),w(a)?eg(c,e):a):d:b}function kh(a,b){a.setCursor(hg(a,b+ig(a)));return X(a)}function lh(a){var b=X(a),c=hg(a,Y(a,b)+1);return a.replaceRange("",b,c)}
function mh(a,b){a=Z(a,b);return null!=a&&null==Jf.b(a)}function nh(a){fh(a,1);return lh(a)}q("paredit_cm.core.forward_delete",function(a){var b=pg(a),c=null!=b&&(b.h&64||u===b.w)?V(W,b):b;b=F.a(c,Df);c=F.a(c,Vf);if(w(a.somethingSelected()))a=a.replaceSelection("");else if(w(mh(a,c)))a=lh(a);else{var d=Z(a,c);var e=null!=d&&(d.h&64||u===d.w)?V(W,d):d;d=F.a(e,Jf);e=F.a(e,If);var f=fg(d);d=w(f)?f:M.a("string",d)&&M.a('"',e);a=Va(d)?lh(a):w(ih(a,c))?kh(a,1):w(jh(a,b))?nh(a):Rf}return a});
q("paredit_cm.core.backward_delete",function(a){var b=X(a);if(w(a.somethingSelected()))a=a.replaceSelection("");else if(w(rg(a,b,0)))a=nh(a);else if(w(rg(a,b,-1)))a=fh(a,2);else{var c=pg(a);var d=null!=c&&(c.h&64||u===c.w)?V(W,c):c;c=F.a(d,If);var e=F.a(d,Ef);d=F.a(d,Df);d=ih(a,d);c=w(d)?Va(eg(c,e)):d;a=w(c)?Rf:w(jh(a,b))?nh(a):w(gh(a,b))?kh(a,-1):fh(a,1)}return a});
function oh(a,b){var c=Z(a,b);var d=null!=c&&(c.h&64||u===c.w)?V(W,c):c;c=F.a(d,Jf);var e=F.a(d,If);d=F.a(d,Vf);c=hh(a,c,e,d);if(w(c))a=c;else{if(c=M.a("string",kg(a,b)))b=Z(a,b),e=null!=b&&(b.h&64||u===b.w)?V(W,b):b,b=F.a(e,Jf),c=F.a(e,If),e=F.a(e,Vf),a=kg(a,e),a=M.a(b,"string")&&M.a('"',c)&&zd(a,"string"),c=Va(a);a=c}return a}
function ph(a,b){var c=Z(a,b),d=null!=c&&(c.h&64||u===c.w)?V(W,c):c;c=F.a(d,If);var e=F.a(d,Vf),f=F.a(d,Jf),h=F.a(d,Kf),k=F.a(d,Lf);d=F.a(d,Sf);if(null==f)return ph(a,e);h=M.a("string",f)&&zd('"',Cc(h));return w(h)?($g(a,b),kh(a,2),ph(a,X(a))):w(hh(a,f,c,e))?(kh(a,1),ph(a,X(a))):M.a("string",f)?kh(a,d-k-1):b}
function qh(a,b){if(w(b)){a=a.getLineTokens(b.line);b=b.ch;var c=Ld.a(function(a,b){return function(a){return a.end<=b||null==a.type||M.a("comment",a.type)}}(a,b),a),d=I(a);if(d){var e=Gd(Vc,c);return e?Hd(function(){return function(a){return null!=a.type}}(e,d,a,b,c),a):e}return d}return null}function rh(a,b,c){b=a.posFromIndex(b);c=a.posFromIndex(c);CodeMirror.emacs.kill(a,b,c);return a.setCursor(b)}function sh(a){var b=J(a.listSelections());return CodeMirror.emacs.kill(a,b.anchor,b.head)}
q("paredit_cm.core.kill",function(a){var b=X(a);if(w(a.somethingSelected()))a=sh(a);else if(w(oh(a,b))){b=X(a);var c=ph(a,b);a.setSelection(b,c);a=sh(a)}else w(qh(a,b))?(a.setSelection(X(a),og(a,X(a))),a=sh(a)):w(rg(a,b,0))?(c=Y(a,X(a)),b=a.posFromIndex(c-1),c=a.posFromIndex(c+1),a.setSelection(b,c),a=sh(a)):w(eh(a))?(b=X(a),c=Cg(a,vg),c=w(c)?hg(a,Y(a,c)-1):null,b=new Bd(null,2,5,Cd,[b,c],null),S(b,0),b=S(b,1),c=X(a),w(b)&&a.setSelection(c,b),a=sh(a)):(b=X(a),c=Kg(a,b),c=w(qh(a,c))?og(a,c):c,w(c)?
(a.setSelection(b,c),a=sh(a)):a=null);return a});function th(a,b){return M.a("comment",kg(a,b))}function uh(a,b){b=Z(a,b);var c=null!=b&&(b.h&64||u===b.w)?V(W,b):b;b=F.a(c,Jf);c=F.a(c,Vf);kg(a,c);return zd("comment",b)&&M.b("comment right-type")}var vh=function vh(a,b,c,d,e){var h=Z(a,a.posFromIndex(b)),k=null!=h&&(h.h&64||u===h.w)?V(W,h):h,m=F.a(k,Ef);return M.a(b,e)?zg():M.a(d,Xc(c,m))?b:function(){return function(){var h=b+1;return vh.ca?vh.ca(a,h,c,d,e):vh.call(null,a,h,c,d,e)}}(h,k,m)};
function wh(a,b,c){return xf(vh,R([a,b,c,!1,gg(a)]))}$e("(){}[]|\x26; \n");$e("; ");var xh=new We(null,new Ka(null,1,[";",null],null),null);Ze([" ",[z.b("\t")].join("")]);function yh(a,b){a=Z(a,a.posFromIndex(b));var c=null!=a&&(a.h&64||u===a.w)?V(W,a):a;a=F.a(c,Lf);var d=F.a(c,Hf);c=F.a(c,Kf);d=ef(/^\s*[\S]*/,c.substring(a-d));a=O(d);d=ag(d)?-1:0;return b+a+d}
function zh(a,b){a=Z(a,a.posFromIndex(b));var c=null!=a&&(a.h&64||u===a.w)?V(W,a):a;a=F.a(c,Lf);var d=F.a(c,Hf);c=F.a(c,Kf);d=ef(/[\S]*\s*$/,c.substring(0,a-d));a=O(d);d=ag(d)?1:0;return b-a-d}function Ah(a,b){rh(a,b,yh(a,b+1));return a.setCursor(a.posFromIndex(b))}
var Bh=function Bh(a,b,c,d){var f=d-1,h=c+1,k=a.posFromIndex(c),m=a.posFromIndex(h);return 0>d?zg():w(jg(a,m))?Rf:w(mh(a,m))?function(c,d){return function(){var f=yg(a,d);return Bh.C?Bh.C(a,b,f,c):Bh.call(null,a,b,f,c)}}(f,h,k,m):w(Hg(a,m))?function(b,c){return function(){return Bh.C?Bh.C(a,c,c,b):Bh.call(null,a,c,c,b)}}(f,h,k,m):w(oh(a,m))?Ah(a,b):w(ih(a,m))?function(b,c){return function(){return Bh.C?Bh.C(a,c,c,b):Bh.call(null,a,c,c,b)}}(f,h,k,m):w(gh(a,m))?function(b,c){return function(){return Bh.C?
Bh.C(a,c,c,b):Bh.call(null,a,c,c,b)}}(f,h,k,m):w(Gg(kg(a,m)))?rh(a,b,yg(a,h)):w(uh(a,k))?function(b,c){return function(){return Bh.C?Bh.C(a,b,b,c):Bh.call(null,a,b,b,c)}}(wh(a,c,xh),f,h,k,m):w(th(a,m))?Ah(a,b):uf(R(["unhandled"]))};q("paredit_cm.core.forward_kill_word",function(a){var b=ig(a);return xf(Bh,R([a,b,b,gg(a)]))});function Dh(a,b){a=Z(a,a.posFromIndex(b));var c=null!=a&&(a.h&64||u===a.w)?V(W,a):a;a=F.a(c,Lf);c=F.a(c,Hf);return b-(a-c)}
function Eh(a,b){var c=Z(a,a.posFromIndex(b)),d=null!=c&&(c.h&64||u===c.w)?V(W,c):c;c=F.a(d,Lf);var e=F.a(d,Hf);d=F.a(d,Kf);c=ef(/\S*\s*$/,d.substring(0,c-e));c=O(c);rh(a,b-c,b);return a.setCursor(a.posFromIndex(b-c))}function Fh(a,b){a=Z(a,b);a=null!=a&&(a.h&64||u===a.w)?V(W,a):a;b=F.a(a,Hf);var c=F.a(a,Sf),d=F.a(a,Jf);return null!=a&&null==d&&M.G(b,c,R([0]))}
function Gh(a,b){a=Z(a,b);var c=null!=a&&(a.h&64||u===a.w)?V(W,a):a;b=F.a(c,Jf);a=F.a(c,If);return(c=null!=c)?(b=M.a("comment",b))?df(/\s|;/,a):b:c}
var Hh=function Hh(a,b,c,d){var f=c-1,h=d-1,k=a.posFromIndex(c);return 0>d?zg():w(0===Y(a,k))?Rf:w(Fh(a,k))?function(b,c){return function(){return Hh.C?Hh.C(a,b,b,c):Hh.call(null,a,b,b,c)}}(f,h,k):w(mh(a,k))?function(d,f){return function(){var d=Dh(a,c);return Hh.C?Hh.C(a,b,d,f):Hh.call(null,a,b,d,f)}}(f,h,k):w(ih(a,k))?function(b,c){return function(){return Hh.C?Hh.C(a,b,b,c):Hh.call(null,a,b,b,c)}}(f,h,k):w(gh(a,k))?function(b,c){return function(){return Hh.C?Hh.C(a,b,b,c):Hh.call(null,a,b,b,c)}}(f,
h,k):w(Gg(kg(a,k)))?rh(a,Dh(a,c),b):w(uh(a,k))?function(b,c,d){return function(){return Bh(a,b,b,d)}}(wh(a,c,xh),f,h,k):w(Gh(a,k))?function(c,d){return function(){return Hh.C?Hh.C(a,b,c,d):Hh.call(null,a,b,c,d)}}(f,h,k):w(th(a,k))?Eh(a,b):uf(R(["unhandled"]))};q("paredit_cm.core.backward_kill_word",function(a){var b=ig(a);return xf(Hh,R([a,b,b,gg(a)]))});
var Ih=function Ih(a,b,c){var e=b+1,f=c-1;b=a.posFromIndex(b);var h=a.posFromIndex(e);return 0>c?zg():null==h?Rf:w(jg(a,h))?Rf:w(mh(a,h))?function(b,c){return function(){return Ih.f?Ih.f(a,b,c):Ih.call(null,a,b,c)}}(e,f,b,h):w(ih(a,h))?a.setCursor(Kg(a,b)):w(gh(a,h))?a.setCursor(h):w(Gg(kg(a,h)))?a.setCursor(hg(a,yg(a,e))):w(th(a,h))?function(b,c){return function(){var e=yg(a,b);return Ih.f?Ih.f(a,e,c):Ih.call(null,a,e,c)}}(e,f,b,h):w(Og(a,h))?a.setCursor(hg(a,yh(a,e))):uf(R(["unhandled"]))};
q("paredit_cm.core.forward",function(a){return xf(Ih,R([a,ig(a),gg(a)]))});
var Jh=function Jh(a,b,c){var e=b-1,f=c-1;b=a.posFromIndex(b);return 0>c?zg():null==b?Rf:w(0===Y(a,b))?a.setCursor(a.posFromIndex(e)):w(mh(a,b))?function(b,c){return function(){return Jh.f?Jh.f(a,b,c):Jh.call(null,a,b,c)}}(e,f,b):w(ih(a,b))?a.setCursor(a.posFromIndex(e)):w(gh(a,b))?a.setCursor(Mg(a,b)):w(Gg(kg(a,b)))?a.setCursor(Mg(a,b)):w(th(a,b))?function(b,c,e){return function(){var b=Mg(a,e);return Jh.f?Jh.f(a,b,c):Jh.call(null,a,b,c)}}(e,f,b):w(Og(a,b))?a.setCursor(hg(a,zh(a,e))):uf(R(["unhandled"]))};
q("paredit_cm.core.backward",function(a){return xf(Jh,R([a,ig(a),gg(a)]))});function Kh(a,b){if(null==b)a=null;else{var c=Og(a,b);c=w(c)?Va(Ig(a,b)):c;a=w(c)?xg(a,b,0):Cg(a,vg)}return a}var Lh=function Lh(a){switch(arguments.length){case 1:return Lh.b(arguments[0]);case 2:return Lh.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};q("paredit_cm.core.forward_up",Lh);Lh.b=function(a){return Lh.a(a,X(a))};
Lh.a=function(a,b){b=Kh(a,b);return w(b)?a.setCursor(b):null};Lh.u=2;var Mh=function Mh(a){switch(arguments.length){case 1:return Mh.b(arguments[0]);case 2:return Mh.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};q("paredit_cm.core.backward_up",Mh);Mh.b=function(a){return Mh.a(a,X(a))};Mh.a=function(a,b){b=Mg(a,Kh(a,b));return w(b)?a.setCursor(b):null};Mh.u=2;
var Nh=function Nh(a){switch(arguments.length){case 1:return Nh.b(arguments[0]);case 2:return Nh.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};q("paredit_cm.core.wrap_round",Nh);Nh.b=function(a){return Nh.a(a,X(a))};Nh.a=function(a,b){b=w(Og(a,b))?xg(a,b,0):Kg(a,b);var c=Mg(a,b),d=Y(a,c)+1,e=a.getRange(c,b);e=["(",z.b(e),")"].join("");a.replaceRange(e,c,b);return a.setCursor(a.posFromIndex(d))};Nh.u=2;
var Oh=function Oh(a){switch(arguments.length){case 1:return Oh.b(arguments[0]);case 2:return Oh.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};q("paredit_cm.core.splice_sexp",Oh);Oh.b=function(a){return Oh.a(a,X(a))};Oh.a=function(a){var b=ig(a)-1,c=Cg(a,vg),d=Mg(a,c),e=w(d)?a.getRange(hg(a,Y(a,d)+1),hg(a,Y(a,c)-1)):null;return w(e)?(a.replaceRange(e,d,c),a.setCursor(a.posFromIndex(b))):null};Oh.u=2;
var Ph=function Ph(a){switch(arguments.length){case 1:return Ph.b(arguments[0]);case 2:return Ph.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};q("paredit_cm.core.splice_sexp_killing_backward",Ph);Ph.b=function(a){return Ph.a(a,X(a))};Ph.a=function(a,b){w(Og(a,b))&&Mh.a(a,b);var c=X(a);b=Cg(a,vg);var d=Mg(a,b);c=w(b)?a.getRange(c,hg(a,Y(a,b)-1)):null;return w(c)?(a.replaceRange(c,d,b),a.setCursor(d)):null};Ph.u=2;
var Qh=function Qh(a){switch(arguments.length){case 1:return Qh.b(arguments[0]);case 2:return Qh.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};q("paredit_cm.core.splice_sexp_killing_forward",Qh);Qh.b=function(a){return Qh.a(a,X(a))};
Qh.a=function(a,b){w(Og(a,b))&&Lh.a(a,b);var c=X(a);b=hg(a,Y(a,c)-1);var d=Cg(a,vg),e=Mg(a,d),f=w(e)?hg(a,Y(a,e)+1):null;w(f)&&a.getRange(e,d);c=w(f)?a.getRange(f,c):null;return w(c)?(a.replaceRange(c,e,d),a.setCursor(b)):null};Qh.u=2;var Rh=function Rh(a){switch(arguments.length){case 1:return Rh.b(arguments[0]);case 2:return Rh.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};q("paredit_cm.core.raise_sexp",Rh);
Rh.b=function(a){return Rh.a(a,X(a))};Rh.a=function(a,b){w(Og(a,b))&&Mh.a(a,b);b=X(a);var c=Kg(a,b);b=w(c)?a.getRange(b,c):null;c=w(b)?Cg(a,vg):null;var d=w(c)?Mg(a,c):null;return w(d)?(a.replaceRange(b,d,c),a.setCursor(d)):null};Rh.u=2;
var Sh=function Sh(a,b,c){if(0<=c){b=Dg(a,vg,b);var e=Kg(a,b);return w(e)?new Bd(null,3,5,Cd,[b,e,lg(a,b)],null):function(b){return function(){var e=c-1;return Sh.f?Sh.f(a,b,e):Sh.call(null,a,b,e)}}(b,e)}return null},Th=function Th(a){switch(arguments.length){case 1:return Th.b(arguments[0]);case 2:return Th.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};q("paredit_cm.core.forward_slurp_sexp",Th);Th.b=function(a){return Th.a(a,X(a))};
Th.a=function(a,b){var c=xf(Sh,R([a,b,gg(a)]));if(w(c)){var d=S(c,0),e=S(c,1);c=S(c,2);tg(a,c,0,e);a.replaceRange("",hg(a,Y(a,d)-O(c)),d)}return a.setCursor(b)};Th.u=2;var Uh=function Uh(a,b,c){if(0>=c||null==b)return null;if(w(ih(a,b)))return b;b=xg(a,b,1);return w(b)?function(b){return function(){var e=c-1;return Uh.f?Uh.f(a,b,e):Uh.call(null,a,b,e)}}(b,b):null};function Vh(a,b){return xf(Uh,R([a,b,gg(a)]))}
var Wh=function Wh(a){switch(arguments.length){case 1:return Wh.b(arguments[0]);case 2:return Wh.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};q("paredit_cm.core.forward_down",Wh);Wh.b=function(a){return Wh.a(a,X(a))};Wh.a=function(a,b){b=Vh(a,b);return w(b)?a.setCursor(b):null};Wh.u=2;
var Xh=function Xh(a,b,c){var e=Z(a,b),f=null!=e&&(e.h&64||u===e.w)?V(W,e):e,h=F.a(f,Qf),k=F.a(f,Uf),m=F.a(f,Hf),n=F.a(f,Lf),p=F.a(f,Bf);return 0>=c?zg():w(gh(a,b))?h:w(p)?null:0===n?function(b,e,f,h){return function(){var b=a.posFromIndex(h-1),e=c-1;return Xh.f?Xh.f(a,b,e):Xh.call(null,a,b,e)}}(e,f,h,k,m,n,p):function(b,e,f,h,k,m){return function(){var b=a.posFromIndex(h-(m-k)),e=c-1;return Xh.f?Xh.f(a,b,e):Xh.call(null,a,b,e)}}(e,f,h,k,m,n,p)},Yh=function Yh(a){switch(arguments.length){case 1:return Yh.b(arguments[0]);
case 2:return Yh.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};q("paredit_cm.core.backward_down",Yh);Yh.b=function(a){return Yh.a(a,X(a))};Yh.a=function(a,b){b=xf(Xh,R([a,b,gg(a)]));return w(b)?a.setCursor(b):null};Yh.u=2;
var Zh=function Zh(a,b,c){if(0<=c){b=Dg(a,vg,b);var e=Mg(a,b),f=Mg(a,e),h=Vh(a,e);return null!=f&&null!=h?new Bd(null,3,5,Cd,[e,f,lg(a,h)],null):function(b,e){return function(){var b=c-1;return Zh.f?Zh.f(a,e,b):Zh.call(null,a,e,b)}}(b,e,f,h)}return null},$h=function $h(a){switch(arguments.length){case 1:return $h.b(arguments[0]);case 2:return $h.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};q("paredit_cm.core.backward_slurp_sexp",$h);
$h.b=function(a){return $h.a(a,X(a))};$h.a=function(a,b){var c=Y(a,b),d=xf(Zh,R([a,b,gg(a)]));if(w(d)){b=S(d,0);var e=S(d,1);d=S(d,2);a.replaceRange("",b,hg(a,Y(a,b)+O(d)));tg(a,d,0,e)}return a.setCursor(a.posFromIndex(c))};$h.u=2;
var ai=function ai(a,b,c){if(0<=c){var e=Dg(a,vg,b),f=hg(a,Y(a,e)-1),h=Mg(a,f),k=Kg(a,Mg(a,h)),m=w(k)?k:Vh(a,Mg(a,Kh(a,h)));b=w(m)?Y(a,m)<Y(a,b):m;var n=w(e)?w(b)?[z.b(lg(a,e))," "].join(""):lg(a,e):null;return null==e?null:null==m?function(b){return function(){var e=c-1;return ai.f?ai.f(a,b,e):ai.call(null,a,b,e)}}(e,f,h,k,m,b,n):new Bd(null,5,5,Cd,[e,f,m,n,b],null)}return null},bi=function bi(a){switch(arguments.length){case 1:return bi.b(arguments[0]);case 2:return bi.a(arguments[0],arguments[1]);
default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};q("paredit_cm.core.forward_barf_sexp",bi);bi.b=function(a){return bi.a(a,X(a))};bi.a=function(a,b){var c=xf(ai,R([a,b,gg(a)]));if(w(c)){var d=S(c,0),e=S(c,1),f=S(c,2),h=S(c,3);c=S(c,4);a.replaceRange("",e,d);tg(a,h,0,f);return w(c)?a.setCursor(hg(a,Y(a,b)+O(h))):a.setCursor(b)}return a.setCursor(b)};bi.u=2;
var ci=function ci(a,b,c){if(0<=c){var e=Mg(a,Kh(a,b)),f=Vh(a,e),h=Kg(a,f),k=Kg(a,h),m=Mg(a,k),n=lg(a,f);b=w(m)?Y(a,b)<Y(a,m):m;return null==e?null:null==h?function(b){return function(){var e=c-1;return ci.f?ci.f(a,b,e):ci.call(null,a,b,e)}}(e,f,h,k,m,n,b):new Bd(null,5,5,Cd,[e,f,m,n,b],null)}return null},di=function di(a){switch(arguments.length){case 1:return di.b(arguments[0]);case 2:return di.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));
}};q("paredit_cm.core.backward_barf_sexp",di);di.b=function(a){return di.a(a,X(a))};di.a=function(a,b){var c=xf(ci,R([a,b,gg(a)]));if(w(c)){var d=S(c,0),e=S(c,1),f=S(c,2),h=S(c,3);c=S(c,4);tg(a,h,0,f);a.replaceRange("",d,e);return w(c)?a.setCursor(hg(a,Y(a,b)-O(h))):a.setCursor(b)}return a.setCursor(b)};di.u=2;
var ei=function ei(a){switch(arguments.length){case 1:return ei.b(arguments[0]);case 2:return ei.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};q("paredit_cm.core.split_sexp",ei);ei.b=function(a){return ei.a(a,X(a))};
ei.a=function(a,b){if(w(Og(a,b))){var c=wh(a,Y(a,b)," ");a.replaceRange('" "',b,a.posFromIndex(c));kh(a,-1);a=kh(a,-1)}else{var d=Dg(a,vg,b);c=lg(a,d);d=Mg(a,d);d=lg(a,hg(a,Y(a,d)+1));if(null!=d&&null!=c){a.setCursor(b);if(w(null==kg(a,X(a))))var e=1;else{sg(a," ");e=X(a);e=Z(a,e);var f=null!=e&&(e.h&64||u===e.w)?V(W,e):e,h=F.a(f,Hf),k=F.a(f,Sf);e=F.a(f,Nf);var m=F.a(f,Lf),n=F.a(f,Uf);f=F.a(f,Jf);h=a.posFromIndex(n+(h-m));k=a.posFromIndex(n+(k-m));null==f&&(a.replaceRange(" ",h,k),w(!1)&&a.indentLine(e));
e=0}k=X(a);e=Y(a,k)+e;k=Mg(a,k);k=Kg(a,k);b=Kg(a,b);b=Mg(a,b);null==b?sg(a,d):tg(a,d,0,b);null==k?(kh(a,-1),sg(a,c)):tg(a,c,0,k);a=a.setCursor(a.posFromIndex(e))}else a=null}return a};ei.u=2;var fi=function fi(a){switch(arguments.length){case 1:return fi.b(arguments[0]);case 2:return fi.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};q("paredit_cm.core.join_sexps",fi);fi.b=function(a){return fi.a(a,X(a))};
fi.a=function(a,b){var c=Mg(a,b);c=Kg(a,c);var d=Kg(a,b);d=Mg(a,d);var e=w(d)?hg(a,Y(a,d)+1):null,f=lg(a,c);e=lg(a,e);var h=null!=d;f=h?(h=null!=c)?eg(e,f):h:h;return w(f)?(a.setCursor(d),lh(a),a.setCursor(c),fh(a,1),a.setCursor(M.a(d.line,c.line)?hg(a,Y(a,b)-1):b)):a.setCursor(b)};fi.u=2;
var gi=function gi(a,b,c){if(0<=c){var e=Mg(a,Kh(a,b));return w(e)?function(b){return function(){var e=c-1;return gi.f?gi.f(a,b,e):gi.call(null,a,b,e)}}(e,e):b}return null},hi=function hi(a){switch(arguments.length){case 1:return hi.b(arguments[0]);case 2:return hi.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};hi.b=function(a){return hi.a(a,X(a))};hi.a=function(a,b){a=gi(a,b,gg(a));return zd(a,b)?a:null};hi.u=2;
var ii=function ii(a){switch(arguments.length){case 1:return ii.b(arguments[0]);case 2:return ii.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};q("paredit_cm.core.reindent_defun",ii);ii.b=function(a){return ii.a(a,X(a))};
ii.a=function(a,b){var c=xf(hi,R([a,b])),d=Kg(a,c),e=w(c)?c.line:null;e=w(c)?b.line-e:null;var f=O(a.getLine(b.line));b=b.ch;return null!=c&&null!=d?(Vg(a,c.line,d.line),c=a.execCommand("goLineDown"),Md(e,Qd(c)),a.execCommand("goLineStart"),a.setCursor(hg(a,ig(a)+b+(O(a.getLine(X(a).line))-f)))):null};ii.u=2;
var ji=function ji(a){switch(arguments.length){case 1:return ji.b(arguments[0]);case 2:return ji.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};q("paredit_cm.core.forward_sexp",ji);ji.b=function(a){return ji.a(a,X(a))};ji.a=function(a,b){b=Kg(a,b);return w(b)?a.setCursor(b):null};ji.u=2;
var ki=function ki(a){switch(arguments.length){case 1:return ki.b(arguments[0]);case 2:return ki.a(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",z.b(arguments.length)].join(""));}};q("paredit_cm.core.backward_sexp",ki);ki.b=function(a){return ki.a(a,X(a))};ki.a=function(a,b){b=Mg(a,b);return w(b)?a.setCursor(b):null};ki.u=2;
})();
