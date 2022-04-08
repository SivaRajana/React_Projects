import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState("");
    const [userDetails, setUserDetails] = useState({ name: "", age: "" });

    const addUserHandler = (event) => {
        event.preventDefault();
        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            alert("Enter valid Details");
            return;
        }
        if (+ userAge < 1) {
            alert("Age should be greater than 1");
            return;
        }
        console.log(`${userName} >> ${userAge}`);
        setUserDetails((prevData) => {
            return { ...prevData, name: userName, age: userAge }
        });
        props.addUser(userDetails);
        setUserAge('');
        setUserName("");
    }

    const onUserNameChangeHandler = (event) => {
        setUserName(event.target.value);
    }

    const onUserAgeChangeHandler = (event) => {
        setUserAge(event.target.value);
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler} >
                <label htmlFor="userName">User Name</label>
                <input type="text" id="username" value={userName} onChange={onUserNameChangeHandler} />
                <label htmlFor="age">Age</label>
                <input type="number" id="age" value={userAge} onChange={onUserAgeChangeHandler} />
                <Button type="submit" >Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;