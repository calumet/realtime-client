/*!
 * Universidad Industrial de Santander
 * Grupo de Desarrollo de Software Calumet
 * Elise Library, Functionality
 * Duvan Vargas, @DuvanJamid; Romel Perez, prhone.blogspot.com
 * CODIFICACIÓN UTF-8
 * 2014-05-21 11:43
 **/
/*! Underscore.js 1.6.0
** http://underscorejs.org
** (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
** Underscore may be freely distributed under the MIT license.
**/
(function(){var ak=this,ae=ak._,ag={},au=Array.prototype,ad=Object.prototype,ap=Function.prototype,ay=au.push,aj=au.slice,aw=au.concat,am=ad.toString,at=ad.hasOwnProperty,af=au.forEach,ai=au.map,aq=au.reduce,ac=au.reduceRight,ar=au.filter,av=au.every,al=au.some,Z=au.indexOf,ax=au.lastIndexOf,aa=Array.isArray,ab=Object.keys,az=ap.bind,ao=function(a){return a instanceof ao?a:this instanceof ao?void (this._wrapped=a):new ao(a);
};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=ao),exports._=ao):ak._=ao,ao.VERSION="1.6.0";var X=ao.each=ao.forEach=function(h,f,g){if(null==h){return h;
}if(af&&h.forEach===af){h.forEach(f,g);}else{if(h.length===+h.length){for(var c=0,d=h.length;d>c;c++){if(f.call(g,h[c],c,h)===ag){return;}}}else{for(var b=ao.keys(h),c=0,d=b.length;
d>c;c++){if(f.call(g,h[b[c]],b[c],h)===ag){return;}}}}return h;};ao.map=ao.collect=function(d,a,b){var c=[];return null==d?c:ai&&d.map===ai?d.map(a,b):(X(d,function(g,e,f){c.push(a.call(b,g,e,f));
}),c);};var J="Reduce of empty array with no initial value";ao.reduce=ao.foldl=ao.inject=function(f,b,c,d){var a=arguments.length>2;if(null==f&&(f=[]),aq&&f.reduce===aq){return d&&(b=ao.bind(b,d)),a?f.reduce(b,c):f.reduce(b);
}if(X(f,function(h,g,e){a?c=b.call(d,c,h,g,e):(c=h,a=!0);}),!a){throw new TypeError(J);}return c;},ao.reduceRight=ao.foldr=function(j,f,g,h){var c=arguments.length>2;
if(null==j&&(j=[]),ac&&j.reduceRight===ac){return h&&(f=ao.bind(f,h)),c?j.reduceRight(f,g):j.reduceRight(f);}var d=j.length;if(d!==+d){var b=ao.keys(j);
d=b.length;}if(X(j,function(e,i,a){i=b?b[--d]:--d,c?g=f.call(h,g,j[i],i,a):(g=j[i],c=!0);}),!c){throw new TypeError(J);}return g;},ao.find=ao.detect=function(d,a,b){var c;
return an(d,function(g,e,f){return a.call(b,g,e,f)?(c=g,!0):void 0;}),c;},ao.filter=ao.select=function(d,a,b){var c=[];return null==d?c:ar&&d.filter===ar?d.filter(a,b):(X(d,function(g,e,f){a.call(b,g,e,f)&&c.push(g);
}),c);},ao.reject=function(c,a,b){return ao.filter(c,function(g,f,d){return !a.call(b,g,f,d);},b);},ao.every=ao.all=function(d,b,c){b||(b=ao.identity);
var a=!0;return null==d?a:av&&d.every===av?d.every(b,c):(X(d,function(g,f,e){return(a=a&&b.call(c,g,f,e))?void 0:ag;}),!!a);};var an=ao.some=ao.any=function(d,b,c){b||(b=ao.identity);
var a=!1;return null==d?a:al&&d.some===al?d.some(b,c):(X(d,function(g,f,e){return a||(a=b.call(c,g,f,e))?ag:void 0;}),!!a);};ao.contains=ao.include=function(b,a){return null==b?!1:Z&&b.indexOf===Z?b.indexOf(a)!=-1:an(b,function(c){return c===a;
});},ao.invoke=function(d,a){var b=aj.call(arguments,2),c=ao.isFunction(a);return ao.map(d,function(e){return(c?a:e[a]).apply(e,b);});},ao.pluck=function(b,a){return ao.map(b,ao.property(a));
},ao.where=function(b,a){return ao.filter(b,ao.matches(a));},ao.findWhere=function(b,a){return ao.find(b,ao.matches(a));},ao.max=function(f,b,c){if(!b&&ao.isArray(f)&&f[0]===+f[0]&&f.length<65535){return Math.max.apply(Math,f);
}var d=-1/0,a=-1/0;return X(f,function(j,g,e){var h=b?b.call(c,j,g,e):j;h>a&&(d=j,a=h);}),d;},ao.min=function(f,b,c){if(!b&&ao.isArray(f)&&f[0]===+f[0]&&f.length<65535){return Math.min.apply(Math,f);
}var d=1/0,a=1/0;return X(f,function(j,g,e){var h=b?b.call(c,j,g,e):j;a>h&&(d=j,a=h);}),d;},ao.shuffle=function(d){var a,b=0,c=[];return X(d,function(e){a=ao.random(b++),c[b-1]=c[a],c[a]=e;
}),c;},ao.sample=function(c,a,b){return null==a||b?(c.length!==+c.length&&(c=ao.values(c)),c[ao.random(c.length-1)]):ao.shuffle(c).slice(0,Math.max(0,a));
};var U=function(a){return null==a?ao.identity:ao.isFunction(a)?a:ao.property(a);};ao.sortBy=function(c,a,b){return a=U(a),ao.pluck(ao.map(c,function(g,f,d){return{value:g,index:f,criteria:a.call(b,g,f,d)};
}).sort(function(h,d){var f=h.criteria,g=d.criteria;if(f!==g){if(f>g||f===void 0){return 1;}if(g>f||g===void 0){return -1;}}return h.index-d.index;}),"value");
};var Q=function(a){return function(c,d,f){var b={};return d=U(d),X(c,function(g,e){var h=d.call(f,g,e,c);a(b,h,g);}),b;};};ao.groupBy=Q(function(c,a,b){ao.has(c,a)?c[a].push(b):c[a]=[b];
}),ao.indexBy=Q(function(c,a,b){c[a]=b;}),ao.countBy=Q(function(b,a){ao.has(b,a)?b[a]++:b[a]=1;}),ao.sortedIndex=function(k,f,g,h){g=U(g);for(var c=g.call(h,f),d=0,b=k.length;
b>d;){var j=d+b>>>1;g.call(h,k[j])<c?d=j+1:b=j;}return d;},ao.toArray=function(a){return a?ao.isArray(a)?aj.call(a):a.length===+a.length?ao.map(a,ao.identity):ao.values(a):[];
},ao.size=function(a){return null==a?0:a.length===+a.length?a.length:ao.keys(a).length;},ao.first=ao.head=ao.take=function(c,a,b){return null==c?void 0:null==a||b?c[0]:0>a?[]:aj.call(c,0,a);
},ao.initial=function(c,a,b){return aj.call(c,0,c.length-(null==a||b?1:a));},ao.last=function(c,a,b){return null==c?void 0:null==a||b?c[c.length-1]:aj.call(c,Math.max(c.length-a,0));
},ao.rest=ao.tail=ao.drop=function(c,a,b){return aj.call(c,null==a||b?1:a);},ao.compact=function(a){return ao.filter(a,ao.identity);};var L=function(c,a,b){return a&&ao.every(c,ao.isArray)?aw.apply(b,c):(X(c,function(d){ao.isArray(d)||ao.isArguments(d)?a?ay.apply(b,d):L(d,a,b):b.push(d);
}),b);};ao.flatten=function(b,a){return L(b,a,[]);},ao.without=function(a){return ao.difference(a,aj.call(arguments,1));},ao.partition=function(d,a){var b=[],c=[];
return X(d,function(e){(a(e)?b:c).push(e);}),[b,c];},ao.uniq=ao.unique=function(j,f,g,h){ao.isFunction(f)&&(h=g,g=f,f=!1);var c=g?ao.map(j,g,h):j,d=[],b=[];
return X(c,function(a,i){(f?i&&b[b.length-1]===a:ao.contains(b,a))||(b.push(a),d.push(j[i]));}),d;},ao.union=function(){return ao.uniq(ao.flatten(arguments,!0));
},ao.intersection=function(b){var a=aj.call(arguments,1);return ao.filter(ao.uniq(b),function(c){return ao.every(a,function(d){return ao.contains(d,c);
});});},ao.difference=function(b){var a=aw.apply(au,aj.call(arguments,1));return ao.filter(b,function(c){return !ao.contains(a,c);});},ao.zip=function(){for(var c=ao.max(ao.pluck(arguments,"length").concat(0)),a=new Array(c),b=0;
c>b;b++){a[b]=ao.pluck(arguments,""+b);}return a;},ao.object=function(f,b){if(null==f){return{};}for(var c={},d=0,a=f.length;a>d;d++){b?c[f[d]]=b[d]:c[f[d][0]]=f[d][1];
}return c;},ao.indexOf=function(f,b,c){if(null==f){return -1;}var d=0,a=f.length;if(c){if("number"!=typeof c){return d=ao.sortedIndex(f,b),f[d]===b?d:-1;
}d=0>c?Math.max(0,a+c):c;}if(Z&&f.indexOf===Z){return f.indexOf(b,c);}for(;a>d;d++){if(f[d]===b){return d;}}return -1;},ao.lastIndexOf=function(f,b,c){if(null==f){return -1;
}var d=null!=c;if(ax&&f.lastIndexOf===ax){return d?f.lastIndexOf(b,c):f.lastIndexOf(b);}for(var a=d?c:f.length;a--;){if(f[a]===b){return a;}}return -1;
},ao.range=function(g,c,d){arguments.length<=1&&(c=g||0,g=0),d=arguments[2]||1;for(var f=Math.max(Math.ceil((c-g)/d),0),a=0,b=new Array(f);f>a;){b[a++]=g,g+=d;
}return b;};var H=function(){};ao.bind=function(d,a){var b,c;if(az&&d.bind===az){return az.apply(d,aj.call(arguments,1));}if(!ao.isFunction(d)){throw new TypeError;
}return b=aj.call(arguments,2),c=function(){if(!(this instanceof c)){return d.apply(a,b.concat(aj.call(arguments)));}H.prototype=d.prototype;var e=new H;
H.prototype=null;var f=d.apply(e,b.concat(aj.call(arguments)));return Object(f)===f?f:e;};},ao.partial=function(b){var a=aj.call(arguments,1);return function(){for(var f=0,g=a.slice(),c=0,d=g.length;
d>c;c++){g[c]===ao&&(g[c]=arguments[f++]);}for(;f<arguments.length;){g.push(arguments[f++]);}return b.apply(this,g);};},ao.bindAll=function(b){var a=aj.call(arguments,1);
if(0===a.length){throw new Error("bindAll must be passed function names");}return X(a,function(c){b[c]=ao.bind(b[c],b);}),b;},ao.memoize=function(c,a){var b={};
return a||(a=ao.identity),function(){var d=a.apply(this,arguments);return ao.has(b,d)?b[d]:b[d]=c.apply(this,arguments);};},ao.delay=function(c,a){var b=aj.call(arguments,2);
return setTimeout(function(){return c.apply(null,b);},a);},ao.defer=function(a){return ao.delay.apply(ao,[a,1].concat(aj.call(arguments,1)));},ao.throttle=function(f,m,b){var h,l,g,k=null,d=0;
b||(b={});var j=function(){d=b.leading===!1?0:ao.now(),k=null,g=f.apply(h,l),h=l=null;};return function(){var a=ao.now();d||b.leading!==!1||(d=a);var c=m-(a-d);
return h=this,l=arguments,0>=c?(clearTimeout(k),k=null,d=a,g=f.apply(h,l),h=l=null):k||b.trailing===!1||(k=setTimeout(j,c)),g;};},ao.debounce=function(f,m,b){var h,l,g,k,d,j=function(){var a=ao.now()-k;
m>a?h=setTimeout(j,m-a):(h=null,b||(d=f.apply(g,l),g=l=null));};return function(){g=this,l=arguments,k=ao.now();var a=b&&!h;return h||(h=setTimeout(j,m)),a&&(d=f.apply(g,l),g=l=null),d;
};},ao.once=function(c){var a,b=!1;return function(){return b?a:(b=!0,a=c.apply(this,arguments),c=null,a);};},ao.wrap=function(b,a){return ao.partial(a,b);
},ao.compose=function(){var a=arguments;return function(){for(var b=arguments,c=a.length-1;c>=0;c--){b=[a[c].apply(this,b)];}return b[0];};},ao.after=function(b,a){return function(){return --b<1?a.apply(this,arguments):void 0;
};},ao.keys=function(c){if(!ao.isObject(c)){return[];}if(ab){return ab(c);}var a=[];for(var b in c){ao.has(c,b)&&a.push(b);}return a;},ao.values=function(f){for(var b=ao.keys(f),c=b.length,d=new Array(c),a=0;
c>a;a++){d[a]=f[b[a]];}return d;},ao.pairs=function(f){for(var b=ao.keys(f),c=b.length,d=new Array(c),a=0;c>a;a++){d[a]=[b[a],f[b[a]]];}return d;},ao.invert=function(f){for(var b={},c=ao.keys(f),d=0,a=c.length;
a>d;d++){b[f[c[d]]]=c[d];}return b;},ao.functions=ao.methods=function(c){var a=[];for(var b in c){ao.isFunction(c[b])&&a.push(b);}return a.sort();},ao.extend=function(a){return X(aj.call(arguments,1),function(b){if(b){for(var c in b){a[c]=b[c];
}}}),a;},ao.pick=function(c){var a={},b=aw.apply(au,aj.call(arguments,1));return X(b,function(d){d in c&&(a[d]=c[d]);}),a;},ao.omit=function(d){var b={},c=aw.apply(au,aj.call(arguments,1));
for(var a in d){ao.contains(c,a)||(b[a]=d[a]);}return b;},ao.defaults=function(a){return X(aj.call(arguments,1),function(b){if(b){for(var c in b){a[c]===void 0&&(a[c]=b[c]);
}}}),a;},ao.clone=function(a){return ao.isObject(a)?ao.isArray(a)?a.slice():ao.extend({},a):a;},ao.tap=function(b,a){return a(b),b;};var G=function(g,q,b,k){if(g===q){return 0!==g||1/g==1/q;
}if(null==g||null==q){return g===q;}g instanceof ao&&(g=g._wrapped),q instanceof ao&&(q=q._wrapped);var p=am.call(g);if(p!=am.call(q)){return !1;}switch(p){case"[object String]":return g==String(q);
case"[object Number]":return g!=+g?q!=+q:0==g?1/g==1/q:g==+q;case"[object Date]":case"[object Boolean]":return +g==+q;case"[object RegExp]":return g.source==q.source&&g.global==q.global&&g.multiline==q.multiline&&g.ignoreCase==q.ignoreCase;
}if("object"!=typeof g||"object"!=typeof q){return !1;}for(var h=b.length;h--;){if(b[h]==g){return k[h]==q;}}var m=g.constructor,d=q.constructor;if(m!==d&&!(ao.isFunction(m)&&m instanceof m&&ao.isFunction(d)&&d instanceof d)&&"constructor" in g&&"constructor" in q){return !1;
}b.push(g),k.push(q);var l=0,j=!0;if("[object Array]"==p){if(l=g.length,j=l==q.length){for(;l--&&(j=G(g[l],q[l],b,k));){}}}else{for(var v in g){if(ao.has(g,v)&&(l++,!(j=ao.has(q,v)&&G(g[v],q[v],b,k)))){break;
}}if(j){for(v in q){if(ao.has(q,v)&&!l--){break;}}j=!l;}}return b.pop(),k.pop(),j;};ao.isEqual=function(b,a){return G(b,a,[],[]);},ao.isEmpty=function(b){if(null==b){return !0;
}if(ao.isArray(b)||ao.isString(b)){return 0===b.length;}for(var a in b){if(ao.has(b,a)){return !1;}}return !0;},ao.isElement=function(a){return !(!a||1!==a.nodeType);
},ao.isArray=aa||function(a){return"[object Array]"==am.call(a);},ao.isObject=function(a){return a===Object(a);},X(["Arguments","Function","String","Number","Date","RegExp"],function(a){ao["is"+a]=function(b){return am.call(b)=="[object "+a+"]";
};}),ao.isArguments(arguments)||(ao.isArguments=function(a){return !(!a||!ao.has(a,"callee"));}),"function"!=typeof/./&&(ao.isFunction=function(a){return"function"==typeof a;
}),ao.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a));},ao.isNaN=function(a){return ao.isNumber(a)&&a!=+a;},ao.isBoolean=function(a){return a===!0||a===!1||"[object Boolean]"==am.call(a);
},ao.isNull=function(a){return null===a;},ao.isUndefined=function(a){return a===void 0;},ao.has=function(b,a){return at.call(b,a);},ao.noConflict=function(){return ak._=ae,this;
},ao.identity=function(a){return a;},ao.constant=function(a){return function(){return a;};},ao.property=function(a){return function(b){return b[a];};},ao.matches=function(a){return function(b){if(b===a){return !0;
}for(var c in a){if(a[c]!==b[c]){return !1;}}return !0;};},ao.times=function(f,b,c){for(var d=Array(Math.max(0,f)),a=0;f>a;a++){d[a]=b.call(c,a);}return d;
},ao.random=function(b,a){return null==a&&(a=b,b=0),b+Math.floor(Math.random()*(a-b+1));},ao.now=Date.now||function(){return(new Date).getTime();};var C={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};
C.unescape=ao.invert(C.escape);var P={escape:new RegExp("["+ao.keys(C.escape).join("")+"]","g"),unescape:new RegExp("("+ao.keys(C.unescape).join("|")+")","g")};
ao.each(["escape","unescape"],function(a){ao[a]=function(b){return null==b?"":(""+b).replace(P[a],function(c){return C[a][c];});};}),ao.result=function(c,a){if(null==c){return void 0;
}var b=c[a];return ao.isFunction(b)?b.call(c):b;},ao.mixin=function(a){X(ao.functions(a),function(b){var c=ao[b]=a[b];ao.prototype[b]=function(){var d=[this._wrapped];
return ay.apply(d,arguments),Y.call(this,c.apply(ao,d));};});};var K=0;ao.uniqueId=function(b){var a=++K+"";return b?b+a:a;},ao.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};
var ah=/(.)^/,W={"'":"'","\\":"\\","\r":"r","\n":"n","   ":"t","\u2028":"u2028","\u2029":"u2029"},V=/\\|'|\r|\n|\t|\u2028|\u2029/g;ao.template=function(f,m,b){var h;
b=ao.defaults({},b,ao.templateSettings);var l=new RegExp([(b.escape||ah).source,(b.interpolate||ah).source,(b.evaluate||ah).source].join("|")+"|$","g"),g=0,k="__p+='";
f.replace(l,function(c,i,n,a,p){return k+=f.slice(g,p).replace(V,function(e){return"\\"+W[e];}),i&&(k+="'+\n((__t=("+i+"))==null?'':_.escape(__t))+\n'"),n&&(k+="'+\n((__t=("+n+"))==null?'':__t)+\n'"),a&&(k+="';\n"+a+"\n__p+='"),g=p+c.length,c;
}),k+="';\n",b.variable||(k="with(obj||{}){\n"+k+"}\n"),k="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+k+"return __p;\n";
try{h=new Function(b.variable||"obj","_",k);}catch(d){throw d.source=k,d;}if(m){return h(m,ao);}var j=function(a){return h.call(this,a,ao);};return j.source="function("+(b.variable||"obj")+"){\n"+k+"}",j;
},ao.chain=function(a){return ao(a).chain();};var Y=function(a){return this._chain?ao(a).chain():a;};ao.mixin(ao),X(["pop","push","reverse","shift","sort","splice","unshift"],function(b){var a=au[b];
ao.prototype[b]=function(){var c=this._wrapped;return a.apply(c,arguments),"shift"!=b&&"splice"!=b||0!==c.length||delete c[0],Y.call(this,c);};}),X(["concat","join","slice"],function(b){var a=au[b];
ao.prototype[b]=function(){return Y.call(this,a.apply(this._wrapped,arguments));};}),ao.extend(ao.prototype,{chain:function(){return this._chain=!0,this;
},value:function(){return this._wrapped;}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return ao;});}).call(this);_.templateSettings={interpolate:/\<\#\=(.+?)\#\>/g,evaluate:/\<\#(.+?)\#\>/g,escape:/\<\#\-(.+?)\#\>/g};
/*! Bootstrap.js 2.3
* Created by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
**/
!function(a){a(function(){a.support.transition=function(){var b=function(){var d=document.createElement("bootstrap"),c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},f;
for(f in c){if(d.style[f]!==undefined){return c[f];}}}();return b&&{end:b};}();});}(window.jQuery),!function(b){var a='[data-dismiss="alert"]',c=function(d){b(d).on("click",a,this.close);
};c.prototype.close=function(e){function f(){d.trigger("closed").remove();}var h=b(this),g=h.attr("data-target"),d;g||(g=h.attr("href"),g=g&&g.replace(/.*(?=#[^\s]*$)/,"")),d=b(g),e&&e.preventDefault(),d.length||(d=h.hasClass("alert")?h:h.parent()),d.trigger(e=b.Event("close"));
if(e.isDefaultPrevented()){return;}d.removeClass("in"),b.support.transition&&d.hasClass("fade")?d.on(b.support.transition.end,f):f();},b.fn.alert=function(d){return this.each(function(){var f=b(this),e=f.data("alert");
e||f.data("alert",e=new c(this)),typeof d=="string"&&e[d].call(f);});},b.fn.alert.Constructor=c,b(function(){b("body").on("click.alert.data-api",a,c.prototype.close);
});}(window.jQuery),!function(b){var a=function(c,d){this.$element=b(c),this.options=b.extend({},b.fn.button.defaults,d);};a.prototype.setState=function(g){var d="disabled",h=this.$element,f=h.data(),c=h.is("input")?"val":"html";
g+="Text",f.resetText||h.data("resetText",h[c]()),h[c](f[g]||this.options[g]),setTimeout(function(){g=="loadingText"?h.addClass(d).attr(d,d):h.removeClass(d).removeAttr(d);
},0);},a.prototype.toggle=function(){var c=this.$element.closest('[data-toggle="buttons-radio"]');c&&c.find(".active").removeClass("active"),this.$element.toggleClass("active");
},b.fn.button=function(c){return this.each(function(){var f=b(this),d=f.data("button"),e=typeof c=="object"&&c;d||f.data("button",d=new a(this,e)),c=="toggle"?d.toggle():c&&d.setState(c);
});},b.fn.button.defaults={loadingText:"loading..."},b.fn.button.Constructor=a,b(function(){b("body").on("click.button.data-api","[data-toggle^=button]",function(c){var d=b(c.target);
d.hasClass("btn")||(d=d.closest(".btn")),d.button("toggle");});});}(window.jQuery),!function(b){var a=function(c,d){this.$element=b(c),this.options=d,this.options.slide&&this.slide(this.options.slide),this.options.pause=="hover"&&this.$element.on("mouseenter",b.proxy(this.pause,this)).on("mouseleave",b.proxy(this.cycle,this));
};a.prototype={cycle:function(c){return c||(this.paused=!1),this.options.interval&&!this.paused&&(this.interval=setInterval(b.proxy(this.next,this),this.options.interval)),this;
},to:function(d){var g=this.$element.find(".item.active"),f=g.parent().children(),c=f.index(g),e=this;if(d>f.length-1||d<0){return;}return this.sliding?this.$element.one("slid",function(){e.to(d);
}):c==d?this.pause().cycle():this.slide(d>c?"next":"prev",b(f[d]));},pause:function(c){return c||(this.paused=!0),this.$element.find(".next, .prev").length&&b.support.transition.end&&(this.$element.trigger(b.support.transition.end),this.cycle()),clearInterval(this.interval),this.interval=null,this;
},next:function(){if(this.sliding){return;}return this.slide("next");},prev:function(){if(this.sliding){return;}return this.slide("prev");},slide:function(l,e){var c=this.$element.find(".item.active"),g=e||c[l](),m=this.interval,d=l=="next"?"left":"right",k=l=="next"?"first":"last",j=this,h=b.Event("slide",{relatedTarget:g[0]});
this.sliding=!0,m&&this.pause(),g=g.length?g:this.$element.find(".item")[k]();if(g.hasClass("active")){return;}if(b.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(h);
if(h.isDefaultPrevented()){return;}g.addClass(l),g[0].offsetWidth,c.addClass(d),g.addClass(d),this.$element.one(b.support.transition.end,function(){g.removeClass([l,d].join(" ")).addClass("active"),c.removeClass(["active",d].join(" ")),j.sliding=!1,setTimeout(function(){j.$element.trigger("slid");
},0);});}else{this.$element.trigger(h);if(h.isDefaultPrevented()){return;}c.removeClass("active"),g.addClass("active"),this.sliding=!1,this.$element.trigger("slid");
}return m&&this.cycle(),this;}},b.fn.carousel=function(c){return this.each(function(){var f=b(this),d=f.data("carousel"),e=b.extend({},b.fn.carousel.defaults,typeof c=="object"&&c),g=typeof c=="string"?c:e.slide;
d||f.data("carousel",d=new a(this,e)),typeof c=="number"?d.to(c):g?d[g]():e.interval&&d.cycle();});},b.fn.carousel.defaults={interval:5000,pause:"hover"},b.fn.carousel.Constructor=a,b(function(){b("body").on("click.carousel.data-api","[data-slide]",function(d){var g=b(this),f,c=b(g.attr("data-target")||(f=g.attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,"")),e=!c.data("modal")&&b.extend({},c.data(),g.data());
c.carousel(e),d.preventDefault();});});}(window.jQuery),!function(b){var a=function(c,d){this.$element=b(c),this.options=b.extend({},b.fn.collapse.defaults,d),this.options.parent&&(this.$parent=b(this.options.parent)),this.options.toggle&&this.toggle();
};a.prototype={constructor:a,dimension:function(){var c=this.$element.hasClass("width");return c?"width":"height";},show:function(){var d,f,e,c;if(this.transitioning){return;
}d=this.dimension(),f=b.camelCase(["scroll",d].join("-")),e=this.$parent&&this.$parent.find("> .accordion-group > .in");if(e&&e.length){c=e.data("collapse");
if(c&&c.transitioning){return;}e.collapse("hide"),c||e.data("collapse",null);}this.$element[d](0),this.transition("addClass",b.Event("show"),"shown"),b.support.transition&&this.$element[d](this.$element[0][f]);
},hide:function(){var c;if(this.transitioning){return;}c=this.dimension(),this.reset(this.$element[c]()),this.transition("removeClass",b.Event("hide"),"hidden"),this.$element[c](0);
},reset:function(d){var c=this.dimension();return this.$element.removeClass("collapse")[c](d||"auto")[0].offsetWidth,this.$element[d!==null?"addClass":"removeClass"]("collapse"),this;
},transition:function(d,g,f){var c=this,e=function(){g.type=="show"&&c.reset(),c.transitioning=0,c.$element.trigger(f);};this.$element.trigger(g);if(g.isDefaultPrevented()){return;
}this.transitioning=1,this.$element[d]("in"),b.support.transition&&this.$element.hasClass("collapse")?this.$element.one(b.support.transition.end,e):e();
},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]();}},b.fn.collapse=function(c){return this.each(function(){var f=b(this),d=f.data("collapse"),e=typeof c=="object"&&c;
d||f.data("collapse",d=new a(this,e)),typeof c=="string"&&d[c]();});},b.fn.collapse.defaults={toggle:!0},b.fn.collapse.Constructor=a,b(function(){b("body").on("click.collapse.data-api","[data-toggle=collapse]",function(d){var g=b(this),f,c=g.attr("data-target")||d.preventDefault()||(f=g.attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,""),e=b(c).data("collapse")?"toggle":g.data();
g[b(c).hasClass("in")?"addClass":"removeClass"]("collapsed"),b(c).collapse(e);});});}(window.jQuery),!function(d){function c(){b(d(a)).removeClass("open");
}function b(e){var h=e.attr("data-target"),g;return h||(h=e.attr("href"),h=h&&/#/.test(h)&&h.replace(/.*(?=#[^\s]*$)/,"")),g=d(h),g.length||(g=e.parent()),g;
}var a="[data-toggle=dropdown]",f=function(e){var g=d(e).on("click.dropdown.data-api",this.toggle);d("html").on("click.dropdown.data-api",function(){g.parent().removeClass("open");
});};f.prototype={constructor:f,toggle:function(e){var i=d(this),g,h;if(i.is(".disabled, :disabled")){return;}return g=b(i),h=g.hasClass("open"),c(),h||(g.toggleClass("open"),i.focus()),!1;
},keydown:function(h){var l,j,i,k,g,e;if(!/(38|40|27)/.test(h.keyCode)){return;}l=d(this),h.preventDefault(),h.stopPropagation();if(l.is(".disabled, :disabled")){return;
}k=b(l),g=k.hasClass("open");if(!g||g&&h.keyCode==27){return l.click();}j=d("[role=menu] li:not(.divider) a",k);if(!j.length){return;}e=j.index(j.filter(":focus")),h.keyCode==38&&e>0&&e--,h.keyCode==40&&e<j.length-1&&e++,~e||(e=0),j.eq(e).focus();
}},d.fn.dropdown=function(e){return this.each(function(){var h=d(this),g=h.data("dropdown");g||h.data("dropdown",g=new f(this)),typeof e=="string"&&g[e].call(h);
});},d.fn.dropdown.Constructor=f,d(function(){d("html").on("click.dropdown.data-api touchstart.dropdown.data-api",c),d("body").on("click.dropdown touchstart.dropdown.data-api",".dropdown form",function(g){g.stopPropagation();
}).on("click.dropdown.data-api touchstart.dropdown.data-api",a,f.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api",a+", [role=menu]",f.prototype.keydown);
});}(window.jQuery),!function(b){var a=function(c,d){this.options=d,this.$element=b(c).delegate('[data-dismiss="modal"]',"click.dismiss.modal",b.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote);
};a.prototype={constructor:a,toggle:function(){return this[this.isShown?"hide":"show"]();},show:function(){var c=this,d=b.Event("show");this.$element.trigger(d);
if(this.isShown||d.isDefaultPrevented()){return;}b("body").addClass("modal-open"),this.isShown=!0,this.escape(),this.backdrop(function(){var e=b.support.transition&&c.$element.hasClass("fade");
c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),e&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1).focus(),c.enforceFocus(),e?c.$element.one(b.support.transition.end,function(){c.$element.trigger("shown");
}):c.$element.trigger("shown");});},hide:function(c){c&&c.preventDefault();var d=this;c=b.Event("hide"),this.$element.trigger(c);if(!this.isShown||c.isDefaultPrevented()){return;
}this.isShown=!1,b("body").removeClass("modal-open"),this.escape(),b(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),b.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal();
},enforceFocus:function(){var c=this;b(document).on("focusin.modal",function(d){c.$element[0]!==d.target&&!c.$element.has(d.target).length&&c.$element.focus();
});},escape:function(){var c=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(d){d.which==27&&c.hide();}):this.isShown||this.$element.off("keyup.dismiss.modal");
},hideWithTransition:function(){var c=this,d=setTimeout(function(){c.$element.off(b.support.transition.end),c.hideModal();},500);this.$element.one(b.support.transition.end,function(){clearTimeout(d),c.hideModal();
});},hideModal:function(c){this.$element.hide().trigger("hidden"),this.backdrop();},removeBackdrop:function(){this.$backdrop.remove(),this.$backdrop=null;
},backdrop:function(d){var f=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var c=b.support.transition&&e;this.$backdrop=b('<div class="modal-backdrop '+e+'" />').appendTo(document.body),this.options.backdrop!="static"&&this.$backdrop.click(b.proxy(this.hide,this)),c&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),c?this.$backdrop.one(b.support.transition.end,d):d();
}else{!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),b.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(b.support.transition.end,b.proxy(this.removeBackdrop,this)):this.removeBackdrop()):d&&d();
}}},b.fn.modal=function(c){return this.each(function(){var f=b(this),d=f.data("modal"),e=b.extend({},b.fn.modal.defaults,f.data(),typeof c=="object"&&c);
d||f.data("modal",d=new a(this,e)),typeof c=="string"?d[c]():e.show&&d.show();});},b.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},b.fn.modal.Constructor=a,b(function(){b("body").on("click.modal.data-api",'[data-toggle="modal"]',function(d){var g=b(this),f=g.attr("href"),c=b(g.attr("data-target")||f&&f.replace(/.*(?=#[^\s]+$)/,"")),e=c.data("modal")?"toggle":b.extend({remote:!/#/.test(f)&&f},c.data(),g.data());
d.preventDefault(),c.modal(e).one("hide",function(){g.focus();});});});}(window.jQuery),!function(b){var a=function(d,c){this.init("tooltip",d,c);};a.prototype={constructor:a,init:function(d,g,f){var c,e;
this.type=d,this.$element=b(g),this.options=this.getOptions(f),this.enabled=!0,this.options.trigger=="click"?this.$element.on("click."+this.type,this.options.selector,b.proxy(this.toggle,this)):this.options.trigger!="manual"&&(c=this.options.trigger=="hover"?"mouseenter":"focus",e=this.options.trigger=="hover"?"mouseleave":"blur",this.$element.on(c+"."+this.type,this.options.selector,b.proxy(this.enter,this)),this.$element.on(e+"."+this.type,this.options.selector,b.proxy(this.leave,this))),this.options.selector?this._options=b.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle();
},getOptions:function(c){return c=b.extend({},b.fn[this.type].defaults,c,this.$element.data()),c.delay&&typeof c.delay=="number"&&(c.delay={show:c.delay,hide:c.delay}),c;
},enter:function(c){var d=b(c.currentTarget)[this.type](this._options).data(this.type);if(!d.options.delay||!d.options.delay.show){return d.show();}clearTimeout(this.timeout),d.hoverState="in",this.timeout=setTimeout(function(){d.hoverState=="in"&&d.show();
},d.options.delay.show);},leave:function(c){var d=b(c.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);
if(!d.options.delay||!d.options.delay.hide){return d.hide();}d.hoverState="out",this.timeout=setTimeout(function(){d.hoverState=="out"&&d.hide();},d.options.delay.hide);
},show:function(){var h,d,k,g,c,f,j;if(this.hasContent()&&this.enabled){h=this.tip(),this.setContent(),this.options.animation&&h.addClass("fade"),f=typeof this.options.placement=="function"?this.options.placement.call(this,h[0],this.$element[0]):this.options.placement,d=/in/.test(f),h.remove().css({top:0,left:0,display:"block"}).appendTo(d?this.$element:document.body),k=this.getPosition(d),g=h[0].offsetWidth,c=h[0].offsetHeight;
switch(d?f.split(" ")[1]:f){case"bottom":j={top:k.top+k.height,left:k.left+k.width/2-g/2};break;case"top":j={top:k.top-c,left:k.left+k.width/2-g/2};break;
case"left":j={top:k.top+k.height/2-c/2,left:k.left-g};break;case"right":j={top:k.top+k.height/2-c/2,left:k.left+k.width};}h.css(j).addClass(f).addClass("in");
}},setContent:function(){var d=this.tip(),c=this.getTitle();d.find(".tooltip-inner")[this.options.html?"html":"text"](c),d.removeClass("fade in top bottom left right");
},hide:function(){function d(){var f=setTimeout(function(){e.off(b.support.transition.end).remove();},500);e.one(b.support.transition.end,function(){clearTimeout(f),e.remove();
});}var c=this,e=this.tip();return e.removeClass("in"),b.support.transition&&this.$tip.hasClass("fade")?d():e.remove(),this;},fixTitle:function(){var c=this.$element;
(c.attr("title")||typeof c.attr("data-original-title")!="string")&&c.attr("data-original-title",c.attr("title")||"").removeAttr("title");},hasContent:function(){return this.getTitle();
},getPosition:function(c){return b.extend({},c?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight});
},getTitle:function(){var d,c=this.$element,f=this.options;return d=c.attr("data-original-title")||(typeof f.title=="function"?f.title.call(c[0]):f.title),d;
},tip:function(){return this.$tip=this.$tip||b(this.options.template);},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null);
},enable:function(){this.enabled=!0;},disable:function(){this.enabled=!1;},toggleEnabled:function(){this.enabled=!this.enabled;},toggle:function(){this[this.tip().hasClass("in")?"hide":"show"]();
},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type);}},b.fn.tooltip=function(c){return this.each(function(){var f=b(this),d=f.data("tooltip"),e=typeof c=="object"&&c;
d||f.data("tooltip",d=new a(this,e)),typeof c=="string"&&d[c]();});},b.fn.tooltip.Constructor=a,b.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0,html:!0};
}(window.jQuery),!function(b){var a=function(d,c){this.init("popover",d,c);};a.prototype=b.extend({},b.fn.tooltip.Constructor.prototype,{constructor:a,setContent:function(){var d=this.tip(),c=this.getTitle(),f=this.getContent();
d.find(".popover-title")[this.options.html?"html":"text"](c),d.find(".popover-content > *")[this.options.html?"html":"text"](f),d.removeClass("fade top bottom left right in");
},hasContent:function(){return this.getTitle()||this.getContent();},getContent:function(){var d,c=this.$element,f=this.options;return d=c.attr("data-content")||(typeof f.content=="function"?f.content.call(c[0]):f.content),d;
},tip:function(){return this.$tip||(this.$tip=b(this.options.template)),this.$tip;},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type);
}}),b.fn.popover=function(c){return this.each(function(){var f=b(this),d=f.data("popover"),e=typeof c=="object"&&c;d||f.data("popover",d=new a(this,e)),typeof c=="string"&&d[c]();
});},b.fn.popover.Constructor=a,b.fn.popover.defaults=b.extend({},b.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'});
}(window.jQuery),!function(b){function a(d,g){var f=b.proxy(this.process,this),c=b(d).is("body")?b(window):b(d),e;this.options=b.extend({},b.fn.scrollspy.defaults,g),this.$scrollElement=c.on("scroll.scroll-spy.data-api",f),this.selector=(this.options.target||(e=b(d).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=b("body"),this.refresh(),this.process();
}a.prototype={constructor:a,refresh:function(){var c=this,d;this.offsets=b([]),this.targets=b([]),d=this.$body.find(this.selector).map(function(){var e=b(this),g=e.data("target")||e.attr("href"),f=/^#\w/.test(g)&&b(g);
return f&&f.length&&[[f.position().top,g]]||null;}).sort(function(g,f){return g[0]-f[0];}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1]);
});},process:function(){var h=this.$scrollElement.scrollTop()+this.options.offset,d=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,k=d-this.$scrollElement.height(),g=this.offsets,c=this.targets,f=this.activeTarget,j;
if(h>=k){return f!=(j=c.last()[0])&&this.activate(j);}for(j=g.length;j--;){f!=c[j]&&h>=g[j]&&(!g[j+1]||h<=g[j+1])&&this.activate(c[j]);}},activate:function(c){var e,d;
this.activeTarget=c,b(this.selector).parent(".active").removeClass("active"),d=this.selector+'[data-target="'+c+'"],'+this.selector+'[href="'+c+'"]',e=b(d).parent("li").addClass("active"),e.parent(".dropdown-menu").length&&(e=e.closest("li.dropdown").addClass("active")),e.trigger("activate");
}},b.fn.scrollspy=function(c){return this.each(function(){var f=b(this),d=f.data("scrollspy"),e=typeof c=="object"&&c;d||f.data("scrollspy",d=new a(this,e)),typeof c=="string"&&d[c]();
});},b.fn.scrollspy.Constructor=a,b.fn.scrollspy.defaults={offset:10},b(window).on("load",function(){b('[data-spy="scroll"]').each(function(){var c=b(this);
c.scrollspy(c.data());});});}(window.jQuery),!function(b){var a=function(c){this.element=b(c);};a.prototype={constructor:a,show:function(){var d=this.element,h=d.closest("ul:not(.dropdown-menu)"),f=d.attr("data-target"),c,e,g;
f||(f=d.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));if(d.parent("li").hasClass("active")){return;}c=h.find(".active a").last()[0],g=b.Event("show",{relatedTarget:c}),d.trigger(g);
if(g.isDefaultPrevented()){return;}e=b(f),this.activate(d.parent("li"),h),this.activate(e,e.parent(),function(){d.trigger({type:"shown",relatedTarget:c});
});},activate:function(d,h,f){function g(){c.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),d.addClass("active"),e?(d[0].offsetWidth,d.addClass("in")):d.removeClass("fade"),d.parent(".dropdown-menu")&&d.closest("li.dropdown").addClass("active"),f&&f();
}var c=h.find("> .active"),e=f&&b.support.transition&&c.hasClass("fade");e?c.one(b.support.transition.end,g):g(),c.removeClass("in");}},b.fn.tab=function(c){return this.each(function(){var e=b(this),d=e.data("tab");
d||e.data("tab",d=new a(this)),typeof c=="string"&&d[c]();});},b.fn.tab.Constructor=a,b(function(){b("body").on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(c){c.preventDefault(),b(this).tab("show");
});});}(window.jQuery),!function(b){var a=function(c,d){this.$element=b(c),this.options=b.extend({},b.fn.typeahead.defaults,d),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.$menu=b(this.options.menu).appendTo("body"),this.source=this.options.source,this.shown=!1,this.listen();
};a.prototype={constructor:a,select:function(){var c=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(c)).change(),this.hide();
},updater:function(c){return c;},show:function(){var c=b.extend({},this.$element.offset(),{height:this.$element[0].offsetHeight});return this.$menu.css({top:c.top+c.height,left:c.left}),this.$menu.show(),this.shown=!0,this;
},hide:function(){return this.$menu.hide(),this.shown=!1,this;},lookup:function(c){var d;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(d=b.isFunction(this.source)?this.source(this.query,b.proxy(this.process,this)):this.source,d?this.process(d):this);
},process:function(c){var d=this;return c=b.grep(c,function(f){return d.matcher(f);}),c=this.sorter(c),c.length?this.render(c.slice(0,this.options.items)).show():this.shown?this.hide():this;
},matcher:function(c){return ~c.toLowerCase().indexOf(this.query.toLowerCase());},sorter:function(g){var d=[],h=[],f=[],c;while(c=g.shift()){c.toLowerCase().indexOf(this.query.toLowerCase())?~c.indexOf(this.query)?h.push(c):f.push(c):d.push(c);
}return d.concat(h,f);},highlighter:function(d){var c=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return d.replace(new RegExp("("+c+")","ig"),function(g,f){return"<strong>"+f+"</strong>";
});},render:function(c){var d=this;return c=b(c).map(function(e,f){return e=b(d.options.item).attr("data-value",f),e.find("a").html(d.highlighter(f)),e[0];
}),c.first().addClass("active"),this.$menu.html(c),this;},next:function(c){var e=this.$menu.find(".active").removeClass("active"),d=e.next();d.length||(d=b(this.$menu.find("li")[0])),d.addClass("active");
},prev:function(d){var c=this.$menu.find(".active").removeClass("active"),f=c.prev();f.length||(f=this.$menu.find("li").last()),f.addClass("active");},listen:function(){this.$element.on("blur",b.proxy(this.blur,this)).on("keypress",b.proxy(this.keypress,this)).on("keyup",b.proxy(this.keyup,this)),(b.browser.chrome||b.browser.webkit||b.browser.msie)&&this.$element.on("keydown",b.proxy(this.keydown,this)),this.$menu.on("click",b.proxy(this.click,this)).on("mouseenter","li",b.proxy(this.mouseenter,this));
},move:function(c){if(!this.shown){return;}switch(c.keyCode){case 9:case 13:case 27:c.preventDefault();break;case 38:c.preventDefault(),this.prev();break;
case 40:c.preventDefault(),this.next();}c.stopPropagation();},keydown:function(c){this.suppressKeyPressRepeat=!~b.inArray(c.keyCode,[40,38,9,13,27]),this.move(c);
},keypress:function(c){if(this.suppressKeyPressRepeat){return;}this.move(c);},keyup:function(c){switch(c.keyCode){case 40:case 38:break;case 9:case 13:if(!this.shown){return;
}this.select();break;case 27:if(!this.shown){return;}this.hide();break;default:this.lookup();}c.stopPropagation(),c.preventDefault();},blur:function(d){var c=this;
setTimeout(function(){c.hide();},150);},click:function(c){c.stopPropagation(),c.preventDefault(),this.select();},mouseenter:function(c){this.$menu.find(".active").removeClass("active"),b(c.currentTarget).addClass("active");
}},b.fn.typeahead=function(c){return this.each(function(){var f=b(this),d=f.data("typeahead"),e=typeof c=="object"&&c;d||f.data("typeahead",d=new a(this,e)),typeof c=="string"&&d[c]();
});},b.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},b.fn.typeahead.Constructor=a,b(function(){b("body").on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(c){var d=b(this);
if(d.data("typeahead")){return;}c.preventDefault(),d.typeahead(d.data());});});}(window.jQuery),!function(b){var a=function(c,d){this.options=b.extend({},b.fn.affix.defaults,d),this.$window=b(window).on("scroll.affix.data-api",b.proxy(this.checkPosition,this)),this.$element=b(c),this.checkPosition();
};a.prototype.checkPosition=function(){if(!this.$element.is(":visible")){return;}var f=b(document).height(),k=this.$window.scrollTop(),h=this.$element.offset(),e=this.options.offset,g=e.bottom,j=e.top,d="affix affix-top affix-bottom",c;
typeof e!="object"&&(g=j=e),typeof j=="function"&&(j=e.top()),typeof g=="function"&&(g=e.bottom()),c=this.unpin!=null&&k+this.unpin<=h.top?!1:g!=null&&h.top+this.$element.height()>=f-g?"bottom":j!=null&&k<=j?"top":!1;
if(this.affixed===c){return;}this.affixed=c,this.unpin=c=="bottom"?h.top-k:null,this.$element.removeClass(d).addClass("affix"+(c?"-"+c:""));},b.fn.affix=function(c){return this.each(function(){var f=b(this),d=f.data("affix"),e=typeof c=="object"&&c;
d||f.data("affix",d=new a(this,e)),typeof c=="string"&&d[c]();});},b.fn.affix.Constructor=a,b.fn.affix.defaults={offset:0},b(window).on("load",function(){b('[data-spy="affix"]').each(function(){var c=b(this),d=c.data();
d.offset=d.offset||{},d.offsetBottom&&(d.offset.bottom=d.offsetBottom),d.offsetTop&&(d.offset.top=d.offsetTop),c.affix(d);});});}(window.jQuery);
/*! permite hacer touch en pantallas tactiles al dropdown
**/
$("body").on("touchstart.dropdown",".dropdown-menu",function(a){a.stopPropagation();
});$(".dropdown-menu>li").click(function(a){a.stopPropagation();});
/*! jQuery MouseWheel
 * Copyright (c) 2013 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 * Version: 3.1.3
 * Requires: 1.2.2+
 **/
