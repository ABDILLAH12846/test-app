import { useNavigate } from "react-router";
import { Button } from "../../element/button/button";
import TaskItem from "../../element/task-item/task-item";
import { TodoState } from "../../redux/todo";
import styles from "./task.module.css"
import { useSelector } from 'react-redux';
import OptionInput from "../../element/option-input/option-input";
import { useState } from "react";

export default function Task() {
    const todos = useSelector((state: { todos: TodoState }) => state.todos.todos);
    const navigate = useNavigate();
    const [status, setStatus] = useState('');

    const options = [
        {
            value: "completed",
            label: "Pending",
        },
        {
            value: "pending",
            label: "Completed",
        },
        {
            value: "",
            label: "All",
        },
    ]
    console.log({ todos })
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div>
                    <OptionInput
                        value={status}
                        onChange={(value) => setStatus(value)}
                        options={options}
                    />
                </div>
                <div className={styles.listBox}>
                    {todos.length > 0 ? todos.filter((item) => item?.status !== status).map((item) => (
                        <TaskItem data={item} key={item?.id} />
                    )) : <p>Nothing To Do</p>}
                </div>
                <div className={styles.buttoBox}>
                    <Button onClick={() => navigate('/add-task')} label="Add Task" />
                </div>
            </div>
        </div>
    )
}
