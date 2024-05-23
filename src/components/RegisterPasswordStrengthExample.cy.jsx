import React from 'react'
import { PasswordStrengthExample } from './Register'

describe('<PasswordStrengthExample />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PasswordStrengthExample />)
  })
})