(function(b){if(typeof define==="function"&&define.amd){define(["jquery"],b);
}else{if(typeof exports==="object"){module.exports=b;}else{b(jQuery);}}}(function(l){var m=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"];
var j="onwheel" in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"];var k,i;if(l.event.fixHooks){for(var h=m.length;
h;){l.event.fixHooks[m[--h]]=l.event.mouseHooks;}}l.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var a=j.length;a;){this.addEventListener(j[--a],n,false);
}}else{this.onmousewheel=n;}},teardown:function(){if(this.removeEventListener){for(var a=j.length;a;){this.removeEventListener(j[--a],n,false);}}else{this.onmousewheel=null;
}}};l.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel");},unmousewheel:function(a){return this.unbind("mousewheel",a);
}});function n(r){var q=r||window.event,c=[].slice.call(arguments,1),a=0,f=0,g=0,d=0,e=0,b;r=l.event.fix(q);r.type="mousewheel";if(q.wheelDelta){a=q.wheelDelta;
}if(q.detail){a=q.detail*-1;}if(q.deltaY){g=q.deltaY*-1;a=g;}if(q.deltaX){f=q.deltaX;a=f*-1;}if(q.wheelDeltaY!==undefined){g=q.wheelDeltaY;}if(q.wheelDeltaX!==undefined){f=q.wheelDeltaX*-1;
}d=Math.abs(a);if(!k||d<k){k=d;}e=Math.max(Math.abs(g),Math.abs(f));if(!i||e<i){i=e;}b=a>0?"floor":"ceil";a=Math[b](a/k);f=Math[b](f/i);g=Math[b](g/i);
c.unshift(r,a,f,g);return(l.event.dispatch||l.event.handle).apply(this,c);}}));
/*! Select2 Copyright 2012 Igor Vaynberg
 * http://ivaynberg.github.io/select2/select2-latest.html
 * Version: 3.3.2 Timestamp: Mon Mar 25 12:14:18 PDT 2013
 * http://www.apache.org/licenses/LICENSE-2.0
 * http://www.gnu.org/licenses/gpl-2.0.html
 **/
