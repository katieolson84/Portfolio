import * as React from 'react';
import { Route, Switch } from 'react-router-dom';


//components
import Navigation from './components/navigation'
import about from './components/about'
import contact from './components/contact'

//Styling
import styled from 'styled-components'
import image from "./design/code_background.jpg"

const Container = styled.div`
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  width: 100%;

  .App{
    /* background-image: url(${image}); */
    width: 100%;
    height: 100vh;
    background-size: cover;
    display: flex;
    /* justify-content: center; */
    flex-flow: row wrap;
  }
  p{
    padding: 0;
    margin-left: 1%;
    font-family: 'Open Sans', sans-serif;
    font-size: 5rem;
  }
  .name-header{
    margin-top: 10%;
    font-size: 11rem;
  }
  .titles{
    font-size: 2.8rem;
    margin-top: 25%;
    margin-left: 1.5%;
    position: absolute;
    line-height: 3rem;
  }
`

function App() {
  return (
    <Container>
      <Navigation />
      <div className= "App">
      
      <p className="name-header">Katie Olson</p>
      <p className="titles">Full-Stack Developer. Author. Artist. Lover of Goats. Harbinger of Vermaculture.</p>
      <Switch>
        <Route path= "/about" component={about}/>
        <Route path= "/contact" component={contact}/>
        <Route path= "https://github.com/katieolson84" />
        <Route exact path="/" />
      </Switch>
      </div>
    </Container>
  );
}

export default App;
