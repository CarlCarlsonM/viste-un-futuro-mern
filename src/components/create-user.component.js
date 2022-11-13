import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserFirstName = this.onChangeUserFirstName.bind(this);
    this.onChangeUserLastName = this.onChangeUserLastName.bind(this);
    this.onChangeUserEMail = this.onChangeUserEMail.bind(this);
    this.onChangeUserPhoneNumber = this.onChangeUserPhoneNumber.bind(this);
    this.onChangeUserAddress = this.onChangeUserAddress.bind(this);
    this.onChangeUserCity = this.onChangeUserCity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      address: "",
      city: "",
    };
  }
  
  onChangeUserFirstName(event) {
    this.setState({ firstname: event.target.value });
  }

  onChangeUserLastName(event) {
    this.setState({ lastname: event.target.value });
  }

  onChangeUserEMail(event) {
    this.setState({ email: event.target.value });
  }

  onChangeUserPhoneNumber(event) {
    this.setState({ phonenumber: event.target.value });
  }

  onChangeUserAddress(event) {
    this.setState({ address: event.target.value });
  }

  onChangeUserCity(event) {
    this.setState({ city: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const userObject = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phonenumber: this.state.phonenumber,
      address: this.state.address,
      city: this.state.city,
    };

    axios
      .post("http://localhost:4000/users/create-user", userObject)
      .then((res) => console.log(res.data));
    
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      address: "",
      city: "",
    });
  }
  
  render() {
    return (
      <div class="form-wrapper">
        <h1 class="section-title">Crear un Usuario</h1>
        <Form onSubmit={this.onSubmit}>
          <div class="fieldset">
            <Form.Group controlId="first-name">
              <Form.Label>Nombres</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tus nombres"
                value={this.state.firstname}
                onChange={this.onChangeUserFirstName}
              />
            </Form.Group>

            <Form.Group controlId="last-name">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tus apellidos"
                value={this.state.lastname}
                onChange={this.onChangeUserLastName}
              />
            </Form.Group>

            <Form.Group controlId="e-mail">
              <Form.Label>E-Mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu e-mail"
                value={this.state.email}
                onChange={this.onChangeUserEMail}
              />
            </Form.Group>

            <Form.Group controlId="phone-number">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="number"
                min="2000000000"
                max="9999999999"
                placeholder="Ingresa tu número telefónico"
                value={this.state.phonenumber}
                onChange={this.onChangeUserPhoneNumber}
              />
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu dirección"
                value={this.state.address}
                onChange={this.onChangeUserAddress}
              />
            </Form.Group>

            <Form.Group controlId="city">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu ciudad"
                value={this.state.city}
                onChange={this.onChangeUserCity}
              />
            </Form.Group>
          </div>

          <br />

          <Button className="create-button" variant="danger" size="lg" block="block" type="submit">
            Crear Usuario
          </Button>
        </Form>
      </div>
      );
  }
}

