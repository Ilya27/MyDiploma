import React from 'react';
import classes from './HowItWorks.module.css';
import ProgressLine from './ProgressLine/ProgressLine'

const HowItWorks=()=>{
  return(
    
        <div className={classes.howItWorksContainer}>
          <div className={classes.header}>
            <h3>We're the treat-your-dog-like-family dog people</h3>
          </div>
          <ProgressLine />
        </div>
  )
}


export default HowItWorks
