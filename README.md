
# Weather React App

## Table of Contents
1. [Intro](#intro)
2. [Demo](#demo)
3. [Available scripts](#available-scripts)
4. [Schema](#schema)
5. [Next steps](#next-steps)
6. [Screenshots](#screenshots)

## Intro

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses [TypeScript](https://www.typescriptlang.org/). 

The project can retrieve information about weather from the www.metaweather.com/api. It makes requests to a simple api hosted at Heroku, and this api makes requests directly to the meta weather api. It works like that because the web application can't make the requests directly to the meta weather api, it's a CORS problem.

The application was created following the Clean Architecture principle. It's probably more than this simple application needs but it was used as a personal study.
  
## Demo

https://reactmetaweather.herokuapp.com/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Schema

![Clean Architecture](https://raw.githubusercontent.com/guilhermemcardoso/react-weather/main/.github/clean.jpg)
## Next steps

 - [ ] Tests
 - [ ] State management
 - [ ] Responsiveness
 - [ ] UI/UX improvements

## Screenshots

![Home Screen](https://raw.githubusercontent.com/guilhermemcardoso/react-weather/main/.github/screenshot001.png)
![Weather Results](https://raw.githubusercontent.com/guilhermemcardoso/react-weather/main/.github/screenshot002.png)