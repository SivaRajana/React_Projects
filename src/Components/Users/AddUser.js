import React from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {

    const addUserHandler = (event) => {
        event.preventDefault();
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler} >
                <label htmlFor="userName">User Name</label>
                <input type="text" id="username" />
                <label htmlFor="age">Age</label>
                <input type="number" id="age" />
                <Button buttonTitle="Add User" />
            </form>
        </Card>
    )
}

export default AddUser;