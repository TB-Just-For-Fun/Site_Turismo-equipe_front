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
function SignUp() {
  // states for form field values.
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [emailId, setEmailId] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [datanasc, setDataNasc] = useState("");
  return (
    <Container>
      <Row>
        <Col sm={{ size: 8, offset: 2 }}>
          <div className="signup-layout">
            <Card>
              <CardBody>
                <CardTitle className="text-center">
                  Cadastre-se
                </CardTitle>
                <CardText className="px-5 py-2">
                  <Form>
                  <Row form className="mb-2">
                      <Col md={9}>
                        <FormGroup row>
                          <Label for="namefield" md={2} size="lg">
                            Nome
                          </Label>
                          <Col md={10}>
                            <Input
                              type="text"
                              name="name"
                              id="namefield"
                              placeholder="Nome"
                              bsSize="lg"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              autoFocus
                            />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form className="mb-2">
                      <Col md={9}>
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
                            />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form className="mb-2">
                      <Col md={9}>
                        <FormGroup row>
                          <Label for="phonenofield" md={2} size="lg">
                            Nº
                          </Label>
                          <Col md={10}>
                            <Input
                              type="text"
                              name="phoneno"
                              id="phonenofield"
                              placeholder="Coloque o número de telefone"
                              bsSize="lg"
                              value={phoneNo}
                              onChange={(e) => setPhoneNo(e.target.value)}
                            />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>



                    <Row form className="mb-2">
                      <Col md={9}>
                        <FormGroup row>
                          <Label for="datanascimento" md={2} size="lg">
                            Data
                          </Label>
                          <Col md={10}>
                            <Input
                              type="date"
                              name="datanascimento"
                              id="datanascimento"
                              placeholder="Data"
                              bsSize="lg"
                              value={datanasc}
                              onChange={(e) => setDataNasc(e.target.value)}
                            />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>






                    <Row form className="mb-2">
                      <Col md={9}>
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
                                value="Cadastrar"
                                className="btn btn-submit"/>
                            </Col>
                        </FormGroup>
                    </Col>
                </Row>
                  </Form>
                </CardText>
              </CardBody>
              <CardFooter className="text-muted text-center">
                <p>Já tenho uma conta! <span><Link to="/login" className="">Entrar</Link></span></p>
              </CardFooter>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
