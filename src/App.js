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
import Suscri from './suscri';
import Condition from './condition';

function App() {
  return (
    <React.Fragment>
      <Navbar>
      </Navbar>
      <Form>
      </Form>
      <Moment>
      </Moment>
      <Section>
      </Section>
      <Cards>
      </Cards>
      <Clients/>
      <PlanChoise/>
      <Carousel/>
      <Flip/>
      <Suscri/>
      <Condition/>
    </React.Fragment>
  );
  }

export default App;
