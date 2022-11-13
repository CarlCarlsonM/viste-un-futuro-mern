import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CreateClassifiedAd extends Component {
  constructor(props) {
    super(props);

    this.onChangeClassifiedAdTitle = this.onChangeClassifiedAdTitle.bind(this);
    this.onChangeClassifiedAdDescription = this.onChangeClassifiedAdDescription.bind(this);
    this.onChangeClassifiedAdGenre = this.onChangeClassifiedAdGenre.bind(this);
    this.onChangeClassifiedAdType = this.onChangeClassifiedAdType.bind(this);
    this.onChangeClassifiedAdSize = this.onChangClassifiedAdSize.bind(this);
    this.onChangeClassifiedAdState = this.onChangeClassifiedState.bind(this);
    this.onChangeClassifiedAdQuantity = this.onChangeClassifiedQuantity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      description: "",
      genre: "",
      type: "",
      size: "",
      state: "",
      quantity: "",
    };
  }
  
  onChangeClassifiedAdTitle(event) {
    this.setState({ title: event.target.value });
  }

  onChangeClassifiedAdDescription(event) {
    this.setState({ description: event.target.value });
  }

  onChangeClassifiedAdGenre(event) {
    this.setState({ genre: event.target.value });
  }

  onChangeClassifiedAdType(event) {
    this.setState({ type: event.target.value });
  }

  onChangClassifiedAdSize(event) {
    this.setState({ size: event.target.value });
  }

  onChangeClassifiedState(event) {
    this.setState({ state: event.target.value });
  }

  onChangeClassifiedQuantity(event) {
    this.setState({ quantity: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const classifiedAdObject = {
      title: this.state.title,
      description: this.state.description,
      genre: this.state.genre,
      type: this.state.type,
      size: this.state.size,
      state: this.state.state,
      quantity: this.state.quantity,
    };

    axios
      .post("http://localhost:4000/classified-ads/create-classified-ad", classifiedAdObject)
      .then((res) => console.log(res.data));
    
    this.setState({
      title: "",
      description: "",
      genre: "",
      type: "",
      size: "",
      state: "",
      quantity: "",
    });
  }
  
  render() {
    return (
      <div class="form-wrapper">
        <h1 class="section-title">Crear un Clasificado</h1>
        <Form onSubmit={this.onSubmit}>
          <div class="fieldset">
            <Form.Group controlId="title">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el título de tu clasificado"
                value={this.state.title}
                onChange={this.onChangeClassifiedAdTitle}
              />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa la descripción de tu clasificado"
                value={this.state.description}
                onChange={this.onChangeClassifiedAdDescription}
              />
            </Form.Group>

            <Form.Group controlId="genre">
              <Form.Label>Género</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escribe el género (masculino o femenino)"
                value={this.state.genre}
                onChange={this.onChangeClassifiedAdGenre}
              />
            </Form.Group>

            <Form.Group controlId="type">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Especifica si es un pantalón, una falda, una camisa..."
                value={this.state.type}
                onChange={this.onChangeClassifiedAdType}
              />
            </Form.Group>

            <Form.Group controlId="size">
              <Form.Label>Tamaño</Form.Label>
              <Form.Control
                type="text"
                placeholder="Especifica el tamaño de la prenda"
                value={this.state.size}
                onChange={this.onChangeClassifiedAdSize}
              />
            </Form.Group>

            <Form.Group controlId="state">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                placeholder="Especifica el estado de la prenda (excelente, bueno, etc)"
                value={this.state.state}
                onChange={this.onChangeClassifiedAdState}
              />
            </Form.Group>

            <Form.Group controlId="quantity">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control
                type="number"
                placeholder="Especifica cuántas prendas donarás"
                value={this.state.quantity}
                onChange={this.onChangeClassifiedAdQuantity}
              />
            </Form.Group>
          </div>

          <br />

          <Button className="create-button" variant="danger" size="lg" block="block" type="submit">
            Crear Clasificado
          </Button>
        </Form>
      </div>
      );
  }
}
