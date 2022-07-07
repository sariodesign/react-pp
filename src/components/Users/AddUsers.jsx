import { useState } from 'react';
import classes from './AddUsers.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }

        if (+enteredAge < 1){
            return;
        }

        setEnteredUsername('');
        setEnteredAge('');

        props.onAddUser
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                <label htmlFor="">Age (years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;