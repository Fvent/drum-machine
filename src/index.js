import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DrumMachine } from "./components/DrumMachine";

class App extends React.Component {
    constructor(props){
        super(props);
    }

    

    render(){
        return (<div id="app">
            <DrumMachine />
        </div>);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));