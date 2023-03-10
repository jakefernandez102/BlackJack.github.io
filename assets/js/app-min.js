( () => { "use strict"; let e = document.querySelector( ".field" ), t = document.querySelector( ".header" ), l = document.querySelector( "#btn-newGame" ), r = document.querySelector( "#btn-askCard" ), d = document.querySelector( "#btn-stop" ), i = document.querySelector( "#btn-2Players" ), s = document.querySelector( "#btn-3Players" ), a = document.querySelector( "#btn-4Players" ), n = [], o = [ "C", "D", "H", "S" ], c = [ "A", "J", "Q", "K" ], h = [], u = 0, C = () => { document.addEventListener( "DOMContentLoaded", () => { g(), i.addEventListener( "click", () => { $(), g( 3 ) } ), s.addEventListener( "click", () => { $(), g( 4 ) } ), a.addEventListener( "click", () => { $(), g( 5 ) } ) } ) }; C(); let $ = () => { for ( ; e.firstChild; )e.removeChild( e.firstChild ) }; l.addEventListener( "click", () => { i.disabled = !1, s.disabled = !1, a.disabled = !1, r.disabled = !1, d.disabled = !1, w() } ), r.addEventListener( "click", () => { console.log( h ), i.disabled = !0, s.disabled = !0, a.disabled = !0; let e = f(); L( b(), e ) } ), d.addEventListener( "click", () => { r.disabled = !0, d.disabled = !0, A( h[ 0 ] ) } ); let f = () => ( console.log( "Turno giveTurn", u ), u >= h.length - 1 ? u = 0 : u >= 0 ? u++ : u ), g = ( e = 2 ) => { n = v(), h = []; for ( let t = 0; t < e; t++ )h.push( 0 ); console.log( h ), p( e - 1 ) }, p = t => { for ( let l = 0; l < t; l++ ) { let r = document.createElement( "DIV" ); r.classList.add( "row", "container-fluid" ), r.innerHTML = `<div class="col"><h1>Player ${ l + 1 }: <small id="playerScore">0</small></h1><div id="player-cards" class="divCards"></div></div>`, e.appendChild( r ) } let d = document.createElement( "DIV" ); d.classList.add( "row", "container-fluid" ), d.innerHTML = `<div class="col"><h1>CPU: <small id="cpuScore">0</small></h1><div id="cpu-cards" class="divCards"></div></div>`, e.appendChild( d ) }, v = () => { for ( let e = 2; e <= 10; e++ )for ( let t of o ) n.push( e + t ); for ( let l of o ) for ( let r of c ) n.push( r + l ); return _.shuffle( n ) }, b = () => { if ( 0 === n.length ) throw "There are no more cards"; return n.pop() }, m = e => { let t = e.substring( 0, e.length - 1 ); return isNaN( t ) ? "A" === t ? y( t ) : 10 : 1 * t }, y = ( e = 1 ) => e = confirm( "Value for A: 11 -> confirm or 1 -> cancel" ) ? 11 : 1, L = ( e, t ) => { u === h.length - 1 && ( u = 0 ), console.log( { turn: t } ); let l = document.querySelectorAll( "small" ); h[ t ] += m( e ), q( h[ t ], t ), l[ t ].textContent = h[ t ], S( e, t ) }, S = ( e, t ) => { let l = document.querySelectorAll( ".divCards" ), r = document.createElement( "img" ); r.classList.add( "carta" ), r.src = `assets/img/${ e }.png`, l[ t ].appendChild( r ) }, q = ( e, t ) => { e > 21 ? ( r.disabled = !0, d.disabled = !0, A( e, t ) ) : 21 === e && ( r.disabled = !0, d.disabled = !0, A( e, t ) ) }, E = ( e, t ) => { let l = document.querySelectorAll( "small" ); return h[ t ] += m( e ), l[ t ].textContent = h[ t ], h[ t ] }, x = ( e, t ) => { let l = document.querySelectorAll( ".divCards" ), r = document.createElement( "img" ); r.classList.add( "carta" ), r.src = `assets/img/${ e }.png`, console.log( { turn: t } ), l[ t ].appendChild( r ) }, A = ( e, t ) => { let l = 0; do { let r = b(); l = E( r, h.length - 1 ), x( r, h.length - 1 ) } while ( l < e && e <= 21 ); P( l, e, t ) }, k = ( e, l = "" ) => { let r = document.createElement( "p" ); return "error" == l ? ( r.classList.add( "p-4", "bg-danger", "text-center", "text-light" ), r.textContent = e ) : "tie" === l ? ( r.classList.add( "p-4", "bg-warning", "text-center", "text-light" ), r.textContent = e ) : ( r.classList.add( "p-4", "bg-success", "text-center", "text-light" ), r.textContent = e ), setTimeout( () => { r.remove() }, 3e3 ), t.appendChild( r ) }, w = () => { let e = document.querySelectorAll( "small" ), t = document.querySelectorAll( ".divCards" ); for ( let l in e.forEach( e => e.textContent = 0 ), n = v(), t ) { for ( ; t[ l ].firstChild; )t[ l ].removeChild( t[ l ].firstChild ); for ( ; t[ l ].firstChild; )t[ l ].removeChild( t[ l ].firstChild ) } }, P = ( e, t, l ) => 21 === t && 21 === e ? k( "Is a tie!!!", "tie" ) : t > 21 || 21 === e || e > t && e < 21 || t === e || t === e ? k( `Player ${ l + 1 } You loose!!!`, "error" ) : e > 21 || t < 21 && e > 21 ? k( `Player ${ l + 1 } You win!!!` ) : void 0 } )();