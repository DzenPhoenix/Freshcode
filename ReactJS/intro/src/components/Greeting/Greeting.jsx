import React from 'react';
import styles from './style.module.css';

const Greeting = props => {
  const { name, isGreeting = true,colorpage } = props;
  return(
    <div style={{color: {colorpage}}}>
      {isGreeting?'Hello':'By'}, {name} !!!
    </div>
  )
};

export default Greeting;