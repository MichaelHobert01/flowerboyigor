## Express.js API with Sequelize
This is a functional Express.js API that utilizes Sequelize as the ORM (Object-Relational Mapping) tool to interact with a MySQL database. It provides endpoints for managing categories, products, and tags.

# Prerequisites
Before running the application, ensure that you have the following set up:

Node.js installed on your machine
MySQL database server installed and running
Insomnia (or any API testing tool) installed for testing the API routes
Installation
Clone the repository to your local machine.

Navigate to the project directory in your terminal.

Install the required dependencies by running the following command:

Copy code
npm install
Create an environment variable file (.env) in the root directory of the project and configure the following variables:

makefile
Copy code
DB_NAME=your_database_name
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
Database Setup
Create a MySQL database with the name specified in the DB_NAME environment variable.

Run the database migration and seeding commands to set up the development database with test data:

less
Copy code
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
Usage
Start the application by running the following command:

sql
Copy code
npm start
Once the server is running, you can use Insomnia (or any API testing tool) to test the available routes.

Use HTTP GET requests to retrieve data from categories, products, or tags. The data will be returned in a formatted JSON format.
Use HTTP POST, PUT, and DELETE requests to create, update, and delete data in the database.
# API Routes
The following routes are available in the API:

GET /api/categories: Retrieve all categories.

GET /api/categories/:id: Retrieve a specific category by ID.

POST /api/categories: Create a new category.

PUT /api/categories/:id: Update a category.

DELETE /api/categories/:id: Delete a category.

GET /api/products: Retrieve all products.

GET /api/products/:id: Retrieve a specific product by ID.

POST /api/products: Create a new product.

PUT /api/products/:id: Update a product.

DELETE /api/products/:id: Delete a product.

GET /api/tags: Retrieve all tags.

GET /api/tags/:id: Retrieve a specific tag by ID.

POST /api/tags: Create a new tag.

PUT /api/tags/:id: Update a tag.

DELETE /api/tags/:id: Delete a tag.

## Contributing
Nobody but me :)

## License
This project is licensed under the MIT License.