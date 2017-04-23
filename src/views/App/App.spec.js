import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import AppView from './App'
import AppComponent from '../../components/App/App'

describe('<AppView />', () => {
  let wrapper
  beforeEach( () => {
    wrapper = shallow(<AppView/>)
  })


  it ('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render an <AppComponent />', () => {
    expect(wrapper.type()).to.equal(AppComponent)
  })
})