import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function Renderer () {
    return (
        <App />
    )
}

ReactDOM.render(<App />, document.getElementById('root'))