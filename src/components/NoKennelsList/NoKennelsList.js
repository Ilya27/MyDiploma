import React, { Component } from 'react'
import classes from './NoKennelsList.module.css'


class NoKennelsList extends Component {

    render() {
        return (
            <div className={classes.NoKennelsList}>
                <h3>No more loud kennels or cages</h3>
                <ul>
                    <li>
                        <h4>Loving care in your sitter's home</h4>
                        <p>It's easy to find your dog boarding in
                             your city—in fact, 92% of pet parents live within
                              a short drive of a sitter on DogWalker.</p>
                    </li>
                    <li>
                        <h4>Dog sitters you can trust</h4>
                        <p>Every sitter on the site has been hand-reviewed and
                             approved by the DogWalker team, and 95% of stays have
                              received a perfect 5-star rating.</p>
                    </li>
                    <li>
                        <h4>Affordable, personalized pet care</h4>
                        <p>Worried that dog boarding in a sitter’s home
                             will be more expensive than kennels? Find out
                              how much dog sitters near you typically cost.</p>
                    </li>
                    <li>
                        <h4>Convenient Meet & Greet tool</h4>
                        <p>Meet your dog's perfect match before you book.
                             Schedule a free in-person Meet & Greet,
                              right from your DogWalker inbox.</p>
                    </li>
                    <li>
                        <h4>Cute photo updates</h4>
                        <p>Millions of adorable photos have been sent through DogWalker!
                             Receive a pic of your dog enjoying a round of fetch.</p>
                    </li>
                </ul>
            </div>
        );
    }
}


export default NoKennelsList
