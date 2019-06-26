import React,{Component} from "react";
import './login.css';
import { GoogleLoginButton } from "react-social-login-buttons";


class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <section>
      <h1 className="logo"> General Manager</h1>
      <div className="login-wrap">
        <div className="login-html">
          <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Authentication</label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab"></label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="label">Username</label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input id="pass" type="password" className="input" data-type="password" />
              </div>
              <div className="group">
                <input id="check" type="checkbox" className="check" defaultChecked />
                <label htmlFor="check"><span className="icon" /> Keep me Signed in</label>
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign in" />
              </div>
              <div className="hr" />
              <div className="foot-lnk">
                Or continue with<br />
                <GoogleLoginButton className='gmail-button' onClick={() => alert("Hello")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     );
  }
}
 


export default FormPage;