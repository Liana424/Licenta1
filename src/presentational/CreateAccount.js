import React from "react"
import {Button} from "bootstrap";
import  './CreateAccount.css';

const CreateAccount = ({ firstName, lastName, address, email, username, password, onCreate, onChange}) => (
    <div className={"text-center"} style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <form className={"form-signup"}>

        <h2>Create Account</h2>
            <br/>
        <div className={"form-floating"}>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                  crossOrigin="anonymous"/>
                  <div>
                      <label>First Name: </label>
                      <input className={"form-control"}  value={firstName}
                             onChange={ e => onChange("firstName", e.target.value)}/>
                  </div>

            <div>
                <label>Last Name: </label>
                <input className={"form-control"} value={lastName}
                       onChange={ e => onChange("lastName", e.target.value)}/>
            </div>

            <div>
                <label>Address: </label>
                <input className={"form-control"} value={address}
                       onChange={ e => onChange("address", e.target.value)}/>
            </div>

            <div>
                <label>Email: </label>
                <input className={"form-control"} value={email}
                       onChange={ e => onChange("email", e.target.value)}/>
            </div>

            <div>
                <label>Username: </label>
                <input className={"form-control"} value={username}
                       onChange={ e => onChange("username", e.target.value)}/>
            </div>

            <div>
                <label>Password: </label>
                <input className={"form-control"} value={password}
                       onChange={ e => onChange("password", e.target.value)}/>
            </div>

            <br/>
            <button onClick={onCreate} className={"btn btn-primary"}>Create account</button>

        </div>
        </form>
        </div>

);

export default CreateAccount;