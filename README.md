# Priority Queue

## Notes

- Using Node 16 (16.14.0)

## Run for development

### Using Docker containers

1. `docker-compose -f docker-compose.dev.yml up --build`
2. Frontend available on `localhost:8080`
3. Backend available on `localhost:7001`

### Individually

1. `cd front` -> `yarn install` -> `yarn start`
1. `cd back` -> `npm i` -> `npm run dev`

## Run for production

1. `docker-compose up --build`
2. Frontend available on `localhost:8080`
3. Backend available on `localhost:7001`

## How to test server

- `node back/main.test.js`
