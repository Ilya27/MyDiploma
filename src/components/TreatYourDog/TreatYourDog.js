import React, { Component } from 'react'
import classes from './TreatYourDog.module.css'


class TreatYourDog extends Component {

    render() {
        return (
            <div className={classes.TreatYourDog} id='link'>
                <h3>We'll treat your dog like family</h3>
                <h5>Connect with a 5-star sitter who'll welcome your dog into their home when you're out of town—whether
                         it’s <a href='#link'>just for the weekend</a> or <a href='#link'>over a <br /> few weeks</a>. Dog boarding is great for:</h5>
                <ul>
                    <li>Dogs of all ages and abilities, including <a href='#link'>puppies</a></li>
                    <li>Pet parents looking for a <a href='#link'>safe, loving alternative to a kennel</a></li>
                    <li>Dogs who'd love to socialize with their sitter's pets</li>
                </ul>
            </div>
        );
    }
}
export default TreatYourDog