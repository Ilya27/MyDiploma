import React, {Component} from 'react';
import classes from './ProgressLine.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch,faMobileAlt,faUserShield } from '@fortawesome/free-solid-svg-icons';


library.add(faSearch,faMobileAlt,faUserShield )


class ProgressLine extends Component{
  constructor(props) {
    super(props)

    this.state = {
      step1: false,
      step2: false,
      step3: false,
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }
  handleOnClick=step=> event=>{
    this.setState({ [step]:!this.state[step] });
  }

  render(){
    return(
      <div className={classes.progressLine}>
      <ul className={classes.progressbar}>
          <li onClick={this.handleOnClick('step1')}  className={this.state.step1 ? classes.active: null} >
            <FontAwesomeIcon className={classes.fontAwesome} icon='search' /> <br/>
              <h3>Search</h3> <br/>Read verified reviews and pick  <br/> the perfect sitter.</li>
          <li onClick={this.handleOnClick('step2')}  className={this.state.step2 ? classes.active: null} >
            <FontAwesomeIcon className={classes.fontAwesome} icon='mobile-alt' /> <br/>
              <h3>Book & pay <br/>on DogWalker</h3>Book and pay securely<br/> through the website or app.</li>
          <li onClick={this.handleOnClick('step3')}  className={this.state.step3 ? classes.active: null} >
            <FontAwesomeIcon className={classes.fontAwesome} icon='user-shield' /> <br/>
              <h3>Relax</h3> <br/>Get the DogWalker<br/> Guarantee, 24/7 support,<br/> and reservation protection.</li>
        </ul>
      </div>
    )
  }
}

export default ProgressLine
