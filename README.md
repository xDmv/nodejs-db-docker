## Rest APIs example with Express

I am use tehnology:
  - Node.js Express.js
  - Sequelize
  - Docker images: MySQL & Adminer
  - Make file

Before use, you must have Docker and Docker-CE installed!
Before use create file /be/.env with setting:
- DB_DATABASE=example
- DB_USER=user
- DB_USER_PASSWORD=password
- DB_PASSWORD=root-password
- DB_PORT=only numbers

For starting your need:
  1) $ make init
  2) $ make start

For development project your need:
  1) $ make init
  2) $ make dev