(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[19],{174:function(n,e,t){"use strict";t.d(e,"i",(function(){return x})),t.d(e,"a",(function(){return j})),t.d(e,"h",(function(){return E})),t.d(e,"d",(function(){return O})),t.d(e,"e",(function(){return w})),t.d(e,"c",(function(){return k})),t.d(e,"b",(function(){return y})),t.d(e,"j",(function(){return T})),t.d(e,"l",(function(){return S})),t.d(e,"f",(function(){return C})),t.d(e,"k",(function(){return z})),t.d(e,"g",(function(){return R}));var i=t(8),r=t(9),a=t(172),o=t(3);function c(){var n=Object(i.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    padding-bottom: 1rem;\n"]);return c=function(){return n},n}function u(){var n=Object(i.a)(["\n    \n"]);return u=function(){return n},n}function d(){var n=Object(i.a)(["\n    width: 100%;\n    font-weight: bold;\n"]);return d=function(){return n},n}function l(){var n=Object(i.a)(["\n    width: 100%;\n    background: none;\n    border: none;\n    padding: 1rem 2rem;\n    color: white;\n    cursor: pointer;\n    background: ",";\n    border-radius: 5px;\n    transition: background 0.2s;\n\n    :hover {\n        background: ",";\n    }\n\n    ","\n"]);return l=function(){return n},n}function s(){var n=Object(i.a)(["\n    box-sizing: border-box;\n    display: block;\n    width: 100%;\n    padding: 0 0.8rem;\n    font-size: 1.2rem;\n"]);return s=function(){return n},n}function f(){var n=Object(i.a)(["\n    box-sizing: border-box;\n    width: 100%;\n    color: red;\n    padding: 0 0.8rem;\n    font-size: 1.2rem;\n"]);return f=function(){return n},n}function m(){var n=Object(i.a)(["\n    width: 100%;\n    background: none;\n    border: none;\n    box-sizing: border-box;\n    padding: 0.8rem;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    transition: all 0.2s;\n\n    :focus {\n        outline: none;\n        border: 1px solid ",";\n        box-shadow: 0 0 5px ",';\n    }\n\n    &[type="radio"] {\n        outline: none;\n        border: none;\n        box-shadow: none;\n        cursor: pointer;\n        width: 1.6rem;\n        height: 1.6rem;\n    }\n']);return m=function(){return n},n}function b(){var n=Object(i.a)(["\n    margin-top: 1rem;\n    width: 100%;\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 1rem;\n"]);return b=function(){return n},n}function p(){var n=Object(i.a)(["\n    margin-top: 1rem;\n    width: 100%;\n    position: relative;\n"]);return p=function(){return n},n}function g(){var n=Object(i.a)(["\n    -webkit-box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.2);\n    -moz-box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.2);\n    box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.2);\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 2rem;\n    font-size: 1.5rem;\n    width: 50%;\n\n    @media (max-width: ",") {\n        padding: 1rem;\n        width: 80%;\n    }\n    @media (max-width: ",") {\n        padding: 1rem;\n        width: 100%;\n    }\n"]);return g=function(){return n},n}function h(){var n=Object(i.a)(["\n    width: 100%;\n    padding: 0.8rem;\n    font-size: 1.4rem;\n    border-radius: 5px;\n    color: white;\n    background: #ff4230;\n"]);return h=function(){return n},n}function v(){var n=Object(i.a)(["\n    width: 100%;\n    padding: 0.8rem;\n    border-radius: 5px;\n    font-size: 1.4rem;\n    background: #fff87d;\n"]);return v=function(){return n},n}var x=r.c.span(v()),j=r.c.span(h()),E=Object(r.c)(a.c)(g(),o.a.md,o.a.sm),O=r.c.div(p()),w=r.c.div(b()),k=Object(r.c)(a.b)(m(),o.b.blue,o.b.blue),y=Object(r.c)(a.a)(f()),T=r.c.label(s()),S=r.c.button(l(),o.b.blue,o.b.darkblue,(function(n){return n.light&&"\n            background: #226aff;\n            :hover {\n                background: #042bfc;\n            }\n        "})),C=r.c.div(d()),z=r.c.option(u()),R=r.c.div(c())},178:function(n,e,t){"use strict";var i=t(0),r=t.n(i),a=t(8),o=t(9),c=t(3);function u(){var n=Object(a.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return u=function(){return n},n}function d(){var n=Object(a.a)(["\n    display: inline-block;\n    position: relative;\n    width: 64px;\n    height: 64px;\n    z-index: 1000;\n    div {\n        position: absolute;\n        top: 27px;\n        width: 11px;\n        height: 11px;\n        border-radius: 50%;\n        background: ",";\n        animation-timing-function: cubic-bezier(0, 1, 1, 0);\n    }\n    div:nth-child(1) {\n        left: 6px;\n        animation: lds-ellipsis1 0.6s infinite;\n    }\n    div:nth-child(2) {\n        left: 6px;\n        animation: lds-ellipsis2 0.6s infinite;\n    }\n    div:nth-child(3) {\n        left: 26px;\n        animation: lds-ellipsis2 0.6s infinite;\n    }\n    div:nth-child(4) {\n        left: 45px;\n        animation: lds-ellipsis3 0.6s infinite;\n    }\n    @keyframes lds-ellipsis1 {\n        0% {\n            transform: scale(0);\n        }\n        100% {\n            transform: scale(1);\n        }\n    }\n    @keyframes lds-ellipsis3 {\n        0% {\n            transform: scale(1);\n        }\n        100% {\n            transform: scale(0);\n        }\n    }\n    @keyframes lds-ellipsis2 {\n        0% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(19px, 0);\n        }\n    }\n"]);return d=function(){return n},n}var l=o.c.div(d(),c.b.blue),s=o.c.div(u());e.a=function(){return r.a.createElement(s,null,r.a.createElement(l,null,r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}},701:function(n,e,t){"use strict";t.r(e);var i=t(40),r=t(0),a=t.n(r),o=t(8),c=t(9),u=t(3);function d(){var n=Object(o.a)(["\n    \n"]);return d=function(){return n},n}function l(){var n=Object(o.a)(["\n    font-weight: bold;\n    font-size: 1.8rem;\n"]);return l=function(){return n},n}function s(){var n=Object(o.a)(["\n    border: 1px solid #ccc;\n    position: absolute;\n    bottom: 0.5rem;\n    right: 0.5rem;\n    height: 20%;\n    filter: opacity(1);\n"]);return s=function(){return n},n}function f(){var n=Object(o.a)(["\n    position: absolute;\n    top: 50%; \n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n    min-width: 100%; \n    min-height: 100%; \n    width: auto; \n    height: auto;\n    z-index: -1000; \n    overflow: hidden;\n"]);return f=function(){return n},n}function m(){var n=Object(o.a)(["\n    position: relative;\n    height: 100%;\n    box-sizing: border-box;\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return m=function(){return n},n}function b(){var n=Object(o.a)(["\n    position: relative;\n    height: 100%;\n    box-sizing: border-box;\n    border-left: 1px solid #ccc;\n"]);return b=function(){return n},n}function p(){var n=Object(o.a)(["\n    position: relative;\n    height: calc(100vh - ",");\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    box-sizing: border-box;\n    grid-gap: 0.5rem;\n"]);return p=function(){return n},n}var g,h,v=c.c.div(p(),u.e),x=c.c.div(b()),j=c.c.div(m()),E=c.c.video(f()),O=c.c.video(s()),w=c.c.div(l()),k=c.c.div(d()),y=t(46),T=t(15),S=t(30),C=t(178),z=t(174),R={video:!0,audio:!0},U={iceServers:[{urls:"stun:stun.stunprotocol.org:3478"},{urls:"stun:stun.l.google.com:19302"}]},_={push:T.d};e.default=Object(S.c)((function(n){return{currentUser:n.auth.currentUser}}),_)((function(n){var e=Object(r.useState)(!0),t=Object(i.a)(e,2),o=t[0],c=t[1],u=Object(r.useState)(!0),d=Object(i.a)(u,2),l=d[0],s=d[1],f=Object(r.useState)(!1),m=Object(i.a)(f,2),b=m[0],p=m[1],T=Object(r.useState)(!1),S=Object(i.a)(T,2),_=S[0],D=S[1],A=Object(r.useState)(!1),B=Object(i.a)(A,2),W=B[0],M=B[1],N=Object(r.useState)(),G=Object(i.a)(N,2),I=G[0],J=G[1],P=Object(r.useRef)(null),H=Object(r.useRef)(null);Object(r.useEffect)((function(){y.f.getUser(n.match.params.id).then((function(e){200===e.status?(console.log(e.data),J(e.data)):setTimeout((function(){n.push("/")}),500)})).catch((function(e){setTimeout((function(){n.push("/")}),500)})),y.g.emit("WEBRTC_JOIN",{id:n.match.params.id,audio:o,video:l}),y.g.on("WEBRTC",(function(n){Y(n)})),y.g.on("WEBRTC_STATUS_CHANGED",(function(e){e.id!==n.currentUser.id&&(p(e.audio),D(e.video))})),y.g.on("WEBRTC_JOINED",(function(e){M(!0),h||V(!0),e.id!==n.currentUser.id&&(p(e.audio),D(e.video))})),y.g.on("WEBRTC_LEFT",(function(){M(!1)}));var e=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia(R).then(L).catch(K):e?e(R,L,K):alert("Your browser does not support getUserMedia API")}),[]),Object(r.useEffect)((function(){return function(){y.g.emit("WEBRTC_LEAVE",{id:n.match.params.id}),Q()}}),[]);var L=function(n){g=n,P.current.srcObject=n},V=function(n){(h=new RTCPeerConnection(U)).onicecandidate=F,h.ontrack=q,h.addStream(g),n&&h.createOffer().then(X).catch(K)},Y=function(n){h||V(!1),n.sdp?h.setRemoteDescription(new RTCSessionDescription(n.sdp)).then((function(){"offer"===n.sdp.type&&h.createAnswer().then(X).catch(K)})).catch(K):n.ice&&h.addIceCandidate(new RTCIceCandidate(n.ice)).catch(K)},F=function(e){null!=e.candidate&&y.g.emit("WEBRTC_SEND",{ice:e.candidate,id:n.match.params.id})},X=function(e){console.log("got description"),h.setLocalDescription(e).then((function(){y.g.emit("WEBRTC_SEND",{sdp:h.localDescription,id:n.match.params.id})})).catch(K)},q=function(n){console.log("got remote stream"),H.current.srcObject=n.streams[0]},K=function(n){console.log(n)},Q=function(){g&&("undefined"===typeof g.getTracks?g.stop():g.getTracks().forEach((function(n){n.stop()})),g=null),h&&(h.close(),h=null)};return a.a.createElement(v,null,a.a.createElement(j,null,h?a.a.createElement(E,{ref:H,autoPlay:!0,playsinline:!0}):I&&a.a.createElement(k,null,a.a.createElement(w,null,"Oczekiwanie na ",I.displayName,"..."),a.a.createElement(C.a,null)),a.a.createElement(O,{ref:P,autoPlay:!0,playsinline:!0})),a.a.createElement(x,null,n.match.params.id,a.a.createElement("button",{onClick:function(){return function(){c(!o);for(var e=g.getAudioTracks(),t=0;t<e.length;++t)e[t].enabled=!e[t].enabled;y.g.emit("WEBRTC_CHANGE_STATUS",{audio:o,video:l,id:n.match.params.id})}()}},"toggle audio"),a.a.createElement("button",{onClick:function(){return function(){s(!l);for(var e=g.getVideoTracks(),t=0;t<e.length;++t)e[t].enabled=!e[t].enabled;y.g.emit("WEBRTC_CHANGE_STATUS",{audio:o,video:l,id:n.match.params.id})}()}},"toggle video"),a.a.createElement("div",null,"local audio: ",String(o)),a.a.createElement("div",null,"local video: ",String(l)),a.a.createElement("div",null,"remote audio: ",String(b)),a.a.createElement("div",null,"remote video: ",String(_)),a.a.createElement("div",null,"is remote in room: ",String(W)),a.a.createElement(z.d,null,a.a.createElement(z.j,null,"remote audio"),a.a.createElement("input",{type:"checkbox",checked:b,disabled:!0})),a.a.createElement(z.d,null,a.a.createElement(z.j,null,"remote vido"),a.a.createElement("input",{type:"checkbox",checked:_,disabled:!0}))))}))}}]);
//# sourceMappingURL=19.013ae5ae.chunk.js.map