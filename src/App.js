import React from 'react';
import InputField from './components/InputField';

import './App.css';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <InputField />
                <h1>{this.state}</h1>
            </div>
        );
    }
}



export default App;
