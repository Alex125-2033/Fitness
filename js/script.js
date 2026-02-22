import tabs from './modules/tabs';
import modal  from './modules/modal';
import cards from './modules/cards';
import forms from './modules/forms';
import gson from './modules/gson';
import slider from './modules/slider';
import timer from './modules/timer';
import calc from './modules/calc';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);


    tabs();
    modal('[data-modal]', '.modal', modalTimerId);
    cards();
    forms(modalTimerId);
    gson();
    slider();
    timer();
    calc();  
});


