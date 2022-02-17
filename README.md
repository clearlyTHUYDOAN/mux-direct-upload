# Direct Upload Button Starter with Mux

A starter project to teach Mux users how to directly upload from their machine via a file picker / upload button.

## Prerequisites
- React[https://reactjs.org/docs/getting-started.html]
- Node[https://nodejs.org/en/]
- Express[https://expressjs.com/en/starter/installing.html]
- Webhooks[https://www.getvero.com/resources/webhooks/] (Optional)

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

*Server*
```javascript
npm run server
```

*Client*
```javascript
npm run client
```

## Running the final project

Run the following in separate terminals, from the root:

*Server*
```javascript
npm run final-server
```

*Client*
Go into the client folder's `index.js` file. Uncomment out the import line using `Final-Button.js`.

Then, comment out the active line importing `Button.js`. Next, run the following command:

```javascript
npm run client
```
