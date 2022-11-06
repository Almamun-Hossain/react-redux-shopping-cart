import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Coponents/Footer/Footer";
import TopNavbar from "../Coponents/Header/TopNavbar";

function PageNotFound() {
  return (
    <Fragment>
      <TopNavbar />
      <Container>
        <div className="m-auto w-100 text-center my-5">
          <h1 className="text-danger">Page Not Found</h1>
          <Link to="/" className="text-dark text-decoration-none fs-5">
            Go back to Home Page
          </Link>
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default PageNotFound;
