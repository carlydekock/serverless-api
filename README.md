# Lab 18: AWS API, Dynamo and Lambda

Create a serverless REST API.

## Author: Carly Dekock

## Link to GitHub [repo](https://github.com/carlydekock/serverless-api.git)
## Link to PR [here](https://github.com/carlydekock/serverless-api/pull/2)

## Feature Tasks

Create a single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services.

### Database

- DynamoDB: 1 table required

### Routes: API Gateway

- POST: /people
- GET: /people and /people/{id}
- PUT: /people/{id}
- DELETE: /people/{id}

### CRUD

- Operation handlers: Lambda Functions

## Documentation

- Root URL: https://l8y326zcke.execute-api.us-west-2.amazonaws.com/Lab18/people
- Routes: GET/POST to /people, GET/PUT/DELETE to /people/{id}
- Inputs:
  - POST: input JSON body
  - PUT: input JSON body
  - DELETE: input ID
- Outputs:
  - GET: returns objects from database (all or specific id)
  - POST: returns object just added
  - PUT: returns updated object
  - DELETE: returns empty object

## UML

![image](/assets/UML.png)

## Credits and Collaborators

- Worked at lab table with Jason D, Jason Q, Nick M, and Seid
- Dynamoose [docs](https://dynamoosejs.com/getting_started/Introduction)
