import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {
    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            // alert("Enter valid Details");
            setError({ title: "Invalid Input", message: "Please enter Valid Name & Age" });
            return;
        }
        if (+ userAge < 1) {
            // alert("Age should be greater than 1");
            setError({ title: "Invalid Age", message: "Please enter Age(>0)" });
            return;
        }
        console.log(`${userName} >> ${userAge}`);
        props.addUser({ name: userName, age: userAge });
        setUserAge('');
        setUserName("");
    }

    const onUserNameChangeHandler = (event) => {
        setUserName(event.target.value);
    }

    const onUserAgeChangeHandler = (event) => {
        setUserAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModel title={error.title} errorContent={error.message} onConfirm={errorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler} >
                    <label htmlFor="userName">User Name</label>
                    <input type="text" id="username" value={userName} onChange={onUserNameChangeHandler} />
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" value={userAge} onChange={onUserAgeChangeHandler} />
                    <Button type="submit" >Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;