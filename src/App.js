import React from 'react';
import './App.css';
import Navbar from './navbar';
import Form from './form';
import Moment from './moment';
import Section from './section';
import Cards from './cards';
import Clients from './clients';
import PlanChoise from './planchoise';
import Carousel from './carousel';
import Flip from './flip';

function App() {
  return (
    <React.Fragment>
      <Navbar>
        holis mi amor
      </Navbar>
      <Form>
        holis mi amor
      </Form>
      <Moment saludo = "holis mi amor">
        natasha mi amor
      </Moment>
      <Section saludo = "holis mi amor">
        natasha mi amor
      </Section>
      <Cards>
    holis mi amor
      </Cards>
      <Clients/>
      <PlanChoise/>
      <Carousel/>
      <Flip/>
    </React.Fragment>
  );
  }

export default App;
