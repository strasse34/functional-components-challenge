import React from 'react'

function FormChild(props) {
  return (
    props.isLoggedIn ? (
        <div>
            <button onClick={props.clickHandler}>Log In</button>
        </div>
    ) : (
        <div>
            <form>
                <label>Username:<input/></label>
                <label>Password:<input/></label>
                <button onClick={props.clickHandler}>Submit</button>
            </form>
        </div>
    )
    
  )
}

export default FormChild