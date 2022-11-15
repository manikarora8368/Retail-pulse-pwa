import React, { useContext, useState } from "react";
import "./Login.scss";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { LoginContext } from "../../App/App";
import { Users } from "../../utils/data";
import { useHistory } from "react-router-dom";
const Login = (props) => {
  const { setLoggedIn } = useContext(LoginContext);
  const [username, setUsername] = useState({ value: "", error: null });
  const [password, setPassword] = useState({ value: "", error: null });
  const history = useHistory();
  const handleLogin = () => {
    let user = Users.find((user) => {
      return user.username === username.value;
    });
    if (user) {
      if (user.password === password.value) {
        setLoggedIn(true);
        history.replace("/");
      } else {
        setPassword({
          value: password.value,
          error: "Password entered in not correct",
        });
      }
    } else {
      setUsername({
        value: username.value,
        error: "Entered username is not valid",
      });
    }
  };
  return (
    <div className="login__page">
      <div className="app__logo">
        <img src={require("../../assets/retail-pulse-logo.png")} alt="" />
      </div>
      <div className="login__box">
        <div className="login__heading">Login</div>
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              id="standard-error"
              className="login__input"
              InputLabelProps={{ style: { fontSize: "1.5rem" } }}
              inputProps={{ style: { fontSize: "1.5rem" } }}
              value={username.value}
              placeholder="user1"
              label="Username"
              variant="standard"
              required
              {...(username.error
                ? { error: true, helperText: username.error }
                : { error: false, helperText: "" })}
              FormHelperTextProps={{ style: { fontSize: "1rem" } }}
              type="text"
              onChange={(e) => {
                setUsername({
                  value: e.target.value,
                  error: null,
                });
              }}
            />
            <div className="login__passWrapper">
              <TextField
                id="standard-error-helper-text"
                label="Password"
                className="login__input"
                value={password.value}
                variant="standard"
                placeholder="password"
                {...(password.error ? { error: true } : { error: false })}
                InputLabelProps={{ style: { fontSize: "1.5rem" } }}
                inputProps={{ style: { fontSize: "1.5rem" } }}
                required
                type={"password"}
                onChange={(e) => {
                  setPassword({ value: e.target.value, error: null });
                }}
              />
              {password.error && (
                <div className="login__error">{password.error}</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Button
        variant="contained"
        className="login__btn"
        onClick={handleLogin}
        {...(username.value &&
        password.value &&
        !username.error &&
        !password.error
          ? { disabled: false }
          : { disabled: true })}
      >
        Log In
      </Button>
    </div>
  );
};

export default Login;
