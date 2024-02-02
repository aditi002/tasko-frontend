import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { toast } from "react-toastify";

const AddTask = ({ token, user }) => {
    const { TextArea } = Input
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [reminderDate, setReminderDate] = useState("");

    const onSubmit = async () => {
        const task = {
            title,
            desc,
            dueDate,
            reminderDate,
            user: user
        };

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        await axios
            .post("http://localhost:3000/tasks/createTask", task, config)
            .then((res) => {
                toast.success(`Task Added!`);
                window.location.reload()
            })
            .catch((e) => {
                toast.error(`Task Addition Failed!`);
            });
    };

    return (
        <div className="add-task-container">
            <h3 className="add-task-title">Add Task</h3>
            <Form name='task-form' layout='vertical'>
                <Form.Item>
                    <Input
                        className="add-task-input"
                        placeholder="Task Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <TextArea
                        className="add-task-input"
                        placeholder="Task Description"
                        rows={2}
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        className="add-task-input"
                        type="date"
                        placeholder="Due Date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        className="add-task-input"
                        type="date"
                        placeholder="Reminder Date"
                        value={reminderDate}
                        onChange={(e) => setReminderDate(e.target.value)}
                    />
                </Form.Item>
                <Form.Item className="add-task-button">
                    <Button style={{ width: "50%", backgroundColor: "#5c2751" }} type="primary" onClick={onSubmit}>
                        Add 
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddTask;