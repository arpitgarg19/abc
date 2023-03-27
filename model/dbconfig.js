import { Sequelize } from "sequelize";

const sequelize = new Sequelize('handcraft', 'root', '101926', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log("Database connected..");
    }).catch(err => {
        console.log(err);
    })

export default sequelize;