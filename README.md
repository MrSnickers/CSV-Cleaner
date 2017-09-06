# CSV cleaner

This is a little command line CSV cleaner that takes a CSV in a known format and cleans the data before printing to to stdout.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. It is not assumed you would need to deploy the project on a live system.

### Prerequisites

You will need to install [`node`](https://nodejs.org/en/download/) and [`yarn`](https://yarnpkg.com/lang/en/docs/install/) on your local machine to run this cleaner.


### Installing

A step by step series of examples that tell you have to get a development env running

First you will need to clone [the repo](https://github.com/MrSnickers/CSV-Cleaner) here to your local computer.
```
git clone https://github.com/MrSnickers/CSV-Cleaner.git
```

navigate into the repo and install node and yarn, if they are not installed globally.  Then install the dependencies for the app with:
```
yarn install
```

Then copy your CSV of interest into the `sample.csv` file in the `data` directory and clean it by running:
```
yarn start
```

## Running the tests

The tests are run with
```
yarn test
```
the tests also include a linting step with the AirBnB style guide.

## Built With

* [Jest](https://facebook.github.io/jest/) - The testing framework used
* [Yarn](https://yarnpkg.com) - Dependency Management
* [ESLint](https://eslint.org/) - I wouldn't know what to do without it

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/MrSnickers/CSV-Cleaner/tags). 

## Acknowledgments

* The scaffolding of this app comes from Verekia's excellent [js-stack-from-scratch] (https://github.com/verekia/js-stack-from-scratch)
