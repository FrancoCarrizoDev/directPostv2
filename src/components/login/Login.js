import React, { Component } from 'react';
import Loggined from '../loggined/Loggined'
import ReactDOM from 'react-dom';

import Loading from '../loading/Loading';
class Login extends Component {
    constructor(props) {
        super(props);
    }
    emailRef = React.createRef();
    passwordRef = React.createRef();

    state = {
        login: {},
        cargando: false
    }


    processing = ((e) => {
        e.preventDefault();

        this.setState({cargando: true })
        let html = document.querySelector("html")
        
        let btnIngresar = document.getElementById("btnIngresar");
        let btnOlvidePass = document.getElementById("btnOlvidePass")
        let input = document.querySelector("input")
        btnIngresar.style.cursor = "wait";
        btnOlvidePass.style.cursor = "wait";
        input.style.cursor = "wait";
        html.style.cursor = "wait";
        
        const element = (<Loading></Loading>)
        ReactDOM.render(element, document.getElementById("cargando"))
        this.state.login.pass = this.passwordRef.current.value;

        setTimeout(() => {
            this.setState({cargando: false })
            html.style.cursor = "auto";
            btnIngresar.style.cursor = "auto";
            btnOlvidePass.style.cursor = "auto";
            input.style.cursor = "auto";
            const element = (
            <Loggined email={this.state.login.email} password={this.state.login.pass}></Loggined>
        );
            ReactDOM.unmountComponentAtNode(document.getElementById("root"))
            ReactDOM.render(element, document.getElementById("root"))
        },2000)
        

        
    })

    goNext = (e) => {
        e.preventDefault();
        const email = this.emailRef.current.value;

        var login = {
            email: this.emailRef.current.value,
            pass: null,
        }

        this.setState({
            login: login
        });

        /*console.log(this.state);*/
        
    }



    render() {
        if (!this.state.login.email) {
            return (
                <div id="bigHeight" className="bigHeight">
                    <div className="2xl:w-1/4 w-1/3 mx-auto bg-white p-12 rounded flex flex-col gap-16 box-shadow-container mobile">
                        <div>
                            <h2 className="text-3xl text-center font-semibold">¡Hola!</h2><br></br>
                            <h2 className="text-2xl text-center font-semibold">Ingresá tu Email o ID</h2>

                        </div>
                        <form className="flex flex-col" onSubmit={this.goNext}>
                            <label className="text-left text-xs mb-1 2xl:text-sm" id="EmailId">Email o ID de Cliente</label>
                            <input className="focus:border-blue-200 focus:ring-1 focus:ring-blue-200 focus:outline-none w-full text-base text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-4" type="text" placeholder="" ref={this.emailRef} />
                            <button className="w-full hover:bg-blue-800 group flex items-center rounded-md bg-blue-900 text-white text-sm font-medium px-3 py-3 mt-14 transition duration-500 h-12" type="submit">
                                <span className="w-full text-center text-white text-base font-semibold" >Continuar</span>
                            </button>
                            <button className="w-full hover:bg-blue-200 hover:text-blue-800 group flex items-center rounded-md bg-blue-100 text-blue-600 text-sm font-medium px-3 py-3 text-center mt-8 transition duration-400 h-12">
                                <span className="w-full text-center text-base font-semibold">Registrate</span>
                            </button>
                        </form>
                    </div>
                </div>
            )
        } else {
            return (
                <div id="bigHeight2" className="bigHeight transition duration-500" >
                    <div className="2xl:w-1/4 w-1/3 mx-auto bg-white p-12 rounded flex flex-col gap-16 box-shadow-container mobile transition duration-500">
                        <div>
                            <h2 className="text-3xl text-center font-semibold">¡Bienvenido!</h2><br></br>
                            <h4 className="text-2xl text-center font-semibold text-green-500">{this.state.login.email}</h4><br></br>
                            <h2 className="text-2xl text-center font-semibold">Ingresá tu contraseña</h2>
                        </div>
                        <form className="flex flex-col transition duration-500" onSubmit={this.processing} >
                            <span className="hidden"></span>
                            <label className="text-left text-xs mb-1 2xl:text-sm" id="EmailId">Contraseña</label>
                            <input name="pass" className="focus:border-blue-200 focus:ring-1 focus:ring-blue-200 focus:outline-none w-full text-base text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-4" type="password" placeholder="" ref={this.passwordRef} />
                            <button className="w-full hover:bg-blue-800 group flex items-center rounded-md bg-blue-900 text-white transition duration-500 text-sm font-medium px-3 py-3 mt-14 transition duration-500 h-12" type="submit" id="btnIngresar">
                                <span className="w-full text-center text-white text-base font-semibold text-sm transition duration-500" id="cargando">{this.state.cargando ? <Loading/> : "Ingresar"}</span>
                            </button>
                            <button className="w-full hover:bg-blue-200 hover:text-blue-800 group flex items-center rounded-md bg-blue-100 text-blue-600 text-sm font-medium px-3 py-3 text-center mt-8 transition duration-500 h-12" id="btnOlvidePass">
                                <span className="w-full text-center text-base font-semibold">Olvidé mi contraseña</span>
                            </button>
                        </form>
                    </div>
                </div>
                
            )
        }

    }
}

