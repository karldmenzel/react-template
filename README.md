## About

This project is designed to be a template for spinning off new React-Redux applications. It is set up with multiple pages, REST services and redux.

## Startup Checklist

[ ] Change name in `package.json`

[ ] Generate new fav icon at [favicon.io](https://favicon.io) and place it in ./public/

[ ] Change title in `manifest.json` and in `index.html`

[ ] Delete the .git folder and reinitalize the repository

## Photos

The icon for this site was generated at [favicon.io](https://favicon.io).

## Build and deployment

#### Dev
To run this app for dev:

`npm install`

`npm start`

The app will be available at [http://localhost:3000](http://localhost:3000).

#### Prod (not used)
To locally serve this app for production:

`npm run build`

`serve -s build -l 80`

#### Deployment
To build and serve this app through docker:

`docker-compose up`

#### Manual deployment (not used)
Or the container can be built and run mantually:

`docker build -t container-name .`

`docker run -it -p 80:80 container-name`

#### Unbundling `react-scripts`

Run `npm run eject` to remove the `react-scripts` dependency and replace it with it's dependents. This is a one way operation.

## Useful links

[Create React App](https://github.com/facebook/create-react-app)

[CRA: Running tests](https://facebook.github.io/create-react-app/docs/running-tests)

[CRA: Deployment](https://facebook.github.io/create-react-app/docs/deployment)

[CRA: Progressive Web App](https://create-react-app.dev/docs/making-a-progressive-web-app/)

[CRA: Analying app size](https://create-react-app.dev/docs/analyzing-the-bundle-size/)

[CRA: HTTPS](https://create-react-app.dev/docs/using-https-in-development/)

[CRA: Advanced Config](https://create-react-app.dev/docs/advanced-configuration/)
