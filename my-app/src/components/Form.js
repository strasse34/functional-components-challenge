import React from 'react'

function Form(props) {
  return (
    <div>
        {props.isLoggedIn ? (<h1>Please Log in!</h1>) : (
                                <div>
                                    <form>
                                        <label> Username:<input type="text" name="username" /></label>
                                        <label> Password:<input type="password" name="password" /></label>
                                        <br />
                                        <button>Submit</button>
                                    </form>
                                </div>
                            )}
        
    </div>
  )
}

export default Form