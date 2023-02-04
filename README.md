# E-commerce Backend

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

## Demo

[![Ecommerce Backend Demo](/assets/images/demo-play.jpg)](https://drive.google.com/file/d/1xfFYiS4oDz7OXcMgsafM2Qq-B8K3K5C_/view "Ecommerce Backend Demo")

## Description

An API backend for viewing and editing a database of products in an e-commerce website, along with their categories and tags.

## Installation

Before installing this application, you will need to have installed

- [MySQL Server](https://dev.mysql.com/downloads/installer/) (When it asks you to sign up, click "No thanks, just start my download", and in the installer choose "Server only")
- [Git Bash](https://gitforwindows.org/), if you are on Windows.
- [Insomnia](https://insomnia.rest/download) (optional if you plan on making API requests some other way)

To install:

- Open the terminal application on your computer
- Log in to MySQL by entering the command `mysql -u [username] -p`, replacing [username] with your MySQL username (most likely 'root' if you don't know it) and then entering your MySQL password when prompted
- Enter the command `CREATE DATABASE ecommerce_db`
- Enter the command `exit`
- Pick the folder you want to download this application to and enter `cd path/to/folder`, replacing "path/to/folder" with the absolute path to the folder you want
- Clone this repository with `git clone https://github.com/JaredSchips/e-commerce.git`
- In your file explorer, navigate to `path/to/folder/e-commerce` and open the file `.env.EXAMPLE`
- Fill in the quotes next to DB_USER with your MySQL username
- Fill in the quotes next to DB_USER with your MySQL password
- Rename `.env.EXAMPLE` to `.env`
- (Optional) Run `npm seed` if you want to seed the database with default values
- Run `npm start`. the terminal should show a bunch of text followed by "App listening on port 3001!"
- When you are done, close the server by pressing Ctrl-C in the terminal

## Usage

Once the server is running, you can make various API requests to view, edit, and delete categories, products, and tags from the database. This capability will be demonstrated here using Insomnia.

If you are using a `POST` or `PUT` route, the fields you should include in the request body depend on which kind of item you are editing.

`categories` should include a `category_name` field.

`products` should include a `product_name`, `price`, `stock`, and `tags` field.

`tags` should include a `tag_name` field.

In each route, replace `[type]` with the type of item you want to view/edit: either `categories`, `products`, or `tags`.

Listed below are the available API requests:

- `GET api/[type]`: returns a list of all items in the database of the given type, along with assosiated categories, products, and/or tags.

![Insomnia demonstration for getting all categories](/assets/images/get-all-category.png)

- `GET api/[type]/id`: returns the category in the database with id matching the one given in the URL, along with assosiated categories, products, and/or tags.

![Insomnia demonstration for getting one category](/assets/images/get-one-category.png)

- `POST api/[type]`: takes a JSON file in the request body, adds a new item to the database with the given values, and returns a JSON file representing the created item.

![Insomnia demonstration for adding a new category](/assets/images/post-category.png)

- `PUT api/[type]/id`: takes a JSON file in the request body, finds the item in the database matching the id in the URL, updates that item with the values given in the JSON, and returns either `[1]` or `[0]`.
  - `[1]` means a category matching the id was found and successfully edited.
  - `[0]` means a category matching the id was not found, or that a category matching the id was found but the new value was the same as the old value and so nothing was edited.

![Insomnia demonstration for updating a category](/assets/images/put-category.png)

- `DELETE api/[type]/id`: deletes the category with the id in the URL, and returns either `0` or `1`.
  - `1` means a category matching the id was found and successfully deleted.
  - `0` means a category matching the id was not found.

![Insomnia demonstration for deleting a category](/assets/images/delete-category.png)

## Credits

Jared Schips

## License

Licensed under the Unlicense
