import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "./../../Context/Modal.Context";
import Login from "./login";
export default function NoAuth() {
  const Context = useContext(ModalContext);
  const { setMode } = Context;
  return (
    <>
      <Login/>
      <Link to="/will-match">Will Match</Link>
    </>
  );
}