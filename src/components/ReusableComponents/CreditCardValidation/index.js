import React from 'react'
import classes from '../CreditCardValidation/CreditCardValidation.module.css'
import { Number, Cvc, Expiration } from "react-credit-card-primitives";

class CreditCardValidation extends React.Component {
  state = {
    restrictAmex: false,
    maskedCvc: false
  }

  toggleAmex = () => this.setState({ restrictAmex: !this.state.restrictAmex })

  render() {
    return <div className={classes.CreditCardValidation}>
      <style dangerouslySetInnerHTML={{ __html: 'div { word-break: break-all; }' }} />
      <Number
        masked
        onChange={console.log.bind(console, 'Number.onChange')}
        cardTypes={this.state.restrictAmex ? ['americanExpress'] : []}
        render={({ value, valid, type, getInputProps }) => (
          <div>
            <input {...getInputProps()} maxLength='19' required />
            <div className={classes.paymentLabel}>
              {type === 'Visa' ? <i className="fa fa-cc-visa" /> : type === 'Mastercard' ? <i className="fa fa-cc-mastercard" /> : <small>(only Visa or Mastercard)</small>}
            </div>

          </div>
        )} />

      <Cvc
        masked={this.state.maskedCvc}
        onChange={console.log.bind(console, 'Cvc.onChange')}
        cardType={this.state.restrictAmex ? 'americanExpress' : undefined}
        render={({ getInputProps, value, valid }) => (
          <div>
            <label style={{ display: 'block', margin: '8px' }}>
              <input
                type='checkbox'
                checked={this.state.maskedCvc}
                onChange={() => this.setState({ maskedCvc: !this.state.maskedCvc })}
                required
              />
              <span className={classes.MaskCVC}>mask cvc</span>
            </label>
            <input {...getInputProps()} maxLength='3' />
          </div>
        )} />

      <Expiration
        onChange={console.log.bind(console, 'Expiration.onChange')}
        render={({ getInputProps, value, valid, error, month, year }) => (
          <div>
            <input {...getInputProps()} maxLength='7' />
            <div>{error === 'err_monthyear' ?
              <strong>Please, fill in these fields.</strong> : error === 'err_month' ?
                <span className={classes.wrong}>Incorrect month</span> : error === 'err_year' ?
                  <span className={classes.wrong}>Incorrect year</span> : error === 'err_pastdate' ?
                    <span className={classes.wrong}>Error pastdate</span> : ''}</div>
          </div>
        )} />
    </div>
  }
}

export default CreditCardValidation