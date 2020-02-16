import React, { Component } from 'react'
import classes from './FooterMain.module.css'
import FooterForm from '../FooterForm/FooterForm';
import FooterSocial from '../FooterSocial/FooterSocial';

class FooterMain extends Component {
    render() {
        return (
            <div className={classes.FooterMain}>
                <FooterForm />
                <FooterSocial />
            </div>
        )
    }
}

export default FooterMain