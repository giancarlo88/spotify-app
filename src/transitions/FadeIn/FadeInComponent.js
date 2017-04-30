import React, { Component } from 'react'
import { TransitionMotion, spring } from 'react-motion'

const willEnter = () => {
      return {opacity: 0}
    }

const willLeave = () => {
    }
    
const getStyles = () => {
      return {opacity: spring(1, {stiffness: 60, damping: 15})}
    }

const FadeIn = props => {
      console.log(props.children)
      return (
      <TransitionMotion
        styles={
           props.children ? [{key: 'a', style: getStyles(), data: props.children}] : [] 
        }
        willEnter={willEnter}
        willLeave={willLeave}
      >
        { interpolatedStyles => (
          <div>
          { interpolatedStyles.map(({key, style, data}) => {
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