(function(b){b.fn.each2===void 0&&b.fn.extend({each2:function(a){for(var h=b([0]),g=-1,f=this.length;
f>++g&&(h.context=h[0]=this[g])&&a.call(h[0],g,h)!==!1;){}return this;}});})(jQuery),function(an,am){function ad(f,e){for(var h=0,g=e.length;g>h;h+=1){if(ac(f,e[h])){return h;
}}return -1;}function ac(b,d){return b===d?!0:b===am||d===am?!1:null===b||null===d?!1:b.constructor===String?b+""==d+"":d.constructor===String?d+""==b+"":!1;
}function ab(a,j){var i,h,g;if(null===a||1>a.length){return[];}for(i=a.split(j),h=0,g=i.length;g>h;h+=1){i[h]=an.trim(i[h]);}return i;}function aa(b){return b.outerWidth(!1)-b.width();
}function Z(b){var a="keyup-change-value";b.bind("keydown",function(){an.data(b,a)===am&&an.data(b,a,b.val());}),b.bind("keyup",function(){var c=an.data(b,a);
c!==am&&b.val()!==c&&(an.removeData(b,a),b.trigger("keyup-change"));});}function Y(a){a.bind("mousemove",function(e){var b=af;(b===am||b.x!==e.pageX||b.y!==e.pageY)&&an(e.target).trigger("mousemove-filtered",e);
});}function W(b,h,g){g=g||am;var f;return function(){var a=arguments;window.clearTimeout(f),f=window.setTimeout(function(){h.apply(g,a);},b);};}function U(e){var f,d=!1;
return function(){return d===!1&&(f=e(),d=!0),f;};}function S(e,d){var f=W(e,function(b){d.trigger("scroll-debounced",b);});d.bind("scroll",function(b){ad(b.target,d.get())>=0&&f(b);
});}function Q(b){b[0]!==document.activeElement&&window.setTimeout(function(){var e,a=b[0],f=b.val().length;b.focus(),b.is(":visible")&&a===document.activeElement&&(a.setSelectionRange?a.setSelectionRange(f,f):a.createTextRange&&(e=a.createTextRange(),e.collapse(!1),e.select()));
},0);}function O(b){b.preventDefault(),b.stopPropagation();}function M(b){b.preventDefault(),b.stopImmediatePropagation();}function K(a){if(!ag){var d=a[0].currentStyle||window.getComputedStyle(a[0],null);
ag=an(document.createElement("div")).css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:d.fontSize,fontFamily:d.fontFamily,fontStyle:d.fontStyle,fontWeight:d.fontWeight,letterSpacing:d.letterSpacing,textTransform:d.textTransform,whiteSpace:"nowrap"}),ag.attr("class","select2-sizer"),an("body").append(ag);
}return ag.text(a.val()),ag.width();}function J(a,l,k){var j,h,i=[];j=a.attr("class"),j&&(j=""+j,an(j.split(" ")).each2(function(){0===this.indexOf("select2-")&&i.push(this);
})),j=l.attr("class"),j&&(j=""+j,an(j.split(" ")).each2(function(){0!==this.indexOf("select2-")&&(h=k(this),h&&i.push(this));})),a.attr("class",i.join(" "));
}function I(b,l,k,j){var i=b.toUpperCase().indexOf(l.toUpperCase()),h=l.length;return 0>i?(k.push(j(b)),am):(k.push(j(b.substring(0,i))),k.push("<span class='select2-match'>"),k.push(j(b.substring(i,i+h))),k.push("</span>"),k.push(j(b.substring(i+h,b.length))),am);
}function H(a){var n,m=0,l=null,k=a.quietMillis||100,j=a.url,i=this;return function(b){window.clearTimeout(n),n=window.setTimeout(function(){m+=1;var p=m,o=a.data,h=j,g=a.transport||an.ajax,e=a.type||"GET",d={};
o=o?o.call(i,b.term,b.page,b.context):null,h="function"==typeof h?h.call(i,b.term,b.page,b.context):h,null!==l&&l.abort(),a.params&&(an.isFunction(a.params)?an.extend(d,a.params.call(i)):an.extend(d,a.params)),an.extend(d,{url:h,dataType:a.dataType,data:o,type:e,cache:!1,success:function(c){if(!(m>p)){var f=a.results(c,b.page);
b.callback(f);}}}),l=g.call(i,d);},k);};}function X(l){var j,i,k=l,b=function(c){return""+c.text;};an.isArray(k)&&(i=k,k={results:i}),an.isFunction(k)===!1&&(i=k,k=function(){return i;
});var a=k();return a.text&&(b=a.text,an.isFunction(b)||(j=k.text,b=function(c){return c[j];})),function(n){var d,m=n.term,g={results:[]};return""===m?(n.callback(k()),am):(d=function(c,o){var h,e;
if(c=c[0],c.children){h={};for(e in c){c.hasOwnProperty(e)&&(h[e]=c[e]);}h.children=[],an(c.children).each2(function(p,f){d(f,h.children);}),(h.children.length||n.matcher(m,b(h),c))&&o.push(h);
}else{n.matcher(m,b(c),c)&&o.push(c);}},an(k().results).each2(function(e,c){d(c,g.results);}),n.callback(g),am);};}function V(b){var a=an.isFunction(b);
return function(h){var d=h.term,c={results:[]};an(a?b():b).each(function(){var e=this.text!==am,f=e?this.text:this;(""===d||h.matcher(d,f))&&c.results.push(e?this:{id:this,text:this});
}),h.callback(c);};}function T(a){if(an.isFunction(a)){return !0;}if(!a){return !1;}throw Error("formatterName must be a function or a falsy value");}function R(a){return an.isFunction(a)?a():a;
}function P(a){var d=0;return an.each(a,function(e,c){c.children?d+=P(c.children):d++;}),d;}function N(v,u,t,s){var p,o,n,l,b,r=v,q=!1;if(!s.createSearchChoice||!s.tokenSeparators||1>s.tokenSeparators.length){return am;
}for(;;){for(o=-1,n=0,l=s.tokenSeparators.length;l>n&&(b=s.tokenSeparators[n],o=v.indexOf(b),!(o>=0));n++){}if(0>o){break;}if(p=v.substring(0,o),v=v.substring(o+b.length),p.length>0&&(p=s.createSearchChoice(p,u),p!==am&&null!==p&&s.id(p)!==am&&null!==s.id(p))){for(q=!1,n=0,l=u.length;
l>n;n++){if(ac(s.id(p),s.id(u[n]))){q=!0;break;}}q||t(p);}}return r!==v?v:am;}function L(a,f){var e=function(){};return e.prototype=new a,e.prototype.constructor=e,e.prototype.parent=a.prototype,e.prototype=an.extend(e.prototype,f),e;
}if(window.Select2===am){var al,ak,aj,ai,ah,ag,af,ae;al={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(b){switch(b=b.which?b.which:b){case al.LEFT:case al.RIGHT:case al.UP:case al.DOWN:return !0;
}return !1;},isControl:function(d){var c=d.which;switch(c){case al.SHIFT:case al.CTRL:case al.ALT:return !0;}return d.metaKey?!0:!1;},isFunctionKey:function(b){return b=b.which?b.which:b,b>=112&&123>=b;
}},ae=an(document),ah=function(){var b=1;return function(){return b++;};}(),ae.bind("mousemove",function(b){af={x:b.pageX,y:b.pageY};}),ak=L(Object,{bind:function(d){var c=this;
return function(){d.apply(c,arguments);};},init:function(h){var g,b,a=".select2-results";this.opts=h=this.prepareOpts(h),this.id=h.id,h.element.data("select2")!==am&&null!==h.element.data("select2")&&this.destroy(),this.enabled=!0,this.container=this.createContainer(),this.containerId="s2id_"+(h.element.attr("id")||"autogen"+ah()),this.containerSelector="#"+this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"),this.container.attr("id",this.containerId),this.body=U(function(){return h.element.closest("body");
}),J(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.css(R(h.containerCss)),this.container.addClass(R(h.containerCssClass)),this.elementTabIndex=this.opts.element.attr("tabIndex"),this.opts.element.data("select2",this).addClass("select2-offscreen").bind("focus.select2",function(){an(this).select2("focus");
}).attr("tabIndex","-1").before(this.container),this.container.data("select2",this),this.dropdown=this.container.find(".select2-drop"),this.dropdown.addClass(R(h.dropdownCssClass)),this.dropdown.data("select2",this),this.results=g=this.container.find(a),this.search=b=this.container.find("input.select2-input"),b.attr("tabIndex",this.elementTabIndex),this.resultsPage=0,this.context=null,this.initContainer(),Y(this.results),this.dropdown.delegate(a,"mousemove-filtered touchstart touchmove touchend",this.bind(this.highlightUnderEvent)),S(80,this.results),this.dropdown.delegate(a,"scroll-debounced",this.bind(this.loadMoreIfNeeded)),an.fn.mousewheel&&g.mousewheel(function(i,d,l,k){var j=g.scrollTop();
k>0&&0>=j-k?(g.scrollTop(0),O(i)):0>k&&g.get(0).scrollHeight-g.scrollTop()+k<=g.height()&&(g.scrollTop(g.get(0).scrollHeight-g.height()),O(i));}),Z(b),b.bind("keyup-change input paste",this.bind(this.updateResults)),b.bind("focus",function(){b.addClass("select2-focused");
}),b.bind("blur",function(){b.removeClass("select2-focused");}),this.dropdown.delegate(a,"mouseup",this.bind(function(c){an(c.target).closest(".select2-result-selectable").length>0&&(this.highlightUnderEvent(c),this.selectHighlighted(c));
})),this.dropdown.bind("click mouseup mousedown",function(c){c.stopPropagation();}),an.isFunction(this.opts.initSelection)&&(this.initSelection(),this.monitorSource()),(h.element.is(":disabled")||h.element.is("[readonly='readonly']"))&&this.disable();
},destroy:function(){var b=this.opts.element.data("select2");this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),b!==am&&(b.container.remove(),b.dropdown.remove(),b.opts.element.removeClass("select2-offscreen").removeData("select2").unbind(".select2").attr({tabIndex:this.elementTabIndex}).show());
},prepareOpts:function(j){var i,h,b,a;if(i=j.element,"select"===i.get(0).tagName.toLowerCase()&&(this.select=h=j.element),h&&an.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in j){throw Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.");
}}),j=an.extend({},{populateResults:function(q,p,o){var n,m=this.opts.id,c=this;n=function(A,z,y){var x,w,v,u,l,k,g,f,C,B;for(A=j.sortResults(A,z,o),x=0,w=A.length;
w>x;x+=1){v=A[x],l=v.disabled===!0,u=!l&&m(v)!==am,k=v.children&&v.children.length>0,g=an("<li></li>"),g.addClass("select2-results-dept-"+y),g.addClass("select2-result"),g.addClass(u?"select2-result-selectable":"select2-result-unselectable"),l&&g.addClass("select2-disabled"),k&&g.addClass("select2-result-with-children"),g.addClass(c.opts.formatResultCssClass(v)),f=an(document.createElement("div")),f.addClass("select2-result-label"),B=j.formatResult(v,f,o,c.opts.escapeMarkup),B!==am&&f.html(B),g.append(f),k&&(C=an("<ul></ul>"),C.addClass("select2-result-sub"),n(v.children,C,y+1),g.append(C)),g.data("select2-data",v),z.append(g);
}},n(p,q,0);}},an.fn.select2.defaults,j),"function"!=typeof j.id&&(b=j.id,j.id=function(c){return c[b];}),an.isArray(j.element.data("select2Tags"))){if("tags" in j){throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+j.element.attr("id");
}j.tags=j.element.data("select2Tags");}if(h?(j.query=this.bind(function(o){var l,k,d,n={results:[],more:!1},m=o.term;d=function(e,c){var f;e.is("option")?o.matcher(m,e.text(),e)&&c.push({id:e.attr("value"),text:e.text(),element:e.get(),css:e.attr("class"),disabled:ac(e.attr("disabled"),"disabled")}):e.is("optgroup")&&(f={text:e.attr("label"),children:[],element:e.get(),css:e.attr("class")},e.children().each2(function(p,g){d(g,f.children);
}),f.children.length>0&&c.push(f));},l=i.children(),this.getPlaceholder()!==am&&l.length>0&&(k=l[0],""===an(k).text()&&(l=l.not(k))),l.each2(function(e,c){d(c,n.results);
}),o.callback(n);}),j.id=function(c){return c.id;},j.formatResultCssClass=function(c){return c.css;}):"query" in j||("ajax" in j?(a=j.element.data("ajax-url"),a&&a.length>0&&(j.ajax.url=a),j.query=H.call(j.element,j.ajax)):"data" in j?j.query=X(j.data):"tags" in j&&(j.query=V(j.tags),j.createSearchChoice===am&&(j.createSearchChoice=function(c){return{id:c,text:c};
}),j.initSelection===am&&(j.initSelection=function(k,g){var c=[];an(ab(k.val(),j.separator)).each(function(){var m=this,l=this,f=j.tags;an.isFunction(f)&&(f=f()),an(f).each(function(){return ac(this.id,m)?(l=this.text,!1):am;
}),c.push({id:m,text:l});}),g(c);}))),"function"!=typeof j.query){throw"query function not defined for Select2 "+j.element.attr("id");}return j;},monitorSource:function(){var c,d=this.opts.element;
d.bind("change.select2",this.bind(function(){this.opts.element.data("select2-change-triggered")!==!0&&this.initSelection();})),c=this.bind(function(){var f,e;
f="disabled"!==this.opts.element.attr("disabled"),e="readonly"===this.opts.element.attr("readonly"),f=f&&!e,this.enabled!==f&&(f?this.enable():this.disable()),J(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.addClass(R(this.opts.containerCssClass)),J(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(R(this.opts.dropdownCssClass));
}),d.bind("propertychange.select2 DOMAttrModified.select2",c),"undefined"!=typeof WebKitMutationObserver&&(this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),this.propertyObserver=new WebKitMutationObserver(function(b){b.forEach(c);
}),this.propertyObserver.observe(d.get(0),{attributes:!0,subtree:!1}));},triggerChange:function(a){a=a||{},a=an.extend({},a,{type:"change",val:this.val()}),this.opts.element.data("select2-change-triggered",!0),this.opts.element.trigger(a),this.opts.element.data("select2-change-triggered",!1),this.opts.element.click(),this.opts.blurOnChange&&this.opts.element.blur();
},enable:function(){this.enabled||(this.enabled=!0,this.container.removeClass("select2-container-disabled"),this.opts.element.removeAttr("disabled"));},disable:function(){this.enabled&&(this.close(),this.enabled=!1,this.container.addClass("select2-container-disabled"),this.opts.element.attr("disabled","disabled"));
},opened:function(){return this.container.hasClass("select2-dropdown-open");},positionDropdown:function(){var s,r,a,F=this.container.offset(),E=this.container.outerHeight(!1),D=this.container.outerWidth(!1),C=this.dropdown.outerHeight(!1),B=an(window).scrollLeft()+an(window).width(),A=an(window).scrollTop()+an(window).height(),z=F.top+E,y=F.left,x=A>=z+C,w=F.top-C>=this.body().scrollTop(),v=this.dropdown.outerWidth(!1),u=B>=y+v,t=this.dropdown.hasClass("select2-drop-above");
"static"!==this.body().css("position")&&(s=this.body().offset(),z-=s.top,y-=s.left),t?(r=!0,!w&&x&&(r=!1)):(r=!1,!x&&w&&(r=!0)),u||(y=F.left+D-v),r?(z=F.top-C,this.container.addClass("select2-drop-above"),this.dropdown.addClass("select2-drop-above")):(this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above")),a=an.extend({top:z,left:y,width:D},R(this.opts.dropdownCss)),this.dropdown.css(a);
},shouldOpen:function(){var a;return this.opened()?!1:(a=an.Event("opening"),this.opts.element.trigger(a),!a.isDefaultPrevented());},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above");
},open:function(){return this.shouldOpen()?(window.setTimeout(this.bind(this.opening),1),!0):!1;},opening:function(){function i(){return{width:Math.max(document.documentElement.scrollWidth,an(window).width()),height:Math.max(document.documentElement.scrollHeight,an(window).height())};
}var k,a=this.containerId,n="scroll."+a,m="resize."+a,l="orientationchange."+a;this.clearDropdownAlignmentPreference(),this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),this.dropdown[0]!==this.body().children().last()[0]&&this.dropdown.detach().appendTo(this.body()),this.updateResults(!0),k=an("#select2-drop-mask"),0==k.length&&(k=an(document.createElement("div")),k.attr("id","select2-drop-mask").attr("class","select2-drop-mask"),k.hide(),k.appendTo(this.body()),k.bind("mousedown touchstart",function(){var b,e=an("#select2-drop");
e.length>0&&(b=e.data("select2"),b.opts.selectOnBlur&&b.selectHighlighted({noFocus:!0}),b.close());})),this.dropdown.prev()[0]!==k[0]&&this.dropdown.before(k),an("#select2-drop").removeAttr("id"),this.dropdown.attr("id","select2-drop"),k.css(i()),k.show(),this.dropdown.show(),this.positionDropdown(),this.dropdown.addClass("select2-drop-active"),this.ensureHighlightVisible();
var j=this;this.container.parents().add(window).each(function(){an(this).bind(m+" "+n+" "+l,function(){an("#select2-drop-mask").css(i()),j.positionDropdown();
});}),this.focusSearch();},close:function(){if(this.opened()){var a=this.containerId,h="scroll."+a,g="resize."+a,f="orientationchange."+a;this.container.parents().add(window).each(function(){an(this).unbind(h).unbind(g).unbind(f);
}),this.clearDropdownAlignmentPreference(),an("#select2-drop-mask").hide(),this.dropdown.removeAttr("id"),this.dropdown.hide(),this.container.removeClass("select2-dropdown-open"),this.results.empty(),this.clearSearch(),this.search.removeClass("select2-active"),this.opts.element.trigger(an.Event("close"));
}},clearSearch:function(){},getMaximumSelectionSize:function(){return R(this.opts.maximumSelectionSize);},ensureHighlightVisible:function(){var o,n,m,l,k,b,a,p=this.results;
if(n=this.highlight(),!(0>n)){if(0==n){return p.scrollTop(0),am;}o=this.findHighlightableChoices(),m=an(o[n]),l=m.offset().top+m.outerHeight(!0),n===o.length-1&&(a=p.find("li.select2-more-results"),a.length>0&&(l=a.offset().top+a.outerHeight(!0))),k=p.offset().top+p.outerHeight(!0),l>k&&p.scrollTop(p.scrollTop()+(l-k)),b=m.offset().top-p.offset().top,0>b&&"none"!=m.css("display")&&p.scrollTop(p.scrollTop()+b);
}},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-selected):not(.select2-disabled)"),this.results.find(".select2-result-selectable:not(.select2-selected):not(.select2-disabled)");
},moveHighlight:function(a){for(var h=this.findHighlightableChoices(),g=this.highlight();g>-1&&h.length>g;){g+=a;var f=an(h[g]);if(f.hasClass("select2-result-selectable")&&!f.hasClass("select2-disabled")&&!f.hasClass("select2-selected")){this.highlight(g);
break;}}},highlight:function(h){var b,a,g=this.findHighlightableChoices();return 0===arguments.length?ad(g.filter(".select2-highlighted")[0],g.get()):(h>=g.length&&(h=g.length-1),0>h&&(h=0),this.results.find(".select2-highlighted").removeClass("select2-highlighted"),b=an(g[h]),b.addClass("select2-highlighted"),this.ensureHighlightVisible(),a=b.data("select2-data"),a&&this.opts.element.trigger({type:"highlight",val:this.id(a),choice:a}),am);
},countSelectableResults:function(){return this.findHighlightableChoices().length;},highlightUnderEvent:function(a){var f=an(a.target).closest(".select2-result-selectable");
if(f.length>0&&!f.is(".select2-highlighted")){var e=this.findHighlightableChoices();this.highlight(e.index(f));}else{0==f.length&&this.results.find(".select2-highlighted").removeClass("select2-highlighted");
}},loadMoreIfNeeded:function(){var n,i=this.results,d=i.find("li.select2-more-results"),m=this.resultsPage+1,l=this,k=this.search.val(),j=this.context;
0!==d.length&&(n=d.offset().top-i.offset().top-i.height(),this.opts.loadMorePadding>=n&&(d.addClass("select2-active"),this.opts.query({element:this.opts.element,term:k,page:m,context:j,matcher:this.opts.matcher,callback:this.bind(function(a){l.opened()&&(l.opts.populateResults.call(this,i,a.results,{term:k,page:m,context:j}),l.postprocessResults(a,!1,!1),a.more===!0?(d.detach().appendTo(i).text(l.opts.formatLoadMore(m+1)),window.setTimeout(function(){l.loadMoreIfNeeded();
},10)):d.remove(),l.positionDropdown(),l.resultsPage=m,l.context=a.context);})})));},tokenize:function(){},updateResults:function(x){function l(){v.scrollTop(0),w.removeClass("select2-active"),s.positionDropdown();
}function b(c){v.html(c),l();}var t,r,w=this.search,v=this.results,u=this.opts,s=this,q=w.val(),p=an.data(this.container,"select2-last-term");if((x===!0||!p||!ac(q,p))&&(an.data(this.container,"select2-last-term",q),x===!0||this.showSearchInput!==!1&&this.opened())){var a=this.getMaximumSelectionSize();
if(a>=1&&(t=this.data(),an.isArray(t)&&t.length>=a&&T(u.formatSelectionTooBig,"formatSelectionTooBig"))){return b("<li class='select2-selection-limit'>"+u.formatSelectionTooBig(a)+"</li>"),am;
}if(w.val().length<u.minimumInputLength){return T(u.formatInputTooShort,"formatInputTooShort")?b("<li class='select2-no-results'>"+u.formatInputTooShort(w.val(),u.minimumInputLength)+"</li>"):b(""),am;
}if(u.maximumInputLength&&w.val().length>u.maximumInputLength){return T(u.formatInputTooLong,"formatInputTooLong")?b("<li class='select2-no-results'>"+u.formatInputTooLong(w.val(),u.maximumInputLength)+"</li>"):b(""),am;
}u.formatSearching&&0===this.findHighlightableChoices().length&&b("<li class='select2-searching'>"+u.formatSearching()+"</li>"),w.addClass("select2-active"),r=this.tokenize(),r!=am&&null!=r&&w.val(r),this.resultsPage=1,u.query({element:u.element,term:w.val(),page:this.resultsPage,context:null,matcher:u.matcher,callback:this.bind(function(d){var c;
return this.opened()?(this.context=d.context===am?null:d.context,this.opts.createSearchChoice&&""!==w.val()&&(c=this.opts.createSearchChoice.call(null,w.val(),d.results),c!==am&&null!==c&&s.id(c)!==am&&null!==s.id(c)&&0===an(d.results).filter(function(){return ac(s.id(this),s.id(c));
}).length&&d.results.unshift(c)),0===d.results.length&&T(u.formatNoMatches,"formatNoMatches")?(b("<li class='select2-no-results'>"+u.formatNoMatches(w.val())+"</li>"),am):(v.empty(),s.opts.populateResults.call(this,v,d.results,{term:w.val(),page:this.resultsPage,context:null}),d.more===!0&&T(u.formatLoadMore,"formatLoadMore")&&(v.append("<li class='select2-more-results'>"+s.opts.escapeMarkup(u.formatLoadMore(this.resultsPage))+"</li>"),window.setTimeout(function(){s.loadMoreIfNeeded();
},10)),this.postprocessResults(d,x),l(),this.opts.element.trigger({type:"loaded",data:d}),am)):(this.search.removeClass("select2-active"),am);})});}},cancel:function(){this.close();
},blur:function(){this.opts.selectOnBlur&&this.selectHighlighted({noFocus:!0}),this.close(),this.container.removeClass("select2-container-active"),this.search[0]===document.activeElement&&this.search.blur(),this.clearSearch(),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
},focusSearch:function(){Q(this.search);},selectHighlighted:function(f){var e=this.highlight(),h=this.results.find(".select2-highlighted"),g=h.closest(".select2-result").data("select2-data");
g&&(this.highlight(e),this.onSelect(g,f));},getPlaceholder:function(){return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder;
},initContainerWidth:function(){function b(){var l,k,j,i,h;if("off"===this.opts.width){return null;}if("element"===this.opts.width){return 0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px";
}if("copy"===this.opts.width||"resolve"===this.opts.width){if(l=this.opts.element.attr("style"),l!==am){for(k=l.split(";"),i=0,h=k.length;h>i;i+=1){if(j=k[i].replace(/\s/g,"").match(/width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/),null!==j&&j.length>=1){return j[1];
}}}return"resolve"===this.opts.width?(l=this.opts.element.css("width"),l.indexOf("%")>0?l:0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px"):null;
}return an.isFunction(this.opts.width)?this.opts.width():this.opts.width;}var a=b.call(this);null!==a&&this.container.css("width",a);}}),aj=L(ak,{createContainer:function(){var a=an(document.createElement("div")).attr({"class":"select2-container"}).html(["<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>","   <span></span><abbr class='select2-search-choice-close' style='display:none;'></abbr>","   <div><b></b></div>","</a>","<input class='select2-focusser select2-offscreen' type='text'/>","<div class='select2-drop' style='display:none'>","   <div class='select2-search'>","       <input type='text' autocomplete='off' class='select2-input'/>","   </div>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));
return a;},disable:function(){this.enabled&&(this.parent.disable.apply(this,arguments),this.focusser.attr("disabled","disabled"));},enable:function(){this.enabled||(this.parent.enable.apply(this,arguments),this.focusser.removeAttr("disabled"));
},opening:function(){this.parent.opening.apply(this,arguments),this.focusser.attr("disabled","disabled"),this.opts.element.trigger(an.Event("open"));},close:function(){this.opened()&&(this.parent.close.apply(this,arguments),this.focusser.removeAttr("disabled"),Q(this.focusser));
},focus:function(){this.opened()?this.close():(this.focusser.removeAttr("disabled"),this.focusser.focus());},isFocused:function(){return this.container.hasClass("select2-container-active");
},cancel:function(){this.parent.cancel.apply(this,arguments),this.focusser.removeAttr("disabled"),this.focusser.focus();},initContainer:function(){var g,c=this.container,b=this.dropdown,a=!1;
this.showSearch(this.opts.minimumResultsForSearch>=0),this.selection=g=c.find(".select2-choice"),this.focusser=c.find(".select2-focusser"),this.focusser.attr("id","s2id_autogen"+ah()),an("label[for='"+this.opts.element.attr("id")+"']").attr("for",this.focusser.attr("id")),this.search.bind("keydown",this.bind(function(d){if(this.enabled){if(d.which===al.PAGE_UP||d.which===al.PAGE_DOWN){return O(d),am;
}switch(d.which){case al.UP:case al.DOWN:return this.moveHighlight(d.which===al.UP?-1:1),O(d),am;case al.TAB:case al.ENTER:return this.selectHighlighted(),O(d),am;
case al.ESC:return this.cancel(d),O(d),am;}}})),this.search.bind("blur",this.bind(function(){document.activeElement===this.body().get(0)&&window.setTimeout(this.bind(function(){this.search.focus();
}),0);})),this.focusser.bind("keydown",this.bind(function(d){return !this.enabled||d.which===al.TAB||al.isControl(d)||al.isFunctionKey(d)||d.which===al.ESC?am:this.opts.openOnEnter===!1&&d.which===al.ENTER?(O(d),am):d.which==al.DOWN||d.which==al.UP||d.which==al.ENTER&&this.opts.openOnEnter?(this.open(),O(d),am):d.which==al.DELETE||d.which==al.BACKSPACE?(this.opts.allowClear&&this.clear(),O(d),am):am;
})),Z(this.focusser),this.focusser.bind("keyup-change input",this.bind(function(d){this.opened()||(this.open(),this.showSearchInput!==!1&&this.search.val(this.focusser.val()),this.focusser.val(""),O(d));
})),g.delegate("abbr","mousedown",this.bind(function(d){this.enabled&&(this.clear(),M(d),this.close(),this.selection.focus());})),g.bind("mousedown",this.bind(function(d){a=!0,this.opened()?this.close():this.enabled&&this.open(),O(d),a=!1;
})),b.bind("mousedown",this.bind(function(){this.search.focus();})),g.bind("focus",this.bind(function(d){O(d);})),this.focusser.bind("focus",this.bind(function(){this.container.addClass("select2-container-active");
})).bind("blur",this.bind(function(){this.opened()||this.container.removeClass("select2-container-active");})),this.search.bind("focus",this.bind(function(){this.container.addClass("select2-container-active");
})),this.initContainerWidth(),this.setPlaceholder();},clear:function(d){var c=this.selection.data("select2-data");c&&(this.opts.element.val(""),this.selection.find("span").empty(),this.selection.removeData("select2-data"),this.setPlaceholder(),d!==!1&&(this.opts.element.trigger({type:"removed",val:this.id(c),choice:c}),this.triggerChange({removed:c})));
},initSelection:function(){if(""===this.opts.element.val()&&""===this.opts.element.text()){this.close(),this.setPlaceholder();}else{var a=this;this.opts.initSelection.call(null,this.opts.element,function(b){b!==am&&null!==b&&(a.updateSelection(b),a.close(),a.setPlaceholder());
});}},prepareOpts:function(){var a=this.parent.prepareOpts.apply(this,arguments);return"select"===a.element.get(0).tagName.toLowerCase()?a.initSelection=function(e,g){var f=e.find(":selected");
an.isFunction(g)&&g({id:f.attr("value"),text:f.text(),element:f});}:"data" in a&&(a.initSelection=a.initSelection||function(i,h){var g=i.val(),b=null;a.query({matcher:function(e,k,j){var f=ac(g,a.id(j));
return f&&(b=j),f;},callback:an.isFunction(h)?function(){h(b);}:an.noop});}),a;},getPlaceholder:function(){return this.select&&""!==this.select.find("option").first().text()?am:this.parent.getPlaceholder.apply(this,arguments);
},setPlaceholder:function(){var b=this.getPlaceholder();if(""===this.opts.element.val()&&b!==am){if(this.select&&""!==this.select.find("option:first").text()){return;
}this.selection.find("span").html(this.opts.escapeMarkup(b)),this.selection.addClass("select2-default"),this.selection.find("abbr").hide();}},postprocessResults:function(b,n,m){var l=0,k=this,j=!0;
if(this.findHighlightableChoices().each2(function(d,e){return ac(k.id(e.data("select2-data")),k.opts.element.val())?(l=d,!1):am;}),m!==!1&&this.highlight(l),n===!0){var i=this.opts.minimumResultsForSearch;
j=0>i?!1:P(b.results)>=i,this.showSearch(j);}},showSearch:function(a){this.showSearchInput=a,this.dropdown.find(".select2-search")[a?"removeClass":"addClass"]("select2-search-hidden"),an(this.dropdown,this.container)[a?"addClass":"removeClass"]("select2-with-searchbox");
},onSelect:function(e,d){var f=this.opts.element.val();this.opts.element.val(this.id(e)),this.updateSelection(e),this.opts.element.trigger({type:"selected",val:this.id(e),choice:e}),this.close(),d&&d.noFocus||this.selection.focus(),ac(f,this.id(e))||this.triggerChange();
},updateSelection:function(b){var e,f=this.selection.find("span");this.selection.data("select2-data",b),f.empty(),e=this.opts.formatSelection(b,f),e!==am&&f.append(this.opts.escapeMarkup(e)),this.selection.removeClass("select2-default"),this.opts.allowClear&&this.getPlaceholder()!==am&&this.selection.find("abbr").show();
},val:function(){var b,h=!1,g=null,f=this;if(0===arguments.length){return this.opts.element.val();}if(b=arguments[0],arguments.length>1&&(h=arguments[1]),this.select){this.select.val(b).find(":selected").each2(function(d,c){return g={id:c.attr("value"),text:c.text(),element:c.get(0)},!1;
}),this.updateSelection(g),this.setPlaceholder(),h&&this.triggerChange();}else{if(this.opts.initSelection===am){throw Error("cannot call val() if initSelection() is not defined");
}if(!b&&0!==b){return this.clear(h),h&&this.triggerChange(),am;}this.opts.element.val(b),this.opts.initSelection(this.opts.element,function(c){f.opts.element.val(c?f.id(c):""),f.updateSelection(c),f.setPlaceholder(),h&&f.triggerChange();
});}},clearSearch:function(){this.search.val(""),this.focusser.val("");},data:function(b){var d;return 0===arguments.length?(d=this.selection.data("select2-data"),d==am&&(d=null),d):(b&&""!==b?(this.opts.element.val(b?this.id(b):""),this.updateSelection(b)):this.clear(),am);
}}),ai=L(ak,{createContainer:function(){var a=an(document.createElement("div")).attr({"class":"select2-container select2-container-multi"}).html(["    <ul class='select2-choices'>","  <li class='select2-search-field'>","    <input type='text' autocomplete='off' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi' style='display:none;'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));
return a;},prepareOpts:function(){var a=this.parent.prepareOpts.apply(this,arguments);return"select"===a.element.get(0).tagName.toLowerCase()?a.initSelection=function(e,d){var f=[];
e.find(":selected").each2(function(g,c){f.push({id:c.attr("value"),text:c.text(),element:c[0]});}),d(f);}:"data" in a&&(a.initSelection=a.initSelection||function(i,h){var g=ab(i.val(),a.separator),b=[];
a.query({matcher:function(k,j,f){var e=an.grep(g,function(c){return ac(c,a.id(f));}).length;return e&&b.push(f),e;},callback:an.isFunction(h)?function(){h(b);
}:an.noop});}),a;},initContainer:function(){var a,b=".select2-choices";this.searchContainer=this.container.find(".select2-search-field"),this.selection=a=this.container.find(b),this.search.attr("id","s2id_autogen"+ah()),an("label[for='"+this.opts.element.attr("id")+"']").attr("for",this.search.attr("id")),this.search.bind("input paste",this.bind(function(){this.enabled&&(this.opened()||this.open());
})),this.search.bind("keydown",this.bind(function(c){if(this.enabled){if(c.which===al.BACKSPACE&&""===this.search.val()){this.close();var g,e=a.find(".select2-search-choice-focus");
if(e.length>0){return this.unselect(e.first()),this.search.width(10),O(c),am;}g=a.find(".select2-search-choice:not(.select2-locked)"),g.length>0&&g.last().addClass("select2-search-choice-focus");
}else{a.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");}if(this.opened()){switch(c.which){case al.UP:case al.DOWN:return this.moveHighlight(c.which===al.UP?-1:1),O(c),am;
case al.ENTER:case al.TAB:return this.selectHighlighted(),O(c),am;case al.ESC:return this.cancel(c),O(c),am;}}if(c.which!==al.TAB&&!al.isControl(c)&&!al.isFunctionKey(c)&&c.which!==al.BACKSPACE&&c.which!==al.ESC){if(c.which===al.ENTER){if(this.opts.openOnEnter===!1){return;
}if(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey){return;}}this.open(),(c.which===al.PAGE_UP||c.which===al.PAGE_DOWN)&&O(c),c.which===al.ENTER&&O(c);}}})),this.search.bind("keyup",this.bind(this.resizeSearch)),this.search.bind("blur",this.bind(function(c){this.container.removeClass("select2-container-active"),this.search.removeClass("select2-focused"),this.opened()||this.clearSearch(),c.stopImmediatePropagation();
})),this.container.delegate(b,"mousedown",this.bind(function(c){this.enabled&&(an(c.target).closest(".select2-search-choice").length>0||(this.clearPlaceholder(),this.open(),this.focusSearch(),c.preventDefault()));
})),this.container.delegate(b,"focus",this.bind(function(){this.enabled&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"),this.clearPlaceholder());
})),this.initContainerWidth(),this.clearSearch();},enable:function(){this.enabled||(this.parent.enable.apply(this,arguments),this.search.removeAttr("disabled"));
},disable:function(){this.enabled&&(this.parent.disable.apply(this,arguments),this.search.attr("disabled",!0));},initSelection:function(){if(""===this.opts.element.val()&&""===this.opts.element.text()&&(this.updateSelection([]),this.close(),this.clearSearch()),this.select||""!==this.opts.element.val()){var a=this;
this.opts.initSelection.call(null,this.opts.element,function(b){b!==am&&null!==b&&(a.updateSelection(b),a.close(),a.clearSearch());});}},clearSearch:function(){var b=this.getPlaceholder();
b!==am&&0===this.getVal().length&&this.search.hasClass("select2-focused")===!1?(this.search.val(b).addClass("select2-default"),this.search.width(this.getMaxSearchWidth())):this.search.val("").width(10);
},clearPlaceholder:function(){this.search.hasClass("select2-default")&&this.search.val("").removeClass("select2-default");},opening:function(){this.clearPlaceholder(),this.resizeSearch(),this.parent.opening.apply(this,arguments),this.focusSearch(),this.opts.element.trigger(an.Event("open"));
},close:function(){this.opened()&&this.parent.close.apply(this,arguments);},focus:function(){this.close(),this.search.focus();},isFocused:function(){return this.search.hasClass("select2-focused");
},updateSelection:function(a){var h=[],g=[],f=this;an(a).each(function(){0>ad(f.id(this),h)&&(h.push(f.id(this)),g.push(this));}),a=g,this.selection.find(".select2-search-choice").remove(),an(a).each(function(){f.addSelectedChoice(this);
}),f.postprocessResults();},tokenize:function(){var b=this.search.val();b=this.opts.tokenizer(b,this.data(),this.bind(this.onSelect),this.opts),null!=b&&b!=am&&(this.search.val(b),b.length>0&&this.open());
},onSelect:function(d,c){this.addSelectedChoice(d),this.opts.element.trigger({type:"selected",val:this.id(d),choice:d}),(this.select||!this.opts.closeOnSelect)&&this.postprocessResults(),this.opts.closeOnSelect?(this.close(),this.search.width(10)):this.countSelectableResults()>0?(this.search.width(10),this.resizeSearch(),this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()&&this.updateResults(!0),this.positionDropdown()):(this.close(),this.search.width(10)),this.triggerChange({added:d}),c&&c.noFocus||this.focusSearch();
},cancel:function(){this.close(),this.focusSearch();},addSelectedChoice:function(p){var a,o=!p.locked,n=an("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"),m=an("<li class='select2-search-choice select2-locked'><div></div></li>"),l=o?n:m,k=this.id(p),b=this.getVal();
a=this.opts.formatSelection(p,l.find("div")),a!=am&&l.find("div").replaceWith("<div>"+this.opts.escapeMarkup(a)+"</div>"),o&&l.find(".select2-search-choice-close").bind("mousedown",O).bind("click dblclick",this.bind(function(c){this.enabled&&(an(c.target).closest(".select2-search-choice").fadeOut("fast",this.bind(function(){this.unselect(an(c.target)),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),this.close(),this.focusSearch();
})).dequeue(),O(c));})).bind("focus",this.bind(function(){this.enabled&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"));
})),l.data("select2-data",p),l.insertBefore(this.searchContainer),b.push(k),this.setVal(b);},unselect:function(f){var h,g,e=this.getVal();if(f=f.closest(".select2-search-choice"),0===f.length){throw"Invalid argument: "+f+". Must be .select2-search-choice";
}h=f.data("select2-data"),h&&(g=ad(this.id(h),e),g>=0&&(e.splice(g,1),this.setVal(e),this.select&&this.postprocessResults()),f.remove(),this.opts.element.trigger({type:"removed",val:this.id(h),choice:h}),this.triggerChange({removed:h}));
},postprocessResults:function(){var f=this.getVal(),e=this.results.find(".select2-result"),h=this.results.find(".select2-result-with-children"),g=this;
e.each2(function(a,i){var d=g.id(i.data("select2-data"));ad(d,f)>=0&&(i.addClass("select2-selected"),i.find(".select2-result-selectable").addClass("select2-selected"));
}),h.each2(function(d,c){c.is(".select2-result-selectable")||0!==c.find(".select2-result-selectable:not(.select2-selected)").length||c.addClass("select2-selected");
}),-1==this.highlight()&&g.highlight(0);},getMaxSearchWidth:function(){return this.selection.width()-aa(this.search);},resizeSearch:function(){var h,g,l,k,j,i=aa(this.search);
h=K(this.search)+10,g=this.search.offset().left,l=this.selection.width(),k=this.selection.offset().left,j=l-(g-k)-i,h>j&&(j=l-i),40>j&&(j=l-i),0>=j&&(j=h),this.search.width(j);
},getVal:function(){var b;return this.select?(b=this.select.val(),null===b?[]:b):(b=this.opts.element.val(),ab(b,this.opts.separator));},setVal:function(a){var d;
this.select?this.select.val(a):(d=[],an(a).each(function(){0>ad(this,d)&&d.push(this);}),this.opts.element.val(0===d.length?"":d.join(this.opts.separator)));
},val:function(){var e,b=!1,a=this;if(0===arguments.length){return this.getVal();}if(e=arguments[0],arguments.length>1&&(b=arguments[1]),!e&&0!==e){return this.opts.element.val(""),this.updateSelection([]),this.clearSearch(),b&&this.triggerChange(),am;
}if(this.setVal(e),this.select){this.opts.initSelection(this.select,this.bind(this.updateSelection)),b&&this.triggerChange();}else{if(this.opts.initSelection===am){throw Error("val() cannot be called if initSelection() is not defined");
}this.opts.initSelection(this.opts.element,function(d){var f=an(d).map(a.id);a.setVal(f),a.updateSelection(d),a.clearSearch(),b&&a.triggerChange();});}this.clearSearch();
},onSortStart:function(){if(this.select){throw Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
}this.search.width(0),this.searchContainer.hide();},onSortEnd:function(){var a=[],d=this;this.searchContainer.show(),this.searchContainer.appendTo(this.searchContainer.parent()),this.resizeSearch(),this.selection.find(".select2-search-choice").each(function(){a.push(d.opts.id(an(this).data("select2-data")));
}),this.setVal(a),this.triggerChange();},data:function(f){var a,b=this;return 0===arguments.length?this.selection.find(".select2-search-choice").map(function(){return an(this).data("select2-data");
}).get():(f||(f=[]),a=an.map(f,function(c){return b.opts.id(c);}),this.setVal(a),this.updateSelection(f),this.clearSearch(),am);}}),an.fn.select2=function(){var k,f,e,b,l=Array.prototype.slice.call(arguments,0),a=["val","destroy","opened","open","close","focus","isFocused","container","onSortStart","onSortEnd","enable","disable","positionDropdown","data"];
return this.each(function(){if(0===l.length||"object"==typeof l[0]){k=0===l.length?{}:an.extend({},l[0]),k.element=an(this),"select"===k.element.get(0).tagName.toLowerCase()?b=k.element.attr("multiple"):(b=k.multiple||!1,"tags" in k&&(k.multiple=b=!0)),f=b?new ai:new aj,f.init(k);
}else{if("string"!=typeof l[0]){throw"Invalid arguments to select2 plugin: "+l;}if(0>ad(l[0],a)){throw"Unknown method: "+l[0];}if(e=am,f=an(this).data("select2"),f===am){return;
}if(e="container"===l[0]?f.container:f[l[0]].apply(f,l.slice(1)),e!==am){return !1;}}}),e===am?this:e;},an.fn.select2.defaults={width:"copy",loadMorePadding:0,closeOnSelect:!0,openOnEnter:!0,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(g,f,j,i){var h=[];
return I(g.text,j.term,h,i),h.join("");},formatSelection:function(b){return b?b.text:am;},sortResults:function(b){return b;},formatResultCssClass:function(){return am;
},formatNoMatches:function(){return"No matches found";},formatInputTooShort:function(e,d){var f=d-e.length;return"Please enter "+f+" more character"+(1==f?"":"s");
},formatInputTooLong:function(e,d){var f=e.length-d;return"Please delete "+f+" character"+(1==f?"":"s");},formatSelectionTooBig:function(b){return"You can only select "+b+" item"+(1==b?"":"s");
},formatLoadMore:function(){return"Loading more results...";},formatSearching:function(){return"Searching...";},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(b){return b.id;
},matcher:function(d,c){return(""+c).toUpperCase().indexOf((""+d).toUpperCase())>=0;},separator:",",tokenSeparators:[],tokenizer:N,escapeMarkup:function(d){var c={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;","/":"&#47;"};
return(d+"").replace(/[&<>"'\/\\]/g,function(b){return c[b[0]];});},blurOnChange:!1,selectOnBlur:!1,adaptContainerCssClass:function(b){return b;},adaptDropdownCssClass:function(){return null;
}},window.Select2={query:{ajax:H,local:X,tags:V},util:{debounce:W,markMatch:I},"class":{"abstract":ak,single:aj,multi:ai}};}}(jQuery);(function(b){b.extend(b.fn.select2.defaults,{formatNoMatches:function(){return"No se encontraron resultados";
},formatInputTooShort:function(a,f){var e=f-a.length;return"Por favor adicione "+e+" caracter"+(e==1?"":"es");},formatInputTooLong:function(f,a){var e=f.length-a;
return"Por favor elimine "+e+" caracter"+(e==1?"":"es");},formatSelectionTooBig:function(a){return"Solo puede seleccionar "+a+" elemento"+(a==1?"":"s");
},formatLoadMore:function(a){return"Cargando más resultados...";},formatSearching:function(){return"Buscando...";}});})(jQuery);
/*! jScrollPane - v2.0.0beta12 - 2012-09-27
 * http://jscrollpane.kelvinluck.com/
 * Copyright (c) 2010 Kelvin Luck
 * Dual licensed under the MIT or GPL licenses.
 **/
(function(d,e,f){d.fn.jScrollPane=function(a){function b(br,bb){var bk,a9=this,a1,bF,aK,bD,a6,a0,s,aO,bi,bS,bs,aW,bh,aX,aV,bO,a5,bz,a2,aM,bw,by,bJ,bC,bl,aT,bu,bm,aI,bq,bP,aZ,be,bG=true,ba=true,bQ=false,aU=false,bA=br.clone(false,false).empty(),bM=d.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";
bP=br.css("paddingTop")+" "+br.css("paddingRight")+" "+br.css("paddingBottom")+" "+br.css("paddingLeft");aZ=(parseInt(br.css("paddingLeft"),10)||0)+(parseInt(br.css("paddingRight"),10)||0);
function bx(i){var n,l,m,g,h,j,k=false,o=false;bk=i;if(a1===f){h=br.scrollTop();j=br.scrollLeft();br.css({overflow:"hidden",padding:0});bF=br.innerWidth()+aZ;
aK=br.innerHeight();br.width(bF);a1=d('<div class="jspPane" />').css("padding",bP).append(br.children());bD=d('<div class="jspContainer" />').css({width:bF+"px",height:aK+"px"}).append(a1).appendTo(br);
}else{br.css("width","");k=bk.stickToBottom&&bf();o=bk.stickToRight&&bv();g=br.innerWidth()+aZ!=bF||br.outerHeight()!=aK;if(g){bF=br.innerWidth()+aZ;aK=br.innerHeight();
bD.css({width:bF+"px",height:aK+"px"});}if(!g&&be==a6&&a1.outerHeight()==a0){br.width(bF);return;}be=a6;a1.css("width","");br.width(bF);bD.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end();
}a1.css("overflow","auto");if(i.contentWidth){a6=i.contentWidth;}else{a6=a1[0].scrollWidth;}a0=a1[0].scrollHeight;a1.css("overflow","");s=a6/bF;aO=a0/aK;
bi=aO>1;bS=s>1;if(!(bS||bi)){br.removeClass("jspScrollable");a1.css({top:0,width:bD.width()-aZ});aR();bp();a8();aJ();}else{br.addClass("jspScrollable");
n=bk.maintainPosition&&(bh||bO);if(n){l=bU();m=bW();}bR();c();bn();if(n){bc(o?(a6-bF):l,false);bd(k?(a0-aK):m,false);}bg();bI();bB();if(bk.enableKeyboardNavigation){a7();
}if(bk.clickOnTrack){aP();}bt();if(bk.hijackInternalLinks){aS();}}if(bk.autoReinitialise&&!bq){bq=setInterval(function(){bx(bk);},bk.autoReinitialiseDelay);
}else{if(!bk.autoReinitialise&&bq){clearInterval(bq);}}h&&br.scrollTop(0)&&bd(h,false);j&&br.scrollLeft(0)&&bc(j,false);br.trigger("jsp-initialised",[bS||bi]);
}function bR(){if(bi){bD.append(d('<div class="jspVerticalBar" />').append(d('<div class="jspCap jspCapTop" />'),d('<div class="jspTrack" />').append(d('<div class="jspDrag" />').append(d('<div class="jspDragTop" />'),d('<div class="jspDragBottom" />'))),d('<div class="jspCap jspCapBottom" />')));
a5=bD.find(">.jspVerticalBar");bz=a5.find(">.jspTrack");bs=bz.find(">.jspDrag");if(bk.showArrows){by=d('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",bT(0,-1)).bind("click.jsp",bV);
bJ=d('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",bT(0,1)).bind("click.jsp",bV);if(bk.arrowScrollOnHover){by.bind("mouseover.jsp",bT(0,-1,by));
bJ.bind("mouseover.jsp",bT(0,1,bJ));}bE(bz,bk.verticalArrowPositions,by,bJ);}aM=aK;bD.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){aM-=d(this).outerHeight();
});bs.hover(function(){bs.addClass("jspHover");},function(){bs.removeClass("jspHover");}).bind("mousedown.jsp",function(h){d("html").bind("dragstart.jsp selectstart.jsp",bV);
bs.addClass("jspActive");var g=h.pageY-bs.position().top;d("html").bind("mousemove.jsp",function(i){a4(i.pageY-g,false);}).bind("mouseup.jsp mouseleave.jsp",bo);
return false;});aQ();}}function aQ(){bz.height(aM+"px");bh=0;a2=bk.verticalGutter+bz.outerWidth();a1.width(bF-a2-aZ);try{if(a5.position().left===0){a1.css("margin-left",a2+"px");
}}catch(g){}}function c(){if(bS){bD.append(d('<div class="jspHorizontalBar" />').append(d('<div class="jspCap jspCapLeft" />'),d('<div class="jspTrack" />').append(d('<div class="jspDrag" />').append(d('<div class="jspDragLeft" />'),d('<div class="jspDragRight" />'))),d('<div class="jspCap jspCapRight" />')));
bC=bD.find(">.jspHorizontalBar");bl=bC.find(">.jspTrack");aX=bl.find(">.jspDrag");if(bk.showArrows){bm=d('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",bT(-1,0)).bind("click.jsp",bV);
aI=d('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",bT(1,0)).bind("click.jsp",bV);if(bk.arrowScrollOnHover){bm.bind("mouseover.jsp",bT(-1,0,bm));
aI.bind("mouseover.jsp",bT(1,0,aI));}bE(bl,bk.horizontalArrowPositions,bm,aI);}aX.hover(function(){aX.addClass("jspHover");},function(){aX.removeClass("jspHover");
}).bind("mousedown.jsp",function(h){d("html").bind("dragstart.jsp selectstart.jsp",bV);aX.addClass("jspActive");var g=h.pageX-aX.position().left;d("html").bind("mousemove.jsp",function(i){a3(i.pageX-g,false);
}).bind("mouseup.jsp mouseleave.jsp",bo);return false;});aT=bD.innerWidth();bH();}}function bH(){bD.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){aT-=d(this).outerWidth();
});bl.width(aT+"px");bO=0;}function bn(){if(bS&&bi){var h=bl.outerHeight(),g=bz.outerWidth();aM-=h;d(bC).find(">.jspCap:visible,>.jspArrow").each(function(){aT+=d(this).outerWidth();
});aT-=g;aK-=g;bF-=h;bl.parent().append(d('<div class="jspCorner" />').css("width",h+"px"));aQ();bH();}if(bS){a1.width((bD.outerWidth()-aZ)+"px");}a0=a1.outerHeight();
aO=a0/aK;if(bS){bu=Math.ceil(1/s*aT);if(bu>bk.horizontalDragMaxWidth){bu=bk.horizontalDragMaxWidth;}else{if(bu<bk.horizontalDragMinWidth){bu=bk.horizontalDragMinWidth;
}}aX.width(bu+"px");aV=aT-bu;bK(bO);}if(bi){bw=Math.ceil(1/aO*aM);if(bw>bk.verticalDragMaxHeight){bw=bk.verticalDragMaxHeight;}else{if(bw<bk.verticalDragMinHeight){bw=bk.verticalDragMinHeight;
}}bs.height(bw+"px");aW=aM-bw;bL(bh);}}function bE(l,j,m,h){var g="before",k="after",i;if(j=="os"){j=/Mac/.test(navigator.platform)?"after":"split";}if(j==g){k=j;
}else{if(j==k){g=j;i=m;m=h;h=i;}}l[g](m)[k](h);}function bT(i,g,h){return function(){bj(i,g,this,h);this.blur();return false;};}function bj(k,l,g,i){g=d(g).addClass("jspActive");
var j,m,n=true,h=function(){if(k!==0){a9.scrollByX(k*bk.arrowButtonSpeed);}if(l!==0){a9.scrollByY(l*bk.arrowButtonSpeed);}m=setTimeout(h,n?bk.initialDelay:bk.arrowRepeatFreq);
n=false;};h();j=i?"mouseout.jsp":"mouseup.jsp";i=i||d("html");i.bind(j,function(){g.removeClass("jspActive");m&&clearTimeout(m);m=null;i.unbind(j);});}function aP(){aJ();
if(bi){bz.bind("mousedown.jsp",function(i){if(i.originalTarget===f||i.originalTarget==i.currentTarget){var k=d(this),g=k.offset(),j=i.pageY-g.top-bh,m,n=true,h=function(){var p=k.offset(),o=i.pageY-p.top-bw/2,r=aK*bk.scrollPagePercent,q=aW*r/(a0-aK);
if(j<0){if(bh-q>o){a9.scrollByY(-r);}else{a4(o);}}else{if(j>0){if(bh+q<o){a9.scrollByY(r);}else{a4(o);}}else{l();return;}}m=setTimeout(h,n?bk.initialDelay:bk.trackClickRepeatFreq);
n=false;},l=function(){m&&clearTimeout(m);m=null;d(document).unbind("mouseup.jsp",l);};h();d(document).bind("mouseup.jsp",l);return false;}});}if(bS){bl.bind("mousedown.jsp",function(i){if(i.originalTarget===f||i.originalTarget==i.currentTarget){var k=d(this),g=k.offset(),j=i.pageX-g.left-bO,m,n=true,h=function(){var p=k.offset(),o=i.pageX-p.left-bu/2,r=bF*bk.scrollPagePercent,q=aV*r/(a6-bF);
if(j<0){if(bO-q>o){a9.scrollByX(-r);}else{a3(o);}}else{if(j>0){if(bO+q<o){a9.scrollByX(r);}else{a3(o);}}else{l();return;}}m=setTimeout(h,n?bk.initialDelay:bk.trackClickRepeatFreq);
n=false;},l=function(){m&&clearTimeout(m);m=null;d(document).unbind("mouseup.jsp",l);};h();d(document).bind("mouseup.jsp",l);return false;}});}}function aJ(){if(bl){bl.unbind("mousedown.jsp");
}if(bz){bz.unbind("mousedown.jsp");}}function bo(){d("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");if(bs){bs.removeClass("jspActive");
}if(aX){aX.removeClass("jspActive");}}function a4(g,h){if(!bi){return;}if(g<0){g=0;}else{if(g>aW){g=aW;}}if(h===f){h=bk.animateScroll;}if(h){a9.animate(bs,"top",g,bL);
}else{bs.css("top",g);bL(g);}}function bL(k){if(k===f){k=bs.position().top;}bD.scrollTop(0);bh=k;var h=bh===0,j=bh==aW,i=k/aW,g=-i*(a0-aK);if(bG!=h||bQ!=j){bG=h;
bQ=j;br.trigger("jsp-arrow-change",[bG,bQ,ba,aU]);}aL(h,j);a1.css("top",g);br.trigger("jsp-scroll-y",[-g,h,j]).trigger("scroll");}function a3(h,g){if(!bS){return;
}if(h<0){h=0;}else{if(h>aV){h=aV;}}if(g===f){g=bk.animateScroll;}if(g){a9.animate(aX,"left",h,bK);}else{aX.css("left",h);bK(h);}}function bK(k){if(k===f){k=aX.position().left;
}bD.scrollTop(0);bO=k;var h=bO===0,i=bO==aV,j=k/aV,g=-j*(a6-bF);if(ba!=h||aU!=i){ba=h;aU=i;br.trigger("jsp-arrow-change",[bG,bQ,ba,aU]);}aN(h,i);a1.css("left",g);
br.trigger("jsp-scroll-x",[-g,h,i]).trigger("scroll");}function aL(h,g){if(bk.showArrows){by[h?"addClass":"removeClass"]("jspDisabled");bJ[g?"addClass":"removeClass"]("jspDisabled");
}}function aN(h,g){if(bk.showArrows){bm[h?"addClass":"removeClass"]("jspDisabled");aI[g?"addClass":"removeClass"]("jspDisabled");}}function bd(g,i){var h=g/(a0-aK);
a4(h*aW,i);}function bc(i,g){var h=i/(a6-bF);a3(h*aV,g);}function bN(i,n,g){var q,u,t,v=0,j=0,h,o,p,l,m,k;try{q=d(i);}catch(r){return;}u=q.outerHeight();
t=q.outerWidth();bD.scrollTop(0);bD.scrollLeft(0);while(!q.is(".jspPane")){v+=q.position().top;j+=q.position().left;q=q.offsetParent();if(/^body|html$/i.test(q[0].nodeName)){return;
}}h=bW();p=h+aK;if(v<h||n){m=v-bk.verticalGutter;}else{if(v+u>p){m=v-aK+u+bk.verticalGutter;}}if(m){bd(m,g);}o=bU();l=o+bF;if(j<o||n){k=j-bk.horizontalGutter;
}else{if(j+t>l){k=j-bF+t+bk.horizontalGutter;}}if(k){bc(k,g);}}function bU(){return -a1.position().left;}function bW(){return -a1.position().top;}function bf(){var g=a0-aK;
return(g>20)&&(g-bW()<10);}function bv(){var g=a6-bF;return(g>20)&&(g-bU()<10);}function bI(){bD.unbind(bM).bind(bM,function(i,h,j,l){var k=bO,g=bh;a9.scrollBy(j*bk.mouseWheelSpeed,-l*bk.mouseWheelSpeed,false);
return k==bO&&g==bh;});}function aR(){bD.unbind(bM);}function bV(){return false;}function bg(){a1.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(g){bN(g.target,false);
});}function bp(){a1.find(":input,a").unbind("focus.jsp");}function a7(){var g,j,h=[];bS&&h.push(bC[0]);bi&&h.push(a5[0]);a1.focus(function(){br.focus();
});br.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(k){if(k.target!==this&&!(h.length&&d(k.target).closest(h).length)){return;
}var l=bO,m=bh;switch(k.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:g=k.keyCode;i();break;case 35:bd(a0-aK);g=null;break;case 36:bd(0);
g=null;break;}j=k.keyCode==g&&l!=bO||m!=bh;return !j;}).bind("keypress.jsp",function(k){if(k.keyCode==g){i();}return !j;});if(bk.hideFocus){br.css("outline","none");
if("hideFocus" in bD[0]){br.attr("hideFocus",true);}}else{br.css("outline","");if("hideFocus" in bD[0]){br.attr("hideFocus",false);}}function i(){var k=bO,l=bh;
switch(g){case 40:a9.scrollByY(bk.keyboardSpeed,false);break;case 38:a9.scrollByY(-bk.keyboardSpeed,false);break;case 34:case 32:a9.scrollByY(aK*bk.scrollPagePercent,false);
break;case 33:a9.scrollByY(-aK*bk.scrollPagePercent,false);break;case 39:a9.scrollByX(bk.keyboardSpeed,false);break;case 37:a9.scrollByX(-bk.keyboardSpeed,false);
break;}j=k!=bO||l!=bh;return j;}}function a8(){br.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp");}function bt(){if(location.hash&&location.hash.length>1){var h,j,i=escape(location.hash.substr(1));
try{h=d("#"+i+', a[name="'+i+'"]');}catch(g){return;}if(h.length&&a1.find(i)){if(bD.scrollTop()===0){j=setInterval(function(){if(bD.scrollTop()>0){bN(h,true);
d(document).scrollTop(bD.position().top);clearInterval(j);}},50);}else{bN(h,true);d(document).scrollTop(bD.position().top);}}}}function aS(){if(d(document.body).data("jspHijack")){return;
}d(document.body).data("jspHijack",true);d(document.body).delegate("a[href*=#]","click",function(p){var h=this.href.substr(0,this.href.indexOf("#")),o=location.href,k,j,g,m,n,l;
if(location.href.indexOf("#")!==-1){o=location.href.substr(0,location.href.indexOf("#"));}if(h!==o){return;}k=escape(this.href.substr(this.href.indexOf("#")+1));
j;try{j=d("#"+k+', a[name="'+k+'"]');}catch(i){return;}if(!j.length){return;}g=j.closest(".jspScrollable");m=g.data("jsp");m.scrollToElement(j,true);if(g[0].scrollIntoView){n=d(e).scrollTop();
l=j.offset().top;if(l<n||l>n+d(e).height()){g[0].scrollIntoView();}}p.preventDefault();});}function bB(){var k,l,i,j,h,g=false;bD.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(n){var m=n.originalEvent.touches[0];
k=bU();l=bW();i=m.pageX;j=m.pageY;h=false;g=true;}).bind("touchmove.jsp",function(m){if(!g){return;}var n=m.originalEvent.touches[0],o=bO,p=bh;a9.scrollTo(k+i-n.pageX,l+j-n.pageY);
h=h||Math.abs(i-n.pageX)>5||Math.abs(j-n.pageY)>5;return o==bO&&p==bh;}).bind("touchend.jsp",function(m){g=false;}).bind("click.jsp-touchclick",function(m){if(h){h=false;
return false;}});}function aY(){var g=bW(),h=bU();br.removeClass("jspScrollable").unbind(".jsp");br.replaceWith(bA.append(a1.children()));bA.scrollTop(g);
bA.scrollLeft(h);if(bq){clearInterval(bq);}}d.extend(a9,{reinitialise:function(g){g=d.extend({},bk,g);bx(g);},scrollToElement:function(h,i,g){bN(h,i,g);
},scrollTo:function(h,g,i){bc(h,i);bd(g,i);},scrollToX:function(h,g){bc(h,g);},scrollToY:function(g,h){bd(g,h);},scrollToPercentX:function(h,g){bc(h*(a6-bF),g);
},scrollToPercentY:function(h,g){bd(h*(a0-aK),g);},scrollBy:function(i,g,h){a9.scrollByX(i,h);a9.scrollByY(g,h);},scrollByX:function(g,i){var j=bU()+Math[g<0?"floor":"ceil"](g),h=j/(a6-bF);
a3(h*aV,i);},scrollByY:function(g,i){var j=bW()+Math[g<0?"floor":"ceil"](g),h=j/(a0-aK);a4(h*aW,i);},positionDragX:function(g,h){a3(g,h);},positionDragY:function(h,g){a4(h,g);
},animate:function(k,h,g,i){var j={};j[h]=g;k.animate(j,{duration:bk.animateDuration,easing:bk.animateEase,queue:false,step:i});},getContentPositionX:function(){return bU();
},getContentPositionY:function(){return bW();},getContentWidth:function(){return a6;},getContentHeight:function(){return a0;},getPercentScrolledX:function(){return bU()/(a6-bF);
},getPercentScrolledY:function(){return bW()/(a0-aK);},getIsScrollableH:function(){return bS;},getIsScrollableV:function(){return bi;},getContentPane:function(){return a1;
},scrollToBottom:function(g){a4(aW,g);},hijackInternalLinks:d.noop,destroy:function(){aY();}});bx(bb);}a=d.extend({},d.fn.jScrollPane.defaults,a);d.each(["mouseWheelSpeed","arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){a[this]=a[this]||a.speed;
});return this.each(function(){var h=d(this),c=h.data("jsp");if(c){c.reinitialise(a);}else{d("script",h).filter('[type="text/javascript"],:not([type])').remove();
c=new b(h,a);h.data("jsp",c);}});};d.fn.jScrollPane.defaults={showArrows:false,maintainPosition:true,stickToBottom:false,stickToRight:false,clickOnTrack:true,autoReinitialise:true,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:f,animateScroll:false,animateDuration:300,animateEase:"linear",hijackInternalLinks:false,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:0,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:false,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:true,hideFocus:false,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:0.8};
})(jQuery,this);
/*! Metadata - jQuery plugin for parsing metadata from elements
 * Copyright (c) 2006 John Resig, Yehuda Katz, Joörn Zaefferer, Paul McLanahan
 **/
