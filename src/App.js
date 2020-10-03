import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

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
import Homebrew from './components/homebrew';


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
    spellbook: [newObject, ...this.state.spellbook]
  });
  this.setState({spell: ""});
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

updateSpell = (index) => {
  let spellbookCopy = [...this.state.spellbook];
  spellbookCopy[index].prepared = ! spellbookCopy[index].prepared;
  let spell = spellbookCopy.splice(index, 1);
  this.setState({
    spellbook: spellbookCopy
  });
  spell[0].prepared === true
  ?
  this.setState({
    spellbook: [spell[0], ...spellbookCopy]
  })
  :
  this.setState({
    spellbook: [...spellbookCopy, spell[0]]
  })
}

quickAddSpell = async (string) => {
  string = string.replace(' ', '-').toLowerCase();
  if (string === "") {
    alert("Please enter a spell first!")
  } else {
    try {
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
  this.setState({
      spell: e.target.value
  });
}


  render(){
    return (
        <Container className="main" >  
          <Router>
          
            <Banner />
            <Navbar bg="dark" variant="dark">
              <Link className="navbrand" to="/"><Navbar.Brand>D{'&'}D 5e Spellbook</Navbar.Brand></Link>
                <Nav.Link><Link className="nav" to="/">Home</Link></Nav.Link>
                <Nav.Link><Link className="nav" to="/library">Library</Link></Nav.Link>
                <Nav.Link><Link className="nav" to="/spellbook">Your SpellBook</Link></Nav.Link>
                <Nav.Link><Link className="nav" to="/homebrew">Homebrew</Link></Nav.Link>
            </Navbar>
            <br/>

            <Switch>
              <Route path='/homebrew'>
                <Homebrew addSpell={this.addSpell} />
              </Route>
              <Route path='/library'>
                <Library spells={this.state.spells} addSpell={this.addSpell} />
              </Route>
              <Route path='/spellbook'>
                <Spellbook spells={this.state.spellbook} list={false} removeSpell={this.removeSpell} updateSpell={this.updateSpell} 
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
