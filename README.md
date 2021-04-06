# REST API demo

REST API to generate and get discount codes for given brands.

## Documentation

This API exposes two endpoints.

### Generate discount code

Given a brand name, the API generates a discount code for the brand and returns it.

Example: `curl -X POST -H 'Content-Type: application/json' -d '{"brand": "Peek & Cloppenburg", "isActive": "true"}' 'http://localhost:8080/discount-codes'`

### Fetch a discount code

Returns a discount code for the given brand.

Example: `curl -X GET -H 'Accept: application/json' 'http://localhost:8080/discount-codes/peek%20&%20cloppenburg'`

### OpenAPI documentation

Refer to [the yaml file](api-documentation.yaml).

## How to run this project

The below steps are verified to work in a Linux system with Node version 14.15.4.

The below steps are not verified on Windows.

Therefore, it is recommended to use a Linux or Mac system to run this project.

1. Check out the repo.

2. Run `yarn` command to install the dependencies.

3. Run the command `yarn start` to start the development server at port 8080.
