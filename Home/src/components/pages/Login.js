import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardFooter,
  CardLink,
  CardTitle,
  CardSubtitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import "../../App.scss";

function Login() {

    const [password, setPassword] = useState("");
    const [emailId, setEmailId] = useState("");

    return (
<Container>
      <Row>
        <Col sm={{ size: 8, offset: 2 }}>
          <div className="login-layout">
            <Card>
              <CardBody>
                <CardTitle className="text-center">
                  Entrar
                </CardTitle>
                <CardText className="px-5 py-2">
                  <Form>
                    <Row form className="mb-2">
                      <Col md={12}>
                        <FormGroup row>
                          <Label for="emailfield" md={2} size="lg">
                            Email
                          </Label>
                          <Col md={10}>
                            <Input
                              type="email"
                              name="email"
                              id="emailfield"
                              placeholder="Email"
                              bsSize="lg"
                              value={emailId}
                              onChange={(e) => setEmailId(e.target.value)}
                              autoFocus
                            />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    
                    <Row form className="mb-2">
                      <Col md={12}>
                        <FormGroup row>
                          <Label for="passwordfield" md={2} size="lg">
                            Passe
                          </Label>
                          <Col md={10}>
                            <Input
                              type="password"
                              name="password"
                              id="passwordfield"
                              placeholder="Palavra-Passe"
                              bsSize="lg"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form className="mt-4">
                      <Col md={12}>
                        <FormGroup row>
                            <Col md={12}>
                                <Input
                                type="submit"
                                value="Entrar"
                                className="btn btn-submit"/>
                            </Col>
                        </FormGroup>
                    </Col>
                </Row>
                  </Form>
                </CardText>
              </CardBody>
              <CardFooter className="text-muted text-center">
                <p>Não tem uma conta <span><Link to="/sign-up" className="">Cadastre-se</Link></span></p>
              </CardFooter>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
    )
}

export default Login
