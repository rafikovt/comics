(()=>{"use strict";var e={289:(e,t,n)=>{n.d(t,{SO:()=>r,TN:()=>o,Bj:()=>c,WL:()=>a,hT:()=>d,AR:()=>i,mn:()=>s,YB:()=>l,P3:()=>u,Fq:()=>m});const r=1e3,o=document.querySelector(".main-title"),c=document.querySelector(".comics-content"),a=document.querySelector(".transcription"),d=document.querySelector(".date"),i=document.querySelector("#next-page"),s=document.querySelector("#prev-page"),l=document.querySelector("#random-page"),u=document.querySelector("#first-page"),m=document.querySelector("#last-page")},69:(e,t,n)=>{n.d(t,{Y:()=>o});var r=n(784);const o=e=>{(0,r.aC)(),fetch("https://api.allorigins.win/raw?url="+(e>0?`http://xkcd.com/${e}/info.0.json`:"http://xkcd.com/info.0.json")).then((e=>e.json())).then((e=>(0,r.bv)(e))).catch((e=>(0,r.gl)(e)))}},291:(e,t,n)=>{const r=e=>{window.location.search=`page=${e}`};var o=n(289),c=n(69);let a=(()=>{let e;return e=window.location.search?new URLSearchParams(window.location.search).get("page"):1,e})();1==a&&(o.mn.disabled=!0),o.AR.addEventListener("click",(()=>{r(+a+1)})),o.mn.addEventListener("click",(()=>{r(a-1)})),o.YB.addEventListener("click",(()=>{const e=(1,t=o.SO,Math.floor(Math.random()*(t-1)+1));var t;r(e)})),o.P3.addEventListener("click",(()=>{r(1)})),o.Fq.addEventListener("click",(()=>{r(o.SO)})),(0,c.Y)(a)},784:(e,t,n)=>{n.d(t,{bv:()=>o,aC:()=>c,gl:()=>a});var r=n(289);const o=e=>{r.TN.textContent=e.title;const t=document.createElement("img");t.src=e.img,t.alt=e.alt,r.Bj.append(t),r.WL.textContent=e.transcript,r.hT.textContent=`Дата создания: ${e.day}-${e.month}-${e.year}`},c=()=>{r.TN.textContent="Загружаем..."},a=()=>{r.TN.textContent="Произошла ошибка при загрузке, либо данный комикс отсутствует на сервере",r.TN.classList.add("danger")}}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(289),n(784),n(69),n(291)})();