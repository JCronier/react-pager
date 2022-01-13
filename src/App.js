import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Loggedin from "./components/Loggedin";
import { useContext, useState, useEffect } from "react";
import { UserContext, UserContextProvider } from "./context/UserContext";
function App() {
  const { state } = useContext(UserContext);
  //all logins state
  const [logins, setLogins] = useState([]);

  //current login
  const [currLogin, setCurrLogin] = useState({});

  //login page state
  const [showLogin, setShowLogin] = useState(true);

  //fetch logins
  const fetchLogins = async () => {
    const res = await fetch("http://localhost:5005/logins");
    const data = await res.json();
    return data;
  };

  //check if user is registered
  const verifyUser = (user) => {
    let res = logins.find((login) => login.email === user);
    if (res) {
      setShowLogin(false);
      setCurrLogin(res);
    } else {
      alert("Not a registered user");
    }
  };

  console.log(state.currentUser ? true: false);

  return (
      <div className="container">
        {/* <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul> */}
        <Header title="Netflare" />
        {!state.currentUser ? (
          <Login verifyUser={verifyUser} />
        ) : (
          <Loggedin
            currLogin={currLogin}
            setCurrLogin={setCurrLogin}
            logins={logins}
            setLogins={setLogins}
          />
        )}
      </div>
  );
}

export default App;
