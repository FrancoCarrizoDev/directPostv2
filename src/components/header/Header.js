import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="container mx-auto flex flex-wrap flex-row justify-between p-10">
                    <div className="mx-auto flex ml-0"><span className="material-icons text-white text-3xl">help_outline</span></div>
                    <div className="mx-auto flex mr-0"><h2 className="font-normal text-white text-2xl">DIREC</h2><h2 className="font-bold text-white text-2xl">POS</h2></div>

                </div>
            </div>
        )
    }
}

export default Header;