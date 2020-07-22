# skeleton of a node.js / express / postgres app

Uses the pg node package. Documenatation for that library is here: https://node-postgres.com/

## create table in your Postgres DB: 
create table test
(testcolumn varchar(20));

## Set the following ENV VARs for your DB Connections:
export DB_USER=''  DB='' DB_PASS='' DB_HOST='' DB_PORT='' DB_MAX_CLIENTS='' DB_IDLE_TIMEOUT_MS=''

## Run locally
http://localhost:3000/healthcheck and root return healthcheck

http://localhost:3000/servertime - returns servertime

http://localhost:3000/transaction - deletes then inserts into your DB using a transaction
