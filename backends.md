# Working with Backends

Not going to use a real backend, [json-server](https://github.com/typicode/json-server) provides a mock rest api with post requests and so on.

## install json-server

locally by running

```shell
npm i json-server
```

### add a script to run our fake server

go into `package.json` and add

```json
"server": "json-server --watch dbFile.json --port 5000"
```

to the scripts. 
It should look something like this:

```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "json-server --watch db.json --port 5000"
  },
```

### run our server

with the script we just created

```shell
npm run server
```

then open a new tab/window and run

```shell
npm start
```

to start your devserver as usual


finish
1:23:46
https://www.youtube.com/watch?v=w7ejDZ8SWv8