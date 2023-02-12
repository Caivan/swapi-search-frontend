
# Swapi API
## swapi-search-frontend

Search an Star Wars character using an input text.

- Fetch the characters from the `https://swapi.dev/api/people`
- Render a list of star wars characters
- When the user type a new value in the field text the list is updated

## Run Locally

Clone the project

```bash
  git clone https://github.com/Caivan/swapi-search-frontend.git
```

Go to the project directory

```bash
  cd swapi-search-frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Go to 

```
  http://localhost:5173/
```

## API Reference

#### Get people

```
  GET /api/people
  https://swapi.dev/api/people
```


#### Get People Search

```
  GET /api/people
  https://swapi.dev/api/people?search
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `search`      | `string` | String to search |



## Authors

- [@caivan](https://www.github.com/Caivan)
