import _ from "underscore"

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCarta ejemplo cartas = ['C','D','H','S'];
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array <string>} Retorna un nuevo deck
 */


export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    
    if( !tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error ( 'Tipos de Carta es obligatorio como un arreglo de string' );
    if( !tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error ( 'Tipos de Especiales es obligatorio como un arreglo de string' );
    

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
} 