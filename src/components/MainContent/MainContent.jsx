import React from 'react';
import classes from './MainContent.module.css';
import SearchForm from './SearchForm/SearchForm';
import ServicesForEveryDogAndCat from './ServicesForEveryDogAndCat/ServicesForEveryDogAndCat';
import HowItWorks from './HowItWorks/HowItWorks';


const MainContent =(props)=>{
  return(
    <div>
      <div className={classes.localLovingPetCare}>
        <h1 className={classes.h1}>Local, Loving Pet Care </h1>
        <h2 className={classes.h2}>Book trusted sitters and dog walkers who'll <br/>treat your pets like family.</h2>
        <SearchForm history={props.history}/>
      </div>
      <ServicesForEveryDogAndCat />
      <div className={classes.howItWorksBox}>
      <HowItWorks />
      </div>
    </div>
  )
}


export default MainContent
