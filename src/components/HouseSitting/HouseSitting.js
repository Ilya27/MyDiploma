import React, { Component } from 'react'
import classes from './HouseSitting.module.css'
import ListCities from '../ListCities/ListCities'
import JoinUs from '../JoinUs/JoinUs'
import DogWalkerBack from '../DogWalkerBack/DogWalkerBack';
import NoKennelsList from '../NoKennelsList/NoKennelsList';
import TreatYourDog from '../TreatYourDog/TreatYourDog';
import HeaderHouseSitting from '../HouseSittingComponents/HeaderHouseSitting/HeaderHouseSitting'

class HouseSitting extends Component {
    render() {
        return (
            <div className={classes.HouseSitting}>
                <HeaderHouseSitting />
                <TreatYourDog />
                <NoKennelsList />
                <DogWalkerBack />
                <ListCities />
                <JoinUs />
            </div>
        )
    }
}

export default HouseSitting