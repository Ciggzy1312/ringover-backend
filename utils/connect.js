module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'secret',
    DB: 'ringover_db',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

// docker run --name mySQL -p 3306:3306 -e MYSQL_ROOT_PASSWORD=secret -d mysql:8.0.32