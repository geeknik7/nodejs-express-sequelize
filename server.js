import express, { json } from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import  router  from './Routes/index'
import parser from 'body-parser'
import {sequelizeConnect} from './config/dbconfig'

const app = express()
const redis = require('redis');

// create a new redis client instance
const redisClient = redis.createClient({
  host: 'test.r5davu.ng.0001.aps1.cache.amazonaws.com',
  port: 6379, // default Redis port
});

// check if the connection was successful
redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

// handle errors
redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

// use the client to get or set data
redisClient.set('mykey', 'myvalue', (err, reply) => {
  if (err) throw err;

  console.log('Set key-value pair:', reply);

  redisClient.get('mykey', (err, value) => {
    if (err) throw err;

    console.log('Retrieved value:', value);

    redisClient.quit(); // disconnect from Redis when done
  });
});

app.use(parser.json())
const { PORT }= process.env
app.use(morgan('tiny'))
app.use(helmet())
app.listen(PORT, console.log("APP IS RUNNING ON PORT ", PORT))
sequelizeConnect()
app.use('/', router)