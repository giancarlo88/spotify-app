import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import AppContainer from './App'
import AppComponent from '../../components/App/App'

describe('<App />', () => {
  let wrapper
  beforeEach( () => {
    wrapper = shallow(<AppContainer/>)
  })


  it ('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render an <AppComponent />', () => {
    expect(wrapper.type()).to.equal(AppComponent)
  })
})

describe('<App /> (mount)', () => {
  let wrapper
  beforeEach( () => {
    wrapper = mount(<AppContainer/>)
  })

  it('should update the query state when the input field has text entered into it', () => {
      const query = 'Madonna'
      wrapper.find('input').simulate('change', { target: { value: query } } )
      expect(wrapper.state('query')).to.equal(query)
  })

  it('should call handleQueryUpdate when the text input is changed', () => {
    let component = wrapper.instance()
    const handleQueryUpdate = sinon.spy(component, 'handleQueryUpdate')
    // Update wrapper to ensure spy is bound to method
    wrapper.update()
    wrapper.find('input').simulate('change', { target: { value: 'Madonna' } } )
    expect(handleQueryUpdate.callCount).to.be.greaterThan(0)
 })
})