import React from 'react';
import { mount } from '@cypress/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../../src/App'; // App bileşeninizin doğru yolunu kullanın

describe('My First Test', () => {
  it('Visits the React App', () => {
    mount(
      <Router>
        <App />
      </Router>
    );
    cy.visit('http://localhost:3000');
    cy.contains('Learn React');
  });
});