(function($){$.extend({metadata:{defaults:{type:"class",name:"metadata",cre:/({.*})/,single:"metadata"},setType:function(type,name){this.defaults.type=type;
this.defaults.name=name;},get:function(elem,opts){var settings=$.extend({},this.defaults,opts);if(!settings.single.length){settings.single="metadata";}var data=$.data(elem,settings.single);
if(data){return data;}data="{}";if(settings.type=="class"){var m=settings.cre.exec(elem.className);if(m){data=m[1];}}else{if(settings.type=="elem"){if(!elem.getElementsByTagName){return undefined;
}var e=elem.getElementsByTagName(settings.name);if(e.length){data=$.trim(e[0].innerHTML);}}else{if(elem.getAttribute!=undefined){var attr=elem.getAttribute(settings.name);
if(attr){data=attr;}}}}if(data.indexOf("{")<0){data="{"+data+"}";}data=eval("("+data+")");$.data(elem,settings.single,data);return data;}}});$.fn.metadata=function(opts){return $.metadata.get(this[0],opts);
};})(jQuery);
/*! TableSorter 2.0
 * Client-side table sorting with ease!
 * Copyright (c) 2007 Christian Bach
 * Examples and docs at: http://tablesorter.com
 **/
(function($){$.extend({tablesorter:new function(){var parsers=[],widgets=[];
this.defaults={cssHeader:"header",cssAsc:"headerSortUp",cssDesc:"headerSortDown",cssChildRow:"expand-child",sortInitialOrder:"asc",sortMultiSortKey:"shiftKey",sortForce:null,sortAppend:null,sortLocaleCompare:true,textExtraction:"simple",parsers:{},widgets:[],widgetZebra:{css:["even","odd"]},headers:{},widthFixed:false,cancelSelection:true,sortList:[],headerList:[],dateFormat:"us",decimal:"/.|,/g",onRenderHeader:null,selectorHeaders:"thead th",debug:false};
function benchmark(s,d){log(s+","+(new Date().getTime()-d.getTime())+"ms");}this.benchmark=benchmark;function log(s){if(typeof console!="undefined"&&typeof console.debug!="undefined"){console.log(s);
}else{alert(s);}}function buildParserCache(table,$headers){if(table.config.debug){var parsersDebug="";}if(table.tBodies.length==0){return;}var rows=table.tBodies[0].rows;
if(rows[0]){var list=[],cells=rows[0].cells,l=cells.length;for(var i=0;i<l;i++){var p=false;if($.metadata&&($($headers[i]).metadata()&&$($headers[i]).metadata().sorter)){p=getParserById($($headers[i]).metadata().sorter);
}else{if((table.config.headers[i]&&table.config.headers[i].sorter)){p=getParserById(table.config.headers[i].sorter);}}if(!p){p=detectParserForColumn(table,rows,-1,i);
}if(table.config.debug){parsersDebug+="column:"+i+" parser:"+p.id+"\n";}list.push(p);}}if(table.config.debug){log(parsersDebug);}return list;}function detectParserForColumn(table,rows,rowIndex,cellIndex){var l=parsers.length,node=false,nodeValue=false,keepLooking=true;
while(nodeValue==""&&keepLooking){rowIndex++;if(rows[rowIndex]){node=getNodeFromRowAndCellIndex(rows,rowIndex,cellIndex);nodeValue=trimAndGetNodeText(table.config,node);
if(table.config.debug){log("Checking if value was empty on row:"+rowIndex);}}else{keepLooking=false;}}for(var i=1;i<l;i++){if(parsers[i].is(nodeValue,table,node)){return parsers[i];
}}return parsers[0];}function getNodeFromRowAndCellIndex(rows,rowIndex,cellIndex){return rows[rowIndex].cells[cellIndex];}function trimAndGetNodeText(config,node){return $.trim(getElementText(config,node));
}function getParserById(name){var l=parsers.length;for(var i=0;i<l;i++){if(parsers[i].id.toLowerCase()==name.toLowerCase()){return parsers[i];}}return false;
}function buildCache(table){if(table.config.debug){var cacheTime=new Date();}var totalRows=(table.tBodies[0]&&table.tBodies[0].rows.length)||0,totalCells=(table.tBodies[0].rows[0]&&table.tBodies[0].rows[0].cells.length)||0,parsers=table.config.parsers,cache={row:[],normalized:[]};
for(var i=0;i<totalRows;++i){var c=$(table.tBodies[0].rows[i]),cols=[];if(c.hasClass(table.config.cssChildRow)){cache.row[cache.row.length-1]=cache.row[cache.row.length-1].add(c);
continue;}cache.row.push(c);for(var j=0;j<totalCells;++j){cols.push(parsers[j].format(getElementText(table.config,c[0].cells[j]),table,c[0].cells[j]));
}cols.push(cache.normalized.length);cache.normalized.push(cols);cols=null;}if(table.config.debug){benchmark("Building cache for "+totalRows+" rows:",cacheTime);
}return cache;}function getElementText(config,node){var text="";if(!node){return"";}if(!config.supportsTextContent){config.supportsTextContent=node.textContent||false;
}if(config.textExtraction=="simple"){if(config.supportsTextContent){text=node.textContent;}else{if(node.childNodes[0]&&node.childNodes[0].hasChildNodes()){text=node.childNodes[0].innerHTML;
}else{text=node.innerHTML;}}}else{if(typeof(config.textExtraction)=="function"){text=config.textExtraction(node);}else{text=$(node).text();}}return text;
}function appendToTable(table,cache){if(table.config.debug){var appendTime=new Date();}var c=cache,r=c.row,n=c.normalized,totalRows=n.length,checkCell=(n[0].length-1),tableBody=$(table.tBodies[0]),rows=[];
for(var i=0;i<totalRows;i++){var pos=n[i][checkCell];rows.push(r[pos]);if(!table.config.appender){var l=r[pos].length;for(var j=0;j<l;j++){tableBody[0].appendChild(r[pos][j]);
}}}if(table.config.appender){table.config.appender(table,rows);}rows=null;if(table.config.debug){benchmark("Rebuilt table:",appendTime);}applyWidget(table);
setTimeout(function(){$(table).trigger("sortEnd");},0);}function buildHeaders(table){if(table.config.debug){var time=new Date();}var meta=($.metadata)?true:false;
var header_index=computeTableHeaderCellIndexes(table);$tableHeaders=$(table.config.selectorHeaders,table).each(function(index){this.column=header_index[this.parentNode.rowIndex+"-"+this.cellIndex];
this.order=formatSortingOrder(table.config.sortInitialOrder);this.count=this.order;if(checkHeaderMetadata(this)||checkHeaderOptions(table,index)){this.sortDisabled=true;
}if(checkHeaderOptionsSortingLocked(table,index)){this.order=this.lockedOrder=checkHeaderOptionsSortingLocked(table,index);}if(!this.sortDisabled){var $th=$(this).addClass(table.config.cssHeader);
if(table.config.onRenderHeader){table.config.onRenderHeader.apply($th);}}table.config.headerList[index]=this;});if(table.config.debug){benchmark("Built headers:",time);
log($tableHeaders);}return $tableHeaders;}function computeTableHeaderCellIndexes(t){var matrix=[];var lookup={};var thead=t.getElementsByTagName("THEAD")[0];
var trs=thead.getElementsByTagName("TR");for(var i=0;i<trs.length;i++){var cells=trs[i].cells;for(var j=0;j<cells.length;j++){var c=cells[j];var rowIndex=c.parentNode.rowIndex;
var cellId=rowIndex+"-"+c.cellIndex;var rowSpan=c.rowSpan||1;var colSpan=c.colSpan||1;var firstAvailCol;if(typeof(matrix[rowIndex])=="undefined"){matrix[rowIndex]=[];
}for(var k=0;k<matrix[rowIndex].length+1;k++){if(typeof(matrix[rowIndex][k])=="undefined"){firstAvailCol=k;break;}}lookup[cellId]=firstAvailCol;for(var k=rowIndex;
k<rowIndex+rowSpan;k++){if(typeof(matrix[k])=="undefined"){matrix[k]=[];}var matrixrow=matrix[k];for(var l=firstAvailCol;l<firstAvailCol+colSpan;l++){matrixrow[l]="x";
}}}}return lookup;}function checkCellColSpan(table,rows,row){var arr=[],r=table.tHead.rows,c=r[row].cells;for(var i=0;i<c.length;i++){var cell=c[i];if(cell.colSpan>1){arr=arr.concat(checkCellColSpan(table,headerArr,row++));
}else{if(table.tHead.length==1||(cell.rowSpan>1||!r[row+1])){arr.push(cell);}}}return arr;}function checkHeaderMetadata(cell){if(($.metadata)&&($(cell).metadata().sorter===false)){return true;
}return false;}function checkHeaderOptions(table,i){if((table.config.headers[i])&&(table.config.headers[i].sorter===false)){return true;}return false;}function checkHeaderOptionsSortingLocked(table,i){if((table.config.headers[i])&&(table.config.headers[i].lockedOrder)){return table.config.headers[i].lockedOrder;
}return false;}function applyWidget(table){var c=table.config.widgets;var l=c.length;for(var i=0;i<l;i++){getWidgetById(c[i]).format(table);}}function getWidgetById(name){var l=widgets.length;
for(var i=0;i<l;i++){if(widgets[i].id.toLowerCase()==name.toLowerCase()){return widgets[i];}}}function formatSortingOrder(v){if(typeof(v)!="Number"){return(v.toLowerCase()=="desc")?1:0;
}else{return(v==1)?1:0;}}function isValueInArray(v,a){var l=a.length;for(var i=0;i<l;i++){if(a[i][0]==v){return true;}}return false;}function setHeadersCss(table,$headers,list,css){$headers.removeClass(css[0]).removeClass(css[1]);
var h=[];$headers.each(function(offset){if(!this.sortDisabled){h[this.column]=$(this);}});var l=list.length;for(var i=0;i<l;i++){h[list[i][0]].addClass(css[list[i][1]]);
}}function fixColumnWidth(table,$headers){var c=table.config;if(c.widthFixed){var colgroup=$("<colgroup>");$("tr:first td",table.tBodies[0]).each(function(){colgroup.append($("<col>").css("width",$(this).width()));
});$(table).prepend(colgroup);}}function updateHeaderSortCount(table,sortList){var c=table.config,l=sortList.length;for(var i=0;i<l;i++){var s=sortList[i],o=c.headerList[s[0]];
o.count=s[1];o.count++;}}function multisort(table,sortList,cache){if(table.config.debug){var sortTime=new Date();}var dynamicExp="var sortWrapper = function(a,b) {",l=sortList.length;
for(var i=0;i<l;i++){var c=sortList[i][0];var order=sortList[i][1];var s=(table.config.parsers[c].type=="text")?((order==0)?makeSortFunction("text","asc",c):makeSortFunction("text","desc",c)):((order==0)?makeSortFunction("numeric","asc",c):makeSortFunction("numeric","desc",c));
var e="e"+i;dynamicExp+="var "+e+" = "+s;dynamicExp+="if("+e+") { return "+e+"; } ";dynamicExp+="else { ";}var orgOrderCol=cache.normalized[0].length-1;
dynamicExp+="return a["+orgOrderCol+"]-b["+orgOrderCol+"];";for(var i=0;i<l;i++){dynamicExp+="}; ";}dynamicExp+="return 0; ";dynamicExp+="}; ";if(table.config.debug){benchmark("Evaling expression:"+dynamicExp,new Date());
}eval(dynamicExp);cache.normalized.sort(sortWrapper);if(table.config.debug){benchmark("Sorting on "+sortList.toString()+" and dir "+order+" time:",sortTime);
}return cache;}function makeSortFunction(type,direction,index){var a="a["+index+"]",b="b["+index+"]";if(type=="text"&&direction=="asc"){return"("+a+" == "+b+" ? 0 : ("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : ("+a+" < "+b+") ? -1 : 1 )));";
}else{if(type=="text"&&direction=="desc"){return"("+a+" == "+b+" ? 0 : ("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : ("+b+" < "+a+") ? -1 : 1 )));";
}else{if(type=="numeric"&&direction=="asc"){return"("+a+" === null && "+b+" === null) ? 0 :("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : "+a+" - "+b+"));";
}else{if(type=="numeric"&&direction=="desc"){return"("+a+" === null && "+b+" === null) ? 0 :("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : "+b+" - "+a+"));";
}}}}}function makeSortText(i){return"((a["+i+"] < b["+i+"]) ? -1 : ((a["+i+"] > b["+i+"]) ? 1 : 0));";}function makeSortTextDesc(i){return"((b["+i+"] < a["+i+"]) ? -1 : ((b["+i+"] > a["+i+"]) ? 1 : 0));";
}function makeSortNumeric(i){return"a["+i+"]-b["+i+"];";}function makeSortNumericDesc(i){return"b["+i+"]-a["+i+"];";}function sortText(a,b){if(table.config.sortLocaleCompare){return a.localeCompare(b);
}return((a<b)?-1:((a>b)?1:0));}function sortTextDesc(a,b){if(table.config.sortLocaleCompare){return b.localeCompare(a);}return((b<a)?-1:((b>a)?1:0));}function sortNumeric(a,b){return a-b;
}function sortNumericDesc(a,b){return b-a;}function getCachedSortType(parsers,i){return parsers[i].type;}this.construct=function(settings){return this.each(function(){if(!this.tHead||!this.tBodies){return;
}var $this,$document,$headers,cache,config,shiftDown=0,sortOrder;this.config={};config=$.extend(this.config,$.tablesorter.defaults,settings);$this=$(this);
$.data(this,"tablesorter",config);$headers=buildHeaders(this);this.config.parsers=buildParserCache(this,$headers);cache=buildCache(this);var sortCSS=[config.cssDesc,config.cssAsc];
fixColumnWidth(this);$headers.click(function(e){var totalRows=($this[0].tBodies[0]&&$this[0].tBodies[0].rows.length)||0;if(!this.sortDisabled&&totalRows>0){$this.trigger("sortStart");
var $cell=$(this);var i=this.column;this.order=this.count++%2;if(this.lockedOrder){this.order=this.lockedOrder;}if(!e[config.sortMultiSortKey]){config.sortList=[];
if(config.sortForce!=null){var a=config.sortForce;for(var j=0;j<a.length;j++){if(a[j][0]!=i){config.sortList.push(a[j]);}}}config.sortList.push([i,this.order]);
}else{if(isValueInArray(i,config.sortList)){for(var j=0;j<config.sortList.length;j++){var s=config.sortList[j],o=config.headerList[s[0]];if(s[0]==i){o.count=s[1];
o.count++;s[1]=o.count%2;}}}else{config.sortList.push([i,this.order]);}}setTimeout(function(){setHeadersCss($this[0],$headers,config.sortList,sortCSS);
appendToTable($this[0],multisort($this[0],config.sortList,cache));},1);return false;}}).mousedown(function(){if(config.cancelSelection){this.onselectstart=function(){return false;
};return false;}});$this.bind("update",function(){var me=this;setTimeout(function(){me.config.parsers=buildParserCache(me,$headers);cache=buildCache(me);
},1);}).bind("updateCell",function(e,cell){var config=this.config;var pos=[(cell.parentNode.rowIndex-1),cell.cellIndex];cache.normalized[pos[0]][pos[1]]=config.parsers[pos[1]].format(getElementText(config,cell),cell);
}).bind("sorton",function(e,list){$(this).trigger("sortStart");config.sortList=list;var sortList=config.sortList;updateHeaderSortCount(this,sortList);setHeadersCss(this,$headers,sortList,sortCSS);
appendToTable(this,multisort(this,sortList,cache));}).bind("appendCache",function(){appendToTable(this,cache);}).bind("applyWidgetId",function(e,id){getWidgetById(id).format(this);
}).bind("applyWidgets",function(){applyWidget(this);});if($.metadata&&($(this).metadata()&&$(this).metadata().sortlist)){config.sortList=$(this).metadata().sortlist;
}if(config.sortList.length>0){$this.trigger("sorton",[config.sortList]);}applyWidget(this);});};this.addParser=function(parser){var l=parsers.length,a=true;
for(var i=0;i<l;i++){if(parsers[i].id.toLowerCase()==parser.id.toLowerCase()){a=false;}}if(a){parsers.push(parser);}};this.addWidget=function(widget){widgets.push(widget);
};this.formatFloat=function(s){var i=parseFloat(s);return(isNaN(i))?0:i;};this.formatInt=function(s){var i=parseInt(s);return(isNaN(i))?0:i;};this.isDigit=function(s,config){return/^[-+]?\d*$/.test($.trim(s.replace(/[,.']/g,"")));
};this.clearTableBody=function(table){if($.browser.msie){function empty(){while(this.firstChild){this.removeChild(this.firstChild);}}empty.apply(table.tBodies[0]);
}else{table.tBodies[0].innerHTML="";}};}});$.fn.extend({tablesorter:$.tablesorter.construct});var ts=$.tablesorter;ts.addParser({id:"text",is:function(s){return true;
},format:function(s){return $.trim(s.toLocaleLowerCase());},type:"text"});ts.addParser({id:"digit",is:function(s,table){var c=table.config;return $.tablesorter.isDigit(s,c);
},format:function(s){return $.tablesorter.formatFloat(s);},type:"numeric"});ts.addParser({id:"currency",is:function(s){return/^[£$€?.]/.test(s);},format:function(s){return $.tablesorter.formatFloat(s.replace(new RegExp(/[£$€]/g),""));
},type:"numeric"});ts.addParser({id:"ipAddress",is:function(s){return/^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(s);},format:function(s){var a=s.split("."),r="",l=a.length;
for(var i=0;i<l;i++){var item=a[i];if(item.length==2){r+="0"+item;}else{r+=item;}}return $.tablesorter.formatFloat(r);},type:"numeric"});ts.addParser({id:"url",is:function(s){return/^(https?|ftp|file):\/\/$/.test(s);
},format:function(s){return jQuery.trim(s.replace(new RegExp(/(https?|ftp|file):\/\//),""));},type:"text"});ts.addParser({id:"isoDate",is:function(s){return/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(s);
},format:function(s){return $.tablesorter.formatFloat((s!="")?new Date(s.replace(new RegExp(/-/g),"/")).getTime():"0");},type:"numeric"});ts.addParser({id:"percent",is:function(s){return/\%$/.test($.trim(s));
},format:function(s){return $.tablesorter.formatFloat(s.replace(new RegExp(/%/g),""));},type:"numeric"});ts.addParser({id:"usLongDate",is:function(s){return s.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/));
},format:function(s){return $.tablesorter.formatFloat(new Date(s).getTime());},type:"numeric"});ts.addParser({id:"shortDate",is:function(s){return/\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(s);
},format:function(s,table){var c=table.config;s=s.replace(/\-/g,"/");if(c.dateFormat=="us"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$1/$2");
}else{if(c.dateFormat=="uk"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$2/$1");}else{if(c.dateFormat=="dd/mm/yy"||c.dateFormat=="dd-mm-yy"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/,"$1/$2/$3");
}}}return $.tablesorter.formatFloat(new Date(s).getTime());},type:"numeric"});ts.addParser({id:"time",is:function(s){return/^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(s);
},format:function(s){return $.tablesorter.formatFloat(new Date("2000/01/01 "+s).getTime());},type:"numeric"});ts.addParser({id:"metadata",is:function(s){return false;
},format:function(s,table,cell){var c=table.config,p=(!c.parserMetadataName)?"sortValue":c.parserMetadataName;return $(cell).metadata()[p];},type:"numeric"});
ts.addWidget({id:"zebra",format:function(table){if(table.config.debug){var time=new Date();}var $tr,row=-1,odd;$("tr:visible",table.tBodies[0]).each(function(i){$tr=$(this);
if(!$tr.hasClass(table.config.cssChildRow)){row++;}odd=(row%2==0);$tr.removeClass(table.config.widgetZebra.css[odd?0:1]).addClass(table.config.widgetZebra.css[odd?1:0]);
});if(table.config.debug){$.tablesorter.benchmark("Applying Zebra widget",time);}}});})(jQuery);
/*! Autosize 1.15.2
 * jQuery plugin for textareas
 * (c) 2013 Jack Moore - jacklmoore.com
 * license: www.opensource.org/licenses/mit-license.php
 **/
