import React, { Component} from 'react';
import './Loggined.css';
import './navbar/NavBar.css';
import NavBar from './navbar/NavBar';
import Addplan from './app/addPlan/Addplan';
import Datatable from '../datatable/Datatable';
class Loggined extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <NavBar email={this.props.email}></NavBar>
                <div className="w-full flex flew-row h-screen mx-auto pt-3" style={{backgroundColor: '#f5f5f5'}} id="aca">
                    {/*<Addplan/>*/}
                    {/*<Datatable/>*/}
                </div>
            </div>
        );

    }
}

export default Loggined;