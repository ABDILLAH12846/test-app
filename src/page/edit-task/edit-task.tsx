// src/page/edit-task/edit-task.tsx
import { useParams, useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import styles from './edit-task.module.css';
import TextInput from '../../element/text-input/text-input';
import OptionInput from '../../element/option-input/option-input';
import { Button } from '../../element/button/button';
import { updateTodo, TodoState, Todo } from '../../redux/todo';

export default function EditTask() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const todos = useSelector((state: { todos: TodoState }) => state.todos.todos);
    const currentTodo = todos.find(todo => todo.id === Number(id));

    const [text, setText] = useState('');
    const [status, setStatus] = useState('pending');
    const [err, setErr] = useState(false);

    const handleUpdate = () => {
        if (text.trim()) {
            const updatedTodo: Todo = {
                id: Number(id),
                text: text.trim(),
                status,
            };
            dispatch(updateTodo(updatedTodo));
            navigate('/');
        } else {
            setErr(true);
        }
    };

    useEffect(() => {
        if (currentTodo) {
            setText(currentTodo.text);
            setStatus(currentTodo.status);
        }
    }, [currentTodo]);

    const options = [
        { value: 'pending', label: 'Pending' },
        { value: 'completed', label: 'Completed' }
    ];

    if (!currentTodo) {
        return <div className={styles.container}><p>Task tidak ditemukan.</p></div>;
    }


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Edit Task</h2>
                <TextInput
                    type="text"
                    value={text}
                    onChange={(value) => {
                        setText(value);
                        if (err && value.trim()) setErr(false);
                    }}
                    placeholder="Edit task"
                    error={err}
                />
                <OptionInput
                    value={status}
                    onChange={setStatus}
                    options={options}
                />
                <Button onClick={handleUpdate} label="Update Task" />
            </div>
        </div>
    );
}
