import React from 'react';
import Api from '../ApiCall';

xit('should load track data', () => {
    return Api.requestPost()
    .then(data => {
        expect(data).toBeDefined();
    })
})