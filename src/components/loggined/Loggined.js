import React, { Component} from 'react';
import './Loggined.css';
import './navbar/Main.css';
import Main from './navbar/Main';
class Loggined extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
                <Main></Main>
        );

    }
}

export default Loggined;