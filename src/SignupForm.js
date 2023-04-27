import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const SignupForm = () => {
  const [path, setPath] = useState("");
  const [detail, setDetail] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setDetail((val) => {
      return { ...val, [name]: value };
    });
  };
  const signBtn = () => {
    if (detail.password !== detail.confirmPassword) {
      alert("Password mismatch");
    } else {
      setPath("/signIn");
    }
  };
  useEffect(() => {
    localStorage.setItem("detail", JSON.stringify(detail));
  }, [detail]);
  return (
    <>
      <div className="form">
        <h1>
          Sign up mohit {detail.password} {detail.confirmPassword}
        </h1>
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            type="text"
            placeholder="Write your name"
            name="name"
            value={detail.name}
            onChange={onChange}
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Write your email id"
            value={detail.email}
            name="email"
            onChange={onChange}
          />
          <br />
          <br />
          <input
            type="number"
            placeholder="Write your mobile"
            value={detail.mobile}
            name="mobile"
            onChange={onChange}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Write your password"
            value={detail.password}
            name="password"
            onChange={onChange}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Confirm your password"
            value={detail.confirmPassword}
            name="confirmPassword"
            onChange={onChange}
          />
          <br />
          <br />
          <NavLink to={path}>
            <button onClick={signBtn}> Sign up </button>
          </NavLink>
        </form>
      </div>
      {/* {localStorage.setItem(detail)} */}
    </>
  );
};

export default SignupForm;