(function(d){var c={className:"autosizejs",append:"",callback:false},f="hidden",b="border-box",k="lineHeight",a='<textarea tabindex="-1" style="position:absolute; top:-9999px; left:-9999px; right:auto; bottom:auto; border:0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden;"/>',g=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],i="oninput",e="onpropertychange",j,h=d(a).data("autosize",true)[0];
h.style.lineHeight="99px";if(d(h).css(k)==="99px"){g.push(k);}h.style.lineHeight="";d.fn.autosize=function(l){l=d.extend({},c,l||{});if(h.parentNode!==document.body){d(document.body).append(h);
}return this.each(function(){var q=this,o=d(q),w=o.height(),u=parseInt(o.css("maxHeight"),10),p,n,m=0,s=q.value,v=d.isFunction(l.callback);if(o.data("autosize")){return;
}if(o.css("box-sizing")===b||o.css("-moz-box-sizing")===b||o.css("-webkit-box-sizing")===b){m=o.outerHeight()-o.height();}n="none";o.css({overflow:f,overflowY:f,wordWrap:"break-word",resize:n}).data("autosize",true);
u=u&&u>0?u:90000;function t(){j=q;h.className=l.className;d.each(g,function(x,y){h.style[y]=o.css(y);});}function r(){var x,z,y;if(j!==q){t();}if(!p){p=true;
h.value=q.value+l.append;h.style.overflowY=q.style.overflowY;y=parseInt(q.style.height,10);h.style.width=o.width()+"px";h.scrollTop=0;h.scrollTop=90000;
x=h.scrollTop;if(x>u){x=u;z="scroll";}else{if(x<w){x=w;}}x+=m;q.style.overflowY=z||f;if(y!==x){q.style.height=x+"px";if(v){l.callback.call(q);}}setTimeout(function(){p=false;
},1);}}if(e in q){if(i in q){q[i]=q.onkeyup=r;}else{q[e]=r;}}else{q[i]=r;q.value="";q.value=s;}d(window).resize(r);o.bind("autosize",r);r();});};}(window.jQuery||window.Zepto));
/*! iCheck 0.9.1
 * http://git.io/uhUPMA
 * (c) 2013 Damir Foy, http://damirfoy.com
 * MIT Licensed
 **/
