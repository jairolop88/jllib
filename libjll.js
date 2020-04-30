// funciones mensaje eventos

// ****************************

// functiones para botones

function btn_event_run(btn_info) {
    switch (btn_info.type) {
        case 'btn_delete':
            content_delete(btn_info.objetive);
            break;
        case 'btn_copy':
            // codigo para copiar informacion de una tabla
            break;
        case 'btn_write':
            getSQ('#' + btn_info.objetive).value = "escribio";
            break
        default:
            console.log('opcion sin configurar, datos: ', btn_info);
            break;
    }
}
function btn_event_capture(event) {
    // conlog(event);
    var btn_info = {};
    btn_info['type'] = event.srcElement.id.split('-')[0];
    btn_info['objetive'] = event.srcElement.id.split('-')[1];
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
    // conlog(object_data);
    return object_data;
}
function content_delete(id_element) {
    // conlog(id_element);
    let element = getSQ('#' + id_element)
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
}