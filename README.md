# Basic Ecommerce application

## Link to deployed App

**[Production Deployment Backend](https://)**

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/6225879/SWTAAyBM)

## Installation

## Backend

- Clone the repo by clicking the green clone or download button to copy the url on github
- In your teminal, run `git clone [insert URL copied from first step]`
- Open the repository with your code editor
- Checkout the `develop` branch using `git checkout develop`
- Setup `.env => checkout sample (.env.example) in the codebase` for environment variable
- Run `npm install` to install all dependencies
- Type `npm run watch` to get the development server running on the front-end
- Note: `no need for database setup` as this uses Mongo Atlas

## Add product

```js
  {
	"name": "21Attire Wine Bodycon Amd Ruffle Jacket Dress",
	"description": "The most fashionable,yet affordable bodycon ",
	"categoryId": "",
	"attributes": [{
		"price": 0,
		"imageUrl": "",
		"sizes": ["uk 8", "uk 10"],
		"color": ""

	}]
}
```

## getProducts

```js
{
    "success": true,
    "message": "successful",
    "body": {
        "products": [
            {
                "category": {
                    "_id": "",
                    "name": ""
                },
                "_id": "5e2ff9cc0c3ffebd3b5e77e1",
                "name": "",
                "description": "",
                "attributes": [
                    {
                        "sizes": [
                            "40",
                            "45",
                            "15"
                        ],
                        "_id": "",
                        "price": 19.99,
                        "imageUrl": "",
                        "color": ""
                    }
                ],
                "__v": 0
            }
}
```

## Contributing

- To contribute to this repo, branch off `develop` to create your own branch
- branch names can be `feat-create-login-page`
- Push your code to github and make a pull request against `develop`

## Required features

- Users can **View all product**
- Users can **create new product**
- Users can **user can preview the newly created product**

## Technologies

- ExpressJS
- React
- Redux
- styled-components
