import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import Contacto from './Contacto';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,

} from 'react-router-dom';


export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'Inicio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Router>
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            
            name='Inicio'
            active={activeItem === 'Inicio'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Formulario'
            active={activeItem === 'Formulario'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            Link to ="/Contacto"
            name='Contacto'
            active={activeItem === 'Contacto'}
            onClick={this.handleItemClick}
            
            
           
          />
        </Menu>
        
      </Segment>
      </Router>
    )
  }
}
