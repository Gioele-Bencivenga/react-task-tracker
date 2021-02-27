# Deploying the App

how to build and deploy your app once it's ready for production

## build the app

While in the project directory run

```shell
npm run build
```

expected output:

```shell
> react-task-tracker@0.1.0 build
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  42.62 KB  build\static\js\2.461a1d83.chunk.js
  1.6 KB    build\static\js\3.7d755975.chunk.js
  1.47 KB   build\static\js\main.851f7a4f.chunk.js
  1.18 KB   build\static\js\runtime-main.f1732c40.js
  621 B     build\static\css\main.96bdf19e.chunk.css

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  yarn global add serve
  serve -s build

Find out more about deployment here:

  https://cra.link/deployment
```

your app will be in the `build` folder.

## install the web server

install an http webserver globally by running

```shell
npm i -g serve
```

expected output:

```shell
added 78 packages, and audited 79 packages in 11s

1 package is looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

serve the build folder on the local webserver on port 8000

```shell
serve -s build -p 8000
```

expected output:

```shell
   ┌───────────────────────────────────────────────────┐
   │                                                   │
   │   Serving!                                        │
   │                                                   │
   │   - Local:            http://localhost:8000       │
   │   - On Your Network:  http://169.254.80.80:8000   │
   │                                                   │
   │   Copied local address to clipboard!              │
   │                                                   │
   └───────────────────────────────────────────────────┘
```

Done, you can access your locally deployed app at the listed address.