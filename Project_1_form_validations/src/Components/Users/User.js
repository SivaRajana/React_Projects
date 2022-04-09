import React from "react";

const User = (props) => {

    return (
        <li>
            <p>{`${props.name} is ${props.age} years old.`}</p>
        </li>
    )
}

export default User;