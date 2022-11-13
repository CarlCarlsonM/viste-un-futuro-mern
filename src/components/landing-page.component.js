import React, { Component } from 'react'

export default class LandingPage extends Component {
  render() {
    return (
      <div class="landing-page">
        <h1>¡Bienvenid@ a Viste Un Futuro!</h1>
        <img 
          class="landing-page-image"
          src="/landing-page.png"
          alt="Landing page"
        />
        <p class="copyright">© Carlos Arturo Murcia Andrade - 2022</p>
      </div>
    );
  }
}
