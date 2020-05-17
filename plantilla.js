/* jshint esversion: 6 */

class Menu {

    constructor() {
            this.opcions = [];
        }
        /**
         * 
         * @param {string} nombreOpcion nombre que se motrara en el menu
         * @param {string} url url dondo se direcciona el enlace 
         */
    agregarOpcion(nombreOpcion, url) {
            this.opcions.push({ nombreOpcion: nombreOpcion, url: url });
        }
        /**
         * 
         * @param {array} opciones se agregan opciones dentro de una array,
         * el orden debe ser: cada opcion dentro de otro array, primero el nombre luego la url
         */
    agregarOpciones(opciones) {
            opciones.forEach(opcion => {
                this.opcions.push({ nombreOpcion: opcion[0], url: opcion[1] });
            });
        }
        /**
         * 
         * @param {string} idMenu nombre de id del contenedor donde ira el menu 
         */
    renderizar(idMenu) {
        let codigoHTML = '';
        codigoHTML = '<ul>';
        this.opcions.forEach(opcion => {
            if (location.pathname === opcion.url) {
                codigoHTML += `<li><a class="menu-principal__seccion--active" href="${opcion.url}">${opcion.nombreOpcion}</a></li>`;
            } else {
                codigoHTML += `<li><a href="${opcion.url}">${opcion.nombreOpcion}</a></li>`;
            }
        });
        codigoHTML += '</ul>';
        document.querySelector('#' + idMenu).innerHTML = codigoHTML;
    }
}

export {
    Menu,
};