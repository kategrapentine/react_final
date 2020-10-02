import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Banner from './components/banner';
import Library from './components/library';
import Home from './components/home';
import Spellbook from './components/spellbook';


export default class App extends React.Component {
state = {
  spells: [],
  spellbook: [],
  spell: "" 
}

componentDidMount() {
  this.fetchSpells();
}


fetchSpells = async () => {
  fetch('https://www.dnd5eapi.co/api/spells')
    .then(res => res.json())
    .then(data => {
      data.results.map((spell) => {
        fetch(`https://www.dnd5eapi.co/api/spells/${spell.index}`)
          .then(res => res.json())
          .then(data => {
            this.setState({
              spells: [...this.state.spells, data]
            });
          })
      }) 
    })
}

addSpell = (object) => {
  let newObject = {...object, prepared: true};
  this.setState({
    spellbook: [...this.state.spellbook, newObject]
  });
  alert(`${object.name} has been added too your spellbook!`);
}

removeSpell = (index, spell) => {
  let spellbookCopy = [...this.state.spellbook];
  let answer = window.confirm(`Are you sure you want to removed ${spell.name} from your spellbook?`)
  if (answer === true) {
    
    spellbookCopy.splice(index,1);
    this.setState({
      spellbook: spellbookCopy
    });
    alert(`${spell.name} has been removed!`);
  } else {
    alert(`${spell.name} was not removed.`)
    console.log(spell);
  } 
}

quickAddSpell = async (string) => {
  if (string === "") {
    alert("Please enter a spell first!")
  } else {
    try {
      console.log(string);
      const resp = await fetch(`https://www.dnd5eapi.co/api/spells/${string}`);
      const data = await resp.json();

      resp.ok === true
      ? this.addSpell(data)
      : alert(`"${string}" was not found. Please check your spelling.`);
    } catch(e) {
      console.log(e);
    }    
  }
}

spellOnChange = (e) => {
  e.preventDefault()
  let spell = e.target.value
  spell = spell.replace(' ', '-').toLowerCase();
  console.log(spell);
  this.setState({
      spell: spell
  });
}


  render(){
    return (
        <Container className="main" >  
          <Router>
          
            <Banner />
            <Navbar bg="dark" variant="dark">
              <Link className="navbrand" to="/"><Navbar.Brand>D{'&'}D 5e Spells</Navbar.Brand></Link>
                <Nav.Link><Link className="nav" to="/">Home</Link></Nav.Link>
                <Nav.Link><Link className="nav" to="/library">Library</Link></Nav.Link>
                <Nav.Link><Link className="nav" to="/spellbook">Your SpellBook</Link></Nav.Link>
            </Navbar>
            <br/>

            <Switch>
              <Route path='/library'>
                <Library spells={this.state.spells} addSpell={this.addSpell} />
              </Route>
              <Route path='/spellbook'>
                <Spellbook spells={this.state.spellbook} list={false} removeSpell={this.removeSpell} 
                           spell={this.state.spell} quickAddSpell={this.quickAddSpell} spellOnChange={this.spellOnChange} />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          
          </Router>
        </Container>      
    );    
  }
}
