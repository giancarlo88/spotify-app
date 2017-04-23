import React from 'react'
import PropTypes from 'prop-types'
import './Form.css'

const Form = props => {
  const { handleQueryUpdate } = props
  return (
    <form className='search'>
      <input 
        type='text'
        onChange={handleQueryUpdate}
      />
    </form>
  )
}

Form.propTypes = { 
  handleQueryUpdate: PropTypes.func
}

export default Form