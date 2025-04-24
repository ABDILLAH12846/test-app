// src/components/TodoInput.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todo';
import { useNavigate } from 'react-router';
import styles from './add-task.module.css';
import TextInput from '../../element/text-input/text-input';
import OptionInput from '../../element/option-input/option-input';
import { Button } from '../../element/button/button';

const AddTask = () => {
    const [text, setText] = useState('');
    const [err, setErr] = useState(false)
    const [status, setStatus] = useState('pending'); // Status default 'pending'
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const options = [
        {
            value: "pending",
            label: "Pending",
        },
        {
            value: "completed",
            label: "Completed",
        }
    ]

    const handleAddTodo = () => {
        if (text.trim()) {
            const newTodo = {
                id: Date.now(),
                text: text.trim(),
                status: status,
            };
            dispatch(addTodo(newTodo));
            console.log({ newTodo });
            setText('');
            setErr(false);
            //   navigate('/task');
            navigate(-1);
        } else {
            setErr(true);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <TextInput
                    type="text"
                    value={text}
                    onChange={(value) => setText(value)}
                    placeholder="Add a new task"
                    error={err}
                />
                <OptionInput
                    value={status}
                    onChange={(value) => setStatus(value)}
                    options={options}
                />
                <Button onClick={handleAddTodo} label='Add Todo' />
            </div>
        </div>
    );
};

export default AddTask;
