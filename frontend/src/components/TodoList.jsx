import React, { useEffect, useState } from 'react';
import Todoitems from './Todoitems';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getTodosAsync } from '../redux/todoSlice';

export default function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector((state)=> state.todos);

    useEffect(()=>{
        dispatch(getTodosAsync());
    }, [dispatch]);

    return (
        <section style={{ backgroundColor: '#d7d7d7', borderRadius: '8px', marginTop: '1rem', width: '80%' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {todos.length > 0 ? (
                    todos.map((todo, i) => (
                        <Todoitems key={i} id={todo._id} title={todo.title} description={todo.description} complete={todo.complete} />
                    )))
                    : (<p style={{ color: '#fff', textAlign: 'center', padding: '1rem' }}>Dont have any task free now ! </p>)
                }
            </ul>
        </section>
    );
}
