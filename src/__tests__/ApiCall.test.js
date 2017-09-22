
jest.mock('../__mocks__/requestPost');

const apiCall = require('../utils/ApiCall');

xit('should load track data', () => {
    return apiCall.requestPost()
    .then(data => {
        expect(data).toBeDefined();
    })
})