import React from 'react'

function Form(props) {
  return (
    <div>
        {props.isLoggedIn ? (
        <div>
            <form>
                <label> Username:<input type="text" name="username" /></label>
                <label> Password:<input type="password" name="password" /></label>
                <br />
                <button onClick={()=> this.LogOutHandler()}>Submit</button>
            </form>
        </div>
        ) : (
        <div>
            <button onClick={() => this.logInHandler()}>Log In</button>
        </div>
        )}
        
    </div>
  )
}

export default Form