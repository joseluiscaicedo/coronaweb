import getData from '../../utils/getData';
global.fetch = require('jest-fetch-mock');

describe('Fetch API', ()=>{
  beforeEach(()=>{
    fetch.resetMocks();
  })
  
  test('call API and return data',()=>{
    fetch.mockResponseOnce(JSON.stringify({data:'12345'}));
    getData('https://api.covid19api.com/')
      .then((response) =>{
        expect(response.data).toEqual('12345');
      })
      expect(fetch.mock.calls[0][0]).toEqual('https://api.covid19api.com/')
  })
})