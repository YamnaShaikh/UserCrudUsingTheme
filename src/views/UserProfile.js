import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Badge, Button, Card, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createUser } from "Redux/userAction";
import { updateUser } from "Redux/userAction";

function User() {
  const dispatch = useDispatch();
  const history = useHistory();

  const userList = useSelector((state) => state.userList);
  const users = userList.users;
  const editUser = useSelector((state) => state.userList.editUser);
  console.log("User data", editUser);
  debugger;
  let initialValues = null;

  if (editUser != undefined) {
    debugger;
    initialValues = {
      id: editUser[0].id,
      company: editUser[0].company,
      username: editUser[0].username,
      email: editUser[0].email,
      firstName: editUser[0].firstName,
      lastName: editUser[0].lastName,
      address: editUser[0].address,
      city: editUser[0].city,
      country: editUser[0].country,
      postalCode: editUser[0].postalCode,
      aboutMe: editUser[0].aboutMe,
    };
  } else {
    initialValues = {
      id: Date.now(),
      company: "AppsGenii",
      username: "",
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      country: "",
      postalCode: "",
      aboutMe: "",
    };
  }

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
    postalCode: Yup.number().required("Postal Code is required"),
    aboutMe: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    debugger;
    if (editUser != undefined) {
      dispatch(updateUser(values));
      console.log(values);
      history.push("/admin/userList");
      resetForm();
      
    } else {
      dispatch(createUser(values));
      console.log(values);
      history.push("/admin/userList");
    }
    resetForm();
  };

  return (
    <Container>
      <Row>
        <Col md="8">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Add User</Card.Title>
            </Card.Header>
            <Card.Body>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                enableReinitialize={true}
              >
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <label>Company</label>
                      <Field
                        className="form-control"
                        name="company"
                        type="text"
                        disabled
                      />
                    </Col>
                    <Col className="px-1" md="3">
                      <div className="form-group">
                        <label>Username</label>
                        <Field
                          className="form-control"
                          name="username"
                          type="text"
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="error-message ErrorMsgColor"
                        />
                      </div>
                    </Col>

                    <Col className="pl-1" md="4">
                      <div className="form-group">
                        <label>Email Address</label>
                        <Field
                          className="form-control"
                          name="email"
                          type="email"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="error-message ErrorMsgColor "
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <div className="form-group">
                        <label>First Name</label>
                        <Field
                          className="form-control"
                          name="firstName"
                          type="text"
                        />
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="error-message ErrorMsgColor"
                        />
                      </div>
                    </Col>
                    <Col className="pl-1" md="6">
                      <div className="form-group">
                        <label>Last Name</label>
                        <Field
                          className="form-control"
                          name="lastName"
                          type="text"
                        />
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className="error-message ErrorMsgColor"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <div className="form-group">
                        <label>Address</label>
                        <Field
                          className="form-control"
                          name="address"
                          type="text"
                        />
                        <ErrorMessage
                          name="address"
                          component="div"
                          className="error-message ErrorMsgColor"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <div className="form-group">
                        <label>City</label>
                        <Field
                          className="form-control"
                          name="city"
                          type="text"
                        />
                        <ErrorMessage
                          name="city"
                          component="div"
                          className="error-message ErrorMsgColor"
                        />
                      </div>
                    </Col>
                    <Col className="px-1" md="4">
                      <div className="form-group">
                        <label>Country</label>
                        <Field
                          className="form-control"
                          name="country"
                          type="text"
                        />
                        <ErrorMessage
                          name="country"
                          component="div"
                          className="error-message ErrorMsgColor"
                        />
                      </div>
                    </Col>
                    <Col className="pl-1" md="4">
                      <div className="form-group">
                        <label>Postal Code</label>
                        <Field
                          className="form-control"
                          name="postalCode"
                          type="number"
                        />
                        <ErrorMessage
                          name="postalCode"
                          component="div"
                          className="error-message ErrorMsgColor"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <div className="form-group">
                        <label>About Me</label>
                        <Field
                          className="form-control"
                          name="aboutMe"
                          as="textarea"
                          rows={4}
                        />
                        <ErrorMessage
                          name="aboutMe"
                          component="div"
                          className="error-message ErrorMsgColor"
                        />
                      </div>
                    </Col>
                  </Row>
                  <button type="submit" className="btn btn-info btn-fill">
                    Create User
                  </button>
                </Form>
              </Formik>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card className="card-user">
            <div className="card-image">
              <img
                alt="..."
                src={require("assets/img/default-avatar.png")}
              ></img>
            </div>
            <Card.Body>
              <div className="author">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    className="avatar border-gray"
                    src={require("assets/img/faces/face-0.jpg")}
                  ></img>
                  <h5 className="title">{users.username}</h5>
                </a>
                <p className="description">{users.email}</p>
              </div>
              <p className="description text-center">
                "Lamborghini Mercy <br></br>
                Your chick she so thirsty <br></br>
                I'm in that two seat Lambo"
              </p>
            </Card.Body>
            <hr></hr>
            <div className="button-container mr-auto ml-auto">
              <Button
                className="btn-simple btn-icon"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                variant="link"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <Button
                className="btn-simple btn-icon"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                variant="link"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <Button
                className="btn-simple btn-icon"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                variant="link"
              >
                <i className="fab fa-google-plus-square"></i>
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default User;
