(()=>{"use strict";let e=document.querySelector(".field"),t=document.querySelector(".header"),l=document.querySelector("#btn-newGame"),d=document.querySelector("#btn-askCard"),r=document.querySelector("#btn-stop"),n=document.querySelector("#btn-2Players"),o=document.querySelector("#btn-3Players"),s=document.querySelector("#btn-4Players"),i=[],c=["C","D","H","S"],a=["A","J","Q","K"],u=[],m=0;document.addEventListener("DOMContentLoaded",(()=>{C(),n.addEventListener("click",(()=>{h(),C(3)})),o.addEventListener("click",(()=>{h(),C(4)})),s.addEventListener("click",(()=>{h(),C(5)}))}));let h=()=>{for(;e.firstChild;)e.removeChild(e.firstChild)};l.addEventListener("click",(()=>{n.disabled=!1,o.disabled=!1,s.disabled=!1,d.disabled=!1,r.disabled=!1,w()})),d.addEventListener("click",(()=>{console.log(u),n.disabled=!0,o.disabled=!0,s.disabled=!0;let e=f();L(v(),e)})),r.addEventListener("click",(()=>{d.disabled=!0,r.disabled=!0,A(u[0])}));let f=()=>(console.log("Turno giveTurn",m),m>=u.length-1?m=0:m>=0?m++:m),C=(e=2)=>{i=p(),u=[];for(let t=0;t<e;t++)u.push(0);console.log(u),g(e-1)},g=t=>{for(let l=0;l<t;l++){let t=document.createElement("DIV");t.classList.add("row","container-fluid"),t.innerHTML=`<div class="col"><h1>Player ${l+1}: <small id="playerScore">0</small></h1><div id="player-cards" class="divCards"></div></div>`,e.appendChild(t)}let l=document.createElement("DIV");l.classList.add("row","container-fluid"),l.innerHTML='<div class="col"><h1>CPU: <small id="cpuScore">0</small></h1><div id="cpu-cards" class="divCards"></div></div>',e.appendChild(l)},p=()=>{for(let e=2;e<=10;e++)for(let t of c)i.push(e+t);for(let e of c)for(let t of a)i.push(t+e);return _.shuffle(i)},v=()=>{if(0===i.length)throw"There are no more cards";return i.pop()},b=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?y(t):10:1*t},y=(e=1)=>confirm("Value for A: 11 -> confirm or 1 -> cancel")?11:1,L=(e,t)=>{m===u.length-1&&(m=0),console.log({turn:t});let l=document.querySelectorAll("small");u[t]+=b(e),q(u[t],t),l[t].textContent=u[t],S(e,t)},S=(e,t)=>{let l=document.querySelectorAll(".divCards"),d=document.createElement("img");d.classList.add("carta"),d.src=`assets/img/${e}.png`,l[t].appendChild(d)},q=(e,t)=>{(e>21||21===e)&&(d.disabled=!0,r.disabled=!0,A(e,t))},E=(e,t)=>{let l=document.querySelectorAll("small");return u[t]+=b(e),l[t].textContent=u[t],u[t]},x=(e,t)=>{let l=document.querySelectorAll(".divCards"),d=document.createElement("img");d.classList.add("carta"),d.src=`assets/img/${e}.png`,console.log({turn:t}),l[t].appendChild(d)},A=(e,t)=>{let l=0;do{let e=v();l=E(e,u.length-1),x(e,u.length-1)}while(l<e&&e<=21);P(l,e,t)},k=(e,l="")=>{let d=document.createElement("p");return"error"==l?(d.classList.add("p-4","bg-danger","text-center","text-light"),d.textContent=e):"tie"===l?(d.classList.add("p-4","bg-warning","text-center","text-light"),d.textContent=e):(d.classList.add("p-4","bg-success","text-center","text-light"),d.textContent=e),setTimeout((()=>{d.remove()}),3e3),t.appendChild(d)},w=()=>{let e=document.querySelectorAll("small"),t=document.querySelectorAll(".divCards");for(let l in e.forEach((e=>e.textContent=0)),i=p(),t){for(;t[l].firstChild;)t[l].removeChild(t[l].firstChild);for(;t[l].firstChild;)t[l].removeChild(t[l].firstChild)}},P=(e,t,l)=>21===t&&21===e?k("Is a tie!!!","tie"):t>21||21===e||e>t&&e<21||t===e||t===e?k(`Player ${l+1} You loose!!!`,"error"):e>21||t<21&&e>21?k(`Player ${l+1} You win!!!`):void 0})();