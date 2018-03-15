import React, { Component } from 'react';
import Navbar from './navbar.js';
import Content from './content.js';
import Header from './header.js';
class App extends Component {

    render() {
        return (
            <div >
                <Navbar/>
                <Header />
                <Content/>


            </div>
        );
    }
}

export default App;
