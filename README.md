food-trucks-app

Updated again to use create-react-app for the frontend.

from the root directory, use `$ npm run start`, or better `$ nodemon` to get the backend server running on localhost4000

In a new terminal window/tab from the root directory `$ cd client && npm run start` To launch the frontend on localhost:3000,

There is a proxy setup for develpment that takes front end requests from 3000, and sends them to the backend on 4000 => so CORS should not be a problem. On live, this doesn't happen, each is served from the same port.

You still need `$ mongod`

--


Also have added react and react-dom to packageJson

to install or make changes:

run `$ npm i`
then `$ node db/seeds`

Gulp has been replaced with webpack to get ready for react.

run `$ npm run build` to build the project.

Don't forget to `$ mongod`

To Get going in development run `$ npm run dev`

This will start the API on a proxy to http://localhost:8080/api, and it will build and serve the send the react frontend to http://localhost:3000 - hot reloading for dev work, (but will need to `$ npm run build` to save get files in /public/ - if that's your thing.)

-- this is old now --

a browser window should open and redirect to the index page at `http://localhost:4000`

The API will be accessible at `http://localhost:4000/api`

Example api calls:

GET
http://localhost:4000/api/foodTrucksShowAll

POST
http://localhost:4000/api/foodTrucks
{
	"name": "test_1"
}

GET
http://localhost:4000/api/foodTrucks/5bab60e191369058c9e662a0

PUT
http://localhost:4000/api/foodTrucks/5bab60e191369058c9e662a0
{
	"name": "test_1_updated"
}

DELETE
http://localhost:4000/api/foodTrucks/5bab545b604ffb532c2dd962
