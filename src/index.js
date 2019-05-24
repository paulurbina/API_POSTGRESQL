import app from './app';
import '@babel/polyfill';

async function index() {
    await app.listen(3000);
    console.log('server on port 3000');
}

index();    