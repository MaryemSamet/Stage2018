import React from 'react';
import axios from 'axios';
var dateFormat = require('dateformat');
var nowDate = new Date();
const URL = `http://localhost:51492/api/experience`;

export default class PersonList extends React.Component {
  state = {
    titre: '',
    contenu: ''
  }

  handleChangeTitre = event => {
    this.setState({ titre: event.target.value,  contenu: event.target.value});
  }

  handleChangeContenu = event => {
    this.setState({  contenu: event.target.value});
  }
  handleSubmit = event => {
    event.preventDefault();

    const exp = {
      titre: this.state.titre,
      contenu: this.state.contenu,
      datePub:  nowDate ,
      IdUser: 1
    };

    return axios(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: exp,
    })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            titre:
            <input type="text" name="titre" onChange={this.handleChangeTitre} />
          </label>
          <label>
            contenu:
            <input type="text" name="contenu" onChange={this.handleChangeContenu} />
          </label>

          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}