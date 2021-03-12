import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <div className="footer-container text-center">
                <footer className="flex flex-col justify-center p-4 w-full bg-white gap-3">
                    <h4 className="text-sm text-gray-900">Cómo cuidamos tu privacidad</h4>
                    <h4 className="text-xs text-gray-700">Copyright &copy;2021  AlfaSoft S.R.L</h4>
                </footer>
            </div>
        )
    }
}

export default Footer;