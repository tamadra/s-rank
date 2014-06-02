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

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

$(document).ready(function() {
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]").toLowerCase();
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search.toLowerCase());
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    var dungeons = {
        'coc':{'n':'Clash of Clans','battles':7, 'cutoff': 80000, 'combo_min':3, 'combo_max':8},
        'breakers':{'n':'Breakers Dungeon','battles':5, 'cutoff': 200000, 'combo_min':3, 'combo_max':8},
        'eva':{'n':'EVANGELION Collab','battles':7, 'cutoff': 140000, 'combo_min':3, 'combo_max':8},
        'jewels':{'n':'Tower of Jewels','battles':5, 'cutoff': 200000, 'combo_min':3, 'combo_max':8},
        'batman':{'n':'Batman Collab','battles':7, 'cutoff': 80000, 'combo_min':3, 'combo_max':8},
        'hello-kitty':{'n':'Hello Kitty Collab','battles':10, 'cutoff': 150000, 'combo_min':3, 'combo_max':8},
        'ancient-wood':{'n':'Ancient Wood Dragon','battles':10, 'cutoff': 170000, 'combo_min':4, 'combo_max':10},
        'ancient-dark':{'n':'Ancient Dark Dragon','battles':10, 'cutoff': 200000, 'combo_min':4, 'combo_max':10},
        'ancient-light':{'n':'Ancient Light Dragon','battles':10, 'cutoff': 200000, 'combo_min':4, 'combo_max':10},
        'watery':{'n':'Watery Temptress','battles':5, 'cutoff': 200000, 'combo_min':3, 'combo_max':8},
        'red-flower':{'n':'Red Flower Dragon','battles':10, 'cutoff': 100000, 'combo_min':3, 'combo_max':9},
        'blue-flower':{'n':'Blue Flower Dragon','battles':10, 'cutoff': 100000, 'combo_min':3, 'combo_max':9},
        'gleaming':{'n':'Gleaming Dragon','battles':5, 'cutoff': 200000, 'combo_min':3, 'combo_max':9}
    };

    var current_dungeon = getParameterByName("dungeon").toLowerCase();
    if (! (current_dungeon in dungeons)) {
        current_dungeon = "blue-flower";
    }
    for (d in dungeons) {
        if (d === current_dungeon) {
            $('#current_dungeon').text(dungeons[d].n);
        } else {
            $('#other_dungeons_menu').append('<li><a href="index.html?dungeon='+d+'" id="'+d+'__">'+dungeons[d].n+'</a></li>');
        }
    }

    numberWithCommas = function(x) { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }
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
        $('#cUrl').val('http://tamadra.github.io/s-rank/?dungeon='+current_dungeon+'&R='+Math.round($('#rarity_slider').val())+'&T='+Math.round($('#turns_slider').val())+'&C='+$('#combo_value').text());
    }
    $('.slider').on('set', updateURL);
    updateURL();

    $('#mobile-nav').on('click', function(e){
        $(this).toggleClass('open');
        $('#navigation-mobile').stop().slideToggle(350);
        e.preventDefault();
    });
});
