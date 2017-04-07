# posse-backend-challenge
Posse Backend Coding Challenge http://goposse.com/

### Instructions
`$git clone https://github.com/xutopia/posse-backend-challenge.git`

`$cd posse-backend-challenge/`

`$npm install`

*Before proceeding, please see below `Importing data` instructions to instantiate a Mongo database and import the data*

`$npm start`

Using an HTTP client (I recommend Postman), submit a GET request to `localhost:8080/data`


#### Importing data
Please email Tony Xu at xuology@gmail.com for the mongoURI to access the mongo database

In the root directory, create a `.env` file and paste in the following: `mongoURI="URI"` where `URI` should be replaced with the credentials

In a new terminal window, navigate to the root directory, run the command below to import data (please note: the data is already imported)
`$node db/importData.js`
