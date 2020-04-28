import * as libjll from './libjll.js';

libjll.getSQ('button',1).forEach( button => {
   console.log(button)
   button.addEventListener('click',libjll.btn_event_capture);
})