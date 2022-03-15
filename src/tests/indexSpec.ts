import supertest from 'supertest';
import app from '../index';
const request = supertest(app);
describe('Test endpoint responses', () => {
    //done make it open and close the server
    it('gets the api endpoint', async () => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(200);
        
    }

)


it('gets the api endpoint', async () => {
    const response = await request.get('/api/images?filename=fjord&width=1920&height=1280');
    expect(response.headers['content-type']).toEqual('image/jpeg');
    
})


});
