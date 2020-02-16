import React, { Component } from 'react'
import classes from './Footer.module.css'
import FooterTop from '../FooterComponents/FooterTop/FooterTop'
import FooterMain from '../FooterComponents/FooterMain/FooterMain'
import FooterBottom from '../FooterComponents/FooterBottom/FooterBottom'


class Footer extends Component {
	render() {
		return (
            <div className={classes.Footer}>
            <div className={classes.Footer_cont}>
                <FooterTop />
                <FooterMain />
            </div>    
                <FooterBottom />
            </div>
		)
	}
}

export default Footer