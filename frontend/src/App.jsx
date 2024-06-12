import React from 'react';
import './App.css';
import Addtodo from './components/Addtodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <div style={{ 
        width: '100%', 
        backgroundColor: '#333', 
        minHeight: '100vh' 
      }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          padding: '4rem 2rem' 
        }}>
          <h1 style={{ 
            color: '#fff', 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            paddingBottom: '2rem' 
          }}>REDUX TODO</h1>
          <Addtodo />
          <TodoList />
        </div>
      </div>
    </>
  )
}

export default App;
