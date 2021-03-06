
window.themeInfo = {name: "Testament"};

(function vendorPolyfills() {
  /* For IE 11+ Nodelist forEach Function */
  if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = function (callback, thisArg) {
          thisArg = thisArg || window;
          for (var i = 0; i < this.length; i++) {
              callback.call(thisArg, this[i], i, this);
          }
      };
  }
})();
(function vendorMatchHeight() {
  /*
  * jquery-match-height 0.7.2 by @liabru
  * http://brm.io/jquery-match-height/
  * License MIT
  */
  !function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,n=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),i=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-n(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(i-a))<=o?r[r.length-1]=s.add(e):r.push(e),i=a}),r},i=function(e){var o={
  byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=i(e);if(o.remove){var n=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(n)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.2",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
  r._afterUpdate=null,r._rows=a,r._parse=n,r._parseOptions=i,r._apply=function(e,o){var s=i(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),u=h.parents().filter(":hidden");return u.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),u.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
  "padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),i=0;if(s.target)i=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");var a={
  display:n};a[s.property]="",e.css(a),e.outerHeight(!1)>i&&(i=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=n(e.css("border-top-width"))+n(e.css("border-bottom-width")),o+=n(e.css("padding-top"))+n(e.css("padding-bottom"))),e.css(s.property,i-o+"px"))})}),u.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
  this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),n=o.attr("data-mh")||o.attr("data-match-height");n in e?e[n]=e[n].add(o):e[n]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(n,a){if(a&&"resize"===a.type){var i=t(window).width();if(i===e)return;e=i;
  }n?o===-1&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi);var h=t.fn.on?"on":"bind";t(window)[h]("load",function(t){r._update(!1,t)}),t(window)[h]("resize orientationchange",function(t){r._update(!0,t)})});

})();
(function vendorDoubleTapGo() {
  /*
  Double Tap Go By Osvaldas Valutis, www.osvaldas.info
  Available for use under the MIT License
  */
  ;(function(e,t,n,r){e.fn.doubleTapToGo=function(r){if(!("ontouchstart"in t)&&!navigator.msMaxTouchPoints&&!navigator.userAgent.toLowerCase().match(/windows phone os 7/i))return false;this.each(function(){var t=false;e(this).on("click",function(n){var r=e(this);if(r[0]!=t[0]){n.preventDefault();t=r}});e(n).on("click touchstart MSPointerDown",function(n){var r=true,i=e(n.target).parents();for(var s=0;s<i.length;s++)if(i[s]==t[0])r=false;if(r)t=false})});return this}})(jQuery,window,document);
})();
(function vendorStickyHeader() {
  /* Sticky header */
  jQuery(function($){$(document).ready(function(){var contentButton=[];var contentTop=[];var content=[];var lastScrollTop=0;var scrollDir='';var itemClass='';var itemHover='';var menuSize=null;var stickyHeight=0;var stickyMarginB=0;var currentMarginT=0;var topMargin=0;var vartop;$(window).scroll(function(event){var st=$(this).scrollTop();if(st>lastScrollTop){scrollDir='down'}else{scrollDir='up'}
  lastScrollTop=st});$.fn.stickUp=function(options){$(this).addClass('stuckMenu');var objn=0;if(options!=null){for(var o in options.parts){if(options.parts.hasOwnProperty(o)){content[objn]=options.parts[objn];objn++}}
  if(objn==0){console.log('error:needs arguments')}
  itemClass=options.itemClass;itemHover=options.itemHover;if(options.topMargin!=null){if(options.topMargin=='auto'){topMargin=parseInt($('.stuckMenu').css('margin-top'))}else{if(isNaN(options.topMargin)&&options.topMargin.search("px")>0){topMargin=parseInt(options.topMargin.replace("px",""))}else if(!isNaN(parseInt(options.topMargin))){topMargin=parseInt(options.topMargin)}else{console.log("incorrect argument, ignored.");topMargin=0}}}else{topMargin=0}
  menuSize=$('.'+itemClass).size()}
  stickyHeight=parseInt($(this).height());stickyMarginB=parseInt($(this).css('margin-bottom'));currentMarginT=parseInt($(this).next().closest('div').css('margin-top'));vartop=parseInt($(this).offset().top)};$(document).on('scroll',function(){varscroll=parseInt($(document).scrollTop());if(menuSize!=null){for(var i=0;i<menuSize;i++){contentTop[i]=$('#'+content[i]+'').offset().top;function bottomView(i){contentView=$('#'+content[i]+'').height()*.4;testView=contentTop[i]-contentView;if(varscroll>testView){$('.'+itemClass).removeClass(itemHover);$('.'+itemClass+':eq('+i+')').addClass(itemHover)}else if(varscroll<50){$('.'+itemClass).removeClass(itemHover);$('.'+itemClass+':eq(0)').addClass(itemHover)}}
  if(scrollDir=='down'&&varscroll>contentTop[i]-50&&varscroll<contentTop[i]+50){$('.'+itemClass).removeClass(itemHover);$('.'+itemClass+':eq('+i+')').addClass(itemHover)}
  if(scrollDir=='up'){bottomView(i)}}}
  if(vartop<varscroll+topMargin){$('.stuckMenu').addClass('isStuck');$('.stuckMenu').next().closest('div').css({'margin-top':stickyHeight+stickyMarginB+currentMarginT+'px'},10);$('.stuckMenu').css("position","fixed");$('.isStuck').css({top:'0px'},10,function(){})};if(varscroll+topMargin<vartop){$('.stuckMenu').removeClass('isStuck');$('.stuckMenu').next().closest('div').css({'margin-top':currentMarginT+'px'},10);$('.stuckMenu').css("position","relative")}})})})
})();
(function vendorOwlCarousel() {
  /*	jQuery OwlCarousel v1.31
   *	Copyright (c) 2013 Bartosz Wojciechowski
   *	http://www.owlgraphic.com/owlcarousel
   *	Licensed under MIT
   */
  eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7(B 3i.3E!=="9"){3i.3E=9(e){9 t(){}t.5v=e;q 5c t}}(9(e,t,n,r){b i={1J:9(t,n){b r=d;r.$k=e(n);r.6=e.3K({},e.3A.2c.6,r.$k.w(),t);r.29=t;r.3U()},3U:9(){b t=d;7(B t.6.2M==="9"){t.6.2M.P(d,[t.$k])}7(B t.6.2I==="2F"){b n=t.6.2I;9 r(e){7(B t.6.3F==="9"){t.6.3F.P(d,[e])}m{b n="";1C(b r 2f e["h"]){n+=e["h"][r]["1K"]}t.$k.2h(n)}t.2Y()}e.5G(n,r)}m{t.2Y()}},2Y:9(e){b t=d;t.$k.w("h-4p",t.$k.2s("2t")).w("h-4K",t.$k.2s("J"));t.$k.A({2z:0});t.2A=t.6.v;t.4L();t.5R=0;t.1M;t.1P()},1P:9(){b e=d;7(e.$k.1S().S===0){q c}e.1O();e.3H();e.$X=e.$k.1S();e.G=e.$X.S;e.4M();e.$I=e.$k.16(".h-1K");e.$L=e.$k.16(".h-1h");e.2H="Y";e.15=0;e.1W=[0];e.p=0;e.4I();e.4G()},4G:9(){b e=d;e.2V();e.31();e.4D();e.35();e.4C();e.4A();e.2x();e.4z();7(e.6.2w!==c){e.4w(e.6.2w)}7(e.6.Q===j){e.6.Q=5i}e.1e();e.$k.16(".h-1h").A("4v","4r");7(!e.$k.2p(":33")){e.34()}m{e.$k.A("2z",1)}e.56=c;e.2o();7(B e.6.39==="9"){e.6.39.P(d,[e.$k])}},2o:9(){b e=d;7(e.6.1I===j){e.1I()}7(e.6.1A===j){e.1A()}e.4n();7(B e.6.3n==="9"){e.6.3n.P(d,[e.$k])}},3o:9(){b e=d;7(B e.6.3p==="9"){e.6.3p.P(d,[e.$k])}e.34();e.2V();e.31();e.4m();e.35();e.2o();7(B e.6.3t==="9"){e.6.3t.P(d,[e.$k])}},4i:9(e){b t=d;19(9(){t.3o()},0)},34:9(){b e=d;7(e.$k.2p(":33")===c){e.$k.A({2z:0});18(e.1r);18(e.1M)}m{q c}e.1M=4g(9(){7(e.$k.2p(":33")){e.4i();e.$k.4f({2z:1},2J);18(e.1M)}},5O)},4M:9(){b e=d;e.$X.5N(\'<M J="h-1h">\').3G(\'<M J="h-1K"></M>\');e.$k.16(".h-1h").3G(\'<M J="h-1h-4d">\');e.1U=e.$k.16(".h-1h-4d");e.$k.A("4v","4r")},1O:9(){b e=d;b t=e.$k.1V(e.6.1O);b n=e.$k.1V(e.6.28);7(!t){e.$k.K(e.6.1O)}7(!n){e.$k.K(e.6.28)}},2V:9(){b t=d;7(t.6.2Z===c){q c}7(t.6.4b===j){t.6.v=t.2A=1;t.6.17=c;t.6.1q=c;t.6.21=c;t.6.24=c;t.6.25=c;t.6.26=c;q c}b n=e(t.6.4a).1m();7(n>(t.6.1q[0]||t.2A)){t.6.v=t.2A}7(B t.6.17!=="3b"&&t.6.17!==c){t.6.17.5x(9(e,t){q e[0]-t[0]});1C(b r 2f t.6.17){7(B t.6.17[r]!=="3b"&&t.6.17[r][0]<=n){t.6.v=t.6.17[r][1]}}}m{7(n<=t.6.1q[0]&&t.6.1q!==c){t.6.v=t.6.1q[1]}7(n<=t.6.21[0]&&t.6.21!==c){t.6.v=t.6.21[1]}7(n<=t.6.24[0]&&t.6.24!==c){t.6.v=t.6.24[1]}7(n<=t.6.25[0]&&t.6.25!==c){t.6.v=t.6.25[1]}7(n<=t.6.26[0]&&t.6.26!==c){t.6.v=t.6.26[1]}}7(t.6.v>t.G&&t.6.49===j){t.6.v=t.G}},4C:9(){b n=d,r;7(n.6.2Z!==j){q c}b i=e(t).1m();n.3f=9(){7(e(t).1m()!==i){7(n.6.Q!==c){18(n.1r)}5o(r);r=19(9(){i=e(t).1m();n.3o()},n.6.48)}};e(t).47(n.3f)},4m:9(){b e=d;e.2j(e.p);7(e.6.Q!==c){e.3l()}},46:9(){b t=d;b n=0;b r=t.G-t.6.v;t.$I.2i(9(i){b s=e(d);s.A({1m:t.N}).w("h-1K",3q(i));7(i%t.6.v===0||i===r){7(!(i>r)){n+=1}}s.w("h-1L",n)})},45:9(){b e=d;b t=0;b t=e.$I.S*e.N;e.$L.A({1m:t*2,V:0});e.46()},31:9(){b e=d;e.44();e.45();e.43();e.3x()},44:9(){b e=d;e.N=1N.5a(e.$k.1m()/e.6.v)},3x:9(){b e=d;b t=(e.G*e.N-e.6.v*e.N)*-1;7(e.6.v>e.G){e.C=0;t=0;e.3D=0}m{e.C=e.G-e.6.v;e.3D=t}q t},42:9(){q 0},43:9(){b t=d;t.H=[0];t.2C=[];b n=0;b r=0;1C(b i=0;i<t.G;i++){r+=t.N;t.H.2D(-r);7(t.6.14===j){b s=e(t.$I[i]);b o=s.w("h-1L");7(o!==n){t.2C[n]=t.H[i];n=o}}}},4D:9(){b t=d;7(t.6.2b===j||t.6.1s===j){t.D=e(\'<M J="h-4R"/>\').4Q("4P",!t.F.13).5E(t.$k)}7(t.6.1s===j){t.3Z()}7(t.6.2b===j){t.3Y()}},3Y:9(){b t=d;b n=e(\'<M J="h-5h"/>\');t.D.1k(n);t.1w=e("<M/>",{"J":"h-1l",2h:t.6.2T[0]||""});t.1y=e("<M/>",{"J":"h-Y",2h:t.6.2T[1]||""});n.1k(t.1w).1k(t.1y);n.z("2W.D 1Z.D",\'M[J^="h"]\',9(e){e.1n()});n.z("2a.D 2n.D",\'M[J^="h"]\',9(n){n.1n();7(e(d).1V("h-Y")){t.Y()}m{t.1l()}})},3Z:9(){b t=d;t.1o=e(\'<M J="h-1s"/>\');t.D.1k(t.1o);t.1o.z("2a.D 2n.D",".h-1p",9(n){n.1n();7(3q(e(d).w("h-1p"))!==t.p){t.1i(3q(e(d).w("h-1p")),j)}})},3T:9(){b t=d;7(t.6.1s===c){q c}t.1o.2h("");b n=0;b r=t.G-t.G%t.6.v;1C(b i=0;i<t.G;i++){7(i%t.6.v===0){n+=1;7(r===i){b s=t.G-t.6.v}b o=e("<M/>",{"J":"h-1p"});b u=e("<3Q></3Q>",{54:t.6.38===j?n:"","J":t.6.38===j?"h-5l":""});o.1k(u);o.w("h-1p",r===i?s:i);o.w("h-1L",n);t.1o.1k(o)}}t.3a()},3a:9(){b t=d;7(t.6.1s===c){q c}t.1o.16(".h-1p").2i(9(n,r){7(e(d).w("h-1L")===e(t.$I[t.p]).w("h-1L")){t.1o.16(".h-1p").Z("2d");e(d).K("2d")}})},3d:9(){b e=d;7(e.6.2b===c){q c}7(e.6.2e===c){7(e.p===0&&e.C===0){e.1w.K("1b");e.1y.K("1b")}m 7(e.p===0&&e.C!==0){e.1w.K("1b");e.1y.Z("1b")}m 7(e.p===e.C){e.1w.Z("1b");e.1y.K("1b")}m 7(e.p!==0&&e.p!==e.C){e.1w.Z("1b");e.1y.Z("1b")}}},35:9(){b e=d;e.3T();e.3d();7(e.D){7(e.6.v>=e.G){e.D.3N()}m{e.D.3L()}}},5g:9(){b e=d;7(e.D){e.D.3j()}},Y:9(e){b t=d;7(t.1G){q c}t.p+=t.6.14===j?t.6.v:1;7(t.p>t.C+(t.6.14==j?t.6.v-1:0)){7(t.6.2e===j){t.p=0;e="2k"}m{t.p=t.C;q c}}t.1i(t.p,e)},1l:9(e){b t=d;7(t.1G){q c}7(t.6.14===j&&t.p>0&&t.p<t.6.v){t.p=0}m{t.p-=t.6.14===j?t.6.v:1}7(t.p<0){7(t.6.2e===j){t.p=t.C;e="2k"}m{t.p=0;q c}}t.1i(t.p,e)},1i:9(e,t,n){b r=d;7(r.1G){q c}7(B r.6.1F==="9"){r.6.1F.P(d,[r.$k])}7(e>=r.C){e=r.C}m 7(e<=0){e=0}r.p=r.h.p=e;7(r.6.2w!==c&&n!=="4e"&&r.6.v===1&&r.F.1u===j){r.1B(0);7(r.F.1u===j){r.1H(r.H[e])}m{r.1x(r.H[e],1)}r.2q();r.4k();q c}b i=r.H[e];7(r.F.1u===j){r.1T=c;7(t===j){r.1B("1D");19(9(){r.1T=j},r.6.1D)}m 7(t==="2k"){r.1B(r.6.2u);19(9(){r.1T=j},r.6.2u)}m{r.1B("1j");19(9(){r.1T=j},r.6.1j)}r.1H(i)}m{7(t===j){r.1x(i,r.6.1D)}m 7(t==="2k"){r.1x(i,r.6.2u)}m{r.1x(i,r.6.1j)}}r.2q()},2j:9(e){b t=d;7(B t.6.1F==="9"){t.6.1F.P(d,[t.$k])}7(e>=t.C||e===-1){e=t.C}m 7(e<=0){e=0}t.1B(0);7(t.F.1u===j){t.1H(t.H[e])}m{t.1x(t.H[e],1)}t.p=t.h.p=e;t.2q()},2q:9(){b e=d;e.1W.2D(e.p);e.15=e.h.15=e.1W[e.1W.S-2];e.1W.55(0);7(e.15!==e.p){e.3a();e.3d();e.2o();7(e.6.Q!==c){e.3l()}}7(B e.6.3z==="9"&&e.15!==e.p){e.6.3z.P(d,[e.$k])}},W:9(){b e=d;e.3k="W";18(e.1r)},3l:9(){b e=d;7(e.3k!=="W"){e.1e()}},1e:9(){b e=d;e.3k="1e";7(e.6.Q===c){q c}18(e.1r);e.1r=4g(9(){e.Y(j)},e.6.Q)},1B:9(e){b t=d;7(e==="1j"){t.$L.A(t.2y(t.6.1j))}m 7(e==="1D"){t.$L.A(t.2y(t.6.1D))}m 7(B e!=="2F"){t.$L.A(t.2y(e))}},2y:9(e){b t=d;q{"-1R-1a":"2B "+e+"1z 2r","-27-1a":"2B "+e+"1z 2r","-o-1a":"2B "+e+"1z 2r",1a:"2B "+e+"1z 2r"}},3I:9(){q{"-1R-1a":"","-27-1a":"","-o-1a":"",1a:""}},3J:9(e){q{"-1R-O":"1g("+e+"T, E, E)","-27-O":"1g("+e+"T, E, E)","-o-O":"1g("+e+"T, E, E)","-1z-O":"1g("+e+"T, E, E)",O:"1g("+e+"T, E,E)"}},1H:9(e){b t=d;t.$L.A(t.3J(e))},3M:9(e){b t=d;t.$L.A({V:e})},1x:9(e,t){b n=d;n.2g=c;n.$L.W(j,j).4f({V:e},{59:t||n.6.1j,3O:9(){n.2g=j}})},4L:9(){b e=d;b r="1g(E, E, E)",i=n.5f("M");i.2t.3P="  -27-O:"+r+"; -1z-O:"+r+"; -o-O:"+r+"; -1R-O:"+r+"; O:"+r;b s=/1g\\(E, E, E\\)/g,o=i.2t.3P.5k(s),u=o!==1d&&o.S===1;b a="5z"2f t||5C.4U;e.F={1u:u,13:a}},4A:9(){b e=d;7(e.6.22!==c||e.6.23!==c){e.3R();e.3S()}},3H:9(){b e=d;b t=["s","e","x"];e.12={};7(e.6.22===j&&e.6.23===j){t=["2W.h 1Z.h","2P.h 3V.h","2a.h 3W.h 2n.h"]}m 7(e.6.22===c&&e.6.23===j){t=["2W.h","2P.h","2a.h 3W.h"]}m 7(e.6.22===j&&e.6.23===c){t=["1Z.h","3V.h","2n.h"]}e.12["3X"]=t[0];e.12["2O"]=t[1];e.12["2N"]=t[2]},3S:9(){b t=d;t.$k.z("5A.h",9(e){e.1n()});t.$k.z("1Z.40",9(t){q e(t.1f).2p("5F, 5H, 5Q, 5S")})},3R:9(){9 o(e){7(e.2L){q{x:e.2L[0].2K,y:e.2L[0].41}}m{7(e.2K!==r){q{x:e.2K,y:e.41}}m{q{x:e.52,y:e.53}}}}9 u(t){7(t==="z"){e(n).z(i.12["2O"],f);e(n).z(i.12["2N"],l)}m 7(t==="R"){e(n).R(i.12["2O"]);e(n).R(i.12["2N"])}}9 a(n){b n=n.3B||n||t.3w;7(n.5d===3){q c}7(i.G<=i.6.v){q}7(i.2g===c&&!i.6.3v){q c}7(i.1T===c&&!i.6.3v){q c}7(i.6.Q!==c){18(i.1r)}7(i.F.13!==j&&!i.$L.1V("3s")){i.$L.K("3s")}i.11=0;i.U=0;e(d).A(i.3I());b r=e(d).2l();s.3g=r.V;s.3e=o(n).x-r.V;s.3c=o(n).y-r.5y;u("z");s.2m=c;s.30=n.1f||n.4c}9 f(r){b r=r.3B||r||t.3w;i.11=o(r).x-s.3e;i.2S=o(r).y-s.3c;i.U=i.11-s.3g;7(B i.6.2R==="9"&&s.2Q!==j&&i.U!==0){s.2Q=j;i.6.2R.P(i,[i.$k])}7(i.U>8||i.U<-8&&i.F.13===j){r.1n?r.1n():r.5M=c;s.2m=j}7((i.2S>10||i.2S<-10)&&s.2m===c){e(n).R("2P.h")}b u=9(){q i.U/5};b a=9(){q i.3D+i.U/5};i.11=1N.3x(1N.42(i.11,u()),a());7(i.F.1u===j){i.1H(i.11)}m{i.3M(i.11)}}9 l(n){b n=n.3B||n||t.3w;n.1f=n.1f||n.4c;s.2Q=c;7(i.F.13!==j){i.$L.Z("3s")}7(i.U<0){i.1t=i.h.1t="V"}m{i.1t=i.h.1t="2G"}7(i.U!==0){b r=i.4h();i.1i(r,c,"4e");7(s.30===n.1f&&i.F.13!==j){e(n.1f).z("3u.4j",9(t){t.4S();t.4T();t.1n();e(n.1f).R("3u.4j")});b o=e.4O(n.1f,"4V")["3u"];b a=o.4W();o.4X(0,0,a)}}u("R")}b i=d;b s={3e:0,3c:0,4Y:0,3g:0,2l:1d,4Z:1d,50:1d,2m:1d,51:1d,30:1d};i.2g=j;i.$k.z(i.12["3X"],".h-1h",a)},4h:9(){b e=d,t;t=e.4l();7(t>e.C){e.p=e.C;t=e.C}m 7(e.11>=0){t=0;e.p=0}q t},4l:9(){b t=d,n=t.6.14===j?t.2C:t.H,r=t.11,i=1d;e.2i(n,9(s,o){7(r-t.N/20>n[s+1]&&r-t.N/20<o&&t.3m()==="V"){i=o;7(t.6.14===j){t.p=e.4o(i,t.H)}m{t.p=s}}m 7(r+t.N/20<o&&r+t.N/20>(n[s+1]||n[s]-t.N)&&t.3m()==="2G"){7(t.6.14===j){i=n[s+1]||n[n.S-1];t.p=e.4o(i,t.H)}m{i=n[s+1];t.p=s+1}}});q t.p},3m:9(){b e=d,t;7(e.U<0){t="2G";e.2H="Y"}m{t="V";e.2H="1l"}q t},4I:9(){b e=d;e.$k.z("h.Y",9(){e.Y()});e.$k.z("h.1l",9(){e.1l()});e.$k.z("h.1e",9(t,n){e.6.Q=n;e.1e();e.36="1e"});e.$k.z("h.W",9(){e.W();e.36="W"});e.$k.z("h.1i",9(t,n){e.1i(n)});e.$k.z("h.2j",9(t,n){e.2j(n)})},2x:9(){b e=d;7(e.6.2x===j&&e.F.13!==j&&e.6.Q!==c){e.$k.z("57",9(){e.W()});e.$k.z("58",9(){7(e.36!=="W"){e.1e()}})}},1I:9(){b t=d;7(t.6.1I===c){q c}1C(b n=0;n<t.G;n++){b i=e(t.$I[n]);7(i.w("h-1c")==="1c"){4q}b s=i.w("h-1K"),o=i.16(".5b"),u;7(B o.w("1X")!=="2F"){i.w("h-1c","1c");4q}7(i.w("h-1c")===r){o.3N();i.K("4s").w("h-1c","5e")}7(t.6.4t===j){u=s>=t.p}m{u=j}7(u&&s<t.p+t.6.v&&o.S){t.4u(i,o)}}},4u:9(e,t){9 s(){r+=1;7(n.2X(t.2U(0))||i===j){o()}m 7(r<=2v){19(s,2v)}m{o()}}9 o(){e.w("h-1c","1c").Z("4s");t.5j("w-1X");n.6.4x==="4y"?t.5m(5n):t.3L();7(B n.6.3r==="9"){n.6.3r.P(d,[n.$k])}}b n=d,r=0;7(t.5p("5q")==="5r"){t.A("5s-5t","5u("+t.w("1X")+")");b i=j}m{t[0].1X=t.w("1X")}s()},1A:9(){9 s(){i+=1;7(t.2X(n.2U(0))){o()}m 7(i<=2v){19(s,2v)}m{t.1U.A("3h","")}}9 o(){b n=e(t.$I[t.p]).3h();t.1U.A("3h",n+"T");7(!t.1U.1V("1A")){19(9(){t.1U.K("1A")},0)}}b t=d;b n=e(t.$I[t.p]).16("5w");7(n.2U(0)!==r){b i=0;s()}m{o()}},2X:9(e){7(!e.3O){q c}7(B e.4B!=="3b"&&e.4B==0){q c}q j},4n:9(){b t=d;7(t.6.37===j){t.$I.Z("2d")}t.1v=[];1C(b n=t.p;n<t.p+t.6.v;n++){t.1v.2D(n);7(t.6.37===j){e(t.$I[n]).K("2d")}}t.h.1v=t.1v},4w:9(e){b t=d;t.4E="h-"+e+"-5B";t.4F="h-"+e+"-2f"},4k:9(){9 u(e,t){q{2l:"5D",V:e+"T"}}b e=d;e.1G=j;b t=e.4E,n=e.4F,r=e.$I.1E(e.p),i=e.$I.1E(e.15),s=1N.4H(e.H[e.p])+e.H[e.15],o=1N.4H(e.H[e.p])+e.N/2;e.$L.K("h-1Y").A({"-1R-O-1Y":o+"T","-27-4J-1Y":o+"T","4J-1Y":o+"T"});b a="5I 5J 5K 5L";i.A(u(s,10)).K(t).z(a,9(){e.3C=j;i.R(a);e.32(i,t)});r.K(n).z(a,9(){e.2E=j;r.R(a);e.32(r,n)})},32:9(e,t){b n=d;e.A({2l:"",V:""}).Z(t);7(n.3C&&n.2E){n.$L.Z("h-1Y");n.3C=c;n.2E=c;n.1G=c}},4z:9(){b e=d;e.h={29:e.29,5P:e.$k,X:e.$X,I:e.$I,p:e.p,15:e.15,1v:e.1v,13:e.F.13,F:e.F,1t:e.1t}},4N:9(){b r=d;r.$k.R(".h h 1Z.40");e(n).R(".h h");e(t).R("47",r.3f)},1Q:9(){b e=d;7(e.$k.1S().S!==0){e.$L.3y();e.$X.3y().3y();7(e.D){e.D.3j()}}e.4N();e.$k.2s("2t",e.$k.w("h-4p")||"").2s("J",e.$k.w("h-4K"))},5T:9(){b e=d;e.W();18(e.1M);e.1Q();e.$k.5U()},5V:9(t){b n=d;b r=e.3K({},n.29,t);n.1Q();n.1J(r,n.$k)},5W:9(e,t){b n=d,i;7(!e){q c}7(n.$k.1S().S===0){n.$k.1k(e);n.1P();q c}n.1Q();7(t===r||t===-1){i=-1}m{i=t}7(i>=n.$X.S||i===-1){n.$X.1E(-1).5X(e)}m{n.$X.1E(i).5Y(e)}n.1P()},5Z:9(e){b t=d,n;7(t.$k.1S().S===0){q c}7(e===r||e===-1){n=-1}m{n=e}t.1Q();t.$X.1E(n).3j();t.1P()}};e.3A.2c=9(t){q d.2i(9(){7(e(d).w("h-1J")===j){q c}e(d).w("h-1J",j);b n=3i.3E(i);n.1J(t,d);e.w(d,"2c",n)})};e.3A.2c.6={v:5,17:c,1q:[60,4],21:[61,3],24:[62,2],25:c,26:[63,1],4b:c,49:c,1j:2J,1D:64,2u:65,Q:c,2x:c,2b:c,2T:["1l","Y"],2e:j,14:c,1s:j,38:c,2Z:j,48:2J,4a:t,1O:"h-66",28:"h-28",1I:c,4t:j,4x:"4y",1A:c,2I:c,3F:c,3v:j,22:j,23:j,37:c,2w:c,3p:c,3t:c,2M:c,39:c,1F:c,3z:c,3n:c,2R:c,3r:c}})(67,68,69)',62,382,'||||||options|if||function||var|false|this||||owl||true|elem||else|||currentItem|return|||||items|data|||on|css|typeof|maximumItem|owlControls|0px|browser|itemsAmount|positionsInArray|owlItems|class|addClass|owlWrapper|div|itemWidth|transform|apply|autoPlay|off|length|px|newRelativeX|left|stop|userItems|next|removeClass||newPosX|ev_types|isTouch|scrollPerPage|prevItem|find|itemsCustom|clearInterval|setTimeout|transition|disabled|loaded|null|play|target|translate3d|wrapper|goTo|slideSpeed|append|prev|width|preventDefault|paginationWrapper|page|itemsDesktop|autoPlayInterval|pagination|dragDirection|support3d|visibleItems|buttonPrev|css2slide|buttonNext|ms|autoHeight|swapSpeed|for|paginationSpeed|eq|beforeMove|isTransition|transition3d|lazyLoad|init|item|roundPages|checkVisible|Math|baseClass|setVars|unWrap|webkit|children|isCss3Finish|wrapperOuter|hasClass|prevArr|src|origin|mousedown||itemsDesktopSmall|mouseDrag|touchDrag|itemsTablet|itemsTabletSmall|itemsMobile|moz|theme|userOptions|touchend|navigation|owlCarousel|active|rewindNav|in|isCssFinish|html|each|jumpTo|rewind|position|sliding|mouseup|eachMoveUpdate|is|afterGo|ease|attr|style|rewindSpeed|100|transitionStyle|stopOnHover|addCssSpeed|opacity|orignalItems|all|pagesInArray|push|endCurrent|string|right|playDirection|jsonPath|200|pageX|touches|beforeInit|end|move|touchmove|dragging|startDragging|newPosY|navigationText|get|updateItems|touchstart|completeImg|logIn|responsive|targetElement|calculateAll|clearTransStyle|visible|watchVisibility|updateControls|hoverStatus|addClassActive|paginationNumbers|afterInit|checkPagination|undefined|offsetY|checkNavigation|offsetX|resizer|relativePos|height|Object|remove|apStatus|checkAp|moveDirection|afterAction|updateVars|beforeUpdate|Number|afterLazyLoad|grabbing|afterUpdate|click|dragBeforeAnimFinish|event|max|unwrap|afterMove|fn|originalEvent|endPrev|maximumPixels|create|jsonSuccess|wrap|eventTypes|removeTransition|doTranslate|extend|show|css2move|hide|complete|cssText|span|gestures|disabledEvents|updatePagination|loadContent|mousemove|touchcancel|start|buildButtons|buildPagination|disableTextSelect|pageY|min|loops|calculateWidth|appendWrapperSizes|appendItemsSizes|resize|responsiveRefreshRate|itemsScaleUp|responsiveBaseWidth|singleItem|srcElement|outer|drag|animate|setInterval|getNewPosition|reload|disable|singleItemTransition|closestItem|updatePosition|onVisibleItems|inArray|originalStyles|continue|block|loading|lazyFollow|lazyPreload|display|transitionTypes|lazyEffect|fade|owlStatus|moveEvents|naturalWidth|response|buildControls|outClass|inClass|onStartup|abs|customEvents|perspective|originalClasses|checkBrowser|wrapItems|clearEvents|_data|clickable|toggleClass|controls|stopImmediatePropagation|stopPropagation|msMaxTouchPoints|events|pop|splice|baseElWidth|minSwipe|maxSwipe|dargging|clientX|clientY|text|shift|onstartup|mouseover|mouseout|duration|round|lazyOwl|new|which|checked|createElement|destroyControls|buttons|5e3|removeAttr|match|numbers|fadeIn|400|clearTimeout|prop|tagName|DIV|background|image|url|prototype|img|sort|top|ontouchstart|dragstart|out|navigator|relative|appendTo|input|getJSON|textarea|webkitAnimationEnd|oAnimationEnd|MSAnimationEnd|animationend|returnValue|wrapAll|500|baseElement|select|wrapperWidth|option|destroy|removeData|reinit|addItem|after|before|removeItem|1199|979|768|479|800|1e3|carousel|jQuery|window|document'.split('|'),0,{}))

})();
(function vendorCookies() {
  /* Cookies */
  !function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function o(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function r(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(c," ")),u.json?JSON.parse(e):e}catch(n){}}function t(n,o){var i=u.raw?n:r(n);return e.isFunction(o)?o(i):i}var c=/\+/g,u=e.cookie=function(r,c,a){if(void 0!==c&&!e.isFunction(c)){if(a=e.extend({},u.defaults,a),"number"==typeof a.expires){var d=a.expires,f=a.expires=new Date;f.setTime(+f+864e5*d)}return document.cookie=[n(r),"=",i(c),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}for(var s=r?void 0:{},p=document.cookie?document.cookie.split("; "):[],m=0,v=p.length;v>m;m++){var x=p[m].split("="),k=o(x.shift()),l=x.join("=");if(r&&r===k){s=t(l,c);break}r||void 0===(l=t(l))||(s[k]=l)}return s};u.defaults={},e.removeCookie=function(n,o){return void 0===e.cookie(n)?!1:(e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n))}});

})();
(function vendorPlaceholder() {
  /* placeholder */
  !function(e,a,t){function l(e){var a={},l=/^jQuery\d+$/;return t.each(e.attributes,function(e,t){t.specified&&!l.test(t.name)&&(a[t.name]=t.value)}),a}function r(e,l){var r=this,o=t(r);if(r.value==o.attr("placeholder")&&o.hasClass("placeholder"))if(o.data("placeholder-password")){if(o=o.hide().next().show().attr("id",o.removeAttr("id").data("placeholder-id")),e===!0)return o[0].value=l;o.focus()}else r.value="",o.removeClass("placeholder"),r==a.activeElement&&r.select()}function o(){var e,a=this,o=t(a),d=this.id;if(""==a.value){if("password"==a.type){if(!o.data("placeholder-textinput")){try{e=o.clone().attr({type:"text"})}catch(c){e=t("<input>").attr(t.extend(l(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":d}).bind("focus.placeholder",r),o.data({"placeholder-textinput":e,"placeholder-id":d}).before(e)}o=o.removeAttr("id").hide().prev().attr("id",d).show()}o.addClass("placeholder"),o[0].value=o.attr("placeholder")}else o.removeClass("placeholder")}var d,c,n="placeholder"in a.createElement("input"),i="placeholder"in a.createElement("textarea"),h=t.fn,u=t.valHooks;n&&i?(c=h.placeholder=function(){return this},c.input=c.textarea=!0):(c=h.placeholder=function(){var e=this;return e.filter((n?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":r,"blur.placeholder":o}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},c.input=n,c.textarea=i,d={get:function(e){var a=t(e);return a.data("placeholder-enabled")&&a.hasClass("placeholder")?"":e.value},set:function(e,l){var d=t(e);return d.data("placeholder-enabled")?(""==l?(e.value=l,e!=a.activeElement&&o.call(e)):d.hasClass("placeholder")?r.call(e,!0,l)||(e.value=l):e.value=l,d):e.value=l}},n||(u.input=d),i||(u.textarea=d),t(function(){t(a).delegate("form","submit.placeholder",function(){var e=t(".placeholder",this).each(r);setTimeout(function(){e.each(o)},10)})}),t(e).bind("beforeunload.placeholder",function(){t(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery);
})();
(function vendorModernizer() {
  /* Modernizr 2.8.2 (Custom Build) | MIT & BSD
   * Build: http://modernizr.com/download/#-fontface-csstransforms-csstransforms3d-touch-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-cssclassprefix:supports!
   */
  ;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.8.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransforms=function(){return!!F("transform")},q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.fontface=function(){var a;return w('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" supports-"+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" supports-js supports-"+t.join(" supports-"):""),e}(this,this.document);
})();
(function vendorSlideout() {
  /* slideout */
  !function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.Slideout=t()}}(function(){var t,e,n;return function i(t,e,n){function o(r,a){if(!e[r]){if(!t[r]){var u=typeof require=="function"&&require;if(!a&&u)return u(r,!0);if(s)return s(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var h=e[r]={exports:{}};t[r][0].call(h.exports,function(e){var n=t[r][1][e];return o(n?n:e)},h,h.exports,i,t,e,n)}return e[r].exports}var s=typeof require=="function"&&require;for(var r=0;r<n.length;r++)o(n[r]);return o}({1:[function(t,e,n){"use strict";var i=t("decouple");var o=t("emitter");var s;var r=false;var a=window.document;var u=a.documentElement;var l=window.navigator.msPointerEnabled;var h={start:l?"MSPointerDown":"touchstart",move:l?"MSPointerMove":"touchmove",end:l?"MSPointerUp":"touchend"};var f=function v(){var t=/^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/;var e=a.getElementsByTagName("script")[0].style;for(var n in e){if(t.test(n)){return"-"+n.match(t)[0].toLowerCase()+"-"}}if("WebkitOpacity"in e){return"-webkit-"}if("KhtmlOpacity"in e){return"-khtml-"}return""}();function c(t,e){for(var n in e){if(e[n]){t[n]=e[n]}}return t}function p(t,e){t.prototype=c(t.prototype||{},e.prototype)}function d(t){while(t.parentNode){if(t.getAttribute("data-slideout-ignore")!==null){return t}t=t.parentNode}return null}function _(t){t=t||{};this._startOffsetX=0;this._currentOffsetX=0;this._opening=false;this._moved=false;this._opened=false;this._preventOpen=false;this.panel=t.panel;this.menu=t.menu;this._touch=t.touch===undefined?true:t.touch&&true;this._side=t.side||"left";this._easing=t.fx||t.easing||"ease";this._duration=parseInt(t.duration,10)||300;this._tolerance=parseInt(t.tolerance,10)||70;this._padding=this._translateTo=parseInt(t.padding,10)||256;this._orientation=this._side==="right"?-1:1;this._translateTo*=this._orientation;if(!this.panel.classList.contains("slideout-panel")){this.panel.classList.add("slideout-panel")}if(!this.panel.classList.contains("slideout-panel-"+this._side)){this.panel.classList.add("slideout-panel-"+this._side)}if(!this.menu.classList.contains("slideout-menu")){this.menu.classList.add("slideout-menu")}if(!this.menu.classList.contains("slideout-menu-"+this._side)){this.menu.classList.add("slideout-menu-"+this._side)}if(this._touch){this._initTouchEvents()}}p(_,o);_.prototype.open=function(){var t=this;this.emit("beforeopen");if(!u.classList.contains("slideout-open")){u.classList.add("slideout-open")}this._setTransition();this._translateXTo(this._translateTo);this._opened=true;setTimeout(function(){t.panel.style.transition=t.panel.style["-webkit-transition"]="";t.emit("open")},this._duration+50);return this};_.prototype.close=function(){var t=this;if(!this.isOpen()&&!this._opening){return this}this.emit("beforeclose");this._setTransition();this._translateXTo(0);this._opened=false;setTimeout(function(){u.classList.remove("slideout-open");t.panel.style.transition=t.panel.style["-webkit-transition"]=t.panel.style[f+"transform"]=t.panel.style.transform="";t.emit("close")},this._duration+50);return this};_.prototype.toggle=function(){return this.isOpen()?this.close():this.open()};_.prototype.isOpen=function(){return this._opened};_.prototype._translateXTo=function(t){this._currentOffsetX=t;this.panel.style[f+"transform"]=this.panel.style.transform="translateX("+t+"px)";return this};_.prototype._setTransition=function(){this.panel.style[f+"transition"]=this.panel.style.transition=f+"transform "+this._duration+"ms "+this._easing;return this};_.prototype._initTouchEvents=function(){var t=this;this._onScrollFn=i(a,"scroll",function(){if(!t._moved){clearTimeout(s);r=true;s=setTimeout(function(){r=false},250)}});this._preventMove=function(e){if(t._moved){e.preventDefault()}};a.addEventListener(h.move,this._preventMove);this._resetTouchFn=function(e){if(typeof e.touches==="undefined"){return}t._moved=false;t._opening=false;t._startOffsetX=e.touches[0].pageX;t._preventOpen=!t._touch||!t.isOpen()&&t.menu.clientWidth!==0};this.panel.addEventListener(h.start,this._resetTouchFn);this._onTouchCancelFn=function(){t._moved=false;t._opening=false};this.panel.addEventListener("touchcancel",this._onTouchCancelFn);this._onTouchEndFn=function(){if(t._moved){t.emit("translateend");t._opening&&Math.abs(t._currentOffsetX)>t._tolerance?t.open():t.close()}t._moved=false};this.panel.addEventListener(h.end,this._onTouchEndFn);this._onTouchMoveFn=function(e){if(r||t._preventOpen||typeof e.touches==="undefined"||d(e.target)){return}var n=e.touches[0].clientX-t._startOffsetX;var i=t._currentOffsetX=n;if(Math.abs(i)>t._padding){return}if(Math.abs(n)>20){t._opening=true;var o=n*t._orientation;if(t._opened&&o>0||!t._opened&&o<0){return}if(!t._moved){t.emit("translatestart")}if(o<=0){i=n+t._padding*t._orientation;t._opening=false}if(!(t._moved&&u.classList.contains("slideout-open"))){u.classList.add("slideout-open")}t.panel.style[f+"transform"]=t.panel.style.transform="translateX("+i+"px)";t.emit("translate",i);t._moved=true}};this.panel.addEventListener(h.move,this._onTouchMoveFn);return this};_.prototype.enableTouch=function(){this._touch=true;return this};_.prototype.disableTouch=function(){this._touch=false;return this};_.prototype.destroy=function(){this.close();a.removeEventListener(h.move,this._preventMove);this.panel.removeEventListener(h.start,this._resetTouchFn);this.panel.removeEventListener("touchcancel",this._onTouchCancelFn);this.panel.removeEventListener(h.end,this._onTouchEndFn);this.panel.removeEventListener(h.move,this._onTouchMoveFn);a.removeEventListener("scroll",this._onScrollFn);this.open=this.close=function(){};return this};e.exports=_},{decouple:2,emitter:3}],2:[function(t,e,n){"use strict";var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t,e,n){var o,s=false;function r(t){o=t;a()}function a(){if(!s){i(u);s=true}}function u(){n.call(t,o);s=false}t.addEventListener(e,r,false);return r}e.exports=o},{}],3:[function(t,e,n){"use strict";var i=function(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}};n.__esModule=true;var o=function(){function t(){i(this,t)}t.prototype.on=function e(t,n){this._eventCollection=this._eventCollection||{};this._eventCollection[t]=this._eventCollection[t]||[];this._eventCollection[t].push(n);return this};t.prototype.once=function n(t,e){var n=this;function i(){n.off(t,i);e.apply(this,arguments)}i.listener=e;this.on(t,i);return this};t.prototype.off=function o(t,e){var n=undefined;if(!this._eventCollection||!(n=this._eventCollection[t])){return this}n.forEach(function(t,i){if(t===e||t.listener===e){n.splice(i,1)}});if(n.length===0){delete this._eventCollection[t]}return this};t.prototype.emit=function s(t){var e=this;for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++){i[o-1]=arguments[o]}var s=undefined;if(!this._eventCollection||!(s=this._eventCollection[t])){return this}s=s.slice(0);s.forEach(function(t){return t.apply(e,i)});return this};return t}();n["default"]=o;e.exports=n["default"]},{}]},{},[1])(1)});

})();
(function vendorFlickity() {
    /*!
   * Flickity PACKAGED v2.2.1
   * Touch, responsive, flickable carousels
   *
   * Licensed GPLv3 for open source use
   * or Flickity Commercial License for commercial use
   *
   * https://flickity.metafizzy.co
   * Copyright 2015-2019 Metafizzy
   */

  !function(e,i){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("jquery")):e.jQueryBridget=i(e,e.jQuery)}(window,function(t,e){"use strict";var i=Array.prototype.slice,n=t.console,d=void 0===n?function(){}:function(t){n.error(t)};function s(h,s,c){(c=c||e||t.jQuery)&&(s.prototype.option||(s.prototype.option=function(t){c.isPlainObject(t)&&(this.options=c.extend(!0,this.options,t))}),c.fn[h]=function(t){return"string"==typeof t?function(t,o,r){var a,l="$()."+h+'("'+o+'")';return t.each(function(t,e){var i=c.data(e,h);if(i){var n=i[o];if(n&&"_"!=o.charAt(0)){var s=n.apply(i,r);a=void 0===a?s:a}else d(l+" is not a valid method")}else d(h+" not initialized. Cannot call methods, i.e. "+l)}),void 0!==a?a:t}(this,t,i.call(arguments,1)):(function(t,n){t.each(function(t,e){var i=c.data(e,h);i?(i.option(n),i._init()):(i=new s(e,n),c.data(e,h,i))})}(this,t),this)},o(c))}function o(t){!t||t&&t.bridget||(t.bridget=s)}return o(e||t.jQuery),s}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],s=0;s<i.length;s++){var o=i[s];n&&n[o]&&(this.off(t,o),delete n[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function m(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}var i="undefined"==typeof console?function(){}:function(t){console.error(t)},y=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],b=y.length;function E(t){var e=getComputedStyle(t);return e||i("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}var S,C=!1;function x(t){if(function(){if(!C){C=!0;var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var e=document.body||document.documentElement;e.appendChild(t);var i=E(t);S=200==Math.round(m(i.width)),x.isBoxSizeOuter=S,e.removeChild(t)}}(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var e=E(t);if("none"==e.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<b;e++){t[y[e]]=0}return t}();var i={};i.width=t.offsetWidth,i.height=t.offsetHeight;for(var n=i.isBorderBox="border-box"==e.boxSizing,s=0;s<b;s++){var o=y[s],r=e[o],a=parseFloat(r);i[o]=isNaN(a)?0:a}var l=i.paddingLeft+i.paddingRight,h=i.paddingTop+i.paddingBottom,c=i.marginLeft+i.marginRight,d=i.marginTop+i.marginBottom,u=i.borderLeftWidth+i.borderRightWidth,f=i.borderTopWidth+i.borderBottomWidth,p=n&&S,g=m(e.width);!1!==g&&(i.width=g+(p?0:l+u));var v=m(e.height);return!1!==v&&(i.height=v+(p?0:h+f)),i.innerWidth=i.width-(l+u),i.innerHeight=i.height-(h+f),i.outerWidth=i.width+c,i.outerHeight=i.height+d,i}}return x}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var i=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i]+"MatchesSelector";if(t[n])return n}}();return function(t,e){return t[i](e)}}),function(e,i){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("desandro-matches-selector")):e.fizzyUIUtils=i(e,e.matchesSelector)}(window,function(h,o){var c={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},e=Array.prototype.slice;c.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?e.call(t):[t]},c.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},c.getParent=function(t,e){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,o(t,e))return t},c.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},c.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},c.filterFindElements=function(t,n){t=c.makeArray(t);var s=[];return t.forEach(function(t){if(t instanceof HTMLElement)if(n){o(t,n)&&s.push(t);for(var e=t.querySelectorAll(n),i=0;i<e.length;i++)s.push(e[i])}else s.push(t)}),s},c.debounceMethod=function(t,e,n){n=n||100;var s=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,i=this;this[o]=setTimeout(function(){s.apply(i,e),delete i[o]},n)}},c.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},c.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var d=h.console;return c.htmlInit=function(a,l){c.docReady(function(){var t=c.toDashed(l),s="data-"+t,e=document.querySelectorAll("["+s+"]"),i=document.querySelectorAll(".js-"+t),n=c.makeArray(e).concat(c.makeArray(i)),o=s+"-options",r=h.jQuery;n.forEach(function(e){var t,i=e.getAttribute(s)||e.getAttribute(o);try{t=i&&JSON.parse(i)}catch(t){return void(d&&d.error("Error parsing "+s+" on "+e.className+": "+t))}var n=new a(e,t);r&&r.data(e,l,n)})})},c}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/cell",["get-size/get-size"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("get-size")):(e.Flickity=e.Flickity||{},e.Flickity.Cell=i(e,e.getSize))}(window,function(t,e){function i(t,e){this.element=t,this.parent=e,this.create()}var n=i.prototype;return n.create=function(){this.element.style.position="absolute",this.element.setAttribute("aria-hidden","true"),this.x=0,this.shift=0},n.destroy=function(){this.unselect(),this.element.style.position="";var t=this.parent.originSide;this.element.style[t]=""},n.getSize=function(){this.size=e(this.element)},n.setPosition=function(t){this.x=t,this.updateTarget(),this.renderPosition(t)},n.updateTarget=n.setDefaultTarget=function(){var t="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign},n.renderPosition=function(t){var e=this.parent.originSide;this.element.style[e]=this.parent.getPositionValue(t)},n.select=function(){this.element.classList.add("is-selected"),this.element.removeAttribute("aria-hidden")},n.unselect=function(){this.element.classList.remove("is-selected"),this.element.setAttribute("aria-hidden","true")},n.wrapShift=function(t){this.shift=t,this.renderPosition(this.x+this.parent.slideableWidth*t)},n.remove=function(){this.element.parentNode.removeChild(this.element)},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/slide",e):"object"==typeof module&&module.exports?module.exports=e():(t.Flickity=t.Flickity||{},t.Flickity.Slide=e())}(window,function(){"use strict";function t(t){this.parent=t,this.isOriginLeft="left"==t.originSide,this.cells=[],this.outerWidth=0,this.height=0}var e=t.prototype;return e.addCell=function(t){if(this.cells.push(t),this.outerWidth+=t.size.outerWidth,this.height=Math.max(t.size.outerHeight,this.height),1==this.cells.length){this.x=t.x;var e=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=t.size[e]}},e.updateTarget=function(){var t=this.isOriginLeft?"marginRight":"marginLeft",e=this.getLastCell(),i=e?e.size[t]:0,n=this.outerWidth-(this.firstMargin+i);this.target=this.x+this.firstMargin+n*this.parent.cellAlign},e.getLastCell=function(){return this.cells[this.cells.length-1]},e.select=function(){this.cells.forEach(function(t){t.select()})},e.unselect=function(){this.cells.forEach(function(t){t.unselect()})},e.getCellElements=function(){return this.cells.map(function(t){return t.element})},t}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/animate",["fizzy-ui-utils/utils"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("fizzy-ui-utils")):(e.Flickity=e.Flickity||{},e.Flickity.animatePrototype=i(e,e.fizzyUIUtils))}(window,function(t,e){var i={startAnimation:function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},animate:function(){this.applyDragForce(),this.applySelectedAttraction();var t=this.x;if(this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating){var e=this;requestAnimationFrame(function(){e.animate()})}},positionSlider:function(){var t=this.x;this.options.wrapAround&&1<this.cells.length&&(t=e.modulo(t,this.slideableWidth),t-=this.slideableWidth,this.shiftWrapCells(t)),this.setTranslateX(t,this.isAnimating),this.dispatchScrollEvent()},setTranslateX:function(t,e){t+=this.cursorPosition,t=this.options.rightToLeft?-t:t;var i=this.getPositionValue(t);this.slider.style.transform=e?"translate3d("+i+",0,0)":"translateX("+i+")"},dispatchScrollEvent:function(){var t=this.slides[0];if(t){var e=-this.x-t.target,i=e/this.slidesWidth;this.dispatchEvent("scroll",null,[i,e])}},positionSliderAtSelected:function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,this.positionSlider())},getPositionValue:function(t){return this.options.percentPosition?.01*Math.round(t/this.size.innerWidth*1e4)+"%":Math.round(t)+"px"},settle:function(t){this.isPointerDown||Math.round(100*this.x)!=Math.round(100*t)||this.restingFrames++,2<this.restingFrames&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},shiftWrapCells:function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)},_shiftCells:function(t,e,i){for(var n=0;n<t.length;n++){var s=t[n],o=0<e?i:0;s.wrapShift(o),e-=s.size.outerWidth}},_unshiftCells:function(t){if(t&&t.length)for(var e=0;e<t.length;e++)t[e].wrapShift(0)},integratePhysics:function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},applyForce:function(t){this.velocity+=t},getFrictionFactor:function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},getRestingPosition:function(){return this.x+this.velocity/(1-this.getFrictionFactor())},applyDragForce:function(){if(this.isDraggable&&this.isPointerDown){var t=this.dragX-this.x-this.velocity;this.applyForce(t)}},applySelectedAttraction:function(){if(!(this.isDraggable&&this.isPointerDown)&&!this.isFreeScrolling&&this.slides.length){var t=(-1*this.selectedSlide.target-this.x)*this.options.selectedAttraction;this.applyForce(t)}}};return i}),function(r,a){if("function"==typeof define&&define.amd)define("flickity/js/flickity",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(t,e,i,n,s,o){return a(r,t,e,i,n,s,o)});else if("object"==typeof module&&module.exports)module.exports=a(r,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate"));else{var t=r.Flickity;r.Flickity=a(r,r.EvEmitter,r.getSize,r.fizzyUIUtils,t.Cell,t.Slide,t.animatePrototype)}}(window,function(n,t,e,a,i,r,s){var l=n.jQuery,o=n.getComputedStyle,h=n.console;function c(t,e){for(t=a.makeArray(t);t.length;)e.appendChild(t.shift())}var d=0,u={};function f(t,e){var i=a.getQueryElement(t);if(i){if(this.element=i,this.element.flickityGUID){var n=u[this.element.flickityGUID];return n.option(e),n}l&&(this.$element=l(this.element)),this.options=a.extend({},this.constructor.defaults),this.option(e),this._create()}else h&&h.error("Bad element for Flickity: "+(i||t))}f.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},f.createMethods=[];var p=f.prototype;a.extend(p,t.prototype),p._create=function(){var t=this.guid=++d;for(var e in this.element.flickityGUID=t,(u[t]=this).selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),(this.options.resize||this.options.watchCSS)&&n.addEventListener("resize",this),this.options.on){var i=this.options.on[e];this.on(e,i)}f.createMethods.forEach(function(t){this[t]()},this),this.options.watchCSS?this.watchCSS():this.activate()},p.option=function(t){a.extend(this.options,t)},p.activate=function(){this.isActive||(this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize(),c(this._filterFindCellElements(this.element.children),this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate"),this.selectInitialIndex(),this.isInitActivated=!0,this.dispatchEvent("ready"))},p._createSlider=function(){var t=document.createElement("div");t.className="flickity-slider",t.style[this.originSide]=0,this.slider=t},p._filterFindCellElements=function(t){return a.filterFindElements(t,this.options.cellSelector)},p.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},p._makeCells=function(t){return this._filterFindCellElements(t).map(function(t){return new i(t,this)},this)},p.getLastCell=function(){return this.cells[this.cells.length-1]},p.getLastSlide=function(){return this.slides[this.slides.length-1]},p.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},p._positionCells=function(t){t=t||0,this.maxCellHeight=t&&this.maxCellHeight||0;var e=0;if(0<t){var i=this.cells[t-1];e=i.x+i.size.outerWidth}for(var n=this.cells.length,s=t;s<n;s++){var o=this.cells[s];o.setPosition(e),e+=o.size.outerWidth,this.maxCellHeight=Math.max(o.size.outerHeight,this.maxCellHeight)}this.slideableWidth=e,this.updateSlides(),this._containSlides(),this.slidesWidth=n?this.getLastSlide().target-this.slides[0].target:0},p._sizeCells=function(t){t.forEach(function(t){t.getSize()})},p.updateSlides=function(){if(this.slides=[],this.cells.length){var n=new r(this);this.slides.push(n);var s="left"==this.originSide?"marginRight":"marginLeft",o=this._getCanCellFit();this.cells.forEach(function(t,e){if(n.cells.length){var i=n.outerWidth-n.firstMargin+(t.size.outerWidth-t.size[s]);o.call(this,e,i)||(n.updateTarget(),n=new r(this),this.slides.push(n)),n.addCell(t)}else n.addCell(t)},this),n.updateTarget(),this.updateSelectedSlide()}},p._getCanCellFit=function(){var t=this.options.groupCells;if(!t)return function(){return!1};if("number"==typeof t){var e=parseInt(t,10);return function(t){return t%e!=0}}var i="string"==typeof t&&t.match(/^(\d+)%$/),n=i?parseInt(i[1],10)/100:1;return function(t,e){return e<=(this.size.innerWidth+1)*n}},p._init=p.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},p.getSize=function(){this.size=e(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var g={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};return p.setCellAlign=function(){var t=g[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign},p.setGallerySize=function(){if(this.options.setGallerySize){var t=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=t+"px"}},p._getWrapShiftCells=function(){if(this.options.wrapAround){this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition,e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1),t=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(t,0,1)}},p._getGapCells=function(t,e,i){for(var n=[];0<t;){var s=this.cells[e];if(!s)break;n.push(s),e+=i,t-=s.size.outerWidth}return n},p._containSlides=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length){var t=this.options.rightToLeft,e=t?"marginRight":"marginLeft",i=t?"marginLeft":"marginRight",n=this.slideableWidth-this.getLastCell().size[i],s=n<this.size.innerWidth,o=this.cursorPosition+this.cells[0].size[e],r=n-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(t){s?t.target=n*this.cellAlign:(t.target=Math.max(t.target,o),t.target=Math.min(t.target,r))},this)}},p.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),l&&this.$element){var s=t+=this.options.namespaceJQueryEvents?".flickity":"";if(e){var o=l.Event(e);o.type=t,s=o}this.$element.trigger(s,i)}},p.select=function(t,e,i){if(this.isActive&&(t=parseInt(t,10),this._wrapSelect(t),(this.options.wrapAround||e)&&(t=a.modulo(t,this.slides.length)),this.slides[t])){var n=this.selectedIndex;this.selectedIndex=t,this.updateSelectedSlide(),i?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select",null,[t]),t!=n&&this.dispatchEvent("change",null,[t]),this.dispatchEvent("cellSelect")}},p._wrapSelect=function(t){var e=this.slides.length;if(!(this.options.wrapAround&&1<e))return t;var i=a.modulo(t,e),n=Math.abs(i-this.selectedIndex),s=Math.abs(i+e-this.selectedIndex),o=Math.abs(i-e-this.selectedIndex);!this.isDragSelect&&s<n?t+=e:!this.isDragSelect&&o<n&&(t-=e),t<0?this.x-=this.slideableWidth:e<=t&&(this.x+=this.slideableWidth)},p.previous=function(t,e){this.select(this.selectedIndex-1,t,e)},p.next=function(t,e){this.select(this.selectedIndex+1,t,e)},p.updateSelectedSlide=function(){var t=this.slides[this.selectedIndex];t&&(this.unselectSelectedSlide(),(this.selectedSlide=t).select(),this.selectedCells=t.cells,this.selectedElements=t.getCellElements(),this.selectedCell=t.cells[0],this.selectedElement=this.selectedElements[0])},p.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},p.selectInitialIndex=function(){var t=this.options.initialIndex;if(this.isInitActivated)this.select(this.selectedIndex,!1,!0);else{if(t&&"string"==typeof t)if(this.queryCell(t))return void this.selectCell(t,!1,!0);var e=0;t&&this.slides[t]&&(e=t),this.select(e,!1,!0)}},p.selectCell=function(t,e,i){var n=this.queryCell(t);if(n){var s=this.getCellSlideIndex(n);this.select(s,e,i)}},p.getCellSlideIndex=function(t){for(var e=0;e<this.slides.length;e++){if(-1!=this.slides[e].cells.indexOf(t))return e}},p.getCell=function(t){for(var e=0;e<this.cells.length;e++){var i=this.cells[e];if(i.element==t)return i}},p.getCells=function(t){t=a.makeArray(t);var i=[];return t.forEach(function(t){var e=this.getCell(t);e&&i.push(e)},this),i},p.getCellElements=function(){return this.cells.map(function(t){return t.element})},p.getParentCell=function(t){var e=this.getCell(t);return e||(t=a.getParent(t,".flickity-slider > *"),this.getCell(t))},p.getAdjacentCellElements=function(t,e){if(!t)return this.selectedSlide.getCellElements();e=void 0===e?this.selectedIndex:e;var i=this.slides.length;if(i<=1+2*t)return this.getCellElements();for(var n=[],s=e-t;s<=e+t;s++){var o=this.options.wrapAround?a.modulo(s,i):s,r=this.slides[o];r&&(n=n.concat(r.getCellElements()))}return n},p.queryCell=function(t){if("number"==typeof t)return this.cells[t];if("string"==typeof t){if(t.match(/^[#\.]?[\d\/]/))return;t=this.element.querySelector(t)}return this.getCell(t)},p.uiChange=function(){this.emitEvent("uiChange")},p.childUIPointerDown=function(t){"touchstart"!=t.type&&t.preventDefault(),this.focus()},p.onresize=function(){this.watchCSS(),this.resize()},a.debounceMethod(f,"onresize",150),p.resize=function(){if(this.isActive){this.getSize(),this.options.wrapAround&&(this.x=a.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize");var t=this.selectedElements&&this.selectedElements[0];this.selectCell(t,!1,!0)}},p.watchCSS=function(){this.options.watchCSS&&(-1!=o(this.element,":after").content.indexOf("flickity")?this.activate():this.deactivate())},p.onkeydown=function(t){var e=document.activeElement&&document.activeElement!=this.element;if(this.options.accessibility&&!e){var i=f.keyboardHandlers[t.keyCode];i&&i.call(this)}},f.keyboardHandlers={37:function(){var t=this.options.rightToLeft?"next":"previous";this.uiChange(),this[t]()},39:function(){var t=this.options.rightToLeft?"previous":"next";this.uiChange(),this[t]()}},p.focus=function(){var t=n.pageYOffset;this.element.focus({preventScroll:!0}),n.pageYOffset!=t&&n.scrollTo(n.pageXOffset,t)},p.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.unselectSelectedSlide(),this.cells.forEach(function(t){t.destroy()}),this.element.removeChild(this.viewport),c(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},p.destroy=function(){this.deactivate(),n.removeEventListener("resize",this),this.allOff(),this.emitEvent("destroy"),l&&this.$element&&l.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete u[this.guid]},a.extend(p,s),f.data=function(t){var e=(t=a.getQueryElement(t))&&t.flickityGUID;return e&&u[e]},a.htmlInit(f,"flickity"),l&&l.bridget&&l.bridget("flickity",f),f.setJQuery=function(t){l=t},f.Cell=i,f.Slide=r,f}),function(e,i){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.Unipointer=i(e,e.EvEmitter)}(window,function(s,t){function e(){}var i=e.prototype=Object.create(t.prototype);i.bindStartEvent=function(t){this._bindStartEvent(t,!0)},i.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},i._bindStartEvent=function(t,e){var i=(e=void 0===e||e)?"addEventListener":"removeEventListener",n="mousedown";s.PointerEvent?n="pointerdown":"ontouchstart"in s&&(n="touchstart"),t[i](n,this)},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.identifier==this.pointerIdentifier)return i}},i.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},i.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},i.onpointerdown=function(t){this._pointerDown(t,t)},i._pointerDown=function(t,e){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},i.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var n={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return i._bindPostStartEvents=function(t){if(t){var e=n[t.type];e.forEach(function(t){s.addEventListener(t,this)},this),this._boundPointerEvents=e}},i._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(t){s.removeEventListener(t,this)},this),delete this._boundPointerEvents)},i.onmousemove=function(t){this._pointerMove(t,t)},i.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},i.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},i._pointerMove=function(t,e){this.pointerMove(t,e)},i.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},i.onmouseup=function(t){this._pointerUp(t,t)},i.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},i.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},i._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},i._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},i._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},i.pointerDone=function(){},i.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},i.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},i._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},i.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},e.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},e}),function(e,i){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("unipointer")):e.Unidragger=i(e,e.Unipointer)}(window,function(o,t){function e(){}var i=e.prototype=Object.create(t.prototype);i.bindHandles=function(){this._bindHandles(!0)},i.unbindHandles=function(){this._bindHandles(!1)},i._bindHandles=function(t){for(var e=(t=void 0===t||t)?"addEventListener":"removeEventListener",i=t?this._touchActionValue:"",n=0;n<this.handles.length;n++){var s=this.handles[n];this._bindStartEvent(s,t),s[e]("click",this),o.PointerEvent&&(s.style.touchAction=i)}},i._touchActionValue="none",i.pointerDown=function(t,e){this.okayPointerDown(t)&&(this.pointerDownPointer=e,t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e]))};var s={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},r={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return i.okayPointerDown=function(t){var e=s[t.target.nodeName],i=r[t.target.type],n=!e||i;return n||this._pointerReset(),n},i.pointerDownBlur=function(){var t=document.activeElement;t&&t.blur&&t!=document.body&&t.blur()},i.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]),this._dragMove(t,e,i)},i._dragPointerMove=function(t,e){var i={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(i)&&this._dragStart(t,e),i},i.hasDragStarted=function(t){return 3<Math.abs(t.x)||3<Math.abs(t.y)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},i._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},i._dragStart=function(t,e){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,e)},i.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},i._dragMove=function(t,e,i){this.isDragging&&this.dragMove(t,e,i)},i.dragMove=function(t,e,i){t.preventDefault(),this.emitEvent("dragMove",[t,e,i])},i._dragEnd=function(t,e){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,e)},i.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},i.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},i._staticClick=function(t,e){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,e),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},i.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},e.getPointerPoint=t.getPointerPoint,e}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/drag",["./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unidragger"),require("fizzy-ui-utils")):n.Flickity=s(n,n.Flickity,n.Unidragger,n.fizzyUIUtils)}(window,function(i,t,e,a){a.extend(t.defaults,{draggable:">1",dragThreshold:3}),t.createMethods.push("_createDrag");var n=t.prototype;a.extend(n,e.prototype),n._touchActionValue="pan-y";var s="createTouch"in document,o=!1;n._createDrag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("deactivate",this.onDeactivateDrag),this.on("cellChange",this.updateDraggable),s&&!o&&(i.addEventListener("touchmove",function(){}),o=!0)},n.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},n.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},n.updateDraggable=function(){">1"==this.options.draggable?this.isDraggable=1<this.slides.length:this.isDraggable=this.options.draggable,this.isDraggable?this.element.classList.add("is-draggable"):this.element.classList.remove("is-draggable")},n.bindDrag=function(){this.options.draggable=!0,this.updateDraggable()},n.unbindDrag=function(){this.options.draggable=!1,this.updateDraggable()},n._uiChangeDrag=function(){delete this.isFreeScrolling},n.pointerDown=function(t,e){this.isDraggable?this.okayPointerDown(t)&&(this._pointerDownPreventDefault(t),this.pointerDownFocus(t),document.activeElement!=this.element&&this.pointerDownBlur(),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this.pointerDownScroll=l(),i.addEventListener("scroll",this),this._pointerDownDefault(t,e)):this._pointerDownDefault(t,e)},n._pointerDownDefault=function(t,e){this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY},this._bindPostStartEvents(t),this.dispatchEvent("pointerDown",t,[e])};var r={INPUT:!0,TEXTAREA:!0,SELECT:!0};function l(){return{x:i.pageXOffset,y:i.pageYOffset}}return n.pointerDownFocus=function(t){r[t.target.nodeName]||this.focus()},n._pointerDownPreventDefault=function(t){var e="touchstart"==t.type,i="touch"==t.pointerType,n=r[t.target.nodeName];e||i||n||t.preventDefault()},n.hasDragStarted=function(t){return Math.abs(t.x)>this.options.dragThreshold},n.pointerUp=function(t,e){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",t,[e]),this._dragPointerUp(t,e)},n.pointerDone=function(){i.removeEventListener("scroll",this),delete this.pointerDownScroll},n.dragStart=function(t,e){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),i.removeEventListener("scroll",this),this.dispatchEvent("dragStart",t,[e]))},n.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,i]),this._dragMove(t,e,i)},n.dragMove=function(t,e,i){if(this.isDraggable){t.preventDefault(),this.previousDragX=this.dragX;var n=this.options.rightToLeft?-1:1;this.options.wrapAround&&(i.x=i.x%this.slideableWidth);var s=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.slides.length){var o=Math.max(-this.slides[0].target,this.dragStartPosition);s=o<s?.5*(s+o):s;var r=Math.min(-this.getLastSlide().target,this.dragStartPosition);s=s<r?.5*(s+r):s}this.dragX=s,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",t,[e,i])}},n.dragEnd=function(t,e){if(this.isDraggable){this.options.freeScroll&&(this.isFreeScrolling=!0);var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingPosition();this.isFreeScrolling=-n>this.slides[0].target&&-n<this.getLastSlide().target}else this.options.freeScroll||i!=this.selectedIndex||(i+=this.dragEndBoostSelect());delete this.previousDragX,this.isDragSelect=this.options.wrapAround,this.select(i),delete this.isDragSelect,this.dispatchEvent("dragEnd",t,[e])}},n.dragEndRestingSelect=function(){var t=this.getRestingPosition(),e=Math.abs(this.getSlideDistance(-t,this.selectedIndex)),i=this._getClosestResting(t,e,1),n=this._getClosestResting(t,e,-1);return i.distance<n.distance?i.index:n.index},n._getClosestResting=function(t,e,i){for(var n=this.selectedIndex,s=1/0,o=this.options.contain&&!this.options.wrapAround?function(t,e){return t<=e}:function(t,e){return t<e};o(e,s)&&(n+=i,s=e,null!==(e=this.getSlideDistance(-t,n)));)e=Math.abs(e);return{distance:s,index:n-i}},n.getSlideDistance=function(t,e){var i=this.slides.length,n=this.options.wrapAround&&1<i,s=n?a.modulo(e,i):e,o=this.slides[s];if(!o)return null;var r=n?this.slideableWidth*Math.floor(e/i):0;return t-(o.target+r)},n.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||100<new Date-this.dragMoveTime)return 0;var t=this.getSlideDistance(-this.dragX,this.selectedIndex),e=this.previousDragX-this.dragX;return 0<t&&0<e?1:t<0&&e<0?-1:0},n.staticClick=function(t,e){var i=this.getParentCell(t.target),n=i&&i.element,s=i&&this.cells.indexOf(i);this.dispatchEvent("staticClick",t,[e,n,s])},n.onscroll=function(){var t=l(),e=this.pointerDownScroll.x-t.x,i=this.pointerDownScroll.y-t.y;(3<Math.abs(e)||3<Math.abs(i))&&this._pointerDone()},t}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/prev-next-button",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}(window,function(t,e,i,n){"use strict";var s="http://www.w3.org/2000/svg";function o(t,e){this.direction=t,this.parent=e,this._create()}(o.prototype=Object.create(i.prototype))._create=function(){this.isEnabled=!0,this.isPrevious=-1==this.direction;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");e.className="flickity-button flickity-prev-next-button",e.className+=this.isPrevious?" previous":" next",e.setAttribute("type","button"),this.disable(),e.setAttribute("aria-label",this.isPrevious?"Previous":"Next");var i=this.createSVG();e.appendChild(i),this.parent.on("select",this.update.bind(this)),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},o.prototype.activate=function(){this.bindStartEvent(this.element),this.element.addEventListener("click",this),this.parent.element.appendChild(this.element)},o.prototype.deactivate=function(){this.parent.element.removeChild(this.element),this.unbindStartEvent(this.element),this.element.removeEventListener("click",this)},o.prototype.createSVG=function(){var t=document.createElementNS(s,"svg");t.setAttribute("class","flickity-button-icon"),t.setAttribute("viewBox","0 0 100 100");var e=document.createElementNS(s,"path"),i=function(t){return"string"!=typeof t?"M "+t.x0+",50 L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50  L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z":t}(this.parent.options.arrowShape);return e.setAttribute("d",i),e.setAttribute("class","arrow"),this.isLeft||e.setAttribute("transform","translate(100, 100) rotate(180) "),t.appendChild(e),t},o.prototype.handleEvent=n.handleEvent,o.prototype.onclick=function(){if(this.isEnabled){this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()}},o.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},o.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},o.prototype.update=function(){var t=this.parent.slides;if(this.parent.options.wrapAround&&1<t.length)this.enable();else{var e=t.length?t.length-1:0,i=this.isPrevious?0:e;this[this.parent.selectedIndex==i?"disable":"enable"]()}},o.prototype.destroy=function(){this.deactivate(),this.allOff()},n.extend(e.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),e.createMethods.push("_createPrevNextButtons");var r=e.prototype;return r._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new o(-1,this),this.nextButton=new o(1,this),this.on("activate",this.activatePrevNextButtons))},r.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},r.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},e.PrevNextButton=o,e}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/page-dots",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}(window,function(t,e,i,n){function s(t){this.parent=t,this._create()}(s.prototype=Object.create(i.prototype))._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",this.dots=[],this.handleClick=this.onClick.bind(this),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},s.prototype.activate=function(){this.setDots(),this.holder.addEventListener("click",this.handleClick),this.bindStartEvent(this.holder),this.parent.element.appendChild(this.holder)},s.prototype.deactivate=function(){this.holder.removeEventListener("click",this.handleClick),this.unbindStartEvent(this.holder),this.parent.element.removeChild(this.holder)},s.prototype.setDots=function(){var t=this.parent.slides.length-this.dots.length;0<t?this.addDots(t):t<0&&this.removeDots(-t)},s.prototype.addDots=function(t){for(var e=document.createDocumentFragment(),i=[],n=this.dots.length,s=n+t,o=n;o<s;o++){var r=document.createElement("li");r.className="dot",r.setAttribute("aria-label","Page dot "+(o+1)),e.appendChild(r),i.push(r)}this.holder.appendChild(e),this.dots=this.dots.concat(i)},s.prototype.removeDots=function(t){this.dots.splice(this.dots.length-t,t).forEach(function(t){this.holder.removeChild(t)},this)},s.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot",this.selectedDot.removeAttribute("aria-current")),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected",this.selectedDot.setAttribute("aria-current","step"))},s.prototype.onTap=s.prototype.onClick=function(t){var e=t.target;if("LI"==e.nodeName){this.parent.uiChange();var i=this.dots.indexOf(e);this.parent.select(i)}},s.prototype.destroy=function(){this.deactivate(),this.allOff()},e.PageDots=s,n.extend(e.defaults,{pageDots:!0}),e.createMethods.push("_createPageDots");var o=e.prototype;return o._createPageDots=function(){this.options.pageDots&&(this.pageDots=new s(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))},o.activatePageDots=function(){this.pageDots.activate()},o.updateSelectedPageDots=function(){this.pageDots.updateSelected()},o.updatePageDots=function(){this.pageDots.setDots()},o.deactivatePageDots=function(){this.pageDots.deactivate()},e.PageDots=s,e}),function(t,n){"function"==typeof define&&define.amd?define("flickity/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickity"],function(t,e,i){return n(t,e,i)}):"object"==typeof module&&module.exports?module.exports=n(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickity")):n(t.EvEmitter,t.fizzyUIUtils,t.Flickity)}(window,function(t,e,i){function n(t){this.parent=t,this.state="stopped",this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}(n.prototype=Object.create(t.prototype)).play=function(){"playing"!=this.state&&(document.hidden?document.addEventListener("visibilitychange",this.onVisibilityPlay):(this.state="playing",document.addEventListener("visibilitychange",this.onVisibilityChange),this.tick()))},n.prototype.tick=function(){if("playing"==this.state){var t=this.parent.options.autoPlay;t="number"==typeof t?t:3e3;var e=this;this.clear(),this.timeout=setTimeout(function(){e.parent.next(!0),e.tick()},t)}},n.prototype.stop=function(){this.state="stopped",this.clear(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){"playing"==this.state&&(this.state="paused",this.clear())},n.prototype.unpause=function(){"paused"==this.state&&this.play()},n.prototype.visibilityChange=function(){this[document.hidden?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},e.extend(i.defaults,{pauseAutoPlayOnHover:!0}),i.createMethods.push("_createPlayer");var s=i.prototype;return s._createPlayer=function(){this.player=new n(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},s.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},s.playPlayer=function(){this.player.play()},s.stopPlayer=function(){this.player.stop()},s.pausePlayer=function(){this.player.pause()},s.unpausePlayer=function(){this.player.unpause()},s.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},s.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},s.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},i.Player=n,i}),function(i,n){"function"==typeof define&&define.amd?define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./flickity"),require("fizzy-ui-utils")):n(i,i.Flickity,i.fizzyUIUtils)}(window,function(t,e,n){var i=e.prototype;return i.insert=function(t,e){var i=this._makeCells(t);if(i&&i.length){var n=this.cells.length;e=void 0===e?n:e;var s=function(t){var e=document.createDocumentFragment();return t.forEach(function(t){e.appendChild(t.element)}),e}(i),o=e==n;if(o)this.slider.appendChild(s);else{var r=this.cells[e].element;this.slider.insertBefore(s,r)}if(0===e)this.cells=i.concat(this.cells);else if(o)this.cells=this.cells.concat(i);else{var a=this.cells.splice(e,n-e);this.cells=this.cells.concat(i).concat(a)}this._sizeCells(i),this.cellChange(e,!0)}},i.append=function(t){this.insert(t,this.cells.length)},i.prepend=function(t){this.insert(t,0)},i.remove=function(t){var e=this.getCells(t);if(e&&e.length){var i=this.cells.length-1;e.forEach(function(t){t.remove();var e=this.cells.indexOf(t);i=Math.min(e,i),n.removeFrom(this.cells,t)},this),this.cellChange(i,!0)}},i.cellSizeChange=function(t){var e=this.getCell(t);if(e){e.getSize();var i=this.cells.indexOf(e);this.cellChange(i)}},i.cellChange=function(t,e){var i=this.selectedElement;this._positionCells(t),this._getWrapShiftCells(),this.setGallerySize();var n=this.getCell(i);n&&(this.selectedIndex=this.getCellSlideIndex(n)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[t]),this.select(this.selectedIndex),e&&this.positionSliderAtSelected()},e}),function(i,n){"function"==typeof define&&define.amd?define("flickity/js/lazyload",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./flickity"),require("fizzy-ui-utils")):n(i,i.Flickity,i.fizzyUIUtils)}(window,function(t,e,o){"use strict";e.createMethods.push("_createLazyload");var i=e.prototype;function s(t,e){this.img=t,this.flickity=e,this.load()}return i._createLazyload=function(){this.on("select",this.lazyLoad)},i.lazyLoad=function(){var t=this.options.lazyLoad;if(t){var e="number"==typeof t?t:0,i=this.getAdjacentCellElements(e),n=[];i.forEach(function(t){var e=function(t){if("IMG"==t.nodeName){var e=t.getAttribute("data-flickity-lazyload"),i=t.getAttribute("data-flickity-lazyload-src"),n=t.getAttribute("data-flickity-lazyload-srcset");if(e||i||n)return[t]}var s=t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");return o.makeArray(s)}(t);n=n.concat(e)}),n.forEach(function(t){new s(t,this)},this)}},s.prototype.handleEvent=o.handleEvent,s.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this);var t=this.img.getAttribute("data-flickity-lazyload")||this.img.getAttribute("data-flickity-lazyload-src"),e=this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src=t,e&&this.img.setAttribute("srcset",e),this.img.removeAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload-src"),this.img.removeAttribute("data-flickity-lazyload-srcset")},s.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")},s.prototype.onerror=function(t){this.complete(t,"flickity-lazyerror")},s.prototype.complete=function(t,e){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);var i=this.flickity.getParentCell(this.img),n=i&&i.element;this.flickity.cellSizeChange(n),this.img.classList.add(e),this.flickity.dispatchEvent("lazyLoad",t,n)},e.LazyLoader=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e):"object"==typeof module&&module.exports&&(module.exports=e(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}(window,function(t){return t}),function(t,e){"function"==typeof define&&define.amd?define("flickity-as-nav-for/as-nav-for",["flickity/js/index","fizzy-ui-utils/utils"],e):"object"==typeof module&&module.exports?module.exports=e(require("flickity"),require("fizzy-ui-utils")):t.Flickity=e(t.Flickity,t.fizzyUIUtils)}(window,function(n,s){n.createMethods.push("_createAsNavFor");var t=n.prototype;return t._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor);var t=this.options.asNavFor;if(t){var e=this;setTimeout(function(){e.setNavCompanion(t)})}},t.setNavCompanion=function(t){t=s.getQueryElement(t);var e=n.data(t);if(e&&e!=this){this.navCompanion=e;var i=this;this.onNavCompanionSelect=function(){i.navCompanionSelect()},e.on("select",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect(!0)}},t.navCompanionSelect=function(t){var e=this.navCompanion&&this.navCompanion.selectedCells;if(e){var i=e[0],n=this.navCompanion.cells.indexOf(i),s=n+e.length-1,o=Math.floor(function(t,e,i){return(e-t)*i+t}(n,s,this.navCompanion.cellAlign));if(this.selectCell(o,!1,t),this.removeNavSelectedElements(),!(o>=this.cells.length)){var r=this.cells.slice(n,1+s);this.navSelectedElements=r.map(function(t){return t.element}),this.changeNavSelectedClass("add")}}},t.changeNavSelectedClass=function(e){this.navSelectedElements.forEach(function(t){t.classList[e]("is-nav-selected")})},t.activateAsNavFor=function(){this.navCompanionSelect(!0)},t.removeNavSelectedElements=function(){this.navSelectedElements&&(this.changeNavSelectedClass("remove"),delete this.navSelectedElements)},t.onNavStaticClick=function(t,e,i,n){"number"==typeof n&&this.navCompanion.selectCell(n)},t.deactivateAsNavFor=function(){this.removeNavSelectedElements()},t.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("select",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},n}),function(e,i){"use strict";"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.imagesLoaded=i(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){var s=e.jQuery,o=e.console;function r(t,e){for(var i in e)t[i]=e[i];return t}var a=Array.prototype.slice;function l(t,e,i){if(!(this instanceof l))return new l(t,e,i);var n=t;"string"==typeof t&&(n=document.querySelectorAll(t)),n?(this.elements=function(t){return Array.isArray(t)?t:"object"==typeof t&&"number"==typeof t.length?a.call(t):[t]}(n),this.options=r({},this.options),"function"==typeof e?i=e:r(this.options,e),i&&this.on("always",i),this.getImages(),s&&(this.jqDeferred=new s.Deferred),setTimeout(this.check.bind(this))):o.error("Bad element for imagesLoaded "+(n||t))}(l.prototype=Object.create(t.prototype)).options={},l.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},l.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&h[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var s=i[n];this.addImage(s)}if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(n=0;n<o.length;n++){var r=o[n];this.addElementBackgroundImages(r)}}}};var h={1:!0,9:!0,11:!0};function i(t){this.img=t}function n(t,e){this.url=t,this.element=e,this.img=new Image}return l.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var s=n&&n[2];s&&this.addBackground(s,t),n=i.exec(e.backgroundImage)}},l.prototype.addImage=function(t){var e=new i(t);this.images.push(e)},l.prototype.addBackground=function(t,e){var i=new n(t,e);this.images.push(i)},l.prototype.check=function(){var n=this;function e(t,e,i){setTimeout(function(){n.progress(t,e,i)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(t){t.once("progress",e),t.check()}):this.complete()},l.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&o&&o.log("progress: "+i,t,e)},l.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},(i.prototype=Object.create(t.prototype)).check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},i.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},i.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},i.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},(n.prototype=Object.create(i.prototype)).check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},n.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},n.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},l.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((s=t).fn.imagesLoaded=function(t,e){return new l(this,t,e).jqDeferred.promise(s(this))})},l.makeJQueryPlugin(),l}),function(i,n){"function"==typeof define&&define.amd?define(["flickity/js/index","imagesloaded/imagesloaded"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("flickity"),require("imagesloaded")):i.Flickity=n(i,i.Flickity,i.imagesLoaded)}(window,function(t,e,i){"use strict";e.createMethods.push("_createImagesLoaded");var n=e.prototype;return n._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},n.imagesLoaded=function(){if(this.options.imagesLoaded){var n=this;i(this.slider).on("progress",function(t,e){var i=n.getParentCell(e.img);n.cellSizeChange(i&&i.element),n.options.freeScroll||n.positionSliderAtSelected()})}},e});

  /**
   * Flickity fade v1.0.0
   * Fade between Flickity slides
   */

  /* jshint browser: true, undef: true, unused: true */

  ( function( window, factory ) {
    // universal module definition
    /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
      // AMD
      define( [
        'flickity/js/index',
        'fizzy-ui-utils/utils',
      ], factory );
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS
      module.exports = factory(
        require('flickity'),
        require('fizzy-ui-utils')
      );
    } else {
      // browser global
      factory(
        window.Flickity,
        window.fizzyUIUtils
      );
    }

  }( this, function factory( Flickity, utils ) {

  // ---- Slide ---- //

  var Slide = Flickity.Slide;

  var slideUpdateTarget = Slide.prototype.updateTarget;
  Slide.prototype.updateTarget = function() {
    slideUpdateTarget.apply( this, arguments );
    if ( !this.parent.options.fade ) {
      return;
    }
    // position cells at selected target
    var slideTargetX = this.target - this.x;
    var firstCellX = this.cells[0].x;
    this.cells.forEach( function( cell ) {
      var targetX = cell.x - firstCellX - slideTargetX;
      cell.renderPosition( targetX );
    });
  };

  Slide.prototype.setOpacity = function( alpha ) {
    this.cells.forEach( function( cell ) {
      cell.element.style.opacity = alpha;
    });
  };

  // ---- Flickity ---- //

  var proto = Flickity.prototype;

  Flickity.createMethods.push('_createFade');

  proto._createFade = function() {
    this.fadeIndex = this.selectedIndex;
    this.prevSelectedIndex = this.selectedIndex;
    this.on( 'select', this.onSelectFade );
    this.on( 'dragEnd', this.onDragEndFade );
    this.on( 'settle', this.onSettleFade );
    this.on( 'activate', this.onActivateFade );
    this.on( 'deactivate', this.onDeactivateFade );
  };

  var updateSlides = proto.updateSlides;
  proto.updateSlides = function() {
    updateSlides.apply( this, arguments );
    if ( !this.options.fade ) {
      return;
    }
    // set initial opacity
    this.slides.forEach( function( slide, i ) {
      var alpha = i == this.selectedIndex ? 1 : 0;
      slide.setOpacity( alpha );
    }, this );
  };

  /* ---- events ---- */

  proto.onSelectFade = function() {
    // in case of resize, keep fadeIndex within current count
    this.fadeIndex = Math.min( this.prevSelectedIndex, this.slides.length - 1 );
    this.prevSelectedIndex = this.selectedIndex;
  };

  proto.onSettleFade = function() {
    delete this.didDragEnd;
    if ( !this.options.fade ) {
      return;
    }
    // set full and 0 opacity on selected & faded slides
    this.selectedSlide.setOpacity( 1 );
    var fadedSlide = this.slides[ this.fadeIndex ];
    if ( fadedSlide && this.fadeIndex != this.selectedIndex ) {
      this.slides[ this.fadeIndex ].setOpacity( 0 );
    }
  };

  proto.onDragEndFade = function() {
    // set flag
    this.didDragEnd = true;
  };

  proto.onActivateFade = function() {
    if ( this.options.fade ) {
      this.element.classList.add('is-fade');
    }
  };

  proto.onDeactivateFade = function() {
    if ( !this.options.fade ) {
      return;
    }
    this.element.classList.remove('is-fade');
    // reset opacity
    this.slides.forEach( function( slide ) {
      slide.setOpacity('');
    });
  };

  /* ---- position & fading ---- */

  var positionSlider = proto.positionSlider;
  proto.positionSlider = function() {
    if ( !this.options.fade ) {
      positionSlider.apply( this, arguments );
      return;
    }

    this.fadeSlides();
    this.dispatchScrollEvent();
  };

  var positionSliderAtSelected = proto.positionSliderAtSelected;
  proto.positionSliderAtSelected = function() {
    if ( this.options.fade ) {
      // position fade slider at origin
      this.setTranslateX( 0 );
    }
    positionSliderAtSelected.apply( this, arguments );
  };

  proto.fadeSlides = function() {
    if ( this.slides.length < 2 ) {
      return;
    }
    // get slides to fade-in & fade-out
    var indexes = this.getFadeIndexes();
    var fadeSlideA = this.slides[ indexes.a ];
    var fadeSlideB = this.slides[ indexes.b ];
    var distance = this.wrapDifference( fadeSlideA.target, fadeSlideB.target );
    var progress = this.wrapDifference( fadeSlideA.target, -this.x );
    progress = progress / distance;

    fadeSlideA.setOpacity( 1 - progress );
    fadeSlideB.setOpacity( progress );

    // hide previous slide
    var fadeHideIndex = indexes.a;
    if ( this.isDragging ) {
      fadeHideIndex = progress > 0.5 ? indexes.a : indexes.b;
    }
    var isNewHideIndex = this.fadeHideIndex != undefined &&
      this.fadeHideIndex != fadeHideIndex &&
      this.fadeHideIndex != indexes.a &&
      this.fadeHideIndex != indexes.b;
    if ( isNewHideIndex ) {
      // new fadeHideSlide set, hide previous
      this.slides[ this.fadeHideIndex ].setOpacity( 0 );
    }
    this.fadeHideIndex = fadeHideIndex;
  };

  proto.getFadeIndexes = function() {
    if ( !this.isDragging && !this.didDragEnd ) {
      return {
        a: this.fadeIndex,
        b: this.selectedIndex,
      };
    }
    if ( this.options.wrapAround ) {
      return this.getFadeDragWrapIndexes();
    } else {
      return this.getFadeDragLimitIndexes();
    }
  };

  proto.getFadeDragWrapIndexes = function() {
    var distances = this.slides.map( function( slide, i ) {
      return this.getSlideDistance( -this.x, i );
    }, this );
    var absDistances = distances.map( function( distance ) {
      return Math.abs( distance );
    });
    var minDistance = Math.min.apply( Math, absDistances );
    var closestIndex = absDistances.indexOf( minDistance );
    var distance = distances[ closestIndex ];
    var len = this.slides.length;

    var delta = distance >= 0 ? 1 : -1;
    return {
      a: closestIndex,
      b: utils.modulo( closestIndex + delta, len ),
    };
  };

  proto.getFadeDragLimitIndexes = function() {
    // calculate closest previous slide
    var dragIndex = 0;
    for ( var i=0; i < this.slides.length - 1; i++ ) {
      var slide = this.slides[i];
      if ( -this.x < slide.target ) {
        break;
      }
      dragIndex = i;
    }
    return {
      a: dragIndex,
      b: dragIndex + 1,
    };
  };

  proto.wrapDifference = function( a, b ) {
    var diff = b - a;

    if ( !this.options.wrapAround ) {
      return diff;
    }

    var diffPlus = diff + this.slideableWidth;
    var diffMinus = diff - this.slideableWidth;
    if ( Math.abs( diffPlus ) < Math.abs( diff ) ) {
      diff = diffPlus;
    }
    if ( Math.abs( diffMinus ) < Math.abs( diff ) ) {
      diff = diffMinus;
    }
    return diff;
  };

  // ---- wrapAround ---- //

  var _getWrapShiftCells = proto._getWrapShiftCells;
  proto._getWrapShiftCells = function() {
    if ( !this.options.fade ) {
      _getWrapShiftCells.apply( this, arguments );
    }
  };

  var shiftWrapCells = proto.shiftWrapCells;
  proto.shiftWrapCells = function() {
    if ( !this.options.fade ) {
      shiftWrapCells.apply( this, arguments );
    }
  };

  return Flickity;

  }));

  /*!
 * Flickity sync v2.0.0
 * enable sync for Flickity
 */

/*jshint browser: true, undef: true, unused: true, strict: true*/

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'flickity/js/index',
      'fizzy-ui-utils/utils'
    ], factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Flickity = factory(
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( window, function factory( Flickity, utils ) {

'use strict';

  // -------------------------- sync prototype -------------------------- //

  // Flickity.defaults.sync = false;

  Flickity.createMethods.push('_createSync');

  Flickity.prototype._createSync = function() {
    this.syncers = {};
    var syncOption = this.options.sync;

    this.on( 'destroy', this.unsyncAll );

    if ( !syncOption ) {
      return;
    }
    // HACK do async, give time for other flickity to be initalized
    var _this = this;
    setTimeout( function initSyncCompanion() {
      _this.sync( syncOption );
    });
  };

  /**
   * sync
   * @param {Element} or {String} elem
   */
  Flickity.prototype.sync = function( elem ) {
    elem = utils.getQueryElement( elem );
    var companion = Flickity.data( elem );
    if ( !companion ) {
      return;
    }
    // two hearts, that beat as one
    this._syncCompanion( companion );
    companion._syncCompanion( this );
  };

  /**
   * @param {Flickity} companion
   */
  Flickity.prototype._syncCompanion = function( companion ) {
    var _this = this;
    function syncListener() {
      var index = _this.selectedIndex;
      // do not select if already selected, prevent infinite loop
      if ( companion.selectedIndex != index ) {
        companion.select( index );
      }
    }
    this.on( 'select', syncListener );
    // keep track of all synced flickities
    // hold on to listener to unsync
    this.syncers[ companion.guid ] = {
      flickity: companion,
      listener: syncListener
    };
  };

  /**
   * unsync
   * @param {Element} or {String} elem
   */
  Flickity.prototype.unsync = function( elem ) {
    elem = utils.getQueryElement( elem );
    var companion = Flickity.data( elem );
    this._unsync( companion );
  };

  /**
   * @param {Flickity} companion
   */
  Flickity.prototype._unsync = function( companion ) {
    if ( !companion ) {
      return;
    }
    // I love you but I've chosen darkness
    this._unsyncCompanion( companion );
    companion._unsyncCompanion( this );
  };

  /**
   * @param {Flickity} companion
   */
  Flickity.prototype._unsyncCompanion = function( companion ) {
    var id = companion.guid;
    var syncer = this.syncers[ id ];
    this.off( 'select', syncer.listener );
    delete this.syncers[ id ];
  };

  Flickity.prototype.unsyncAll = function() {
    for ( var id in this.syncers ) {
      var syncer = this.syncers[ id ];
      this._unsync( syncer.flickity );
    }
  };

  // -----  ----- //

  return Flickity;

  }));
})();
(function vendorFlexslider() {

  /*
   * jQuery FlexSlider v2.7.2
   * Copyright 2012 WooThemes
   * Contributing Author: Tyler Smith
   */
  ;
  (function ($) {

    var focused = true;

    //FlexSlider: Object Instance
    $.flexslider = function(el, options) {
      var slider = $(el);

      // making variables public

      //if rtl value was not passed and html is in rtl..enable it by default.
      if(typeof options.rtl=='undefined' && $('html').attr('dir')=='rtl'){
        options.rtl=true;
      }
      slider.vars = $.extend({}, $.flexslider.defaults, options);

      var namespace = slider.vars.namespace,
          msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
          touch = (( "ontouchstart" in window ) || msGesture || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch,
          // deprecating this idea, as devices are being released with both of these events
          eventType = "click touchend MSPointerUp keyup",
          watchedEvent = "",
          watchedEventClearTimer,
          vertical = slider.vars.direction === "vertical",
          reverse = slider.vars.reverse,
          carousel = (slider.vars.itemWidth > 0),
          fade = slider.vars.animation === "fade",
          asNav = slider.vars.asNavFor !== "",
          methods = {};

      // Store a reference to the slider object
      $.data(el, "flexslider", slider);

      // Private slider methods
      methods = {
        init: function() {
          slider.animating = false;
          // Get current slide and make sure it is a number
          slider.currentSlide = parseInt( ( slider.vars.startAt ? slider.vars.startAt : 0), 10 );
          if ( isNaN( slider.currentSlide ) ) { slider.currentSlide = 0; }
          slider.animatingTo = slider.currentSlide;
          slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
          slider.containerSelector = slider.vars.selector.substr(0,slider.vars.selector.search(' '));
          slider.slides = $(slider.vars.selector, slider);
          slider.container = $(slider.containerSelector, slider);
          slider.count = slider.slides.length;
          // SYNC:
          slider.syncExists = $(slider.vars.sync).length > 0;
          // SLIDE:
          if (slider.vars.animation === "slide") { slider.vars.animation = "swing"; }
          slider.prop = (vertical) ? "top" : ( slider.vars.rtl ? "marginRight" : "marginLeft" );
          slider.args = {};
          // SLIDESHOW:
          slider.manualPause = false;
          slider.stopped = false;
          //PAUSE WHEN INVISIBLE
          slider.started = false;
          slider.startTimeout = null;
          // TOUCH/USECSS:
          slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && (function() {
            var obj = document.createElement('div'),
                props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
            for (var i in props) {
              if ( obj.style[ props[i] ] !== undefined ) {
                slider.pfx = props[i].replace('Perspective','').toLowerCase();
                slider.prop = "-" + slider.pfx + "-transform";
                return true;
              }
            }
            return false;
          }());
          slider.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
          slider.ensureAnimationEnd = '';
          // CONTROLSCONTAINER:
          if (slider.vars.controlsContainer !== "") slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer);
          // MANUAL:
          if (slider.vars.manualControls !== "") slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls);

          // CUSTOM DIRECTION NAV:
          if (slider.vars.customDirectionNav !== "") slider.customDirectionNav = $(slider.vars.customDirectionNav).length === 2 && $(slider.vars.customDirectionNav);

          // RANDOMIZE:
          if (slider.vars.randomize) {
            slider.slides.sort(function() { return (Math.round(Math.random())-0.5); });
            slider.container.empty().append(slider.slides);
          }

          slider.doMath();

          // INIT
          slider.setup("init");

          // CONTROLNAV:
          if (slider.vars.controlNav) { methods.controlNav.setup(); }

          // DIRECTIONNAV:
          if (slider.vars.directionNav) { methods.directionNav.setup(); }

          // KEYBOARD:
          if (slider.vars.keyboard && ($(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) {
            $(document).bind('keyup', function(event) {
              var keycode = event.keyCode;
              if (!slider.animating && (keycode === 39 || keycode === 37)) {
                var target = (slider.vars.rtl?
                                  ((keycode === 37) ? slider.getTarget('next') :
                                  (keycode === 39) ? slider.getTarget('prev') : false)
                                  :
                                  ((keycode === 39) ? slider.getTarget('next') :
                                  (keycode === 37) ? slider.getTarget('prev') : false)
                                  )
                                  ;
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            });
          }
          // MOUSEWHEEL:
          if (slider.vars.mousewheel) {
            slider.bind('mousewheel', function(event, delta, deltaX, deltaY) {
              event.preventDefault();
              var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            });
          }

          // PAUSEPLAY
          if (slider.vars.pausePlay) { methods.pausePlay.setup(); }

          //PAUSE WHEN INVISIBLE
          if (slider.vars.slideshow && slider.vars.pauseInvisible) { methods.pauseInvisible.init(); }

          // SLIDSESHOW
          if (slider.vars.slideshow) {
            if (slider.vars.pauseOnHover) {
              slider.hover(function() {
                if (!slider.manualPlay && !slider.manualPause) { slider.pause(); }
              }, function() {
                if (!slider.manualPause && !slider.manualPlay && !slider.stopped) { slider.play(); }
              });
            }
            // initialize animation
            //If we're visible, or we don't use PageVisibility API
            if(!slider.vars.pauseInvisible || !methods.pauseInvisible.isHidden()) {
              (slider.vars.initDelay > 0) ? slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay) : slider.play();
            }
          }

          // ASNAV:
          if (asNav) { methods.asNav.setup(); }

          // TOUCH
          if (touch && slider.vars.touch) { methods.touch(); }

          // FADE&&SMOOTHHEIGHT || SLIDE:
          if (!fade || (fade && slider.vars.smoothHeight)) { $(window).bind("resize orientationchange focus", methods.resize); }

          slider.find("img").attr("draggable", "false");

          // API: start() Callback
          setTimeout(function(){
            slider.vars.start(slider);
          }, 200);
        },
        asNav: {
          setup: function() {
            slider.asNav = true;
            slider.animatingTo = Math.floor(slider.currentSlide/slider.move);
            slider.currentItem = slider.currentSlide;
            slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
            if(!msGesture){
                slider.slides.on(eventType, function(e){
                  e.preventDefault();
                  var $slide = $(this),
                      target = $slide.index();
                  var posFromX;
                  if(slider.vars.rtl){
                    posFromX = -1*($slide.offset().right - $(slider).scrollLeft()); // Find position of slide relative to right of slider container
                  }
                  else
                  {
                    posFromX = $slide.offset().left - $(slider).scrollLeft(); // Find position of slide relative to left of slider container
                  }
                  if( posFromX <= 0 && $slide.hasClass( namespace + 'active-slide' ) ) {
                    slider.flexAnimate(slider.getTarget("prev"), true);
                  } else if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass(namespace + "active-slide")) {
                    slider.direction = (slider.currentItem < target) ? "next" : "prev";
                    slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                  }
                });
            }else{
                el._slider = slider;
                slider.slides.each(function (){
                    var that = this;
                    that._gesture = new MSGesture();
                    that._gesture.target = that;
                    that.addEventListener("MSPointerDown", function (e){
                        e.preventDefault();
                        if(e.currentTarget._gesture) {
                          e.currentTarget._gesture.addPointer(e.pointerId);
                        }
                    }, false);
                    that.addEventListener("MSGestureTap", function (e){
                        e.preventDefault();
                        var $slide = $(this),
                            target = $slide.index();
                        if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
                            slider.direction = (slider.currentItem < target) ? "next" : "prev";
                            slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                        }
                    });
                });
            }
          }
        },
        controlNav: {
          setup: function() {
            if (!slider.manualControls) {
              methods.controlNav.setupPaging();
            } else { // MANUALCONTROLS:
              methods.controlNav.setupManual();
            }
          },
          setupPaging: function() {
            var type = (slider.vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
                j = 1,
                item,
                slide;

            slider.controlNavScaffold = $('<ol class="'+ namespace + 'control-nav ' + namespace + type + '"></ol>');

            if (slider.pagingCount > 1) {
              for (var i = 0; i < slider.pagingCount; i++) {
                slide = slider.slides.eq(i);

                if ( undefined === slide.attr( 'data-thumb-alt' ) ) {
                  slide.attr( 'data-thumb-alt', '' );
                }

                item = $( '<a></a>' ).attr( 'href', '#' ).text( j );
                if ( slider.vars.controlNav === "thumbnails" ) {
                  item = $( '<img/>' ).attr( 'src', slide.attr( 'data-thumb' ) );
                }

                if ( '' !== slide.attr( 'data-thumb-alt' ) ) {
                  item.attr( 'alt', slide.attr( 'data-thumb-alt' ) );
                }

                if ( 'thumbnails' === slider.vars.controlNav && true === slider.vars.thumbCaptions ) {
                  var captn = slide.attr( 'data-thumbcaption' );
                  if ( '' !== captn && undefined !== captn ) {
                    var caption = $('<span></span>' ).addClass( namespace + 'caption' ).text( captn );
                    item.append( caption );
                  }
                }

                var liElement = $( '<li>' );
                item.appendTo( liElement );
                liElement.append( '</li>' );

                slider.controlNavScaffold.append(liElement);
                j++;

              }
            }

            // CONTROLSCONTAINER:
            (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
            methods.controlNav.set();

            methods.controlNav.active();

            slider.controlNavScaffold.delegate('a, img', eventType, function(event) {
              event.preventDefault();

              if (watchedEvent === "" || watchedEvent === event.type) {
                var $this = $(this),
                    target = slider.controlNav.index($this);

                if (!$this.hasClass(namespace + 'active')) {
                  slider.direction = (target > slider.currentSlide) ? "next" : "prev";
                  slider.flexAnimate(target, slider.vars.pauseOnAction);
                }
              }

              // setup flags to prevent event duplication
              if (watchedEvent === "") {
                watchedEvent = event.type;
              }
              methods.setToClearWatchedEvent();

            });
          },
          setupManual: function() {
            slider.controlNav = slider.manualControls;
            methods.controlNav.active();

            slider.controlNav.bind(eventType, function(event) {
              event.preventDefault();

              if (watchedEvent === "" || watchedEvent === event.type) {
                var $this = $(this),
                    target = slider.controlNav.index($this);

                if (!$this.hasClass(namespace + 'active')) {
                  (target > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";
                  slider.flexAnimate(target, slider.vars.pauseOnAction);
                }
              }

              // setup flags to prevent event duplication
              if (watchedEvent === "") {
                watchedEvent = event.type;
              }
              methods.setToClearWatchedEvent();
            });
          },
          set: function() {
            var selector = (slider.vars.controlNav === "thumbnails") ? 'img' : 'a';
            slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
          },
          active: function() {
            slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
          },
          update: function(action, pos) {
            if (slider.pagingCount > 1 && action === "add") {
              slider.controlNavScaffold.append($('<li><a href="#">' + slider.count + '</a></li>'));
            } else if (slider.pagingCount === 1) {
              slider.controlNavScaffold.find('li').remove();
            } else {
              slider.controlNav.eq(pos).closest('li').remove();
            }
            methods.controlNav.set();
            (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action) : methods.controlNav.active();
          }
        },
        directionNav: {
          setup: function() {
            var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li class="' + namespace + 'nav-prev"><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li class="' + namespace + 'nav-next"><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + '</a></li></ul>');

            // CUSTOM DIRECTION NAV:
            if (slider.customDirectionNav) {
              slider.directionNav = slider.customDirectionNav;
            // CONTROLSCONTAINER:
            } else if (slider.controlsContainer) {
              $(slider.controlsContainer).append(directionNavScaffold);
              slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
            } else {
              slider.append(directionNavScaffold);
              slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
            }

            methods.directionNav.update();

            slider.directionNav.bind(eventType, function(event) {
              event.preventDefault();
              var target;

              if (watchedEvent === "" || watchedEvent === event.type) {
                target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }

              // setup flags to prevent event duplication
              if (watchedEvent === "") {
                watchedEvent = event.type;
              }
              methods.setToClearWatchedEvent();
            });
          },
          update: function() {
            var disabledClass = namespace + 'disabled';
            if (slider.pagingCount === 1) {
              slider.directionNav.addClass(disabledClass).attr('tabindex', '-1');
            } else if (!slider.vars.animationLoop) {
              if (slider.animatingTo === 0) {
                slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass).attr('tabindex', '-1');
              } else if (slider.animatingTo === slider.last) {
                slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass).attr('tabindex', '-1');
              } else {
                // slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
              }
            } else {
              // slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
            }
          }
        },
        pausePlay: {
          setup: function() {
            var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a href="#"></a></div>');

            // CONTROLSCONTAINER:
            if (slider.controlsContainer) {
              slider.controlsContainer.append(pausePlayScaffold);
              slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
            } else {
              slider.append(pausePlayScaffold);
              slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
            }

            methods.pausePlay.update((slider.vars.slideshow) ? namespace + 'pause' : namespace + 'play');

            slider.pausePlay.bind(eventType, function(event) {
              event.preventDefault();

              if (watchedEvent === "" || watchedEvent === event.type) {
                if ($(this).hasClass(namespace + 'pause')) {
                  slider.manualPause = true;
                  slider.manualPlay = false;
                  slider.pause();
                } else {
                  slider.manualPause = false;
                  slider.manualPlay = true;
                  slider.play();
                }
              }

              // setup flags to prevent event duplication
              if (watchedEvent === "") {
                watchedEvent = event.type;
              }
              methods.setToClearWatchedEvent();
            });
          },
          update: function(state) {
            (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').html(slider.vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').html(slider.vars.pauseText);
          }
        },
        touch: function() {
          var startX,
            startY,
            offset,
            cwidth,
            dx,
            startT,
            onTouchStart,
            onTouchMove,
            onTouchEnd,
            scrolling = false,
            localX = 0,
            localY = 0,
            accDx = 0;

          if(!msGesture){
              onTouchStart = function(e) {
                if (slider.animating) {
                  e.preventDefault();
                } else if ( ( window.navigator.msPointerEnabled ) || e.touches.length === 1 ) {
                  slider.pause();
                  // CAROUSEL:
                  cwidth = (vertical) ? slider.h : slider. w;
                  startT = Number(new Date());
                  // CAROUSEL:

                  // Local vars for X and Y points.
                  localX = e.touches[0].pageX;
                  localY = e.touches[0].pageY;

                  offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                           (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                           (carousel && slider.currentSlide === slider.last) ? slider.limit :
                           (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                           (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                  startX = (vertical) ? localY : localX;
                  startY = (vertical) ? localX : localY;
                  el.addEventListener('touchmove', onTouchMove, false);
                  el.addEventListener('touchend', onTouchEnd, false);
                }
              };

              onTouchMove = function(e) {
                // Local vars for X and Y points.

                localX = e.touches[0].pageX;
                localY = e.touches[0].pageY;

                dx = (vertical) ? startX - localY : (slider.vars.rtl?-1:1)*(startX - localX);
                scrolling = (vertical) ? (Math.abs(dx) < Math.abs(localX - startY)) : (Math.abs(dx) < Math.abs(localY - startY));
                var fxms = 500;

                if ( ! scrolling || Number( new Date() ) - startT > fxms ) {
                  e.preventDefault();
                  if (!fade && slider.transitions) {
                    if (!slider.vars.animationLoop) {
                      dx = dx/((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx)/cwidth+2) : 1);
                    }
                    slider.setProps(offset + dx, "setTouch");
                  }
                }
              };

              onTouchEnd = function(e) {
                // finish the touch by undoing the touch session
                el.removeEventListener('touchmove', onTouchMove, false);

                if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                  var updateDx = (reverse) ? -dx : dx,
                      target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                  if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                    slider.flexAnimate(target, slider.vars.pauseOnAction);
                  } else {
                    if (!fade) { slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true); }
                  }
                }
                el.removeEventListener('touchend', onTouchEnd, false);

                startX = null;
                startY = null;
                dx = null;
                offset = null;
              };

              el.addEventListener('touchstart', onTouchStart, false);
          }else{
              el.style.msTouchAction = "none";
              el._gesture = new MSGesture();
              el._gesture.target = el;
              el.addEventListener("MSPointerDown", onMSPointerDown, false);
              el._slider = slider;
              el.addEventListener("MSGestureChange", onMSGestureChange, false);
              el.addEventListener("MSGestureEnd", onMSGestureEnd, false);

              function onMSPointerDown(e){
                  e.stopPropagation();
                  if (slider.animating) {
                      e.preventDefault();
                  }else{
                      slider.pause();
                      el._gesture.addPointer(e.pointerId);
                      accDx = 0;
                      cwidth = (vertical) ? slider.h : slider. w;
                      startT = Number(new Date());
                      // CAROUSEL:

                      offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                          (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                              (carousel && slider.currentSlide === slider.last) ? slider.limit :
                                  (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                                      (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                  }
              }

              function onMSGestureChange(e) {
                  e.stopPropagation();
                  var slider = e.target._slider;
                  if(!slider){
                      return;
                  }
                  var transX = -e.translationX,
                      transY = -e.translationY;

                  //Accumulate translations.
                  accDx = accDx + ((vertical) ? transY : transX);
                  dx = (slider.vars.rtl?-1:1)*accDx;
                  scrolling = (vertical) ? (Math.abs(accDx) < Math.abs(-transX)) : (Math.abs(accDx) < Math.abs(-transY));

                  if(e.detail === e.MSGESTURE_FLAG_INERTIA){
                      setImmediate(function (){
                          el._gesture.stop();
                      });

                      return;
                  }

                  if (!scrolling || Number(new Date()) - startT > 500) {
                      e.preventDefault();
                      if (!fade && slider.transitions) {
                          if (!slider.vars.animationLoop) {
                              dx = accDx / ((slider.currentSlide === 0 && accDx < 0 || slider.currentSlide === slider.last && accDx > 0) ? (Math.abs(accDx) / cwidth + 2) : 1);
                          }
                          slider.setProps(offset + dx, "setTouch");
                      }
                  }
              }

              function onMSGestureEnd(e) {
                  e.stopPropagation();
                  var slider = e.target._slider;
                  if(!slider){
                      return;
                  }
                  if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                      var updateDx = (reverse) ? -dx : dx,
                          target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                      if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                          slider.flexAnimate(target, slider.vars.pauseOnAction);
                      } else {
                          if (!fade) { slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true); }
                      }
                  }

                  startX = null;
                  startY = null;
                  dx = null;
                  offset = null;
                  accDx = 0;
              }
          }
        },
        resize: function() {
          if (!slider.animating && slider.is(':visible')) {
            if (!carousel) { slider.doMath(); }

            if (fade) {
              // SMOOTH HEIGHT:
              methods.smoothHeight();
            } else if (carousel) { //CAROUSEL:
              slider.slides.width(slider.computedW);
              slider.update(slider.pagingCount);
              slider.setProps();
            }
            else if (vertical) { //VERTICAL:
              slider.viewport.height(slider.h);
              slider.setProps(slider.h, "setTotal");
            } else {
              // SMOOTH HEIGHT:
              if (slider.vars.smoothHeight) { methods.smoothHeight(); }
              slider.newSlides.width(slider.computedW);
              slider.setProps(slider.computedW, "setTotal");
            }
          }
        },
        smoothHeight: function(dur) {
          if (!vertical || fade) {
            var $obj = (fade) ? slider : slider.viewport;
            (dur) ? $obj.animate({"height": slider.slides.eq(slider.animatingTo).innerHeight()}, dur) : $obj.innerHeight(slider.slides.eq(slider.animatingTo).innerHeight());
          }
        },
        sync: function(action) {
          var $obj = $(slider.vars.sync).data("flexslider"),
              target = slider.animatingTo;

          if (!$obj) return false;

          switch (action) {
            case "animate": $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true); break;
            case "play": if (!$obj.playing && !$obj.asNav) { $obj.play(); } break;
            case "pause": $obj.pause(); break;
          }
        },
        uniqueID: function($clone) {
          // Append _clone to current level and children elements with id attributes
          $clone.filter( '[id]' ).add($clone.find( '[id]' )).each(function() {
            var $this = $(this);
            $this.attr( 'id', $this.attr( 'id' ) + '_clone' );
          });
          return $clone;
        },
        pauseInvisible: {
          visProp: null,
          init: function() {
            var visProp = methods.pauseInvisible.getHiddenProp();
            if (visProp) {
              var evtname = visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
              document.addEventListener(evtname, function() {
                if (methods.pauseInvisible.isHidden()) {
                  if(slider.startTimeout) {
                    clearTimeout(slider.startTimeout); //If clock is ticking, stop timer and prevent from starting while invisible
                  } else {
                    slider.pause(); //Or just pause
                  }
                }
                else {
                  if(slider.started) {
                    slider.play(); //Initiated before, just play
                  } else {
                    if (slider.vars.initDelay > 0) {
                      setTimeout(slider.play, slider.vars.initDelay);
                    } else {
                      slider.play(); //Didn't init before: simply init or wait for it
                    }
                  }
                }
              });
            }
          },
          isHidden: function() {
            var prop = methods.pauseInvisible.getHiddenProp();
            if (!prop) {
              return false;
            }
            return document[prop];
          },
          getHiddenProp: function() {
            var prefixes = ['webkit','moz','ms','o'];
            // if 'hidden' is natively supported just return it
            if ('hidden' in document) {
              return 'hidden';
            }
            // otherwise loop over all the known prefixes until we find one
            for ( var i = 0; i < prefixes.length; i++ ) {
                if ((prefixes[i] + 'Hidden') in document) {
                  return prefixes[i] + 'Hidden';
                }
            }
            // otherwise it's not supported
            return null;
          }
        },
        setToClearWatchedEvent: function() {
          clearTimeout(watchedEventClearTimer);
          watchedEventClearTimer = setTimeout(function() {
            watchedEvent = "";
          }, 3000);
        }
      };

      // public methods
      slider.flexAnimate = function(target, pause, override, withSync, fromNav) {
        if (!slider.vars.animationLoop && target !== slider.currentSlide) {
          slider.direction = (target > slider.currentSlide) ? "next" : "prev";
        }

        if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev";

        if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
          if (asNav && withSync) {
            var master = $(slider.vars.asNavFor).data('flexslider');
            slider.atEnd = target === 0 || target === slider.count - 1;

            master.flexAnimate(target, true, false, true, fromNav);
            slider.direction = (slider.currentItem < target) ? "next" : "prev";
            master.direction = slider.direction;

            if (Math.ceil((target + 1)/slider.visible) - 1 !== slider.currentSlide && target !== 0) {
              slider.currentItem = target;
              slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
              target = Math.floor(target/slider.visible);
            } else {
              slider.currentItem = target;
              slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
              return false;
            }
          }

          slider.animating = true;
          slider.animatingTo = target;

          // SLIDESHOW:
          if (pause) { slider.pause(); }

          // API: before() animation Callback
          slider.vars.before(slider);

          // SYNC:
          if (slider.syncExists && !fromNav) { methods.sync("animate"); }

          // CONTROLNAV
          if (slider.vars.controlNav) { methods.controlNav.active(); }

          // !CAROUSEL:
          // CANDIDATE: slide active class (for add/remove slide)
          if (!carousel) { slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide'); }

          // INFINITE LOOP:
          // CANDIDATE: atEnd
          slider.atEnd = target === 0 || target === slider.last;

          // DIRECTIONNAV:
          if (slider.vars.directionNav) { methods.directionNav.update(); }

          if (target === slider.last) {
            // API: end() of cycle Callback
            slider.vars.end(slider);
            // SLIDESHOW && !INFINITE LOOP:
            if (!slider.vars.animationLoop) { slider.pause(); }
          }

          // SLIDE:
          if (!fade) {
            var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
                margin, slideString, calcNext;

            // INFINITE LOOP / REVERSE:
            if (carousel) {
              margin = slider.vars.itemMargin;
              calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
              slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
            } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") {
              slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
            } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") {
              slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
            } else {
              slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
            }
            slider.setProps(slideString, "", slider.vars.animationSpeed);
            if (slider.transitions) {
              if (!slider.vars.animationLoop || !slider.atEnd) {
                slider.animating = false;
                slider.currentSlide = slider.animatingTo;
              }

              // Unbind previous transitionEnd events and re-bind new transitionEnd event
              slider.container.unbind("webkitTransitionEnd transitionend");
              slider.container.bind("webkitTransitionEnd transitionend", function() {
                clearTimeout(slider.ensureAnimationEnd);
                slider.wrapup(dimension);
              });

              // Insurance for the ever-so-fickle transitionEnd event
              clearTimeout(slider.ensureAnimationEnd);
              slider.ensureAnimationEnd = setTimeout(function() {
                slider.wrapup(dimension);
              }, slider.vars.animationSpeed + 100);

            } else {
              slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function(){
                slider.wrapup(dimension);
              });
            }
          } else { // FADE:
            if (!touch) {
              slider.slides.eq(slider.currentSlide).css({"zIndex": 1}).animate({"opacity": 0}, slider.vars.animationSpeed, slider.vars.easing);
              slider.slides.eq(target).css({"zIndex": 2}).animate({"opacity": 1}, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);
            } else {
              slider.slides.eq(slider.currentSlide).css({ "opacity": 0, "zIndex": 1 });
              slider.slides.eq(target).css({ "opacity": 1, "zIndex": 2 });
              slider.wrapup(dimension);
            }
          }
          // SMOOTH HEIGHT:
          if (slider.vars.smoothHeight) { methods.smoothHeight(slider.vars.animationSpeed); }
        }
      };
      slider.wrapup = function(dimension) {
        // SLIDE:
        if (!fade && !carousel) {
          if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) {
            slider.setProps(dimension, "jumpEnd");
          } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) {
            slider.setProps(dimension, "jumpStart");
          }
        }
        slider.animating = false;
        slider.currentSlide = slider.animatingTo;
        // API: after() animation Callback
        slider.vars.after(slider);
      };

      // SLIDESHOW:
      slider.animateSlides = function() {
        if (!slider.animating && focused ) { slider.flexAnimate(slider.getTarget("next")); }
      };
      // SLIDESHOW:
      slider.pause = function() {
        clearInterval(slider.animatedSlides);
        slider.animatedSlides = null;
        slider.playing = false;
        // PAUSEPLAY:
        if (slider.vars.pausePlay) { methods.pausePlay.update("play"); }
        // SYNC:
        if (slider.syncExists) { methods.sync("pause"); }
      };
      // SLIDESHOW:
      slider.play = function() {
        if (slider.playing) { clearInterval(slider.animatedSlides); }
        slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
        slider.started = slider.playing = true;
        // PAUSEPLAY:
        if (slider.vars.pausePlay) { methods.pausePlay.update("pause"); }
        // SYNC:
        if (slider.syncExists) { methods.sync("play"); }
      };
      // STOP:
      slider.stop = function () {
        slider.pause();
        slider.stopped = true;
      };
      slider.canAdvance = function(target, fromNav) {
        // ASNAV:
        var last = (asNav) ? slider.pagingCount - 1 : slider.last;
        return (fromNav) ? true :
               (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true :
               (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false :
               (target === slider.currentSlide && !asNav) ? false :
               (slider.vars.animationLoop) ? true :
               (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false :
               (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false :
               true;
      };
      slider.getTarget = function(dir) {
        slider.direction = dir;
        if (dir === "next") {
          return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
        } else {
          return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
        }
      };

      // SLIDE:
      slider.setProps = function(pos, special, dur) {
        var target = (function() {
          var posCheck = (pos) ? pos : ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo,
              posCalc = (function() {
                if (carousel) {
                  return (special === "setTouch") ? pos :
                         (reverse && slider.animatingTo === slider.last) ? 0 :
                         (reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                         (slider.animatingTo === slider.last) ? slider.limit : posCheck;
                } else {
                  switch (special) {
                    case "setTotal": return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                    case "setTouch": return (reverse) ? pos : pos;
                    case "jumpEnd": return (reverse) ? pos : slider.count * pos;
                    case "jumpStart": return (reverse) ? slider.count * pos : pos;
                    default: return pos;
                  }
                }
              }());

              return (posCalc * ((slider.vars.rtl)?1:-1)) + "px";
            }());

        if (slider.transitions) {
          if (slider.isFirefox) {
            target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + (parseInt(target)+'px') + ",0,0)";
          } else {
            target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + ((slider.vars.rtl?-1:1)*parseInt(target)+'px') + ",0,0)";
          }
          dur = (dur !== undefined) ? (dur/1000) + "s" : "0s";
          slider.container.css("-" + slider.pfx + "-transition-duration", dur);
           slider.container.css("transition-duration", dur);
        }

        slider.args[slider.prop] = target;
        if (slider.transitions || dur === undefined) { slider.container.css(slider.args); }

        slider.container.css('transform',target);
      };

      slider.setup = function(type) {
        // SLIDE:
        if (!fade) {
          var sliderOffset, arr;

          if (type === "init") {
            slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({"overflow": "hidden", "position": "relative"}).appendTo(slider).append(slider.container);
            // INFINITE LOOP:
            slider.cloneCount = 0;
            slider.cloneOffset = 0;
            // REVERSE:
            if (reverse) {
              arr = $.makeArray(slider.slides).reverse();
              slider.slides = $(arr);
              slider.container.empty().append(slider.slides);
            }
          }
          // INFINITE LOOP && !CAROUSEL:
          if (slider.vars.animationLoop && !carousel) {
            slider.cloneCount = 2;
            slider.cloneOffset = 1;
            // clear out old clones
            if (type !== "init") { slider.container.find('.clone').remove(); }
            slider.container.append(methods.uniqueID(slider.slides.first().clone().addClass('clone')).attr('aria-hidden', 'true'))
                            .prepend(methods.uniqueID(slider.slides.last().clone().addClass('clone')).attr('aria-hidden', 'true'));
          }
          slider.newSlides = $(slider.vars.selector, slider);

          sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
          // VERTICAL:
          if (vertical) {
            slider.container.height((slider.newSlides.height() + 5) * slider.count + "px").css("position", "absolute").width("100%");
            setTimeout(function(){
              slider.newSlides.css({"display": "block"});
              slider.doMath();

              if ($('#slider')) {
                var sliderHeight = $('#slider img').height();
                slider.viewport.height(sliderHeight);
              } else {
                slider.viewport.height(slider.h);
              }
              slider.setProps(sliderOffset * slider.h, "init");
            }, (type === "init") ? 100 : 0);
          } else {
            slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
            slider.setProps(sliderOffset * slider.computedW, "init");
            setTimeout(function(){
              slider.doMath();
            if(slider.vars.rtl){
              if (slider.isFirefox) {
                slider.newSlides.css({"width": slider.computedW, "marginRight" : slider.computedM, "float": "right", "display": "block"});
              } else {
                slider.newSlides.css({"width": slider.computedW, "marginRight" : slider.computedM, "float": "left", "display": "block"});
              }

             }
              else{
                slider.newSlides.css({"width": slider.computedW, "marginRight" : slider.computedM, "float": "left", "display": "block"});
              }
              // SMOOTH HEIGHT:
              if (slider.vars.smoothHeight) { methods.smoothHeight(); }
            }, (type === "init") ? 100 : 0);
          }
        } else { // FADE:
          if(slider.vars.rtl){
            slider.slides.css({"width": "100%", "float": 'right', "marginLeft": "-100%", "position": "relative"});
          }
          else{
            slider.slides.css({"width": "100%", "float": 'left', "marginRight": "-100%", "position": "relative"});
          }
          if (type === "init") {
            if (!touch) {
              //slider.slides.eq(slider.currentSlide).fadeIn(slider.vars.animationSpeed, slider.vars.easing);
              if (slider.vars.fadeFirstSlide == false) {
                slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).css({"opacity": 1});
              } else {
                slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).animate({"opacity": 1},slider.vars.animationSpeed,slider.vars.easing);
              }
            } else {
              slider.slides.css({ "opacity": 0, "display": "block", "webkitTransition": "opacity " + slider.vars.animationSpeed / 1000 + "s ease", "zIndex": 1 }).eq(slider.currentSlide).css({ "opacity": 1, "zIndex": 2});
            }
          }
          // SMOOTH HEIGHT:
          if (slider.vars.smoothHeight) { methods.smoothHeight(); }
        }
        // !CAROUSEL:
        // CANDIDATE: active slide
        if (!carousel) { slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide"); }

        //FlexSlider: init() Callback
        slider.vars.init(slider);
      };

      slider.doMath = function() {
        var slide = slider.slides.first(),
            slideMargin = slider.vars.itemMargin,
            minItems = slider.vars.minItems,
            maxItems = slider.vars.maxItems;

        slider.w = (slider.viewport===undefined) ? slider.width() : slider.viewport.width();
        if (slider.isFirefox) { slider.w = slider.width(); }
        slider.h = (vertical) ? slider.height() : slide.height();
        slider.boxPadding = slide.outerWidth() - slide.width();

        // CAROUSEL:
        if (carousel) {
          slider.itemT = slider.vars.itemWidth + slideMargin;
          slider.itemM = slideMargin;
          slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
          slider.maxW = (maxItems) ? (maxItems * slider.itemT) - slideMargin : slider.w;
          // slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * (minItems - 1)))/minItems :
          //                (slider.maxW < slider.w) ? (slider.w - (slideMargin * (maxItems - 1)))/maxItems :
          //                (slider.vars.itemWidth > slider.w) ? slider.w : slider.vars.itemWidth;
          //
          // slider.visible = Math.floor(slider.w/(slider.itemW));

          if (vertical) {
            slider.itemW = slider.w;
          } else {
            slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * (minItems - 1)))/minItems :
                           (slider.maxW < slider.w) ? (slider.w - (slideMargin * (maxItems - 1)))/maxItems :
                           (slider.vars.itemWidth > slider.w) ? slider.w : slider.vars.itemWidth;
          }

          slider.visible = (vertical) ? Math.floor(slider.h/(slider.itemW)) : Math.floor(slider.w/(slider.itemW));

          slider.move = (slider.vars.move > 0 && slider.vars.move < slider.visible ) ? slider.vars.move : slider.visible;
          slider.pagingCount = Math.ceil(((slider.count - slider.visible)/slider.move) + 1);
          slider.last =  slider.pagingCount - 1;
          slider.limit = (slider.pagingCount === 1) ? 0 :
                         (slider.vars.itemWidth > slider.w) ? (slider.itemW * (slider.count - 1)) + (slideMargin * (slider.count - 1)) : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
        } else {
          slider.itemW = slider.w;
          slider.itemM = slideMargin;
          slider.pagingCount = slider.count;
          slider.last = slider.count - 1;
        }
        slider.computedW = slider.itemW - slider.boxPadding;
        slider.computedM = slider.itemM;
      };

      slider.update = function(pos, action) {
        slider.doMath();

        // update currentSlide and slider.animatingTo if necessary
        if (!carousel) {
          if (pos < slider.currentSlide) {
            slider.currentSlide += 1;
          } else if (pos <= slider.currentSlide && pos !== 0) {
            slider.currentSlide -= 1;
          }
          slider.animatingTo = slider.currentSlide;
        }

        // update controlNav
        if (slider.vars.controlNav && !slider.manualControls) {
          if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
            methods.controlNav.update("add");
          } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
            if (carousel && slider.currentSlide > slider.last) {
              slider.currentSlide -= 1;
              slider.animatingTo -= 1;
            }
            methods.controlNav.update("remove", slider.last);
          }
        }
        // update directionNav
        if (slider.vars.directionNav) { methods.directionNav.update(); }

      };

      slider.addSlide = function(obj, pos) {
        var $obj = $(obj);

        slider.count += 1;
        slider.last = slider.count - 1;

        // append new slide
        if (vertical && reverse) {
          (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
        } else {
          (pos !== undefined) ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
        }

        // update currentSlide, animatingTo, controlNav, and directionNav
        slider.update(pos, "add");

        // update slider.slides
        slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
        // re-setup the slider to accomdate new slide
        slider.setup();

        //FlexSlider: added() Callback
        slider.vars.added(slider);
      };
      slider.removeSlide = function(obj) {
        var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;

        // update count
        slider.count -= 1;
        slider.last = slider.count - 1;

        // remove slide
        if (isNaN(obj)) {
          $(obj, slider.slides).remove();
        } else {
          (vertical && reverse) ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
        }

        // update currentSlide, animatingTo, controlNav, and directionNav
        slider.doMath();
        slider.update(pos, "remove");

        // update slider.slides
        slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
        // re-setup the slider to accomdate new slide
        slider.setup();

        // FlexSlider: removed() Callback
        slider.vars.removed(slider);
      };

      //FlexSlider: Initialize
      methods.init();
    };

    // Ensure the slider isn't focussed if the window loses focus.
    $( window ).blur( function ( e ) {
      focused = false;
    }).focus( function ( e ) {
      focused = true;
    });

    //FlexSlider: Default Settings
    $.flexslider.defaults = {
      namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
      selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
      animation: "fade",              //String: Select your animation type, "fade" or "slide"
      easing: "swing",                //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
      direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
      reverse: false,                 //{NEW} Boolean: Reverse the animation direction
      animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
      smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
      startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
      slideshow: true,                //Boolean: Animate slider automatically
      slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
      animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
      initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
      randomize: false,               //Boolean: Randomize slide order
      fadeFirstSlide: true,           //Boolean: Fade in the first slide when animation type is "fade"
      thumbCaptions: false,           //Boolean: Whether or not to put captions on thumbnails when using the "thumbnails" controlNav.

      // Usability features
      pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
      pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
      pauseInvisible: true,       //{NEW} Boolean: Pause the slideshow when tab is invisible, resume when visible. Provides better UX, lower CPU usage.
      useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
      touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
      video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

      // Primary Controls
      controlNav: true,               //Boolean: Create navigation for paging control of each slide? Note: Leave true for manualControls usage
      directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
      prevText: "Previous",           //String: Set the text for the "previous" directionNav item
      nextText: "Next",               //String: Set the text for the "next" directionNav item

      // Secondary Navigation
      keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
      multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
      mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
      pausePlay: false,               //Boolean: Create pause/play dynamic element
      pauseText: "Pause",             //String: Set the text for the "pause" pausePlay item
      playText: "Play",               //String: Set the text for the "play" pausePlay item

      // Special properties
      controlsContainer: "",          //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
      manualControls: "",             //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
      customDirectionNav: "",         //{NEW} jQuery Object/Selector: Custom prev / next button. Must be two jQuery elements. In order to make the events work they have to have the classes "prev" and "next" (plus namespace)
      sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
      asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

      // Carousel Options
      itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
      itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
      minItems: 1,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
      maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
      move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
      allowOneSlide: true,           //{NEW} Boolean: Whether or not to allow a slider comprised of a single slide

      // Browser Specific
      isFirefox: false,             // {NEW} Boolean: Set to true when Firefox is the browser used.

      // Callback API
      start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
      before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
      after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
      end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
      added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
      removed: function(){},           //{NEW} Callback: function(slider) - Fires after a slide is removed
      init: function() {},             //{NEW} Callback: function(slider) - Fires after the slider is initially setup
      rtl: false             //{NEW} Boolean: Whether or not to enable RTL mode
    };

    //FlexSlider: Plugin Function
    $.fn.flexslider = function(options) {
      if (options === undefined) { options = {}; }

      if (typeof options === "object") {
        return this.each(function() {
          var $this = $(this),
              selector = (options.selector) ? options.selector : ".slides > li",
              $slides = $this.find(selector);

        if ( ( $slides.length === 1 && options.allowOneSlide === false ) || $slides.length === 0 ) {
            $slides.fadeIn(400);
            if (options.start) { options.start($this); }
          } else if ($this.data('flexslider') === undefined) {
            new $.flexslider(this, options);
          }
        });
      } else {
        // Helper strings to quickly perform functions on the slider
        var $slider = $(this).data('flexslider');
        switch (options) {
          case "play": $slider.play(); break;
          case "pause": $slider.pause(); break;
          case "stop": $slider.stop(); break;
          case "next": $slider.flexAnimate($slider.getTarget("next"), true); break;
          case "prev":
          case "previous": $slider.flexAnimate($slider.getTarget("prev"), true); break;
          default: if (typeof options === "number") { $slider.flexAnimate(options, true); }
        }
      }
    };
  })(jQuery);


})();
(function vendorWow() {
  /* wow js */
  (function(){var t,e,n,i,o,r=function(t,e){return function(){return t.apply(e,arguments)}},s=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,i;for(n in e)i=e[n],null==t[n]&&(t[n]=i);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i,o,r;for(r=this.keys,e=i=0,o=r.length;o>i;e=++i)if(n=r[e],n===t)return this.values[e]},t.prototype.set=function(t,e){var n,i,o,r,s;for(s=this.keys,n=o=0,r=s.length;r>o;n=++o)if(i=s[n],i===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),i=this.getComputedStyle||function(t){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),o.test(e)&&e.replace(o,function(t,e){return e.toUpperCase()}),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},o=/(\-([a-z]){1})/g,this.WOW=function(){function o(t){null==t&&(t={}),this.scrollCallback=r(this.scrollCallback,this),this.scrollHandler=r(this.scrollHandler,this),this.start=r(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),this.animationNameCache=new n}return o.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},o.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},o.prototype.start=function(){var e,n,i,o;if(this.stopped=!1,this.boxes=function(){var t,n,i,o;for(i=this.element.querySelectorAll("."+this.config.boxClass),o=[],t=0,n=i.length;n>t;t++)e=i[t],o.push(e);return o}.call(this),this.all=function(){var t,n,i,o;for(i=this.boxes,o=[],t=0,n=i.length;n>t;t++)e=i[t],o.push(e);return o}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(o=this.boxes,n=0,i=o.length;i>n;n++)e=o[n],this.applyStyle(e,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new t(function(t){return function(e){var n,i,o,r,s;for(s=[],o=0,r=e.length;r>o;o++)i=e[o],s.push(function(){var t,e,o,r;for(o=i.addedNodes||[],r=[],t=0,e=o.length;e>t;t++)n=o[t],r.push(this.doSync(n));return r}.call(t));return s}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},o.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},o.prototype.sync=function(){return t.notSupported?this.doSync(this.element):void 0},o.prototype.doSync=function(t){var e,n,i,o,r;if(null==t&&(t=this.element),1===t.nodeType){for(t=t.parentNode||t,o=t.querySelectorAll("."+this.config.boxClass),r=[],n=0,i=o.length;i>n;n++)e=o[n],s.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},o.prototype.show=function(t){return this.applyStyle(t),t.className=""+t.className+" "+this.config.animateClass,null!=this.config.callback?this.config.callback(t):void 0},o.prototype.applyStyle=function(t,e){var n,i,o;return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),this.animate(function(r){return function(){return r.customStyle(t,e,i,n,o)}}(this))},o.prototype.animate=function(){return"requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()}}(),o.prototype.resetStyle=function(){var t,e,n,i,o;for(i=this.boxes,o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(t.style.visibility="visible");return o},o.prototype.customStyle=function(t,e,n,i,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},o.prototype.vendors=["moz","webkit"],o.prototype.vendorSet=function(t,e){var n,i,o,r;r=[];for(n in e)i=e[n],t[""+n]=i,r.push(function(){var e,r,s,l;for(s=this.vendors,l=[],e=0,r=s.length;r>e;e++)o=s[e],l.push(t[""+o+n.charAt(0).toUpperCase()+n.substr(1)]=i);return l}.call(this));return r},o.prototype.vendorCSS=function(t,e){var n,o,r,s,l,a;for(o=i(t),n=o.getPropertyCSSValue(e),a=this.vendors,s=0,l=a.length;l>s;s++)r=a[s],n=n||o.getPropertyCSSValue("-"+r+"-"+e);return n},o.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=i(t).getPropertyValue("animation-name")}return"none"===e?"":e},o.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},o.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},o.prototype.scrollHandler=function(){return this.scrolled=!0},o.prototype.scrollCallback=function(){var t;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var e,n,i,o;for(i=this.boxes,o=[],e=0,n=i.length;n>e;e++)t=i[e],t&&(this.isVisible(t)?this.show(t):o.push(t));return o}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},o.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},o.prototype.isVisible=function(t){var e,n,i,o,r;return n=t.getAttribute("data-wow-offset")||this.config.offset,r=window.pageYOffset,o=r+Math.min(this.element.clientHeight,this.util().innerHeight())-n,i=this.offsetTop(t),e=i+t.clientHeight,o>=i&&e>=r},o.prototype.util=function(){return null!=this._util?this._util:this._util=new e},o.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},o}()}).call(this);

})();
(function vendorThrottle() {
  /*
   * jQuery throttle / debounce - v1.1 - 3/7/2010
   * http://benalman.com/projects/jquery-throttle-debounce-plugin/
   *
   * Copyright (c) 2010 "Cowboy" Ben Alman
   * Dual licensed under the MIT and GPL licenses.
   * http://benalman.com/about/license/
   */
  (function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

})();
(function vendorLodash() {
  // lodash.core.min.js

  /**
   * @license
   * lodash 4.5.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
   * Build: `lodash core -o ./dist/lodash.core.js`
   */
  ;(function(){function n(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function t(n,t,r){for(var e=-1,u=n.length;++e<u;){var o=n[e],i=t(o);if(null!=i&&(c===an?i===i:r(i,c)))var c=i,f=o}return f}function r(n,t,r){var e;return r(n,function(n,r,u){return t(n,r,u)?(e=n,false):void 0}),e}function e(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function u(n,t){return O(t,function(t){return n[t]})}function o(n){return n&&n.Object===Object?n:null}function i(n){return vn[n];
  }function c(n){var t=false;if(null!=n&&typeof n.toString!="function")try{t=!!(n+"")}catch(r){}return t}function f(n,t){return n=typeof n=="number"||hn.test(n)?+n:-1,n>-1&&0==n%1&&(null==t?9007199254740991:t)>n}function a(n){if(Y(n)&&!Pn(n)){if(n instanceof l)return n;if(En.call(n,"__wrapped__")){var t=new l(n.__wrapped__,n.__chain__);return t.__actions__=N(n.__actions__),t}}return new l(n)}function l(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t}function p(n,t,r,e){var u;return(u=n===an)||(u=xn[r],
  u=(n===u||n!==n&&u!==u)&&!En.call(e,r)),u?t:n}function s(n){return X(n)?Fn(n):{}}function h(n,t,r){if(typeof n!="function")throw new TypeError("Expected a function");return setTimeout(function(){n.apply(an,r)},t)}function v(n,t){var r=true;return $n(n,function(n,e,u){return r=!!t(n,e,u)}),r}function y(n,t){var r=[];return $n(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function _(t,r,e,u){u||(u=[]);for(var o=-1,i=t.length;++o<i;){var c=t[o];r>0&&Y(c)&&L(c)&&(e||Pn(c)||K(c))?r>1?_(c,r-1,e,u):n(u,c):e||(u[u.length]=c);
  }return u}function g(n,t){return n&&qn(n,t,en)}function b(n,t){return y(t,function(t){return Q(n[t])})}function j(n,t,r,e,u){return n===t?true:null==n||null==t||!X(n)&&!Y(t)?n!==n&&t!==t:m(n,t,j,r,e,u)}function m(n,t,r,e,u,o){var i=Pn(n),f=Pn(t),a="[object Array]",l="[object Array]";i||(a=kn.call(n),"[object Arguments]"==a&&(a="[object Object]")),f||(l=kn.call(t),"[object Arguments]"==l&&(l="[object Object]"));var p="[object Object]"==a&&!c(n),f="[object Object]"==l&&!c(t);return!(l=a==l)||i||p?2&u||(a=p&&En.call(n,"__wrapped__"),
  f=f&&En.call(t,"__wrapped__"),!a&&!f)?l?(o||(o=[]),(a=J(o,function(t){return t[0]===n}))&&a[1]?a[1]==t:(o.push([n,t]),t=(i?I:q)(n,t,r,e,u,o),o.pop(),t)):false:r(a?n.value():n,f?t.value():t,e,u,o):$(n,t,a)}function d(n){var t=typeof n;return"function"==t?n:null==n?cn:("object"==t?x:A)(n)}function w(n){n=null==n?n:Object(n);var t,r=[];for(t in n)r.push(t);return r}function O(n,t){var r=-1,e=L(n)?Array(n.length):[];return $n(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function x(n){var t=en(n);return function(r){
  var e=t.length;if(null==r)return!e;for(r=Object(r);e--;){var u=t[e];if(!(u in r&&j(n[u],r[u],an,3)))return false}return true}}function E(n,t){return n=Object(n),P(t,function(t,r){return r in n&&(t[r]=n[r]),t},{})}function A(n){return function(t){return null==t?an:t[n]}}function k(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Array(u);++e<u;)r[e]=n[e+t];return r}function N(n){return k(n,0,n.length)}function S(n,t){var r;return $n(n,function(n,e,u){return r=t(n,e,u),
  !r}),!!r}function T(t,r){return P(r,function(t,r){return r.func.apply(r.thisArg,n([t],r.args))},t)}function F(n,t,r,e){r||(r={});for(var u=-1,o=t.length;++u<o;){var i=t[u],c=e?e(r[i],n[i],i,r,n):n[i],f=r,a=f[i];En.call(f,i)&&(a===c||a!==a&&c!==c)&&(c!==an||i in f)||(f[i]=c)}return r}function R(n){return V(function(t,r){var e=-1,u=r.length,o=u>1?r[u-1]:an,o=typeof o=="function"?(u--,o):an;for(t=Object(t);++e<u;){var i=r[e];i&&n(t,i,e,o)}return t})}function B(n){return function(){var t=arguments,r=s(n.prototype),t=n.apply(r,t);
  return X(t)?t:r}}function D(n,t,r){function e(){for(var o=-1,i=arguments.length,c=-1,f=r.length,a=Array(f+i),l=this&&this!==wn&&this instanceof e?u:n;++c<f;)a[c]=r[c];for(;i--;)a[c++]=arguments[++o];return l.apply(t,a)}if(typeof n!="function")throw new TypeError("Expected a function");var u=B(n);return e}function I(n,t,r,e,u,o){var i=-1,c=1&u,f=n.length,a=t.length;if(f!=a&&!(2&u&&a>f))return false;for(a=true;++i<f;){var l=n[i],p=t[i];if(void 0!==an){a=false;break}if(c){if(!S(t,function(n){return l===n||r(l,n,e,u,o);
  })){a=false;break}}else if(l!==p&&!r(l,p,e,u,o)){a=false;break}}return a}function $(n,t,r){switch(r){case"[object Boolean]":case"[object Date]":return+n==+t;case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object Number]":return n!=+n?t!=+t:n==+t;case"[object RegExp]":case"[object String]":return n==t+""}return false}function q(n,t,r,e,u,o){var i=2&u,c=en(n),f=c.length,a=en(t).length;if(f!=a&&!i)return false;for(var l=f;l--;){var p=c[l];if(!(i?p in t:En.call(t,p)))return false}for(a=true;++l<f;){
  var p=c[l],s=n[p],h=t[p];if(void 0!==an||s!==h&&!r(s,h,e,u,o)){a=false;break}i||(i="constructor"==p)}return a&&!i&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(a=false)),a}function z(n){var t=n?n.length:an;if(W(t)&&(Pn(n)||nn(n)||K(n))){n=String;for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);t=e}else t=null;return t}function C(n){var t=n&&n.constructor,t=Q(t)&&t.prototype||xn;return n===t}function G(n){
  return n?n[0]:an}function J(n,t){return r(n,d(t),$n)}function M(n,t){return $n(n,typeof t=="function"?t:cn)}function P(n,t,r){return e(n,d(t),r,3>arguments.length,$n)}function U(n,t){var r;if(typeof t!="function")throw new TypeError("Expected a function");return n=Un(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=an),r}}function V(n){var t;if(typeof n!="function")throw new TypeError("Expected a function");return t=In(t===an?n.length-1:Un(t),0),function(){for(var r=arguments,e=-1,u=In(r.length-t,0),o=Array(u);++e<u;)o[e]=r[t+e];
  for(u=Array(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function H(n,t){return n>t}function K(n){return Y(n)&&L(n)&&En.call(n,"callee")&&(!Rn.call(n,"callee")||"[object Arguments]"==kn.call(n))}function L(n){return null!=n&&!(typeof n=="function"&&Q(n))&&W(zn(n))}function Q(n){return n=X(n)?kn.call(n):"","[object Function]"==n||"[object GeneratorFunction]"==n}function W(n){return typeof n=="number"&&n>-1&&0==n%1&&9007199254740991>=n}function X(n){var t=typeof n;return!!n&&("object"==t||"function"==t);
  }function Y(n){return!!n&&typeof n=="object"}function Z(n){return typeof n=="number"||Y(n)&&"[object Number]"==kn.call(n)}function nn(n){return typeof n=="string"||!Pn(n)&&Y(n)&&"[object String]"==kn.call(n)}function tn(n,t){return t>n}function rn(n){return typeof n=="string"?n:null==n?"":n+""}function en(n){var t=C(n);if(!t&&!L(n))return Dn(Object(n));var r,e=z(n),u=!!e,e=e||[],o=e.length;for(r in n)!En.call(n,r)||u&&("length"==r||f(r,o))||t&&"constructor"==r||e.push(r);return e}function un(n){for(var t=-1,r=C(n),e=w(n),u=e.length,o=z(n),i=!!o,o=o||[],c=o.length;++t<u;){
  var a=e[t];i&&("length"==a||f(a,c))||"constructor"==a&&(r||!En.call(n,a))||o.push(a)}return o}function on(n){return n?u(n,en(n)):[]}function cn(n){return n}function fn(t,r,e){var u=en(r),o=b(r,u);null!=e||X(r)&&(o.length||!u.length)||(e=r,r=t,t=this,o=b(r,en(r)));var i=X(e)&&"chain"in e?e.chain:true,c=Q(t);return $n(o,function(e){var u=r[e];t[e]=u,c&&(t.prototype[e]=function(){var r=this.__chain__;if(i||r){var e=t(this.__wrapped__);return(e.__actions__=N(this.__actions__)).push({func:u,args:arguments,
  thisArg:t}),e.__chain__=r,e}return u.apply(t,n([this.value()],arguments))})}),t}var an,ln=1/0,pn=/[&<>"'`]/g,sn=RegExp(pn.source),hn=/^(?:0|[1-9]\d*)$/,vn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},yn={"function":true,object:true},_n=yn[typeof exports]&&exports&&!exports.nodeType?exports:an,gn=yn[typeof module]&&module&&!module.nodeType?module:an,bn=gn&&gn.exports===_n?_n:an,jn=o(yn[typeof self]&&self),mn=o(yn[typeof window]&&window),dn=o(yn[typeof this]&&this),wn=o(_n&&gn&&typeof global=="object"&&global)||mn!==(dn&&dn.window)&&mn||jn||dn||Function("return this")(),On=Array.prototype,xn=Object.prototype,En=xn.hasOwnProperty,An=0,kn=xn.toString,Nn=wn._,Sn=wn.Reflect,Tn=Sn?Sn.f:an,Fn=Object.create,Rn=xn.propertyIsEnumerable,Bn=wn.isFinite,Dn=Object.keys,In=Math.max,$n=function(n,t){
  return function(r,e){if(null==r)return r;if(!L(r))return n(r,e);for(var u=r.length,o=t?u:-1,i=Object(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}(g),qn=function(n){return function(t,r,e){var u=-1,o=Object(t);e=e(t);for(var i=e.length;i--;){var c=e[n?i:++u];if(false===r(o[c],c,o))break}return t}}();Tn&&!Rn.call({valueOf:1},"valueOf")&&(w=function(n){n=Tn(n);for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r});var zn=A("length"),Cn=V(function(t,r){return Pn(t)||(t=null==t?[]:[Object(t)]),_(r,1),
  n(N(t),on)}),Gn=V(function(n,t,r){return D(n,t,r)}),Jn=V(function(n,t){return h(n,1,t)}),Mn=V(function(n,t,r){return h(n,Vn(t)||0,r)}),Pn=Array.isArray,Un=Number,Vn=Number,Hn=R(function(n,t){F(t,en(t),n)}),Kn=R(function(n,t){F(t,un(t),n)}),Ln=R(function(n,t,r,e){F(t,un(t),n,e)}),Qn=V(function(n){return n.push(an,p),Ln.apply(an,n)}),Wn=V(function(n,t){return null==n?{}:E(n,_(t,1))}),Xn=d;l.prototype=s(a.prototype),l.prototype.constructor=l,a.assignIn=Kn,a.before=U,a.bind=Gn,a.chain=function(n){return n=a(n),
  n.__chain__=true,n},a.compact=function(n){return y(n,Boolean)},a.concat=Cn,a.create=function(n,t){var r=s(n);return t?Hn(r,t):r},a.defaults=Qn,a.defer=Jn,a.delay=Mn,a.filter=function(n,t){return y(n,d(t))},a.flatten=function(n){return n&&n.length?_(n,1):[]},a.flattenDeep=function(n){return n&&n.length?_(n,ln):[]},a.iteratee=Xn,a.keys=en,a.map=function(n,t){return O(n,d(t))},a.matches=function(n){return x(Hn({},n))},a.mixin=fn,a.negate=function(n){if(typeof n!="function")throw new TypeError("Expected a function");
  return function(){return!n.apply(this,arguments)}},a.once=function(n){return U(2,n)},a.pick=Wn,a.slice=function(n,t,r){var e=n?n.length:0;return r=r===an?e:+r,e?k(n,null==t?0:+t,r):[]},a.sortBy=function(n,t){var r=0;return t=d(t),O(O(n,function(n,e,u){return{c:n,b:r++,a:t(n,e,u)}}).sort(function(n,t){var r;n:{r=n.a;var e=t.a;if(r!==e){var u=null===r,o=r===an,i=r===r,c=null===e,f=e===an,a=e===e;if(r>e&&!c||!i||u&&!f&&a||o&&a){r=1;break n}if(e>r&&!u||!a||c&&!o&&i||f&&i){r=-1;break n}}r=0}return r||n.b-t.b;
  }),A("c"))},a.tap=function(n,t){return t(n),n},a.thru=function(n,t){return t(n)},a.toArray=function(n){return L(n)?n.length?N(n):[]:on(n)},a.values=on,a.extend=Kn,fn(a,a),a.clone=function(n){return X(n)?Pn(n)?N(n):F(n,en(n)):n},a.escape=function(n){return(n=rn(n))&&sn.test(n)?n.replace(pn,i):n},a.every=function(n,t,r){return t=r?an:t,v(n,d(t))},a.find=J,a.forEach=M,a.has=function(n,t){return null!=n&&En.call(n,t)},a.head=G,a.identity=cn,a.indexOf=function(n,t,r){var e=n?n.length:0;r=typeof r=="number"?0>r?In(e+r,0):r:0,
  r=(r||0)-1;for(var u=t===t;++r<e;){var o=n[r];if(u?o===t:o!==o)return r}return-1},a.isArguments=K,a.isArray=Pn,a.isBoolean=function(n){return true===n||false===n||Y(n)&&"[object Boolean]"==kn.call(n)},a.isDate=function(n){return Y(n)&&"[object Date]"==kn.call(n)},a.isEmpty=function(n){if(L(n)&&(Pn(n)||nn(n)||Q(n.splice)||K(n)))return!n.length;for(var t in n)if(En.call(n,t))return false;return true},a.isEqual=function(n,t){return j(n,t)},a.isFinite=function(n){return typeof n=="number"&&Bn(n)},a.isFunction=Q,a.isNaN=function(n){
  return Z(n)&&n!=+n},a.isNull=function(n){return null===n},a.isNumber=Z,a.isObject=X,a.isRegExp=function(n){return X(n)&&"[object RegExp]"==kn.call(n)},a.isString=nn,a.isUndefined=function(n){return n===an},a.last=function(n){var t=n?n.length:0;return t?n[t-1]:an},a.max=function(n){return n&&n.length?t(n,cn,H):an},a.min=function(n){return n&&n.length?t(n,cn,tn):an},a.noConflict=function(){return wn._===this&&(wn._=Nn),this},a.noop=function(){},a.reduce=P,a.result=function(n,t,r){return t=null==n?an:n[t],
  t===an&&(t=r),Q(t)?t.call(n):t},a.size=function(n){return null==n?0:(n=L(n)?n:en(n),n.length)},a.some=function(n,t,r){return t=r?an:t,S(n,d(t))},a.uniqueId=function(n){var t=++An;return rn(n)+t},a.each=M,a.first=G,fn(a,function(){var n={};return g(a,function(t,r){En.call(a.prototype,r)||(n[r]=t)}),n}(),{chain:false}),a.VERSION="4.5.1",$n("pop join replace reverse split push shift sort splice unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?String.prototype:On)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|join|replace|shift)$/.test(n);
  a.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),a.prototype.toJSON=a.prototype.valueOf=a.prototype.value=function(){return T(this.__wrapped__,this.__actions__)},(mn||jn||{})._=a,typeof define=="function"&&typeof define.amd=="object"&&define.amd? define(function(){return a}):_n&&gn?(bn&&((gn.exports=a)._=a),_n._=a):wn._=a}).call(this);

})();



  /*!
  handlebars v1.3.0

  Copyright (C) 2011 by Yehuda Katz

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.

  @license
  */
  var Handlebars=function(){var e=function(){"use strict";function t(e){this.string=e}var e;t.prototype.toString=function(){return""+this.string};e=t;return e}();var t=function(e){"use strict";function o(e){return r[e]||"&"}function u(e,t){for(var n in t){if(Object.prototype.hasOwnProperty.call(t,n)){e[n]=t[n]}}}function c(e){if(e instanceof n){return e.toString()}else if(!e&&e!==0){return""}e=""+e;if(!s.test(e)){return e}return e.replace(i,o)}function h(e){if(!e&&e!==0){return true}else if(l(e)&&e.length===0){return true}else{return false}}var t={};var n=e;var r={"&":"&","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};var i=/[&<>"'`]/g;var s=/[&<>"'`]/;t.extend=u;var a=Object.prototype.toString;t.toString=a;var f=function(e){return typeof e==="function"};if(f(/x/)){f=function(e){return typeof e==="function"&&a.call(e)==="[object Function]"}}var f;t.isFunction=f;var l=Array.isArray||function(e){return e&&typeof e==="object"?a.call(e)==="[object Array]":false};t.isArray=l;t.escapeExpression=c;t.isEmpty=h;return t}(e);var n=function(){"use strict";function n(e,n){var r;if(n&&n.firstLine){r=n.firstLine;e+=" - "+r+":"+n.firstColumn}var i=Error.prototype.constructor.call(this,e);for(var s=0;s<t.length;s++){this[t[s]]=i[t[s]]}if(r){this.lineNumber=r;this.column=n.firstColumn}}var e;var t=["description","fileName","lineNumber","message","name","number","stack"];n.prototype=new Error;e=n;return e}();var r=function(e,t){"use strict";function h(e,t){this.helpers=e||{};this.partials=t||{};p(this)}function p(e){e.registerHelper("helperMissing",function(e){if(arguments.length===2){return undefined}else{throw new i("Missing helper: '"+e+"'")}});e.registerHelper("blockHelperMissing",function(t,n){var r=n.inverse||function(){},i=n.fn;if(f(t)){t=t.call(this)}if(t===true){return i(this)}else if(t===false||t==null){return r(this)}else if(a(t)){if(t.length>0){return e.helpers.each(t,n)}else{return r(this)}}else{return i(t)}});e.registerHelper("each",function(e,t){var n=t.fn,r=t.inverse;var i=0,s="",o;if(f(e)){e=e.call(this)}if(t.data){o=m(t.data)}if(e&&typeof e==="object"){if(a(e)){for(var u=e.length;i<u;i++){if(o){o.index=i;o.first=i===0;o.last=i===e.length-1}s=s+n(e[i],{data:o})}}else{for(var l in e){if(e.hasOwnProperty(l)){if(o){o.key=l;o.index=i;o.first=i===0}s=s+n(e[l],{data:o});i++}}}}if(i===0){s=r(this)}return s});e.registerHelper("if",function(e,t){if(f(e)){e=e.call(this)}if(!t.hash.includeZero&&!e||r.isEmpty(e)){return t.inverse(this)}else{return t.fn(this)}});e.registerHelper("unless",function(t,n){return e.helpers["if"].call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})});e.registerHelper("with",function(e,t){if(f(e)){e=e.call(this)}if(!r.isEmpty(e))return t.fn(e)});e.registerHelper("log",function(t,n){var r=n.data&&n.data.level!=null?parseInt(n.data.level,10):1;e.log(r,t)})}function v(e,t){d.log(e,t)}var n={};var r=e;var i=t;var s="1.3.0";n.VERSION=s;var o=4;n.COMPILER_REVISION=o;var u={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};n.REVISION_CHANGES=u;var a=r.isArray,f=r.isFunction,l=r.toString,c="[object Object]";n.HandlebarsEnvironment=h;h.prototype={constructor:h,logger:d,log:v,registerHelper:function(e,t,n){if(l.call(e)===c){if(n||t){throw new i("Arg not supported with multiple helpers")}r.extend(this.helpers,e)}else{if(n){t.not=n}this.helpers[e]=t}},registerPartial:function(e,t){if(l.call(e)===c){r.extend(this.partials,e)}else{this.partials[e]=t}}};var d={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,t){if(d.level<=e){var n=d.methodMap[e];if(typeof console!=="undefined"&&console[n]){console[n].call(console,t)}}}};n.logger=d;n.log=v;var m=function(e){var t={};r.extend(t,e);return t};n.createFrame=m;return n}(t,n);var i=function(e,t,n){"use strict";function a(e){var t=e&&e[0]||1,n=o;if(t!==n){if(t<n){var r=u[n],i=u[t];throw new s("Template was precompiled with an older version of Handlebars than the current runtime. "+"Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+i+").")}else{throw new s("Template was precompiled with a newer version of Handlebars than the current runtime. "+"Please update your runtime to a newer version ("+e[1]+").")}}}function f(e,t){if(!t){throw new s("No environment passed to template")}var n=function(e,n,r,i,o,u){var a=t.VM.invokePartial.apply(this,arguments);if(a!=null){return a}if(t.compile){var f={helpers:i,partials:o,data:u};o[n]=t.compile(e,{data:u!==undefined},t);return o[n](r,f)}else{throw new s("The partial "+n+" could not be compiled when running in runtime-only mode")}};var r={escapeExpression:i.escapeExpression,invokePartial:n,programs:[],program:function(e,t,n){var r=this.programs[e];if(n){r=c(e,t,n)}else if(!r){r=this.programs[e]=c(e,t)}return r},merge:function(e,t){var n=e||t;if(e&&t&&e!==t){n={};i.extend(n,t);i.extend(n,e)}return n},programWithDepth:t.VM.programWithDepth,noop:t.VM.noop,compilerInfo:null};return function(n,i){i=i||{};var s=i.partial?i:t,o,u;if(!i.partial){o=i.helpers;u=i.partials}var a=e.call(r,s,n,o,u,i.data);if(!i.partial){t.VM.checkRevision(r.compilerInfo)}return a}}function l(e,t,n){var r=Array.prototype.slice.call(arguments,3);var i=function(e,i){i=i||{};return t.apply(this,[e,i.data||n].concat(r))};i.program=e;i.depth=r.length;return i}function c(e,t,n){var r=function(e,r){r=r||{};return t(e,r.data||n)};r.program=e;r.depth=0;return r}function h(e,t,n,r,i,o){var u={partial:true,helpers:r,partials:i,data:o};if(e===undefined){throw new s("The partial "+t+" could not be found")}else if(e instanceof Function){return e(n,u)}}function p(){return""}var r={};var i=e;var s=t;var o=n.COMPILER_REVISION;var u=n.REVISION_CHANGES;r.checkRevision=a;r.template=f;r.programWithDepth=l;r.program=c;r.invokePartial=h;r.noop=p;return r}(t,n,r);var s=function(e,t,n,r,i){"use strict";var s;var o=e;var u=t;var a=n;var f=r;var l=i;var c=function(){var e=new o.HandlebarsEnvironment;f.extend(e,o);e.SafeString=u;e.Exception=a;e.Utils=f;e.VM=l;e.template=function(t){return l.template(t,e)};return e};var h=c();h.create=c;s=h;return s}(r,e,n,t,i);var o=function(e){"use strict";function r(e){e=e||{};this.firstLine=e.first_line;this.firstColumn=e.first_column;this.lastColumn=e.last_column;this.lastLine=e.last_line}var t;var n=e;var i={ProgramNode:function(e,t,n,s){var o,u;if(arguments.length===3){s=n;n=null}else if(arguments.length===2){s=t;t=null}r.call(this,s);this.type="program";this.statements=e;this.strip={};if(n){u=n[0];if(u){o={first_line:u.firstLine,last_line:u.lastLine,last_column:u.lastColumn,first_column:u.firstColumn};this.inverse=new i.ProgramNode(n,t,o)}else{this.inverse=new i.ProgramNode(n,t)}this.strip.right=t.left}else if(t){this.strip.left=t.right}},MustacheNode:function(e,t,n,s,o){r.call(this,o);this.type="mustache";this.strip=s;if(n!=null&&n.charAt){var u=n.charAt(3)||n.charAt(2);this.escaped=u!=="{"&&u!=="&"}else{this.escaped=!!n}if(e instanceof i.SexprNode){this.sexpr=e}else{this.sexpr=new i.SexprNode(e,t)}this.sexpr.isRoot=true;this.id=this.sexpr.id;this.params=this.sexpr.params;this.hash=this.sexpr.hash;this.eligibleHelper=this.sexpr.eligibleHelper;this.isHelper=this.sexpr.isHelper},SexprNode:function(e,t,n){r.call(this,n);this.type="sexpr";this.hash=t;var i=this.id=e[0];var s=this.params=e.slice(1);var o=this.eligibleHelper=i.isSimple;this.isHelper=o&&(s.length||t)},PartialNode:function(e,t,n,i){r.call(this,i);this.type="partial";this.partialName=e;this.context=t;this.strip=n},BlockNode:function(e,t,i,s,o){r.call(this,o);if(e.sexpr.id.original!==s.path.original){throw new n(e.sexpr.id.original+" doesn't match "+s.path.original,this)}this.type="block";this.mustache=e;this.program=t;this.inverse=i;this.strip={left:e.strip.left,right:s.strip.right};(t||i).strip.left=e.strip.right;(i||t).strip.right=s.strip.left;if(i&&!t){this.isInverse=true}},ContentNode:function(e,t){r.call(this,t);this.type="content";this.string=e},HashNode:function(e,t){r.call(this,t);this.type="hash";this.pairs=e},IdNode:function(e,t){r.call(this,t);this.type="ID";var i="",s=[],o=0;for(var u=0,a=e.length;u<a;u++){var f=e[u].part;i+=(e[u].separator||"")+f;if(f===".."||f==="."||f==="this"){if(s.length>0){throw new n("Invalid path: "+i,this)}else if(f===".."){o++}else{this.isScoped=true}}else{s.push(f)}}this.original=i;this.parts=s;this.string=s.join(".");this.depth=o;this.isSimple=e.length===1&&!this.isScoped&&o===0;this.stringModeValue=this.string},PartialNameNode:function(e,t){r.call(this,t);this.type="PARTIAL_NAME";this.name=e.original},DataNode:function(e,t){r.call(this,t);this.type="DATA";this.id=e},StringNode:function(e,t){r.call(this,t);this.type="STRING";this.original=this.string=this.stringModeValue=e},IntegerNode:function(e,t){r.call(this,t);this.type="INTEGER";this.original=this.integer=e;this.stringModeValue=Number(e)},BooleanNode:function(e,t){r.call(this,t);this.type="BOOLEAN";this.bool=e;this.stringModeValue=e==="true"},CommentNode:function(e,t){r.call(this,t);this.type="comment";this.comment=e}};t=i;return t}(n);var u=function(){"use strict";var e;var t=function(){function t(e,t){return{left:e.charAt(2)==="~",right:t.charAt(0)==="~"||t.charAt(1)==="~"}}function r(){this.yy={}}var e={trace:function(){},yy:{},symbols_:{error:2,root:3,statements:4,EOF:5,program:6,simpleInverse:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,sexpr:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,CLOSE_UNESCAPED:24,OPEN_PARTIAL:25,partialName:26,partial_option0:27,sexpr_repetition0:28,sexpr_option0:29,dataName:30,param:31,STRING:32,INTEGER:33,BOOLEAN:34,OPEN_SEXPR:35,CLOSE_SEXPR:36,hash:37,hash_repetition_plus0:38,hashSegment:39,ID:40,EQUALS:41,DATA:42,pathSegments:43,SEP:44,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",35:"OPEN_SEXPR",36:"CLOSE_SEXPR",40:"ID",41:"EQUALS",42:"DATA",44:"SEP"},productions_:[0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,3],[37,1],[39,3],[26,1],[26,1],[26,1],[30,2],[21,1],[43,3],[43,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[38,1],[38,2]],performAction:function(n,r,i,s,o,u,a){var f=u.length-1;switch(o){case 1:return new s.ProgramNode(u[f-1],this._$);break;case 2:return new s.ProgramNode([],this._$);break;case 3:this.$=new s.ProgramNode([],u[f-1],u[f],this._$);break;case 4:this.$=new s.ProgramNode(u[f-2],u[f-1],u[f],this._$);break;case 5:this.$=new s.ProgramNode(u[f-1],u[f],[],this._$);break;case 6:this.$=new s.ProgramNode(u[f],this._$);break;case 7:this.$=new s.ProgramNode([],this._$);break;case 8:this.$=new s.ProgramNode([],this._$);break;case 9:this.$=[u[f]];break;case 10:u[f-1].push(u[f]);this.$=u[f-1];break;case 11:this.$=new s.BlockNode(u[f-2],u[f-1].inverse,u[f-1],u[f],this._$);break;case 12:this.$=new s.BlockNode(u[f-2],u[f-1],u[f-1].inverse,u[f],this._$);break;case 13:this.$=u[f];break;case 14:this.$=u[f];break;case 15:this.$=new s.ContentNode(u[f],this._$);break;case 16:this.$=new s.CommentNode(u[f],this._$);break;case 17:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 18:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 19:this.$={path:u[f-1],strip:t(u[f-2],u[f])};break;case 20:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 21:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 22:this.$=new s.PartialNode(u[f-2],u[f-1],t(u[f-3],u[f]),this._$);break;case 23:this.$=t(u[f-1],u[f]);break;case 24:this.$=new s.SexprNode([u[f-2]].concat(u[f-1]),u[f],this._$);break;case 25:this.$=new s.SexprNode([u[f]],null,this._$);break;case 26:this.$=u[f];break;case 27:this.$=new s.StringNode(u[f],this._$);break;case 28:this.$=new s.IntegerNode(u[f],this._$);break;case 29:this.$=new s.BooleanNode(u[f],this._$);break;case 30:this.$=u[f];break;case 31:u[f-1].isHelper=true;this.$=u[f-1];break;case 32:this.$=new s.HashNode(u[f],this._$);break;case 33:this.$=[u[f-2],u[f]];break;case 34:this.$=new s.PartialNameNode(u[f],this._$);break;case 35:this.$=new s.PartialNameNode(new s.StringNode(u[f],this._$),this._$);break;case 36:this.$=new s.PartialNameNode(new s.IntegerNode(u[f],this._$));break;case 37:this.$=new s.DataNode(u[f],this._$);break;case 38:this.$=new s.IdNode(u[f],this._$);break;case 39:u[f-2].push({part:u[f],separator:u[f-1]});this.$=u[f-2];break;case 40:this.$=[{part:u[f]}];break;case 43:this.$=[];break;case 44:u[f-1].push(u[f]);break;case 47:this.$=[u[f]];break;case 48:u[f-1].push(u[f]);break}},table:[{3:1,4:2,5:[1,3],8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[3]},{5:[1,16],8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[2,2]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{4:20,6:18,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{4:20,6:22,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{17:23,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:29,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:30,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:31,21:24,30:25,40:[1,28],42:[1,27],43:26},{21:33,26:32,32:[1,34],33:[1,35],40:[1,28],43:26},{1:[2,1]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{10:36,20:[1,37]},{4:38,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,7],22:[1,13],23:[1,14],25:[1,15]},{7:39,8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,6],22:[1,13],23:[1,14],25:[1,15]},{17:23,18:[1,40],21:24,30:25,40:[1,28],42:[1,27],43:26},{10:41,20:[1,37]},{18:[1,42]},{18:[2,43],24:[2,43],28:43,32:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],40:[2,43],42:[2,43]},{18:[2,25],24:[2,25],36:[2,25]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],40:[2,38],42:[2,38],44:[1,44]},{21:45,40:[1,28],43:26},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],42:[2,40],44:[2,40]},{18:[1,46]},{18:[1,47]},{24:[1,48]},{18:[2,41],21:50,27:49,40:[1,28],43:26},{18:[2,34],40:[2,34]},{18:[2,35],40:[2,35]},{18:[2,36],40:[2,36]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{21:51,40:[1,28],43:26},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,3],22:[1,13],23:[1,14],25:[1,15]},{4:52,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,5],22:[1,13],23:[1,14],25:[1,15]},{14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,45],21:56,24:[2,45],29:53,30:60,31:54,32:[1,57],33:[1,58],34:[1,59],35:[1,61],36:[2,45],37:55,38:62,39:63,40:[1,64],42:[1,27],43:26},{40:[1,65]},{18:[2,37],24:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],40:[2,37],42:[2,37]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,66]},{18:[2,42]},{18:[1,67]},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],25:[1,15]},{18:[2,24],24:[2,24],36:[2,24]},{18:[2,44],24:[2,44],32:[2,44],33:[2,44],34:[2,44],35:[2,44],36:[2,44],40:[2,44],42:[2,44]},{18:[2,46],24:[2,46],36:[2,46]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],40:[2,26],42:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27],40:[2,27],42:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28],40:[2,28],42:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29],40:[2,29],42:[2,29]},{18:[2,30],24:[2,30],32:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30],40:[2,30],42:[2,30]},{17:68,21:24,30:25,40:[1,28],42:[1,27],43:26},{18:[2,32],24:[2,32],36:[2,32],39:69,40:[1,70]},{18:[2,47],24:[2,47],36:[2,47],40:[2,47]},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],41:[1,71],42:[2,40],44:[2,40]},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],40:[2,39],42:[2,39],44:[2,39]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{36:[1,72]},{18:[2,48],24:[2,48],36:[2,48],40:[2,48]},{41:[1,71]},{21:56,30:60,31:73,32:[1,57],33:[1,58],34:[1,59],35:[1,61],40:[1,28],42:[1,27],43:26},{18:[2,31],24:[2,31],32:[2,31],33:[2,31],34:[2,31],35:[2,31],36:[2,31],40:[2,31],42:[2,31]},{18:[2,33],24:[2,33],36:[2,33],40:[2,33]}],defaultActions:{3:[2,2],16:[2,1],50:[2,42]},parseError:function(t,n){throw new Error(t)},parse:function(t){function v(e){r.length=r.length-2*e;i.length=i.length-e;s.length=s.length-e}function m(){var e;e=n.lexer.lex()||1;if(typeof e!=="number"){e=n.symbols_[e]||e}return e}var n=this,r=[0],i=[null],s=[],o=this.table,u="",a=0,f=0,l=0,c=2,h=1;this.lexer.setInput(t);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;this.yy.parser=this;if(typeof this.lexer.yylloc=="undefined")this.lexer.yylloc={};var p=this.lexer.yylloc;s.push(p);var d=this.lexer.options&&this.lexer.options.ranges;if(typeof this.yy.parseError==="function")this.parseError=this.yy.parseError;var g,y,b,w,E,S,x={},T,N,C,k;while(true){b=r[r.length-1];if(this.defaultActions[b]){w=this.defaultActions[b]}else{if(g===null||typeof g=="undefined"){g=m()}w=o[b]&&o[b][g]}if(typeof w==="undefined"||!w.length||!w[0]){var L="";if(!l){k=[];for(T in o[b])if(this.terminals_[T]&&T>2){k.push("'"+this.terminals_[T]+"'")}if(this.lexer.showPosition){L="Parse error on line "+(a+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+k.join(", ")+", got '"+(this.terminals_[g]||g)+"'"}else{L="Parse error on line "+(a+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'")}this.parseError(L,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:p,expected:k})}}if(w[0]instanceof Array&&w.length>1){throw new Error("Parse Error: multiple actions possible at state: "+b+", token: "+g)}switch(w[0]){case 1:r.push(g);i.push(this.lexer.yytext);s.push(this.lexer.yylloc);r.push(w[1]);g=null;if(!y){f=this.lexer.yyleng;u=this.lexer.yytext;a=this.lexer.yylineno;p=this.lexer.yylloc;if(l>0)l--}else{g=y;y=null}break;case 2:N=this.productions_[w[1]][1];x.$=i[i.length-N];x._$={first_line:s[s.length-(N||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(N||1)].first_column,last_column:s[s.length-1].last_column};if(d){x._$.range=[s[s.length-(N||1)].range[0],s[s.length-1].range[1]]}S=this.performAction.call(x,u,f,a,this.yy,w[1],i,s);if(typeof S!=="undefined"){return S}if(N){r=r.slice(0,-1*N*2);i=i.slice(0,-1*N);s=s.slice(0,-1*N)}r.push(this.productions_[w[1]][0]);i.push(x.$);s.push(x._$);C=o[r[r.length-2]][r[r.length-1]];r.push(C);break;case 3:return true}}return true}};var n=function(){var e={EOF:1,parseError:function(t,n){if(this.yy.parser){this.yy.parser.parseError(t,n)}else{throw new Error(t)}},setInput:function(e){this._input=e;this._more=this._less=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};if(this.options.ranges)this.yylloc.range=[0,0];this.offset=0;return this},input:function(){var e=this._input[0];this.yytext+=e;this.yyleng++;this.offset++;this.match+=e;this.matched+=e;var t=e.match(/(?:\r\n?|\n).*/g);if(t){this.yylineno++;this.yylloc.last_line++}else{this.yylloc.last_column++}if(this.options.ranges)this.yylloc.range[1]++;this._input=this._input.slice(1);return e},unput:function(e){var t=e.length;var n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input;this.yytext=this.yytext.substr(0,this.yytext.length-t-1);this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1);this.matched=this.matched.substr(0,this.matched.length-1);if(n.length-1)this.yylineno-=n.length-1;var i=this.yylloc.range;this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t};if(this.options.ranges){this.yylloc.range=[i[0],i[0]+this.yyleng-t]}return this},more:function(){this._more=true;return this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;if(e.length<20){e+=this._input.substr(0,20-e.length)}return(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput();var t=(new Array(e.length+1)).join("-");return e+this.upcomingInput()+"\n"+t+"^"},next:function(){if(this.done){return this.EOF}if(!this._input)this.done=true;var e,t,n,r,i,s;if(!this._more){this.yytext="";this.match=""}var o=this._currentRules();for(var u=0;u<o.length;u++){n=this._input.match(this.rules[o[u]]);if(n&&(!t||n[0].length>t[0].length)){t=n;r=u;if(!this.options.flex)break}}if(t){s=t[0].match(/(?:\r\n?|\n).*/g);if(s)this.yylineno+=s.length;this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length};this.yytext+=t[0];this.match+=t[0];this.matches=t;this.yyleng=this.yytext.length;if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]}this._more=false;this._input=this._input.slice(t[0].length);this.matched+=t[0];e=this.performAction.call(this,this.yy,this,o[r],this.conditionStack[this.conditionStack.length-1]);if(this.done&&this._input)this.done=false;if(e)return e;else return}if(this._input===""){return this.EOF}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},lex:function(){var t=this.next();if(typeof t!=="undefined"){return t}else{return this.lex()}},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(t){this.begin(t)}};e.options={};e.performAction=function(t,n,r,i){function s(e,t){return n.yytext=n.yytext.substr(e,n.yyleng-t)}var o=i;switch(r){case 0:if(n.yytext.slice(-2)==="\\\\"){s(0,1);this.begin("mu")}else if(n.yytext.slice(-1)==="\\"){s(0,1);this.begin("emu")}else{this.begin("mu")}if(n.yytext)return 14;break;case 1:return 14;break;case 2:this.popState();return 14;break;case 3:s(0,4);this.popState();return 15;break;case 4:return 35;break;case 5:return 36;break;case 6:return 25;break;case 7:return 16;break;case 8:return 20;break;case 9:return 19;break;case 10:return 19;break;case 11:return 23;break;case 12:return 22;break;case 13:this.popState();this.begin("com");break;case 14:s(3,5);this.popState();return 15;break;case 15:return 22;break;case 16:return 41;break;case 17:return 40;break;case 18:return 40;break;case 19:return 44;break;case 20:break;case 21:this.popState();return 24;break;case 22:this.popState();return 18;break;case 23:n.yytext=s(1,2).replace(/\\"/g,'"');return 32;break;case 24:n.yytext=s(1,2).replace(/\\'/g,"'");return 32;break;case 25:return 42;break;case 26:return 34;break;case 27:return 34;break;case 28:return 33;break;case 29:return 40;break;case 30:n.yytext=s(1,2);return 40;break;case 31:return"INVALID";break;case 32:return 5;break}};e.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];e.conditions={mu:{rules:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],inclusive:false},emu:{rules:[2],inclusive:false},com:{rules:[3],inclusive:false},INITIAL:{rules:[0,1,32],inclusive:true}};return e}();e.lexer=n;r.prototype=e;e.Parser=r;return new r}();e=t;return e}();var a=function(e,t){"use strict";function s(e){if(e.constructor===i.ProgramNode){return e}r.yy=i;return r.parse(e)}var n={};var r=e;var i=t;n.parser=r;n.parse=s;return n}(u,o);var f=function(e){"use strict";function r(){}function i(e,t,r){if(e==null||typeof e!=="string"&&e.constructor!==r.AST.ProgramNode){throw new n("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e)}t=t||{};if(!("data"in t)){t.data=true}var i=r.parse(e);var s=(new r.Compiler).compile(i,t);return(new r.JavaScriptCompiler).compile(s,t)}function s(e,t,r){function s(){var n=r.parse(e);var i=(new r.Compiler).compile(n,t);var s=(new r.JavaScriptCompiler).compile(i,t,undefined,true);return r.template(s)}if(e==null||typeof e!=="string"&&e.constructor!==r.AST.ProgramNode){throw new n("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e)}t=t||{};if(!("data"in t)){t.data=true}var i;return function(e,t){if(!i){i=s()}return i.call(this,e,t)}}var t={};var n=e;t.Compiler=r;r.prototype={compiler:r,disassemble:function(){var e=this.opcodes,t,n=[],r,i;for(var s=0,o=e.length;s<o;s++){t=e[s];if(t.opcode==="DECLARE"){n.push("DECLARE "+t.name+"="+t.value)}else{r=[];for(var u=0;u<t.args.length;u++){i=t.args[u];if(typeof i==="string"){i='"'+i.replace("\n","\\n")+'"'}r.push(i)}n.push(t.opcode+" "+r.join(" "))}}return n.join("\n")},equals:function(e){var t=this.opcodes.length;if(e.opcodes.length!==t){return false}for(var n=0;n<t;n++){var r=this.opcodes[n],i=e.opcodes[n];if(r.opcode!==i.opcode||r.args.length!==i.args.length){return false}for(var s=0;s<r.args.length;s++){if(r.args[s]!==i.args[s]){return false}}}t=this.children.length;if(e.children.length!==t){return false}for(n=0;n<t;n++){if(!this.children[n].equals(e.children[n])){return false}}return true},guid:0,compile:function(e,t){this.opcodes=[];this.children=[];this.depths={list:[]};this.options=t;var n=this.options.knownHelpers;this.options.knownHelpers={helperMissing:true,blockHelperMissing:true,each:true,"if":true,unless:true,"with":true,log:true};if(n){for(var r in n){this.options.knownHelpers[r]=n[r]}}return this.accept(e)},accept:function(e){var t=e.strip||{},n;if(t.left){this.opcode("strip")}n=this[e.type](e);if(t.right){this.opcode("strip")}return n},program:function(e){var t=e.statements;for(var n=0,r=t.length;n<r;n++){this.accept(t[n])}this.isSimple=r===1;this.depths.list=this.depths.list.sort(function(e,t){return e-t});return this},compileProgram:function(e){var t=(new this.compiler).compile(e,this.options);var n=this.guid++,r;this.usePartial=this.usePartial||t.usePartial;this.children[n]=t;for(var i=0,s=t.depths.list.length;i<s;i++){r=t.depths.list[i];if(r<2){continue}else{this.addDepth(r-1)}}return n},block:function(e){var t=e.mustache,n=e.program,r=e.inverse;if(n){n=this.compileProgram(n)}if(r){r=this.compileProgram(r)}var i=t.sexpr;var s=this.classifySexpr(i);if(s==="helper"){this.helperSexpr(i,n,r)}else if(s==="simple"){this.simpleSexpr(i);this.opcode("pushProgram",n);this.opcode("pushProgram",r);this.opcode("emptyHash");this.opcode("blockValue")}else{this.ambiguousSexpr(i,n,r);this.opcode("pushProgram",n);this.opcode("pushProgram",r);this.opcode("emptyHash");this.opcode("ambiguousBlockValue")}this.opcode("append")},hash:function(e){var t=e.pairs,n,r;this.opcode("pushHash");for(var i=0,s=t.length;i<s;i++){n=t[i];r=n[1];if(this.options.stringParams){if(r.depth){this.addDepth(r.depth)}this.opcode("getContext",r.depth||0);this.opcode("pushStringParam",r.stringModeValue,r.type);if(r.type==="sexpr"){this.sexpr(r)}}else{this.accept(r)}this.opcode("assignToHash",n[0])}this.opcode("popHash")},partial:function(e){var t=e.partialName;this.usePartial=true;if(e.context){this.ID(e.context)}else{this.opcode("push","depth0")}this.opcode("invokePartial",t.name);this.opcode("append")},content:function(e){this.opcode("appendContent",e.string)},mustache:function(e){this.sexpr(e.sexpr);if(e.escaped&&!this.options.noEscape){this.opcode("appendEscaped")}else{this.opcode("append")}},ambiguousSexpr:function(e,t,n){var r=e.id,i=r.parts[0],s=t!=null||n!=null;this.opcode("getContext",r.depth);this.opcode("pushProgram",t);this.opcode("pushProgram",n);this.opcode("invokeAmbiguous",i,s)},simpleSexpr:function(e){var t=e.id;if(t.type==="DATA"){this.DATA(t)}else if(t.parts.length){this.ID(t)}else{this.addDepth(t.depth);this.opcode("getContext",t.depth);this.opcode("pushContext")}this.opcode("resolvePossibleLambda")},helperSexpr:function(e,t,r){var i=this.setupFullMustacheParams(e,t,r),s=e.id.parts[0];if(this.options.knownHelpers[s]){this.opcode("invokeKnownHelper",i.length,s)}else if(this.options.knownHelpersOnly){throw new n("You specified knownHelpersOnly, but used the unknown helper "+s,e)}else{this.opcode("invokeHelper",i.length,s,e.isRoot)}},sexpr:function(e){var t=this.classifySexpr(e);if(t==="simple"){this.simpleSexpr(e)}else if(t==="helper"){this.helperSexpr(e)}else{this.ambiguousSexpr(e)}},ID:function(e){this.addDepth(e.depth);this.opcode("getContext",e.depth);var t=e.parts[0];if(!t){this.opcode("pushContext")}else{this.opcode("lookupOnContext",e.parts[0])}for(var n=1,r=e.parts.length;n<r;n++){this.opcode("lookup",e.parts[n])}},DATA:function(e){this.options.data=true;if(e.id.isScoped||e.id.depth){throw new n("Scoped data references are not supported: "+e.original,e)}this.opcode("lookupData");var t=e.id.parts;for(var r=0,i=t.length;r<i;r++){this.opcode("lookup",t[r])}},STRING:function(e){this.opcode("pushString",e.string)},INTEGER:function(e){this.opcode("pushLiteral",e.integer)},BOOLEAN:function(e){this.opcode("pushLiteral",e.bool)},comment:function(){},opcode:function(e){this.opcodes.push({opcode:e,args:[].slice.call(arguments,1)})},declare:function(e,t){this.opcodes.push({opcode:"DECLARE",name:e,value:t})},addDepth:function(e){if(e===0){return}if(!this.depths[e]){this.depths[e]=true;this.depths.list.push(e)}},classifySexpr:function(e){var t=e.isHelper;var n=e.eligibleHelper;var r=this.options;if(n&&!t){var i=e.id.parts[0];if(r.knownHelpers[i]){t=true}else if(r.knownHelpersOnly){n=false}}if(t){return"helper"}else if(n){return"ambiguous"}else{return"simple"}},pushParams:function(e){var t=e.length,n;while(t--){n=e[t];if(this.options.stringParams){if(n.depth){this.addDepth(n.depth)}this.opcode("getContext",n.depth||0);this.opcode("pushStringParam",n.stringModeValue,n.type);if(n.type==="sexpr"){this.sexpr(n)}}else{this[n.type](n)}}},setupFullMustacheParams:function(e,t,n){var r=e.params;this.pushParams(r);this.opcode("pushProgram",t);this.opcode("pushProgram",n);if(e.hash){this.hash(e.hash)}else{this.opcode("emptyHash")}return r}};t.precompile=i;t.compile=s;return t}(n);var l=function(e,t){"use strict";function u(e){this.value=e}function a(){}var n;var r=e.COMPILER_REVISION;var i=e.REVISION_CHANGES;var s=e.log;var o=t;a.prototype={nameLookup:function(e,t){var n,r;if(e.indexOf("depth")===0){n=true}if(/^[0-9]+$/.test(t)){r=e+"["+t+"]"}else if(a.isValidJavaScriptVariableName(t)){r=e+"."+t}else{r=e+"['"+t+"']"}if(n){return"("+e+" && "+r+")"}else{return r}},compilerInfo:function(){var e=r,t=i[e];return"this.compilerInfo = ["+e+",'"+t+"'];\n"},appendToBuffer:function(e){if(this.environment.isSimple){return"return "+e+";"}else{return{appendToBuffer:true,content:e,toString:function(){return"buffer += "+e+";"}}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(e,t,n,r){this.environment=e;this.options=t||{};s("debug",this.environment.disassemble()+"\n\n");this.name=this.environment.name;this.isChild=!!n;this.context=n||{programs:[],environments:[],aliases:{}};this.preamble();this.stackSlot=0;this.stackVars=[];this.registers={list:[]};this.hashes=[];this.compileStack=[];this.inlineStack=[];this.compileChildren(e,t);var i=e.opcodes,u;this.i=0;for(var a=i.length;this.i<a;this.i++){u=i[this.i];if(u.opcode==="DECLARE"){this[u.name]=u.value}else{this[u.opcode].apply(this,u.args)}if(u.opcode!==this.stripNext){this.stripNext=false}}this.pushSource("");if(this.stackSlot||this.inlineStack.length||this.compileStack.length){throw new o("Compile completed with content left on stack")}return this.createFunctionContext(r)},preamble:function(){var e=[];if(!this.isChild){var t=this.namespace;var n="helpers = this.merge(helpers, "+t+".helpers);";if(this.environment.usePartial){n=n+" partials = this.merge(partials, "+t+".partials);"}if(this.options.data){n=n+" data = data || {};"}e.push(n)}else{e.push("")}if(!this.environment.isSimple){e.push(", buffer = "+this.initializeBuffer())}else{e.push("")}this.lastContext=0;this.source=e},createFunctionContext:function(e){var t=this.stackVars.concat(this.registers.list);if(t.length>0){this.source[1]=this.source[1]+", "+t.join(", ")}if(!this.isChild){for(var n in this.context.aliases){if(this.context.aliases.hasOwnProperty(n)){this.source[1]=this.source[1]+", "+n+"="+this.context.aliases[n]}}}if(this.source[1]){this.source[1]="var "+this.source[1].substring(2)+";"}if(!this.isChild){this.source[1]+="\n"+this.context.programs.join("\n")+"\n"}if(!this.environment.isSimple){this.pushSource("return buffer;")}var r=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"];for(var i=0,o=this.environment.depths.list.length;i<o;i++){r.push("depth"+this.environment.depths.list[i])}var u=this.mergeSource();if(!this.isChild){u=this.compilerInfo()+u}if(e){r.push(u);return Function.apply(this,r)}else{var a="function "+(this.name||"")+"("+r.join(",")+") {\n  "+u+"}";s("debug",a+"\n\n");return a}},mergeSource:function(){var e="",t;for(var n=0,r=this.source.length;n<r;n++){var i=this.source[n];if(i.appendToBuffer){if(t){t=t+"\n    + "+i.content}else{t=i.content}}else{if(t){e+="buffer += "+t+";\n  ";t=undefined}e+=i+"\n  "}}return e},blockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=["depth0"];this.setupParams(0,e);this.replaceStack(function(t){e.splice(1,0,t);return"blockHelperMissing.call("+e.join(", ")+")"})},ambiguousBlockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=["depth0"];this.setupParams(0,e);var t=this.topStack();e.splice(1,0,t);this.pushSource("if (!"+this.lastHelper+") { "+t+" = blockHelperMissing.call("+e.join(", ")+"); }")},appendContent:function(e){if(this.pendingContent){e=this.pendingContent+e}if(this.stripNext){e=e.replace(/^\s+/,"")}this.pendingContent=e},strip:function(){if(this.pendingContent){this.pendingContent=this.pendingContent.replace(/\s+$/,"")}this.stripNext="strip"},append:function(){this.flushInline();var e=this.popStack();this.pushSource("if("+e+" || "+e+" === 0) { "+this.appendToBuffer(e)+" }");if(this.environment.isSimple){this.pushSource("else { "+this.appendToBuffer("''")+" }")}},appendEscaped:function(){this.context.aliases.escapeExpression="this.escapeExpression";this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(e){if(this.lastContext!==e){this.lastContext=e}},lookupOnContext:function(e){this.push(this.nameLookup("depth"+this.lastContext,e,"context"))},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)},resolvePossibleLambda:function(){this.context.aliases.functionType='"function"';this.replaceStack(function(e){return"typeof "+e+" === functionType ? "+e+".apply(depth0) : "+e})},lookup:function(e){this.replaceStack(function(t){return t+" == null || "+t+" === false ? "+t+" : "+this.nameLookup(t,e,"context")})},lookupData:function(){this.pushStackLiteral("data")},pushStringParam:function(e,t){this.pushStackLiteral("depth"+this.lastContext);this.pushString(t);if(t!=="sexpr"){if(typeof e==="string"){this.pushString(e)}else{this.pushStackLiteral(e)}}},emptyHash:function(){this.pushStackLiteral("{}");if(this.options.stringParams){this.push("{}");this.push("{}")}},pushHash:function(){if(this.hash){this.hashes.push(this.hash)}this.hash={values:[],types:[],contexts:[]}},popHash:function(){var e=this.hash;this.hash=this.hashes.pop();if(this.options.stringParams){this.push("{"+e.contexts.join(",")+"}");this.push("{"+e.types.join(",")+"}")}this.push("{\n    "+e.values.join(",\n    ")+"\n  }")},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},push:function(e){this.inlineStack.push(e);return e},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){if(e!=null){this.pushStackLiteral(this.programExpression(e))}else{this.pushStackLiteral(null)}},invokeHelper:function(e,t,n){this.context.aliases.helperMissing="helpers.helperMissing";this.useRegister("helper");var r=this.lastHelper=this.setupHelper(e,t,true);var i=this.nameLookup("depth"+this.lastContext,t,"context");var s="helper = "+r.name+" || "+i;if(r.paramsInit){s+=","+r.paramsInit}this.push("("+s+",helper "+"? helper.call("+r.callParams+") "+": helperMissing.call("+r.helperMissingParams+"))");if(!n){this.flushInline()}},invokeKnownHelper:function(e,t){var n=this.setupHelper(e,t);this.push(n.name+".call("+n.callParams+")")},invokeAmbiguous:function(e,t){this.context.aliases.functionType='"function"';this.useRegister("helper");this.emptyHash();var n=this.setupHelper(0,e,t);var r=this.lastHelper=this.nameLookup("helpers",e,"helper");var i=this.nameLookup("depth"+this.lastContext,e,"context");var s=this.nextStack();if(n.paramsInit){this.pushSource(n.paramsInit)}this.pushSource("if (helper = "+r+") { "+s+" = helper.call("+n.callParams+"); }");this.pushSource("else { helper = "+i+"; "+s+" = typeof helper === functionType ? helper.call("+n.callParams+") : helper; }")},invokePartial:function(e){var t=[this.nameLookup("partials",e,"partial"),"'"+e+"'",this.popStack(),"helpers","partials"];if(this.options.data){t.push("data")}this.context.aliases.self="this";this.push("self.invokePartial("+t.join(", ")+")")},assignToHash:function(e){var t=this.popStack(),n,r;if(this.options.stringParams){r=this.popStack();n=this.popStack()}var i=this.hash;if(n){i.contexts.push("'"+e+"': "+n)}if(r){i.types.push("'"+e+"': "+r)}i.values.push("'"+e+"': ("+t+")")},compiler:a,compileChildren:function(e,t){var n=e.children,r,i;for(var s=0,o=n.length;s<o;s++){r=n[s];i=new this.compiler;var u=this.matchExistingProgram(r);if(u==null){this.context.programs.push("");u=this.context.programs.length;r.index=u;r.name="program"+u;this.context.programs[u]=i.compile(r,t,this.context);this.context.environments[u]=r}else{r.index=u;r.name="program"+u}}},matchExistingProgram:function(e){for(var t=0,n=this.context.environments.length;t<n;t++){var r=this.context.environments[t];if(r&&r.equals(e)){return t}}},programExpression:function(e){this.context.aliases.self="this";if(e==null){return"self.noop"}var t=this.environment.children[e],n=t.depths.list,r;var i=[t.index,t.name,"data"];for(var s=0,o=n.length;s<o;s++){r=n[s];if(r===1){i.push("depth0")}else{i.push("depth"+(r-1))}}return(n.length===0?"self.program(":"self.programWithDepth(")+i.join(", ")+")"},register:function(e,t){this.useRegister(e);this.pushSource(e+" = "+t+";")},useRegister:function(e){if(!this.registers[e]){this.registers[e]=true;this.registers.list.push(e)}},pushStackLiteral:function(e){return this.push(new u(e))},pushSource:function(e){if(this.pendingContent){this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));this.pendingContent=undefined}if(e){this.source.push(e)}},pushStack:function(e){this.flushInline();var t=this.incrStack();if(e){this.pushSource(t+" = "+e+";")}this.compileStack.push(t);return t},replaceStack:function(e){var t="",n=this.isInline(),r,i,s;if(n){var o=this.popStack(true);if(o instanceof u){r=o.value;s=true}else{i=!this.stackSlot;var a=!i?this.topStackName():this.incrStack();t="("+this.push(a)+" = "+o+"),";r=this.topStack()}}else{r=this.topStack()}var f=e.call(this,r);if(n){if(!s){this.popStack()}if(i){this.stackSlot--}this.push("("+t+f+")")}else{if(!/^stack/.test(r)){r=this.nextStack()}this.pushSource(r+" = ("+t+f+");")}return r},nextStack:function(){return this.pushStack()},incrStack:function(){this.stackSlot++;if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot)}return this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack;if(e.length){this.inlineStack=[];for(var t=0,n=e.length;t<n;t++){var r=e[t];if(r instanceof u){this.compileStack.push(r)}else{this.pushStack(r)}}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var t=this.isInline(),n=(t?this.inlineStack:this.compileStack).pop();if(!e&&n instanceof u){return n.value}else{if(!t){if(!this.stackSlot){throw new o("Invalid stack pop")}this.stackSlot--}return n}},topStack:function(e){var t=this.isInline()?this.inlineStack:this.compileStack,n=t[t.length-1];if(!e&&n instanceof u){return n.value}else{return n}},quotedString:function(e){return'"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},setupHelper:function(e,t,n){var r=[],i=this.setupParams(e,r,n);var s=this.nameLookup("helpers",t,"helper");return{params:r,paramsInit:i,name:s,callParams:["depth0"].concat(r).join(", "),helperMissingParams:n&&["depth0",this.quotedString(t)].concat(r).join(", ")}},setupOptions:function(e,t){var n=[],r=[],i=[],s,o,u;n.push("hash:"+this.popStack());if(this.options.stringParams){n.push("hashTypes:"+this.popStack());n.push("hashContexts:"+this.popStack())}o=this.popStack();u=this.popStack();if(u||o){if(!u){this.context.aliases.self="this";u="self.noop"}if(!o){this.context.aliases.self="this";o="self.noop"}n.push("inverse:"+o);n.push("fn:"+u)}for(var a=0;a<e;a++){s=this.popStack();t.push(s);if(this.options.stringParams){i.push(this.popStack());r.push(this.popStack())}}if(this.options.stringParams){n.push("contexts:["+r.join(",")+"]");n.push("types:["+i.join(",")+"]")}if(this.options.data){n.push("data:data")}return n},setupParams:function(e,t,n){var r="{"+this.setupOptions(e,t).join(",")+"}";if(n){this.useRegister("options");t.push("options");return"options="+r}else{t.push(r);return""}}};var f=("break else new var"+" case finally return void"+" catch for switch while"+" continue function this with"+" default if throw"+" delete in try"+" do instanceof typeof"+" abstract enum int short"+" boolean export interface static"+" byte extends long super"+" char final native synchronized"+" class float package throws"+" const goto private transient"+" debugger implements protected volatile"+" double import public let yield").split(" ");var l=a.RESERVED_WORDS={};for(var c=0,h=f.length;c<h;c++){l[f[c]]=true}a.isValidJavaScriptVariableName=function(e){if(!a.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)){return true}return false};n=a;return n}(r,n);var c=function(e,t,n,r,i){"use strict";var s;var o=e;var u=t;var a=n.parser;var f=n.parse;var l=r.Compiler;var c=r.compile;var h=r.precompile;var p=i;var d=o.create;var v=function(){var e=d();e.compile=function(t,n){return c(t,n,e)};e.precompile=function(t,n){return h(t,n,e)};e.AST=u;e.Compiler=l;e.JavaScriptCompiler=p;e.Parser=a;e.parse=f;return e};o=v();o.create=v;s=o;return s}(s,o,a,f,l);return c}();



  /*============================================================================
    (c) Copyright 2015 Shopify Inc. Author: Carson Shold (@cshold). All Rights Reserved.

    Plugin Documentation - https://shopify.github.io/Timber/#ajax-cart

    Ajaxify the add to cart experience,
    show the cart in a modal, or a 3D drawer.

    This file includes:
      - Basic Shopify Ajax API calls
      - Ajaxify plugin

    This requires:
      - jQuery 1.8+
      - handlebars.min.js (for cart template)
      - modernizer.min.js
      - snippet/ajax-cart-template.liquid

    JQUERY API (c) Copyright 2009-2015 Shopify Inc. Author: Caroline Schnapp. All Rights Reserved.
    Includes slight modifications to addItemFromForm.
  ==============================================================================*/
  if ((typeof Shopify) === 'undefined') { Shopify = {}; }

  /*============================================================================
    API Helper Functions
  ==============================================================================*/
  function attributeToString(attribute) {
    if ((typeof attribute) !== 'string') {
      attribute += '';
      if (attribute === 'undefined') {
        attribute = '';
      }
    }
    return jQuery.trim(attribute);
  }

  /*============================================================================
    API Functions
    - Shopify.format money is defined in option_selection.js.
      If that file is not included, it is redefined here.
  ==============================================================================*/
  if ( !Shopify.formatMoney ) {
    Shopify.formatMoney = function(cents, format) {
      var value = '',
          placeholderRegex = /\{\{\s*(\w+)\s*\}\}/,
          formatString = (format || this.money_format);

      if (typeof cents == 'string') {
        cents = cents.replace('.','');
      }

      function defaultOption(opt, def) {
        return (typeof opt == 'undefined' ? def : opt);
      }

      function formatWithDelimiters(number, precision, thousands, decimal) {
        precision = defaultOption(precision, 2);
        thousands = defaultOption(thousands, ',');
        decimal   = defaultOption(decimal, '.');

        if (isNaN(number) || number == null) {
          return 0;
        }

        number = (number/100.0).toFixed(precision);

        var parts   = number.split('.'),
            dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
            cents   = parts[1] ? (decimal + parts[1]) : '';

        return dollars + cents;
      }

      switch(formatString.match(placeholderRegex)[1]) {
        case 'amount':
          value = formatWithDelimiters(cents, 2);
          break;
        case 'amount_no_decimals':
          value = formatWithDelimiters(cents, 0);
          break;
        case 'amount_with_comma_separator':
          value = formatWithDelimiters(cents, 2, '.', ',');
          break;
        case 'amount_no_decimals_with_comma_separator':
          value = formatWithDelimiters(cents, 0, '.', ',');
          break;
      }

      return formatString.replace(placeholderRegex, value);
    };
  }

  Shopify.onProduct = function(product) {
    // alert('Received everything we ever wanted to know about ' + product.title);
  };

  Shopify.onCartUpdate = function(cart) {
    // alert('There are now ' + cart.item_count + ' items in the cart.');
  };

  Shopify.updateCartNote = function(note, callback) {
    var params = {
      type: 'POST',
      url: '/cart/update.js',
      data: 'note=' + attributeToString(note),
      dataType: 'json',
      success: function(cart) {
        if ((typeof callback) === 'function') {
          callback(cart);
        }
        else {
          Shopify.onCartUpdate(cart);
        }
      },
      error: function(XMLHttpRequest, textStatus) {
        Shopify.onError(XMLHttpRequest, textStatus);
      }
    };
    jQuery.ajax(params);
  };

  Shopify.onError = function(XMLHttpRequest, textStatus) {
    var data = eval('(' + XMLHttpRequest.responseText + ')');
    if (!!data.message) {
      alert(data.message + '(' + data.status  + '): ' + data.description);
    } else {
      alert('Error : ' + Shopify.fullMessagesFromErrors(data).join('; ') + '.');
    }
  };

  /*============================================================================
    POST to cart/add.js returns the JSON of the line item associated with the added item
  ==============================================================================*/
  Shopify.addItem = function(variant_id, quantity, callback) {
    var quantity = quantity || 1;
    var params = {
      type: 'POST',
      url: '/cart/add.js',
      data: 'quantity=' + quantity + '&id=' + variant_id,
      dataType: 'json',
      success: function(line_item) {
        if ((typeof callback) === 'function') {
          callback(line_item);
        }
        else {
          Shopify.onItemAdded(line_item);
        }
      },
      error: function(XMLHttpRequest, textStatus) {
        Shopify.onError(XMLHttpRequest, textStatus);
      }
    };
    jQuery.ajax(params);
  };

  /*============================================================================
    POST to cart/add.js returns the JSON of the line item
      - Allow use of form element instead of id
      - Allow custom error callback
  ==============================================================================*/
  Shopify.addItemFromForm = function(form, callback, errorCallback) {
    var params = {
      type: 'POST',
      url: '/cart/add.js',
      data: jQuery(form).serialize(),
      dataType: 'json',
      success: function(line_item) {
        if ((typeof callback) === 'function') {
          callback(line_item, form);
        }
        else {
          Shopify.onItemAdded(line_item, form);
        }
      },
      error: function(XMLHttpRequest, textStatus) {
        if ((typeof errorCallback) === 'function') {
          errorCallback(XMLHttpRequest, textStatus);
        }
        else {
          Shopify.onError(XMLHttpRequest, textStatus);
        }
      }
    };
    jQuery.ajax(params);
  };

  // Get from cart.js returns the cart in JSON
  Shopify.getCart = function(callback) {
    jQuery.getJSON('/cart.js', function (cart, textStatus) {
      if ((typeof callback) === 'function') {
        callback(cart);
      }
      else {
        Shopify.onCartUpdate(cart);
      }
    });
  };

  // GET products/<product-handle>.js returns the product in JSON
  Shopify.getProduct = function(handle, callback) {
    jQuery.getJSON('/products/' + handle + '.js', function (product, textStatus) {
      if ((typeof callback) === 'function') {
        callback(product);
      }
      else {
        Shopify.onProduct(product);
      }
    });
  };

  // POST to cart/change.js returns the cart in JSON
  Shopify.changeItem = function(line, quantity, callback) {
    var params = {
      type: 'POST',
      url: '/cart/change.js',
      data:  'quantity=' + quantity + '&line=' + line,
      dataType: 'json',
      success: function(cart) {
        if ((typeof callback) === 'function') {
          callback(cart);
        }
        else {
          Shopify.onCartUpdate(cart);
        }
      },
      error: function(XMLHttpRequest, textStatus) {
        Shopify.onError(XMLHttpRequest, textStatus);
      }
    };
    jQuery.ajax(params);
  };

  /*============================================================================
    Ajaxify Shopify Add To Cart
  ==============================================================================*/
  var ajaxifyShopify = (function(module, $) {

    'use strict';

    // Public functions
    var init;

    // Private general variables
    var settings, isUpdating, cartInit, $drawerHeight, $cssTransforms, $cssTransforms3d, $nojQueryLoad, $w, $body, $html;

    // Private plugin variables
    var $formContainer, $btnClass, $wrapperClass, $addToCart, $cartCountSelector, $cartCostSelector, $toggleCartButton, $modal, $cartContainer, $drawerCaret, $modalContainer, $modalOverlay, $closeCart, $drawerContainer, $prependDrawerTo, $callbackData={};

    // Private functions
    var updateCountPrice, modalSetup, showModal, sizeModal, hideModal, drawerSetup, showDrawer, hideDrawer, sizeDrawer, loadCartImages, formOverride, itemAddedCallback, itemErrorCallback, cartUpdateCallback, setToggleButtons, buildCart, cartTemplate, adjustCart, adjustCartCallback, createQtySelectors, qtySelectors, scrollTop, toggleCallback, validateQty;

    /*============================================================================
      Initialise the plugin and define global options
    ==============================================================================*/
    init = function (options) {

      // Default settings
      settings = {
        method: 'drawer', // Method options are drawer, modal.
        formSelector: 'form[action^="/cart/add"]',
        addToCartSelector: 'input[type="submit"]',
        cartCountSelector: null,
        cartCostSelector: null,
        toggleCartButton: null,
        btnClass: null,
        wrapperClass: null,
        useCartTemplate: false,
        disableAjaxCart: false,
        enableQtySelectors: true,
        prependDrawerTo: 'body',
        onToggleCallback: function(cart) {}
      };

      // Override defaults with arguments
      $.extend(settings, options);

      // Make sure method is lower case
      settings.method = settings.method.toLowerCase();

      // Select DOM elements
      $formContainer     = $(settings.formSelector);
      $btnClass          = settings.btnClass;
      $wrapperClass      = settings.wrapperClass;
      $addToCart         = $formContainer.find(settings.addToCartSelector);
      $cartCountSelector = $(settings.cartCountSelector);
      $cartCostSelector  = $(settings.cartCostSelector);
      $toggleCartButton  = $(settings.toggleCartButton);
      $modal             = null;
      $prependDrawerTo   = $(settings.prependDrawerTo);

      // CSS Checks
      $cssTransforms   = Modernizr.csstransforms;
      $cssTransforms3d = Modernizr.csstransforms3d;

      // General Selectors
      $w    = $(window);
      $body = $('body');
      $html = $('html');

      // Track cart activity status
      isUpdating = false;

      // Check if we can use .load
      $nojQueryLoad = $html.hasClass('lt-ie9');
      if ($nojQueryLoad) {
        settings.useCartTemplate = false;
      }

      // Setup ajax quantity selectors on the any template if enableQtySelectors is true
      if (settings.enableQtySelectors) {
        qtySelectors();
      }

      // Enable the ajax cart
      if (!settings.disableAjaxCart) {
        // Handle each case add to cart method
        switch (settings.method) {
          case 'modal':
            modalSetup();
            break;

          case 'drawer':
            drawerSetup();
            break;
        }

        // Escape key closes cart
        $(document).keyup( function (evt) {
          if (evt.keyCode == 27) {
            switch (settings.method) {
              case 'drawer':
                hideDrawer();
                break;
              case 'modal':
                hideModal();
                break;
            }
          }
        });

        if ( $addToCart.length ) {
          // Take over the add to cart form submit
          formOverride();
        }
      }

      // Run this function in case we're using the quantity selector outside of the cart
      adjustCart();
    };

    updateCountPrice = function (cart) {
      if ($cartCountSelector) {
        $cartCountSelector.html(cart.item_count).removeClass('hidden-count');

        if (cart.item_count === 0) {
          $cartCountSelector.addClass('hidden-count');
        }
      }
      if ($cartCostSelector) {
        $cartCostSelector.html(Shopify.formatMoney(cart.total_price, ""));
      }
    };

    modalSetup = function () {
      // Create modal DOM elements with handlebars.js template
      var source   = $("#modalTemplate").html(),
          template = Handlebars.compile(source);

      // Append modal and overlay to body
      $body.append(template).append('<div id="ajaxifyCart-overlay"></div>');

      // Modal selectors
      $modalContainer = $('#ajaxifyModal');
      $modalOverlay   = $('#ajaxifyCart-overlay');
      $cartContainer  = $('#ajaxifyCart');

      // Close modal when clicking the overlay
      $modalOverlay.on('click', hideModal);

      // Create a close modal button
      $modalContainer.prepend('<button class="ajaxifyCart--close" title="' + "Close" + '">' + "Close" + '</button>');
      $closeCart = $('.ajaxifyCart--close');
      $closeCart.on('click', hideModal);

      // Add a class if CSS translate isn't available
      if (!$cssTransforms) {
        $modalContainer.addClass('no-transforms')
      }

      // Update modal position on screen changes
      $(window).on({
        orientationchange: function(e) {
          if ($modalContainer.hasClass('is-visible')) {
            sizeModal('resize');
          }
        }, resize: function(e) {
          // IE8 fires this when overflow on body is changed. Ignore IE8.
          if (!$nojQueryLoad && $modalContainer.hasClass('is-visible')) {
            sizeModal('resize');
          }
        }
      });

      // Toggle modal with cart button
      setToggleButtons();
    };

    showModal = function (toggle) {
      $body.addClass('ajaxify-modal--visible');
      // Build the cart if it isn't already there
      if ( !cartInit && toggle ) {
        Shopify.getCart(cartUpdateCallback);
      } else {
        sizeModal();
      }
    };

    sizeModal = function(isResizing) {
      if (!isResizing) {
        $modalContainer.css('opacity', 0);
      }

      // Position modal by negative margin
      $modalContainer.css({
        'margin-left': - ($modalContainer.outerWidth() / 2),
        'opacity': 1
      });

      $modalContainer.addClass('is-visible');
      $body.addClass('ajaxify-modal--visible');

      // scrollTop();

      toggleCallback({
        'is_visible': true
      });
    };

    hideModal = function (e) {
      // If product page closing modal take back to previous page
      // if ($body.hasClass('product')) {
      //   window.history.back();
      // }

      $body.removeClass('ajaxify-modal--visible');
      if (e) {
        e.preventDefault();
      }

      if ($modalContainer) {
        $modalContainer.removeClass('is-visible');
        $body.removeClass('ajaxify-lock');
      }

      toggleCallback({
        'is_visible': false
      });
    };

    drawerSetup = function () {
      // Create drawer DOM elements with handlebars.js template
      var source   = $("#drawerTemplate").html(),
          template = Handlebars.compile(source),
          data = {
            wrapperClass: $wrapperClass
          };

      // Append drawer (defaults to body)
      $prependDrawerTo.prepend(template(data));

      // Drawer selectors
      $drawerContainer = $('#ajaxifyDrawer');
      $cartContainer   = $('#ajaxifyCart');
      $drawerCaret     = $('.ajaxifyDrawer-caret > span');

      // Toggle drawer with cart button
      setToggleButtons();

      // Position caret and size drawer on resize if drawer is visible
      var timeout;
      $(window).resize(function() {
        clearTimeout(timeout);
        timeout = setTimeout(function(){
          if ($drawerContainer.hasClass('is-visible')) {
            positionCaret();
            sizeDrawer();
          }
        }, 500);
      });

      // Position the caret the first time
      positionCaret();

      // Position the caret
      function positionCaret() {
        if ($toggleCartButton.offset()) {
          // Get the position of the toggle button to align the carat with
          var togglePos = $toggleCartButton.offset(),
              toggleWidth = $toggleCartButton.outerWidth(),
              toggleMiddle = togglePos.left + toggleWidth/2;

          $drawerCaret.css('left', toggleMiddle + 'px');
        }
      }
    };

    showDrawer = function (toggle) {
      // opening the drawer for the first time
      if ( !cartInit && toggle) {
        Shopify.getCart(cartUpdateCallback);
      }
      // simple toggle? just size it
      else if ( cartInit && toggle ) {
        sizeDrawer();
      }

      // Show the drawer
      $drawerContainer.addClass('is-visible');

      scrollTop();

      toggleCallback({
        'is_visible': true
      });
    };

    hideDrawer = function () {
      $drawerContainer.removeAttr('style').removeClass('is-visible');
      scrollTop();
      toggleCallback({
        'is_visible': false
      });
    };

    sizeDrawer = function ($empty) {
      if ($empty) {
        $drawerContainer.css('height', '0px');
      } else {
        $drawerHeight = $cartContainer.outerHeight();
        $('.cart-row img').css('width', 'auto'); // fix Chrome image size bug
        $drawerContainer.css('height',  $drawerHeight + 'px');
      }
    };

    loadCartImages = function () {
      // Size cart once all images are loaded
      var cartImages = $('img', $cartContainer),
          count = cartImages.length,
          index = 0;

      cartImages.on('load', function() {
        index++;

        if (index==count) {
          switch (settings.method) {
            case 'modal':
              sizeModal();
              break;
            case 'drawer':
              sizeDrawer();
              break;
          }
        }
      });
    };

    formOverride = function () {
      $formContainer.submit(function(e) {
        e.preventDefault();

        // Add class to be styled if desired
        $addToCart.removeClass('is-added').addClass('is-adding');

        // Remove any previous quantity errors
        $('.qty-error').remove();

        Shopify.addItemFromForm(e.target, itemAddedCallback, itemErrorCallback);

      });
    };

    itemAddedCallback = function (product) {
      $addToCart.removeClass('is-adding').addClass('is-added');

      Shopify.getCart(cartUpdateCallback);
    };

    itemErrorCallback = function (XMLHttpRequest, textStatus) {
      switch (settings.method) {


      }

      var data = eval('(' + XMLHttpRequest.responseText + ')');
      if (!!data.message) {
        if (data.status == 422) {
          $formContainer.after('<div class="errors qty-error">'+ data.description +'</div>')
        }
      }
    };

    cartUpdateCallback = function (cart) {
      // Update quantity and price
      updateCountPrice(cart);

      Events.trigger("ajaxcart:cartUpdate");

      switch (settings.method) {
        case 'modal':
          buildCart(cart);
          break;
        case 'drawer':
          buildCart(cart);
          if ( !$drawerContainer.hasClass('is-visible') ) {
            showDrawer();
          } else {
            scrollTop();
          }
          break;
      }
    };

    setToggleButtons = function () {
      // Reselect the element in case it just loaded
      $toggleCartButton  = $(settings.toggleCartButton);

      if ($toggleCartButton) {
        // Turn it off by default, in case it's initialized twice
        $toggleCartButton.off('click');

        // Toggle the cart, based on the method
        $toggleCartButton.on('click', function(e) {
          e.preventDefault();

          switch (settings.method) {
            case 'modal':
              if ( $modalContainer.hasClass('is-visible') ) {
                hideModal();
              } else {
                showModal(true);
              }
              break;
            case 'drawer':
              break;
          }

        });

      }
    };

    buildCart = function (cart) {
      // Empty cart if using default layout or not using the .load method to get /cart
      if (!settings.useCartTemplate || cart.item_count === 0) {
        $cartContainer.empty();
      }

      // Show empty cart
      if (cart.item_count === 0) {
        $cartContainer.append('<h2>' + "Your cart is currently empty." + '</h2>');

        switch (settings.method) {
          case 'modal':
            sizeModal('resize');
            break;
          case 'drawer':
            sizeDrawer();

            if (!$drawerContainer.hasClass('is-visible') && cartInit) {
              sizeDrawer(true);
            }
            break;
        }
        return;
      }

      // Use the /cart template, or Handlebars.js layout based on theme settings
      if (settings.useCartTemplate) {
        cartTemplate(cart);
        return;
      }

      // Handlebars.js cart layout
      var items = [],
          item = {},
          data = {};

      var source   = $("#cartTemplate").html(),
          template = Handlebars.compile(source);

      // Add each item to our handlebars.js data
      $.each(cart.items, function(index, cartItem) {

        var itemAdd = cartItem.quantity + 1,
            itemMinus = cartItem.quantity - 1,
            itemQty = cartItem.quantity;

        /* Hack to get product image thumbnail
         *   - Remove file extension, add _120x, and re-add extension
         *   - Create server relative link
        */
        var prodImg;
        if (cartItem.image !== null) {
          prodImg = cartItem.image
            .replace(/(\.[^.]*)$/, '_small$1')
            .replace('http:', '');
        } else {
          prodImg =
            '//cdn.shopify.com/s/assets/admin/no-image-medium-cc9732cb976dd349a0df1d39816fbcc7.gif';
        }

        if (cartItem.properties !== null) {
          $.each(cartItem.properties, function(key, value) {
            if (key.charAt(0) === '_' || !value) {
              delete cartItem.properties[key];
            }
          });
        }

        if (cartItem.line_level_discount_allocations.length !== 0) {
          for (var discount in cartItem.line_level_discount_allocations) {
            var amount =
              cartItem.line_level_discount_allocations[discount].amount;

            cartItem.line_level_discount_allocations[
              discount
            ].formattedAmount = Shopify.formatMoney(
              amount,
              settings.moneyFormat
            );
          }
        }

        if (cart.cart_level_discount_applications.length !== 0) {
          for (var cartDiscount in cart.cart_level_discount_applications) {
            var cartAmount =
              cart.cart_level_discount_applications[cartDiscount]
                .total_allocated_amount;

            cart.cart_level_discount_applications[
              cartDiscount
            ].formattedAmount = Shopify.formatMoney(
              cartAmount,
              settings.moneyFormat
            );
          }
        }
        if ( cartItem.unit_price ) {
          var unitPrice = Shopify.formatMoney(cartItem.unit_price, settings.moneyFormat);
        } else {
          var unitPrice = '';
        }
        if ( cartItem.unit_price_measurement ) {
          var unitPriceMeasurement = cartItem.unit_price_measurement,
          unitPriceBaseUnit = cartItem.unit_price_measurement.reference_unit,
          unitReferenceValue = cartItem.unit_price_measurement.reference_value,
          showUnitReferenceValue = cartItem.unit_price_measurement.reference_value != 1 ? false : true;
        } else {
          var unitPriceMeasurement = '',
          unitPriceBaseUnit = '',
          unitReferenceValue = '',
          showUnitReferenceValue = false;
        }

        // Create item's data object and add to 'items' array
        item = {
          key: cartItem.key,
          line: index + 1, // Shopify uses a 1+ index in the API
          url: cartItem.url,
          img: prodImg,
          name: cartItem.product_title,
          variation: cartItem.variant_title,
          properties: cartItem.properties,
          itemAdd: cartItem.quantity + 1,
          itemMinus: cartItem.quantity - 1,
          itemQty: cartItem.quantity,
          price: Shopify.formatMoney(
            cartItem.original_line_price,
            settings.moneyFormat
          ),
          unitPrice: Shopify.formatMoney(
            cartItem.unit_price,
            settings.moneyFormat
          ),
          unitPriceMeasurement: unitPriceMeasurement,
          unitPriceBaseUnit: unitPriceBaseUnit,
          unitReferenceValue: unitReferenceValue,
          showUnitReferenceValue: showUnitReferenceValue,
          discountedPrice: Shopify.formatMoney(
            cartItem.final_line_price,
            settings.moneyFormat
          ),
          discounts: cartItem.line_level_discount_allocations,
          discountsApplied:
            cartItem.line_level_discount_allocations.length === 0 ? false : true,
          vendor: cartItem.vendor
        };

        items.push(item);
      });

      // Gather all cart data and add to DOM
      data = {
        items: items,
        note: cart.note,
        subTotalPrice: Shopify.formatMoney(
          cart.items_subtotal_price,
          settings.moneyFormat
        ),
        totalPrice: Shopify.formatMoney(
          cart.total_price,
          settings.moneyFormat
        ),
        cartTotalDiscounts: Shopify.formatMoney(
          cart.total_discount,
          settings.moneyFormat
        ),
        cartDiscounts: cart.cart_level_discount_applications,
        cartDiscountsApplied:
          cart.cart_level_discount_applications.length === 0 ? false : true,
        cartTotalSavings: cart.cart_level_discount_applications.length === 0 && cart.total_discount > 0
      };

      $cartContainer.append(template(data));

      // With new elements we need to relink the adjust cart functions
      adjustCart();

      // Setup close modal button and size drawer
      switch (settings.method) {
        case 'modal':
          loadCartImages();
          break;
        case 'drawer':
          if (cart.item_count > 0) {
            loadCartImages();
          } else {
            sizeDrawer(true);
          }
          break;
        default:
          break;
      }

      // Mark the cart as built
      cartInit = true;
    };

    cartTemplate = function (cart) {
      $cartContainer.load('/cart form[action="/cart"]', function() {

        // With new elements we need to relink the adjust cart functions
        adjustCart();

        // Size drawer at this point
        switch (settings.method) {
          case 'modal':
            loadCartImages();
            break;
          case 'drawer':
            if (cart.item_count > 0) {
              loadCartImages();
            } else {
              sizeDrawer(true);
            }
            break;
          default:
            break;
        }

        // Mark the cart as built
        cartInit = true;
      });
    }

    adjustCart = function () {
      // This function runs on load, and when the cart is reprinted

      // Create ajax friendly quantity fields and remove links in the ajax cart
      if (settings.useCartTemplate) {
        createQtySelectors();
      }

      // Prevent cart from being submitted while quantities are changing
      $body.on('submit', 'form.cart-form', function(evt) {
        if (isUpdating) {
          evt.preventDefault();
        }
      });

      // Update quantify selectors
      var qtyAdjust = $('.ajaxifyCart--qty span');

      // Add or remove from the quantity
      qtyAdjust.off('click');
      qtyAdjust.on('click', function() {
        if (isUpdating) {
          return;
        }

        var el = $(this),
            line = el.data('line'),
            qtySelector = el.siblings('.ajaxifyCart--num'),
            qty = parseInt( qtySelector.val() );

        qty = validateQty(qty);

        // Add or subtract from the current quantity
        if (el.hasClass('ajaxifyCart--add')) {
          qty = qty + 1;
        } else {
          qty = qty <= 0 ? 0 : qty - 1;
        }

        // If it has a data-line, update the cart.
        // Otherwise, just update the input's number
        if (line) {
          updateQuantity(line, qty);
        } else {
          qtySelector.val(qty);
        }

      });

      // Update quantity based on input on change
      var qtyInput = $('.ajaxifyCart--num');
      qtyInput.off('change');
      qtyInput.on('change', function() {
        if (isUpdating) {
          return;
        }

        var el = $(this),
            line = el.data('line'),
            qty = el.val();

        // Make sure we have a valid integer
        if( (parseFloat(qty) == parseInt(qty)) && !isNaN(qty) ) {
          // We have a number!
        } else {
          // Not a number. Default to 1.
          el.val(1);
          return;
        }

        // If it has a data-line, update the cart
        if (line) {
          updateQuantity(line, qty);
        }
      });

      // Highlight the text when focused
      qtyInput.off('focus');
      qtyInput.on('focus', function() {
        var el = $(this);
        setTimeout(function() {
          el.select();
        }, 50);
      });

      // Completely remove product
      $('.ajaxifyCart--remove').on('click', function(e) {
        var el = $(this),
            line = el.data('line') || null,
            qty = 0;

        // Without a data-line, let the default link action take over
        if (!line) {
          return;
        }

        e.preventDefault();
        updateQuantity(line, qty);
      });

      function updateQuantity(line, qty) {
        isUpdating = true;

        // Add activity classes when changing cart quantities
        if (!settings.useCartTemplate) {
          var row = $('.ajaxifyCart--row[data-line="' + line + '"]').addClass('ajaxifyCart--is-loading');
        } else {
          var row = $('.cart-row[data-line="' + line + '"]').addClass('ajaxifyCart--is-loading');
        }

        if ( qty === 0 ) {
          row.addClass('is-removed');
        }

        // Slight delay to make sure removed animation is done
        setTimeout(function() {
          Shopify.changeItem(line, qty, adjustCartCallback);
        }, 250);
      }

      // Save note anytime it's changed
      var noteArea = $('textarea[name="note"]');
      noteArea.off('change');
      noteArea.on('change', function() {
        var newNote = $(this).val();

        // Simply updating the cart note in case they don't click update/checkout
        Shopify.updateCartNote(newNote, function(cart) {});
      });
      if (typeof GoogleWalletButton === "function") GoogleWalletButton();
      if (typeof AmazonPaymentsPayButton === "function") AmazonPaymentsPayButton();
    };

    adjustCartCallback = function (cart) {

      // Update quantity and price
      updateCountPrice(cart);

      // Hide the modal or drawer if we're at 0 items
      if ( cart.item_count === 0 ) {
        // Handle each add to cart method
        switch (settings.method) {
          case 'modal':
            break;
          case 'drawer':
            hideDrawer();
            break;
        }
      }

      // Reprint cart on short timeout so you don't see the content being removed
      setTimeout(function() {
        isUpdating = false;
        Shopify.getCart(buildCart);
      }, 150)
    };

    createQtySelectors = function() {
      // If there is a normal quantity number field in the ajax cart, replace it with our version
      if ($('input[type="number"]', $cartContainer).length) {
        $('input[type="number"]', $cartContainer).each(function() {
          var el = $(this),
          currentQty = parseInt(el.val());

          var itemAdd = currentQty + 1,
            itemMinus = currentQty - 1,
            itemQty = currentQty + ' x';

          var source = $("#ajaxifyQty").html(),
            template = Handlebars.compile(source),
            data = {
              line: el.attr('data-line'),
              itemQty: itemQty,
              itemAdd: itemAdd,
              itemMinus: itemMinus
            };

          // Append new quantity selector then remove original
          el.after(template(data)).remove();
        });
      }

      // If there is a regular link to remove an item, add attributes needed to ajaxify it
      if ($('a[href^="/cart/change"]', $cartContainer).length) {
        $('a[href^="/cart/change"]', $cartContainer).each(function() {
          var el = $(this).addClass('ajaxifyCart--remove');
        });
      }
    };

    qtySelectors = function() {
      // Change number inputs to JS ones, similar to ajax cart but without API integration.
      // Make sure to add the existing name and id to the new input element
      var numInputs = $('input[type="number"]');

      // Qty selector has a minimum of 1 on the product page
      // and 0 in the cart (determined on qty click)
      var qtyMin = 0;

      if (numInputs.length) {
        numInputs.each(function() {
          var el = $(this),
              currentQty = parseInt(el.val()),
              inputName = el.attr('name'),
              inputId = el.attr('id');

          var itemAdd = currentQty + 1,
              itemMinus = currentQty - 1,
              itemQty = currentQty;

          var source   = $("#jsQty").html(),
              template = Handlebars.compile(source),
              data = {
                key: el.data('id'),
                itemQty: itemQty,
                itemAdd: itemAdd,
                itemMinus: itemMinus,
                inputName: inputName,
                inputId: inputId
              };

          // Append new quantity selector then remove original
          el.after(template(data)).remove();
        });

        // Setup listeners to add/subtract from the input
        $('.js--qty-adjuster').on('click', function() {
          var el = $(this),
              id = el.data('id'),
              qtySelector = el.siblings('.js--num'),
              qty = parseInt( qtySelector.val() );

          var qty = validateQty(qty);
          qtyMin = $body.hasClass('template-product') ? 1 : qtyMin;

          // Add or subtract from the current quantity
          if (el.hasClass('js--add')) {
            qty = qty + 1;
          } else {
            qty = qty <= qtyMin ? qtyMin : qty - 1;
          }

          // Update the input's number
          qtySelector.val(qty);
        });

      }
    };

    scrollTop = function () {
      if ($body.scrollTop() > 0 || $html.scrollTop() > 0) {
        $('html, body').animate({
          scrollTop: 0
        }, 250, 'swing');
      }
    };

    toggleCallback = function (data) {
      // Run the callback if it's a function
      if (typeof settings.onToggleCallback == 'function') {
        settings.onToggleCallback.call(this, data);
      }
    };

    validateQty = function (qty) {
      if((parseFloat(qty) == parseInt(qty)) && !isNaN(qty)) {
        // We have a valid number!
        return qty;
      } else {
        // Not a number. Default to 1.
        return 1;
      }
    };

    module = {
      init: init
    };

    return module;

  }(ajaxifyShopify || {}, jQuery));


  /*! Magnific Popup - v1.0.0 - 2015-03-30
  * http://dimsemenov.com/plugins/magnific-popup/
  * Copyright (c) 2015 Dmitry Semenov; */
  !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isIE7=-1!==c.indexOf("MSIE 7."),b.isIE8=-1!==c.indexOf("MSIE 8."),b.isLowIE=b.isIE7||b.isIE8,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",b.ev=c.mainEl&&c.mainEl.length?c.mainEl.eq(0):d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.wrap.css(b.fixedContentPos?{overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}:{top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),b.currTemplate[d]=f?a(f):!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||2!==c.which&&!c.ctrlKey&&!c.metaKey){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(a,c){if(void 0===c||c===!1)return!0;if(e=a.split("_"),e.length>1){var d=b.find(p+"-"+e[0]);if(d.length>0){var f=e[1];"replaceWith"===f?d[0]!==c[0]&&d.replaceWith(c):"img"===f?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(p+"-"+a).html(c)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery",g=Boolean(a.fn.mfpFastClick);return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s),h=g?"mfpFastClick":"click";e[h](function(){b.prev()}),f[h](function(){b.next()}),b.isIE7&&(x("b",e[0],!1,!0),x("a",e[0],!1,!0),x("b",f[0],!1,!0),x("a",f[0],!1,!0)),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowLeft&&g&&b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),function(){var b=1e3,c="ontouchstart"in window,d=function(){v.off("touchmove"+f+" touchend"+f)},e="mfpFastClick",f="."+e;a.fn.mfpFastClick=function(e){return a(this).each(function(){var g,h=a(this);if(c){var i,j,k,l,m,n;h.on("touchstart"+f,function(a){l=!1,n=1,m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0],j=m.clientX,k=m.clientY,v.on("touchmove"+f,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches,n=m.length,m=m[0],(Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)&&(l=!0,d())}).on("touchend"+f,function(a){d(),l||n>1||(g=!0,a.preventDefault(),clearTimeout(i),i=setTimeout(function(){g=!1},b),e())})})}h.on("click"+f,function(){g||e()})})},a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+f+" click"+f),c&&v.off("touchmove"+f+" touchend"+f)}}(),A()});




// sections.js
window.theme = window.theme || {};

/* Shopify Library Loader */
theme.Helpers = (function() {
  var touchDevice = false;

  function setTouch() {
    touchDevice = true;
  }

  function isTouch() {
    return touchDevice;
  }
  return {
    setTouch: setTouch,
    isTouch: isTouch
  };
})();

theme.LibraryLoader = (function() {
  var types = {
    link: 'link',
    script: 'script'
  };

  var status = {
    requested: 'requested',
    loaded: 'loaded'
  };

  var cloudCdn = 'https://cdn.shopify.com/shopifycloud/';

  var libraries = {
    youtubeSdk: {
      tagId: 'youtube-sdk',
      src: 'https://www.youtube.com/iframe_api',
      type: types.script
    },
    plyrShopifyStyles: {
      tagId: 'plyr-shopify-styles',
      src: cloudCdn + 'shopify-plyr/v1.0/shopify-plyr.css',
      type: types.link
    },
    modelViewerUiStyles: {
      tagId: 'shopify-model-viewer-ui-styles',
      src: cloudCdn + 'model-viewer-ui/assets/v1.0/model-viewer-ui.css',
      type: types.link
    }
  };

  function load(libraryName, callback) {
    var library = libraries[libraryName];

    if (!library) return;
    if (library.status === status.requested) return;

    callback = callback || function() {};
    if (library.status === status.loaded) {
      callback();
      return;
    }

    library.status = status.requested;

    var tag;

    switch (library.type) {
      case types.script:
        tag = createScriptTag(library, callback);
        break;
      case types.link:
        tag = createLinkTag(library, callback);
        break;
    }

    tag.id = library.tagId;
    library.element = tag;

    var firstScriptTag = document.getElementsByTagName(library.type)[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  function createScriptTag(library, callback) {
    var tag = document.createElement('script');
    tag.src = library.src;
    tag.addEventListener('load', function() {
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  function createLinkTag(library, callback) {
    var tag = document.createElement('link');
    tag.href = library.src;
    tag.rel = 'stylesheet';
    tag.type = 'text/css';
    tag.addEventListener('load', function() {
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  return {
    load: load
  };
})();

theme.Sections = function Sections() {
  this.constructors = {};
  this.instances = [];

  $(document)
    .on('shopify:section:load', this._onSectionLoad.bind(this))
    .on('shopify:section:unload', this._onSectionUnload.bind(this))
    .on('shopify:section:select', this._onSelect.bind(this))
    .on('shopify:section:deselect', this._onDeselect.bind(this))
    .on('shopify:block:select', this._onBlockSelect.bind(this))
    .on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

theme.Sections.prototype = _.assignIn({}, theme.Sections.prototype, {
  _createInstance: function(container, constructor) {
    var $container = $(container);
    var id = $container.attr('data-section-id');
    var type = $container.attr('data-section-type');

    constructor = constructor || this.constructors[type];

    if (_.isUndefined(constructor)) {
      return;
    }

    var instance = _.assignIn(new constructor(container), {
      id: id,
      type: type,
      container: container
    });

    this.instances.push(instance);
  },

  _onSectionLoad: function(evt) {
    var container = $('[data-section-id]', evt.target)[0];
    if (container) {
      this._createInstance(container);
    }
  },

  _onSectionUnload: function(evt) {
    this.instances = _.filter(this.instances, function(instance) {
      var isEventInstance = (instance.id === evt.detail.sectionId);

      if (isEventInstance) {
        if (_.isFunction(instance.onUnload)) {
          instance.onUnload(evt);
        }
      }

      return !isEventInstance;
    });
  },

  _onSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onSelect)) {
      instance.onSelect(evt);
    }
  },

  _onDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onDeselect)) {
      instance.onDeselect(evt);
    }
  },

  _onBlockSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockSelect)) {
      instance.onBlockSelect(evt);
    }
  },

  _onBlockDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockDeselect)) {
      instance.onBlockDeselect(evt);
    }
  },

  register: function(type, constructor) {
    this.constructors[type] = constructor;

    $('[data-section-type=' + type + ']').each(function(index, container) {
      this._createInstance(container, constructor);
    }.bind(this));
  }
});

theme.Disclosure = (function() {
  var selectors = {
    disclosureList: '[data-disclosure-list]',
    disclosureToggle: '[data-disclosure-toggle]',
    disclosureInput: '[data-disclosure-input]',
    disclosureOptions: '[data-disclosure-option]'
  };

  var classes = {
    listVisible: 'disclosure-list--visible'
  };

  function Disclosure($disclosure) {
    this.$container = $disclosure;
    this.cache = {};
    this._cacheSelectors();
    this._connectOptions();
    this._connectToggle();
    this._onFocusOut();
  }

  Disclosure.prototype = _.assignIn({}, Disclosure.prototype, {
    _cacheSelectors: function() {
      this.cache = {
        $disclosureList: this.$container.find(selectors.disclosureList),
        $disclosureToggle: this.$container.find(selectors.disclosureToggle),
        $disclosureInput: this.$container.find(selectors.disclosureInput),
        $disclosureOptions: this.$container.find(selectors.disclosureOptions)
      };
    },

    _connectToggle: function() {
      this.cache.$disclosureToggle.on(
        'click',
        function(evt) {
          var ariaExpanded =
            $(evt.currentTarget).attr('aria-expanded') === 'true';
          $(evt.currentTarget).attr('aria-expanded', !ariaExpanded);

          this.cache.$disclosureList.toggleClass(classes.listVisible);
        }.bind(this)
      );
    },

    _connectOptions: function() {
      this.cache.$disclosureOptions.on(
        'click',
        function(evt) {
          this._submitForm($(evt.currentTarget).data('value'));
        }.bind(this)
      );
    },

    _onFocusOut: function() {
      this.cache.$disclosureToggle.on(
        'focusout',
        function(evt) {
          var disclosureLostFocus =
            this.$container.has(evt.relatedTarget).length === 0;

          if (disclosureLostFocus) {
            this._hideList();
          }
        }.bind(this)
      );

      this.cache.$disclosureList.on(
        'focusout',
        function(evt) {
          var childInFocus =
            $(evt.currentTarget).has(evt.relatedTarget).length > 0;
          var isVisible = this.cache.$disclosureList.hasClass(
            classes.listVisible
          );

          if (isVisible && !childInFocus) {
            this._hideList();
          }
        }.bind(this)
      );

      this.$container.on(
        'keyup',
        function(evt) {
          if (evt.which !== slate.utils.keyboardKeys.ESCAPE) return;
          this._hideList();
          this.cache.$disclosureToggle.focus();
        }.bind(this)
      );

      this.bodyOnClick = function(evt) {
        var isOption = this.$container.has(evt.target).length > 0;
        var isVisible = this.cache.$disclosureList.hasClass(
          classes.listVisible
        );

        if (isVisible && !isOption) {
          this._hideList();
        }
      }.bind(this);

      $('body').on('click', this.bodyOnClick);
    },

    _submitForm: function(value) {
      this.cache.$disclosureInput.val(value);
      this.$container.parents('form').submit();
      this.cache.$disclosureToggle.html(value);
    },

    _hideList: function() {
      this.cache.$disclosureList.removeClass(classes.listVisible);
      this.cache.$disclosureToggle.attr('aria-expanded', false);
    },

    unload: function() {
      $('body').off('click', this.bodyOnClick);
      this.cache.$disclosureOptions.off();
      this.cache.$disclosureToggle.off();
      this.cache.$disclosureList.off();
      this.$container.off();
    }
  });

  return Disclosure;
})();

$(document).ready(function() {

  (function() {
    $(document).on('shopify:section:load', function(event) {
      $('.no-fouc').removeClass('no-fouc');
      $('.load-wait').addClass('hide');

      // Call Fancybox globally on all elements with class fancybox
      $(".fancybox").fancybox({
        helpers: {
          overlay: {
            locked: false
          }
        }
      });
      //<![CDATA[
      jQuery(function() {
        jQuery('#sidebar ul li a').each(function() {
          if (jQuery(this).attr('href')  ===  window.location.pathname) {
            jQuery(this).addClass('current');
          }
        });
      });
      //]]>
      // Scroll to top
      $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
          $('.scrollup').fadeIn();
        } else {
          $('.scrollup').fadeOut();
        }
      });
      $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
      });

    });

    $(".has_sub_menu").hover(function(){
      $(this).attr('aria-expanded', function(index, attr){
        return attr == 'false' ? true : 'false';
      });
    });

  }());
});

$(document).ready(function() {

  $(document).on('click', function(e) {
    if ( $(e.target).closest('.seeks').length ) {
      $("#searchbox").show();
    }else if ( ! $(e.target).closest('#searchbox').length ) {
      $('#searchbox').hide();
    }
  });

  $('.no-fouc').removeClass('no-fouc');
  $('.load-wait').addClass('hide');

  setTimeout(heightFix, 500);
  function heightFix() {
    $('.prod-image').matchHeight();
  }

  $('.collection-image').matchHeight();

  // Help old browsers with placeholders for inputs
  $('input, textarea').placeholder();

  // Call Fancybox on all elemnets with class "fancybox"
  $('.fancybox').fancybox();

  // Call Fancybox for search & mailing list signup + stop scroll to top
  $(".open_popup").fancybox({
    helpers: {
      overlay: {
        locked: false
      }
    }
  });

  // Scroll to top button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  // Show Hide Function
  function Toggle(show, hide) {
    var show = document.getElementById(show);
    show.classList.remove("hide");
    show.classList.add("show");
    show.style.display = 'block';

    var hide = document.getElementById(hide);
    hide.classList.remove("show");
    hide.classList.add("hide");
    hide.style.display='none';
  }

});

/*======================================================
  Slideshow Section
========================================================*/
theme.Slideshow = (function() {
  function Slideshow(container) {

    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var speed = $('.index_Slider').data('speed');

    $('.index_Slider').flexslider({
      animation: 'fade',
      slideshowSpeed: speed,
      animationSpeed: 600,
      directionNav: true,
      controlNav: false,
      pauseOnHover: true,
      pauseOnAction: true,
      nextText: '',
      prevText: ''
    });
  }

  return Slideshow;
})();

theme.Slideshow.prototype = _.assignIn({}, theme.Slideshow.prototype, {

  onBlockSelect: function(event) {

    // Ignore the cloned version
    var Slider = $(event.target).closest('.index_Slider').data('flexslider');
    var $slide =  $(event.target);
    var slideIndex = $slide.data('flexslider-index');
    // Go to selected slide, pause autoplay


    Slider.flexslider(slideIndex);
    Slider.flexslider("pause");

  },
  onBlockDeselect: function() {
    var Slider = $(event.target).closest('.index_Slider').data('flexslider');
    // Resume autoplay
    Slider.flexslider("play");

  }
});

/*======================================================
  Featured Collection Section
========================================================*/
theme.FeaturedProducts = (function() {
  function FeaturedProducts(container) {
	var $container = this.$container = $(container);

    // Collection carousel  edit to work with new theme editor
    var initHomepageCarousel = function(productCarousel) {
      productCarousel.owlCarousel({
        itemsCustom : [
          [0, 2],
          [450, 2],
          [600, 2],
          [700, 3],
          [1000, 4],
          [1200, 5],
          [1400, 5],
          [1600, 5]
        ],
        lazyLoad : false,
        pagination : false,
        navigation: true,
        navigationText : false,
        autoPlay : false,
        stopOnHover : true
      });
    };

    initHomepageCarousel($('.collection-carousel'));

    (function productQuickView() {
      var products = $('.collection-carousel .owl-item .lazyOwl', $container);

      $(products).each(function( index ) {
        var id = $( this ).data('productId');
        var quickView = $('[data-fancybox="quick-view-' + id + '"]');

        quickView.fancybox({
           type : 'ajax',
           toolbar: false,
           infobar: false,
           arrows: false,
           touch: false,
           autoFocus: false,
           iframe : {
            preload: true,
            css : {
              width : '800px'
            }
           },
           baseClass: 'quickview-popup',
           afterShow: function () {
            var context = document.querySelector(".product-quick-view");

             Events.trigger("quickview:load", context);
             // Close fancybox after add to cart
             Events.on("ajaxcart:cartUpdate", function() {
               $.fancybox.close()
             });
           }
         });
      });
     })();

    $(document).on('shopify:section:unload', function(event) {
      var target = $(event.target);
      target.find('.collection-carousel').owlCarousel("destroy");
      $(document).off('.collection-carousel');
    });

    $(document).on('shopify:section:load', function(event) {
      initHomepageCarousel($(event.target).find('.collection-carousel'));
      $('.prod-image').matchHeight({ remove: true });
      setTimeout(heightFix, 500);
      function heightFix() {
      $('.prod-image').matchHeight();
      }
    });


  }

  FeaturedProducts.prototype = _.assignIn({}, FeaturedProducts.prototype, {});

  return FeaturedProducts;
})();

/*============================================================================
  Product Modules
==============================================================================*/

var Events = new EventEmitter3();
Events.trigger = Events.emit; // trigger alias

var mobile = window.matchMedia('(max-width: 740px)');
var tablet = window.matchMedia('(max-width: 979px) and (min-width: 741px)');
var device = window.matchMedia('(max-width: 980px)');
var desktop = window.matchMedia('(min-width: 980px)');

theme.ProductForm = function (context, sectionId, events, Product) {
    var formConfig = context.querySelector('#AddToCartForm');
    var config = JSON.parse(formConfig.dataset.productForm || '{}');

    (function quantity() {
      var element = context.querySelector("[name=quantity]");

      events.on("quantitycontrol:click", change);

      function change(value) {
        var quantity = parseInt(element.value) + value;

        if ( quantity < 1 ) {
          return false;
        }

        element.value = quantity;
      }
    })();

    (function quantity_controls() {
      Control(".quantity-control-up", 1);
      Control(".quantity-control-down", -1);

      function Control(selector, value) {
        var element = context.querySelector(selector);

        if ( !element ) {
          return false;
        }

        element.addEventListener("click", function (event) {
          event.preventDefault();
          events.trigger("quantitycontrol:click", value);
        });
      }
    })();

    if ( Product.variants.length == 1 ) {
      return false;
    }

    if ( config.quickview ) {
      var prodSelector = "qv-product-select-" + Product.id;
    } else {
      var prodSelector = sectionId + "-product-select-" + Product.id;
    }

    new Shopify.OptionSelectors(prodSelector, {
      product: Product,
      onVariantSelected: function(variant, selector) {

        if ( !variant ) {
          events.trigger("variantunavailable");
          return;
        }

        if ( Product.variants.length == 1 ) {
          return;
        }

        events.trigger("variantchange", variant);
        events.trigger("variantchange:option1:" + variant.option1);
        events.trigger("variantchange:option2:" + variant.option2);
        events.trigger("variantchange:option3:" + variant.option3);

        if ( variant.featured_media ) {
          Events.trigger("variantchange:image", variant.featured_media.id, context);
        }
      },
      enableHistoryState: config.enable_history
    });

    (function single_option_selectors() {
      var elements = context.querySelectorAll(".single-option-selector");

      elements.forEach(Selector);

      function Selector(element, index) {
        var option_position = index + 1;

        events.on("swatch:change:" + option_position, change);

        function change(value) {
          $(element).val(value).trigger("change");
        }
      }
    })();

    (function swatches() {
      var elements = context.querySelectorAll("[type=radio]");

      var states = {
        sold_out: function (element) {
          element.parentElement.classList.add("soldout");
        },
        available: function (element) {
          element.parentElement.classList.remove("soldout");
        }
      };

      events.on("variantunavailable", set_unavailable);

      elements.forEach(Swatch);

      function set_unavailable() {
        var selected = {};

        var selected_elements = $(elements).filter(":checked").toArray();

        selected_elements.forEach(function (element) {
          var option = "option" + element.getAttribute("data-position");
          var value = element.value;

          selected[option] = value;
        });

        elements.forEach(function (element) {
          var available = false;

          var current_option = "option" + element.getAttribute("data-position");

          var current_value = element.value;

          var other_options = ["option1", "option2", "option3"].filter(function (option) {
            return selected[option] && option != current_option;
          });

          Product.variants.forEach(function (variant) {
            if ( !variant.available ) {
              return;
            }

            if ( variant[current_option] != current_value ) {
              return;
            }

            if ( variant[other_options[0]] == selected[other_options[0]] && variant[other_options[1]] == selected[other_options[1]] ) {
              available = true;
              return;
            }
          });

          if ( available ) {
            states.available(element);
          } else {
            states.sold_out(element);
          }
        });
      }

      function Swatch(element) {
        var option_position = element.getAttribute("data-position");

        var current_option = "option" + option_position;

        var other_options = ["option1", "option2", "option3"].filter(function (option) {
          return option != current_option;
        });

        element.addEventListener("change", function (event) {
          events.trigger("swatch:change:" + option_position, element.value);
        });

        events.on("variantchange:option" + option_position + ":" + element.value, select);

        events.on("variantchange", set_availability);

        function select() {
          element.checked = true;
        }

        function set_availability(current_variant) {
          var available = false;

          Product.variants.forEach(function (variant) {
            if ( !variant.available ) {
              return;
            }

            if ( variant[current_option] != element.value ) {
              return;
            }

            if ( variant[other_options[0]] != current_variant[other_options[0]] ) {
              return;
            }

            if ( variant[other_options[1]] != current_variant[other_options[1]] ) {
              return;
            }

            available = true;
          });

          if ( available ) {
            states.available(element);
          } else {
            states.sold_out(element);
          }
        }
      }
    })();

    (function price() {
      var element = context.querySelector(".price__regular .price-item--regular");

      events.on("variantchange", function (variant) {
        var price = money(variant.price);
        element.innerHTML = price;

        events.on("variantunavailable", function (variant) {
          price = config.unavailable;
          element.innerHTML = price;
        });
      });
    })();

    (function price_classes() {
      var element = context.querySelector("[data-price]");

      events.on("variantchange", function (variant) {
        if ( variant.available && variant.compare_at_price > variant.price ) {
          element.classList.add('price--on-sale');
          element.classList.remove('price--sold-out');
        } else if ( !variant.available && variant.compare_at_price > variant.price ) {
          element.classList.add('price--sold-out');
          element.classList.add('price--on-sale');
        } else if ( !variant.available ) {
          element.classList.add('price--sold-out');
          element.classList.remove('price--on-sale');
        } else {
          element.classList.remove('price--on-sale');
          element.classList.remove('price--sold-out');
        }

        if (variant.unit_price_measurement) {
          element.classList.add('price--unit-available');
        } else {
          element.classList.remove('price--unit-available');
        }
      });

    })();

    (function unit_price() {
      var element = context.querySelector("[data-unit-price]");
      var wrapper = context.querySelector(".price__unit");

      if ( !element ) {
        return false;
      }

      events.on("variantchange", function (variant) {
        var unitPrice = "";

        if (variant.unit_price) {
          unitPrice =
            Shopify.formatMoney(variant.unit_price, config.money_format); +
            ' ' +
            "per" +
            ' ' +
            getBaseUnit(variant);

            wrapper.style.display = "flex";
        } else {
          wrapper.style.display = "none";
        }

        element.innerHTML = unitPrice;
      });
    })();

    (function compare_price() {
      var saleEl = context.querySelector(".price__sale .price-item--sale");
      var regEl = context.querySelector(".price__sale .price-item--regular");

      if ( !saleEl ) {
        return false;
      }

      events.on("variantchange", function (variant) {
        var salePrice = "",
            regPrice = "";

        if ( variant.compare_at_price > variant.price ) {
          regPrice = money(variant.compare_at_price);
          salePrice = money(variant.price);
        }

        saleEl.innerHTML = salePrice;
        regEl.innerHTML = regPrice;
      });
    })();

    (function sku() {
      var element = context.querySelector(".variant_sku");

      if ( !element ) {
        return false;
      }

      events.on("variantchange", function (variant) {
        var variant_sku = variant.sku;
        element.innerHTML = variant_sku;
      });
      events.on("variantunavailable", function (variant) {
        var variant_sku = config.unavailable;
        element.innerHTML = variant_sku;
      });

    })();

    (function add_to_cart() {
      var element = context.querySelector(".add");

      events.on("variantchange", function (variant) {
        var text = config.button;
        var disabled = false;

        if ( !variant.available ) {
          text = config.sold_out;
          disabled = true;
        }

        element.value = text;
        element.disabled = disabled;
      });

      events.on("variantunavailable", function () {
        element.value = config.unavailable;
        element.disabled = true;
      });
    })();

    (function smart_payment_buttons() {
      var element = context.querySelector(".shopify-payment-button");

      if ( !element ) {
        return false;
      }

      events.on("variantchange", function (variant) {
        if ( !variant.available ) {
           element.style.display = 'none';
         } else {
           element.style.display = 'block';
         }
      });
    })();

    function money(cents) {
      return Shopify.formatMoney(cents, config.money_format);
    }

    function getBaseUnit(variant) {
     return variant.unit_price_measurement.reference_value === 1
       ? variant.unit_price_measurement.reference_unit
       : variant.unit_price_measurement.reference_value +
           variant.unit_price_measurement.reference_unit;
   }
}

theme.ProductGallery = function (context, sectionId, events, Product) {
  events.trigger = events.emit;

  var config = JSON.parse(context.querySelector('.product-photos').dataset.galleryConfig || '{}');
  var $main = $("#slider .slides.carousel-main ", context),
      $carouselNav = $('#thumbnails .carousel-nav', context);

    if ( !$main.length ) {
      return false;
    }

    /* Main Gallery Slider */
    var $carousel = $main.flickity({
      fade: true,
      wrapAround: true,
      cellAlign: 'left',
      draggable: true,
      contain: true,
      pageDots: false,
      prevNextButtons: config.mainSlider,
      autoPlay: false,
      selectedAttraction: 0.01,
      dragThreshold: 5,
      adaptiveHeight: false,
      imagesLoaded: true
    });

    var flkty = $carousel.data('flickity');

    /* Pause flickity drag on model play */
    $('.carousel-main', context).on('model:start', function(event, id) {
      if ($('[data-model-id='+ id +']').closest('ul.slides.product-image-container').length >= 1) {
       $('[data-model-id='+ id +']').closest('ul.slides.product-image-container').data('flickity').unbindDrag();
      }
    });
    $('.carousel-main', context).on('model:stop', function(event, id) {
      if ($('[data-model-id='+ id +']').closest('ul.slides.product-image-container').length >= 1) {
       $('[data-model-id='+ id +']').closest('ul.slides.product-image-container').data('flickity').bindDrag();
      }
    });

  (function focusControl() {
    /* set focus on load after flickity is ready */
    $carousel.on( 'ready.flickity', function() {
      var id = $(flkty.selectedElement).data('imageId');

      var $newMedia = $(
        '[data-product-single-media-wrapper]' +
          "[data-thumbnail-id='product-template-" + id + "']",
        context
      );

      if ( $newMedia.hasClass('external_video') ) {
          $('.product-video .plyr', context)
            .find('*')
            .addBack()
            .attr('tabIndex', '-1')
            .removeClass('focus-visible')
            .addClass('js-hide-focus');
          $('.shopify-model-viewer-ui__controls-overlay', context)
            .find('*')
            .addBack()
            .attr('tabIndex', '-1')
            .removeClass('focus-visible')
            .addClass('js-hide-focus');
          $('.product-video.videoWrapper iframe', context).removeAttr("tabIndex");
      } else if ( $newMedia.hasClass('video') ) {
        $('.product-video.videoWrapper iframe', context)
          .attr('tabIndex', '-1')
          .removeClass('focus-visible')
          .addClass('js-hide-focus');
        $('.shopify-model-viewer-ui__controls-overlay', context)
          .find('*')
          .addBack()
          .attr('tabIndex', '-1')
          .removeClass('focus-visible')
          .addClass('js-hide-focus');
      } else if ( $newMedia.hasClass('model') ) {
        $('.product-video.videoWrapper iframe', context)
          .attr('tabIndex', '-1')
          .removeClass('focus-visible')
          .addClass('js-hide-focus');
        $('.product-video .plyr', context)
          .find('*')
          .addBack()
          .attr('tabIndex', '-1')
          .removeClass('focus-visible')
          .addClass('js-hide-focus');
      } else if ( $newMedia.hasClass('image') ) {
        $('.product-video.videoWrapper iframe', context)
          .attr('tabIndex', '-1')
          .removeClass('focus-visible')
          .addClass('js-hide-focus');
        $('.product-video .plyr', context)
          .find('*')
          .addBack()
          .attr('tabIndex', '-1')
          .removeClass('focus-visible')
          .addClass('js-hide-focus');
        $('.shopify-model-viewer-ui__controls-overlay', context)
          .find('*')
          .addBack()
          .attr('tabIndex', '-1')
          .removeClass('focus-visible')
          .addClass('js-hide-focus');
      }

      $('.flickity-button', context)
        .find('*')
        .addBack()
        .attr('tabIndex', '-1')
       .addClass('js-hide-focus');

      $('.carousel-main.flickity-enabled', context)
        .attr('tabIndex', '-1')
        .addClass('js-hide-focus');

    });

    /* set focus on load after first variant is selected */
    Events.on('variantchange:image', function(id, context){
      var $newMedia = $(
        '[data-product-single-media-wrapper]' +
          "[data-thumbnail-id='" + sectionId + "-" + id + "']",
        context
      );

      if ( $newMedia.hasClass('external_video') ) {
        $( window ).on( "load", function() {
          $('.product-video .plyr', context)
            .find('*')
            .addBack()
            .attr('tabIndex', '-1')
            .addClass('js-hide-focus');
          $('.shopify-model-viewer-ui__controls-overlay', context)
            .find('*')
            .addBack()
            .attr('tabIndex', '-1')
            .addClass('js-hide-focus');
          $('.product-video.videoWrapper iframe', context).removeAttr("tabIndex");
        });

      } else if ( $newMedia.hasClass('video') ) {
        $( window ).on( "load", function() {
          $('.product-video.videoWrapper iframe', context)
            .attr('tabIndex', '-1')
            .addClass('js-hide-focus');
          $('.shopify-model-viewer-ui__controls-overlay', context)
            .find('*')
            .addBack()
            .attr('tabIndex', '-1')
            .addClass('js-hide-focus');
        });
      } else if ( $newMedia.hasClass('model') ) {
        $( window ).on( "load", function() {
          $('.product-video.videoWrapper iframe', context)
            .attr('tabIndex', '-1')
            .addClass('js-hide-focus');
          $('.product-video .plyr', context)
            .find('*')
            .addBack()
            .attr('tabIndex', '-1')
            .addClass('js-hide-focus');
        });
      } else if ( $newMedia.hasClass('image') ) {
        $( window ).on( "load", function(){
          $('.product-video.videoWrapper iframe', context)
            .attr('tabIndex', '-1')
            .addClass('js-hide-focus');
          $('.product-video .plyr', context)
            .find('*')
            .addBack()
            .attr('tabIndex', '-1')
            .addClass('js-hide-focus');
          $('.shopify-model-viewer-ui__controls-overlay', context)
            .find('*')
            .addBack()
            .attr('tabIndex', '-1')
            .addClass('js-hide-focus');
        });
      }

      /* ignore flex directional arrows on tab */
      $( window ).on( "load", function() {
        $('.flickity-button', context)
          .find('*')
          .addBack()
          .attr('tabIndex', '-1')
          .addClass('js-hide-focus');

        $('.carousel-main.flickity-enabled', context)
          .attr('tabIndex', '-1')
          .addClass('js-hide-focus');
      });
    });

  })();

  (function enlargePhoto() {
    // Create template for Facebook Button
    $.fancybox.defaults.btnTpl.fb = '<button data-fancybox-fb class="fancybox-button fancybox-button--fb" title="Facebook">' +
      '<svg viewBox="0 0 24 24">' +
      '<path d="M22.676 0H1.324C.594 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294h-3.13v-3.62h3.13V8.41c0-3.1 1.894-4.785 4.66-4.785 1.324 0 2.463.097 2.795.14v3.24h-1.92c-1.5 0-1.793.722-1.793 1.772v2.31h3.584l-.465 3.63h-3.12V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .594 23.408 0 22.676 0"/>' +
      '</svg>' +
      '</button>';

    // Create template for Twitter Button
    $.fancybox.defaults.btnTpl.tw = '<button data-fancybox-tw class="fancybox-button fancybox-button--tw" title="Twitter">' +
      '<svg viewBox="0 0 24 24">' +
      '<path d="M23.954 4.57c-.885.388-1.83.653-2.825.774 1.013-.61 1.793-1.574 2.162-2.723-.95.556-2.005.96-3.127 1.185-.896-.96-2.173-1.56-3.59-1.56-2.718 0-4.92 2.204-4.92 4.918 0 .39.044.765.126 1.124C7.69 8.094 4.067 6.13 1.64 3.16c-.427.723-.666 1.562-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.06c0 2.386 1.693 4.375 3.946 4.828-.413.11-.85.17-1.296.17-.314 0-.615-.03-.916-.085.63 1.952 2.445 3.376 4.604 3.416-1.68 1.32-3.81 2.105-6.102 2.105-.39 0-.78-.022-1.17-.066 2.19 1.394 4.768 2.21 7.557 2.21 9.054 0 14-7.497 14-13.987 0-.21 0-.42-.016-.63.962-.69 1.8-1.56 2.46-2.548l-.046-.02z"/>' +
      '</svg>' +
      '</button>';

    // Make buttons clickable using event delegation
    $('body').on('click', '[data-fancybox-fb]', function() {
      window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(window.location.href)+"&t="+encodeURIComponent(document.title), '','left=0,top=0,width=600,height=300,menubar=no,toolbar=no,resizable=yes,scrollbars=yes');
    });

    $('body').on('click', '[data-fancybox-tw]', function() {
      window.open('http://twitter.com/share?url='+encodeURIComponent(window.location.href)+'&text='+encodeURIComponent(document.title), '', 'left=0,top=0,width=600,height=300,menubar=no,toolbar=no,resizable=yes,scrollbars=yes');
    });
    var productFancy = $("[data-fancybox='product-"+ context.dataset.productId +"']");

    productFancy.fancybox({
      loop: true,
      parentEl: '.fancybox-wrapper',
      transitionDuration: 100,
      animationDuration: 500,
      animationEffect: "fade",
      buttons: [
        'fb',
        'tw',
        "zoom",
        "zoom-in-out",
        "fullScreen",
        "slideShow",
        "thumbs",
        "close"
      ],
      infobar: true,
      transitionEffect: "slide",
      thumbs: {
        autoStart: false, // Display thumbnails on opening
        hideOnClose: true, // Hide thumbnail grid when closing animation starts
        parentEl: ".fancybox-container", // Container is injected into this element
        axis: "y" // Vertical (y) or horizontal (x) scrolling
      },
      clickContent: function(current, event) {
        return current.type === "image" ? "next" : false;
      },
      beforeClose: function(instance, slide) {
        $carousel.flickity( 'select', this.index );
      }
     });
  })();

  (function thumbnails() {
    if ( config.thumbPosition == 'bottom' && config.thumbSlider == true ) {
      thumbnailSlider();
    }

    if ( !$carouselNav.length ) return false;

    function thumbnailSlider() {
      $carouselNav.flickity({
        asNavFor: $main,
        wrapAround: false,
        groupCells: true,
        cellAlign: 'left',
        draggable: false,
        contain: true,
        imagesLoaded: true,
        pageDots: false,
        autoPlay: false,
        selectedAttraction: 0.01,
        dragThreshold: 5,
        accessibility: false
      });
    }

    var $carouselNavCells = $carouselNav.find('.carousel-cell', context);
    var $carouselNavCellsImg = $carouselNav.find('.carousel-cell .product-single__thumbnail', context);

    if ( !$carouselNavCells.length ) return false;

    var navTop  = $carouselNav.position().top,
        navCellHeight = $carouselNavCellsImg.height(),
        navHeight = $carouselNav.height();


    /* on thumbnail click and key enter */
    $carouselNav.on( 'click', '.carousel-cell', function(event){
      var index = $( event.currentTarget ).index();
      var $el = $(this);
      var mediaId = $el.data('image-id');

      $carousel.flickity( 'select', index );
    });
    $carouselNav.on( 'keypress', '.carousel-cell', function(event){
      if(event.which == 13){ //Enter key pressed
        var index = $( event.currentTarget ).index();
        var $el = $(this);
        var mediaId = $el.data('image-id');

        $carousel.flickity( 'select', index );
      }
    });

    /* adjust slider thumb position */
    $carousel.on( 'select.flickity', function() {
      // set selected nav cell
      $carouselNav.find('.is-nav-selected').removeClass('is-nav-selected');
      var $selected = $carouselNavCells.eq( flkty.selectedIndex )
        .addClass('is-nav-selected');

        // thumbnail scroll nav
        var scrollY = $selected.position().top +
        $carouselNav.scrollTop() - ( navHeight + navCellHeight ) / 6;

        $carouselNav.animate({
          scrollTop: scrollY + 50
        });

    });

    /* adjust thumbnail sizes */
    if (config.thumbPosition != 'bottom') {
      var thumbWrapper = $('.vertical-carousel .thumb-slider-wrapper',context).width();
      $('#thumb-slider-wrapper .product-single__thumbnails-item', context).css("max-width", thumbWrapper);
      $('#thumb-slider-wrapper .product-single__thumbnails-item img', context).width(thumbWrapper + 20);
      $('#thumb-slider-wrapper .product-single__thumbnails-item img', context).height(thumbWrapper + 20);

      var thumbHeight = $('#thumb-slider-wrapper .product-single__thumbnails-item img', context).width();
      var thumbWrapHeight = (thumbHeight * config.thumbsShown) + 40;
      $('.vertical-carousel .thumb-slider-wrapper .thumb-slider-slides', context).css("max-height", thumbWrapHeight);
    }

    /* on slide change */
    $carousel.on( 'change.flickity', function( event, index ) {
      var $el = $('.carousel-cell', $carouselNav).eq(index),
          mediaId = $el.data('imageId');

      switchMedia(mediaId, $el);
      setActiveThumbnail(mediaId, $el);
    });

    /* on variant change */
    Events.on('variantchange:image', function(id, context) {
      if ( id === null ) return false;
      if ( $main.context != context ) return false;

      var index = $main.find("[data-image-id=" + id + "]").data('slideIndex'),
          $el = $('.carousel-cell', $carouselNav).eq(index);

      $carousel.flickity( 'select', index );
    });

    /* Media Events */
    var switchMedia = function(mediaId) {
        var $currentMedia = $(
          '[data-product-single-media-wrapper]' +
            ':not(.inactive)',
          $main
        );

        var $newMedia = $(
          '[data-product-single-media-wrapper]' +
            "[data-thumbnail-id='product-template-" +
            mediaId +
            "']",
          $main
        );
        var $otherMedia = $(
          '[data-product-single-media-wrapper]' +
            ":not([data-thumbnail-id='product-template-" +
            mediaId +
            "'])",
          $main
        );

        $currentMedia.trigger('mediaHidden');
        $newMedia.addClass('active-slide').removeClass('inactive').trigger('mediaVisible');
        $otherMedia.removeClass('active-slide').addClass('inactive');
      }
    var setActiveThumbnail = function(mediaId, $el) {
      if (typeof mediaId === 'undefined') {
        mediaId = $(
          '[data-product-single-media-wrapper]:not(.hide)',
          $main
        ).data('media-id');
      }
      var $thumbsWrapper = $('.thumb-slider-wrapper', context);
      var $thumbnailWrappers = $('.product-single__thumbnails-item', $thumbsWrapper);
      var $activeThumbnail = $(".product-single__thumbnails-item[data-image-id='" + mediaId + "']")

      $thumbnailWrappers
        .removeClass('active-slide')
        .removeAttr('aria-current');

      $activeThumbnail.addClass('active-slide');
      $activeThumbnail.attr('aria-current', true);

      var index = $main.find("[data-image-id=" + mediaId + "]").data('slideIndex');
    }

    /* fix when model is first item in gallery and no variant */
    $( document ).ready(function() {
      if ( $( ".carousel-main li", context).first().hasClass( "model-slide" ) ) {
        var $el = $( ".carousel-main li", context).first().find('[data-product-single-media-wrapper]');

        if ($( ".carousel-main li", context).closest('ul.slides.product-image-container').length >= 1) {
         $( ".carousel-main li", context).closest('ul.slides.product-image-container').data('flickity').unbindDrag();
        }
        $el.addClass('active-slide').removeClass('inactive');

        $('.carousel-main', context).on( 'click', '.product-media-container.model', function(){
          $('.shopify-model-viewer-ui .shopify-model-viewer-ui__controls-area').css("opacity", "1");
        });
      }
    });

    /* Editor Events */
    $(document).on('shopify:section:unload', function(event) {
      var $carousel = $main.flickity();
      var isFlickity = true;

      if (isFlickity) {
        $carousel.flickity('destroy');
        if ( config.thumbPosition == 'bottom' && config.thumbSlider == true ) {
          $carouselNav.flickity('destroy');
        }
      }
    });
  })();
}

// Youtube API callback
// eslint-disable-next-line no-unused-vars
function onYouTubeIframeAPIReady() {
  theme.ProductVideo.loadVideos(theme.ProductVideo.hosts.youtube);
}

theme.ProductVideo = (function(context, sectionId) {

  var videos = {};

  var hosts = {
    html5: 'html5',
    youtube: 'youtube'
  };

  var selectors = {
    productMediaWrapper: '[data-product-single-media-wrapper]'
  };

  var attributes = {
    enableVideoLooping: 'enable-video-looping',
    videoId: 'video-id'
  };

  function init(videoContainer, sectionId) {
    if (!videoContainer.length) {
      return;
    }

    var videoElement = videoContainer.find('iframe, video')[0];
    var mediaId = videoContainer.data('mediaId');

    if (!videoElement) {
      return;
    }

    videos[mediaId] = {
      mediaId: mediaId,
      sectionId: sectionId,
      host: hostFromVideoElement(videoElement),
      container: videoContainer,
      element: videoElement,
      ready: function() {
        createPlayer(this);
      }
    };

    var video = videos[mediaId];

    switch (video.host) {
      case hosts.html5:
        window.Shopify.loadFeatures([
          {
            name: 'video-ui',
            version: '1.0',
            onLoad: setupPlyrVideos
          }
        ]);
        theme.LibraryLoader.load('plyrShopifyStyles');
        break;
      case hosts.youtube:
        theme.LibraryLoader.load('youtubeSdk', setupYouTubeVideos);
        break;
    }
  }

  function setupPlyrVideos(errors) {
    if (errors) {
      fallbackToNativeVideo();
      return;
    }

    loadVideos(hosts.html5);
  }

  function setupYouTubeVideos() {
    if (!window.YT.Player) return;

    loadVideos(hosts.youtube);
  }

  function createPlayer(video) {
    if (video.player) {
      return;
    }

    var productMediaWrapper = video.container.closest(
      selectors.productMediaWrapper
    );

    var enableLooping = productMediaWrapper.data(attributes.enableVideoLooping);

    switch (video.host) {
      case hosts.html5:
        // eslint-disable-next-line no-undef
        video.player = new Shopify.Plyr(video.element, {
          loop: { active: enableLooping },
          muted: true,
          hideControlsOnPause: true,
          tooltips: { controls: false, seek: true }
        });
        video.player.on('play', event => {
          var mediaId = video.container.data('mediaId');
          var $otherMedia = $(
            '[data-product-single-media-wrapper]' +
              ":not([data-media-id='" +
              mediaId +
              "'])", context);

          $otherMedia.trigger('mediaHidden');
        });
        break;
      case hosts.youtube:
        var videoId = productMediaWrapper.data(attributes.videoId);

        video.player = new YT.Player(video.element, {
          videoId: videoId,
          events: {
            onStateChange: function(event) {
              if (event.data == 1) {
                var mediaId = video.container.data('mediaId');
                var $otherMedia = $(
                  '[data-product-single-media-wrapper]' +
                    ":not([data-media-id='" +
                    mediaId +
                    "'])", context);

                $otherMedia.trigger('mediaHidden');
              }
              if (event.data === 0 && enableLooping) event.target.seekTo(0);
            },
            onReady: function(event) {
              video.player.mute();
            }
          }
        });
        break;
    }

    productMediaWrapper.on('mediaHidden xrLaunch', function() {
      if (!video.player) return;

      if (video.host === hosts.html5) {
        video.player.pause();

        $('.plyr', productMediaWrapper)
          .find('*')
          .addBack()
          .attr('tabIndex', '-1')
          .addClass('js-hide-focus');
      }
      if (video.host === hosts.youtube && video.player.pauseVideo) {
        video.player.pauseVideo();

        $('.product-video.videoWrapper iframe', productMediaWrapper)
          .children()
          .addBack()
          .attr('tabIndex', '-1')
          .removeAttr("data-focus-visible-added")
          .removeClass('focus-visible')
          .addClass('js-hide-focus');
      }

    });

    productMediaWrapper.on('mediaVisible', function() {
      if (theme.Helpers.isTouch()) return;

      if (!video.player) return;

      if (video.host === hosts.html5) {

        if (desktop.matches) {
          video.player.play();
        }

        $('.plyr__controls', productMediaWrapper)
          .children()
          .addBack()
          .attr('tabIndex', '0')
          .removeClass('js-hide-focus');

      }

      if (video.host === hosts.youtube && video.player.playVideo) {
        if (desktop.matches) {
          video.player.playVideo();
        }

        $(".product-video.videoWrapper iframe", productMediaWrapper)
          .removeAttr("tabIndex")
          .removeClass('js-hide-focus');
      }
    });

  }

  function hostFromVideoElement(video) {
    if (video.tagName === 'VIDEO') {
      return hosts.html5;
    }

    if (video.tagName === 'IFRAME') {
      if (
        /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
          video.src
        )
      ) {
        return hosts.youtube;
      }
    }
    return null;
  }

  function loadVideos(host) {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];
        if (video.host === host) {
          video.ready();
        }
      }
    }
  }

  function fallbackToNativeVideo() {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];

        if (video.nativeVideo) continue;

        if (video.host === hosts.html5) {
          video.element.setAttribute('controls', 'controls');
          video.nativeVideo = true;
        }
      }
    }
  }

  function removeSectionVideos(sectionId) {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];

        if (video.sectionId === sectionId) {
          if (video.player) video.player.destroy();
          delete videos[key];
        }
      }
    }
  }

  return {
    init: init,
    hosts: hosts,
    loadVideos: loadVideos,
    removeSectionVideos: removeSectionVideos
  };

})();

theme.ProductModel = (function() {
  var modelJsonSections = {};
  var models = {};
  var xrButtons = {};

  var selectors = {
    mediaGroup: '[data-product-single-media-group]',
    xrButton: '[data-shopify-xr]'
  };

  function init(modelViewerContainers, sectionId) {
    modelJsonSections[sectionId] = {
      loaded: false
    };

    modelViewerContainers.each(function(index) {
      var $modelViewerContainer = $(this);
      var mediaId = $modelViewerContainer.data('media-id');
      var $modelViewerElement = $(
        $modelViewerContainer.find('model-viewer')[0]
      );
      var modelId = $modelViewerElement.data('model-id');

      if (index === 0) {
        var $xrButton = $modelViewerContainer
          .closest(selectors.mediaGroup)
          .find(selectors.xrButton);

        xrButtons[sectionId] = {
          $element: $xrButton,
          defaultId: modelId
        };
      }

      models[mediaId] = {
        modelId: modelId,
        sectionId: sectionId,
        $container: $modelViewerContainer,
        $element: $modelViewerElement
      };
    });

    window.Shopify.loadFeatures([
      {
        name: 'shopify-xr',
        version: '1.0',
        onLoad: setupShopifyXr
      },
      {
        name: 'model-viewer-ui',
        version: '1.0',
        onLoad: setupModelViewerUi
      }
    ]);
    theme.LibraryLoader.load('modelViewerUiStyles');
  }

  function setupShopifyXr(errors) {
    if (errors) return;

    if (!window.ShopifyXR) {
      document.addEventListener('shopify_xr_initialized', function() {
        setupShopifyXr();
      });
      return;
    }

    for (var sectionId in modelJsonSections) {
      if (modelJsonSections.hasOwnProperty(sectionId)) {
        var modelSection = modelJsonSections[sectionId];

        if (modelSection.loaded) continue;
        var $modelJson = $('#ModelJson-' + sectionId);

        window.ShopifyXR.addModels(JSON.parse($modelJson.html()));
        modelSection.loaded = true;
      }
    }
    window.ShopifyXR.setupXRElements();
  }

  function setupModelViewerUi(errors) {
    if (errors) return;

    for (var key in models) {
      if (models.hasOwnProperty(key)) {
        var model = models[key];
        if (!model.modelViewerUi) {
          var config = {
              controls: [
              'zoom-in',
              'zoom-out',
              'fullscreen',
            ],
            focusOnPlay: false
          };

          model.modelViewerUi = new Shopify.ModelViewerUI(model.$element, config);
        }
        setupModelViewerListeners(model);
      }
    }
  }

  function setupModelViewerListeners(model) {
    var xrButton = xrButtons[model.sectionId];

    model.$container.on('mediaVisible', function() {
      xrButton.$element.attr('data-shopify-model3d-id', model.modelId);
      if (theme.Helpers.isTouch()) return;

      var prodContext = $('#shopify-section-' + model.sectionId);

      if (desktop.matches) {
        model.modelViewerUi.play();
      }

      $('.carousel-main', prodContext).trigger('model:start', [model.modelId]);

      $('.shopify-model-viewer-ui__controls-area', model.$container)
        .children()
        .addBack()
        .attr('tabIndex', '0')
        .removeClass('js-hide-focus');

      $('.shopify-model-viewer-ui .shopify-model-viewer-ui__controls-area', model.$container).css("opacity","1");

      $('.shopify-model-viewer-ui__button', model.$container)
        .attr('tabIndex', '0')
        .removeClass('js-hide-focus');

    });
    model.$container
      .on('mediaHidden', function() {
        xrButton.$element.attr('data-shopify-model3d-id', xrButton.defaultId);
        var prodContext = $('#shopify-section-' + model.sectionId);

        if (model.modelViewerUi) {
          model.modelViewerUi.pause();
        }

        $('.carousel-main', prodContext).trigger('model:stop', [model.modelId]);

        $('.shopify-model-viewer-ui__controls-area', model.$container)
          .children()
          .addBack()
          .attr('tabIndex', '-1')
          .addClass('js-hide-focus');

        $('.shopify-model-viewer-ui .shopify-model-viewer-ui__controls-area', model.$container).css("opacity","0");

        $('.shopify-model-viewer-ui__button', model.$container)
          .attr('tabIndex', '-1')
          .addClass('js-hide-focus');
      })
      .on('xrLaunch', function() {
        if (model.modelViewerUi) {
          model.modelViewerUi.pause();
        }
      });
  }

  function removeSectionModels(sectionId) {
    for (var key in models) {
      if (models.hasOwnProperty(key)) {
        var model = models[key];
        if (model.sectionId === sectionId) {
          models[key].modelViewerUi.destroy();
          delete models[key];
        }
      }
    }
    delete modelJsonSections[sectionId];
  }

  return {
    init: init,
    removeSectionModels: removeSectionModels
  };
})();

theme.Product = (function () {
  function Product(context) {
    var $context = $(context);

    var events = new EventEmitter3();
        events.trigger = events.emit; // alias

    var productJson = context.querySelector('.product-json');

    if ( !productJson ) {
     return false;
    }

    var Product = productJson.innerHTML,
        Product = JSON.parse(Product || '{}');

    var sectionId = context.dataset.sectionId;

    if ( context.querySelector("[data-product-gallery]") ) {
      theme.ProductGallery(context, sectionId, events, Product);
    }

    if ( context.querySelector("[data-product-form]") ) {
      theme.ProductForm(context, sectionId, events, Product);
    }

    /* Product media */
    var $container = (this.$container = $context);
    this.ajaxEnabled = context.dataset.ajaxEnabled;

    context.querySelectorAll("[data-product-media-type-video]").forEach(function (context, sectionId) {
      var $el = $(context);
      theme.ProductVideo.init($el, sectionId);
    });

    var $modelViewerElements = $('[data-product-media-type-model]', this.$container);

    if ($modelViewerElements.length < 1) return;
      theme.ProductModel.init($modelViewerElements, sectionId);

    var self = this;

    $(document).on('shopify_xr_launch', function() {
      var $currentMedia = $(
        '[data-product-single-media-wrapper]' +
          ':not(.inactive)',
        self.$container
      );

      $currentMedia.trigger('xrLaunch');
    });

  }

  return Product;
})();

theme.ProductRecommendations = (function (context) {
  function ProductRecommendations(container) {

    var loadProductRecommendationsIntoSection = function() {
      // Look for an element with class 'product-recommendations'
      var productRecommendationsSection = document.querySelector(".page-width");
      var recommended_url = productRecommendationsSection.dataset.baseUrl;

      if (productRecommendationsSection === null) { return; }
      // Read product id from data attribute
      var productId = productRecommendationsSection.dataset.productId;

      // Build request URL
      var requestUrl = recommended_url + '?section_id=product-recommendations&limit=12&product_id=' + productId;

      // Create request and submit it using Ajax
      var request = new XMLHttpRequest();
      request.open("GET", requestUrl);
      request.onload = function() {
        if (request.status >= 200 && request.status < 300) {
          var container = document.createElement("div");
          container.innerHTML = request.response;
          if (!container.querySelector(".product-recommendations")) return false;
          productRecommendationsSection.parentElement.innerHTML = container.querySelector(".product-recommendations").innerHTML;
        }
      };
      request.send();
    };
    document.addEventListener("shopify:section:load", function(event) {
      if (event.detail.sectionId === "product-recommendations") {
        loadProductRecommendationsIntoSection();
      }
    });
    // Fetching the recommendations on page load
    loadProductRecommendationsIntoSection();

  }

  return ProductRecommendations;
})();

Events.on("quickview:load", function (container) {
  theme.Product(container);
  if (container.dataset.paymentButton === true ) {
    Shopify.PaymentButton.init()
  }
});

/*============================================================================
  Map Section
==============================================================================*/
theme.Maps = (function() {

  var errors = {
     address_no_results: "translation missing: en.general.map_errors.address_no_results",
     address_query_limit: "translation missing: en.general.map_errors.address_query_limit",
     address_error: "translation missing: en.general.map_errors.address_error",
     auth_error: "translation missing: en.general.map_errors.auth_error"
  };

  var google_api_loaded = false;

  function Map(container) {

    var events = new EventEmitter3();
    events.trigger = events.emit; // alias

    window.gm_authFailure = function () {
      google_api_loaded = false;

      if ( Shopify.designMode ) {
        events.trigger("gmauthfailure:themeeditor");
      } else {
        events.trigger("gmauthfailure");
      }
    };

    var config = container.querySelector("[data-map-config]").innerHTML,
        config = JSON.parse(config);

    if ( !config.api_key ) {
      return false;
    }

    (function section_container() {
      var element = container;

      events.on("gmauthfailure:themeeditor", error);
      events.on("map:error", error);

      function error() {
        element.classList.add("map-section-load-error");
      }
    })();

    (function background_image() {
      var element = container.querySelector("[data-bg-image]");

      events.on("gmauthfailure", show);

      function show() {
        element.classList.add("show-image");
      }
    })();

    (function overlay() {
      var element = container.querySelector("[data-map-overlay]");

      events.on("gmauthfailure:themeeditor", error);
      events.on("map:error", error);

      function error(message) {
        message = message || errors.auth_error;
        element.innerHTML = '<div class="map-section-error errors text-center">' + message + '</div>';
      }
    })();

    (function map() {
      var element = container.querySelector("[data-map]");

      events.on("ready", geolocate);

      function geolocate() {

        var geocoder = new google.maps.Geocoder();

        geocoder.geocode({ address: config.address }, function(results, status) {

          if ( status == google.maps.GeocoderStatus.OK ) {
            render(results);
          } else {
            error(status);
          }
        });
      }

      function render(results) {
        element.innerHTML = "";

        var map = new google.maps.Map(element, {
          zoom: config.zoom,
          center: results[0].geometry.location,
          draggable: false,
          clickableIcons: false,
          scrollwheel: false,
          disableDoubleClickZoom: true,
          styles: config.styles,
          disableDefaultUI: true
        });

        var center = map.getCenter();

        new google.maps.Marker({
          map: map,
          position: center
        });

        google.maps.event.addDomListener(window, "resize", $.debounce(250, function () {
          google.maps.event.trigger(map, "resize");
          map.setCenter(center);
        }));

        $(document).on("shopify:section:unload", function () {
          google.maps.event.clearListeners(map, "resize");
        });
      }

      function error(status) {
        var message = errors.address_error;

        switch (status) {
          case 'ZERO_RESULTS':
            message = errors.address_no_results;
            break;
          case 'OVER_QUERY_LIMIT':
            message = errors.address_query_limit;
            break;
          case 'REQUEST_DENIED':
            message = errors.auth_error;
            break;
        }

        if ( Shopify.designMode ) {
          events.trigger("map:error", message);
        }
      }
    })();

    if ( google_api_loaded ) {
      events.trigger("ready");
    } else {
      $.getScript("https://maps.googleapis.com/maps/api/js?key=" + config.api_key, function () {
        google_api_loaded = true;
        events.trigger("ready");
      });
    }
  }

  Map.prototype = _.assignIn({}, Map.prototype, {});

  return Map;
})();

/*======================================================
  Collection Page
========================================================*/
theme.Collection = (function() {
  function Collection(container) {

    var $container = this.$container = $(container);
    // Sidebar Toggle for screens below 980px wide
    var $Sidebar = $("#sidebar");
    $(document).on("click.toggleNav touch.toggleNav", ".show", function(){
      $Sidebar.toggleClass("open");
    });

    (function productQuickView() {
      var products = $('#product-loop .product-index', $container);

      $(products).each(function( index ) {
        var id = $( this ).data('productId');

        var quickView = $('[data-fancybox="quick-view-' + id + '"]');

        quickView.fancybox({
           type : 'ajax',
           toolbar: false,
           infobar: false,
           arrows: false,
           touch: false,
           autoFocus: false,
           iframe : {
            preload: true,
            css : {
              width : '800px'
            }
           },
           baseClass: 'quickview-popup',
           afterShow: function () {
            var context = document.querySelector(".product-quick-view");

             Events.trigger("quickview:load", context);
             // Close fancybox after add to cart
             Events.on("ajaxcart:cartUpdate", function() {
               $.fancybox.close()
             });
           }
         });
      });
     })();

  }
  Collection.prototype = _.assignIn({}, Collection.prototype, {});

  return Collection;
})();

/*======================================================
  Header Section
========================================================*/
var selectors = {
  disclosureLocale: '[data-disclosure-locale]',
  disclosureCurrency: '[data-disclosure-currency]'
};

theme.Header = (function() {
  function Header(container) {
    var $container = this.$container = $(container);

    $(document).ready( function() {
      if ($(window).width() >= 741) {
        $('.is_sticky').stickUp();
      }
    });
    $(document).ready( function() {
      $('.shopify-currency-form select').on('change', function() {
        $(this)
          .parents('form')
          .submit();
      });
    });
    $(document).ready( function() {
      $("ul.submenu li").on('mouseenter mouseleave', function (e) {
          if ($('ul', this).length) {
              var elm = $('ul:first', this);
              var off = elm.offset();
              var l = off.left;
              var w = elm.width();
              var docH = $(".page-wrap").height();
              var docW = $(".page-wrap").width();

              var isEntirelyVisible = (l + w <= docW);

              if (!isEntirelyVisible) {
                  $(this).addClass('edge');
              } else {
                  $(this).removeClass('edge');
              }
          }
      });
    });

    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/android/i))) {
      $("nav #main-nav li.dropdown:has(ul)").doubleTapToGo();
      $("nav #main-nav .submenu li.has_sub_menu").doubleTapToGo();
    }

    /* lang and currency disclosure */
    this.$container = $(container);
    this.cache = {};
    this.cacheSelectors();

    if (this.cache.$localeDisclosure.length) {
      this.localeDisclosure = new theme.Disclosure(
        this.cache.$localeDisclosure
      );
    }

    if (this.cache.$currencyDisclosure.length) {
      this.currencyDisclosure = new theme.Disclosure(
        this.cache.$currencyDisclosure
      );
    }
  }
  Header.prototype = _.assignIn({}, Header.prototype, {
    cacheSelectors: function() {
      this.cache = {
        $localeDisclosure: this.$container.find(selectors.disclosureLocale),
        $currencyDisclosure: this.$container.find(selectors.disclosureCurrency)
      };
    },

    onUnload: function() {
      if (this.cache.$localeDisclosure.length) {
        this.localeDisclosure.unload();
      }

      if (this.cache.$currencyDisclosure.length) {
        this.currencyDisclosure.unload();
      }
    }
  });
  return Header;
})();

/*======================================================
  MobileNav Section
========================================================*/
theme.mobileNav = (function() {
  function mobileNav(container) {

    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');

    $('#accordion').find('.accordion-toggle').click(function(){
      //Expand or collapse this panel
      $(this).toggleClass('open');
      $(this).next().slideToggle('fast');
      //Hide the other panels
      $(".accordion-content").not($(this).next()).slideUp('fast');
      $(".accordion-toggle").not($(this)).removeClass('open');
    });

    $('#accordion').find('.accordion-toggle2').click(function(){
      //Expand or collapse this panel
      $(this).toggleClass('open');
      $(this).next().slideToggle('fast');
      //Hide the other panels
      $(".accordion-content2").not($(this).next()).slideUp('fast');
      $(".accordion-toggle2").not($(this)).removeClass('open');
    });

    var initMobileslideout = function(slideout) {
      var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70,
        'touch': false
      });
      // Toggle button
      $('.mm-trigger').on('click', function() {
        slideout.toggle();
      });
      function close(eve) {
        eve.preventDefault();
        slideout.close();
      }
      slideout
      .on('beforeopen', function() {
        this.panel.classList.add('panel-open');
      })
      .on('open', function() {
        this.panel.addEventListener('click', close);
      })
      .on('beforeclose', function() {
        this.panel.classList.remove('panel-open');
        this.panel.removeEventListener('click', close);
      });
      $(document).on('shopify:section:select', '#shopify-section-mobile-navigation', function(event) {
        slideout.open();
      });
      $(document).on('shopify:section:deselect', '#shopify-section-mobile-navigation', function(event) {
        slideout.close();
      });
      $(document).on('shopify:section:load', '#shopify-section-header', function(event) {
        $('.mm-trigger').on('click', function() {
          slideout.toggle();
        });
      });
    };
    initMobileslideout($('Slideout'));

  }
  mobileNav.prototype = _.assignIn({}, mobileNav.prototype, {});
  return mobileNav;
})();

/*============================================================================
  Custom Page Modules
==============================================================================*/
theme.CustomPageSlideshow = function (context, events) {

  (function page_slideshow() {
    var speed = $('.flexslider').data('speed');
    var initSlider = function(custom_page_slideshow) {
	    $('.flexslider').flexslider({
	      animation: 'fade',
	      slideshowSpeed: speed,
	      animationSpeed: 600,
	      directionNav: true,
	      controlNav: false,
	      pauseOnHover: true,
	      pauseOnAction: true,
	      nextText: '',
	      prevText: ''
	    });
    };

    initSlider($('.thumbnail-slider'));

    $(document).on('shopify:section:unload', function(event) {
      var target = $(event.target);
      target.find('.flexslider').flexslider('destroy');
      $(document).off('.flexslider');
    });

    $(document).on('shopify:section:load', function(event) {
      initSlider($(event.target).find('.flexslider'));
    });

  })();
}

theme.CustomPageCollection = function (context, events) {
  (function Carousel() {
      var initCarousel = function(Carousel) {
        $('.collection-carousel').owlCarousel({
          itemsCustom : [
            [0, 2],
            [450, 2],
            [600, 2],
            [700, 3],
            [1000, 4],
            [1200, 4],
            [1400, 4],
            [1600, 4]
          ],
          lazyLoad : false,
          pagination : false,
          navigation: true,
          navigationText : false,
          autoPlay : false,
          stopOnHover : true
        });
      };

      initCarousel($('.collection-carousel'));

      $(document).on('shopify:section:unload', function(event) {
        var target = $(event.target);
        target.find('.collection-carousel').owlCarousel("destroy");
        $(document).off('.collection-carousel');
      });

      $(document).on('shopify:section:load', function(event) {
        initCarousel($(event.target).find('.collection-carousel'));
        $('.prod-image').matchHeight({ remove: true });
        setTimeout(heightFix, 500);
        function heightFix() {
        $('.prod-image').matchHeight();
        }
      });

  })();
}

theme.CustomPage = (function () {
  function CustomPage(container) {
    var events = new EventEmitter3();
    events.trigger = events.emit; // alias

    theme.CustomPageSlideshow();
    theme.CustomPageCollection(events);

  }

  CustomPage.prototype = _.assignIn({}, CustomPage.prototype, {});

  return CustomPage;
})();

/*============================================================================
  Footer Section
==============================================================================*/
var selectors = {
  disclosureLocale: '[data-disclosure-locale]',
  disclosureCurrency: '[data-disclosure-currency]'
};

theme.Footer = (function() {
  function Footer(container) {
    this.$container = $(container);
    this.cache = {};
    this.cacheSelectors();

    if (this.cache.$localeDisclosure.length) {
      this.localeDisclosure = new theme.Disclosure(
        this.cache.$localeDisclosure
      );
    }

    if (this.cache.$currencyDisclosure.length) {
      this.currencyDisclosure = new theme.Disclosure(
        this.cache.$currencyDisclosure
      );
    }
  }

  Footer.prototype = _.assignIn({}, Footer.prototype, {
    cacheSelectors: function() {
      this.cache = {
        $localeDisclosure: this.$container.find(selectors.disclosureLocale),
        $currencyDisclosure: this.$container.find(selectors.disclosureCurrency)
      };
    },

    onUnload: function() {
      if (this.cache.$localeDisclosure.length) {
        this.localeDisclosure.unload();
      }

      if (this.cache.$currencyDisclosure.length) {
        this.currencyDisclosure.unload();
      }
    }
  });

  return Footer;
})();
/*============================================================================
  Global Events
==============================================================================*/
$(document).ready(function(){
  var mobile = window.matchMedia('(max-width: 740px)');
  var tablet = window.matchMedia('(max-width: 979px) and (min-width: 741px)');
  var device = window.matchMedia('(max-width: 980px)');
  var desktop = window.matchMedia('(min-width: 980px)');

  if ( mobile.matches ) {
    Events.trigger("mediaquery:mobile");
  }
  if ( tablet.matches ) {
    Events.trigger("mediaquery:tablet");
  }
  if ( device.matches ) {
    Events.trigger("mediaquery:device");
  }
  if (desktop.matches) {
    Events.trigger("mediaquery:desktop");
  }
  window.addEventListener("resize", function () {
    if ( mobile.matches ) {
      Events.trigger("mediaquery:mobile");
    }
    if ( tablet.matches ) {
      Events.trigger("mediaquery:tablet");
    }
    if ( device.matches ) {
      Events.trigger("mediaquery:device");
    }
    if ( desktop.matches ) {
      Events.trigger("mediaquery:desktop");
    }
  });
  document.addEventListener('shopify:section:select', function(event){
    Events.trigger("editor:section:select", event);
  });
  document.addEventListener('shopify:section:deselect', function(event){
    Events.trigger("editor:section:deselect", event);
  });
  document.addEventListener('shopify:section:load', function(event){
    Events.trigger("editor:section:load", event);
  });
  document.addEventListener('shopify:section:unload', function(event){
    Events.trigger("editor:section:unload", event);
  });
  document.addEventListener('shopify:block:select', function(event){
    Events.trigger("editor:block:select", event);
  });
  document.addEventListener('shopify:block:deselect', function(event){
    Events.trigger("editor:block:deselect", event);
  });
  document.addEventListener('lazyloaded', function(e){
    Events.trigger("lazyLoad:complete");
  });
});

/*======================================================
  Register Sections
========================================================*/
$(document).ready(function() {
  var sections = new theme.Sections();
  sections.register('homepage-products', theme.FeaturedProducts);
  sections.register('slideshow-section', theme.Slideshow);
  sections.register('product-section', theme.Product);
  sections.register('product-recommendations', theme.ProductRecommendations);
  sections.register('header-section', theme.Header);
  sections.register('collection-section', theme.Collection);
  sections.register('mobile-navigation', theme.mobileNav);
  sections.register('map', theme.Maps);
  sections.register('custom-page-section', theme.CustomPage);
  sections.register('footer-section', theme.Footer);
});


/* Log Theme Version */
log = function() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(console);
    return Function.prototype.bind.apply(console.log, args);
}

log("Testament Version 7.3.2 by Underground", {bar: 1})();
