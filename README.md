# Priority Queue

## Notes

- Using Node 16 (16.14.0)
- Live server can be found on an EC2 Instance: http://52.14.18.120:7001/v1/health
- Live client can be found on on Heroku: https://priorityqueue.herokuapp.com/
  - IMPORTANT: Heroku app is not the most upto-date and does not connect to client
  - Can only be tested locally (instructions are below)

## How to run

### Using Docker containers

1. `docker-compose -f docker-compose.dev.yml up --build`
2. Frontend available on `localhost:7002`
3. Backend available on `localhost:7001`

### Individually

1. `cd front` -> `yarn install` -> `yarn start`
1. `cd back` -> `npm i` -> `npm run dev`

## How to run for production

Both containers are optimized to use <100MB

1. `docker-compose up --build`
2. Frontend available on `localhost:8080`
3. Backend available on `localhost:7001`

## How to test server

- `node back/main.test.js`
