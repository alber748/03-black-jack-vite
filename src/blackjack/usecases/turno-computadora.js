import { pedirCarta, valorCarta } from "./";
import { crearCartaHtml } from "./crear-carta-html";

/**
 * 
 * @param {Number} puntosMinimos 
 * @param {HTMLElement} puntosHTML elemento para mostrar puntaje 
 * @param {HTMLElement} divCartasComputadora elemento para mostrar las cartas
 * @param {Array<String>} deck 
 */

export const turnoComputadora = ( puntosMinimos, puntosHtml, divCartasComputadora, deck = [] ) => {

    if( !puntosMinimos ) throw new Error ( 'Puntos minimos son necesarios' )
    if( !deck ) throw new Error ( 'El deck es necesario' )
    if( !puntosHtml ) throw new Error ( 'Argumentos puntosHTML es necesario' )


    let puntosComputadora = 0;
    do {
        const carta = pedirCarta ( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHtml.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHtml( carta ) 
        
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}