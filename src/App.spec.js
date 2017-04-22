import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from './App'

describe('<App />', () => {
  let wrapper
  beforeEach( () => {
    wrapper = shallow(<App/>)
  })
  it ('should exist', () => {
    expect(wrapper).to.exist
  })
})