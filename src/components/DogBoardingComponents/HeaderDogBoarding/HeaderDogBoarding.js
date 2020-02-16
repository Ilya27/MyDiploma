import React, { Component } from 'react'
import classes from '../HeaderDogBoarding/HeaderDogBoarding.module.css'
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import setSearchParam from '../../../store/actions/setSearchParam';
import FetchMarkers from '../../../store/actions/fetchMarkers';
import GetUid from '../../../store/actions/getUid';

class HeaderDogBoardingBase extends Component {
    onClick = () => {
        const { setSearchParam, FetchMarkers, GetUid } = this.props;
        setSearchParam({
            services: "Dog Boarding",
            city: "",
            regularity: "One Time",
            startDate: "",
            endDate: "",
            dogSizes: [],
            daysOfTheWeek: [],
            salary: [10, 100]
        })
        FetchMarkers({})
        GetUid([])
        this.props.history.push("/search")
    }

    render() {
        return (
            <div className={classes.HeaderDogBoarding}>
            <div className={classes.content}>
                <h1>No more kennels—the next level of<br /> dog boarding is here</h1>
                <h4>Over 65,000 sitters have listed their services on DogWalker, making it easy to<br />
                    discover your dog's home away from home</h4>

                <div><span onClick={this.onClick} className={classes.headerButton}>Book Dog Boarding</span></div>
            </div>
        </div>
        );
    }
}

const HeaderDogBoarding = compose(
    withRouter,
    connect(null, { setSearchParam, FetchMarkers, GetUid })
)(HeaderDogBoardingBase)

export default HeaderDogBoarding
