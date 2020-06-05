import React from "react";
import { Button, Row, Col, PageHeader } from "antd";
import signinImage from "../../assets/images/signin-image.svg";
import signupImage from "../../assets/images/signup-image.svg";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import BrandName from "../brandName";
import Login from "./Login";
import SignUp from "./SignUp";
import { UserIsNotAuthenticated } from "../../auth";

const AuthPage = ({ type }) => {
  return (
    <>
      <Row>
        <Col xs={24}>
          <PageHeader
            className="site-page-header"
            title={
              <h3 style={{ color: "#3AAFA9" }} className="brand-font">
                <Link to={"/"}>
                  <BrandName />
                </Link>
              </h3>
            }
            backIcon={false}
            extra={[
              <Button key="2" type={type === "login" ? "primary" : "link"}>
                <Link to={"/login"}>Log In</Link>
              </Button>,
              <Button key="1" type={type === "signup" ? "primary" : "link"}>
                <Link to={"/signup"}>Sign Up</Link>
              </Button>
            ]}
          />
        </Col>
      </Row>

      <Row
        align="middle"
        style={{ height: "calc(100vh - 87px)" }}
        justify="center"
      >
        <Col
          xs={0}
          sm={0}
          md={12}
          lg={14}
          order={type === "login" ? 1 : 2}
          className="auth-image-col"
        >
          <Fade left opposite when={true}>
            <img
              src={type === "login" ? signinImage : signupImage}
              alt="Background for auth"
              width="100%"
              className={type === "login" ? "signin-image" : "signup-image"}
            />
          </Fade>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={10}
          lg={8}
          order={type === "login" ? 2 : 1}
          className="auth-form-col"
        >
          {type === "login" ? <Login /> : <SignUp />}
        </Col>
      </Row>
    </>
  );
};

export default UserIsNotAuthenticated(AuthPage);
