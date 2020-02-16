import React, { Component } from 'react'
import classes from './DogBoarding.module.css'
import ListCities from '../ListCities/ListCities'
import JoinUs from '../JoinUs/JoinUs'
import DogWalkerBack from '../DogWalkerBack/DogWalkerBack';
import NoKennelsList from '../NoKennelsList/NoKennelsList';
import TreatYourDog from '../TreatYourDog/TreatYourDog';
import HeaderDogBoarding from '../DogBoardingComponents/HeaderDogBoarding/HeaderDogBoarding';

class DogBoarding extends Component {
    render() {
        return (
            <div className={classes.DogBoarding}>
                <HeaderDogBoarding />
                <TreatYourDog />
                <NoKennelsList />
                <DogWalkerBack />
                <ListCities />
                <JoinUs />
            </div>
        )
    }
}

export default DogBoarding