import React, { useContext } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  CustomInput,
  FormGroup,
  Row,
  Col,
  UncontrolledTooltip,
  Button,
} from "reactstrap";

import img1 from "../../assets/images/logo-icon.jpg";
import img2 from "../../assets/images/background/background1.jpg";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../Context/Auth.Context";
// import { AuthenticationService } from "../../jwt/_services";
const sidebarBackground = {
  backgroundImage: "url(" + img2 + ")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom center",
};

const Login = (props) => {

  const Context = useContext(AuthContext)
  const handleClick = () => {
    var elem = document.getElementById("loginform");
    elem.style.transition = "all 2s ease-in-out";
    elem.style.display = "none";
    document.getElementById("recoverform").style.display = "block";
  };


  return (
    <div className="">
      {/*--------------------------------------------------------------------------------*/}
      {/*Login Cards*/}
      {/*--------------------------------------------------------------------------------*/}
      <div
        className="auth-wrapper d-flex no-block justify-content-center align-items-center"
        style={sidebarBackground}
      >
        <div className="auth-box on-sidebar">
          <div id="loginform">
            <div className="logo">
              <span className="db">
                <img src={img1} alt="logo" height="180" />
              </span>
              <h5 className="font-medium mb-3">Iniciar sesión</h5>
              <div className="alert alert-success">
                Username: test & Password: test
              </div>
            </div>
            <Row>
              <Col xs="12">
                <Formik
                  initialValues={{
                    username: "test",
                    password: "test",
                  }}
                  validationSchema={Yup.object().shape({
                    username: Yup.string().required("Se requiere nombre de usuario."),
                    password: Yup.string().required("Se requiere contraseña."),
                  })}
                  onSubmit={(
                    // { username, password },
                    // { setStatus, setSubmitting }
                  ) => {

                    Context.changeState({
                      token: "asd123",
                      role: "administrador",
                      name: "Pepe ",
                    })
                    // setStatus();
                    // history.push("/home");
                    // return <Redirect push to="/dashboard"/>
                    // AuthenticationService.login(username, password).then(
                    //   (user) => {
                    //     const { from } = props.location.state || {
                    //       from: { pathname: "/" },
                    //     };
                    //     props.history.push(from);
                    //   },
                    //   (error) => {
                    //     setSubmitting(false);
                    //     setStatus(error);
                    //   }
                    // );
                  }}
                  render={({ errors, status, touched, isSubmitting = true }) => (
                    <Form className="mt-3" id="loginform">

                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ti-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>

                        <Field
                          name="username"
                          type="text"
                          className={
                            "form-control" +
                            (errors.username && touched.username
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="invalid-feedback"
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ti-pencil"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Field
                          name="password"
                          type="password"
                          className={
                            "form-control" +
                            (errors.password && touched.password
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </InputGroup>
                      <div className="d-flex no-block align-items-center mb-3">
                        <CustomInput
                          type="checkbox"
                          id="exampleCustomCheckbox"
                          label="Recuérdame"
                        />
                        <div className="ml-auto">
                          <a
                            href="#recoverform"
                            id="to-recover"
                            onClick={handleClick.bind(null)}
                            className="forgot text-dark float-right"
                          >
                            <i className="fa fa-lock mr-1"></i> ¿Olvidaste tu Contraseña?
                          </a>
                        </div>
                      </div>
                      <Row className="mb-3">
                        <Col xs="12">
                          <button
                            type="submit"
                            className="btn btn-block btn-primary"
                            disabled={isSubmitting}
                          // onClick={()=>Context.login()}
                          >
                            Iniciar Sesión
                          </button>
                        </Col>
                      </Row>
                      <div className="text-center mb-2">

                      </div>
                      {status && (
                        <div className={"alert alert-danger"}>{status}</div>
                      )}
                    </Form>
                  )}
                />
              </Col>
            </Row>
          </div>
          <div id="recoverform">
            <div className="logo">
              <span className="db">
                <img src={img1} alt="logo" />
              </span>
              <h5 className="font-medium mb-3">Recuperar contraseña</h5>
              <span>
                Ingrese su nombre de usuario electrónico y se le enviarán las instrucciones.
              </span>
            </div>
            <Row className="mt-3">
              <Col xs="12">
                <form action="/dashbaord">
                  <FormGroup>
                    <Input
                      type="text"
                      name="uname"
                      bsSize="lg"
                      id="Name"
                      placeholder="Username"
                      required
                    />
                  </FormGroup>
                  <Row className="mt-3">
                    <Col xs="12">
                      <Button color="danger" size="lg" type="submit" block>
                        Restablecer
                      </Button>
                    </Col>
                  </Row>
                </form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
