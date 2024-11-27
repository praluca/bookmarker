# Bookmark app

This is a basic bookmark app developed using Angular 16.2.0 version. It has a couple of features like: add/edit bookmark, delete bookmark and search for a specific bookmark.

## Run Locally

Clone the project

```bash
  git clone https://github.com/praluca/bookmarker/
```

Go to the project directory

```bash
  cd bookmarker
```

Install dependencies(on both mock-server and bookmark)

```bash
  npm install
```

Start the server

```bash
  npm start
```

Run Angular application

```bash
  ng serve
```

Open your browser on http://localhost:4200/

## Features

- List bookmarks

  ![App Screenshot](https://github.com/praluca/bookmarker/blob/main/pictures_of_app/list_bookmarks.png)

- Add bookmarks

=> both fields are required, if there are missing, are highlighted and button is disabled

![App Screenshot](https://github.com/praluca/bookmarker/blob/main/pictures_of_app/error.png)

=> also if url is wrong

![App Screenshot](https://github.com/praluca/bookmarker/blob/main/pictures_of_app/wrong_url_error.png)

=>if everything is ok, then button is enabled and highlighted is removed

![App Screenshot](https://github.com/praluca/bookmarker/blob/main/pictures_of_app/create_bookmark.png)

- Edit bookmarks

  ![App Screenshot](https://github.com/praluca/bookmarker/blob/main/pictures_of_app/edit_bookmark.png)

- Delete bookmarks

  ![App Screenshot](https://github.com/praluca/bookmarker/blob/main/pictures_of_app/delete_bookmark.png)

- Search for a specific bookmark

  ![App Screenshot](https://github.com/praluca/bookmarker/blob/main/pictures_of_app/search_bookmark.png)

  ## NgRX

  I used NgRx to store bookamrks and filtered bookmarks in app state.

![App Screenshot](https://github.com/praluca/bookmarker/blob/main/pictures_of_app/ngrx.png)
