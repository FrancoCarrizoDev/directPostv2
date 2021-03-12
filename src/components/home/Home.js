import React, { Component } from 'react';
import Header from '../header/Header';
import Login from '../login/Login';
import Footer from '../footer/Footer';

import './Home.css'

class Home extends Component {
    render(){
        return(
            <div className="home-container">
                <Header></Header>
                <Login></Login>
                <Footer></Footer>
            </div>
        )
    }
}

export default Home;