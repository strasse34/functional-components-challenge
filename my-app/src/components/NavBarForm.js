import React, { Component } from 'react'
import css from './css/NavBarForm.module.css'
import Form from './Form'


export class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

    logInHander(){
        this.setState((prevState, prevProps) => {
            console.log("prev state:", prevState.isLoggedIn)
            console.log("prev props:",prevProps.isLoggedIn)
            return {
                isLoggedIn: prevState.isLoggedIn === true && false
            }
            
        })
    }

    logOutHandler(){
        this.setState((prevState, prevProps) => {
            console.log("prev state:",prevState.isLoggedIn)
            console.log("prev props:",prevProps.isLoggedIn)
            return {
                isLoggedIn: prevState.isLoggedIn === false && true
            }
            
        })
    }

    render() {
        return (
        <div className={css.NavBar}>
            <h1>My Gallery</h1>
            <Form isLoggedIn={this.state.isLoggedIn} />
        </div>
        )
    }
}

export default NavBarForm