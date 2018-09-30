# MyReads Project
This is a student project for Udacity's Front End Nanodegree program. Using a starter template I broke the file down into React components and added functionality.

- A book can change shelf from: Currently reading, Want to Read, Read, or none
- Searching loads 20 books (Note: only specific search terms return resluts see [SEARCH_TERMS.md](SEARCH_TERMS.md), and Important for more details)
- Books can be added to a shelf from the search


## To Preview

* download or clone the files
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Resources Used

* Ryan Waite - Udacity Coach [Project Walkthrough](https://www.youtube.com/watch?v=acJHkd6K5kI&amp=&feature=youtu.be)
* Forest - Fellow FEND student [Project Walkthrough](https://www.youtube.com/watch?v=bpKI3R0nf7E)
* Stackoverflow [OnChange event using React JS for drop down](https://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down)
* Stackoverflow [React - How to get the value of an input field?](https://stackoverflow.com/questions/36683770/react-how-to-get-the-value-of-an-input-field)
* [React Docs - Controlled Components](https://reactjs.org/docs/forms.html#controlled-components)

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, pull requests will most likely will not accept. This is a student project, and my first time using React.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
