/*! $.noUiSlider - WTFPL - refreshless.com/nouislider/ */
(function(e){function h(a){throw new RangeError("noUiSlider: "+a);}function x(a,b,d){(a[b]||a[d])&&a[b]===a[d]&&h("(Link) '"+b+"' can't match '"+d+"'.'")}function t(a){return"number"===typeof a&&!isNaN(a)&&isFinite(a)}function H(a){return e.isArray(a)?a:[a]}function D(a,b){a.addClass(b);setTimeout(function(){a.removeClass(b)},300)}function y(a,b){return 100*b/(a[1]-a[0])}function I(a,b){if(b>=a.d.slice(-1)[0])return 100;for(var d=1,c,g,e;b>=a.d[d];)d++;c=a.d[d-1];g=a.d[d];e=a.c[d-1];c=[c,g];return e+
    y(c,0>c[0]?b+Math.abs(c[0]):b-c[0])/(100/(a.c[d]-e))}function J(a,b){for(var d=1,c;b>=a.c[d];)d++;if(a.m)return c=a.c[d-1],d=a.c[d],b-c>(d-c)/2?d:c;a.h[d-1]?(c=a.h[d-1],d=a.c[d-1]+Math.round((b-a.c[d-1])/c)*c):d=b;return d}function s(a){void 0===a&&(a={});"object"!==typeof a&&h("(Format) 'format' option must be an object.");var b={};e(K).each(function(d,c){void 0===a[c]?b[c]=z[d]:typeof a[c]===typeof z[d]?("decimals"===c&&(0>a[c]||7<a[c])&&h("(Format) 'format.decimals' option must be between 0 and 7."),
    b[c]=a[c]):h("(Format) 'format."+c+"' must be a "+typeof z[d]+".")});x(b,"mark","thousand");x(b,"prefix","negative");x(b,"prefix","negativeBefore");this.B=b}function q(a,b){if(!(this instanceof q))throw Error("Link: Don't use Link as a function. Use the 'new' keyword.");if(!a)throw new RangeError("Link: missing parameters.");this.g=a.format||{};this.update=!b;var d=this,c=a.target||function(){},g=a.method,f="string"===typeof c&&0===c.indexOf("-tooltip-"),h="string"===typeof c&&0!==c.indexOf("-"),
    n="function"===typeof c,r=c instanceof e||e.zepto&&e.zepto.isZ(c),E=r&&c.is("input, select, textarea"),l=r&&"function"===typeof g,s=r&&"string"===typeof g&&c[g];if(f)this.method=g||"html",this.j=e(c.replace("-tooltip-","")||"<div/>")[0];else if(h)this.method="val",this.j=document.createElement("input"),this.j.name=c,this.j.type="hidden";else if(n)this.target=!1,this.method=c;else{if(r){if(g&&(l||s)){this.target=c;this.method=g;return}if(!g&&E){this.method="val";this.target=c;this.target.on("change",
    function(a){a=e(a.target).val();var b=d.q;d.u.val([b?null:a,b?a:null],{link:d})});return}if(!g&&!E){this.method="html";this.target=c;return}}throw new RangeError("Link: Invalid Link.");}}function L(a,b){t(b)||h("'step' is not numeric.");a.h[0]=b}function M(a,b){("object"!==typeof b||e.isArray(b))&&h("'range' is not an object.");e.each(b,function(b,c){var g;"number"===typeof c&&(c=[c]);e.isArray(c)||h("'range' contains invalid value.");g="min"===b?0:"max"===b?100:parseFloat(b);t(g)&&t(c[0])||h("'range' value isn't numeric.");
    a.c.push(g);a.d.push(c[0]);g?a.h.push(isNaN(c[1])?!1:c[1]):isNaN(c[1])||(a.h[0]=c[1])});e.each(a.h,function(b,c){if(!c)return!0;a.h[b]=y([a.d[b],a.d[b+1]],c)/(100/(a.c[b+1]-a.c[b]))})}function N(a,b){"number"===typeof b&&(b=[b]);(!e.isArray(b)||!b.length||2<b.length)&&h("'start' option is incorrect.");a.a=b.length;a.start=b}function O(a,b){a.m=b;"boolean"!==typeof b&&h("'snap' option must be a boolean.")}function P(a,b){"lower"===b&&1===a.a?a.i=1:"upper"===b&&1===a.a?a.i=2:!0===b&&2===a.a?a.i=3:!1===
    b?a.i=0:h("'connect' option was doesn't match handle count.")}function Q(a,b){switch(b){case "horizontal":a.k=0;break;case "vertical":a.k=1;break;default:h("'orientation' option is invalid.")}}function R(a,b){2<a.c.length&&h("'margin' option is only supported on linear sliders.");a.margin=y(a.d,b);t(b)||h("'margin' option must be numeric.")}function S(a,b){switch(b){case "ltr":a.dir=0;break;case "rtl":a.dir=1;a.i=[0,2,1,3][a.i];break;default:h("'direction' option was not recognized.")}}function T(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          b){"string"!==typeof b&&h("'behaviour' must be a string containing options.");var d=0<=b.indexOf("snap");a.n={p:0<=b.indexOf("tap")||d,extend:0<=b.indexOf("extend"),s:0<=b.indexOf("drag"),fixed:0<=b.indexOf("fixed"),m:d}}function U(a,b,d){a.o=[b.lower,b.upper];a.g=new s(b.format);e.each(a.o,function(a,g){e.isArray(g)||h("'serialization."+(a?"upper":"lower")+"' must be an array.");e.each(g,function(){this instanceof q||h("'serialization."+(a?"upper":"lower")+"' can only contain Link instances.");this.q=
    a;this.u=d;this.scope=this.scope||d;this.g=new s(e.extend({},b.format,this.g))})});a.dir&&1<a.a&&a.o.reverse()}function V(a,b){var d={c:[],d:[],h:[!1],margin:0},c;c={step:{e:!1,f:L},range:{e:!0,f:M},start:{e:!0,f:N},snap:{e:!1,f:O},connect:{e:!0,f:P},orientation:{e:!1,f:Q},margin:{e:!1,f:R},direction:{e:!0,f:S},behaviour:{e:!0,f:T},serialization:{e:!0,f:U}};a=e.extend({connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal"},a);a.serialization=e.extend({lower:[],upper:[],format:{}},a.serialization);
    e.each(c,function(c,e){if(void 0===a[c])if(e.e)h("'"+c+"' is required.");else return!0;e.f(d,a[c],b)});d.style=d.k?"top":"left";return d}function W(a,b){var d=e("<div><div/></div>").addClass(f[2]),c=["-lower","-upper"];a.dir&&c.reverse();d.children().addClass(f[3]+" "+f[3]+c[b]);return d}function X(a,b){b.j&&(b=new q({target:e(b.j).clone().appendTo(a),method:b.method,format:b.g},!0));return b}function Y(a,b){var d,c=[];for(d=0;d<a.a;d++){var e=c,f=d,h=a.o[d],n=b[d].children(),r=void 0,l=[];l.push(new q({format:a.g},
    !0));for(r=0;r<h.length;r++)l.push(X(n,h[r]));e[f]=l}return c}function Z(a,b,d){switch(a){case 1:b.addClass(f[7]);d[0].addClass(f[6]);break;case 3:d[1].addClass(f[6]);case 2:d[0].addClass(f[7]);case 0:b.addClass(f[6])}}function aa(a,b){var d,c=[];for(d=0;d<a.a;d++)c.push(W(a,d).appendTo(b));return c}function ba(a,b){b.addClass([f[0],f[8+a.dir],f[4+a.k]].join(" "));return e("<div/>").appendTo(b).addClass(f[1])}function ca(a,b,d){function c(){return u[["width","height"][b.k]]()}function g(a){var b,
    c=[m.val()];for(b=0;b<a.length;b++)m.trigger(a[b],c)}function h(a,c,d){var g=a[0]!==k[0][0]?1:0,p=v[0]+b.margin,F=v[1]-b.margin;d&&1<k.length&&(c=g?Math.max(c,p):Math.min(c,F));100>c&&(c=J(b,c));c=Math.max(Math.min(parseFloat(c.toFixed(7)),100),0);if(c===v[g])return 1===k.length?!1:c===p||c===F?0:!1;a.css(b.style,c+"%");a.is(":first-child")&&a.toggleClass(f[17],50<c);v[g]=c;b.dir&&(c=100-c);e(w[g]).each(function(){this.write(b,c,a.children(),m)});return!0}function q(a,b,c){c||D(m,f[14]);h(a,b,!1);
    g(["slide","set","change"])}function n(a,c,d,e){a=a.replace(/\s/g,".nui ")+".nui";c.on(a,function(a){var c=m.attr("disabled");if(m.hasClass(f[14])||void 0!==c&&null!==c)return!1;a.preventDefault();var c=0===a.type.indexOf("touch"),g=0===a.type.indexOf("mouse"),B=0===a.type.indexOf("pointer"),A,h,k=a;0===a.type.indexOf("MSPointer")&&(B=!0);a.originalEvent&&(a=a.originalEvent);c&&(A=a.changedTouches[0].pageX,h=a.changedTouches[0].pageY);if(g||B)B||void 0!==window.pageXOffset||(window.pageXOffset=document.documentElement.scrollLeft,
    window.pageYOffset=document.documentElement.scrollTop),A=a.clientX+window.pageXOffset,h=a.clientY+window.pageYOffset;k.v=[A,h];k.cursor=g;a=k;a.l=a.v[b.k];d(a,e)})}function r(a,b){var d=b.a||k,e,f=!1,f=100*(a.l-b.start)/c(),m=d[0][0]!==k[0][0]?1:0;var n=b.w;e=f+n[0];f+=n[1];1<d.length?(0>e&&(f+=Math.abs(e)),100<f&&(e-=f-100),e=[Math.max(Math.min(e,100),0),Math.max(Math.min(f,100),0)]):e=[e,f];f=h(d[0],e[m],1===d.length);1<d.length&&(f=h(d[1],e[m?0:1],!1)||f);f&&g(["slide"])}function s(a){e("."+f[15]).removeClass(f[15]);
    a.cursor&&e("body").css("cursor","").off(".nui");C.off(".nui");m.removeClass(f[12]);g(["set","change"])}function t(a,b){1===b.a.length&&b.a[0].children().addClass(f[15]);a.stopPropagation();n(l.move,C,r,{start:a.l,a:b.a,w:[v[0],v[k.length-1]]});n(l.end,C,s,null);a.cursor&&(e("body").css("cursor",e(a.target).css("cursor")),1<k.length&&m.addClass(f[12]),e("body").on("selectstart.nui",!1))}function x(a){var d=a.l,g=0;a.stopPropagation();e.each(k,function(){g+=this.offset()[b.style]});g=d<g/2||1===k.length?
    0:1;d-=u.offset()[b.style];d=100*d/c();q(k[g],d,b.n.m);b.n.m&&t(a,{a:[k[g]]})}function y(a){var c=(a=a.l<u.offset()[b.style])?0:100;a=a?0:k.length-1;q(k[a],c,!1)}var m=e(a),v=[-1,-1],u,w,k;if(!m.is(":empty"))throw Error("Slider was already initialized.");u=ba(b,m);k=aa(b,u);w=Y(b,k);Z(b.i,m,k);(function(a){var b;if(!a.fixed)for(b=0;b<k.length;b++)n(l.start,k[b].children(),t,{a:[k[b]]});a.p&&n(l.start,u,x,{a:k});a.extend&&(m.addClass(f[16]),a.p&&n(l.start,m,y,{a:k}));a.s&&(b=u.find("."+f[7]).addClass(f[10]),
    a.fixed&&(b=b.add(u.children().not(b).children())),n(l.start,b,t,{a:k}))})(b.n);a.F=function(a,c,d,n,p){var l;b.dir&&1<b.a&&a.reverse();p&&D(m,f[14]);for(l=0;l<(1<k.length?3:1);l++)p=d||w[l%2][0],p=p.valueOf(a[l%2]),!1!==p&&(p=I(b,p),b.dir&&(p=100-p),!0!==h(k[l%2],p,!0)&&e(w[l%2]).each(function(){this.write(b,v[l%2],k[l%2].children(),m,n)}));!0===c&&g(["set"])};a.D=function(){var a,c=[];for(a=0;a<b.a;a++)c[a]=w[a][0].A;return 1===c.length?c[0]:b.dir&&1<b.a?c.reverse():c};a.r=function(){e.each(w,function(){e.each(this,
    function(){this.target&&this.target.off(".nui")})});e(this).off(".nui").removeClass(f.join(" ")).empty();return d};m.val(b.start)}function da(a){this.length||h("Can't initialize slider on empty selection.");var b=V(a,this);return this.each(function(){ca(this,b,a)})}function ea(a){return this.each(function(){var b=e(this).val(),d=this.r(),c=e.extend({},d,a);e(this).noUiSlider(c);d.start===c.start&&e(this).val(b)})}var C=e(document),G=e.fn.val,l=window.navigator.G?{start:"pointerdown",move:"pointermove",
        end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},f="noUi-target noUi-base noUi-origin noUi-handle noUi-horizontal noUi-vertical noUi-background noUi-connect noUi-ltr noUi-rtl noUi-dragable  noUi-state-drag  noUi-state-tap noUi-active noUi-extended noUi-stacking".split(" "),K="decimals mark thousand prefix postfix encoder decoder negative negativeBefore".split(" "),
    z=[2,".","","","",function(a){return a},function(a){return a},"-",""];s.prototype.b=function(a){return this.B[a]};s.prototype.C=function(a){function b(a){return a.split("").reverse().join("")}a=this.b("encoder")(a);var d="",c="",e="",f="";0>a&&(d=this.b("negative"),c=this.b("negativeBefore"));a=Math.abs(a).toFixed(this.b("decimals")).toString();a=a.split(".");0===parseFloat(a)&&(a[0]="0");this.b("thousand")?(e=b(a[0]).match(/.{1,3}/g),e=b(e.join(b(this.b("thousand"))))):e=a[0];this.b("mark")&&1<a.length&&
(f=this.b("mark")+a[1]);return c+this.b("prefix")+d+e+f+this.b("postfix")};s.prototype.t=function(a){function b(a){return a.replace(/[\-\/\\\^$*+?.()|\[\]{}]/g,"\\$&")}var d;if(null===a||void 0===a)return!1;a=a.toString();d=a.replace(RegExp("^"+b(this.b("negativeBefore"))),"");a!==d?(a=d,d="-"):d="";a=a.replace(RegExp("^"+b(this.b("prefix"))),"");this.b.negative&&(d="",a=a.replace(RegExp("^"+b(this.b("negative"))),"-"));a=a.replace(RegExp(b(this.b("postfix"))+"$"),"").replace(RegExp(b(this.b("thousand")),
    "g"),"").replace(this.b("mark"),".");a=this.b("decoder")(parseFloat(d+a));return isNaN(a)?!1:a};q.prototype.write=function(a,b,d,c,e){if(!this.update||!1!==e){if(100<=b)b=a.d.slice(-1)[0];else{e=1;for(var f,h,l;b>=a.c[e];)e++;f=a.d[e-1];h=a.d[e];l=a.c[e-1];f=[f,h];b=100/(a.c[e]-l)*(b-l)*(f[1]-f[0])/100+f[0]}this.A=b=this.format(b);if("function"===typeof this.method)this.method.call(this.target[0]||c[0],b,d,c);else this.target[this.method](b,d,c)}};q.prototype.format=function(a){return this.g.C(a)};
    q.prototype.valueOf=function(a){return this.g.t(a)};e.noUiSlider={Link:q};e.fn.noUiSlider=function(a,b){return(b?ea:da).call(this,a)};e.fn.val=function(){var a=Array.prototype.slice.call(arguments,0),b,d,c,g;if(!a.length)return this.hasClass(f[0])?this[0].D():G.apply(this);"object"===typeof a[1]?(b=a[1].set,d=a[1].link,c=a[1].update,g=a[1].animate):!0===a[1]&&(b=!0);return this.each(function(){e(this).hasClass(f[0])?this.F(H(a[0]),b,d,c,g):G.apply(e(this),a)})}})(window.jQuery||window.Zepto);

var data = [{id:0,n:"Blank",r:0,c:0},{id:1,n:"Tyrra",r:2,c:2},{id:2,n:"Tyran",r:3,c:4},{id:3,n:"Tyrannos",r:4,c:6},{id:4,n:"Firedragon Tyrannos",r:5,c:10},{id:5,n:"Plessie",r:2,c:2},{id:6,n:"Plesiel",r:3,c:4},{id:7,n:"Plesios",r:4,c:6},{id:8,n:"Icedragon Plesios",r:5,c:10},{id:9,n:"Brachy",r:2,c:2},{id:10,n:"Brachio",r:3,c:4},{id:11,n:"Brachys",r:4,c:6},{id:12,n:"Flowerdragon Brachys",r:5,c:10},{id:13,n:"Pterra",r:2,c:2},{id:14,n:"Pteras",r:3,c:4},{id:15,n:"Pterados",r:4,c:6},{id:16,n:"Sundragon Pterados",r:5,c:10},{id:17,n:"Spinon",r:2,c:2},{id:18,n:"Spinas",r:3,c:4},{id:19,n:"D'spinas",r:4,c:6},{id:20,n:"Moondragon D'spinas",r:5,c:10},{id:21,n:"Lil' Red Dragon",r:2,c:2},{id:22,n:"Red Dragon",r:3,c:5},{id:23,n:"Volcano Dragon",r:4,c:11},{id:24,n:"Lil' Blue Dragon",r:2,c:2},{id:25,n:"Blue Dragon",r:3,c:5},{id:26,n:"Aurora Dragon",r:4,c:11},{id:27,n:"Lil' Green Dragon",r:2,c:2},{id:28,n:"Green Dragon",r:3,c:5},{id:29,n:"Earth Dragon",r:4,c:11},{id:30,n:"Lil' White Dragon",r:2,c:2},{id:31,n:"White Dragon",r:3,c:5},{id:32,n:"Holy Dragon",r:4,c:11},{id:33,n:"Lil' Black Dragon",r:2,c:2},{id:34,n:"Black Dragon",r:3,c:5},{id:35,n:"Devil Dragon",r:4,c:11},{id:36,n:"Flamie",r:1,c:1},{id:37,n:"Big Flamie",r:2,c:3},{id:38,n:"Bubblie",r:1,c:1},{id:39,n:"Big Bubblie",r:2,c:3},{id:40,n:"Woodsie",r:1,c:1},{id:41,n:"Big Woodsie",r:2,c:3},{id:42,n:"Shynee",r:1,c:1},{id:43,n:"Big Shynee",r:2,c:3},{id:44,n:"Baddie",r:1,c:1},{id:45,n:"Big Baddie",r:2,c:3},{id:46,n:"Red Carbuncle",r:1,c:2},{id:47,n:"Ruby Carbuncle",r:2,c:5},{id:48,n:"Blue Carbuncle",r:1,c:2},{id:49,n:"Sapphire Carbuncle",r:2,c:5},{id:50,n:"Green Carbuncle",r:1,c:2},{id:51,n:"Emerald Carbuncle",r:2,c:5},{id:52,n:"Yellow Carbuncle",r:1,c:2},{id:53,n:"Topaz Carbuncle",r:2,c:5},{id:54,n:"Purple Carbuncle",r:1,c:2},{id:55,n:"Amethyst Carbuncle",r:2,c:5},{id:56,n:"Red Goblin",r:1,c:2},{id:57,n:"Samurai Goblin",r:2,c:5},{id:58,n:"Blue Goblin",r:1,c:2},{id:59,n:"Marine Goblin",r:2,c:5},{id:60,n:"Goblin",r:1,c:2},{id:61,n:"Hobgoblin",r:2,c:5},{id:62,n:"Red Ogre",r:2,c:4},{id:63,n:"Samurai Ogre",r:3,c:7},{id:64,n:"Blue Ogre",r:2,c:4},{id:65,n:"Ice Ogre",r:3,c:7},{id:66,n:"Ogre",r:2,c:4},{id:67,n:"Armor Ogre",r:3,c:7},{id:68,n:"Flame Fighter",r:2,c:3},{id:69,n:"Flame Knight",r:3,c:6},{id:70,n:"Aqua Fighter",r:2,c:3},{id:71,n:"Aqua Knight",r:3,c:6},{id:72,n:"Earth Fighter",r:2,c:3},{id:73,n:"Earth Knight",r:3,c:6},{id:74,n:"White Fighter",r:2,c:3},{id:75,n:"White Knight",r:3,c:6},{id:76,n:"Black Fighter",r:2,c:3},{id:77,n:"Black Knight",r:3,c:6},{id:78,n:"Flame Golem",r:3,c:6},{id:79,n:"Flame Guardian",r:4,c:9},{id:80,n:"Ice Golem",r:3,c:6},{id:81,n:"Ice Guardian",r:4,c:9},{id:82,n:"Earth Golem",r:3,c:6},{id:83,n:"Earth Guardian",r:4,c:9},{id:84,n:"Machine Golem",r:3,c:6},{id:85,n:"Machine Golem Mk.II",r:4,c:9},{id:86,n:"Dark Golem",r:3,c:6},{id:87,n:"Dark Golem Mk.II",r:4,c:9},{id:88,n:"Naga",r:3,c:5},{id:89,n:"Echidna",r:4,c:8},{id:90,n:"Mermaid",r:3,c:5},{id:91,n:"Siren",r:4,c:8},{id:92,n:"Dryad",r:3,c:5},{id:93,n:"Mandrake",r:4,c:8},{id:94,n:"Cupid",r:3,c:5},{id:95,n:"Angel",r:4,c:8},{id:96,n:"Succubus",r:3,c:5},{id:97,n:"Lilith",r:4,c:8},{id:98,n:"Mystic Flame Knight",r:3,c:6},{id:99,n:"Phoenix Knight",r:4,c:9},{id:100,n:"Mystic Ice Knight",r:3,c:6},{id:101,n:"Fenrir Knight",r:4,c:9},{id:102,n:"Mystic Stone Knight",r:3,c:6},{id:103,n:"Dragon Knight",r:4,c:9},{id:104,n:"Mystic Light Knight",r:3,c:6},{id:105,n:"Verche",r:4,c:9},{id:106,n:"Titan",r:3,c:7},{id:107,n:"Gigas",r:4,c:10},{id:108,n:"Mystic Dark Knight",r:3,c:6},{id:109,n:"Dark Dragon Knight",r:4,c:9},{id:110,n:"Vampire",r:3,c:6},{id:111,n:"Vampire Lord",r:4,c:10},{id:112,n:"Salamander",r:4,c:7},{id:113,n:"Ifrit",r:5,c:13},{id:114,n:"Sea Serpent",r:4,c:7},{id:115,n:"Leviathan",r:5,c:13},{id:116,n:"Dragonette",r:4,c:7},{id:117,n:"Fafnir",r:5,c:13},{id:118,n:"Ivory Dragon",r:4,c:7},{id:119,n:"Divinegon",r:5,c:13},{id:120,n:"Basilisk",r:4,c:7},{id:121,n:"Tiamat",r:5,c:13},{id:122,n:"Minerva",r:5,c:15},{id:123,n:"War Deity Minerva",r:6,c:20},{id:124,n:"Neptune",r:5,c:15},{id:125,n:"Sea Deity Neptune",r:6,c:20},{id:126,n:"Ceres",r:5,c:15},{id:127,n:"Fertility Deity Ceres",r:6,c:20},{id:128,n:"Venus",r:5,c:15},{id:129,n:"Love Deity Venus",r:6,c:20},{id:130,n:"Hades",r:5,c:15},{id:131,n:"Underlord Hades",r:6,c:20},{id:132,n:"Kagutsuchi",r:5,c:15},{id:133,n:"Hino Kagutsuchi",r:6,c:20},{id:134,n:"Viper Orochi",r:5,c:15},{id:135,n:"Demon Viper Orochi",r:6,c:20},{id:136,n:"Susano",r:5,c:15},{id:137,n:"Susano no Mikoto",r:6,c:20},{id:138,n:"Amaterasu",r:5,c:15},{id:139,n:"Amaterasu Ohkami",r:6,c:20},{id:140,n:"Yomi",r:5,c:15},{id:141,n:"Tsuku Yomi",r:6,c:20},{id:142,n:"Flamedragon Muspelheim",r:6,c:25},{id:143,n:"Ice Dragon Niflheim",r:6,c:25},{id:144,n:"Isle Dragon Yggdrasil",r:6,c:25},{id:145,n:"Mechadragon Valhalla",r:6,c:25},{id:146,n:"Evil Dragon Helheim",r:6,c:25},{id:147,n:"Keeper of Flame",r:4,c:11},{id:148,n:"Keeper of Water",r:4,c:11},{id:149,n:"Keeper of Forest",r:4,c:11},{id:150,n:"Keeper of Light",r:4,c:11},{id:151,n:"Keeper of Dark",r:4,c:11},{id:152,n:"Dragon Seed",r:2,c:1},{id:153,n:"Dragon Plant",r:3,c:1},{id:154,n:"Dragon Flower",r:4,c:1},{id:155,n:"Rubylit",r:2,c:1},{id:156,n:"Sapphilit",r:2,c:1},{id:157,n:"Emelit",r:2,c:1},{id:158,n:"Topalit",r:2,c:1},{id:159,n:"Amelit",r:2,c:1},{id:160,n:"Mythlit",r:5,c:1},{id:161,n:"Red Evolution Mask",r:1,c:1},{id:162,n:"Blue Evolution Mask",r:1,c:1},{id:163,n:"Green Evolution Mask",r:1,c:1},{id:164,n:"Yellow Evolution Mask",r:1,c:1},{id:165,n:"Purple Evolution Mask",r:1,c:1},{id:166,n:"Crimson Demon Mask",r:3,c:1},{id:167,n:"Indigo Demon Mask",r:3,c:1},{id:168,n:"Azure Demon Mask",r:3,c:1},{id:169,n:"Golden Demon Mask",r:3,c:1},{id:170,n:"Violet Demon Mask",r:3,c:1},{id:171,n:"Divine Carmine Mask",r:5,c:1},{id:172,n:"Divine Indigo Mask",r:5,c:1},{id:173,n:"Divine Jade Mask",r:5,c:1},{id:174,n:"Divine Gold Mask",r:5,c:1},{id:175,n:"Divine Onyx Mask",r:5,c:1},{id:176,n:"Metal Dragon",r:3,c:1},{id:177,n:"High Metal Dragon",r:4,c:1},{id:178,n:"King Metal Dragon",r:5,c:1},{id:179,n:"Gold Dragon",r:3,c:1},{id:180,n:"High Gold Dragon",r:4,c:1},{id:181,n:"King Gold Dragon",r:5,c:1},{id:182,n:"Poring",r:3,c:10},{id:183,n:"Marin",r:3,c:10},{id:184,n:"Poporing",r:3,c:10},{id:185,n:"Drops",r:3,c:10},{id:186,n:"Ghostring",r:3,c:10},{id:187,n:"Zeus",r:6,c:40},{id:188,n:"Awoken Zeus",r:7,c:50},{id:189,n:"Hera",r:6,c:25},{id:190,n:"Awoken Hera",r:7,c:30},{id:191,n:"Pyro Devil",r:2,c:5},{id:192,n:"Pyro Demon",r:3,c:8},{id:193,n:"Frost Devil",r:2,c:5},{id:194,n:"Frost Demon",r:3,c:8},{id:195,n:"Taur Devil",r:2,c:5},{id:196,n:"Taur Demon",r:3,c:8},{id:197,n:"Harpie Devil",r:2,c:5},{id:198,n:"Harpie Demon",r:3,c:8},{id:199,n:"Blood Devil",r:2,c:5},{id:200,n:"Blood Demon",r:3,c:8},{id:201,n:"Empress of Serpents, Echidna",r:5,c:13},{id:202,n:"Enchantress of the Sea, Siren",r:5,c:13},{id:203,n:"Mystical Forest Pixie, Alraune",r:5,c:13},{id:204,n:"Messenger of God, Archangel",r:5,c:13},{id:205,n:"Witch of the Night, Lilith",r:5,c:13},{id:206,n:"Mars Light Carbuncle",r:4,c:8},{id:207,n:"Mercury Light Carbuncle",r:4,c:8},{id:208,n:"Earth Light Carbuncle",r:4,c:8},{id:209,n:"Sunlight Carbuncle",r:4,c:8},{id:210,n:"Moonlight Carbuncle",r:4,c:8},{id:211,n:"Meteor Volcano Dragon",r:5,c:15},{id:212,n:"Crystal Aurora Dragon",r:5,c:15},{id:213,n:"Graviton Earth Dragon",r:5,c:15},{id:214,n:"Lightning Holy Dragon",r:5,c:15},{id:215,n:"Chaos Devil Dragon",r:5,c:15},{id:216,n:"Red Skydragon, El Dorado",r:6,c:40},{id:217,n:"Blue Skydragon, Nirai Kanai",r:6,c:40},{id:218,n:"Wood Skydragon, Horai",r:6,c:40},{id:219,n:"Holy Skydragon, Shangri-La",r:6,c:40},{id:220,n:"Night Skydragon, Elysion",r:6,c:40},{id:221,n:"Berserk",r:4,c:7},{id:222,n:"Siegfried, the Blue Champion",r:5,c:15},{id:223,n:"Highlander",r:4,c:7},{id:224,n:"Cu Chulainn, the Green Lancer",r:5,c:15},{id:225,n:"Valkyrie",r:4,c:6},{id:226,n:"Great Valkyrie",r:5,c:15},{id:227,n:"Dragon Fruit",r:5,c:1},{id:228,n:"Mastering",r:5,c:50},{id:229,n:"Phoenix Knight Homura",r:5,c:14},{id:230,n:"Fenrir Knight Kamui",r:5,c:14},{id:231,n:"Ancient Dragon Knight",r:5,c:14},{id:232,n:"Verche, the Knight of the Sky",r:5,c:14},{id:233,n:"Chaos Dragon Knight",r:5,c:14},{id:234,n:"Mystic Mask",r:5,c:1},{id:236,n:"Shiva",r:5,c:20},{id:237,n:"Shiva, the Destroyer",r:6,c:25},{id:238,n:"Lakshmi",r:5,c:20},{id:239,n:"Fortune Deity Lakshmi",r:6,c:25},{id:240,n:"Parvati",r:5,c:20},{id:241,n:"Parvati, the Golden Goddess",r:6,c:25},{id:242,n:"Indra",r:5,c:20},{id:243,n:"Thunderdragon Indra",r:6,c:25},{id:244,n:"Vritra",r:5,c:20},{id:245,n:"Darkdragon Vritra",r:6,c:25},{id:246,n:"Dub-rubylit",r:5,c:1},{id:247,n:"Dub-sapphilit",r:5,c:1},{id:248,n:"Dub-emelit",r:5,c:1},{id:249,n:"Dub-topalit",r:5,c:1},{id:250,n:"Dub-amelit",r:5,c:1},{id:251,n:"Dub-mythlit",r:6,c:1},{id:252,n:"Ruby Dragon",r:3,c:1},{id:253,n:"High Ruby Dragon",r:4,c:1},{id:254,n:"King Ruby Dragon",r:5,c:1},{id:255,n:"Sapphire Dragon",r:3,c:1},{id:256,n:"High Sapphire Dragon",r:4,c:1},{id:257,n:"King Sapphire Dragon",r:5,c:1},{id:258,n:"Emerald Dragon",r:3,c:1},{id:259,n:"High Emerald Dragon",r:4,c:1},{id:260,n:"King Emerald Dragon",r:5,c:1},{id:261,n:"Super King Metal Dragon",r:6,c:1},{id:262,n:"Flame Chimera",r:3,c:7},{id:263,n:"Magma Chimera",r:4,c:10},{id:264,n:"Bubble Chimera",r:3,c:7},{id:265,n:"Deep Chimera",r:4,c:10},{id:266,n:"Leaf Chimera",r:3,c:7},{id:267,n:"Flower Chimera",r:4,c:10},{id:268,n:"Volt Chimera",r:3,c:7},{id:269,n:"Thunder Chimera",r:4,c:10},{id:270,n:"Mist Chimera",r:3,c:7},{id:271,n:"Fog Chimera",r:4,c:10},{id:283,n:"Fire Mechdragon, Betelgeuse",r:6,c:50},{id:284,n:"Ice Mechdragon, Aldebaran",r:6,c:50},{id:285,n:"Wind Mechdragon, Canopus",r:6,c:50},{id:286,n:"Noble Mechdragon, Regulus",r:6,c:50},{id:287,n:"Annihilate Mechdragon, Hadar",r:6,c:50},{id:288,n:"Drall",r:3,c:5},{id:289,n:"Agdrall",r:4,c:10},{id:290,n:"Flare Drall",r:5,c:15},{id:291,n:"Shardra",r:3,c:5},{id:292,n:"Shardran",r:4,c:10},{id:293,n:"Megalodran",r:5,c:15},{id:294,n:"Toytops",r:3,c:5},{id:295,n:"Toyceratops",r:4,c:10},{id:296,n:"Fortoytops",r:5,c:15},{id:297,n:"Fairlio",r:3,c:5},{id:298,n:"Fairlion",r:4,c:10},{id:299,n:"Angelion",r:5,c:15},{id:300,n:"Pierdra",r:3,c:5},{id:301,n:"Pierdrawn",r:4,c:10},{id:302,n:"Drawn Joker",r:5,c:15},{id:303,n:"Fire Pengdra",r:2,c:4},{id:304,n:"Ruby Pengdra",r:3,c:5},{id:305,n:"Water Pengdra",r:2,c:4},{id:306,n:"Sapphire Pengdra",r:3,c:5},{id:307,n:"Wood Pengdra",r:2,c:4},{id:308,n:"Emerald Pengdra",r:3,c:5},{id:309,n:"Super King Gold Dragon",r:6,c:1},{id:310,n:"Ice Samurai Ogre",r:4,c:11},{id:311,n:"Wood Samurai Ogre",r:4,c:11},{id:312,n:"Blazing Ice Ogre",r:4,c:11},{id:313,n:"Wood Ice Ogre",r:4,c:11},{id:314,n:"Flame Armor Ogre",r:4,c:11},{id:315,n:"Ice Armor Ogre",r:4,c:11},{id:316,n:"Flame Mech Warrior, Jotunn",r:5,c:17},{id:317,n:"Water Mech Warrior, Midgard",r:5,c:17},{id:318,n:"Wood Mech Warrior, Asgard",r:5,c:17},{id:319,n:"Machine Golem Mk.III",r:5,c:18},{id:320,n:"Dark Golem Mk.III",r:5,c:18},{id:321,n:"Keeper of Rainbow",r:6,c:25},{id:322,n:"Blue Flame Ifrit",r:6,c:20},{id:323,n:"Green Flame Ifrit",r:6,c:20},{id:324,n:"Shining Flame Ifrit",r:6,c:20},{id:325,n:"Dark Flame Ifrit",r:6,c:20},{id:326,n:"Red Ice Leviathan",r:6,c:20},{id:327,n:"Green Ice Leviathan",r:6,c:20},{id:328,n:"Shining Ice Leviathan",r:6,c:20},{id:329,n:"Dark Ice Leviathan",r:6,c:20},{id:330,n:"Red Wood Fafnir",r:6,c:20},{id:331,n:"Blue Wood Fafnir",r:6,c:20},{id:332,n:"Shining Wood Fafnir",r:6,c:20},{id:333,n:"Dark Wood Fafnir",r:6,c:20},{id:334,n:"Red Shining Divinegon",r:6,c:20},{id:335,n:"Blue Shining Divinegon",r:6,c:20},{id:336,n:"Green Shining Divinegon",r:6,c:20},{id:337,n:"Dark Shining Divinegon",r:6,c:20},{id:338,n:"Blazing Dark Tiamat",r:6,c:20},{id:339,n:"Flowing Dark Tiamat",r:6,c:20},{id:340,n:"Wooden Dark Tiamat",r:6,c:20},{id:341,n:"Lightning Dark Tiamat",r:6,c:20},{id:342,n:"ECO Salamander",r:3,c:6},{id:343,n:"ECO Salamander Alma",r:4,c:12},{id:344,n:"ECO Pepen",r:3,c:6},{id:345,n:"ECO Pepen Alma",r:4,c:12},{id:346,n:"ECO Shabo",r:3,c:6},{id:347,n:"ECO Shabo Alma",r:4,c:12},{id:348,n:"ECO Baby Tiny",r:3,c:6},{id:349,n:"ECO Tiny",r:4,c:12},{id:350,n:"Formula",r:4,c:15},{id:351,n:"Sacred Flame Dragon, Formula",r:5,c:20},{id:352,n:"Shaitan",r:4,c:8},{id:353,n:"Shaitan, the Flame Elemental",r:5,c:16},{id:354,n:"Undine",r:4,c:8},{id:355,n:"Undine, the Water Elemental",r:5,c:16},{id:356,n:"Sylph",r:4,c:8},{id:357,n:"Sylph, the Wind Elemental",r:5,c:16},{id:358,n:"Genie",r:4,c:8},{id:359,n:"Genie, the Light Elemental",r:5,c:16},{id:360,n:"Thanatos",r:4,c:8},{id:361,n:"Thanatos, the Dark Elemental",r:5,c:16},{id:362,n:"Odin",r:5,c:25},{id:363,n:"Awoken Odin",r:6,c:45},{id:364,n:"Odin, the War Deity",r:6,c:30},{id:365,n:"Awoken Deity Odin",r:7,c:50},{id:366,n:"Plan",r:4,c:15},{id:367,n:"Awoken Plan",r:5,c:20},{id:368,n:"Freyr",r:5,c:20},{id:369,n:"Freyr, the God of Victory",r:6,c:30},{id:370,n:"Idunn&Idunna",r:5,c:20},{id:371,n:"Idunn&Idunna, Twin Goddesses",r:6,c:30},{id:372,n:"Freyja",r:5,c:20},{id:373,n:"Freyja, the Goddess of Gaia",r:6,c:30},{id:374,n:"Thor",r:5,c:20},{id:375,n:"Thor, the God of Lightning",r:6,c:30},{id:376,n:"Loki",r:5,c:20},{id:377,n:"Loki, the God of Guile",r:6,c:30},{id:378,n:"Dino Rider",r:5,c:8},{id:379,n:"Dino Rider Drake",r:6,c:16},{id:380,n:"Beast Rider",r:5,c:8},{id:381,n:"Beast Rider Merlin",r:6,c:16},{id:382,n:"Marine Rider",r:5,c:8},{id:383,n:"Marine Rider Robin",r:6,c:16},{id:384,n:"Dragon Rider",r:5,c:8},{id:385,n:"Dragon Rider Arthur",r:6,c:16},{id:386,n:"Gryps Rider",r:5,c:8},{id:387,n:"Gryps Rider Finn",r:6,c:16},{id:388,n:"War Deity, Saint Minerva",r:7,c:30},{id:389,n:"War Deity, Dark Minerva",r:7,c:30},{id:390,n:"Sea Deity, Heaven Neptune",r:7,c:30},{id:391,n:"Sea Deity, Abyss Neptune",r:7,c:30},{id:392,n:"Fertility Deity, Holy Ceres",r:7,c:30},{id:393,n:"Fertility Deity, Evil Ceres",r:7,c:30},{id:394,n:"Love Deity, Cosmos Venus",r:7,c:30},{id:395,n:"Love Deity, Chaos Venus",r:7,c:30},{id:396,n:"Underlord Arch Hades",r:7,c:30},{id:397,n:"Underlord Inferno Hades",r:7,c:30},{id:398,n:"Phoenix",r:4,c:7},{id:399,n:"Phoenix Resurrected",r:5,c:18},{id:400,n:"Kraken",r:4,c:7},{id:401,n:"Sea Devil Kraken",r:5,c:18},{id:402,n:"Griffin",r:4,c:7},{id:403,n:"Griffin, the Hunter of Tempests",r:5,c:18},{id:404,n:"Unicorn",r:4,c:7},{id:405,n:"Unicorn, the Guardian of Saints",r:5,c:18},{id:406,n:"Cerberus",r:4,c:7},{id:407,n:"Cerberus, the Guardian of Hell",r:5,c:18},{id:408,n:"Infernodragon Muspelheim",r:7,c:35},{id:409,n:"Glacialdragon Niflheim",r:7,c:35},{id:410,n:"Gaiadragon Yggdrasil",r:7,c:35},{id:411,n:"Cyberdragon Valhalla",r:7,c:35},{id:412,n:"Viciousdragon Helheim",r:7,c:35},{id:413,n:"Blue Flamedragon Muspelheim",r:6,c:25},{id:414,n:"Mitsuki",r:4,c:6},{id:415,n:"Fire Courier Mitsuki",r:5,c:9},{id:416,n:"Mitsuki, the Flame Fox",r:6,c:15},{id:417,n:"Ruka",r:4,c:6},{id:418,n:"Water Courier Ruka",r:5,c:9},{id:419,n:"Ruka, the Lady of the Sea",r:6,c:15},{id:420,n:"Kano",r:4,c:6},{id:421,n:"Wind Courier Kano",r:5,c:9},{id:422,n:"Kano, the Daughter of Nature",r:6,c:15},{id:423,n:"Fuu",r:4,c:6},{id:424,n:"Light Courier Fuu",r:5,c:9},{id:425,n:"Fuu, the Dancer in the Grasses",r:6,c:15},{id:426,n:"Kurone",r:4,c:6},{id:427,n:"Dark Courier Kurone",r:5,c:9},{id:428,n:"Kurone, the Feline of the Night",r:6,c:15},{id:429,n:"Queen Metal Dragon",r:5,c:1},{id:430,n:"Queen Gold Dragon",r:5,c:1},{id:431,n:"Shimonita Leek",r:3,c:5},{id:432,n:"Super Shimonita Leek",r:4,c:10},{id:433,n:"Shimonita Konjac",r:2,c:5},{id:434,n:"Super Shimonita Konjac",r:3,c:10},{id:435,n:"Tsumagoi Cabbage",r:2,c:5},{id:436,n:"Super Tsumagoi Cabbage",r:3,c:10},{id:437,n:"Daruma",r:3,c:5},{id:438,n:"Super Daruma",r:4,c:10},{id:439,n:"Gunma",r:5,c:15},{id:440,n:"Super Gunma",r:6,c:20},{id:441,n:"Ancient Fire Dragon, Ardbeg",r:6,c:60},{id:442,n:"Ancient Water Dragon, Bowmore",r:6,c:60},{id:443,n:"Ancient Wood Dragon, Lagavulin",r:6,c:60},{id:444,n:"Ancient Light Dragon, Laphroaig",r:6,c:60},{id:445,n:"Ancient Dark Dragon, Caol-ila",r:6,c:60},{id:446,n:"Chocobo",r:3,c:7},{id:447,n:"Dragoon",r:4,c:10},{id:448,n:"Ultimate Dragoon",r:5,c:15},{id:449,n:"Berserker",r:4,c:10},{id:450,n:"Ultimate Berserker",r:5,c:15},{id:451,n:"Archer",r:4,c:10},{id:452,n:"Ultimate Archer",r:5,c:15},{id:453,n:"Soldier",r:4,c:10},{id:454,n:"Ultimate Soldier",r:5,c:15},{id:455,n:"Black Mage",r:4,c:10},{id:456,n:"Ultimate Black Mage",r:5,c:15},{id:457,n:"Time Mage",r:5,c:13},{id:458,n:"Ultimate Time Mage",r:6,c:19},{id:459,n:"Thief",r:5,c:13},{id:460,n:"Ultimate Thief",r:6,c:19},{id:461,n:"Behemoth",r:3,c:7},{id:462,n:"Reaver",r:4,c:12},{id:463,n:"Malboro",r:3,c:7},{id:464,n:"Malboro King",r:4,c:12},{id:465,n:"Tonberry",r:3,c:7},{id:466,n:"Tonberry King",r:4,c:12},{id:467,n:"Bahamut",r:5,c:40},{id:468,n:"Ultimate Bahamut",r:6,c:50},{id:469,n:"Red Crystal",r:4,c:1},{id:470,n:"Blue Crystal",r:4,c:1},{id:471,n:"Green Crystal",r:4,c:1},{id:472,n:"Yellow Crystal",r:4,c:1},{id:473,n:"Purple Crystal",r:4,c:1},{id:474,n:"Rainbow Crystal",r:5,c:1},{id:475,n:"Hellfire Pyro Demon",r:4,c:12},{id:476,n:"Hellice Frost Demon",r:4,c:12},{id:477,n:"Hellwind Taur Demon",r:4,c:12},{id:478,n:"Hellray Harpie Demon",r:4,c:12},{id:479,n:"Helldark Blood Demon",r:4,c:12},{id:480,n:"Firedragon Grand Tyrannos",r:6,c:15},{id:481,n:"Icedragon Depth Plesios",r:6,c:15},{id:482,n:"Flowerdragon Gaia Brachys",r:6,c:15},{id:483,n:"Sundragon Sol Pterados",r:6,c:15},{id:484,n:"Moondragon Lunar D'spinas",r:6,c:15},{id:486,n:"Gamble Mage",r:4,c:7},{id:487,n:"Daredevil of Dark, Gamble Mage",r:5,c:17},{id:488,n:"Chrono Turtle",r:4,c:8},{id:489,n:"Missionary of Time, Chrono Turtle",r:5,c:18},{id:490,n:"Horus",r:5,c:20},{id:491,n:"Flame Deity, Falcon Horus",r:6,c:25},{id:492,n:"Isis",r:5,c:20},{id:493,n:"Water Deity, Holy Isis",r:6,c:25},{id:494,n:"Bastet",r:5,c:20},{id:495,n:"Love Deity, Feline Bastet",r:6,c:25},{id:496,n:"Ra",r:5,c:20},{id:497,n:"Sun Deity Ra",r:6,c:25},{id:498,n:"Anubis",r:5,c:20},{id:499,n:"Hell Deity, Jackal Anubis",r:6,c:25},{id:500,n:"Princess Punt",r:4,c:15},{id:501,n:"Anne Punt Quettebuss",r:5,c:20},{id:502,n:"Dinocorn",r:4,c:15},{id:503,n:"Dinocorn King",r:5,c:20},{id:504,n:"Baby Seal",r:3,c:5},{id:505,n:"Mr. Walrus",r:4,c:10},{id:506,n:"Jelly's Angel",r:3,c:5},{id:507,n:"The Jelly's Angels",r:4,c:10},{id:508,n:"Balloon Penguin",r:3,c:5},{id:509,n:"Kite Penguin",r:4,c:10},{id:510,n:"Goggler",r:3,c:5},{id:511,n:"Devil Eye",r:4,c:10},{id:512,n:"Red Giant Gigas",r:5,c:30},{id:513,n:"King Siegfried, Blue Champion",r:6,c:30},{id:514,n:"More Cu Chulainn, the Hero",r:6,c:30},{id:515,n:"Princess Valkyrie",r:6,c:30},{id:516,n:"Duke Vampire Lord",r:5,c:30},{id:517,n:"Present Egg (Fire)",r:4,c:5},{id:518,n:"Present Egg (Water)",r:4,c:5},{id:519,n:"Present Egg (Wood)",r:4,c:5},{id:520,n:"Snow Globe Dragon Rouge",r:5,c:13},{id:521,n:"Snow Globe Dragon Bleu",r:5,c:13},{id:522,n:"Snow Globe Dragon Vert",r:5,c:13},{id:523,n:"Red Moltdra",r:2,c:3},{id:524,n:"Blue Moltdra",r:2,c:3},{id:525,n:"Green Moltdra",r:2,c:3},{id:526,n:"Ranger",r:4,c:10},{id:527,n:"Ultimate Ranger",r:5,c:15},{id:528,n:"Puppetmaster",r:5,c:13},{id:529,n:"Ultimate Puppetmaster",r:6,c:19},{id:530,n:"Fencer",r:4,c:10},{id:531,n:"Ultimate Fencer",r:5,c:15},{id:532,n:"Ranger Santa",r:4,c:20},{id:533,n:"Ultimate Ranger Santa",r:5,c:25},{id:534,n:"Puppetmaster Santa",r:5,c:25},{id:535,n:"Ultimate Puppetmaster Santa",r:6,c:30},{id:536,n:"Fencer Santa",r:4,c:20},{id:537,n:"Ultimate Fencer Santa",r:5,c:25},{id:538,n:"Alex Santa",r:5,c:40},{id:539,n:"Ultimate Alex Santa",r:6,c:50},{id:540,n:"Fire Samurai Dragon, Shingen",r:6,c:50},{id:541,n:"Water Samurai Dragon, Kenshin",r:6,c:50},{id:542,n:"Wood Samurai Dragon, Masamune",r:6,c:50},{id:543,n:"Light Samurai Dragon, Hideyoshi",r:6,c:50},{id:544,n:"Dark Samurai Dragon, Nobunaga",r:6,c:50},{id:545,n:"Low Fire Ninja",r:2,c:3},{id:546,n:"Mid Fire Ninja",r:3,c:7},{id:547,n:"Low Water Ninja",r:2,c:3},{id:548,n:"Mid Water Ninja",r:3,c:7},{id:549,n:"Low Wood Ninja",r:2,c:3},{id:550,n:"Mid Wood Ninja",r:3,c:7},{id:551,n:"Low Light Ninja",r:2,c:3},{id:552,n:"Mid Light Ninja",r:3,c:7},{id:553,n:"Low Dark Ninja",r:2,c:3},{id:554,n:"Mid Dark Ninja",r:3,c:7},{id:555,n:"Mochizuki Chiyome",r:5,c:12},{id:556,n:"Flame Shrine Maiden, Chiyome",r:6,c:17},{id:557,n:"Hatsume no Tsubone",r:5,c:12},{id:558,n:"Blue Wind Ninja, Hatsume",r:6,c:17},{id:559,n:"Sarutobi Sasuke",r:5,c:12},{id:560,n:"Wind Prodigy, Sasuke",r:6,c:17},{id:561,n:"Fuma Kotaro",r:5,c:12},{id:562,n:"Lightning Storm, Fuma Kotaro",r:6,c:17},{id:563,n:"Hattori Hanzo",r:5,c:12},{id:564,n:"High Dark Ninja, Hanzo",r:6,c:17},{id:565,n:"Ishikawa Goemon",r:6,c:25},{id:566,n:"Goemon, the Thief",r:7,c:45},{id:567,n:"Ares",r:5,c:20},{id:568,n:"War Deity Ares",r:6,c:25},{id:569,n:"Hermes",r:5,c:20},{id:570,n:"Commerce Deity Hermes",r:6,c:25},{id:571,n:"Artemis",r:5,c:20},{id:572,n:"Hunting Deity Artemis",r:6,c:25},{id:573,n:"Apollo",r:5,c:20},{id:574,n:"Solar Deity Apollo",r:6,c:25},{id:575,n:"Persephone",r:5,c:20},{id:576,n:"Hell Queen Persephone",r:6,c:25},{id:577,n:"Gold Moltdra",r:2,c:3},{id:578,n:"Black Moltdra",r:2,c:3},{id:579,n:"Will-O'-Wisp",r:1,c:2},{id:580,n:"Flame Spirit Will-O'-Wisp",r:2,c:5},{id:581,n:"Kelpie",r:1,c:2},{id:582,n:"Water Horse Kelpie",r:2,c:5},{id:583,n:"Treant",r:1,c:2},{id:584,n:"Wood Sage Treant",r:2,c:5},{id:585,n:"Pixie",r:1,c:2},{id:586,n:"Light Sprite Pixie",r:2,c:5},{id:587,n:"Werewolf",r:1,c:2},{id:588,n:"Midnight Beast Werewolf",r:2,c:5},{id:591,n:"Moogle&Carbuncle",r:4,c:10},{id:592,n:"Ultimate Moogle&Carbuncle",r:5,c:15},{id:593,n:"Angeling",r:4,c:12},{id:594,n:"Archangeling",r:4,c:12},{id:595,n:"Deviling",r:4,c:12},{id:596,n:"Hera-Is",r:6,c:40},{id:597,n:"Awoken Hera-Is",r:7,c:60},{id:598,n:"Hera-Ur",r:6,c:40},{id:599,n:"Awoken Hera-Ur",r:7,c:60},{id:600,n:"Shiny Pengdra",r:2,c:4},{id:601,n:"Topaz Pengdra",r:3,c:5},{id:602,n:"Dark Pengdra",r:2,c:4},{id:603,n:"Amethyst Pengdra",r:3,c:5},{id:617,n:"Super King Ruby Dragon",r:6,c:1},{id:618,n:"Super King Sapphire Dragon",r:6,c:1},{id:619,n:"Super King Emerald Dragon",r:6,c:1},{id:620,n:"Archangel Uriel",r:5,c:25},{id:621,n:"Fire Dominion Uriel",r:6,c:30},{id:622,n:"Archangel Gabriel",r:5,c:25},{id:623,n:"Water Dominion Gabriel",r:6,c:30},{id:624,n:"Archangel Michael",r:5,c:25},{id:625,n:"Wood Dominion Michael",r:6,c:30},{id:626,n:"Archangel Raphael",r:5,c:25},{id:627,n:"Light Dominion Raphael",r:6,c:30},{id:628,n:"Archangel Lucifer",r:5,c:25},{id:629,n:"Seraph of Dawn Lucifer",r:6,c:30},{id:630,n:"Belial",r:5,c:25},{id:631,n:"Flame Archdemon Belial",r:6,c:30},{id:632,n:"Amon",r:5,c:25},{id:633,n:"Blizzard Archdemon Amon",r:6,c:30},{id:634,n:"Astaroth",r:5,c:25},{id:635,n:"Wind Archdemon Astaroth",r:6,c:30},{id:636,n:"Baal",r:5,c:25},{id:637,n:"Lightning Archdemon Baal",r:6,c:30},{id:638,n:"Fallen Angel Lucifer",r:5,c:25},{id:639,n:"Dark Archdemon Lucifer",r:6,c:30},{id:640,n:"Archangel Metatron",r:5,c:30},{id:641,n:"Voice of God, Metatron",r:6,c:50},{id:642,n:"Dark Angel Metatron",r:6,c:40},{id:643,n:"Hand of the Dark God, Metatron",r:7,c:60},{id:644,n:"Beelzebub",r:6,c:40},{id:645,n:"Archdemon Beelzebub",r:7,c:60},{id:646,n:"Satan",r:6,c:40},{id:647,n:"Satan, King of the Underworld",r:7,c:60},{id:648,n:"Athena",r:6,c:40},{id:649,n:"Awoken Athena",r:7,c:60},{id:650,n:"Zeus-Dios",r:6,c:45},{id:651,n:"Awoken Zeus-Dios",r:7,c:60},{id:652,n:"Freyr, the Blazing Swordsman",r:7,c:35},{id:653,n:"Idunn&Idunna, the Twin Archers",r:7,c:35},{id:654,n:"Freyja, the Fertility Goddess",r:7,c:35},{id:655,n:"Thor, the Wielder of Mjolnir",r:7,c:35},{id:656,n:"Loki, the Finisher",r:7,c:35},{id:657,n:"Holy Thunderdragon Indra",r:7,c:40},{id:658,n:"Evil Darkdragon Vritra",r:7,c:40},{id:659,n:"Puzzdroid",r:4,c:10},{id:660,n:"Droidragon",r:5,c:15},{id:661,n:"Chaos Blizzard Dragon",r:5,c:25},{id:662,n:"Cathy Crazy",r:3,c:5},{id:663,n:"Romantic★Cathy",r:4,c:10},{id:664,n:"Ukai Magoroku",r:3,c:5},{id:665,n:"Blue Ninja, Ukai Magoroku",r:4,c:10},{id:666,n:"ECO Tiny Alma",r:5,c:18},{id:667,n:"ECO Dumpty",r:4,c:12},{id:668,n:"ECO Dumpty Alma",r:5,c:18},{id:681,n:"Manekimewdra",r:3,c:1},{id:682,n:"Heavy Metal Dragon",r:6,c:50},{id:683,n:"Dragon Lord Zaerog",r:7,c:100},{id:684,n:"King Flamie",r:3,c:7},{id:685,n:"King Bubblie",r:3,c:7},{id:686,n:"King Woodsie",r:3,c:7},{id:687,n:"King Shynee",r:3,c:7},{id:688,n:"King Baddie",r:3,c:7},{id:689,n:"Rowdy Red Samurai Goblin",r:3,c:10},{id:690,n:"Marine Spec Ops Goblin",r:3,c:10},{id:691,n:"Heavy Infantry Hobgoblin",r:3,c:10},{id:692,n:"Earth-Rending Emperor, Siegfried",r:7,c:35},{id:693,n:"Noble Wolf King Hero, Cu Chulainn",r:7,c:35},{id:694,n:"Warrior Rose, Graceful Valkyrie",r:7,c:35},{id:695,n:"Asuka&Eva Unit-02",r:4,c:10},{id:696,n:"Asuka&Upgraded Eva Unit-02",r:5,c:15},{id:697,n:"Shinji&Eva Unit-01",r:4,c:10},{id:698,n:"Awoken Shinji&Eva Unit-01",r:5,c:15},{id:699,n:"Mari&Eva Provisional Unit-05",r:4,c:10},{id:700,n:"Mari&Eva Unit-08",r:5,c:15},{id:701,n:"Rei&Eva Unit-00",r:4,c:10},{id:702,n:"Rei&Eva Unit-00, Suicide ATK Mode",r:5,c:15},{id:703,n:"Kaworu&Mark06, Under Construction",r:4,c:10},{id:704,n:"Kaworu&Mark.06",r:5,c:15},{id:705,n:"Shinji&Kaworu&Unit-13",r:5,c:25},{id:706,n:"Awoken Shinji&Kaworu&Unit-13",r:6,c:30},{id:707,n:"The Fifth Angel",r:3,c:10},{id:708,n:"The Fifth Angel - Assault Mode",r:4,c:15},{id:709,n:"The Sixth Angel",r:3,c:10},{id:710,n:"The Sixth Angel - Assault Mode",r:4,c:15},{id:711,n:"The Tenth Angel",r:5,c:20},{id:712,n:"The Tenth Angel - Assault Mode",r:6,c:25},{id:713,n:"The Fourth Angel",r:3,c:10},{id:714,n:"The Fourth Angel - Assault Mode",r:4,c:15},{id:717,n:"Neneko",r:2,c:5},{id:718,n:"Hamahime",r:2,c:5},{id:719,n:"Green Skydragon Elysium",r:6,c:40},{id:720,n:"CoC Barbarian",r:3,c:5},{id:721,n:"CoC Rage Barbarian",r:4,c:10},{id:722,n:"CoC Archer",r:3,c:5},{id:723,n:"CoC Flame Archer",r:4,c:10},{id:724,n:"CoC Goblin",r:3,c:5},{id:725,n:"CoC Forest Goblin",r:4,c:10},{id:726,n:"CoC Healer",r:3,c:5},{id:727,n:"CoC Glorious Healer",r:4,c:10},{id:728,n:"CoC Dragon",r:4,c:15},{id:729,n:"CoC Crimson Dragon",r:5,c:20},{id:730,n:"CoC P.E.K.K.A",r:5,c:40},{id:731,n:"CoC Nightmare P.E.K.K.A",r:6,c:50},{id:732,n:"Red Chocobo&Chocobo Knight",r:4,c:20},{id:733,n:"Blue Chocobo&Chocobo Knight",r:4,c:20},{id:734,n:"Green Chocobo&Chocobo Knight",r:4,c:20},{id:735,n:"Moogle, Carbuncle & Chocobo",r:6,c:20},{id:736,n:"Malboro King&Tonberry King",r:5,c:20},{id:737,n:"Scarlet Stone Dragon, Vermilionyt",r:5,c:50},{id:738,n:"Blue Stone Dragon, Mythril",r:5,c:50},{id:739,n:"Green Stone Dragon, Adamant",r:5,c:50},{id:740,n:"Rainbow Stone Dragon, Orichalcum",r:5,c:50},{id:741,n:"Purple Stone Dragon, Damascus",r:5,c:50},{id:742,n:"Draggie",r:2,c:3},{id:743,n:"Draggie Knight",r:3,c:7},{id:744,n:"Ancient Draggie Knight",r:4,c:15},{id:745,n:"Incarnation of Suzaku, Leilan",r:5,c:20},{id:746,n:"Heavenly Guide Suzaku, Leilan",r:6,c:25},{id:747,n:"Incarnation of Seiryuu, Karin",r:5,c:20},{id:748,n:"Guardian of Life Seiryuu, Karin",r:6,c:25},{id:749,n:"Incarnation of Genbu, Meimei",r:5,c:20},{id:750,n:"Tortoise Mountain Genbu, Meimei",r:6,c:25},{id:751,n:"Incarnation of Kirin, Sakuya",r:5,c:20},{id:752,n:"Kirin of the Aurora, Sakuya",r:6,c:25},{id:753,n:"Incarnation of Byakko, Haku",r:5,c:20},{id:754,n:"Soul Guardian Byakko, Haku",r:6,c:25},{id:755,n:"Red Dragon God, Hino Kagutsuchi",r:7,c:35},{id:756,n:"Fire Serpent God, Hino Kagutsuchi",r:7,c:35},{id:757,n:"Scorched Claw Dragon, Flare Drall",r:6,c:30},{id:758,n:"Drilling Shark Dragon, Megalodran",r:6,c:30},{id:759,n:"Horned Fort Dragon, Fortoytops",r:6,c:30},{id:760,n:"Sacred Dragon Beast, Angelion",r:6,c:30},{id:761,n:"Jester Dragon, Drawn Joker",r:6,c:30},{id:762,n:"OCTOPUS",r:3,c:5},{id:763,n:"OCTOPUS Ver.2",r:4,c:10},{id:764,n:"CRAB",r:3,c:5},{id:765,n:"CRAB Ver.2",r:4,c:10},{id:766,n:"SQUID",r:3,c:5},{id:767,n:"SQUID Ver.2",r:4,c:10},{id:768,n:"GC CRAB",r:5,c:40},{id:769,n:"GC CRAB Ver.2",r:6,c:50},{id:770,n:"UFO",r:4,c:15},{id:771,n:"UFO Ver.2",r:5,c:20},{id:772,n:"Omega Red Skydragon, El Dorado",r:7,c:60},{id:773,n:"Omega Blue Skydragon, Nirai Kanai",r:7,c:60},{id:774,n:"Omega Wood Skydragon, Horai",r:7,c:60},{id:775,n:"Omega Holy Skydragon, Shangri-La",r:7,c:60},{id:776,n:"Omega Night Skydragon, Elysion",r:7,c:60},{id:777,n:"Great Tengu",r:5,c:20},{id:778,n:"Twisted Mountain God, Grand Tengu",r:6,c:25},{id:779,n:"Kodama",r:2,c:5},{id:780,n:"Incarnation of Kouryu, Fagan",r:6,c:50},{id:781,n:"Kouryu the Star Emperor, Fagan",r:7,c:100},{id:782,n:"Mystic Megalith Dragon, Baalbek",r:6,c:35},{id:783,n:"Mystic Mech Dragon, Antikythera",r:6,c:35},{id:784,n:"Mystic Painting Dragon, Nazca",r:6,c:35},{id:785,n:"Mystic Crystal Dragon, CrystalSkull",r:6,c:35},{id:786,n:"Mystic Astro Dragon, Nebradisk",r:6,c:35},{id:787,n:"Minotaur",r:2,c:6},{id:788,n:"Beast of the Labyrinth, Minotaur",r:3,c:12},{id:789,n:"Cockatrice",r:2,c:6},{id:790,n:"Stone Gaze Demon Bird, Cockatrice",r:3,c:12},{id:791,n:"Centaur",r:2,c:6},{id:792,n:"Hominal Beast, Centaur",r:3,c:12},{id:793,n:"Cyclops",r:2,c:6},{id:794,n:"Thunder Giant, Cyclops",r:3,c:12},{id:795,n:"Wicked Lady",r:2,c:6},{id:796,n:"Charming Temptress, Wicked Lady",r:3,c:12},{id:797,n:"TAMADRA",r:5,c:1},{id:798,n:"Samba Ruby Dragon",r:6,c:38},{id:799,n:"Ame no Uzume",r:5,c:20},{id:800,n:"Goddess of the Art, Ame no Uzume",r:6,c:25},{id:801,n:"Umisachi&Yamasachi",r:5,c:20},{id:802,n:"Gods of Hunt, Umisachi&Yamasachi",r:6,c:25},{id:803,n:"Kushinadahime",r:5,c:20},{id:804,n:"Goddess of Rice Fields, Kushinada",r:6,c:25},{id:805,n:"Izanagi",r:5,c:20},{id:806,n:"Ancestor of the Gods, Izanagi",r:6,c:25},{id:807,n:"Okuninushi",r:5,c:20},{id:808,n:"Founder of Nations, Okuninushi",r:6,c:25},{id:809,n:"Takeminakata",r:5,c:40},{id:810,n:"War God of Metal, Takeminakata",r:6,c:60},{id:811,n:"Empress God, Izanami",r:6,c:40},{id:812,n:"Empress of Creation, Izanami",r:7,c:60},{id:813,n:"Yomi God, Izanami",r:6,c:40},{id:814,n:"Yomi Mistress, Izanami",r:7,c:60},{id:815,n:"Domovoi",r:3,c:5},{id:816,n:"Don Domovoi",r:4,c:10},{id:817,n:"Grendel",r:3,c:10},{id:818,n:"Bronzed Grendel",r:4,c:15},{id:819,n:"Hrungnir",r:5,c:40},{id:820,n:"Absolute Zero Hrungnir",r:6,c:50},{id:822,n:"Burning Phoenix Knight, Homura",r:6,c:24},{id:823,n:"Torrential Fenrir Knight, Kamui",r:6,c:24},{id:824,n:"Ancient Dragon Knight, Zeal",r:6,c:24},{id:825,n:"Godly Knight of the Sky, Verche",r:6,c:24},{id:826,n:"Chaos Dragon Knight, Voice",r:6,c:24},{id:827,n:"Shugen Demon, Shouki",r:3,c:7},{id:828,n:"Protection Demon of Light, Shouki",r:4,c:11},{id:829,n:"Shugen Demon, Jyaki",r:3,c:7},{id:830,n:"Protection Demon of Dark, Jyaki",r:4,c:11},{id:831,n:"Top Droidragon",r:6,c:25},{id:832,n:"Kozukura",r:2,c:5},{id:833,n:"Fukuragi",r:3,c:10},{id:834,n:"Amberjack",r:4,c:12},{id:835,n:"King of Toyama Bay, Amberjack",r:5,c:20},{id:836,n:"Firefly Squid",r:3,c:8},{id:837,n:"Mystery of Toyama Bay, Firefly Squid",r:4,c:12},{id:838,n:"Velvet Shrimp",r:3,c:8},{id:839,n:"Jewel of Toyama Bay, Velvet Shrimp",r:4,c:12},{id:840,n:"Amitan",r:5,c:15},{id:841,n:"Amitaka & Kanon & Cecil",r:6,c:25},{id:888,n:"Feline Deity of Harmony, Bastet",r:7,c:35},{id:889,n:"War Deity of Fury, Ares",r:7,c:35},{id:890,n:"Commerce Deity of Dreams, Hermes",r:7,c:35},{id:891,n:"Hunt God of the Holy Bow, Artemis",r:7,c:35},{id:892,n:"Solar God of Heaven's Bow, Apollo",r:7,c:35},{id:893,n:"Queen of Condemnation, Persephone",r:7,c:35},{id:894,n:"Dark Liege, Vampire Duke",r:6,c:35},{id:895,n:"Arcane Monarch, Vampire Duke",r:6,c:35},{id:896,n:"Red Chaser",r:3,c:6},{id:897,n:"Flame Chaser",r:4,c:12},{id:898,n:"Blue Chaser",r:3,c:6},{id:899,n:"Aqua Chaser",r:4,c:12},{id:900,n:"Green Chaser",r:3,c:6},{id:901,n:"Wind Chaser",r:4,c:12},{id:902,n:"Yellow Chaser",r:3,c:6},{id:903,n:"Lightning Chaser",r:4,c:12},{id:904,n:"Purple Chaser",r:3,c:6},{id:905,n:"Phantom Chaser",r:4,c:12},{id:906,n:"Flame Baron",r:4,c:11},{id:907,n:"Aqua Baron",r:4,c:11},{id:908,n:"Earth Baron",r:4,c:11},{id:909,n:"White Baron",r:4,c:11},{id:910,n:"Black Baron",r:4,c:11},{id:911,n:"Red Dragon Caller, Sonia",r:5,c:30},{id:912,n:"Extant Red Dragon Caller, Sonia",r:6,c:50},{id:913,n:"Jade Dragon Caller, Sonia",r:6,c:40},{id:914,n:"Eternal Jade Dragon Caller, Sonia",r:7,c:60},{id:915,n:"Angelit",r:7,c:1},{id:916,n:"Devilit",r:7,c:1},{id:917,n:"Awoken Zeus Olympios",r:8,c:60},{id:918,n:"Awoken Zeus Stratios",r:8,c:60},{id:919,n:"Elemental of Harsh Flame, Shaitan",r:6,c:26},{id:920,n:"Elemental of Kind Waters, Undine",r:6,c:26},{id:921,n:"Elemental of Levity, Sylph",r:6,c:26},{id:922,n:"Elemental of Gold Glimmer, Genie",r:6,c:26},{id:923,n:"Elemental of True Death, Thanatos",r:6,c:26},{id:924,n:"BAO Joker",r:4,c:10},{id:925,n:"BAO Joker+A. Blossom",r:5,c:20},{id:926,n:"BAO Catwoman",r:4,c:10},{id:927,n:"BAO Catwoman+C. Claw",r:5,c:20},{id:928,n:"BAO Robin",r:4,c:10},{id:929,n:"BAO Robin+E. Stick",r:5,c:20},{id:930,n:"BAO Batman+S. Gloves",r:5,c:15},{id:931,n:"BAO Batman+S. Gloves Act",r:6,c:25},{id:932,n:"BAO Batman+Batarang",r:4,c:10},{id:933,n:"BAO Batman+Remote Claw",r:5,c:20},{id:934,n:"BAO Batman+Batwing",r:5,c:15},{id:935,n:"BAO Batman+BW Attack",r:6,c:25},{id:948,n:"AB Red",r:3,c:5},{id:949,n:"AB Red Bird Red",r:4,c:10},{id:950,n:"AB The Blues",r:3,c:5},{id:951,n:"AB Bluebird Blues",r:4,c:10},{id:952,n:"AB Hal",r:3,c:5},{id:953,n:"AB Green Bird Hal",r:4,c:10},{id:954,n:"AB Chuck",r:3,c:5},{id:955,n:"AB Yellow Bird Chuck",r:4,c:10},{id:956,n:"AB Matilda",r:4,c:20},{id:957,n:"AB White Bird Matilda",r:5,c:30},{id:958,n:"AB Bomb",r:3,c:5},{id:959,n:"AB Black Bird Bomb",r:4,c:10},{id:960,n:"AB Wingman",r:4,c:15},{id:961,n:"AB Dashing Wingman",r:5,c:25},{id:972,n:"Lovely Maiden, Princess Valkyrie",r:6,c:30},{id:973,n:"Azure Maiden, Graceful Valkyrie",r:7,c:35},{id:974,n:"Red Pirate Dragon, Bartholomew",r:6,c:40},{id:975,n:"Blue Pirate Dragon, Awilda",r:6,c:40},{id:976,n:"Green Pirate Dragon, Captain Kidd",r:6,c:40},{id:977,n:"Gold Pirate Dragon, Anne & Mary",r:6,c:40},{id:978,n:"Black Pirate Dragon, Blackbeard",r:6,c:40},{id:979,n:"Red Pirate",r:2,c:5},{id:980,n:"Blue Pirate",r:2,c:5},{id:981,n:"Green Pirate",r:2,c:5},{id:982,n:"Blazing Maiden, Princess Valkyrie",r:6,c:30},{id:983,n:"Black Blaze, Graceful Valkyrie",r:7,c:35},{id:984,n:"Gigas the Great",r:6,c:35},{id:985,n:"Divine Queen Hera",r:8,c:50},{id:986,n:"Serpent God Demon, Viper Orochi",r:7,c:30},{id:987,n:"Warded Storm God, Susano no Mikoto",r:7,c:30},{id:988,n:"Dancing Light Amaterasu Ohkami",r:7,c:30},{id:989,n:"War Deity of the Night, Tsukuyomi",r:7,c:30},{id:990,n:"Nocturne Chanter Tsukuyomi",r:7,c:30},{id:994,n:"Inferno Deity Falcon, Horus",r:7,c:35},{id:995,n:"Blazing Deity Falcon, Horus",r:7,c:35},{id:996,n:"Blue Moon Sea Deity, Isis",r:7,c:35},{id:997,n:"Shining Sea Deity, Isis",r:7,c:35},{id:998,n:"Dark Sun Deity, Ra",r:7,c:35},{id:999,n:"Pure Light Sun Deity, Ra",r:7,c:35},{id:1000,n:"Abyssal Hell Deity Jackal, Anubis",r:7,c:35},{id:1001,n:"Deathly Hell Deity Jackal, Anubis",r:7,c:35},{id:1002,n:"Baby TAMADRA",r:4,c:1},{id:1003,n:"Present Egg (Light)",r:4,c:5},{id:1004,n:"Present Egg (Dark)",r:4,c:5},{id:1005,n:"Snow Globe Dragon Blanc",r:5,c:13},{id:1006,n:"Snow Globe Dragon Noir",r:5,c:13},{id:1007,n:"Gold Pirate",r:2,c:5},{id:1008,n:"Black Pirate",r:2,c:5},{id:1049,n:"BAO Firefly",r:3,c:5},{id:1050,n:"BAO Firefly + Flamethrower",r:4,c:10},{id:1051,n:"BAO Solomon Grundy",r:3,c:5},{id:1052,n:"BAO S. Grundy Reborn",r:4,c:10},{id:1053,n:"BAO Copperhead",r:3,c:5},{id:1054,n:"BAO Venomous Copperhead",r:4,c:10},{id:1055,n:"BAO Bane",r:3,c:8},{id:1056,n:"BAO Venom-Enhanced Bane",r:4,c:12},{id:1057,n:"BAO Deathstroke",r:5,c:15},{id:1058,n:"BAO Deathstroke + B. Staff",r:6,c:25},{id:1061,n:"Dragon Zombie",r:6,c:25},{id:1062,n:"Corpse Wyrm, Dragon Zombie",r:7,c:50},{id:1063,n:"Bone Fish",r:2,c:5},{id:1064,n:"Devil Fish",r:3,c:11},{id:1065,n:"Yamato Takeru",r:5,c:15},{id:1066,n:"Martial God-Emperor, Yamato Takeru",r:6,c:25},{id:1067,n:"Andromeda",r:5,c:15},{id:1068,n:"Starsea Goddess, Andromeda",r:6,c:25},{id:1069,n:"Perseus",r:5,c:15},{id:1070,n:"Vanquishing Deity, Perseus",r:6,c:25},{id:1071,n:"Sun Wukong",r:5,c:15},{id:1072,n:"Golden Monkey King, Sun Wukong",r:6,c:25},{id:1073,n:"Pandora",r:5,c:15},{id:1074,n:"Goddess of the Bleak Night, Pandora",r:6,c:25},{id:1075,n:"Strawberry Dragon",r:4,c:20},{id:1076,n:"Red Sky Fruit, Strawberry Dragon",r:5,c:35},{id:1077,n:"Berry Dragon",r:4,c:20},{id:1078,n:"Blue Sky Fruit, Berry Dragon",r:5,c:35},{id:1079,n:"Melon Dragon",r:4,c:20},{id:1080,n:"Green Sky Fruit, Melon Dragon",r:5,c:35},{id:1081,n:"Lemon Dragon",r:4,c:20},{id:1082,n:"Yellow Sky Fruit, Lemon Dragon",r:5,c:35},{id:1083,n:"Grape Dragon",r:4,c:20},{id:1084,n:"Purple Sky Fruit, Grape Dragon",r:5,c:35},{id:1085,n:"Red Dragon Fruit",r:6,c:1},{id:1086,n:"Blue Dragon Fruit",r:6,c:1},{id:1087,n:"Green Dragon Fruit",r:6,c:1},{id:1088,n:"Blue Dragon Caller, Sonia",r:6,c:40},{id:1089,n:"Endless Blue Dragon Caller, Sonia",r:7,c:60},{id:1090,n:"Hurricane Volcano Dragon",r:6,c:35},{id:1091,n:"Blast Aurora Dragon",r:6,c:35},{id:1092,n:"Generate Earth Dragon",r:6,c:35},{id:1093,n:"Tornado Holy Dragon",r:6,c:35},{id:1094,n:"Cyclone Devil Dragon",r:6,c:35},{id:1095,n:"Water Twin Star Leviathan",r:6,c:33},{id:1096,n:"Wind Twin Star Fafnir",r:6,c:33},{id:1097,n:"Heracles",r:6,c:40},{id:1098,n:"Champion of Olympus, Heracles",r:7,c:60},{id:1099,n:"Crimson Lotus Mistress, Echidna",r:6,c:23},{id:1100,n:"Sea God's Songstress, Siren",r:6,c:23},{id:1101,n:"World Tree Sprite, Alraune",r:6,c:23},{id:1102,n:"Creation Tree Spirit, Alraune",r:6,c:23},{id:1103,n:"Heavenly Herald, Archangel",r:6,c:23},{id:1104,n:"Sanctuary Guardian, Archangel",r:6,c:23},{id:1105,n:"Moonbeam Fang Witch, Lilith",r:6,c:23},{id:1106,n:"Pitch Black Night Princess, Lilith",r:6,c:23},{id:1107,n:"Phantom God, Odin",r:6,c:30},{id:1108,n:"Awoken Phantom God, Odin",r:7,c:50},{id:1109,n:"Flame Twin Star Ifrit",r:6,c:33},{id:1110,n:"Light Twin Star Divinegon",r:6,c:33},{id:1111,n:"Dark Twin Star Tiamat",r:6,c:33},{id:1112,n:"Karmic Destroyer, Shiva",r:7,c:35},{id:1113,n:"Demolishing Creator, Shiva",r:7,c:35},{id:1114,n:"Heavenly Fortune Goddess, Lakshmi",r:7,c:35},{id:1115,n:"Purple Lotus Chanter, Lakshmi",r:7,c:35},{id:1116,n:"White Hot Dancing Goddess, Parvati",r:7,c:35},{id:1117,n:"Jade Oracle, Parvati",r:7,c:35},{id:1118,n:"Sandalphon",r:6,c:40},{id:1119,n:"Awoken Sandalphon",r:7,c:60},{id:1136,n:"Kitty Flamie",r:3,c:6},{id:1137,n:"Kitty FlaBaddie",r:4,c:11},{id:1138,n:"Kitty Bubblie",r:3,c:6},{id:1139,n:"Kitty BubFlamie",r:4,c:11},{id:1140,n:"Kitty Woodie",r:3,c:6},{id:1141,n:"Kitty WoodBubblie",r:4,c:11},{id:1142,n:"Kitty Shynee",r:3,c:6},{id:1143,n:"Kitty ShyWoodie",r:4,c:11},{id:1144,n:"Kitty Baddie",r:3,c:6},{id:1145,n:"Kitty BadShynee",r:4,c:11},{id:1146,n:"Kittyn & Mimmyna",r:5,c:20},{id:1147,n:"Apple Springs Kittyn & Mimmyna",r:6,c:30},{id:1148,n:"Apple Drawn",r:4,c:10},{id:1149,n:"Hello Kitty World Joker",r:5,c:15},{id:1150,n:"Hello Kitty",r:4,c:10},{id:1151,n:"Kitty & Tyrra",r:5,c:20},{id:1152,n:"Kerokerokeroppi",r:4,c:10},{id:1153,n:"Keroppi & Plessie",r:5,c:20},{id:1154,n:"My Melody",r:4,c:10},{id:1155,n:"Melody & Brachy",r:5,c:20},{id:1156,n:"Bad Badtz-Maru",r:4,c:10},{id:1157,n:"Pierdra Badtz-Maru",r:5,c:20},{id:1158,n:"Kuromi",r:4,c:10},{id:1159,n:"Lilith Kuromi",r:5,c:20},{id:1160,n:"Cinnamoroll",r:4,c:10},{id:1161,n:"Angel Cinnamon",r:5,c:20},{id:1162,n:"Pompompurin",r:5,c:10},{id:1163,n:"TAMADRApurin",r:6,c:20},{id:1164,n:"Goddess Hello Kitty",r:5,c:10},{id:1165,n:"Princess Valkitty",r:6,c:20},{id:1166,n:"Red Flower Dragon, Barbados",r:6,c:40},{id:1167,n:"Blue Flower Dragon, Starling",r:6,c:40},{id:1168,n:"Green Flower Dragon, Casablanca",r:6,c:40},{id:1169,n:"Orange Flower Dragon, Helianthus",r:6,c:40},{id:1170,n:"Purple Flower Dragon, Orchid",r:6,c:40},{id:1171,n:"Puchilip",r:2,c:6},{id:1172,n:"Puchirose",r:2,c:6},{id:1173,n:"Puchilium",r:2,c:6},{id:1174,n:"Puchianthus",r:2,c:6},{id:1175,n:"Puchiorchid",r:2,c:6},{id:1176,n:"Keeper of Gold",r:7,c:30},{id:1178,n:"Red Fairy",r:3,c:5},{id:1179,n:"Fire Sprite, Parrot",r:4,c:11},{id:1180,n:"Blue Fairy",r:3,c:5},{id:1181,n:"Water Sprite, Sharulu",r:4,c:11},{id:1182,n:"Green Fairy",r:3,c:5},{id:1183,n:"Wood Sprite, Lily",r:4,c:11},{id:1184,n:"Yellow Fairy",r:3,c:5},{id:1185,n:"Light Sprite, Sunrich",r:4,c:11},{id:1186,n:"Black Fairy",r:3,c:5},{id:1187,n:"Dark Sprite, Cattleya",r:4,c:11},{id:1188,n:"Hera-Beorc",r:6,c:40},{id:1189,n:"Awoken Hera-Beorc",r:7,c:60},{id:1190,n:"Ancient Draggie Knight, Zeal",r:5,c:25},{id:1191,n:"Blazing Shrine Maiden, Chiyome",r:7,c:27},{id:1192,n:"Blue Wind Ninja Princess, Hatsume",r:7,c:27},{id:1193,n:"Gusting Prodigy, Sasuke",r:7,c:27},{id:1194,n:"Thunder Horn Master, Fuma Kotaro",r:7,c:27},{id:1195,n:"Moonlit Shadow, Hattori Hanzo",r:7,c:27},{id:1200,n:"Asuka&Upgraded Eva Unit-02, Code 777",r:6,c:25},{id:1201,n:"Shinji&Kaworu&Unit-13, FI",r:7,c:40},{id:1202,n:"Misato&AAA Wunder",r:5,c:25},{id:1203,n:"Misato&AAA Wunder, Powered Up",r:6,c:30},{id:1204,n:"The Ninth Angel",r:4,c:10},{id:1205,n:"The Ninth Angel - Assault Mode",r:5,c:15},{id:1206,n:"5 Mechdragon Fusion, God Canopus",r:7,c:60},{id:1207,n:"5 Mechdragon Combo, Demon Hadar",r:7,c:60},{id:1208,n:"Dragon Emperor, Buster Siegfried",r:7,c:35},{id:1209,n:"Wolf Hero, Ignis Cu Chulainn",r:7,c:35},{id:1210,n:"The Eternal Bird, Phoenix",r:6,c:28},{id:1211,n:"Devil of the Depths, Kraken",r:6,c:28},{id:1212,n:"Royal Hunting Beast, Griffin",r:6,c:28},{id:1213,n:"Saintly Maidens' Protector, Unicorn",r:6,c:28},{id:1214,n:"Underworld Guard Dog, Cerberus",r:6,c:28},{id:1215,n:"Maleficent Dragon Lord Zaerog",r:8,c:110},{id:1216,n:"Rebel Seraph Lucifer",r:7,c:40},{id:1217,n:"Keeper of the Sacred Texts, Metatron",r:7,c:60},{id:1218,n:"Kirin of the Sacred Gleam, Sakuya",r:7,c:35},{id:1219,n:"Himi Udon",r:4,c:10},{id:1220,n:"Toyama Bay Tradition, Himi Udon",r:5,c:20},{id:1222,n:"Gaia",r:6,c:40},{id:1223,n:"Awoken Gaia",r:7,c:60},{id:1224,n:"Twin Dragon, Wangren",r:5,c:12},{id:1225,n:"Flamewing Twin Dragon King, Wangren",r:6,c:50},{id:1226,n:"Twin Dragon, Beyzul",r:5,c:12},{id:1227,n:"Icewing Twin Dragon King, Beyzul",r:6,c:50},{id:1230,n:"Awoken Phantom God, Odin TAMADRA",r:6,c:12},{id:1231,n:"Cao Cao",r:5,c:15},{id:1232,n:"Conquering Martial Deity, Cao Cao",r:6,c:25},{id:1233,n:"Sun Quan",r:5,c:15},{id:1234,n:"Courageous Divine General, Sun Quan",r:6,c:25},{id:1235,n:"Liu Bei",r:5,c:15},{id:1236,n:"Moral Commanding Deity, Liu Bei",r:6,c:25},{id:1237,n:"Da Qiao & Xiao Qiao",r:5,c:15},{id:1238,n:"Divine Flowers, Da Qiao & Xiao Qiao",r:6,c:25},{id:1239,n:"Lu Bu",r:5,c:15},{id:1240,n:"Divine Flying General, Lu Bu",r:6,c:25},{id:1241,n:"Bearded Deity, Guan Yu",r:5,c:30},{id:1242,n:"Steadfast Bearded Deity, Guan Yu",r:6,c:50},{id:1243,n:"Loyal Deity, Guan Yu",r:6,c:40},{id:1244,n:"Valiant & Loyal Deity, Guan Yu",r:7,c:60},{id:1245,n:"Shining Monk, Xuanzang",r:6,c:20},{id:1246,n:"Gleaming-Eyed Dragon Monk, Xuanzang",r:7,c:40},{id:1247,n:"Shadow Monk, Xuanzang",r:6,c:20},{id:1248,n:"Dark-Eyed Dragon Monk, Xuanzang",r:7,c:40},{id:1249,n:"Hera-Sowilo",r:6,c:40},{id:1250,n:"Awoken Hera-Sowilo",r:7,c:60},{id:1253,n:"Blazing Dragonfire Angel, Uriel",r:7,c:40},{id:1255,n:"Unyielding Archangel, Michael",r:7,c:40},{id:1257,n:"Surging Demon Lord, Belial",r:7,c:40},{id:1258,n:"Chivalrous Demon Lord, Amon",r:7,c:40},{id:1262,n:"Divine Flower Suzaku, Leilan",r:7,c:35},{id:1263,n:"Divine Harbinger Suzaku, Leilan",r:7,c:35},{id:1264,n:"Life Protector Seiryuu, Karin",r:7,c:35},{id:1265,n:"Ethereal Guardian Seiryuu, Karin",r:7,c:35},{id:1270,n:"Burning Maiden, Princess Valkyrie",r:6,c:30},{id:1271,n:"Phoenix Blossom, Graceful Valkyrie",r:7,c:35},{id:1272,n:"Red Mech General, Elder Jotunn",r:6,c:27},{id:1273,n:"Blue Mech General, Mar Midgard",r:6,c:27},{id:1274,n:"Green Mech General, Viz Asgard",r:6,c:27},{id:1294,n:"Ancient Blue Sacred Mask",r:6,c:99},{id:1295,n:"Ancient Green Sacred Mask",r:6,c:99},{id:1296,n:"Iwato's Dancing Goddess, Amenouzume",r:7,c:35},{id:1301,n:"Dino Rider, Wild Drake",r:7,c:26},{id:1302,n:"Beast Rider, Wiz Merlin",r:7,c:26},{id:1303,n:"Marine Rider, Bard Robin",r:7,c:26},{id:1304,n:"Dragon Rider, King Arthur",r:7,c:26},{id:1305,n:"Gryps Rider, Vector Finn",r:7,c:26}];

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
var team = [data[0],data[0],data[0],data[0],data[0],data[0]];

$(document).ready(function() {
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]").toLowerCase();
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search.toLowerCase());
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    var numD = 35;
    var dungeons = {
        'coc':{'n':'Clash of Clans','battles':7, 'cutoff': 80000, 'o':['red','blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':8},
        'eva':{'n':'EVANGELION Collab','battles':7, 'cutoff': 140000, 'o':['red','blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':8},
        'batman':{'n':'Batman Collab','battles':7, 'cutoff': 80000, 'o':['red','blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':8},
        'hello-kitty':{'n':'Hello Kitty Collab','battles':10, 'cutoff': 150000, 'o':['red','blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':8},
        'groove':{'n':'GROOVE COASTER Collab','battles':10, 'cutoff': 180000, 'o':['red','blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':8},
        'gunma':{'n':'Gunma Collab','battles':10, 'cutoff': 160000, 'o':['red','blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':8},
        'takaoka':{'n':'Takaoka City Collab','battles':10, 'cutoff': 200000, 'o':['red','blue','green','no_light','no_dark','heart'], 'combo_min':4, 'combo_max':10},
        's1':{'n':"separator"},
        
        'ssp':{'n':'Scarlet Snake Princess','battles':5, 'cutoff': 230000, 'o':['red','blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':8},
        'jewels':{'n':'Tower of Jewels','battles':5, 'cutoff': 200000, 'o':['red','blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':8},
        'breakers':{'n':'Breakers','battles':5, 'cutoff': 200000, 'o':['red','blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':8},
        'lightless':{'n':"Lightless Devils' Nest",'battles':5, 'cutoff': 250000, 'o':['red','blue','green','no_light','dark','heart'], 'combo_min':3, 'combo_max':9},
        'watery':{'n':'Watery Temptress','battles':5, 'cutoff': 200000, 'o':['red','blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':8},
        'shadow':{'n':'Shadow Sprite','battles':5, 'cutoff': 230000, 'o':['red','blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':9},
        'gleaming':{'n':'Gleaming Dragon','battles':5, 'cutoff': 200000, 'o':['red','blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':9},
        's2':{'n':"separator"},

        'ancient-wood':{'n':'Ancient Wood Dragon','battles':10, 'cutoff': 170000, 'o':['red','blue','green','no_light','no_dark','heart'], 'combo_min':4, 'combo_max':10},
        'ancient-dark':{'n':'Ancient Dark Dragon','battles':10, 'cutoff': 200000, 'o':['red','no_blue','green','light','no_dark','heart'], 'combo_min':4, 'combo_max':10},
        'ancient-light':{'n':'Ancient Light Dragon','battles':10, 'cutoff': 200000, 'o':['no_red','blue','green','no_light','dark','heart'], 'combo_min':4, 'combo_max':10},
        's3':{'n':"separator"},
        
        'red-flower':{'n':'Red Flower Dragon','battles':10, 'cutoff': 100000, 'o':['red','blue','green','light','dark','no_heart'], 'combo_min':3, 'combo_max':9},
        'blue-flower':{'n':'Blue Flower Dragon','battles':10, 'cutoff': 100000, 'o':['red','blue','green','light','dark','no_heart'], 'combo_min':3, 'combo_max':9},
        'green-flower':{'n':'Green Flower Dragon','battles':10, 'cutoff': 100000, 'o':['red','blue','green','light','dark','no_heart'], 'combo_min':3, 'combo_max':9},
        'orange-flower':{'n':'Orange Flower Dragon','battles':10, 'cutoff': 100000, 'o':['red','blue','green','light','dark','no_heart'], 'combo_min':3, 'combo_max':9},
        'purple-flower':{'n':'Purple Flower Dragon','battles':10, 'cutoff': 100000, 'o':['red','blue','green','light','dark','no_heart'], 'combo_min':3, 'combo_max':9},
        's5':{'n':"separator"},

        'sword-flames':{'n':'Sword of Flames','battles':5, 'cutoff': 230000, 'o':['red','blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':8},
        'dragon-guardian':{'n':'Dragon Guardian','battles':5, 'cutoff': 230000, 'o':['red','blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':8},
        'blade-justice':{'n':'Blade of Justice','battles':5, 'cutoff': 230000, 'o':['red','blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':8},
        'dark-night':{'n':'Dark Night Sword','battles':5, 'cutoff': 230000, 'o':['red','blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':8},
        's6':{'n':"separator"},

        'flame-dragon':{'n':"Flame Dragon Knight",'battles':7, 'cutoff': 100000, 'o':['red','blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':8},
        'ocean-dragon':{'n':"Ocean Dragon Knight",'battles':7, 'cutoff': 100000, 'o':['red','blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':8},
        's7':{'n':"separator"},

        'flame-mech':{'n':"Flame Mechdragon",'battles':10, 'cutoff': 120000, 'o':['red','blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':8},        
        'ice-mech':{'n':"Ice Mechdragon",'battles':10, 'cutoff': 120000, 'o':['red','blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':8},        
        'wind-mech':{'n':"Wind Mechdragon",'battles':10, 'cutoff': 120000, 'o':['red','blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':8},        
        'rusted-mech':{'n':"Rusted Mechdragon",'battles':10, 'cutoff': 120000, 'o':['red','blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':8},
        'noble-mech':{'n':"Noble Mechdragon",'battles':10, 'cutoff': 120000, 'o':['red','blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':8},
        's8':{'n':"separator"},

        'mystic-fire':{'n':"Mystic Fire Dragon",'battles':7, 'cutoff': 140000, 'o':['red','no_blue','green','light','dark','heart'], 'combo_min':3, 'combo_max':9},
        'mystic-water':{'n':"Mystic Water Dragon",'battles':7, 'cutoff': 140000, 'o':['red','blue','no_green','light','dark','heart'], 'combo_min':3, 'combo_max':9},
        'mystic-dark':{'n':"Mystic Dark Dragon",'battles':7, 'cutoff': 100000, 'o':['red','blue','green','no_light','dark','heart'], 'combo_min':3, 'combo_max':9},
        'mystic-light':{'n':"Mystic Light Dragon",'battles':7, 'cutoff': 100000, 'o':['red','blue','green','light','no_dark','heart'], 'combo_min':3, 'combo_max':9}
    };

    var current_dungeon = getParameterByName("dungeon").toLowerCase() || getParameterByName("d").toLowerCase();
    if (! (current_dungeon in dungeons)) {
        current_dungeon = "takaoka";
    }
    var ii =0;
    for (d in dungeons) {
        if (dungeons[d].n === 'separator') {
            if (ii <= numD/2 + 1) {
                $('#dd_col_1').append('<li class="separator"></li>');
            } else {
                $('#dd_col_2').append('<li class="separator"></li>');
            }
        }
        else if (d === current_dungeon) {
            $('#current_dungeon').text(dungeons[d].n);
            $('#current_icon').attr("src", "img/"+d+".png");
        } else {
            ii++;
//            $('#other_dungeons_menu').append('<li><a href="index.html?dungeon='+d+'" id="'+d+'__"><img src="img/'+d+'.png"> '+dungeons[d].n+'</a></li>');
            if (ii <= numD/2 + 1) {
                $('#dd_col_1').append('<li><a href="index.html?dungeon='+d+'" id="'+d+'__"><img src="img/'+d+'.png"> '+dungeons[d].n+'</a></li>');
            } else {
                $('#dd_col_2').append('<li><a href="index.html?dungeon='+d+'" id="'+d+'__"><img src="img/'+d+'.png"> '+dungeons[d].n+'</a></li>');
            }
        }
    }

    numberWithCommas = function(x) { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }
    $('#battles').text(dungeons[current_dungeon].battles);
    $('#cutoff').text(numberWithCommas(dungeons[current_dungeon].cutoff));
    for (var i in dungeons[current_dungeon].o) {
        $('#orbs2').append('<img width="20px" height="20px" src="img/'+dungeons[current_dungeon].o[i]+'.png">');
    }
    var currentTotal = -1;
    calc_total = function() {
        var scores = $('.score_value');
        var total = 0;
        for (var i=0; i<scores.length; i++) {
            if(scores[i].innerHTML && scores[i].innerHTML.length>0) {
                total += parseInt(scores[i].innerHTML.replace(',',''));
            }
        }
        if (currentTotal != total) {
            $('#total_score').text(numberWithCommas(total));
            if (total >= dungeons[current_dungeon].cutoff && currentTotal < dungeons[current_dungeon].cutoff) {
                $('#rank').html("<img src='img/tamadra.png'>");
            }
            else if (currentTotal==-1 || (total < dungeons[current_dungeon].cutoff && currentTotal >= dungeons[current_dungeon].cutoff)) {
                $('#rank').html("<div style='line-height: 30px;'>A</div><div style='font-size:10px; color:gray; line-height: 10px;'>(or less)</div>");
            }
            currentTotal = total;
        }
    }

    var Link = $.noUiSlider.Link;

    var r = getParameterByName('r').replace('/','');
    var startR = isNumber(r)? r : 27;

    $('#rarity_slider').noUiSlider({
        start: [startR],
        step: 1,
        connect: "lower",
        range: {
            'min': 6,
            'max': 48
        },
        serialization: {
            lower: [
                new Link({
                    target: $("#rarity_value"),
                    format: {
                        decimals: 0
                    }
                }),
                new Link({
                    target: function( value, handleElement, slider ){
                        $("#avg_rarity_value").text( Math.round(value/6 * 10)/10 );
                        var MULTIPLIER = 76.205;
                        var score = MULTIPLIER * Math.pow((10 - (value/6)),4);
                        score = Math.round(score/100) * 100;
                        $("#rarity_score").html("Score: <span class='score_value'>"+ numberWithCommas(score)+"</span>");
                        calc_total();
                    }
                })
            ]
        }
    });


    var t = getParameterByName('t').replace('/','');
    var startT = isNumber(t)? t : dungeons[current_dungeon].battles + 9;

    $('#turns_slider').noUiSlider({
        start: [startT],
        step: 1,
        connect: "lower",
        range: {
            'min': dungeons[current_dungeon].battles,
            'max': dungeons[current_dungeon].battles+18
        },
        serialization: {
            lower: [
                new Link({
                    target: $("#turns_value"),
                    format: {
                        decimals: 0
                    }
                }),
                new Link({
                    target: function( value, handleElement, slider ){
                        var score = Math.max(0, 40000 - (value - dungeons[current_dungeon].battles)*2500);
                        $("#turns_score").html("Score: <span class='score_value'>"+ numberWithCommas(score)+"</span>");
                        calc_total();
                    }
                })
            ]
        }
    });

    var c = getParameterByName('c').replace('/','');
    var startC = isNumber(c)? c : 5.275;

    $('#combo_slider').noUiSlider({
        start: [startC],
        connect: "lower",
        range: {
            'min': dungeons[current_dungeon].combo_min,
            'max': dungeons[current_dungeon].combo_max
        },
        serialization: {
            lower: [
                new Link({
                    target: $("#combo_value"),
                    format: {
                        decimals: 3
                    }
                }),
                new Link({
                    target: $('#rounded_combo_value'),
                    format: {
                        decimals: 1
                    }
                }),
                new Link({
                    target: function( value, handleElement, slider ){
                        var MULTIPLIER = 19.54;
                        var score = MULTIPLIER * Math.pow(value, 4);
                        score = Math.round(score/100) * 100;
                        $("#combo_score").html("Score: <span class='score_value'>"+ numberWithCommas(score)+"</span>");
                        calc_total();
                    }
                })
            ]
        }
    });

    updateURL = function(){
        var urlVal = 'http://tamadra.github.io/s-rank/?d='+current_dungeon+
            '&R='+Math.round($('#rarity_slider').val())+
            '&T='+Math.round($('#turns_slider').val())+
            '&C='+$('#combo_value').text();
        if (team[0].id!==0) {
            urlVal += ("&l="+team[0].id);
        }
        if (team[1].id!==0) {
            urlVal += ("&s1="+team[1].id);
        }
        if (team[2].id!==0) {
            urlVal += ("&s2="+team[2].id);
        }
        if (team[3].id!==0) {
            urlVal += ("&s3="+team[3].id);
        }
        if (team[4].id!==0) {
            urlVal += ("&s4="+team[4].id);
        }
        if (team[5].id!==0) {
            urlVal += ("&f="+team[5].id);
        }
        $('#cUrl').val(urlVal);
    }
    $('.slider').on('set', updateURL);
    updateURL();

    $('#mobile-nav').on('click', function(e){
        $(this).toggleClass('open');
        $('#navigation-mobile').stop().slideToggle(350);
        e.preventDefault();
    });

    function format(item) { return item.n; }

    $("#leader_select2").select2({
        data:{ results: data, text: 'n' },
        formatSelection: format,
        formatResult: format,
        width: 'resolve'
    });
    $("#s1_select2").select2({
        data:{ results: data, text: 'n' },
        formatSelection: format,
        formatResult: format,
        width: 'resolve'
    });
    $("#s2_select2").select2({
        data:{ results: data, text: 'n' },
        formatSelection: format,
        formatResult: format,
        width: 'resolve'
    });
    $("#s3_select2").select2({
        data:{ results: data, text: 'n' },
        formatSelection: format,
        formatResult: format,
        width: 'resolve'
    });
    $("#s4_select2").select2({
        data:{ results: data, text: 'n' },
        formatSelection: format,
        formatResult: format,
        width: 'resolve'
    });
    $("#friend_select2").select2({
        data:{ results: data, text: 'n' },
        formatSelection: format,
        formatResult: format ,
        width: 'resolve'   });

    updateModalTotal = function() {
        var total = 0;
        var num = 0;
        if ($('#leader_select2').select2("data")!== null && $('#leader_select2').select2("data").id>0) {
            total += $('#leader_select2').select2("data").r;
            num ++;
        }
        if ($('#s1_select2').select2("data")!== null && $('#s1_select2').select2("data").id>0) {
            total += $('#s1_select2').select2("data").r;
            num ++;
        }
        if ($('#s2_select2').select2("data")!== null && $('#s2_select2').select2("data").id>0) {
            total += $('#s2_select2').select2("data").r;
            num ++;
        }
        if ($('#s3_select2').select2("data")!== null && $('#s3_select2').select2("data").id>0) {
            total += $('#s3_select2').select2("data").r;
            num ++;
        }
        if ($('#s4_select2').select2("data")!== null && $('#s4_select2').select2("data").id>0) {
            total += $('#s4_select2').select2("data").r;
            num ++;
        }
        if ($('#friend_select2').select2("data")!== null && $('#friend_select2').select2("data").id>0) {
            total += $('#friend_select2').select2("data").r;
            num ++;
        }
        if (num>0) {
            $('#total_m').html("Total Rarity: "+total+"<br>Average Rarity: "+Math.round(total/num * 10)/10);
        } else {
            $('#total_m').text("");
        }
    }
    $("#leader_select2").on("change", function(e){
        team[0] = e.added;
        $('#leader_m').attr("src","img/m/"+ e.val+".png");
        if (e.val>0) {
            $('#leader_stats').html("Rarity: "+ e.added.r);
        } else {
            $('#leader_stats').html("");
        }
        updateModalTotal();
//        $(':focus').blur();
    });
    $("#s1_select2").on("change", function(e){
        team[1] = e.added;
        $('#s1_m').attr("src","img/m/"+ e.val+".png");
        if (e.val>0) {
            $('#s1_stats').html("Rarity: "+ e.added.r);
        } else {
            $('#s1_stats').html("");
        }
        updateModalTotal();
//        $(':focus').blur();
    });
    $("#s2_select2").on("change", function(e){
        team[2] = e.added;
        $('#s2_m').attr("src","img/m/"+ e.val+".png");
        if (e.val>0) {
            $('#s2_stats').html("Rarity: "+ e.added.r);
        } else {
            $('#s2_stats').html("");
        }
        updateModalTotal();
//        $(':focus').blur();
    });
    $("#s3_select2").on("change", function(e){
        team[3] = e.added;
        $('#s3_m').attr("src","img/m/"+ e.val+".png");
        if (e.val>0) {
            $('#s3_stats').html("Rarity: "+ e.added.r);
        } else {
            $('#s3_stats').html("");
        }
        updateModalTotal();
//        $(':focus').blur();
    });
    $("#s4_select2").on("change", function(e){
        team[4] = e.added;
        $('#s4_m').attr("src","img/m/"+ e.val+".png");
        if (e.val>0) {
            $('#s4_stats').html("Rarity: "+ e.added.r);
        } else {
            $('#s4_stats').html("");
        }
        updateModalTotal();
//        $(':focus').blur();
    });
    $("#friend_select2").on("change", function(e){
        team[5] = e.added;
        $('#friend_m').attr("src","img/m/"+ e.val+".png");
        if (e.val>0) {
            $('#friend_stats').html("Rarity: "+ e.added.r);
        } else {
            $('#friend_stats').html("");
        }
        updateModalTotal();
//        $(':focus').blur();
    });


    updateTeamDom = function () {
        $('#team-warn').addClass("hidden");
        var teamSize = 0;
        var totalRarity = 0;
        $('#leader').attr("src", "img/m/"+team[0].id+".png");
        $('#s1').attr("src", "img/m/"+team[1].id+".png");
        $('#s2').attr("src", "img/m/"+team[2].id+".png");
        $('#s3').attr("src", "img/m/"+team[3].id+".png");
        $('#s4').attr("src", "img/m/"+team[4].id+".png");
        $('#friend').attr("src", "img/m/"+team[5].id+".png");
        if (team[0].id!==0) {
            teamSize ++;
            totalRarity += team[0].r;
        }
        if (team[1].id!==0) {
            teamSize ++;
            totalRarity += team[1].r;
        }
        if (team[2].id!==0) {
            teamSize ++;
            totalRarity += team[2].r;
        }
        if (team[3].id!==0) {
            teamSize ++;
            totalRarity += team[3].r;
        }
        if (team[4].id!==0) {
            teamSize ++;
            totalRarity += team[4].r;
        }
        if (team[5].id!==0) {
            teamSize ++;
            totalRarity += team[5].r;
        }
        if (teamSize>0) {
            if (teamSize<6) {
                $('#stats').html("Total Rarity: <b>"+totalRarity+
                    "</b><br><span class='team-size-warn'>Team Size: <b>"+teamSize+
                    "</span></b><br>Avg Rarity: <b>"+Math.round(totalRarity/teamSize * 10)/10)+"</b>";
                $('#team-warn').removeClass("hidden");
            } else {
                $('#stats').html("Total Rarity: <b>"+totalRarity+
                    "</b><br>Avg Rarity: <b>"+Math.round(totalRarity/teamSize * 10)/10)+"</b>";
            }
            var effectiveTotal = (totalRarity/teamSize) * 6;
            $('#rarity_slider').val(effectiveTotal, { set: true });
        }
        updateURL();
    }

    var l_id = getParameterByName("l");
    var s1_id = getParameterByName("s1");
    var s2_id = getParameterByName("s2");
    var s3_id = getParameterByName("s3");
    var s4_id = getParameterByName("s4");
    var f_id = getParameterByName("f");
    if (l_id!== null && isNumber(l_id)) {
        for (var m in data) {
            if (data[m].id+"" === l_id) {
                team[0] = data[m];
                break;
            }
        }
    }
    if (s1_id!== null && isNumber(s1_id)) {
        for (var m in data) {
            if (data[m].id+"" === s1_id) {
                team[1] = data[m];
                break;
            }
        }
    }
    if (s2_id!== null && isNumber(s2_id)) {
        for (var m in data) {
            if (data[m].id+"" === s2_id) {
                team[2] = data[m];
                break;
            }
        }
    }
    if (s3_id!== null && isNumber(s3_id)) {
        for (var m in data) {
            if (data[m].id+"" === s3_id) {
                team[3] = data[m];
                break;
            }
        }
    }
    if (s4_id!== null && isNumber(s4_id)) {
        for (var m in data) {
            if (data[m].id+"" === s4_id) {
                team[4] = data[m];
                break;
            }
        }
    }
    if (f_id!== null && isNumber(f_id)) {
        for (var m in data) {
            if (data[m].id+"" === f_id) {
                team[5] = data[m];
                break;
            }
        }
    }
    updateTeamDom();

    $('#modal-ok').on('click', function(){
        updateTeamDom();
        $('#buildTeamModal').modal('hide');
    });
});
