import React, { Component } from 'react';
import Navbar from './navbar.js';
import Content from './content.js';
import Headers from './headers.js';



class App extends Component {

    render() {
        return (
            <div >
                <Navbar />
                <Headers />
                <Content/>


            </div>
        );
    }
}

export default App;
