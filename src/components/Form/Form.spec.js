import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Form from './Form'

describe('<Form />', () => {
  let wrapper
  beforeEach( () => {
    wrapper = shallow(<Form/>)
  })


  it ('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <form />', () => {
    expect(wrapper.type()).to.equal('form')
  })
})