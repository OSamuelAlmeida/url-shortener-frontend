# URL Shortener Frontend

Frontend for a simple URL Shortener in React

# Getting Started

## Environment Variables

The variables used by the project are in the *.env.example* file, please rename it to *.env* and overwrite the values as desired.

## Installation

### With Docker Compose

The easiest way to set-up and start the project is to use Docker Compose. Just run the following command inside the repository directory:

```
docker compose up
```

The React application will start running at *localhost:$PORT*.

### Local Installation

### Software Requirements

This project requires [Node.js](https://nodejs.org/en/) to run.

### Importing the External Variables into the Working Shell

Run the following command to export all the variables inside the *.env* file to your current Shell session:

```
export $(xargs < .env)
```

### Application Setup

To install the libraries and requirements for Node.js, run:

```
npm install
```

### Running the Application

To run the application in development mode, use:

```
npm start
```

The app at *localhost:$PORT*