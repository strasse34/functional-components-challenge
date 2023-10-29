import React, { Component } from 'react'
import css from './css/NavBarForm.module.css'
import FormChild from './FormChild'



export class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }


    clickHandler = () => {
        this.setState(
            (prevState) => ({isLoggedIn: prevState.isLoggedIn === true ? false : true}), 
            ()=> (console.log(this.state.isLoggedIn))
            )
    }


    render() {
        return (
        <div className={css.NavBar}>
            <h1>My Gallery</h1>
            <FormChild 
            isLoggedIn={this.state.isLoggedIn}
            clickHandler={this.clickHandler}
            />
            
        </div>
        )
    }
}

export default NavBarForm