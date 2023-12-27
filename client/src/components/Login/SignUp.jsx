import React from "react";
// import "./signup.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import { signupuser } from "../../service/api";

const SignUp = () => {
  const navigate = useNavigate();

  const [credentials, setcredentials] = useState({
    name: "",
    password: "",
    confirmpassword: "",
  });

  const handleAuth = async (e) => {
    e.preventDefault();
    // console.log("The signup is Cicked "); // check----
    // let user = document.getElementById("user").value;
    // let pass = document.getElementById("pass").value;
    // let pass2 = document.getElementById("pass2").value;

    // if (user === "" && pass === "" && pass2 === "") {
    //   alert("Any Field Is Empty ");
    // } else if (pass !== pass2) {
    //   alert("password do not match");
    // } else {
    //   localStorage.setItem("usernameS", user);
    //   localStorage.setItem("passwordP", pass);
    //   navigate("/");
    //   console.log("Navigation to login working--")
    // }

    if (
      credentials.name === "" ||
      credentials.password === "" ||
      credentials.confirmpassword === ""
    ) {
      console.log("Something is empty...");
      let text1;
      text1 = "Fieds are Empty: Please fill the Fields !";
      document.getElementById("demo").innerHTML = text1;
      return;
    }

    if (credentials.password !== credentials.confirmpassword) {
      // alert("Password not matches");
      let text2;
      text2 = "Password Do Not Match: Please check your Passwords";
      document.getElementById("demo").innerHTML= text2;
      return;
    }

    try {
      const response = await signupuser(credentials);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="page">
      <div className="coverSignup">
        {/* <div className="wrapper"> */}
        <form onSubmit={handleAuth} method="POST">
          <h1> Signup </h1>
          <input
            type="text"
            id="user"
            placeholder="username"
            name="name"
            onChange={onChange}
          />
          <input
            type="password"
            id="pass"
            placeholder="password"
            name="password"
            onChange={onChange}
          />
          <input
            type="password"
            id="pass2"
            placeholder="confirm password"
            name="confirmpassword"
            onChange={onChange}
          />

          <p className="pp" id="demo"></p>

          <button type="submit" className="signup-btn">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
