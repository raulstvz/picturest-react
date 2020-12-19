import { useState } from "react";
import Button from "../../components/button/Button";

const LoginForm = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

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
          .then(json => localStorage.setItem('token', json.token));
      };

    return(
        <>
        <form>
            <label>
                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <Button name={"Login"} onClick={handleLogin} />
        </form>
        </>
    )
}

export default LoginForm;