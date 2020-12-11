import React from "react";

function Login(){
    return (
    <div>
        <section>
            <div className="form-container">
                <h1>Sign Up</h1>
                <form action="#">
                    <div className="control">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name"/>
                    </div>
                    <div class="control">
                        <label For="psw">Password</label>
                        <input type="password" name="psw" id="psw"/>
                    </div>
                    <span><input type="checkbox" />Remember Password</span>
                    <div class="control">
                        <input type="submit" value="Login"/>
                    </div>
                </form>
                <div id="link">
                    <a href="#">Forgot password</a>
                </div>
            </div>
        </section>
    </div>)
}

export default Login;