**Scenario:**

Your trading platform stores transaction data in a MongoDB collection, and you need to create a 
MongoDB aggregation query to extract specific information from this collection. In addition, you want to 
ensure that the API for running this query responds properly.

**Requirements:**

You have a MongoDB collection named "transactions," with documents representing various trading 
transactions. Each document has fields like "timestamp," "symbol," "price," and "quantity."

Create a MongoDB aggregation query that finds the following:

- The total number of transactions for a given symbol.
- The total transaction volume (price * quantity) for the same symbol.
- The average transaction price for the same symbol.
- Implement an API endpoint in Node.js that allows users to run the aggregation query for a 
specific symbol by making a GET request to an endpoint like /api/symbol-statistics/:symbol.
- Set up Postman test scripts to test the API endpoint. Ensure that the API response contains the 
correct data, including the total number of transactions, total transaction volume, and average 
transaction price for the given symbol.
- Provide a Postman collection that includes the API request, environment variables, and test 
scripts. The collection should validate that the API responds properly with the expected data.

