import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addTodosAsync } from '../redux/todoSlice';

export default function Addtodo() {
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodosAsync({
            title: title, 
            description: description, 
        }))
    }

    return (
        <section style={{ 
            backgroundColor: '#d7d7d7', 
            padding: '1rem', 
            borderRadius: '12px', 
            width: '80%' 
        }} onSubmit={handleSubmit}>
            <form style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr', 
                gap: '1rem',
                '@media (min-width: 768px)': {
                    gridTemplateColumns: 'repeat(3, 1fr)'
                }
            }}>
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '0.5rem'
                }}>
                    <label htmlFor="name" style={{ color: 'black' }}>Enter your Task Name</label>
                    <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} style={{ 
                        width: '100%', 
                        borderRadius: '8px', 
                        padding: '0.5rem', 
                        border: 'none', 
                        backgroundColor: '#fff' 
                    }} />
                </div>
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '0.5rem'
                }}>
                    <label htmlFor="name" style={{ color: 'black' }}>Enter the Task Description </label>
                    <input type="text" required value={description} onChange={(e) => setDescription(e.target.value)} style={{ 
                        width: '100%', 
                        borderRadius: '8px', 
                        padding: '0.5rem', 
                        border: 'none', 
                        backgroundColor: '#fff' 
                    }} />
                </div>
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    '@media (min-width: 768px)': {
                        justifyContent: 'flex-end'
                    } 
                }}>
                    <button type='submit' style={{ 
                        backgroundColor: 'red', 
                        borderRadius: '9999px', 
                        color: '#fff', 
                        padding: '0.5rem 2rem', 
                        border: 'none' 
                    }}>Add Todo</button>
                </div>
            </form>
        </section>
    )
}
