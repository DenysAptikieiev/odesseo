"use strict"

class NewPostService {
    constructor(_apiBase='http://api.odesseo.com.ua/warehouses') {
        this._apiBase = _apiBase;
    }
    getResource = async (url='') => {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) throw Error(`Could not fetch ${url}, status ${res.status}`);
        
        return await res.json();
    }
    getAllDeliveryPoints = async () => {
        const res = await this.getResource('?limit=6652');
        const data = res.data.map(item => this._transformDeliveryPoint(item));
        return data;
    }
    getLimitService = async (limit='') => {
        const res = await this.getResource(`?limit=${limit}`);
        const data = res.data.map(item => this._transformDeliveryPoint(item));
        return data;
    }
    getSkipService = async (skip=0) => {
        const res = await this.getResource(`?skip=${skip}`);
        const data = res.data.map(item => this._transformDeliveryPoint(item));
        return data;
    }
    getTotal = async () => {
        const res = await this.getResource();
        return res.total;
    }
    getOrderByService = async (orderBy=null) => {
        const res = await this.getResource(`?order_by=${orderBy}`);
        const data = res.data.map(item => this._transformDeliveryPoint(item));
        return data;
    }
    getOrderService = async (order='asc') => {
        const res = await this.getResource(`?order=${order}`);
        const data = res.data.map(item => this._transformDeliveryPoint(item));
        return data;
    }

    _errorDeliveryPointInfo = (data) => {
        if (data) {
            return data;
        } else {
            return `нет данных`;
        }
    }

    _transformDeliveryPoint = (point) => {
        return {
            ref: this._errorDeliveryPointInfo(point.ref),
            name: this._errorDeliveryPointInfo(point.name),
            city: this._errorDeliveryPointInfo(point.city),
            number: this._errorDeliveryPointInfo(point.number)
        }
    }
};







