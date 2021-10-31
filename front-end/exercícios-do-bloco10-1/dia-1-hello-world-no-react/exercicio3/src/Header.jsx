import React, { Component } from "react";

class Header extends Component {
  render() {

    const header = <h1>Conteúdos de Front-End</h1>

    return (
      <h1 className='header'>{header}</h1>

    )
  }
}

export default Header;