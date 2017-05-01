import React from 'react'
import { TransitionMotion, spring } from 'react-motion'

const willEnter = () => {
      return {opacity: 0}
    }

const willLeave = () => {
      return {opacity: 1}
    }
    
const getStyles = () => {
      return {opacity: spring(1, {stiffness: 60, damping: 15})}
    }

// Generate a styles array with a style object for each child.
const makeStyles = children => {
  if (Array.isArray(children)){
    return children.map((child, index) => (
      {key: `element-${index}`, style: getStyles(), data: child}
    )) 
  } else {
    // props.children is not an array if there is only one child.
    return [{key: 'element-0', style: getStyles(), data: children}]
  }
}

const FadeIn = props => {
  const { children } = props
      return (
      <TransitionMotion
        styles={children ? makeStyles(children) : []}
        willEnter={willEnter}
        willLeave={willLeave}
      >
        { interpolatedStyles => (
          <div>
          { interpolatedStyles.map(item => {
            const { key, style, data } = item   
            return (
            <div 
              key={key}
              style={{
                opacity: style.opacity
              }}>
                {data}
            </div>
            )
          })}
          </div>
        )}
      </TransitionMotion>
      )  
    } 

export default FadeIn