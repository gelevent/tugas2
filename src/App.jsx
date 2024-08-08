import React, { useState } from 'react';

function HelloWorld({ message }) {
    return (
        <div>
            <h1>{message}!</h1>
        </div>
    );
}
function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const renderMessage = () => {
        if (count > 10) {
            return <p>Count is greater than 10</p>;
        } else if (count < 0) {
            return <p>Count is less than 0</p>;
        } else {
            return <p>Count is {count}.</p>;
        }
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            {renderMessage()}
        </div>
    );
}

function List({ items }) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
function Form() {
    const [inputValue, setInputValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedValue(inputValue);
        setInputValue('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Your Input:
                    <input type="text" value={inputValue} onChange={handleInputChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
            {submittedValue && <p>You submitted: {submittedValue}</p>}
        </div>
    );
}

function App() {
    const names = ['Alice', 'Bob', 'Charlie', 'David'];

    return (
        <div className="App">
            <Counter />
            <HelloWorld message="Hello, World" />
            <HelloWorld message="Welcome to my Website" />
            <HelloWorld message="Props are awesome!" />
            <List items={names} />
            <Form/>
        </div>
    );
}


export default App;
