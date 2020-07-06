import React from 'react';

const button = () => {
  return {
    display: "flex",
    width: " 400px",
    height: " 50px",
    background: "#377CFF",
    boxSizing: " border-box",
    borderRadius: " 6px",
    marginTop: " 25px",
    marginBottom: "32px",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    fontWeight: "500",
    color: "#fff",
    fontFamily: "Carbin, sans-serif",
    fontStyle: " normal",
    border: " none",
    outline: "none",
    cursor: " pointer"
  };
}

const Button = (props) => {
  return (
    <>
      <button style={ button() }>
        { props.logIn }
        { props.signUp }
        { props.wish }
      </button>
    </>
  );
}

export default Button