import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { completeTododAsync, deleteTodoAsync } from '../redux/todoSlice';

export default function Todoitems({ id, title, description, complete }) {
    const dispatch = useDispatch();

    const handleComplete = (id) => {
        dispatch(
            completeTododAsync({ id: id, complete: !complete })
        )
    }

    const handleDelete = (id) => {
        dispatch(
            deleteTodoAsync({ id: id})
        )
    }

    return (
        <li style={{ 
            width: '100%', 
            padding: '1rem', 
            border: '2px solid #d7d7d7', 
            borderBottom: '2px solid #dedede'
        }}>
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                flexWrap: 'wrap', 
                '@media (min-width: 768px)': {
                    flexDirection: 'row'
                } 
            }}>
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column' 
                }}>
                    <div style={{ 
                        fontSize: '1.5rem', 
                        color: complete ? '#333' : '#222',  // Changed text color for better visibility
                        textDecoration: complete ? 'line-through' : 'none'
                    }}>
                        {title}
                    </div>
                    <div style={{ 
                        color: complete ? '#555' : '#444', // Changed text color for better visibility
                        textDecoration: complete ? 'line-through' : 'none'
                    }}>
                        {description}
                    </div>
                </div>
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'row', 
                    gap: '0.5rem' 
                }}>
                    {!complete && (
                        <button onClick={() => handleComplete(id)} style={{ 
                            borderRadius: '9999px', 
                            backgroundColor: '#fff', 
                            fontWeight: '600', 
                            padding: '0.5rem 1rem', 
                            border: '2px solid #4caf50', 
                            color: '#4caf50' 
                        }}>
                            Complete
                        </button>
                    )}
                    <button onClick={() => handleDelete(id)} style={{ 
                        borderRadius: '9999px', 
                        backgroundColor: '#fff', 
                        fontWeight: '600', 
                        padding: '0.5rem 1.5rem', 
                        border: '2px solid #f44336', 
                        color: '#f44336' 
                    }}>
                        Delete
                    </button>
                </div>
            </div>
        </li>
    )
}