export default Login;

/*
<div id="bigHeight" className="bigHeight">
                <div className="2xl:w-1/4 w-1/3 mx-auto bg-white p-12 rounded flex flex-col gap-16 box-shadow-container mobile">
                    {!this.state.login.email ? (
                        <div>
                            <div>
                                <h2 className="text-3xl text-center font-semibold">¡Hola!</h2><br></br>
                                {
                                    this.state.login.email ?
                                    <h4 className="text-2xl text-center font-semibold text-green-500">{this.state.login.email}</h4> : <h2 className="text-2xl text-center font-semibold">Ingresá tu Email o ID</h2>
                                }

                            </div>
                            <form className="flex flex-col" onSubmit={this.goNext}>
                                <label className="text-left text-xs mb-1 2xl:text-sm" id="EmailId">Email o ID de Cliente</label>
                                <input className="focus:border-blue-200 focus:ring-1 focus:ring-blue-200 focus:outline-none w-full text-base text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-4" type="text" placeholder="" ref={this.emailRef}/>
                                <button className="w-full hover:bg-blue-800 group flex items-center rounded-md bg-blue-900 text-white text-sm font-medium px-3 py-3 mt-14 transition duration-500" type="submit">
                                <span className="w-full text-center text-white text-base font-semibold" >Continuar</span>
                                </button>
                                <button className="w-full hover:bg-blue-200 hover:text-blue-800 group flex items-center rounded-md bg-blue-100 text-blue-600 text-sm font-medium px-3 py-3 text-center mt-8 transition duration-400">
                                    <span className="w-full text-center text-base font-semibold">Registrate</span>
                                </button>
                            </form>
                        </div>
                    ): (
                        <div>
                            <div>
                                <h2 className="text-3xl text-center font-semibold">¡Hola!</h2><br></br>
                                {
                                    this.state.login.email ?
                                    <h4 className="text-2xl text-center font-semibold text-green-500">{this.state.login.email}</h4> : <h2 className="text-2xl text-center font-semibold">Ingresá tu Email o ID</h2>
                                }

                            </div>
                            <form className="flex flex-col" onSubmit={this.goNext}>
                                <label className="text-left text-xs mb-1 2xl:text-sm" id="EmailId">Email o ID de Cliente</label>
                                <input className="focus:border-blue-200 focus:ring-1 focus:ring-blue-200 focus:outline-none w-full text-base text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-4" type="text" placeholder="" ref={this.emailRef}/>
                                <button className="w-full hover:bg-blue-800 group flex items-center rounded-md bg-blue-900 text-white text-sm font-medium px-3 py-3 mt-14 transition duration-500" type="submit">
                                <span className="w-full text-center text-white text-base font-semibold" >Continuar</span>
                                </button>
                                <button className="w-full hover:bg-blue-200 hover:text-blue-800 group flex items-center rounded-md bg-blue-100 text-blue-600 text-sm font-medium px-3 py-3 text-center mt-8 transition duration-400">
                                    <span className="w-full text-center text-base font-semibold">Registrate</span>
                                </button>
                            </form>
                        </div>
                    )}

                </div>
            </div>
*/