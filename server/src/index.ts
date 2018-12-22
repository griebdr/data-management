import "reflect-metadata";
import {createConnection} from "typeorm";
import {Use2r} from "./entity/user";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new Use2r();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);
    
    console.log("Loading users from the database...");
    // const users = await connection.manager.find(Use2r);
    // console.log("Loaded users: ", users);
     
    console.log("Here you can setup and run express/koa/any other framework.");
    
}).catch(error => console.log(error));