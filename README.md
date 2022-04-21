# DWP software engineering API technical test

## Introduction

This mini project was part of the interview process at DWP for the software engineer role.

The task given is as follows:

- _Using the language of your choice please build your own API which calls the API at
  https://bpdts-test-app.herokuapp.com/, and returns people who are listed as either living in London, or whose current
  coordinates are within 50 miles of London._

I have used **NodeJS** and **Express** to build this API. The code has been laid out using an **MVC architecture**. This API has one endpoint which responds with all the users in London and within a 50 miles radius. In order to filter out users outside of this radius, the **haversine equation** from an [npm package](https://www.npmjs.com/package/haversine-distance) was used, with any users beyond the distance required not being included in the request.

## Pre-requisites

A minimum of [Node v16.11.0](https://nodejs.org/en/) needs to be installed

## Installing

After git cloning this repository, run the following command to install all the dependencies:

```
$ npm i
```

After the dependencies are installed, the API is ready to be ran

## Launching the API

To start the API, run the following script:

```
$ npm run dev
```

From here a GET request can be made by using the following address: http://localhost:9090/api/users in [insomnia](https://docs.insomnia.rest/) or in a web browser. The response will include all London users

## Testing

For testing, [Jest](https://jestjs.io/) has been implemented. To run the test, execute the following command:

```
$ npm t
```

## Improvements

Mock functions can be utilised to further test the responses from this API, which can deal with edge cases

## Author

- Syed Javaid
