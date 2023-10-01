import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import React, { useState, useEffect } from "react";
import useLoading from "../hooks/useLoading";
import Loader from "./Loader";

const Login = () => {
  // const {user,
  //   token,
  //   loginUser,
  //   logoutUser}=useContext(AuthContext);
  // const navigate=useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";
  const { token, loginUser } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    if (token) {
      setLoading(false);
    }
  }, [token]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    const formData = { username: username, password: password };
    console.log(formData);
    loginUser(formData);
  };

  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <>
      {token && <Navigate to={from} />}
      <div style={{ display: "flex", flexDirection: "column", margin: "4em" }}>
        <h1>Login Page</h1>
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <input
            style={{ display: "flex", flexDirection: "column", margin: "4em" }}
            onChange={(e) => handleUsernameChange(e)}
            placeholder="username"
            value={username}
          />

          <input
            style={{ display: "flex", flexDirection: "column", margin: "4em" }}
            onChange={(e) => handlePasswordChange(e)}
            placeholder="password"
            value={password}
          />

          <button
            style={{ display: "flex", flexDirection: "column", margin: "4em" }}
            type="submit"
          >
            Login
          </button> */}
        </form>
      </div>
    </>
  );
};

export default Login;
