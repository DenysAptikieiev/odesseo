"use strict"

$(document).ready(() => {
    limitService(renderTable);

    $('select').on('change', function() {
        $('.table__items').remove();
        const value = $(this).val();
        limitService(renderTable, value);
    })

})