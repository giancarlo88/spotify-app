import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from './App'
import Form from '../Form/Form'
import Results from '../Results/Results'

describe('<AppComponent />', () => {
  let wrapper
  beforeEach( () => {
    wrapper = shallow(<App/>)
  })

  it ('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <div />', () => {
    expect(wrapper.type()).to.equal('div')
  })

  it('should render a <Form /> component', () => {
    expect(wrapper.find(Form).length).to.equal(1)
  })

  it('should render a <Results /> component', () => {
    expect(wrapper.find(Results).length).to.equal(1)
  })
})