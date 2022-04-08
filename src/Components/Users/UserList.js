import React from "react";
import classes from "./UserList.module.css";
import Card from "../UI/Card";
import User from "./User";

const UserList = (props) => {

    return (
        <Card className={classes.users}>
            <ul>
                {props.usersList.map((eachUser) => <User key={Math.random()} name={eachUser.name} age={eachUser.age} />)}
            </ul>
        </Card>
    )

}

export default UserList;