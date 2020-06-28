"use strict";

const renderTable = item => {
    item.forEach((item) => {
        const {number, name, city} = item;
        $('.table__section').append(`
            <div class="table table__items">
                <div class="table__item number"><p>${number}</p></div>
                <div class="table__item adress"><p>${name}</p></div>
                <div class="table__item city"><p>${city}</p></div>
            </div>
        `);
    });
};

