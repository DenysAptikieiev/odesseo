"use strict";

const apiService = new NewPostService();

const limitService = (items, quantity=10) => {
    apiService.getLimitService(quantity)
        .then(res => res)
        .then(items)
        .catch(error => console.error('Error', error));
}

const orderBy = (items, quantity) => {
    apiService.getOrderByService(quantity)
        .then(res => res)
        .then(items)
        .catch(error => console.error('Error', error));
}

const order = (items, quantity) => {
    console.log('items: ', items);
    apiService.getOrderService(quantity)
        .then(res => res)
        .then(items)
        .catch(error => console.error('Error', error));
}

const skip = (items, quantity=0) => {
    apiService.getSkipService(quantity)
        .then(res => res)
        .then(items)
        .catch(error => console.error('Error', error));
}

const total = (items) => {
    apiService.getTotal()
        .then(res => res)
        .then(items)
        .catch(error => console.error('Error', error));
}




