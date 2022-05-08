import React, { useCallback, useState } from "react";
import styles from "./DeviceControlAuth.module.scss";
import plant from "../../../images/plant.gif";
const USERNAME = "chanto";
const PASSWORD = "manto";

const DeviceControlAuth = ({ onAuthenticate }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = useCallback((event) => {
    setUsername(event.target.value);
  }, []);

  const onPasswordChange = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  const onAuthClick = useCallback(() => {
    if (username === USERNAME && password === PASSWORD) {
      onAuthenticate();
    } else {
      alert("username or password incorrect");
    }
  }, [username, password, onAuthenticate]);

  return (
    <div className={styles.authPage}>
      <div className={styles.authcontainer}>
        <h1>Please Log In</h1>
        <h2>Enter Username : </h2>
        <input type="text" onChange={onUsernameChange} />
        <h2>Enter Password : </h2>
        <input type="password" onChange={onPasswordChange} />
        <button onClick={onAuthClick}>Log In</button>
      </div>
      <img src={plant} className={styles.plant} alt="plant"></img>
    </div>
  );
};

export default DeviceControlAuth;
