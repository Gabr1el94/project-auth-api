import {createConnection} from 'typeorm';

createConnection()
.then(() => console.log('Successfully connect database'))
.catch(err => console.error(err));