(function(c){var g="iCheck",e=g+"-helper",q="checkbox",a="radio",s="checked",x="un"+s,i="disabled",h="determinate",b="in"+h,r="update",t="type",d="click",w="touchbegin.i touchend.i",p="addClass",f="removeClass",l="trigger",z="label",o="cursor",n=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
c.fn[g]=function(N,E){var J=":"+q+", :"+a,L=c(),B=function(O){O.each(function(){var P=c(this);if(P.is(J)){L=L.add(P);}else{L=L.add(P.find(J));}});};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(N)){N=N.toLowerCase();
B(this);return L.each(function(){if(N=="destroy"){u(this,"ifDestroyed");}else{v(c(this),true,N);}if(c.isFunction(E)){E();}});}else{if(typeof N=="object"||!N){var F=c.extend({checkboxClass:"icheckbox_minimal-blue",radioClass:"iradio_minimal-blue",checkedClass:s,disabledClass:i,indeterminateClass:b,labelHover:true},N),G=F.handle,I=F.hoverClass||"hover",M=F.focusClass||"focus",K=F.activeClass||"active",C=!!F.labelHover,H=F.labelHoverClass||"hover",D=(""+F.increaseArea).replace("%","")|0;
if(G==q||G==a){J=":"+G;}if(D<-50){D=-50;}B(this);return L.each(function(){u(this);var X=c(this),Q=this,O=Q.id,R=-D+"%",Y=100+(D*2)+"%",S={position:"absolute",top:R,left:R,display:"block",width:Y,height:Y,margin:0,padding:0,background:"#fff",border:0,opacity:0},T=n?{position:"absolute",visibility:"hidden"}:D?S:{position:"absolute",opacity:0},U=Q[t]==q?F.checkboxClass||"i"+q:F.radioClass||"i"+a,V=c(z+'[for="'+O+'"]').add(X.closest(z)),W=X.wrap('<div class="'+U+'"/>')[l]("ifCreated").parent().append(F.insert),P=c('<ins class="'+e+'"/>').css(S).appendTo(W);
X.data(g,{o:F,s:X.attr("style")}).css(T);!!F.inheritClass&&W[p](Q.className);!!F.inheritID&&O&&W.attr("id",g+"-"+O);W.css("position")=="static"&&W.css("position","relative");
v(X,true,r);if(V.length){V.on(d+".i mouseenter.i mouseleave.i "+w,function(ab){var Z=ab[t],aa=c(this);if(!Q[i]){if(Z==d){v(X,false,true);}else{if(C){if(/ve|nd/.test(Z)){W[f](I);
aa[f](H);}else{W[p](I);aa[p](H);}}}if(n){ab.stopPropagation();}else{return false;}}});}X.on(d+".i focus.i blur.i keyup.i keydown.i keypress.i",function(ab){var aa=ab[t],Z=ab.keyCode;
if(aa==d){return false;}else{if(aa=="keydown"&&Z==32){if(!(Q[t]==a&&Q[s])){if(Q[s]){y(X,s);}else{k(X,s);}}return false;}else{if(aa=="keyup"&&Q[t]==a){!Q[s]&&k(X,s);
}else{if(/us|ur/.test(aa)){W[aa=="blur"?f:p](M);}}}}});P.on(d+" mousedown mouseup mouseover mouseout "+w,function(ab){var aa=ab[t],Z=/wn|up/.test(aa)?K:I;
if(!Q[i]){if(aa==d){v(X,false,true);}else{if(/wn|er|in/.test(aa)){W[p](Z);}else{W[f](Z+" "+K);}if(V.length&&C&&Z==I){V[/ut|nd/.test(aa)?f:p](H);}}if(n){ab.stopPropagation();
}else{return false;}}});});}else{return this;}}};function v(B,F,E){var C=B[0];D=/er/.test(E)?b:/bl/.test(E)?i:s,active=E==r?{checked:C[s],disabled:C[i],indeterminate:B.attr(b)=="true"||B.attr(h)=="false"}:C[D];
if(/^(ch|di|in)/.test(E)&&!active){k(B,D);}else{if(/^(un|en|de)/.test(E)&&active){y(B,D);}else{if(E==r){for(var D in active){if(active[D]){k(B,D,true);
}else{y(B,D,true);}}}else{if(!F||E=="toggle"){if(!F){B[l]("ifClicked");}if(active){if(C[t]!==a){y(B,D);}}else{k(B,D);}}}}}}function k(J,D,B){var G=J[0],L=J.parent(),K=D==s,C=D==b,M=C?h:K?x:"enabled",F=m(G,M+j(G[t])),I=m(G,D+j(G[t]));
if(G[D]!==true){if(!B&&D==s&&G[t]==a&&G.name){var E=J.closest("form"),H='input[name="'+G.name+'"]';H=E.length?E.find(H):c(H);H.each(function(){if(this!==G&&c.data(this,g)){y(c(this),D);
}});}if(C){G[D]=true;if(G[s]){y(J,s,"force");}}else{if(!B){G[D]=true;}if(K&&G[b]){y(J,b,false);}}A(J,K,D,B);}if(G[i]&&!!m(G,o,true)){L.find("."+e).css(o,"default");
}L[p](I||m(G,D));L[f](F||m(G,M)||"");}function y(H,D,B){var F=H[0],J=H.parent(),I=D==s,C=D==b,K=C?h:I?x:"enabled",E=m(F,K+j(F[t])),G=m(F,D+j(F[t]));if(F[D]!==false){if(C||!B||B=="force"){F[D]=false;
}A(H,I,K,B);}if(!F[i]&&!!m(F,o,true)){J.find("."+e).css(o,"pointer");}J[f](G||m(F,D)||"");J[p](E||m(F,K));}function u(C,D){if(c.data(C,g)){var B=c(C);B.parent().html(B.attr("style",c.data(C,g).s||"")[l](D||""));
B.off(".i").unwrap();c(z+'[for="'+C.id+'"]').add(B.closest(z)).off(".i");}}function m(C,D,B){if(c.data(C,g)){return c.data(C,g).o[D+(B?"":"Class")];}}function j(B){return B.charAt(0).toUpperCase()+B.slice(1);
}function A(C,D,E,B){if(!B){if(D){C[l]("ifToggled");}C[l]("ifChanged")[l]("if"+j(E));}}})(jQuery);
/*! Elise Library
 * Configurations and Interfaces
 * Main Functionalities
 * Created by Romel Perez
 * Abril del 2014
 **/
