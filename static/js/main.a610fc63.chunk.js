(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports={sounds:[{id:0,name:"clap",letter:"A",keyCode:65},{id:1,name:"hihat",letter:"S",keyCode:83},{id:2,name:"kick",letter:"D",keyCode:68},{id:3,name:"openhat",letter:"F",keyCode:70},{id:4,name:"boom",letter:"G",keyCode:71},{id:5,name:"ride",letter:"H",keyCode:72},{id:6,name:"snare",letter:"J",keyCode:74},{id:7,name:"tom",letter:"K",keyCode:75},{id:8,name:"tink",letter:"L",keyCode:76}]}},,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/boom.550be808.wav"},function(e,t,n){e.exports=n.p+"static/media/clap.a6e86dd7.wav"},function(e,t,n){e.exports=n.p+"static/media/hihat.4ba39e07.wav"},function(e,t,n){e.exports=n.p+"static/media/kick.4dd58595.wav"},function(e,t,n){e.exports=n.p+"static/media/openhat.a62db465.wav"},function(e,t,n){e.exports=n.p+"static/media/ride.b0d70ec5.wav"},function(e,t,n){e.exports=n.p+"static/media/snare.80c4129b.wav"},function(e,t,n){e.exports=n.p+"static/media/tink.2a6bb6f5.wav"},function(e,t,n){e.exports=n.p+"static/media/tom.572ed39d.wav"},,,function(e,t,n){e.exports=n(39)},,,,,function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(12),r=n.n(i),s=(n(33),n(34),n(4)),c=n(14),d=n(15),u=n(27),l=n(16),p=n(26),m=n(1),f={setSound:function(e){return{type:"SET_SOUND",soundID:e}}},y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).audioRef=o.a.createRef(),n.playSound=n.playSound.bind(Object(m.a)(Object(m.a)(n))),n.reset=n.reset.bind(Object(m.a)(Object(m.a)(n))),n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.playSound),this.audioRef.current.addEventListener("ended",this.reset)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.playSound),this.audioRef.current.removeEventListener("ended",this.reset)}},{key:"playSound",value:function(e){e.keyCode!==this.props.keyCode&&"click"!==e.type||(this.props.setSound(this.props.id),this.audioRef.current.currentTime=0,this.audioRef.current.play())}},{key:"reset",value:function(){this.props.setSound(null)}},{key:"render",value:function(){return o.a.createElement("div",{className:this.props.soundID===this.props.id?"key playing":"key",onClick:this.playSound},o.a.createElement("kbd",null,this.props.letter),o.a.createElement("span",{className:"sound"},this.props.name),o.a.createElement("audio",{ref:this.audioRef,src:this.props.source}))}}]),t}(a.Component),h=Object(s.b)(function(e){return{soundID:e.nowPlaying}},f)(y),v=n(6),w=Object(s.b)(function(e){return{soundID:e.nowPlaying}})(function(e){var t=v.sounds.find(function(t){return t.id===e.soundID});return o.a.createElement("div",{className:"nowPlaying"},null!==e.soundID&&o.a.createElement(h,t))}),k=n(17),b=n.n(k),E=n(18),O=n.n(E),S=n(19),D=n.n(S),j=n(20),_=n.n(j),C=n(21),g=n.n(C),x=n(22),N=n.n(x),I=n(23),R=n.n(I),L=n(24),T=n.n(L),U=n(25),P=n.n(U),X=[O.a,D.a,_.a,g.a,b.a,N.a,R.a,P.a,T.a],J=function(){var e=v.sounds.map(function(e,t){return o.a.createElement(h,Object.assign({key:e.id,source:X[t]},e))});return o.a.createElement("div",{className:"keys"},e)},W=function(){return o.a.createElement("div",{className:"container"},o.a.createElement(w,null),o.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=n(3),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SOUND":return t.soundID;default:return e}},A=Object(B.b)({nowPlaying:V}),F=Object(B.c)(A,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(o.a.createElement(s.a,{store:F},o.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[28,1,2]]]);
//# sourceMappingURL=main.a610fc63.chunk.js.map