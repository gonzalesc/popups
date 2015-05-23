!function($){"use strict";function t(t,i,e,o,n){var r={url:spuvar.ajax_url,data:t,cache:!1,type:"POST",dataType:"json",timeout:3e4},n=n||!1,e=e||!1,o=o||!1;i&&(r.url=i),e&&(r.success=e),o&&(r.error=o),n&&(r.dataType=n),$.ajax(r)}function i(t,i,e){if(e){var o=new Date;o.setTime(o.getTime()+24*e*60*60*1e3);var n="; expires="+o.toGMTString()}else var n="";document.cookie=t+"="+i+n+"; path=/"}function e(t){for(var i=t+"=",e=document.cookie.split(";"),o=0;o<e.length;o++){for(var n=e[o];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(i))return n.substring(i.length,n.length)}return null}function o(){try{FB.Event.subscribe("edge.create",function(t,i){var e=$(i).parents(".spu-box").data("box-id");e&&SPU.hide(e)})}catch(t){}l=!0,clearInterval(h)}function n(t){var i=$(t.target).parents(".spu-box").data("box-id");i&&SPU.hide(i)}function r(t){if("on"==t.state){var i=jQuery(".spu-gogl").data("box-id");i&&SPU.hide(i)}}function a(t){if("confirm"==t.type){var i=jQuery(".spu-gogl").data("box-id");i&&SPU.hide(i)}}function s(){if(spuvar_social.facebook)try{FB.XFBML.parse()}catch(t){}if(spuvar_social.google)try{gapi.plusone.go()}catch(t){}if(spuvar_social.twitter)try{twttr.widgets.load()}catch(t){}}function u(){$(".spu-box form").each(function(){var t=$(this).attr("action");t&&$(this).attr("action",t.replace("?spu_action=spu_load",""))}),$.fn.wpcf7InitForm&&$(".spu-box div.wpcf7 > form").wpcf7InitForm()}var d=function(){function o(t){var i=d[t],e=$(window).width(),o=$(window).height(),n=i.outerHeight(),r=i.outerWidth(),a=i.data("width"),s=0,u=o/2-n/2,c="fixed",f=$(document).scrollTop();i.hasClass("spu-centered")&&(e>a&&(s=e/2-r/2),i.css({left:s,position:c,top:u})),n+50>o&&(c="absolute",u=f,i.css({position:c,top:u,bottom:"auto"}))}function n(t){var i=$(t).find(".spu-facebook");if(i.length){var e=i.find(".fb-like > span").width();if(0==e){var o=i.find(".fb-like").data("layout");i.append("box_count"==o?'<style type="text/css"> #'+$(t).attr("id")+" .fb-like iframe, #"+$(t).attr("id")+" .fb_iframe_widget span, #"+$(t).attr("id")+" .fb_iframe_widget{ height: 63px !important;width: 80px !important;}</style>":'<style type="text/css"> #'+$(t).attr("id")+" .fb-like iframe, #"+$(t).attr("id")+" .fb_iframe_widget span, #"+$(t).attr("id")+" .fb_iframe_widget{ height: 20px !important;width: 80px !important;}</style>")}}}function r(t,e,n){var r=d[t],a=$("#spu-bg-"+t),s=r.data("bgopa");if(r.is(":animated"))return!1;if(e===!0&&r.is(":visible")||e===!1&&r.is(":hidden"))return!1;if(e===!1){var u=parseInt(r.data("cookie"));u>0&&i("spu_box_"+t,!0,u),r.trigger("spu.box_close",[t])}else r.trigger("spu.box_open",[t]),$(window).resize(function(){o(t)}),o(t);var c=r.data("spuanimation"),f=r.data("close-on-conversion");return"fade"===c?e===!0?r.fadeIn("slow"):e===!1&&(f&&n||!n)&&r.fadeOut("slow"):e===!0?r.slideDown("slow"):e===!1&&(f&&n||!n)&&r.slideUp("slow"),e===!0&&s>0?a.fadeIn():e===!1&&f&&a.fadeOut(),e}var a=$(window).height(),u=spuvar.is_admin,d=[];return s(),$(".spu-content").children().first().css({"margin-top":0,"padding-top":0}).end().last().css({"margin-bottom":0,"padding-bottom":0}),$(".spu-box").each(function(){spuvar.safe_mode&&$(this).prependTo("body");var i=$(this),o=i.data("trigger"),s=0,c=1===parseInt(i.data("test-mode")),f=i.data("box-id"),p=1===parseInt(i.data("auto-hide")),l=parseInt(i.data("seconds-close")),h=parseInt(i.data("trigger-number"),10),m="percentage"==o?parseInt(i.data("trigger-number"),10)/100:.8,g=m*$(document).height();n(i),$(".spu-google").width($(".spu-google").width()-20),$(".spu-twitter").width($(".spu-twitter ").width()-50);var w=0,v=0,b=i.outerWidth(),_=i.find(".spu-content").width(),y=i.data("total");i.find(".spu-shortcode").wrapAll('<div class="spu_shortcodes"/>'),y&&!spuvar.disable_style&&$(window).width()>b&&(i.find(".spu-shortcode").each(function(){w+=$(this).width()}),v=_-w-y),v>0&&(i.find(".spu-shortcode").each(function(){$(this).css("margin-left",v/2)}),2==y?i.find(".spu-shortcode").last().css("margin-left",0):3==y&&i.find(".spu-shortcode").first().css("margin-left",0)),$(document).keyup(function(t){27==t.keyCode&&r(f,!1,!1)});var x=navigator.userAgent,T=x.match(/iPad/i)||x.match(/iPhone/i)?"touchstart":"click";$("body").on(T,function(t){void 0!==t.originalEvent&&r(f,!1,!1)}),$("body").on(T,".spu-box",function(t){t.stopPropagation()}),i.hide().css("left",""),d[f]=i;var k=function(){s&&clearTimeout(s),s=window.setTimeout(function(){var t=$(window).scrollTop(),i=t+a>=g;i?(p||$(window).unbind("scroll",k),r(f,!0,!1)):r(f,!1,!1)},100)},j=function(){s&&clearTimeout(s),s=window.setTimeout(function(){r(f,!0,!1)},1e3*h)},I=e("spu_box_"+f);if((void 0==I||""==I||u&&c)&&("seconds"==o?j():($(window).bind("scroll",k),k()),window.location.hash&&window.location.hash.length>0)){var P=window.location.hash,S;P.substring(1)===i.attr("id")&&setTimeout(function(){r(f,!0,!1)},100)}i.on("click",".spu-close-popup",function(){r(f,!1,!1),"percentage"==o&&$(window).unbind("scroll",k)}),$('a[href="#'+i.attr("id")+'"]').click(function(){return r(f,!0,!1),!1}),i.find(".gform_wrapper form").addClass("gravity-form");var F=i.find("form");if(F.length){var U=F.attr("action"),B=new RegExp(spuvar.site_url,"i");U&&U.length&&(B.test(U)||F.addClass("spu-disable-ajax"))}i.on("submit","form.spu-disable-ajax",function(){i.trigger("spu.form_submitted",[f]),r(f,!1,!0)}),i.on("submit",'form:not(".wpcf7-form, .gravity-form, .infusion-form, .spu-disable-ajax")',function(e){e.preventDefault();var o=!0,n=$(this),a=n.serialize(),s=n.attr("action"),u=function(t,i,e){console.log("Spu Form error: "+i+" - "+e)},d=function(t){var i=$(t).filter("#spu-"+f).html();$("#spu-"+f).html(i),$("#spu-"+f).find(".mc4wp-form-error").length||setTimeout(function(){r(f,!1,!0)},1e3*spuvar.seconds_confirmation_close)};return t(a,s,d,u,"html"),i.trigger("spu.form_submitted",[f]),o}),$("body").on("mailsent.wpcf7",function(){i.trigger("spu.form_submitted",[f]),r(f,!1,!0)}),$(document).on("gform_confirmation_loaded",function(){i.trigger("spu.form_submitted",[f]),r(f,!1,!0)}),i.on("submit",".infusion-form",function(t){t.preventDefault(),i.trigger("spu.form_submitted",[f]),r(f,!1,!0),this.submit()})}),{show:function(t){return r(t,!0,!1)},hide:function(t){return r(t,!1,!1)},request:function(i,e,o,n){return t(i,e,o,n)}}};if(spuvar.ajax_mode){var c={pid:spuvar.pid,referrer:document.referrer,is_category:spuvar.is_category,is_archive:spuvar.is_archive},f=function(t){$("body").append(t),window.SPU=d(),u()},p=function(t,i,e){console.log("Problem loading popups - error: "+i+" - "+e)};t(c,spuvar.ajax_mode_url,f,p,"html")}else jQuery(window).load(function(){window.SPU=d()});var l=!1,h=setInterval(function(){"undefined"==typeof FB||l||o()},1e3);if("undefined"!=typeof twttr)try{twttr.ready(function(t){t.events.bind("tweet",n),t.events.bind("follow",n)})}catch(m){}}(jQuery);