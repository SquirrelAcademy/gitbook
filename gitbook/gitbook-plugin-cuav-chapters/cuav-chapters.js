require(["gitbook","jQuery"],function(a,e){var t="cuav-expanded",n=".chapter",r="chapter",i=".articles",s="articles",c='<i class="cuav-trigger fa"></i>',p=20,l=0,u=function(){l=0;var t=a.state.config.pluginsConfig["cuav-chapters"];t.summaryMaxSize&&(p=t.summaryMaxSize),t.useLimitExpanded?d():(h(),v(e("li.chapter.active"))),g(l)},h=function(){for(var a=e(i).parent(n).children("a,span"),t=0;t<a.length;++t)o(a.eq(t),e(c))},o=function(a,t){(a.is("span")||a.is("a")&&a.attr("href")&&("javascript:;"===a.attr("href")||"#"===a.attr("href")))&&a.on("click",function(a){a.stopPropagation(),f(e(a.target).parent(n))}),t.on("click",function(a){a.preventDefault(),a.stopPropagation(),f(e(a.target).parent().parent(n))}),a.append(t)},f=function(a){a.hasClass(t)?a.removeClass(t):a.addClass(t)},v=function(a){a.addClass(t);var e=a.parent();e.hasClass("summary")||e.hasClass("book-summary")||0==a.length||v(e)},d=function(){var a=function(t){var n=e(t);n.is("ul")?($chapters=n.children("li.chapter"),l+=$chapters.length,e.each($chapters,function(e,t){a(t)})):n.is("li")&&n.has("ul.articles")&&a(n.children("ul.articles"))};a(".summary"),l>=p?(h(),v(e("li.chapter.active"))):e.each(e(".chapter > .articles"),function(a,t){e(t).css("max-height","9999px")})},g=function(t){var n=a.state.config.pluginsConfig["cuav-chapters"];n.navUrl&&e.ajax(n.navUrl,{type:"get",dataType:"json",cache:!1,success:function(a){if(a){for(var e=t,n=0;n<a.length;++n){++e;var r=a[n];r.links&&(e+=r.links.length)}i(a,e)}}});var i=function(n,i){var l,u=e(".summary"),f=a.state.config.pluginsConfig["cuav-chapters"];l=f.useLimitExpanded?t>=p?1:i>=p?0:-1:1;for(var d=0;d<n.length;++d){var g=n[d];if(g.name){var m=e("<li>").addClass(r),C=e("<a>").attr("href",g.url?g.url:"javascript:;").append(g.name);if(m.append(C),g.links){1===l&&o(C,e(c));var x=g.links,y=e("<ul>").addClass(s);l===-1&&y.css("max-height","9999px");for(var k=0;k<x.length;++k){var j=x[k];if(j.name){var b=e("<li>").addClass(r),$=e("<a>").attr("href",j.url?j.url:"javascript:;").append(j.name);y.append(b.append($))}m.append(y)}}u.append(m)}}0===l&&(e.each(e(".chapter > .articles"),function(a,t){e(t).css("max-height","")}),h(),v(e("li.chapter.active")))}};a.events.bind("page.change",function(){u()})});