import React from 'react'
import css from './css/NavBarSimple.module.css'

class NavBarSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            h1: "My Gallery",
            message: "Hello, guest!",
            buttonText: "Log in",
        }
    } 
    
    handleClick(){
        this.setState((prevState, prevProps) =>{
            console.log("Previous state:", prevState)
            console.log("Previous Props:", prevProps)
            return {
                message: prevState.message === "Hello, guest!" ? "Welcome Back, user!" : "Hello, guest!",
                buttonText: prevState.buttonText === "log in" ? "log out" : "log in",
            }
        })
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>{this.state.h1}</h1>
                <span>{this.state.message}</span>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        );
    }
}

export default NavBarSimple;