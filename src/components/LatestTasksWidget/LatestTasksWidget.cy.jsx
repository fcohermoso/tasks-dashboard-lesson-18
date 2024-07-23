import React from 'react'
import LatestTasksWidget from './LatestTasksWidget'

describe('<LatestTasksWidget />', () => {
  beforeEach('renders', () => {    
    cy.mount(<LatestTasksWidget />)
  });

  it("Muestra cinco elementos", () => {
    cy.get(".LatestTasksWidgetTable tbody tr").should("have.length", 5)
  
    cy.get(".LatestTasksWidgetTable tbody tr")
      .last()
      .find("td")
      .last()
      .should("have.text", "Pending")
  })
})