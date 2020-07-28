# Dialogflow-integration

It's an integration middleware for connecting dialogflow chatbot to whatsapp API(here provided by zoko) with concurrency handler. It uses webhook which recieves event driven notification from whatsapp API provider and thus helps you build a robust 2-way communication system at your end.

## ✨ Features

- concurrency handler
- allows to process incoming dialogflow intent
- dockerized deployment

## Prerequisites

- `node` and `npm`
- `docker` and `docker-compose`

## :rocket: Quick start

### Step 1: Clone the repo
Fork the repository. then clone the repo locally by doing -

```sh
git clone https://github.com/akshit8/dialogflow-integration.git
```
### Step 2: Setup .env
To run the server you will also need to provide the `.env` variables

- create a new file app.env in the root
- open [app.template.env](./app.template.env)
- copy the contents and paste it to the app.env
- populate app.env with your valid credentials

### Step 3: docker-compose
Start the service with docker-compose
```sh
docker-compose up -d
```
### Step4: configuring webhook
configure webhook woth your whatsapp API provider to get messages from the user and forward it to chatbot.

