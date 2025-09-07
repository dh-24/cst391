# Activity 1

- Author: Daniel Hanson
- Date: 9/7/2025


## Introduction
In this assignment, we are building a Music API using **Node.js**, **Express**, and **Typescript**. This API lets clients like a web app interact with a MySQL database.


The API follows the REST style which means we use the common HTTP methods like GET, POST, PUT, and DELETE. 


## Summary
The code is organized by the MVC pattern.
- **Model/DAO**: Talks to the MySQL database and runs queries.
- **Controller**: Contains the logic. 
     - (Example: handling requests to find albums by artist or update an album) 
- **Router**: Connects HTTP endpionts like /album/:id to the right controller methods.


## Recording
- [Link to recording](/youtube.com)


## Environmental Variables
- [.env File](..\activities\activity1\part3\MusicAPI\.env)
- MySQL Database variables below:
```
#MySQL Settings
MY_SQL_DB_HOST=127.0.0.1
MY_SQL_DB_USER=root
MY_SQL_DB_PASSWORD=root
MY_SQL_DB_PORT=3306
MY_SQL_DB_DATABASE=music
MY_SQL_DB_CONNECTION_LIMIT=10


#Server Settings

PORT=5000
NODE_ENV=development
GREETING=Hello from the environment file. Be kind to the environment! 
```

## Database Initialization
- Open and start MySQL workbench.
- Copy the initialization file and paste into a query.
- Run the query to create the database.


## Activity 1 Commands
```
```

## Postman Test Links


## Conclusion
- I learned how to structure an Express API project with TypeScript.
- See how the routes, controllers, anda database queries work together.
- Learned how to use Postman to test RESTful endpoints. 
- Acquired hands on expereince with middleware, logging, and database integration.


