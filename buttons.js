(function(){var t,e,n,r,a,i,o,c,l,s,u,h,f,d,p,b,g=[].slice,y=function(t,e){function n(){this.constructor=t}for(var r in e)m.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},m={}.hasOwnProperty;if(b=this,h=b.document,r={api:"https://api.github.com",anchorClass:"github-button",iconClass:"octicon",icon:"octicon-mark-github",scriptId:"github-bjs",styles:["default","mega"]},(r.script=h.getElementById(r.scriptId))&&(r.url=r.script.src.replace(/buttons\.js([?#].*)?$/,"")),i=function(){function t(){}var e;return t.flatten=function(t){var e,n;return e=function(t,r){var a,i,o,c,l,s;switch(Object.prototype.toString.call(t)){case"[object Object]":for(c in t)s=t[c],e(s,r?r+"."+c:c);break;case"[object Array]":for(a=o=0,l=t.length;l>o;a=++o)i=t[a],e(i,r+"["+a+"]");break;default:n[r]=t}},n={},e(t,""),n},t.expand=function(t){var n,r,a,i,o,c;i=[];for(n in t){for(c=t[n],a=n.match(/((?!\[\d+\])[^.])+|\[\d+\]/g),o=i,r=0;a.length;)null==o[r]&&(o[r]=a[0]===e(a[0])?{}:[]),o=o[r],r=e(a.shift());o[r]=c}return i[0]},e=function(t){var e;return(e=t.match(/^\[(\d+)\]$/))?Number(e[1]):t},t}(),l=function(){function t(){}return t.stringify=function(t){var e,n,r;n=[];for(e in t)r=t[e],n.push(e+"="+(null!=r?r:""));return n.join("&")},t.parse=function(t){var e,n,r,a,i,o,c,l;for(a={},o=t.split("&"),e=0,r=o.length;r>e;e++)i=o[e],""!==i&&(c=i.split("="),n=c[0],l=2<=c.length?g.call(c,1):[],""!==n&&(a[n]=l.join("=")));return a},t}(),c=function(){function t(){}return t.encode=function(t){return"#"+encodeURIComponent(l.stringify(i.flatten(t)))},t.decode=function(t){return null==t&&(t=h.location.hash),i.expand(l.parse(decodeURIComponent(t.replace(/^#/,""))))||{}},t}(),a=function(){function t(t,e){this.$=t&&1===t.nodeType?t:h.createElement(t),e&&e.call(this,this.$)}var e,n,r,a,i,o;return t.prototype.get=function(){return this.$},t.prototype.on=function(){var t,e,r,a,i,o,c;for(r=2<=arguments.length?g.call(arguments,0,i=arguments.length-1):(i=0,[]),a=arguments[i++],t=function(t){return function(e){return a.call(t,e||b.event)}}(this),o=0,c=r.length;c>o;o++)e=r[o],n(this.$,e,t)},t.prototype.once=function(){var t,e,r,a,i,c,l;for(r=2<=arguments.length?g.call(arguments,0,i=arguments.length-1):(i=0,[]),a=arguments[i++],t=function(e){return function(n){var i,c,l;for(c=0,l=r.length;l>c;c++)i=r[c],o(e.$,i,t);return a.call(e,n||b.event)}}(this),c=0,l=r.length;l>c;c++)e=r[c],n(this.$,e,t)},t.prototype.addClass=function(t){r(this.$,t)||e(this.$,t)},t.prototype.removeClass=function(t){r(this.$,t)&&i(this.$,t)},t.prototype.hasClass=function(t){return r(this.$,t)},n=function(t,e,n){t.addEventListener?t.addEventListener(""+e,n):t.attachEvent("on"+e,n)},o=function(t,e,n){t.removeEventListener?t.removeEventListener(""+e,n):t.detachEvent("on"+e,n)},a=/[ \t\n\f\r]+/g,e=function(t,e){t.className+=" "+e},i=function(t,e){t.className=(" "+t.className+" ").replace(a," ").replace(" "+e+" ","").replace(/^ | $/,"")},r=function(t,e){return(" "+t.className+" ").replace(a," ").indexOf(" "+e+" ")>=0},t}(),o=function(t){function e(t){e.__super__.constructor.call(this,"iframe",function(e){var n,r,a,i;r={allowtransparency:!0,scrolling:"no",frameBorder:0};for(n in r)i=r[n],e.setAttribute(n,i);a={border:"none",height:"0",width:"1px"};for(n in a)i=a[n],e.style[n]=i;t&&t.call(this,e)})}var n,r;return y(e,t),e.prototype.html=function(t){var e;try{e=this.$.contentWindow.document,e.open(),e.write(t),e.close()}catch(n){}},e.prototype.load=function(t){return this.$.src=t},e.prototype.size=function(){var t,e,a,i,o,c;try{return a=this.$.contentWindow.document,o=a.documentElement,t=a.body,o.style.overflow=t.style.overflow=b.opera?"scroll":"visible",c=t.scrollWidth,i=t.scrollHeight,1!==n&&(t.style.display="inline-block",e=t.getBoundingClientRect(),c=Math.max(c,r(e.width)),i=Math.max(i,r(e.height)),t.style.display=""),o.style.overflow=t.style.overflow="",{width:c+"px",height:i+"px"}}catch(l){return{}}},e.prototype.resize=function(t){var e,n,r;return n=null!=t?t:this.size(),r=n.width,e=n.height,r&&(this.$.style.width=r),e?this.$.style.height=e:void 0},n=b.devicePixelRatio||1,r=function(t){return Math.ceil(Math.round(t*n)/n*2)/2||0},e}(a),t=function(){function t(){}var e;return t.parse=function(t){var n,r,a,i;return{href:e(t.href),text:t.getAttribute("data-text")||t.textContent||t.innerText,data:{count:{api:(n=t.getAttribute("data-count-api"))&&~n.indexOf("#")?n.replace(/^(?!\/)/,"/"):void 0,href:e(t.getAttribute("data-count-href"))||e(t.href),aria:{label:(a=t.getAttribute("data-count-aria-label"))?a:void 0}},style:(i=t.getAttribute("data-style"))?i:void 0,icon:(r=t.getAttribute("data-icon"))?r:void 0},aria:{label:(a=t.getAttribute("aria-label"))?a:void 0}}},e=function(t){return/^\s*javascript:/i.test(t)?"":t},t}(),e=function(t){function e(t,n,i){var o;e.__super__.constructor.call(this,n),o=function(e){return function(){var n;n=e.size(),e.once("load",function(){this.resize(n),i&&i.call(this,this.$)}),e.load(r.url+"buttons.html"+t)}}(this),this.once("load",function(){var t;(n=this.$.contentWindow.callback)?(t=n.script,t.readyState?new a(t).on("readystatechange",function(){/loaded|complete/.test(t.readyState)&&o()}):new a(t).on("load","error",function(){o()})):o()}),this.html('<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<title></title>\n<base target="_blank"><!--[if lte IE 6]></base><![endif]-->\n<link rel="stylesheet" href="'+r.url+'assets/css/buttons.css">\n<script>document.location.hash = "'+t+'";</script>\n</head>\n<body>\n<script src="'+r.script.src+'"></script>\n</body>\n</html>')}return y(e,t),e}(o),n=function(){function t(t){t&&t.data&&(h.body.className=function(){var e,n,a,i;for(a=r.styles,e=0,n=a.length;n>e;e++)if(i=a[e],i===t.data.style)return i}()||r.styles[0],t.href&&(h.getElementsByTagName("base")[0].href=t.href),new e(t,function(t){h.body.appendChild(t)}),new n(t.data.count,function(t){h.body.appendChild(t)}))}var e,n;return e=function(t){function e(t,n){e.__super__.constructor.call(this,"a",function(e){e.className="button",t.href&&(e.href=t.href),t.aria.label&&e.setAttribute("aria-label",t.aria.label),new a("i",function(n){n=h.createElement("i"),n.className=(t.data.icon||r.icon)+(r.iconClass?" "+r.iconClass:""),n.setAttribute("aria-hidden","true"),e.appendChild(n)}),new a("span",function(t){t.appendChild(h.createTextNode(" ")),e.appendChild(t)}),new a("span",function(n){t.text&&n.appendChild(h.createTextNode(t.text)),e.appendChild(n)}),n&&n(e)})}return y(e,t),e}(a),n=function(t){function e(t,n){t&&t.api&&e.__super__.constructor.call(this,"a",function(e){e.className="count",t.href&&(e.href=t.href),new a("b",function(t){e.appendChild(t)}),new a("i",function(t){e.appendChild(t)}),new a("span",function(o){var c;e.appendChild(o),c=function(){var e,n;return n=t.api.split("#")[0],e=l.parse(n.split("?").slice(1).join("?")),e.callback="callback",n.split("?")[0]+"?"+l.stringify(e)}(),new a("script",function(a){var l;a.async=!0,a.src=""+r.api+c,b.callback=function(r){var a;b.callback=null,200===r.meta.status&&(a=i.flatten(r.data)[t.api.split("#").slice(1).join("#")],"[object Number]"===Object.prototype.toString.call(a)&&(a=(""+a).replace(/\B(?=(\d{3})+(?!\d))/g,",")),o.appendChild(h.createTextNode(" "+a+" ")),t.aria.label&&e.setAttribute("aria-label",t.aria.label.replace("#",a)),n&&n(e))},b.callback.script=a,this.on("error",function(){b.callback=null}),a.readyState&&this.on("readystatechange",function(){"loaded"===a.readyState&&a.children&&"loading"===a.readyState&&(b.callback=null)}),l=h.getElementsByTagName("head")[0],l.insertBefore(a,l.firstChild)})})})}return y(e,t),e}(a),t}(),r.script)for(u=h.querySelectorAll?h.querySelectorAll("a."+r.anchorClass):function(){var t,e,n,i;for(n=h.getElementsByTagName("a"),i=[],t=0,e=n.length;e>t;t++)s=n[t],new a(s).hasClass(r.anchorClass)&&i.push(s);return i}(),f=function(n){new e(c.encode(t.parse(n)),function(t){n.parentNode.insertBefore(t,n)},function(){n.parentNode.removeChild(n)})},d=0,p=u.length;p>d;d++)s=u[d],f(s);else new n(c.decode())}).call(this);
//# sourceMappingURL=buttons.js.map