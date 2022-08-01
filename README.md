# Direct Upload Button Starter with Mux

A starter project to teach [Mux](https://mux.com/) users how to directly upload from their machine via a file picker / upload button.

## Prerequisites
- [React](https://reactjs.org/docs/getting-started.html)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/en/starter/installing.html)
- [Webhooks](https://www.getvero.com/resources/webhooks/) (Optional)

## Credentials and Environment Variables

Create a `.env` file at the root of the project, paste the below, and replace the square brackets with your Mux API credentials.

```
PORT=[your preferred port other than 3000]
MUX_ACCESS_TOKEN_ID=[your mux access token id]
MUX_SECRET_KEY=[your mux secret key]
```

## Setup
```javascript
git clone https://github.com/clearlyTHUYDOAN/mux-direct-upload.git
cd mux-direct-upload
// Install server-side dependencies
npm install
// Install client-side dependencies
cd client
npm install
```

## Running the starter project

Run the following in separate terminals, from the root:

**Server**
```javascript
npm run server
```

**Client**
```javascript
npm run client
```

## Running the final project

Run the following in separate terminals, from the root:

**Server**
```javascript
npm run final-server
```

**Client**

Go into the client folder's `index.js` file. Uncomment out the import line using `Final-Button.js`.

Then, comment out the active line importing `Button.js`. Next, run the following command:

```javascript
npm run client
```
