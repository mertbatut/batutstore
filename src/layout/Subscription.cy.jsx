import React from 'react'
import Subscription from './Subscription'

describe('<Subscription />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Subscription />)
  })
})