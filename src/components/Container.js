import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";

function Container({ children }) {
  return <MDBContainer className="my-5 mb-5 mx-xl-5 px-xl-5 mx-md-2 px-md-2 mx-auto">{children}</MDBContainer>;
}

export default Container;
