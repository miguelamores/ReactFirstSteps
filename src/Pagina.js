import React, { Component } from 'react';

class Pagina extends Component {
  constructor(props) {
    super(props);
    this.state= {
      opSelected: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  // componentWillMount() {
  //   fetch('https://jsonplaceholder.typicode.com/albums')
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(response => {
  //     console.log(response);
  //     this.setState({opciones: response});
  //   })
  // }

  handleChange(event) {
    console.log(event);
    this.setState({opSelected: event.target.value});
  }


  render() {
    let seleccion;
    if(this.props.isUser){
      seleccion = this.props.opciones.map(res => <option key={res.id} value={res.username}>{res.name}</option>);
    } else {
      seleccion = this.props.opciones.map(res => <option key={res.id} value={res.title}>{res.title}</option>);
    }

    return(
      <div>
        <select value={this.state.opSelected} onChange={this.handleChange}>{seleccion}</select>
        <p>Opcion seleccionada: {this.state.opSelected}</p>
      </div>
    )
  }
}

export default Pagina;
