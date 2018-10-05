food-trucks-app

to install or make changes

run `$ npm i`
then `$ node db/seeds`

Gulp has been replaced with webpack to get ready for react.

run `$ npm run build` to build the project.

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
