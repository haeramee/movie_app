(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{45:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),r=a(14),i=a.n(r),c=a(5),o=a.n(c),m=a(15),l=a(16),u=a(17),d=a(20),j=a(19),v=a(18),h=a.n(v),b=(a(45),a(0));var g=function(e){e.id;var t=e.year,a=e.title,s=e.summary,n=e.poster,r=e.genres,i=(e.lang,e.bg,e.yt);return Object(b.jsxs)("div",{className:"movie",children:[Object(b.jsx)("img",{src:n,alt:a,title:a}),Object(b.jsxs)("div",{className:"movie__data",children:[Object(b.jsx)("h3",{className:"movie__title",children:a}),Object(b.jsx)("h5",{className:"movie__year",children:t}),Object(b.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(b.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(b.jsxs)("p",{className:"movie__summary",children:[s.slice(0,100),"..."]}),Object(b.jsx)("a",{className:"movie__yt",href:"https://www.youtube.com/watch?v="+i,children:"GO TO TRAILER"})]})]})},p=(a(47),[]),_=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var a,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,(s=a.data.data.movies).forEach((function(e){return p.push(e)})),e.setState({movies:s,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(b.jsx)("section",{className:"container",children:t?Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(b.jsx)("div",{className:"movies",children:a.map((function(e){return Object(b.jsx)(g,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres,lang:e.language,bg:e.background_image,yt:e.yt_trailer_code},e.id)}))})})}}]),a}(n.a.Component);i.a.render(Object(b.jsx)(_,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.6ab80cfc.chunk.js.map