/*! Resources */
function utf8_encode(t){if(t===null||typeof t==="undefined"){return"";
}var l=(t+"");var k="",s,p,r=0;s=p=0;r=l.length;for(var q=0;q<r;q++){var m=l.charCodeAt(q);var n=null;if(m<128){p++;}else{if(m>127&&m<2048){n=String.fromCharCode((m>>6)|192,(m&63)|128);
}else{if(m&63488!=55296){n=String.fromCharCode((m>>12)|224,((m>>6)&63)|128,(m&63)|128);}else{if(m&64512!=55296){throw new RangeError("Unmatched trail surrogate at "+q);
}var o=l.charCodeAt(++q);if(o&64512!=56320){throw new RangeError("Unmatched lead surrogate at "+(q-1));}m=((m&1023)<<10)+(o&1023)+65536;n=String.fromCharCode((m>>18)|240,((m>>12)&63)|128,((m>>6)&63)|128,(m&63)|128);
}}}if(n!==null){if(p>s){k+=l.slice(s,p);}k+=n;s=p=q+1;}}if(p>s){k+=l.slice(s,r);}return k;}function utf8_decode(j){var o=[],m=0,k=0,l=0,n=0,p=0,i=0;j+="";
while(m<j.length){l=j.charCodeAt(m);if(l<=191){o[k++]=String.fromCharCode(l);m++;}else{if(l<=223){n=j.charCodeAt(m+1);o[k++]=String.fromCharCode(((l&31)<<6)|(n&63));
m+=2;}else{if(l<=239){n=j.charCodeAt(m+1);p=j.charCodeAt(m+2);o[k++]=String.fromCharCode(((l&15)<<12)|((n&63)<<6)|(p&63));m+=3;}else{n=j.charCodeAt(m+1);
p=j.charCodeAt(m+2);i=j.charCodeAt(m+3);l=((l&7)<<18)|((n&63)<<12)|((p&63)<<6)|(i&63);l-=65536;o[k++]=String.fromCharCode(55296|((l>>10)&1023));o[k++]=String.fromCharCode(56320|(l&1023));
m+=4;}}}}return o.join("");}function replaceAll(c,b,a){while(c.toString().indexOf(b)!=-1){c=c.toString().replace(b,a);}return c;}
/*! Tablesorter Interface */
jQuery.fn.tbst=jQuery.fn.tablesorter;
jQuery.fn.tablesorter=function(a){jQuery(this).each(function(){if(jQuery(this).find("tbody tr").length>=1){jQuery(this).tbst(a);}});};
/*! Checkboxes and Radios con iCheck */
jQuery.fn.check=function(a){if(a){$(this).iCheck.apply(this,arguments);
}else{$(this).iCheck().on("ifClicked",function(){$(this).trigger("click");}).on("ifChecked",function(){$(this).trigger("change");}).on("ifUnchecked",function(){$(this).trigger("change");
});}};
/*! CKEditor */
jQuery.fn.ckeditor=function(a,e){if(typeof CKEDITOR==="undefined"){return;}if(a==="contenido"){if(e&&typeof e=="string"){CKEDITOR.instances[$(this).attr("id")].setData(e);
}else{return CKEDITOR.instances[$(this).attr("id")].getData();}return this;}else{if(a=="text"){var d=CKEDITOR.instances[$(this).attr("id")].getData();elem=document.createElement("div");
elem.innerHTML=d;return elem.textContent;}else{if(a=="isEmpty"){var d=CKEDITOR.instances[$(this).attr("id")].getData();elem=document.createElement("div");
elem.innerHTML=d;var b=new RegExp("[a-zA-Z0-9]{2,}");return !b.test(elem.textContent);}else{if(a=="focus"){CKEDITOR.instances[$(this).attr("id")].fire("beforeFocus");
}}}}$(this).each(function(){var c={};e=(e&&typeof(e)=="object")?e:{};if(a=="vacio"){$.extend(c,ckeditor.editorConfigEmpty,e);}else{if(a=="full"){$.extend(c,ckeditor.editorConfigFull,e);
}else{if(a=="imagen"){$.extend(c,ckeditor.editorConfigImg,e);}else{$.extend(c,ckeditor.editorConfigNormal,e);}}}var f=CKEDITOR.replace($(this)[0],c);if(c.focus){f.on("instanceReady",function(){f.fire("beforeFocus");
});}});return this;};
/*! Tools configurations */
$(document).ready(function(){$(".boton.boton-toggle, .btn.boton-toggle").on("click",function(){$(this).toggleClass("active");
});$("ul.nav-stacked li").on("click",function(){var e=$(this),d=e.find("a"),c=e.parent().find("li");c.removeClass("active");e.addClass("active");if(d.attr("href")=="#"){return false;
}else{return true;}});var b=$(".pagination li:first").data("pagid","first");var a=$(".pagination li:last").data("pagid","last");$(".pagination li, .pagination li").not(":first, :last").on("click",function(){var f=$(this),e=f.find("a"),g=f.parent().find("li"),d=g.slice(1,f.parent().find("li").length-1);
d.removeClass("active");g.removeClass("disabled");f.addClass("active");if(f.prev().data("pagid")=="first"){f.prev().addClass("disabled");}else{if(f.next().data("pagid")=="last"){f.next().addClass("disabled");
}}if(e.attr("href")=="#"){return false;}else{return true;}});$(".pagination li:first").on("click",function(){var c=$(this);if(!b.hasClass("disabled")){c.parent().find("li.active").prev().click();
}if(c.find("a").attr("href")=="#"){return false;}else{return true;}});$(".pagination li:last").on("click",function(){var c=$(this);if(!a.hasClass("disabled")){c.parent().find("li.active").next().click();
}if(c.find("a").attr("href")=="#"){return false;}else{return true;}});$("input[type=text]").each(function(){var g,f,c;var d=$(this);var e=d.data("val");
if(e===undefined||e===""){return;}if(e==="email"){Elise.val._keyup(d,Elise.val.email);}else{if(e==="number"){Elise.val._keyup(d,Elise.val.number);}else{if(e&&e.indexOf("account")>=0){g=e.replace("account","").replace("(","").replace(")","");
f=g.split(",")[0]?g.split(",")[0]:Elise.val._accountInit;c=g.split(",")[1]?g.split(",")[1]:Elise.val._accountEnds;Elise.val._keyup(d,function(h){return Elise.val.account(h,f,c);
});}else{if(e==="text"){Elise.val._keyup(d,Elise.val.text);}else{if(e==="words"){Elise.val._keyup(d,Elise.val.words);}}}}}});if(!("querySelector" in document&&"localStorage" in window&&"addEventListener" in window)){if(!Elise._fn.EliseOldBrowserMsg&&window.top===window.window&&!window.opener){setTimeout(function(){var c=$('<div id="EliseOldBrowserMsg" style="display: none;"></div>');
c.html('<div>Estas usando una versi&oacute;n desactualizada de tu navegador o tu navegador no es compatible con las aplicaciones del portal. Recomendamos actualizar tu navegador o utilizar uno m&aacute;s moderno. Puedes usar cualquiera de los siguientes:</div><br><a href="http://www.google.com/chrome" target="_blank"><img class="img-rounded" style="width:120px;margin-right:10px" title="Google Chrome" alt="Google Chrome" src="/eisi/images/Estandar/browsers/chrome.jpg"></a><a href="http://www.mozilla.org/es-ES/firefox/" target="_blank"><img class="img-rounded" style="width:120px;margin-right:10px" title="Mozilla Firefox" alt="Mozilla Firefox" src="/eisi/images/Estandar/browsers/firefox.jpg"></a><a href="http://www.apple.com/safari" target="_blank"><img class="img-rounded" style="width:120px;margin-right:10px" title="Safari Browser" alt="Safari" src="/eisi/images/Estandar/browsers/safari.jpg"></a><a href="http://www.opera.com" target="_blank"><img class="img-rounded" style="width:120px;margin-right:10px" title="Opera Browser" alt="Opera" src="/eisi/images/Estandar/browsers/opera.jpg"></a>');
c.find("img").tip();$("body").append(c);Elise._fn.EliseOldBrowserMsg=Elise.modal({container:"EliseOldBrowserMsg",title:"Navegador no compatible"});},3000);
}}jQuery.msgBox=alert=function(d,e){if(typeof d==="object"){Elise.alert(d);return;}if(typeof d==="string"){e=$.extend({content:d},e);Elise.alert(e);}};
$("input[type=checkbox], input[type=radio]").each(function(){if($(this).data("visual")==="yes"){$(this).check();}});$.ajaxSetup({statusCode:{0:function(){alert("Al parecer No estas conectado a internet.\n Verifique su conexi�n.")},404:function(){alert("Lo sentimos, la pagina solicitada no fue encontrada, por favor refresque la pagina y vuelva a intentarlo.")},500:function(){alert("Lo sentimos ha tenido lugar un error interno en el servidor. Por favor refresque la pagina y vuelva a intentarlo.")}},error:function(e,t,n){if(e.status!==404&&e.status!==0&&e.status!==500){alert("Error: "+t+": "+n)}}});});
/*! Core Object */
Elise=$e={_fn:{}};
/*! Validaciones */
Elise.val={_keyup:function(c,b){var a=function(d){if(b(c.val())){c.removeClass("invalid").addClass("valid");}else{c.removeClass("valid").addClass("invalid");
}};c.on("focus",function(){var d=c.data("valFirstFocused");if(d){if(d===1){c.on("keyup",a);c.data("valFirstFocused",2);}}else{c.data("valFirstFocused",1);
}}).on("blur",a);},_textSecure:"., áéíóúabcdefghijklmnñopqrstuvwxyz0123456789",_wordsSecure:"., áéíóúabcdefghijklmnñopqrstuvwxyz",_accountInit:6,_accountEnds:15,email:function(a){if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a)){return true;
}return false;},number:function(a){return $.isNumeric(a);},account:function(d,c,a){c=c?c:Elise.val._accountInit;a=a?a:Elise.val._accountEnds;var b=new RegExp("^[0-9a-zA-Z*]{"+c+","+a+"}$");
if(b.test(d)){return true;}return false;},text:function(b){for(var a=0;a<b.length;a++){if(utf8_decode(Elise.val._textSecure).indexOf(b.charAt(a).toLowerCase())==-1){return false;
}}return true;},words:function(b){for(var a=0;a<b.length;a++){if(utf8_decode(Elise.val._wordsSecure).indexOf(b.charAt(a).toLowerCase())==-1){return false;
}}return true;},filename:function(a){var a=a.toLowerCase();a=replaceAll(a,utf8_decode("á"),"a");a=replaceAll(a,utf8_decode("é"),"e");a=replaceAll(a,utf8_decode("í"),"i");
a=replaceAll(a,utf8_decode("ó"),"o");a=replaceAll(a,utf8_decode("ú"),"u");a=replaceAll(a,utf8_decode("á"),"a");a=replaceAll(a,utf8_decode("ñ"),"n");a=replaceAll(a," ","_");
a=replaceAll(a,"'","");a=replaceAll(a,utf8_decode("´"),"");a=replaceAll(a,",","");a=replaceAll(a,utf8_decode("¨"),"");a=replaceAll(a,":","");a=replaceAll(a,";","");
return a;}};
/*! Window */
Elise.win={fitIframe:function(b,e,a,d){var c={};c.scroll=$(window.top).scrollTop();if(e===undefined||e==="self"){e=window;}else{if(e==="top"){e=window.parent;
}else{if(e==="top2"){e=window.parent.parent;}}}if(typeof(b)==="string"&&e.document.getElementById(b)){b=e.document.getElementById(b);a=Elise.val.number(a)?a:300;
d=Elise.val.number(d)?d:0;$(b).height("auto");c.height=Elise.win.contentHeight(b);c.res=0;c.res=c.height>a?c.height:a;$(b).add($(b).parent(".centro")).height(c.res+d);
$(window.top).scrollTop(c.scroll);return c.res+d;}else{return 0;}},contentHeight:function(b){var a=0;if(b.Document&&b.Document.body.scrollWidth){a=b.contentWindow.document.body.scrollHeight;
}else{if(b.contentDocument&&b.contentDocument.body.scrollWidth){a=b.contentDocument.body.scrollHeight;}else{if(b.contentDocument&&b.contentDocument.body.offsetWidth){a=b.contentDocument.body.offsetWidthHeight;
}}}return a;},dims:function(){var a={width:0,height:0};if(typeof window.top.innerWidth!="undefined"){a.width=window.top.innerWidth;a.height=window.top.innerHeight;
}else{if(typeof window.top.document.documentElement!="undefined"&&typeof window.top.document.documentElement.clientWidth!="undefined"&&window.top.document.documentElement.clientWidth!=0){a.width=window.top.document.documentElement.clientWidth;
a.height=window.top.document.documentElement.clientHeight;}else{a.width=window.top.document.getElementsByTagName("body")[0].clientWidth;a.height=window.top.document.getElementsByTagName("body")[0].clientHeight;
}}return a;},height:function(a){a=a?a.document:window.document;return Math.max(Math.max(a.body.scrollHeight,a.documentElement.scrollHeight),Math.max(a.body.offsetHeight,a.documentElement.offsetHeight),Math.max(a.body.clientHeight,a.documentElement.clientHeight));
}};
/*! Popup */
Elise.popup=function(a){var b="";a.name=a.name?a.name:"_blank";a.width=a.width?a.width:900;a.height=a.height?a.height:500;if(a.position==="normal"){a.left=a.top=0;
}else{if(a.position==="top"){a.left=screen.availWidth/2-a.width/2;a.top=0;}else{if(a.position==="full"){a.left=a.top=0;a.width=screen.availWidth;a.height=screen.availHeight;
}else{a.left=screen.availWidth/2-a.width/2;a.top=screen.availHeight/2-a.height/2;}}}b+="width="+a.width;b+=",height="+a.height;b+=",left="+a.left;b+=",top="+a.top;
b+=",scrollbars=yes";return window.open(a.url,a.name,b);};
/*! Modal 0.5
 * Created by Duvan Jamid Vargas, @DuvanJamid; Romel Perez, @prhonedev
 * http://www.opensource.org/licenses/mit-license.php
**/
Elise.modal=eModal=function(b){var c,f;
var e=window.top;var d=window.location.pathname.replace(/\//gi,"");var j={};j.id="emodal_"+(new Date().getTime());j.config=$.extend({container:null,url:"",title:"T&iacute;tulo del modal",emodalWidth:600,emodalContentHeight:300,delay:100,fadeIn:500,fadeOut:500,onEscKeyClose:true,show:true,onOpen:function(){},onClose:function(){},onCreate:function(){},buttons:[{btnClass:"emodal_hide",btnText:"Cerrar",btnColor:"rojo",btnPosition:"right",btnClick:function(){}}]},b);
j.url=j.config.url===""?false:true;j.config.container=typeof j.config.container==="string"?j.config.container:$(j.config.container).attr("id");j.container=$("#"+j.config.container);
if(j.container.length&&j.container.data("emodal")){j=j.container.data("emodal-handler").update(j.config);return j.config.show?j.show():j;}c=e.$("*[id="+j.config.container+"]");
for(f=0;f<c.length;f+=1){if(c.eq(f).data("emodal")&&c.eq(f).data("emodal-pathname")===d){j=c.eq(f).data("emodal-handler").update(j.config);return j.config.show?j.show():j;
}}var i=$('<div id="'+j.id+'" class="emodal_hold" style="display:none">');var h=$('<div class="emodal">');var g=$('<div class="emodal_header">').html($("<button>",{"class":"emodal_close emodal_hide",type:"button",html:"&times;"}).add('<h3 class="emodal_title">'));
var a=j.url?$('<iframe class="emodal_content emodal_content_url">'):$('<div class="emodal_content">');if(j.url){a.attr("src",j.config.url);}else{a.attr("id",j.container.attr("id")).html(j.container.html());
j.container.remove();}h.html(g).append(a);e.$("body").append(i.html(h));j.emodal=e.$("#"+j.id);j.container=j.emodal.find("#"+j.config.container);j.update=function(l){j.config=l;
h.css("width",j.config.emodalWidth);a.css("height",j.config.emodalContentHeight);g.find(".emodal_title").html(j.config.title);var k=j.config.buttons.length===0?"":$('<div class="emodal_footer">');
j.emodal.find(".emodal_footer").remove();if(k!==""){$.each(j.config.buttons,function(m,n){n.btnPosition=n.btnPosition==="center"?"none":n.btnPosition;k.append($("<button>",{id:n.btnId?n.btnId:"","class":"boton "+(n.btnClass?n.btnClass:"")+" "+(n.btnColor?n.btnColor:""),text:n.btnText,css:{"float":n.btnPosition?n.btnPosition:"right"},click:n.btnClick?function(){n.btnClick.call(j);
}:function(){}}));});h.append(k);if(j.config.onEscKeyClose){j.emodal.find("button.emodal_close").first().attr("title","Presione ESC para cerrar").toolTip({defaultPosition:"bottom"});
}else{j.emodal.find("button.emodal_close").first().off("mouseenter");}}h.find(".emodal_hide").off("click",j.hide).on("click",j.hide);return j;};j.autoPosition=function(){var m=j.emodal.find(".emodal");
var n=Elise.win.dims();var k=m.outerWidth()/2;k=k>(n.width/2)?-(n.width/2)+20:-k;var l=n.height/2-m.outerHeight()/2;l=l<10?10:l;m.css({"margin-left":k,"margin-top":l});
return j;};j.show=function(){if(!j.shown){setTimeout(function(){j.emodal.css("opacity",0);j.emodal.css("display","block");j.autoPosition();j.emodal.animate({opacity:1},j.config.fadeIn,function(){j.shown=true;
h.trigger("focus");j.config.onOpen.call(j);});},j.config.delay);}return j;};j.hide=function(){if(j.shown){setTimeout(function(){j.emodal.animate({opacity:0},j.config.fadeOut,function(){j.emodal.css("display","none");
j.shown=false;j.config.onClose.call(j);});},j.config.delay);}return j;};j.update(j.config);j.shown=false;$(e).on("resize",function(){j.shown?j.autoPosition():undefined;
});$(e.document).on("keydown",function(k){j.shown&&j.config.onEscKeyClose&&k.which===27?j.hide():undefined;});j.container.data({emodal:true,"emodal-handler":j,"emodal-pathname":d});
if(j.config.show){j.show();}setTimeout(function(){j.config.onCreate.call(j);},1);return j;};
/*! Alert
 * Copyright 2011, Halil Ä°brahim Kalyoncu
 * License: BSD
 * Modified by Oliver Kopp, 2012
 * Modified by Romel Perez, 2013
 **/
Elise.alert=function(r){var p,j,i,l,o;
var n,k,c;var e=window.top;var f="/eisi/images/Estandar/Mensajes/";var a=false;var d=$("*:focus");var m="alert_"+(new Date().getTime());var b=$.extend({content:r.content?r.content:"",title:"",type:"alert",autoClose:false,timeOut:0,showButtons:true,buttons:[{value:"Aceptar",click:function(){}}],success:function(){},beforeShow:function(){},afterShow:function(){},beforeClose:function(){},afterClose:function(){},btype:"naranja"},r);
switch(b.type){case"alert":b.title=b.title?b.title:"Alerta";l="alert.png";b.btype="naranja";break;case"info":b.title=b.title?b.title:"Informaci&oacute;n";
l="info.png";b.btype="celeste";break;case"error":b.title=b.title?b.title:"Error";l="error.png";b.btype="rojo";break;case"confirm":b.title=b.title?b.title:"Mensaje de Confirmaci&oacute;n";
l="confirm.png";b.btype="verde";b.buttons=r.buttons?b.buttons:[{value:"Aceptar",type:"verde",click:function(){}},{value:"Cancelar",type:" ",click:function(){}}];
break;}i=$('<div class="msgBoxContainer"></div>').html($('<div class="msgBoxImage"><img src="'+f+l+'"></div>').add($('<div class="msgBoxContent"></div>').html($("<p>").html($("<span>").html(b.content)))));
o=$('<div class="msgBoxButtons"></div>');$.map(b.buttons,function(s,t){o.append($("<button>",{"class":"msgButton boton "+(s.type?s.type:b.btype),html:s.value,click:s.click}));
});p=$('<div id="'+m+'" class="msgBoxBackGround"></div>');j=$("<div>",{"class":"msgBox",html:$('<div class="msgBoxTitle"></div>').html(b.title).add(i).add(b.showButtons?o:"")});
e.$("body").append(p.append(j));var g=function(){var t=j.width();var s=j.height();n=e.Elise.win.dims();k=s>=n.height?0:(n.height/2-s/2);c=t>=n.width?0:(n.width/2-t/2);
j.css({top:k,left:c});p.css({width:n.width,height:n.height});};var q=function(){if(a){return;}j.css({top:k-50,left:c});p.css({opacity:0,width:n.width,height:n.height}).animate({opacity:1},200);
j.animate({top:k,left:c},200,function(){j.find("button").focus();b.afterShow();});a=true;j.trigger("focus");b.beforeShow();};var h=function(){if(!a){return;
}j.animate({opacity:0,top:k-50,left:c},200,function(){p.remove();a=false;d.focus();b.afterClose();});b.beforeClose();};g();$(e).on("resize",function(){if(a){g();
}});j.find("button.msgButton").on("click",function(s){s.preventDefault();b.success($(this).text()==="Aceptar"?true:false);h();});if(b.autoClose){b.timeOut=b.timeOut?b.timeOut:(b.content?b.content.length*70:500);
setTimeout(h,b.timeOut);}p.on("click",function(s){if(!b.showButtons||b.autoClose){h();}else{j.fadeOut(200).fadeIn(200);}});q();return p;};
/*! Tooltip 1.4
 * Copyright 2010 Drew Wilson
 * code.drewwilson.com/entry/tiptip-jquery-plugin
 * Modified by Romel Perez 2013
 **/
jQuery.fn.toolTip=jQuery.fn.tip=function(g){var e={activation:"hover",keepAlive:false,maxWidth:"300px",edgeOffset:3,defaultPosition:"bottom",delay:200,fadeIn:200,fadeOut:200,attribute:"title",content:false,enter:function(){},exit:function(){}};
var d=$.extend(e,g);var a,f,b;if($("#tiptip_holder").length<=0){a=$('<div id="tiptip_holder"></div>');f=$('<div id="tiptip_content"></div>');b=$('<div id="tiptip_arrow"></div>');
$("body").append(a.html(f).prepend(b.html('<div id="tiptip_arrow_inner"></div>')));}else{a=$("#tiptip_holder");f=$("#tiptip_content");b=$("#tiptip_arrow");
}return this.each(function(){var k=$(this);var i="";var j=false;a.css("max-width",d.maxWidth);if(k.attr(d.attribute)!=undefined&&k.attr(d.attribute)!=""){i=k.attr(d.attribute);
k.removeAttr(d.attribute);}else{if(k.data("idtooltip")!=undefined){$content=$("#"+k.data("idtooltip"));i=$content.html();$content.remove();d.keepAlive=true;
}}if(i!==""){if(!d.content){k.removeAttr(d.attribute);}$.fn.toolTipOver=false;if(d.activation==="hover"){k.hover(function(){$.fn.toolTipOver=true;h();},function(){$.fn.toolTipOver=false;
if(!d.keepAlive){c();}else{setTimeout(function(){if(!$.fn.toolTipOver){c();}},d.delay);}});if(d.keepAlive){a.hover(function(){$.fn.toolTipOver=true;},function(){$.fn.toolTipOver=false;
c();});}}else{if(d.activation==="focus"){k.focus(function(){h();}).blur(function(){c();});}else{if(d.activation=="click"){k.click(function(){h();return false;
}).hover(function(){},function(){if(!d.keepAlive){c();}});if(d.keepAlive){a.hover(function(){},function(){c();});}}}}function h(){d.enter.call(this);f.html(i);
a.hide().removeAttr("class").css("margin","0");b.removeAttr("style");var x=parseInt(k.offset()["top"]);var o=parseInt(k.offset()["left"]);var u=parseInt(k.outerWidth());
var z=parseInt(k.outerHeight());var w=a.outerWidth();var r=a.outerHeight();var v=Math.round((u-w)/2);var n=Math.round((z-r)/2);var m=Math.round(o+v);var l=Math.round(x+z+d.edgeOffset);
var s="";var B="";var t=Math.round(w-12)/2;if(d.defaultPosition=="bottom"){s="_bottom";}else{if(d.defaultPosition=="top"){s="_top";}else{if(d.defaultPosition=="left"){s="_left";
}else{if(d.defaultPosition=="right"){s="_right";}}}}var q=(v+o)<parseInt($(window).scrollLeft());var p=(w+o)>parseInt($(window).width());if((q&&v<0)||(s=="_right"&&!p)||(s=="_left"&&o<(w+d.edgeOffset+5))){s="_right";
B=Math.round(r-13)/2;t=-6;m=Math.round(o+u+d.edgeOffset);l=Math.round(x+n);}else{if((p&&v<0)||(s=="_left"&&!q)){s="_left";B=Math.round(r-13)/2;t=Math.round(w);
m=Math.round(o-(w+d.edgeOffset+5));l=Math.round(x+n);}}var y=(x+z+d.edgeOffset+r+8)>parseInt($(window).height()+$(window).scrollTop());var A=((x+z)-(d.edgeOffset+r+8))<0;
if(y||(s=="_bottom"&&y)||(s=="_top"&&!A)){if(s=="_top"||s=="_bottom"){s="_top";}else{s=s+"_top";}B=r;l=Math.round(x-(r+5+d.edgeOffset));}else{if(A|(s=="_top"&&A)||(s=="_bottom"&&!y)){if(s=="_top"||s=="_bottom"){s="_bottom";
}else{s=s+"_bottom";}B=-6;l=Math.round(x+z+d.edgeOffset);}}if(s=="_right_top"||s=="_left_top"){l=l+5;}else{if(s=="_right_bottom"||s=="_left_bottom"){l=l-5;
}}if(s=="_left_top"||s=="_left_bottom"){m=m+5;}b.css({"margin-left":t+"px","margin-top":B+"px"});a.css({"margin-left":m+"px","margin-top":l+"px"}).attr("class","tip"+s);
if(j){clearTimeout(j);}j=setTimeout(function(){a.stop(true,true).fadeIn(d.fadeIn);},d.delay);}function c(){d.exit.call(this);if(j){clearTimeout(j);}a.fadeOut(d.fadeOut);
}}});};
/*! Elise Loader 0.5
 * Copyright 2014, Romel Perez, @prhonedev; Duvan Vargas, @DuvanJamid
 * License: www.opensource.org/licenses/mit-license.php
 **/
Elise.loader=function(c){var a,d;
var b={};b.config=$.extend({selector:"",type:"spin",text:"Cargando, por favor espere...",textPosition:"bottom",determinate:false,percentage:0,show:true,width:"100%",fadeTime:250,updateTime:200,size:"normal",border:true},c);
b.config.type=b.config.type==="spinner"?"spin":b.config.type;b.loader=$('<div class="eloader" style="display:none"></div>').css("width",b.config.width);
a=$("<div>");b.loader.append(a);if(b.config.type==="spin"){a.addClass("spin");if(b.config.determinate){a.append('<svg>                               <circle class="progress" transform="translate(30,30) rotate(-90)" r="25" cy="0" cx="0"></circle>                               <circle transform="translate(30,30)" r="25" cy="0" cx="0"></circle>                               </svg>                               <div class="progress-count">0%</div>');
}else{a.addClass("undeterminate").html('<div class="spin-ball1"></div><div class="spin-ball2"></div>');if(b.config.size==="mini"){a.addClass("spin-mini");
}}}else{a.addClass("bar");if(!b.config.border){a.css("border-width",0);}if(b.config.determinate){a.append($('<div class="progress" style="width: 0%">').html("0%"));
}else{a.addClass("undeterminate").append('<div class="bar-ball bar-ball1"></div>                     <div class="bar-ball bar-ball2"></div>                     <div class="bar-ball bar-ball3"></div>                     <div class="bar-ball bar-ball4"></div>');
}}if(b.config.text){d=$('<div class="state">').html(b.config.text);if(b.config.textPosition==="bottom"){b.loader.append(d);}else{b.loader.prepend(d);}}b.update=function(f){var g,h,e;
if(f){if(f.text&&b.config.text){g=b.loader.find(".state");h=g.outerWidth();g.animate({"margin-left":"-"+h+"px",opacity:0},b.config.updateTime/2,function(){g.css({width:h,"margin-left":h}).html(f.text).stop().animate({"margin-left":0,opacity:1},b.config.updateTime/2,function(){g.removeAttr("style");
});});}if(f.percentage&&b.config.determinate){if(b.config.type==="spin"){e=157*(f.percentage/100);a.find(".progress").animate({"stroke-dashoffset":157-e},b.config.updateTime);
b.loader.find(".progress-count").html(f.percentage+"%");}else{b.loader.find(".progress").animate({width:f.percentage+"%"},b.config.updateTime).html(f.percentage+"%");
}}f.width?b.loader.animate({width:f.width},b.config.updateTime):undefined;}return b;};b.destroy=function(f,e){b.hide(f?f:b.config.fadeTime,function(){b.loader.remove();
e?e():undefined;});return b;};b.show=function(f,e){b.loader.show(f?f:b.config.fadeTime,e);return b;};b.hide=function(f,e){b.update({percentage:100}).loader.hide(f?f:b.config.fadeTime,e);
return b;};b.remove=function(){b.destroy(0);};$(b.config.selector).append(b.loader);if(b.config.show){b.loader.fadeIn(b.config.fadeTime);}b.update({percentage:b.config.percentage});
return b;};jQuery.fn.loader=function(a){a=$.extend({selector:this},a);return Elise.loader(a);};
/*! Hope 0.5
 * Copyright 2014, Duvan Vargas, @DuvanJamid; Romel Perez, @prhonedev
 * License: www.opensource.org/licenses/mit-license.php
**/
Elise.hope=function(e){if(e&&e.animation){e.animation=e.animation.toLowerCase();
e.animation=e.animation==="slidedown"?"slide":e.animation==="fadein"?"fade":e.animation;}var d,b,c;var f=window.top;var a={reset:false,width:300,background:"rgba(0,0,0,0.3)",animation:"slide",animationIn:250,animationOut:250,onOpen:function(){},onClose:function(){},loader:{text:"Procesando, por favor espere..."}};
if(f.Elise._fn.hope&&f.Elise._fn.hope._shown){if(e&&!e.reset){f.Elise._fn.hope.update(e);return f.Elise._fn.hope;}}if(f.Elise._fn.hope){d=f.Elise._fn.hope;
d.config=$.extend(a,e);b=d.hope;c=b.find(".ehope").html("");}else{d=f.Elise._fn.hope={};d.config=$.extend(a,e);b=$('<div id="ehope" class="ehope-hold" style="display: none;"></div>');
c=$('<div class="ehope"></div>');d.hope=b;f.$("body").append(b.html(c));$(f).on("resize",function(){d.position("fade");});}d.config.loader.selector=c;d.loader=Elise.loader(d.config.loader);
d.update=function(g){if(d._shown&&g){d.loader.update(g);}else{c.css("width",d.config.width);b.css("background-color",d.config.background);}c.trigger("focus");
};d.position=function(i){if(d._shown){var h=c.outerWidth();var g=c.outerHeight();var l=f.Elise.win.dims();var k="50%";var j="50%";b.css({width:l.width,height:l.height});
c.css({left:k,top:0,"margin-left":"-"+(h/2)+"px","margin-top":"-"+(g/2)+"px"});if(!i&&d.config.animation==="slide"){c.stop().animate({top:j},d.config.animationIn);
}else{c.css("top",j);}}};d.destroy=function(){if(d._shown){d.update({percentage:100});b.fadeOut(d.config.animationOut,function(){d._shown=false;d.config.onClose();
});if(d.config.animation==="slide"){c.animate({top:0},d.config.animationOut);}}};d.update();b.stop().show(d.config.animationIn);d._shown=true;d.config.animation==="slide"?d.position():d.position("fade");
d.config.onOpen();return d;};
/*! eNofity || Toastr
 * Copyright 2012-2014 John Papa and Hans Fjällemark.
 * Project: https://github.com/CodeSeven/toastr
 */
(function(a){a(["jquery"],function(b){return(function(){var n;
var d;var x=0;var c={normal:"normal",error:"error",info:"info",success:"success",warning:"warning"};var u={clear:l,remove:w,error:p,info:t,getContainer:r,options:{},subscribe:g,success:f,version:"2.0.3",warning:o,normal:v};
return u;function p(z,A,y){return k({type:c.error,iconClass:i().iconClasses.error,message:z,optionsOverride:y,title:A});}function r(y,z){if(!y){y=i();}n=b("#"+y.containerId);
if(n.length){return n;}if(z){n=e(y);}return n;}function v(z,A,y){return k({type:c.normal,iconClass:i().iconClasses.normal,message:z,optionsOverride:y,title:A});
}function t(z,A,y){return k({type:c.info,iconClass:i().iconClasses.info,message:z,optionsOverride:y,title:A});}function g(y){d=y;}function f(z,A,y){return k({type:c.success,iconClass:i().iconClasses.success,message:z,optionsOverride:y,title:A});
}function o(z,A,y){return k({type:c.warning,iconClass:i().iconClasses.warning,message:z,optionsOverride:y,title:A});}function l(y){var z=i();if(!n){r(z);
}if(!s(y,z)){m(z);}}function w(y){var z=i();if(!n){r(z);}if(y&&b(":focus",y).length===0){j(y);return;}if(n.children().length){n.remove();}}function m(y){var A=n.children();
for(var z=A.length-1;z>=0;z--){s(b(A[z]),y);}}function s(y,z){if(y&&b(":focus",y).length===0){y[z.hideMethod]({duration:z.hideDuration,easing:z.hideEasing,complete:function(){j(y);
}});return true;}return false;}function e(y){n=b("<div/>").attr("id",y.containerId).addClass(y.positionClass).attr("aria-live","polite").attr("role","alert");
n.appendTo(b(y.target));return n;}function h(){return{tapToDismiss:true,toastClass:"enotify",containerId:"enotify-container",debug:false,showMethod:"fadeIn",showDuration:300,showEasing:"swing",hideMethod:"fadeOut",hideDuration:1000,hideEasing:"swing",onHidden:undefined,onShown:undefined,timeOut:7000,extendedTimeOut:1000,iconClasses:{normal:"enotify-normal",error:"enotify-error",info:"enotify-info",success:"enotify-success",warning:"enotify-warning"},iconClass:"enotify-info",positionClass:"enotify-bottom-right",titleClass:"enotify-title",messageClass:"enotify-message",target:"body",closeHtml:"<button>&times;</button>",newestOnTop:true,closeButton:true};
}function q(y){if(!d){return;}d(y);}function k(z){var J=i(),G=z.iconClass||J.iconClass;if(typeof(z.optionsOverride)!=="undefined"){J=b.extend(J,z.optionsOverride);
G=z.optionsOverride.iconClass||G;}x++;n=r(J,true);var I=null,C=b("<div/>"),E=b("<div/>"),y=b("<div/>"),F=b(J.closeHtml),D={toastId:x,state:"visible",startTime:new Date(),options:J,map:z};
if(z.iconClass){C.addClass(J.toastClass).addClass(G);}if(z.title){E.append(z.title).addClass(J.titleClass);C.append(E);}if(z.message){y.append(z.message).addClass(J.messageClass);
C.append(y);}if(J.closeButton){F.addClass("enotify-close-button").attr("role","button");C.prepend(F);}C.hide();if(J.newestOnTop){n.prepend(C);}else{n.append(C);
}C[J.showMethod]({duration:J.showDuration,easing:J.showEasing,complete:J.onShown});if(J.timeOut>0){I=setTimeout(B,J.timeOut);}C.hover(A,H);if(!J.onClick&&J.tapToDismiss){C.click(B);
}if(J.closeButton&&F){F.click(function(K){if(K.stopPropagation){K.stopPropagation();}else{if(K.cancelBubble!==undefined&&K.cancelBubble!==true){K.cancelBubble=true;
}}B(true);});}if(J.onClick){C.click(function(){J.onClick();B();});}q(D);if(J.debug&&console){console.log(D);}return C;function B(K){if(b(":focus",C).length&&!K){return;
}return C[J.hideMethod]({duration:J.hideDuration,easing:J.hideEasing,complete:function(){j(C);if(J.onHidden&&D.state!=="hidden"){J.onHidden();}D.state="hidden";
D.endTime=new Date();q(D);}});}function H(){if(J.timeOut>0||J.extendedTimeOut>0){I=setTimeout(B,J.extendedTimeOut);}}function A(){clearTimeout(I);C.stop(true,true)[J.showMethod]({duration:J.showDuration,easing:J.showEasing});
}}function i(){return b.extend({},h(),u.options);}function j(y){if(!n){n=r();}if(y.is(":visible")){return;}y.remove();y=null;if(n.children().length===0){n.remove();
}}})();});}(typeof define==="function"&&define.amd?define:function(b,a){if(typeof module!=="undefined"&&module.exports){module.exports=a(require("jquery"));
}else{Elise.notify=a(window.top.jQuery);}}));
/*! MagicTable
 * Copyright (c) 2009 Ryan Zielke (neoalchemy.com)
 * licensed under the MIT licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * @author Ryan Zielke (neoalchemy.org) 
 * @author Duvan Jamid Vargas {extend}
 * @version 0.5
 * @requires jQuery v1.2.3 or above
 */
(function(a){a.fn.extend({magicTable:function(b){var c={ignoreRows:[],rowsPerPage:10,currPage:1,optionsForRows:[5,10,25,50,100],headers:{}};
c=a.extend(c,b);return this.each(function(){var l={};l.defaults=c;l.table=a(this)[0];var j,d,e,f,h,i,k;j="#magicTable-totalPages";d="#magicTable-currPage";
e="#magicTable-rowsPerPage";f="#magicTable-firstPage";h="#magicTable-prevPage";i="#magicTable-nextPage";k="#magicTable-lastPage";var g=0;l.makeRowsArrary=function(){l.possibleTableRows=[];
l.possibleTableRows=a.makeArray(a("tbody tr",l.table));l.tableRows=a.grep(l.possibleTableRows,function(n,m){return(a.inArray(n,l.defaults.ignoreRows)===-1);
},false);l.numRows=l.tableRows.length;g=l.resetTotalPages();l.currPageNumber=(l.defaults.currPage>g)?1:(l.currPageNumber)?l.currPageNumber:l.defaults.currPage;
if(a.inArray(l.defaults.rowsPerPage,l.defaults.optionsForRows)===-1){l.defaults.optionsForRows.push(l.defaults.rowsPerPage);}};l.hideOtherPages=function(o){if(o===0||o>g){return;
}var p=(o-1)*l.defaults.rowsPerPage;var n=(p+l.defaults.rowsPerPage-1);a(l.tableRows).show();for(var m=0;m<l.tableRows.length;m++){if(m<p||m>n){a(l.tableRows[m]).hide();
}}};l.resetTotalPages=function(){var n=Math.round(l.numRows/l.defaults.rowsPerPage);var m=(n*l.defaults.rowsPerPage<l.numRows)?n+1:n;if(a(l.content).find(j).length>0){a(l.content).find(j).html(m);
}return m;};l.resetCurrentPage=function(m){if(m<1||m>g){return;}else{l.currPageNumber=m;l.hideOtherPages(l.currPageNumber);a(l.content).find(d).val(l.currPageNumber);
}};l.resetPerPageValues=function(){var o=false;var p=l.defaults.optionsForRows;p.sort(function(r,q){return r-q;});var n=a(l.content).find(e)[0];n.options=[];
n.length=0;for(var m=0;m<p.length;m++){if(p[m]<l.tableRows.length){if(p[m]===l.defaults.rowsPerPage){n.options[m]=new Option(p[m],p[m],true,true);o=true;
}else{n.options[m]=new Option(p[m],p[m]);}}}n.options[n.length]=new Option("Todos",l.tableRows.length);if(!o){l.defaults.optionsForRows===p[0];}};l.createPaginationElements=function(){l.content=a("<div/>",{"class":"box magicTable"});
l.mtHeader=a("<div/>",{"class":"row-fluid magicTable-header"});l.mtHeader.append(a("<div/>",{"class":"span6"}),a("<div/>",{"class":"span6"}));var m=a("<select/>",{"class":"pull-none",id:"magicTable-rowsPerPage"}).append(a("<option/>",{value:"5",text:"5"}));
l.mtHeader.find(".span6:first").append(m);l.mtFooter=a("<div/>",{"class":"row-fluid magicTable-footer"});l.mtFooter.append(a("<div/>",{"class":"span6"}),a("<div/>",{"class":"span6"}));
var n=[];n.push("<div id='magicTable-paginater' class='combo1 pull-right'>");n.push("<button id='magicTable-firstPage' class='boton boton-mini left ' title='Primera pagina'>");
n.push("<span class='icon icon_m13'></span>");n.push("</button>");n.push("<button id='magicTable-prevPage' class='boton boton-mini centro ' title='Pagina anterior'>");
n.push("<span class='icon icon_n13'></span>");n.push("</button>");n.push("<button class='boton boton-mini centro magicTable-pageInfo'>Pagina </button></button>");
n.push("<input id='magicTable-currPage' class='centro magicTable-currPage' value='"+l.currPageNumber+"' type='text' title='Pagina actual' size='1'>");n.push("<button class='boton boton-mini centro magicTable-pageInfo' >de <span id='magicTable-totalPages'>"+g+"</span> </button></button>");
n.push("<button id='magicTable-nextPage' class='boton boton-mini centro ' title='Pagina siguiente'>");n.push("<span class='icon icon_k13'></span>");n.push("</button>");
n.push("<button id='magicTable-lastPage' class='boton boton-mini right ' title='Ultima pagina'>");n.push("<span class='icon icon_l13'></span>");n.push("</button>");
n.push("</div>");l.mtFooter.find(".span6:last").append(n.join("").toString());l.mtFooter.find(".span6:first").append("");a(l.table).before(l.content);l.content.append(l.mtHeader,a(l.table).addClass("tablesorter"),l.mtFooter);
};l.createElements=function(){l.createPaginationElements();a(l.table).find(d).val(l.currPageNumber);};l.update=function(){l.makeRowsArrary();l.resetPerPageValues();
l.resetCurrentPage(l.currPageNumber);};l.makeRowsArrary();a(l.table).tablesorter({headers:l.defaults.headers});l.createElements();l.resetPerPageValues();
l.hideOtherPages(l.currPageNumber);a(l.table).bind("sortEnd",function(){l.update();});a(l.content).find(f).bind("click",function(m){l.resetCurrentPage(1);
});a(l.content).find(h).bind("click",function(m){l.resetCurrentPage(l.currPageNumber-1);});a(l.content).find(i).bind("click",function(m){l.resetCurrentPage(parseInt(l.currPageNumber)+1);
});a(l.content).find(k).bind("click",function(m){l.resetCurrentPage(g);});a(l.content).find(d).bind("change",function(m){l.resetCurrentPage(this.value);
});a(l.content).find(e).bind("change",function(m){l.defaults.rowsPerPage=parseInt(this.value,10);g=l.resetTotalPages();l.resetCurrentPage(1);});a(l.table).on("mtUpdate",{},function(m){l.update();
});a(l.table).bind("mtUpdate",function(m){l.update();a(l.table).trigger("update");});return l;});}});})(jQuery);