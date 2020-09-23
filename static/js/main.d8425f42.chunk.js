(this.webpackJsonpspotify_clone=this.webpackJsonpspotify_clone||[]).push([[0],{48:function(e,t,a){e.exports=a(67)},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(16),r=a.n(c),o=(a(53),a(10)),i=a(26),s=a.n(i),m=Object(n.createContext)(),u=function(e){var t=e.initialState,a=e.reducer,c=e.children;return l.a.createElement(m.Provider,{value:Object(n.useReducer)(a,t)},c)},E=function(){return Object(n.useContext)(m)},p=(a(54),"".concat("http://accounts.spotify.com/authorize","?client_id=").concat("e250c14aef2e40e5b027154f126f9920","&redirect_uri=").concat("https://romamykhalchuk.github.io/spotify_clone/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true")),d=function(){return l.a.createElement("div",{className:"login"},l.a.createElement("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:"logo"}),l.a.createElement("a",{href:p},"LOGIN WITH SPOTIFY"))},f=(a(55),a(17)),y=a.n(f),_=a(84),v=(a(56),function(){var e,t=E(),a=Object(o.a)(t,1)[0].user;return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header__left"},l.a.createElement(y.a,null),l.a.createElement("input",{placeholder:"Search for artist"})),l.a.createElement("div",{className:"header__right"},l.a.createElement(_.a,{src:null===a||void 0===a||null===(e=a.images[0])||void 0===e?void 0:e.url,alt:null===a||void 0===a?void 0:a.display_name}),l.a.createElement("h4",null,null===a||void 0===a?void 0:a.display_name)))}),g=(a(62),function(e){var t=e.track,a=e.playSong;return l.a.createElement("div",{className:"songRow",onClick:function(){return a(t.id)}},l.a.createElement("img",{src:t.album.images[0].url,className:"songRow__album",alt:t.album.name}),l.a.createElement("div",{className:"songRow__info"},l.a.createElement("h1",null,t.name),l.a.createElement("p",null,t.artists.map((function(e){return e.name})).join(", ")," -"," ",t.album.name)))}),h=a(31),b=a.n(h),N=a(32),k=a.n(N),S=a(33),T=a.n(S),O=function(e){var t=e.spotify,a=E(),n=Object(o.a)(a,2),c=n[0],r=c.discover_weekly,i=c.token,s=(n[1],function(e){var t={context_uri:"spotify:track:".concat(e)};fetch("https://api.spotify.com/v1/me/player/play",{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(i),"Content-Type":"application/json"},body:JSON.stringify(t)})});return l.a.createElement("div",{className:"body"},l.a.createElement(v,{spotify:t}),l.a.createElement("div",{className:"body__info"},l.a.createElement("img",{src:null===r||void 0===r?void 0:r.images[0].url,alt:""}),l.a.createElement("div",{className:"body__infoText"},l.a.createElement("strong",{onClick:s},"PLAYLIST"),l.a.createElement("h2",null,"Discover weekly"),l.a.createElement("p",null,null===r||void 0===r?void 0:r.description))),l.a.createElement("div",{className:"body__songs"},l.a.createElement("div",{className:"body__icons"},l.a.createElement(b.a,{className:"body__shuffle"}),l.a.createElement(k.a,{fontSize:"large"}),l.a.createElement(T.a,null)),null===r||void 0===r?void 0:r.tracks.items.map((function(e){return l.a.createElement(g,{track:e.track,key:e.track.id,playSong:s})}))))},j=(a(63),a(37)),I=a.n(j),w=a(36),P=a.n(w),L=a(38),C=a.n(L),Y=a(35),A=a.n(Y),M=a(34),x=a.n(M),R=a(39),G=a.n(R),z=a(83),U=a(41),W=a.n(U),K=a(42),B=a.n(K),D=a(82),J=a(40),F=a.n(J),H=function(e){var t=e.spotify,a=E(),c=Object(o.a)(a,2),r=c[0],i=(r.token,r.item),s=r.playing,m=c[1];Object(n.useEffect)((function(){t.getMyCurrentPlaybackState().then((function(e){console.log(e),m({type:"SET_PLAYING",playing:e.is_playing}),m({type:"SET_ITEM",item:e.item})}))}),[t,m]);var u=function(){s?(t.pause(),m({type:"SET_PLAYING",playing:!1})):(t.play(),m({type:"SET_PLAYING",playing:!0}))};return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer__left"},l.a.createElement("img",{className:"footer__albumLogo",src:null===i||void 0===i?void 0:i.album.images[0].url,alt:null===i||void 0===i?void 0:i.name}),i?l.a.createElement("div",{className:"footer__songInfo"},l.a.createElement("h4",null,i.name),l.a.createElement("p",null,i.artists.map((function(e){return e.name})).join(", "))):l.a.createElement("div",{className:"footer__songInfo"},l.a.createElement("h4",null,"No song is playing"),l.a.createElement("p",null,"..."))),l.a.createElement("div",{className:"footer__center"},l.a.createElement(x.a,{className:"footer__green"}),l.a.createElement(A.a,{className:"footer__icon",onClick:function(){t.skipToPrevious(),t.getMyCurrentPlayingTrack().then((function(e){m({type:"SET_ITEM",item:e.item}),m({type:"SET_PLAYING",playing:!0})}))}}),s?l.a.createElement(P.a,{onClick:u,fontSize:"large",className:"footer__icon"}):l.a.createElement(I.a,{onClick:u,fontSize:"large",className:"footer__icon"}),l.a.createElement(C.a,{className:"footer__icon",onClick:function(){t.skipToNext(),t.getMyCurrentPlayingTrack().then((function(e){m({type:"SET_ITEM",item:e.item}),m({type:"SET_PLAYING",playing:!0})}))}}),l.a.createElement(G.a,{className:"footer__green"})),l.a.createElement("div",{className:"footer__right"},l.a.createElement(D.a,{container:!0,spacing:2},l.a.createElement(D.a,{item:!0},l.a.createElement(F.a,null)),l.a.createElement(D.a,{item:!0},l.a.createElement(W.a,null)),l.a.createElement(D.a,{item:!0,xs:!0},l.a.createElement(z.a,null)),l.a.createElement(D.a,{item:!0},l.a.createElement(B.a,null)))))},V=(a(64),a(65),function(e){var t=e.title,a=e.Icon;return l.a.createElement("div",{className:"siderbarOption"},a&&l.a.createElement(a,{className:"siderbarOption__icon"}),a?l.a.createElement("h4",null,t):l.a.createElement("p",null,t))}),Q=a(43),Z=a.n(Q),$=a(44),q=a.n($),X=function(){var e,t=E(),a=Object(o.a)(t,1)[0].playlists;return l.a.createElement("div",{className:"sidebar"},l.a.createElement("img",{className:"sidebar__logo",alt:"logo",src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"}),l.a.createElement(V,{title:"Home",Icon:Z.a}),l.a.createElement(V,{title:"Search",Icon:y.a}),l.a.createElement(V,{title:"Your Library",Icon:q.a}),l.a.createElement("br",null),l.a.createElement("strong",{className:"sidebar__title"},"Playlists"),l.a.createElement("hr",null),null===a||void 0===a||null===(e=a.items)||void 0===e?void 0:e.map((function(e){return l.a.createElement(V,{title:e.name,key:e.id})})))},ee=(a(66),function(e){var t=e.spotify;return l.a.createElement("div",{className:"player"},l.a.createElement("div",{className:"player__body"},l.a.createElement(X,null),l.a.createElement(O,{spotify:t})),l.a.createElement(H,{spotify:t}))}),te=new s.a;var ae=function(){var e=E(),t=Object(o.a)(e,2),a=t[0].token,c=t[1];return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var a=t.split("=");return e[a[0]]=decodeURIComponent(a[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(c({type:"SET_TOKEN",token:t}),te.setAccessToken(t),te.getMe().then((function(e){c({type:"SET_USER",user:e})})),te.getUserPlaylists().then((function(e){c({type:"SET_PLAYLISTS",playlists:e})})),te.getPlaylist("37i9dQZF1E3a9MIwkIMedz").then((function(e){return c({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})))}),[c]),l.a.createElement("div",{className:"app"},a?l.a.createElement(ee,{spotify:te}):l.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=a(6),le=function(e,t){switch(t.type){case"SET_USER":return Object(ne.a)(Object(ne.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(ne.a)(Object(ne.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object(ne.a)(Object(ne.a)({},e),{},{playlists:t.playlists});case"SET_DISCOVER_WEEKLY":return Object(ne.a)(Object(ne.a)({},e),{},{discover_weekly:t.discover_weekly});case"SET_ITEM":return Object(ne.a)(Object(ne.a)({},e),{},{item:t.item});case"SET_PLAYING":return Object(ne.a)(Object(ne.a)({},e),{},{playing:t.playing});default:return e}};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,{initialState:{user:null,playlists:[],playing:!1,item:null,discover_weekly:null,token:null},reducer:le},l.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.d8425f42.chunk.js.map