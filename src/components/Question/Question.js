import React from 'react';
import './Question.css';


class Question extends React.Component {

    render () {
        return (
    <div className="question">
      <h2>Type in the city you want to know the weather:</h2>
      <input type="text" id="city"></input>
      <button onClick={this.props.handler}>Submit</button>
    </div>
        )
    }
}

export default Question