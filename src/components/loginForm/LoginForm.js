import { useState } from "react";
import { useHistory } from "react-router";
import "./LoginForm.css";
import Logo from "../../assets/logo.svg";
import Button from "../../components/button/Button";

const LoginForm = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const history = useHistory();

  const body = {
    email: email,
    password: password
  }

  const handleLogin = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };


    fetch("http://localhost:5000/login", options)
      .then(response => response.json())
      .then(json => {
        /* .then(json => console.log('token', json)); */
        localStorage.setItem('token', json.token)
        localStorage.setItem('user', JSON.stringify(json.user))
        history.replace('/user')
        window.location.reload(false);
      }
      )
      .catch(error => {
        setError(true);
      })
  };

  console.log(JSON.stringify(body))

  return (
    <div className="loginform__container">
      <img className="loginform__logo" src={Logo} alt="logo"/>
      <form>
        <label>
          Email
          <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <Button name={"Log in"} onClick={handleLogin} />
      </form>
      <div className="create_account__cointainer">
        <h3>Don't have an account yet?</h3>
        <Button name={"Create account"} onClick={() => history.push("/signup")} />
      </div>
    </div>
  )
}

export default LoginForm;