## Contributing

- Install dependencies : `npm install`
- Start mysql database in docker : `docker run --name ringover -p 3306:3306 -e MYSQL_ROOT_PASSWORD=secret -d mysql:8.0.32`
- Enter the mysql shell of docker container : `docker exec -it ringover mysql -uroot -p`
- Enter the password you have set in step 2 : `secret`
- Create the database : `create database ringover_db`
- Change to your created database : `use ringover_db`
- Start the server : `node index.js`

**Note** -> Keep the name and password of database similar to the ones used in the `connect.js` file for everything to work properly