/* jshint esversion: 6 */

// functiones para botones

function btn_event_run(btn_info) {
    let action = {
        btn_conlog: () => {
            console.log(btn_info.objetive);
        },
        btn_delete: () => {
            content_delete(btn_info.objetive);
        },
        btn_write: () => {
            getSQ('#' + btn_info.objetive).value = 'escribio';
        }
    };
    if (action[btn_info.type]) {
        return action[btn_info.type]();
    } else {
        return conlog(`❗❗ 😐 No hay accion definida para el boton con id: "${btn_info.id}"`);
    }
}

function btn_event_capture(event) {
    let btn_info = {};
    btn_info.type = event.srcElement.id.split('-')[0];
    btn_info.objetive = event.srcElement.id.split('-')[1];
    btn_info.id = event.srcElement.id;
    btn_event_run(btn_info);
}
// ***************************


// functiones acciones del DOM

function getSQ(selector, all = 0) {
    let object_data = {};
    if (all == 1) {
        object_data = document.querySelectorAll(selector);
    } else {
        object_data = document.querySelector(selector);
    }
    return object_data;
}

function content_delete(id_element) {
    let element = getSQ('#' + id_element);
    if (element) {
        element.value = "";
    }
}

function conlog(object) {
    console.log(object);
}
// ***************************


export {
    // botones
    btn_event_capture,
    btn_event_run,

    // acciones del DOM
    getSQ,
    content_delete,
    conlog,
};
