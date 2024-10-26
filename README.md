# Support Ticket Management

Coding assessment for Nerdevs recruitment process.
## Run Locally

Clone the project

```bash
  git clone https://github.com/MDAmir159/Support-Ticket-Management.git
```

Go to the project directory

```bash
  cd Task1
```

Install dependencies

```bash
  npm install
```


Add `.env` file to root server directory. An example .env file is available named as `.env.example` for understanding. However, you can use it according to your own sysem.
```
PORT=<backend-port-no>
DB_HOST=<host-name>
DB_NAME=<db-name>
MONGO_PORT=<mongodb-portno>
```

Start the server
In developement mode
```bash
  npm run dev
```

To transpile and get the production build,
```bash
npm build
```

This will automatically create a `dist` folder in the root directory. Opening this, you can see the project with the same structure of the original ts project, with the optmized and transpiled js files.

To run project in production mode.
```bash
npm start
```

Your project will run on http://localhost:{port-name}.
## API Reference
#### Ticket Registration

```http
  POST /support/create-ticket
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userId` | `string` | **Required** |
| `date` | `string` | **Required** |
| `deviceId` | `string` | **Required** |
| `queryText` | `string` | **Required** |

Upon successful registration a ticket, the returned HTTP Status code 200(OK)
```
{
    "data": {
        "_id": <support-ticket-id>
    }
}
```
For invalid try to register will leave this response with 409(CONFLICT)
```
{
    "message": "You have already placed a support ticket. Please wait at least one hour before sending another request."
}
```
## Tech Stack

**Server:** Node, Express, MongoDB
