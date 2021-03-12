import React, { Component } from 'react'

class NavBar extends Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        const iconoMenu = document.querySelector("#icono");
        const menu = document.querySelector("#menu");
        const body = document.querySelector("body");
        iconoMenu.addEventListener(('click'), (e) => {

            menu.classList.toggle('active');
            
            if(menu.classList.contains('active')){
                
            }
            /*document.body.classList.toggle('opacity')*/
        })

        main.addEventListener(('click'), () => {
            if(!(menu.classList.contains('active'))){
                menu.classList.toggle('active');
            }
        });
        /*
        if(menu.classList.contains("active")){
            body.addEventListener(('click'), (e) => {
                menu.classList.toggle('active');
            })
        }
        */
    }
    render() {
        return (
            <React.Fragment>
                <div className="w-full bg-blue-900 h-12 flex flex-row items-center justify-start z-10 gap-2">
                    <div className="flex flex-row items-center z-20">
                        <div className="text-center icon-container z-10 pl-2">
                            <span style={{paddingTop: 2 + 'px'}} className="material-icons cursor-pointer transition text-2xl hover:bg-blue-900 transform hover:-translate-1 hover:scale-110" id="icono">
                                menu
                    </span>
                        </div>
                    </div>
                    <div className="flex ml-0"><h2 className="font-normal text-white text-xl">DIREC</h2><h2 className="font-bold text-white text-xl">POST</h2></div>
                    <div className="text-white flex flex-col ">
                        <div className="flex flex-row justify-end  text-xs items-center">
                            <h4>{this.props.email}</h4>
                        </div>
                        <div className="flex flex-row justify-end pr-10 cursor-pointer text-xs items-center">
                            <a>Salir</a>
                        </div>
                    </div>
                    <nav className="cont-menu active bg-blue-900 text-white w-1/5 shadow-md z-10" id="menu">
                        <ul>
                            <li className="hover:bg-gray-900 p-2 cursor-pointer "><a className="flex flex-row items-center gap-1 text-sm"><span className="material-icons text-l">credit_card</span>Agregar plan</a></li>
                            <li className="hover:bg-gray-900 p-2 cursor-pointer"><a className="flex flex-row items-center gap-1 text-sm"><span className="material-icons text-l">add_circle_outline</span>Agregar producto</a></li>
                            <li className="hover:bg-gray-900 p-2 cursor-pointer"><a className="flex flex-row items-center gap-1 text-sm"><span className="material-icons text-l">rule</span>Agregar regla</a></li>
                            <li className="hover:bg-gray-900 p-2 cursor-pointer"><a className="flex flex-row items-center gap-1 text-sm"><span className="material-icons text-l">link</span>Generar botón de pago</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="w-full h-12 bg-gray-900">
                    <div className="flex-1"></div>
                    <div className="flex-1"></div>

                </div>
            </React.Fragment>
        );
    }
}

export default NavBar;